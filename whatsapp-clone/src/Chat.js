import React, { useState } from "react";
import axios from "./axios";
import { PersonCircle, Search } from "react-bootstrap-icons";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import { Paperclip } from "react-bootstrap-icons";
import { EmojiLaughing } from "react-bootstrap-icons";
import { MicFill } from "react-bootstrap-icons";
import "./chat.css";

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "Joel",
      received: false,
    });
    setInput("");
  };

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
        {messages.map((message, index) => (
          <p
            className={`chat-message ${!message.received && "chat-sent"}`}
            key={index}
          >
            <span className="chat-name">{message.name}</span>
            {message.message}
            <span className="chat-timeStamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat-footer">
        <EmojiLaughing size={20} color="#5e5e5e" />
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button type="submit" onClick={(e) => sendMessage(e)}></button>
        </form>
        <MicFill size={20} color="#5e5e5e" />
      </div>
    </div>
  );
}

export default Chat;
