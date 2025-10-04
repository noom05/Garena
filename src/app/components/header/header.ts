import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
goToProfile() {
this.router.navigate(['/profile']);
}
goToGames() {
this.router.navigate(['/list']);
}
  constructor(private router: Router, public auth: LoginService) {}

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.auth.logout();
  }

}
