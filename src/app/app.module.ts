import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { TodosService } from "./todo-item/todos.service";
import { NewtaskComponent } from './newtask/newtask.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TodoItemComponent, NewtaskComponent],
  bootstrap: [AppComponent],
  providers: [TodosService]
})
export class AppModule {}
