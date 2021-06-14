import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ''
  password: string = ''
  isValidUser: boolean = false
 
  user:string=''

  constructor(
    private login: LoginService
  ) {
   
   }

  ngOnInit(): void {
  }

  reset() {
    this.username = ''
    this.password = ''
    this.isValidUser = false
   
    this.user=''
  }


  submit() {
    this.login.checkUser(this.username, this.password).subscribe((r:any) => {
      this.isValidUser = r.status
      this.user=r.dbdata[0].userId
     
    })
  
  
    
  }
 
 
}