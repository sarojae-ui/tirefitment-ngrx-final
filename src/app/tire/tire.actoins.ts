import { createAction, props } from "@ngrx/store";

export const loadYears = createAction(
  "[Tire Page] loadAll Years",
);
export const allYearsLoaded = createAction(
  "[Tire Page] All Years Loaded",
  props<{ year: string[] }>()
);


export const loadMakes = createAction(
  "[Tire Page] loadAll Makes",
  props<{ year: string }>()
);
export const allMakesLoaded = createAction(
  "[Tire Page] All Makes Loaded",
  props<{ make: string[] }>()
);


export const loadModels = createAction(
  "[Tire Page] loadAll Models",
  props<{ year: string, make: string }>()
);
export const allModelsLoaded = createAction(
  "[Tire Page] All Models Loaded",
  props<{ model: string[] }>()
);


export const loadTrims = createAction(
  "[Tire Page] loadAll Trims",
  props<{ year: string, make: string, model: string }>()
);
export const allTrimsLoaded = createAction(
  "[Tire Page] All Trims Loaded",
  props<{ trim: string[] }>()
);

export const loadingStart = createAction(
  "[Tire Page] Loading Start",
);
export const loadingStop = createAction(
  "[Tire Page] Loading Stop",
);
