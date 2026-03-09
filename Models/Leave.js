const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  employee_id: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  start_date: Date,
  end_date: Date,
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
});

module.exports = mongoose.model("Leave", leaveSchema);