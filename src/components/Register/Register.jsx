import React from "react";

class Register extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => console.log(response.json()))
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <form className="flex justify-center py-5 text-center">
        <div className="box-grandient px-20 py-6 rounded-lg shadow-lg shadow-2xl border-solid border-2 border-sky-100">
          <h2 className="text-4xl mb-6 mt-4 text-gray-200">Register</h2>
          <div>
            <label
              htmlFor="email"
              className="mt-4 text-sm font-medium leading-6 text-gray-200"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                onChange={this.onNameChange}
                id="name"
                name="name"
                type="text"
                autoComplete="text"
                className="w-11/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
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
              </div>
              <div className="mt-6 gap-x-6">
                <button
                  onClick={this.onSubmitSignIn}
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default Register;
