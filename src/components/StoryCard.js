import Image from "next/image"; // Importing Image component from Next.js
import React from "react"; // Importing React

// Function component for Story Card
function StoryCard({ data }) {
  const { title, description, image } = data; // Destructuring props to access data
  return (
    <div className="card bg-base-100 shadow-lg p-4 mb-6">
      {/* Image */}
      <figure>
        <Image
          src={image}
          alt="Image"
          width={300}
          height={400}
          className="w-full object-cover"
        />
      </figure>
      {/* Card Body */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title my-4">{title}</h2>
        {/* Description */}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default StoryCard; // Exporting StoryCard component
