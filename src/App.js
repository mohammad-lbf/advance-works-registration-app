import React , {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import DesktopAside from './components/DesktopAside';
import Home from './components/Home';
import './styles/App.css';

const App = () => {
  const [darkmode , setDarkmode] = useState(false)
  return (
    <div className={`app ${darkmode && "darkmode"}`}>
      <DesktopAside setDarkmode={setDarkmode} darkmode={darkmode} />
        <Routes>
            <Route path="/"  element={<Home />}  />
            <Route path="/*" element={<Home />}  />

        </Routes>
    </div>
  );
};

export default App;