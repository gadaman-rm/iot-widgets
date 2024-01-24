var I = Object.defineProperty;
var z = (t, s, e) => s in t ? I(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var u = (t, s, e) => (z(t, typeof s != "symbol" ? s + "" : s, e), e), U = (t, s, e) => {
  if (!s.has(t))
    throw TypeError("Cannot " + e);
};
var E = (t, s, e) => {
  if (s.has(t))
    throw TypeError("Cannot add the same private member more than once");
  s instanceof WeakSet ? s.add(t) : s.set(t, e);
};
var M = (t, s, e) => (U(t, s, "access private method"), e);
let g;
const w = new Uint8Array(16);
function A() {
  if (!g && (g = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !g))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return g(w);
}
const c = [];
for (let t = 0; t < 256; ++t)
  c.push((t + 256).toString(16).slice(1));
function P(t, s = 0) {
  return c[t[s + 0]] + c[t[s + 1]] + c[t[s + 2]] + c[t[s + 3]] + "-" + c[t[s + 4]] + c[t[s + 5]] + "-" + c[t[s + 6]] + c[t[s + 7]] + "-" + c[t[s + 8]] + c[t[s + 9]] + "-" + c[t[s + 10]] + c[t[s + 11]] + c[t[s + 12]] + c[t[s + 13]] + c[t[s + 14]] + c[t[s + 15]];
}
const T = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), R = {
  randomUUID: T
};
function V(t, s, e) {
  if (R.randomUUID && !s && !t)
    return R.randomUUID();
  t = t || {};
  const n = t.random || (t.rng || A)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, s) {
    e = e || 0;
    for (let a = 0; a < 16; ++a)
      s[e + a] = n[a];
    return s;
  }
  return P(n);
}
const S = (t = 1, s = 100) => Math.floor(Math.random() * (s + 1)) + t, _ = (t) => t[S(0, t.length - 1)];
function* H(t = "id-") {
  let s = 0;
  for (; ; )
    yield `${t}${++s}`;
}
const N = V.bind(void 0);
function l() {
  return arguments.length === 1 ? Array.isArray(arguments[0]) ? Object.freeze({ x: arguments[0][0], y: arguments[0][1] }) : Object.freeze({ x: arguments[0].x, y: arguments[0].y }) : Object.freeze({ x: arguments[0], y: arguments[1] });
}
const Z = (t) => Object.freeze({
  x: Math.abs(t.x) < 1e-10 ? 0 : t.x,
  y: Math.abs(t.y) < 1e-10 ? 0 : t.y
});
var X = /* @__PURE__ */ ((t) => (t[t.LESS = -1] = "LESS", t[t.EQUAL = 0] = "EQUAL", t[t.MORE = 1] = "MORE", t[t.OTHER = 2] = "OTHER", t))(X || {});
const Q = (t, s) => t.x === s.x && t.y === s.y ? 0 : t.x > s.x && t.y > s.y ? 1 : t.x < s.x && t.y < s.y ? -1 : 2, $ = (t) => Object.freeze({ x: Math.round(t.x), y: Math.round(t.y) }), k = (t) => Object.freeze({ x: Math.abs(t.x), y: Math.abs(t.y) }), F = (t, s) => Object.freeze({ x: t.x + s.x, y: t.y + s.y }), W = (t, s) => Object.freeze({ x: t.x - s.x, y: t.y - s.y }), G = (t, s) => Object.freeze({ x: t.x / s.x, y: t.y / s.y }), J = (t, s) => Object.freeze({ x: t.x * s.x, y: t.y * s.y }), Y = (t, s, e) => {
  const n = Math.PI / 180 * s, a = Math.cos(n), r = Math.sin(n);
  return Object.freeze({
    x: a * (t.x - e.x) + r * (t.y - e.y) + e.x,
    y: a * (t.y - e.y) - r * (t.x - e.x) + e.y
  });
}, q = (t, s, e) => t.map((n) => Y(n, s, e));
/**
 * Mathematical utilities.
 * @module math
 * @license MIT
 *
 * @copyright 2010 Alexis Deveria, 2010 Jeff Schiller
 */
