import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {DiceThrow} from "../../utils";

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
  damageSmall: DiceThrow;
  damageMedium: DiceThrow;
  critMultiplier: number; //TODO double weapons
  range: number; //TODO optional
  weight: number;
  type: WeaponType;

  //TODO special

  constructor() {
    this.id = -1;
    this.name = "";
    this.damageSmall = {
      diceCount: 1,
      faceCount: 6
    };
    this.damageMedium = {
      diceCount: 1,
      faceCount: 8
    };
    this.critMultiplier = 2;
    this.range = 0;
    this.weight = 1;
    this.type = WeaponType.Slashing;
  }
}

export enum WeaponType {
  Bludgeoning,
  Piercing,
  Slashing
}
