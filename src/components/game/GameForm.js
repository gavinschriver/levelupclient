import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameProvider";

export default (props) => {
  const { createGame, getGameTypes, gameTypes } = useContext(GameContext);

  const [currentGame, setCurrentGame] = useState({
    skillLevel: 1,
    numberOfPlayers: 0,
    title: "",
    maker: "",
    gameTypeId: 0,
  });

  useEffect(() => {
    getGameTypes();
  }, []);

  const handleControlledInputChange = (e) => {
    const newGameState = Object.assign({}, currentGame);
    newGameState[e.target.name] = e.target.value;
    setCurrentGame(newGameState);
  };

  return (
    <form className="gameForm">
      <h2>Submit Game</h2>
      <fieldset>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            required
            autoFocus
            value={createGame.title}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="title">Maker:</label>
          <input
            type="text"
            name="maker"
            required
            autoFocus
            value={createGame.maker}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="title">Skill Level:</label>
          <input
            type="text"
            name="skillLevel"
            required
            autoFocus
            value={createGame.skillLevel}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="numberOfPlayers">Number Of Players:</label>
          <input
            type="text"
            name="numberOfPlayers"
            required
            autoFocus
            value={createGame.numberOfPlayers}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="title">Game Type:</label>
          <select
            value={currentGame.gameTypeId}
            name="gameTypeId"
            onChange={handleControlledInputChange}
          >
            {gameTypes.map((gt) => {
              return (
                <option key={gt.id} value={gt.id}>
                  {gt.label}
                </option>
              );
            })}
          </select>
        </div>
          </fieldset>
          <button type="submit" onClick={e => {
              e.preventDefault()
              const game = {
                  maker: currentGame.maker,
                  title: currentGame.title,
                  numberOfPlayers: parseInt(currentGame.numberOfPlayers),
                  skillLevel: parseInt(currentGame.skillLevel),
                  gameTypeId: parseInt(currentGame.gameTypeId)
              }
              createGame(game)
          }} className="btn btn-primary">
              Create Game
          </button>
      </form>
  );
};
