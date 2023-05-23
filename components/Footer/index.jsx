import React from "react";

const Footer = () => {
  return (
    <div className="h-36 max-w-[80%] mx-auto text-white">
      <div className="grid lg:grid-cols-4 grid-cols-2 items-center text-center">
        <div className="">
          <ul className="my-5">
            <li className="hover:cursor-pointer hover:underline">
              <span>Audio Description</span>
            </li>
            <li className="py-4 hover:cursor-pointer hover:underline">
              <span>Investor Relations</span>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <span>Legal Notices</span>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="my-5">
            <li className="hover:cursor-pointer hover:underline">
              <span>Help Center</span>
            </li>
            <li className="py-4 hover:cursor-pointer hover:underline">
              <span>Jobs</span>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <span>Cookie Preferences</span>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="my-5">
            <li className="hover:cursor-pointer hover:underline">
              <span>Gift Cards</span>
            </li>
            <li className="py-4 hover:cursor-pointer hover:underline">
              <span>Terms of Use</span>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <span>Corporate Information</span>
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className="hover:cursor-pointer hover:underline">
              <span>Media Center</span>
            </li>
            <li className="py-4 hover:cursor-pointer hover:underline">
              <span>Privacy</span>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <span>Contact Us</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-10 select-none">
        <p>©2023 All rights reserved - Privacy policy - Terms of service</p>
      </div>
    </div>
  );
};

export default Footer;
