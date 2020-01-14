import React, { Component } from "react";
import Search from './Search';

class SearchFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText:''
        }
    }

    changeHandler = e => {
        this.setState({ searchText: e.target.value });
      };

      submitHandler = e => {
        e.preventDefault();
        this.props.submitSearch(this.state.searchText);
        console.log("this.state.searchText is: ", this.state.searchText);
        this.setState({ searchText: "" });
      };


  render() {
    return (
        <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="searchText"
          value={this.state.searchText}
          onChange={this.changeHandler}
        />
        <button
          type="submit"
          name="search-btn"
        >
          Search Todos
        </button>
      </form>
    );
  }
}

export default SearchFilter;
