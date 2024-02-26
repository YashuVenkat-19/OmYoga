// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupComponent from "./components/SignupComponent";
import LandingPage from "./components/LadingPage";
import BirthdayTheme from "./components/BirthdayTheme";
import About from "./components/About";
import { lazy } from "react";
import LazyLayout from "./components/LazyLayout";
import Food from "./components/Food";
import Testimonials from "./components/Testimonials";
import Activities from "./components/Activities";
import Dashboard from "./components/Dash";
import CTA from "./components/CTA";
import ViewJobs from "./components/Job";
import Feedback from "./components/Feedback";
import CreateJob from "./components/CreateJob";
import UserDetails from "./components/UserDetails";

const lazyLogin = lazy(() => import("./components/LoginComponent"));

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LazyLayout component={lazyLogin} />} />
        <Route path="/login" element={<LazyLayout component={lazyLogin} />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/themes" element={<BirthdayTheme />} />
        <Route path="/food" element={<Food />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Testimonials />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/courses" element={<ViewJobs />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/createcourse" element={<CreateJob />} />
        <Route path="/userdetails" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
