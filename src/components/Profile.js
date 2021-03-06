import React from "react";
import "../styles/profile.css";
import Following from "./Following.js";
const Profile = props => {
  return (
    <React.Fragment>
      <div className='profile-flex'>
        <div className='profile-image'>
          <span className='change-picture'>Change Picture:</span>
          <img id='profile-image' src={props.profilePicture} alt='profile' />
        </div>
        <div className='profile-info'>
          <div>{props.username}</div>
          <div>{props.usernameShort}</div>
          <div>Tweets: {props.tweetCounter}</div>
        </div>
      </div>
      <div className='profile-following'>
        <p>Following: </p>
        {props.following.map((following, index) => (
          <Following
            key={index}
            following={following}
            index={index}
            unfollow={props.unfollow}
          />
        ))}
        <p>Followers: </p>
        {props.followers.map((followers, index) => (
          <Following key={index} following={followers} index={index} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Profile;
