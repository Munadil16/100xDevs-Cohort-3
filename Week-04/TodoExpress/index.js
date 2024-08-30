import express from "express";
import todosRouter from "./routers/index.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use("/todos", todosRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`);
});
