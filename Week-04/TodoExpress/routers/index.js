import express from "express";
import {
  displayAllTodos,
  addTodo,
  removeTodo,
  updateTodo,
} from "../controllers/index.js";

const router = express.Router();

router.get("/display-todos", displayAllTodos);

router.post("/add-todo", addTodo);

router.delete("/delete-todo/:todo", removeTodo);

router.patch("/update-todo/:todo", updateTodo);

export default router;
