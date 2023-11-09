import { useState } from "react";
import Dropdown from "./Dropdown";
const Container = () => {
  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };
  return (
    <div onBlur={handleBlurContainer}>
      <lable onClick={handleClickContainer}>
        <button>Dropdown Menu{isDropdownView ? "▲" : "▼"}</button>
      </lable>
      {isDropdownView && <Dropdown />}
    </div>
  );
};

export default Container;
