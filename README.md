Backend code for a blog website made using Nodejs.
  
  Backend deployed using render.com at : [Click Here](https://blog-backend-axna.onrender.com)

## How to run locally

Step 1:
```
git clone https://github.com/ankit-suman-07/Blog-Backend.git
```
Step 2:
```
cd src
```

Step 3:
```
npm i
```

Step 4:
```
node app.js
```

Step 5:
```
http://localhost:5500
```

## Prerequisite
  - Make sure you have node.js installed on your device


## API Documentation

1. To get result for search values
```
GET /api/blogs?query=java
```

2. To get result for a filter value
```
GET /api/blogs?filter=Programming
```

3. To get result for multiple filter values
```
GET /api/blogs?filter=Programming&filter=Web+Development
```

4. To get result for multiple filter values
```
GET /api/blogs?filter=Programming&filter=Web+Development&page=1&limit=5
```

5. To get result for combined search and filter values
```
GET /api/blogs?query=java&filter=Programming&filter=Web+Development
```

6. To get result upto a set limit
```
GET /api/blogs?limit=10
```

6. To get result with combination of all the fields
```
GET /api/blogs?query=java&filter=Programming&filter=Web+Development&page=1&limit=5
```
