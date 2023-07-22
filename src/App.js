import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import SearchInput from "./Components/SearchInput";
import List from "./Components/List";
import Background from "./Components/Background";

function App() {
  const [text, setText] = useState("");
  const [listItems, setListItems] = useState([]);

  const [isDark, setIsDark] = useState(true);

  const [backgroundImage, setBackgroundImage] = useState(
    "url(https://wallpapers.com/images/hd/black-red-4k-bridge-fb5gwv3gvd14g1qx.jpg)"
  );

  const themeDark = () => {
    setBackgroundImage(
      "url(https://wallpapers.com/images/hd/black-red-4k-bridge-fb5gwv3gvd14g1qx.jpg)"
    );
    setIsDark(true);
  };
  const themeLight = () => {
    setBackgroundImage("url(https://wallpaperaccess.com/full/4695651.jpg)");
    setIsDark(false);
  };


  const bgColorDark={
    backgroundColor:'#111',
    height:'100vh',
    width:'100vw'
  }
  const bgColorLight={
    backgroundColor:'#ddd',
  }

  return (
    <div>
      {isDark === true ? (
        <div style={bgColorDark} /*className="bgColorDark"*/>
          <div className="App">
            <Background
              backgroundImage={backgroundImage}
              isDark={isDark}
              themeDark={themeDark}
              themeLight={themeLight}
            ></Background>
            <Header
              backgroundImage={backgroundImage}
              isDark={isDark}
              themeDark={themeDark}
              themeLight={themeLight}
            ></Header>
            <SearchInput
              isDark={isDark}
              text={text}
              setText={setText}
              listItems={listItems}
              setListItems={setListItems}
            ></SearchInput>
            <List
              text={text}
              isDark={isDark}
              setText={setText}
              listItems={listItems}
              setListItems={setListItems}
            ></List>
          </div>
        </div>
      ) : (
        <div style={bgColorLight} /*className="bgColorLight"*/>
          <div className="App">
            <Background
              backgroundImage={backgroundImage}
              isDark={isDark}
              themeDark={themeDark}
              themeLight={themeLight}
            ></Background>
            <Header
              backgroundImage={backgroundImage}
              isDark={isDark}
              themeDark={themeDark}
              themeLight={themeLight}
            ></Header>
            <SearchInput
              isDark={isDark}
              text={text}
              setText={setText}
              listItems={listItems}
              setListItems={setListItems}
            ></SearchInput>
            <List
              text={text}
              isDark={isDark}
              setText={setText}
              listItems={listItems}
              setListItems={setListItems}
            ></List>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
