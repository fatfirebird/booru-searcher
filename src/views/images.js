const images = document.querySelectorAll('.image-wrapper a');

const pics = sd()

const createTags = (tags) => tags.map(tag => `<div class="tag">${tag}</div>`)

const createLayout = (id, src) => {
  const layout = document.createElement('div');
  let file;

  pics.forEach(pic => {
    if (pic.id === id) {
      file = pic;
      console.log(typeof pic.date)
    }
  });
  console.log(file)
  layout.classList.add('layout', 'row');
  layout.innerHTML = `
      <div class="info col s3 l2 grey lighten-4">
        <div class="row">
          <div class="col s12">
            <h5>Информация</h5>
          </div>
        </div>
        <div class="section">
          <h5>Теги</h5>
          ${createTags(file.tags)}
        </div>
        <div class="section">
          ${file.source && `<a href="${file.source}">Оригинал</a>`}
          ${file.rating && `<p>Рейтинг: ${file.rating}</p>`}
          ${file.size && `<p>Размер: ${file.size.width}x${file.size.height}</p>`}
          ${file.date && `<p>Дата: ${new Date(file.date).toLocaleDateString()}</p>`}
        </div>
      </div>
    <div class="col s4 middle">
      <p>${id}</p>
      <img src="${file.url}" alt="${id}" style="max-width: 500px"/>
    </div>
    <div class="col s3 right">
      <button id="layout-close" class="btn-floating btn-large waves-effect waves-light right blue-grey darken-4" type="button" value="ds">
        <i class="material-icons">close</i>
      </button>
    </div>
`
  document.body.appendChild(layout);
  document.querySelector('#layout-close').onclick = () => {
    document.querySelector('.layout').remove()
  }
}

images.forEach(image => image.addEventListener('click', e => {
  e.preventDefault();
  const { alt, src } = image.firstChild;
  console.log(image.firstChild.alt)
  createLayout(alt, src);
}));