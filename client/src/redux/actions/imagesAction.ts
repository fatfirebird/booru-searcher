export const LOAD_IMAGES: 'LOAD_IMAGES' = 'LOAD_IMAGES';
export const RESET: 'RESET' = 'RESET';

export type TAction = TLoad | TReset;

export type TImage = {
  url: string,
  size: {
    height: number,
    width: number
  },
  tags: string,
  preview: string,
  id: string | number,
  source?: string,
  rating: 's' | 'q' | 'e' | 'a',
  date: number,
  extension: 'jpeg' | 'jpg' | 'png' | 'gif' | 'webm' | 'mp4'
}

type TLoad = {
  type: typeof LOAD_IMAGES,
  payload: {
    images: Array<TImage>
  }
}

export const loadImages = (images: Array<TImage>): TLoad => ({
  type: LOAD_IMAGES,
  payload: {
    images
  }
});

type TReset = {
  type: typeof RESET
}

export const resetImages = ():TReset => ({
  type: RESET
})