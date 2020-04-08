import { Request, Response } from 'express';
import * as Booru from 'booru';
import SearchParameters from 'booru/dist/structures/SearchParameters';

const render = async(req: Request, res: Response) => {
  try {
    const { booru } = req.query;
    const limit = +req.query.limit;
    const random = !!req.query.random;
    const tags: Array<string> = req.query.tags.split(', ');
    const parameters: SearchParameters = {
      limit, 
      random
    }

    const images = await Booru.search(booru, tags, parameters);

    if (images.length === 0) {
      throw new Error('Ничего не найдено!')
    }

    const imagesUrl = images.map(post => {
      return { 
        url: post.fileUrl,
        size: {
          height: post.height,
          width: post.width
        },
        tags: post.tags,
        preview: post.previewUrl || post.sampleUrl || post.fileUrl, 
        id: post.id,
        source: post.source,
        rating: post.rating,
        date: post.createdAt,
      }
    });

    res.render('images', { imagesUrl });

  } catch (error) {
    console.log(error);
    res.render('images', { error });
  }
}

export default {
  render
}