import React, { useState } from "react";

export const EventContext = React.createContext();

export const EventProvider = (props) => {
  const [events, setEvents] = useState([]);
  const getEvents = () => {
    return fetch("http://localhost:8000/events", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setEvents);
  };

  return (
    <EventContext.Provider value={{ events, getEvents }}>
      {props.children}
    </EventContext.Provider>
  );
};

