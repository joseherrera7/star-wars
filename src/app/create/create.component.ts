import { Character } from './../home/home.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  characterForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    category: ['', Validators.required],
    lightsaberColor: ['', Validators.required],
    species: ['', Validators.required],
    gender: ['', Validators.required],
    height: ['', Validators.required],
    weight: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
  });

  characters: Character[];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.characters = JSON.parse(localStorage.getItem('characters'));
  }

  logout(): void {
    this.router.navigate(['login']);
  }

  navigateHome(): void {
    this.router.navigate(['home']);
  }

  navigateProfile(): void {}

  create(): void {
    this.characterForm.value.id =
      this.characters[this.characters.length - 1].id + 1;
    this.characters.push(this.characterForm.value);
    localStorage.setItem('characters', JSON.stringify(this.characters));
    Swal.fire('Card created');
    console.log(this.characters);
  }
}
