const i = (t, o, e, l = !0) => {
  o ?? (o = "p");
  let p = document.getElementById(o.toLowerCase());
  const n = p || document.createElement("div");
  if (n.setAttribute("id", o.toLowerCase()), n.style.position = "absolute", n.style.width = "15px", n.style.height = "15px", n.style.insetInlineStart = "0px", n.style.insetBlockStart = "0px", n.style.borderRadius = "15px", n.style.transform = `translate(${t.x - 7.5}px, ${t.y - 7.5}px)`, n.style.backgroundColor = e != null && e.color ? e == null ? void 0 : e.color : "green", l === !0) {
    let s = document.getElementById("t-" + o.toLowerCase());
    const r = s || document.createElement("div");
    r.setAttribute("id", "t-" + o.toLowerCase()), r.style.position = "absolute", r.style.insetInlineStart = "0px", r.style.insetBlockStart = "0px", r.style.transform = `translate(${t.x + 15 + ((e == null ? void 0 : e.labelOffsetX) || 0)}px, ${t.y + 15 + ((e == null ? void 0 : e.labelOffsetY) || 0)}px)`, r.style.color = e != null && e.color ? e == null ? void 0 : e.color : "green", r.innerHTML = `${o}{${t.x}, ${t.y}}`, document.body.appendChild(r);
  }
  document.body.appendChild(n);
}, c = (t) => {
  t.points && t.points.forEach((o) => {
    i(o.point, o.label, { labelOffsetX: -8, labelOffsetY: -8, color: o.color }, o.showLabel);
  }), t.TransformedBox && t.TransformedBox.forEach((o) => {
    const e = { labelOffsetX: -8, labelOffsetY: -8, color: o.color };
    i(o.points.tl, `${o.prefix || ""}tl`, e, o.showLabel), i(o.points.tr, `${o.prefix || ""}tr`, e), i(o.points.bl, `${o.prefix || ""}bl`, e, o.showLabel), i(o.points.br, `${o.prefix || ""}br`, e, o.showLabel);
  });
};
export {
  c as l
};
//# sourceMappingURL=debug-O-OIDDOV.js.map
