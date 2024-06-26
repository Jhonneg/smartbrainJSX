import ProfileIcon from "../Profile/ProfileIcon";

export default function Navigation({ onRouteChange, isSignedIn, toggleModal }) {
  if (isSignedIn) {
    return (
      <nav className="flex justify-end mt-4">
        <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
      </nav>
    );
  } else {
    return (
      <nav className="flex justify-end mt-4">
        <p
          onClick={() => onRouteChange("signin")}
          className="p-4 cursor-pointer text-gray-200 no-underline"
        >
          {/* Sign In{" "} */}
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="p-4 cursor-pointer text-gray-200 no-underline"
        >
          {/* Register{" "} */}
        </p>
      </nav>
    );
  }
}
