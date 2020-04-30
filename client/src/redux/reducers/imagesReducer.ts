import {LOAD_IMAGES, RESET, TAction, TImage} from "../actions/imagesAction";

type TInitialState = {
  images: Array<TImage>,
  opened: boolean
}

const initialState: TInitialState = {
  images: [],
  opened: false
}

export default (state = initialState, action: TAction): TInitialState => {
  switch (action.type) {
    case LOAD_IMAGES: {
      const { images } = action.payload;
      const allImages = state.images.concat(images);
      return {
        ...state,
        images: allImages
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
