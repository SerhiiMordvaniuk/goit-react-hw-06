import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = ({ contactList, onDelete }) => {
  return (
    <>
      <ul className={s.list}>
        {contactList.map((item) => {
          return (
            <li key={item.id}>
              <Contact
                id={item.id}
                name={item.name}
                number={item.number}
                onDelete={onDelete}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
