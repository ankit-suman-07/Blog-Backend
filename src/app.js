const express = require("express");
const wordRoutes = require("./routes/route");
const path = require("path");

const cors = require("cors"); 

const app = express();

// Enable CORS
app.use(cors());

// Serve static files from the "public" folder
app.use("/images", express.static(path.join(__dirname, "../public/images")));

// Import and use routes
app.use("/api", wordRoutes);
// Root route to send "Hello"
app.get("/", (req, res) => {
  res.send("Hello");
});

// Start server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


/*
1. Get All Words (no search, no filter):
Request: GET http://localhost:3000/words?page=1&limit=10
Explanation: Returns the first 10 words, without any search or filter applied.
2. Search Words (search term provided):
Request: GET http://localhost:3000/words?query=javascript&page=1&limit=10
Explanation: Searches for words that contain "javascript" (case-insensitive) and returns the first 10 results on the first page.
3. Filter Words by Category:
Request: GET http://localhost:3000/words?filter=frontend&page=1&limit=10
Explanation: Filters words by the "frontend" category and returns the first 10 results on the first page.
4. Search and Filter Together:
Request: GET http://localhost:3000/words?query=react&filter=frontend&page=1&limit=10
Explanation: Searches for words that contain "react" and belong to the "frontend" category. Returns the first 10 results.
5. Get Words with Pagination (no search, no filter):
Request: GET http://localhost:3000/words?page=2&limit=15
Explanation: Returns the 2nd page of results, with a limit of 15 words per page.
6. Search and Pagination (without filter):
Request: GET http://localhost:3000/words?query=express&page=2&limit=5
Explanation: Searches for words that contain "express" and returns the 2nd page of results, showing 5 words per page.
*/