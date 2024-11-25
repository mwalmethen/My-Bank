import React from "react";
import Nav from "./nav";

const Profile = () => {
  return (
    <div>
      <Nav />

      <div className="div-profile">
        <div className="profile-info">
          <h3>user image..</h3>
          <h3>user name...</h3>

          <h4>Balance: $$$$$$$</h4>

          <div className="mb-6">
            <label htmlFor="image">Upload profile Image</label>
            <input
              type="file"
              id="image"
              name="image"
              className="image-bar"
              required
            />
          </div>

          <button className="transfer-button-user">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
