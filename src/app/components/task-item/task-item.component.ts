import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task!: Task;
  @Output() toggle = new EventEmitter<number>();

  toggleCompletion() {
    this.toggle.emit(this.task.id);
  }
}
