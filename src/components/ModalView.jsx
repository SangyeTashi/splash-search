import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modalContentRecoil, modalStateRecoil } from '../recoilState';
import { MdClose, MdThumbUp } from 'react-icons/md';
import likeIcon from '../assets/like.png';
function ModalView() {
    const modalContent = useRecoilValue(modalContentRecoil);
    const setModalVisible = useSetRecoilState(modalStateRecoil);
    const {
        urls,
        links,
        alt_description,
        likes,
        height,
        color,
        width,
        user: { profile_image, name, username },
    } = modalContent;

    return (
        <div
            className="fixed inset-0 overflow-y-auto bg-black/70 z-50 backdrop-blur-lg "
            onClick={() => setModalVisible(false)}
        >
            <MdClose className="text-lg fixed top-2 left-2 text-white cursor-pointer w-7 h-7 " />
            <div
                className={`bg-white mt-12 w-full md:w-[90%] rounded-md mx-auto mb-12`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center px-5 py-3 xl:py-5 max-w-5xl mx-auto">
                    <div className="flex-1 flex items-center">
                        <img
                            className="rounded-full h-10 w-10 mr-2"
                            src={profile_image.medium}
                            alt="profile image"
                        />
                        <div className="">
                            <p className="-mb-1">{name}</p>
                            <p className="italic">@{username}</p>
                        </div>
                    </div>
                    <a href={links.download} className="cursor-pointer">
                        <div className="outline px-3 py-2 text-sm outline-1 outline-gray-500 rounded-md">
                            Download
                        </div>
                    </a>
                </div>
                <div className="mb-3 h-screen md:h-[800px] flex items-center justify-center">
                    <img
                        className="h-full w-full object-contain md:p-5
                        "
                        src={urls.regular}
                        alt={alt_description}
                    />
                </div>
                <div className="flex p-6">
                    <div className="flex">
                        <img
                            className="w-5 h-5 mr-2"
                            src={likeIcon}
                            alt="lke Icon"
                        />
                        <span className="font-bold mr-1">{likes}</span>
                        likes
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalView;
