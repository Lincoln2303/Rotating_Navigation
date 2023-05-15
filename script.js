// II.12. We add the open and close button, and save it to a variable:
const open = document.getElementById('open');
const close = document.getElementById('close');

// II.13. We'll need the container too:
const container = document.querySelector('.container');

// II.14. We'll add an eventListener to open:
// NOTE: Here we simply just add the class to the container
open.addEventListener('click', () => container.classList.add('show-nav'))

// II.15. We do the same thing with close: (NOTE: Just remove the 'show-nav' class)
// AFTER: We have to make sure in css, that the container is moving to when we click (II.16.)
close.addEventListener('click', () => container.classList.remove('show-nav'))


