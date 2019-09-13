/**
 * Copyright 2017, Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 *
 * Usage:
 * {{navi-visualizations/bar-chart
 *   model=model
 *   options=options
 * }}
 */

import { next } from '@ember/runloop';
import Chart from './bar-chart';
import { toPng } from 'dom-to-image';
import { transform } from 'legofy';

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
    const bar = svg.querySelector('.c3-chart-bars');
    bar.setAttribute('style', 'visibility:hidden;');
    const c = svg.querySelector('.c3 svg')
    c.setAttribute('style', 'background:transparent;');

    this.element.appendChild(svg);
  });
}

export default Chart.extend({
  tagName: 'div',

  classNames: ['lego-bar-chart-widget'],

  didRender() {
    this._super(...arguments);
    next(() => legoify.apply(this));
  }
});
