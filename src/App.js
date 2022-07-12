import React , {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import DesktopAside from './components/DesktopAside';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home';
import './styles/App.css';

const App = () => {
  const [darkmode , setDarkmode] = useState(false);
  const[open , setOpen] = useState(false);
  return (
    <div className={`app ${darkmode && "darkmode"} d-flex flex-column flex-xl-row align-items-center justify-content-between `}>
      <DesktopAside setDarkmode={setDarkmode} darkmode={darkmode} />
      <Header open={open} setOpen={setOpen} darkmode={darkmode} setDarkmode={setDarkmode} />
        <Routes>
            <Route path="/"        element={<Home />}  />
            <Route path="/*"       element={<Home />}  />
            <Route path="/addwork" element={<Form />} />
        </Routes>
    </div>
  );
};

export default App;