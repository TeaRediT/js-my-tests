import { faker } from "https://cdn.jsdelivr.net/npm/@faker-js/faker@10.1.0/dist/index.min.js";

//functions
const getRandomPicUrl = (width, height) => {
  return `https://picsum.photos/seed/${faker.number.int()}/${width}/${height}`;
};

const getRandomHexColor = () => {
  let randomColorNumber = Math.floor(Math.random() * 16777215);
  const hexColor = randomColorNumber.toString(16).padStart(6, "0");
  return `#${hexColor.toUpperCase()}`;
};

const getRandomObj = () => {
  return {
    color: getRandomHexColor(),
    name: faker.person.fullName(),
    img: getRandomPicUrl(640, 480),
  };
};

const getRandomObjList = (quantity) => {
  const arr = [];
  for (let i = 0; i < quantity; i++) {
    arr.push(getRandomObj());
  }
  return arr;
};

//

const refs = {
  listEl: document.querySelector(".list"),
  btnEl: document.querySelector(".btn"),
};

refs.btnEl.addEventListener("click", () => {
  const quantity = Number(prompt("quantity"));
  refs.listEl.innerHTML = itemsHTML(getRandomObjList(quantity));
});

const itemHTML = ({ color, img, name } = item) => {
  return `<li class="item" style="background-color: ${color}">
        <img src=${img} alt=${name} />
        <h3 class="item-title">${name}</h3>
      </li>`;
};

const itemsHTML = (arr) => {
  return arr.map((el) => itemHTML(el)).join("");
};
