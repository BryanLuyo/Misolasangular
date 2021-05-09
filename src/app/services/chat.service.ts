import { SocketService } from './socket.service';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: SocketService) {}
}
