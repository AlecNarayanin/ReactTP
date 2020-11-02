import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Users from "./UserContext";

export function UserDetails(props) {
 
  const [allUsers] = useContext(Users);
  const selectedUser = allUsers.find(
    (user) => user.email === props.match.params.email
  );
  let history = useHistory();
  return (
    <>
    <div>
      <img src={selectedUser.picture} alt="profil" />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          firstname : {selectedUser.firstName}
        </li>
        <li className="list-group-item">firstname : {selectedUser.lastName}</li>
        <li className="list-group-item">email : {selectedUser.email}</li>
        <li className="list-group-item">age : {selectedUser.age}</li>
      </ul>
    </div>
    <button className='btn btn-primary' onClick={()=>history.push("/")}>Retour</button>
  </>
  );
}
