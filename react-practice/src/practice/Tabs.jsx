import "./tabs.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingleTab = ({ defaultValue, items = [] }) => {
  const initialValue =
    defaultValue !== undefined
      ? defaultValue
      : items.length > 0
      ? items[0].value
      : null;
  const [value, setValue] = useState(initialValue);

  if (initialValue === null) {
    return <div>No items available.</div>;
  }

  return (
    <div className="tabs-page-single-tab-container">
      <div className="tabs-page-tabs-list">
        {items.map(({ label, value: itemValue }) => {
          const isActiveValue = itemValue === value;

          return (
            <button
              key={itemValue}
              type="button"
              className={[
                "tabs-page-tabs-list-item",
                isActiveValue && "tabs-page-tabs-list-item--active",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => {
                setValue(itemValue);
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div>
        {items.map(({ panel, value: itemValue }) => (
          <div key={itemValue} hidden={itemValue !== value}>
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
};

const Tabs = () => {
  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  return (
    <div className="tabs-page-container">
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>

      <SingleTab
        items={[
          {
            value: "html",
            label: "HTML",
            panel:
              "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
          },
          {
            value: "css",
            label: "CSS",
            panel:
              "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
          },
          {
            value: "javascript",
            label: "JavaScript",
            panel:
              "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
          },
        ]}
      />
    </div>
  );
};

export default Tabs;
