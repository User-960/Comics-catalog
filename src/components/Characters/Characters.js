import { getDataApi } from "../../utils/getDataApi";
import { IMG_STANDART_XLARGE } from "../../constants/api";
import { ROOT_MODAL } from "../../constants/root";
import imgCloseWhite from "../../images/x-circle-white.svg";
import notificationPage from "../Notification/Notification";

import classes from "./Characters.scss";

class Characters {
  renderContent(data) {
    let htmlContent = "";

    /**
     * @param [String] name - name of character
     * @param [Object] thumbnail => [String] extension - jpg/png/svg
     * @param [Object] thumbnail => [String] path - http://...
    */
   data.forEach(({ name, thumbnail: { path, extension } }) => {
    const imgSrc = path + "/" + IMG_STANDART_XLARGE + "." + extension;
    const newName = name.replace(" (Ultimate)", "");

    htmlContent += `
      <li class="${classes.characters__item}">
        <img class="img-cover ${classes.characters__img}" src="${imgSrc}" alt="Image of character"/>
        <span class="${classes.characters__name}">${newName}</span>
      </li>
    `;
   });

   const htmlWrapper = `
    <div class="${classes.characters__inner}">
      <ul class="${classes.characters__list}">
        ${htmlContent}
      </ul>
      <button 
        class="btn bg-contain ${classes.characters__close}"
        onclick="modal.innerHTML = ''"
        style="background-image: url(${imgCloseWhite})"
      ></button>
     </div>
   `;

   ROOT_MODAL.innerHTML = htmlWrapper;
  }

  renderNotification() {
    notificationPage.render();
  }

  async render(url) {
    const data = await getDataApi.getData(url);
    data.length ? this.renderContent(data) : this.renderNotification();
  }
}
export default new Characters();
