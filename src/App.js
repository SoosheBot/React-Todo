import React, { Component } from "react";
import './components/TodoComponents/Todo.css';

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          name: "",
          taskCompleted: false,
          id: Date.now()
        }
      ]
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggleItem = todoId => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todoId === todo.id) {
          // console.log(`${todoId} equals ${todo.id}`)
          return {
            ...todo,
            taskCompleted: !todo.taskCompleted
          };
        }
        return todo;
      })
    });
  };

  addTodo = todoText => {
    const newTodo = {
      name: todoText,
      taskCompleted: false,
      id: Date.now()
    };

    this.setState({ todoList: [...this.state.todoList, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList todoList={this.state.todoList} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
