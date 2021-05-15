'use strict';

const btnLikes = document.querySelectorAll('.home-product-item__like');
console.log(`Welcome to Fake Shopee `);
btnLikes.forEach(btn =>
   btn.addEventListener('click', function (e) {
      this.classList.toggle('home-product-item__liked');
      e.preventDefault();
   })
);

const changeActive = function (list, className) {
   list.forEach(item =>
      item.addEventListener('click', function (e) {
         if (this.classList.contains(className)) {
            e.preventDefault();
         } else {
            const activeItem = document.getElementsByClassName(className);
            const activeItemArr = Array.prototype.slice.call(activeItem);
            activeItemArr[0].classList.remove(className);
            this.classList.add(className);
         }
      })
   );
};

const sortItems = document.querySelectorAll('.header__sort-item');
changeActive(sortItems, 'header__sort-item--active');

const categoryItems = document.querySelectorAll('.category-item');
changeActive(categoryItems, 'category-item--active');
