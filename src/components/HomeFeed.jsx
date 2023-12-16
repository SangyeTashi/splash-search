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
                <div className="columns-1 p-4 md:columns-2 lg:columns-3 xl:columns-4 w-full gap-4 max-w-[1600px] mx-auto overflow-hidden">
                    {images.map((image) => {
                        return <Card imageData={image} key={image.id} />;
                    })}
                </div>
            )}
        </>
    );
}

export default HomeFeed;
