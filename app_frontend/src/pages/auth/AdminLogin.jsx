import "../../assets/css/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "ADMIN",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        formData
      ); // Replace '/api/login' with your backend endpoint
      // Assuming the backend returns a token upon successful login
      const token = response.data.token;
      console.log("Login successful, token:", token);
      // Store the token in local storage or session storage
      localStorage.setItem("token", token);
      // Redirect to the home page or dashboard
      navigate("/yoga-academy/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure, show error message to the user, etc.
    }
  };

  const handleRegister = () => {
    navigate("/yoga-academy/register");
  };
  const handleUserLogin = () => {
    navigate("/yoga-academy/login");
  };

  return (
    <>
      <div className="blur-container">
        <div className="content-container">
          <div className="m-1">
            {/* <p className="mt-10 top-0 text-center leading-9 font-para tracking-tight text-white">
            ZenVista *
          </p> */}
            <h2 className="mt-28 pl-52 font-head leading-9 tracking-tight text-white">
              ZenVista * - Admin
            </h2>
            <div className="flex min-h-100 mt-16 flex-1 flex-col justify-center px-6 py-10 lg:px-8">
              {/* <div className="sm:100 sm:w-80 sm:max-w-sm">
              <div className="font-head flex flex-1 flex-col justify-center text-slate-100"></div>
            </div> */}

              <div
                className="mt-6 sm:mx-auto"
                style={{ width: "70%", height: "50%" }}
              >
                <form className="space-y-6" onSubmit={handleLogin}>
                  <div>
                    <label htmlFor="email" className="font-para text-white">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className=" w-full p-2 h-10 font-semibold text-black rounded-md font-para  py-1.5 shadow-sm ring-inset  placeholder:text-slate-400  focus:ring-slate-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="font-para text-white">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        autoComplete="current-password"
                        required
                        className=" w-full p-2 h-10 rounded-md text-black  py-1.5 shadow-sm ring-inset ring- placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      type="submit"
                      className="font-para  flex h-12 w-full justify-center rounded-lg bg-slate-100 px-3 py-3  font-semibold leading-6 text-black shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                {/* <p className="mt-10 text-center text-l text-slate-100 font-para">
                  New admin register?{" "}
                  <span
                    onClick={handleRegister}
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Register here
                  </span>
                </p> */}

                <hr className="mt-8 border-3px border-white rounded-r-lg"></hr>
                <p className="mt-10 text-center text-l text-slate-100 font-para">
                  Are you a user? Login below
                  {/* <span
                    onClick={handleRegister}
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Register here
                  </span> */}
                </p>
                <p
                  style={{ opacity: "1" }}
                  onClick={handleUserLogin}
                  className="mt-3 text-center rounded-lg text-l p-3  bg-slate-50 hover:bg-sky-800 text-slate-100 font-para"
                >
                  <span className="font-semibold leading-6 w-[100%]  text-black hover:text-indigo-400">
                    User Login
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
