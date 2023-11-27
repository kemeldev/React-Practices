import PropTypes from 'prop-types'
import { useState } from 'react'

function TwitterCard({ name, userName, profilePictureUrl, initialFollowing }) {

  const [following, setfollowing] = useState(initialFollowing)

  const text = following ? "Seguir" : "Siguiendo"

  const btnClassName = following ? "twitter-card-btn" : "twitter-card-btn isFollowing"

  const handleClick = () => {
    setfollowing(!following)
  }


  return (
    <div className='card-container__twitter-card'>
      <img className='card-container__twitter-card-image' src= {profilePictureUrl} alt='profile picture'></img>
      <div className='card-container__twitter-card-profile'>
        <strong>{name}</strong>
        <p>@{userName}</p>
      </div>
      <button onClick={handleClick} className={btnClassName}>{text}</button>
    </div>
  )
}

  TwitterCard.propTypes = {
    name: PropTypes.string,
    userName: PropTypes.string,
    profilePictureUrl: PropTypes.string,
    initialFollowing: PropTypes.boolean
  } 
  

export default TwitterCard;
