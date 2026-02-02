function openLetter() {
  const cover = document.getElementById('cover');
  const content = document.getElementById('content');

  cover.classList.add('fade-out');

  setTimeout(() => {
    cover.style.display = 'none';
    content.classList.remove('hidden');
  }, 800);
}

function openLetterCvz() {
  const cvz = document.getElementById('cvz');
  const contentcvz = document.getElementById('contentcvz');

  cvz.classList.add('fade-out');

  setTimeout(() => {
    cvz.style.display = 'none';
    contentcvz.classList.remove('hidden');
  }, 800);
}

