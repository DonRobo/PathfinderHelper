import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {DiceThrow} from "../../common";

@Injectable()
export class WeaponCreatorService {

  private weaponCreatorUrl: string = "api/weaponcreator/";

  constructor(private http: Http) {
  }

  getWeapons(): Promise<Weapon[]> {
    return this.http.get(this.weaponCreatorUrl + "list")
      .toPromise()
      .then(response => {
        return (response.json() as Weapon[]).map((weapon) => WeaponCreatorService.fixWeaponObjectFromServer(weapon));
      })
  }

  save(weapon: Weapon): Promise<Weapon> {
    let payload: any = Object.assign({}, weapon);
    payload.weaponType = WeaponType[weapon.weaponType];
    return this.http.post(this.weaponCreatorUrl + "save", payload)
      .toPromise()
      .then(response => WeaponCreatorService.fixWeaponObjectFromServer(response.json() as Weapon))
  }

  deleteWeapon(weapon: Weapon): Promise<Response> {
    return this.http.post(this.weaponCreatorUrl + "delete", weapon)
      .toPromise()
  }

  private static fixWeaponObjectFromServer(serverWeapon: Weapon): Weapon {
    let fixedWeapon = Object.assign(new Weapon(), serverWeapon);
    fixedWeapon.weaponType = WeaponType[serverWeapon.weaponType] as any;
    return fixedWeapon;
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
  weaponType: WeaponType;

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
    this.weaponType = WeaponType.Slashing;
  }
}

export enum WeaponType {
  Bludgeoning,
  Piercing,
  Slashing
}
