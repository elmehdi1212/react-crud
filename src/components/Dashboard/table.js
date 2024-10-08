import { employeesData } from "../../data";
import React from "react";

const Table = () => {
  console.log(employeesData.length);
  return (
    <div className="container-table">
      <table className="spread-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.length > 0 ? (
            employeesData.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.salary}</td>
                <td>{employee.date}</td>
                <td className="text-right">
                  <button className="button muted-button">Edit</button>
                </td>
                <td className="text-left">
                  <button className="button muted-button">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              {" "}
              <td colSpan={7}>No Employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
