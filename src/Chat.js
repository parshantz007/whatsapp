import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { Avatar, IconButton } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import "./Chat.css";
function chat() {
  return (
    <div className="chat">
      <div className="chatHeader">
        <Avatar src="https://avatars.dicebear.com/api/open-peeps/your-custom-seed.svg" />
        <div className="chatHeaderInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chatHeaderRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>


      <div className="chatBody">
        <p className='chatMessage'>
          <span className="chatName">Johan</span>
          this is a message
          <span className='chatTimestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chatMessage chatReceive'>
          <span className="chatName">Johan</span>
          this is a message
          <span className='chatTimestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chatMessage'>
          <span className="chatName">Johan</span>
          this is a message
          <span className='chatTimestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chatMessage chatReceive'>
          <span className="chatName">Johan</span>
          this is a message
          <span className='chatTimestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chatMessage'>
          <span className="chatName">Johan</span>
          this is a message
          <span className='chatTimestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chatMessage chatReceive'>
          <span className="chatName">Johan</span>
          this is a message
          <span className='chatTimestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chatMessage'>
          <span className="chatName">Johan</span>
          this is a message
          <span className='chatTimestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chatMessage chatReceive'>
          <span className="chatName">Johan</span>
          this is a message
          <span className='chatTimestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chatMessage'>
          <span className="chatName">Johan</span>
          this is a message
          <span className='chatTimestamp'>
            {new Date().toUTCString()}
          </span>
        </p>






        <p className='chatMessage'>
          <span className="chatName">Johan</span>
          this is a message
          <span className='chatTimestamp'>
            {new Date().toUTCString()}
          </span>
        </p>




      </div>
      <div className="chatFooter">
        <IconButton>
          <TagFacesIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <form>
          <input placeholder='Type a message' className='searchInFooter' />
        </form>
        <IconButton>
          <SendIcon />
        </IconButton>
        <IconButton>
          <KeyboardVoiceIcon />
        </IconButton>


      </div>
    </div>
  )
}

export default chat