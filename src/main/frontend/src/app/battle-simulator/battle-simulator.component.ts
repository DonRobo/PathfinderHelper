import {Component, OnInit} from '@angular/core';
import {BattleService, Message} from "./battle-simulator.service";

@Component({
  selector: 'app-battle-simulator',
  templateUrl: './battle-simulator.component.html',
  styleUrls: ['./battle-simulator.component.css'],
  providers: [BattleService]
})
export class BattleSimulatorComponent implements OnInit {

  message: Message;

  constructor(private battleService: BattleService) {
  }

  ngOnInit() {
    this.battleService.sendMessage({
      message: "Hi from Angular!"
    }).then(
      message => this.message = message
    )
  }

}
