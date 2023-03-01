import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Footer from './components/footer/Footer';

import Header from './components/header/Header';
import InfoWork from './components/infoWork/InfoWork';
import Main from './components/main/Main';
import MainApplication from './components/mainApplication/MainAplication';
import SafeInfo from './components/safeInfo/SafeInfo';
import Career from './components/header/components/CareerHeader/Career';
import Home from './pages/home';
import Quality from './pages/quality';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes >
        <Route path={'/mcdonalds'} element={<Home />}/>
      </Routes>
      <Routes >
        <Route path={'/career'} element={<Career />}/>
      </Routes>
      <Routes >
        <Route path={'/quality'} element={<Quality />}/>
      </Routes>

      {/* <Main/>
      <MainApplication/>
      <SafeInfo/>
      <InfoWork/>*/}
      <Footer/> 

    </div>
  );
}

export default App;
