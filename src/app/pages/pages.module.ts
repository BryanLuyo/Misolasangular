import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NgxQRCodeModule
  ],
  exports : [
    LoginComponent
  ]
})
export class PagesModule { }
