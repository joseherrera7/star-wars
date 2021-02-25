import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
      img:
        'https://raw.githubusercontent.com/joseherrera7/star-wars/master/src/assets/images/anakin-skywalker.jpg',
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
      img:
        'https://raw.githubusercontent.com/joseherrera7/star-wars/master/src/assets/images/obi-wan.jpg',
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
      img:
        'https://raw.githubusercontent.com/joseherrera7/star-wars/master/src/assets/images/darth-vader.jpg',
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
      img:
        'https://raw.githubusercontent.com/joseherrera7/star-wars/master/src/assets/images/yoda.jpg',
    },
  ];

  constructor(public router: Router) {
    localStorage.setItem('characters', JSON.stringify(this.characters))
   }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigate(['home']);
  }

  createAccount(): void {
    this.router.navigate(['register'])
  }

}
