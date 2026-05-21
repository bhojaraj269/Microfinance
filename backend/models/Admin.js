const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    shopName: { type: String, default: "SkyUp Digital Solution" },
    role: { type: String, default: "admin" },

    // ── Unique Shop Code ── e.g. SKY-4821
    shopCode: { type: String, unique: true, uppercase: true },

    adminPhoto: { type: String, default: null },

    // ── Payment details shown to users ──────────────────────────────
    // qrCodeUrl: uploaded QR image path (e.g. "uploads/qr/abc.png"), or a
    // remote URL, or a UPI deep-link string like "upi://pay?pa=...&pn=..."
    qrCodeUrl: { type: String, default: "" },
    upiId: { type: String, default: "" },
    // upiPayeeName: the merchant name shown inside UPI apps when a user
    // scans the QR — e.g. "VK JEWELLERS" (independent of the owner's name)
    upiPayeeName: { type: String, default: "" },
    // bankName: shown on top of the QR card, PhonePe-style
    // e.g. "Axis Bank - 7317" or "SBI - 4592"
    bankName: { type: String, default: "" },

    // ── Verification OTP for sensitive actions ──
    verificationOtp: { type: String, default: null },
    verificationOtpExpires: { type: Date, default: null },
  },
  { timestamps: true }
);

// Auto-generate shopCode before saving
adminSchema.pre("save", async function (next) {
  if (!this.shopCode) {
    const prefix = (this.shopName || "SKY")
      .replace(/[^a-zA-Z]/g, "")
      .substring(0, 3)
      .toUpperCase();
    const digits = Math.floor(1000 + Math.random() * 9000);
    const code = `${prefix}-${digits}`;
    const existing = await mongoose.model("Admin").findOne({ shopCode: code });
    this.shopCode = existing ? `${prefix}-${Math.floor(1000 + Math.random() * 9000)}` : code;
  }
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

adminSchema.methods.matchPassword = async function (entered) {
  return await bcrypt.compare(entered, this.password);
};

module.exports = mongoose.model("Admin", adminSchema);