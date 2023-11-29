import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import Card from './Card';
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
            {error && <p>{error.message}</p>}
            {loading && <Loading />}
            {!loading && images && (
                <div className="flex flex-col items-center">
                    <div className="bg-gray-200 rounded-full items-center px-4 py-1 pr-1 flex">
                        <div className="mr-2">results for "{searchQuery}"</div>
                        <button
                            className="bg-slate-100 rounded-full w-10 h-10 p-2 cursor-pointer hover:bg-slate-300"
                            onClick={handleClick}
                        >
                            X
                        </button>
                    </div>
                    <div className="columns-1 p-10 md:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-[1600px] mx-auto">
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
