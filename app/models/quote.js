export default class Quote {
    constructor(data) {
        this.body = data.body;
        this.author = data.author;
    }
  

  get Template(){
      return `<div class="text-white"><h2><b>${this.body}</b></h2></div>
      <div class="text-white"><h4><b>Author: ${this.author}</b></div>
      `
  }
  };