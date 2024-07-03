import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { MdDownloadForOffline } from "react-icons/md";


import { client, urlFor } from "../client";


const Pin = ({ pin }) => {
  const [postHovered, setPostHovered] = useState(false);
  const [savingPost, setSavingPost] = useState(false);

  const navigate = useNavigate();
  const { postedBy, image, _id, destination } = pin;
          return <div className="m-2">
            <div
              onMouseEnter={() => setPostHovered(true)}
              onMouseLeave={() => setPostHovered(false)}
              onClick={() => navigate(`/pin-detail/${_id}`)}
              className=" relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
            >
              {image && (
                <img
                  className="rounded-lg w-full "
                  src={urlFor(image).width(250).url()}
                  alt="user-post"
                />
              )}
              {postHovered && (
          <div
            className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50"
            style={{ height: "100%" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <a
                  href={`${image?.asset?.url}?dl=`}
                  download
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="bg-white w-9 h-9 p-2 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
                >
                  <MdDownloadForOffline />
                </a>
              </div>
              </div>
              
              </div>
              )}
           
              
            </div>
          </div>
       

}


export default Pin;