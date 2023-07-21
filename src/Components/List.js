import React, { useState } from "react";

function List({ text, setText, setListItems, listItems }) {
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

  return (
    <div>
      <ul>
        {listItems.map((item, index) => (
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
              <span>All</span>
              <span>Active</span>
              <span>Completed</span>
            </div>
            <span onClick={handleClearCompleted}>Clear Completed</span>
          </>
        )}
      </div>
    </div>
  );
}

export default List;
