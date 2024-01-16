var f = Object.defineProperty;
var g = (e, t, i) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var a = (e, t, i) => (g(e, typeof t != "symbol" ? t + "" : t, i), i), E = (e, t, i) => {
  if (!t.has(e))
    throw TypeError("Cannot " + i);
};
var s = (e, t, i) => (E(e, t, "read from private field"), i ? i.call(e) : t.get(e)), n = (e, t, i) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, i);
}, c = (e, t, i, u) => (E(e, t, "write to private field"), u ? u.call(e, i) : t.set(e, i), i);
var o, h, r, v, m, d;
class D {
  constructor(t) {
    a(this, "element");
    a(this, "active");
    a(this, "init");
    n(this, o, void 0);
    n(this, h, void 0);
    n(this, r, void 0);
    n(this, v, (t, i) => {
      this.active = !0, this.init = i, s(this, o) && s(this, o).call(this, t, (u) => this.init = u);
    });
    n(this, m, (t) => {
      this.active && s(this, h) && s(this, h).call(this, t, this.init);
    });
    n(this, d, (t) => {
      this.active && (this.active = !1, s(this, r) && s(this, r).call(this, t, this.init));
    });
    a(this, "removeEvent", () => {
      this.element.removeEventListener("mousedown", s(this, v)), document.removeEventListener("mousemove", s(this, m)), document.removeEventListener("mouseup", s(this, d));
    });
    this.active = !1, this.element = t, this.element.addEventListener("mousedown", s(this, v)), document.addEventListener("mousemove", s(this, m)), document.addEventListener("mouseup", s(this, d));
  }
  set onDragStart(t) {
    c(this, o, t);
  }
  set onDragMove(t) {
    c(this, h, t);
  }
  set onDragEnd(t) {
    c(this, r, t);
  }
}
o = new WeakMap(), h = new WeakMap(), r = new WeakMap(), v = new WeakMap(), m = new WeakMap(), d = new WeakMap();
export {
  D as DragListener
};
//# sourceMappingURL=event.js.map
