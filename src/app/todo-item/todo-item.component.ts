import { Component, Input } from "@angular/core";
import { Task } from "../task";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent {
  constructor() {}
  @Input() public task: Task;
  public remove(): void {
    this.task.isDone = true;
  }
}
