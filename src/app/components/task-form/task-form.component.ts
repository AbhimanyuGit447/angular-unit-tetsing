import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  title = '';
  description = '';

  constructor(private taskService: TaskService) { }

  addTask() {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title: this.title,
      description: this.description,
      completed: false
    };
    this.taskService.addTask(newTask);
    this.title = '';
    this.description = '';
  }
}
