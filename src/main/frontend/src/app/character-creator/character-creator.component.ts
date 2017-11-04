import {Component, OnInit} from '@angular/core';
import {Character, CharacterService} from "./character-creator.service";

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.css']
})
export class CharacterCreatorComponent implements OnInit {
  characters: Character[];

  currentCharacter: Character;

  constructor(private characterCreatorService: CharacterService) {
  }

  ngOnInit() {
    this.characters = [];
    this.newCharacter();
    this.updateList()
  }

  newCharacter() {
    this.currentCharacter = new Character(-1, "");
  }

  save() {
    this.characterCreatorService.save(this.currentCharacter).then(newCharacter => {
      this.updateList();
      this.select(newCharacter);
    });
  }

  deleteCharacter() {
    this.characterCreatorService.delete(this.currentCharacter).then(_ => {
      this.updateList();
      this.newCharacter();
    });
  }

  select(character: Character) {
    this.currentCharacter = character;
  }

  private updateList() {
    this.characterCreatorService.getCharacters().then(newCharacters => {
      this.characters = newCharacters;
      this.characters = this.characters.sort((char1: Character, char2: Character) => char1.name.localeCompare(char2.name))
    });
  }
}
