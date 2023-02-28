import classes from "./Error.scss";
import { ROOT_INDEX } from "../../constants/root";
import ErrorIcon from "../../images/error.svg";

class Error {
  render() {
    const html = `
      <div class="${classes.error__inner}">
        <img class="img-contain ${classes.error__img}" src="${ErrorIcon}" alt="Error! No access."/>
        <div class="${classes.error__message}">
          <h3>No access!</h3>
          <p>Try again later.</p>
        </div>
      </div>
    `;
    ROOT_INDEX.innerHTML = html;
  }
}
export default new Error();
