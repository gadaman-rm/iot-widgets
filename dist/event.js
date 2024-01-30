var b = Object.defineProperty;
var S = (i, t, s) => t in i ? b(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var v = (i, t, s) => (S(i, typeof t != "symbol" ? t + "" : t, s), s), C = (i, t, s) => {
  if (!t.has(i))
    throw TypeError("Cannot " + s);
};
var e = (i, t, s) => (C(i, t, "read from private field"), s ? s.call(i) : t.get(i)), n = (i, t, s) => {
  if (t.has(i))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(i) : t.set(i, s);
}, o = (i, t, s, K) => (C(i, t, "write to private field"), K ? K.call(i, s) : t.set(i, s), s);
import { D as q } from "./DragListener-vcHOWT3z.js";
var h, r, d, c, m, l, y, p, k;
class Z {
  constructor(t) {
    n(this, h, void 0);
    v(this, "active");
    v(this, "init");
    n(this, r, void 0);
    n(this, d, void 0);
    n(this, c, void 0);
    n(this, m, void 0);
    n(this, l, (t, s) => {
      t.button === 1 && !this.active && (this.active = !0, this.init = s, e(this, r) && e(this, r).call(this, t, (K) => this.init = K));
    });
    n(this, y, (t) => {
      this.active && e(this, d) && e(this, d).call(this, t, this.init);
    });
    n(this, p, (t) => {
      t.button === 1 && this.active && (this.active = !1, e(this, c) && e(this, c).call(this, t, this.init));
    });
    n(this, k, (t) => {
      t.button === 1 && this.active && e(this, m) && e(this, m).call(this, t, this.init);
    });
    v(this, "removeEvent", () => {
      e(this, h).removeEventListener("mousedown", e(this, l)), e(this, h).removeEventListener("mousemove", e(this, y)), e(this, h).removeEventListener("mouseup", e(this, p)), e(this, h).removeEventListener("mouseleave", e(this, k));
    });
    this.active = !1, o(this, h, t || document), e(this, h).addEventListener("mousedown", e(this, l)), e(this, h).addEventListener("mousemove", e(this, y)), e(this, h).addEventListener("mouseup", e(this, p)), e(this, h).addEventListener("mouseleave", e(this, k));
  }
  set onPanStart(t) {
    o(this, r, t);
  }
  set onPanMove(t) {
    o(this, d, t);
  }
  set onPanEnd(t) {
    o(this, c, t);
  }
  set onPanLeave(t) {
    o(this, m, t);
  }
}
h = new WeakMap(), r = new WeakMap(), d = new WeakMap(), c = new WeakMap(), m = new WeakMap(), l = new WeakMap(), y = new WeakMap(), p = new WeakMap(), k = new WeakMap();
var u, f, w;
class x {
  constructor(t) {
    v(this, "active");
    n(this, u, void 0);
    n(this, f, void 0);
    n(this, w, (t) => {
      t.ctrlKey ? (t.preventDefault(), this.active = !0) : this.active = !1, this.active && e(this, f) && e(this, f).call(this, t);
    });
    v(this, "removeEvent", () => {
      e(this, u).removeEventListener("wheel", e(this, w));
    });
    this.active = !1, o(this, u, t || document), e(this, u).addEventListener("wheel", e(this, w), { passive: !1 });
  }
  set onZoom(t) {
    o(this, f, t);
  }
}
u = new WeakMap(), f = new WeakMap(), w = new WeakMap();
var a, L, E, P, D;
class M {
  constructor(t, s) {
    v(this, "keyCode");
    n(this, a, void 0);
    n(this, L, void 0);
    n(this, E, void 0);
    n(this, P, (t) => {
      t.code === this.keyCode && e(this, L) && e(this, L).call(this, t);
    });
    n(this, D, (t) => {
      t.code === this.keyCode && e(this, E) && e(this, E).call(this, t);
    });
    v(this, "removeEvent", () => {
      e(this, a).removeEventListener("keydown", e(this, P)), e(this, a).removeEventListener("keyup", e(this, D));
    });
    this.keyCode = t, o(this, a, s || document), e(this, a).addEventListener("keydown", e(this, P)), e(this, a).addEventListener("keyup", e(this, D));
  }
  set onKeyDown(t) {
    o(this, L, t);
  }
  set onKeyUp(t) {
    o(this, E, t);
  }
}
a = new WeakMap(), L = new WeakMap(), E = new WeakMap(), P = new WeakMap(), D = new WeakMap();
export {
  q as DragListener,
  M as KeyShortcatListener,
  Z as PanListener,
  x as ZoomListener
};
//# sourceMappingURL=event.js.map
