import React from 'react';

import Header from './components/header/Header';
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
    </div>
  );
}

export default App;
