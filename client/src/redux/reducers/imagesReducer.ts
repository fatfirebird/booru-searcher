import {HIDE_IMAGE, LOAD_IMAGES, OPEN_IMAGE, RESET, TAction, TImage} from "../actions/imagesAction";

type TInitialState = {
  images: Array<TImage>,
  opened: string | false
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

    case OPEN_IMAGE: {
      const { md5 } = action.payload;
      return {
        ...state,
        opened: md5
      }
    }

    case HIDE_IMAGE: {
      return {
        ...state,
        opened: false
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
