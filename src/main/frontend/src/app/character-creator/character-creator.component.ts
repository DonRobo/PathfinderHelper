import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.css']
})
export class CharacterCreatorComponent implements OnInit {

  characters: Character[] = [];
  currentCharacter: Character;

  constructor() {
  }

  ngOnInit() {
    this.characters.push(new Character(1, "Test Character 1"));
    this.characters.push(new Character(2, 'Test character 2'));

    this.select(this.characters[1]);
  }

  select(character: Character) {
    this.currentCharacter = character;
  }

}

class Character {
  id: number;
  name: string;
  initiative: number;
  maxHealth: number;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
