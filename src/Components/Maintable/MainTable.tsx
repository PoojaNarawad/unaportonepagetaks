import React, { useState } from "react";
import SearchBar from "../TopMenu/SecondNav";
import "./maintable.css";
import Functionbar from "../TopMenu/Functionbar";

interface tableData {
  checkbox: string;
  ConsentID: string;
  Vuaid: string;
  Tracking: string;
  CreatedBy: string;
  ConsentHandle: string;
  CreatedOn: string;
  FIPIDs: string;
  Status: string;
  Operations: string;
}

const MainTable: React.FC<{ tableData: tableData[] }> = ({ tableData }) => {
  const [checkedRowIndex, setCheckedRowIndex] = useState<number | null>(null);

  const handleCheckboxChange = (index: number) => {
    setCheckedRowIndex(index === checkedRowIndex ? null : index);
  };

  return (
    <div className="maintable">
      <SearchBar />
      <Functionbar />
      <div className="bodytable">
        <table className="table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Consent ID</th>
              <th>Vua id</th>
              <th>Tracking Id</th>
              <th>Created By</th>
              <th>Consent Handle</th>
              <th>Created On </th>
              <th>FIP IDs</th>
              <th>Status</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {tableData &&
              tableData.map((tableData, index) => (
                <tr>
                  <td key={index}>
                    {tableData.checkbox ? (
                      <input
                        type="checkbox"
                        checked={index === checkedRowIndex}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td
                    style={{
                      background:
                        index === checkedRowIndex
                          ? "rgb(233, 230, 230)"
                          : "white",
                    }}
                  >
                    {" "}
                    {tableData.ConsentID}
                  </td>
                  <td
                    style={{
                      background:
                        index === checkedRowIndex
                          ? "rgb(233, 230, 230)"
                          : "white",
                    }}
                  >
                    {" "}
                    {tableData.Vuaid}
                  </td>
                  <td
                    style={{
                      background:
                        index === checkedRowIndex
                          ? "rgb(233, 230, 230)"
                          : "white",
                    }}
                  >
                    {" "}
                    {tableData.Tracking}
                  </td>
                  <td
                    style={{
                      background:
                        index === checkedRowIndex
                          ? "rgb(233, 230, 230)"
                          : "white",
                    }}
                  >
                    {" "}
                    {tableData.CreatedBy}
                  </td>
                  <td
                    style={{
                      background:
                        index === checkedRowIndex
                          ? "rgb(233, 230, 230)"
                          : "white",
                    }}
                  >
                    {" "}
                    {tableData.ConsentHandle}
                  </td>
                  <td
                    style={{
                      background:
                        index === checkedRowIndex
                          ? "rgb(233, 230, 230)"
                          : "white",
                    }}
                  >
                    {" "}
                    {tableData.CreatedOn}
                  </td>
                  <td
                    style={{
                      background:
                        index === checkedRowIndex
                          ? "rgb(233, 230, 230)"
                          : "white",
                    }}
                  >
                    {" "}
                    {tableData.FIPIDs}
                  </td>
                  <td
                    style={{
                      background:
                        index === checkedRowIndex
                          ? "rgb(233, 230, 230)"
                          : "white",
                    }}
                  >
                    {" "}
                    {tableData.Status}
                  </td>
                  <td
                    style={{
                      background:
                        index === checkedRowIndex
                          ? "rgb(233, 230, 230)"
                          : "white",
                    }}
                  >
                    {" "}
                    {tableData.Operations}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainTable;
