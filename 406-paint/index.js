import {
  fromEvent,
  map,
  pairwise,
  switchMap,
  takeUntil,
  withLatestFrom,
  startWith
} from 'rxjs';

const canvas = document.getElementById('canvas');
const strokeStyle = document.getElementById('strokeStyle');
const lineWidth = document.getElementById('lineWidth');

const mouseDown$ = fromEvent(canvas, 'mousedown');
const mouseMove$ = fromEvent(canvas, 'mousemove');
const mouseUp$ = fromEvent(canvas, 'mouseup');
const mouseOut$ = fromEvent(canvas, 'mouseout');

function getInputStream(element) {
  return fromEvent(element, 'input').pipe(
    map(e => e.target.value),
    startWith(element.value)
  );
}

const strokeStyle$ = getInputStream(strokeStyle);
const lineWidth$ = getInputStream(lineWidth);

mouseDown$
  .pipe(
    withLatestFrom(strokeStyle$, lineWidth$, (_, strokeStyle, lineWidth) => ({
      strokeStyle,
      lineWidth
    })),
    switchMap(options =>
      mouseMove$.pipe(
        map(e => ({
          ctx: e.target.getContext('2d'),
          options,
          x: e.offsetX,
          y: e.offsetY
        })),
        pairwise(),
        takeUntil(mouseUp$),
        takeUntil(mouseOut$)
      )
    )
  )
  .subscribe(pair => {
    const [from, to] = pair;
    const ctx = from.ctx;

    const options = from.options;

    ctx.strokeStyle = options.strokeStyle;
    ctx.lineWidth = options.lineWidth;

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
