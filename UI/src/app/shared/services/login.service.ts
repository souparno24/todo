
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  checkUser(uname: string, pwd: string) {
    let _body = {
      username: uname,
      password: pwd
    }
    return this.http.post('http://localhost:5000/user/login', _body)
  }
  signupUser(uid:string,uname: string, pwd: string){
    let _body = {
      userid:uid,
      username: uname,
      password: pwd
    }
    return this.http.post('http://localhost:5000/user/signup', _body)
  }
  activeUser(uid:string){
    let _body={
      createdby:uid
    }
    return this.http.post('http://localhost:5000/list', _body)
  }
addtodo(todo:string,id:string){
  let _body={
    createdby:id,
    item:todo
  }

  return this.http.post('http://localhost:5000/list/add', _body)

  
}
showtodo(id:string){
  return this.http.get('http://localhost:5000/list/fetch?userid='+id)
  
  
}
removetodo(id:string,item:string){
  return this.http.delete('http://localhost:5000/list/remove?userid='+id+'&item='+item)
}

}
