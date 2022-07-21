import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  public alert: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loadingCtrl: LoadingController,
    private userService: UserService
  ) { 
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login(){
    if(this.loginForm.valid){
      this._showLoading();
      this.userService.getToken().subscribe((res) => {
        console.log("respuesta del token", res);
        let user : User = {} as User;
        user.username =this.loginForm.controls.username.value;
        user.password = this.loginForm.controls.password.value;
        user.request_token= res.request_token;

        this.userService.login(
          res.request_token
        ).pipe(first()).subscribe({
          next: (login) => {
            console.log("respuesta del login", login);
            this.router.navigate(['/tabs']);
          },
          error: (err) => {
          },
          complete: () => {
            this._removeLoading();
          }
        });
      });
    }
  }

  private async _showLoading () {
    this.alert = await this.loadingCtrl.create({
      message: 'logging in...',
      spinner: 'circular'
    });
    
    this.alert.present();
  }

  private _removeLoading(){
    this.alert.dismiss();
  }

}
