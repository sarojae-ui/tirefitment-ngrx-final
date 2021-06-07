import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from '../reducers';
import { TireActions } from './action-types';
import { selectAllMake, selectAllModel, selectAllTrim, selectAllYear, selectIsLoading } from './tire.selectors';

@Component({
  selector: 'app-tire',
  templateUrl: './tire.component.html',
  styleUrls: ['./tire.component.css']
})
export class TireComponent implements OnInit {

  year$: Observable<string[]> = of();
  make$: Observable<string[]> = of();
  model$: Observable<string[]> = of();
  trim$: Observable<string[]> = of();
  loading$: Observable<boolean> = of(false);
  year: string = ''
  make: string = ''
  model: string = ''
  trim: string = '';
  start: boolean = false;


  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.loading$ = this.store.pipe(
      select(selectIsLoading),
      tap(isLoading => console.log("loading value is: ", isLoading))
    );
  }

  onReset() {
    this.year$ = of();
    this.make$ = of();
    this.model$ = of();
    this.trim$ = of();
    this.year = ''
    this.make = ''
    this.model = ''
    this.trim = '';
    this.start = false;
  }

  onSelectTire() {
    this.start = true;
    this.year$ = this.store.pipe(select(selectAllYear));
  }

  onSelectYear(yr: string) {
    this.year = yr;

    this.store.dispatch(TireActions.loadMakes({ year: this.year }));

    this.year$ = of();
    this.make$ = this.store.pipe(select(selectAllMake));
  }

  onSelectMake(make: string) {
    this.make = make;

    this.store.dispatch(TireActions.loadModels({ year: this.year, make: this.make }))

    this.make$ = of();
    this.model$ = this.store.pipe(select(selectAllModel));
  }

  onSelectModel(model: string) {
    this.model = model;

    this.store.dispatch(TireActions.loadTrims({
      year: this.year,
      make: this.make,
      model: this.model
    }));

    this.model$ = of();
    this.trim$ = this.store.pipe(select(selectAllTrim));
  }

  onSelectTrim(trim: string) {
    this.trim = trim;
    this.trim$ = of();
  }
}
