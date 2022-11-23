import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ScoreHeader(props) {
  return (
    <div className='game-stats'>
      <div className='score-wrapper'>
        <p class='score'>
          Score: <span>10</span>
        </p>
      </div>
      <div className='life-lines-wrapper'>
        <FavoriteIcon fontSize='large' color='error' />
        <span className='life-count'>3</span>
      </div>
    </div>
  );
}
