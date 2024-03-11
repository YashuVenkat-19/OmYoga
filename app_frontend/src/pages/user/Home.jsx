import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "../../assets/css/pages.css";
import { useNavigate } from "react-router-dom";
import Chatbot from "../admin/ChatBot";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/yoga-academy/explore");
  };
  return (
    <>
      <div>
        <div className="page-blur-container">
          <div className="content-container">
            <NavBar />
            <div className="mt-40">
              <h1 className="text-4xl font-head  text-center">
                Welcome to Yoga Academy
              </h1>
              <p className="mt-10 mx-6 font-para sm:mx-20 md:mx-40 lg:mx-60 text-center text-lg">
                Yoga Academy is a place where you can learn and practice yoga.
                We offer a variety of classes for all levels, from beginners to
                advanced practitioners. Our experienced instructors will guide
                you through a safe and effective practice, helping you to
                improve your strength, flexibility, and overall well-being.
                Whether you are looking to relieve stress, improve your fitness,
                or simply enjoy the many benefits of yoga, we have a class for
                you. Come join us and discover the transformative power of yoga!
              </p>

              <p
                onClick={handleNavigate}
                className="mt-8 text-blue-500 text-center underline text-2xl font-para"
              >
                {" "}
                Explore our courses here.
              </p>
            </div>
            {/* <Chatbot /> */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
