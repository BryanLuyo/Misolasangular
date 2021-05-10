import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeModule } from 'ng-qrcode';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    QrCodeModule,
    HttpClientModule,
  ],
  exports : [
    LoginComponent
  ]
})
export class PagesModule { }
