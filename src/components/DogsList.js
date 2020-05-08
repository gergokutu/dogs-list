import React from 'react';
import { Link } from 'react-router-dom';

export default function DogsList(props) {
  const { dogBreeds } = props;

  const renderBreed = (breed) => {
    return (
      <li key={breed}>
        <Link to={ `/dog-breeds/${breed}` }>{breed}</Link>
      </li>
    );
  };

  return (
    <div className="dogs-list">
      <main>Dogs List</main>
      { dogBreeds === null && "Loading..." }
      { dogBreeds && 
        <ul>
          { dogBreeds.map(renderBreed) }
        </ul>
      }
    </div>
  );
}