import React from 'react';

function Header() {
    return (
        <React.Fragment>
            <nav class="navbar">
                <div class="nav-left">
                    <button class="nav-left-button">Home </button>
                    <button class="nav-left-button">Notifications </button>
                    <button class="nav-left-button">Messages </button>
                </div>
                <div class="search-bar">
                    <div class="search-container">
                        <input id="search-input" type="text" placeholder="Search" />
                        <button class="search-bar-button">&#128269;</button>
                    </div>
                </div>
                <div class="nav-right">
                    <button class="nav-right-button">Tweet </button>
                </div>
            </nav>

        </React.Fragment>
    );
}

export default Header;