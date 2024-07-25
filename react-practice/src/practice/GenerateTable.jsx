import "./generateTable.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GenerateTable = () => {  
  const [rows, setRows] = useState();
  const [columns, setColumns] = useState();
  const [tableData, setTableData] = useState([]);

  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  //   //simple traversing 2d array
  //   const formSubmit = (e) => {
  //     e.preventDefault();
  //     const newTableData = [];
  //     let counter = 1;
  //     for (let i = 0; i < rows; i++) {
  //       const row = [];
  //       for (let j = 0; j < columns; j++) {
  //         row.push(counter++);
  //       }
  //       newTableData.push(row);
  //     }
  //     setTableData(newTableData);
  //   };

  //complex traversing 2d array: top to bottom, left++, bottom to top, left++, repeat, as the picture shows
  const formSubmit = (e) => {
    e.preventDefault();
    const newTableData = Array.from({ length: rows }, () =>
      Array(columns).fill(null)
    );
    let counter = 1;
    let left = 0;

    while (left < columns) {
      for (let i = 0; i < rows; i++) {
        newTableData[i][left] = counter++;
      }
      left++;
      if (left < columns) {
        for (let i = rows - 1; i >= 0; i--) {
          newTableData[i][left] = counter++;
        }
        left++;
      }
    }

    setTableData(newTableData);
  };

  return (
    <div className="generate-table-page-container">
        <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>
      
      <form onSubmit={formSubmit}>
        <label>
          Rows:
          <input
            type="number"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            min={0}
          />
        </label>

        <label>
          Columns:
          <input
            type="number"
            value={columns}
            onChange={(e) => setColumns(Number(e.target.value))}
            min={0}
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      <table>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenerateTable;
