import React from "react";
import "./Signin.css";

class Signin extends React.Component {
  constructor(props) {
    super();
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }
  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "success") {
          this.props.onRouteChange("home");
        }
      });
  };
  render() {
    const { onRouteChange } = this.props;
    return (
      <form className="flex justify-center py-5 text-center">
        <div className="box-grandient px-20 py-6 rounded-lg shadow-lg">
          <h2 className="text-4xl mb-6 mt-4 text-gray-200">Sign in</h2>
          <div>
            <label
              htmlFor="email"
              className="text-center text-sm font-medium leading-6 text-gray-200"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={this.onEmailChange}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-11/12 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div>
                <label
                  htmlFor="email"
                  className="mt-4 text-sm font-medium leading-6 text-gray-200"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    onChange={this.onPasswordChange}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    className="w-11/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-6 gap-x-6">
                <button
                  onClick={this.onSubmitSignIn}
                  type="submit"
                  className="w-3/6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
              <div className="mt-6 gap-x-6">
                <p
                  onClick={() => onRouteChange("register")}
                  type="submit"
                  className="px-3 py-2 text-sm font-semibold text-white shadow-sm hover:cursor-pointer"
                >
                  Register
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default Signin;
