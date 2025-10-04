import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../services/game';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'list.html',
  styleUrl: './list.scss'
})
export class GameList implements OnInit {
  games: any[] = [];
  fullname: string = '';

  constructor(private gameService: Game) {}

  ngOnInit(): void {
    this.gameService.getAll().subscribe((data) => {
      this.games = data;
    });

    const userJson = localStorage.getItem('currentUser');
    if (userJson) {
      const user = JSON.parse(userJson);
      this.fullname = user.fullname;
    }
  }
}
