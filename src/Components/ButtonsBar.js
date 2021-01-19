import React from 'react'; 
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';

function ButtonsBar() {
   return (
      <div id="buttons-bar">
         <div className="options-button">
            <IconButton>
               <CloseIcon fontSize="large" style={{ fill: "red" }}/>
            </IconButton>
         </div>
         <div className="options-button">
            <IconButton className="options-button">
               <StarIcon fontSize="large" style={{ fill: "lightblue" }}/>
            </IconButton>
         </div>
         <div className="options-button">
            <IconButton>
               <FavoriteIcon fontSize="large" style={{ fill: "lightgreen" }}/>
            </IconButton>
         </div>
      </div>
   )
}

export default ButtonsBar
