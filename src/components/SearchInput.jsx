import React, { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { isSearchRecoil, searchQueryRecoil } from '../recoilState';

function SearchInput() {
    const inputRef = useRef();
    const setIsSearch = useSetRecoilState(isSearchRecoil);
    const setQuery = useSetRecoilState(searchQueryRecoil);

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(inputRef.current.value);
        setIsSearch(true);
    };

    return (
        <form className="relative" onSubmit={handleSubmit}>
            <input
                className="focus:outline-none rounded-lg pl-14 px-8 py-3 w-[35rem]"
                placeholder="Search high resolution Images, categories, wallpapers"
                type="text"
                ref={inputRef}
            />
            <img
                className="w-5 absolute left-7 top-[14px] opacity-75"
                src="/src/assets/loupe.png"
                alt="search icon"
            />
            <input type="submit" value="search" />
        </form>
    );
}

export default SearchInput;
