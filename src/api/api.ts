import axios from 'axios';

type TBooruFilter = {
  tag?: string // list of tags
  url?: string // booru or file type
}

interface IBooru {
  mode: 's' | 'q' | 'e' | 'a' // safe, questionable, explicit or any
  page?: number // if page exists
  filter?: string
  order?: 'r' | 'd' | 'n' // random, date desc, no order
}

class der implements IBooru{
   filter: string;
   mode: 's' | 'q' | 'e' | 'a';
   order: 'r' | 'd' | 'n';
   page?: number;
   url: string;
   params: string;
   tag: string;
   searchUrl: string;

  constructor(
    filter: TBooruFilter,
    mode: 's' | 'q' | 'e' | 'a' = 's',
    order: 'r' | 'd' | 'n' = 'd',
    page = 1
  ) {
    this.mode = mode;
    this.page = page;
    this.tag = filter.tag ? `tag:${filter.tag}` : '';
    this.searchUrl = filter.url ? `+url:${filter.url}` : '';
    this.filter = filter ? `&q=${this.tag}${this.searchUrl}` : '';
    this.order = order;
    this.params = `?o=${order}&f=${mode}${this.filter}`;
    this.url = `https://cure.ninja/booru/api/json/${this.page}${this.params}`;

  }

  async fetchByPage() {
    const search = await axios.get(this.url)
      .then(res => {
        return {
          results: res.data.results,
          next: res.data.next_page
        }
      })
      .catch(err => {
        console.log(err)
      })
    // console.log(search)
    return search
  }

  fetchImages() {
    const newUrl = `${this.url}${this.page}/f=${this.filter}&`
  }

}

export default der;