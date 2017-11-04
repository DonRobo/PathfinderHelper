import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BattleSimulatorComponent} from './battle-simulator/battle-simulator.component';
import {HttpModule} from "@angular/http";
import {CharacterCreatorComponent} from "./character-creator/character-creator.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {CharacterService} from "./character-creator/character-creator.service";
import {BattleService} from "./battle-simulator/battle-simulator.service";

@NgModule({
  declarations: [
    AppComponent,
    BattleSimulatorComponent,
    CharacterCreatorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CharacterService, BattleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
