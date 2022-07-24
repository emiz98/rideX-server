const { getNearbyUsers } = require("./test");

var markers = [
  {
    id: "2",
    lat: "6.24478548",
    lng: "-75.57050110",
    name: "Medell\u00edn",
  },
  {
    id: "3",
    lat: "7.06125013",
    lng: "-73.84928550",
    name: "Barrancabermeja",
  },
  {
    id: "4",
    lat: "7.88475514",
    lng: "-72.49432589",
    name: "C\u00facuta",
  },
  {
    id: "5",
    lat: "3.48835279",
    lng: "-76.51532198",
    name: "Cali",
  },
  {
    id: "6",
    lat: "4.13510880",
    lng: "-73.63690401",
    name: "Villavicencio",
  },
  {
    id: "7",
    lat: "6.55526689",
    lng: "-73.13373892",
    name: "San Gil",
  },
];

const riderLocation = {
  lat: "4.66455174",
  lng: "-74.07867091",
};
getNearbyUsers(240, riderLocation, markers);
