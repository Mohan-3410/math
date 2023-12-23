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
        document.querySelector("aside").style.display="block"
    }

    return (
        <div class="Right">
            <div class="top">
                <button id="menu-btn">
                    <span class="material-icons-sharp" onClick={handleMenuBar}>menu</span>
                </button>
                <div class="theme-toggler" onClick={toggleDarkMode}>
                    <span class="material-icons-sharp active">light_mode</span>
                    <span class="material-icons-sharp">dark_mode</span>
                </div>
                <div class="profile">
                    <div class="info">
                        <p>Hey, <b>Mohan</b></p>
                        <small class="text-muted">Admin</small>
                    </div>
                    <div class="profile-photo">
                        <img src={dummyImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
