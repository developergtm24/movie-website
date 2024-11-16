const mobileMenu = document.querySelector('.mobile-menu');
const menuButton = document.querySelector('.openmenu');
const closeButton = document.querySelector('.closemenu');
var modal = document.getElementById('id01');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.style.overflow = "hidden";
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = "visible";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}