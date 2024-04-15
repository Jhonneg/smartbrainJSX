export default function Navigation({ onRouteChange, isSignedIn }) {
  if (isSignedIn) {
    return (
      <nav className="flex justify-end">
        <p
          onClick={() => onRouteChange("signin")}
          className="p-4 cursor-pointer text-gray-200 no-underline"
        >
          Sign Out{" "}
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="flex justify-end">
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
