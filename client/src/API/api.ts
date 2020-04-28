import axios from "axios";

const url = 'http://localhost:5000/images';

export const getImagesByProps = async (
  tags: string,
  booru: 'multi' | 'Konachan' | 'Gelbooru' | 'Danbooru' | 'Yandere' | 'Safebooru' | 'SankakuComplex',
  order: 'd' | 'r',
  mode: 's' | 'q' | 'e' | 'a',
  page: number
) => {
  const queryParams = `?page=${page}&tags=${tags}&booru=${booru ===  'multi' ? '' : booru}&order=${order}&mode=${mode}`;
  const data = await axios.get(url + queryParams)
    .then(res => res)
    .catch(err => err)
  return {response: data, query: queryParams}
}

export const getImagesByQuery = async (query: string) => {
  return await axios.get(url + query)
    .then(res => res)
    .catch(err => {
      console.log(err)
      return err
    })
}