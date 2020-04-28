import {RESET, TAction, UPDATE_PAGES, UPDATE_PARAMS} from '../actions/searchAction';

type TInitialState = {
  tags: string,
  mode: 's' | 'q' | 'e' | 'a',
  booru: 'multi' | 'Konachan' | 'Gelbooru' | 'Danbooru' | 'Yandere' | 'Safebooru' | 'SankakuComplex',
  order: 'd' | 'r',
  cur_page: number | '',
}

const initialState: TInitialState = {
  tags: '',
  mode: 's',
  booru: 'multi',
  order: 'd',
  cur_page: 1,
}

export default (state = initialState, action: TAction): TInitialState => {
  switch (action.type) {
    case UPDATE_PARAMS: {
      const { tags, mode, booru, order } = action.payload;
      return {
        ...state,
        tags,
        mode,
        booru,
        order
      }
    }

    case UPDATE_PAGES: {
      const { cur_page } = action.payload;
      return {
        ...state,
        cur_page,
      }
    }


    case RESET: {
      return initialState
    }

    default: {
      return state
    }
  }
}