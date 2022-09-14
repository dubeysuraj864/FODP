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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem temporibus expedita doloremque neque nulla esse! Esse magni unde voluptatem recusandae voluptates, illo dolorem, corporis obcaecati facere, sequi architecto aperiam fugiat.
         </div>
        </div>
        </>
     );
}

export default Header;