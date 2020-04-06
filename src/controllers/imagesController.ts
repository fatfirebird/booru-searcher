import { Request, Response } from 'express';
import { search } from 'kaori';
import { Image } from 'kaori/typings/Image';

interface QueryInterface {
  booru: string;
  tags: string;
  exclude: [];
  random?: boolean;
}

const render = async(req: Request, res: Response) => {
  try {
    console.log(req.query)
    const { booru, random, exclude }: QueryInterface = req.query;
    const tags: Array<string> = req.query.tags.split(', ');

    const images = await search(booru, { 
      random, 
      exclude,
      limit: 5, 
      tags,
    })
    .catch(err => {
      throw err
    })

    const imagesUrl = images.map(image => {
      return { 
        preview: image.previewURL, 
        url: image.fileURL,
        id: image.id
      }
    });

    res.render('images', { imagesUrl });

  } catch (error) {
    console.log(error)
    res.render('images', { error });
  }
}

export default {
  render
}