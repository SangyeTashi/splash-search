import { useRecoilValue } from 'recoil';
import HomeFeed from './HomeFeed';
import { isSearchRecoil, searchQueryRecoil } from '../recoilState';
import SearchGallery from './SearchGallery';

function Gallery() {
    const searchQuery = useRecoilValue(searchQueryRecoil);
    const isSearch = useRecoilValue(isSearchRecoil);

    function switchGallery() {
        if (isSearch) {
            return <SearchGallery searchQuery={searchQuery} />;
        }
        return <HomeFeed />;
    }

    return switchGallery();
}

export default Gallery;
