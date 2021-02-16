import { Character } from './../home/home.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  characterForm = this.fb.group({
    name: [''],
    category: [''],
    lightsaberColor: [''],
    species: [''],
    gender: [''],
    height: [''],
    weight: [''],
    description: [''],
    image: [''],
  });

  characters: Character;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.characters = JSON.parse(localStorage.getItem('characters'));
  }

  logout(): void {}

  navigateHome(): void {}

  navigateProfile(): void {}

  create(): void {

  }

}
