import { API_URL, URL_COMICS } from "../../constants/api";
import { getDataApi } from "../../utils/getDataApi";

class App {
  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);

    if (data) {
      console.log(data);
    } else {
      console.log("Error: " + data);
    }

    console.log("App");
  }
}

export default new App();
