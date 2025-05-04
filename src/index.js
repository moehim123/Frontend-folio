import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const theme = extendTheme({
  fonts: {
    heading: "'Montserrat', sans-serif",
    body:    "'Montserrat', sans-serif",
    mono:    "'Mona Sans', sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#F9F9F9",
        color: "#333333",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider> 
  </BrowserRouter> 
);

reportWebVitals();

