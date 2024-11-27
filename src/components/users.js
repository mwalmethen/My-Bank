import React from "react";
import Nav from "./nav";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../API/auth";

const Users = () => {
  const { data } = useQuery({
    queryKey: ["userDataList"], // Query key
    queryFn: getAllUsers, // Query function
  });

  const users = data?.map((userData) => (
    <div className="div-user">
      <div>
        <img
          src={
            "https://react-bank-project.eapi.joincoded.com/" + userData.image
          } // Display user image, fallback to default
          alt={`${userData?.name}'s profile`}
          className="user-avatar"
        />
        <h3>{userData?.username}</h3>
        <h4>Balance: {userData?.balance} KWD</h4>
        <button className="transfer-button-user">Transfer</button>
      </div>
    </div>
  ));
  return (
    <div>
      <Nav />

      <div className="users-div">{users}</div>
    </div>
  );
};

export default Users;
