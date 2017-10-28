import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class BattleService {

  constructor(private http: Http) {
  }

  sendMessage(message: Message): Promise<Message> {
    return this.http.post("/api/test/echo", message)
      .toPromise().then(response => response.json())
  }

}

export interface Message {
  message: string
}
