import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CharacterCreatorComponent} from "./character-creator/character-creator.component";
import {BattleSimulatorComponent} from "./battle-simulator/battle-simulator.component";
import {WeaponCreatorComponent} from "./weapon-creator/weapon-creator.component";

const routes: Routes = [{
  path: 'battleSimulator',
  component: BattleSimulatorComponent
}, {
  path: 'characterCreator',
  component: CharacterCreatorComponent
}, {
  path: 'weaponCreator',
  component: WeaponCreatorComponent
}, {
  path: '',
  redirectTo: '/characterCreator',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
