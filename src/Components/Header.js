import React, { useState } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

function Header({backgroundImage,isDark,themeDark,themeLight}) {
  
  


  return (
    <div className={`header`}>
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
