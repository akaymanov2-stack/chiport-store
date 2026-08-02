# Дизайн-система Inspector AT850

Компактная спецификация для переиспользования на других страницах и в других проектах бренда.
Полное описание конкретного лендинга — в `docs/at850-landing.md`.
Реализация этой спецификации в CSS — `css/design-system.css`.

## Принципы
1. **Никаких градиентов.** Плоские заливки, один акцентный цвет.
2. **Никаких эмодзи и рисованных SVG-иллюстраций.** Смысловые метки — только простая
   геометрия (круг, квадрат, кольцо) и крупные цифры.
3. **Цифра важнее прилагательного.** «15 сек», «500», «2×AAA» вместо «быстро» и «надёжно».
4. **Одна тень на страницу** — под фотографией товара. Карточки разделяются границами, не тенями.
5. **Адаптив без медиазапросов** — `grid-template-columns: repeat(auto-fit, minmax(N, 1fr))`
   и `clamp()` в типографике.
6. **Копирайт продающий, но без давления:** бытовые ситуации вместо характеристик,
   без канцелярита, без восклицательных знаков.

## CSS-переменные

```css
:root {
  /* Цвет */
  --ink:               #0B1220;
  --accent:            #1447E6;
  --accent-hover:      #0B31A8;
  --accent-tint:       #EEF3FE;
  --accent-tint-2:     #F7F9FE;
  --panel:             #F1F5FB;
  --panel-neutral:     #F2F4F7;
  --border:            #E6EBF2;
  --border-strong:     #D8DFE9;
  --text-primary-soft: #26303F;
  --text-secondary:    #45505F;
  --text-muted:        #6B7686;
  --text-faint:        #8A94A4;
  --on-dark-muted:     #98A3B3;
  --on-accent-muted:   #C9D8FF;
  --on-accent-faint:   #8FAAFF;
  --surface:           #FFFFFF;

  /* Типографика */
  --font: 'Manrope', Helvetica, Arial, sans-serif;

  /* Скругления */
  --r-card:   22px;
  --r-panel:  26px;
  --r-block:  32px;
  --r-chip:   16px;
  --r-pill:   999px;
  --r-square: 8px;

  /* Раскладка */
  --container:   1180px;
  --gutter:      28px;
  --section-gap: 88px;

  /* Тени */
  --shadow-product: 0 34px 46px rgba(11, 18, 32, 0.26);
  --shadow-chip:    0 12px 30px rgba(11, 18, 32, 0.12);
}
```

## Типографическая шкала

```css
.h1    { font: 800 clamp(46px,5.4vw,78px)/0.94 var(--font); letter-spacing: -.035em; text-transform: uppercase; }
.h2    { font: 800 clamp(30px,3.2vw,44px)/1.05 var(--font); letter-spacing: -.03em; }
.h3    { font: 800 24px/1.2 var(--font);  letter-spacing: -.02em; }  /* заголовок панели */
.h4    { font: 800 20px/1.25 var(--font); letter-spacing: -.02em; }  /* заголовок карточки */
.stat  { font: 800 42px/1 var(--font); letter-spacing: -.03em; }
.price { font: 800 40px/1 var(--font); letter-spacing: -.03em; }
.lead  { font: 400 18px/1.5 var(--font);   color: var(--text-secondary); }
.body  { font: 400 15.5px/1.55 var(--font); color: var(--text-secondary); }
.label { font: 800 13px/1 var(--font); letter-spacing: .1em; color: var(--accent); }
.chip  { font: 700 12.5px/1 var(--font); letter-spacing: .02em; }
.fine  { font: 400 13px/1.5 var(--font); color: var(--text-faint); }
```

