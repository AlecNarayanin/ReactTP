import React from "react";
import { useHistory } from "react-router-dom";

export function UsersTableRow({ userRow }) {
    let history = useHistory();
    return (
      <tr
        onClick={() => {
          history.push("/userDetails/" + userRow.email);
        }}
      >
        <td>
          <img src={userRow.picture} alt="profil" />
        </td>
        <td>
          {userRow.firstName} {userRow.lastName}
        </td>
        <td>{userRow.email}</td>
        <td>{userRow.age}</td>
      </tr>
    );
  }