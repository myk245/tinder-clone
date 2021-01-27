import React from 'react';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import IconButton from '@material-ui/core/IconButton'; 

function NavBar() {
   return (
      <div id="navbar">
         <div className="nav-icons">
            <IconButton href="/">
               <WhatshotIcon fontSize="large"/>   
            </IconButton>
         </div>
         <div className="nav-icons">
            <IconButton href="/chat">
               <ChatBubbleOutlineIcon fontSize="large" />
            </IconButton>
         </div>
         <div className="nav-icons">
            <IconButton href="/profile">
               <PersonOutlineIcon fontSize="large"/>
            </IconButton>
         </div>
      </div>
   )
}

export default NavBar
