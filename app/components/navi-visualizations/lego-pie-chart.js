import { next, } from '@ember/runloop';
import Chart from './pie-chart';
import { transform } from 'legofy';
import { toPng } from 'dom-to-image';

function legoify() {
  const svg = document.querySelector(`.navi-vis-c3-chart`).cloneNode(true);
  const chart = document.querySelector(`.navi-vis-c3-chart`);

  const lines = document.querySelectorAll(`.c3-axis`);
  [...lines].forEach(e => e.parentElement.removeChild(e));
  const items = document.querySelectorAll(`.c3-legend-item`);
  [...items].forEach(e => e.parentElement.removeChild(e));

  toPng(chart).then((dataUrl) => {
    const img = new Image();
    img.src = dataUrl;
    img.setAttribute('style', 'position: absolute; display:block;top:-10px;height:100%');

    this.element.appendChild(img);
    transform(img);

    svg.setAttribute('style', 'background:transparent;top:0px;position:absolute');
    const arcs = svg.querySelector('.c3-chart-arcs');
    arcs.setAttribute('style', 'visibility:hidden;');
    const c3 = svg.querySelector('.c3 svg')
    c3.setAttribute('style', 'background:transparent;');

    this.element.appendChild(svg);
  });
}

export default Chart.extend({
  tagName: 'div',

  classNames: ['lego-pie-chart-widget'],

  didRender() {
    this._super(...arguments);
    next(() => legoify.apply(this));
  }
});
