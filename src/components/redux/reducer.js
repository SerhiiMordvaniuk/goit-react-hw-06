const initialState = {
  contactList: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

export const contactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        contactList: state.contactList.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

// const addContact = (newContact) => {
//   setContactList((prev) => {
//     return [newContact, ...prev];
//   });
// };
