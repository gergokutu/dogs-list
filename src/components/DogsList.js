import React, { Component } from 'react';

export default class DogsList extends Component {
  state = {
    dogBreeds: null
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