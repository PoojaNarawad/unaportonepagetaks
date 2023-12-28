import React from "react";
import SearchBar from "../TopMenu/SecondNav";
import "./maintable.css";
import Functionbar from "../TopMenu/Functionbar";

interface tableData {
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
  return (
    <div className="div1">
      <div className="maintable">
        <SearchBar />
        <Functionbar />
        <div className="bodytable">
          <table className="table">
            <thead className="tablehead">
              <tr>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" />
                  </label>
                  <th>Consent ID</th>
                </div>
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
            <tbody className="tablebody">
              {tableData &&
                tableData.map((tableData) => (
                  <tr>
                    <td> {tableData.ConsentID}</td>
                    <td> {tableData.Vuaid}</td>
                    <td> {tableData.Tracking}</td>
                    <td> {tableData.CreatedBy}</td>
                    <td> {tableData.ConsentHandle}</td>
                    <td> {tableData.CreatedOn}</td>
                    <td> {tableData.FIPIDs}</td>
                    <td> {tableData.Status}</td>
                    <td> {tableData.Operations}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainTable;
