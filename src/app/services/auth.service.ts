import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { HttpClient  } from '@angular/common/http';  
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  io = io("http://localhost:3000/",{
    withCredentials: true,
    autoConnect : true
  });

  constructor(private http:HttpClient,private deviceService: DeviceDetectorService) {

     var infonavegador = this.deviceService.getDeviceInfo();
     var objetinfo = {   
         browser :  infonavegador.browser,
         deviceType : infonavegador.deviceType,
         browser_version : infonavegador.browser_version,
         os : infonavegador.os,
         os_version : infonavegador.os_version,
         userAgent : infonavegador.userAgent
     };



     console.log(objetinfo);  


    this.io.emit('test', {
       texto : "algtodon"
    });
    this.io.on('rtr', () => {
       alert('test2');
    });

  }

  /*

  public getIPAddress()  
  {  
    return this.http.get("https://jsonip.com/");  
  } */

}