const d = 1e-14, D = (t, s) => l(t.a * s.x + t.c * s.y + t.e, t.b * s.x + t.d * s.y + t.f), K = (t, s) => s.map((e) => D(t, e)), L = (t) => t.a === 1 && t.b === 0 && t.c === 0 && t.d === 1 && t.e === 0 && t.f === 0, C = (...t) => {
  const s = t.reduceRight((e, n) => n.multiply(e));
  return Math.abs(s.a) < d && (s.a = 0), Math.abs(s.b) < d && (s.b = 0), Math.abs(s.c) < d && (s.c = 0), Math.abs(s.d) < d && (s.d = 0), Math.abs(s.e) < d && (s.e = 0), Math.abs(s.f) < d && (s.f = 0), s;
}, p = (t) => {
  if (!t)
    return !1;
  let s = t.numberOfItems;
  for (; s--; ) {
    const e = t.getItem(s);
    if (e.type === 1 && !L(e.matrix))
      return !0;
  }
  return !1;
}, tt = (t, s, e, n) => {
  const a = Math.PI / 4, r = e - t, o = n - s, i = Math.atan2(o, r), y = Math.sqrt(r * r + o * o), x = Math.round(i / a) * a;
  return {
    x: t + y * Math.cos(x),
    y: s + y * Math.sin(x),
    a: x
  };
}, st = (t, s) => s.x < t.x + t.width && s.x + s.width > t.x && s.y < t.y + t.height && s.y + s.height > t.y, et = (t, s, e, n, a = 0, r) => {
  const o = r || l(t + e / 2, s + n / 2), [i, y, x, h] = q([
    l(t, s),
    l(t + e, s),
    l(t + e, s + n),
    l(t, s + n)
  ], -a, o), b = Math.min(i.x, y.x, h.x, x.x), O = Math.max(i.x, y.x, h.x, x.x), v = Math.min(i.y, y.y, h.y, x.y), j = Math.max(i.y, y.y, h.y, x.y);
  return {
    tl: i,
    tr: y,
    br: x,
    bl: h,
    aabox: {
      x: b,
      y: v,
      width: O - b,
      height: j - v
    }
  };
}, nt = (t, s = "*") => {
  const e = t, n = e.getBBox(), a = [n.x, n.y, n.width, n.height].join(" "), r = n.x, o = n.y, i = n.width, y = n.height, x = e.width.baseVal.value, h = e.height.baseVal.value, b = e.x.baseVal.value, O = e.y.baseVal.value;
  return {
    x: b,
    y: O,
    width: x,
    height: h,
    viewBox: a,
    vX: r,
    vY: o,
    vWidth: i,
    vHeight: y
  };
};
var m, f;
class at {
  constructor(s) {
    E(this, m);
    u(this, "x");
    u(this, "y");
    u(this, "rotate");
    u(this, "scaleX");
    u(this, "scaleY");
    u(this, "element");
    this.x = 0, this.y = 0, this.scaleX = 1, this.scaleY = 1, this.rotate = 0, this.element = s, M(this, m, f).call(this, this.element.style.transform);
  }
  get transform() {
    return M(this, m, f).call(this, this.element.style.transform), { x: this.x, y: this.y, rotate: this.rotate, scaleX: this.scaleX, scaleY: this.scaleY };
  }
  set transform(s) {
    M(this, m, f).call(this, s);
  }
}
m = new WeakSet(), f = function(s) {
  if (s) {
    const e = s.replace(/, /g, ",").replace(/px/g, ""), n = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(e), a = /scale\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(e), r = /rotate\(\s*([^\s,)]+)/.exec(e);
    if (n && (this.x = +n[1], this.y = +n[2]), a)
      this.scaleX = +a[1], this.scaleY = +a[2];
    else {
      const o = /scale\(\s*([^\s,)]+)/.exec(e);
      o && (this.scaleX = +o[1], this.scaleY = +o[1]);
    }
    r && (this.rotate = +r[1]);
  }
};
const ct = (t, s) => {
  const e = (s.y - t.y) / (s.x - t.x), n = t.y - e * t.x;
  return { m: e, c: n };
}, rt = (t, s) => Math.abs(s.c - t.c) / Math.sqrt(1 + t.m ** 2), ot = (t, s, e) => ((e.x - s.x) * (s.y - t.y) - (e.y - s.y) * (s.x - t.x)) / Math.sqrt((e.x - s.x) ** 2 + (e.y - s.y) ** 2), xt = (t, s) => ({
  x: (s.x + t.m * (s.y - t.c)) / (1 + t.m ** 2),
  y: (t.m * s.x - s.y + 2 * t.c) / (1 + t.m ** 2)
});
export {
  _ as A,
  H as B,
  X as C,
  at as T,
  $ as a,
  k as b,
  Q as c,
  ot as d,
  F as e,
  G as f,
  Y as g,
  q as h,
  rt as i,
  xt as j,
  D as k,
  ct as l,
  J as m,
  K as n,
  L as o,
  l as p,
  C as q,
  N as r,
  W as s,
  et as t,
  p as u,
  tt as v,
  st as w,
  nt as x,
  S as y,
  Z as z
};
//# sourceMappingURL=geometry-kGtUCHEa.js.map
