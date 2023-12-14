import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logonew.json";
import Lottie from "lottie-react";
import useAuth from "../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isNavbarScrolled = scrollTop > 0;
      setIsScrolled(isNavbarScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-yellow-400" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-yellow-400" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-yellow-400" : ""
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="container m-auto">
      <div
        className="navbar container m-auto"
        style={{
          position: "fixed",
          backgroundColor: isScrolled ? "#fff8" : "transparent",
          borderRadius: isScrolled ? "999px" : "0",
          zIndex: 1000,
        }}
      >
        <div className="navbar-start">
          <div className="flex justify-center items-center">
            <button className="w-20 flex justify-center items-center">
              <span>
                <Lottie animationData={logo}></Lottie>
              </span>
            </button>
            <p className="font-serif font-semibold italic text-xl">
              <span className="bg-gradient-to-r to-green-500 from-red-500 text-transparent bg-clip-text">
                FixedIT
              </span>
            </p>
          </div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-slate-500">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <details className="dropdown">
            <summary className="btn btn-ghost m-1">
              <div>
                <div tabIndex={0}>
                  {user?.photoURL ? (
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                  ) : (
                    <FaUserCircle className="text-4xl"></FaUserCircle>
                  )}
                </div>
              </div>
            </summary>
            {user ? (
              <ul
                tabIndex={0}
                className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-30 md:w-36"
              >
                <li>
                  <p className="font-semibold">{user?.displayName}</p>
                </li>
                <li>
                  <Link to="/dashboard" className="font-semibold">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="bg-red-500 text-white font-semibold"
                  >
                    LogOut
                  </button>
                </li>
              </ul>
            ) : (
              ""
            )}
          </details>

          {user ? (
            ""
          ) : (
            <Link to={"/login"}>
              <button className="btn bg-yellow-400 font-bold m-1">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
