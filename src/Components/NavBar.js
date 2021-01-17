import React from 'react';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function NavBar() {
   return (
      <div id="navbar">
         <div className="nav-icons">
            <WhatshotIcon fontSize="large"/>   
         </div>
         <div className="nav-icons">
            <ChatBubbleOutlineIcon fontSize="large"/>
         </div>
         <div className="nav-icons">
            <PersonOutlineIcon fontSize="large"/>
         </div>
      </div>
   )
}

export default NavBar
