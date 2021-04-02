import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbCalendar, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

interface newTaskTemplate {
  [key: string]: number | string | Object
}

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {

  @Input() TaskList: any;
  @Input() editfunc: any;
  @Input() taskid: any;
  @ViewChild("content") content: any;
  errorMsg: string = "";

  closeResult = '';
  time = { hour: 13, minute: 30 };
  meridian = true;
  model1: string = "";
  model2: string = "";

  newTask: newTaskTemplate = {
    title: "",
    description: "",
    date: { day: 24, month: 4, year: 2020 },
    time: { hour: 13, minute: 30 },
    priority: ""
  }

  constructor(private modalService: NgbModal, private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) { }

  ngOnInit(): void {
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  validate() {
    for (let i in this.newTask) {
      if (this.newTask[i] == "") {
        this.errorMsg = i + " is required";
        return false;
      }
    }
    this.errorMsg = "";
    return true;
  }


  addTask() {
    if (this.validate()) {
      let tempTask: any = {};
      tempTask = Object.assign(tempTask, this.newTask);
      tempTask.date = this.dateToString(tempTask.date);
      tempTask.time = this.timeToString(tempTask.time);
      tempTask.done = false;
      tempTask.id = "ABC1" + Math.floor(Date.now() / 1000);
      this.TaskList.ABC1.tasks.push(tempTask);
      this.modalService.dismissAll();
    }
  }

  dateToString(dateObj: any) {
    return dateObj.day + "/" + dateObj.month + "/" + dateObj.year;
  }

  timeToString(timeObj: any) {
    let postTime = "";
    console.log()
    if (timeObj.hour >= 0 && timeObj.hour <= 11) {
      postTime = "AM";
    }
    else {
      postTime = "PM";
      timeObj.hour = timeObj.hour - 12;
    }
    return timeObj.hour + ":" + timeObj.minute + ":" + postTime;
  }

  showSingleTask() {
    let singleTask = this.TaskList.ABC1.tasks.filter((element: any) => {
      if (element.id == this.taskid) {
        return element;
      }
    });
    singleTask = Object.assign({}, singleTask[0]);;
    let date = singleTask.date.split("/");
    date = {
      day: parseInt(date[0]),
      month: parseInt(date[1]),
      year: parseInt(date[2])
    }
    singleTask.date = date;
    console.log(singleTask.time);
    let time = singleTask.time.split(":");
    if (time[2] == "PM" && time[0] != "12")
      time[0] = parseInt(time[0]) + 12;
    console.log(time);
    singleTask.time = {
      hour: parseInt(time[0]),
      minute: parseInt(time[1])
    };
    this.newTask = singleTask;
    this.open(this.content);
  }

  updateTask(tid: any) {
    let updateIndex = undefined;
    for (let i = 0; i < this.TaskList.ABC1.tasks.length; i++) {
      if (this.TaskList.ABC1.tasks[i].id == tid) {
        updateIndex = i;
      }
    }
    let tempTask: any = {};
    tempTask = Object.assign(tempTask, this.newTask);
    tempTask.date = this.dateToString(tempTask.date);
    tempTask.time = this.timeToString(tempTask.time);
    if (updateIndex != undefined)
      this.TaskList.ABC1.tasks[updateIndex] = tempTask;
    this.modalService.dismissAll();
  }
}