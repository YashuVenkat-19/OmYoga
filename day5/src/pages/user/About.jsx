import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "../../assets/css/pages.css";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

function TimeLineComp() {
  return (
    <Timeline className="font-para pl-2 m-8 text-xl">
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime className="text-white">February 2022</TimelineTime>
          <TimelineTitle className="text-yellow-400">
            Application UI code in Tailwind CSS
          </TimelineTitle>
          <TimelineBody className="text-white">
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </TimelineBody>
          {/* <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime className="text-white">March 2022</TimelineTime>
          <TimelineTitle className="text-yellow-400">
            Marketing UI design in Figma
          </TimelineTitle>
          <TimelineBody className="text-white">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime className="text-white">April 2022</TimelineTime>
          <TimelineTitle className="text-yellow-400">
            E-Commerce UI code in Tailwind CSS
          </TimelineTitle>
          <TimelineBody className="text-white">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

const About = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/yoga-academy/explore");
  };
  return (
    <>
      <div>
        <div className="blur-container">
          <div className="content-container">
            <NavBar />
            <div className="mt-40">
              <h1 className="text-4xl font-head  text-center">
                About ZenVista *
              </h1>
              {/* <p className="mt-10 mx-6 font-para sm:mx-20 md:mx-40 lg:mx-60 text-center text-lg">
                Yoga Academy is a place where you can learn and practice yoga.
                We offer a variety of classes for all levels, from beginners to
                advanced practitioners. Our experienced instructors will guide
                you through a safe and effective practice, helping you to
                improve your strength, flexibility, and overall well-being.
                Whether you are looking to relieve stress, improve your fitness,
                or simply enjoy the many benefits of yoga, we have a class for
                you. Come join us and discover the transformative power of yoga!
              </p> */}
              <div className="w-[80%] m-8 pl-20 flex justify-center">
                <TimeLineComp />
              </div>

              <p
                onClick={handleNavigate}
                className="mt-8 p-4 text-blue-500 text-center underline text-2xl font-para"
              >
                {" "}
                Explore our courses here.
              </p>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
