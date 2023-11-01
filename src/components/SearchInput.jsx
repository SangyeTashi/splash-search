import React from 'react';

function SearchInput() {
    return (
        <div className="relative">
            <input
                className="focus:outline-none rounded-lg pl-14 px-8 py-3 w-[35rem]"
                placeholder="Search high resolution Images, categories, wallpapers"
                type="text"
            />
            <img
                className="w-5 absolute left-7 top-[14px] opacity-75"
                src="/src/assets/loupe.png"
                alt="search icon"
            />
        </div>
    );
}

export default SearchInput;
