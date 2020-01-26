// // tslint:disable-next-line: no-var-requires
// const foodImage1 = require("@public/pastaImage.png");
// // tslint:disable-next-line: no-var-requires
// const foodImage2 = require("@public/saladImage.png");
// tslint:disable-next-line: no-var-requires
const pizzaImage = require("@public/pizzaImage.png");
// tslint:disable-next-line: no-var-requires
const icecreamImage = require("@public/icecreamImage.png");
// tslint:disable-next-line: no-var-requires
const pastaImage = require("@public/pastaImage.png");
// tslint:disable-next-line: no-var-requires
const riceImage = require("@public/biryaniImage.png");
// tslint:disable-next-line: no-var-requires
const saladImage = require("@public/saladImage.png");
// tslint:disable-next-line: no-var-requires
const cakeImage = require("@public/cakeImage.png");

export const products = [
  {
    id: "Id01",
    name: "Pasta",
    label: "Pasta",
    description: "Pasta",
    qtyLeft: "10",
    price: "10",
    // image: foodImage1
    image: pastaImage
  },
  {
    id: "Id02",
    name: "Pizza",
    label: "Pizza",
    description: "Pizza",
    qtyLeft: "11",
    price: "15",
    // image: foodImage2
    image: pizzaImage
  },
  {
    id: "Id03",
    name: "Salad",
    label: "Salad",
    description: "Salad",
    qtyLeft: "5",
    price: "5",
    // image: foodImage1
    image: saladImage
  },
  {
    id: "Id04",
    name: "Biryani",
    label: "Biryani",
    description: "Biryani",
    qtyLeft: "8",
    price: "12",
    // image: foodImage2
    image: riceImage
  },
  {
    id: "Id05",
    name: "Cake",
    label: "Cake",
    description: "Cake",
    qtyLeft: "1",
    price: "20",
    // image: foodImage1
    image: cakeImage
  },
  {
    id: "Id06",
    name: "Ice-cream",
    label: "Ice-cream",
    description: "Ice-cream",
    qtyLeft: "1",
    price: "8",
    // image: foodImage2
    image: icecreamImage
  }
];
