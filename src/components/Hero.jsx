import React from 'react';
import SearchInput from './SearchInput';
import useFetch from '../hooks/useFetch';
import { useRecoilValue } from 'recoil';
import { isSearchRecoil } from '../recoilState';

function Hero() {
    const isSearch = useRecoilValue(isSearchRecoil);
    return (
        <>
            <div
                className={`${
                    isSearch ? 'h-20' : 'h-60'
                } flex items-center flex-col justify-center overflow-hidden bg-cover bg-center transition-all duration-75`}
            >
                {!isSearch && (
                    <h2 className="mb-7 font-bold text-center text-3xl text-gray-900 px-4">
                        Download High Resolution Images by creators
                    </h2>
                )}
                <SearchInput />
            </div>
        </>
    );
}

export default Hero;
