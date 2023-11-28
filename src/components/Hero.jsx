import React from 'react';
import SearchInput from './SearchInput';
import useFetch from '../hooks/useFetch';

function Hero() {
    const [heroImage, heroError, heroLoading] = useFetch(
        'photos/26b36df91f4f',
        {}
    );
    return (
        <>
            {heroError && <p>{heroError.message}</p>}
            {heroImage && (
                <div className="h-96 relative flex items-center justify-center bg-cover bg-no-repeat overflow-hidden">
                    <div className="flex flex-col items-center">
                        <h2 className="mb-5 font-bold text-3xl text-gray-500">
                            Download High Resolution Images by creators
                        </h2>
                        <SearchInput />
                        <img
                            className="absolute top-0 -z-10"
                            src={heroImage.urls.regular}
                            alt=""
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default Hero;
