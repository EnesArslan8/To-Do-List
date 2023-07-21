import { BsPlusCircle } from "react-icons/bs";

function SearchInput({ text, setText, listItems, setListItems, isDark }) {
  const add = () => {
    if (text.trim() !== "") {
      setListItems([{ text: text, completed: false }, ...listItems]);
      setText("");
    }
  };
  return (
    <div className="input">
      {isDark === true ? (
        <div className="inputArea">
          <BsPlusCircle className="addBtn" onClick={add}></BsPlusCircle>
          <input
            placeholder="Create a new todo..."
            className="textInput"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
      ):(
      <div className="inputAreaLight">
          <BsPlusCircle className="addBtnLight" onClick={add}></BsPlusCircle>
          <input
            placeholder="Create a new todo..."
            className="textInputLight"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        )}
    </div>
  );
}

export default SearchInput;
