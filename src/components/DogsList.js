import React from 'react';
import { Link } from 'react-router-dom';

export default function DogsList(props) {
  const { dogBreeds, error } = props;

  const renderBreed = (breed) => {
    return (
      <li key={breed}>
        <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
      </li>
    );
  };

  return (
    <div className="dogs-list">
      <h1>Dogs List</h1>
      {(dogBreeds === null && error === null) && "Loading..."}
      {dogBreeds &&
        <ul>
          {dogBreeds.map(renderBreed)}
        </ul>
      }
      {error !== null &&
        <div>ERROR: {error}</div>
      }
    </div>
  );
}