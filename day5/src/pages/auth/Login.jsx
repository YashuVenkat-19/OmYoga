import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../../assets/css/login.css";

export default function Login() {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "USER",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/auth/authenticate",
          formData
        );
        const token = response.data.token;
        console.log("Login successful, token:", token);
        localStorage.setItem("token", token);
        setToastMessage("Login Successful! Welcome back!");
        setShowToast(true); // Show toast message
        setTimeout(() => {
          setShowToast(false); // Hide toast message after 3 seconds
          navigate("/yoga-academy/home"); // Redirect to home page after successful login
        }, 3000);
      } catch (error) {
        console.error("Login failed:", error);
        setToastMessage("Login failed. Please try again."); // Set toast message for login failure
        setShowToast(true); // Show toast message
        setTimeout(() => setShowToast(false), 3000); // Hide toast message after 3 seconds
      }
    }
  };

  const handleRegister = () => {
    navigate("/yoga-academy/register");
  };
  const handleAdminLogin = () => {
    navigate("/yoga-academy/admin-login");
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
              ZenVista *
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
                        className={`w-full p-2 h-10 font-semibold text-black rounded-md font-para  py-1.5 shadow-sm ring-inset  placeholder:text-slate-400  focus:ring-slate-400 sm:text-sm sm:leading-6 ${
                          errors.email && "border-red-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 font-para">{errors.email}</p>
                      )}
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
                        className={`w-full p-2 h-10 rounded-md text-black  py-1.5 shadow-sm ring-inset ring- placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6 ${
                          errors.password && "border-red-500"
                        }`}
                      />
                      {errors.password && (
                        <p className="text-red-500 font-para">
                          {errors.password}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      type="submit"
                      className="font-para  flex h-12 w-full justify-center rounded-lg bg-slate-100 px-3 py-3  font-semibold leading-6 text-black shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                {showToast && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-2xl bg-sky-600 flex items-center justify-center border-4 border-sky-300 border-solid w-80 text-center pt-4 font-para h-32 text-white p-8 rounded-lg shadow-[0_30px_60px_rgba(8,_112,_184,_0.7)]  transition-all duration-500">
                    {toastMessage}
                  </div>
                )}

                <p className="mt-10 text-center text-l text-slate-100 font-para">
                  Not a member?{" "}
                  <span
                    onClick={handleRegister}
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Register here
                  </span>
                </p>
                <hr className="mt-8 border-3px border-white rounded-r-lg"></hr>
                <p
                  style={{ opacity: "1" }}
                  onClick={handleAdminLogin}
                  className="mt-3 text-center rounded-lg text-l p-3  bg-slate-50 hover:bg-sky-800 text-slate-100 font-para"
                >
                  <span className="font-semibold leading-6 w-[100%]  text-black hover:text-indigo-400">
                    Admin Login
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
