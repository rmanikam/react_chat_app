import React, { useEffect } from "react";
import { data } from "../../data/users";
import styles from "../ChatConversation/ChatConversation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { conversationSelector } from "../../redux/reducers/conversationReducer";
import { setConversations } from "../../redux/reducers/conversationReducer";
const ChatConversation = () => {
  // here used useDispatch() for dispatching an action
  const dispatch = useDispatch();
  // using useEffect hook with dependancy of dispatch
  useEffect(() => {
    //  called dispatch function to dispatch setConversations action
    // and passed (data.profile.contacts in it). this is done to
    // load initial conversations in it.
    dispatch(setConversations(data.profile.contacts));
  }, [dispatch]);

  // used useSelector hook and passed conversationSelector in it
  // and saved the value of array in contacts variable
  const contacts = useSelector(conversationSelector);
  return (
    <>
      {/* traverse over contacts array */}
      {contacts.map((contact) => {
        // created a last message variable in which the last message text is assigned
        const lastMessage =
          contact.chatlog.length > 0
            ? contact.chatlog[contact.chatlog.length - 1].text
            : "No messages yet";
        return (
          <div className={styles.outerContainer} key={contact.id}>
            <img src={contact.image} className={styles.image} alt="img" />
            <p className={styles.name}>{contact.name}</p>
            <p className={styles.message}>{lastMessage}</p>
          </div>
        );
      })}
    </>
  );
};

export default ChatConversation;
