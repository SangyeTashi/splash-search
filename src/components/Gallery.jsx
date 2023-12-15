import { useRecoilValue } from 'recoil';
import HomeFeed from './HomeFeed';
import { isSearchRecoil, searchQueryRecoil } from '../recoilState';
import { useEffect } from 'react';
import SearchGallery from './SearchGallery';
import { MdArrowDropUp } from 'react-icons/md';
function Gallery() {
    const searchQuery = useRecoilValue(searchQueryRecoil);
    const isSearch = useRecoilValue(isSearchRecoil);

    useEffect(() => {
        const scrollTopButton = document.getElementById('scroll-top-button');
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight) {
                scrollTopButton.style.display = 'block';
            } else {
                scrollTopButton.style.display = 'none';
            }
        });
    }, []);

    return (
        <div className="">
            {/* //scroll to top button */}
            <button
                className="scroll-top-button hidden z-50 fixed top-5 left-1/2 -translate-x-1/2 bg-white rounded-full p-2  shadow-lg shadow-black/40"
                type="button"
                id="scroll-top-button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
            >
                <MdArrowDropUp className="text-3xl" />
            </button>
            {isSearch ? (
                <SearchGallery searchQuery={searchQuery} />
            ) : (
                <HomeFeed />
            )}
        </div>
    );
}

export default Gallery;
