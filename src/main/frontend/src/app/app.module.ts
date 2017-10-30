import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BattleSimulatorComponent} from './battle-simulator/battle-simulator.component';
import {HttpModule} from "@angular/http";
import {NpcCreatorComponent} from './npc-creator/npc-creator.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    BattleSimulatorComponent,
    NpcCreatorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([{
      path: 'battleSimulator',
      component: BattleSimulatorComponent
    }, {
      path: 'npcCreator',
      component: NpcCreatorComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
