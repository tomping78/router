import React from "react";
import './App.css';
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch } from "antd";
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Articles from './Pages/Articles';
import Article from './Pages/Article';
import Layout from './Layout';

function App() {

  const [isDarkMode, setIsDarkMode] = React.useState();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  // Avoid theme change flicker
  if (status === "loading") {
    return null;
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />    
          <Route path="/profiles/:username" element={<Profile />} />
        </Route>  
        <Route path="/articles" element={<Articles />} >
          <Route path=":id" element={<Article />} />
        </Route>
      </Routes>
      <div className="main fade-in">
          <h1>The current theme is: {currentTheme}</h1>
          <Switch checked={isDarkMode} onChange={toggleTheme} />
      </div>
    </>
  );
}

export default App;
