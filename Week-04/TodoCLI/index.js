import chalk from "chalk";
import { Command } from "commander";
import { readFile, writeFile } from "node:fs";

function readFilePromisified(filename) {
  return new Promise((resolve, reject) => {
    readFile(filename, "utf-8", (err, data) => {
      if (err) {
        reject(err.message);
      } else if (!data) {
        resolve([]);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

function writeFilePromisified(filename, data) {
  return new Promise((resolve, reject) => {
    writeFile(filename, JSON.stringify(data), (err) => {
      if (err) {
        reject(err.message);
      } else {
        resolve();
      }
    });
  });
}

const program = new Command();

program.name("todo-cli").description("CLI based Todo App").version("0.8.0");

// Add a todo
program
  .command("add")
  .description("Adds a new todo")
  .argument("<todo>")
  .action(async (todo) => {
    const fileData = await readFilePromisified("./todos.json");
    fileData.push({ task: todo, done: false });

    await writeFilePromisified("./todos.json", fileData);
    console.log(chalk.green.bold("Todo added successfully!"));
  });

// Delete a todo
program
  .command("delete")
  .description("Deletes a todo")
  .argument("<todo>")
  .action(async (todo) => {
    const fileData = await readFilePromisified("./todos.json");
    const newTodoList = fileData.filter((data) => data.task !== todo);

    await writeFilePromisified("./todos.json", newTodoList);
    console.log(chalk.red.bold("Todo deleted successfully!"));
  });

// Complete a todo
program
  .command("complete")
  .description("Completes a todo")
  .argument("<todo>")
  .action(async (todo) => {
    const fileData = await readFilePromisified("./todos.json");
    const newTodoList = fileData.filter((data) =>
      data.task === todo ? (data.done = true) : data
    );

    await writeFilePromisified("./todos.json", newTodoList);
    console.log(chalk.yellow.bold("Todo completed!"));
  });

// Display all todos
program
  .command("show-all-todos")
  .description("Display all todos")
  .action(async () => {
    const fileData = await readFilePromisified("./todos.json");

    fileData.map((todo) => {
      if (todo.done) {
        console.log(chalk.magenta.bold(`${todo.task} is completed!`));
      } else {
        console.log(chalk.magenta.bold(`${todo.task} is incomplete.`));
      }
    });
  });

program.parse();
