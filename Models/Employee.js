const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["admin", "manager", "employee"], default: "employee" },
});

module.exports = mongoose.model("Employee", employeeSchema);