import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <h1>Netflix</h1>
            </div>

            <div className="navbar-right">
                <ul>
                    <li>
                        <select name="language" id="language">
                            <option value="en-US">Anglais</option>
                            <option value="fr-FR">Français</option>
                        </select>
                    </li>
                    <li>
                        <a href="#">S'identifier</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;