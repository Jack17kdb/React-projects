import React, { useRef, useState } from "react";
import "./style.css";

const App = () => {
  const [display, setDisplay] = useState(false);
  const [submittedData, setSubmittedData] = useState({
    name: "",
    email: "",
  });
  const [value, setValue] = useState({
    name: "",
    email: "",
  });

  function HandleDisplay() {
    if (value.name === "" || value.email === "") {
      setDisplay(false);
      return;
    } else {
      setDisplay(true);
      setSubmittedData({ ...value });
      setValue({
        name: "",
        email: "",
      });
    }
  }

  return (
    <div id="form">
      <h2>Dynamic Form with Multiple Inputs</h2>
      <input
        type="text"
        placeholder="Enter name"
        class="input"
        value={value.name}
        onChange={(e) => setValue({ ...value, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter email"
        class="input"
        value={value.email}
        onChange={(e) => setValue({ ...value, email: e.target.value })}
      />
      <input id="button" type="submit" value="submit" onClick={HandleDisplay} />
      {display && (
        <h3 style={{ marginTop: "15px" }}>
          Your name is {submittedData.name} and email is {submittedData.email}
        </h3>
      )}
    </div>
  );
};

export default App;
