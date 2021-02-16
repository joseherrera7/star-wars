import { Component, OnInit, ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';

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
    },
  ];
  breakpoint: number;

  constructor() {}

  ngOnInit(): void  {
    localStorage.setItem('characters', JSON.stringify(this.characters))
  }

  logout(): void {}

  navigateHome(): void {}

  navigateProfile(): void {}
}
