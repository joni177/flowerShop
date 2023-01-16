

//const axios = require('https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js').default;
let shopItemsData;

  axios
  .get("http://localhost:3000/data")
  .then((response) => {
    console.log(response);
    shopItemsData = response.data;
    generateShop();
    calculation();
  })
  .catch((err) => console.log(err));



// let shopItemsData = [
//   {
//     id: "jfhgbvnscs",
//     name: "Lisianthus Mix Bouquet",
//     price: 140,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//     img: "img/f1.jpg",
//   },
//   {
//     id: "ioytrhndcv",
//     name: "White Chrysanthem",
//     price: 50,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//     img: "img/f2.jpg",
//   },
//   {
//     id: "wuefbncxbsn",
//     name: "Pink Delight Bouquet",
//     price: 25,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//     img: "img/f3.jpg",
//   },
//   {
//     id: "thyfhcbcv",
//     name: "Bouquet of Lavender",
//     price: 75,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//     img: "img/f4.jpg",
//   },
//   {
//     id: "thiecbawdjksadjk",
//     name: "Termolus Botanica",
//     price: 95,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//     img: "img/f5.jpeg",
//   },
//   {
//     id: "iuertrywebncdjksadjk",
//     name: "Rose Bluebellus",
//     price: 39,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//     img: "img/f6.jpg",
//   },
//   {
//     id: "thierytbvcbvzdhadjk",
//     name: "Daffodil Lotuseo",
//     price: 50,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//     img: "img/f7.jpg",
//   },
//   {
//     id: "trfoiwfcnbcawdjksadjk",
//     name: "Wild Orchideos",
//     price: 45,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//     img: "img/f8.jpg",
//   },
//   {
//     id: "cbvxbcvsceldk",
//     name: "Water Lilyscus",
//     price: 85,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//     img: "img/f14.jpg",
//   },
//   {
//     id: "oiopijmjkhuihb",
//     name: "Geranium",
//     price: 120,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//     img: "img/f10.jpg",
//   },
//   {
//     id: "oiopijewyiohbjhib",
//     name: "Hibiscus",
//     price: 35,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//     img: "img/f12.jpeg",
//   },
//   {
//     id: "rtytytuyuytyytbvncv",
//     name: "Marigoldas",
//     price: 89,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//     img: "img/f13.jpg",
//   },
// ];
