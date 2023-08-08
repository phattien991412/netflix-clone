import React from "react";

const Footer = () => {
  return (
    <div className="h-36 max-w-[80%] mx-auto text-white">
      <div className="grid lg:grid-cols-4 grid-cols-2 items-center place-items-center text-center">
          <ul className="my-5">
            <li className="w-fit mx-auto">
              <span>Audio Description</span>
            </li>
            <li className="py-4 ">
              <span>Investor Relations</span>
            </li>
            <li className="w-fit mx-auto">
              <span>Legal Notices</span>
            </li>
          </ul>
          <ul className="my-5">
            <li className="w-fit mx-auto">
              <span>Help Center</span>
            </li>
            <li className="py-4 ">
              <span>Jobs</span>
            </li>
            <li className="w-fit mx-auto">
              <span>Cookie Preferences</span>
            </li>
          </ul>
          <ul className="my-5">
            <li className="w-fit mx-auto">
              <span>Gift Cards</span>
            </li>
            <li className="py-4 ">
              <span>Terms of Use</span>
            </li>
            <li className="w-fit mx-auto">
              <span>Corporate Information</span>
            </li>
          </ul>
          <ul className="my-5">
            <li className="w-fit mx-auto">
              <span>Media Center</span>
            </li>
            <li className="py-4 ">
              <span>Privacy</span>
            </li>
            <li className="w-fit mx-auto">
              <span>Contact Us</span>
            </li>
          </ul>
      </div>
      <div className="text-center py-10 select-none">
        <p>©2023 All rights reserved - Privacy policy - Terms of service</p>
      </div>
    </div>
  );
};

export default Footer;
