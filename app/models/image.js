export default class Image {
    constructor(data) {
      this.url = data.large_url || data.url
      this.author = data.site
      this.id = data.id
    }
  }