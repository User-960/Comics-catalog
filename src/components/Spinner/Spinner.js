import { ROOT_INDEX } from "../../constants/root";
import SpinnerIcon from "../../images/spinner.svg";
import classes from "./Spinner.scss";

class Spinner {
  handlerClear() {
    ROOT_INDEX.innerHTML = "";
  }

  render() {
    const html = `
      <div class="${classes.spinner__inner}">
        <img class="${classes.spinner__img}" src="${SpinnerIcon}" alt="spinner..."/>
      </div>
    `;

    ROOT_INDEX.innerHTML = html;
  }
}
export default new Spinner();
