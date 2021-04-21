import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(public router: Router) {
   
   }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigate(['home']);
  }

  createAccount(): void {
    this.router.navigate(['register'])
  }

}
