import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  value = 'https://www.techiediaries.com/angular-10/asdasdasdasdasdasdasdasdas';
  constructor(private auth:AuthService) { }
}
