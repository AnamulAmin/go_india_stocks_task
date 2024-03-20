import Image from "next/image"; // Importing Image component from Next.js
import React from "react"; // Importing React
import userImage from "@/assets/images/user.jpg"; // Importing user image
import { CiHeart } from "react-icons/ci"; // Importing Heart icon from react-icons
import { FaRegEye } from "react-icons/fa"; // Importing Eye icon from react-icons
import { LiaComments } from "react-icons/lia"; // Importing Comments icon from react-icons
import { IoShareSocialOutline } from "react-icons/io5"; // Importing Share icon from react-icons

// Functional component for Forum Card
const ForumCard = ({ data }) => {
  const { user_name, date, likes, views, comments, image, description } = data; // Destructuring props
  return (
    <div className="mb-8 sm:mt-8 flex flex-col sm:flex-row rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">
      {/* User Image */}
      <Image
        className="mr-5 block  text-left align-middle h-16 w-16 border rounded-full"
        src={userImage}
        alt="User Picture"
        width={60}
        height={60}
      />
      <div className="w-full text-left">
        {/* User Name and Date */}
        <div className="mb-2 flex flex-wrap justify-between text-gray-600 ">
          <h3 className="font-medium flex flex-wrap gap-3">
            {user_name}
            {/* User Sector */}
            <span className="text-xs sm:ml-2 font-normal py-1 px-5 rounded-full bg-blue-800 text-white">
              Sector 2
            </span>
          </h3>
          {/* Post Date */}
          <time
            className="text-sm sm:text-md font-semibold text-blue-600"
            datetime="2022-11-13T20:00Z"
          >
            {date}
          </time>
        </div>
        {/* Post Description */}
        <p className="text-sm">{description}</p>
        {/* Like, View, Comment, Share buttons */}
        <div className="mt-5 flex items-center gap-4 text-gray-600 flex-wrap">
          {/* Like Button */}
          <button className="hover:bg-stone-300 rounded-md  p-2 text-sm sm:text-center text-md font-semibold flex gap-2 items-center">
            <CiHeart className="text-sm sm:text-3xl" /> {likes}
          </button>
          {/* View Button */}
          <button className="hover:bg-stone-300 rounded-md p-2 text-center text-sm sm:text-md font-semibold flex gap-2 items-center">
            <FaRegEye className="text-sm sm:text-3xl" /> {views}
          </button>
          {/* Comment Button */}
          <button className="hover:bg-stone-300 rounded-md p-2 text-center text-sm sm:text-md font-semibold flex gap-2 items-center">
            <LiaComments className="text-sm sm:text-3xl" /> {comments}
          </button>
          {/* Share Button */}
          <button className="hover:bg-stone-300 rounded-md  p-2 text-center text-sm sm:text-md font-semibold flex gap-2 items-center">
            <IoShareSocialOutline className="text-sm sm:text-3xl" /> share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForumCard; // Exporting ForumCard component
