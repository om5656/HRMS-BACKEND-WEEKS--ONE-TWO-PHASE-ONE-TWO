const Attendance = require("../models/Attendance");

const checkIn = async (req, res) => {
  const record = await Attendance.create(req.body);
  res.json(record);
};

const checkOut = async (req, res) => {
  const record = await Attendance.findByIdAndUpdate(req.params.id, { check_out: req.body.check_out }, { new: true });
  res.json(record);
};

const getAttendance = async (req, res) => {
  const records = await Attendance.find().populate("employee_id");
  res.json(records);
};

module.exports = { checkIn, checkOut, getAttendance };