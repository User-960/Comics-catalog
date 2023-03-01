import { getDataApi } from "../../utils/getDataApi";
import { IMG_STANDART_XLARGE } from "../../constants/api";
import { ROOT_MODAL } from "../../constants/root";

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
      <li class="characters__item">
        <img class="characters__img" src="${imgSrc}" alt="Image of character"/>
        <span class="characters__name">${newName}</span>
      </li>
    `;
   });

   const htmlWrapper = `
    <ul class="characters__list">
      ${htmlContent}
    </ul>
   `;

   ROOT_MODAL.innerHTML = htmlWrapper;
  }

  renderNotification() {
    console.log("no");
  }

  async render(url) {
    const data = await getDataApi.getData(url);
    data.length ? this.renderContent(data) : this.renderNotification();
  }
}
export default new Characters();
