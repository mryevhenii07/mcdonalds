import React from 'react';
import Footer from './components/footer/Footer';

import Header from './components/header/Header';
import InfoWork from './components/infoWork/InfoWork';
import Main from './components/main/Main';
import MainApplication from './components/mainApplication/MainAplication';
import SafeInfo from './components/safeInfo/SafeInfo';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <MainApplication/>
      <SafeInfo/>
      <InfoWork/>
      <Footer/>

    </div>
  );
}

export default App;
