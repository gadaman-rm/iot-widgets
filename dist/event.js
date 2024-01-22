var D = Object.defineProperty;
var K = (i, e, s) => e in i ? D(i, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[e] = s;
var o = (i, e, s) => (K(i, typeof e != "symbol" ? e + "" : e, s), s), P = (i, e, s) => {
  if (!e.has(i))
    throw TypeError("Cannot " + s);
};
var t = (i, e, s) => (P(i, e, "read from private field"), s ? s.call(i) : e.get(i)), n = (i, e, s) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, s);
}, h = (i, e, s, w) => (P(i, e, "write to private field"), w ? w.call(i, s) : e.set(i, s), s);
import { D as M } from "./DragListener-cHBlx02M.js";
var v, a, r, m, f, l, L, E;
class b {
  constructor(e) {
    o(this, "element");
    o(this, "active");
    o(this, "init");
    n(this, v, void 0);
    n(this, a, void 0);
    n(this, r, void 0);
    n(this, m, void 0);
    n(this, f, (e, s) => {
      e.button === 1 && !this.active && (this.active = !0, this.init = s, t(this, v) && t(this, v).call(this, e, (w) => this.init = w));
    });
    n(this, l, (e) => {
      this.active && t(this, a) && t(this, a).call(this, e, this.init);
    });
    n(this, L, (e) => {
      e.button === 1 && this.active && (this.active = !1, t(this, r) && t(this, r).call(this, e, this.init));
    });
    n(this, E, (e) => {
      e.button === 1 && this.active && (this.active = !1, t(this, m) && t(this, m).call(this, e, this.init));
    });
    o(this, "removeEvent", () => {
      this.element.removeEventListener("mousedown", t(this, f)), document.removeEventListener("mousemove", t(this, l)), document.removeEventListener("mouseup", t(this, L)), document.removeEventListener("mouseleave", t(this, E));
    });
    this.active = !1, this.element = e, this.element.addEventListener("mousedown", t(this, f)), document.addEventListener("mousemove", t(this, l)), document.addEventListener("mouseup", t(this, L)), document.addEventListener("mouseleave", t(this, E));
  }
  set onPanStart(e) {
    h(this, v, e);
  }
  set onPanMove(e) {
    h(this, a, e);
  }
  set onPanEnd(e) {
    h(this, r, e);
  }
  set onPanLeave(e) {
    h(this, m, e);
  }
}
v = new WeakMap(), a = new WeakMap(), r = new WeakMap(), m = new WeakMap(), f = new WeakMap(), l = new WeakMap(), L = new WeakMap(), E = new WeakMap();
var c, y;
class S {
  constructor() {
    o(this, "active");
    n(this, c, void 0);
    n(this, y, (e) => {
      e.ctrlKey ? (e.preventDefault(), this.active = !0) : this.active = !1, this.active && t(this, c) && t(this, c).call(this, e);
    });
    o(this, "removeEvent", () => {
      document.removeEventListener("wheel", t(this, y));
    });
    this.active = !1, document.addEventListener("wheel", t(this, y));
  }
  set onZoom(e) {
    h(this, c, e);
  }
}
c = new WeakMap(), y = new WeakMap();
var d, u, k, p;
class U {
  constructor(e) {
    o(this, "keyCode");
    n(this, d, void 0);
    n(this, u, void 0);
    n(this, k, (e) => {
      e.code === this.keyCode && t(this, d) && t(this, d).call(this, e);
    });
    n(this, p, (e) => {
      e.code === this.keyCode && t(this, u) && t(this, u).call(this, e);
    });
    o(this, "removeEvent", () => {
      document.removeEventListener("keydown", t(this, k)), document.removeEventListener("keyup", t(this, p));
    });
    this.keyCode = e, document.addEventListener("keydown", t(this, k)), document.addEventListener("keyup", t(this, p));
  }
  set onKeyDown(e) {
    h(this, d, e);
  }
  set onKeyUp(e) {
    h(this, u, e);
  }
}
d = new WeakMap(), u = new WeakMap(), k = new WeakMap(), p = new WeakMap();
export {
  M as DragListener,
  U as KeyShortcatListener,
  b as PanListener,
  S as ZoomListener
};
//# sourceMappingURL=event.js.map
