import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md ">

      {/* Header */}
      <div className="flex justify-between items-center bg-base-200 p-4 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-xl text-gray-500">
          <CiBookmark className="cursor-pointer hover:text-primary" />
          <CiShare2 className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-bold">{title}</h2>

        <img
          src={thumbnail_url}
          alt="news"
          className="w-full rounded-lg"
        />

        <p className="text-gray-600">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <span className="text-primary font-semibold cursor-pointer">
                {" "}Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 border-t">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-600 font-medium">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;