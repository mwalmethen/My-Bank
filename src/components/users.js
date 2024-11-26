import React from "react";
import Nav from "./nav";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../API/auth";

const Users = () => {
  const { data } = useQuery({
    queryKey: ["userDataList"], // Query key
    queryFn: getAllUsers, // Query function
  });

  return (
    <div>
      <Nav />

      <div className="users-div">
        <div className="div-user">
          {data?.map((user) => (
            <div key={user.id}>
              <img
                src={user.image || "/default-avatar.png"} // Display user image, fallback to default
                alt={`${user.name}'s profile`}
                className="user-avatar"
              />
              <h3>{user.name}</h3>
              <h4>Balance: {user.balance?.toFixed(2) || "0.00"} KWD</h4>
              <button className="transfer-button-user">Transfer</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
