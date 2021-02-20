import { Component, OnInit, ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { NavigationExtras, Router } from '@angular/router';

export interface Character {
  id: number;
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
    xs: 1
  };

  characters: Character[] = [
    {
      id: 1,
      name: 'Anakin Skywalker',
      category: 'Jedi',
      lightsaberColor: 'blue',
      species: 'human',
      gender: 'male',
      height: 170,
      weight: 165,
      description: 'A great warrior, but sensitive to the dark side...',
      img: 'https://raw.githubusercontent.com/joseherrera7/star-wars/master/src/assets/images/anakin-skywalker.jpg',
    },
    {
      id: 2,
      name: 'Obi Wan Kenobi',
      category: 'Jedi',
      lightsaberColor: 'blue',
      species: 'human',
      gender: 'male',
      height: 165,
      weight: 170,
      description: 'Master in defense, no blaster can hit him.',
      img: 'https://raw.githubusercontent.com/joseherrera7/star-wars/master/src/assets/images/obi-wan.jpg',
    },
    {
      id: 3,
      name: 'Darth Vader',
      category: 'Sith',
      lightsaberColor: 'red',
      species: 'human',
      gender: 'male',
      height: 190,
      weight: 200,
      description: 'Extremely powerful sith, no heart, just power...',
      img: 'https://raw.githubusercontent.com/joseherrera7/star-wars/master/src/assets/images/darth-vader.jpg',
    },
    {
      id: 4,
      name: 'Master Yoda',
      category: 'Jedi',
      lightsaberColor: 'green',
      species: 'human',
      gender: 'male',
      height: 60,
      weight: 50,
      description: 'Wise and powerful, very little green guy...',
      img: 'https://raw.githubusercontent.com/joseherrera7/star-wars/master/src/assets/images/yoda.jpg',
    },
  ];
  breakpoint: number;

  constructor(public router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('characters', JSON.stringify(this.characters));
  }

  logout(): void {
    this.router.navigate(['login']);
  }

  navigateHome(): void {
    this.router.navigate(['home']);
  }

  navigateProfile(): void { }

  goDetail(character): void {
    const navext: NavigationExtras = {
      state: {
        character
      },
    };
    this.router.navigate(['home/detail'], navext);
  }
}
