import request from "../network/network";

function getVenueList() {
  return request({
    url:
      "v2/venues/search?ll=12.91,74.86&client_id=IJVPS2EYL4Z0RSDS5Z4HZPKBLI3ELRGYY4122C4K10CODPTU&client_secret=GVOORFNDFFI1HSXNXL4NVA5VOUQZNB3I2SQIQVHLYHGXALHT&v=20180711&categoryId=4d4b7105d754a06374d81259",
    method: "GET"
  });
}
function getDetails(id) {
  return request({
    url: `v2/venues/${id}?&client_id=IJVPS2EYL4Z0RSDS5Z4HZPKBLI3ELRGYY4122C4K10CODPTU&client_secret=GVOORFNDFFI1HSXNXL4NVA5VOUQZNB3I2SQIQVHLYHGXALHT&v=20180711&categoryId=4d4b7105d754a06374d81259`,
    method: "GET"
  });
}

const Service = {
  getVenueList,
  getDetails
};
export default Service;
