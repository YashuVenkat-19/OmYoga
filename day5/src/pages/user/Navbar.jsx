import { useState } from "react";
import "../../assets/css/login.css";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/yoga-academy/home");
  };
  const handleNavigation = (path) => {
    navigate("/yoga-academy" + path);
  };
  const handleProfile = () => {
    navigate("/yoga-academy/profile");
  };

  return (
    <nav className="w-full p-1 bg-sky-900 shadow fixed top-0 z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-1 md:py-3 md:block">
            <a href="#">
              <h2
                className="font-head leading-9 tracking-tight text-white hover:text-blue-200"
                onClick={() => handleNavigation("/home")}
                style={{ fontSize: "32px" }}
              >
                ZenVista *
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center font-para space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-black p-2  hover:bg-slate-200">
                <a href="#" onClick={() => handleNavigation("/home")}>
                  Home
                </a>
              </li>
              <li className="text-white hover:text-black p-2  hover:bg-slate-200">
                <a href="#" onClick={() => handleNavigation("/explore")}>
                  Explore
                </a>
              </li>
              <li className="text-white hover:text-black p-2  hover:bg-slate-200">
                <a href="#" onClick={() => handleNavigation("/about")}>
                  About US
                </a>
              </li>
              {/* <li className="text-white hover:text-black p-2  hover:bg-slate-200">
                <a href="#" onClick={() => handleNavigation("/contact")}>
                  Contact US
                </a>
              </li> */}
              <li className="text-white hover:text-black p-2  hover:bg-slate-200">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                    />
                  </svg>
                </a>
              </li>
              <li className="text-white hover:text-black p-2  hover:bg-slate-200">
                <a href="#" onClick={() => handleNavigation("/profile")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
