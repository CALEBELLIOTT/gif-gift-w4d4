import { ProxyState } from "../AppState.js";
import { Giphy } from "../Models/giphy.js";
import { giphysService } from "../Services/giphysService.js";



function _drawGifs() {
  let gifs = ProxyState.gifs
  let template = ""
  gifs.forEach(g => template += Giphy.ListTemplate(g))
  document.getElementById("gifs").innerHTML = template
}

export class GiphysController {
  constructor() {
    this.getGifs()
    ProxyState.on("gifs", _drawGifs)
  }


  async getGifs() {
    try {
      await giphysService.getGifs()
    } catch (error) {

    }
  }

  search() {
    window.event.preventDefault()
    let input = window.event.target.search.value
    console.log(input);
    giphysService.search(input)
    this.getGifs()
  }
}