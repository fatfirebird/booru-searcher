import { Request, Response } from 'express';
import Booru from '../api/api';

type TQuery = {
  results: Array<TPost>,
  next?: number | ''
}

type TPostExtension = 'jpeg' | 'jpg' | 'png' | 'webm' | 'mp4' | 'gif';

type TPost = {
  url: string;
  height: number;
  width: number;
  tags: string;
  preview: string;
  id: string | number;
  sourceURL: string | null;
  rating: 's' | 'q' | 'e';
  created: number | Date;
  extension: TPostExtension
}

const render = async(req: Request, res: Response) => {
  try {
    const { booru, order, mode, tags, page } = req.query;
    console.log(req.query)
    const query: TQuery = await Booru.search({tag: tags, url: booru}, mode, order, page);
    console.log(query)

    if (query.results.length === 0) {
      throw new Error('Ничего не найдено!')
    }

    const images = query.results.map(post => {
      return {
        url: post.url,
        size: {
          height: post.height,
          width: post.width
        },
        tags: post.tags,
        preview: post.preview || post.url,
        id: post.id,
        source: post.sourceURL,
        rating: post.rating,
        date: post.created,
        extension: post.extension
      }
    });

    res.json({ images, next: query.next });
  } catch (error) {
    console.log(error);
    res.json({ images: [], next: '' });
  }
}

export default {
  render
}