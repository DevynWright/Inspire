export default class Quote {
    constructor(data) {
        this.body = data.body;
        this.author = data.author;
    }
  

  get Template(){
      let template = `<h2><b>${this.body} Author: ${this.author}</b></h2>`
    return template;
  }
  };