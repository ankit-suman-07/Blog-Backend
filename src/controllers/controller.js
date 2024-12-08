const blogList = require("../data/blogData");

// Helper function to paginate the blog list
const paginateBlogs = (blogs, page, limit) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  return blogs.slice(start, end);
};

const getBlogs = (req, res) => {
  const { query, filter, page = 1, limit = 10 } = req.query;

  let filteredBlogs = [...blogList]; // Create a copy of the blog list to filter/search

  // 1. Search blogs based on query (search in 'topic' or 'text')
  if (query) {
    const lowerCaseQuery = query.toLowerCase();
    filteredBlogs = filteredBlogs.filter((item) =>
      item.topic.toLowerCase().includes(lowerCaseQuery) ||
      item.text.toLowerCase().includes(lowerCaseQuery)
    );
  }

  // 2. Filter blogs based on category (supporting multiple filters)
  if (filter) {
    // Convert `filter` to an array if it's not already
    const filterArray = Array.isArray(filter) ? filter : [filter];
    const lowerCaseFilters = filterArray.map((f) => f.toLowerCase());

    filteredBlogs = filteredBlogs.filter((item) =>
      lowerCaseFilters.includes(item.category.toLowerCase())
    );
  }

  // 3. Paginate the results
  const paginatedBlogs = paginateBlogs(filteredBlogs, parseInt(page), parseInt(limit));

  // Response with paginated, filtered, and searched results
  res.json({
    total: filteredBlogs.length,
    page: parseInt(page),
    totalPages: Math.ceil(filteredBlogs.length / limit),
    blogs: paginatedBlogs,
  });
};

module.exports = { getBlogs };