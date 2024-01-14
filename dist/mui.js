const $s = {
  black: "#000",
  white: "#fff"
}, Ot = $s, Rs = {
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
}, et = Rs, Ps = {
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
}, tt = Ps, ks = {
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
}, rt = ks, Ns = {
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
}, nt = Ns, As = {
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
}, ot = As, Ms = {
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
}, bt = Ms, Is = {
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
}, js = Is;
function lt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Gt = "$$material";
function P() {
  return P = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, P.apply(this, arguments);
}
function xe(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Pt, w, Jo, We, kn, Zo, Lr, Qo, Ct = {}, ei = [], Ds = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ir = Array.isArray;
function Me(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function ti(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function le(e, t, r) {
  var n, o, i, s = {};
  for (i in t)
    i == "key" ? n = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Pt.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return xt(e, s, n, o, null);
}
function xt(e, t, r, n, o) {
  var i = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++Jo, __i: -1, __u: 0 };
  return o == null && w.vnode != null && w.vnode(i), i;
}
function ri() {
  return { current: null };
}
function Ee(e) {
  return e.children;
}
function $e(e, t) {
  this.props = e, this.context = t;
}
function ft(e, t) {
  if (t == null)
    return e.__ ? ft(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null)
      return r.__e;
  return typeof e.type == "function" ? ft(e) : null;
}
function ni(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return ni(e);
  }
}
function zr(e) {
  (!e.__d && (e.__d = !0) && We.push(e) && !Xt.__r++ || kn !== w.debounceRendering) && ((kn = w.debounceRendering) || Zo)(Xt);
}
function Xt() {
  var e, t, r, n, o, i, s, a, u;
  for (We.sort(Lr); e = We.shift(); )
    e.__d && (t = We.length, n = void 0, i = (o = (r = e).__v).__e, a = [], u = [], (s = r.__P) && ((n = Me({}, o)).__v = o.__v + 1, w.vnode && w.vnode(n), Zr(s, n, o, r.__n, s.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, a, i ?? ft(o), !!(32 & o.__u), u), n.__.__k[n.__i] = n, si(a, n, u), n.__e != i && ni(n)), We.length > t && We.sort(Lr));
  Xt.__r = 0;
}
function oi(e, t, r, n, o, i, s, a, u, l, f) {
  var c, d, h, v, p, m = n && n.__k || ei, g = t.length;
  for (r.__d = u, Vs(r, t, m), u = r.__d, c = 0; c < g; c++)
    (h = r.__k[c]) != null && typeof h != "boolean" && typeof h != "function" && (d = h.__i === -1 ? Ct : m[h.__i] || Ct, h.__i = c, Zr(e, h, d, o, i, s, a, u, l, f), v = h.__e, h.ref && d.ref != h.ref && (d.ref && Qr(d.ref, null, h), f.push(h.ref, h.__c || v, h)), p == null && v != null && (p = v), 65536 & h.__u || d.__k === h.__k ? u = ii(h, u, e) : typeof h.type == "function" && h.__d !== void 0 ? u = h.__d : v && (u = v.nextSibling), h.__d = void 0, h.__u &= -196609);
  r.__d = u, r.__e = p;
}
function Vs(e, t, r) {
  var n, o, i, s, a, u = t.length, l = r.length, f = l, c = 0;
  for (e.__k = [], n = 0; n < u; n++)
    (o = e.__k[n] = (o = t[n]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? xt(null, o, null, null, o) : ir(o) ? xt(Ee, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? xt(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, a = Ls(o, r, s = n + c, f), o.__i = a, i = null, a !== -1 && (f--, (i = r[a]) && (i.__u |= 131072)), i == null || i.__v === null ? (a == -1 && c--, typeof o.type != "function" && (o.__u |= 65536)) : a !== s && (a === s + 1 ? c++ : a > s ? f > u - s ? c += a - s : c-- : c = a < s && a == s - 1 ? a - s : 0, a !== n + c && (o.__u |= 65536))) : (i = r[n]) && i.key == null && i.__e && (i.__e == e.__d && (e.__d = ft(i)), Fr(i, i, !1), r[n] = null, f--);
  if (f)
    for (n = 0; n < l; n++)
      (i = r[n]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = ft(i)), Fr(i, i));
}
function ii(e, t, r) {
  var n, o;
  if (typeof e.type == "function") {
    for (n = e.__k, o = 0; n && o < n.length; o++)
      n[o] && (n[o].__ = e, t = ii(n[o], t, r));
    return t;
  }
  return e.__e != t && (r.insertBefore(e.__e, t || null), t = e.__e), t && t.nextSibling;
}
function Ie(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (ir(e) ? e.some(function(r) {
    Ie(r, t);
  }) : t.push(e)), t;
}
function Ls(e, t, r, n) {
  var o = e.key, i = e.type, s = r - 1, a = r + 1, u = t[r];
  if (u === null || u && o == u.key && i === u.type)
    return r;
  if (n > (u != null && !(131072 & u.__u) ? 1 : 0))
    for (; s >= 0 || a < t.length; ) {
      if (s >= 0) {
        if ((u = t[s]) && !(131072 & u.__u) && o == u.key && i === u.type)
          return s;
        s--;
      }
      if (a < t.length) {
        if ((u = t[a]) && !(131072 & u.__u) && o == u.key && i === u.type)
          return a;
        a++;
      }
    }
  return -1;
}
function Nn(e, t, r) {
  t[0] === "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || Ds.test(t) ? r : r + "px";
}
function jt(e, t, r, n, o) {
  var i;
  e:
    if (t === "style")
      if (typeof r == "string")
        e.style.cssText = r;
      else {
        if (typeof n == "string" && (e.style.cssText = n = ""), n)
          for (t in n)
            r && t in r || Nn(e.style, t, "");
        if (r)
          for (t in r)
            n && r[t] === n[t] || Nn(e.style, t, r[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = r, r ? n ? r.u = n.u : (r.u = Date.now(), e.addEventListener(t, i ? Mn : An, i)) : e.removeEventListener(t, i ? Mn : An, i);
    else {
      if (o)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t !== "role" && t in e)
        try {
          e[t] = r ?? "";
          break e;
        } catch {
        }
      typeof r == "function" || (r == null || r === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, r));
    }
}
function An(e) {
  var t = this.l[e.type + !1];
  if (e.t) {
    if (e.t <= t.u)
      return;
  } else
    e.t = Date.now();
  return t(w.event ? w.event(e) : e);
}
function Mn(e) {
  return this.l[e.type + !0](w.event ? w.event(e) : e);
}
function Zr(e, t, r, n, o, i, s, a, u, l) {
  var f, c, d, h, v, p, m, g, S, O, E, _, N, $, te, B = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & r.__u && (u = !!(32 & r.__u), i = [a = t.__e = r.__e]), (f = w.__b) && f(t);
  e:
    if (typeof B == "function")
      try {
        if (g = t.props, S = (f = B.contextType) && n[f.__c], O = f ? S ? S.props.value : f.__ : n, r.__c ? m = (c = t.__c = r.__c).__ = c.__E : ("prototype" in B && B.prototype.render ? t.__c = c = new B(g, O) : (t.__c = c = new $e(g, O), c.constructor = B, c.render = Fs), S && S.sub(c), c.props = g, c.state || (c.state = {}), c.context = O, c.__n = n, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), B.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Me({}, c.__s)), Me(c.__s, B.getDerivedStateFromProps(g, c.__s))), h = c.props, v = c.state, c.__v = t, d)
          B.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (B.getDerivedStateFromProps == null && g !== h && c.componentWillReceiveProps != null && c.componentWillReceiveProps(g, O), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(g, c.__s, O) === !1 || t.__v === r.__v)) {
            for (t.__v !== r.__v && (c.props = g, c.state = c.__s, c.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), E = 0; E < c._sb.length; E++)
              c.__h.push(c._sb[E]);
            c._sb = [], c.__h.length && s.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, O), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(h, v, p);
          });
        }
        if (c.context = O, c.props = g, c.__P = e, c.__e = !1, _ = w.__r, N = 0, "prototype" in B && B.prototype.render) {
          for (c.state = c.__s, c.__d = !1, _ && _(t), f = c.render(c.props, c.state, c.context), $ = 0; $ < c._sb.length; $++)
            c.__h.push(c._sb[$]);
          c._sb = [];
        } else
          do
            c.__d = !1, _ && _(t), f = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++N < 25);
        c.state = c.__s, c.getChildContext != null && (n = Me(Me({}, n), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(h, v)), oi(e, ir(te = f != null && f.type === Ee && f.key == null ? f.props.children : f) ? te : [te], t, r, n, o, i, s, a, u, l), c.base = t.__e, t.__u &= -161, c.__h.length && s.push(c), m && (c.__E = c.__ = null);
      } catch (C) {
        t.__v = null, u || i != null ? (t.__e = a, t.__u |= u ? 160 : 32, i[i.indexOf(a)] = null) : (t.__e = r.__e, t.__k = r.__k), w.__e(C, t, r);
      }
    else
      i == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = zs(r.__e, t, r, n, o, i, s, u, l);
  (f = w.diffed) && f(t);
}
function si(e, t, r) {
  t.__d = void 0;
  for (var n = 0; n < r.length; n++)
    Qr(r[n], r[++n], r[++n]);
  w.__c && w.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      w.__e(i, o.__v);
    }
  });
}
function zs(e, t, r, n, o, i, s, a, u) {
  var l, f, c, d, h, v, p, m = r.props, g = t.props, S = t.type;
  if (S === "svg" && (o = !0), i != null) {
    for (l = 0; l < i.length; l++)
      if ((h = i[l]) && "setAttribute" in h == !!S && (S ? h.localName === S : h.nodeType === 3)) {
        e = h, i[l] = null;
        break;
      }
  }
  if (e == null) {
    if (S === null)
      return document.createTextNode(g);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", S) : document.createElement(S, g.is && g), i = null, a = !1;
  }
  if (S === null)
    m === g || a && e.data === g || (e.data = g);
  else {
    if (i = i && Pt.call(e.childNodes), m = r.props || Ct, !a && i != null)
      for (m = {}, l = 0; l < e.attributes.length; l++)
        m[(h = e.attributes[l]).name] = h.value;
    for (l in m)
      h = m[l], l == "children" || (l == "dangerouslySetInnerHTML" ? c = h : l === "key" || l in g || jt(e, l, null, h, o));
    for (l in g)
      h = g[l], l == "children" ? d = h : l == "dangerouslySetInnerHTML" ? f = h : l == "value" ? v = h : l == "checked" ? p = h : l === "key" || a && typeof h != "function" || m[l] === h || jt(e, l, h, m[l], o);
    if (f)
      a || c && (f.__html === c.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), oi(e, ir(d) ? d : [d], t, r, n, o && S !== "foreignObject", i, s, i ? i[0] : r.__k && ft(r, 0), a, u), i != null)
      for (l = i.length; l--; )
        i[l] != null && ti(i[l]);
    a || (l = "value", v !== void 0 && (v !== e[l] || S === "progress" && !v || S === "option" && v !== m[l]) && jt(e, l, v, m[l], !1), l = "checked", p !== void 0 && p !== e[l] && jt(e, l, p, m[l], !1));
  }
  return e;
}
function Qr(e, t, r) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (n) {
    w.__e(n, r);
  }
}
function Fr(e, t, r) {
  var n, o;
  if (w.unmount && w.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || Qr(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        w.__e(i, t);
      }
    n.base = n.__P = null, e.__c = void 0;
  }
  if (n = e.__k)
    for (o = 0; o < n.length; o++)
      n[o] && Fr(n[o], t, r || typeof e.type != "function");
  r || e.__e == null || ti(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Fs(e, t, r) {
  return this.constructor(e, r);
}
function dt(e, t, r) {
  var n, o, i, s;
  w.__ && w.__(e, t), o = (n = typeof r == "function") ? null : r && r.__k || t.__k, i = [], s = [], Zr(t, e = (!n && r || t).__k = le(Ee, null, [e]), o || Ct, Ct, t.ownerSVGElement !== void 0, !n && r ? [r] : o ? null : t.firstChild ? Pt.call(t.childNodes) : null, i, !n && r ? r : o ? o.__e : t.firstChild, n, s), si(i, e, s);
}
function ai(e, t) {
  dt(e, t, ai);
}
function Bs(e, t, r) {
  var n, o, i, s, a = Me({}, e.props);
  for (i in e.type && e.type.defaultProps && (s = e.type.defaultProps), t)
    i == "key" ? n = t[i] : i == "ref" ? o = t[i] : a[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? Pt.call(arguments, 2) : r), xt(e.type, a, n || e.key, o || e.ref, null);
}
function Ke(e, t) {
  var r = { __c: t = "__cC" + Qo++, __: e, Consumer: function(n, o) {
    return n.children(o);
  }, Provider: function(n) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && o.some(function(a) {
        a.__e = !0, zr(a);
      });
    }, this.sub = function(s) {
      o.push(s);
      var a = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        o.splice(o.indexOf(s), 1), a && a.call(s);
      };
    }), n.children;
  } };
  return r.Provider.__ = r.Consumer.contextType = r;
}
Pt = ei.slice, w = { __e: function(e, t, r, n) {
  for (var o, i, s; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), s = o.__d), s)
          return o.__E = o;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Jo = 0, $e.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Me({}, this.state), typeof e == "function" && (e = e(Me({}, r), this.props)), e && Me(r, e), e != null && this.__v && (t && this._sb.push(t), zr(this));
}, $e.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), zr(this));
}, $e.prototype.render = Ee, We = [], Zo = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Lr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Xt.__r = 0, Qo = 0;
var De, X, $r, In, pt = 0, ci = [], Bt = [], jn = w.__b, Dn = w.__r, Vn = w.diffed, Ln = w.__c, zn = w.unmount;
function Ge(e, t) {
  w.__h && w.__h(X, e, pt || t), pt = 0;
  var r = X.__H || (X.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: Bt }), r.__[e];
}
function Be(e) {
  return pt = 1, en(li, e);
}
function en(e, t, r) {
  var n = Ge(De++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : li(void 0, t), function(a) {
    var u = n.__N ? n.__N[0] : n.__[0], l = n.t(u, a);
    u !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = X, !X.u)) {
    var o = function(a, u, l) {
      if (!n.__c.__H)
        return !0;
      var f = n.__c.__H.__.filter(function(d) {
        return d.__c;
      });
      if (f.every(function(d) {
        return !d.__N;
      }))
        return !i || i.call(this, a, u, l);
      var c = !1;
      return f.forEach(function(d) {
        if (d.__N) {
          var h = d.__[0];
          d.__ = d.__N, d.__N = void 0, h !== d.__[0] && (c = !0);
        }
      }), !(!c && n.__c.props === a) && (!i || i.call(this, a, u, l));
    };
    X.u = !0;
    var i = X.shouldComponentUpdate, s = X.componentWillUpdate;
    X.componentWillUpdate = function(a, u, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(a, u, l), i = f;
      }
      s && s.call(this, a, u, l);
    }, X.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function Ne(e, t) {
  var r = Ge(De++, 3);
  !w.__s && rn(r.__H, t) && (r.__ = e, r.i = t, X.__H.__h.push(r));
}
function Xe(e, t) {
  var r = Ge(De++, 4);
  !w.__s && rn(r.__H, t) && (r.__ = e, r.i = t, X.__h.push(r));
}
function _e(e) {
  return pt = 5, Je(function() {
    return { current: e };
  }, []);
}
function sr(e, t, r) {
  pt = 6, Xe(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, r == null ? r : r.concat(e));
}
function Je(e, t) {
  var r = Ge(De++, 7);
  return rn(r.__H, t) ? (r.__V = e(), r.i = t, r.__h = e, r.__V) : r.__;
}
function Ye(e, t) {
  return pt = 8, Je(function() {
    return e;
  }, t);
}
function Pe(e) {
  var t = X.context[e.__c], r = Ge(De++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(X)), t.props.value) : e.__;
}
function tn(e, t) {
  w.useDebugValue && w.useDebugValue(t ? t(e) : e);
}
function Us(e) {
  var t = Ge(De++, 10), r = Be();
  return t.__ = e, X.componentDidCatch || (X.componentDidCatch = function(n, o) {
    t.__ && t.__(n, o), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function ui() {
  var e = Ge(De++, 11);
  if (!e.__) {
    for (var t = X.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function Ws() {
  for (var e; e = ci.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ut), e.__H.__h.forEach(Br), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], w.__e(t, e.__v);
      }
}
w.__b = function(e) {
  X = null, jn && jn(e);
}, w.__r = function(e) {
  Dn && Dn(e), De = 0;
  var t = (X = e.__c).__H;
  t && ($r === X ? (t.__h = [], X.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = Bt, r.__N = r.i = void 0;
  })) : (t.__h.forEach(Ut), t.__h.forEach(Br), t.__h = [], De = 0)), $r = X;
}, w.diffed = function(e) {
  Vn && Vn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (ci.push(t) !== 1 && In === w.requestAnimationFrame || ((In = w.requestAnimationFrame) || Ys)(Ws)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== Bt && (r.__ = r.__V), r.i = void 0, r.__V = Bt;
  })), $r = X = null;
}, w.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(Ut), r.__h = r.__h.filter(function(n) {
        return !n.__ || Br(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], w.__e(n, r.__v);
    }
  }), Ln && Ln(e, t);
}, w.unmount = function(e) {
  zn && zn(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      Ut(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && w.__e(t, r.__v));
};
var Fn = typeof requestAnimationFrame == "function";
function Ys(e) {
  var t, r = function() {
    clearTimeout(n), Fn && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  Fn && (t = requestAnimationFrame(r));
}
function Ut(e) {
  var t = X, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), X = t;
}
function Br(e) {
  var t = X;
  e.__c = e.__(), X = t;
}
function rn(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function li(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fi(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function Ur(e, t) {
  for (var r in e)
    if (r !== "__source" && !(r in t))
      return !0;
  for (var n in t)
    if (n !== "__source" && e[n] !== t[n])
      return !0;
  return !1;
}
function Jt(e) {
  this.props = e;
}
function di(e, t) {
  function r(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : Ur(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = r, le(e, o);
  }
  return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(Jt.prototype = new $e()).isPureReactComponent = !0, Jt.prototype.shouldComponentUpdate = function(e, t) {
  return Ur(this.props, e) || Ur(this.state, t);
};
var Bn = w.__b;
w.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Bn && Bn(e);
};
var Hs = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function _t(e) {
  function t(r) {
    var n = fi({}, r);
    return delete n.ref, e(n, r.ref || null);
  }
  return t.$$typeof = Hs, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Un = function(e, t) {
  return e == null ? null : Ie(Ie(e).map(t));
}, nn = { map: Un, forEach: Un, count: function(e) {
  return e ? Ie(e).length : 0;
}, only: function(e) {
  var t = Ie(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: Ie }, qs = w.__e;
w.__e = function(e, t, r, n) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = r.__e, t.__k = r.__k), o.__c(e, t);
  }
  qs(e, t, r, n);
};
var Wn = w.unmount;
function pi(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = fi({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return pi(n, t, r);
  })), e;
}
function mi(e, t, r) {
  return e && r && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return mi(n, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = r)), e;
}
function Tt() {
  this.__u = 0, this.t = null, this.__b = null;
}
function hi(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function _i(e) {
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
    return le(r, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function it() {
  this.u = null, this.o = null;
}
w.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Wn && Wn(e);
}, (Tt.prototype = new $e()).__c = function(e, t) {
  var r = t.__c, n = this;
  n.t == null && (n.t = []), n.t.push(r);
  var o = hi(n.__v), i = !1, s = function() {
    i || (i = !0, r.__R = null, o ? o(a) : a());
  };
  r.__R = s;
  var a = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var u = n.state.__a;
        n.__v.__k[0] = mi(u, u.__c.__P, u.__c.__O);
      }
      var l;
      for (n.setState({ __a: n.__b = null }); l = n.t.pop(); )
        l.forceUpdate();
    }
  };
  n.__u++ || 32 & t.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(s, s);
}, Tt.prototype.componentWillUnmount = function() {
  this.t = [];
}, Tt.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = pi(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = t.__a && le(Ee, null, e.fallback);
  return o && (o.__u &= -33), [le(Ee, null, t.__a ? null : e.children), o];
};
var Yn = function(e, t, r) {
  if (++r[1] === r[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (r = e.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      e.u = r = r[2];
    }
};
function Ks(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Gs(e) {
  var t = this, r = e.i;
  t.componentWillUnmount = function() {
    dt(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== r && t.componentWillUnmount(), t.l || (t.i = r, t.l = { nodeType: 1, parentNode: r, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), t.i.appendChild(n);
  }, insertBefore: function(n, o) {
    this.childNodes.push(n), t.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
  } }), dt(le(Ks, { context: t.context }, e.__v), t.l);
}
function yi(e, t) {
  var r = le(Gs, { __v: e, i: t });
  return r.containerInfo = t, r;
}
(it.prototype = new $e()).__a = function(e) {
  var t = this, r = hi(t.__v), n = t.o.get(e);
  return n[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (n.push(o), Yn(t, e, n)) : o();
    };
    r ? r(i) : i();
  };
}, it.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Ie(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; )
    this.o.set(t[r], this.u = [1, 0, this.u]);
  return e.children;
}, it.prototype.componentDidUpdate = it.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, r) {
    Yn(e, r, t);
  });
};
var gi = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Xs = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Js = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Zs = /[A-Z0-9]/g, Qs = typeof document < "u", ea = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function bi(e, t, r) {
  return t.__k == null && (t.textContent = ""), dt(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function Ei(e, t, r) {
  return ai(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
$e.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty($e.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Hn = w.event;
function ta() {
}
function ra() {
  return this.cancelBubble;
}
function na() {
  return this.defaultPrevented;
}
w.event = function(e) {
  return Hn && (e = Hn(e)), e.persist = ta, e.isPropagationStopped = ra, e.isDefaultPrevented = na, e.nativeEvent = e;
};
var on, oa = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, qn = w.vnode;
w.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var r = t.props, n = t.type, o = {};
    for (var i in r) {
      var s = r[i];
      if (!(i === "value" && "defaultValue" in r && s == null || Qs && i === "children" && n === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in r && r.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || n !== "input" && n !== "textarea" || ea(r.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : Js.test(i) ? i = a : n.indexOf("-") === -1 && Xs.test(i) ? i = i.replace(Zs, "-$&").toLowerCase() : s === null && (s = void 0) : a = i = "oninput", a === "oninput" && o[i = a] && (i = "oninputCapture"), o[i] = s;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = Ie(r.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), n == "select" && o.defaultValue != null && (o.value = Ie(r.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), r.class && !r.className ? (o.class = r.class, Object.defineProperty(o, "className", oa)) : (r.className && !r.class || r.class && r.className) && (o.class = o.className = r.className), t.props = o;
  }(e), e.$$typeof = gi, qn && qn(e);
};
var Kn = w.__r;
w.__r = function(e) {
  Kn && Kn(e), on = e.__c;
};
var Gn = w.diffed;
w.diffed = function(e) {
  Gn && Gn(e);
  var t = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), on = null;
};
var xi = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return on.__n[e.__c].props.value;
} } } }, ia = "17.0.2";
function Ti(e) {
  return le.bind(null, e);
}
function je(e) {
  return !!e && e.$$typeof === gi;
}
function Si(e) {
  return je(e) && e.type === Ee;
}
function at(e) {
  return je(e) ? Bs.apply(null, arguments) : e;
}
function Oi(e) {
  return !!e.__k && (dt(null, e), !0);
}
function Ci(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var wi = function(e, t) {
  return e(t);
}, $i = function(e, t) {
  return e(t);
}, Ri = Ee;
function sn(e) {
  e();
}
function Pi(e) {
  return e;
}
function ki() {
  return [!1, sn];
}
var Ni = Xe, Ai = je;
function Mi(e, t) {
  var r = t(), n = Be({ h: { __: r, v: t } }), o = n[0].h, i = n[1];
  return Xe(function() {
    o.__ = r, o.v = t, Rr(o) && i({ h: o });
  }, [e, r, t]), Ne(function() {
    return Rr(o) && i({ h: o }), e(function() {
      Rr(o) && i({ h: o });
    });
  }, [e]), r;
}
function Rr(e) {
  var t, r, n = e.v, o = e.__;
  try {
    var i = n();
    return !((t = o) === (r = i) && (t !== 0 || 1 / t == 1 / r) || t != t && r != r);
  } catch {
    return !0;
  }
}
var st = { useState: Be, useId: ui, useReducer: en, useEffect: Ne, useLayoutEffect: Xe, useInsertionEffect: Ni, useTransition: ki, useDeferredValue: Pi, useSyncExternalStore: Mi, startTransition: sn, useRef: _e, useImperativeHandle: sr, useMemo: Je, useCallback: Ye, useContext: Pe, useDebugValue: tn, version: "17.0.2", Children: nn, render: bi, hydrate: Ei, unmountComponentAtNode: Oi, createPortal: yi, createElement: le, createContext: Ke, createFactory: Ti, cloneElement: at, createRef: ri, Fragment: Ee, isValidElement: je, isElement: Ai, isFragment: Si, findDOMNode: Ci, Component: $e, PureComponent: Jt, memo: di, forwardRef: _t, flushSync: $i, unstable_batchedUpdates: wi, StrictMode: Ri, Suspense: Tt, SuspenseList: it, lazy: _i, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: xi };
const Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: nn,
  Component: $e,
  Fragment: Ee,
  PureComponent: Jt,
  StrictMode: Ri,
  Suspense: Tt,
  SuspenseList: it,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: xi,
  cloneElement: at,
  createContext: Ke,
  createElement: le,
  createFactory: Ti,
  createPortal: yi,
  createRef: ri,
  default: st,
  findDOMNode: Ci,
  flushSync: $i,
  forwardRef: _t,
  hydrate: Ei,
  isElement: Ai,
  isFragment: Si,
  isValidElement: je,
  lazy: _i,
  memo: di,
  render: bi,
  startTransition: sn,
  unmountComponentAtNode: Oi,
  unstable_batchedUpdates: wi,
  useCallback: Ye,
  useContext: Pe,
  useDebugValue: tn,
  useDeferredValue: Pi,
  useEffect: Ne,
  useErrorBoundary: Us,
  useId: ui,
  useImperativeHandle: sr,
  useInsertionEffect: Ni,
  useLayoutEffect: Xe,
  useMemo: Je,
  useReducer: en,
  useRef: _e,
  useState: Be,
  useSyncExternalStore: Mi,
  useTransition: ki,
  version: ia
}, Symbol.toStringTag, { value: "Module" }));
function Ii(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var sa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, aa = /* @__PURE__ */ Ii(
  function(e) {
    return sa.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function ca(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ua(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var la = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ua(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var s = ca(o);
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
}(), pe = "-ms-", Zt = "-moz-", U = "-webkit-", an = "comm", cn = "rule", un = "decl", fa = "@import", ji = "@keyframes", da = "@layer", pa = Math.abs, ar = String.fromCharCode, ma = Object.assign;
function ha(e, t) {
  return fe(e, 0) ^ 45 ? (((t << 2 ^ fe(e, 0)) << 2 ^ fe(e, 1)) << 2 ^ fe(e, 2)) << 2 ^ fe(e, 3) : 0;
}
function Di(e) {
  return e.trim();
}
function _a(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function W(e, t, r) {
  return e.replace(t, r);
}
function Wr(e, t) {
  return e.indexOf(t);
}
function fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function wt(e, t, r) {
  return e.slice(t, r);
}
function ke(e) {
  return e.length;
}
function ln(e) {
  return e.length;
}
function Dt(e, t) {
  return t.push(e), e;
}
function ya(e, t) {
  return e.map(t).join("");
}
var cr = 1, mt = 1, Vi = 0, ve = 0, se = 0, yt = "";
function ur(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: cr, column: mt, length: s, return: "" };
}
function Et(e, t) {
  return ma(ur("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function va() {
  return se;
}
function ga() {
  return se = ve > 0 ? fe(yt, --ve) : 0, mt--, se === 10 && (mt = 1, cr--), se;
}
function be() {
  return se = ve < Vi ? fe(yt, ve++) : 0, mt++, se === 10 && (mt = 1, cr++), se;
}
function Ae() {
  return fe(yt, ve);
}
function Wt() {
  return ve;
}
function kt(e, t) {
  return wt(yt, e, t);
}
function $t(e) {
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
function Li(e) {
  return cr = mt = 1, Vi = ke(yt = e), ve = 0, [];
}
function zi(e) {
  return yt = "", e;
}
function Yt(e) {
  return Di(kt(ve - 1, Yr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ba(e) {
  for (; (se = Ae()) && se < 33; )
    be();
  return $t(e) > 2 || $t(se) > 3 ? "" : " ";
}
function Ea(e, t) {
  for (; --t && be() && !(se < 48 || se > 102 || se > 57 && se < 65 || se > 70 && se < 97); )
    ;
  return kt(e, Wt() + (t < 6 && Ae() == 32 && be() == 32));
}
function Yr(e) {
  for (; be(); )
    switch (se) {
      case e:
        return ve;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yr(se);
        break;
      case 40:
        e === 41 && Yr(e);
        break;
      case 92:
        be();
        break;
    }
  return ve;
}
function xa(e, t) {
  for (; be() && e + se !== 57; )
    if (e + se === 84 && Ae() === 47)
      break;
  return "/*" + kt(t, ve - 1) + "*" + ar(e === 47 ? e : be());
}
function Ta(e) {
  for (; !$t(Ae()); )
    be();
  return kt(e, ve);
}
function Sa(e) {
  return zi(Ht("", null, null, null, [""], e = Li(e), 0, [0], e));
}
function Ht(e, t, r, n, o, i, s, a, u) {
  for (var l = 0, f = 0, c = s, d = 0, h = 0, v = 0, p = 1, m = 1, g = 1, S = 0, O = "", E = o, _ = i, N = n, $ = O; m; )
    switch (v = S, S = be()) {
      case 40:
        if (v != 108 && fe($, c - 1) == 58) {
          Wr($ += W(Yt(S), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += Yt(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += ba(v);
        break;
      case 92:
        $ += Ea(Wt() - 1, 7);
        continue;
      case 47:
        switch (Ae()) {
          case 42:
          case 47:
            Dt(Oa(xa(be(), Wt()), t, r), u);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * p:
        a[l++] = ke($) * g;
      case 125 * p:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            m = 0;
          case 59 + f:
            g == -1 && ($ = W($, /\f/g, "")), h > 0 && ke($) - c && Dt(h > 32 ? Zn($ + ";", n, r, c - 1) : Zn(W($, " ", "") + ";", n, r, c - 2), u);
            break;
          case 59:
            $ += ";";
          default:
            if (Dt(N = Jn($, t, r, l, f, o, a, O, E = [], _ = [], c), i), S === 123)
              if (f === 0)
                Ht($, t, N, N, E, i, c, a, _);
              else
                switch (d === 99 && fe($, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ht(e, N, N, n && Dt(Jn(e, N, N, 0, 0, o, a, O, o, E = [], c), _), o, _, c, a, n ? E : _);
                    break;
                  default:
                    Ht($, N, N, N, [""], _, 0, a, _);
                }
        }
        l = f = h = 0, p = g = 1, O = $ = "", c = s;
        break;
      case 58:
        c = 1 + ke($), h = v;
      default:
        if (p < 1) {
          if (S == 123)
            --p;
          else if (S == 125 && p++ == 0 && ga() == 125)
            continue;
        }
        switch ($ += ar(S), S * p) {
          case 38:
            g = f > 0 ? 1 : ($ += "\f", -1);
            break;
          case 44:
            a[l++] = (ke($) - 1) * g, g = 1;
            break;
          case 64:
            Ae() === 45 && ($ += Yt(be())), d = Ae(), f = c = ke(O = $ += Ta(Wt())), S++;
            break;
          case 45:
            v === 45 && ke($) == 2 && (p = 0);
        }
    }
  return i;
}
function Jn(e, t, r, n, o, i, s, a, u, l, f) {
  for (var c = o - 1, d = o === 0 ? i : [""], h = ln(d), v = 0, p = 0, m = 0; v < n; ++v)
    for (var g = 0, S = wt(e, c + 1, c = pa(p = s[v])), O = e; g < h; ++g)
      (O = Di(p > 0 ? d[g] + " " + S : W(S, /&\f/g, d[g]))) && (u[m++] = O);
  return ur(e, t, r, o === 0 ? cn : a, u, l, f);
}
function Oa(e, t, r) {
  return ur(e, t, r, an, ar(va()), wt(e, 2, -2), 0);
}
function Zn(e, t, r, n) {
  return ur(e, t, r, un, wt(e, 0, n), wt(e, n + 1, -1), n);
}
function ct(e, t) {
  for (var r = "", n = ln(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Ca(e, t, r, n) {
  switch (e.type) {
    case da:
      if (e.children.length)
        break;
    case fa:
    case un:
      return e.return = e.return || e.value;
    case an:
      return "";
    case ji:
      return e.return = e.value + "{" + ct(e.children, n) + "}";
    case cn:
      e.value = e.props.join(",");
  }
  return ke(r = ct(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function wa(e) {
  var t = ln(e);
  return function(r, n, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](r, n, o, i) || "";
    return s;
  };
}
function $a(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ra = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ae(), o === 38 && i === 12 && (r[n] = 1), !$t(i); )
    be();
  return kt(t, ve);
}, Pa = function(t, r) {
  var n = -1, o = 44;
  do
    switch ($t(o)) {
      case 0:
        o === 38 && Ae() === 12 && (r[n] = 1), t[n] += Ra(ve - 1, r, n);
        break;
      case 2:
        t[n] += Yt(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ae() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += ar(o);
    }
  while (o = be());
  return t;
}, ka = function(t, r) {
  return zi(Pa(Li(t), r));
}, Qn = /* @__PURE__ */ new WeakMap(), Na = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Qn.get(n)) && !o) {
      Qn.set(t, !0);
      for (var i = [], s = ka(r, i), a = n.props, u = 0, l = 0; u < s.length; u++)
        for (var f = 0; f < a.length; f++, l++)
          t.props[l] = i[u] ? s[u].replace(/&\f/g, a[f]) : a[f] + " " + s[u];
    }
  }
}, Aa = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, Ma = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Ia = function(t) {
  return t.type === "comm" && t.children.indexOf(Ma) > -1;
}, ja = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var i = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s = !!r.parent, a = s ? r.parent.children : (
          // global rule at the root level
          o
        ), u = a.length - 1; u >= 0; u--) {
          var l = a[u];
          if (l.line < r.line)
            break;
          if (l.column < r.column) {
            if (Ia(l))
              return;
            break;
          }
        }
        i.forEach(function(f) {
          console.error('The pseudo class "' + f + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + f.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Fi = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Da = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Fi(r[n]))
      return !0;
  return !1;
}, eo = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Va = function(t, r, n) {
  Fi(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), eo(t)) : Da(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), eo(t)));
};
function Bi(e, t) {
  switch (ha(e, t)) {
    case 5103:
      return U + "print-" + e + e;
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
      return U + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return U + e + Zt + e + pe + e + e;
    case 6828:
    case 4268:
      return U + e + pe + e + e;
    case 6165:
      return U + e + pe + "flex-" + e + e;
    case 5187:
      return U + e + W(e, /(\w+).+(:[^]+)/, U + "box-$1$2" + pe + "flex-$1$2") + e;
    case 5443:
      return U + e + pe + "flex-item-" + W(e, /flex-|-self/, "") + e;
    case 4675:
      return U + e + pe + "flex-line-pack" + W(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return U + e + pe + W(e, "shrink", "negative") + e;
    case 5292:
      return U + e + pe + W(e, "basis", "preferred-size") + e;
    case 6060:
      return U + "box-" + W(e, "-grow", "") + U + e + pe + W(e, "grow", "positive") + e;
    case 4554:
      return U + W(e, /([^-])(transform)/g, "$1" + U + "$2") + e;
    case 6187:
      return W(W(W(e, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return W(e, /(image-set\([^]*)/, U + "$1$`$1");
    case 4968:
      return W(W(e, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + U + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return W(e, /(.+)-inline(.+)/, U + "$1$2") + e;
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
      if (ke(e) - 1 - t > 6)
        switch (fe(e, t + 1)) {
          case 109:
            if (fe(e, t + 4) !== 45)
              break;
          case 102:
            return W(e, /(.+:)(.+)-([^]+)/, "$1" + U + "$2-$3$1" + Zt + (fe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Wr(e, "stretch") ? Bi(W(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (fe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (fe(e, ke(e) - 3 - (~Wr(e, "!important") && 10))) {
        case 107:
          return W(e, ":", ":" + U) + e;
        case 101:
          return W(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + U + (fe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + U + "$2$3$1" + pe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (fe(e, t + 11)) {
        case 114:
          return U + e + pe + W(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return U + e + pe + W(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return U + e + pe + W(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return U + e + pe + e + e;
  }
  return e;
}
var La = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case un:
        t.return = Bi(t.value, t.length);
        break;
      case ji:
        return ct([Et(t, {
          value: W(t.value, "@", "@" + U)
        })], o);
      case cn:
        if (t.length)
          return ya(t.props, function(i) {
            switch (_a(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ct([Et(t, {
                  props: [W(i, /:(read-\w+)/, ":" + Zt + "$1")]
                })], o);
              case "::placeholder":
                return ct([Et(t, {
                  props: [W(i, /:(plac\w+)/, ":" + U + "input-$1")]
                }), Et(t, {
                  props: [W(i, /:(plac\w+)/, ":" + Zt + "$1")]
                }), Et(t, {
                  props: [W(i, /:(plac\w+)/, pe + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, za = [La], Ui = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(p) {
      var m = p.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || za;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(p) {
      for (var m = p.getAttribute("data-emotion").split(" "), g = 1; g < m.length; g++)
        i[m[g]] = !0;
      a.push(p);
    }
  );
  var u, l = [Na, Aa];
  process.env.NODE_ENV !== "production" && l.push(ja({
    get compat() {
      return v.compat;
    }
  }), Va);
  {
    var f, c = [Ca, process.env.NODE_ENV !== "production" ? function(p) {
      p.root || (p.return ? f.insert(p.return) : p.value && p.type !== an && f.insert(p.value + "{}"));
    } : $a(function(p) {
      f.insert(p);
    })], d = wa(l.concat(o, c)), h = function(m) {
      return ct(Sa(m), d);
    };
    u = function(m, g, S, O) {
      f = S, process.env.NODE_ENV !== "production" && g.map !== void 0 && (f = {
        insert: function(_) {
          S.insert(_ + g.map);
        }
      }), h(m ? m + "{" + g.styles + "}" : g.styles), O && (v.inserted[g.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new la({
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
    insert: u
  };
  return v.sheet.hydrate(a), v;
};
function Fa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vt = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var to;
function Ba() {
  return to || (to = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function O(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === n || x === l || x === i || x === o || x === c || x === d || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === h || x.$$typeof === s || x.$$typeof === a || x.$$typeof === f || x.$$typeof === m || x.$$typeof === g || x.$$typeof === S || x.$$typeof === p);
    }
    function E(x) {
      if (typeof x == "object" && x !== null) {
        var ye = x.$$typeof;
        switch (ye) {
          case t:
            var R = x.type;
            switch (R) {
              case u:
              case l:
              case n:
              case i:
              case o:
              case c:
                return R;
              default:
                var ze = R && R.$$typeof;
                switch (ze) {
                  case a:
                  case f:
                  case v:
                  case h:
                  case s:
                    return ze;
                  default:
                    return ye;
                }
            }
          case r:
            return ye;
        }
      }
    }
    var _ = u, N = l, $ = a, te = s, B = t, C = f, G = n, J = v, ie = h, Z = r, ce = i, Q = o, he = c, ae = !1;
    function Le(x) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(x) || E(x) === u;
    }
    function b(x) {
      return E(x) === l;
    }
    function T(x) {
      return E(x) === a;
    }
    function V(x) {
      return E(x) === s;
    }
    function I(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function k(x) {
      return E(x) === f;
    }
    function L(x) {
      return E(x) === n;
    }
    function A(x) {
      return E(x) === v;
    }
    function j(x) {
      return E(x) === h;
    }
    function z(x) {
      return E(x) === r;
    }
    function M(x) {
      return E(x) === i;
    }
    function F(x) {
      return E(x) === o;
    }
    function ue(x) {
      return E(x) === c;
    }
    Y.AsyncMode = _, Y.ConcurrentMode = N, Y.ContextConsumer = $, Y.ContextProvider = te, Y.Element = B, Y.ForwardRef = C, Y.Fragment = G, Y.Lazy = J, Y.Memo = ie, Y.Portal = Z, Y.Profiler = ce, Y.StrictMode = Q, Y.Suspense = he, Y.isAsyncMode = Le, Y.isConcurrentMode = b, Y.isContextConsumer = T, Y.isContextProvider = V, Y.isElement = I, Y.isForwardRef = k, Y.isFragment = L, Y.isLazy = A, Y.isMemo = j, Y.isPortal = z, Y.isProfiler = M, Y.isStrictMode = F, Y.isSuspense = ue, Y.isValidElementType = O, Y.typeOf = E;
  }()), Y;
}
var H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function Ua() {
  if (ro)
    return H;
  ro = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function O(_) {
    if (typeof _ == "object" && _ !== null) {
      var N = _.$$typeof;
      switch (N) {
        case t:
          switch (_ = _.type, _) {
            case u:
            case l:
            case n:
            case i:
            case o:
            case c:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case a:
                case f:
                case v:
                case h:
                case s:
                  return _;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function E(_) {
    return O(_) === l;
  }
  return H.AsyncMode = u, H.ConcurrentMode = l, H.ContextConsumer = a, H.ContextProvider = s, H.Element = t, H.ForwardRef = f, H.Fragment = n, H.Lazy = v, H.Memo = h, H.Portal = r, H.Profiler = i, H.StrictMode = o, H.Suspense = c, H.isAsyncMode = function(_) {
    return E(_) || O(_) === u;
  }, H.isConcurrentMode = E, H.isContextConsumer = function(_) {
    return O(_) === a;
  }, H.isContextProvider = function(_) {
    return O(_) === s;
  }, H.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, H.isForwardRef = function(_) {
    return O(_) === f;
  }, H.isFragment = function(_) {
    return O(_) === n;
  }, H.isLazy = function(_) {
    return O(_) === v;
  }, H.isMemo = function(_) {
    return O(_) === h;
  }, H.isPortal = function(_) {
    return O(_) === r;
  }, H.isProfiler = function(_) {
    return O(_) === i;
  }, H.isStrictMode = function(_) {
    return O(_) === o;
  }, H.isSuspense = function(_) {
    return O(_) === c;
  }, H.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === n || _ === l || _ === i || _ === o || _ === c || _ === d || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === h || _.$$typeof === s || _.$$typeof === a || _.$$typeof === f || _.$$typeof === m || _.$$typeof === g || _.$$typeof === S || _.$$typeof === p);
  }, H.typeOf = O, H;
}
var no;
function fn() {
  return no || (no = 1, process.env.NODE_ENV === "production" ? Vt.exports = Ua() : Vt.exports = Ba()), Vt.exports;
}
var Wi = fn(), Wa = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ya = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Yi = {};
Yi[Wi.ForwardRef] = Wa;
Yi[Wi.Memo] = Ya;
var Ha = !0;
function dn(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var lr = function(t, r, n) {
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
  Ha === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, fr = function(t, r, n) {
  lr(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function qa(e) {
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
var Ka = {
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
}, oo = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ga = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Xa = /[A-Z]|^ms/g, Hi = /_EMO_([^_]+?)_([^]*?)_EMO_/g, pn = function(t) {
  return t.charCodeAt(1) === 45;
}, io = function(t) {
  return t != null && typeof t != "boolean";
}, Pr = /* @__PURE__ */ Ii(function(e) {
  return pn(e) ? e : e.replace(Xa, "-$&").toLowerCase();
}), Qt = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Hi, function(n, o, i) {
          return we = {
            name: o,
            styles: i,
            next: we
          }, o;
        });
  }
  return Ka[t] !== 1 && !pn(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var Ja = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Za = ["normal", "none", "initial", "inherit", "unset"], Qa = Qt, ec = /^-ms-/, tc = /-(.)/g, so = {};
  Qt = function(t, r) {
    if (t === "content" && (typeof r != "string" || Za.indexOf(r) === -1 && !Ja.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = Qa(t, r);
    return n !== "" && !pn(t) && t.indexOf("-") !== -1 && so[t] === void 0 && (so[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(ec, "ms-").replace(tc, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var qi = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Rt(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(qi);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return we = {
          name: r.name,
          styles: r.styles,
          next: we
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            we = {
              name: n.name,
              styles: n.styles,
              next: we
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return rc(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = we, s = r(e);
        return we = i, Rt(e, t, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var a = [], u = r.replace(Hi, function(f, c, d) {
          var h = "animation" + a.length;
          return a.push("const " + h + " = keyframes`" + d.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + h + "}";
        });
        a.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(a, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var l = t[r];
  return l !== void 0 ? l : r;
}
function rc(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Rt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : io(s) && (n += Pr(i) + ":" + Qt(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(qi);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var a = 0; a < s.length; a++)
            io(s[a]) && (n += Pr(i) + ":" + Qt(i, s[a]) + ";");
        else {
          var u = Rt(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Pr(i) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Ga), n += i + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var ao = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ki;
process.env.NODE_ENV !== "production" && (Ki = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var we, ht = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  we = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (o = !1, i += Rt(n, r, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(oo), i += s[0]);
  for (var a = 1; a < t.length; a++)
    i += Rt(n, r, t[a]), o && (process.env.NODE_ENV !== "production" && s[a] === void 0 && console.error(oo), i += s[a]);
  var u;
  process.env.NODE_ENV !== "production" && (i = i.replace(Ki, function(d) {
    return u = d, "";
  })), ao.lastIndex = 0;
  for (var l = "", f; (f = ao.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    f[1];
  var c = qa(i) + l;
  return process.env.NODE_ENV !== "production" ? {
    name: c,
    styles: i,
    map: u,
    next: we,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: c,
    styles: i,
    next: we
  };
}, nc = function(t) {
  return t();
}, Gi = Xn.useInsertionEffect ? Xn.useInsertionEffect : !1, mn = Gi || nc, co = Gi || Xe, oc = {}.hasOwnProperty, hn = /* @__PURE__ */ Ke(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ui({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (hn.displayName = "EmotionCacheContext");
var ic = hn.Provider, dr = function(t) {
  return /* @__PURE__ */ _t(function(r, n) {
    var o = Pe(hn);
    return t(r, o, n);
  });
}, Ze = /* @__PURE__ */ Ke({});
process.env.NODE_ENV !== "production" && (Ze.displayName = "EmotionThemeContext");
var uo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", lo = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", sc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return lr(r, n, o), mn(function() {
    return fr(r, n, o);
  }), null;
}, ac = /* @__PURE__ */ dr(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[uo], i = [n], s = "";
  typeof e.className == "string" ? s = dn(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = ht(i, void 0, Pe(Ze));
  if (process.env.NODE_ENV !== "production" && a.name.indexOf("-") === -1) {
    var u = e[lo];
    u && (a = ht([a, "label:" + u + ";"]));
  }
  s += t.key + "-" + a.name;
  var l = {};
  for (var f in e)
    oc.call(e, f) && f !== "css" && f !== uo && (process.env.NODE_ENV === "production" || f !== lo) && (l[f] = e[f]);
  return l.ref = r, l.className = s, /* @__PURE__ */ le(Ee, null, /* @__PURE__ */ le(sc, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ le(o, l));
});
process.env.NODE_ENV !== "production" && (ac.displayName = "EmotionCssPropInternal");
var cc = {
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
}, fo = !1, uc = /* @__PURE__ */ dr(function(e, t) {
  process.env.NODE_ENV !== "production" && !fo && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), fo = !0);
  var r = e.styles, n = ht([r], void 0, Pe(Ze)), o = _e();
  return co(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, u = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), u !== null && (a = !0, u.setAttribute("data-emotion", i), s.hydrate([u])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), co(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && fr(t, n.next, !0), s.tags.length) {
      var u = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = u, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (uc.displayName = "EmotionGlobal");
function lc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return ht(t);
}
var _n = function() {
  var t = lc.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, fc = function e(t) {
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
function dc(e, t, r) {
  var n = [], o = dn(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var pc = function(t) {
  var r = t.cache, n = t.serializedArr;
  return mn(function() {
    for (var o = 0; o < n.length; o++)
      fr(r, n[o], !1);
  }), null;
}, mc = /* @__PURE__ */ dr(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var l = arguments.length, f = new Array(l), c = 0; c < l; c++)
      f[c] = arguments[c];
    var d = ht(f, t.registered);
    return n.push(d), lr(t, d, !1), t.key + "-" + d.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var l = arguments.length, f = new Array(l), c = 0; c < l; c++)
      f[c] = arguments[c];
    return dc(t.registered, o, fc(f));
  }, s = {
    css: o,
    cx: i,
    theme: Pe(Ze)
  }, a = e.children(s);
  return r = !0, /* @__PURE__ */ le(Ee, null, /* @__PURE__ */ le(pc, {
    cache: t,
    serializedArr: n
  }), a);
});
process.env.NODE_ENV !== "production" && (mc.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var po = !0, hc = typeof jest < "u" || typeof vi < "u";
  if (po && !hc) {
    var mo = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : po ? window : global
    ), ho = "__EMOTION_REACT_" + cc.version.split(".")[0] + "__";
    mo[ho] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), mo[ho] = !0;
  }
}
var _c = aa, yc = function(t) {
  return t !== "theme";
}, _o = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? _c : yc;
}, yo = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, vo = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, vc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return lr(r, n, o), mn(function() {
    return fr(r, n, o);
  }), null;
}, gc = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var a = yo(t, r, n), u = a || _o(o), l = !u("as");
  return function() {
    var f = arguments, c = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && c.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      c.push.apply(c, f);
    else {
      process.env.NODE_ENV !== "production" && f[0][0] === void 0 && console.error(vo), c.push(f[0][0]);
      for (var d = f.length, h = 1; h < d; h++)
        process.env.NODE_ENV !== "production" && f[0][h] === void 0 && console.error(vo), c.push(f[h], f[0][h]);
    }
    var v = dr(function(p, m, g) {
      var S = l && p.as || o, O = "", E = [], _ = p;
      if (p.theme == null) {
        _ = {};
        for (var N in p)
          _[N] = p[N];
        _.theme = Pe(Ze);
      }
      typeof p.className == "string" ? O = dn(m.registered, E, p.className) : p.className != null && (O = p.className + " ");
      var $ = ht(c.concat(E), m.registered, _);
      O += m.key + "-" + $.name, s !== void 0 && (O += " " + s);
      var te = l && a === void 0 ? _o(S) : u, B = {};
      for (var C in p)
        l && C === "as" || // $FlowFixMe
        te(C) && (B[C] = p[C]);
      return B.className = O, B.ref = g, /* @__PURE__ */ le(Ee, null, /* @__PURE__ */ le(vc, {
        cache: m,
        serialized: $,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ le(S, B));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = c, v.__emotion_forwardProp = a, Object.defineProperty(v, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), v.withComponent = function(p, m) {
      return e(p, P({}, r, m, {
        shouldForwardProp: yo(v, m, !0)
      })).apply(void 0, c);
    }, v;
  };
}, bc = [
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
], Hr = gc.bind();
bc.forEach(function(e) {
  Hr[e] = Hr(e);
});
var qr = { exports: {} }, kr, go;
function yn() {
  if (go)
    return kr;
  go = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kr = e, kr;
}
var Nr, bo;
function Ec() {
  if (bo)
    return Nr;
  bo = 1;
  var e = yn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Nr = function() {
    function n(s, a, u, l, f, c) {
      if (c !== e) {
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
  }, Nr;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ar, Eo;
function xc() {
  if (Eo)
    return Ar;
  Eo = 1;
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
      var u = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        l[f] = f;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ar = o() ? Object.assign : function(i, s) {
    for (var a, u = n(i), l, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var c in a)
        t.call(a, c) && (u[c] = a[c]);
      if (e) {
        l = e(a);
        for (var d = 0; d < l.length; d++)
          r.call(a, l[d]) && (u[l[d]] = a[l[d]]);
      }
    }
    return u;
  }, Ar;
}
var Mr, xo;
function Xi() {
  return xo || (xo = 1, Mr = Function.call.bind(Object.prototype.hasOwnProperty)), Mr;
}
var Ir, To;
function Tc() {
  if (To)
    return Ir;
  To = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = yn(), r = {}, n = Xi();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, a, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var c;
          try {
            if (typeof i[f] != "function") {
              var d = Error(
                (u || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            c = i[f](s, f, u, a, null, t);
          } catch (v) {
            c = v;
          }
          if (c && !(c instanceof Error) && e(
            (u || "React class") + ": type specification of " + a + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof c + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), c instanceof Error && !(c.message in r)) {
            r[c.message] = !0;
            var h = l ? l() : "";
            e(
              "Failed " + a + " type: " + c.message + (h ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ir = o, Ir;
}
var jr, So;
function Sc() {
  if (So)
    return jr;
  So = 1;
  var e = fn(), t = xc(), r = yn(), n = Xi(), o = Tc(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var u = "Warning: " + a;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return jr = function(a, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function c(b) {
      var T = b && (l && b[l] || b[f]);
      if (typeof T == "function")
        return T;
    }
    var d = "<<anonymous>>", h = {
      array: g("array"),
      bigint: g("bigint"),
      bool: g("boolean"),
      func: g("function"),
      number: g("number"),
      object: g("object"),
      string: g("string"),
      symbol: g("symbol"),
      any: S(),
      arrayOf: O,
      element: E(),
      elementType: _(),
      instanceOf: N,
      node: C(),
      objectOf: te,
      oneOf: $,
      oneOfType: B,
      shape: J,
      exact: ie
    };
    function v(b, T) {
      return b === T ? b !== 0 || 1 / b === 1 / T : b !== b && T !== T;
    }
    function p(b, T) {
      this.message = b, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function m(b) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, V = 0;
      function I(L, A, j, z, M, F, ue) {
        if (z = z || d, F = F || j, ue !== r) {
          if (u) {
            var x = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw x.name = "Invariant Violation", x;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = z + ":" + j;
            !T[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            V < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[ye] = !0, V++);
          }
        }
        return A[j] == null ? L ? A[j] === null ? new p("The " + M + " `" + F + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new p("The " + M + " `" + F + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : b(A, j, z, M, F);
      }
      var k = I.bind(null, !1);
      return k.isRequired = I.bind(null, !0), k;
    }
    function g(b) {
      function T(V, I, k, L, A, j) {
        var z = V[I], M = Q(z);
        if (M !== b) {
          var F = he(z);
          return new p(
            "Invalid " + L + " `" + A + "` of type " + ("`" + F + "` supplied to `" + k + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return m(T);
    }
    function S() {
      return m(s);
    }
    function O(b) {
      function T(V, I, k, L, A) {
        if (typeof b != "function")
          return new p("Property `" + A + "` of component `" + k + "` has invalid PropType notation inside arrayOf.");
        var j = V[I];
        if (!Array.isArray(j)) {
          var z = Q(j);
          return new p("Invalid " + L + " `" + A + "` of type " + ("`" + z + "` supplied to `" + k + "`, expected an array."));
        }
        for (var M = 0; M < j.length; M++) {
          var F = b(j, M, k, L, A + "[" + M + "]", r);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return m(T);
    }
    function E() {
      function b(T, V, I, k, L) {
        var A = T[V];
        if (!a(A)) {
          var j = Q(A);
          return new p("Invalid " + k + " `" + L + "` of type " + ("`" + j + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(b);
    }
    function _() {
      function b(T, V, I, k, L) {
        var A = T[V];
        if (!e.isValidElementType(A)) {
          var j = Q(A);
          return new p("Invalid " + k + " `" + L + "` of type " + ("`" + j + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(b);
    }
    function N(b) {
      function T(V, I, k, L, A) {
        if (!(V[I] instanceof b)) {
          var j = b.name || d, z = Le(V[I]);
          return new p("Invalid " + L + " `" + A + "` of type " + ("`" + z + "` supplied to `" + k + "`, expected ") + ("instance of `" + j + "`."));
        }
        return null;
      }
      return m(T);
    }
    function $(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function T(V, I, k, L, A) {
        for (var j = V[I], z = 0; z < b.length; z++)
          if (v(j, b[z]))
            return null;
        var M = JSON.stringify(b, function(ue, x) {
          var ye = he(x);
          return ye === "symbol" ? String(x) : x;
        });
        return new p("Invalid " + L + " `" + A + "` of value `" + String(j) + "` " + ("supplied to `" + k + "`, expected one of " + M + "."));
      }
      return m(T);
    }
    function te(b) {
      function T(V, I, k, L, A) {
        if (typeof b != "function")
          return new p("Property `" + A + "` of component `" + k + "` has invalid PropType notation inside objectOf.");
        var j = V[I], z = Q(j);
        if (z !== "object")
          return new p("Invalid " + L + " `" + A + "` of type " + ("`" + z + "` supplied to `" + k + "`, expected an object."));
        for (var M in j)
          if (n(j, M)) {
            var F = b(j, M, k, L, A + "." + M, r);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return m(T);
    }
    function B(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var T = 0; T < b.length; T++) {
        var V = b[T];
        if (typeof V != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(V) + " at index " + T + "."
          ), s;
      }
      function I(k, L, A, j, z) {
        for (var M = [], F = 0; F < b.length; F++) {
          var ue = b[F], x = ue(k, L, A, j, z, r);
          if (x == null)
            return null;
          x.data && n(x.data, "expectedType") && M.push(x.data.expectedType);
        }
        var ye = M.length > 0 ? ", expected one of type [" + M.join(", ") + "]" : "";
        return new p("Invalid " + j + " `" + z + "` supplied to " + ("`" + A + "`" + ye + "."));
      }
      return m(I);
    }
    function C() {
      function b(T, V, I, k, L) {
        return Z(T[V]) ? null : new p("Invalid " + k + " `" + L + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return m(b);
    }
    function G(b, T, V, I, k) {
      return new p(
        (b || "React class") + ": " + T + " type `" + V + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + k + "`."
      );
    }
    function J(b) {
      function T(V, I, k, L, A) {
        var j = V[I], z = Q(j);
        if (z !== "object")
          return new p("Invalid " + L + " `" + A + "` of type `" + z + "` " + ("supplied to `" + k + "`, expected `object`."));
        for (var M in b) {
          var F = b[M];
          if (typeof F != "function")
            return G(k, L, A, M, he(F));
          var ue = F(j, M, k, L, A + "." + M, r);
          if (ue)
            return ue;
        }
        return null;
      }
      return m(T);
    }
    function ie(b) {
      function T(V, I, k, L, A) {
        var j = V[I], z = Q(j);
        if (z !== "object")
          return new p("Invalid " + L + " `" + A + "` of type `" + z + "` " + ("supplied to `" + k + "`, expected `object`."));
        var M = t({}, V[I], b);
        for (var F in M) {
          var ue = b[F];
          if (n(b, F) && typeof ue != "function")
            return G(k, L, A, F, he(ue));
          if (!ue)
            return new p(
              "Invalid " + L + " `" + A + "` key `" + F + "` supplied to `" + k + "`.\nBad object: " + JSON.stringify(V[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var x = ue(j, F, k, L, A + "." + F, r);
          if (x)
            return x;
        }
        return null;
      }
      return m(T);
    }
    function Z(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(Z);
          if (b === null || a(b))
            return !0;
          var T = c(b);
          if (T) {
            var V = T.call(b), I;
            if (T !== b.entries) {
              for (; !(I = V.next()).done; )
                if (!Z(I.value))
                  return !1;
            } else
              for (; !(I = V.next()).done; ) {
                var k = I.value;
                if (k && !Z(k[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ce(b, T) {
      return b === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function Q(b) {
      var T = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : ce(T, b) ? "symbol" : T;
    }
    function he(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var T = Q(b);
      if (T === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function ae(b) {
      var T = he(b);
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
    function Le(b) {
      return !b.constructor || !b.constructor.name ? d : b.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, jr;
}
if (process.env.NODE_ENV !== "production") {
  var Oc = fn(), Cc = !0;
  qr.exports = Sc()(Oc.isElement, Cc);
} else
  qr.exports = Ec()();
var wc = qr.exports;
const y = /* @__PURE__ */ Fa(wc);
var $c = 0;
function de(e, t, r, n, o, i) {
  var s, a, u = {};
  for (a in t)
    a == "ref" ? s = t[a] : u[a] = t[a];
  var l = { type: e, props: u, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --$c, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps))
    for (a in s)
      u[a] === void 0 && (u[a] = s[a]);
  return w.vnode && w.vnode(l), l;
}
/**
 * @mui/styled-engine v5.15.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Rc(e, t) {
  const r = Hr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Pc = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function kc(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Fe(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Ji(e) {
  if (!Fe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Ji(e[r]);
  }), t;
}
function Re(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? P({}, e) : e;
  return Fe(e) && Fe(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (Fe(t[o]) && o in e && Fe(e[o]) ? n[o] = Re(e[o], t[o], r) : r.clone ? n[o] = Fe(t[o]) ? Ji(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
function Nc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ac(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !Nc(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Mc = kc(y.elementType, Ac), Ic = "exact-prop: ​";
function Zi(e) {
  return process.env.NODE_ENV === "production" ? e : P({}, e, {
    [Ic]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
var Kr = { exports: {} }, q = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oo;
function jc() {
  return Oo || (Oo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v = !1, p = !1, m = !1, g = !1, S = !1, O;
    O = Symbol.for("react.module.reference");
    function E(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === r || R === o || S || R === n || R === l || R === f || g || R === h || v || p || m || typeof R == "object" && R !== null && (R.$$typeof === d || R.$$typeof === c || R.$$typeof === i || R.$$typeof === s || R.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === O || R.getModuleId !== void 0));
    }
    function _(R) {
      if (typeof R == "object" && R !== null) {
        var ze = R.$$typeof;
        switch (ze) {
          case e:
            var Qe = R.type;
            switch (Qe) {
              case r:
              case o:
              case n:
              case l:
              case f:
                return Qe;
              default:
                var Mt = Qe && Qe.$$typeof;
                switch (Mt) {
                  case a:
                  case s:
                  case u:
                  case d:
                  case c:
                  case i:
                    return Mt;
                  default:
                    return ze;
                }
            }
          case t:
            return ze;
        }
      }
    }
    var N = s, $ = i, te = e, B = u, C = r, G = d, J = c, ie = t, Z = o, ce = n, Q = l, he = f, ae = !1, Le = !1;
    function b(R) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function T(R) {
      return Le || (Le = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(R) {
      return _(R) === s;
    }
    function I(R) {
      return _(R) === i;
    }
    function k(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function L(R) {
      return _(R) === u;
    }
    function A(R) {
      return _(R) === r;
    }
    function j(R) {
      return _(R) === d;
    }
    function z(R) {
      return _(R) === c;
    }
    function M(R) {
      return _(R) === t;
    }
    function F(R) {
      return _(R) === o;
    }
    function ue(R) {
      return _(R) === n;
    }
    function x(R) {
      return _(R) === l;
    }
    function ye(R) {
      return _(R) === f;
    }
    q.ContextConsumer = N, q.ContextProvider = $, q.Element = te, q.ForwardRef = B, q.Fragment = C, q.Lazy = G, q.Memo = J, q.Portal = ie, q.Profiler = Z, q.StrictMode = ce, q.Suspense = Q, q.SuspenseList = he, q.isAsyncMode = b, q.isConcurrentMode = T, q.isContextConsumer = V, q.isContextProvider = I, q.isElement = k, q.isForwardRef = L, q.isFragment = A, q.isLazy = j, q.isMemo = z, q.isPortal = M, q.isProfiler = F, q.isStrictMode = ue, q.isSuspense = x, q.isSuspenseList = ye, q.isValidElementType = E, q.typeOf = _;
  }()), q;
}
var K = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Co;
function Dc() {
  if (Co)
    return K;
  Co = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function p(m) {
    if (typeof m == "object" && m !== null) {
      var g = m.$$typeof;
      switch (g) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case l:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case a:
                case s:
                case u:
                case d:
                case c:
                case i:
                  return m;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return K.ContextConsumer = s, K.ContextProvider = i, K.Element = e, K.ForwardRef = u, K.Fragment = r, K.Lazy = d, K.Memo = c, K.Portal = t, K.Profiler = o, K.StrictMode = n, K.Suspense = l, K.SuspenseList = f, K.isAsyncMode = function() {
    return !1;
  }, K.isConcurrentMode = function() {
    return !1;
  }, K.isContextConsumer = function(m) {
    return p(m) === s;
  }, K.isContextProvider = function(m) {
    return p(m) === i;
  }, K.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, K.isForwardRef = function(m) {
    return p(m) === u;
  }, K.isFragment = function(m) {
    return p(m) === r;
  }, K.isLazy = function(m) {
    return p(m) === d;
  }, K.isMemo = function(m) {
    return p(m) === c;
  }, K.isPortal = function(m) {
    return p(m) === t;
  }, K.isProfiler = function(m) {
    return p(m) === o;
  }, K.isStrictMode = function(m) {
    return p(m) === n;
  }, K.isSuspense = function(m) {
    return p(m) === l;
  }, K.isSuspenseList = function(m) {
    return p(m) === f;
  }, K.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === l || m === f || m === h || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === c || m.$$typeof === i || m.$$typeof === s || m.$$typeof === u || m.$$typeof === v || m.getModuleId !== void 0);
  }, K.typeOf = p, K;
}
process.env.NODE_ENV === "production" ? Kr.exports = Dc() : Kr.exports = jc();
var wo = Kr.exports;
const Vc = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Lc(e) {
  const t = `${e}`.match(Vc);
  return t && t[1] || "";
}
function Qi(e, t = "") {
  return e.displayName || e.name || Lc(e) || t;
}
function $o(e, t, r) {
  const n = Qi(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function zc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Qi(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case wo.ForwardRef:
          return $o(e, e.render, "ForwardRef");
        case wo.Memo:
          return $o(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Fc = y.oneOfType([y.func, y.object]), Bc = Fc;
function me(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : lt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Uc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Wc = typeof window < "u" ? Xe : Ne;
function Lt(e) {
  const t = _e(e);
  return Wc(() => {
    t.current = e;
  }), _e((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Ro(...e) {
  return Je(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Uc(r, t);
    });
  }, e);
}
let pr = !0, Gr = !1, Po;
const Yc = {
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
function Hc(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && Yc[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function qc(e) {
  e.metaKey || e.altKey || e.ctrlKey || (pr = !0);
}
function Dr() {
  pr = !1;
}
function Kc() {
  this.visibilityState === "hidden" && Gr && (pr = !0);
}
function Gc(e) {
  e.addEventListener("keydown", qc, !0), e.addEventListener("mousedown", Dr, !0), e.addEventListener("pointerdown", Dr, !0), e.addEventListener("touchstart", Dr, !0), e.addEventListener("visibilitychange", Kc, !0);
}
function Xc(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return pr || Hc(t);
}
function Jc() {
  const e = Ye((o) => {
    o != null && Gc(o.ownerDocument);
  }, []), t = _e(!1);
  function r() {
    return t.current ? (Gr = !0, window.clearTimeout(Po), Po = window.setTimeout(() => {
      Gr = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function n(o) {
    return Xc(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function vn(e, t) {
  const r = P({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = P({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = P({}, i), Object.keys(o).forEach((s) => {
        r[n][s] = vn(o[s], i[s]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function es(e, t, r = void 0) {
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
const ko = (e) => e, Zc = () => {
  let e = ko;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ko;
    }
  };
}, Qc = Zc(), eu = {
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
function mr(e, t, r = "Mui") {
  const n = eu[t];
  return n ? `${r}-${n}` : `${Qc.generate(e)}-${t}`;
}
function gn(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = mr(e, o, r);
  }), n;
}
const tu = ["values", "unit", "step"], ru = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => P({}, r, {
    [n.key]: n.val
  }), {});
};
function nu(e) {
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
  } = e, o = xe(e, tu), i = ru(t), s = Object.keys(i);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r})`;
  }
  function u(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - n / 100}${r})`;
  }
  function l(d, h) {
    const v = s.indexOf(h);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r}) and (max-width:${(v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : h) - n / 100}${r})`;
  }
  function f(d) {
    return s.indexOf(d) + 1 < s.length ? l(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function c(d) {
    const h = s.indexOf(d);
    return h === 0 ? a(s[1]) : h === s.length - 1 ? u(s[h]) : l(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return P({
    keys: s,
    values: i,
    up: a,
    down: u,
    between: l,
    only: f,
    not: c,
    unit: r
  }, o);
}
const ou = {
  borderRadius: 4
}, iu = ou, su = process.env.NODE_ENV !== "production" ? y.oneOfType([y.number, y.string, y.object, y.array]) : {}, Ue = su;
function St(e, t) {
  return t ? Re(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const bn = {
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
}, No = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${bn[e]}px)`
};
function Ve(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || No;
    return t.reduce((s, a, u) => (s[i.up(i.keys[u])] = r(t[u]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || No;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || bn).indexOf(a) !== -1) {
        const u = i.up(a);
        s[u] = r(t[a], a);
      } else {
        const u = a;
        s[u] = t[u];
      }
      return s;
    }, {});
  }
  return r(t);
}
function au(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function cu(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function hr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function er(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = hr(e, r) || n, t && (o = t(o, n, e)), o;
}
function oe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], u = s.theme, l = hr(u, n) || {};
    return Ve(s, a, (c) => {
      let d = er(l, o, c);
      return c === d && typeof c == "string" && (d = er(l, o, `${t}${c === "default" ? "" : me(c)}`, c)), r === !1 ? d : {
        [r]: d
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ue
  } : {}, i.filterProps = [t], i;
}
function uu(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const lu = {
  m: "margin",
  p: "padding"
}, fu = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ao = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, du = uu((e) => {
  if (e.length > 2)
    if (Ao[e])
      e = Ao[e];
    else
      return [e];
  const [t, r] = e.split(""), n = lu[t], o = fu[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), _r = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], yr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], pu = [..._r, ...yr];
function Nt(e, t, r, n) {
  var o;
  const i = (o = hr(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ts(e) {
  return Nt(e, "spacing", 8, "spacing");
}
function At(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function mu(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = At(t, r), n), {});
}
function hu(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = du(r), i = mu(o, n), s = e[r];
  return Ve(e, s, i);
}
function rs(e, t) {
  const r = ts(e.theme);
  return Object.keys(e).map((n) => hu(e, t, n, r)).reduce(St, {});
}
function re(e) {
  return rs(e, _r);
}
re.propTypes = process.env.NODE_ENV !== "production" ? _r.reduce((e, t) => (e[t] = Ue, e), {}) : {};
re.filterProps = _r;
function ne(e) {
  return rs(e, yr);
}
ne.propTypes = process.env.NODE_ENV !== "production" ? yr.reduce((e, t) => (e[t] = Ue, e), {}) : {};
ne.filterProps = yr;
process.env.NODE_ENV !== "production" && pu.reduce((e, t) => (e[t] = Ue, e), {});
function _u(e = 8) {
  if (e.mui)
    return e;
  const t = ts({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function vr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? St(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Oe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ce(e, t) {
  return oe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const yu = Ce("border", Oe), vu = Ce("borderTop", Oe), gu = Ce("borderRight", Oe), bu = Ce("borderBottom", Oe), Eu = Ce("borderLeft", Oe), xu = Ce("borderColor"), Tu = Ce("borderTopColor"), Su = Ce("borderRightColor"), Ou = Ce("borderBottomColor"), Cu = Ce("borderLeftColor"), wu = Ce("outline", Oe), $u = Ce("outlineColor"), gr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Nt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: At(t, n)
    });
    return Ve(e, e.borderRadius, r);
  }
  return null;
};
gr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ue
} : {};
gr.filterProps = ["borderRadius"];
vr(yu, vu, gu, bu, Eu, xu, Tu, Su, Ou, Cu, gr, wu, $u);
const br = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Nt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: At(t, n)
    });
    return Ve(e, e.gap, r);
  }
  return null;
};
br.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ue
} : {};
br.filterProps = ["gap"];
const Er = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Nt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: At(t, n)
    });
    return Ve(e, e.columnGap, r);
  }
  return null;
};
Er.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ue
} : {};
Er.filterProps = ["columnGap"];
const xr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Nt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: At(t, n)
    });
    return Ve(e, e.rowGap, r);
  }
  return null;
};
xr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ue
} : {};
xr.filterProps = ["rowGap"];
const Ru = oe({
  prop: "gridColumn"
}), Pu = oe({
  prop: "gridRow"
}), ku = oe({
  prop: "gridAutoFlow"
}), Nu = oe({
  prop: "gridAutoColumns"
}), Au = oe({
  prop: "gridAutoRows"
}), Mu = oe({
  prop: "gridTemplateColumns"
}), Iu = oe({
  prop: "gridTemplateRows"
}), ju = oe({
  prop: "gridTemplateAreas"
}), Du = oe({
  prop: "gridArea"
});
vr(br, Er, xr, Ru, Pu, ku, Nu, Au, Mu, Iu, ju, Du);
function ut(e, t) {
  return t === "grey" ? t : e;
}
const Vu = oe({
  prop: "color",
  themeKey: "palette",
  transform: ut
}), Lu = oe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ut
}), zu = oe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ut
});
vr(Vu, Lu, zu);
function ge(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Fu = oe({
  prop: "width",
  transform: ge
}), En = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || bn[r];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: ge(r)
      };
    };
    return Ve(e, e.maxWidth, t);
  }
  return null;
};
En.filterProps = ["maxWidth"];
const Bu = oe({
  prop: "minWidth",
  transform: ge
}), Uu = oe({
  prop: "height",
  transform: ge
}), Wu = oe({
  prop: "maxHeight",
  transform: ge
}), Yu = oe({
  prop: "minHeight",
  transform: ge
});
oe({
  prop: "size",
  cssProperty: "width",
  transform: ge
});
oe({
  prop: "size",
  cssProperty: "height",
  transform: ge
});
const Hu = oe({
  prop: "boxSizing"
});
vr(Fu, En, Bu, Uu, Wu, Yu, Hu);
const qu = {
  // borders
  border: {
    themeKey: "borders",
    transform: Oe
  },
  borderTop: {
    themeKey: "borders",
    transform: Oe
  },
  borderRight: {
    themeKey: "borders",
    transform: Oe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Oe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Oe
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
    transform: Oe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: gr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ut
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ut
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ut
  },
  // spacing
  p: {
    style: ne
  },
  pt: {
    style: ne
  },
  pr: {
    style: ne
  },
  pb: {
    style: ne
  },
  pl: {
    style: ne
  },
  px: {
    style: ne
  },
  py: {
    style: ne
  },
  padding: {
    style: ne
  },
  paddingTop: {
    style: ne
  },
  paddingRight: {
    style: ne
  },
  paddingBottom: {
    style: ne
  },
  paddingLeft: {
    style: ne
  },
  paddingX: {
    style: ne
  },
  paddingY: {
    style: ne
  },
  paddingInline: {
    style: ne
  },
  paddingInlineStart: {
    style: ne
  },
  paddingInlineEnd: {
    style: ne
  },
  paddingBlock: {
    style: ne
  },
  paddingBlockStart: {
    style: ne
  },
  paddingBlockEnd: {
    style: ne
  },
  m: {
    style: re
  },
  mt: {
    style: re
  },
  mr: {
    style: re
  },
  mb: {
    style: re
  },
  ml: {
    style: re
  },
  mx: {
    style: re
  },
  my: {
    style: re
  },
  margin: {
    style: re
  },
  marginTop: {
    style: re
  },
  marginRight: {
    style: re
  },
  marginBottom: {
    style: re
  },
  marginLeft: {
    style: re
  },
  marginX: {
    style: re
  },
  marginY: {
    style: re
  },
  marginInline: {
    style: re
  },
  marginInlineStart: {
    style: re
  },
  marginInlineEnd: {
    style: re
  },
  marginBlock: {
    style: re
  },
  marginBlockStart: {
    style: re
  },
  marginBlockEnd: {
    style: re
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
    style: br
  },
  rowGap: {
    style: xr
  },
  columnGap: {
    style: Er
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
    transform: ge
  },
  maxWidth: {
    style: En
  },
  minWidth: {
    transform: ge
  },
  height: {
    transform: ge
  },
  maxHeight: {
    transform: ge
  },
  minHeight: {
    transform: ge
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
}, xn = qu;
function Ku(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Gu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xu() {
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
      cssProperty: u = r,
      themeKey: l,
      transform: f,
      style: c
    } = a;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const d = hr(o, l) || {};
    return c ? c(s) : Ve(s, n, (v) => {
      let p = er(d, f, v);
      return v === p && typeof v == "string" && (p = er(d, f, `${r}${v === "default" ? "" : me(v)}`, v)), u === !1 ? p : {
        [u]: p
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
    const s = (n = i.unstable_sxConfig) != null ? n : xn;
    function a(u) {
      let l = u;
      if (typeof u == "function")
        l = u(i);
      else if (typeof u != "object")
        return u;
      if (!l)
        return null;
      const f = au(i.breakpoints), c = Object.keys(f);
      let d = f;
      return Object.keys(l).forEach((h) => {
        const v = Gu(l[h], i);
        if (v != null)
          if (typeof v == "object")
            if (s[h])
              d = St(d, e(h, v, i, s));
            else {
              const p = Ve({
                theme: i
              }, v, (m) => ({
                [h]: m
              }));
              Ku(p, v) ? d[h] = t({
                sx: v,
                theme: i
              }) : d = St(d, p);
            }
          else
            d = St(d, e(h, v, i, s));
      }), cu(c, d);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Tr = Xu();
Tr.filterProps = ["sx"];
const Ju = ["breakpoints", "palette", "spacing", "shape"];
function Tn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = xe(e, Ju), a = nu(r), u = _u(o);
  let l = Re({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: P({
      mode: "light"
    }, n),
    spacing: u,
    shape: P({}, iu, i)
  }, s);
  return l = t.reduce((f, c) => Re(f, c), l), l.unstable_sxConfig = P({}, xn, s == null ? void 0 : s.unstable_sxConfig), l.unstable_sx = function(c) {
    return Tr({
      sx: c,
      theme: this
    });
  }, l;
}
function Zu(e) {
  return Object.keys(e).length === 0;
}
function ns(e = null) {
  const t = Pe(Ze);
  return !t || Zu(t) ? e : t;
}
const Qu = Tn();
function el(e = Qu) {
  return ns(e);
}
function os(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = os(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Te() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = os(e)) && (n && (n += " "), n += t);
  return n;
}
const tl = ["variant"];
function Mo(e) {
  return e.length === 0;
}
function is(e) {
  const {
    variant: t
  } = e, r = xe(e, tl);
  let n = t || "";
  return Object.keys(r).sort().forEach((o) => {
    o === "color" ? n += Mo(n) ? e[o] : me(e[o]) : n += `${Mo(n) ? o : me(o)}${me(e[o].toString())}`;
  }), n;
}
const rl = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function nl(e) {
  return Object.keys(e).length === 0;
}
function ol(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const il = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, tr = (e) => {
  let t = 0;
  const r = {};
  return e && e.forEach((n) => {
    let o = "";
    typeof n.props == "function" ? (o = `callback${t}`, t += 1) : o = is(n.props), r[o] = n.style;
  }), r;
}, sl = (e, t) => {
  let r = [];
  return t && t.components && t.components[e] && t.components[e].variants && (r = t.components[e].variants), tr(r);
}, rr = (e, t, r) => {
  const {
    ownerState: n = {}
  } = e, o = [];
  let i = 0;
  return r && r.forEach((s) => {
    let a = !0;
    if (typeof s.props == "function") {
      const u = P({}, e, n);
      a = s.props(u);
    } else
      Object.keys(s.props).forEach((u) => {
        n[u] !== s.props[u] && e[u] !== s.props[u] && (a = !1);
      });
    a && (typeof s.props == "function" ? o.push(t[`callback${i}`]) : o.push(t[is(s.props)])), typeof s.props == "function" && (i += 1);
  }), o;
}, al = (e, t, r, n) => {
  var o;
  const i = r == null || (o = r.components) == null || (o = o[n]) == null ? void 0 : o.variants;
  return rr(e, t, i);
};
function qt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const cl = Tn(), Io = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Kt({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return nl(t) ? e : t[r] || t;
}
function ul(e) {
  return e ? (t, r) => r[e] : null;
}
const jo = ({
  styledArg: e,
  props: t,
  defaultTheme: r,
  themeId: n
}) => {
  const o = e(P({}, t, {
    theme: Kt(P({}, t, {
      defaultTheme: r,
      themeId: n
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const s = rr(t, tr(i), i);
    return [o, ...s];
  }
  return o;
};
function ll(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = cl,
    rootShouldForwardProp: n = qt,
    slotShouldForwardProp: o = qt
  } = e, i = (s) => Tr(P({}, s, {
    theme: Kt(P({}, s, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, a = {}) => {
    Pc(s, (E) => E.filter((_) => !(_ != null && _.__mui_systemSx)));
    const {
      name: u,
      slot: l,
      skipVariantsResolver: f,
      skipSx: c,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = ul(Io(l))
    } = a, h = xe(a, rl), v = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), p = c || !1;
    let m;
    process.env.NODE_ENV !== "production" && u && (m = `${u}-${Io(l || "Root")}`);
    let g = qt;
    l === "Root" || l === "root" ? g = n : l ? g = o : ol(s) && (g = void 0);
    const S = Rc(s, P({
      shouldForwardProp: g,
      label: m
    }, h)), O = (E, ..._) => {
      const N = _ ? _.map((C) => {
        if (typeof C == "function" && C.__emotion_real !== C)
          return (G) => jo({
            styledArg: C,
            props: G,
            defaultTheme: r,
            themeId: t
          });
        if (Fe(C)) {
          let G = C, J;
          return C && C.variants && (J = C.variants, delete G.variants, G = (ie) => {
            let Z = C;
            return rr(ie, tr(J), J).forEach((Q) => {
              Z = Re(Z, Q);
            }), Z;
          }), G;
        }
        return C;
      }) : [];
      let $ = E;
      if (Fe(E)) {
        let C;
        E && E.variants && (C = E.variants, delete $.variants, $ = (G) => {
          let J = E;
          return rr(G, tr(C), C).forEach((Z) => {
            J = Re(J, Z);
          }), J;
        });
      } else
        typeof E == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        E.__emotion_real !== E && ($ = (C) => jo({
          styledArg: E,
          props: C,
          defaultTheme: r,
          themeId: t
        }));
      u && d && N.push((C) => {
        const G = Kt(P({}, C, {
          defaultTheme: r,
          themeId: t
        })), J = il(u, G);
        if (J) {
          const ie = {};
          return Object.entries(J).forEach(([Z, ce]) => {
            ie[Z] = typeof ce == "function" ? ce(P({}, C, {
              theme: G
            })) : ce;
          }), d(C, ie);
        }
        return null;
      }), u && !v && N.push((C) => {
        const G = Kt(P({}, C, {
          defaultTheme: r,
          themeId: t
        }));
        return al(C, sl(u, G), G, u);
      }), p || N.push(i);
      const te = N.length - _.length;
      if (Array.isArray(E) && te > 0) {
        const C = new Array(te).fill("");
        $ = [...E, ...C], $.raw = [...E.raw, ...C];
      }
      const B = S($, ...N);
      if (process.env.NODE_ENV !== "production") {
        let C;
        u && (C = `${u}${me(l || "")}`), C === void 0 && (C = `Styled(${zc(s)})`), B.displayName = C;
      }
      return s.muiName && (B.muiName = s.muiName), B;
    };
    return S.withConfig && (O.withConfig = S.withConfig), O;
  };
}
function fl(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : vn(t.components[r].defaultProps, n);
}
function dl({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = el(r);
  return n && (o = o[n] || o), fl({
    theme: o,
    name: t,
    props: e
  });
}
function Sn(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Math.min(Math.max(t, e), r);
}
function pl(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function qe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return qe(pl(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : lt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : lt(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
function Sr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function ml(e) {
  e = qe(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (l, f = (l + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let a = "rgb";
  const u = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", u.push(t[3])), Sr({
    type: a,
    values: u
  });
}
function Do(e) {
  e = qe(e);
  let t = e.type === "hsl" || e.type === "hsla" ? qe(ml(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Vo(e, t) {
  const r = Do(e), n = Do(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function zt(e, t) {
  return e = qe(e), t = Sn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Sr(e);
}
function hl(e, t) {
  if (e = qe(e), t = Sn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Sr(e);
}
function _l(e, t) {
  if (e = qe(e), t = Sn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Sr(e);
}
const ss = /* @__PURE__ */ Ke(null);
process.env.NODE_ENV !== "production" && (ss.displayName = "ThemeContext");
const as = ss;
function cs() {
  const e = Pe(as);
  return process.env.NODE_ENV !== "production" && tn(e), e;
}
const yl = typeof Symbol == "function" && Symbol.for, vl = yl ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function gl(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return P({}, e, t);
}
function nr(e) {
  const {
    children: t,
    theme: r
  } = e, n = cs();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = Je(() => {
    const i = n === null ? r : gl(n, r);
    return i != null && (i[vl] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ de(as.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (nr.propTypes = {
  /**
   * Your component tree.
   */
  children: y.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: y.oneOfType([y.object, y.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (nr.propTypes = Zi(nr.propTypes));
const Lo = {};
function zo(e, t, r, n = !1) {
  return Je(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const i = r(o), s = e ? P({}, t, {
        [e]: i
      }) : i;
      return n ? () => s : s;
    }
    return e ? P({}, t, {
      [e]: r
    }) : P({}, t, r);
  }, [e, t, r, n]);
}
function or(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = ns(Lo), i = cs() || Lo;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = zo(n, o, r), a = zo(n, i, r, !0);
  return /* @__PURE__ */ de(nr, {
    theme: a,
    children: /* @__PURE__ */ de(Ze.Provider, {
      value: s,
      children: t
    })
  });
}
process.env.NODE_ENV !== "production" && (or.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Your component tree.
   */
  children: y.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: y.oneOfType([y.func, y.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: y.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (or.propTypes = Zi(or.propTypes));
function bl(e, t) {
  return P({
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
const El = ["mode", "contrastThreshold", "tonalOffset"], Fo = {
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
    paper: Ot.white,
    default: Ot.white
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
}, Vr = {
  text: {
    primary: Ot.white,
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
    active: Ot.white,
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
function Bo(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = _l(e.main, o) : t === "dark" && (e.dark = hl(e.main, i)));
}
function xl(e = "light") {
  return e === "dark" ? {
    main: rt[200],
    light: rt[50],
    dark: rt[400]
  } : {
    main: rt[700],
    light: rt[400],
    dark: rt[800]
  };
}
function Tl(e = "light") {
  return e === "dark" ? {
    main: tt[200],
    light: tt[50],
    dark: tt[400]
  } : {
    main: tt[500],
    light: tt[300],
    dark: tt[700]
  };
}
function Sl(e = "light") {
  return e === "dark" ? {
    main: et[500],
    light: et[300],
    dark: et[700]
  } : {
    main: et[700],
    light: et[400],
    dark: et[800]
  };
}
function Ol(e = "light") {
  return e === "dark" ? {
    main: nt[400],
    light: nt[300],
    dark: nt[700]
  } : {
    main: nt[700],
    light: nt[500],
    dark: nt[900]
  };
}
function Cl(e = "light") {
  return e === "dark" ? {
    main: ot[400],
    light: ot[300],
    dark: ot[700]
  } : {
    main: ot[800],
    light: ot[500],
    dark: ot[900]
  };
}
function wl(e = "light") {
  return e === "dark" ? {
    main: bt[400],
    light: bt[300],
    dark: bt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: bt[500],
    dark: bt[900]
  };
}
function $l(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = xe(e, El), i = e.primary || xl(t), s = e.secondary || Tl(t), a = e.error || Sl(t), u = e.info || Ol(t), l = e.success || Cl(t), f = e.warning || wl(t);
  function c(p) {
    const m = Vo(p, Vr.text.primary) >= r ? Vr.text.primary : Fo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const g = Vo(p, m);
      g < 3 && console.error([`MUI: The contrast ratio of ${g}:1 for ${m} on ${p}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const d = ({
    color: p,
    name: m,
    mainShade: g = 500,
    lightShade: S = 300,
    darkShade: O = 700
  }) => {
    if (p = P({}, p), !p.main && p[g] && (p.main = p[g]), !p.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${g}\` property.` : lt(11, m ? ` (${m})` : "", g));
    if (typeof p.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(p.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : lt(12, m ? ` (${m})` : "", JSON.stringify(p.main)));
    return Bo(p, "light", S, n), Bo(p, "dark", O, n), p.contrastText || (p.contrastText = c(p.main)), p;
  }, h = {
    dark: Vr,
    light: Fo
  };
  return process.env.NODE_ENV !== "production" && (h[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Re(P({
    // A collection of common colors.
    common: P({}, Ot),
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
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: js,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: c,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, h[t]), o);
}
const Rl = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Pl(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Uo = {
  textTransform: "uppercase"
}, Wo = '"Roboto", "Helvetica", "Arial", sans-serif';
function kl(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = Wo,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: c
  } = r, d = xe(r, Rl);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = o / 14, v = c || ((g) => `${g / l * h}rem`), p = (g, S, O, E, _) => P({
    fontFamily: n,
    fontWeight: g,
    fontSize: v(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O
  }, n === Wo ? {
    letterSpacing: `${Pl(E / S)}em`
  } : {}, _, f), m = {
    h1: p(i, 96, 1.167, -1.5),
    h2: p(i, 60, 1.2, -0.5),
    h3: p(s, 48, 1.167, 0),
    h4: p(s, 34, 1.235, 0.25),
    h5: p(s, 24, 1.334, 0),
    h6: p(a, 20, 1.6, 0.15),
    subtitle1: p(s, 16, 1.75, 0.15),
    subtitle2: p(a, 14, 1.57, 0.1),
    body1: p(s, 16, 1.5, 0.15),
    body2: p(s, 14, 1.43, 0.15),
    button: p(a, 14, 1.75, 0.4, Uo),
    caption: p(s, 12, 1.66, 0.4),
    overline: p(s, 12, 2.66, 1, Uo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Re(P({
    htmlFontSize: l,
    pxToRem: v,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: u
  }, m), d, {
    clone: !1
    // No need to clone deep
  });
}
const Nl = 0.2, Al = 0.14, Ml = 0.12;
function ee(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Nl})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Al})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ml})`].join(",");
}
const Il = ["none", ee(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ee(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ee(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ee(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ee(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ee(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ee(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ee(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ee(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ee(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ee(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ee(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ee(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ee(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ee(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ee(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ee(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ee(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ee(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ee(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ee(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ee(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ee(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ee(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], jl = ["duration", "easing", "delay"], Dl = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Vl = {
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
function Yo(e) {
  return `${Math.round(e)}ms`;
}
function Ll(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function zl(e) {
  const t = P({}, Dl, e.easing), r = P({}, Vl, e.duration);
  return P({
    getAutoHeightDuration: Ll,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: a = t.easeInOut,
        delay: u = 0
      } = i, l = xe(i, jl);
      if (process.env.NODE_ENV !== "production") {
        const f = (d) => typeof d == "string", c = (d) => !isNaN(parseFloat(d));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !c(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(a) || console.error('MUI: Argument "easing" must be a string.'), !c(u) && !f(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof s == "string" ? s : Yo(s)} ${a} ${typeof u == "string" ? u : Yo(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const Fl = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Bl = Fl, Ul = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function us(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = xe(e, Ul);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : lt(18));
  const a = $l(n), u = Tn(e);
  let l = Re(u, {
    mixins: bl(u.breakpoints, r),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Il.slice(),
    typography: kl(a, i),
    transitions: zl(o),
    zIndex: P({}, Bl)
  });
  if (l = Re(l, s), l = t.reduce((f, c) => Re(f, c), l), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], c = (d, h) => {
      let v;
      for (v in d) {
        const p = d[v];
        if (f.indexOf(v) !== -1 && Object.keys(p).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = mr("", v);
            console.error([`MUI: The \`${h}\` component increases the CSS specificity of the \`${v}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: p
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[v] = {};
        }
      }
    };
    Object.keys(l.components).forEach((d) => {
      const h = l.components[d].styleOverrides;
      h && d.indexOf("Mui") === 0 && c(h, d);
    });
  }
  return l.unstable_sxConfig = P({}, xn, s == null ? void 0 : s.unstable_sxConfig), l.unstable_sx = function(c) {
    return Tr({
      sx: c,
      theme: this
    });
  }, l;
}
const Wl = us(), ls = Wl;
function On({
  props: e,
  name: t
}) {
  return dl({
    props: e,
    name: t,
    defaultTheme: ls,
    themeId: Gt
  });
}
const fs = (e) => qt(e) && e !== "classes", vt = ll({
  themeId: Gt,
  defaultTheme: ls,
  rootShouldForwardProp: fs
}), Yl = ["theme"];
function ds(e) {
  let {
    theme: t
  } = e, r = xe(e, Yl);
  const n = t[Gt];
  return /* @__PURE__ */ de(or, P({}, r, {
    themeId: n ? Gt : void 0,
    theme: n || t
  }));
}
process.env.NODE_ENV !== "production" && (ds.propTypes = {
  /**
   * Your component tree.
   */
  children: y.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: y.oneOfType([y.object, y.func]).isRequired
});
function Xr(e, t) {
  return Xr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Xr(e, t);
}
function Hl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Xr(e, t);
}
const Ho = st.createContext(null);
function ql(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cn(e, t) {
  var r = function(i) {
    return t && je(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && nn.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Kl(e, t) {
  e = e || {}, t = t || {};
  function r(f) {
    return f in t ? t[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, a = {};
  for (var u in t) {
    if (n[u])
      for (s = 0; s < n[u].length; s++) {
        var l = n[u][s];
        a[n[u][s]] = r(l);
      }
    a[u] = r(u);
  }
  for (s = 0; s < o.length; s++)
    a[o[s]] = r(o[s]);
  return a;
}
function He(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Gl(e, t) {
  return Cn(e.children, function(r) {
    return at(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: He(r, "appear", e),
      enter: He(r, "enter", e),
      exit: He(r, "exit", e)
    });
  });
}
function Xl(e, t, r) {
  var n = Cn(e.children), o = Kl(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (je(s)) {
      var a = i in t, u = i in n, l = t[i], f = je(l) && !l.props.in;
      u && (!a || f) ? o[i] = at(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: He(s, "exit", e),
        enter: He(s, "enter", e)
      }) : !u && a && !f ? o[i] = at(s, {
        in: !1
      }) : u && a && je(l) && (o[i] = at(s, {
        onExited: r.bind(null, s),
        in: l.props.in,
        exit: He(s, "exit", e),
        enter: He(s, "enter", e)
      }));
    }
  }), o;
}
var Jl = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Zl = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, wn = /* @__PURE__ */ function(e) {
  Hl(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(ql(i));
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
    var s = i.children, a = i.handleExited, u = i.firstRender;
    return {
      children: u ? Gl(o, a) : Xl(o, s, a),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = Cn(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
      var u = P({}, a.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, a = xe(o, ["component", "childFactory"]), u = this.state.contextValue, l = Jl(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ st.createElement(Ho.Provider, {
      value: u
    }, l) : /* @__PURE__ */ st.createElement(Ho.Provider, {
      value: u
    }, /* @__PURE__ */ st.createElement(i, a, l));
  }, t;
}(st.Component);
wn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: y.any,
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
  children: y.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: y.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: y.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: y.bool,
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
  childFactory: y.func
} : {};
wn.defaultProps = Zl;
const Ql = wn;
function ps(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: u,
    timeout: l
  } = e, [f, c] = Be(!1), d = Te(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), h = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, v = Te(r.child, f && r.childLeaving, n && r.childPulsate);
  return !a && !f && c(!0), Ne(() => {
    if (!a && u != null) {
      const p = setTimeout(u, l);
      return () => {
        clearTimeout(p);
      };
    }
  }, [u, a, l]), /* @__PURE__ */ de("span", {
    className: d,
    style: h,
    children: /* @__PURE__ */ de("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (ps.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: y.object.isRequired,
  className: y.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: y.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: y.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: y.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: y.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: y.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: y.number,
  /**
   * exit delay
   */
  timeout: y.number.isRequired
});
const Se = gn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ef = ["center", "classes", "className"];
let Or = (e) => e, qo, Ko, Go, Xo;
const Jr = 550, tf = 80, rf = _n(qo || (qo = Or`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), nf = _n(Ko || (Ko = Or`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), of = _n(Go || (Go = Or`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), sf = vt("span", {
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
}), af = vt(ps, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Xo || (Xo = Or`
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
`), Se.rippleVisible, rf, Jr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Se.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Se.child, Se.childLeaving, nf, Jr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Se.childPulsate, of, ({
  theme: e
}) => e.transitions.easing.easeInOut), ms = /* @__PURE__ */ _t(function(t, r) {
  const n = On({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = n, a = xe(n, ef), [u, l] = Be([]), f = _e(0), c = _e(null);
  Ne(() => {
    c.current && (c.current(), c.current = null);
  }, [u]);
  const d = _e(!1), h = _e(0), v = _e(null), p = _e(null);
  Ne(() => () => {
    h.current && clearTimeout(h.current);
  }, []);
  const m = Ye((E) => {
    const {
      pulsate: _,
      rippleX: N,
      rippleY: $,
      rippleSize: te,
      cb: B
    } = E;
    l((C) => [...C, /* @__PURE__ */ de(af, {
      classes: {
        ripple: Te(i.ripple, Se.ripple),
        rippleVisible: Te(i.rippleVisible, Se.rippleVisible),
        ripplePulsate: Te(i.ripplePulsate, Se.ripplePulsate),
        child: Te(i.child, Se.child),
        childLeaving: Te(i.childLeaving, Se.childLeaving),
        childPulsate: Te(i.childPulsate, Se.childPulsate)
      },
      timeout: Jr,
      pulsate: _,
      rippleX: N,
      rippleY: $,
      rippleSize: te
    }, f.current)]), f.current += 1, c.current = B;
  }, [i]), g = Ye((E = {}, _ = {}, N = () => {
  }) => {
    const {
      pulsate: $ = !1,
      center: te = o || _.pulsate,
      fakeElement: B = !1
      // For test purposes
    } = _;
    if ((E == null ? void 0 : E.type) === "mousedown" && d.current) {
      d.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (d.current = !0);
    const C = B ? null : p.current, G = C ? C.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let J, ie, Z;
    if (te || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      J = Math.round(G.width / 2), ie = Math.round(G.height / 2);
    else {
      const {
        clientX: ce,
        clientY: Q
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      J = Math.round(ce - G.left), ie = Math.round(Q - G.top);
    }
    if (te)
      Z = Math.sqrt((2 * G.width ** 2 + G.height ** 2) / 3), Z % 2 === 0 && (Z += 1);
    else {
      const ce = Math.max(Math.abs((C ? C.clientWidth : 0) - J), J) * 2 + 2, Q = Math.max(Math.abs((C ? C.clientHeight : 0) - ie), ie) * 2 + 2;
      Z = Math.sqrt(ce ** 2 + Q ** 2);
    }
    E != null && E.touches ? v.current === null && (v.current = () => {
      m({
        pulsate: $,
        rippleX: J,
        rippleY: ie,
        rippleSize: Z,
        cb: N
      });
    }, h.current = setTimeout(() => {
      v.current && (v.current(), v.current = null);
    }, tf)) : m({
      pulsate: $,
      rippleX: J,
      rippleY: ie,
      rippleSize: Z,
      cb: N
    });
  }, [o, m]), S = Ye(() => {
    g({}, {
      pulsate: !0
    });
  }, [g]), O = Ye((E, _) => {
    if (clearTimeout(h.current), (E == null ? void 0 : E.type) === "touchend" && v.current) {
      v.current(), v.current = null, h.current = setTimeout(() => {
        O(E, _);
      });
      return;
    }
    v.current = null, l((N) => N.length > 0 ? N.slice(1) : N), c.current = _;
  }, []);
  return sr(r, () => ({
    pulsate: S,
    start: g,
    stop: O
  }), [S, g, O]), /* @__PURE__ */ de(sf, P({
    className: Te(Se.root, i.root, s),
    ref: p
  }, a, {
    children: /* @__PURE__ */ de(Ql, {
      component: null,
      exit: !0,
      children: u
    })
  }));
});
process.env.NODE_ENV !== "production" && (ms.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: y.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string
});
const cf = ms;
function uf(e) {
  return mr("MuiButtonBase", e);
}
const lf = gn("MuiButtonBase", ["root", "disabled", "focusVisible"]), ff = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], df = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = es({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, uf, o);
  return r && n && (s.root += ` ${n}`), s;
}, pf = vt("button", {
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
  [`&.${lf.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), hs = /* @__PURE__ */ _t(function(t, r) {
  const n = On({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: u = "button",
    disabled: l = !1,
    disableRipple: f = !1,
    disableTouchRipple: c = !1,
    focusRipple: d = !1,
    LinkComponent: h = "a",
    onBlur: v,
    onClick: p,
    onContextMenu: m,
    onDragLeave: g,
    onFocus: S,
    onFocusVisible: O,
    onKeyDown: E,
    onKeyUp: _,
    onMouseDown: N,
    onMouseLeave: $,
    onMouseUp: te,
    onTouchEnd: B,
    onTouchMove: C,
    onTouchStart: G,
    tabIndex: J = 0,
    TouchRippleProps: ie,
    touchRippleRef: Z,
    type: ce
  } = n, Q = xe(n, ff), he = _e(null), ae = _e(null), Le = Ro(ae, Z), {
    isFocusVisibleRef: b,
    onFocus: T,
    onBlur: V,
    ref: I
  } = Jc(), [k, L] = Be(!1);
  l && k && L(!1), sr(o, () => ({
    focusVisible: () => {
      L(!0), he.current.focus();
    }
  }), []);
  const [A, j] = Be(!1);
  Ne(() => {
    j(!0);
  }, []);
  const z = A && !f && !l;
  Ne(() => {
    k && d && !f && A && ae.current.pulsate();
  }, [f, d, k, A]);
  function M(D, Rn, ws = c) {
    return Lt((Pn) => (Rn && Rn(Pn), !ws && ae.current && ae.current[D](Pn), !0));
  }
  const F = M("start", N), ue = M("stop", m), x = M("stop", g), ye = M("stop", te), R = M("stop", (D) => {
    k && D.preventDefault(), $ && $(D);
  }), ze = M("start", G), Qe = M("stop", B), Mt = M("stop", C), Es = M("stop", (D) => {
    V(D), b.current === !1 && L(!1), v && v(D);
  }, !1), xs = Lt((D) => {
    he.current || (he.current = D.currentTarget), T(D), b.current === !0 && (L(!0), O && O(D)), S && S(D);
  }), Cr = () => {
    const D = he.current;
    return u && u !== "button" && !(D.tagName === "A" && D.href);
  }, wr = _e(!1), Ts = Lt((D) => {
    d && !wr.current && k && ae.current && D.key === " " && (wr.current = !0, ae.current.stop(D, () => {
      ae.current.start(D);
    })), D.target === D.currentTarget && Cr() && D.key === " " && D.preventDefault(), E && E(D), D.target === D.currentTarget && Cr() && D.key === "Enter" && !l && (D.preventDefault(), p && p(D));
  }), Ss = Lt((D) => {
    d && D.key === " " && ae.current && k && !D.defaultPrevented && (wr.current = !1, ae.current.stop(D, () => {
      ae.current.pulsate(D);
    })), _ && _(D), p && D.target === D.currentTarget && Cr() && D.key === " " && !D.defaultPrevented && p(D);
  });
  let It = u;
  It === "button" && (Q.href || Q.to) && (It = h);
  const gt = {};
  It === "button" ? (gt.type = ce === void 0 ? "button" : ce, gt.disabled = l) : (!Q.href && !Q.to && (gt.role = "button"), l && (gt["aria-disabled"] = l));
  const Os = Ro(r, I, he);
  process.env.NODE_ENV !== "production" && Ne(() => {
    z && !ae.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [z]);
  const $n = P({}, n, {
    centerRipple: i,
    component: u,
    disabled: l,
    disableRipple: f,
    disableTouchRipple: c,
    focusRipple: d,
    tabIndex: J,
    focusVisible: k
  }), Cs = df($n);
  return /* @__PURE__ */ de(pf, P({
    as: It,
    className: Te(Cs.root, a),
    ownerState: $n,
    onBlur: Es,
    onClick: p,
    onContextMenu: ue,
    onFocus: xs,
    onKeyDown: Ts,
    onKeyUp: Ss,
    onMouseDown: F,
    onMouseLeave: R,
    onMouseUp: ye,
    onDragLeave: x,
    onTouchEnd: Qe,
    onTouchMove: Mt,
    onTouchStart: ze,
    ref: Os,
    tabIndex: l ? -1 : J,
    type: ce
  }, gt, Q, {
    children: [s, z ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ de(cf, P({
        ref: Le,
        center: i
      }, ie))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (hs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Bc,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: y.bool,
  /**
   * The content of the component.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Mc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: y.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: y.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: y.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: y.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: y.string,
  /**
   * @ignore
   */
  href: y.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: y.elementType,
  /**
   * @ignore
   */
  onBlur: y.func,
  /**
   * @ignore
   */
  onClick: y.func,
  /**
   * @ignore
   */
  onContextMenu: y.func,
  /**
   * @ignore
   */
  onDragLeave: y.func,
  /**
   * @ignore
   */
  onFocus: y.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: y.func,
  /**
   * @ignore
   */
  onKeyDown: y.func,
  /**
   * @ignore
   */
  onKeyUp: y.func,
  /**
   * @ignore
   */
  onMouseDown: y.func,
  /**
   * @ignore
   */
  onMouseLeave: y.func,
  /**
   * @ignore
   */
  onMouseUp: y.func,
  /**
   * @ignore
   */
  onTouchEnd: y.func,
  /**
   * @ignore
   */
  onTouchMove: y.func,
  /**
   * @ignore
   */
  onTouchStart: y.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * @default 0
   */
  tabIndex: y.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: y.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: y.oneOfType([y.func, y.shape({
    current: y.shape({
      pulsate: y.func.isRequired,
      start: y.func.isRequired,
      stop: y.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: y.oneOfType([y.oneOf(["button", "reset", "submit"]), y.string])
});
const mf = hs;
function hf(e) {
  return mr("MuiButton", e);
}
const _f = gn("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Ft = _f, _s = /* @__PURE__ */ Ke({});
process.env.NODE_ENV !== "production" && (_s.displayName = "ButtonGroupContext");
const yf = _s, ys = /* @__PURE__ */ Ke(void 0);
process.env.NODE_ENV !== "production" && (ys.displayName = "ButtonGroupButtonContext");
const vf = ys, gf = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], bf = (e) => {
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
  }, u = es(a, hf, s);
  return P({}, s, u);
}, vs = (e) => P({}, e.size === "small" && {
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
}), Ef = vt(mf, {
  shouldForwardProp: (e) => fs(e) || e === "classes",
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
  return P({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": P({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : zt(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : zt(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : zt(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    "&:active": P({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Ft.focusVisible}`]: P({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Ft.disabled}`]: P({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${zt(e.palette[t.color].main, 0.5)}`
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
  [`&.${Ft.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Ft.disabled}`]: {
    boxShadow: "none"
  }
}), xf = vt("span", {
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
}) => P({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, vs(e))), Tf = vt("span", {
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
}) => P({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, vs(e))), gs = /* @__PURE__ */ _t(function(t, r) {
  const n = Pe(yf), o = Pe(vf), i = vn(n, t), s = On({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: u = "primary",
    component: l = "button",
    className: f,
    disabled: c = !1,
    disableElevation: d = !1,
    disableFocusRipple: h = !1,
    endIcon: v,
    focusVisibleClassName: p,
    fullWidth: m = !1,
    size: g = "medium",
    startIcon: S,
    type: O,
    variant: E = "text"
  } = s, _ = xe(s, gf), N = P({}, s, {
    color: u,
    component: l,
    disabled: c,
    disableElevation: d,
    disableFocusRipple: h,
    fullWidth: m,
    size: g,
    type: O,
    variant: E
  }), $ = bf(N), te = S && /* @__PURE__ */ de(xf, {
    className: $.startIcon,
    ownerState: N,
    children: S
  }), B = v && /* @__PURE__ */ de(Tf, {
    className: $.endIcon,
    ownerState: N,
    children: v
  }), C = o || "";
  return /* @__PURE__ */ de(Ef, P({
    ownerState: N,
    className: Te(n.className, $.root, f, C),
    component: l,
    disabled: c,
    focusRipple: !h,
    focusVisibleClassName: Te($.focusVisible, p),
    ref: r,
    type: O
  }, _, {
    classes: $,
    children: [te, a, B]
  }));
});
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: y.oneOfType([y.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), y.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: y.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: y.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: y.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: y.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: y.bool,
  /**
   * Element placed after the children.
   */
  endIcon: y.node,
  /**
   * @ignore
   */
  focusVisibleClassName: y.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: y.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: y.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: y.oneOfType([y.oneOf(["small", "medium", "large"]), y.string]),
  /**
   * Element placed before the children.
   */
  startIcon: y.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * @ignore
   */
  type: y.oneOfType([y.oneOf(["button", "reset", "submit"]), y.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: y.oneOfType([y.oneOf(["contained", "outlined", "text"]), y.string])
});
const Sf = gs, Of = ({
  key: e,
  container: t,
  shadowRoot: r,
  insertionPoint: n
}, o) => {
  const i = Ui({
    key: e,
    container: n,
    insertionPoint: n
  }), s = us();
  console.log("container: ", t), console.log("shadowRoot: ", r), console.log("insertionPoint: ", n), dt(de(ic, {
    value: i,
    children: de(ds, {
      theme: s,
      children: o
    })
  }), t);
}, Cf = ({
  container: e,
  shadowRoot: t,
  insertionPoint: r,
  ...n
}) => {
  Of({
    key: "mui-button-css",
    container: e,
    shadowRoot: t,
    insertionPoint: r
  }, de(Sf, {
    ...n
  }));
}, bs = document.createElement("template");
bs.innerHTML = `
<style id="jss-insertion-point"></style>
<div id="app"></div>
`;
class wf extends HTMLElement {
  constructor() {
    super(), this.attachShadow({
      mode: "open"
    }), this.shadowRoot.appendChild(bs.content.cloneNode(!0));
    const t = this.shadowRoot.getElementById("jss-insertion-point"), r = this.shadowRoot.getElementById("app");
    Cf({
      container: r,
      shadowRoot: this.shadowRoot,
      insertionPoint: t,
      children: "zero",
      variant: "contained"
    });
  }
}
customElements.define("mui-button", wf);
export {
  wf as Button
};
//# sourceMappingURL=mui.js.map
