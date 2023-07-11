import './App.css';
import { Routes,Route } from 'react-router-dom';
import Grammar from './pages/GrammerPunctuation';
import TextEnhancer from './pages/TextEnhancer';
import TextAnalyzer from './pages/TextAnalyzer';
import About from './pages/About';
import { ThemeProvider,CssBaseline } from '@mui/material';
import { useState } from 'react';
import Nav from './components/Header/Nav';
import MenuBar from './components/MenuBar/MenuBar'
import { createTheme } from "@mui/material";



import { amber, grey} from '@mui/material/colors';
import Home from './pages/Home';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: grey[900],
      }),
    },
    ...(mode === 'dark' ? {
      background: {
        default:'#1D2F3E',
        paper: '##1D2F3E',
      }
    }:{
      background:{
      default:'#A0AECD',
      paper: '#0984e3',     
    }
  }),
    text: {
      ...(mode === 'light'
        ? {
            primary: "#111111",
            secondary: '#111111',
          }
        : {
            primary: '#C9E1C1',
            secondary: '#111111',
          }),
    },
  },
});



function App() {
  const[isDark,setDark]=useState(false);
  let screen=isDark?'light':'dark';
const theme1 = createTheme(getDesignTokens(screen));
  return (
    
      <ThemeProvider theme={theme1}>
      <CssBaseline>
      <Nav isDark={isDark} setDark={setDark}/>
      <MenuBar isDark={isDark}/>
        <Routes>
          <Route path="/" element={<Home isDark={isDark}/>} />
          <Route path="/text-enhancer" element={<TextEnhancer isDark={isDark} />} />
          <Route path="/grammar-corrector" element={<Grammar isDark={isDark} />} />
          <Route path="/note-to-summary" element={<TextAnalyzer isDark={isDark}/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        </CssBaseline>
  </ThemeProvider>
  );
}

export default App;
