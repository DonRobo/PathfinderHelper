import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class CharacterService {

  private characterCreatorUrl: string = "api/charactercreator/";

  constructor(private http: Http) {
  }

  getCharacters(): Promise<PathfinderCharacter[]> {
    return this.http.get(this.characterCreatorUrl + "list")
      .toPromise()
      .then(response => response.json() as PathfinderCharacter[])
  }

  save(character: PathfinderCharacter): Promise<PathfinderCharacter> {
    return this.http.post(this.characterCreatorUrl + "save", character)
      .toPromise()
      .then(response => response.json() as PathfinderCharacter)
  }

  deleteCharacter(character: PathfinderCharacter): Promise<Response> {
    return this.http.post(this.characterCreatorUrl + "delete", character)
      .toPromise()
  }
}

export class PathfinderCharacter {
  id: number;
  name: string;
  maxHitpoints: number;
  armorBonus: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  static attributes: string[] = [
    "maxHitpoints",
    "armorBonus",
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma"
  ];

  constructor() {
    this.id = -1;
    this.name = "";
    this.maxHitpoints = 1;
    this.armorBonus = 0;
    this.strength = 10;
    this.dexterity = 10;
    this.constitution = 10;
    this.intelligence = 10;
    this.wisdom = 10;
    this.charisma = 10;
  }

  calculateArmorClass() {
    return 10 + this.armorBonus + PathfinderCharacter.getSkillModifier(this.dexterity);
  }

  calculateTouch() {
    return 10 + PathfinderCharacter.getSkillModifier(this.dexterity);
  }

  calculateWrongFoot() {
    return 10 + this.armorBonus;
  }

  calculateInitiative() {
    return PathfinderCharacter.getSkillModifier(this.dexterity);
  }

  static getSkillModifier(value: number): number {
    return Math.ceil((value - 1) / 2) - 5
  }

}
