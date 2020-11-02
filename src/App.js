import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { UserDetails } from "./UserDetails";
import { Header } from "./Header";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserContext from "./UserContext";
import { UsersTable } from "./UsersTable";

const fetchClick = async (usersNumber) => {
  try {
    const {
      data: { results },
    } = await axios.get(`https://randomuser.me/api/?results=${usersNumber}`);
    return results.map((result) => ({
      id: result.login.uuid,
      firstName: result.name.first,
      lastName: result.name.last.toUpperCase(),
      picture: result.picture.thumbnail,
      phone: result.phone,
      email: result.email,
      gender: result.gender,
      age: result.dob.age,
    }));
  } catch (e) {
    console.error(e);
    return [];
  }
};

//Ajouter des methodes sur users past future present

function App() {
  const [users, setUsers] = useState(()=>localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []);
  const [filter, setFilter] = useState("");
  const [gender, setGender] = useState("");
  const [sort, setSort] = useState({ key: "", asc: true });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
    //const initUsers = async() => setUsers(await handleClick(5));
    //fetchClick(5).then((response) => setUsers(oldValues => [...oldValues, ...response]));
    //fetchClick(5).then((response) => setUsers(oldValues => [...oldValues, ...response]));
  }, [users]);

  const handleClick = async () => {
      const usersFetch = await fetchClick(10);
      setUsers((oldUser) => [...oldUser, ...usersFetch]);
  };

  const usersFiltered = users
    .filter((user) => {
      if (filter === "") {
        return true;
      }
      return (
        user.firstName.toLowerCase().startsWith(filter.toLowerCase()) ||
        user.lastName.toLowerCase().startsWith(filter.toLowerCase())
      );
    })
    .filter((user) => {
      if (gender === "") {
        return true;
      }

      return user.gender.toLowerCase() === gender;
    })
    .sort((item1, item2) => {
      if (sort.key === "") {
        return 0;
      }
      const nameA = item1[sort.key];
      const nameB = item2[sort.key];
      if (nameA < nameB) {
        return sort.asc ? -1 : 1;
      }
      return sort.asc ? 1 : -1;
    });

  return (
    <Router>
      <UserContext.Provider value={[users]}>
        <Switch>
          <Route path="/userDetails/:email" component={UserDetails} />
          <Route path="/">
            <div className="container-fluid">
              <div id="app">
                <div>users : {users.length}</div>
                <div>input : {filter}</div>
                <div>gender : {gender}</div>
                <div>sort : {sort.key}</div>
                <div>order : {sort.key ? (sort.asc ? 'en montant' : 'en descendant') : ''}</div>
                <div style={{ display: "flex" }}>
                  <Header
                    searchFilter={filter}
                    onSearchChange={setFilter}
                    genderFilter={gender}
                    onGenderChange={setGender}
                    onFetchClick={handleClick}
                  />
                </div>
                {usersFiltered.length ? (
                  <UsersTable users={usersFiltered} onSortChanged={setSort} />
                ) : (
                  <p className="alert alert-warning my-3">
                    {" "}
                    Pas d'utilisateurs
                  </p>
                )}
              </div>
            </div>
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
