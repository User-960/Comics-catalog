import Comics from "../Comics/Comics";

class App {
  async render() {
    await Comics.render();
    Comics.eventListener();
  }
}

export default new App();
