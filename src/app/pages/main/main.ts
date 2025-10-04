import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../services/game';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/auth';

@Component({
  selector: 'app-main',
  imports: [CommonModule, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main implements OnInit {
  games: any[] = [];
  username: string = '';
  
  constructor(private gameService: Game, private auth: LoginService) {}
  ngOnInit(): void {
    this.gameService.getAll().subscribe((data) => {
      this.games = data;
      this.username = this.auth.getCurrentUser()?.username || '';
    });
  }
}
