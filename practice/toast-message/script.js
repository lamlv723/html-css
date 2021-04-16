'use strict';
// toast object
const success = {
   title: 'Success',
   message: 'Anyone with access can view your invited visitors.',
   type: 'success',
   icon: 'check',
};
const info = {
   title: 'Info',
   message: 'Anyone with access can view your invited visitors.',
   type: 'info',
   icon: 'info',
};
const warning = {
   title: 'Warning',
   message: 'Anyone with access can view your invited visitors.',
   type: 'warning',
   icon: 'exclamation',
};
const error = {
   title: 'Error',
   message: 'Anyone with access can view your invited visitors.',
   type: 'error',
   icon: 'times',
};

/****************/

function toast(obj) {
   const main = document.getElementById('toast');
   if (main) {
      const toast = document.createElement('div');

      toast.classList.add('toast', `toast--${obj.type}`);
      toast.innerHTML = `
      <div class="toast__icon">
         <i class="fas fa-${obj.icon}-circle"></i>
      </div>
      <div class="toast__body">
         <h3 class="toast__title">${obj.title}</h3>
         <p class="toast__msg">${obj.message}</p>
      </div>
      <div class="toast__close"><i class="fas fa-times"></i></div>
      `;

      const autoRemoveEl = main.appendChild(toast);
      setTimeout(function () {
         main.removeChild(toast);
      }, 4000);
      toast.addEventListener('click', e => {
         if (e.target.closest('.toast__close')) {
            main.removeChild(toast);
            clearTimeout(autoRemoveEl);
         }
      });
   }
}

document.querySelector('#btn').addEventListener('click', e => {
   e.preventDefault();

   if (e.target.classList.contains('btn--success')) {
      toast(success);
   } else if (e.target.classList.contains('btn--info')) {
      toast(info);
   } else if (e.target.classList.contains('btn--warning')) {
      toast(warning);
   } else if (e.target.classList.contains('btn--error')) {
      toast(error);
   }
});
