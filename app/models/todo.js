export default class Todos{
    constructor(data){
        this.completed = data.completed
        this._id = data._id
        this.desc = data.description
    }
    get Template(){
        return `<li><b>${this.desc}</b><button class="btn btn-dark" onclick="app.todoController.removeTodo('${this._id}')">x</button></li>`
;
    }
}