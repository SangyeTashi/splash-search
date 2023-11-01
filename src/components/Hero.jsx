import React from 'react';
import useFetch from '../hooks/useFetch';
import SearchInput from './SearchInput';

function Hero({ setIsSearch, setQuery }) {
    const [image, loading, error] = useFetch('photos/', {
        id: 'Dwu85P9SOIk',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setQuery();
        setIsSearch(true);
    };

    return (
        <div
            className={`h-96 flex items-center justify-center overflow-hidden relative bg-slate-800
            `}
        >
            <div className="absolute bottom-3 right-4 text-slate-500">
                {error && `bg-image : ${error.message}`}
                {loading && 'image loading'}
            </div>
            {image && (
                <>
                    <img
                        className="w-full absolute -z-10"
                        src={image.urls.regular}
                        alt={image.description}
                        loading="lazy"
                    />
                </>
            )}

            <div className="flex flex-col items-center">
                <h2 className="mb-5 text-slate-100 font-bold text-3xl">
                    Download High Resolution Images by creators
                </h2>
                <form action="" onSubmit={handleSubmit}>
                    <SearchInput />
                </form>
            </div>
        </div>
    );
}

export default Hero;
