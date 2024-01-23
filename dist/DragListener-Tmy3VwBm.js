var l = Object.defineProperty;
var D = (t, e, i) => e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var r = (t, e, i) => (D(t, typeof e != "symbol" ? e + "" : e, i), i), f = (t, e, i) => {
  if (!e.has(t))
    throw TypeError("Cannot " + i);
};
var s = (t, e, i) => (f(t, e, "read from private field"), i ? i.call(t) : e.get(t)), n = (t, e, i) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, i);
}, m = (t, e, i, L) => (f(t, e, "write to private field"), L ? L.call(t, i) : e.set(t, i), i);
var o, h, a, v, d, u, c, E;
class p {
  constructor(e) {
    r(this, "element");
    r(this, "active");
    r(this, "init");
    n(this, o, void 0);
    n(this, h, void 0);
    n(this, a, void 0);
    n(this, v, void 0);
    n(this, d, (e, i) => {
      this.active || (this.active = !0, this.init = i, s(this, o) && s(this, o).call(this, e, (L) => this.init = L));
    });
    n(this, u, (e) => {
      this.active && s(this, h) && s(this, h).call(this, e, this.init);
    });
    n(this, c, (e) => {
      this.active && (this.active = !1, s(this, a) && s(this, a).call(this, e, this.init));
    });
    n(this, E, (e) => {
      this.active && s(this, v) && s(this, v).call(this, e, this.init);
    });
    r(this, "removeEvent", () => {
      this.element.removeEventListener("mousedown", s(this, d)), document.removeEventListener("mousemove", s(this, u)), document.removeEventListener("mouseup", s(this, c)), document.removeEventListener("mouseleave", s(this, E));
    });
    this.active = !1, this.element = e, this.element.addEventListener("mousedown", s(this, d)), document.addEventListener("mousemove", s(this, u)), document.addEventListener("mouseup", s(this, c)), document.addEventListener("mouseleave", s(this, E));
  }
  set onDragStart(e) {
    m(this, o, e);
  }
  set onDragMove(e) {
    m(this, h, e);
  }
  set onDragEnd(e) {
    m(this, a, e);
  }
  set onDragLeave(e) {
    m(this, v, e);
  }
}
o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), v = new WeakMap(), d = new WeakMap(), u = new WeakMap(), c = new WeakMap(), E = new WeakMap();
export {
  p as D
};
//# sourceMappingURL=DragListener-Tmy3VwBm.js.map
