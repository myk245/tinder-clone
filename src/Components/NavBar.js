import React from 'react';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function NavBar() {
   return (
      <div id="navbar">
         <div className="nav-icons">
            <WhatshotIcon />   
         </div>
         <div className="nav-icons">
            <ChatBubbleOutlineIcon />
         </div>
         <div className="nav-icons">
            <PersonOutlineIcon />
         </div>
      </div>
   )
}

export default NavBar
