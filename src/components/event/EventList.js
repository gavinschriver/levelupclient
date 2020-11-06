import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider";

export const EventList = (props) => {
  const { events, getEvents, joinEvent, leaveEvent } = useContext(EventContext);

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <article className="events">
      <header className="events__header">
        <h1>Level Up Events</h1>
        <button
          className="btn btn-2 btn-sep icon-create"
          onClick={() => {
            props.history.push({ pathname: "/events/new" });
          }}
        >
          Add new event
        </button>
      </header>
      {events.map((e) => {
        return (
          <section key={e.id} className="registration">
            <div className="registration_game">{e.game.title}</div>
            <div>{e.description}</div>
            <div>
              {new Date(e.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              @ {e.time}
            </div>
            {e.joined ? (
              <button className="btn btn-2" onClick={() => leaveEvent(e.id)}>
                LEAVE
              </button>
            ) : (
              <button className="btn bg-1" onClick={() => joinEvent(e.id)}>
                JOIN
              </button>
            )}
          </section>
        );
      })}
    </article>
  );
};
