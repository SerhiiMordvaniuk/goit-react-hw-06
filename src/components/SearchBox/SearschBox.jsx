import React, { useId } from "react";
import s from "./SearschBox.module.css";

const SearschBox = ({ filter, onSearch }) => {
  const id = useId();

  return (
    <>
      <form>
        <label htmlFor={id} className={s.form}>
          <span>Find contact by name</span>
          <input
            name="text"
            className={s.input}
            id={id}
            onChange={(event) => {
              onSearch(event.target.value);
            }}
          />
        </label>
      </form>
    </>
  );
};

export default SearschBox;
