import React from 'react';

export default function DogsList(props) {
  const { dogBreeds } = props;

  return (
    <div className="dogs-list">
      <main>Dogs List</main>
      { dogBreeds === null && "Loading..." }
      { dogBreeds && 
        <ul>
          { dogBreeds.map((breed) => <li key={breed}>{breed}</li>) }
        </ul>
      }
    </div>
  );
}