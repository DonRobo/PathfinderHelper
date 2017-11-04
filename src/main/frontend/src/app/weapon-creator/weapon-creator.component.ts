import {Component, OnInit} from '@angular/core';
import {Weapon, WeaponCreatorService} from "./weapon-creator.service";

@Component({
  selector: 'app-weapon-creator',
  templateUrl: './weapon-creator.component.html',
  styleUrls: ['./weapon-creator.component.css']
})
export class WeaponCreatorComponent implements OnInit {
  weapons: Weapon[];

  currentWeapon: Weapon;

  constructor(private weaponCreatorService: WeaponCreatorService) {
  }

  ngOnInit() {
    this.weapons = [];
    this.newWeapon();
    this.updateList();
  }

  newWeapon() {
    this.currentWeapon = new Weapon();
  }

  private updateList() {
    this.weaponCreatorService.getWeapons().then(newWeapons => {
      this.weapons = newWeapons;
      this.weapons = this.weapons.sort((w1: Weapon, w2: Weapon) =>
        w1.name.localeCompare(w2.name))
    });
  }

}
