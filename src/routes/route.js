const express = require("express");
const { getBlogs } = require("../controllers/controller");
const router = express.Router();

// Routes
router.get("/blogs", getBlogs);

module.exports = router;