Подключение шрифта:
```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

## Компоненты

### Кнопка — основная
```css
height: 56px; padding: 0 34px; border-radius: var(--r-pill);
background: var(--accent); color: #fff; font: 700 16px var(--font);
display: inline-flex; align-items: center;
```
Ховер: `background: var(--accent-hover)`.
Компактный вариант в шапке: `height: 42px; padding: 0 22px; font-size: 14px`.

### Кнопка — вторичная
```css
height: 56px; padding: 0 30px; border-radius: var(--r-pill);
background: #fff; border: 1px solid var(--border-strong);
color: var(--ink); font: 700 16px var(--font);
```
Ховер: `border-color: var(--ink)`.

### Кнопка на акцентном фоне (инверсная)
```css
height: 60px; padding: 0 40px; border-radius: var(--r-pill);
background: #fff; color: var(--accent); font: 800 17px var(--font);
```
Ховер: `background: var(--ink); color: #fff`.

### Чип
```css
padding: 7px 14px; border-radius: var(--r-pill); white-space: nowrap;
font: 700 12.5px var(--font); letter-spacing: .02em;
```
Акцентный: `background: var(--accent-tint); color: var(--accent)`.
Нейтральный: `background: var(--panel-neutral); color: var(--text-secondary)`.

### Карточка
```css
border: 1px solid var(--border); border-radius: var(--r-card); padding: 28px;
display: flex; flex-direction: column; gap: 12px;
```
Выделенная («рекомендуем»): `border: 2px solid var(--accent); background: var(--accent-tint-2); padding: 30px`.

### Панель
```css
background: var(--panel); border-radius: var(--r-panel); padding: 34px;
```
Обведённый вариант: `background: #fff; border: 1px solid var(--border)`.

### Геометрические метки (замена иконок)
```css
.mark         { width: 34px; height: 34px; display: block; }
.mark--dot    { border-radius: var(--r-pill); background: var(--accent); }
.mark--square { border-radius: var(--r-square); background: var(--ink); }
.mark--ring   { border-radius: var(--r-pill); border: 8px solid var(--accent); }
```

### Блок статистики
Тёмная full-bleed полоса `background: var(--ink)`, `padding: 44px var(--gutter)`,
grid `repeat(auto-fit, minmax(190px,1fr))`, gap 28px.
Пара: цифра `.stat` белым + подпись 14px/600 `var(--on-dark-muted)`, gap 6px.

### Нумерованный шаг
`border-top: 3px solid var(--accent); padding-top: 18px`, flex column gap 10px:
номер `.label` → заголовок 21px/800 → описание `.body`.

### Строка FAQ
grid `repeat(auto-fit, minmax(280px,1fr))`, gap `12px 40px`, `padding: 24px 0`,
`border-top: 1px solid var(--border)`; последней строке добавить `border-bottom`.

### Таблица характеристик
grid `1fr auto`, gap `14px 20px`, 15.5px.
Левая ячейка — `var(--text-muted)`; правая — `font-weight: 700; text-align: right`.

## Раскладка

```css
.container { max-width: var(--container); margin: 0 auto; padding: 0 var(--gutter); }
.section   { padding-top: var(--section-gap); }
.grid      { display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
```

Пороги `minmax` по типу контента: статистика 190px · шаги 260px · карточки и FAQ 280–300px ·
крупные панели и hero 320–330px.

Группы элементов (кнопки, чипы, пункты списка) раскладывать flex/grid с `gap` —
не маргинами на элементах.

## Ховеры и переходы
Только смена цвета фона / границы / текста. Рекомендуемый переход:
`transition: background-color .18s ease, border-color .18s ease, color .18s ease`.
Трансформаций, увеличений и подъёмов карточек в системе нет.

## Правила копирайта
- Заголовок = обещание результата, не название функции.
- Каждой характеристике — бытовой сценарий: «500 тестов» → «годы, а не месяцы».
- Честные ограничения проговариваются прямо (20 минут после алкоголя, бытовой статус прибора) —
  это работает на доверие.
- Никаких восклицательных знаков, эмодзи и слов «инновационный», «уникальный», «premium».
