import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import classNames from "classnames";
import "./App.css";
import { GameState, Player } from "./types";

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

function deriveGame(state: GameState) {
  const currentPlayer = players[state.currentGameMoves.length % 2];

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
  for (const player of players) {
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

function deriveStats(state: GameState) {
  return {
    playerWithStats: players.map((player) => {
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

export default function App() {
  const [state, setState] = useState<GameState>({
    currentGameMoves: [],
    history: {
      currentRoundGames: [],
      allGames: [],
    },
  });

  const game = deriveGame(state);
  const stats = deriveStats(state);

  function handlePlayerMove(squareId: number, player: Player) {
    setState((prev) => {
      const stateClone = structuredClone(prev);
      stateClone.currentGameMoves.push({ squareId, player });
      return stateClone;
    });
  }

  function resetGame(isNewRound: boolean) {
    setState((prev) => {
      const stateClone = structuredClone(prev);
      const { status, moves } = game;
      if (status.isComplete) {
        stateClone.history.currentRoundGames.push({
          moves,
          status,
        });
      }
      stateClone.currentGameMoves = [];
      if (isNewRound) {
        stateClone.history.allGames.push(
          ...stateClone.history.currentRoundGames
        );
        stateClone.history.currentRoundGames = [];
      }
      return stateClone;
    });
  }
  return (
    <>
      <main>
        <div className="grid">
          <div className="turn">
            <i
              className={classNames(
                "fa-solid",
                game.currentPlayer.iconClass,
                game.currentPlayer.colorClass
              )}
            ></i>
            <p className={classNames(game.currentPlayer.colorClass)}>
              {game.currentPlayer.name}, You Are Up!
            </p>
          </div>
          {/* The Menu Component */}
          <Menu
            onAction={(action) =>
              resetGame(action === "new-round" ? true : false)
            }
          />
          {/* The Board Component */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((squareId) => {
            const existingMove = game.moves.find(
              (move) => move.squareId === squareId
            );

            return (
              <div
                key={squareId}
                className="square shadow"
                onClick={() => {
                  if (existingMove) return;

                  handlePlayerMove(squareId, game.currentPlayer);
                }}
              >
                {existingMove && (
                  <i
                    className={classNames(
                      "fa-solid",
                      existingMove.player.colorClass,
                      existingMove.player.iconClass
                    )}
                  ></i>
                )}
              </div>
            );
          })}
          {/* The Score Board Component */}
          <div
            className="score shadow"
            style={{ backgroundColor: "var(--turquoise)" }}
          >
            <p>Player 1</p>
            <span data-id="player1-stats">
              {stats.playerWithStats[0].wins} Wins
            </span>
          </div>
          <div
            className="score shadow"
            style={{ backgroundColor: "var(--light-gray)" }}
          >
            <p>Ties</p>
            <span data-id="ties">{stats.ties}</span>
          </div>
          <div
            className="score shadow"
            style={{ backgroundColor: "var(--yellow)" }}
          >
            <p>Player 2</p>
            <span data-id="player2-stats">
              {stats.playerWithStats[1].wins} Wins
            </span>
          </div>
        </div>
      </main>
      {/* The Footer Component */}
      <Footer />
      {/* The Modal Component */}
      {game.status.isComplete && (
        <Modal
          message={
            game.status.winner ? `${game.status.winner.name} wins!` : "Tie!"
          }
          onceClicked={() => resetGame(false)}
        />
      )}
    </>
  );
}
