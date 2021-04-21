import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  profileForm = this.fb.group({
    correo: ['', Validators.required],
    contrasena: ['', Validators.required],
  })

  constructor(private fb: FormBuilder,
    public dialog: MatDialog,
    public router: Router) {
 
}

  ngOnInit(): void {}

  create(): void {
    console.log(this.profileForm.value)
  }
}
