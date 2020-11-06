import React, {useState} from "react";

export const ProfileContext = React.createContext();

export const ProfileProvider = (props) => {
  const [profile, setProfile] = useState({ events: [] });

  const getProfile = () => {
    return fetch("http://localhost:8000/profile", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(setProfile);
  };

  return (
    <ProfileContext.Provider value={{ profile, getProfile }}>
      {props.children}
    </ProfileContext.Provider>
  );
};
