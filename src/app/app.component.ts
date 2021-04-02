import { Component } from '@angular/core';
import { TaskList } from './task-card.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-master';

  TaskList : TaskList = {
    "ABC1":{
      "name":"John Doe",
      "tasks":[{
        "id":"1",
        "title":"Task1",
        "description":"task desc",
        "date":"12/04/2021",
        "time":"12:30:PM",
        "priority":"HIGH",
        "done":false
      },
      {
        "id":"2",
        "title":"Task1",
        "description":"task desc",
        "date":"12/04/2021",
        "time":"12:30:PM",
        "priority":"HIGH",
        "done":true
      }]
    }
  }
}
