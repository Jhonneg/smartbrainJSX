"use client";

console.log(
  "https://media.wired.com/photos/5d815ffe46103c0009de8d56/master/w_2240,c_limit/science_stallman_473688628.jpg"
);

import { useState } from "react";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm";
import FaceRecongnition from "./components/FaceRecongnition";

const calculateFaceLocations = (data) => {
  if (!data || !data.outputs) return [];

  return data.outputs[0].data.regions.map((face) => {
    const clarifaiFace = face.region_info.bounding_box;
    const image = document.querySelector(".inputimage");

    if (!image) return {};

    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  });
};

export default function Home() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [boxes, setBoxes] = useState([]);

  const displayFaceBox = (newBoxes) => {
    setBoxes(newBoxes);
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = () => {
    setImageUrl(input);

    fetch("/api/clarifai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: input }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          displayFaceBox(calculateFaceLocations(response));
        }
      })
      .catch((error) => console.log("API error", error));
  };

  return (
    <main className="">
      <div>
        <Logo />
        <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
        <FaceRecongnition boxes={boxes} imageUrl={imageUrl} />
      </div>
    </main>
  );
}
