import './Header.css';
import React from 'react';
import { AudioControls } from './AudioControls';
import { Sidebar } from '../Sidebar/Sidebar';

export const Header = ({isOpen, setIsOpen}) => {
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <div className="btns-container" onClick={toggleSidebar}>
                {!isOpen && <i className="fas fa-bars bars"></i>}
                {isOpen && <i className="fas fa-times times"></i>}
            </div>
            <AudioControls />
            {isOpen && <Sidebar />}
        </header>
    )
}