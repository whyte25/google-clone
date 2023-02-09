import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "all" },
  { url: "/news", text: "news" },
  { url: "/image", text: "images" },
  { url: "/videos", text: "videos" },
];

export default function Links() {
  return (
    <div className="flex space-x-4 sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, index) => (
        <NavLink
          key={index}
          to={url}
          className={`${({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
              : "text-blue-700  dark:text-blue-300"}`}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
}
