const images = document.querySelectorAll('.image-wrapper');
const pics = getData();

const createTags = (tags) => tags.map(tag => `<div class="tag">${tag}</div>`).join('');

const createDesc = (source, rating, size, date) => {
  const localDate = new Date(date).toLocaleDateString();
  return `
    ${source ? `<a href="${source}" target="_blank">Оригинал</a>` : ''}
    ${rating ? `<div>Рейтинг: ${rating}</div>` : ''}
    ${size ? `<div>Размер: ${size.width}x${size.height}</div>` : ''}
    ${date ? `<div>Дата: ${localDate}</div>` : ''}
`};

const createButton = (id, icon) => `
  <button
    id=${id}
    class="btn-floating btn-large waves-effect waves-light right blue-grey darken-4"
    type="button"
  >
    <i class="material-icons">${icon}</i>
  </button> 
`

const createLayout = (id) => {
  const layout = document.createElement('div');
  let file;

  pics.forEach(pic => {
    if (pic.id === id) {
      file = pic;
    }
  });

  layout.classList.add('layout', 'row');
  layout.innerHTML = `
      <div class="info col l2 m2 s12 grey lighten-4">
        <div class="row">
          <div class="col s12">
            <h5>${id}</h5>
          </div>
        </div>
        <div class="section">
          <h5>Теги</h5>
          ${createTags(file.tags.split(' '))}
        </div>
        <div class="section">
          ${createDesc(file.source, file.rating, file.size, file.date)}
        </div>
      </div>
    <div class="col l9 m9 s12 main-image-container">
      <img class="main-image" src="${file.url}" alt="${id}"/>
    </div>
    <div class="col s1 button-container right">
      ${createButton('layout-close', 'close')}
    </div>
    ${window.innerWidth < 601 ?
      `<div class="col s1 button-container left">
        ${createButton('layout-menu', 'menu')}
      </div>`
      :
      ''
    }
`
  document.body.appendChild(layout);
  document.querySelector('#layout-close').onclick = () => {
    document.querySelector('.layout').remove();
  }
}

const toggleMenu = () => {
  const info = document.querySelector('.info');
  const container = document.querySelector('.main-image-container');

  info.classList.add('hide');

  document.querySelector('#layout-menu').onclick = () => {
    info.classList.toggle('hide');
    container.classList.toggle('hide')
  }
}

images.forEach(image => image.addEventListener('click', e => {
  e.preventDefault();
  const { alt, src } = image.firstChild;
  createLayout(alt, src);

  if (window.innerWidth < 601) {
    toggleMenu()
  }
}));

window.addEventListener('keyup', e => {
  const key = e.key;
  const layout = document.querySelector('.layout');
  if (layout && key === 'Escape') {
    layout.remove();
  }
});