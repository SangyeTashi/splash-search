import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import Card from './Card';
function HomeFeed() {
    const [images, error, loading] = useFetch('photos', { per_page: 30 });

    return (
        <>
            {loading && <Loading />}
            {error && <p>{error.message}</p>}
            {images && (
                <div className="columns-1 p-10 md:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-[1600px] mx-auto">
                    {images.map((image) => {
                        return <Card imageData={image} key={image.id} />;
                    })}
                </div>
            )}
        </>
    );
}

export default HomeFeed;
