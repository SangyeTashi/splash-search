import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MdOutlineFileDownload } from 'react-icons/md';
import likeIcon from '../assets/like.png';
function Card({ imageData }) {
    const {
        urls,
        links,
        alt_description,
        likes,
        height,
        color,
        width,
        user: { profile_image, name, username },
    } = imageData;

    return (
        <div className="rounded-xl border border-gray-300  overflow-hidden mb-4">
            <div
                className={`w-full relative group overflow-hidden`}
                style={{ aspectRatio: width / height, backgroundColor: color }}
            >
                <a
                    href={links.download}
                    target="_blank"
                    className="hidden group-hover:block"
                >
                    <MdOutlineFileDownload
                        className={`absolute right-5 top-3 w-9 h-9 rounded-md bg-white/70 backdrop-blur-lg p-1`}
                    />
                </a>
                <LazyLoadImage
                    src={urls.small}
                    className="w-full"
                    alt={alt_description}
                    loading="lazy"
                />
            </div>

            <div className={`flex px-4 py-2 text-sm items-center `}>
                <LazyLoadImage
                    className="rounded-full w-12 h-12 mr-2"
                    src={profile_image.medium}
                    alt=""
                    loading="lazy"
                />
                <div className="flex flex-col items-start">
                    <div className="font-bold text-gray-800">{name}</div>
                    <div className="text-gray-700 italic">@{username}</div>
                </div>
                <div className="ml-auto flex items-center">
                    <img
                        src={likeIcon}
                        className="w-4 h-4 mr-1 mb-[2px]"
                        alt=""
                    />
                    {likes}
                </div>
            </div>
        </div>
    );
}

export default Card;
