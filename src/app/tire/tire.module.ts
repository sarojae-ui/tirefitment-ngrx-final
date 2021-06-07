import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TireComponent } from './tire.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { tireReducer } from './reducers';
import { TireService } from './services/tire.service';
import { EffectsModule } from '@ngrx/effects';
import { TireEffects } from './tire.effects';

const routes: Routes = [
  { path: '', component: TireComponent }
];

@NgModule({
  declarations: [
    TireComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([ TireEffects ]),
    StoreModule.forFeature("tire", tireReducer)
  ],
  providers: [ TireService ]
})
export class TireModule {
  static forRoot(): ModuleWithProviders<TireModule> {
    return {
        ngModule: TireModule,
        providers: [
          TireService
        ]
    }
}
}
