import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private api:ApiService) {
    api.ViewTodolist().subscribe(
      (response)=>{
        this.data=response;
      }
    )
   }

   data:any=[]

  ngOnInit(): void {
  }

}
