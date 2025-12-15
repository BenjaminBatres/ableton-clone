import React, { useEffect, useRef, useState } from "react";

export default function CustomSelect({ options = [], selectName, width }) {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(selectName);
  const selectRef = useRef(null);

  const handleSelect = (option) => {
    setSelect(option);
    setOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className={`relative mb-3`} style={{ width: width }} ref={selectRef}>
      <div
        className="bg-[#eee] py-2.5 px-3 flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <span className="font-futura-medium text-sm">{select}</span>
        <span className="arrow">&#9662;</span>
      </div>
      {open && (
        <div className="absolute top-full left-0 bg-[#eee] w-full">
          {options.map((option, id) => (
            <div
              key={id}
              className="py-2.5 px-3 cursor-pointer transition-all duration-200 font-futura-medium hover:bg-Lightblue"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
