import React from "react";
import SearchBar from "../TopMenu/SecondNav";
import "./maintable.css";
import Functionbar from "../TopMenu/Functionbar";

interface tableData {
  checkbox: string,
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
                tableData.map((tableData) => (
                  <tr>
                    <td> {tableData.checkbox}</td>
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
