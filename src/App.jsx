import { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecongnition from "./components/FaceRecongnition/FaceRecongnition";
import Rank from "./components/Rank/Rank";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Modal from "./components/Modal/Modal";
import Profile from "./components/Profile/Profile";

console.log(
  "https://media.wired.com/photos/5d815ffe46103c0009de8d56/master/w_2240,c_limit/science_stallman_473688628.jpg"
);

const MODEL_ID = "face-detection";
const setupClarifai = (imageUrl) => {
  const PAT = "94872f56d3ef44c0b6b949f51ace4e88";
  const USER_ID = "joneewars";
  const APP_ID = "Face-detect";
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

const initialState = {
  input: "",
  imageUrl: "",
  boxes: [],
  route: "home",
  isSignedIn: false,
  isProfileOpen: false,
  user: {
    id: "",
    name: "",
    email: "",
    password: "",
    entries: "0",
    joined: "",
    pet: "",
    age: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  // componentDidMount() {
  //   const token = window.sessionStorage.getItem("token");
  //   if (token) {
  //     fetch("http://localhost:3000/signin", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: token,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data && data.id) {
  //           console.log(data);
  //           console.log("success");
  //         }
  //       })
  //       .catch(console.log);
  //   }
  // }

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
  calculateFaceLocations = (data) => {
    return data.outputs[0].data.regions.map((face) => {
      const clarifaiFace = face.region_info.bounding_box;
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
    });
  };

  displayFaceBox = (boxes) => {
    console.log(boxes);
    this.setState({ boxes: boxes });
  };

  onRouteChange = (route) => {
    if (route === "signin") {
      return this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };
  toggleModal = () => {
    this.setState((prevState) => ({
      ...prevState,
      isProfileOpen: !prevState.isProfileOpen,
    }));
  };
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`,
      setupClarifai(this.state.input)
    )
      .then((response) => response.json(response))
      .then((response) => {
        if (response) {
          fetch("https://smartbrainjsxback.onrender.com/image", {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            });
        }
        this.displayFaceBox(this.calculateFaceLocations(response));
      })
      .catch((error) => console.log("error", error));
  };
  render() {
    const { isSignedIn, imageUrl, route, boxes, isProfileOpen, user } =
      this.state;
    return (
      <div className="App">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
          toggleModal={this.toggleModal}
        />
        {isProfileOpen && (
          <Modal>
            <Profile
              isProfileOpen={isProfileOpen}
              toggleModal={this.toggleModal}
              user={user}
              loadUser={this.loadUser}
            />
          </Modal>
        )}
        {route === "home" ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecongnition boxes={boxes} imageUrl={imageUrl} />
          </div>
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}
export default App;
