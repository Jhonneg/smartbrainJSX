export default function Profile({ isProfileOpen, toggleModal }) {
  return (
    <main className="bg-neutral fixed flex items-center justify-center top-0 left-0 w-full h-full">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="avatar placeholder ml-3">
            <div className="mb-2 bg-primary text-neutral-content rounded-full w-14 cursor-pointer">
              <span className="text-xl text-slate-950">AI</span>
            </div>
          </div>
          <p className="text-2xl input flex">Username</p>
          <p className="input flex">Member Since: {2024}</p>
          <p className="input flex">Images submitted: {5}</p>
          <div className="divider"></div>
          <label className="input input-bordered flex items-center">
            <p>Name</p>
            <input type="text" className="grow" placeholder="John Doe" />
          </label>
          <label className="input input-bordered flex items-center">
            <p>Age</p>
            <input type="number" className="grow" placeholder="25" />
          </label>
          <label className="input input-bordered flex items-center">
            <p>Pet</p>
            <input type="text" className="grow" placeholder="Dragon" />
          </label>
          <div className="flex justify-evenly">
            <button className="btn btn-accent btn-outline w-1/3">Save</button>
            <button
              onClick={toggleModal}
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
