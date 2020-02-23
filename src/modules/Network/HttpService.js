import axios from 'axios';

/*eslint-disable */
const LOCAL_API_URL = process.env.LOCAL_API_URL;
const API_URL = process.env.API_URL;
/* eslint-enable */

class HttpService {
  async request(url, options) {
    const targetOptions = {
      method: 'GET',
      data: undefined,
      ...options,
    };

    let baseURL = LOCAL_API_URL;
    if (API_URL) {
      baseURL = API_URL;
    }

    const requestUrl = `${baseURL}${url}`;

    const request = {
      method: targetOptions.method,
      data: targetOptions.data,
      url: requestUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // TODO - add custom headers
    // if (store.getters['users/isAuthenticated']) {
    //   options.headers = {
    //     Authorization: `Bearer ${store.getters['users/accessToken']}`,
    //   };
    // }

    const response = API_URL ? axios(request) : this.delayLocalApiResponse().then(() => axios(request));

    return response.then(this.processResponse(request)).catch(this.processResponse(request));
  }

  //   processResponse = (request) => async (response) => {
  processResponse = () => async (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }

    // TODO
    throw new Error();
  };

  delayLocalApiResponse() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

export default new HttpService();
