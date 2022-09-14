import React from "react";
import "../Styles/navbar.scss";


function Navbar() {
    return ( 
        <>
       <div className="main">
        <div className="menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <div className="logo">FODP</div>
        <div className="location">

        <select name="location" id="location-bar">
            <option value="Delhi">Nilothi, Delhi</option>
            <option value="Banglore">Banglore</option>
            <option value="Goa">Goa</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Hydrabad">Hydrabad</option>
        </select>
             
        </div>
        <div className="search" ><input type="search" placeholder="Football" name="search" id="search-input" /><button type="submit">Search</button></div>

        <div className="language">
            <label htmlFor="English">Language:</label>
            <select name="language" id="language-select">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
            </select>
        </div>

        <div className="login"><button>Login</button></div>
        <div className="add module module-border-wrap" >
            <button > <span className="plus">+</span></button>
        </div>

       </div>
        </>
     );
}

export default Navbar;