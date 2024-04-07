import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecongnition from "./components/FaceRecongnition/FaceRecongnition";
import Rank from "./components/Rank/Rank";
import "./App";
import { useState } from "react";

function App() {
  const [searchfield, setSearchfield] = useState("");

  function onInputChange(event) {
    console.log(event.target.value);
  }

  return (
    <>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} />
      <FaceRecongnition />
    </>
  );
}

export default App;
