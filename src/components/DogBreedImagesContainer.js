import React, { Component } from 'react';
import DogBreedImages from './DogBreedImages';

export default class DogBreedImagesContainer extends Component {
  state = {
    images: null,
    error: null
  };

  // componentDidMount() {
  //   const breed = this.props.match.params.breed;

  //   fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
  //     .then(response => response.json())
  //     .then(data => this.updateImages(data.message))
  //     .catch(console.error);
  // };

  async componentDidMount() {
    try {
      const breed = this.props.match.params.breed;
      const response = await fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`);
      const myJSON = await response.json();
      this.updateImages(myJSON.message);
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message })
    }
  }

  updateImages = (images) => this.setState({ images: images });

  render() {
    const breed = this.props.match.params.breed;

    return (
      <DogBreedImages breed={breed} images={this.state.images} error={this.state.error} />
    );
  }
}