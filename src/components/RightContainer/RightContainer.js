import React from "react";
import Navbar from "../Navbar/Navbar";
import CurrentConversation from "../CurrentConversation/CurrentConversation";
import styles from "../RightContainer/RightContainer.module.css";
const RightContainer = () => {
  return (
    <div className={styles.rightContainer}>
      {/* created Right Container component consisting of navbar, 
    current conversation component */}
      <Navbar />
      <CurrentConversation />
    </div>
  );
};

export default RightContainer;
