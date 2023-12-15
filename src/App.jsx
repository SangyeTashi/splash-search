import './App.css';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { modalStateRecoil } from './recoilState';

function App() {
    const modalVisible = useRecoilValue(modalStateRecoil);

    return (
        <div
            className={`${
                modalVisible ? 'overflow-hidden' : 'overflow-auto'
            } h-screen`}
            style={{ scrollbarGutter: 'stable' }}
        >
            <Hero />
            <main>
                <Gallery />
            </main>
        </div>
    );
}

export default App;
