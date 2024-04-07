import { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecongnition from "./components/FaceRecongnition/FaceRecongnition";
import Rank from "./components/Rank/Rank";
import "./App";
import { useState } from "react";

// https://samples.clarifai.com/metro-north.jpg

const setupClarifai = (imageUrl) => {
  const PAT = "cc27ad5214ca4515ac096bad0cb4a528";
  const USER_ID = "joneewars";
  const APP_ID = "Face-detect";
  const MODEL_ID = "face-detection";

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: imageUrl,
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

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
    console.log(event.target.value);
  };

  onSubmit = () => {
    console.log('click')
    this.setState({ imageUrl: this.state.input });
    fetch(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`,
      setupClarifai(imageUrl)
    )
      .then((response) => response.json())
      .then((result) => calculateFaceLocation(result))
      .catch((error) => console.log("error", error));
  };
  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        <div>
          <Logo />
          <Rank name={this.state.user.name} entries={this.state.user.entries} />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}
          />
          <FaceRecongnition box={box} imageUrl={imageUrl} />
        </div>
      </div>
    );
  }
}

export default App;
