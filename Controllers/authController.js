const Employee = require("../models/Employee");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existUser = await Employee.findOne({ email });
    if (existUser) return res.status(400).json({ msg: "Account Already Exists" });

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await Employee.create({ name, email, password: hashPassword, role });

    res.status(201).json({ msg: "User Created Successfully", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ msg: "Missing Data" });

    const user = await Employee.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Account Not Found" });

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) return res.status(400).json({ msg: "Invalid Password" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ msg: "Login Success", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { register, login };