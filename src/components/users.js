import React from "react";
import Nav from "./nav";

const Users = () => {
  return (
    <div>
      <Nav />

      <div className="div-user">
        <div>
          <h3>user image..</h3>
          <h3>user name...</h3>

          <h4>Balance: $$$$$$$</h4>

          <button className="transfer-button-user">Transfer</button>
        </div>
      </div>
    </div>
  );
};

export default Users;
