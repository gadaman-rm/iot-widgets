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
import { D as M } from "./DragListener-Tmy3VwBm.js";
var v, a, r, d, f, L, E, l;
class b {
  constructor() {
    o(this, "active");
    o(this, "init");
    n(this, v, void 0);
    n(this, a, void 0);
    n(this, r, void 0);
    n(this, d, void 0);
    n(this, f, (e, s) => {
      e.button === 1 && !this.active && (this.active = !0, this.init = s, t(this, v) && t(this, v).call(this, e, (w) => this.init = w));
    });
    n(this, L, (e) => {
      this.active && t(this, a) && t(this, a).call(this, e, this.init);
    });
    n(this, E, (e) => {
      e.button === 1 && this.active && (this.active = !1, t(this, r) && t(this, r).call(this, e, this.init));
    });
    n(this, l, (e) => {
      e.button === 1 && this.active && t(this, d) && t(this, d).call(this, e, this.init);
    });
    o(this, "removeEvent", () => {
      document.removeEventListener("mousedown", t(this, f)), document.removeEventListener("mousemove", t(this, L)), document.removeEventListener("mouseup", t(this, E)), document.removeEventListener("mouseleave", t(this, l));
    });
    this.active = !1, document.addEventListener("mousedown", t(this, f)), document.addEventListener("mousemove", t(this, L)), document.addEventListener("mouseup", t(this, E)), document.addEventListener("mouseleave", t(this, l));
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
    h(this, d, e);
  }
}
v = new WeakMap(), a = new WeakMap(), r = new WeakMap(), d = new WeakMap(), f = new WeakMap(), L = new WeakMap(), E = new WeakMap(), l = new WeakMap();
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
    this.active = !1, document.addEventListener("wheel", t(this, y), {
      passive: !1
    });
  }
  set onZoom(e) {
    h(this, c, e);
  }
}
c = new WeakMap(), y = new WeakMap();
var m, u, p, k;
class U {
  constructor(e) {
    o(this, "keyCode");
    n(this, m, void 0);
    n(this, u, void 0);
    n(this, p, (e) => {
      e.code === this.keyCode && t(this, m) && t(this, m).call(this, e);
    });
    n(this, k, (e) => {
      e.code === this.keyCode && t(this, u) && t(this, u).call(this, e);
    });
    o(this, "removeEvent", () => {
      document.removeEventListener("keydown", t(this, p)), document.removeEventListener("keyup", t(this, k));
    });
    this.keyCode = e, document.addEventListener("keydown", t(this, p)), document.addEventListener("keyup", t(this, k));
  }
  set onKeyDown(e) {
    h(this, m, e);
  }
  set onKeyUp(e) {
    h(this, u, e);
  }
}
m = new WeakMap(), u = new WeakMap(), p = new WeakMap(), k = new WeakMap();
export {
  M as DragListener,
  U as KeyShortcatListener,
  b as PanListener,
  S as ZoomListener
};
//# sourceMappingURL=event.js.map
