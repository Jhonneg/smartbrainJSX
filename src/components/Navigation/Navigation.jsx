function Navigation({ onRouteChange }) {
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
}

export default Navigation;
