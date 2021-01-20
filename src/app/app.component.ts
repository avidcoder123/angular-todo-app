import { Component } from "@angular/core";
import { TodosService } from "./todo-item/todos.service";
import { Task } from "./task";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private todos: TodosService) {}
  public tasks: Task[] = this.todos.tasks;
}
