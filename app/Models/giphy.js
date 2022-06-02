import { generateId } from "../Utils/generateId.js"


export class Giphy {
  constructor(data) {
    this.url = data.images.downsized.url
    this.tag = data.tag
    this.id = data.id
  }


  static ListTemplate(giphy) {
    return `
    <div class="col-6">
    <img class="img-fluid my-2 selectable"
      src="${giphy.images.downsized.url}" onclick="app.sandboxgiphyController.fillUrl('${giphy.id}')" alt="">
  </div>
    `
  }
}