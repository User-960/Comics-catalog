import { ROOT_INDEX } from "../../constants/root";
import SpinnerIcon from "../../images/spinner.svg";

class Spinner {
  handlerClear() {
    ROOT_INDEX.innerHTML = "";
  }

  render() {
    const html = `
      <div class="spinner__inner">
        <img class="spinner__img" src="${SpinnerIcon}" alt="spinner..."/>
      </div>
    `;

    ROOT_INDEX.innerHTML = html;
  }
}
export default new Spinner();
