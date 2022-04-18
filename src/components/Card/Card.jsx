import React from "react";
import Loading from "../Loading/Loading";


export default function Card({ dog,loading, updateDog }) {

if(loading)
{
  return <Loading/>;
  
}


  return (
    <div className="card bounce" onClick={() => updateDog(dog.breed.id)}>
      <img src={dog.image} alt="dog" />

      <p>{dog.breed.name}</p>
    </div>
  );
}
