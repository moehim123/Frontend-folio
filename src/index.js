import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import "@fontsource/aileron";

const theme = extendTheme({
  fonts: {
    heading: "Aileron, sans-serif",
    body: "Aileron, sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#ffffff",
        color: "#333",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
);

reportWebVitals();
