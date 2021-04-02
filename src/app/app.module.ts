import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreatetaskComponent } from './createtask/createtask.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskCardComponent,
    CreatetaskComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
