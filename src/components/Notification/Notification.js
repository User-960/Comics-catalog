import { ROOT_MODAL } from "../../constants/root.js";
import imgCloseBlack from "../../images/x-circle-black.svg";

import classes from "./Notification.scss";

class Notification {
  render() {
    let htmlContent = `
      <div class="${classes.notification__inner}">
        <span>No content</span>
        <button
          class="btn bg-contain ${classes.notification__close}"
          onclick="modal.innerHTML = ''"
          style="background-image: url(${imgCloseBlack})"
      ></button>
      </div>
    `;

    ROOT_MODAL.innerHTML = htmlContent;
  }
}
export default new Notification();
