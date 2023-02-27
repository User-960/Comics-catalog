import axios from "axios";

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

export const getDataApi = new GetDataApi();
