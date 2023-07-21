import React, { useState } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

function Header() {
  const [isDark, setIsDark] = useState(false);

  const themeDark = () => {
    setIsDark(true);
  };
  const themeLight = () => {
    setIsDark(false);
  };

  console.log(isDark);

  return (
    <div>
      <span>TODO</span>
      {isDark === false ? (
        <BsMoonStarsFill onClick={themeDark} className="dark"></BsMoonStarsFill>
      ) : (
        <BsFillSunFill onClick={themeLight} className="light"></BsFillSunFill>
      )}
    </div>
  );
}

export default Header;
