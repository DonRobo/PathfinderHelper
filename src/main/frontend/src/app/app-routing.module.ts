import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CharacterCreatorComponent} from "./character-creator/character-creator.component";
import {BattleSimulatorComponent} from "./battle-simulator/battle-simulator.component";

const routes: Routes = [{
  path: 'battleSimulator',
  component: BattleSimulatorComponent
}, {
  path: 'characterCreator',
  component: CharacterCreatorComponent
}, {
  path: '',
  redirectTo: '/battleSimulator',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
