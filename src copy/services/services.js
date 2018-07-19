import request from "../network/network";

function getVenueList() {
  return request({
    url:
      "v2/venues/search?ll=12.91,74.86&client_id=T3GENN5AWPN1ILYOUSAQZIE0AI2VIXFSYRT3ZD14H4ZIN4JH&client_secret=THCA33X2XLK4X2CZJ0PVYGAWPBPU3MPE33DB10HEXWC4Y2AH&v=20180711&categoryId=4d4b7105d754a06374d81259",
    method: "GET"
  });
}
function getDetails(id) {
  return request({
    url: `v2/venues/${id}?&client_id=T3GENN5AWPN1ILYOUSAQZIE0AI2VIXFSYRT3ZD14H4ZIN4JH&client_secret=THCA33X2XLK4X2CZJ0PVYGAWPBPU3MPE33DB10HEXWC4Y2AH&v=20180711&categoryId=4d4b7105d754a06374d81259`,
    method: "GET"
  });
}
function getPopularVenueList() {
  return request({
    url:
      "v2/venues/search?ll=12.91,74.86&client_id=IJVPS2EYL4Z0RSDS5Z4HZPKBLI3ELRGYY4122C4K10CODPTU&client_secret=GVOORFNDFFI1HSXNXL4NVA5VOUQZNB3I2SQIQVHLYHGXALHT&v=20180711&categoryId=4d4b7105d754a06374d81259",
    method: "GET"
  });
}
function getPopularVenueDetails(id) {
  return request({
    url: `v2/venues/trending/${id}?&client_id=IJVPS2EYL4Z0RSDS5Z4HZPKBLI3ELRGYY4122C4K10CODPTU&client_secret=GVOORFNDFFI1HSXNXL4NVA5VOUQZNB3I2SQIQVHLYHGXALHT&v=20180711&categoryId=4d4b7105d754a06374d81259`,
    method: "GET"
  });
}

const Service = {
  getVenueList,
  getDetails,
  getPopularVenueList,
  getPopularVenueDetails
};
export default Service;
