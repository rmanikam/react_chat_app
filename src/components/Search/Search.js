import React from "react";
import styles from "../Search/Search.module.css";
import { useDispatch } from "react-redux";
import { search } from "../../redux/reducers/conversationReducer";
const Search = () => {
  // called used Dispatch function
  const dispatch = useDispatch();
  // called searchInput function in which i dispatch search action and pass value of e.target.value
  // to search action
  const searchInput = (e) => {
    dispatch(search(e.target.value));
  };
  return (
    <div className={styles.outerContainer}>
      <input
        type="text"
        onChange={searchInput}
        placeholder="Search Conversations By Name"
        className={styles.searchInput}
      ></input>
    </div>
  );
};

export default Search;
