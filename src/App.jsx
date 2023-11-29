import './App.css';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import { RecoilRoot } from 'recoil';

function App() {
    return (
        <RecoilRoot>
            <Hero />
            <main>
                <Gallery />
            </main>
        </RecoilRoot>
    );
}

export default App;
