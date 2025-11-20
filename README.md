# Assignment 13 – CRUD API with Express & MongoDB

This project implements a clean and structured CRUD (Create, Read, Update, Delete) API using **Express.js** and **MongoDB** through **Mongoose**. It demonstrates how to build modular routes, controllers, database layers, and custom error-handling middleware within a Node.js application.

---

## Features

* Create a new post
* Retrieve all posts
* Update an existing post
* Delete a post
* Centralized error handling
* MongoDB Atlas connection using Mongoose

---

## Tech Stack

* **Node.js** – Server environment
* **Express.js** – Routing and middleware framework
* **MongoDB Atlas** – Cloud-based NoSQL database
* **Mongoose** – ODM for schema modeling and database operations

---

## Project Structure

```
src/
├── controller/
│ └── postController.js
├── model/
│ └── postModel.js
├── router/
│ └── postRouter.js
├── error/
│ └── postErrors.js
├── config/
│ └── db.js
├── screenshots/
│ ├── get.png
│ ├── put.png
│ ├── patch.png
│ └── delete.png
├── server.js
└── README.md
```

This structure ensures separation of concerns and makes the code modular, maintainable, and easy to scale.

---

## API Endpoints

### Base URL: `/api/posts`

#### 1. Get All Posts

```
GET /api/posts/getPosts
```

Fetches and returns the complete list of posts.

#### 2. Add a New Post

```
POST /api/posts/addPosts
```

**Request Body:**

```
{
  "title": "Sample Title",
  "content": "Post content here"
}
```

Creates a new post entry.

#### 3. Update an Existing Post

```
PATCH /api/posts/post/:id
```

**Request Body (partial updates allowed):**

```
{
  "title": "Updated Title",
  "content": "Updated Content"
}
```

Updates the specified post.

#### 4. Delete a Post

```
DELETE /api/posts/delPosts/:id
```

Deletes the post corresponding to the provided ID.

---

## Error Handling

A centralized error-handling middleware ensures that all server errors are formatted and returned consistently. Any controller can forward errors using `next(error)`.

---

## Database Connection

The application connects to MongoDB Atlas using a dedicated function `connectDb()`. This keeps the server setup clean while managing database initialization in one place.

---

## How to Run the Project

1. Install project dependencies:

```
npm install
```

2. Start the development server:

```
npm start
```

3. The API will be available at:

```
http://localhost:3000
```

---

## API Testing Screenshots

Screenshots of each endpoint tested in Postman.

### GET /getPosts

(./screenshots/get.png)

### POST /addPosts

(./screenshots/post.png)

### DELETE /delPosts

(./screenshots/delete.png)

### PATCH /post/:id

(./screenshots/patch.png)

---

## Notes

* Ensure that your MongoDB Atlas URI is correct and active.
* Update your database name or credentials if needed.
* Follow the folder structure for clean and organized submission.

---

## License

This project was created for academic purposes as part of **Assignment 13**.


