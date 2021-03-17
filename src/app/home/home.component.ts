import { Component, OnInit, ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { NavigationExtras, Router } from '@angular/router';

export interface Character {
  _id: number;
  name: string;
  category: string;
  lightsaberColor: string;
  species: string;
  gender: string;
  height: number;
  weight: number;
  description: string;
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('grid') grid: MatGridList;

  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1,
  };

  characters: Character[];
  breakpoint: number;

  constructor(public router: Router) {
  }

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

  goDetail(character): void {
    const navext: NavigationExtras = {
      state: {
        character,
      },
    };
    this.router.navigate(['home/detail'], navext);
  }
}
