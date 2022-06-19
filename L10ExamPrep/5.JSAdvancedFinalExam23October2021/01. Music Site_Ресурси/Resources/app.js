window.addEventListener('load', solve);

function solve() {
  let genre = document.getElementById('genre');
  let name = document.getElementById('name');
  let author = document.getElementById('author');
  let date = document.getElementById('date');

  let addSongBtn = document.getElementById('add-btn');

  let collectionOfSongs = document.querySelector(
    '#all-hits .all-hits-container'
  );

  let savedSongs = document.querySelector('#saved-hits .saved-container');

  addSongBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let newSongDivElement = document.createElement('div');
    newSongDivElement.classList.add('hits-info');

    let newImgElement = document.createElement('img');
    newImgElement.src = './static/img/img.png';

    let h2Genre = document.createElement('h2');
    h2Genre.textContent = `Genre: ${genre.value}`;

    let h2Name = document.createElement('h2');
    h2Name.textContent = `Name: ${name.value}`;

    let h2Author = document.createElement('h2');
    h2Author.textContent = `Author: ${author.value}`;

    let h3Date = document.createElement('h3');
    h3Date.textContent = `Date: ${date.value}`;

    genre.value = '';
    name.value = '';
    author.value = '';
    date.value = '';

    let btnSave = document.createElement('button');
    btnSave.classList.add('save-btn');
    btnSave.textContent = 'Save song';
    btnSave.addEventListener('click', (event) => {
      let div = event.currentTarget.parentElement;
      let firstBtn = div.querySelector('button');
      div.removeChild(firstBtn);
      firstBtn = div.querySelector('button');
      div.removeChild(firstBtn);

      savedSongs.appendChild(div);
      collectionOfSongs.removeChild(div);
    });

    let btnLike = document.createElement('button');
    btnLike.classList.add('like-btn');
    btnLike.textContent = 'Like song';
    btnLike.addEventListener('click', (e) => {
      e.preventDefault();
      let likedParagraph = document.querySelector('#total-likes .likes p');
      let arrP = likedParagraph.textContent.split(' ');
      let counter = Number(arrP[2]);
      counter++;
      arrP[2] = counter;
      likedParagraph.textContent = arrP.join(' ');

      e.currentTarget.disabled = true;
    });

    let btnDelete = document.createElement('button');
    btnDelete.classList.add('delete-btn');
    btnDelete.textContent = 'Delete';
    btnDelete.addEventListener('click', (event) => {
      let div = event.currentTarget.parentElement;
      let parentSection = div.parentElement;
      parentSection.removeChild(div);
    });

    newSongDivElement.appendChild(newImgElement);
    newSongDivElement.appendChild(h2Genre);
    newSongDivElement.appendChild(h2Name);
    newSongDivElement.appendChild(h2Author);
    newSongDivElement.appendChild(h3Date);
    newSongDivElement.appendChild(btnSave);
    newSongDivElement.appendChild(btnLike);
    newSongDivElement.appendChild(btnDelete);

    collectionOfSongs.appendChild(newSongDivElement);
  });
}
