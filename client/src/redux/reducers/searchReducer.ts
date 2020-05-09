import {RESET, TAction, UPDATE_PAGES, UPDATE_PARAMS} from '../actions/searchAction';

type TInitialState = {
  tags: string,
  mode: 's' | 'q' | 'e' | 'a',
  booru: '' | 'Konachan' | 'Gelbooru' | 'Danbooru' | 'Yandere' | 'Safebooru' | 'SankakuComplex',
  order: 'd' | 'r',
  currentPage: number | '',
  nextPage: number | '' | null,
}

const initialState: TInitialState = {
  tags: '',
  mode: 's',
  booru: '',
  order: 'd',
  currentPage: 1,
  nextPage: null,
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
        order,
      }
    }

    case UPDATE_PAGES: {
      const { currentPage, nextPage } = action.payload;
      return {
        ...state,
        currentPage,
        nextPage,
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