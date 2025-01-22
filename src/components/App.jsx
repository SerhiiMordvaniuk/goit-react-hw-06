import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearschBox from "./SearchBox/SearschBox";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearschBox />
        <ContactList />
      </Provider>
    </>
  );
}

export default App;
