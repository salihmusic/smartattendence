import { Component,} from '@angular/core';
import {AuthService} from "../service/auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  username: string | undefined;
  password: string | undefined;

  constructor(private authService: AuthService, private router: Router)
 {
  }

  onSubmit(): void {
    const isLoggedIn = this.authService.login(this.username, this.password);

    if (isLoggedIn) {
      // Redirect to the authenticated page or perform necessary actions
      this.router.navigateByUrl('/list-data');
    } else {
      // Display an error message or perform necessary actions
      console.log('Login failed');
    }


  }
}
