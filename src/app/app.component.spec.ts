import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('delete task', () => {
    // creating app component instance using test bed
    const fixtureComponent = TestBed.createComponent(AppComponent);
    // Arrange
    fixtureComponent.componentInstance.tasksList = [
      { taskName: 'task1', stage: 1 },
      { taskName: 'task2', stage: 1 },
      { taskName: 'task3', stage: 2 },
      { taskName: 'task4', stage: 2 },
      { taskName: 'task5', stage: 3 }
    ];
    // Act
    fixtureComponent.componentInstance.deleteTask('task1');

    // Assert
    expect(fixtureComponent.componentInstance.tasksList).toEqual([
      { taskName: 'task2', stage: 1 },
      { taskName: 'task3', stage: 2 },
      { taskName: 'task4', stage: 2 },
      { taskName: 'task5', stage: 3 }
    ]);
  });

  it('insert task', () => {
    const fixtureComponent = TestBed.createComponent(AppComponent);
    // Arrange
    fixtureComponent.componentInstance.tasksList = [
      { taskName: 'task2', stage: 1 },
      { taskName: 'task3', stage: 2 },
      { taskName: 'task4', stage: 2 },
    ];
    fixtureComponent.componentInstance.taskName.setValue('task5')
    // Act

    fixtureComponent.componentInstance.insertTask();

    // Assert
    expect(fixtureComponent.componentInstance.tasksList).toEqual([
      { taskName: 'task2', stage: 1 },
      { taskName: 'task3', stage: 2 },
      { taskName: 'task4', stage: 2 },
      { taskName: 'task5', stage: 1 }
    ]);
  });


  it('check duplicates', () => {
    const fixtureComponent = TestBed.createComponent(AppComponent);
    // Arrange
    fixtureComponent.componentInstance.tasksList = [
      { taskName: 'task2', stage: 1 },
      { taskName: 'task3', stage: 2 },
      { taskName: 'task4', stage: 2 },
    ];
    fixtureComponent.componentInstance.taskName.setValue('task2');
    // Act
    fixtureComponent.componentInstance.checkDuplicate();

    // Assert
    expect(fixtureComponent.componentInstance.error).toEqual(true);
  });
});