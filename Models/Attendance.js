const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employee_id: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  date: Date,
  check_in: String,
  check_out: String,
});

module.exports = mongoose.model("Attendance", attendanceSchema);