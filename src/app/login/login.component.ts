import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new LoginModel();
  constructor(private apiService: ApiService) { }

  ngOnInit(){
  }

  submit(){
    this.apiService.login(this.login).subscribe(res=>{
      console.log(res);
    })
  }
}
