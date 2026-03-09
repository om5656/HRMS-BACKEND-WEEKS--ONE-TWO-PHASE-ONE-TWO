const Leave = require("../models/Leave");

const createLeave = async (req, res) => {
  const leave = await Leave.create(req.body);
  res.json(leave);
};

const getLeaves = async (req, res) => {
  const leaves = await Leave.find().populate("employee_id");
  res.json(leaves);
};

const approveLeave = async (req, res) => {
  const leave = await Leave.findByIdAndUpdate(req.params.id, { status: "approved" }, { new: true });
  res.json(leave);
};

const rejectLeave = async (req, res) => {
  const leave = await Leave.findByIdAndUpdate(req.params.id, { status: "rejected" }, { new: true });
  res.json(leave);
};

module.exports = { createLeave, getLeaves, approveLeave, rejectLeave };