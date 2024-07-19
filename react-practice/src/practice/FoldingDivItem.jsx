import FoldingDiv from "./FoldingDiv";
import "./foldingDiv.css";
import { useNavigate } from "react-router-dom";

const FoldingDivItem = () => {
  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  return (
    <>
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>
      <div className="wrapper-container">
        <FoldingDiv
          sections={[
            {
              value: "html",
              title: "HTML",
              contents:
                "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
            },
            {
              value: "css",
              title: "CSS",
              contents:
                "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
            },
            {
              value: "javascript",
              title: "JavaScript",
              contents:
                "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
            },
          ]}
        />
      </div>
    </>
  );
};

export default FoldingDivItem;
