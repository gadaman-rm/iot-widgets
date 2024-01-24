var v = Object.defineProperty;
var j = (t, s, e) => s in t ? v(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var i = (t, s, e) => (j(t, typeof s != "symbol" ? s + "" : s, e), e), z = (t, s, e) => {
  if (!s.has(t))
    throw TypeError("Cannot " + e);
};
var O = (t, s, e) => {
  if (s.has(t))
    throw TypeError("Cannot add the same private member more than once");
  s instanceof WeakSet ? s.add(t) : s.set(t, e);
};
var m = (t, s, e) => (z(t, s, "access private method"), e);
function f() {
  return arguments.length === 1 ? Array.isArray(arguments[0]) ? Object.freeze({
    x: arguments[0][0],
    y: arguments[0][1]
  }) : Object.freeze({
    x: arguments[0].x,
    y: arguments[0].y
  }) : Object.freeze({
    x: arguments[0],
    y: arguments[1]
  });
}
const X = (t) => Object.freeze({
  x: Math.abs(t.x) < 1e-10 ? 0 : t.x,
  y: Math.abs(t.y) < 1e-10 ? 0 : t.y
});
var R = /* @__PURE__ */ ((t) => (t[t.LESS = -1] = "LESS", t[t.EQUAL = 0] = "EQUAL", t[t.MORE = 1] = "MORE", t[t.OTHER = 2] = "OTHER", t))(R || {});
const Y = (t, s) => t.x === s.x && t.y === s.y ? 0 : t.x > s.x && t.y > s.y ? 1 : t.x < s.x && t.y < s.y ? -1 : 2, L = (t) => Object.freeze({
  x: Math.round(t.x),
  y: Math.round(t.y)
}), q = (t) => Object.freeze({
  x: Math.abs(t.x),
  y: Math.abs(t.y)
}), _ = (t, s) => Object.freeze({
  x: t.x + s.x,
  y: t.y + s.y
}), B = (t, s) => Object.freeze({
  x: t.x - s.x,
  y: t.y - s.y
}), N = (t, s) => Object.freeze({
  x: t.x / s.x,
  y: t.y / s.y
}), S = (t, s) => Object.freeze({
  x: t.x * s.x,
  y: t.y * s.y
}), A = (t, s, e) => {
  const a = Math.PI / 180 * s, c = Math.cos(a), n = Math.sin(a);
  return Object.freeze({
    x: c * (t.x - e.x) + n * (t.y - e.y) + e.x,
    y: c * (t.y - e.y) - n * (t.x - e.x) + e.y
  });
}, P = (t, s, e) => t.map((a) => A(a, s, e));
/**
 * Mathematical utilities.
 * @module math
 * @license MIT
 *
 * @copyright 2010 Alexis Deveria, 2010 Jeff Schiller
 */
const u = 1e-14, w = (t, s) => f(t.a * s.x + t.c * s.y + t.e, t.b * s.x + t.d * s.y + t.f), V = (t, s) => s.map((e) => w(t, e)), T = (t) => t.a === 1 && t.b === 0 && t.c === 0 && t.d === 1 && t.e === 0 && t.f === 0, Z = (...t) => {
  const s = t.reduceRight((e, a) => a.multiply(e));
  return Math.abs(s.a) < u && (s.a = 0), Math.abs(s.b) < u && (s.b = 0), Math.abs(s.c) < u && (s.c = 0), Math.abs(s.d) < u && (s.d = 0), Math.abs(s.e) < u && (s.e = 0), Math.abs(s.f) < u && (s.f = 0), s;
}, H = (t) => {
  if (!t)
    return !1;
  let s = t.numberOfItems;
  for (; s--; ) {
    const e = t.getItem(s);
    if (e.type === 1 && !T(e.matrix))
      return !0;
  }
  return !1;
}, Q = (t, s, e, a) => {
  const c = Math.PI / 4, n = e - t, r = a - s, y = Math.atan2(r, n), x = Math.sqrt(n * n + r * r), o = Math.round(y / c) * c;
  return {
    x: t + x * Math.cos(o),
    y: s + x * Math.sin(o),
    a: o
  };
}, U = (t, s) => s.x < t.x + t.width && s.x + s.width > t.x && s.y < t.y + t.height && s.y + s.height > t.y, k = (t, s, e, a, c = 0, n) => {
  const r = n || f(t + e / 2, s + a / 2), [y, x, o, h] = P([f(t, s), f(t + e, s), f(t + e, s + a), f(t, s + a)], -c, r), b = Math.min(y.x, x.x, h.x, o.x), d = Math.max(y.x, x.x, h.x, o.x), g = Math.min(y.y, x.y, h.y, o.y), E = Math.max(y.y, x.y, h.y, o.y);
  return {
    tl: y,
    tr: x,
    br: o,
    bl: h,
    aabox: {
      x: b,
      y: g,
      width: d - b,
      height: E - g
    }
  };
}, D = (t, s = "*") => {
  const e = t, a = e.getBBox(), c = [a.x, a.y, a.width, a.height].join(" "), n = a.x, r = a.y, y = a.width, x = a.height, o = e.width.baseVal.value, h = e.height.baseVal.value, b = e.x.baseVal.value, d = e.y.baseVal.value;
  return {
    x: b,
    y: d,
    width: o,
    height: h,
    viewBox: c,
    vX: n,
    vY: r,
    vWidth: y,
    vHeight: x
  };
};
var l, M;
class F {
  constructor(s) {
    O(this, l);
    i(this, "x");
    i(this, "y");
    i(this, "rotate");
    i(this, "scaleX");
    i(this, "scaleY");
    i(this, "element");
    this.x = 0, this.y = 0, this.scaleX = 1, this.scaleY = 1, this.rotate = 0, this.element = s, m(this, l, M).call(this, this.element.style.transform);
  }
  get transform() {
    return m(this, l, M).call(this, this.element.style.transform), {
      x: this.x,
      y: this.y,
      rotate: this.rotate,
      scaleX: this.scaleX,
      scaleY: this.scaleY
    };
  }
  set transform(s) {
    m(this, l, M).call(this, s);
  }
}
l = new WeakSet(), M = function(s) {
  if (s) {
    const e = s.replace(/, /g, ",").replace(/px/g, ""), a = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(e), c = /scale\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(e), n = /rotate\(\s*([^\s,)]+)/.exec(e);
    if (a && (this.x = +a[1], this.y = +a[2]), c)
      this.scaleX = +c[1], this.scaleY = +c[2];
    else {
      const r = /scale\(\s*([^\s,)]+)/.exec(e);
      r && (this.scaleX = +r[1], this.scaleY = +r[1]);
    }
    n && (this.rotate = +n[1]);
  }
};
const W = (t, s) => {
  const e = (s.y - t.y) / (s.x - t.x), a = t.y - e * t.x;
  return {
    m: e,
    c: a
  };
}, G = (t, s) => Math.abs(s.c - t.c) / Math.sqrt(1 + t.m ** 2), J = (t, s, e) => ((e.x - s.x) * (s.y - t.y) - (e.y - s.y) * (s.x - t.x)) / Math.sqrt((e.x - s.x) ** 2 + (e.y - s.y) ** 2), K = (t, s) => ({
  x: (s.x + t.m * (s.y - t.c)) / (1 + t.m ** 2),
  y: (t.m * s.x - s.y + 2 * t.c) / (1 + t.m ** 2)
});
export {
  R as C,
  F as T,
  q as a,
  _ as b,
  Y as c,
  J as d,
  N as e,
  A as f,
  P as g,
  G as h,
  K as i,
  w as j,
  V as k,
  W as l,
  S as m,
  T as n,
  Z as o,
  f as p,
  H as q,
  L as r,
  B as s,
  k as t,
  Q as u,
  U as v,
  D as w,
  X as z
};
//# sourceMappingURL=geometry-H6G3_PsD.js.map
