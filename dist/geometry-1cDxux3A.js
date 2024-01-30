var j = Object.defineProperty;
var I = (t, e, s) => e in t ? j(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var l = (t, e, s) => (I(t, typeof e != "symbol" ? e + "" : e, s), s), z = (t, e, s) => {
  if (!e.has(t))
    throw TypeError("Cannot " + s);
};
var v = (t, e, s) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, s);
};
var m = (t, e, s) => (z(t, e, "access private method"), s);
let g;
const T = new Uint8Array(16);
function U() {
  if (!g && (g = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !g))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return g(T);
}
const c = [];
for (let t = 0; t < 256; ++t)
  c.push((t + 256).toString(16).slice(1));
function w(t, e = 0) {
  return c[t[e + 0]] + c[t[e + 1]] + c[t[e + 2]] + c[t[e + 3]] + "-" + c[t[e + 4]] + c[t[e + 5]] + "-" + c[t[e + 6]] + c[t[e + 7]] + "-" + c[t[e + 8]] + c[t[e + 9]] + "-" + c[t[e + 10]] + c[t[e + 11]] + c[t[e + 12]] + c[t[e + 13]] + c[t[e + 14]] + c[t[e + 15]];
}
const L = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), R = {
  randomUUID: L
};
function P(t, e, s) {
  if (R.randomUUID && !e && !t)
    return R.randomUUID();
  t = t || {};
  const n = t.random || (t.rng || U)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
    s = s || 0;
    for (let a = 0; a < 16; ++a)
      e[s + a] = n[a];
    return e;
  }
  return w(n);
}
const H = (t = 1, e = 100) => Math.floor(Math.random() * (e + 1)) + t, D = (t) => t[H(0, t.length - 1)];
function* B(t = "id-") {
  let e = 0;
  for (; ; )
    yield `${t}${++e}`;
}
const _ = P.bind(void 0);
function b() {
  return arguments.length === 1 ? Array.isArray(arguments[0]) ? Object.freeze({ x: arguments[0][0], y: arguments[0][1] }) : Object.freeze({ x: arguments[0].x, y: arguments[0].y }) : Object.freeze({ x: arguments[0], y: arguments[1] });
}
const N = (t) => Object.freeze({
  x: Math.abs(t.x) < 1e-10 ? 0 : t.x,
  y: Math.abs(t.y) < 1e-10 ? 0 : t.y
});
var S = /* @__PURE__ */ ((t) => (t[t.LESS = -1] = "LESS", t[t.EQUAL = 0] = "EQUAL", t[t.MORE = 1] = "MORE", t[t.OTHER = 2] = "OTHER", t))(S || {});
const Z = (t, e) => t.x === e.x && t.y === e.y ? 0 : t.x > e.x && t.y > e.y ? 1 : t.x < e.x && t.y < e.y ? -1 : 2, Q = (t) => Object.freeze({ x: Math.round(t.x), y: Math.round(t.y) }), k = (t) => Object.freeze({ x: Math.abs(t.x), y: Math.abs(t.y) }), F = (t, e) => Object.freeze({ x: t.x + e.x, y: t.y + e.y }), W = (t, e) => Object.freeze({ x: t.x - e.x, y: t.y - e.y }), G = (t, e) => Object.freeze({ x: t.x / e.x, y: t.y / e.y }), J = (t, e) => Object.freeze({ x: t.x * e.x, y: t.y * e.y }), V = (t, e, s) => {
  const n = Math.PI / 180 * e, a = Math.cos(n), r = Math.sin(n);
  return Object.freeze({
    x: a * (t.x - s.x) + r * (t.y - s.y) + s.x,
    y: a * (t.y - s.y) - r * (t.x - s.x) + s.y
  });
}, X = (t, e, s) => t.map((n) => V(n, e, s));
/**
 * Mathematical utilities.
 * @module math
 * @license MIT
 *
 * @copyright 2010 Alexis Deveria, 2010 Jeff Schiller
 */
