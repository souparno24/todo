import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  todos: string = ''
  messageSuccess:string=""
  f:boolean=false
  todolist:Array<string>=[]


  constructor( private login: LoginService,private route: ActivatedRoute,private http: HttpClient) {
   
   }

  ngOnInit(): void {
     
    let id=this.route.snapshot.params.id;
    this.todolist=this.http.get('http://localhost:5000/list/fetch?userid='+id)
   
  }


  add(a:string){
    let id=this.route.snapshot.params.id;
    if(a!=''){
     this.login.addtodo(a,id).subscribe((r:any)=>{
       console.log('done');
       
     })
      
    }
    
    this.todos=''
    

  }
  show(){
    let id=this.route.snapshot.params.id;
   
     this.login.showtodo(id).subscribe((r:any)=>{

   
    
      } )
  }
 

  remove(s:string){
   

  }

}
