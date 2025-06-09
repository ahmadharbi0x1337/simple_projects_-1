export default class View {
    $ = {};
    $$ = {};
    constructor(){
        this.$.menu = this.#qs("[data-id='menu']")
        this.$.menuBtn = this.#qs("[data-id='menu-btn']")
        this.$.menuItems = this.#qs("[data-id='menu-items']")
        this.$.resetBtn = this.#qs("[data-id='reset-button']")
        this.$.newRoundBtn = this.#qs("[data-id='new-round-button']")
        this.$.modal = this.#qs("[data-id='modal']")
        this.$.modalText = this.#qs("[data-id='modal-text']")
        this.$.modalBtn = this.#qs("[data-id='modal-btn']")
        this.$.p1Score = this.#qs("[data-id='player1-stats']")
        this.$.p2Score = this.#qs("[data-id='player2-stats']")
        this.$.tiesScore = this.#qs("[data-id='ties']")
        this.$.turnIndicator = this.#qs("[data-id='turn-indicator']")

        this.$$.squares = this.#qsAll("[data-id='square']")
        
        // UI-only evnet Listeners
        this.$.menuBtn.addEventListener("click", (event) => {
            this.#toggleMenu();
        });
    }

    /** 
    * Register All Event Listeners
    */


    bindGameResetEvent(handler) {
        this.$.resetBtn.addEventListener("click", handler);
    }
    bindNewRoundEvent(handler) {
        this.$.newRoundBtn.addEventListener("click", handler);
    }
    bindPlayerMoveEvent(handler) {
        this.$.squares.forEach(square => {
            square.addEventListener("click", handler);
        });
    }              


    /**
     * DOM Helper Methods
     */
    #toggleMenu(){
        this.$.menuItems.classList.toggle("hidden");
        this.$.menuBtn.classList.toggle("border")
        const icon = this.$.menuBtn.querySelector("i");
        icon.classList.toggle("fa-chevron-down");
        icon.classList.toggle("fa-chevron-up");
    }


    #qs(selector, parent){
        const el = 
        parent ?
        parent.querySelector(selector) :
        document.querySelector(selector);
        if (!el) {
            throw new Error(`Element not found for selector: ${selector}`);
        }
        return el;
    }
    #qsAll(selector, parent){
        const eList = 
        parent ?
        parent.querySelectorAll(selector) :
        document.querySelectorAll(selector);
        if (!eList) {
            throw new Error(`Elements not found for selector: ${selector}`);
        }
        return eList;
    }
}
