const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getEmployees, createEmployee, updateEmployee, deleteEmployee } = require("../controllers/employeeController");

router.get("/", authMiddleware, getEmployees);
router.post("/", authMiddleware, createEmployee);
router.put("/:id", authMiddleware, updateEmployee);
router.delete("/:id", authMiddleware, deleteEmployee);

module.exports = router;