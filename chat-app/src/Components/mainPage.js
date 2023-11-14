import React, { useState } from 'react';
import './mainPage.css';

const MainPage = () => {
  
  //useState hook with function called set show friends list
  const [showFriendsList, setShowFriendsList] = useState(false);

  return (
    <>
    <div className="main-container">

      {/* Left Sidebar (Servers/Groups) */}
      <div className="left-sidebar">
        {/* Insert server/group icons here */}
        <div className="app-icon">Q</div>
        <div className="server-icon"> Long Text </div>
        {/* Add a server map to render all servers in the future*/}
      </div>

    

      {/* Main Chat Area */}

      <div className="chat">
        <div className='profile_image'>
            <img src="path-to-profile-pic.jpg" alt="Chat Profile" className="chat-profile-pic" />
        </div>
        {/* Friends Toggle Button*/}
        <div className="friends-toggle" onClick={() => setShowFriendsList(!showFriendsList)}>
          <div className='friends_button'>
            Friends {showFriendsList ? '⌄' : '^' }
            
          
          </div>

        {showFriendsList ? <div className='friends_results'>

              <div classname = 'friends_profile_pic'>
                <img src="path-to-profile-pic.jpg" alt="Friend Profile" className="friend-profile-pic" />
              </div>
              <div classname = 'friends_name'>
                Anonymous
              </div>
              <div className='message_button'>
                message button
              </div>
              <div className='trash_button'>
                trash
              </div>
              

          </div> : <></>}
          
        

        </div>

      </div>
    </div>
    </>
  );
}

export default MainPage;


