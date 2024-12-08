const express = require("express");
const wordRoutes = require("./routes/route");
const path = require("path");

const cors = require("cors"); 

const app = express();

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.use("/api", wordRoutes);
app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});