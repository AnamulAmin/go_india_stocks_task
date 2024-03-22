import React from "react";
import fourmData from "@/assets/fourmData"; // Importing data for forum
import FourmCard from "./ForumCard"; // Importing component for forum card

// Function component for Discussion Forum Area
function DisscussionFourmArea() {
  return (
    <div className="col-span-2">
      {/* Button for Discussion Forum */}
      <button className="hover:bg-stone-200 rounded-md bg-stone-200 p-4 text-center text-3xl font-bold text-red-500 hidden md:flex gap-2 ">
        Discussion Forum
      </button>
      {/* Mapping through forum data and rendering forum cards */}
      {fourmData.map((data, idx) => (
        <FourmCard data={data} key={idx} /> // Rendering forum card with unique key
      ))}
    </div>
  );
}

export default DisscussionFourmArea; // Exporting Discussion Forum Area component
