import React from "react";

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
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };
  render() {
    const { onRouteChange } = this.props;
    return (
      <form className="flex justify-center py-11 text-center">
        <div className="bg-neutral px-12 py-6 rounded-lg shadow-2xl border-solid border-2 border-sky-100">
          <h2 className="text-4xl mb-6 mt-4 text-gray-200">Sign in</h2>
          <div>
            <div className="mt-2">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  className="grow"
                  name="email"
                  autoComplete="email"
                  onChange={this.onEmailChange}
                  type="email"
                  placeholder="Email"
                />
              </label>
              <div>
                <div className="mt-2">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      onChange={this.onPasswordChange}
                      name="password"
                      autoComplete="password"
                      type="password"
                      className="grow"
                      placeholder="*******"
                    />
                  </label>
                </div>
              </div>

              <div className="mt-6 gap-x-6">
                <button
                  onClick={this.onSubmitSignIn}
                  type="submit"
                  className="btn w-20"
                >
                  Login
                </button>
              </div>
              <div className="mt-6 gap-x-6">
                <p
                  onClick={() => onRouteChange("register")}
                  type="submit"
                  className="btn w-20"
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
