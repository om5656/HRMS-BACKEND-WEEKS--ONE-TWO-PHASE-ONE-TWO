const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const { createLeave, getLeaves, approveLeave, rejectLeave } = require("../controllers/leaveController");

router.post("/", authMiddleware, createLeave);
router.get("/", authMiddleware, getLeaves);
router.put("/:id/approve", authMiddleware, approveLeave);
router.put("/:id/reject", authMiddleware, rejectLeave);

module.exports = router;