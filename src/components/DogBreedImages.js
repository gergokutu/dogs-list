import React from 'react';
import { Link } from 'react-router-dom';

export default function DogBreedImages(props) {
  return (
    <div className="dog-breed-images">
      <h1>Dog Breed Images</h1>

      This page will show images of a { props.match.params.breed } breed.

      <Link to="/">Go back to the index</Link>
    </div>
  );
}