const i = (n, o, e, s = !0) => {
  let l = document.getElementById(o.toLowerCase());
  const t = l || document.createElement("div");
  if (t.setAttribute("id", o.toLowerCase()), t.style.position = "absolute", t.style.width = "15px", t.style.height = "15px", t.style.insetInlineStart = "0px", t.style.insetBlockStart = "0px", t.style.borderRadius = "15px", t.style.transform = `translate(${n.x - 7.5}px, ${n.y - 7.5}px)`, t.style.backgroundColor = e != null && e.color ? e == null ? void 0 : e.color : "green", s === !0) {
    let p = document.getElementById("t-" + o.toLowerCase());
    const r = p || document.createElement("div");
    r.setAttribute("id", "t-" + o.toLowerCase()), r.style.position = "absolute", r.style.insetInlineStart = "0px", r.style.insetBlockStart = "0px", r.style.transform = `translate(${n.x + 15 + ((e == null ? void 0 : e.labelOffsetX) || 0)}px, ${n.y + 15 + ((e == null ? void 0 : e.labelOffsetY) || 0)}px)`, r.style.color = e != null && e.color ? e == null ? void 0 : e.color : "green", r.innerHTML = `${o}{${n.x}, ${n.y}}`, document.body.appendChild(r);
  }
  document.body.appendChild(t);
}, a = (n) => {
  n.points && n.points.forEach((o) => {
    i(o.point, o.label, {
      labelOffsetX: -8,
      labelOffsetY: -8,
      color: o.color
    }, o.showLabel);
  }), n.TransformedBox && n.TransformedBox.forEach((o) => {
    const e = {
      labelOffsetX: -8,
      labelOffsetY: -8,
      color: o.color
    };
    i(o.points.tl, `${o.prefix || ""}tl`, e, o.showLabel), i(o.points.tr, `${o.prefix || ""}tr`, e), i(o.points.bl, `${o.prefix || ""}bl`, e, o.showLabel), i(o.points.br, `${o.prefix || ""}br`, e, o.showLabel);
  });
}, f = (n) => n != null;
export {
  f as isValue,
  a as logInfo
};
//# sourceMappingURL=utility.js.map
