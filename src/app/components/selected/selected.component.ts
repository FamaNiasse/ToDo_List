import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})

export class SelectedComponent {

  @Output() taskAdded = new EventEmitter<string>();
  
  taskInputValue: string = '';

  onTaskInputChange() {
    localStorage.setItem('taskInputValue', this.taskInputValue);
  }

  onSubmitTask() {
    const taskInputValue = localStorage.getItem('taskInputValue');
    if (taskInputValue !== null && taskInputValue.trim() !== ''){
      this.taskAdded.emit(taskInputValue);
    }
  }

}

