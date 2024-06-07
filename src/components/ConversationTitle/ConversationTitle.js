import React, { useState } from "react";
import add from "../../assets/add-button.png";
import styles from "../ConversationTitle/ConversationTitle.module.css";
import { useSelector } from "react-redux";
import { conversationSelector } from "../../redux/reducers/conversationReducer";
import { Link } from "react-router-dom";

const ConversationTitle = () => {
  // created a showPopup variable and assigned it boolean value of false
  const [showPopup, setShowPopup] = useState(false);
  // used useSelector hook and passed conversationSelector in it
  // and saved the value of array in contacts variable
  const contacts = useSelector(conversationSelector);
  // called loadContacts function to show the popup by passing setShowPopUp true value
  const loadContacts = () => {
    setShowPopup(true);
  };
  // called closePopup function to show the popup by passing setShowPopUp false value
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.conversationTitle}>
        {/* created conversations title */}
        <p>Conversations</p>
        {/* created add button icon and on clicking it call loadContacts */}
        <img
          src={add}
          className={styles.addBtn}
          alt="add"
          onClick={loadContacts}
        />
      </div>
      {/* if showPopup is true show list of conversations */}
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            {/* call closePopup function */}
            <span className={styles.close} onClick={closePopup}>
              &times;
            </span>
            <div className={styles.contactList}>
              {/* traverse over contacts array */}
              {contacts.map((contact) => {
                // created a last message variable in which the last message text is assigned
                const lastMessage =
                  contact.chatlog.length > 0
                    ? contact.chatlog[contact.chatlog.length - 1].text
                    : "No messages found";

                return (
                  <div key={contact.id} className={styles.innerContainer}>
                    <img
                      src={contact.image}
                      alt="img"
                      className={styles.image}
                    />
                    {/* created a link for that articular user and
                     passed /contact.id in Link and access id via useParams */}
                    <Link to={`/chat/${contact.id}`}>
                      <div className={styles.info}>
                        <p className={styles.name}>{contact.name}</p>
                        <p className={styles.message}>{lastMessage}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationTitle;
