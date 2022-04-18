import React, { useEffect, useState } from "react";
import getBreeds from "../../services/getBreeds";

const initialBreeds = [
  {
    id: 1,
    name: "Husky",
  },
  {
    id: 2,
    name: "Boxer",
  },
];

export default function Select({ updateDog }) {
  const [breeds, setBreeds] = useState(initialBreeds);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds().then((newBreeds) => {
      setBreeds(newBreeds);
    });
  };

  return (
    <select onChange={(e) => updateDog(e.target.value)}>
      {breeds.map((breed) => (
        <option value={breed.id} key={breed.id}>
          {breed.name}
        </option>
      ))}
    </select>
  );
}
