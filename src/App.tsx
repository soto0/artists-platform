import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LoginPage from './pages/Login/Login';
import MainPage from './pages/MainPage/MainPage';
import Profile from './pages/Profile/Profile';
import RegistrationPage from './pages/Registration/Registration';
import { store } from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className={'App'}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={''} element={<MainPage />}></Route>
            <Route path={'/Login'} element={<LoginPage />}></Route>
            <Route path={'/Registration'} element={<RegistrationPage />}></Route>
            <Route path={'/Profile/*'} element={<Profile />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
