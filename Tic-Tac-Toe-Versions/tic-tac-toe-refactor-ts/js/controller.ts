import type { Player } from "./types";
import View from "./view.js";
import Model from "./model.js";

// Game Configurations
const players: Player[] = [
  {
    id: 1,
    name: "Player 1",
    iconClass: "fa-x",
    colorClass: "turquoise",
  },
  {
    id: 2,
    name: "Player 2",
    iconClass: "fa-o",
    colorClass: "yellow",
  },
];

// Controller Initialization (Control-Flow)
function init() {
  const view = new View();

  const model = new Model("live-t3-storage-key", players);

  // for current tab stats changes
  model.addEventListener("statechange", () => {
    view.render(model.game, model.stats);
  });
  // to save stats changes for a different tab
  window.addEventListener("storage", () => {
    view.render(model.game, model.stats);
  });

  // First load (initialization)
  view.render(model.game, model.stats);

  view.bindGameResetEvent((event) => {
    model.reset();
  });

  view.bindNewRoundEvent((event) => {
    model.newRound();
  });

  view.bindPlayerMoveEvent((square) => {
    const existingMove = model.game.moves.find(
      (move) => move.squareId === +square.id
    );
    if (existingMove) {
      return;
    }
    // This will also update the current player in the model
    model.playerMove(+square.id);
  });
}

window.addEventListener("load", init);
