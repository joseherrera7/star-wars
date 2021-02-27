import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['login']);
  }

  navigateHome(): void {
    this.router.navigate(['home']);
  }

  navigateProfile(): void {}


}
