export default function ProfileIcon(props) {
  return (
    <div>
      <div className="dropdown dropdown-left mr-4">
        <div tabIndex={0} role="button" className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-14">
            <span className="text-xl">AI</span>
          </div>
          <ul
            tabIndex={0}
            className="bg-neutral dropdown-content z-[1] menu p-2 shadow-md rounded-box w-52"
          >
            <li>
              <a onClick={props.toggleModal}>View Profile</a>
            </li>
            <li>
              <a onClick={() => props.onRouteChange("signin")}>Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
