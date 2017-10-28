import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BattleSimulatorComponent} from './battle-simulator/battle-simulator.component';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    BattleSimulatorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
