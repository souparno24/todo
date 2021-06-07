import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FontAwesomeModule , FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [
    LoginComponent

  ],
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    FontAwesomeModule
  ]
})
export class LoginModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas,far);
  }
 }
