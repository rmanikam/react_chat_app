import React from "react";
import Search from "../Search/Search";
import ChatConversation from "../ChatConversation/ChatConversation";
import ConversationTitle from "../ConversationTitle/ConversationTitle";
import styles from "../LeftContainer/LeftContainer.module.css";
import { Outlet } from "react-router-dom";
const LeftContainer = () => {
  return (
    <>
      {/* created Left Container component consisting of search, 
    conversation title and chat conversation component */}
      <div className={styles.leftContainer}>
        <Search />
        <ConversationTitle />
        <ChatConversation />
      </div>
      <Outlet />
    </>
  );
};

export default LeftContainer;
