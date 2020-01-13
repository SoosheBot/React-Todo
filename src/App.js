import React, { Component } from 'react';

import TodoList from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoList: []
    };
  };
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addToDo = todoText => {
    const newTodo = {
      todo: todoText,
      taskCompleted:false,
      id:Date.now()
    };

    this.setState({todoList: [...this.state.todoList, newTodo]})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
