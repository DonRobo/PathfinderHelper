import {Component, OnInit} from '@angular/core';
import {Weapon, WeaponCreatorService} from "./weapon-creator.service";
import {decamelize, NumberAttribute} from "../utils";

@Component({
  selector: 'app-weapon-creator',
  templateUrl: './weapon-creator.component.html',
  styleUrls: ['./weapon-creator.component.css']
})
export class WeaponCreatorComponent implements OnInit {
  weapons: Weapon[];

  currentWeapon: Weapon;

  weaponAttributes: NumberAttribute[] = [];

  constructor(private weaponCreatorService: WeaponCreatorService) {
  }

  ngOnInit() {
    this.weapons = [];
    this.newWeapon();
    this.updateList();
    this.initializeAttributes();
  }

  initializeAttributes() {
    for (let attr of Weapon.attributes) {
      this.weaponAttributes.push({
        attribute: attr,
        label: decamelize(attr)
      })
    }
  }

  newWeapon() {
    this.currentWeapon = new Weapon();
  }

  save() {
    this.weaponCreatorService.save(this.currentWeapon).then(newWeapon => {
      this.updateList();
      this.select(newWeapon);
    });
  }

  deleteWeapon() {
    this.weaponCreatorService.deleteWeapon(this.currentWeapon).then(_ => {
      this.updateList();
      this.newWeapon();
    });
  }

  select(weapon: Weapon) {
    this.currentWeapon = Object.assign(new Weapon(), weapon);
  }


  private updateList() {
    this.weaponCreatorService.getWeapons().then(newWeapons => {
      this.weapons = newWeapons;
      this.weapons = this.weapons.sort((w1: Weapon, w2: Weapon) =>
        w1.name.localeCompare(w2.name))
    });
  }

}
