const express = require("express")
const verifyToken = require("../middlewares/authMiddleware")
const authorizeRoles = require("../middlewares/roleMiddleware")
const router = express.Router();

// admin route
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({message: "welcome Admin"})
})

// manager route
router.get("/manager", verifyToken, authorizeRoles("admin", "manager"),  (req, res) => {
    res.json({message: "welcome manager"})
})

// user route
router.get("/user", verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) => {
    res.json({message: "welcome user"})
})

module.exports = router