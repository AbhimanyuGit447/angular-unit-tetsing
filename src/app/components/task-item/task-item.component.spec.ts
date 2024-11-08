
// TestBed
//configureTestingModule
// declarations

import { ComponentFixture, TestBed } from "@angular/core/testing"
import { TaskItemComponent } from "./task-item.component"
import { Task } from "src/app/models/task";

fdescribe("TaskItemComponent", () => {

  let component : TaskItemComponent;
  let fixture  : ComponentFixture<TaskItemComponent>;


  beforeEach( async  () => {
    await TestBed.configureTestingModule({
      declarations : [TaskItemComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TaskItemComponent);

    component = fixture.componentInstance;

  })

  it("should create a component", () => {
    expect(component).toBeTruthy();
  })

  it("should accept task input", () => {
    const mockTask : Task = {
      id : 1,
      title : 'Test task',
      description : 'dalkjadlkj adlkjadlk',
      completed : false
    };
    component.task = mockTask;
    fixture.detectChanges();
    expect(component.task).toEqual(mockTask);
  })

  it("shoudl emit toggle event with task id on toggleCompletion", () => {
    const mockTask : Task = {
      id : 1,
      title : 'Test task',
      description : 'dalkjadlkj adlkjadlk',
      completed : false
    };

    component.task = mockTask;

    spyOn(component.toggle, "emit");

    component.toggleCompletion();

    expect(component.toggle.emit).toHaveBeenCalledWith(mockTask.id)

  })

  //it
  //it
  //it
})
