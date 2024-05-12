import { useState } from "react";

export default function ProfileIcon(props) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <div className="dropdown dropdown-left">
        <div tabIndex={0} role="button" className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-14">
            <span className="text-xl">AI</span>
          </div>
          <ul
            tabIndex={0}
            className="bg-gradient-to-r from-[#5d85a6] dropdown-content z-[1] menu p-2 shadow-md bg-base-100 rounded-box w-52"
          >
            <li>
              <a>View Profile</a>
            </li>
            <li>
              <a>Signout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
