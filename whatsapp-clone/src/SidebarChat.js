import React from "react";
import "./sidebarChat.css";
import { PersonCircle } from "react-bootstrap-icons";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <PersonCircle size={30} color="gray" />
      <div className="sidebar-chatInfo">
        <h2>Room Name</h2>
        <p>This has the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
