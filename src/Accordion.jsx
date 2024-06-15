import { useState } from "react";
import data from "./data.js";
import "./styles.css";

function Accordion() {
  const [seleceted, setSelected] = useState(null);

  function handleSelection(getCurrentId) {
    setSelected(getCurrentId === seleceted ? null : getCurrentId);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={() => handleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {seleceted === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
