const express = require("express");
const router = express.Router();

// Define routes
router.get("/", (req, res) => {
    res.json([{ id: 1, name: "John Doe" }]);
});

module.exports = router;
