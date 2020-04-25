import { Request, Response } from 'express';
import * as Booru from 'booru';
import der from '../api/api'
import SearchParameters from 'booru/dist/structures/SearchParameters';
import fetch from "node-fetch";


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

    // const f = await fetch('https://cure.ninja/booru/api/json?f=e&q=tag:loli+bondage+width:<=1920');
    // const a = await f.json();
    // console.log(a);

    const a = new der({tag: 'loli'}, 'e', 'r');
    const query = await a.fetchByPage();

    // @ts-ignore
    if (query.results.length === 0) {
      throw new Error('Ничего не найдено!')
    }

    // @ts-ignore
    const imagesUrl = query.results.map(post => {
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
      }
    })

    console.log(imagesUrl)

    // const images = await Booru.search(booru, tags, parameters);

    // if (images.length === 0) {
    //   throw new Error('Ничего не найдено!')
    // }
    //
    // const imagesUrl = images.map(post => {
    //   return {
    //     url: post.fileUrl,
    //     size: {
    //       height: post.height,
    //       width: post.width
    //     },
    //     tags: post.tags,
    //     preview: post.previewUrl || post.sampleUrl || post.fileUrl,
    //     id: post.id,
    //     source: post.source,
    //     rating: post.rating,
    //     date: post.createdAt,
    //   }
    // });

    res.render('images', { imagesUrl });
  } catch (error) {
    console.log(error);
    res.render('images', { error });
  }
}

export default {
  render
}