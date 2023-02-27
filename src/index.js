import 'regenerator-runtime/runtime';
import { API_URL, URL_COMICS } from "./constants/api";
import { getDataApi } from "./utils/getDataApi";

import "./index.html";
import "./index.scss";

(async () => {
  const data = await getDataApi.getData(API_URL + URL_COMICS);

  if (data) {
    console.log(data);
  } else {
    console.log("Error: " + data);
  }
})();
