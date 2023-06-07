import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private readonly users = [
    {username: 'admin', password: 'password123'},
    // Add more hardcoded username/password profiles if needed
  ];

  login(username: string | undefined, password: string | undefined): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    this.isLoggedIn = true;
    return !!user;
  }



  isitLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}

