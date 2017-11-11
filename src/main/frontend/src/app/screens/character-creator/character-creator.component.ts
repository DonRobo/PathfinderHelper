import {Component, OnInit} from '@angular/core';
import {CharacterService, PathfinderCharacter} from "./character-creator.service";
import {decamelize, NumberAttribute} from "../../common";

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.css']
})
export class CharacterCreatorComponent implements OnInit {
  characters: PathfinderCharacter[];

  currentCharacter: PathfinderCharacter;

  characterAttributes: NumberAttribute[] = [];

  constructor(private characterCreatorService: CharacterService) {
  }

  ngOnInit() {
    this.characters = [];
    this.newCharacter();
    this.updateList();
    this.initializeAttributes();
  }

  initializeAttributes() {
    for (let attr of PathfinderCharacter.attributes) {
      this.characterAttributes.push({
        attribute: attr,
        label: decamelize(attr)
      })
    }
  }

  newCharacter() {
    this.currentCharacter = new PathfinderCharacter();
  }

  save() {
    this.characterCreatorService.save(this.currentCharacter).then(newCharacter => {
      this.updateList();
      this.select(newCharacter);
    });
  }

  deleteCharacter() {
    this.characterCreatorService.deleteCharacter(this.currentCharacter).then(_ => {
      this.updateList();
      this.newCharacter();
    });
  }

  select(character: PathfinderCharacter) {
    this.currentCharacter = Object.assign(new PathfinderCharacter(), character);
  }

  private updateList() {
    this.characterCreatorService.getCharacters().then(newCharacters => {
      this.characters = newCharacters;
      this.characters = this.characters.sort((char1: PathfinderCharacter, char2: PathfinderCharacter) =>
        char1.name.localeCompare(char2.name))
    });
  }
}
