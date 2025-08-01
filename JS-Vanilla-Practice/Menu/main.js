/* IMPRTANT DISCLAIMER
 * A Design Mistake For Security Purposes is to Expose Global Variables, this is not valid.
 * This Code is only for educational purposes only, and all of the code in the Simple Projects Repo
 * Are For Educational and exercise purposes only.
 * Please Don't Copy/Paste, have fun and try to mimic and apply only to understand.
 **/

/* The Menu Object Structure
* An Array Of Objects (Hash-Tables)
* Each Hash-Table is An Item
* The Item Strucute (key[SYMBOL]: value[DATA-TYPE])
    -> id: number,
    -> title: string,
    -> category: string,
    -> price: float,
    -> img: string, // A file path, or possibly a URL
    -> desc: string,
*/

// GLOBAL VARS
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// Main Listener
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

// The Helpers

function displayMenuItems(menu) {
  let displayMenu = menu.map((item) => {
    return `
        <article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
          </div>
        </article>
        `;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  // Constructing A Category Array.
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  // Building The Buttons Dynamically Based On Categories.
  const categoryBtns = categories
    .map((category) => {
      return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
            </button>`;
    })
    .join("");

  // Render Before Query For Buttons
  btnContainer.innerHTML = categoryBtns;

  // Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        return menuItem.category === category;
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
