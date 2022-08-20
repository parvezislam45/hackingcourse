import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from '../../firebase.init'

const NavBar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  const menuItems = (
    <>
      <li>
        <Link to="/" className="title text-amber-500">Home</Link>
      </li>
      <li>
        <Link to="/allitem" className="title text-amber-500">All Courses</Link>
      </li>
      <li>
      </li>
      {user && (
        <li>
          <div class="avatar online">
            <div class="w-8 rounded-full">
              <img src={user.photoURL} alt="" />
            </div>
          </div>
          <h1 className="title text-amber-500">{user.displayName}</h1>
        </li>
      )}
      <li>
        {user ? (
          <li><button className="btn btn-ghost title text-amber-500" onClick={logout}>
            Sign Out
          </button></li>
        ) : (
          <Link to="/login" className="title text-amber-500">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl heading text-amber-500">David Cyber World</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
