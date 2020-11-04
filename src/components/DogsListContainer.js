import React, { Component } from 'react';
import DogsList from './DogsList';

export default class DogsListContainer extends Component {
  state = {
    dogBreeds: null,
    error: null
  };

  // componentDidMount() {
  //   fetch("https://dog.ceo/api/breeds/list/all")
  //     .then(response => response.json())
  //     .then(data => {
  //       const breeds = Object.keys(data.message);
  //       this.updateBreeds(breeds);
  //     })
  //     .catch(console.error);
  // };

  async componentDidMount() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const myJSON = await response.json();
      const breeds = Object.keys(myJSON.message);
      this.updateBreeds(breeds);
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  updateBreeds = (breeds) => this.setState({ dogBreeds: breeds });

  render() {
    return (
      <DogsList dogBreeds={this.state.dogBreeds} error={this.state.error} />
    );
  }
}