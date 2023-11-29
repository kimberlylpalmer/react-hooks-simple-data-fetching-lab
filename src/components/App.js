// create your App component here
import React, { useEffect, useState } from "react";

const api = "https://dog.ceo/api/breeds/image/random";
// console.log(api);

export default function App() {
  const [dogImage, setDogImage] = useState("");

  const fetchDogImage = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setDogImage(data.message));
  };
  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div>
      <h1>Dog Image</h1>
      {dogImage ? <img src={dogImage} alt="A Random Dog" /> : <p>Loading...</p>}
      <br></br>
      <button onClick={fetchDogImage}>New Dog Image</button>
    </div>
  );
}

// Working Code~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
import React, { useEffect, useState } from "react";
const api = "https://dog.ceo/api/breeds/image/random";

export default function App() {
  const [dogImage, setDogImage] = useState("");

  const fetchDogImage = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setDogImage(data.message));
  };

  useEffect(() => {
    fetchDogImage();

  }, []);

  return (
    <div>
      <button onClick={fetchDogImage}>New Dog</button>
      <br></br>
      {dogImage ? <img src={dogImage} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  );
}
*/
