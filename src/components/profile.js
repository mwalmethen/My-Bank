import { React, useContext, useEffect } from "react";
import Nav from "./nav";
import UserContext from "../Context/userContext";
import { getProfile } from "../API/auth";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchProfile = async () => {
      const user = await getProfile();
      setUser(user); // Set the user context after fetching the profile
    };

    fetchProfile();
  }, [setUser]);

  return (
    <div>
      <Nav />

      <div className="div-profile">
        <div className="profile-info">
          <h3>Welcome, {user?.name || "User"}!</h3>
          <h4>
            Balance: {user?.balance?.toFixed(2)}
            <span style={{ color: "green" }}>KWD</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Profile;
