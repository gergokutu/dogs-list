import React from 'react';
import { Link } from 'react-router-dom';

export default function DogBreedImages(props) {
  const { breed, images, error } = props;

  return (
    <div className="dog-breed">
      <h1>Dog Breed Images</h1>
      <p>This page will show images of a {breed} breed.</p>
      <Link to="/">Go back to the index</Link>
      <div className="dog-breed-images">
        {(!images && !error) && "Loading..."}
        {images &&
          images.map((url, index) => {
            return (
              <img src={url} alt={breed} key={index} />
            );
          })
        }
        {error &&
          <div>ERROR: {error}</div>
        }
      </div>
    </div>
  );
}