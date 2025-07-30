import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiInstagram, SiFacebook, SiGithub, SiLinkedin, SiLeetcode, SiBehance } from "react-icons/si"; 
import Navbar from './navbar.jsx';
import '../style.css';

export default function Home() {
  const titles = [
    "Frontend Developer",
    "PHP Developer",
    "Tech Enthusiast",
    "UI/UX Designer",
    "Lifelong Learner"
  ];

  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % titles.length);
        setVisible(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Navbar />

      <div className="container-fluid text-center space-grotesk px-3 px-md-5">

        {/* Image Row */}
        <div className="row justify-content-center mb-4">
          <div className="col-auto">
            <img
              src="./favicon.jpg"
              alt="Profile"
              className="rounded-circle shadow responsive-profile"
            />
          </div>
        </div>

        {/* Name and Titles Row */}
        <div className="row justify-content-center">
          <div className="col-12">
            <h1
              className="mb-2"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: "700",
              }}
            >
              I'm <span style={{ color: "#F47216" }}>Yathunadh Krishnan</span>
            </h1>
            <span
              className={`rotating-title${visible ? " visible" : ""}`}
              style={{
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                fontWeight: "700",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s",
                height: "3.5rem",
                display: "inline-block",
              }}
            >
              {titles[current]}
            </span>
            <p
              className="my-4"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              }}
            >
              Always learning, Being Creative and making cool things happen!
            </p>
            <a href="about.html" className="btn btn-dark btn-lg">
              About Me
            </a>
          </div>
        </div>

        {/* Social Links */}
<div className="d-flex justify-content-center gap-5  mt-4 flex-wrap">
  <Link
    to="https://www.linkedin.com/in/yathunadh-krishnan-p-u-280883233"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark fs-3 fs-md-2"
  >
    <SiLinkedin />
  </Link>

  <Link
    to="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark fs-3 fs-md-2"
  >
    <SiFacebook />
  </Link>

  <Link
    to="https://github.com/anonymousecode"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark fs-3 fs-md-2"
  >
    <SiGithub />
  </Link>

  <Link
    to="https://www.instagram.com/_yn_k_/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark fs-3 fs-md-2"
  >
    <SiInstagram />
  </Link>

  <Link
    to="https://leetcode.com/u/anonymousecode01/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark fs-3 fs-md-2"
  >
    <SiLeetcode />
  </Link>

  <Link
    to="https://www.behance.net/anonymousecode/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark fs-3 fs-md-2"
  >
    <SiBehance />
  </Link>
</div>


      </div>
    </div>
  );
}
