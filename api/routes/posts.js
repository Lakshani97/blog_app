import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

//get all post
router.get("/", getPosts);

//get specific post
router.get("/:id", getPost);

//create post
router.post("/", addPost);

//delete post
router.delete("/:id", deletePost);

//update post
router.put("/:id", updatePost);

export default router;
