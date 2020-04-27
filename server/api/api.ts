import axios from 'axios';

type TBooruFilter = {
  tag?: string // list of tags
  url?: string // booru or file type
}

class Booru {
  private static _createQuery (
    filter: TBooruFilter,
    mode: 's' | 'q' | 'e' | 'a' = 's',
    order: 'r' | 'd' | 'n' = 'd',
    page = 1
  ) {
    const tag = filter.tag ? `tag:${filter.tag}` : '';
    const searchUrl = filter.url ? `+url:${filter.url}` : '';
    const filtersUrl = filter ? `&q=${tag}${searchUrl}` : '';
    const params = `?o=${order}&f=${mode}${filtersUrl}`;

    return `https://cure.ninja/booru/api/json/${page}${params}`;
  }

  static async search(
    filter: TBooruFilter,
    mode: 's' | 'q' | 'e' | 'a' = 's',
    order: 'r' | 'd' | 'n' = 'd',
    page = 1
  ) {
    const query = this._createQuery(filter, mode, order, page);

    return await axios.get(query)
      .then(res => {
        return {
          results: res.data.results,
          next: res.data.next_page
        }
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
}

export default Booru;