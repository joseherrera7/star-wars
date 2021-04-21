import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../home/home.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    correo: ['', Validators.required],
    contrasena: ['', Validators.required],
  })

  constructor(public router: Router,
    private fb: FormBuilder,
    private authService: AuthService) {
   
   }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.signIn(this.loginForm.value).subscribe( (res)=>{
      this.router.navigate(['home']);
    });
    
  }

  createAccount(): void {
    this.router.navigate(['register'])
  }

}
