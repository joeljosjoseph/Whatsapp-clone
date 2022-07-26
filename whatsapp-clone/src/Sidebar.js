import React from "react";
import SidebarChat from "./SidebarChat";
import "./sidebar.css";
import { ChatLeftTextFill } from "react-bootstrap-icons";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import { Circle } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <PersonCircle size={32} color="#5e5e5e" />
        <div className="sidebar-headerRight">
          <button className="sidebar-header-button">
            <Circle size={20} color="#5e5e5e" />
          </button>
          <button className="sidebar-header-button">
            <ChatLeftTextFill size={20} color="#5e5e5e" />
          </button>
          <button className="sidebar-header-button">
            <ThreeDotsVertical size={20} color="#5e5e5e" />
          </button>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-searchContainer">
          <Search size={22} color="#5e5e5e" />
          <input
            className="sidebar-searchInput"
            placeholder="Search or start new chat"
          />
        </div>
      </div>
      <div className="sidebar-chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
