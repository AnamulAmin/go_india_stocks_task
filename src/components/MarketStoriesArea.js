import React from "react"; // Importing React
import marketStoriesData from "@/assets/images/marketStoriesData"; // Importing market stories data
import StoryCard from "./StoryCard"; // Importing StoryCard component

// Function component for Market Stories Area
function MarketStoriesArea(props) {
  return (
    <div className="col-span-full sm:col-span-1">
      {/* Button for Market Stories */}
      <button className="hover:bg-stone-200 rounded-md bg-stone-200 p-4 text-center text-3xl font-bold text-red-500 hidden sm:flex gap-2 mb-5 ">
        Market Stories
      </button>
      {/* Mapping through market stories data and rendering story cards */}
      {marketStoriesData.map((data, idx) => (
        <StoryCard data={data} key={idx} /> // Rendering story card with unique key
      ))}
    </div>
  );
}

export default MarketStoriesArea; // Exporting MarketStoriesArea component
