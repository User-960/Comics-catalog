import {
 API_URL, URL_COMICS, URL_CHARACTERS, IMG_STANDART_XLARGE, IMG_NOT_AVAILABLE
} from "../../constants/api";
import { getDataApi } from "../../utils/getDataApi";
import { ROOT_INDEX } from "../../constants/root";

class Comics {
  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);

    if (data) {
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
              <li class="comics__item" data-url="${url}">
                <span class="comics__item_title">${title}</span>
                <img class="comics__item_img" src="${imgSrc}" alt="comic book cover"/>
              </li>
            `;
          }
      });
      const htmlWrapper = `
        <ul class="comics__list">
          ${htmlContent}
        </ul>
        `;
      ROOT_INDEX.innerHTML = htmlWrapper;
    } else {
      console.log("Error: " + data);
    }
  }

  eventListener() {
    document.querySelectorAll(".comics__item").forEach(element => {
      const url = element.getAttribute("data-url");
      element.addEventListener("click", () => {
        console.log(url);
      });
    });
  }
}

export default new Comics();
