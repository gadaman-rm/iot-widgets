var j = Object.defineProperty;
var I = (t, e, s) => e in t ? j(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var u = (t, e, s) => (I(t, typeof e != "symbol" ? e + "" : e, s), s), z = (t, e, s) => {
  if (!e.has(t))
    throw TypeError("Cannot " + s);
};
var v = (t, e, s) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, s);
};
var m = (t, e, s) => (z(t, e, "access private method"), s);
let M;
const T = new Uint8Array(16);
function U() {
  if (!M && (M = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !M))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return M(T);
}
const r = [];
for (let t = 0; t < 256; ++t)
  r.push((t + 256).toString(16).slice(1));
function w(t, e = 0) {
  return r[t[e + 0]] + r[t[e + 1]] + r[t[e + 2]] + r[t[e + 3]] + "-" + r[t[e + 4]] + r[t[e + 5]] + "-" + r[t[e + 6]] + r[t[e + 7]] + "-" + r[t[e + 8]] + r[t[e + 9]] + "-" + r[t[e + 10]] + r[t[e + 11]] + r[t[e + 12]] + r[t[e + 13]] + r[t[e + 14]] + r[t[e + 15]];
}
const $ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), R = {
  randomUUID: $
};
function L(t, e, s) {
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
const P = (t = 1, e = 100) => Math.floor(Math.random() * (e + 1)) + t, D = (t) => t[P(0, t.length - 1)];
function* B(t = "id-") {
  let e = 0;
  for (; ; )
    yield `${t}${++e}`;
}
const _ = L.bind(void 0);
function b() {
  return arguments.length === 1 ? Array.isArray(arguments[0]) ? Object.freeze({ x: arguments[0][0], y: arguments[0][1] }) : Object.freeze({ x: arguments[0].x, y: arguments[0].y }) : Object.freeze({ x: arguments[0], y: arguments[1] });
}
const N = (t) => Object.freeze({
  x: Math.abs(t.x) < 1e-10 ? 0 : t.x,
  y: Math.abs(t.y) < 1e-10 ? 0 : t.y
});
var S = /* @__PURE__ */ ((t) => (t[t.LESS = -1] = "LESS", t[t.EQUAL = 0] = "EQUAL", t[t.MORE = 1] = "MORE", t[t.OTHER = 2] = "OTHER", t))(S || {});
const Z = (t, e) => t.x === e.x && t.y === e.y ? 0 : t.x > e.x && t.y > e.y ? 1 : t.x < e.x && t.y < e.y ? -1 : 2, Q = (t) => Object.freeze({ x: Math.round(t.x), y: Math.round(t.y) }), k = (t) => Object.freeze({ x: Math.abs(t.x), y: Math.abs(t.y) }), F = (t, e) => Object.freeze({ x: t.x + e.x, y: t.y + e.y }), W = (t, e) => Object.freeze({ x: t.x - e.x, y: t.y - e.y }), G = (t, e) => Object.freeze({ x: t.x / e.x, y: t.y / e.y }), J = (t, e) => Object.freeze({ x: t.x * e.x, y: t.y * e.y }), H = (t, e, s) => {
  const n = Math.PI / 180 * e, a = Math.cos(n), c = Math.sin(n);
  return Object.freeze({
    x: a * (t.x - s.x) + c * (t.y - s.y) + s.x,
    y: a * (t.y - s.y) - c * (t.x - s.x) + s.y
  });
}, V = (t, e, s) => t.map((n) => H(n, e, s));
/**
 * Mathematical utilities.
 * @module math
 * @license MIT
 *
 * @copyright 2010 Alexis Deveria, 2010 Jeff Schiller
 */
const d = 1e-14, X = (t, e) => b(t.a * e.x + t.c * e.y + t.e, t.b * e.x + t.d * e.y + t.f), K = (t, e) => e.map((s) => X(t, s)), Y = (t) => t.a === 1 && t.b === 0 && t.c === 0 && t.d === 1 && t.e === 0 && t.f === 0, C = (...t) => {
  const e = t.reduceRight((s, n) => n.multiply(s));
  return Math.abs(e.a) < d && (e.a = 0), Math.abs(e.b) < d && (e.b = 0), Math.abs(e.c) < d && (e.c = 0), Math.abs(e.d) < d && (e.d = 0), Math.abs(e.e) < d && (e.e = 0), Math.abs(e.f) < d && (e.f = 0), e;
}, p = (t) => {
  if (!t)
    return !1;
  let e = t.numberOfItems;
  for (; e--; ) {
    const s = t.getItem(e);
    if (s.type === 1 && !Y(s.matrix))
      return !0;
  }
  return !1;
}, tt = (t, e, s, n) => {
  const a = Math.PI / 4, c = s - t, o = n - e, i = Math.atan2(o, c), y = Math.sqrt(c * c + o * o), x = Math.round(i / a) * a;
  return {
    x: t + y * Math.cos(x),
    y: e + y * Math.sin(x),
    a: x
  };
}, et = (t, e) => e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y, st = (t, e, s, n, a = 0, c) => {
  const o = c || b(t + s / 2, e + n / 2), [i, y, x, l] = V([
    b(t, e),
    b(t + s, e),
    b(t + s, e + n),
    b(t, e + n)
  ], -a, o), g = Math.min(i.x, y.x, l.x, x.x), E = Math.max(i.x, y.x, l.x, x.x), O = Math.min(i.y, y.y, l.y, x.y), A = Math.max(i.y, y.y, l.y, x.y);
  return {
    tl: i,
    tr: y,
    br: x,
    bl: l,
    aabox: {
      x: g,
      y: O,
      width: E - g,
      height: A - O
    }
  };
}, nt = (t, e = "*") => {
  const s = t, n = s.getBBox(), a = [n.x, n.y, n.width, n.height].join(" "), c = n.x, o = n.y, i = n.width, y = n.height, x = s.width.baseVal.value, l = s.height.baseVal.value, g = s.x.baseVal.value, E = s.y.baseVal.value;
  return {
    x: g,
    y: E,
    width: x,
    height: l,
    viewBox: a,
    vX: c,
    vY: o,
    vWidth: i,
    vHeight: y
  };
};
var h, f;
class at {
  constructor(e, s = 0, n = 0, a = 1, c = 1, o = 0) {
    v(this, h);
    u(this, "x");
    u(this, "y");
    u(this, "rotate");
    u(this, "scaleX");
    u(this, "scaleY");
    u(this, "element");
    this.x = s, this.y = n, this.scaleX = a, this.scaleY = c, this.rotate = o, this.element = e, this.element instanceof HTMLElement ? m(this, h, f).call(this, this.element.style.transform) : m(this, h, f).call(this, this.element.getAttribute("transform"));
  }
  get transform() {
    return this.element instanceof HTMLElement ? m(this, h, f).call(this, this.element.style.transform) : m(this, h, f).call(this, this.element.getAttribute("transform")), { x: this.x, y: this.y, rotate: this.rotate, scaleX: this.scaleX, scaleY: this.scaleY };
  }
  set transform(e) {
    if (typeof e == "string")
      this.element instanceof HTMLElement ? this.element.style.transform = e : this.element.setAttribute("transform", e), m(this, h, f).call(this, e);
    else {
      e = { ...this.transform, ...e };
      const { x: s, y: n, rotate: a, scaleX: c, scaleY: o } = e;
      if (this.element instanceof HTMLElement) {
        const i = `translate(${s}px, ${n}px) scale(${c}, ${o}) rotate(${a}deg)`;
        this.element.style.transform = i;
      } else {
        const i = `translate(${s},${n}) scale(${c},${o}) rotate(${a})`;
        this.element.setAttribute("transform", i);
      }
    }
  }
}
h = new WeakSet(), f = function(e) {
  if (e) {
    const s = e.replace(/, /g, ",").replace(/px/g, "").replace(/deg/g, ""), n = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(s), a = /scale\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(s), c = /rotate\(\s*([^\s,)]+)/.exec(s);
    if (n && (this.x = +n[1], this.y = +n[2]), a)
      this.scaleX = +a[1], this.scaleY = +a[2];
    else {
      const o = /scale\(\s*([^\s,)]+)/.exec(s);
      o && (this.scaleX = +o[1], this.scaleY = +o[1]);
    }
    c && (this.rotate = +c[1]);
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
  k as b,
  Z as c,
  ot as d,
  F as e,
  G as f,
  H as g,
  V as h,
  rt as i,
  it as j,
  X as k,
  ct as l,
  J as m,
  K as n,
  Y as o,
  b as p,
  C as q,
  _ as r,
  W as s,
  st as t,
  p as u,
  tt as v,
  et as w,
  nt as x,
  P as y,
  N as z
};
//# sourceMappingURL=geometry-b-r7Kz0v.js.map
