import React from 'react';

function Card({ imageData }) {
    const {
        urls,
        alt_description,
        likes,
        user: { profile_image, name, username },
    } = imageData;
    // console.log(imageData);
    return (
        <div className="rounded-xl border border-gray-300  overflow-hidden mb-4">
            <img src={urls.small} className="w-full" alt={alt_description} />
            <div className="flex px-4 py-2 text-sm items-center">
                <img
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
                        src="src/assets/like.png"
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
