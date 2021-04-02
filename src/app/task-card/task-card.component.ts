import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CreatetaskComponent } from '../createtask/createtask.component'

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})
export class TaskCardComponent implements OnInit {

  @Input() TaskList: any;
  @ViewChild(CreatetaskComponent) createtask: CreatetaskComponent;

  constructor() { }

  ngOnInit(): void {
  }  

  deleteTask(id:any): void{
    this.TaskList.ABC1.tasks = this.TaskList.ABC1.tasks.filter(
      (task: any) =>{
        if(task.id != id)
          return task;
      }
    );
  }

  changeDone(id:any) : void{
    console.log(id);
    console.log(this.TaskList.ABC1.tasks);
    this.TaskList.ABC1.tasks = this.TaskList.ABC1.tasks.filter(
      (task: any) =>{
        if(task.id == id)
        {
          task.done = !task.done;
        }
        return task; 
      }
    );
    console.log(this.TaskList.ABC1.tasks);
  }
}
