const express = require("express");
const { getBlogs } = require("../controllers/controller");
const router = express.Router();

router.get("/blogs", getBlogs);

module.exports = router;