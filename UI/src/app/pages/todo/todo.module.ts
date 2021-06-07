import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {   TodoComponent } from './todo.component';
import { FontAwesomeModule , FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import { TodoRoutingModule } from './todo-routing.module';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TodoRoutingModule,
    FontAwesomeModule
  ]
})
export class TodoModule { 
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas,far);
  }
}
