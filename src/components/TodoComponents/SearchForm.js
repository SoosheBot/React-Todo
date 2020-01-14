import React, { Component } from "react";


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: []
        }
    }

    handleChange = e => {
        this.setState({ searchText: e.target.value });
      };

      submitChange = e => {
        e.preventDefault();
        this.props.submitSearch(this.state.searchText);
        this.setState({ searchText: "" });
      };


  render() {
    return (
        <form onSubmit={this.submitChange} className='search-form'>
        <input
          type="text"
          name="searchText"
          value={this.state.searchText}
          onChange={this.handleChange}
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

export default SearchForm;
