export default class View {
  $ = {};
  $$ = {};
  constructor() {
    // Single Elements
    this.$.turnIndicator = this.#qs("[data-id='turn-indicator']");
    this.$.menu = this.#qs("[data-id='menu']");
    this.$.menuBtn = this.#qs("[data-id='menu-btn']");
    this.$.menuItems = this.#qs("[data-id='menu-items']");
    this.$.resetBtn = this.#qs("[data-id='reset-button']");
    this.$.newRoundBtn = this.#qs("[data-id='new-round-button']");
    this.$.modal = this.#qs("[data-id='modal']");
    this.$.modalText = this.#qs("[data-id='modal-text']");
    this.$.modalBtn = this.#qs("[data-id='modal-btn']");
    this.$.p1Score = this.#qs("[data-id='player1-stats']");
    this.$.p2Score = this.#qs("[data-id='player2-stats']");
    this.$.tiesScore = this.#qs("[data-id='ties']");
    this.$.grid = this.#qs("[data-id='grid']");
    // List Element
    this.$$.squares = this.#qsAll("[data-id='square']");

    // UI-only evnet Listeners
    this.$.menuBtn.addEventListener("click", (event) => {
      this.#toggleMenu();
    });
  }

  render(game, stats) {
    const { playerWithStats, ties } = stats;
    const {
      moves,
      currentPlayer,
      status: { isComplete, winner },
    } = game;

    this.#closeAll();
    this.#clearBoard();
    this.#updateScoreBoard(
      playerWithStats[0].wins,
      playerWithStats[1].wins,
      ties
    );
    this.#initBoard(moves);
    if (isComplete) {
      this.#openModal(winner ? `${winner.playerName} Wins` : "Tie!");
      return;
    }
    this.#setTurnIndicator(currentPlayer);
  }

  /**
   * Register All Event Listeners
   */
  bindGameResetEvent(handler) {
    this.$.resetBtn.addEventListener("click", handler);
    this.$.modalBtn.addEventListener("click", handler);
  }
  bindNewRoundEvent(handler) {
    this.$.newRoundBtn.addEventListener("click", handler);
  }
  bindPlayerMoveEvent(handler) {
    this.#delegate(this.$.grid, "[data-id='square']", "click", handler);
    // this.$$.squares.forEach((square) => {
    //   square.addEventListener("click", () => handler(square));
    // });
  }

  /**
   * DOM Helper Methods
   */
  #updateScoreBoard(p1, p2, t) {
    this.$.p1Score.innerText = `${p1} wins`;
    this.$.p2Score.innerText = `${p2} wins`;
    this.$.tiesScore.innerText = `${t}`;
  }
  #openModal(message) {
    this.$.modalText.innerText = `${message}`;
    this.$.modal.classList.remove("hidden");
  }
  #closeAll() {
    this.#closeModal();
    this.#closeMenu();
  }
  #closeModal() {
    this.$.modal.classList.add("hidden");
  }
  #clearBoard() {
    this.$$.squares.forEach((square) => {
      square.replaceChildren();
    });
  }
  #initBoard(moves) {
    this.$$.squares.forEach((square) => {
      const existingMove = moves.find((move) => move.squareId === +square.id);

      if (existingMove) {
        this.#handlePlayerMove(square, existingMove.player);
      }
    });
  }
  #closeMenu() {
    this.$.menuItems.classList.add("hidden");
    this.$.menuBtn.classList.remove("border");
    const icon = this.$.menuBtn.querySelector("i");
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  }
  #toggleMenu() {
    this.$.menuItems.classList.toggle("hidden");
    this.$.menuBtn.classList.toggle("border");
    const icon = this.$.menuBtn.querySelector("i");
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");
  }
  #qs(selector, parent) {
    const el = parent
      ? parent.querySelector(selector)
      : document.querySelector(selector);
    if (!el) {
      throw new Error(`Element not found for selector: ${selector}`);
    }
    return el;
  }
  #qsAll(selector, parent) {
    const eList = parent
      ? parent.querySelectorAll(selector)
      : document.querySelectorAll(selector);
    if (!eList) {
      throw new Error(`Elements not found for selector: ${selector}`);
    }
    return eList;
  }
  #handlePlayerMove(squareEl, player) {
    const icon = document.createElement("i");
    icon.classList.add(player.iconClass, player.colorClass, "fa-solid");
    squareEl.replaceChildren(icon);
  }
  #setTurnIndicator(player) {
    const icon = document.createElement("i");
    const label = document.createElement("p");

    label.innerText = `${player.playerName}, you are Up!`;
    label.classList.add(player.colorClass);
    icon.classList.add("fa-solid", player.iconClass, player.colorClass);

    this.$.turnIndicator.replaceChildren(icon, label);
  }
  #delegate(el, selector, eventKey, handler) {
    el.addEventListener(eventKey, (event) => {
      if (event.target.matches(selector)) {
        handler(event.target);
      }
    });
  }
}
