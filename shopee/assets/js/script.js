'use strict';

const btnLikes = document.querySelectorAll('.home-product-item__like');
console.log(btnLikes);
btnLikes.forEach(btn =>
   btn.addEventListener('click', function () {
      this.classList.toggle('home-product-item__liked');
   })
);

/*
if (this.classList.contains('.control__device-btn--fan')) {
   onclickQuat();
} 
if (this.classList.contains('.control__device-btn--light')) {
   onclickDen();
} 
*/
