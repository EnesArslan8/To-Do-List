import React, { useState, useEffect } from "react";

function List({ text, setText, setListItems, listItems }) {
  const [filteredItems, setFilteredItems] = useState([]);

  const [selectedOption, setSelectedOption] = useState("All");

  const [completedStyle, setCompletedStyle] = useState(null);

  useEffect(() => {
    // Başlangıçta, "All" filtresi seçili olacak
    setFilteredItems(listItems);
  }, [listItems]);

  const toggleCompleted = (index) => {
    const updatedItems = listItems.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setListItems(updatedItems);
  };
  const handleClearCompleted = () => {
    const activeItems = listItems.filter((item) => !item.completed);
    setListItems(activeItems);
  };

  const handleFilterAll = () => {
    setSelectedOption("All");
    setFilteredItems(listItems);
  };
  const handleFilterActive = () => {
    const activeItems = listItems.filter((item) => !item.completed);
    if (activeItems && activeItems.length > 0) {
      setSelectedOption("Active");
      setFilteredItems(activeItems);
    }
  };
  const handleFilterCompleted = () => {
    const completedItems = listItems.filter((item) => item.completed);
    if (completedItems && completedItems.length > 0) {
      setSelectedOption("Completed");
      setFilteredItems(completedItems);
    }
  };

  let customStyle = {
    color: "rgba(200,100,0)",
  };

 

  return (
    <div className="list">
      <ul className="ul">
        {filteredItems.map((item, index) => (
          <label>
            <li className="li" key={index}>
              <input className="radioBtn" type="radio"></input>
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
                onClick={() => toggleCompleted(index)}
              >
                {item.text}
              </span>
            </li>
          </label>
        ))}
      </ul>

      <div>
        {listItems.length !== 0 && (
          <div className="listFooter">
            <span className="itemCounter">{listItems.length} items left</span>
            <div className="filter">
              <span
                style={selectedOption === "All" ? customStyle : null}
                onClick={handleFilterAll}
              >
                All
              </span>
              <span
                style={selectedOption === "Active" ? customStyle : null}
                className="spans"
                onClick={handleFilterActive}
              >
                Active
              </span>
              <span
                style={selectedOption === "Completed" && filteredItems.length > 0 ? customStyle : null}
                onClick={handleFilterCompleted}
              >
                Completed
              </span>
              
            </div>
            <span className="clear" onClick={handleClearCompleted}>
              Clear Completed
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
