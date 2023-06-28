import './App.css';
import { Routes,Route } from 'react-router-dom';
import GrammerPunctuation from './pages/GrammerPunctuation';
import TextEnhancer from './pages/TextEnhancer';
import TextAnalyzer from './pages/TextAnalyzer';
import About from './pages/About';

function App() {


  return (
      <Routes>
        <Route path='/' element={<GrammerPunctuation/>}/>
        <Route path='/text-enhancer' element={<TextEnhancer/>}/>
        <Route path='/text-analyzer' element={<TextAnalyzer/>}/>
        <Route path='/about' element={<About/>}/>
        <Route/>
      </Routes>

        // <Routes>
        //   <Route path="/" element={<Home />} />
        //   <Route path="/text-enhancer" element={<TextEnhancer />} />
        //   <Route path="/grammar-punctuation-enhancer" element={<Grammar />} />
        //   <Route path="/text-analyzer" element={<TextAnalyzer />} />
        // </Routes>
  );
}

export default App;
