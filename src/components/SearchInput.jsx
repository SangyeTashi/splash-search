import React, { useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isSearchRecoil, searchQueryRecoil } from '../recoilState';
import searchIcon from '../assets/loupe.png';
function SearchInput() {
    const inputRef = useRef();
    const setIsSearch = useSetRecoilState(isSearchRecoil);
    const setQuery = useSetRecoilState(searchQueryRecoil);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputRef.current.value !== '') {
            setQuery(inputRef.current.value);
            inputRef.current.value = '';
            inputRef.current.blur();
            setIsSearch(true);
        }
    };
    return (
        <form
            className="relative flex  border-l border-y border-gray-300 rounded-lg"
            onSubmit={handleSubmit}
        >
            <input
                className="focus:outline-none rounded-s-lg pl-14 px-8 py-3 "
                placeholder="Search high resolution Images, categories, wallpapers"
                type="text"
                ref={inputRef}
            />
            <img
                className="w-5 absolute left-5 top-[14px] opacity-75"
                src={searchIcon}
                alt="search icon"
            />
            <input
                type="submit"
                className="bg-gray-300 text-gray-800 rounded-e-lg px-3 cursor-pointer"
                value="Search"
            />
        </form>
    );
}

export default SearchInput;
