"use client"; // Comment: Indicates the usage of client-side code

// Importing necessary components and libraries
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import DisscussionFourmArea from "./DisscussionFourmArea";
import MarketStoriesArea from "./MarketStoriesArea";
import { FaUser } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";

// Exporting the Dashboard component
export default function Dashboard() {
  // State variables
  const [isMenuOpen, setIsMenuOpen] = useState(true); // State for menu open/close
  const [activeAreaName, setActiveAreaName] = useState("discussion_forum"); // State for active area
  const [isDesktop, setIsDesktop] = useState(false); // State for desktop mode detection

  // Effect hook for detecting screen size changes
  useEffect(() => {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.addEventListener("click", function (event) {
      const currentElement = event.target;
      sideMenu.querySelectorAll("li").forEach((elem) => {
        elem.classList.remove("bg-blue-950");
      });
      if (currentElement.tagName === "LI") {
        currentElement.classList.add("bg-blue-950");
      } else if (currentElement.tagName === "P") {
        currentElement.parentElement.classList.add("bg-blue-950");
      }
    });

    // Function to track screen size
    const trackScreen = () => {
      const screen = window.innerWidth;

      // Checking if screen size is greater than 640px
      if (screen > 768) {
        setIsDesktop(true); // Set isDesktop to true
      } else {
        setIsDesktop(false); // Set isDesktop to false
      }
    };

    // Initial call to track screen size
    trackScreen();

    // Event listener for screen resize
    window.addEventListener("resize", trackScreen);

    // Cleanup function for removing event listener
    return () => {
      window.removeEventListener("resize", trackScreen);
    };
  }, []);

  // Rendering the Dashboard component
  return (
    <div className="flex relative z-[1] gap-4 bg-stone-100">
      {/* Mobile Menu Buttons */}
      <div className="flex md:hidden fixed top-0 w-full ">
        {/* Discussion Forum Button */}
        <button
          className={`text-white p-4 flex-grow ${
            activeAreaName === "discussion_forum"
              ? "bg-blue-950 border-b-2 border-red-400"
              : "bg-blue-800"
          }`}
          onClick={() => setActiveAreaName("discussion_forum")}
        >
          Discussion Forum
        </button>
        {/* Market Stories Button */}
        <button
          className={`text-white p-4 flex-grow ${
            activeAreaName === "market_stories"
              ? "bg-blue-950 border-b-2 border-red-400"
              : "bg-blue-800"
          }`}
          onClick={() => setActiveAreaName("market_stories")}
        >
          Market Stories
        </button>
      </div>
      {/* Menu Section */}
      <div
        className={`${
          isMenuOpen ? "w-[65%] sm:w-80" : "w-0"
        } transition-all text-white duration-500 bg-blue-900 h-screen absolute top-0 left-0 sm:relative z-[3]`}
      >
        {/* Menu Toggle Button */}
        <button
          className="text-neutral absolute top-1/2 left-full -translate-y-1/2 text-2xl bg-blue-900 text-white h-20 w-5 border-r-2 border-white p-1 flex justify-center items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaCaretRight />
        </button>
        {/* Header Section */}
        <header className="border-b border-white flex items-center justify-between overflow-hidden">
          {/* User Greeting */}
          <h2 className="flex gap-3 items-center pl-6 py-4 flex-shrink-0">
            <FaUser className="text-3xl" /> Hello, User
          </h2>
          {/* Notification Bell */}
          <div className="relative pr-6 py-4 flex-shrink-0">
            <FaBell className="text-2xl" />
            {/* Notification Indicator */}
            <div className=" bg-red-500 w-2 h-2 rounded-full absolute top-4 right-6"></div>
          </div>
        </header>
        {/* Menu Items */}
        <ul
          className="menu gap-3 mt-2 overflow-hidden text-sm sm:text-md"
          id="sideMenu"
        >
          {/* Discussion Forum */}
          <li className="flex items-center justify-between py-2 px-4 bg-blue-950">
            <p className="flex gap-2 items-center">
              <BiSolidMessageAltDetail className="text-2xl" /> Discussion Forum
            </p>
            <FaCaretDown className="text-xl" />
          </li>
          {/* Market Stories */}
          <li className="flex items-center py-2 px-4 gap-2">
            <AiFillDollarCircle className="text-2xl" /> Market Stories
          </li>
          {/* Other Menu Items */}
          <li className="sm:pl-12 py-2 px-4 gap-2">Sentiment</li>
          <li className="sm:pl-12 py-2 px-4 gap-2">Market</li>
          <li className="sm:pl-12 py-2 px-4 gap-2">Sector</li>
          <li className="sm:pl-12 py-2 px-4 gap-2">Watch List</li>
          <li className="sm:pl-12 py-2 px-4 gap-2">Events</li>
          <li className="sm:pl-12 py-2 px-4 gap-2">News/Interview</li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 sm:gap-8 flex-grow p-4 h-screen overflow-auto bg-white pt-20 sm:pt-4">
        {/* Conditional Rendering of Dashboard Areas based on screen size and active area */}
        {isDesktop ? (
          <>
            <DisscussionFourmArea />
            <MarketStoriesArea />
          </>
        ) : activeAreaName === "discussion_forum" ? (
          <DisscussionFourmArea />
        ) : (
          <MarketStoriesArea />
        )}
      </div>
    </div>
  );
}
