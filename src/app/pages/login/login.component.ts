import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    AuthService
  ],
})

export class LoginComponent {
  value = 'https://www.techiediaries.com/angular-10/asdasdasdasdasdasdasdasdas';
  constructor(private auth:AuthService) {}

  ngOnInit() {
     this.auth.getAll().subscribe((resp:any) => {
        console.log(resp);
     });
  }
}
