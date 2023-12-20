import './App.css';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import { useRecoilValue } from 'recoil';
import { modalStateRecoil } from './recoilState';
import { MdArrowUpward } from 'react-icons/md';
import { useState } from 'react';
import Footer from './components/Footer';
function App() {
    const modalVisible = useRecoilValue(modalStateRecoil);
    const [scrollButtonVisible, setScrollButtonVisible] = useState(false);

    function handleScroll(e) {
        if (e.target.scrollTop > window.innerHeight) {
            setScrollButtonVisible(true);
        } else {
            setScrollButtonVisible(false);
        }
    }
    return (
        <div
            id="scroll"
            className={`${
                modalVisible ? 'overflow-hidden' : 'overflow-auto'
            } h-screen relative`}
            style={{ scrollbarGutter: 'stable' }}
            onScroll={handleScroll}
        >
            <button
                className={`scroll-top-button ${
                    scrollButtonVisible ? 'block' : 'hidden'
                }  z-10 fixed top-5 left-1/2 -translate-x-1/2 bg-white rounded-full p-2  shadow-lg shadow-black/40`}
                type="button"
                id="scroll-top-button"
                onClick={() => {
                    document.getElementById('scroll').scrollTo({
                        top: 0,
                    });
                }}
            >
                <MdArrowUpward className="text-3xl" />
            </button>
            <Hero />
            <main id="" className="">
                <Gallery />
            </main>
        </div>
    );
}

export default App;
