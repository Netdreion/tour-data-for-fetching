const data = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2022/06/16/11/55/city-7265795_1280.jpg",
    price: 100,
    name: "City Tour",
    description: "Explore the city's landmarks and attractions.",
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2019/07/19/03/30/landscape-4347888_1280.jpg",
    price: 150,
    name: "Nature Hike",
    description: "Enjoy a scenic hike through beautiful natural landscapes.",
  },
  {
    id: 3,
    img: "https://cdn.pixabay.com/photo/2017/06/26/21/13/turquia-2445252_1280.jpg",
    price: 200,
    name: "Historical Tour",
    description:
      "Discover the rich history of the region with our expert guides.",
  },
  {
    id: 4,
    img: "https://cdn.pixabay.com/photo/2016/10/22/20/34/wines-1761613_1280.jpg",
    price: 120,
    name: "Wine Tasting",
    description:
      "Indulge in a tour of local vineyards and sample exquisite wines.",
  },
  {
    id: 5,
    img: "https://cdn.pixabay.com/photo/2016/11/29/04/18/hot-air-balloons-1867279_1280.jpg",
    price: 180,
    name: "Adventure Expedition",
    description: "Embark on an adrenaline-pumping adventure in the wilderness.",
  },
  {
    id: 6,
    img: "https://cdn.pixabay.com/photo/2022/05/26/10/24/hadrian-gate-7222476_1280.jpg",
    price: 250,
    name: "Cultural Immersion",
    description:
      "Immerse yourself in the local culture, traditions, and cuisine.",
  },
];

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
