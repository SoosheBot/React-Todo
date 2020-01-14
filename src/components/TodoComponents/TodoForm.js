import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ""
    };
  }

  changeHandler = e => {
    this.setState({ todoText: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoText);
    // console.log("this.state.todoText is: ", this.state.todoText);
    this.setState({ todoText: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className='todo-form'>
        <input
          type="text"
          name="todoText"
          value={this.state.todoText}
          onChange={this.changeHandler}
        />
        <button type="submit">Add New Todo</button>
        <button type="submit" name="delete-btn" onClick={this.props.clearCompleted}>
          Clear Completed
        </button>
      </form>
    );
  }
};

export default TodoForm;
