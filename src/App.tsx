import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ProfileAbout from './components/Profile/ProfileBottom/ProfileAbout/ProfileAbout';
import ProfileArtWorks from './components/Profile/ProfileBottom/ProfileArtWorks/ProfileArtWorks';
import ProfileFavorites from './components/Profile/ProfileBottom/ProfileFavorites/ProfileFavorites';
import ProfileMain from './components/Profile/ProfileBottom/ProfileMain/ProfileMain';
import ProfilePosts from './components/Profile/ProfileBottom/ProfilePosts/ProfilePosts';
import LoginPage from './pages/Login/Login';
import MainPage from './pages/MainPage/MainPage';
import Profile from './pages/Profile/Profile';
import RegistrationPage from './pages/Registration/Registration';

const App = () => {
  return (
      <div className={'App'}>
        <BrowserRouter>
          <Header />
        <Routes>
          <Route path={''} element={<MainPage />}></Route>
          <Route path={'/Login'} element={<LoginPage />}></Route>
          <Route path={'/Registration'} element={<RegistrationPage />}></Route>
          <Route path={'/Profile/:user?/*'} element={<Profile />}>
            <Route index element={<ProfileMain />} ></Route>
            <Route path={'About'} element={<ProfileAbout />} ></Route>
            <Route path={'Favorites'} element={<ProfileFavorites />} ></Route>
            <Route path={'ArtWorks'} element={<ProfileArtWorks />} ></Route>
            <Route path={'Posts'} element={<ProfilePosts />} ></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
