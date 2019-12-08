import store from "../store.js";
import Todos from"../models/todo.js";
// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Devyn/todos/",
  timeout: 8000
});

class TodoService {
  async getTodos() {
    let res = await todoApi.get();
    let todo = res.data.data.map(todo => new Todos(todo))
    console.log("frome the todo api", res)
    store.commit("todos", todo)
    console.log("results from todo store", store.State.todos);
  }

  async addTodoAsync(todo) {
    let res = await todoApi.post("", todo);
    console.log("from todo service", res);
    this.getTodos()
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    console.log("from the todo toggle", todo )
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    if(todo.completed){
      todo.completed = false;
    } else {
      todo.completed = true;
    }
    let res = await todoApi.put(todoId, todo);
    this.getTodos();
    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    let res = await todoApi.delete(todoId);
    this.getTodos();
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
