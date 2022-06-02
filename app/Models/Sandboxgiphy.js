


export class Sandboxgiphy {
  constructor(data) {
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened || false
    this.id = data.id
  }

  get Template() {
    return `
<div class="col-4 d-flex flex-column align-items-center">
<img src="${this.opened ? this.url : 'https://cdn.shopify.com/s/files/1/0209/7756/products/Gift-Bow-and-Ribbon-3_1542x.png?v=1548098366'}"
  class="img-fluid selectable" alt="" onclick="app.sandboxgiphyController.openGift('${this.id}')">
<h4>${this.tag}</h4>
</div>
`
  }
}