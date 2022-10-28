import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {useState} from 'react';

import Header from './components/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/mainPage';
import AnimePage from './pages/anime';
import Modal from './components/Modal/Modal';
import ModalWindow from './components/Modal/LoginWindow/LoginWindow';

function App() {
  const[modalActive, setModal] = useState<boolean>(true)
  return (
    <BrowserRouter>
      <Header  active = {modalActive} setActive={setModal}/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/anime/:id" element={<AnimePage />} />
        
      </Routes>
      <Footer />
      <React.Fragment>  
              <ModalWindow active={modalActive} setActive={setModal}>
                <Modal/>
            </ModalWindow>
      </React.Fragment> 
    </BrowserRouter>
  );
}

export default App;
