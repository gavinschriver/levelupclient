import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "../game/GameProvider";
import { EventContext } from "./EventProvider";

export const EventForm = (props) => {
  const { games, getGames } = useContext(GameContext);
  const { createEvent } = useContext(EventContext);
  const [currentEvent, setEvent] = useState({
    time: "",
    date: "",
    description: "",
    location: "",
    gameId: 0,
  });

  const handleControlledInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...currentEvent,
      [name]: value,
    });
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Schedule New Event</h2>

      {/* time */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            name="date"
            type="date"
            className="form-control"
            value={currentEvent.date}
            required
            autoFocus
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      {/* time */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            name="time"
            type="time"
            className="form-control"
            value={currentEvent.time}
            required
            autoFocus
            onChange={handleControlledInputChange}
          ></input>
        </div>
      </fieldset>

      {/* description */}
      <fieldset>
        <div className="form-group"></div>
        <label htmlFor="description">Event Description</label>
        <input
          name="description"
          type="text"
          className="form-control"
          value={currentEvent.description}
          required
          autoFocus
          onChange={handleControlledInputChange}
        ></input>
      </fieldset>

      {/* location */}
      <fieldset>
        <div className="form-group"></div>
        <label htmlFor="location">Location</label>
        <input
          name="location"
          type="text"
          className="form-control"
          value={currentEvent.location}
          required
          autoFocus
          onChange={handleControlledInputChange}
        ></input>
      </fieldset>

      {/* game */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="gameId">Game: </label>
          <select
            name="gameId"
            className="form-control"
            value={currentEvent.gameId}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a game...</option>
            {games.map((game) => (
              <option key={game.id} value={game.id}>
                {game.title}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          //   const formattedDate = new Date(currentEvent.date).toLocaleDateString("en-US");
          const newEvent = {
            time: currentEvent.time,
            date: currentEvent.date,
            description: currentEvent.description,
            location: currentEvent.location,
            gameId: parseInt(currentEvent.gameId),
          };
          createEvent(newEvent);
        }}
        className="btn btn-primary"
      >
        Create Event
      </button>
    </form>
  );
};
