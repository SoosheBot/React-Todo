import React, { Component } from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
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

  toggleItem = itemId => {
    this.setState({})
  }

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
      <div className='App'>
        <div className='header'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        </div>
        <TodoList todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
