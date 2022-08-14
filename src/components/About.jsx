import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="About">
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="mb-4">
              The iPhone is a smartphone made by Apple that combines a computer,
              iPod, digital camera and cellular phone into one device with a
              touchscreen interface. The iPhone runs the iOS operating system,
              and in 2021 when the iPhone 13 was introduced, it offered up to 1
              TB of storage and a 12-megapixel camera. The iPhone 3G exchanged
              the flat aluminum housing of the first-generation iPhone for a
              sleek, convex black or white plastic case. The switch to plastic
              enabled better transmission for the many radio receivers inside
              the device. Less than a year after the debut of the iPhone 3G, on
              June 8, 2009, Apple released the iPhone 3GS and iPhone OS 3.0.
              Available in 16 GB and 32 GB models, the iPhone 3GS featured
              several hardware improvements, including a video camera, built-in
              compass and faster download speeds through 7.2 megabits per second
              (Mbps) HSDPA support.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src="/assets/about us.avif" alt="About us"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
