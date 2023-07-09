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

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: grey[300],
      }),
    },
    ...(mode === 'dark' ? {
      background: {
        default:'#1B1464',
        paper: '#1B1464',
      }
    }:{
      background:{
      default:'#0984e3',
      paper: '#0984e3',     
    }
  }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: '#111',
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
          <Route path="/" element={<About/>} />
          <Route path="/text-enhancer" element={<TextEnhancer isDark={isDark} />} />
          <Route path="/grammar-corrector" element={<Grammar isDark={isDark} />} />
          <Route path="/text-analyzer" element={<TextAnalyzer />} />
          <Route path="/about" element={<About/>} />
        </Routes>
        </CssBaseline>
  </ThemeProvider>
  );
}

export default App;
