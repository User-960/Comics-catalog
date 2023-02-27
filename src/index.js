import 'regenerator-runtime/runtime';
import axios from "axios";
import { API_URL, URL_COMICS } from "./constants/api";

import "./index.html";
import "./index.scss";
class GetDataApi {
  async getData(url) {
    try {
      const response = await axios.get(url, {
        params: {
          apikey: process.env.API_KEY,
          limit: 50
        }
      });
      return response.data.data.results;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

const getDataApi = new GetDataApi();

(async () => {
  const data = await getDataApi.getData(API_URL + URL_COMICS);

  if (data) {
    console.log(data);
  } else {
    console.log("Error: " + data);
  }
})();
