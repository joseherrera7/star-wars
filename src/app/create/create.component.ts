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
    img: ['', Validators.required],
  });

  itsModify = false;
  characters: Character[];
  character: Character = {
    id: null,
    name: null,
    category: null,
    lightsaberColor: null,
    species: null,
    gender: null,
    height: null,
    weight: null,
    description: null,
    img: null,
  };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public router: Router
  ) {
    if (!this.router.getCurrentNavigation().extras.state) {
      this.characters = JSON.parse(localStorage.getItem('characters'));
    } else {
      this.characters = JSON.parse(localStorage.getItem('characters'));
      this.character = this.router.getCurrentNavigation().extras.state.character;
      this.itsModify = true;
    }
  }

  ngOnInit(): void {}

  logout(): void {
    this.router.navigate(['login']);
  }

  navigateHome(): void {
    this.router.navigate(['home']);
  }

  navigateProfile(): void {}

  save(): void {
    if (this.itsModify) {
      this.characters[
        this.characters.findIndex((character: Character) => {
          return character.id === this.character.id;
        })
      ] = this.character;
      localStorage.setItem('characters', JSON.stringify(this.characters));
      Swal.fire('Card modified');
      this.router.navigate(['home']);
      console.log(this.characters);
    } else {
      this.characterForm.value.id =
        this.characters[this.characters.length - 1].id + 1;
      this.character = this.characterForm.value;
      this.characters.push(this.character);
      localStorage.setItem('characters', JSON.stringify(this.characters));
      Swal.fire('Card created');
      this.router.navigate(['home']);
      console.log(this.characters);
    }
  }
}
