import { createReducer, on } from "@ngrx/store"
import { TireActions } from "../action-types";

export interface TireState {
  year: string[];
  make: string[];
  model: string[];
  trim: string[];
  loading: boolean
}

export const initialTireState: TireState = {
  year: [],
  make: [],
  model: [],
  trim: [],
  loading: false
}

export const tireReducer = createReducer(
  initialTireState,
  on(TireActions.allYearsLoaded, (state, action) => ({ ...state, year: action.year })),
  on(TireActions.allMakesLoaded, (state, action) => ({ ...state, make: action.make })),
  on(TireActions.allModelsLoaded, (state, action) => ({ ...state, model: action.model })),
  on(TireActions.allTrimsLoaded, (state, action) => ({ ...state, trim: action.trim })),
  on(TireActions.loadingStart, (state, _) => ({ ...state, loading: true })),
  on(TireActions.loadingStop, (state, _) => ({ ...state, loading: false })),
);
