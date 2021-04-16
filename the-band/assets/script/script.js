'use strict';

const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-btn');
const currentHeight = header.clientHeight;

menuBtn.addEventListener('click', e => {
   const isClosed = header.clientHeight === currentHeight;
   if (isClosed) {
      header.style.height = 'auto';
   } else {
      header.style.height = null;
   }
});

const menuItems = document.querySelectorAll('.nav li a[href*="#"]');
const itemsArr = Array.prototype.slice.call(menuItems);
itemsArr.forEach(item => {
   item.addEventListener('click', function (e) {
      const isParentMenu = this.nextElementSibling;
      if (isParentMenu) {
         e.preventDefault();
      } else {
         header.style.height = null;
      }
   });
});
