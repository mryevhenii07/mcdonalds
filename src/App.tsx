import {FC,useState} from 'react';
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
import Strategy from './pages/strategy';
import Application from './pages/application';
import Delivery from './pages/delivery';
import Section from './components/section/section';
import OpenRestaurant from './pages/openRestaurant';

import FullCity from './pages/fullCity';
import Burgers from './components/appBarMenu/burgers';
import AppBar from './pages/appBar';



const App:FC = () =>{
  return (
    <div className="App">
      <Header/>
      <Section >  
        <Routes >
          <Route path={'/mcdonalds'} element={<Home />}/>
          <Route path={'/career'} element={<Career />}/>
          <Route path={'/quality'} element={<Quality />}/>
          <Route path={'/strategy'} element={<Strategy/> }/>
          <Route path={'/application'} element={<Application/> }/>
          <Route path={'/delivery'} element={<Delivery/> }/>
          <Route path={'/open'} element={<OpenRestaurant />}/>
          <Route path={'/open/:cityId'} element={<FullCity />}/>
          <Route path={'/menu'} element={<AppBar />}/>
          {/* <Route path={'/menu/burgers'} element={<Burgers />}/> */}
        </Routes>
      </Section>
      <Footer/>
     
    </div>
  );
}

export default App;
