import React, { useState } from "react";

function List({ text, setText, setListItems, listItems }) {
  return (
    <div>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        {listItems.length!==0 &&
        <span>{listItems.length} items left</span>
        }
      </div>
    </div>
  );
}

export default List;
