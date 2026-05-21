// ── Reminders ──
function RemindersPage() {
  const token = sessionStorage.getItem("adminToken");
  const [stats,        setStats]        = useState({ sentToday: 0, pending: 0, overdue: 0 });
  const [activeTab,    setActiveTab]    = useState(null);
  const [tabData,      setTabData]      = useState([]);
  const [statsLoading, setStatsLoading] = useState(true);
  const [tabLoading,   setTabLoading]   = useState(false);
  const [sendingId,    setSendingId]    = useState(null);
  const [sendFeedback, setSendFeedback] = useState({});

  // WhatsApp state
  const [waContacts,  setWaContacts]  = useState([]);
  const [waLoading,   setWaLoading]   = useState(false);
  const [waFilter,    setWaFilter]    = useState("all");
  const [waSearch,    setWaSearch]    = useState("");
  const [waSelected,  setWaSelected]  = useState(null);
  const [waMsg,       setWaMsg]       = useState("");
  const [waSending,   setWaSending]   = useState(false);
  const [waFeedback,  setWaFeedback]  = useState({});
  const [bulkModal,   setBulkModal]   = useState(false);
  const [bulkMsg,     setBulkMsg]     = useState("");
  const [bulkFilter,  setBulkFilter]  = useState("all");
  const [bulkSending, setBulkSending] = useState(false);
  const [bulkResult,  setBulkResult]  = useState(null);

  const fetchStats = async () => {
    setStatsLoading(true);
    try {
      const res  = await fetch(`${ADMIN_API}/api/reminders/stats`, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      if (data.success) setStats(data.data);
    } catch (e) { console.error(e); }
    finally { setStatsLoading(false); }
  };

  useEffect(() => { fetchStats(); }, []);

  const openTab = async (tabKey) => {
    setActiveTab(tabKey);
    setTabData([]);
    setSendFeedback({});
    if (tabKey === "whatsapp") {
      setWaLoading(true); setWaContacts([]); setWaSelected(null);
      try {
        const res  = await fetch(`${ADMIN_API}/api/reminders/whatsapp/contacts`, { headers: { Authorization: `Bearer ${token}` } });
        const data = await res.json();
        if (data.success) setWaContacts(data.data || []);
      } catch (e) { console.error(e); }
      finally { setWaLoading(false); }
      return;
    }
    setTabLoading(true);
    try {
      const url = tabKey === "sentToday"
        ? `${ADMIN_API}/api/reminders/sent-today`
        : `${ADMIN_API}/api/reminders/pending-list`;
      const res  = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      if (data.success) setTabData(data.data || []);
    } catch (e) { console.error(e); }
    finally { setTabLoading(false); }
  };

  const filteredList = activeTab === "pending"
    ? tabData.filter(p => p._computedStatus === "pending" || (p.dueDate && new Date(p.dueDate) >= new Date()))
    : activeTab === "overdue"
    ? tabData.filter(p => p._computedStatus === "overdue" || (p.dueDate && new Date(p.dueDate) < new Date()))
    : tabData;

  const handleSend = async (paymentId) => {
    setSendingId(paymentId);
    try {
      const res  = await fetch(`${ADMIN_API}/api/reminders/send/${paymentId}`, { method: "POST", headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      setSendFeedback(prev => ({ ...prev, [paymentId]: data.success ? "sent" : "failed" }));
      if (data.success) await fetchStats();
    } catch { setSendFeedback(prev => ({ ...prev, [paymentId]: "failed" })); }
    finally  { setSendingId(null); }
  };

  const handleWASend = async (contact) => {
    setWaSending(true);
    const isOverdue = contact._isOverdue;
    const defMsg = `Dear ${contact.user?.name}, your Gold Chit payment of Rs.${(contact.amount||0).toLocaleString()} ` +
      `(Scheme ${contact.scheme?.schemeId}, Month ${contact.monthNumber}) is ${isOverdue ? "OVERDUE" : "due soon"}. ` +
      `Please pay immediately. - SkyUp Digital Solution`;
    try {
      const res  = await fetch(`${ADMIN_API}/api/reminders/whatsapp/send`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId: contact._id, customMessage: waMsg || defMsg }),
      });
      const data = await res.json();
      setWaFeedback(prev => ({ ...prev, [contact._id]: data.success ? "sent" : "failed" }));
      setWaMsg("");
    } catch { setWaFeedback(prev => ({ ...prev, [contact._id]: "failed" })); }
    finally { setWaSending(false); }
  };

  const handleWABulk = async () => {
    setBulkSending(true); setBulkResult(null);
    try {
      const res  = await fetch(`${ADMIN_API}/api/reminders/whatsapp/bulk`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ customMessage: bulkMsg || undefined, filter: bulkFilter }),
      });
      const data = await res.json();
      setBulkResult(data);
    } catch (e) { setBulkResult({ success: false, error: e.message }); }
    finally { setBulkSending(false); }
  };

  const waFiltered = waContacts.filter(c => {
    const q = waSearch.toLowerCase();
    const match = !q || c.user?.name?.toLowerCase().includes(q) || c.user?.phone?.includes(q);
    if (!match) return false;
    if (waFilter === "overdue")  return c._isOverdue;
    if (waFilter === "pending")  return !c._isOverdue;
    return true;
  });

  const statCards = [
    { key: "sentToday", label: "Sent Today", value: stats.sentToday, color: "#1A7FD4", activeBg: "#EEF6FD", activeBorder: "#93C5FD", icon: "📤" },
    { key: "pending",   label: "Pending",    value: stats.pending,   color: "#D97706", activeBg: "#FFFBEB", activeBorder: "#FCD34D", icon: "⏳", sub: "Due in next 7 days" },
    { key: "overdue",   label: "Overdue",    value: stats.overdue,   color: "#EF4444", activeBg: "#FEF2F2", activeBorder: "#FCA5A5", icon: "🚨" },
  ];

  const panelMeta = {
    sentToday: { title: "📤 SMS Sent Today",                empty: "No SMS reminders were sent today.",       emptyIcon: "📭" },
    pending:   { title: "⏳ Pending Payments (Next 7 Days)", empty: "No pending payments in the next 7 days.", emptyIcon: "🎉" },
    overdue:   { title: "🚨 Overdue Payments",              empty: "No overdue payments — great job!",         emptyIcon: "✅" },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* ── Top row: 3 stat cards + WhatsApp button ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: 16, alignItems: "stretch" }}>
        {statCards.map(s => {
          const isActive = activeTab === s.key;
          return (
            <button key={s.key}
              onClick={() => activeTab === s.key ? setActiveTab(null) : openTab(s.key)}
              style={{
                background: isActive ? s.activeBg : "#fff", borderRadius: 14, padding: "18px 22px",
                boxShadow: isActive ? `0 0 0 2px ${s.activeBorder}, 0 4px 16px rgba(0,0,0,0.10)` : "0 1px 8px rgba(0,0,0,0.07)",
                border: `2px solid ${isActive ? s.color : "#F1F5F9"}`, textAlign: "left", cursor: "pointer",
                transition: "all 0.18s ease", transform: isActive ? "translateY(-2px)" : "none", outline: "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 16 }}>{s.icon}</span>
                  <span style={{ fontSize: 11, color: isActive ? s.color : "#64748B", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{s.label}</span>
                </div>
                {isActive && <span style={{ fontSize: 10, fontWeight: 700, color: s.color, background: s.activeBg, border: `1px solid ${s.activeBorder}`, borderRadius: 20, padding: "2px 8px" }}>ACTIVE ▼</span>}
              </div>
              <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 36, fontWeight: 800, color: s.color, lineHeight: 1 }}>{statsLoading ? "—" : s.value}</div>
              {s.sub && <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 6 }}>{s.sub}</div>}
              {!isActive && <div style={{ fontSize: 10, color: s.color, marginTop: 8, fontWeight: 600, opacity: 0.7 }}>Click to view →</div>}
            </button>
          );
        })}

        {/* WhatsApp Card */}
        <button
          onClick={() => activeTab === "whatsapp" ? setActiveTab(null) : openTab("whatsapp")}
          style={{
            background: activeTab === "whatsapp" ? "#ECFDF5" : "#fff", borderRadius: 14, padding: "18px 22px",
            boxShadow: activeTab === "whatsapp" ? "0 0 0 2px #6EE7B7, 0 4px 16px rgba(0,0,0,0.10)" : "0 1px 8px rgba(0,0,0,0.07)",
            border: `2px solid ${activeTab === "whatsapp" ? "#25D366" : "#F1F5F9"}`,
            textAlign: "left", cursor: "pointer", transition: "all 0.18s ease",
            transform: activeTab === "whatsapp" ? "translateY(-2px)" : "none", outline: "none", minWidth: 160,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#25D366"/>
                <path d="M23.5 8.5C21.6 6.6 19.1 5.5 16.4 5.5C10.9 5.5 6.4 10 6.4 15.5C6.4 17.3 6.9 19.1 7.8 20.6L6.3 26L11.9 24.6C13.4 25.4 15.1 25.8 16.9 25.8H16.4C21.9 25.8 26.5 21.3 26.5 15.8C26.5 13.1 25.4 10.4 23.5 8.5ZM16.4 24.1H16.1C14.5 24.1 12.9 23.6 11.6 22.7L11.3 22.5L8.3 23.3L9.1 20.4L8.9 20.1C8 18.7 7.5 17.1 7.5 15.5C7.5 10.7 11.6 6.7 16.4 6.7C18.7 6.7 20.9 7.6 22.5 9.2C24.1 10.8 25.1 13 25 15.4C25.2 20.3 21.2 24.1 16.4 24.1ZM21.2 17.8C20.9 17.7 19.4 16.9 19.1 16.8C18.8 16.7 18.6 16.7 18.4 17C18.2 17.3 17.5 18 17.4 18.2C17.2 18.4 17.1 18.4 16.8 18.3C16.5 18.2 15.5 17.8 14.3 16.8C13.4 16 12.8 15.1 12.6 14.8C12.4 14.5 12.6 14.3 12.8 14.1C12.9 14 13.1 13.8 13.2 13.6C13.3 13.4 13.4 13.3 13.5 13.1C13.6 12.9 13.5 12.7 13.4 12.6C13.3 12.5 12.7 10.9 12.4 10.3C12.1 9.7 11.9 9.7 11.7 9.7H11.2C11 9.7 10.7 9.8 10.4 10.1C10.1 10.4 9.3 11.1 9.3 12.7C9.3 14.3 10.4 15.8 10.6 16C10.8 16.2 12.7 19.1 15.7 20.5C16.3 20.8 16.8 21 17.2 21.1C17.8 21.3 18.4 21.3 18.9 21.2C19.4 21.1 20.5 20.5 20.8 19.8C21 19.1 21 18.6 20.9 18.5C20.8 18.2 20.6 18.1 20.3 18L21.2 17.8Z" fill="white"/>
              </svg>
              <span style={{ fontSize: 11, color: activeTab === "whatsapp" ? "#25D366" : "#64748B", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>WhatsApp</span>
            </div>
            {activeTab === "whatsapp" && <span style={{ fontSize: 10, fontWeight: 700, color: "#25D366", background: "#ECFDF5", border: "1px solid #6EE7B7", borderRadius: 20, padding: "2px 8px" }}>ACTIVE ▼</span>}
          </div>
          <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 700, color: "#25D366", lineHeight: 1.4 }}>
            Bulk Send<br /><span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 500 }}>via MSG91</span>
          </div>
          {activeTab !== "whatsapp" && <div style={{ fontSize: 10, color: "#25D366", marginTop: 10, fontWeight: 600, opacity: 0.8 }}>Click to open →</div>}
        </button>
      </div>

      {/* ── WhatsApp Panel ── */}
      {activeTab === "whatsapp" && (
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #E2E8F0", boxShadow: "0 2px 16px rgba(0,0,0,0.08)", overflow: "hidden", display: "flex", height: 560 }}>

          {/* LEFT SIDEBAR */}
          <div style={{ width: 290, borderRight: "1px solid #E2E8F0", display: "flex", flexDirection: "column", background: "#FAFAFA" }}>
            <div style={{ padding: "14px 12px 8px" }}>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#94A3B8", fontSize: 14 }}>🔍</span>
                <input value={waSearch} onChange={e => setWaSearch(e.target.value)} placeholder="Search by name or number..."
                  style={{ width: "100%", padding: "8px 10px 8px 32px", border: "1px solid #E2E8F0", borderRadius: 8, fontSize: 13, outline: "none", background: "#fff", boxSizing: "border-box" }} />
              </div>
            </div>
            <div style={{ display: "flex", padding: "0 12px 8px", gap: 4 }}>
              {[["all","All"], ["pending","Pending"], ["overdue","Overdue"]].map(([v, l]) => (
                <button key={v} onClick={() => setWaFilter(v)} style={{
                  flex: 1, padding: "5px 0", fontSize: 11, fontWeight: 600,
                  background: waFilter === v ? (v === "overdue" ? "#FEF2F2" : v === "pending" ? "#FFFBEB" : "#ECFDF5") : "none",
                  border: `1px solid ${waFilter === v ? (v === "overdue" ? "#FECACA" : v === "pending" ? "#FDE68A" : "#6EE7B7") : "#E2E8F0"}`,
                  borderRadius: 6, cursor: "pointer",
                  color: waFilter === v ? (v === "overdue" ? "#EF4444" : v === "pending" ? "#D97706" : "#25D366") : "#64748B",
                }}>{l}</button>
              ))}
            </div>
            <div style={{ padding: "0 12px 10px" }}>
              <button onClick={() => setBulkModal(true)} style={{
                width: "100%", padding: "10px 0", background: "#25D366", color: "#fff", border: "none",
                borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                boxShadow: "0 2px 8px rgba(37,211,102,0.35)",
              }}>
                <span>👥</span> Bulk WhatsApp
              </button>
            </div>
            <div style={{ padding: "0 12px 6px", borderBottom: "1px solid #E2E8F0" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#25D366", borderBottom: "2px solid #25D366", paddingBottom: 4 }}>
                Chats ({waFiltered.length})
              </span>
            </div>
            <div style={{ flex: 1, overflowY: "auto" }}>
              {waLoading ? (
                <div style={{ padding: "32px 0", textAlign: "center", color: "#94A3B8", fontSize: 13 }}>Loading…</div>
              ) : waFiltered.length === 0 ? (
                <div style={{ padding: "32px 12px", textAlign: "center", color: "#94A3B8", fontSize: 13 }}>No contacts found</div>
              ) : waFiltered.map(c => {
                const isSelected = waSelected?._id === c._id;
                const isOver     = c._isOverdue;
                const fb         = waFeedback[c._id];
                return (
                  <div key={c._id} onClick={() => { setWaSelected(c); setWaMsg(""); }}
                    style={{
                      padding: "12px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10,
                      background: isSelected ? "#ECFDF5" : "transparent",
                      borderLeft: isSelected ? "3px solid #25D366" : "3px solid transparent",
                      borderBottom: "1px solid #F1F5F9", transition: "background 0.12s",
                    }}
                  >
                    <Avatar name={c.user?.name || "?"} bg={isOver ? "linear-gradient(135deg,#EF4444,#F87171)" : "linear-gradient(135deg,#25D366,#128C7E)"} size={36} fontSize={13} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 13, color: "#0B1F3E", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.user?.name || "Unknown"}</div>
                      <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 1 }}>{c.user?.phone}</div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: isOver ? "#EF4444" : "#D97706" }}>{isOver ? "🚨 Overdue" : "⏳ Pending"}</div>
                      {fb && <div style={{ fontSize: 10, color: fb === "sent" ? "#16A34A" : "#DC2626", marginTop: 2, fontWeight: 700 }}>{fb === "sent" ? "✅ Sent" : "❌ Failed"}</div>}
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: isOver ? "#EF4444" : "#D97706", marginLeft: "auto", marginTop: 4 }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {waSelected ? (
              <>
                <div style={{ padding: "14px 20px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: 12, background: "#fff" }}>
                  <Avatar name={waSelected.user?.name || "?"} bg={waSelected._isOverdue ? "linear-gradient(135deg,#EF4444,#F87171)" : "linear-gradient(135deg,#25D366,#128C7E)"} size={40} fontSize={14} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "#0B1F3E" }}>{waSelected.user?.name}</div>
                    <div style={{ fontSize: 12, color: "#94A3B8" }}>+91 {waSelected.user?.phone} · {waSelected.scheme?.schemeId} · Month {waSelected.monthNumber}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 800, color: "#0B1F3E", fontSize: 16 }}>₹{(waSelected.amount||0).toLocaleString("en-IN")}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: waSelected._isOverdue ? "#EF4444" : "#D97706", marginTop: 2 }}>{waSelected._isOverdue ? "🚨 OVERDUE" : "⏳ Pending"}</div>
                  </div>
                </div>
                <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px", background: "#E5DDD5", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                  <div style={{ alignSelf: "flex-end", maxWidth: "80%" }}>
                    <div style={{ background: "#DCF8C6", borderRadius: "12px 12px 2px 12px", padding: "10px 14px", boxShadow: "0 1px 4px rgba(0,0,0,0.12)", fontSize: 13, color: "#1A1A1A", lineHeight: 1.5 }}>
                      {waMsg || (`Dear ${waSelected.user?.name}, your Gold Chit payment of ₹${(waSelected.amount||0).toLocaleString("en-IN")} (Scheme ${waSelected.scheme?.schemeId}, Month ${waSelected.monthNumber}) is ${waSelected._isOverdue ? "OVERDUE" : "due soon"}. Please pay immediately. - SkyUp Digital Solution`)}
                    </div>
                    <div style={{ fontSize: 10, color: "#94A3B8", textAlign: "right", marginTop: 3 }}>Preview · via MSG91 WhatsApp</div>
                  </div>
                  {waFeedback[waSelected._id] && (
                    <div style={{ alignSelf: "center", marginTop: 12, background: waFeedback[waSelected._id] === "sent" ? "#DCFCE7" : "#FEE2E2", color: waFeedback[waSelected._id] === "sent" ? "#16A34A" : "#DC2626", padding: "6px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>
                      {waFeedback[waSelected._id] === "sent" ? "✅ WhatsApp Sent" : "❌ Failed to Send"}
                    </div>
                  )}
                </div>
                <div style={{ padding: "12px 20px", borderTop: "1px solid #E2E8F0", background: "#F0F0F0", display: "flex", gap: 10, alignItems: "flex-end" }}>
                  <textarea value={waMsg} onChange={e => setWaMsg(e.target.value)}
                    placeholder="Type a custom message (leave empty for default)…" rows={2}
                    style={{ flex: 1, resize: "none", border: "1px solid #E2E8F0", borderRadius: 10, padding: "10px 14px", fontSize: 13, outline: "none", background: "#fff", fontFamily: "inherit" }} />
                  <button onClick={() => handleWASend(waSelected)} disabled={waSending}
                    style={{ background: waSending ? "#94A3B8" : "#25D366", color: "#fff", border: "none", borderRadius: 10, width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", cursor: waSending ? "not-allowed" : "pointer", fontSize: 18, flexShrink: 0, boxShadow: "0 2px 8px rgba(37,211,102,0.4)" }}>
                    {waSending ? "⏳" : "➤"}
                  </button>
                </div>
              </>
            ) : (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, background: "#F0F2F5" }}>
                <svg width="60" height="60" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#25D366" opacity="0.15"/>
                  <path d="M23.5 8.5C21.6 6.6 19.1 5.5 16.4 5.5C10.9 5.5 6.4 10 6.4 15.5C6.4 17.3 6.9 19.1 7.8 20.6L6.3 26L11.9 24.6C13.4 25.4 15.1 25.8 16.9 25.8H16.4C21.9 25.8 26.5 21.3 26.5 15.8C26.5 13.1 25.4 10.4 23.5 8.5Z" fill="#25D366" opacity="0.6"/>
                </svg>
                <div style={{ fontWeight: 700, color: "#4A5568", fontSize: 16 }}>Select a conversation</div>
                <div style={{ color: "#94A3B8", fontSize: 13 }}>Choose a contact from the list to send a WhatsApp message</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Bulk WhatsApp Modal ── */}
      {bulkModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: 20, padding: 32, width: 500, maxWidth: "90vw", boxShadow: "0 16px 60px rgba(0,0,0,0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#25D366"/><path d="M23.5 8.5C21.6 6.6 19.1 5.5 16.4 5.5C10.9 5.5 6.4 10 6.4 15.5C6.4 17.3 6.9 19.1 7.8 20.6L6.3 26L11.9 24.6C13.4 25.4 15.1 25.8 16.9 25.8H16.4C21.9 25.8 26.5 21.3 26.5 15.8C26.5 13.1 25.4 10.4 23.5 8.5Z" fill="white"/></svg>
              <span style={{ fontWeight: 800, fontSize: 18, color: "#0B1F3E" }}>Bulk WhatsApp</span>
              <span style={{ marginLeft: "auto", cursor: "pointer", color: "#94A3B8", fontSize: 20 }} onClick={() => { setBulkModal(false); setBulkResult(null); setBulkMsg(""); }}>✕</span>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 6 }}>SEND TO</label>
              <div style={{ display: "flex", gap: 8 }}>
                {[["all","All (Pending + Overdue)"],["pending","Pending Only"],["overdue","Overdue Only"]].map(([v, l]) => (
                  <button key={v} onClick={() => setBulkFilter(v)} style={{ flex: 1, padding: "7px 4px", fontSize: 11, fontWeight: 600, background: bulkFilter === v ? "#25D366" : "#F8FAFC", color: bulkFilter === v ? "#fff" : "#475569", border: `1px solid ${bulkFilter === v ? "#25D366" : "#E2E8F0"}`, borderRadius: 8, cursor: "pointer" }}>{l}</button>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 6 }}>CUSTOM MESSAGE <span style={{ color: "#94A3B8", fontWeight: 400 }}>(leave blank for default)</span></label>
              <textarea value={bulkMsg} onChange={e => setBulkMsg(e.target.value)}
                placeholder="e.g. Dear {name}, your payment is due. Please pay immediately. - SkyUp Digital Solution"
                rows={4} style={{ width: "100%", border: "1px solid #E2E8F0", borderRadius: 10, padding: "10px 14px", fontSize: 13, resize: "vertical", outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>
            {bulkResult && (
              <div style={{ padding: "12px 16px", borderRadius: 10, marginBottom: 16, background: bulkResult.success ? "#DCFCE7" : "#FEE2E2", color: bulkResult.success ? "#15803D" : "#DC2626", fontSize: 13, fontWeight: 600 }}>
                {bulkResult.success ? `✅ Done! Sent: ${bulkResult.sent} | Failed: ${bulkResult.failed} | Total: ${bulkResult.total}` : `❌ Error: ${bulkResult.message || bulkResult.error}`}
              </div>
            )}
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => { setBulkModal(false); setBulkResult(null); setBulkMsg(""); }}
                style={{ flex: 1, padding: "11px 0", border: "1px solid #E2E8F0", borderRadius: 10, background: "#fff", color: "#475569", fontWeight: 600, cursor: "pointer", fontSize: 14 }}>
                Cancel
              </button>
              <button onClick={handleWABulk} disabled={bulkSending}
                style={{ flex: 2, padding: "11px 0", background: bulkSending ? "#94A3B8" : "#25D366", color: "#fff", border: "none", borderRadius: 10, fontWeight: 700, cursor: bulkSending ? "not-allowed" : "pointer", fontSize: 14, boxShadow: bulkSending ? "none" : "0 4px 12px rgba(37,211,102,0.4)" }}>
                {bulkSending ? "⏳ Sending…" : "📤 Send Bulk WhatsApp"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── SMS tab detail panel ── */}
      {activeTab && activeTab !== "whatsapp" && (() => {
        const meta = panelMeta[activeTab];
        return (
          <Card>
            <CardHeader title={meta.title}
              right={
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <button onClick={() => openTab(activeTab)} style={{ background: "none", border: "1px solid #E2E8F0", borderRadius: 8, padding: "4px 10px", fontSize: 12, color: "#475569", cursor: "pointer" }}>🔄 Refresh</button>
                  <button onClick={() => setActiveTab(null)} style={{ background: "none", border: "1px solid #E2E8F0", borderRadius: 8, padding: "4px 10px", fontSize: 12, color: "#94A3B8", cursor: "pointer" }}>✕ Close</button>
                </div>
              }
            />
            {tabLoading ? (
              <div style={{ padding: "48px 0", textAlign: "center", color: "#94A3B8", fontSize: 14 }}><div style={{ fontSize: 28, marginBottom: 8 }}>⏳</div>Loading…</div>
            ) : filteredList.length === 0 ? (
              <div style={{ padding: "52px 0", textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 10 }}>{meta.emptyIcon}</div>
                <div style={{ fontWeight: 700, color: "#0B1F3E", fontSize: 15 }}>{meta.empty}</div>
              </div>
            ) : activeTab === "sentToday" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filteredList.map(r => {
                  const userName = r.user?.name || "Unknown"; const userPhone = r.user?.phone || r.phone || "—";
                  const amount = r.payment?.amount; const sentTime = r.sentAt ? new Date(r.sentAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) : "—";
                  const schemeName = r.scheme?.schemeId || "—"; const monthNo = r.payment?.monthNumber || "—";
                  return (
                    <div key={r._id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: "#F0F9FF", borderRadius: 12, border: "1px solid #BAE6FD" }}>
                      <Avatar name={userName} bg="linear-gradient(135deg,#1A7FD4,#60A5FA)" size={40} fontSize={14} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 700, color: "#0B1F3E", fontSize: 14 }}>{userName}</div>
                        <div style={{ fontSize: 12, color: "#64748B", marginTop: 2, display: "flex", gap: 8, flexWrap: "wrap" }}>
                          <span>📱 {userPhone}</span>
                          {schemeName !== "—" && <><span>·</span><span>Scheme: {schemeName}</span></>}
                          {monthNo    !== "—" && <><span>·</span><span>Month {monthNo}</span></>}
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        {amount != null && <div style={{ fontWeight: 700, color: "#0B1F3E", fontSize: 15 }}>₹{amount.toLocaleString("en-IN")}</div>}
                        <div style={{ fontSize: 11, color: "#1A7FD4", fontWeight: 600, marginTop: 3 }}>✅ Sent at {sentTime}</div>
                      </div>
                      <div style={{ padding: "4px 12px", borderRadius: 20, background: "#DCFCE7", color: "#16A34A", fontSize: 11, fontWeight: 700 }}>SMS Sent</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filteredList.map(p => {
                  const isOverdue = p._computedStatus === "overdue" || (p.dueDate && new Date(p.dueDate) < new Date() && p.status !== "paid");
                  const dueLabel  = p.dueDate ? new Date(p.dueDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—";
                  const userName = p.user?.name || "Unknown"; const userPhone = p.user?.phone || "—";
                  const schemeName = p.scheme?.schemeId || "—"; const feedback = sendFeedback[p._id];
                  const accent = isOverdue ? "#EF4444" : "#D97706";
                  return (
                    <div key={p._id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: isOverdue ? "#FFF5F5" : "#FFFDF0", borderRadius: 12, border: `1px solid ${isOverdue ? "#FECACA" : "#FDE68A"}` }}>
                      <Avatar name={userName} bg={isOverdue ? "linear-gradient(135deg,#EF4444,#F87171)" : "linear-gradient(135deg,#D97706,#FCD34D)"} size={40} fontSize={14} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 700, color: "#0B1F3E", fontSize: 14 }}>{userName}</div>
                        <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 2, display: "flex", gap: 8, flexWrap: "wrap" }}>
                          <span>📱 {userPhone}</span><span>·</span><span>{schemeName}</span><span>·</span><span>Month {p.monthNumber}</span>
                        </div>
                      </div>
                      <div style={{ textAlign: "right", minWidth: 110 }}>
                        <div style={{ fontWeight: 700, color: "#0B1F3E", fontSize: 15 }}>₹{(p.amount||0).toLocaleString("en-IN")}</div>
                        <div style={{ fontSize: 11, marginTop: 3, fontWeight: 700, color: accent }}>{isOverdue ? "🚨 OVERDUE" : `⏳ Due ${dueLabel}`}</div>
                        {!isOverdue && <div style={{ fontSize: 10, color: "#94A3B8", marginTop: 1 }}>{dueLabel}</div>}
                      </div>
                      {feedback && <div style={{ fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20, background: feedback === "sent" ? "#DCFCE7" : "#FEE2E2", color: feedback === "sent" ? "#16A34A" : "#DC2626", whiteSpace: "nowrap" }}>{feedback === "sent" ? "✅ Sent" : "❌ Failed"}</div>}
                      <button onClick={() => handleSend(p._id)} disabled={sendingId === p._id}
                        style={{ background: sendingId === p._id ? "#94A3B8" : accent, color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: sendingId === p._id ? "not-allowed" : "pointer", whiteSpace: "nowrap", boxShadow: `0 2px 8px ${accent}40` }}>
                        {sendingId === p._id ? "Sending…" : "📱 Send SMS"}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </Card>
        );
      })()}

      {/* ── Idle hint ── */}
      {!activeTab && (
        <div style={{ background: "#fff", borderRadius: 16, padding: "40px 24px", textAlign: "center", border: "1px dashed #CBD5E1", boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: 36, marginBottom: 10 }}>👆</div>
          <div style={{ fontWeight: 700, color: "#0B1F3E", fontSize: 15 }}>Select a card above to view details</div>
          <div style={{ color: "#94A3B8", fontSize: 13, marginTop: 6 }}>
            Click <strong>Sent Today</strong>, <strong>Pending</strong>, <strong>Overdue</strong> for SMS — or <strong style={{ color: "#25D366" }}>WhatsApp</strong> to send via MSG91
          </div>
        </div>
      )}
    </div>
  );
}
