import React, { useId } from "react";
import s from "./SearschBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/filtersSlice";

const SearschBox = () => {
  const id = useId();
  const dispatch = useDispatch();

  return (
    <>
      <form>
        <label htmlFor={id} className={s.form}>
          <span>Find contact by name</span>
          <input
            name="text"
            className={s.input}
            id={id}
            onChange={(event) => dispatch(changeFilter(event.target.value))}
          />
        </label>
      </form>
    </>
  );
};

export default SearschBox;
