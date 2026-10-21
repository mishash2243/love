const imgs = document.querySelectorAll('.slideshow img');
if (imgs.length > 1) {
  let i = 0;
  setInterval(() => {
    imgs[i].classList.remove('active');
    i = (i + 1) % imgs.length;
    imgs[i].classList.add('active');
  }, 3500);
}