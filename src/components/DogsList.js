import React, { Component } from 'react';

export default class DogsList extends Component {
  state = {
    dogBreeds: null
  };

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", Object.keys(data.message));
        const breeds = Object.keys(data.message);
        this.updateBreeds(breeds);
      })
      .catch(console.error);
  };

  updateBreeds = (breeds) => this.setState({ dogBreeds: breeds }); 

  render() {
    return (
      <div className="dogs-list">
        <main>Dogs List</main>
        { this.state.dogBreeds === null && "Loading..." }
        { <ul>
           { this.state.dogBreeds && 
             this.state.dogBreeds.map((breed) => <li key={breed}>{breed}</li>) }
       </ul> }
      </div>
    );
  }
}