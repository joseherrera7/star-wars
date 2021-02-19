import { Character } from './../home/home.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  character: Character

  constructor(public router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.character = this.router.getCurrentNavigation().extras.state.character;
    }
    console.log(this.character);
  }

  ngOnInit(): void {
  }

  logout(): void {}

  navigateHome(): void {}

  navigateProfile(): void {}

}
