

const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
  mobileMenu.addEventListener('click', () => {
    console.log('Hamburgarmenyn klickad'); // Lägg till denna rad för felsökning
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
    console.log('mobileMenu-klasser:', mobileMenu.classList);
    console.log('navLinks-klasser:', navLinks.classList);
  });
} else {
  console.error('Kan inte hitta .mobile-menu eller .nav-links');
}


const hasHover = window.matchMedia('(hover: hover)').matches;

if (!hasHover) {
document.addEventListener('scroll', () => {
  console.log('Scroll event detected'); //funkar
const images = document.querySelectorAll('.about, .portfolio, .contact')
images.forEach(image => {
  const rect = image.getBoundingClientRect();
  console.log(`image position for' ${image.className}:`, rect); // funkar pos?
  const windowHeight = window.innerHeight;
  const windowCenter = windowHeight/2;
  const imageCenter = rect.top + (rect.height / 2);
  const imgText = image.querySelector('.img-text');
  
  
  if (imageCenter >= windowCenter -100 && imageCenter <= windowCenter +100){
    console.log(`Adding hover class to ${image.className}`);
    image.classList.add('hover');
    image.querySelector('.img-text').classList.add('hover');
  }else{
    console.log(`Removing hover class from ${image.className}`);
    image.classList.remove('hover');
    image.querySelector('.img-text').classList.remove('hover');
  }
  });
})
}