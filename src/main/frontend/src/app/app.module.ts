import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BattleSimulatorComponent} from './screens/battle-simulator/battle-simulator.component';
import {HttpModule} from "@angular/http";
import {CharacterCreatorComponent} from "./screens/character-creator/character-creator.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {CharacterService} from "./screens/character-creator/character-creator.service";
import {BattleService} from "./screens/battle-simulator/battle-simulator.service";
import {WeaponCreatorComponent} from './screens/weapon-creator/weapon-creator.component';
import {WeaponCreatorService} from "./screens/weapon-creator/weapon-creator.service";
import {EditorAttributeComponent} from './editor-attribute/editor-attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleSimulatorComponent,
    CharacterCreatorComponent,
    WeaponCreatorComponent,
    EditorAttributeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CharacterService, BattleService, WeaponCreatorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
