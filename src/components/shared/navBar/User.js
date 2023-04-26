import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GLOBAL_CONTEXT } from "../../../layouts/AppLayout";

const User = () => {
  const { user, userRefetch } = useContext(GLOBAL_CONTEXT);
  const handleLogout = () => {
    sessionStorage.clear();
    userRefetch();
  };
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.imgURL} alt={user.name} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content p-2 shadow bg-black text-white rounded-box w-[8rem]"
      >
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default User;
