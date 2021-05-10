import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { HttpClient  } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  io = io("http://localhost:3000/",{
    withCredentials: true,
    autoConnect : true
  });

  constructor(private http:HttpClient) {

    this.io.emit('test', {
       texto : "algtodon"
    });
    this.io.on('rtr', () => {
       alert('test2');
    });
  }

  public getIPAddress()  
  {  
    return this.http.get("http://api.ipify.org/?format=json");  
  } 

}
