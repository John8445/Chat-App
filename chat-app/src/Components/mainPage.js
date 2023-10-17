import React from 'react';
import './mainPage.css';

const MainPage = () => {
  return (
    <div className="main-container">

      {/* Left Sidebar (Servers/Groups) */}
      <div className="left-sidebar">
        {/* Insert server/group icons here */}
        <div className="server-icon">+</div>
        <div className="server-icon">AN</div>
        {/* Add more server icons as needed */}
      </div>

      {/* Middle Sidebar (Channels/Friends) */}
      <div className="middle-sidebar">
        <div className="user-area">
          <img src="path-to-profile-pic-placeholder.jpg" alt="Profile" className="user-image"/>
          <div>
            <h2>Username</h2>
            <p>Description</p>
          </div>
        </div>
        <div className="channels">
          <h3>Friends ⌄</h3>
          {/* List of channels/friends */}
          <div className="channel">Friend's name</div>
          {/* Add more channels/friends as needed */}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="chat-area">
        <div className="chat-header">
          <img src="path-to-profile-pic.jpg" alt="Chat Profile" className="chat-profile-pic" />
        </div>
        {/* Insert chat messages and input field here */}
      </div>
    </div>
  );
}

export default MainPage;


