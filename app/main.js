import { GiphysController } from "./Controllers/giphysController.js";
import { SandboxgiphyController } from "./Controllers/sandboxgiphyController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  giphysController = new GiphysController();

  sandboxgiphyController = new SandboxgiphyController()
}

window["app"] = new App();
