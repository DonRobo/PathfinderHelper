import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BattleSimulatorComponent} from './battle-simulator/battle-simulator.component';
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {CharacterCreatorComponent} from "./character-creator/character-creator.component";
import {FormsModule} from "@angular/forms";

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
    RouterModule.forRoot([{
      path: 'battleSimulator',
      component: BattleSimulatorComponent
    }, {
      path: 'characterCreator',
      component: CharacterCreatorComponent
    }, {
      path: '',
      redirectTo: '/battleSimulator',
      pathMatch: 'full'
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
