const Employee = require("../models/Employee");

const getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

const createEmployee = async (req, res) => {
  const employee = await Employee.create(req.body);
  res.json(employee);
};

const updateEmployee = async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(employee);
};

const deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ msg: "Employee Deleted" });
};

module.exports = { getEmployees, createEmployee, updateEmployee, deleteEmployee };