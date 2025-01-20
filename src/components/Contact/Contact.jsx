import s from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <div className={s.item}>
        <div className={s.contacts}>
          <div className={s.contact}>
            <FaUserAlt size="20" />
            <p>{name}</p>
          </div>
          <div className={s.contact}>
            <FaPhoneAlt size="20" />
            <p>{number}</p>
          </div>
        </div>
        <button
          className={s.btn}
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
