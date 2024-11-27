import { React, useContext, useEffect } from "react";
import Nav from "./nav";
import UserContext from "../Context/userContext";
import { getProfile } from "../API/auth";
import myImg from "../Pics/myImage.jpg";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
  const { data } = useQuery({
    queryKey: ["profiles"],
    queryFn: getProfile,
  });
  console.log(data);

  return (
    <div>
      <Nav />

      <div className="div-profile">
        <div className="profile-info">
          <img className="my-image" src={myImg} />
          <h3>Welcome, {data?.username}!</h3>
          <h4>
            Your balance is: {data?.balance}
            <span style={{ color: "green" }}> KWD</span>
            <div className="picUpload">
              <label htmlFor="profile-picture">Upload Profile Picture:</label>
              <input
                className="input-image"
                type="file"
                accept="image/*"
                id="profile-picture"
              />
              <button className="save-button">Save</button>
            </div>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Profile;
