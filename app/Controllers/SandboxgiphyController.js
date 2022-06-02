import { ProxyState } from "../AppState.js";
import { sandboxgiphyService } from "../Services/sandboxgiphysService.js";
import { Pop } from "../Utils/Pop.js";


function _drawGifts() {
  let template = ''
  let gifts = ProxyState.sandboxgifs
  console.log(gifts);
  gifts.forEach(g => template += g.Template)
  document.getElementById('gifts').innerHTML = template
}


export class SandboxgiphyController {
  constructor() {
    console.log('working sandbox');
    this.loadGifs()
    ProxyState.on('sandboxgifs', _drawGifts)

  }


  fillUrl(id) {
    let target = ProxyState.gifs.find(g => g.id == id)
    console.log(target);
    document.getElementById('url').value = target.images.downsized.url
  }

  async addGif() {
    window.event.preventDefault()
    let tag = window.event.target.tag.value
    let url = window.event.target.url.value
    try {
      await sandboxgiphyService.addGif(tag, url)
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, "error")
    }
    this.loadGifs()
  }

  async loadGifs() {
    try {
      await sandboxgiphyService.loadGifs()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }

  async openGift(id) {
    let target = ProxyState.sandboxgifs.find(g => g.id == id)
    try {
      await sandboxgiphyService.openGift(target)
    } catch (error) {

    }
    this.loadGifs()
  }


}