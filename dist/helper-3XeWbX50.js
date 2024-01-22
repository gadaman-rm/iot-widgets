let u;
const r = new Uint8Array(16);
function m() {
  if (!u && (u = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !u))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return u(r);
}
const d = [];
for (let n = 0; n < 256; ++n)
  d.push((n + 256).toString(16).slice(1));
function a(n, t = 0) {
  return d[n[t + 0]] + d[n[t + 1]] + d[n[t + 2]] + d[n[t + 3]] + "-" + d[n[t + 4]] + d[n[t + 5]] + "-" + d[n[t + 6]] + d[n[t + 7]] + "-" + d[n[t + 8]] + d[n[t + 9]] + "-" + d[n[t + 10]] + d[n[t + 11]] + d[n[t + 12]] + d[n[t + 13]] + d[n[t + 14]] + d[n[t + 15]];
}
const y = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), c = {
  randomUUID: y
};
function p(n, t, i) {
  if (c.randomUUID && !t && !n)
    return c.randomUUID();
  n = n || {};
  const o = n.random || (n.rng || m)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    i = i || 0;
    for (let e = 0; e < 16; ++e)
      t[i + e] = o[e];
    return t;
  }
  return a(o);
}
const l = (n = 1, t = 100) => Math.floor(Math.random() * (t + 1)) + n, g = (n) => n[l(0, n.length - 1)];
function* U(n = "id-") {
  let t = 0;
  for (; ; )
    yield `${n}${++t}`;
}
const h = p.bind(void 0);
export {
  l as a,
  g as b,
  h as r,
  U as u
};
//# sourceMappingURL=helper-3XeWbX50.js.map
