import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Select from "../../components/Select/Select";
import getDogs from "../../services/getDogs";
import "./HomePage.scss";

const initialDog = {
    image: "",
    breed: {
      id: 0,
     name: ""
    }
}

export default function HomePage() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    updateDog(0);
  }, []);

  const updateDog = (breedId) => {
      setLoading(true);
    getDogs(breedId).then((newDog) => {
      setDog(newDog);
      setLoading(false);
    });
  };

  return (
    <div className="homepage">
      <Select updateDog={updateDog} />

      <Card dog={dog} updateDog={updateDog} loading={loading} />
    </div>
  );
}
