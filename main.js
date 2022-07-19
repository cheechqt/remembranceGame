
const imagesArray = [
  {
    name: "Java",
    src: "./images/java.png"
  },
  {
    name: "cSharp",
    src: "./images/cSharp.png"
  },
  {
    name: "fSharp",
    src: "./images/fSharp.png"
  },
  {
    name: "js",
    src: "./images/js.png"
  },
  {
    name: "PHP",
    src: "./images/PHP.png"
  },
  {
    name: "python",
    src: "./images/python.png"
  },
  {
    name: "Java",
    src: "./images/java.png"
  },
  {
    name: "cSharp",
    src: "./images/cSharp.png"
  },
  {
    name: "fSharp",
    src: "./images/fSharp.png"
  },
  {
    name: "js",
    src: "./images/js.png"
  },
  {
    name: "PHP",
    src: "./images/PHP.png"
  },
  {
    name: "python",
    src: "./images/python.png"
  },
];

const grid = document.getElementById("grid");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
let cardsChoosenNames = [];
let cardsChoosenIds = [];
let cardsDone = [];

function generateGrid() {
  for (let i = 0; i < imagesArray.length; i++) {
    const block = document.createElement("img");
    block.setAttribute("data-id", i);
    block.setAttribute("src", "./images/question.png");
    block.addEventListener("click", flipCard)
    grid.append(block)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  imagesArray.sort(() => (0.5 - Math.random()));
  generateGrid()
})

function flipCard() {
  if (cardsChoosenNames.length == 2) {
    return;
  }
  const cardId = this.getAttribute("data-id");
  cardsChoosenNames.push(imagesArray[cardId].name);
  cardsChoosenIds.push(cardId);
  this.setAttribute("src", `${imagesArray[cardId].src}`)
  if (cardsChoosenNames.length == 2) {
    setTimeout(checkMatch, 400)
  }
}

function checkMatch() {
  const allCards = grid.querySelectorAll("img")
  const firstCard = cardsChoosenIds[0];
  const secondCard = cardsChoosenIds[1];
  console.log(firstCard, secondCard);
  if (firstCard == secondCard) {
    allCards[firstCard].setAttribute("src", "./images/question.png");
    allCards[secondCard].setAttribute("src", "./images/question.png");
    result.innerText = "DO NOT CLICK THE SAME IMAGE IDIOT <3";
  } else if (cardsChoosenNames[0] == cardsChoosenNames[1]) {
    cardsDone.push(cardsChoosenIds);
    allCards[firstCard].setAttribute("src", "./images/greenCheckMark.jpg");
    allCards[secondCard].setAttribute("src", "./images/greenCheckMark.jpg");
    allCards[firstCard].removeEventListener("click", flipCard)
    allCards[secondCard].removeEventListener("click", flipCard)
    result.innerText = "U ARE SO SMART";
  } else {
    allCards[firstCard].setAttribute("src", "./images/question.png");
    allCards[secondCard].setAttribute("src", "./images/question.png");
    result.innerText = "TRY SOMETHING ELSE CHEESY";
  }
  cardsChoosenIds = [];
  cardsChoosenNames = [];
  if (cardsDone.length == imagesArray.length / 2) {
    result.innerText = "AND WHAT WAS DIFFICULT?!";
  }
}

function restartGame() {
  grid.querySelectorAll("img").forEach(img => img.remove());
  imagesArray.sort(() => (0.5 - Math.random()));
  generateGrid()
  result.innerText = "FIND THE SAME TWO";
}

restart.addEventListener("click", restartGame)

