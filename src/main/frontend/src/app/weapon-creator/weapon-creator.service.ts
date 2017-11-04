import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class WeaponCreatorService {

  private weaponCreatorUrl: string = "api/weaponcreator/";

  constructor(private http: Http) {
  }

  getWeapons(): Promise<Weapon[]> {
    return this.http.get(this.weaponCreatorUrl + "list")
      .toPromise()
      .then(response => response.json() as Weapon[])
  }

  save(weapon: Weapon): Promise<Weapon> {
    return this.http.post(this.weaponCreatorUrl + "save", weapon)
      .toPromise()
      .then(response => response.json() as Weapon)
  }

  deleteWeapon(weapon: Weapon): Promise<Response> {
    return this.http.post(this.weaponCreatorUrl + "delete", weapon)
      .toPromise()
  }
}

export class Weapon {
  id: number;
  name: string;

  constructor() {
    this.id = -1;
    this.name = "";
  }
}