const d = 1e-14, Y = (t, e) => b(t.a * e.x + t.c * e.y + t.e, t.b * e.x + t.d * e.y + t.f), K = (t, e) => e.map((s) => Y(t, s)), $ = (t) => t.a === 1 && t.b === 0 && t.c === 0 && t.d === 1 && t.e === 0 && t.f === 0, C = (...t) => {
  const e = t.reduceRight((s, n) => n.multiply(s));
  return Math.abs(e.a) < d && (e.a = 0), Math.abs(e.b) < d && (e.b = 0), Math.abs(e.c) < d && (e.c = 0), Math.abs(e.d) < d && (e.d = 0), Math.abs(e.e) < d && (e.e = 0), Math.abs(e.f) < d && (e.f = 0), e;
}, p = (t) => {
  if (!t)
    return !1;
  let e = t.numberOfItems;
  for (; e--; ) {
    const s = t.getItem(e);
    if (s.type === 1 && !$(s.matrix))
      return !0;
  }
  return !1;
}, tt = (t, e, s, n) => {
  const a = Math.PI / 4, r = s - t, o = n - e, i = Math.atan2(o, r), x = Math.sqrt(r * r + o * o), y = Math.round(i / a) * a;
  return {
    x: t + x * Math.cos(y),
    y: e + x * Math.sin(y),
    a: y
  };
}, et = (t, e) => e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y, st = (t, e, s, n, a = 0, r) => {
  const o = r || b(t + s / 2, e + n / 2), [i, x, y, u] = X([
    b(t, e),
    b(t + s, e),
    b(t + s, e + n),
    b(t, e + n)
  ], -a, o), M = Math.min(i.x, x.x, u.x, y.x), E = Math.max(i.x, x.x, u.x, y.x), O = Math.min(i.y, x.y, u.y, y.y), A = Math.max(i.y, x.y, u.y, y.y);
  return {
    tl: i,
    tr: x,
    br: y,
    bl: u,
    aabox: {
      x: M,
      y: O,
      width: E - M,
      height: A - O
    }
  };
}, nt = (t, e = "*") => {
  const s = t, n = s.getBBox(), a = [n.x, n.y, n.width, n.height].join(" "), r = n.x, o = n.y, i = n.width, x = n.height, y = s.width.baseVal.value, u = s.height.baseVal.value, M = s.x.baseVal.value, E = s.y.baseVal.value;
  return {
    x: M,
    y: E,
    width: y,
    height: u,
    viewBox: a,
    vX: r,
    vY: o,
    vWidth: i,
    vHeight: x
  };
};
var h, f;
class at {
  constructor(e) {
    v(this, h);
    l(this, "x");
    l(this, "y");
    l(this, "rotate");
    l(this, "scaleX");
    l(this, "scaleY");
    l(this, "element");
    this.x = 0, this.y = 0, this.scaleX = 1, this.scaleY = 1, this.rotate = 0, this.element = e, this.element instanceof HTMLElement ? m(this, h, f).call(this, this.element.style.transform) : m(this, h, f).call(this, this.element.getAttribute("transform"));
  }
  get transform() {
    return this.element instanceof HTMLElement ? m(this, h, f).call(this, this.element.style.transform) : m(this, h, f).call(this, this.element.getAttribute("transform")), { x: this.x, y: this.y, rotate: this.rotate, scaleX: this.scaleX, scaleY: this.scaleY };
  }
  set transform(e) {
    if (typeof e == "string")
      this.element instanceof HTMLElement ? this.element.style.transform = e : this.element.setAttribute("transform", e), m(this, h, f).call(this, e);
    else {
      e = { ...this.transform, ...e };
      const { x: s, y: n, rotate: a, scaleX: r, scaleY: o } = e, i = `translate(${s},${n}) scale(${r},${o}) rotate(${a})`;
      this.element instanceof HTMLElement ? this.element.style.transform = i : this.element.setAttribute("transform", i);
    }
  }
}
h = new WeakSet(), f = function(e) {
  if (e) {
    const s = e.replace(/, /g, ",").replace(/px/g, ""), n = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(s), a = /scale\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(s), r = /rotate\(\s*([^\s,)]+)/.exec(s);
    if (n && (this.x = +n[1], this.y = +n[2]), a)
      this.scaleX = +a[1], this.scaleY = +a[2];
    else {
      const o = /scale\(\s*([^\s,)]+)/.exec(s);
      o && (this.scaleX = +o[1], this.scaleY = +o[1]);
    }
    r && (this.rotate = +r[1]);
  }
};
const ct = (t, e) => {
  const s = (e.y - t.y) / (e.x - t.x), n = t.y - s * t.x;
  return { m: s, c: n };
}, rt = (t, e) => Math.abs(e.c - t.c) / Math.sqrt(1 + t.m ** 2), ot = (t, e, s) => ((s.x - e.x) * (e.y - t.y) - (s.y - e.y) * (e.x - t.x)) / Math.sqrt((s.x - e.x) ** 2 + (s.y - e.y) ** 2), it = (t, e) => ({
  x: (e.x + t.m * (e.y - t.c)) / (1 + t.m ** 2),
  y: (t.m * e.x - e.y + 2 * t.c) / (1 + t.m ** 2)
});
export {
  D as A,
  B,
  S as C,
  at as T,
  Q as a,
  Y as b,
  Z as c,
  ot as d,
  k as e,
  F as f,
  G as g,
  V as h,
  X as i,
  rt as j,
  it as k,
  ct as l,
  J as m,
  K as n,
  $ as o,
  b as p,
  C as q,
  _ as r,
  W as s,
  st as t,
  p as u,
  tt as v,
  et as w,
  nt as x,
  H as y,
  N as z
};
//# sourceMappingURL=geometry-1cDxux3A.js.map
