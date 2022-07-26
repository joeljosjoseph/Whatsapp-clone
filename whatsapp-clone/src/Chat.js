import React from "react";
import { Form } from "react-bootstrap";
import { PersonCircle, Search } from "react-bootstrap-icons";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import { Paperclip } from "react-bootstrap-icons";
import { EmojiLaughing } from "react-bootstrap-icons";
import { MicFill } from "react-bootstrap-icons";
import "./chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat-header">
        <PersonCircle size={30} color="#5e5e5e" />
        <div className="chat-headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat-headerRight">
          <button className="sidebar-header-button">
            <Search size={20} color="#5e5e5e" />
          </button>
          <button className="sidebar-header-button">
            <Paperclip size={20} color="#5e5e5e" />
          </button>
          <button className="sidebar-header-button">
            <ThreeDotsVertical size={20} color="#5e5e5e" />
          </button>
        </div>
      </div>
      <div className="chat-body">
        <p className="chat-message">
          <span className="chat-name">Joel</span>
          The message itself
          <span className="chat-timeStamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat-message chat-sent">
          <span className="chat-name">Joel</span>
          The message itself
          <span className="chat-timeStamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat-footer">
        <EmojiLaughing size={20} color="#5e5e5e" />
        <form>
          <input></input>
          <button type="submit">Send</button>
        </form>
        <MicFill size={20} color="#5e5e5e" />
      </div>
    </div>
  );
}

export default Chat;
