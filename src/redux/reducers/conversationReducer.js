import { createSlice } from "@reduxjs/toolkit";
// created initalState
const initialState = {
  contacts: [],
  allContacts: [],
};

// created Conversation Slice using createSlice function
const conversationSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  // created setConversaytions, search, addNewMessage Reducer
  reducers: {
    setConversations: (state, action) => {
      state.contacts = action.payload;
      state.allContacts = action.payload;
    },
    search: (state, action) => {
      const searchValue = action.payload;
      if (searchValue === "") {
        state.contacts = state.allContacts;
      } else {
        state.contacts = state.allContacts.filter((contactItem) =>
          contactItem.name.toLowerCase().includes(searchValue)
        );
        if (state.contacts.length === 0) {
          document.write(
            '<h4 style="color: red;">No contact found after searching</h4>'
          );
        }
      }
    },
    addNewMessage: (state, action) => {
      const { contact_id, text, sender, timestamp } = action.payload;
      console.log("action", action.payload);
      state.contacts[contact_id].chatlog.push({
        message_id: contact_id,
        sender: sender,
        text: text,
        timestamp: timestamp,
      });
    },
  },
});
// exported conversationReducer and assigned it value conversationSlice.reducer
export const conversationReducer = conversationSlice.reducer;

// destructure setConversations, addNewMessage, search from conversationSlice.actions
export const { setConversations, addNewMessage, search } =
  conversationSlice.actions;
// assigned it value of state.conversations.contacts and assigned it value to conversationSelector.
export const conversationSelector = (state) => state.conversations.contacts;
