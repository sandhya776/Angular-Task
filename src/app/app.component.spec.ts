import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let fixtureComponent: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixtureComponent = TestBed.createComponent(AppComponent);
    fixtureComponent.componentInstance.tasksList = [
      { taskName: 'task1', stage: 1 },
      { taskName: 'task2', stage: 1 },
      { taskName: 'task3', stage: 2 },
      { taskName: 'task4', stage: 2 },
      { taskName: 'task5', stage: 3 }
    ];
  });

  it('delete task', () => {
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
    fixtureComponent.componentInstance.taskName.setValue('task6');
    // Act
    fixtureComponent.componentInstance.insertTask();

    // Assert
    expect(fixtureComponent.componentInstance.tasksList).toEqual([
      { taskName: 'task1', stage: 1 },
      { taskName: 'task2', stage: 1 },
      { taskName: 'task3', stage: 2 },
      { taskName: 'task4', stage: 2 },
      { taskName: 'task5', stage: 3 },
      { taskName: 'task6', stage: 1 }
    ]);
  });

  it('check duplicates', () => {
    fixtureComponent.componentInstance.taskName.setValue('task2');
    // Act

    fixtureComponent.componentInstance.checkDuplicate();

    // Assert
    expect(fixtureComponent.componentInstance.error).toEqual(true);
  });
});