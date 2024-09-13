import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemComponent } from './task-item.component';
import { provideRouter } from '@angular/router';
import { Task } from 'src/app/models/task';

fdescribe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  beforeEach(async () => {
   await TestBed.configureTestingModule({
      declarations: [TaskItemComponent],

    }).compileComponents();

    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;



  const mockTask: Task = {
    id: 1,
    title: 'Test Task',
    description: 'This is a test task description',
    completed: false
  };

  component.task = mockTask;

  fixture.detectChanges();

});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render task title and description correctly", () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('h3').textContent).toContain('Test Task');
    expect(compiled.querySelector('p').textContent).toContain('This is a test task description');

  })

  it("should emit toggle for each task item when togglecompletion is called", () => {
    spyOn(component.toggle, "emit");

    component.toggleCompletion();

    expect(component.toggle.emit).toHaveBeenCalled();
  })

  it("should display 'complete' button when task is not completed", () => {
    const compiled = fixture.nativeElement;

    const button = compiled.querySelector('button');
    expect(button.textContent).toContain('Complete');
  })

  it("should display 'undo' button when task is completed", () => {

    component.task.completed = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    const button = compiled.querySelector('button');
    expect(button.textContent).toContain('Undo');
  })

  it('should have "completed" class when task is completed', () => {

    component.task.completed = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const div = compiled.querySelector('div');

    expect(div.classList).toContain('completed');
  });

  it('should not have "completed" class when task is not completed', () => {
    const compiled = fixture.nativeElement;
    const div = compiled.querySelector('div');

    expect(div.classList).not.toContain('completed');
  });

});
