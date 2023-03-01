// import { ROOT_INDEX } from "../../constants/root";
import { getDataApi } from "../../utils/getDataApi";

class Characters {
  renderContent(data) {
    console.log(data);
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
