import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '@/App';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import '../node_modules/antd/dist/antd.less';



const themes = {
  dark: '/dark-theme.css',
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeSwitcherProvider themeMap={themes} defaultTheme="light" insertionPoint={"styles-insertion-point"}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeSwitcherProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
