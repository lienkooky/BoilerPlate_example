const main = document.querySelector('#main');
const qna = document.querySelector('#qua');
const button = document.querySelector('.btn btn-outline-danger');

function begin() {
  main.style.WebkitAnimation = 'fedeOut 1s';
  main.style.animation = 'fedeOut 1s';
  qna.style.WebkitAnimation = 'fedeIn 1s';
  qna.style.animation = 'fedeIn 1s';
}

button, addEventListener('click', begin);
