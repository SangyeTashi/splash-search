import React from 'react';
import SearchInput from './SearchInput';
import useFetch from '../hooks/useFetch';
import { useRecoilValue } from 'recoil';
import { isSearchRecoil } from '../recoilState';

function Hero() {
    const isSearch = useRecoilValue(isSearchRecoil);
    const [heroImage, heroImageLoading, heroImageError] =
        useFetch('photos/2p1U8zi7cwY');
    return (
        <>
            {heroImage && (
                <div
                    style={{
                        backgroundImage: `url(${
                            !isSearch && heroImage.urls.full
                        })`,
                        backgroundColor: !isSearch && heroImage.color,
                    }}
                    className={`${
                        isSearch ? 'h-20' : 'h-96'
                    } flex items-center flex-col justify-center overflow-hidden bg-cover bg-center transition-all duration-75 `}
                >
                    {!isSearch && (
                        <h2 className="mb-5 font-bold text-center text-3xl text-gray-100 px-4">
                            Download High Resolution Images by creators
                        </h2>
                    )}
                    <SearchInput />
                </div>
            )}
        </>
    );
}

export default Hero;
