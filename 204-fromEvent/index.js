import { fromEvent } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');
const canvas = document.getElementById('canvas');
const buttons = document.querySelectorAll('button');

// fromEvent(btnStart, 'click').subscribe(
//   e => (result.textContent = 'I was clicked')
// );

fromEvent(buttons, 'click').subscribe(
  e => (result.textContent = e.target.textContent)
);

fromEvent(canvas, 'mousemove').subscribe(e => {
  const x = e.offsetX;
  const y = e.offsetY;

  ctx.fillRect(x, y, 2, 2);
});

const rect = canvas.getBoundingClientRect();
const ctx = canvas.getContext('2d');
const scale = window.devicePixelRatio;
canvas.width = rect.width * scale;
canvas.height = rect.height * scale;
ctx.scale(scale, scale);

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
