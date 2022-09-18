import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  ViewTodolist=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }

  login(data){
    return this.http.post("http://hostman:3000/login",data);
  }
}
