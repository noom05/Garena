import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUser: any = null;

  constructor(private http: HttpClient, private router: Router) {
    const userJson = localStorage.getItem('currentUser');
    if (userJson) {
      this.currentUser = JSON.parse(userJson);
    }
  }

  login(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.http.get<any[]>('assets/data/members.json').subscribe(members => {
        const user = members.find(member => member.email === email && member.password === password);
        console.log('ผลลัพธ์การค้นหา:', user);
        if (user) {
          this.currentUser = user;
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('userLoggedIn', 'true');
          this.router.navigate(['/profile']);
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      });
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userLoggedIn');
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
  return !!localStorage.getItem('userLoggedIn');
}

getCurrentUser() {
  const userJson = localStorage.getItem('currentUser');
  return userJson ? JSON.parse(userJson) : null;
}

}
