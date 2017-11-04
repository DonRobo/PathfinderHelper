import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class CharacterService {

  private characterCreatorUrl: string = "api/charactercreator/";

  constructor(private http: Http) {
  }

  getCharacters(): Promise<Character[]> {
    return this.http.get(this.characterCreatorUrl + "list")
      .toPromise()
      .then(response => response.json() as Character[])
  }

  save(character: Character) {
    return this.http.post(this.characterCreatorUrl + "save", character)
      .toPromise()
      .then(response => response.json() as Character)
  }

  delete(character: Character) {
    return this.http.post(this.characterCreatorUrl + "delete", character)
      .toPromise()
  }
}

export class Character {
  id: number;
  name: string;
  initiative: number;
  maxHealth: number;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
