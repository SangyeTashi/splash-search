import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import Error from './Error';
import Card from './Card';
import close from '../assets/close.png';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { isSearchRecoil, searchQueryRecoil } from '../recoilState';
function SearchGallery({ searchQuery }) {
    const [images, loading, error] = useFetch('search/photos/', {
        query: searchQuery,
        per_page: 30,
    });

    const setIsSearch = useSetRecoilState(isSearchRecoil);
    const resetQuery = useResetRecoilState(searchQueryRecoil);

    function handleClick(e) {
        e.preventDefault();
        setIsSearch(false);
        resetQuery();
    }
    return (
        <>
            {loading && <Loading />}
            {!loading && error && <Error error={error} />}
            {!error && !loading && images && (
                <div className="flex flex-col items-center">
                    <div className="bg-gray-200 rounded-full items-center px-4 py-1 pr-1 flex">
                        {images.results.length !== 0 ? (
                            <div className="mr-2">
                                results for "{searchQuery}"
                            </div>
                        ) : (
                            <div className="mr-2">
                                No images found for "{searchQuery}"
                            </div>
                        )}
                        <button
                            className="bg-slate-100 rounded-full flex items-center justify-center w-10 h-10 p-2 cursor-pointer hover:bg-slate-300"
                            onClick={handleClick}
                        >
                            <img src={close} className="w-3 h-3" alt="close" />
                        </button>
                    </div>
                    <div className="columns-1 p-4 md:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-[1600px] mx-auto">
                        {images.results.map((image) => {
                            return <Card imageData={image} key={image.id} />;
                        })}
                    </div>
                </div>
            )}
        </>
    );
}

export default SearchGallery;
