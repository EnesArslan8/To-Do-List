import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import SearchInput from './Components/SearchInput';
import List from './Components/List';


function App() {

  const [text, setText] = useState("");
  const [listItems, setListItems] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <SearchInput text={text} setText={setText} listItems={listItems} setListItems={setListItems}></SearchInput>
      <List text={text} setText={setText} listItems={listItems} setListItems={setListItems}></List>
    </div>
  );
}

export default App;
