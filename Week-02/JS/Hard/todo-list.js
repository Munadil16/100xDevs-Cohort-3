/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    this.todos = this.todos.filter((todo, index) => index !== indexOfTodo);
  }

  update(indexOfTodo, updatedTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      return null;
    }

    this.todos[indexOfTodo] = updatedTodo;
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      return null;
    }

    return this.todos[indexOfTodo];
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
