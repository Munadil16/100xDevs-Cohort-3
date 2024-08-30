import path from "node:path";
import { readFile, writeFile } from "node:fs";

const __dirname = import.meta.dirname;
const resolvedFilePath = path.join(__dirname, "../", "todos.json");

const readFilePromisified = () => {
  return new Promise((resolve, reject) => {
    readFile(resolvedFilePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else if (!data) {
        resolve([]);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

const writeFilePromisified = (data) => {
  return new Promise((resolve, reject) => {
    writeFile(resolvedFilePath, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const displayAllTodos = async (req, res) => {
  const todos = await readFilePromisified();

  return res.status(201).json({ todos });
};

const addTodo = async (req, res) => {
  const body = req.body;

  try {
    const todos = await readFilePromisified();
    todos.push(body);

    await writeFilePromisified(JSON.stringify(todos));

    return res
      .status(201)
      .json({ message: "Todo added successfully", success: true });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};

const removeTodo = async (req, res) => {
  const todo = req.params.todo;

  try {
    const todos = await readFilePromisified();
    const filteredTodos = todos.filter((data) => data.task !== todo);

    await writeFilePromisified(JSON.stringify(filteredTodos));

    return res
      .status(201)
      .json({ message: "Todo deleted successfully", success: true });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};

const updateTodo = async (req, res) => {
  const todo = req.params.todo;

  try {
    const todos = await readFilePromisified();
    const updatedTodos = todos.filter((data) =>
      data.task === todo ? (data.done = true) : data
    );

    await writeFilePromisified(JSON.stringify(updatedTodos));

    return res
      .status(201)
      .json({ message: "Todo updated successfully", success: true });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};

export { displayAllTodos, addTodo, removeTodo, updateTodo };
