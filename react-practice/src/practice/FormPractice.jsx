import { useState } from "react";
import "./formPractice.css";

const dataFromDatabase = {
  title: "Form Practice",
  pageContent: {
    pageOne: {
      stepHeader: "Step 1",
      hardcode: [
        {
          question: "What is the thing?",
          placeholder: "Enter the thing",
        },
        {
          question: "Why you need this thing?",
          placeholder: "Enter the reason",
        },
        {
          question: "Who you want to give this thing?",
          vendors: ["vendor1", "vendor2", "vendor3"],
        },
      ],
    },
    pageTwo: {
      stepHeader: "Step 2",
      hardcode: [
        {
          question: "Who you want to give this thing?",
          placeholder: "Enter the person",
        },
      ],
    },
  },
};

const FormPractice = () => {
  const data = dataFromDatabase;

  const [pageOneFirstInput, setPageOneFirstInput] = useState("");
  const [pageOneSecondInput, setPageOneSecondInput] = useState("");
  const [pageOneThirdInput, setPageOneThirdInput] = useState(
    data.pageContent.pageOne.hardcode[2].vendors[0]
  );
  const [pageOneShow, setPageOneShow] = useState(true);
  const [pageTwoShow, setPageTwoShow] = useState(false);
  const [pageTwoFirstInput, setPageTwoFirstInput] = useState("");

  const handlePageOneNextClick = () => {
    if (!pageOneFirstInput.trim() || !pageOneSecondInput.trim()) {
      alert("Please fill all the fields");
      return;
    }

    setPageOneShow(false);

    setPageOneFirstInput("");
    setPageOneSecondInput("");
    setPageOneThirdInput(data.pageContent.pageOne.hardcode[2].vendors[0]);

    setPageTwoShow(true);
  };

  const handlePageTwoFinishClick = () => {
    if (!pageTwoFirstInput.trim()) {
      alert("Please fill all the fields");
      return;
    }

    setPageTwoFirstInput("");
    setPageTwoShow(false);
    setPageOneShow(true);
  };

  return (
    <div className="form-practice-container">
      <h1>Form Practice </h1>
      {pageOneShow && (
        <div className="form-practice-page-one-form-container">
          <form>
            <h2>{data.pageContent.pageOne.stepHeader}</h2>
            <label>
              {data.pageContent.pageOne.hardcode[0].question}
              <input
                type="text"
                value={pageOneFirstInput}
                onChange={(e) => setPageOneFirstInput(e.target.value)}
                placeholder={data.pageContent.pageOne.hardcode[0].placeholder}
                required
              />
            </label>

            <label>
              {data.pageContent.pageOne.hardcode[1].question}
              <input
                type="text"
                value={pageOneSecondInput}
                onChange={(e) => setPageOneSecondInput(e.target.value)}
                placeholder={data.pageContent.pageOne.hardcode[1].placeholder}
                required
              />
            </label>

            <label htmlFor="pageOneThirdComponent">
              {data.pageContent.pageOne.hardcode[2].question}
              <select
                name="Page one third component"
                id="pageOneThirdComponent"
                value={pageOneThirdInput}
                onChange={(e) => setPageOneThirdInput(e.target.value)}
                required
              >
                {data.pageContent.pageOne.hardcode[2].vendors &&
                  data.pageContent.pageOne.hardcode[2].vendors.map(
                    (vendor, index) => (
                      <option key={index} value={vendor}>
                        {vendor}
                      </option>
                    )
                  )}
              </select>{" "}
            </label>
          </form>
          <button type="button" onClick={handlePageOneNextClick}>
            Next
          </button>
        </div>
      )}

      {pageTwoShow && (
        <div>
          <form className="form-practice-page-two-form-container">
            <h2>{data.pageContent.pageTwo.stepHeader}</h2>
            <label>
              {data.pageContent.pageTwo.hardcode[0].question}
              <input
                type="text"
                value={pageTwoFirstInput}
                onChange={(e) => setPageTwoFirstInput(e.target.value)}
                placeholder={data.pageContent.pageTwo.hardcode[0].placeholder}
                required
              />
            </label>

            <button type="submit" onClick={handlePageTwoFinishClick}>
              Finish
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormPractice;
