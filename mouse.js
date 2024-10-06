 // Get the box element by its ID
 const box = document.getElementById('box');

 // Add an event listener for mouse enter to change shape
 box.addEventListener('mouseenter', () => {
     box.classList.add('circle');
 });

 // Add an event listener for mouse leave to revert shape
 box.addEventListener('mouseleave', () => {
     box.classList.remove('circle');
 });

        