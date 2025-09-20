const express = require("express")
const router = express.Router();


// admin route
router.get("/admin", (req, res) => {
    res.json({message: "welcome Admin"})
})

// manager route
router.get("/manager", (req, res) => {
    res.json({message: "welcome manager"})
})


// user route
router.get("/user", (req, res) => {
    res.json({message: "welcome user"})
})

module.exports = router