import { BsPlusCircle } from "react-icons/bs";

function SearchInput({ text, setText ,listItems,setListItems}) {
  const add = () => {
    if (text.trim() !== "") {
      setListItems([ text,...listItems]);
      setText("");
    }
  };
  return (
    <div>
      <BsPlusCircle onClick={add}></BsPlusCircle>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
    </div>
  );
}

export default SearchInput;
