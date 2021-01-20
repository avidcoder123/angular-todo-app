import { Component } from "@angular/core";
import { TodosService } from "../todo-item/todos.service";

@Component({
  selector: "app-newtask",
  templateUrl: "./newtask.component.html",
  styleUrls: ["./newtask.component.css"]
})
export class NewtaskComponent {
  constructor(private taskService: TodosService) {}
  public taskToAdd: string;
  public addTask(): void {
    this.taskService.tasks.push({
      label: this.taskToAdd,
      isDone: false
    });
    this.taskToAdd = null;
  }
}
