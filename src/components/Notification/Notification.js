import { ROOT_MODAL } from "../../constants/root.js";

class Notification {
  render() {
    console.log("no content");
    let htmlContent = `

    `;

    ROOT_MODAL.innerHTML = htmlContent;
  }
}
export default new Notification();
