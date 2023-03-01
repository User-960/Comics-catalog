import charactersPage from "../Characters/Characters";
import errorPage from "../Error/Error";
import spinnerPage from "../Spinner/Spinner";

import {
 API_URL, URL_COMICS, URL_CHARACTERS, IMG_STANDART_XLARGE, IMG_NOT_AVAILABLE
} from "../../constants/api";
import { ROOT_INDEX } from "../../constants/root";
import { getDataApi } from "../../utils/getDataApi";

import classes from "./Comics.scss";

class Comics {
  renderComics(data) {
    let htmlContent = "";

    /**
   * @param [Number] id - identification of item
   * @param [String] title - title of item
   * @param [Object] thumbnail => [String] extension - jpg/png/svg
   * @param [Object] thumbnail => [String] path - http://...
   */
    data.forEach(({ id, title, thumbnail: { path, extension } }) => {
      if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
        const url = API_URL + URL_COMICS + "/" + id + "/" + URL_CHARACTERS;
        const imgSrc = path + "/" + IMG_STANDART_XLARGE + "." + extension;

        htmlContent += `
          <li class="comics__item ${classes.comics__item}" data-url="${url}">
            <span class="${classes.comics__item_title}">${title}</span>
            <img class="img-contain ${classes.comics__item_img}" src="${imgSrc}" alt="comic book cover"/>
          </li>
        `;
      }
    });

    const htmlWrapper = `
      <ul class="${classes.comics__list}">
        ${htmlContent}
      </ul>
    `;

    ROOT_INDEX.innerHTML = htmlWrapper;
  }

  async render() {
    spinnerPage.render();
    const data = await getDataApi.getData(API_URL + URL_COMICS);
    if (data) {
      spinnerPage.handlerClear();
      this.renderComics(data);
    } else {
      spinnerPage.handlerClear();
      errorPage.render();
    }
  }

  eventListener() {
    document.querySelectorAll(".comics__item").forEach(element => {
      const url = element.getAttribute("data-url");
      element.addEventListener("click", () => {
        charactersPage.render(url);
      });
    });
  }
}

export default new Comics();
