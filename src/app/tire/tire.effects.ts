import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { TireActions } from "./action-types";
import { TireService } from "./services/tire.service";

@Injectable()
export class TireEffects {

  loadYears$ = createEffect(
    () => this.action$.pipe(
      ofType(TireActions.loadYears),
      concatMap(action => this.tireService.getAllYear()),
      map(years => TireActions.allYearsLoaded({ year: years }))
    )
  );

  loadMakes$ = createEffect(
    () => this.action$.pipe(
      ofType(TireActions.loadMakes),
      concatMap(action => this.tireService.getAllMakeByYear(action.year)),
      map(makes => TireActions.allMakesLoaded({ make: makes }))
    )
  );

  loadModels$ = createEffect(
    () => this.action$.pipe(
      ofType(TireActions.loadModels),
      concatMap(action => this.tireService.getAllModelByYearMake(action.year, action.make)),
      map(models => TireActions.allModelsLoaded({ model: models }))
    )
  );

  loadTrims$ = createEffect(
    () => this.action$.pipe(
      ofType(TireActions.loadTrims),
      concatMap(action => this.tireService.getAllTrim(action.year, action.make, action.model)),
      map(trims => TireActions.allTrimsLoaded({ trim: trims }))
    )
  );


  constructor(
    private action$: Actions,
    private tireService: TireService
  ) {}
}
