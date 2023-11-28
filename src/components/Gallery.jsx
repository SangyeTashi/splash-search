import { useRecoilValue } from 'recoil';
import HomeFeed from './HomeFeed';
import { isSearchRecoil, searchQueryRecoil } from '../recoilState';
import SearchGallery from './SearchGallery';

function Gallery() {
    const searchQuery = useRecoilValue(searchQueryRecoil);
    const isSearch = useRecoilValue(isSearchRecoil);
    return (
        <>
            {isSearch ? (
                <SearchGallery searchQuery={searchQuery} />
            ) : (
                <HomeFeed />
            )}
        </>
    );
}

export default Gallery;
