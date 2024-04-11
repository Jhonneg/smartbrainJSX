import { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecongnition from "./components/FaceRecongnition/FaceRecongnition";
import Rank from "./components/Rank/Rank";
import Signin from "./components/Signin/Signin";
import "./App";
import { useState } from "react";

console.log("https://samples.clarifai.com/metro-north.jpg");
console.log(
  "https://static01.nyt.com/images/2022/03/28/arts/28OSCARS-BESTWORST-SLAP/merlin_204673236_71a2e305-4be8-48c0-b69b-9ee166856f98-superJumbo.jpg?quality=75&auto=webp"
);

const setupClarifai = (imageUrl) => {
  const PAT = "cc27ad5214ca4515ac096bad0cb4a528";
  const USER_ID = "joneewars";
  const APP_ID = "Face-detect";
  const MODEL_ID = "face-detection";
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });
  return {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      },
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.querySelector(".inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch(
      "https://api.clarifai.com/v2/models/face-detection/outputs",
      setupClarifai(this.state.input)
    )
      .then((response) => response.json(response))
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch((error) => console.log("error", error));
  };
  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} />
        {this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecongnition box={box} imageUrl={imageUrl} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
