import { action, observable } from "mobx";
import { TodoType } from "../types";

export class TodoState {
    @observable isCompleted: boolean;
    @observable todos: TodoType[];
    @observable inputText: string;
    @observable todosCount: number;
    constructor() {
        this.isCompleted = false
        this.todos = [];
        this.inputText = "";
        this.todosCount = 0;
    }

    @action.bound updateInputValue(e: React.FormEvent<HTMLInputElement>) {
        this.inputText = e.currentTarget.value;
    }

    @action.bound addTodo() {
        const todo = {
            text: this.inputText,
            todoId: `todo__${this.todosCount}`,
            onClick: this.deleteTodo
        }
        if (this.inputText.length > 0) {
            this.todos.push(todo);
        }
        this.todosCount = this.todos.length
        this.inputText = "";
    }
    @action.bound editTodo() {

    }
    @action.bound deleteTodo(id) {
        console.log("deleted")
        this.todos = this.todos.filter(el => el.todoId !== id);
        this.todosCount = this.todos.length;
    }
}