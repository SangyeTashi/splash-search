import { useRecoilState, useRecoilValue } from 'recoil';
import HomeFeed from './HomeFeed';
import {
    isSearchRecoil,
    modalStateRecoil,
    searchQueryRecoil,
} from '../recoilState';
import { useEffect } from 'react';
import SearchGallery from './SearchGallery';
import { MdArrowDropUp } from 'react-icons/md';
import ModalView from './ModalView';

function Gallery() {
    const searchQuery = useRecoilValue(searchQueryRecoil);
    const isSearch = useRecoilValue(isSearchRecoil);
    const [modalVisible, setModalVisible] = useRecoilState(modalStateRecoil);

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
        <div>
            {modalVisible && <ModalView />}
            {/* //scroll to top button */}
            {}
            <button
                className={`scroll-top-button hidden z-10 fixed top-5 left-1/2 -translate-x-1/2 bg-white rounded-full p-2  shadow-lg shadow-black/40`}
                type="button"
                id="scroll-top-button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
            >
                <MdArrowDropUp className="text-3xl" />
            </button>
            <div className="columns-1 p-4 md:columns-2 lg:columns-3 xl:columns-4 w-full gap-4 max-w-[1600px] mx-auto overflow-hidden">
                {isSearch ? (
                    <SearchGallery searchQuery={searchQuery} />
                ) : (
                    <HomeFeed />
                )}
            </div>
        </div>
    );
}

export default Gallery;
