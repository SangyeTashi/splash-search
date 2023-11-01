import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import Card from './Card';
import Error from './Error';

function Gallery() {
    const [images, loading, error] = useFetch('photos/', { per_page: 20 });

    return (
        <>
            {loading && <Loading />}
            {error && <Error error={error} />}
            {images && (
                <div className="columns-1 p-10 md:columns-2 lg:columns-3 xl:columns-4 gap-4 ">
                    {images.map((image) => {
                        return <Card imageData={image} />;
                    })}
                </div>
            )}
        </>
    );
}

export default Gallery;
