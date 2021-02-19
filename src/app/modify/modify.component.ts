import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  modify(): void {

  }

  logout(): void {}

  navigateHome(): void {}

  navigateProfile(): void {}

}
