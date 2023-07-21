import React, { useState } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

function Header() {
  const [isDark, setIsDark] = useState(false);

  const light={
    
  }

  const themeDark = () => {

    setIsDark(true);
  };
  const themeLight = () => {
    setIsDark(false);
  };


  return (
    <div className="header">
      <span className="title">TODO</span>
      {isDark === false ? (
        <BsMoonStarsFill onClick={themeDark} className="dark"></BsMoonStarsFill>
      ) : (
        <BsFillSunFill onClick={themeLight} className="light"></BsFillSunFill>
      )}
    </div>
  );
}

export default Header;
