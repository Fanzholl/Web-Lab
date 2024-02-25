/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style/header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href='#AboutMe'>Обо мне</a></li>
                    <li><a href='#'>Прайс</a></li>
                    <li><a href='#'>Кейсы</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;