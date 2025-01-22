import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((store) => store.contactList.contactList);
  return (
    <>
      <ul className={s.list}>
        {contactList.map((item) => {
          return (
            <li key={item.id}>
              <Contact id={item.id} name={item.name} number={item.number} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
