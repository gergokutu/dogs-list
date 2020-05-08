import React, { Component } from 'react';

export default class DogsList extends Component {
  state = {
    dogBreeds: null
  };

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => console.log("Fetched data:", Object.keys(data.message)))
      .catch(console.error);
  };

  render() {
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        { this.state.dogBreeds === null && "Loading..." }
      </div>
    );
  }
}