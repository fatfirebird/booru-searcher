import { Request, Response } from 'express';
import { search } from 'kaori';
import { Image } from 'kaori/typings/Image';
import * as Booru from 'booru';

type QueryInterface = {
  booru: string;
  tags: string;
  exclude: [];
  random?: boolean;
}

const render = async(req: Request, res: Response) => {
  try {
    // console.log(req.query)
    const { booru, random, exclude }: QueryInterface = req.query;
    const tags: Array<string> = req.query.tags.split(', ');

    // const images = await search(booru, { 
    //   random, 
    //   exclude,
    //   limit: 20,
    //   tags,
    // })
    // .catch(err => {
    //   throw err
    // })

    // const imagesUrl = images.map(image => {
    //   return { 
    //     preview: image.previewURL || image.fileURL, 
    //     url: image.fileURL,
    //     id: image.id
    //   }
    // });
    // console.log(imagesUrl)

    const images = await Booru.search(booru, tags, {limit: 20, random});
    console.log(images)
    const imagesUrl = images.map(post => {
      return { url: post.fileUrl, preview: post.fileUrl, id: post.id}
    })

    res.render('images', { imagesUrl });

  } catch (error) {
    console.log(error)
    res.render('images', { error });
  }
}

export default {
  render
}