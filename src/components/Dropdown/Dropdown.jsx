import React, { useState, useRef, useEffect } from "react";
import {nanoid} from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  container,
  selectedText,
  optionContainer,
  selectedOption,
  option,
  icon,
} from "./Dropdown.module.css";

export default function Dropdown({ options, selected ,onSelect }) {
  const ref = useRef();

  const [toggle, setToggle] = useState(false);
  const [selectedTxt, setSelectedTxt] = useState(selected);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);

  const handleOption = (txt) => (ev) => {
    onSelect(txt)
    setSelectedTxt(txt);
    setToggle(false);
  };

  return (
    <div className={container} ref={ref}>
      <div className={selectedOption}>
        <span className={selectedText}>{selectedTxt}</span>
        {toggle ? (
          <FontAwesomeIcon
            icon={faAngleUp}
            onClick={() => setToggle(!toggle)}
            className={icon}
          />
        ) : (
          <FontAwesomeIcon
            icon={faAngleDown}
            onClick={() => setToggle(!toggle)}
            className={icon}
          />
        )}
      </div>
      {toggle && (
        <div className={optionContainer}>
          {options.map(({ id, name },) => {
            return (
              <div key={`${id}${nanoid()}`} className={option} onClick={handleOption(name)}>
                {name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
