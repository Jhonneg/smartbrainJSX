import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecongnition from "./components/FaceRecongnition/FaceRecongnition";
import Rank from "./components/Rank/Rank";
import "./App";

function App() {
  return (
    <>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <FaceRecongnition />
    </>
  );
}

export default App;
