import { C as P, a as p, b as f, c as h, h as T, d as g, o as x, k as E, l as v, g as y, n as I, m as M, p as z, u as C, i as S, e as b, f as q, r as w, q as F, s as H, w as W, v as X, t as j, j as A, z as L } from "./matrix-T0Pr0xQM.js";
const e = (t) => 100 * t / document.documentElement.clientWidth, s = (t) => 100 * t / document.documentElement.clientHeight, a = (t) => document.documentElement.clientHeight * t / 100, i = (t) => document.documentElement.clientWidth * t / 100, m = (t) => t * parseFloat(getComputedStyle(document.documentElement).fontSize), c = (t) => t / parseFloat(getComputedStyle(document.documentElement).fontSize), o = (t = 1, n = 100) => Math.floor(Math.random() * (n + 1)) + t, r = (t) => t[o(0, t.length - 1)];
function* d(t = "id-") {
  let n = 0;
  for (; ; )
    yield `${t}${++n}`;
}
export {
  P as CmpPoint,
  p as absPoint,
  f as addPoint,
  h as cmpPoint,
  T as distancePointFromLine,
  g as divPoint,
  x as hasMatrixTransform,
  E as isIdentity,
  v as lineEquation,
  y as linesDistance,
  I as matrixMultiply,
  M as mulPoint,
  z as point,
  c as pxToREM,
  s as pxToVH,
  e as pxToVW,
  o as random,
  r as randomItem,
  C as rectsIntersect,
  S as reflectPointOverLine,
  m as remToPX,
  b as rotatePoint,
  q as rotatePoints,
  w as roundPoint,
  F as snapToAngle,
  H as subPoint,
  W as svgInfo,
  X as toTransformBox,
  j as transformPoint,
  A as transformPoints,
  d as uniqueId,
  a as vhToPX,
  i as vwToPX,
  L as zeroAjsPoint
};
//# sourceMappingURL=math.js.map
