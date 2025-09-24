import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const items = ["apples", "oranges", "bananas"];
  const [checkedItems, setCheckedItems] = useState(() =>
    items.reduce((acc, item) => {
      acc[item] = false;
      return acc;
    }, {})
  );
  const selectAllRef = useRef();

  useEffect(() => {
    const allChecked = items.every(item => checkedItems[item]);
    const noneChecked = items.every(item => !checkedItems[item]);

    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = !allChecked && !noneChecked;
    }
  }, [checkedItems, items]);

  const handleItemChange = (item) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleSelectAllChange = () => {
    const allChecked = items.every(item => checkedItems[item]);
    const newCheckedState = items.reduce((acc, item) => {
      acc[item] = !allChecked;
      return acc;
    }, {});
    setCheckedItems(newCheckedState);
  };

  const selectedItems = items.filter(item => checkedItems[item]);

  return (
    <div>
      <h2>Checkbox List with Select All</h2>
      <label>
        <input
          type="checkbox"
          ref={selectAllRef}
          checked={items.every(item => checkedItems[item])}
          onChange={handleSelectAllChange}
        />
        Select All
      </label>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {items.map(item => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                checked={checkedItems[item]}
                onChange={() => handleItemChange(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
      <div>
        <strong>Selected Items:</strong>{" "}
        {selectedItems.length > 0 ? selectedItems.join(", ") : "None"}
      </div>
    </div>
  );
};

export default App;
