import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { HttpClient, HttpHeaders  } from '@angular/common/http';  
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
};

@Injectable()



export class AuthService {
  


  /*
  io = io("http://localhost:3000/",{
    withCredentials: true,
    autoConnect : true
  });*/

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
  
   /*
    this.io.emit('test', {
       texto : "algtodon"
    });
    this.io.on('rtr', () => {
       alert('test2');
    });*/

  }


  
  getAll():Observable<any>{
      return this.http.get<any>("http://api.ipify.org/?format=json",httpOptions);
    
  }

}
