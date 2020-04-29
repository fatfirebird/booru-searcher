export const SHOW_LOADER: 'SHOW_LOADER' = 'SHOW_LOADER';
export const HIDE_LOADER: 'HIDE_LOADER' = 'HIDE_LOADER';

export type TAction = TShowLoader | THideLoader;

type TShowLoader = {
  type: typeof SHOW_LOADER
}

export const showLoader = (): TShowLoader => ({
  type: SHOW_LOADER
});

type THideLoader = {
  type: typeof HIDE_LOADER
}

export const hideLoader = (): THideLoader => ({
  type: HIDE_LOADER
});
