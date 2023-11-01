import { useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Hero from './components/Hero';

function App() {
    const [isSearch, setIsSearch] = useState(false);
    const [query, setQuery] = useState(null);
    return (
        <>
            <Hero setIsSearch={setIsSearch} setQuery={setQuery} />
            <main>{isSearch ? <SearchGallery /> : <Gallery />}</main>
        </>
    );
}

export default App;
