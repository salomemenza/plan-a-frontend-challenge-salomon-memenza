import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPage } from './pages/login/login.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage:any = LoginPage;

  constructor(
    private router: Router
  ) {}

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
