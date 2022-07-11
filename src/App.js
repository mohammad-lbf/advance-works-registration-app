import React , {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import DesktopAside from './components/DesktopAside';
import Header from './components/Header';
import Home from './components/Home';
import HambergurMenuModal from './components/HambergurMenuModal';
import './styles/App.css';

const App = () => {
  const [darkmode , setDarkmode] = useState(false);
  const[open , setOpen] = useState(false);
  return (
    <div className={`app ${darkmode && "darkmode"} d-flex flex-column flex-xl-row align-items-center justify-content-between `}>
      <DesktopAside setDarkmode={setDarkmode} darkmode={darkmode} />
      <Header open={open} setOpen={setOpen} darkmode={darkmode} setDarkmode={setDarkmode} />
      {/* <HambergurMenuModal open={open} setOpen={setOpen} /> */}
        <Routes>
            <Route path="/"  element={<Home />}  />
            <Route path="/*" element={<Home />}  />

        </Routes>
    </div>
  );
};

export default App;