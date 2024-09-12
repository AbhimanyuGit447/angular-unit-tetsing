import { Injectable } from '@angular/core';
import { Task } from "../models/task"

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
    { id: 1, title: 'Buy groceries', description: 'Milk, Eggs, Bread', completed: false },
    { id: 2, title: 'Prepare presentation', description: 'Project presentation for work', completed: false },
  ];

  constructor() { }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  toggleTaskCompletion(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }
}

