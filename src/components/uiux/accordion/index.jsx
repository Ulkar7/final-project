/* eslint-disable react/prop-types */
import { useState } from "react";
import Bluee from "../../../image/bluee.svg";
import "./style.css";

const Accordion = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className={`accordion ${open ? "open" : ""}`}>
      <h1 onClick={() => setOpen(!open)}>
        <span>{item.header}</span>
        <img src={Bluee} />
      </h1>
      <ul>
        {item.contents.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
  );
};

export default Accordion;
