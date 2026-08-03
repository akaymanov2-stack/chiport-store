/* ============================================================================
   Аналитика: цель Метрики buy_wb + год в копирайте.
   Подключается на всех страницах сайта: <script src="js/analytics.js" defer>

   Цель buy_wb — тип «JavaScript-событие». По ней настраиваются автостратегии
   Яндекс.Директа: сам факт покупки Wildberries обратно не передаёт, поэтому
   оптимизируемся по клику на кнопку покупки.

   ВАЖНО: класс .buy вешать только на ссылки, ведущие на карточку товара на WB.
   На «Открыть магазин» и прочие ссылки — нельзя, иначе цель засорится и
   стратегии будут учиться на мусоре.
   ========================================================================= */
(function () {
  'use strict';

  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }

  var counter = document.body.dataset.ymCounter;

  /* Ссылка открывается в любом случае, даже без JS и без счётчика,
     поэтому клик не теряется ни при каких условиях. */
  document.querySelectorAll('.buy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (typeof ym === 'function' && counter && counter !== '00000000') {
        ym(counter, 'reachGoal', 'buy_wb', { nm: btn.dataset.nm || '' });
      }
    });
  });
})();
