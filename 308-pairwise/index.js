import { fromEvent, map, pairwise } from 'rxjs';

const canvas = document.getElementById('canvas');

fromEvent(canvas, 'mousemove')
  .pipe(
    map(e => ({
      ctx: e.target.getContext('2d'),
      x: e.offsetX,
      y: e.offsetY
    })),
    pairwise()
  )
  .subscribe(pair => {
    // pos.ctx.fillRect(pos.x, pos.y, 2, 2);
    const [from, to] = pair;
    const ctx = from.ctx;

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
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
