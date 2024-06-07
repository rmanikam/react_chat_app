import React from "react";
import styles from "../Navbar/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.outerContainer}>
      {/* created Navbar Container component consisting of image, 
    name of user */}
      <img
        src="https://avatars.githubusercontent.com/u/54769379?s=400&u=a594396e09b2900452606ddde183d0e013bd4fa6&v=4"
        alt="img"
        className={styles.userImage}
      />
      <h3 className={styles.name}>Raman Sahi</h3>
    </div>
  );
};

export default Navbar;
