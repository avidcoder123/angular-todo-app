import { Injectable } from "@angular/core";
import { Task } from "../task";

@Injectable()
export class TodosService {
  constructor() {}
  public tasks: Task[] = [
    { label: "Clean the room", isDone: false },
    { label: "Do the laundry", isDone: false },
    { label: "Wash the dishes", isDone: false }
  ];
}
