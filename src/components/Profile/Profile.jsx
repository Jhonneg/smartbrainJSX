import { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      age: this.props.user.age,
      pet: this.props.user.pet,
    };
  }
  onFormChange = (event) => {
    switch (event.target.name) {
      case "user-name":
        this.setState({ name: event.target.value });
        break;
      case "user-age":
        this.setState({ age: event.target.value });
        break;
      case "user-pet":
        this.setState({ pet: event.target.value });
        break;
      default:
        return;
    }
  };
  onProfileUpdate = (data) => {
    fetch(
      `https://smartbrainjsxback.onrender.com/profile/${this.props.user.id}`,
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formInput: data }),
      }
    )
      .then((response) => {
        this.props.toggleModal();
        this.props.loadUser({ ...this.props.user, ...data });
      })
      .catch(console.log);
  };
  render() {
    const { user } = this.props;
    const { name, age, pet } = this.state;
    return (
      <main className="bg-neutral fixed flex items-center justify-center top-0 left-0 w-full h-full">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="avatar placeholder ml-3">
              <div className="mb-2 bg-primary text-neutral-content rounded-full w-14 cursor-pointer">
                <span className="text-xl text-slate-950">AI</span>
              </div>
            </div>
            <p className="text-2xl input flex">{this.state.name}</p>
            <p className="input flex">Images submitted: {user.entries}</p>
            <p className="input flex">
              Member Since: {new Date(user.joined).toLocaleDateString()}
            </p>
            <div className="divider"></div>
            <label className="input input-bordered flex items-center">
              <p>Name</p>
              <input
                onChange={this.onFormChange}
                type="text"
                name="user-name"
                className="grow"
                placeholder={user.name}
              />
            </label>
            <label className="input input-bordered flex items-center">
              <p>Age</p>
              <input
                onChange={this.onFormChange}
                type="number"
                className="grow"
                name="user-age"
                placeholder={user.age}
              />
            </label>
            <label className="input input-bordered flex items-center">
              <p>Pet</p>
              <input
                onChange={this.onFormChange}
                type="text"
                name="user-pet"
                className="grow"
                placeholder={user.pet}
              />
            </label>
            <div className="flex justify-between">
              <button
                onClick={() => this.onProfileUpdate({ name, age, pet })}
                className="btn btn-accent btn-outline w-1/3"
              >
                Save
              </button>
              <button
                onClick={this.props.toggleModal}
                className="btn btn-accent btn-outline w-1/3"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
