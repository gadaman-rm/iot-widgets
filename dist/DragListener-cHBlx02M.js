var L = Object.defineProperty;
var D = (t, e, i) => e in t ? L(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var r = (t, e, i) => (D(t, typeof e != "symbol" ? e + "" : e, i), i), E = (t, e, i) => {
  if (!e.has(t))
    throw TypeError("Cannot " + i);
};
var s = (t, e, i) => (E(t, e, "read from private field"), i ? i.call(t) : e.get(t)), n = (t, e, i) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, i);
}, m = (t, e, i, l) => (E(t, e, "write to private field"), l ? l.call(t, i) : e.set(t, i), i);
var o, h, a, v, d, c, u, f;
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
      this.active || (this.active = !0, this.init = i, s(this, o) && s(this, o).call(this, e, (l) => this.init = l));
    });
    n(this, c, (e) => {
      this.active && s(this, h) && s(this, h).call(this, e, this.init);
    });
    n(this, u, (e) => {
      this.active && (this.active = !1, s(this, a) && s(this, a).call(this, e, this.init));
    });
    n(this, f, (e) => {
      this.active && (this.active = !1, s(this, v) && s(this, v).call(this, e, this.init));
    });
    r(this, "removeEvent", () => {
      this.element.removeEventListener("mousedown", s(this, d)), document.removeEventListener("mousemove", s(this, c)), document.removeEventListener("mouseup", s(this, u)), document.removeEventListener("mouseleave", s(this, f));
    });
    this.active = !1, this.element = e, this.element.addEventListener("mousedown", s(this, d)), document.addEventListener("mousemove", s(this, c)), document.addEventListener("mouseup", s(this, u)), document.addEventListener("mouseleave", s(this, f));
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
o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), v = new WeakMap(), d = new WeakMap(), c = new WeakMap(), u = new WeakMap(), f = new WeakMap();
export {
  p as D
};
//# sourceMappingURL=DragListener-cHBlx02M.js.map
