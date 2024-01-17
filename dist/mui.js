import { l as L, b as We, y as fe, g as Ae, $ as ze, F as qe, _ as ko, q as _t, B as Qi, E as es } from "./preact.module-PZ3PIv-r.js";
import "./helper-UFx9kGlF.js";
var Ie, G, gr, vn, ct = 0, Ao = [], It = [], gn = L.__b, bn = L.__r, _n = L.diffed, En = L.__c, xn = L.unmount;
function He(e, t) {
  L.__h && L.__h(G, e, ct || t), ct = 0;
  var r = G.__H || (G.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: It }), r.__[e];
}
function Le(e) {
  return ct = 1, Lr(Mo, e);
}
function Lr(e, t, r) {
  var n = He(Ie++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : Mo(void 0, t), function(a) {
    var c = n.__N ? n.__N[0] : n.__[0], u = n.t(c, a);
    c !== u && (n.__N = [u, n.__[1]], n.__c.setState({}));
  }], n.__c = G, !G.u)) {
    var o = function(a, c, u) {
      if (!n.__c.__H)
        return !0;
      var l = n.__c.__H.__.filter(function(d) {
        return d.__c;
      });
      if (l.every(function(d) {
        return !d.__N;
      }))
        return !i || i.call(this, a, c, u);
      var m = !1;
      return l.forEach(function(d) {
        if (d.__N) {
          var b = d.__[0];
          d.__ = d.__N, d.__N = void 0, b !== d.__[0] && (m = !0);
        }
      }), !(!m && n.__c.props === a) && (!i || i.call(this, a, c, u));
    };
    G.u = !0;
    var i = G.shouldComponentUpdate, s = G.componentWillUpdate;
    G.componentWillUpdate = function(a, c, u) {
      if (this.__e) {
        var l = i;
        i = void 0, o(a, c, u), i = l;
      }
      s && s.call(this, a, c, u);
    }, G.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function Pe(e, t) {
  var r = He(Ie++, 3);
  !L.__s && Br(r.__H, t) && (r.__ = e, r.i = t, G.__H.__h.push(r));
}
function Ke(e, t) {
  var r = He(Ie++, 4);
  !L.__s && Br(r.__H, t) && (r.__ = e, r.i = t, G.__h.push(r));
}
function ye(e) {
  return ct = 5, Ge(function() {
    return { current: e };
  }, []);
}
function Xt(e, t, r) {
  ct = 6, Ke(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, r == null ? r : r.concat(e));
}
function Ge(e, t) {
  var r = He(Ie++, 7);
  return Br(r.__H, t) ? (r.__V = e(), r.i = t, r.__h = e, r.__V) : r.__;
}
function Be(e, t) {
  return ct = 8, Ge(function() {
    return e;
  }, t);
}
function Re(e) {
  var t = G.context[e.__c], r = He(Ie++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(G)), t.props.value) : e.__;
}
function Fr(e, t) {
  L.useDebugValue && L.useDebugValue(t ? t(e) : e);
}
function ts(e) {
  var t = He(Ie++, 10), r = Le();
  return t.__ = e, G.componentDidCatch || (G.componentDidCatch = function(n, o) {
    t.__ && t.__(n, o), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function Io() {
  var e = He(Ie++, 11);
  if (!e.__) {
    for (var t = G.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function rs() {
  for (var e; e = Ao.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Mt), e.__H.__h.forEach($r), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], L.__e(t, e.__v);
      }
}
L.__b = function(e) {
  G = null, gn && gn(e);
}, L.__r = function(e) {
  bn && bn(e), Ie = 0;
  var t = (G = e.__c).__H;
  t && (gr === G ? (t.__h = [], G.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = It, r.__N = r.i = void 0;
  })) : (t.__h.forEach(Mt), t.__h.forEach($r), t.__h = [], Ie = 0)), gr = G;
}, L.diffed = function(e) {
  _n && _n(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ao.push(t) !== 1 && vn === L.requestAnimationFrame || ((vn = L.requestAnimationFrame) || ns)(rs)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== It && (r.__ = r.__V), r.i = void 0, r.__V = It;
  })), gr = G = null;
}, L.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(Mt), r.__h = r.__h.filter(function(n) {
        return !n.__ || $r(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], L.__e(n, r.__v);
    }
  }), En && En(e, t);
}, L.unmount = function(e) {
  xn && xn(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      Mt(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && L.__e(t, r.__v));
};
var Tn = typeof requestAnimationFrame == "function";
function ns(e) {
  var t, r = function() {
    clearTimeout(n), Tn && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  Tn && (t = requestAnimationFrame(r));
}
function Mt(e) {
  var t = G, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), G = t;
}
function $r(e) {
  var t = G;
  e.__c = e.__(), G = t;
}
function Br(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function Mo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jo(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function Pr(e, t) {
  for (var r in e)
    if (r !== "__source" && !(r in t))
      return !0;
  for (var n in t)
    if (n !== "__source" && e[n] !== t[n])
      return !0;
  return !1;
}
function Ft(e) {
  this.props = e;
}
function Do(e, t) {
  function r(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : Pr(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = r, fe(e, o);
  }
  return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(Ft.prototype = new We()).isPureReactComponent = !0, Ft.prototype.shouldComponentUpdate = function(e, t) {
  return Pr(this.props, e) || Pr(this.state, t);
};
var Sn = L.__b;
L.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Sn && Sn(e);
};
var os = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function dt(e) {
  function t(r) {
    var n = jo({}, r);
    return delete n.ref, e(n, r.ref || null);
  }
  return t.$$typeof = os, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var On = function(e, t) {
  return e == null ? null : ze(ze(e).map(t));
}, Ur = { map: On, forEach: On, count: function(e) {
  return e ? ze(e).length : 0;
}, only: function(e) {
  var t = ze(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: ze }, is = L.__e;
L.__e = function(e, t, r, n) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = r.__e, t.__k = r.__k), o.__c(e, t);
  }
  is(e, t, r, n);
};
var Cn = L.unmount;
function Vo(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = jo({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return Vo(n, t, r);
  })), e;
}
function zo(e, t, r) {
  return e && r && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return zo(n, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = r)), e;
}
function gt() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Lo(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Fo(e) {
  var t, r, n;
  function o(i) {
    if (t || (t = e()).then(function(s) {
      r = s.default || s;
    }, function(s) {
      n = s;
    }), n)
      throw n;
    if (!r)
      throw t;
    return fe(r, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function nt() {
  this.u = null, this.o = null;
}
L.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Cn && Cn(e);
}, (gt.prototype = new We()).__c = function(e, t) {
  var r = t.__c, n = this;
  n.t == null && (n.t = []), n.t.push(r);
  var o = Lo(n.__v), i = !1, s = function() {
    i || (i = !0, r.__R = null, o ? o(a) : a());
  };
  r.__R = s;
  var a = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var c = n.state.__a;
        n.__v.__k[0] = zo(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (n.setState({ __a: n.__b = null }); u = n.t.pop(); )
        u.forceUpdate();
    }
  };
  n.__u++ || 32 & t.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(s, s);
}, gt.prototype.componentWillUnmount = function() {
  this.t = [];
}, gt.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = Vo(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = t.__a && fe(Ae, null, e.fallback);
  return o && (o.__u &= -33), [fe(Ae, null, t.__a ? null : e.children), o];
};
var wn = function(e, t, r) {
  if (++r[1] === r[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (r = e.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      e.u = r = r[2];
    }
};
function ss(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function as(e) {
  var t = this, r = e.i;
  t.componentWillUnmount = function() {
    _t(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== r && t.componentWillUnmount(), t.l || (t.i = r, t.l = { nodeType: 1, parentNode: r, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), t.i.appendChild(n);
  }, insertBefore: function(n, o) {
    this.childNodes.push(n), t.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
  } }), _t(fe(ss, { context: t.context }, e.__v), t.l);
}
function Bo(e, t) {
  var r = fe(as, { __v: e, i: t });
  return r.containerInfo = t, r;
}
(nt.prototype = new We()).__a = function(e) {
  var t = this, r = Lo(t.__v), n = t.o.get(e);
  return n[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (n.push(o), wn(t, e, n)) : o();
    };
    r ? r(i) : i();
  };
}, nt.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = ze(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; )
    this.o.set(t[r], this.u = [1, 0, this.u]);
  return e.children;
}, nt.prototype.componentDidUpdate = nt.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, r) {
    wn(e, r, t);
  });
};
var Uo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, cs = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, us = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ls = /[A-Z0-9]/g, fs = typeof document < "u", ds = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Wo(e, t, r) {
  return t.__k == null && (t.textContent = ""), _t(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function Yo(e, t, r) {
  return Qi(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
We.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(We.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Rn = L.event;
function ps() {
}
function ms() {
  return this.cancelBubble;
}
function hs() {
  return this.defaultPrevented;
}
L.event = function(e) {
  return Rn && (e = Rn(e)), e.persist = ps, e.isPropagationStopped = ms, e.isDefaultPrevented = hs, e.nativeEvent = e;
};
var Wr, ys = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, $n = L.vnode;
L.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var r = t.props, n = t.type, o = {};
    for (var i in r) {
      var s = r[i];
      if (!(i === "value" && "defaultValue" in r && s == null || fs && i === "children" && n === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in r && r.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || n !== "input" && n !== "textarea" || ds(r.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : us.test(i) ? i = a : n.indexOf("-") === -1 && cs.test(i) ? i = i.replace(ls, "-$&").toLowerCase() : s === null && (s = void 0) : a = i = "oninput", a === "oninput" && o[i = a] && (i = "oninputCapture"), o[i] = s;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = ze(r.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), n == "select" && o.defaultValue != null && (o.value = ze(r.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), r.class && !r.className ? (o.class = r.class, Object.defineProperty(o, "className", ys)) : (r.className && !r.class || r.class && r.className) && (o.class = o.className = r.className), t.props = o;
  }(e), e.$$typeof = Uo, $n && $n(e);
};
var Pn = L.__r;
L.__r = function(e) {
  Pn && Pn(e), Wr = e.__c;
};
var Nn = L.diffed;
L.diffed = function(e) {
  Nn && Nn(e);
  var t = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), Wr = null;
};
var qo = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Wr.__n[e.__c].props.value;
} } } }, vs = "17.0.2";
function Ho(e) {
  return fe.bind(null, e);
}
function ke(e) {
  return !!e && e.$$typeof === Uo;
}
function Ko(e) {
  return ke(e) && e.type === Ae;
}
function it(e) {
  return ke(e) ? es.apply(null, arguments) : e;
}
function Go(e) {
  return !!e.__k && (_t(null, e), !0);
}
function Xo(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Jo = function(e, t) {
  return e(t);
}, Zo = function(e, t) {
  return e(t);
}, Qo = Ae;
function Yr(e) {
  e();
}
function ei(e) {
  return e;
}
function ti() {
  return [!1, Yr];
}
var ri = Ke, ni = ke;
function oi(e, t) {
  var r = t(), n = Le({ h: { __: r, v: t } }), o = n[0].h, i = n[1];
  return Ke(function() {
    o.__ = r, o.v = t, br(o) && i({ h: o });
  }, [e, r, t]), Pe(function() {
    return br(o) && i({ h: o }), e(function() {
      br(o) && i({ h: o });
    });
  }, [e]), r;
}
function br(e) {
  var t, r, n = e.v, o = e.__;
  try {
    var i = n();
    return !((t = o) === (r = i) && (t !== 0 || 1 / t == 1 / r) || t != t && r != r);
  } catch {
    return !0;
  }
}
var ot = { useState: Le, useId: Io, useReducer: Lr, useEffect: Pe, useLayoutEffect: Ke, useInsertionEffect: ri, useTransition: ti, useDeferredValue: ei, useSyncExternalStore: oi, startTransition: Yr, useRef: ye, useImperativeHandle: Xt, useMemo: Ge, useCallback: Be, useContext: Re, useDebugValue: Fr, version: "17.0.2", Children: Ur, render: Wo, hydrate: Yo, unmountComponentAtNode: Go, createPortal: Bo, createElement: fe, createContext: qe, createFactory: Ho, cloneElement: it, createRef: ko, Fragment: Ae, isValidElement: ke, isElement: ni, isFragment: Ko, findDOMNode: Xo, Component: We, PureComponent: Ft, memo: Do, forwardRef: dt, flushSync: Zo, unstable_batchedUpdates: Jo, StrictMode: Qo, Suspense: gt, SuspenseList: nt, lazy: Fo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: qo };
const kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Ur,
  Component: We,
  Fragment: Ae,
  PureComponent: Ft,
  StrictMode: Qo,
  Suspense: gt,
  SuspenseList: nt,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: qo,
  cloneElement: it,
  createContext: qe,
  createElement: fe,
  createFactory: Ho,
  createPortal: Bo,
  createRef: ko,
  default: ot,
  findDOMNode: Xo,
  flushSync: Zo,
  forwardRef: dt,
  hydrate: Yo,
  isElement: ni,
  isFragment: Ko,
  isValidElement: ke,
  lazy: Fo,
  memo: Do,
  render: Wo,
  startTransition: Yr,
  unmountComponentAtNode: Go,
  unstable_batchedUpdates: Jo,
  useCallback: Be,
  useContext: Re,
  useDebugValue: Fr,
  useDeferredValue: ei,
  useEffect: Pe,
  useErrorBoundary: ts,
  useId: Io,
  useImperativeHandle: Xt,
  useInsertionEffect: ri,
  useLayoutEffect: Ke,
  useMemo: Ge,
  useReducer: Lr,
  useRef: ye,
  useState: Le,
  useSyncExternalStore: oi,
  useTransition: ti,
  version: vs
}, Symbol.toStringTag, { value: "Module" }));
function gs(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function bs(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var _s = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(bs(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var s = gs(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (a) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', a);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), pe = "-ms-", Bt = "-moz-", B = "-webkit-", qr = "comm", Hr = "rule", Kr = "decl", Es = "@import", ii = "@keyframes", xs = "@layer", Ts = Math.abs, Jt = String.fromCharCode, Ss = Object.assign;
function Os(e, t) {
  return le(e, 0) ^ 45 ? (((t << 2 ^ le(e, 0)) << 2 ^ le(e, 1)) << 2 ^ le(e, 2)) << 2 ^ le(e, 3) : 0;
}
function si(e) {
  return e.trim();
}
function Cs(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function U(e, t, r) {
  return e.replace(t, r);
}
function Nr(e, t) {
  return e.indexOf(t);
}
function le(e, t) {
  return e.charCodeAt(t) | 0;
}
function Et(e, t, r) {
  return e.slice(t, r);
}
function $e(e) {
  return e.length;
}
function Gr(e) {
  return e.length;
}
function Pt(e, t) {
  return t.push(e), e;
}
function ws(e, t) {
  return e.map(t).join("");
}
var Zt = 1, ut = 1, ai = 0, ge = 0, ie = 0, pt = "";
function Qt(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Zt, column: ut, length: s, return: "" };
}
function yt(e, t) {
  return Ss(Qt("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Rs() {
  return ie;
}
function $s() {
  return ie = ge > 0 ? le(pt, --ge) : 0, ut--, ie === 10 && (ut = 1, Zt--), ie;
}
function _e() {
  return ie = ge < ai ? le(pt, ge++) : 0, ut++, ie === 10 && (ut = 1, Zt++), ie;
}
function Ne() {
  return le(pt, ge);
}
function jt() {
  return ge;
}
function Ot(e, t) {
  return Et(pt, e, t);
}
function xt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ci(e) {
  return Zt = ut = 1, ai = $e(pt = e), ge = 0, [];
}
function ui(e) {
  return pt = "", e;
}
function Dt(e) {
  return si(Ot(ge - 1, kr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ps(e) {
  for (; (ie = Ne()) && ie < 33; )
    _e();
  return xt(e) > 2 || xt(ie) > 3 ? "" : " ";
}
function Ns(e, t) {
  for (; --t && _e() && !(ie < 48 || ie > 102 || ie > 57 && ie < 65 || ie > 70 && ie < 97); )
    ;
  return Ot(e, jt() + (t < 6 && Ne() == 32 && _e() == 32));
}
function kr(e) {
  for (; _e(); )
    switch (ie) {
      case e:
        return ge;
      case 34:
      case 39:
        e !== 34 && e !== 39 && kr(ie);
        break;
      case 40:
        e === 41 && kr(e);
        break;
      case 92:
        _e();
        break;
    }
  return ge;
}
function ks(e, t) {
  for (; _e() && e + ie !== 57; )
    if (e + ie === 84 && Ne() === 47)
      break;
  return "/*" + Ot(t, ge - 1) + "*" + Jt(e === 47 ? e : _e());
}
function As(e) {
  for (; !xt(Ne()); )
    _e();
  return Ot(e, ge);
}
function Is(e) {
  return ui(Vt("", null, null, null, [""], e = ci(e), 0, [0], e));
}
function Vt(e, t, r, n, o, i, s, a, c) {
  for (var u = 0, l = 0, m = s, d = 0, b = 0, v = 0, f = 1, p = 1, x = 1, P = 0, w = "", _ = o, y = i, N = n, C = w; p; )
    switch (v = P, P = _e()) {
      case 40:
        if (v != 108 && le(C, m - 1) == 58) {
          Nr(C += U(Dt(P), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Dt(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Ps(v);
        break;
      case 92:
        C += Ns(jt() - 1, 7);
        continue;
      case 47:
        switch (Ne()) {
          case 42:
          case 47:
            Pt(Ms(ks(_e(), jt()), t, r), c);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * f:
        a[u++] = $e(C) * x;
      case 125 * f:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            p = 0;
          case 59 + l:
            x == -1 && (C = U(C, /\f/g, "")), b > 0 && $e(C) - m && Pt(b > 32 ? In(C + ";", n, r, m - 1) : In(U(C, " ", "") + ";", n, r, m - 2), c);
            break;
          case 59:
            C += ";";
          default:
            if (Pt(N = An(C, t, r, u, l, o, a, w, _ = [], y = [], m), i), P === 123)
              if (l === 0)
                Vt(C, t, N, N, _, i, m, a, y);
              else
                switch (d === 99 && le(C, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Vt(e, N, N, n && Pt(An(e, N, N, 0, 0, o, a, w, o, _ = [], m), y), o, y, m, a, n ? _ : y);
                    break;
                  default:
                    Vt(C, N, N, N, [""], y, 0, a, y);
                }
        }
        u = l = b = 0, f = x = 1, w = C = "", m = s;
        break;
      case 58:
        m = 1 + $e(C), b = v;
      default:
        if (f < 1) {
          if (P == 123)
            --f;
          else if (P == 125 && f++ == 0 && $s() == 125)
            continue;
        }
        switch (C += Jt(P), P * f) {
          case 38:
            x = l > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            a[u++] = ($e(C) - 1) * x, x = 1;
            break;
          case 64:
            Ne() === 45 && (C += Dt(_e())), d = Ne(), l = m = $e(w = C += As(jt())), P++;
            break;
          case 45:
            v === 45 && $e(C) == 2 && (f = 0);
        }
    }
  return i;
}
function An(e, t, r, n, o, i, s, a, c, u, l) {
  for (var m = o - 1, d = o === 0 ? i : [""], b = Gr(d), v = 0, f = 0, p = 0; v < n; ++v)
    for (var x = 0, P = Et(e, m + 1, m = Ts(f = s[v])), w = e; x < b; ++x)
      (w = si(f > 0 ? d[x] + " " + P : U(P, /&\f/g, d[x]))) && (c[p++] = w);
  return Qt(e, t, r, o === 0 ? Hr : a, c, u, l);
}
function Ms(e, t, r) {
  return Qt(e, t, r, qr, Jt(Rs()), Et(e, 2, -2), 0);
}
function In(e, t, r, n) {
  return Qt(e, t, r, Kr, Et(e, 0, n), Et(e, n + 1, -1), n);
}
function st(e, t) {
  for (var r = "", n = Gr(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function js(e, t, r, n) {
  switch (e.type) {
    case xs:
      if (e.children.length)
        break;
    case Es:
    case Kr:
      return e.return = e.return || e.value;
    case qr:
      return "";
    case ii:
      return e.return = e.value + "{" + st(e.children, n) + "}";
    case Hr:
      e.value = e.props.join(",");
  }
  return $e(r = st(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ds(e) {
  var t = Gr(e);
  return function(r, n, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](r, n, o, i) || "";
    return s;
  };
}
function Vs(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function li(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var zs = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ne(), o === 38 && i === 12 && (r[n] = 1), !xt(i); )
    _e();
  return Ot(t, ge);
}, Ls = function(t, r) {
  var n = -1, o = 44;
  do
    switch (xt(o)) {
      case 0:
        o === 38 && Ne() === 12 && (r[n] = 1), t[n] += zs(ge - 1, r, n);
        break;
      case 2:
        t[n] += Dt(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ne() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Jt(o);
    }
  while (o = _e());
  return t;
}, Fs = function(t, r) {
  return ui(Ls(ci(t), r));
}, Mn = /* @__PURE__ */ new WeakMap(), Bs = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Mn.get(n)) && !o) {
      Mn.set(t, !0);
      for (var i = [], s = Fs(r, i), a = n.props, c = 0, u = 0; c < s.length; c++)
        for (var l = 0; l < a.length; l++, u++)
          t.props[u] = i[c] ? s[c].replace(/&\f/g, a[l]) : a[l] + " " + s[c];
    }
  }
}, Us = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, Ws = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Ys = function(t) {
  return t.type === "comm" && t.children.indexOf(Ws) > -1;
}, qs = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var i = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s = !!r.parent, a = s ? r.parent.children : (
          // global rule at the root level
          o
        ), c = a.length - 1; c >= 0; c--) {
          var u = a[c];
          if (u.line < r.line)
            break;
          if (u.column < r.column) {
            if (Ys(u))
              return;
            break;
          }
        }
        i.forEach(function(l) {
          console.error('The pseudo class "' + l + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + l.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, fi = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Hs = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!fi(r[n]))
      return !0;
  return !1;
}, jn = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Ks = function(t, r, n) {
  fi(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), jn(t)) : Hs(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), jn(t)));
};
function di(e, t) {
  switch (Os(e, t)) {
    case 5103:
      return B + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return B + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return B + e + Bt + e + pe + e + e;
    case 6828:
    case 4268:
      return B + e + pe + e + e;
    case 6165:
      return B + e + pe + "flex-" + e + e;
    case 5187:
      return B + e + U(e, /(\w+).+(:[^]+)/, B + "box-$1$2" + pe + "flex-$1$2") + e;
    case 5443:
      return B + e + pe + "flex-item-" + U(e, /flex-|-self/, "") + e;
    case 4675:
      return B + e + pe + "flex-line-pack" + U(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return B + e + pe + U(e, "shrink", "negative") + e;
    case 5292:
      return B + e + pe + U(e, "basis", "preferred-size") + e;
    case 6060:
      return B + "box-" + U(e, "-grow", "") + B + e + pe + U(e, "grow", "positive") + e;
    case 4554:
      return B + U(e, /([^-])(transform)/g, "$1" + B + "$2") + e;
    case 6187:
      return U(U(U(e, /(zoom-|grab)/, B + "$1"), /(image-set)/, B + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return U(e, /(image-set\([^]*)/, B + "$1$`$1");
    case 4968:
      return U(U(e, /(.+:)(flex-)?(.*)/, B + "box-pack:$3" + pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + B + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return U(e, /(.+)-inline(.+)/, B + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if ($e(e) - 1 - t > 6)
        switch (le(e, t + 1)) {
          case 109:
            if (le(e, t + 4) !== 45)
              break;
          case 102:
            return U(e, /(.+:)(.+)-([^]+)/, "$1" + B + "$2-$3$1" + Bt + (le(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Nr(e, "stretch") ? di(U(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (le(e, t + 1) !== 115)
        break;
    case 6444:
      switch (le(e, $e(e) - 3 - (~Nr(e, "!important") && 10))) {
        case 107:
          return U(e, ":", ":" + B) + e;
        case 101:
          return U(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + B + (le(e, 14) === 45 ? "inline-" : "") + "box$3$1" + B + "$2$3$1" + pe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (le(e, t + 11)) {
        case 114:
          return B + e + pe + U(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return B + e + pe + U(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return B + e + pe + U(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return B + e + pe + e + e;
  }
  return e;
}
var Gs = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Kr:
        t.return = di(t.value, t.length);
        break;
      case ii:
        return st([yt(t, {
          value: U(t.value, "@", "@" + B)
        })], o);
      case Hr:
        if (t.length)
          return ws(t.props, function(i) {
            switch (Cs(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return st([yt(t, {
                  props: [U(i, /:(read-\w+)/, ":" + Bt + "$1")]
                })], o);
              case "::placeholder":
                return st([yt(t, {
                  props: [U(i, /:(plac\w+)/, ":" + B + "input-$1")]
                }), yt(t, {
                  props: [U(i, /:(plac\w+)/, ":" + Bt + "$1")]
                }), yt(t, {
                  props: [U(i, /:(plac\w+)/, pe + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Xs = [Gs], pi = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(f) {
      var p = f.getAttribute("data-emotion");
      p.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Xs;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(f) {
      for (var p = f.getAttribute("data-emotion").split(" "), x = 1; x < p.length; x++)
        i[p[x]] = !0;
      a.push(f);
    }
  );
  var c, u = [Bs, Us];
  process.env.NODE_ENV !== "production" && u.push(qs({
    get compat() {
      return v.compat;
    }
  }), Ks);
  {
    var l, m = [js, process.env.NODE_ENV !== "production" ? function(f) {
      f.root || (f.return ? l.insert(f.return) : f.value && f.type !== qr && l.insert(f.value + "{}"));
    } : Vs(function(f) {
      l.insert(f);
    })], d = Ds(u.concat(o, m)), b = function(p) {
      return st(Is(p), d);
    };
    c = function(p, x, P, w) {
      l = P, process.env.NODE_ENV !== "production" && x.map !== void 0 && (l = {
        insert: function(y) {
          P.insert(y + x.map);
        }
      }), b(p ? p + "{" + x.styles + "}" : x.styles), w && (v.inserted[x.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new _s({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: c
  };
  return v.sheet.hydrate(a), v;
};
function R() {
  return R = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, R.apply(this, arguments);
}
function Js(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ar = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dn;
function Zs() {
  return Dn || (Dn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function w(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === n || E === u || E === i || E === o || E === m || E === d || typeof E == "object" && E !== null && (E.$$typeof === v || E.$$typeof === b || E.$$typeof === s || E.$$typeof === a || E.$$typeof === l || E.$$typeof === p || E.$$typeof === x || E.$$typeof === P || E.$$typeof === f);
    }
    function _(E) {
      if (typeof E == "object" && E !== null) {
        var ve = E.$$typeof;
        switch (ve) {
          case t:
            var S = E.type;
            switch (S) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case m:
                return S;
              default:
                var De = S && S.$$typeof;
                switch (De) {
                  case a:
                  case l:
                  case v:
                  case b:
                  case s:
                    return De;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var y = c, N = u, C = a, se = s, ee = t, O = l, K = n, X = v, oe = b, J = r, ce = i, Z = o, he = m, ae = !1;
    function je(E) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), g(E) || _(E) === c;
    }
    function g(E) {
      return _(E) === u;
    }
    function T(E) {
      return _(E) === a;
    }
    function D(E) {
      return _(E) === s;
    }
    function I(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function $(E) {
      return _(E) === l;
    }
    function V(E) {
      return _(E) === n;
    }
    function k(E) {
      return _(E) === v;
    }
    function M(E) {
      return _(E) === b;
    }
    function z(E) {
      return _(E) === r;
    }
    function A(E) {
      return _(E) === i;
    }
    function F(E) {
      return _(E) === o;
    }
    function ue(E) {
      return _(E) === m;
    }
    W.AsyncMode = y, W.ConcurrentMode = N, W.ContextConsumer = C, W.ContextProvider = se, W.Element = ee, W.ForwardRef = O, W.Fragment = K, W.Lazy = X, W.Memo = oe, W.Portal = J, W.Profiler = ce, W.StrictMode = Z, W.Suspense = he, W.isAsyncMode = je, W.isConcurrentMode = g, W.isContextConsumer = T, W.isContextProvider = D, W.isElement = I, W.isForwardRef = $, W.isFragment = V, W.isLazy = k, W.isMemo = M, W.isPortal = z, W.isProfiler = A, W.isStrictMode = F, W.isSuspense = ue, W.isValidElementType = w, W.typeOf = _;
  }()), W;
}
var Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function Qs() {
  if (Vn)
    return Y;
  Vn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function w(y) {
    if (typeof y == "object" && y !== null) {
      var N = y.$$typeof;
      switch (N) {
        case t:
          switch (y = y.type, y) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case m:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case a:
                case l:
                case v:
                case b:
                case s:
                  return y;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function _(y) {
    return w(y) === u;
  }
  return Y.AsyncMode = c, Y.ConcurrentMode = u, Y.ContextConsumer = a, Y.ContextProvider = s, Y.Element = t, Y.ForwardRef = l, Y.Fragment = n, Y.Lazy = v, Y.Memo = b, Y.Portal = r, Y.Profiler = i, Y.StrictMode = o, Y.Suspense = m, Y.isAsyncMode = function(y) {
    return _(y) || w(y) === c;
  }, Y.isConcurrentMode = _, Y.isContextConsumer = function(y) {
    return w(y) === a;
  }, Y.isContextProvider = function(y) {
    return w(y) === s;
  }, Y.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Y.isForwardRef = function(y) {
    return w(y) === l;
  }, Y.isFragment = function(y) {
    return w(y) === n;
  }, Y.isLazy = function(y) {
    return w(y) === v;
  }, Y.isMemo = function(y) {
    return w(y) === b;
  }, Y.isPortal = function(y) {
    return w(y) === r;
  }, Y.isProfiler = function(y) {
    return w(y) === i;
  }, Y.isStrictMode = function(y) {
    return w(y) === o;
  }, Y.isSuspense = function(y) {
    return w(y) === m;
  }, Y.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === u || y === i || y === o || y === m || y === d || typeof y == "object" && y !== null && (y.$$typeof === v || y.$$typeof === b || y.$$typeof === s || y.$$typeof === a || y.$$typeof === l || y.$$typeof === p || y.$$typeof === x || y.$$typeof === P || y.$$typeof === f);
  }, Y.typeOf = w, Y;
}
process.env.NODE_ENV === "production" ? Ar.exports = Qs() : Ar.exports = Zs();
var Xr = Ar.exports, mi = Xr, ea = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ta = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, hi = {};
hi[mi.ForwardRef] = ea;
hi[mi.Memo] = ta;
var ra = !0;
function Jr(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var er = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ra === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, tr = function(t, r, n) {
  er(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function na(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var oa = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, zn = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, ia = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", sa = /[A-Z]|^ms/g, yi = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Zr = function(t) {
  return t.charCodeAt(1) === 45;
}, Ln = function(t) {
  return t != null && typeof t != "boolean";
}, _r = /* @__PURE__ */ li(function(e) {
  return Zr(e) ? e : e.replace(sa, "-$&").toLowerCase();
}), Ut = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(yi, function(n, o, i) {
          return Ce = {
            name: o,
            styles: i,
            next: Ce
          }, o;
        });
  }
  return oa[t] !== 1 && !Zr(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var aa = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, ca = ["normal", "none", "initial", "inherit", "unset"], ua = Ut, la = /^-ms-/, fa = /-(.)/g, Fn = {};
  Ut = function(t, r) {
    if (t === "content" && (typeof r != "string" || ca.indexOf(r) === -1 && !aa.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = ua(t, r);
    return n !== "" && !Zr(t) && t.indexOf("-") !== -1 && Fn[t] === void 0 && (Fn[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(la, "ms-").replace(fa, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var gi = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Tt(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(gi);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Ce = {
          name: r.name,
          styles: r.styles,
          next: Ce
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Ce = {
              name: n.name,
              styles: n.styles,
              next: Ce
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return da(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ce, s = r(e);
        return Ce = i, Tt(e, t, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var a = [], c = r.replace(yi, function(l, m, d) {
          var b = "animation" + a.length;
          return a.push("const " + b + " = keyframes`" + d.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + b + "}";
        });
        a.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(a, ["`" + c + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + c + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var u = t[r];
  return u !== void 0 ? u : r;
}
function da(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Tt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : Ln(s) && (n += _r(i) + ":" + Ut(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(gi);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var a = 0; a < s.length; a++)
            Ln(s[a]) && (n += _r(i) + ":" + Ut(i, s[a]) + ";");
        else {
          var c = Tt(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += _r(i) + ":" + c + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(ia), n += i + "{" + c + "}";
          }
        }
      }
    }
  return n;
}
var Bn = /label:\s*([^\s;\n{]+)\s*(;|$)/g, bi;
process.env.NODE_ENV !== "production" && (bi = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Ce, lt = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Ce = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (o = !1, i += Tt(n, r, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(zn), i += s[0]);
  for (var a = 1; a < t.length; a++)
    i += Tt(n, r, t[a]), o && (process.env.NODE_ENV !== "production" && s[a] === void 0 && console.error(zn), i += s[a]);
  var c;
  process.env.NODE_ENV !== "production" && (i = i.replace(bi, function(d) {
    return c = d, "";
  })), Bn.lastIndex = 0;
  for (var u = "", l; (l = Bn.exec(i)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    l[1];
  var m = na(i) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: m,
    styles: i,
    map: c,
    next: Ce,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: m,
    styles: i,
    next: Ce
  };
}, pa = function(t) {
  return t();
}, _i = kn.useInsertionEffect ? kn.useInsertionEffect : !1, Qr = _i || pa, Un = _i || Ke, ma = {}.hasOwnProperty, en = /* @__PURE__ */ qe(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ pi({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (en.displayName = "EmotionCacheContext");
var ha = en.Provider, rr = function(t) {
  return /* @__PURE__ */ dt(function(r, n) {
    var o = Re(en);
    return t(r, o, n);
  });
}, Xe = /* @__PURE__ */ qe({});
process.env.NODE_ENV !== "production" && (Xe.displayName = "EmotionThemeContext");
var Wn = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Yn = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", ya = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return er(r, n, o), Qr(function() {
    return tr(r, n, o);
  }), null;
}, va = /* @__PURE__ */ rr(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Wn], i = [n], s = "";
  typeof e.className == "string" ? s = Jr(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = lt(i, void 0, Re(Xe));
  if (process.env.NODE_ENV !== "production" && a.name.indexOf("-") === -1) {
    var c = e[Yn];
    c && (a = lt([a, "label:" + c + ";"]));
  }
  s += t.key + "-" + a.name;
  var u = {};
  for (var l in e)
    ma.call(e, l) && l !== "css" && l !== Wn && (process.env.NODE_ENV === "production" || l !== Yn) && (u[l] = e[l]);
  return u.ref = r, u.className = s, /* @__PURE__ */ fe(Ae, null, /* @__PURE__ */ fe(ya, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ fe(o, u));
});
process.env.NODE_ENV !== "production" && (va.displayName = "EmotionCssPropInternal");
var ga = {
  name: "@emotion/react",
  version: "11.11.3",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, qn = !1, ba = /* @__PURE__ */ rr(function(e, t) {
  process.env.NODE_ENV !== "production" && !qn && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), qn = !0);
  var r = e.styles, n = lt([r], void 0, Re(Xe)), o = ye();
  return Un(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, c = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (a = !0, c.setAttribute("data-emotion", i), s.hydrate([c])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), Un(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && tr(t, n.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (ba.displayName = "EmotionGlobal");
function _a() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return lt(t);
}
var tn = function() {
  var t = _a.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Ea = function e(t) {
  for (var r = t.length, n = 0, o = ""; n < r; n++) {
    var i = t[n];
    if (i != null) {
      var s = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            s = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var a in i)
              i[a] && a && (s && (s += " "), s += a);
          }
          break;
        }
        default:
          s = i;
      }
      s && (o && (o += " "), o += s);
    }
  }
  return o;
};
function xa(e, t, r) {
  var n = [], o = Jr(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var Ta = function(t) {
  var r = t.cache, n = t.serializedArr;
  return Qr(function() {
    for (var o = 0; o < n.length; o++)
      tr(r, n[o], !1);
  }), null;
}, Sa = /* @__PURE__ */ rr(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, l = new Array(u), m = 0; m < u; m++)
      l[m] = arguments[m];
    var d = lt(l, t.registered);
    return n.push(d), er(t, d, !1), t.key + "-" + d.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, l = new Array(u), m = 0; m < u; m++)
      l[m] = arguments[m];
    return xa(t.registered, o, Ea(l));
  }, s = {
    css: o,
    cx: i,
    theme: Re(Xe)
  }, a = e.children(s);
  return r = !0, /* @__PURE__ */ fe(Ae, null, /* @__PURE__ */ fe(Ta, {
    cache: t,
    serializedArr: n
  }), a);
});
process.env.NODE_ENV !== "production" && (Sa.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Hn = !0, Oa = typeof jest < "u" || typeof vi < "u";
  if (Hn && !Oa) {
    var Kn = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Hn ? window : global
    ), Gn = "__EMOTION_REACT_" + ga.version.split(".")[0] + "__";
    Kn[Gn] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Kn[Gn] = !0;
  }
}
const Ca = {
  black: "#000",
  white: "#fff"
}, St = Ca, wa = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Ze = wa, Ra = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Qe = Ra, $a = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, et = $a, Pa = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, tt = Pa, Na = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, rt = Na, ka = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, vt = ka, Aa = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ia = Aa;
function ft(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Wt = "$$material";
function Ee(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Ma = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ja = /* @__PURE__ */ li(
  function(e) {
    return Ma.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Da = ja, Va = function(t) {
  return t !== "theme";
}, Xn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Da : Va;
}, Jn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Zn = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, za = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return er(r, n, o), Qr(function() {
    return tr(r, n, o);
  }), null;
}, La = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var a = Jn(t, r, n), c = a || Xn(o), u = !c("as");
  return function() {
    var l = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), l[0] == null || l[0].raw === void 0)
      m.push.apply(m, l);
    else {
      process.env.NODE_ENV !== "production" && l[0][0] === void 0 && console.error(Zn), m.push(l[0][0]);
      for (var d = l.length, b = 1; b < d; b++)
        process.env.NODE_ENV !== "production" && l[0][b] === void 0 && console.error(Zn), m.push(l[b], l[0][b]);
    }
    var v = rr(function(f, p, x) {
      var P = u && f.as || o, w = "", _ = [], y = f;
      if (f.theme == null) {
        y = {};
        for (var N in f)
          y[N] = f[N];
        y.theme = Re(Xe);
      }
      typeof f.className == "string" ? w = Jr(p.registered, _, f.className) : f.className != null && (w = f.className + " ");
      var C = lt(m.concat(_), p.registered, y);
      w += p.key + "-" + C.name, s !== void 0 && (w += " " + s);
      var se = u && a === void 0 ? Xn(P) : c, ee = {};
      for (var O in f)
        u && O === "as" || // $FlowFixMe
        se(O) && (ee[O] = f[O]);
      return ee.className = w, ee.ref = x, /* @__PURE__ */ fe(Ae, null, /* @__PURE__ */ fe(za, {
        cache: p,
        serialized: C,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ fe(P, ee));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = m, v.__emotion_forwardProp = a, Object.defineProperty(v, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), v.withComponent = function(f, p) {
      return e(f, R({}, r, p, {
        shouldForwardProp: Jn(v, p, !0)
      })).apply(void 0, m);
    }, v;
  };
}, Fa = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Ir = La.bind();
Fa.forEach(function(e) {
  Ir[e] = Ir(e);
});
var Mr = { exports: {} }, Er, Qn;
function rn() {
  if (Qn)
    return Er;
  Qn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Er = e, Er;
}
var xr, eo;
function Ba() {
  if (eo)
    return xr;
  eo = 1;
  var e = rn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, xr = function() {
    function n(s, a, c, u, l, m) {
      if (m !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, xr;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Tr, to;
function Ua() {
  if (to)
    return Tr;
  to = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var c = Object.getOwnPropertyNames(s).map(function(l) {
        return s[l];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        u[l] = l;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Tr = o() ? Object.assign : function(i, s) {
    for (var a, c = n(i), u, l = 1; l < arguments.length; l++) {
      a = Object(arguments[l]);
      for (var m in a)
        t.call(a, m) && (c[m] = a[m]);
      if (e) {
        u = e(a);
        for (var d = 0; d < u.length; d++)
          r.call(a, u[d]) && (c[u[d]] = a[u[d]]);
      }
    }
    return c;
  }, Tr;
}
var Sr, ro;
function Ei() {
  return ro || (ro = 1, Sr = Function.call.bind(Object.prototype.hasOwnProperty)), Sr;
}
var Or, no;
function Wa() {
  if (no)
    return Or;
  no = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = rn(), r = {}, n = Ei();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, a, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in i)
        if (n(i, l)) {
          var m;
          try {
            if (typeof i[l] != "function") {
              var d = Error(
                (c || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            m = i[l](s, l, c, a, null, t);
          } catch (v) {
            m = v;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + a + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + a + " type: " + m.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Or = o, Or;
}
var Cr, oo;
function Ya() {
  if (oo)
    return Cr;
  oo = 1;
  var e = Xr, t = Ua(), r = rn(), n = Ei(), o = Wa(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var c = "Warning: " + a;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Cr = function(a, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function m(g) {
      var T = g && (u && g[u] || g[l]);
      if (typeof T == "function")
        return T;
    }
    var d = "<<anonymous>>", b = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: P(),
      arrayOf: w,
      element: _(),
      elementType: y(),
      instanceOf: N,
      node: O(),
      objectOf: se,
      oneOf: C,
      oneOfType: ee,
      shape: X,
      exact: oe
    };
    function v(g, T) {
      return g === T ? g !== 0 || 1 / g === 1 / T : g !== g && T !== T;
    }
    function f(g, T) {
      this.message = g, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function p(g) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, D = 0;
      function I(V, k, M, z, A, F, ue) {
        if (z = z || d, F = F || M, ue !== r) {
          if (c) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = z + ":" + M;
            !T[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[ve] = !0, D++);
          }
        }
        return k[M] == null ? V ? k[M] === null ? new f("The " + A + " `" + F + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new f("The " + A + " `" + F + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : g(k, M, z, A, F);
      }
      var $ = I.bind(null, !1);
      return $.isRequired = I.bind(null, !0), $;
    }
    function x(g) {
      function T(D, I, $, V, k, M) {
        var z = D[I], A = Z(z);
        if (A !== g) {
          var F = he(z);
          return new f(
            "Invalid " + V + " `" + k + "` of type " + ("`" + F + "` supplied to `" + $ + "`, expected ") + ("`" + g + "`."),
            { expectedType: g }
          );
        }
        return null;
      }
      return p(T);
    }
    function P() {
      return p(s);
    }
    function w(g) {
      function T(D, I, $, V, k) {
        if (typeof g != "function")
          return new f("Property `" + k + "` of component `" + $ + "` has invalid PropType notation inside arrayOf.");
        var M = D[I];
        if (!Array.isArray(M)) {
          var z = Z(M);
          return new f("Invalid " + V + " `" + k + "` of type " + ("`" + z + "` supplied to `" + $ + "`, expected an array."));
        }
        for (var A = 0; A < M.length; A++) {
          var F = g(M, A, $, V, k + "[" + A + "]", r);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return p(T);
    }
    function _() {
      function g(T, D, I, $, V) {
        var k = T[D];
        if (!a(k)) {
          var M = Z(k);
          return new f("Invalid " + $ + " `" + V + "` of type " + ("`" + M + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return p(g);
    }
    function y() {
      function g(T, D, I, $, V) {
        var k = T[D];
        if (!e.isValidElementType(k)) {
          var M = Z(k);
          return new f("Invalid " + $ + " `" + V + "` of type " + ("`" + M + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return p(g);
    }
    function N(g) {
      function T(D, I, $, V, k) {
        if (!(D[I] instanceof g)) {
          var M = g.name || d, z = je(D[I]);
          return new f("Invalid " + V + " `" + k + "` of type " + ("`" + z + "` supplied to `" + $ + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return p(T);
    }
    function C(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function T(D, I, $, V, k) {
        for (var M = D[I], z = 0; z < g.length; z++)
          if (v(M, g[z]))
            return null;
        var A = JSON.stringify(g, function(ue, E) {
          var ve = he(E);
          return ve === "symbol" ? String(E) : E;
        });
        return new f("Invalid " + V + " `" + k + "` of value `" + String(M) + "` " + ("supplied to `" + $ + "`, expected one of " + A + "."));
      }
      return p(T);
    }
    function se(g) {
      function T(D, I, $, V, k) {
        if (typeof g != "function")
          return new f("Property `" + k + "` of component `" + $ + "` has invalid PropType notation inside objectOf.");
        var M = D[I], z = Z(M);
        if (z !== "object")
          return new f("Invalid " + V + " `" + k + "` of type " + ("`" + z + "` supplied to `" + $ + "`, expected an object."));
        for (var A in M)
          if (n(M, A)) {
            var F = g(M, A, $, V, k + "." + A, r);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return p(T);
    }
    function ee(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var T = 0; T < g.length; T++) {
        var D = g[T];
        if (typeof D != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(D) + " at index " + T + "."
          ), s;
      }
      function I($, V, k, M, z) {
        for (var A = [], F = 0; F < g.length; F++) {
          var ue = g[F], E = ue($, V, k, M, z, r);
          if (E == null)
            return null;
          E.data && n(E.data, "expectedType") && A.push(E.data.expectedType);
        }
        var ve = A.length > 0 ? ", expected one of type [" + A.join(", ") + "]" : "";
        return new f("Invalid " + M + " `" + z + "` supplied to " + ("`" + k + "`" + ve + "."));
      }
      return p(I);
    }
    function O() {
      function g(T, D, I, $, V) {
        return J(T[D]) ? null : new f("Invalid " + $ + " `" + V + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return p(g);
    }
    function K(g, T, D, I, $) {
      return new f(
        (g || "React class") + ": " + T + " type `" + D + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + $ + "`."
      );
    }
    function X(g) {
      function T(D, I, $, V, k) {
        var M = D[I], z = Z(M);
        if (z !== "object")
          return new f("Invalid " + V + " `" + k + "` of type `" + z + "` " + ("supplied to `" + $ + "`, expected `object`."));
        for (var A in g) {
          var F = g[A];
          if (typeof F != "function")
            return K($, V, k, A, he(F));
          var ue = F(M, A, $, V, k + "." + A, r);
          if (ue)
            return ue;
        }
        return null;
      }
      return p(T);
    }
    function oe(g) {
      function T(D, I, $, V, k) {
        var M = D[I], z = Z(M);
        if (z !== "object")
          return new f("Invalid " + V + " `" + k + "` of type `" + z + "` " + ("supplied to `" + $ + "`, expected `object`."));
        var A = t({}, D[I], g);
        for (var F in A) {
          var ue = g[F];
          if (n(g, F) && typeof ue != "function")
            return K($, V, k, F, he(ue));
          if (!ue)
            return new f(
              "Invalid " + V + " `" + k + "` key `" + F + "` supplied to `" + $ + "`.\nBad object: " + JSON.stringify(D[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(g), null, "  ")
            );
          var E = ue(M, F, $, V, k + "." + F, r);
          if (E)
            return E;
        }
        return null;
      }
      return p(T);
    }
    function J(g) {
      switch (typeof g) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !g;
        case "object":
          if (Array.isArray(g))
            return g.every(J);
          if (g === null || a(g))
            return !0;
          var T = m(g);
          if (T) {
            var D = T.call(g), I;
            if (T !== g.entries) {
              for (; !(I = D.next()).done; )
                if (!J(I.value))
                  return !1;
            } else
              for (; !(I = D.next()).done; ) {
                var $ = I.value;
                if ($ && !J($[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ce(g, T) {
      return g === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function Z(g) {
      var T = typeof g;
      return Array.isArray(g) ? "array" : g instanceof RegExp ? "object" : ce(T, g) ? "symbol" : T;
    }
    function he(g) {
      if (typeof g > "u" || g === null)
        return "" + g;
      var T = Z(g);
      if (T === "object") {
        if (g instanceof Date)
          return "date";
        if (g instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function ae(g) {
      var T = he(g);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function je(g) {
      return !g.constructor || !g.constructor.name ? d : g.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, Cr;
}
if (process.env.NODE_ENV !== "production") {
  var qa = Xr, Ha = !0;
  Mr.exports = Ya()(qa.isElement, Ha);
} else
  Mr.exports = Ba()();
var Ka = Mr.exports;
const h = /* @__PURE__ */ Js(Ka);
var Ga = 0;
function de(e, t, r, n, o, i) {
  var s, a, c = {};
  for (a in t)
    a == "ref" ? s = t[a] : c[a] = t[a];
  var u = { type: e, props: c, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Ga, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps))
    for (a in s)
      c[a] === void 0 && (c[a] = s[a]);
  return L.vnode && L.vnode(u), u;
}
/**
 * @mui/styled-engine v5.15.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Xa(e, t) {
  const r = Ir(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Ja = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function Za(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Ve(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function xi(e) {
  if (!Ve(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = xi(e[r]);
  }), t;
}
function we(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? R({}, e) : e;
  return Ve(e) && Ve(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (Ve(t[o]) && o in e && Ve(e[o]) ? n[o] = we(e[o], t[o], r) : r.clone ? n[o] = Ve(t[o]) ? xi(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
function Qa(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ec(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !Qa(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const tc = Za(h.elementType, ec), rc = "exact-prop: ​";
function Ti(e) {
  return process.env.NODE_ENV === "production" ? e : R({}, e, {
    [rc]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
var jr = { exports: {} }, q = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var io;
function nc() {
  return io || (io = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v = !1, f = !1, p = !1, x = !1, P = !1, w;
    w = Symbol.for("react.module.reference");
    function _(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === o || P || S === n || S === u || S === l || x || S === b || v || f || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === m || S.$$typeof === i || S.$$typeof === s || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === w || S.getModuleId !== void 0));
    }
    function y(S) {
      if (typeof S == "object" && S !== null) {
        var De = S.$$typeof;
        switch (De) {
          case e:
            var Je = S.type;
            switch (Je) {
              case r:
              case o:
              case n:
              case u:
              case l:
                return Je;
              default:
                var Rt = Je && Je.$$typeof;
                switch (Rt) {
                  case a:
                  case s:
                  case c:
                  case d:
                  case m:
                  case i:
                    return Rt;
                  default:
                    return De;
                }
            }
          case t:
            return De;
        }
      }
    }
    var N = s, C = i, se = e, ee = c, O = r, K = d, X = m, oe = t, J = o, ce = n, Z = u, he = l, ae = !1, je = !1;
    function g(S) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function T(S) {
      return je || (je = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function D(S) {
      return y(S) === s;
    }
    function I(S) {
      return y(S) === i;
    }
    function $(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function V(S) {
      return y(S) === c;
    }
    function k(S) {
      return y(S) === r;
    }
    function M(S) {
      return y(S) === d;
    }
    function z(S) {
      return y(S) === m;
    }
    function A(S) {
      return y(S) === t;
    }
    function F(S) {
      return y(S) === o;
    }
    function ue(S) {
      return y(S) === n;
    }
    function E(S) {
      return y(S) === u;
    }
    function ve(S) {
      return y(S) === l;
    }
    q.ContextConsumer = N, q.ContextProvider = C, q.Element = se, q.ForwardRef = ee, q.Fragment = O, q.Lazy = K, q.Memo = X, q.Portal = oe, q.Profiler = J, q.StrictMode = ce, q.Suspense = Z, q.SuspenseList = he, q.isAsyncMode = g, q.isConcurrentMode = T, q.isContextConsumer = D, q.isContextProvider = I, q.isElement = $, q.isForwardRef = V, q.isFragment = k, q.isLazy = M, q.isMemo = z, q.isPortal = A, q.isProfiler = F, q.isStrictMode = ue, q.isSuspense = E, q.isSuspenseList = ve, q.isValidElementType = _, q.typeOf = y;
  }()), q;
}
var H = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so;
function oc() {
  if (so)
    return H;
  so = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function f(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case o:
            case n:
            case u:
            case l:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case s:
                case c:
                case d:
                case m:
                case i:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return H.ContextConsumer = s, H.ContextProvider = i, H.Element = e, H.ForwardRef = c, H.Fragment = r, H.Lazy = d, H.Memo = m, H.Portal = t, H.Profiler = o, H.StrictMode = n, H.Suspense = u, H.SuspenseList = l, H.isAsyncMode = function() {
    return !1;
  }, H.isConcurrentMode = function() {
    return !1;
  }, H.isContextConsumer = function(p) {
    return f(p) === s;
  }, H.isContextProvider = function(p) {
    return f(p) === i;
  }, H.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, H.isForwardRef = function(p) {
    return f(p) === c;
  }, H.isFragment = function(p) {
    return f(p) === r;
  }, H.isLazy = function(p) {
    return f(p) === d;
  }, H.isMemo = function(p) {
    return f(p) === m;
  }, H.isPortal = function(p) {
    return f(p) === t;
  }, H.isProfiler = function(p) {
    return f(p) === o;
  }, H.isStrictMode = function(p) {
    return f(p) === n;
  }, H.isSuspense = function(p) {
    return f(p) === u;
  }, H.isSuspenseList = function(p) {
    return f(p) === l;
  }, H.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === o || p === n || p === u || p === l || p === b || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === m || p.$$typeof === i || p.$$typeof === s || p.$$typeof === c || p.$$typeof === v || p.getModuleId !== void 0);
  }, H.typeOf = f, H;
}
process.env.NODE_ENV === "production" ? jr.exports = oc() : jr.exports = nc();
var ao = jr.exports;
const ic = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function sc(e) {
  const t = `${e}`.match(ic);
  return t && t[1] || "";
}
function Si(e, t = "") {
  return e.displayName || e.name || sc(e) || t;
}
function co(e, t, r) {
  const n = Si(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function ac(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Si(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ao.ForwardRef:
          return co(e, e.render, "ForwardRef");
        case ao.Memo:
          return co(e, e.type, "memo");
        default:
          return;
      }
  }
}
const cc = h.oneOfType([h.func, h.object]), uc = cc;
function me(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ft(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function lc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const fc = typeof window < "u" ? Ke : Pe;
function Nt(e) {
  const t = ye(e);
  return fc(() => {
    t.current = e;
  }), ye((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function uo(...e) {
  return Ge(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      lc(r, t);
    });
  }, e);
}
let nr = !0, Dr = !1, lo;
const dc = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function pc(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && dc[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function mc(e) {
  e.metaKey || e.altKey || e.ctrlKey || (nr = !0);
}
function wr() {
  nr = !1;
}
function hc() {
  this.visibilityState === "hidden" && Dr && (nr = !0);
}
function yc(e) {
  e.addEventListener("keydown", mc, !0), e.addEventListener("mousedown", wr, !0), e.addEventListener("pointerdown", wr, !0), e.addEventListener("touchstart", wr, !0), e.addEventListener("visibilitychange", hc, !0);
}
function vc(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return nr || pc(t);
}
function gc() {
  const e = Be((o) => {
    o != null && yc(o.ownerDocument);
  }, []), t = ye(!1);
  function r() {
    return t.current ? (Dr = !0, window.clearTimeout(lo), lo = window.setTimeout(() => {
      Dr = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function n(o) {
    return vc(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function nn(e, t) {
  const r = R({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = R({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = R({}, i), Object.keys(o).forEach((s) => {
        r[n][s] = nn(o[s], i[s]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function Oi(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, s) => {
        if (s) {
          const a = t(s);
          a !== "" && i.push(a), r && r[s] && i.push(r[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const fo = (e) => e, bc = () => {
  let e = fo;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = fo;
    }
  };
}, _c = bc(), Ec = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function or(e, t, r = "Mui") {
  const n = Ec[t];
  return n ? `${r}-${n}` : `${_c.generate(e)}-${t}`;
}
function on(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = or(e, o, r);
  }), n;
}
const xc = ["values", "unit", "step"], Tc = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => R({}, r, {
    [n.key]: n.val
  }), {});
};
function Sc(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = Ee(e, xc), i = Tc(t), s = Object.keys(i);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r})`;
  }
  function c(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - n / 100}${r})`;
  }
  function u(d, b) {
    const v = s.indexOf(b);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r}) and (max-width:${(v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : b) - n / 100}${r})`;
  }
  function l(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function m(d) {
    const b = s.indexOf(d);
    return b === 0 ? a(s[1]) : b === s.length - 1 ? c(s[b]) : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return R({
    keys: s,
    values: i,
    up: a,
    down: c,
    between: u,
    only: l,
    not: m,
    unit: r
  }, o);
}
const Oc = {
  borderRadius: 4
}, Cc = Oc, wc = process.env.NODE_ENV !== "production" ? h.oneOfType([h.number, h.string, h.object, h.array]) : {}, Fe = wc;
function bt(e, t) {
  return t ? we(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const sn = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, po = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${sn[e]}px)`
};
function Me(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || po;
    return t.reduce((s, a, c) => (s[i.up(i.keys[c])] = r(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || po;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || sn).indexOf(a) !== -1) {
        const c = i.up(a);
        s[c] = r(t[a], a);
      } else {
        const c = a;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return r(t);
}
function Rc(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function $c(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function ir(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Yt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = ir(e, r) || n, t && (o = t(o, n, e)), o;
}
function ne(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], c = s.theme, u = ir(c, n) || {};
    return Me(s, a, (m) => {
      let d = Yt(u, o, m);
      return m === d && typeof m == "string" && (d = Yt(u, o, `${t}${m === "default" ? "" : me(m)}`, m)), r === !1 ? d : {
        [r]: d
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Fe
  } : {}, i.filterProps = [t], i;
}
function Pc(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Nc = {
  m: "margin",
  p: "padding"
}, kc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, mo = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ac = Pc((e) => {
  if (e.length > 2)
    if (mo[e])
      e = mo[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Nc[t], o = kc[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), sr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ar = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ic = [...sr, ...ar];
function Ct(e, t, r, n) {
  var o;
  const i = (o = ir(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ci(e) {
  return Ct(e, "spacing", 8, "spacing");
}
function wt(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Mc(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = wt(t, r), n), {});
}
function jc(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = Ac(r), i = Mc(o, n), s = e[r];
  return Me(e, s, i);
}
function wi(e, t) {
  const r = Ci(e.theme);
  return Object.keys(e).map((n) => jc(e, t, n, r)).reduce(bt, {});
}
function te(e) {
  return wi(e, sr);
}
te.propTypes = process.env.NODE_ENV !== "production" ? sr.reduce((e, t) => (e[t] = Fe, e), {}) : {};
te.filterProps = sr;
function re(e) {
  return wi(e, ar);
}
re.propTypes = process.env.NODE_ENV !== "production" ? ar.reduce((e, t) => (e[t] = Fe, e), {}) : {};
re.filterProps = ar;
process.env.NODE_ENV !== "production" && Ic.reduce((e, t) => (e[t] = Fe, e), {});
function Dc(e = 8) {
  if (e.mui)
    return e;
  const t = Ci({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function cr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? bt(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Se(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Oe(e, t) {
  return ne({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Vc = Oe("border", Se), zc = Oe("borderTop", Se), Lc = Oe("borderRight", Se), Fc = Oe("borderBottom", Se), Bc = Oe("borderLeft", Se), Uc = Oe("borderColor"), Wc = Oe("borderTopColor"), Yc = Oe("borderRightColor"), qc = Oe("borderBottomColor"), Hc = Oe("borderLeftColor"), Kc = Oe("outline", Se), Gc = Oe("outlineColor"), ur = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ct(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: wt(t, n)
    });
    return Me(e, e.borderRadius, r);
  }
  return null;
};
ur.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Fe
} : {};
ur.filterProps = ["borderRadius"];
cr(Vc, zc, Lc, Fc, Bc, Uc, Wc, Yc, qc, Hc, ur, Kc, Gc);
const lr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ct(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: wt(t, n)
    });
    return Me(e, e.gap, r);
  }
  return null;
};
lr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Fe
} : {};
lr.filterProps = ["gap"];
const fr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ct(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: wt(t, n)
    });
    return Me(e, e.columnGap, r);
  }
  return null;
};
fr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Fe
} : {};
fr.filterProps = ["columnGap"];
const dr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ct(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: wt(t, n)
    });
    return Me(e, e.rowGap, r);
  }
  return null;
};
dr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Fe
} : {};
dr.filterProps = ["rowGap"];
const Xc = ne({
  prop: "gridColumn"
}), Jc = ne({
  prop: "gridRow"
}), Zc = ne({
  prop: "gridAutoFlow"
}), Qc = ne({
  prop: "gridAutoColumns"
}), eu = ne({
  prop: "gridAutoRows"
}), tu = ne({
  prop: "gridTemplateColumns"
}), ru = ne({
  prop: "gridTemplateRows"
}), nu = ne({
  prop: "gridTemplateAreas"
}), ou = ne({
  prop: "gridArea"
});
cr(lr, fr, dr, Xc, Jc, Zc, Qc, eu, tu, ru, nu, ou);
function at(e, t) {
  return t === "grey" ? t : e;
}
const iu = ne({
  prop: "color",
  themeKey: "palette",
  transform: at
}), su = ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: at
}), au = ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: at
});
cr(iu, su, au);
function be(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const cu = ne({
  prop: "width",
  transform: be
}), an = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || sn[r];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: be(r)
      };
    };
    return Me(e, e.maxWidth, t);
  }
  return null;
};
an.filterProps = ["maxWidth"];
const uu = ne({
  prop: "minWidth",
  transform: be
}), lu = ne({
  prop: "height",
  transform: be
}), fu = ne({
  prop: "maxHeight",
  transform: be
}), du = ne({
  prop: "minHeight",
  transform: be
});
ne({
  prop: "size",
  cssProperty: "width",
  transform: be
});
ne({
  prop: "size",
  cssProperty: "height",
  transform: be
});
const pu = ne({
  prop: "boxSizing"
});
cr(cu, an, uu, lu, fu, du, pu);
const mu = {
  // borders
  border: {
    themeKey: "borders",
    transform: Se
  },
  borderTop: {
    themeKey: "borders",
    transform: Se
  },
  borderRight: {
    themeKey: "borders",
    transform: Se
  },
  borderBottom: {
    themeKey: "borders",
    transform: Se
  },
  borderLeft: {
    themeKey: "borders",
    transform: Se
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Se
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ur
  },
  // palette
  color: {
    themeKey: "palette",
    transform: at
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: at
  },
  backgroundColor: {
    themeKey: "palette",
    transform: at
  },
  // spacing
  p: {
    style: re
  },
  pt: {
    style: re
  },
  pr: {
    style: re
  },
  pb: {
    style: re
  },
  pl: {
    style: re
  },
  px: {
    style: re
  },
  py: {
    style: re
  },
  padding: {
    style: re
  },
  paddingTop: {
    style: re
  },
  paddingRight: {
    style: re
  },
  paddingBottom: {
    style: re
  },
  paddingLeft: {
    style: re
  },
  paddingX: {
    style: re
  },
  paddingY: {
    style: re
  },
  paddingInline: {
    style: re
  },
  paddingInlineStart: {
    style: re
  },
  paddingInlineEnd: {
    style: re
  },
  paddingBlock: {
    style: re
  },
  paddingBlockStart: {
    style: re
  },
  paddingBlockEnd: {
    style: re
  },
  m: {
    style: te
  },
  mt: {
    style: te
  },
  mr: {
    style: te
  },
  mb: {
    style: te
  },
  ml: {
    style: te
  },
  mx: {
    style: te
  },
  my: {
    style: te
  },
  margin: {
    style: te
  },
  marginTop: {
    style: te
  },
  marginRight: {
    style: te
  },
  marginBottom: {
    style: te
  },
  marginLeft: {
    style: te
  },
  marginX: {
    style: te
  },
  marginY: {
    style: te
  },
  marginInline: {
    style: te
  },
  marginInlineStart: {
    style: te
  },
  marginInlineEnd: {
    style: te
  },
  marginBlock: {
    style: te
  },
  marginBlockStart: {
    style: te
  },
  marginBlockEnd: {
    style: te
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: lr
  },
  rowGap: {
    style: dr
  },
  columnGap: {
    style: fr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: be
  },
  maxWidth: {
    style: an
  },
  minWidth: {
    transform: be
  },
  height: {
    transform: be
  },
  maxHeight: {
    transform: be
  },
  minHeight: {
    transform: be
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, cn = mu;
function hu(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function yu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vu() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, a = i[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: u,
      transform: l,
      style: m
    } = a;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const d = ir(o, u) || {};
    return m ? m(s) : Me(s, n, (v) => {
      let f = Yt(d, l, v);
      return v === f && typeof v == "string" && (f = Yt(d, l, `${r}${v === "default" ? "" : me(v)}`, v)), c === !1 ? f : {
        [c]: f
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = r || {};
    if (!o)
      return null;
    const s = (n = i.unstable_sxConfig) != null ? n : cn;
    function a(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const l = Rc(i.breakpoints), m = Object.keys(l);
      let d = l;
      return Object.keys(u).forEach((b) => {
        const v = yu(u[b], i);
        if (v != null)
          if (typeof v == "object")
            if (s[b])
              d = bt(d, e(b, v, i, s));
            else {
              const f = Me({
                theme: i
              }, v, (p) => ({
                [b]: p
              }));
              hu(f, v) ? d[b] = t({
                sx: v,
                theme: i
              }) : d = bt(d, f);
            }
          else
            d = bt(d, e(b, v, i, s));
      }), $c(m, d);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const pr = vu();
pr.filterProps = ["sx"];
const gu = ["breakpoints", "palette", "spacing", "shape"];
function un(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = Ee(e, gu), a = Sc(r), c = Dc(o);
  let u = we({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: R({
      mode: "light"
    }, n),
    spacing: c,
    shape: R({}, Cc, i)
  }, s);
  return u = t.reduce((l, m) => we(l, m), u), u.unstable_sxConfig = R({}, cn, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(m) {
    return pr({
      sx: m,
      theme: this
    });
  }, u;
}
function bu(e) {
  return Object.keys(e).length === 0;
}
function Ri(e = null) {
  const t = Re(Xe);
  return !t || bu(t) ? e : t;
}
const _u = un();
function Eu(e = _u) {
  return Ri(e);
}
function $i(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = $i(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function xe() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = $i(e)) && (n && (n += " "), n += t);
  return n;
}
const xu = ["variant"];
function ho(e) {
  return e.length === 0;
}
function Pi(e) {
  const {
    variant: t
  } = e, r = Ee(e, xu);
  let n = t || "";
  return Object.keys(r).sort().forEach((o) => {
    o === "color" ? n += ho(n) ? e[o] : me(e[o]) : n += `${ho(n) ? o : me(o)}${me(e[o].toString())}`;
  }), n;
}
const Tu = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Su(e) {
  return Object.keys(e).length === 0;
}
function Ou(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Cu = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, qt = (e) => {
  let t = 0;
  const r = {};
  return e && e.forEach((n) => {
    let o = "";
    typeof n.props == "function" ? (o = `callback${t}`, t += 1) : o = Pi(n.props), r[o] = n.style;
  }), r;
}, wu = (e, t) => {
  let r = [];
  return t && t.components && t.components[e] && t.components[e].variants && (r = t.components[e].variants), qt(r);
}, Ht = (e, t, r) => {
  const {
    ownerState: n = {}
  } = e, o = [];
  let i = 0;
  return r && r.forEach((s) => {
    let a = !0;
    if (typeof s.props == "function") {
      const c = R({}, e, n);
      a = s.props(c);
    } else
      Object.keys(s.props).forEach((c) => {
        n[c] !== s.props[c] && e[c] !== s.props[c] && (a = !1);
      });
    a && (typeof s.props == "function" ? o.push(t[`callback${i}`]) : o.push(t[Pi(s.props)])), typeof s.props == "function" && (i += 1);
  }), o;
}, Ru = (e, t, r, n) => {
  var o;
  const i = r == null || (o = r.components) == null || (o = o[n]) == null ? void 0 : o.variants;
  return Ht(e, t, i);
};
function zt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const $u = un(), yo = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Lt({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return Su(t) ? e : t[r] || t;
}
function Pu(e) {
  return e ? (t, r) => r[e] : null;
}
const vo = ({
  styledArg: e,
  props: t,
  defaultTheme: r,
  themeId: n
}) => {
  const o = e(R({}, t, {
    theme: Lt(R({}, t, {
      defaultTheme: r,
      themeId: n
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const s = Ht(t, qt(i), i);
    return [o, ...s];
  }
  return o;
};
function Nu(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = $u,
    rootShouldForwardProp: n = zt,
    slotShouldForwardProp: o = zt
  } = e, i = (s) => pr(R({}, s, {
    theme: Lt(R({}, s, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, a = {}) => {
    Ja(s, (_) => _.filter((y) => !(y != null && y.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: l,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = Pu(yo(u))
    } = a, b = Ee(a, Tu), v = l !== void 0 ? l : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), f = m || !1;
    let p;
    process.env.NODE_ENV !== "production" && c && (p = `${c}-${yo(u || "Root")}`);
    let x = zt;
    u === "Root" || u === "root" ? x = n : u ? x = o : Ou(s) && (x = void 0);
    const P = Xa(s, R({
      shouldForwardProp: x,
      label: p
    }, b)), w = (_, ...y) => {
      const N = y ? y.map((O) => {
        if (typeof O == "function" && O.__emotion_real !== O)
          return (K) => vo({
            styledArg: O,
            props: K,
            defaultTheme: r,
            themeId: t
          });
        if (Ve(O)) {
          let K = O, X;
          return O && O.variants && (X = O.variants, delete K.variants, K = (oe) => {
            let J = O;
            return Ht(oe, qt(X), X).forEach((Z) => {
              J = we(J, Z);
            }), J;
          }), K;
        }
        return O;
      }) : [];
      let C = _;
      if (Ve(_)) {
        let O;
        _ && _.variants && (O = _.variants, delete C.variants, C = (K) => {
          let X = _;
          return Ht(K, qt(O), O).forEach((J) => {
            X = we(X, J);
          }), X;
        });
      } else
        typeof _ == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        _.__emotion_real !== _ && (C = (O) => vo({
          styledArg: _,
          props: O,
          defaultTheme: r,
          themeId: t
        }));
      c && d && N.push((O) => {
        const K = Lt(R({}, O, {
          defaultTheme: r,
          themeId: t
        })), X = Cu(c, K);
        if (X) {
          const oe = {};
          return Object.entries(X).forEach(([J, ce]) => {
            oe[J] = typeof ce == "function" ? ce(R({}, O, {
              theme: K
            })) : ce;
          }), d(O, oe);
        }
        return null;
      }), c && !v && N.push((O) => {
        const K = Lt(R({}, O, {
          defaultTheme: r,
          themeId: t
        }));
        return Ru(O, wu(c, K), K, c);
      }), f || N.push(i);
      const se = N.length - y.length;
      if (Array.isArray(_) && se > 0) {
        const O = new Array(se).fill("");
        C = [..._, ...O], C.raw = [..._.raw, ...O];
      }
      const ee = P(C, ...N);
      if (process.env.NODE_ENV !== "production") {
        let O;
        c && (O = `${c}${me(u || "")}`), O === void 0 && (O = `Styled(${ac(s)})`), ee.displayName = O;
      }
      return s.muiName && (ee.muiName = s.muiName), ee;
    };
    return P.withConfig && (w.withConfig = P.withConfig), w;
  };
}
function ku(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : nn(t.components[r].defaultProps, n);
}
function Au({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = Eu(r);
  return n && (o = o[n] || o), ku({
    theme: o,
    name: t,
    props: e
  });
}
function ln(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Math.min(Math.max(t, e), r);
}
function Iu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ye(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ye(Iu(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ft(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ft(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
function mr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Mu(e) {
  e = Ye(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (u, l = (u + r / 30) % 12) => o - i * Math.max(Math.min(l - 3, 9 - l, 1), -1);
  let a = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", c.push(t[3])), mr({
    type: a,
    values: c
  });
}
function go(e) {
  e = Ye(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ye(Mu(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function bo(e, t) {
  const r = go(e), n = go(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function kt(e, t) {
  return e = Ye(e), t = ln(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, mr(e);
}
function ju(e, t) {
  if (e = Ye(e), t = ln(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return mr(e);
}
function Du(e, t) {
  if (e = Ye(e), t = ln(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return mr(e);
}
const Ni = /* @__PURE__ */ qe(null);
process.env.NODE_ENV !== "production" && (Ni.displayName = "ThemeContext");
const ki = Ni;
function Ai() {
  const e = Re(ki);
  return process.env.NODE_ENV !== "production" && Fr(e), e;
}
const Vu = typeof Symbol == "function" && Symbol.for, zu = Vu ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Lu(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return R({}, e, t);
}
function Kt(e) {
  const {
    children: t,
    theme: r
  } = e, n = Ai();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = Ge(() => {
    const i = n === null ? r : Lu(n, r);
    return i != null && (i[zu] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ de(ki.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Kt.propTypes = {
  /**
   * Your component tree.
   */
  children: h.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: h.oneOfType([h.object, h.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Kt.propTypes = Ti(Kt.propTypes));
const _o = {};
function Eo(e, t, r, n = !1) {
  return Ge(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const i = r(o), s = e ? R({}, t, {
        [e]: i
      }) : i;
      return n ? () => s : s;
    }
    return e ? R({}, t, {
      [e]: r
    }) : R({}, t, r);
  }, [e, t, r, n]);
}
function Gt(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = Ri(_o), i = Ai() || _o;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = Eo(n, o, r), a = Eo(n, i, r, !0);
  return /* @__PURE__ */ de(Kt, {
    theme: a,
    children: /* @__PURE__ */ de(Xe.Provider, {
      value: s,
      children: t
    })
  });
}
process.env.NODE_ENV !== "production" && (Gt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Your component tree.
   */
  children: h.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: h.oneOfType([h.func, h.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: h.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Gt.propTypes = Ti(Gt.propTypes));
function Fu(e, t) {
  return R({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const Bu = ["mode", "contrastThreshold", "tonalOffset"], xo = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: St.white,
    default: St.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Rr = {
  text: {
    primary: St.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: St.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function To(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Du(e.main, o) : t === "dark" && (e.dark = ju(e.main, i)));
}
function Uu(e = "light") {
  return e === "dark" ? {
    main: et[200],
    light: et[50],
    dark: et[400]
  } : {
    main: et[700],
    light: et[400],
    dark: et[800]
  };
}
function Wu(e = "light") {
  return e === "dark" ? {
    main: Qe[200],
    light: Qe[50],
    dark: Qe[400]
  } : {
    main: Qe[500],
    light: Qe[300],
    dark: Qe[700]
  };
}
function Yu(e = "light") {
  return e === "dark" ? {
    main: Ze[500],
    light: Ze[300],
    dark: Ze[700]
  } : {
    main: Ze[700],
    light: Ze[400],
    dark: Ze[800]
  };
}
function qu(e = "light") {
  return e === "dark" ? {
    main: tt[400],
    light: tt[300],
    dark: tt[700]
  } : {
    main: tt[700],
    light: tt[500],
    dark: tt[900]
  };
}
function Hu(e = "light") {
  return e === "dark" ? {
    main: rt[400],
    light: rt[300],
    dark: rt[700]
  } : {
    main: rt[800],
    light: rt[500],
    dark: rt[900]
  };
}
function Ku(e = "light") {
  return e === "dark" ? {
    main: vt[400],
    light: vt[300],
    dark: vt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: vt[500],
    dark: vt[900]
  };
}
function Gu(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = Ee(e, Bu), i = e.primary || Uu(t), s = e.secondary || Wu(t), a = e.error || Yu(t), c = e.info || qu(t), u = e.success || Hu(t), l = e.warning || Ku(t);
  function m(f) {
    const p = bo(f, Rr.text.primary) >= r ? Rr.text.primary : xo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = bo(f, p);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${p} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return p;
  }
  const d = ({
    color: f,
    name: p,
    mainShade: x = 500,
    lightShade: P = 300,
    darkShade: w = 700
  }) => {
    if (f = R({}, f), !f.main && f[x] && (f.main = f[x]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${p ? ` (${p})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : ft(11, p ? ` (${p})` : "", x));
    if (typeof f.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${p ? ` (${p})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(f.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ft(12, p ? ` (${p})` : "", JSON.stringify(f.main)));
    return To(f, "light", P, n), To(f, "dark", w, n), f.contrastText || (f.contrastText = m(f.main)), f;
  }, b = {
    dark: Rr,
    light: xo
  };
  return process.env.NODE_ENV !== "production" && (b[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), we(R({
    // A collection of common colors.
    common: R({}, St),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: l,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Ia,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, b[t]), o);
}
const Xu = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Ju(e) {
  return Math.round(e * 1e5) / 1e5;
}
const So = {
  textTransform: "uppercase"
}, Oo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Zu(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = Oo,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: l,
    pxToRem: m
  } = r, d = Ee(r, Xu);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = o / 14, v = m || ((x) => `${x / u * b}rem`), f = (x, P, w, _, y) => R({
    fontFamily: n,
    fontWeight: x,
    fontSize: v(P),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w
  }, n === Oo ? {
    letterSpacing: `${Ju(_ / P)}em`
  } : {}, y, l), p = {
    h1: f(i, 96, 1.167, -1.5),
    h2: f(i, 60, 1.2, -0.5),
    h3: f(s, 48, 1.167, 0),
    h4: f(s, 34, 1.235, 0.25),
    h5: f(s, 24, 1.334, 0),
    h6: f(a, 20, 1.6, 0.15),
    subtitle1: f(s, 16, 1.75, 0.15),
    subtitle2: f(a, 14, 1.57, 0.1),
    body1: f(s, 16, 1.5, 0.15),
    body2: f(s, 14, 1.43, 0.15),
    button: f(a, 14, 1.75, 0.4, So),
    caption: f(s, 12, 1.66, 0.4),
    overline: f(s, 12, 2.66, 1, So),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return we(R({
    htmlFontSize: u,
    pxToRem: v,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: c
  }, p), d, {
    clone: !1
    // No need to clone deep
  });
}
const Qu = 0.2, el = 0.14, tl = 0.12;
function Q(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Qu})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${el})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${tl})`].join(",");
}
const rl = ["none", Q(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Q(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Q(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Q(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Q(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Q(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Q(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Q(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Q(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Q(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Q(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Q(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Q(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Q(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Q(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Q(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Q(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Q(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Q(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Q(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Q(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Q(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Q(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Q(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], nl = ["duration", "easing", "delay"], ol = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, il = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Co(e) {
  return `${Math.round(e)}ms`;
}
function sl(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function al(e) {
  const t = R({}, ol, e.easing), r = R({}, il, e.duration);
  return R({
    getAutoHeightDuration: sl,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: a = t.easeInOut,
        delay: c = 0
      } = i, u = Ee(i, nl);
      if (process.env.NODE_ENV !== "production") {
        const l = (d) => typeof d == "string", m = (d) => !isNaN(parseFloat(d));
        !l(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !l(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), l(a) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !l(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((l) => `${l} ${typeof s == "string" ? s : Co(s)} ${a} ${typeof c == "string" ? c : Co(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const cl = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, ul = cl, ll = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Ii(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = Ee(e, ll);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : ft(18));
  const a = Gu(n), c = un(e);
  let u = we(c, {
    mixins: Fu(c.breakpoints, r),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: rl.slice(),
    typography: Zu(a, i),
    transitions: al(o),
    zIndex: R({}, ul)
  });
  if (u = we(u, s), u = t.reduce((l, m) => we(l, m), u), process.env.NODE_ENV !== "production") {
    const l = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (d, b) => {
      let v;
      for (v in d) {
        const f = d[v];
        if (l.indexOf(v) !== -1 && Object.keys(f).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const p = or("", v);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${v}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${p}' syntax:`, JSON.stringify({
              root: {
                [`&.${p}`]: f
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[v] = {};
        }
      }
    };
    Object.keys(u.components).forEach((d) => {
      const b = u.components[d].styleOverrides;
      b && d.indexOf("Mui") === 0 && m(b, d);
    });
  }
  return u.unstable_sxConfig = R({}, cn, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(m) {
    return pr({
      sx: m,
      theme: this
    });
  }, u;
}
const fl = Ii(), Mi = fl;
function fn({
  props: e,
  name: t
}) {
  return Au({
    props: e,
    name: t,
    defaultTheme: Mi,
    themeId: Wt
  });
}
const ji = (e) => zt(e) && e !== "classes", mt = Nu({
  themeId: Wt,
  defaultTheme: Mi,
  rootShouldForwardProp: ji
}), dl = ["theme"];
function Di(e) {
  let {
    theme: t
  } = e, r = Ee(e, dl);
  const n = t[Wt];
  return /* @__PURE__ */ de(Gt, R({}, r, {
    themeId: n ? Wt : void 0,
    theme: n || t
  }));
}
process.env.NODE_ENV !== "production" && (Di.propTypes = {
  /**
   * Your component tree.
   */
  children: h.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: h.oneOfType([h.object, h.func]).isRequired
});
function Vr(e, t) {
  return Vr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Vr(e, t);
}
function pl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Vr(e, t);
}
const wo = ot.createContext(null);
function ml(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function dn(e, t) {
  var r = function(i) {
    return t && ke(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Ur.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function hl(e, t) {
  e = e || {}, t = t || {};
  function r(l) {
    return l in t ? t[l] : e[l];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, a = {};
  for (var c in t) {
    if (n[c])
      for (s = 0; s < n[c].length; s++) {
        var u = n[c][s];
        a[n[c][s]] = r(u);
      }
    a[c] = r(c);
  }
  for (s = 0; s < o.length; s++)
    a[o[s]] = r(o[s]);
  return a;
}
function Ue(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function yl(e, t) {
  return dn(e.children, function(r) {
    return it(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Ue(r, "appear", e),
      enter: Ue(r, "enter", e),
      exit: Ue(r, "exit", e)
    });
  });
}
function vl(e, t, r) {
  var n = dn(e.children), o = hl(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (ke(s)) {
      var a = i in t, c = i in n, u = t[i], l = ke(u) && !u.props.in;
      c && (!a || l) ? o[i] = it(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: Ue(s, "exit", e),
        enter: Ue(s, "enter", e)
      }) : !c && a && !l ? o[i] = it(s, {
        in: !1
      }) : c && a && ke(u) && (o[i] = it(s, {
        onExited: r.bind(null, s),
        in: u.props.in,
        exit: Ue(s, "exit", e),
        enter: Ue(s, "enter", e)
      }));
    }
  }), o;
}
var gl = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, bl = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, pn = /* @__PURE__ */ function(e) {
  pl(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(ml(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, a = i.handleExited, c = i.firstRender;
    return {
      children: c ? yl(o, a) : vl(o, s, a),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = dn(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
      var c = R({}, a.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, a = Ee(o, ["component", "childFactory"]), c = this.state.contextValue, u = gl(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ ot.createElement(wo.Provider, {
      value: c
    }, u) : /* @__PURE__ */ ot.createElement(wo.Provider, {
      value: c
    }, /* @__PURE__ */ ot.createElement(i, a, u));
  }, t;
}(ot.Component);
pn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: h.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: h.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: h.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: h.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: h.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: h.func
} : {};
pn.defaultProps = bl;
const _l = pn;
function Vi(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: c,
    timeout: u
  } = e, [l, m] = Le(!1), d = xe(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), b = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, v = xe(r.child, l && r.childLeaving, n && r.childPulsate);
  return !a && !l && m(!0), Pe(() => {
    if (!a && c != null) {
      const f = setTimeout(c, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [c, a, u]), /* @__PURE__ */ de("span", {
    className: d,
    style: b,
    children: /* @__PURE__ */ de("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (Vi.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: h.object.isRequired,
  className: h.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: h.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: h.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: h.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: h.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: h.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: h.number,
  /**
   * exit delay
   */
  timeout: h.number.isRequired
});
const Te = on("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), El = ["center", "classes", "className"];
let hr = (e) => e, Ro, $o, Po, No;
const zr = 550, xl = 80, Tl = tn(Ro || (Ro = hr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Sl = tn($o || ($o = hr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Ol = tn(Po || (Po = hr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Cl = mt("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), wl = mt(Vi, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(No || (No = hr`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Te.rippleVisible, Tl, zr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Te.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Te.child, Te.childLeaving, Sl, zr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Te.childPulsate, Ol, ({
  theme: e
}) => e.transitions.easing.easeInOut), zi = /* @__PURE__ */ dt(function(t, r) {
  const n = fn({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = n, a = Ee(n, El), [c, u] = Le([]), l = ye(0), m = ye(null);
  Pe(() => {
    m.current && (m.current(), m.current = null);
  }, [c]);
  const d = ye(!1), b = ye(0), v = ye(null), f = ye(null);
  Pe(() => () => {
    b.current && clearTimeout(b.current);
  }, []);
  const p = Be((_) => {
    const {
      pulsate: y,
      rippleX: N,
      rippleY: C,
      rippleSize: se,
      cb: ee
    } = _;
    u((O) => [...O, /* @__PURE__ */ de(wl, {
      classes: {
        ripple: xe(i.ripple, Te.ripple),
        rippleVisible: xe(i.rippleVisible, Te.rippleVisible),
        ripplePulsate: xe(i.ripplePulsate, Te.ripplePulsate),
        child: xe(i.child, Te.child),
        childLeaving: xe(i.childLeaving, Te.childLeaving),
        childPulsate: xe(i.childPulsate, Te.childPulsate)
      },
      timeout: zr,
      pulsate: y,
      rippleX: N,
      rippleY: C,
      rippleSize: se
    }, l.current)]), l.current += 1, m.current = ee;
  }, [i]), x = Be((_ = {}, y = {}, N = () => {
  }) => {
    const {
      pulsate: C = !1,
      center: se = o || y.pulsate,
      fakeElement: ee = !1
      // For test purposes
    } = y;
    if ((_ == null ? void 0 : _.type) === "mousedown" && d.current) {
      d.current = !1;
      return;
    }
    (_ == null ? void 0 : _.type) === "touchstart" && (d.current = !0);
    const O = ee ? null : f.current, K = O ? O.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let X, oe, J;
    if (se || _ === void 0 || _.clientX === 0 && _.clientY === 0 || !_.clientX && !_.touches)
      X = Math.round(K.width / 2), oe = Math.round(K.height / 2);
    else {
      const {
        clientX: ce,
        clientY: Z
      } = _.touches && _.touches.length > 0 ? _.touches[0] : _;
      X = Math.round(ce - K.left), oe = Math.round(Z - K.top);
    }
    if (se)
      J = Math.sqrt((2 * K.width ** 2 + K.height ** 2) / 3), J % 2 === 0 && (J += 1);
    else {
      const ce = Math.max(Math.abs((O ? O.clientWidth : 0) - X), X) * 2 + 2, Z = Math.max(Math.abs((O ? O.clientHeight : 0) - oe), oe) * 2 + 2;
      J = Math.sqrt(ce ** 2 + Z ** 2);
    }
    _ != null && _.touches ? v.current === null && (v.current = () => {
      p({
        pulsate: C,
        rippleX: X,
        rippleY: oe,
        rippleSize: J,
        cb: N
      });
    }, b.current = setTimeout(() => {
      v.current && (v.current(), v.current = null);
    }, xl)) : p({
      pulsate: C,
      rippleX: X,
      rippleY: oe,
      rippleSize: J,
      cb: N
    });
  }, [o, p]), P = Be(() => {
    x({}, {
      pulsate: !0
    });
  }, [x]), w = Be((_, y) => {
    if (clearTimeout(b.current), (_ == null ? void 0 : _.type) === "touchend" && v.current) {
      v.current(), v.current = null, b.current = setTimeout(() => {
        w(_, y);
      });
      return;
    }
    v.current = null, u((N) => N.length > 0 ? N.slice(1) : N), m.current = y;
  }, []);
  return Xt(r, () => ({
    pulsate: P,
    start: x,
    stop: w
  }), [P, x, w]), /* @__PURE__ */ de(Cl, R({
    className: xe(Te.root, i.root, s),
    ref: f
  }, a, {
    children: /* @__PURE__ */ de(_l, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (zi.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: h.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string
});
const Rl = zi;
function $l(e) {
  return or("MuiButtonBase", e);
}
const Pl = on("MuiButtonBase", ["root", "disabled", "focusVisible"]), Nl = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], kl = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = Oi({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, $l, o);
  return r && n && (s.root += ` ${n}`), s;
}, Al = mt("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Pl.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Li = /* @__PURE__ */ dt(function(t, r) {
  const n = fn({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: c = "button",
    disabled: u = !1,
    disableRipple: l = !1,
    disableTouchRipple: m = !1,
    focusRipple: d = !1,
    LinkComponent: b = "a",
    onBlur: v,
    onClick: f,
    onContextMenu: p,
    onDragLeave: x,
    onFocus: P,
    onFocusVisible: w,
    onKeyDown: _,
    onKeyUp: y,
    onMouseDown: N,
    onMouseLeave: C,
    onMouseUp: se,
    onTouchEnd: ee,
    onTouchMove: O,
    onTouchStart: K,
    tabIndex: X = 0,
    TouchRippleProps: oe,
    touchRippleRef: J,
    type: ce
  } = n, Z = Ee(n, Nl), he = ye(null), ae = ye(null), je = uo(ae, J), {
    isFocusVisibleRef: g,
    onFocus: T,
    onBlur: D,
    ref: I
  } = gc(), [$, V] = Le(!1);
  u && $ && V(!1), Xt(o, () => ({
    focusVisible: () => {
      V(!0), he.current.focus();
    }
  }), []);
  const [k, M] = Le(!1);
  Pe(() => {
    M(!0);
  }, []);
  const z = k && !l && !u;
  Pe(() => {
    $ && d && !l && k && ae.current.pulsate();
  }, [l, d, $, k]);
  function A(j, hn, Zi = m) {
    return Nt((yn) => (hn && hn(yn), !Zi && ae.current && ae.current[j](yn), !0));
  }
  const F = A("start", N), ue = A("stop", p), E = A("stop", x), ve = A("stop", se), S = A("stop", (j) => {
    $ && j.preventDefault(), C && C(j);
  }), De = A("start", K), Je = A("stop", ee), Rt = A("stop", O), qi = A("stop", (j) => {
    D(j), g.current === !1 && V(!1), v && v(j);
  }, !1), Hi = Nt((j) => {
    he.current || (he.current = j.currentTarget), T(j), g.current === !0 && (V(!0), w && w(j)), P && P(j);
  }), yr = () => {
    const j = he.current;
    return c && c !== "button" && !(j.tagName === "A" && j.href);
  }, vr = ye(!1), Ki = Nt((j) => {
    d && !vr.current && $ && ae.current && j.key === " " && (vr.current = !0, ae.current.stop(j, () => {
      ae.current.start(j);
    })), j.target === j.currentTarget && yr() && j.key === " " && j.preventDefault(), _ && _(j), j.target === j.currentTarget && yr() && j.key === "Enter" && !u && (j.preventDefault(), f && f(j));
  }), Gi = Nt((j) => {
    d && j.key === " " && ae.current && $ && !j.defaultPrevented && (vr.current = !1, ae.current.stop(j, () => {
      ae.current.pulsate(j);
    })), y && y(j), f && j.target === j.currentTarget && yr() && j.key === " " && !j.defaultPrevented && f(j);
  });
  let $t = c;
  $t === "button" && (Z.href || Z.to) && ($t = b);
  const ht = {};
  $t === "button" ? (ht.type = ce === void 0 ? "button" : ce, ht.disabled = u) : (!Z.href && !Z.to && (ht.role = "button"), u && (ht["aria-disabled"] = u));
  const Xi = uo(r, I, he);
  process.env.NODE_ENV !== "production" && Pe(() => {
    z && !ae.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [z]);
  const mn = R({}, n, {
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: l,
    disableTouchRipple: m,
    focusRipple: d,
    tabIndex: X,
    focusVisible: $
  }), Ji = kl(mn);
  return /* @__PURE__ */ de(Al, R({
    as: $t,
    className: xe(Ji.root, a),
    ownerState: mn,
    onBlur: qi,
    onClick: f,
    onContextMenu: ue,
    onFocus: Hi,
    onKeyDown: Ki,
    onKeyUp: Gi,
    onMouseDown: F,
    onMouseLeave: S,
    onMouseUp: ve,
    onDragLeave: E,
    onTouchEnd: Je,
    onTouchMove: Rt,
    onTouchStart: De,
    ref: Xi,
    tabIndex: u ? -1 : X,
    type: ce
  }, ht, Z, {
    children: [s, z ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ de(Rl, R({
        ref: je,
        center: i
      }, oe))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Li.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: uc,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: h.bool,
  /**
   * The content of the component.
   */
  children: h.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: tc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: h.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: h.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: h.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: h.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: h.string,
  /**
   * @ignore
   */
  href: h.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: h.elementType,
  /**
   * @ignore
   */
  onBlur: h.func,
  /**
   * @ignore
   */
  onClick: h.func,
  /**
   * @ignore
   */
  onContextMenu: h.func,
  /**
   * @ignore
   */
  onDragLeave: h.func,
  /**
   * @ignore
   */
  onFocus: h.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: h.func,
  /**
   * @ignore
   */
  onKeyDown: h.func,
  /**
   * @ignore
   */
  onKeyUp: h.func,
  /**
   * @ignore
   */
  onMouseDown: h.func,
  /**
   * @ignore
   */
  onMouseLeave: h.func,
  /**
   * @ignore
   */
  onMouseUp: h.func,
  /**
   * @ignore
   */
  onTouchEnd: h.func,
  /**
   * @ignore
   */
  onTouchMove: h.func,
  /**
   * @ignore
   */
  onTouchStart: h.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: h.oneOfType([h.arrayOf(h.oneOfType([h.func, h.object, h.bool])), h.func, h.object]),
  /**
   * @default 0
   */
  tabIndex: h.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: h.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: h.oneOfType([h.func, h.shape({
    current: h.shape({
      pulsate: h.func.isRequired,
      start: h.func.isRequired,
      stop: h.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: h.oneOfType([h.oneOf(["button", "reset", "submit"]), h.string])
});
const Il = Li;
function Ml(e) {
  return or("MuiButton", e);
}
const jl = on("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), At = jl, Fi = /* @__PURE__ */ qe({});
process.env.NODE_ENV !== "production" && (Fi.displayName = "ButtonGroupContext");
const Dl = Fi, Bi = /* @__PURE__ */ qe(void 0);
process.env.NODE_ENV !== "production" && (Bi.displayName = "ButtonGroupButtonContext");
const Vl = Bi, zl = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Ll = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, `${i}${me(t)}`, `size${me(o)}`, `${i}Size${me(o)}`, t === "inherit" && "colorInherit", r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${me(o)}`],
    endIcon: ["endIcon", `iconSize${me(o)}`]
  }, c = Oi(a, Ml, s);
  return R({}, s, c);
}, Ui = (e) => R({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), Fl = mt(Il, {
  shouldForwardProp: (e) => ji(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${me(r.color)}`], t[`size${me(r.size)}`], t[`${r.variant}Size${me(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return R({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": R({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : kt(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : kt(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : kt(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": R({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${At.focusVisible}`]: R({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${At.disabled}`]: R({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${kt(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (r = (n = e.palette).getContrastText) == null ? void 0 : r.call(n, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${At.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${At.disabled}`]: {
    boxShadow: "none"
  }
}), Bl = mt("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${me(r.size)}`]];
  }
})(({
  ownerState: e
}) => R({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Ui(e))), Ul = mt("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${me(r.size)}`]];
  }
})(({
  ownerState: e
}) => R({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Ui(e))), Wi = /* @__PURE__ */ dt(function(t, r) {
  const n = Re(Dl), o = Re(Vl), i = nn(n, t), s = fn({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: c = "primary",
    component: u = "button",
    className: l,
    disabled: m = !1,
    disableElevation: d = !1,
    disableFocusRipple: b = !1,
    endIcon: v,
    focusVisibleClassName: f,
    fullWidth: p = !1,
    size: x = "medium",
    startIcon: P,
    type: w,
    variant: _ = "text"
  } = s, y = Ee(s, zl), N = R({}, s, {
    color: c,
    component: u,
    disabled: m,
    disableElevation: d,
    disableFocusRipple: b,
    fullWidth: p,
    size: x,
    type: w,
    variant: _
  }), C = Ll(N), se = P && /* @__PURE__ */ de(Bl, {
    className: C.startIcon,
    ownerState: N,
    children: P
  }), ee = v && /* @__PURE__ */ de(Ul, {
    className: C.endIcon,
    ownerState: N,
    children: v
  }), O = o || "";
  return /* @__PURE__ */ de(Fl, R({
    ownerState: N,
    className: xe(n.className, C.root, l, O),
    component: u,
    disabled: m,
    focusRipple: !b,
    focusVisibleClassName: xe(C.focusVisible, f),
    ref: r,
    type: w
  }, y, {
    classes: C,
    children: [se, a, ee]
  }));
});
process.env.NODE_ENV !== "production" && (Wi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: h.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: h.oneOfType([h.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), h.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: h.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: h.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: h.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: h.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: h.bool,
  /**
   * Element placed after the children.
   */
  endIcon: h.node,
  /**
   * @ignore
   */
  focusVisibleClassName: h.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: h.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: h.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: h.oneOfType([h.oneOf(["small", "medium", "large"]), h.string]),
  /**
   * Element placed before the children.
   */
  startIcon: h.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: h.oneOfType([h.arrayOf(h.oneOfType([h.func, h.object, h.bool])), h.func, h.object]),
  /**
   * @ignore
   */
  type: h.oneOfType([h.oneOf(["button", "reset", "submit"]), h.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: h.oneOfType([h.oneOf(["contained", "outlined", "text"]), h.string])
});
const Wl = Wi, Yl = ({
  key: e,
  container: t,
  shadowRoot: r,
  insertionPoint: n
}, o) => {
  const i = pi({
    key: e,
    container: n,
    insertionPoint: n
  }), s = Ii();
  console.log("container: ", t), console.log("shadowRoot: ", r), console.log("insertionPoint: ", n), _t(de(ha, {
    value: i,
    children: de(Di, {
      theme: s,
      children: o
    })
  }), t);
}, ql = ({
  container: e,
  shadowRoot: t,
  insertionPoint: r,
  ...n
}) => {
  Yl({
    key: "mui-button-css",
    container: e,
    shadowRoot: t,
    insertionPoint: r
  }, de(Wl, {
    ...n
  }));
}, Yi = document.createElement("template");
Yi.innerHTML = `
<style id="jss-insertion-point"></style>
<div id="app"></div>
`;
class Hl extends HTMLElement {
  constructor() {
    super(), this.attachShadow({
      mode: "open"
    }), this.shadowRoot.appendChild(Yi.content.cloneNode(!0));
    const t = this.shadowRoot.getElementById("jss-insertion-point"), r = this.shadowRoot.getElementById("app");
    ql({
      container: r,
      shadowRoot: this.shadowRoot,
      insertionPoint: t,
      children: "zero",
      variant: "contained"
    });
  }
}
customElements.define("mui-button", Hl);
export {
  Hl as Button
};
//# sourceMappingURL=mui.js.map
