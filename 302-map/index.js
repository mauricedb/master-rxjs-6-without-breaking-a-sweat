import { fromEvent, map } from 'rxjs';

const canvas = document.getElementById('canvas');

fromEvent(canvas, 'mousemove')
  .pipe(
    map(e => ({
      x: e.offsetX,
      y: e.offsetY,
      ctx: e.target.getContext('2d')
    }))
  )
  .subscribe(pos => {
    pos.ctx.fillRect(pos.x, pos.y, 2, 2);
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
