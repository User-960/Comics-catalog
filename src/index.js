import "regenerator-runtime/runtime";

import "./index.html";
import "./index.scss";

import App from "./components/App/App";

(async () => {
  await App.render();
})();
