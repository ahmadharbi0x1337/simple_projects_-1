const initialValue = {
  currentGameMoves: [],
  history: {
    currentRoundGames: [],
    allGames: [],
  },
};

export default class Model extends EventTarget {
  constructor(key, players) {
    super();
    this.storageKey = key;
    this.players = players;
  }

  // History stats Getter Method
  get stats() {
    const state = this.#getState();

    return {
      playerWithStats: this.players.map((player) => {
        const wins = state.history.currentRoundGames.filter(
          (game) => game.status.winner?.id === player.id
        ).length;

        return {
          ...player,
          wins,
        };
      }),
      ties: state.history.currentRoundGames.filter(
        (game) => game.status.winner === null
      ).length,
    };
  }
  // Current Game stats Getter Method
  get game() {
    const state = this.#getState();

    const currentPlayer = this.players[state.currentGameMoves.length % 2];

    const winningPatterns = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    let winner = null;
    // Check if there is a winner
    for (const player of this.players) {
      const selectedSquaresId = state.currentGameMoves
        .filter((move) => move.player.id === player.id)
        .map((move) => move.squareId);

      for (const pattern of winningPatterns) {
        if (pattern.every((e) => selectedSquaresId.includes(e))) {
          winner = player;
        }
      }
    }

    return {
      moves: state.currentGameMoves,
      currentPlayer,
      status: {
        isComplete: state.currentGameMoves.length === 9 || winner !== null,
        winner,
      },
    };
  }

  reset() {
    const stateClone = structuredClone(this.#getState());

    const { moves, status } = this.game;

    if (status.isComplete) {
      stateClone.history.currentRoundGames.push({
        moves,
        status,
      });
    }
    stateClone.currentGameMoves = [];
    this.#saveState(stateClone);
  }

  newRound() {
    this.reset();

    const stateClone = structuredClone(this.#getState());

    stateClone.history.allGames.push(...stateClone.history.currentRoundGames);
    stateClone.history.currentRoundGames = [];

    this.#saveState(stateClone);
  }
  // State Updating Without Any Mutating, Immutable State Management
  playerMove(squareId) {
    const stateClone = structuredClone(this.#getState());

    stateClone.currentGameMoves.push({
      squareId,
      player: this.game.currentPlayer,
    });

    this.#saveState(stateClone);
  }
  #getState() {
    const item = window.localStorage.getItem(this.storageKey);
    return item ? JSON.parse(item) : initialValue;
  }
  #saveState(stateOrFn) {
    const prevState = this.#getState();

    let newState;

    switch (typeof stateOrFn) {
      case "function":
        newState = stateOrFn(prevState);
        break;
      case "object":
        newState = stateOrFn;
        break;
      default:
        throw new Error("Invalid state argument passed to saveState");
    }

    window.localStorage.setItem(this.storageKey, JSON.stringify(newState));
    this.dispatchEvent(new Event("statechange"));
  }
}
