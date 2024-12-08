const blogList = require("../data/blogData");

const paginateBlogs = (blogs, page, limit) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  return blogs.slice(start, end);
};

const getBlogs = (req, res) => {
  const { query, filter, page = 1, limit = 10 } = req.query;

  let filteredBlogs = [...blogList];

  if (query) {
    const lowerCaseQuery = query.toLowerCase();
    filteredBlogs = filteredBlogs.filter((item) =>
      item.topic.toLowerCase().includes(lowerCaseQuery) ||
      item.text.toLowerCase().includes(lowerCaseQuery)
    );
  }

  if (filter) {
    const filterArray = Array.isArray(filter) ? filter : [filter];
    const lowerCaseFilters = filterArray.map((f) => f.toLowerCase());

    filteredBlogs = filteredBlogs.filter((item) =>
      lowerCaseFilters.includes(item.category.toLowerCase())
    );
  }

  const paginatedBlogs = paginateBlogs(filteredBlogs, parseInt(page), parseInt(limit));

  res.json({
    total: filteredBlogs.length,
    page: parseInt(page),
    totalPages: Math.ceil(filteredBlogs.length / limit),
    blogs: paginatedBlogs,
  });
};

module.exports = { getBlogs };