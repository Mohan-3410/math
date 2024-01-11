import React, { useState } from 'react'
import "./Right.css"
import dummyImg from "../../../assets/profile-1.jpg"

export default function Right() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-theme-variables', isDarkMode)
    };
    const handleMenuBar = () => {
        document.querySelector("aside").style.display = "block"
    }

    return (
        <div className="Right">
            <div className="top">
                <button id="menu-btn">
                    <span className="material-icons-sharp" onClick={handleMenuBar}>menu</span>
                </button>
                <div className="theme-toggler" onClick={toggleDarkMode}>
                    <span className="material-icons-sharp active">light_mode</span>
                    <span className="material-icons-sharp">dark_mode</span>
                </div>
                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Mohan</b></p>
                        <small className="text-muted">Admin</small>
                    </div>
                    <div className="profile-photo">
                        <img src={dummyImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
