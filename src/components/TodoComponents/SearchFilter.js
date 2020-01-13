import React, { Component } from 'react';

const SearchFilter = (props,text) => {
    return (
        <div className='search-list'>
            {props.todoList.filter(search => {
                return search.indexOf(text) !== -1;
            })}
        </div>
    )
}


export default SearchFilter;