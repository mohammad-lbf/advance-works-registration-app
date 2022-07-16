import React , {useState , useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import DesktopAside from './components/DesktopAside';
import Edit from './components/Edit';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home';
import WorksContextProvider from './context/WorksContextProvider';
import FilterWorksContextProvider from './context/FilterWorksContextProvider';
import useLocalStorage from './hooks/UseLocalStorage';
import './styles/App.css';
import TodayWorks from './components/TodayWorks';
import DoneWorks from './components/ِDoneWorks';
import UnDoneWorks from './components/UnDoneWoks';
import HambergurMenuModal from './components/HambergurMenuModal';

const App = () => {
  const [darkmode , setDarkmode] = useState(false);
  const [localDarkMode , setLocalDarkMode] = useLocalStorage("darkmode" , false)
  const[open , setOpen] = useState(false);
  useEffect(()=>{
    setDarkmode(localDarkMode);
  } , [] );
  useEffect(()=>{
    setLocalDarkMode(darkmode)
  } , [darkmode])
  return (
    <>
    <WorksContextProvider>
      <FilterWorksContextProvider>
      <div className={`app ${darkmode && "darkmode"} d-flex flex-column flex-xl-row align-items-center justify-content-between `}>
      <DesktopAside setDarkmode={setDarkmode} darkmode={darkmode} />
      <Header open={open} setOpen={setOpen} darkmode={darkmode} setDarkmode={setDarkmode} />
      <HambergurMenuModal open={open} setOpen={setOpen} />
        <Routes>
            <Route path="/"        element={<Home />}  />
            <Route path="/*"       element={<Home />}  />
            <Route path="/addwork" element={<Form />}  />
            <Route path="/edit/:id"element={<Edit />} />
            <Route path="/today"   element={<TodayWorks/>}/>
            <Route path="/done"   element={<DoneWorks />}/>
            <Route path="/undone"   element={<UnDoneWorks />}/>
        </Routes>
    </div>
      </FilterWorksContextProvider>
    </WorksContextProvider>
    </>
  );
};

export default App;