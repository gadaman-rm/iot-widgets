var D = Object.defineProperty;
var g = (s, t, i) => t in s ? D(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i;
var d = (s, t, i) => (g(s, typeof t != "symbol" ? t + "" : t, i), i), l = (s, t, i) => {
  if (!t.has(s))
    throw TypeError("Cannot " + i);
};
var e = (s, t, i) => (l(s, t, "read from private field"), i ? i.call(s) : t.get(s)), n = (s, t, i) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, i);
}, a = (s, t, i, f) => (l(s, t, "write to private field"), f ? f.call(s, i) : t.set(s, i), i);
var h, o, v, r, m, u, c, E, L;
class w {
  constructor(t, i) {
    n(this, h, void 0);
    d(this, "element");
    d(this, "active");
    d(this, "init");
    n(this, o, void 0);
    n(this, v, void 0);
    n(this, r, void 0);
    n(this, m, void 0);
    n(this, u, (t) => {
      this.active || (this.active = !0, e(this, o) && e(this, o).call(this, t, (i) => this.init = i));
    });
    n(this, c, (t) => {
      this.active && e(this, v) && e(this, v).call(this, t, this.init);
    });
    n(this, E, (t) => {
      this.active && (this.active = !1, e(this, r) && e(this, r).call(this, t, this.init));
    });
    n(this, L, (t) => {
      this.active && e(this, m) && e(this, m).call(this, t, this.init);
    });
    d(this, "removeEvent", () => {
      this.element.removeEventListener("mousedown", e(this, u)), e(this, h).removeEventListener("mousemove", e(this, c)), e(this, h).removeEventListener("mouseup", e(this, E)), e(this, h).removeEventListener("mouseleave", e(this, L));
    });
    this.active = !1, this.element = t, a(this, h, i || document), this.element.addEventListener("mousedown", e(this, u)), e(this, h).addEventListener("mousemove", e(this, c)), e(this, h).addEventListener("mouseup", e(this, E)), e(this, h).addEventListener("mouseleave", e(this, L));
  }
  set onDragStart(t) {
    a(this, o, t);
  }
  set onDragMove(t) {
    a(this, v, t);
  }
  set onDragEnd(t) {
    a(this, r, t);
  }
  set onDragLeave(t) {
    a(this, m, t);
  }
}
h = new WeakMap(), o = new WeakMap(), v = new WeakMap(), r = new WeakMap(), m = new WeakMap(), u = new WeakMap(), c = new WeakMap(), E = new WeakMap(), L = new WeakMap();
export {
  w as D
};
//# sourceMappingURL=DragListener-vcHOWT3z.js.map
