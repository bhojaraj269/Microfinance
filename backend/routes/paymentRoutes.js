// routes/paymentRoutes.js
const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { protectAdmin, protectUser } = require("../middleware/auth");
const {
    getAllPayments, getPaymentsByScheme, getPaymentsByUser,
    markPaymentPaid, getPendingPayments,
    submitPaymentScreenshot, rejectPayment, getAwaitingPayments,
} = require("../controllers/paymentController");

// ─── USER ───────────────────────────────────────────────────────────────────
// User submits a payment with a screenshot (awaiting admin verification)
router.post(
    "/submit",
    protectUser,
    upload.single("screenshot"),
    submitPaymentScreenshot
);

// ─── ADMIN ──────────────────────────────────────────────────────────────────
router.get("/", protectAdmin, getAllPayments);
router.get("/awaiting", protectAdmin, getAwaitingPayments);
router.get("/pending", protectAdmin, getPendingPayments);
router.get("/scheme/:schemeId", protectAdmin, getPaymentsByScheme);
router.get("/user/:userId", protectAdmin, getPaymentsByUser);
router.put("/:id/mark-paid", protectAdmin, markPaymentPaid);
router.put("/:id/reject", protectAdmin, rejectPayment);

module.exports = router;