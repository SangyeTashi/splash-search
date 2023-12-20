import { useRecoilValue } from 'recoil';
import HomeFeed from './HomeFeed';
import {
    isSearchRecoil,
    modalStateRecoil,
    searchQueryRecoil,
} from '../recoilState';
import { useEffect } from 'react';
import SearchGallery from './SearchGallery';

import ModalView from './ModalView';

function Gallery() {
    const searchQuery = useRecoilValue(searchQueryRecoil);
    const isSearch = useRecoilValue(isSearchRecoil);
    const modalVisible = useRecoilValue(modalStateRecoil);

    return (
        <div>
            {modalVisible && <ModalView />}
            {/* //scroll to top button */}

            {isSearch ? (
                <SearchGallery searchQuery={searchQuery} />
            ) : (
                <HomeFeed />
            )}
        </div>
    );
}

export default Gallery;
