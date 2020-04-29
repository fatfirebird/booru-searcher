import {LOAD_IMAGES, RESET, TAction, TImage} from "../actions/imagesAction";

type TInitialState = {
  images: Array<TImage>
}

const initialState: TInitialState = {
  images: []
}

export default (state = initialState, action: TAction): TInitialState => {
  switch (action.type) {
    case LOAD_IMAGES: {
      const { images } = action.payload;
      const allImages = state.images.concat(images);
      return {
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
