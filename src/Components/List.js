import React, { useState,useEffect } from "react";

function List({ text, setText, setListItems, listItems }) {
  const [filteredItems, setFilteredItems] = useState([]);
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
    setFilteredItems(listItems);
  };
  const handleFilterActive = () => {
    const activeItems = listItems.filter((item) => !item.completed);
    if (activeItems && activeItems.length > 0) {
      setFilteredItems(activeItems);
    }
  };
  const handleFilterCompleted = () => {
    const completedItems = listItems.filter((item) => item.completed);
    if (completedItems && completedItems.length > 0) {
      setFilteredItems(completedItems);
    }
  };

  return (
    <div>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
              onClick={() => toggleCompleted(index)}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      <div>
        {listItems.length !== 0 && (
          <>
            <span>{listItems.length} items left</span>
            <div>
              <span onClick={handleFilterAll}>All</span>
              <span onClick={handleFilterActive}>Active</span>
              <span onClick={handleFilterCompleted}>Completed</span>
            </div>
            
            <span  onClick={handleClearCompleted}>Clear Completed</span>
          </>
        )}
      </div>
    </div>
  );
}

export default List;
