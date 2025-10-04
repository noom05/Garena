import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class Profile {
  user: any = null;

  constructor() {
    const userJson = localStorage.getItem('currentUser');
    if (userJson) {
      this.user = JSON.parse(userJson);
    }
  }
}
