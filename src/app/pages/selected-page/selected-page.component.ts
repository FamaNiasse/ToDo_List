import { Component } from '@angular/core';


@Component({
  selector: 'app-selected-page',
  templateUrl: './selected-page.component.html',
  styleUrls: ['./selected-page.component.css']
})
export class SelectedPageComponent {

  taskInputValue: string = "";

  onTaskAdded(taskInputValue: string) {
    localStorage.setItem('taskInputValue', taskInputValue);
  }

  onSubmitTask() {
    this.onTaskAdded(this.taskInputValue);
    this.taskInputValue = "";
  }

}

