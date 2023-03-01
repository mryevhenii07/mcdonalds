import React from 'react'
import Footer from '../components/footer/Footer';
import InfoWork from '../components/infoWork/InfoWork';
import Main from '../components/main/Main';
import MainApplication from '../components/mainApplication/MainAplication';
import SafeInfo from '../components/safeInfo/SafeInfo';

const Home = () => {
  return (
    <div>
        <Main/>
        <MainApplication/>
        <SafeInfo/>
        <InfoWork/>
     
    </div>
  )
}

export default Home