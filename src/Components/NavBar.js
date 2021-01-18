import React from 'react';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import IconButton from '@material-ui/core/IconButton'; 

function NavBar() {
   return (
      <div id="navbar">
         <div className="nav-icons">
            <IconButton>
               <WhatshotIcon fontSize="large"/>   
            </IconButton>
         </div>
         <div className="nav-icons">
            <IconButton>
               <ChatBubbleOutlineIcon fontSize="large" />
            </IconButton>
         </div>
         <div className="nav-icons">
            <IconButton>
               <PersonOutlineIcon fontSize="large"/>
            </IconButton>
         </div>
      </div>
   )
}

export default NavBar
