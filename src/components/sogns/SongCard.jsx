import React, { useState } from 'react';


const SongCard = ({ song }) => {
  const [isLike, setIsLike] = useState(song.like);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  const handleImageError = (e) => {
    e.target.src = "https://res.cloudinary.com/make-it-real-sj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1687892653/album_cover_h4hipl.jpg?_s=public-apps"
  }

  return (
    <div className="card">
      <div className="card-media">
        <img src={song.cover_url} onError={handleImageError} alt={song.name} />
      </div>
      <div className="card-details">
        <div className="card-details__title">
          <div className='card-details__title--artist-name'>{song.artist}</div>
          <span className='card-details__title--artist-type'>solista</span>
        </div>
        <div className="card-details__album">
          <div className="card-details__album--name" >{song.name}</div>
          <div className="card-details__album--year">({song.year})</div>
        </div>
        <div className="card-details__footer">
          <span className="card-details__footer--genre">{song.genre}</span>
          <div className="card-details__footer--actions">
            <a className={isLike ? 'liked' : ''} onClick={handleLike}>
              ❤️
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongCard;