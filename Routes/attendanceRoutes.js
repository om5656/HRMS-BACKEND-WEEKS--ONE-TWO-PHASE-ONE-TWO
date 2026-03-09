const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const { checkIn, checkOut, getAttendance } = require("../controllers/attendanceController");

router.post("/checkin", authMiddleware, checkIn);
router.post("/checkout/:id", authMiddleware, checkOut);
router.get("/", authMiddleware, getAttendance);

module.exports = router;