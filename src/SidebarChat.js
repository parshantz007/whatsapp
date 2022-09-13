import { Avatar } from '@mui/material';
import React from 'react';
import "./SidebarChat.css";

function sidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar alt="" src="https://avatars.dicebear.com/api/open-peeps/your-custom-seed.svg" />
            <div className="sidebarInfo">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default sidebarChat