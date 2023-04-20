class Todo {
    constructor(content, state) {
        this.content = content;
        this.state = state;
    }

    changeState() {
        this.state = !this.state;
    }
}

class TodoManager {
    constructor(todolist) {
        this.todolist = [];
    }

    addItem(content, state = false) {
        const todo = new Todo(content, state);
        this.todoList.push(todo);
    }

    getItems() {
        return this.todoList;
    }

    getLeftTodoCount() {
        return this.todoList.filter((content) => content.state === false).length;

        // this.todoList.reduce((total, current) => current.state === false ? ++total : total, 0);
    }
}

const myTodo = new TodoManager();
console.log(myTodo);
myTodo.addItem('할일');
myTodo.getItems();