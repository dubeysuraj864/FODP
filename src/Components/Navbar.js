import React from "react";
import "../Styles/navbar.sass";

function Navbar() {
    return ( 
        <>
       <div className="main">
        <div className="logo">FODP</div>
        <div className="location">

        <select name="location" id="location-bar">
            <option value="Delhi">Delhi</option>
            <option value="Banglore">Banglore</option>
            <option value="Goa">Goa</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Hydrabad">Hydrabad</option>
        </select>
             
        </div>
        <div className="search"><input type="search" name="search" id="search-input" /><button type="submit">Search</button></div>

        <div className="language">
            <label htmlFor="English">Language: </label>
            <select name="language" id="language-select">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
            </select>
        </div>

        <div className="login"><button>Login</button></div>
        <div className="add">
            <button> <span className="plus"></span> Add Post</button>
        </div>

       </div>
        </>
     );
}

export default Navbar;