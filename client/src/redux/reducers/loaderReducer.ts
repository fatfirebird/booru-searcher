import {HIDE_LOADER, SHOW_LOADER, TAction} from "../actions/loaderAction";

type TInitialState = {
  loading: boolean
}

const initialState = {
  loading: false
}

export default (state = initialState, payload: TAction): TInitialState  => {
  switch (payload.type) {
    case SHOW_LOADER: {
      return {
        loading: true
      }
    }

    case HIDE_LOADER: {
      return {
        loading: false
      }
    }

    default: {
      return state
    }
  }
}