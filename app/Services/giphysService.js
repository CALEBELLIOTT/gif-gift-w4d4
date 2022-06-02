import { ProxyState } from "../AppState.js";
import { Giphy } from "../Models/giphy.js";



const giphyApi = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
  timeout: 5000,
})

let params = {
  api_key: 'yeYQxXKdXPuLye1fiWkZBxGtGWIfbgA1',
  rating: 'pg',
  q: ''
}

class GiphysService {
  async getGifs() {
    const res = await giphyApi.get('search', { params })
    console.log(res.data);
    ProxyState.gifs = res.data.data
    console.log(ProxyState.gifs);
  }

  search(input) {
    params.q = input
  }

}

export const giphysService = new GiphysService()