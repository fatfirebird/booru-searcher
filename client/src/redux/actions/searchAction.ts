export const UPDATE_PARAMS: 'UPDATE_PARAMS' = 'UPDATE_PARAMS';
export const UPDATE_PAGES: 'UPDATE_PAGES' = 'UPDATE_PAGES';
export const RESET: 'RESET' = 'RESET';

export type TAction = TUpdateParams | TUpdatePages | TReset;

type TParamsPayload = {
  tags: string,
  mode: 's' | 'q' | 'e' | 'a',
  booru: 'multi' | 'Konachan' | 'Gelbooru' | 'Danbooru' | 'Yandere' | 'Safebooru' | 'SankakuComplex',
  order: 'd' | 'r',
}

type TUpdateParams = {
  type: typeof UPDATE_PARAMS,
  payload: TParamsPayload
}

export const updateParams = (
  tags: string,
  mode: 's' | 'q' | 'e' | 'a',
  booru: 'multi' | 'Konachan' | 'Gelbooru' | 'Danbooru' | 'Yandere' | 'Safebooru' | 'SankakuComplex',
  order: 'd' | 'r'
): TUpdateParams => ({
  type: UPDATE_PARAMS,
  payload: {
    tags,
    mode,
    booru,
    order
  }
})

type TUpdatePages = {
  type: typeof UPDATE_PAGES,
  payload: {
    cur_page: number
  }
}

export const updatePages = (cur_page: number): TUpdatePages => ({
  type: UPDATE_PAGES,
  payload: {
    cur_page
  }
})

type TReset = {
  type: typeof RESET
}

export const resetParams = (): TReset => ({
  type: RESET
})