import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  taskName = new FormControl();
  tasksList: any[] = [];
  error = false;
  constructor() { }
  ngOnInit() {
  }

  checkDuplicate() {
    this.error = false;
    if (this.tasksList.find(x => x.taskName === this.taskName.value)) {
      this.error = true;
    }
  }
  insertTask() {
    this.tasksList.push({ taskName: this.taskName.value, stage: 1 });
    this.taskName.setValue('');
  }

  deleteTask(taskName) {
    this.tasksList = this.tasksList.filter(x => x.taskName !== taskName);
  }
}