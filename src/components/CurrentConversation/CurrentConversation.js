import React, { useState, useEffect } from "react";
import styles from "../CurrentConversation/CurrentConversation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { data } from "../../data/users";
import {
  addNewMessage,
  conversationSelector,
} from "../../redux/reducers/conversationReducer";
import { useParams } from "react-router-dom";
import Moment from "react-moment";

const CurrentConversation = () => {
  // extracted id using useParams Hook to access the parameters of the current route
  // and  manage the dynamic routes in the URL.
  // using destructuring extracted id from useParams hook
  const { id } = useParams();
  // created a const variable called message and function setMessage and assigned it value of ""
  const [message, setMessage] = useState("");
  // used useDispatch() for dispatching an action
  const dispatch = useDispatch();
  // used useSelector hook and passed conversationSelector in it
  // and saved the value of array in contacts variable
  const contacts = useSelector(conversationSelector);
  // created a const variable called newConversation and function setNewConversation
  // and assigned it value of empty array []
  const [newConversation, setNewConversation] = useState([]);

  // used useEffect hook and passed id, contacts as dependancy array
  // use filter method of array to filter a particular contact
  // whose id matched id we get from the url using use params hook
  // and converted id in string format to Number format
  useEffect(() => {
    setNewConversation(contacts.filter((contact) => contact.id === Number(id)));
  }, [id, contacts]);

  // called submit Message function on click of submit button and passed message in it
  const submitMessage = (message) => {
    // used findIndex method of array and applied to contacts array and checked
    // if item.id  === Number(id) and converted id in string format to Number format

    const newId = contacts.findIndex((item) => item.id === Number(id));
    const date = new Date();

    const formattedTimestamp = <Moment format="h:mm a">{date}</Moment>;

    // called dispatch function to dispatch addNewMessage
    dispatch(
      addNewMessage({
        contact_id: newId,
        sender: "me",
        text: message,
        timestamp: formattedTimestamp,
      })
    );

    // clear message to empty after dispatching actions
    setMessage("");
    // called toast.success
    toast.success("Message Send Successfully!", {
      position: "top-right",
    });
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.chat_header}>
        <p className={styles.heading}>Chat Application</p>
      </div>
      {/* traverse over newConversayion using map method */}
      {newConversation.map((contact) => {
        return (
          <>
            <div className={styles.chat_body}>
              {/* traverse over conatct.chatlog array using map method */}
              {contact.chatlog.map((conversations) => (
                <>
                  {/* if conversations.sender === "me" then show data of login user else show
                data of user */}
                  {conversations.sender === "me" ? (
                    <div className={styles.loginUserContainer}>
                      <div className={styles.image_text}>
                        <img
                          src={data.profile.image}
                          alt="img"
                          className={styles.image_profile}
                        />

                        <p
                          key={conversations.id}
                          className={styles.text_profile}
                        >
                          {conversations.text}
                        </p>
                        <p>{conversations.timestamp}</p>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.userContainer}>
                      <div className={styles.image_user}>
                        <img
                          src={contact.image}
                          alt="img"
                          className={styles.image_profile}
                        />

                        <p
                          key={conversations.id}
                          className={styles.text_profile}
                        >
                          {conversations.text}
                        </p>
                        <p>{conversations.timestamp}</p>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </>
        );
      })}
      <div className={styles.chat_footer}>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Send message"
        />
        <button
          type="submit"
          onClick={() => submitMessage(message)}
          className={styles.send}
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default CurrentConversation;
