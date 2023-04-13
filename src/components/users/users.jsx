import "./users.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Users = () => {
  const [Users, setUsers] = useState([]);
  const [GetUsers, setGetUsers] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [GetUsers]);

  const removeUser = async (id) => {
    let res = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
    if (res.status === 200) {
      setGetUsers((prev) => prev + 1);
    }
  };

  const Users_Table = Users.map((user, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td className="action">
        <Link to={ `${user.id}`} >
          <i className="fa-solid fa-pen-to-square"></i>
        </Link>
        <i
          className="fa-solid fa-trash"
          onClick={() => removeUser(user.id)}
        ></i>
      </td>
    </tr>
  ));

  return (
    <>
      <table className="usersTaple">
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{Users_Table}</tbody>
      </table>
    </>
  );
};
