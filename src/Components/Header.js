import React from "react";
import "../Styles/header.scss";

function Header() {
    return ( 
        <>
        <div className="header">
           <label htmlFor="cate">All Games</label> 
           <a href="//">Football</a>
           <a href="//">Cricket</a>
           <a href="//">Jogging</a>
           <a href="//">Running</a>
           <a href="//">Volleyball</a>
           <a href="//">Basketball</a>
           <a href="//">Hockey</a>
           <a href="//">Tennis</a>
           <a href="//">Table tennis</a>
           <a href="//">Badminton</a>
        </div>
        <div className="cover">
        
         <div className="text">
            Are you looking for a partner or team members, whom you can play with? <br />
            FODP is the right place, You should find'em here.
         </div>
        </div>
        </>
     );
}

export default Header;