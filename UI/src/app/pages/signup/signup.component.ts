import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string = ''
  password: string = ''
  userid :string=''
  signedin:boolean=false
  user:string=''
  constructor(  private login: LoginService) { }

  ngOnInit(): void {
  }
  reset() {
    this.username = ''
    this.password = ''
    this.signedin = false
    this.user=''
    this.userid=''
    
  }
  submit() {
    if(this.userid&&this.username&&this.password)
    {
      this.login.signupUser(this.userid,this.username, this.password).subscribe((r:any) => {
        this.signedin=r.status
        
       })
       this.user=this.userid
    }
    
  }
  activeuser(a:string){
    this.login.activeUser(a).subscribe((r:any) => {
      console.log(r)
      
     })
  }
}
