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
    console.log("this.state.todoText is: ", this.state.todoText);
    this.setState({ todoText: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="todoText"
          value={this.state.todoText}
          onChange={this.changeHandler}
        />
        <button type="submit">Add New Todo</button>
        <div className="clear" onClick={this.props.deleteItem}>
          Delete Cleared Todos
        </div>
      </form>
    );
  }
}
