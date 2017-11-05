import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CharacterCreatorComponent} from "./screens/character-creator/character-creator.component";
import {BattleSimulatorComponent} from "./screens/battle-simulator/battle-simulator.component";
import {WeaponCreatorComponent} from "./screens/weapon-creator/weapon-creator.component";

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
