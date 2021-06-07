import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';
import { FontAwesomeModule , FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import { SignupRoutingModule } from './signup-routing.module';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    FormsModule,
    CommonModule,
    SignupRoutingModule,
    FontAwesomeModule
  ]
})
export class SignupModule { constructor(library: FaIconLibrary){
  library.addIconPacks(fas,far);
}}
