import { API_URL, URL_COMICS } from "../../constants/api";
import { getDataApi } from "../../utils/getDataApi";

import { ROOT_INDEX } from "../../constants/root";

class Comics {
  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);

    if (data) {
      console.log(data);
    } else {
      console.log("Error: " + data);
    }

    ROOT_INDEX.innerHTML = "<h1>Hello Webpack</h1>";
  }
}

export default new Comics();
