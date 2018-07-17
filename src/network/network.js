import axios from "react-native-axios";

/**
 * Create an Axios Client with defaults
 */

const client = axios.create({
  baseURL: "https://api.foursquare.com/"
});

const request = function(options) {
  const onSuccess = function(response) {
    console.debug("Request Successful!", response.data);
    return response.data;
  };

  const onError = function(error) {
    console.log("Request Failed:", error.response);

    // if (error.response) {
    //   // Request was made but server responded with something
    //   // other than 2xx
    //   // console.error('Status:', error.response);
    //   // console.error('Data:', error.response.data);
    //   // console.error('Headers:', error.response.headers);
    // } else {
    //   // Something else happened while setting up the request
    //   // triggered the error
    //   console.error('Error Message:', error.message);
    // }

    return Promise.reject(error.response);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
