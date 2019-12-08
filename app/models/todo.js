export default class Todos{
    constructor(data){
        this.completed = data.completed
        this._id = data._id
        this.desc = data.description
    }
    get Template(){
        if(this.completed == false){
            return `<li><b>${this.desc}   </b><input onclick="app.todoController.toggleTodoStatus('${this._id}')" type="checkbox"</input><button class="btn btn-dark" onclick="app.todoController.removeTodo('${this._id}')">x</button></li>`    
        } else {
            return `<li style="text-decoration: line-through"><b>${this.desc}   </b><input checked onclick="app.todoController.toggleTodoStatus('${this._id}')" type="checkbox"</input><button class="btn btn-dark" onclick="app.todoController.removeTodo('${this._id}')">x</button></li>`
        }
;
    }
}