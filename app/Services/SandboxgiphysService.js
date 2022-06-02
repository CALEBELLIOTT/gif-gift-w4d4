
import { ProxyState } from "../AppState.js";
import { Sandboxgiphy } from "../Models/Sandboxgiphy.js";


const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/gifts',
  timeout: 5000,
})



class SandboxgiphyService {
  async openGift(target) {
    target.opened = true
    const res = await sandboxApi.put(target.id, target)
    console.log(res.data);
  }

  async addGif(tag, url) {
    let data = {
      url: url,
      tag: tag
    }
    let submission = new Sandboxgiphy(data)
    const res = await sandboxApi.post("", submission)
  }

  async loadGifs() {
    const res = await sandboxApi.get()
    console.log(res.data);
    ProxyState.sandboxgifs = res.data.map(g => new Sandboxgiphy(g))
    console.log(ProxyState.sandboxgifs);
  }
}


export const sandboxgiphyService = new SandboxgiphyService()