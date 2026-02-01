function openLetter() {
  const cover = document.getElementById('cover');
  const content = document.getElementById('content');

  cover.classList.add('fade-out');

  setTimeout(() => {
    cover.style.display = 'none';
    content.classList.remove('hidden');
  }, 800);
}