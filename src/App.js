import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Articles from './Pages/Articles';
import Article from './Pages/Article';
import Layout from './Layout';

function App() {
  return (
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
  );
}

export default App;
