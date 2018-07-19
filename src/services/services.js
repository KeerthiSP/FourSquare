import request from "../network/network";

function getVenueList() {
  return request({
    url:
      "v2/venues/search?ll=12.91,74.86&client_id=MQSWTHDBMC5JRWDJLEKYN5I05FFBFUNPP5O1GDD3TNHIQNMG&client_secret=1TEJPPJ5ATG0QFC42REHG4IQPGQDTNHWGJAH4LKIV0I2LNAZ&v=20180719&categoryId=4d4b7105d754a06374d81259",
    method: "GET"
  });
}
function getDetails(id) {
  return request({
    url: `v2/venues/${id}?&client_id=MQSWTHDBMC5JRWDJLEKYN5I05FFBFUNPP5O1GDD3TNHIQNMG&client_secret=1TEJPPJ5ATG0QFC42REHG4IQPGQDTNHWGJAH4LKIV0I2LNAZ&v=20180719`,
    method: "GET"
  });
}
function getPopularVenueList() {
  return request({
    url:
      "v2/venues/explore?ll=12.91,74.86&client_id=MQSWTHDBMC5JRWDJLEKYN5I05FFBFUNPP5O1GDD3TNHIQNMG&client_secret=1TEJPPJ5ATG0QFC42REHG4IQPGQDTNHWGJAH4LKIV0I2LNAZ&v=20180719&categoryId=4d4b7105d754a06374d81259",
    method: "GET"
  });
}
function getCoffeeShopList() {
  return request({
    url:
      "v2/venues/search?ll=12.91,74.86&client_id=MQSWTHDBMC5JRWDJLEKYN5I05FFBFUNPP5O1GDD3TNHIQNMG&client_secret=1TEJPPJ5ATG0QFC42REHG4IQPGQDTNHWGJAH4LKIV0I2LNAZ&v=20180719&categoryId=4bf58dd8d48988d1e0931735",
    method: "GET"
  });
}
function getLunchHomeList() {
  return request({
    url:
      "v2/venues/search?ll=12.91,74.86&client_id=PK3QMGGPI5U5WBQSGA52M3YGLYXP1CFHP00G4KPQDPT2AE2B&client_secret=TNJBGF1L25WUNMGB2CZI4KY0TUAN5V2B0EVLNPCKIOR41WSP&v=20180719&categoryId=4bf58dd8d48988d147941735",
    method: "GET"
  });
}
// function getPopularVenueDetails(id) {
//   return request({
//     url: `v2/venues/trending/${id}?&client_id=T3GENN5AWPN1ILYOUSAQZIE0AI2VIXFSYRT3ZD14H4ZIN4JH&client_secret=THCA33X2XLK4X2CZJ0PVYGAWPBPU3MPE33DB10HEXWC4Y2AH&v=20180711&categoryId=4d4b7105d754a06374d81259`,
//     method: "GET"
//   });
// }

const Service = {
  getVenueList,
  getDetails,
  getPopularVenueList,
  getCoffeeShopList,
  getLunchHomeList
};
export default Service;
