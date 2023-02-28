import "regenerator-runtime/runtime";

import App from "./components/App/App";

import "./index.html";
import "./index.scss";

(async () => {
  await App.render();
})();
