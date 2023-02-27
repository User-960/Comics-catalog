import 'regenerator-runtime/runtime';
import axios from "axios";

import "./index.html";
import "./index.scss";

const url = "https://gateway.marvel.com/v1/public/comics";
class GetDataApi {
  async getData(urlApi) {
    try {
      const response = await axios.get(urlApi, {
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
  const data = await getDataApi.getData(url);

  if (data) {
    console.log(data);
  } else {
    console.log("Error: " + data);
  }
})();
