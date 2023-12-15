import Loading from './Loading';
import Card from './card/Card';
import useFetch from '../hooks/useFetch';
import Error from './Error';
function HomeFeed() {
    const [images, loading, error] = useFetch('photos', { per_page: 30 });

    return (
        <>
            {loading && <Loading />}
            {error && <Error error={error} />}
            {!loading && images && (
                <>
                    {images.map((image) => {
                        return <Card imageData={image} key={image.id} />;
                    })}
                </>
            )}
        </>
    );
}

export default HomeFeed;
