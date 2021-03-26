import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import * as tasksData from '../assets/data/taskList.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  taskName = new FormControl('');
  tasksList: any[] = tasksData['data'];
  error = false;
  constructor() { }
  ngOnInit() {
  }

  checkDuplicate() {
    this.error = false;
    this.taskName.clearValidators();
    if (this.tasksList.find(x => x.taskName === this.taskName.value)) {
      this.error = true;
      this.taskName.setErrors({ duplicate: true });
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
