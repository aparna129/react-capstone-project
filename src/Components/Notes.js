import React, { useState } from "react";

function Notes() {
  const [text, setText] = useState(JSON.parse(localStorage.getItem("text")));
  const handleChange = (e) => {
    setText(e.target.value);
    localStorage.setItem("text", JSON.stringify(text));
  };
  return (
    <div>
      <div className="notes">
        <p className="all-notes">All notes</p>
        <textarea
          className="input-notes"
          value={text}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
    </div>
  );
}

export default Notes;
