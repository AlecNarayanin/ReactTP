import React from "react";
import {UsersTableRow } from "./UsersTableRow";
import "bootstrap/dist/css/bootstrap.min.css";

export function UsersTable({users, onSortChanged }) {

  const handleSortChanged = (key) => {
    onSortChanged((oldSort) => {
      if (oldSort.key !== key) {
        return { key, asc: true };
      }
      if (oldSort.asc) {
        return { key, asc: false };
      }
      return { key: "", asc: true };
    });
  };

  return (
    
    <table id="tbl-users" className="table table-hover">
      <thead>
      <tr>
        <th></th>
        <th onClick={e => handleSortChanged('lastName')}>Nom</th>
        <th onClick={e => handleSortChanged('email')}>Email</th>
        <th onClick={e => handleSortChanged('age')}>Age</th>
      </tr>
    </thead>
      <tbody>
        {users.map((user) => (
          <UsersTableRow userRow={user} key={user.email} />
        ))}
      </tbody>
    </table>
  );
}
