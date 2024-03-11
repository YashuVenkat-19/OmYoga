import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    mobileNumber: "",
    userRole: "USER",
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!formData.mobileNumber) {
      errors.mobileNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = "Invalid phone number";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/auth/register",
          formData
        );
        console.log("Registration successful:", response.data);
        if (response.data.token === "Email Already exists") {
          setToastMessage("Email Already exists");
          setShowToast(true); // Show toast message
          setTimeout(() => {
            setShowToast(false); // Hide toast message after 3 seconds
            // navigate("/yoga-academy/login"); // Redirect to login page after successful registration
          }, 3000);
        } else {
          setToastMessage("Registration Successful! Welcome to ZenVista *!");
          setShowToast(true); // Show toast message
          setTimeout(() => {
            setShowToast(false); // Hide toast message after 3 seconds
            navigate("/yoga-academy/login"); // Redirect to login page after successful registration
          }, 3000);
        }
        // navigate("/yoga-academy/login"); // Redirect to login page after successful registration
      } catch (error) {
        console.error("Registration failed:", error);
        // Handle registration failure, show error message to the user, etc.
      }
    }
  };

  const handleUserLogin = () => {
    navigate("/yoga-academy/login");
  };

  return (
    <>
      <div className="blur-container">
        <div className="content-container">
          <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 font-head  text-center leading-9 tracking-tight text-white">
                {"     "}ZenVista *
              </h2>
              <h5 className="mt-10 font-para text-center text-xl leading-9 tracking-tight text-white">
                Sign up to the world of peace with Zenvista
              </h5>
            </div>

            <div className="mt-10 sm:mx-auto" style={{ width: "70%" }}>
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="name" className="font-para text-white">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full p-2 h-10 font-semibold text-black rounded-md font-para py-1.5 shadow-sm ring-inset placeholder:text-slate-400 focus:ring-slate-400 sm:text-sm sm:leading-6 ${
                        errors.name && "border-red-500"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 font-para">{errors.name}</p>
                    )}
                  </div>
                </div>

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
                      className={`w-full p-2 h-10 font-semibold text-black rounded-md font-para py-1.5 shadow-sm ring-inset placeholder:text-slate-400 focus:ring-slate-400 sm:text-sm sm:leading-6 ${
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
                      className={`w-full p-2 h-10 rounded-md py-1.5 shadow-sm text-black ring-inset ring- placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6 ${
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

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="font-para text-white"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      autoComplete="current-password"
                      required
                      className={`w-full p-2 h-10 rounded-md py-1.5 shadow-sm text-black ring-inset ring- placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6 ${
                        errors.confirmPassword && "border-red-500"
                      }`}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 font-para">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="font-para text-white"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="mobileNumber"
                      name="mobileNumber"
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                      className={`w-full p-2 h-10 font-semibold text-black rounded-md font-para py-1.5 shadow-sm ring-inset placeholder:text-slate-400 focus:ring-slate-400 sm:text-sm sm:leading-6 ${
                        errors.mobileNumber && "border-red-500"
                      }`}
                    />
                    {errors.mobileNumber && (
                      <p className="text-red-500 font-para">
                        {errors.mobileNumber}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    onClick={handleRegister}
                    className="font-para flex h-12 w-full justify-center rounded-lg bg-slate-100 px-3 py-3 text-l font-semibold leading-6 text-black shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                  >
                    Register
                  </button>
                </div>
              </form>
              {/* Toast message */}
              {showToast && (
                // <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded shadow-lg">
                //   Registration successful!
                // </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-2xl bg-sky-600 flex items-center justify-center border-4 border-sky-300 border-solid w-80 text-center pt-4 font-para h-32 text-white p-8 rounded-lg shadow-[0_30px_60px_rgba(8,_112,_184,_0.7)]  transition-all duration-500">
                  {toastMessage}
                </div>
              )}

              <p className="mt-10 text-center font-para text-white">
                Already a member?{" "}
                <span
                  onClick={handleUserLogin}
                  className="font-semibold leading-6 text-indigo-500 hover:text-indigo-400"
                >
                  Login here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
