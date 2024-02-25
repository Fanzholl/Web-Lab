import React from 'react';
import Header from './Header';
import StartScreen from './startScreen/StartScreen';
import './style/main.css';
import AboutMe from './aboutMe/AboutMe';
import Life from './life/Life';
import Uslugy from './Uslugy/Uslugy';

const Main = () => {
    return (
        <main>
            <Header />
            <StartScreen />
            <AboutMe />
            <Life />
            <Uslugy />
        </main>
    );
};

export default Main;