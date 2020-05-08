import React, { Component } from 'react';
import DogBreedImages from './DogBreedImages';

export default class DogBreedImagesContainer extends Component {
  state = {
    images: null
  };

  componentDidMount() {
    const breed = this.props.match.params.breed;

    fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(response => response.json())
      .then(data => this.updateImages(data.message))
      .catch(console.error);
  };

  updateImages = (images) => this.setState({ images: images });

  render() {
    const breed = this.props.match.params.breed;

    return (
      <DogBreedImages breed={breed} images={this.state.images} />
    );
  }
}