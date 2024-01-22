function b() {
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
const j = (t) => Object.freeze({
  x: Math.abs(t.x) < 1e-10 ? 0 : t.x,
  y: Math.abs(t.y) < 1e-10 ? 0 : t.y
});
var m = /* @__PURE__ */ ((t) => (t[t.LESS = -1] = "LESS", t[t.EQUAL = 0] = "EQUAL", t[t.MORE = 1] = "MORE", t[t.OTHER = 2] = "OTHER", t))(m || {});
const z = (t, s) => t.x === s.x && t.y === s.y ? 0 : t.x > s.x && t.y > s.y ? 1 : t.x < s.x && t.y < s.y ? -1 : 2, R = (t) => Object.freeze({
  x: Math.round(t.x),
  y: Math.round(t.y)
}), l = (t) => Object.freeze({
  x: Math.abs(t.x),
  y: Math.abs(t.y)
}), A = (t, s) => Object.freeze({
  x: t.x + s.x,
  y: t.y + s.y
}), P = (t, s) => Object.freeze({
  x: t.x - s.x,
  y: t.y - s.y
}), w = (t, s) => Object.freeze({
  x: t.x / s.x,
  y: t.y / s.y
}), I = (t, s) => Object.freeze({
  x: t.x * s.x,
  y: t.y * s.y
}), O = (t, s, a) => {
  const e = Math.PI / 180 * s, x = Math.cos(e), n = Math.sin(e);
  return Object.freeze({
    x: x * (t.x - a.x) + n * (t.y - a.y) + a.x,
    y: x * (t.y - a.y) - n * (t.x - a.x) + a.y
  });
}, g = (t, s, a) => t.map((e) => O(e, s, a));
/**
 * Mathematical utilities.
 * @module math
 * @license MIT
 *
 * @copyright 2010 Alexis Deveria, 2010 Jeff Schiller
 */
const u = 1e-14, E = (t, s) => b(t.a * s.x + t.c * s.y + t.e, t.b * s.x + t.d * s.y + t.f), L = (t, s) => s.map((a) => E(t, a)), v = (t) => t.a === 1 && t.b === 0 && t.c === 0 && t.d === 1 && t.e === 0 && t.f === 0, q = (...t) => {
  const s = t.reduceRight((a, e) => e.multiply(a));
  return Math.abs(s.a) < u && (s.a = 0), Math.abs(s.b) < u && (s.b = 0), Math.abs(s.c) < u && (s.c = 0), Math.abs(s.d) < u && (s.d = 0), Math.abs(s.e) < u && (s.e = 0), Math.abs(s.f) < u && (s.f = 0), s;
}, T = (t) => {
  if (!t)
    return !1;
  let s = t.numberOfItems;
  for (; s--; ) {
    const a = t.getItem(s);
    if (a.type === 1 && !v(a.matrix))
      return !0;
  }
  return !1;
}, _ = (t, s, a, e) => {
  const x = Math.PI / 4, n = a - t, y = e - s, o = Math.atan2(y, n), r = Math.sqrt(n * n + y * y), c = Math.round(o / x) * x;
  return {
    x: t + r * Math.cos(c),
    y: s + r * Math.sin(c),
    a: c
  };
}, B = (t, s) => s.x < t.x + t.width && s.x + s.width > t.x && s.y < t.y + t.height && s.y + s.height > t.y, N = (t, s, a, e, x = 0, n) => {
  const y = n || b(t + a / 2, s + e / 2), [o, r, c, h] = g([b(t, s), b(t + a, s), b(t + a, s + e), b(t, s + e)], -x, y), f = Math.min(o.x, r.x, h.x, c.x), M = Math.max(o.x, r.x, h.x, c.x), i = Math.min(o.y, r.y, h.y, c.y), d = Math.max(o.y, r.y, h.y, c.y);
  return {
    tl: o,
    tr: r,
    br: c,
    bl: h,
    aabox: {
      x: f,
      y: i,
      width: M - f,
      height: d - i
    }
  };
}, S = (t, s = "*") => {
  const a = t, e = a.getBBox(), x = [e.x, e.y, e.width, e.height].join(" "), n = e.x, y = e.y, o = e.width, r = e.height, c = a.width.baseVal.value, h = a.height.baseVal.value, f = a.x.baseVal.value, M = a.y.baseVal.value;
  return {
    x: f,
    y: M,
    width: c,
    height: h,
    viewBox: x,
    vX: n,
    vY: y,
    vWidth: o,
    vHeight: r
  };
}, V = (t, s) => {
  const a = (s.y - t.y) / (s.x - t.x), e = t.y - a * t.x;
  return {
    m: a,
    c: e
  };
}, Z = (t, s) => Math.abs(s.c - t.c) / Math.sqrt(1 + t.m ** 2), H = (t, s, a) => ((a.x - s.x) * (s.y - t.y) - (a.y - s.y) * (s.x - t.x)) / Math.sqrt((a.x - s.x) ** 2 + (a.y - s.y) ** 2), Q = (t, s) => ({
  x: (s.x + t.m * (s.y - t.c)) / (1 + t.m ** 2),
  y: (t.m * s.x - s.y + 2 * t.c) / (1 + t.m ** 2)
});
export {
  m as C,
  l as a,
  A as b,
  z as c,
  H as d,
  w as e,
  O as f,
  g,
  Z as h,
  Q as i,
  E as j,
  L as k,
  V as l,
  I as m,
  v as n,
  q as o,
  b as p,
  T as q,
  R as r,
  P as s,
  N as t,
  _ as u,
  B as v,
  S as w,
  j as z
};
//# sourceMappingURL=geometry-YQ0rd1I5.js.map
