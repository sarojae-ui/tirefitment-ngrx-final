import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TireState } from "./reducers";

export const selectTireState = createFeatureSelector<TireState>("tire");

export const selectAllYear = createSelector(
  selectTireState,
  tire => tire.year
);

export const selectAllMake = createSelector(
  selectTireState,
  tire => tire.make
);

export const selectAllModel = createSelector(
  selectTireState,
  tire => tire.model
);

export const selectAllTrim = createSelector(
  selectTireState,
  tire => tire.trim
);

export const selectIsLoading = createSelector(
  selectTireState,
  tire => tire.loading
);
