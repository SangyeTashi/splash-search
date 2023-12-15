import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modalContentRecoil, modalStateRecoil } from '../recoilState';

function ModalView({ ImageId }) {
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
            className="h-screen w-screen bg-black/40 fixed top-0 left-0 z-50 flex items-center justify-center "
            onClick={() => setModalVisible(false)}
        >
            <div
                className={` bg-white rounded-lg p-4 z-[100] w-full h-full md:w-[60%]`}
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={urls.regular}
                    alt={alt_description}
                    className=" h-full"
                    style={{ aspectRatio: width / height }}
                />
                <div></div>
            </div>
        </div>
    );
}

export default ModalView;
