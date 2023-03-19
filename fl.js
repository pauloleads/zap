/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    r = e.document,
    i = Object.getPrototypeOf,
    o = n.slice,
    u = n.concat,
    a = n.push,
    s = n.indexOf,
    c = {},
    l = c.toString,
    f = c.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {},
    g = function e(t) {
      return "function" == typeof t && "number" != typeof t.nodeType;
    },
    v = function e(t) {
      return null != t && t === t.window;
    },
    y = { type: !0, src: !0, noModule: !0 };
  function m(e, t, n) {
    var i,
      o = (t = t || r).createElement("script");
    if (((o.text = e), n)) for (i in y) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? c[l.call(e)] || "object"
      : typeof e;
  }
  var _ = "3.3.1",
    b = function (e, t) {
      return new b.fn.init(e, t);
    },
    E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (b.fn = b.prototype =
    {
      jquery: "3.3.1",
      constructor: b,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (e) {
        return null == e
          ? o.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = b.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return b.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          b.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: a,
      sort: n.sort,
      splice: n.splice,
    }),
    (b.extend = b.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          u = arguments[0] || {},
          a = 1,
          s = arguments.length,
          c = !1;
        for (
          "boolean" == typeof u && ((c = u), (u = arguments[a] || {}), a++),
            "object" == typeof u || g(u) || (u = {}),
            a === s && ((u = this), a--);
          a < s;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = u[t]),
                u !== (r = e[t]) &&
                  (c && r && (b.isPlainObject(r) || (i = Array.isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                        : (o = n && b.isPlainObject(n) ? n : {}),
                      (u[t] = b.extend(c, o, r)))
                    : void 0 !== r && (u[t] = r));
        return u;
      }),
    b.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== l.call(e)) &&
          (!(t = i(e)) ||
            ("function" ==
              typeof (n = f.call(t, "constructor") && t.constructor) &&
              p.call(n) === d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        m(e);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (x(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(E, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (x(Object(e))
              ? b.merge(n, "string" == typeof e ? [e] : e)
              : a.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : s.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, u = e.length, a = !n; o < u; o++)
          (r = !t(e[o], o)) !== a && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (x(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return u.apply([], a);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]),
    b.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase();
      }
    );
  function x(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !g(e) &&
      !v(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  var T = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      u,
      a,
      s,
      c,
      l,
      f,
      p,
      d,
      h,
      g,
      v,
      y,
      m,
      w,
      _ = "sizzle" + 1 * new Date(),
      b = e.document,
      E = 0,
      x = 0,
      T = ue(),
      S = ue(),
      C = ue(),
      A = function (e, t) {
        return e === t && (f = !0), 0;
      },
      k = {}.hasOwnProperty,
      N = [],
      R = N.pop,
      L = N.push,
      O = N.push,
      D = N.slice,
      j = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      I =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      B =
        "\\[" +
        M +
        "*(" +
        P +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        P +
        "))|)" +
        M +
        "*\\]",
      H =
        ":(" +
        P +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        B +
        ")*)|.*)\\)|)",
      q = new RegExp(M + "+", "g"),
      U = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      F = new RegExp("^" + M + "*," + M + "*"),
      W = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
      $ = new RegExp(H),
      G = new RegExp("^" + P + "$"),
      Q = {
        ID: new RegExp("^#(" + P + ")"),
        CLASS: new RegExp("^\\.(" + P + ")"),
        TAG: new RegExp("^(" + P + "|[*])"),
        ATTR: new RegExp("^" + B),
        PSEUDO: new RegExp("^" + H),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + I + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      V = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      J = /[+~]/,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ee = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      re = function () {
        p();
      },
      ie = me(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      O.apply((N = D.call(b.childNodes)), b.childNodes),
        N[b.childNodes.length].nodeType;
    } catch (e) {
      O = {
        apply: N.length
          ? function (e, t) {
              L.apply(e, D.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, r, i) {
      var o,
        a,
        c,
        l,
        f,
        h,
        y,
        m = t && t.ownerDocument,
        E = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof e || !e || (1 !== E && 9 !== E && 11 !== E))
      )
        return r;
      if (
        !i &&
        ((t ? t.ownerDocument || t : b) !== d && p(t), (t = t || d), g)
      ) {
        if (11 !== E && (f = X.exec(e)))
          if ((o = f[1])) {
            if (9 === E) {
              if (!(c = t.getElementById(o))) return r;
              if (c.id === o) return r.push(c), r;
            } else if (m && (c = m.getElementById(o)) && w(t, c) && c.id === o)
              return r.push(c), r;
          } else {
            if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return O.apply(r, t.getElementsByClassName(o)), r;
          }
        if (n.qsa && !C[e + " "] && (!v || !v.test(e))) {
          if (1 !== E) (m = t), (y = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            (l = t.getAttribute("id"))
              ? (l = l.replace(te, ne))
              : t.setAttribute("id", (l = _)),
              (a = (h = u(e)).length);
            while (a--) h[a] = "#" + l + " " + ye(h[a]);
            (y = h.join(",")), (m = (J.test(e) && ge(t.parentNode)) || t);
          }
          if (y)
            try {
              return O.apply(r, m.querySelectorAll(y)), r;
            } catch (e) {
            } finally {
              l === _ && t.removeAttribute("id");
            }
        }
      }
      return s(e.replace(U, "$1"), t, r, i);
    }
    function ue() {
      var e = [];
      function t(n, i) {
        return (
          e.push(n + " ") > r.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      }
      return t;
    }
    function ae(e) {
      return (e[_] = !0), e;
    }
    function se(e) {
      var t = d.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ce(e, t) {
      var n = e.split("|"),
        i = n.length;
      while (i--) r.attrHandle[n[i]] = t;
    }
    function le(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function de(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function he(e) {
      return ae(function (t) {
        return (
          (t = +t),
          ae(function (n, r) {
            var i,
              o = e([], n.length, t),
              u = o.length;
            while (u--) n[(i = o[u])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    (n = oe.support = {}),
      (o = oe.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (p = oe.setDocument =
        function (e) {
          var t,
            i,
            u = e ? e.ownerDocument || e : b;
          return u !== d && 9 === u.nodeType && u.documentElement
            ? ((d = u),
              (h = d.documentElement),
              (g = !o(d)),
              b !== d &&
                (i = d.defaultView) &&
                i.top !== i &&
                (i.addEventListener
                  ? i.addEventListener("unload", re, !1)
                  : i.attachEvent && i.attachEvent("onunload", re)),
              (n.attributes = se(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (n.getElementsByTagName = se(function (e) {
                return (
                  e.appendChild(d.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName = Y.test(d.getElementsByClassName)),
              (n.getById = se(function (e) {
                return (
                  (h.appendChild(e).id = _),
                  !d.getElementsByName || !d.getElementsByName(_).length
                );
              })),
              n.getById
                ? ((r.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((r.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                      var n =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                      var n,
                        r,
                        i,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        (i = t.getElementsByName(e)), (r = 0);
                        while ((o = i[r++]))
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (r.find.TAG = n.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (r.find.CLASS =
                n.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && g)
                    return t.getElementsByClassName(e);
                }),
              (y = []),
              (v = []),
              (n.qsa = Y.test(d.querySelectorAll)) &&
                (se(function (e) {
                  (h.appendChild(e).innerHTML =
                    "<a id='" +
                    _ +
                    "'></a><select id='" +
                    _ +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      v.push("[*^$]=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      v.push("\\[" + M + "*(?:value|" + I + ")"),
                    e.querySelectorAll("[id~=" + _ + "-]").length ||
                      v.push("~="),
                    e.querySelectorAll(":checked").length || v.push(":checked"),
                    e.querySelectorAll("a#" + _ + "+*").length ||
                      v.push(".#.+[+~]");
                }),
                se(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = d.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      v.push("name" + M + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      v.push(":enabled", ":disabled"),
                    (h.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      v.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    v.push(",.*:");
                })),
              (n.matchesSelector = Y.test(
                (m =
                  h.matches ||
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector)
              )) &&
                se(function (e) {
                  (n.disconnectedMatch = m.call(e, "*")),
                    m.call(e, "[s!='']:x"),
                    y.push("!=", H);
                }),
              (v = v.length && new RegExp(v.join("|"))),
              (y = y.length && new RegExp(y.join("|"))),
              (t = Y.test(h.compareDocumentPosition)),
              (w =
                t || Y.test(h.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t) while ((t = t.parentNode)) if (t === e) return !0;
                      return !1;
                    }),
              (A = t
                ? function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var r =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      r ||
                      (1 &
                        (r =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === r)
                        ? e === d || (e.ownerDocument === b && w(b, e))
                          ? -1
                          : t === d || (t.ownerDocument === b && w(b, t))
                          ? 1
                          : l
                          ? j(l, e) - j(l, t)
                          : 0
                        : 4 & r
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      u = [e],
                      a = [t];
                    if (!i || !o)
                      return e === d
                        ? -1
                        : t === d
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : l
                        ? j(l, e) - j(l, t)
                        : 0;
                    if (i === o) return le(e, t);
                    n = e;
                    while ((n = n.parentNode)) u.unshift(n);
                    n = t;
                    while ((n = n.parentNode)) a.unshift(n);
                    while (u[r] === a[r]) r++;
                    return r
                      ? le(u[r], a[r])
                      : u[r] === b
                      ? -1
                      : a[r] === b
                      ? 1
                      : 0;
                  }),
              d)
            : d;
        }),
      (oe.matches = function (e, t) {
        return oe(e, null, null, t);
      }),
      (oe.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== d && p(e),
          (t = t.replace(z, "='$1']")),
          n.matchesSelector &&
            g &&
            !C[t + " "] &&
            (!y || !y.test(t)) &&
            (!v || !v.test(t)))
        )
          try {
            var r = m.call(e, t);
            if (
              r ||
              n.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (e) {}
        return oe(t, d, null, [e]).length > 0;
      }),
      (oe.contains = function (e, t) {
        return (e.ownerDocument || e) !== d && p(e), w(e, t);
      }),
      (oe.attr = function (e, t) {
        (e.ownerDocument || e) !== d && p(e);
        var i = r.attrHandle[t.toLowerCase()],
          o = i && k.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
        return void 0 !== o
          ? o
          : n.attributes || !g
          ? e.getAttribute(t)
          : (o = e.getAttributeNode(t)) && o.specified
          ? o.value
          : null;
      }),
      (oe.escape = function (e) {
        return (e + "").replace(te, ne);
      }),
      (oe.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (oe.uniqueSort = function (e) {
        var t,
          r = [],
          i = 0,
          o = 0;
        if (
          ((f = !n.detectDuplicates),
          (l = !n.sortStable && e.slice(0)),
          e.sort(A),
          f)
        ) {
          while ((t = e[o++])) t === e[o] && (i = r.push(o));
          while (i--) e.splice(r[i], 1);
        }
        return (l = null), e;
      }),
      (i = oe.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else while ((t = e[r++])) n += i(t);
          return n;
        }),
      ((r = oe.selectors =
        {
          cacheLength: 50,
          createPseudo: ae,
          match: Q,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(Z, ee)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || oe.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && oe.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return Q.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      $.test(n) &&
                      (t = u(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(Z, ee).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = T[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                  T(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (r) {
                var i = oe.attr(r, e);
                return null == i
                  ? "!=" === t
                  : !t ||
                      ((i += ""),
                      "=" === t
                        ? i === n
                        : "!=" === t
                        ? i !== n
                        : "^=" === t
                        ? n && 0 === i.indexOf(n)
                        : "*=" === t
                        ? n && i.indexOf(n) > -1
                        : "$=" === t
                        ? n && i.slice(-n.length) === n
                        : "~=" === t
                        ? (" " + i.replace(q, " ") + " ").indexOf(n) > -1
                        : "|=" === t &&
                          (i === n || i.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                u = "last" !== e.slice(-4),
                a = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, s) {
                    var c,
                      l,
                      f,
                      p,
                      d,
                      h,
                      g = o !== u ? "nextSibling" : "previousSibling",
                      v = t.parentNode,
                      y = a && t.nodeName.toLowerCase(),
                      m = !s && !a,
                      w = !1;
                    if (v) {
                      if (o) {
                        while (g) {
                          p = t;
                          while ((p = p[g]))
                            if (
                              a
                                ? p.nodeName.toLowerCase() === y
                                : 1 === p.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [u ? v.firstChild : v.lastChild]), u && m)) {
                        (w =
                          (d =
                            (c =
                              (l =
                                (f = (p = v)[_] || (p[_] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === E &&
                            c[1]) && c[2]),
                          (p = d && v.childNodes[d]);
                        while (
                          (p = (++d && p && p[g]) || (w = d = 0) || h.pop())
                        )
                          if (1 === p.nodeType && ++w && p === t) {
                            l[e] = [E, d, w];
                            break;
                          }
                      } else if (
                        (m &&
                          (w = d =
                            (c =
                              (l =
                                (f = (p = t)[_] || (p[_] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === E &&
                            c[1]),
                        !1 === w)
                      )
                        while (
                          (p = (++d && p && p[g]) || (w = d = 0) || h.pop())
                        )
                          if (
                            (a
                              ? p.nodeName.toLowerCase() === y
                              : 1 === p.nodeType) &&
                            ++w &&
                            (m &&
                              ((l =
                                (f = p[_] || (p[_] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] = [E, w]),
                            p === t)
                          )
                            break;
                      return (w -= i) === r || (w % r == 0 && w / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, t) {
              var n,
                i =
                  r.pseudos[e] ||
                  r.setFilters[e.toLowerCase()] ||
                  oe.error("unsupported pseudo: " + e);
              return i[_]
                ? i(t)
                : i.length > 1
                ? ((n = [e, e, "", t]),
                  r.setFilters.hasOwnProperty(e.toLowerCase())
                    ? ae(function (e, n) {
                        var r,
                          o = i(e, t),
                          u = o.length;
                        while (u--) e[(r = j(e, o[u]))] = !(n[r] = o[u]);
                      })
                    : function (e) {
                        return i(e, 0, n);
                      })
                : i;
            },
          },
          pseudos: {
            not: ae(function (e) {
              var t = [],
                n = [],
                r = a(e.replace(U, "$1"));
              return r[_]
                ? ae(function (e, t, n, i) {
                    var o,
                      u = r(e, null, i, []),
                      a = e.length;
                    while (a--) (o = u[a]) && (e[a] = !(t[a] = o));
                  })
                : function (e, i, o) {
                    return (
                      (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: ae(function (e) {
              return function (t) {
                return oe(e, t).length > 0;
              };
            }),
            contains: ae(function (e) {
              return (
                (e = e.replace(Z, ee)),
                function (t) {
                  return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: ae(function (e) {
              return (
                G.test(e || "") || oe.error("unsupported lang: " + e),
                (e = e.replace(Z, ee).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = g
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === h;
            },
            focus: function (e) {
              return (
                e === d.activeElement &&
                (!d.hasFocus || d.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: de(!1),
            disabled: de(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !r.pseudos.empty(e);
            },
            header: function (e) {
              return K.test(e.nodeName);
            },
            input: function (e) {
              return V.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: he(function () {
              return [0];
            }),
            last: he(function (e, t) {
              return [t - 1];
            }),
            eq: he(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: he(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: he(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = r.pseudos.eq);
    for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      r.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
    function ve() {}
    (ve.prototype = r.filters = r.pseudos),
      (r.setFilters = new ve()),
      (u = oe.tokenize =
        function (e, t) {
          var n,
            i,
            o,
            u,
            a,
            s,
            c,
            l = S[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (c = r.preFilter);
          while (a) {
            (n && !(i = F.exec(a))) ||
              (i && (a = a.slice(i[0].length) || a), s.push((o = []))),
              (n = !1),
              (i = W.exec(a)) &&
                ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(U, " ") }),
                (a = a.slice(n.length)));
            for (u in r.filter)
              !(i = Q[u].exec(a)) ||
                (c[u] && !(i = c[u](i))) ||
                ((n = i.shift()),
                o.push({ value: n, type: u, matches: i }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? oe.error(e) : S(e, s).slice(0);
        });
    function ye(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function me(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        u = n && "parentNode" === o,
        a = x++;
      return t.first
        ? function (t, n, i) {
            while ((t = t[r])) if (1 === t.nodeType || u) return e(t, n, i);
            return !1;
          }
        : function (t, n, s) {
            var c,
              l,
              f,
              p = [E, a];
            if (s) {
              while ((t = t[r]))
                if ((1 === t.nodeType || u) && e(t, n, s)) return !0;
            } else
              while ((t = t[r]))
                if (1 === t.nodeType || u)
                  if (
                    ((f = t[_] || (t[_] = {})),
                    (l = f[t.uniqueID] || (f[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((c = l[o]) && c[0] === E && c[1] === a)
                      return (p[2] = c[2]);
                    if (((l[o] = p), (p[2] = e(t, n, s)))) return !0;
                  }
            return !1;
          };
    }
    function we(e) {
      return e.length > 1
        ? function (t, n, r) {
            var i = e.length;
            while (i--) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function _e(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
      return n;
    }
    function be(e, t, n, r, i) {
      for (var o, u = [], a = 0, s = e.length, c = null != t; a < s; a++)
        (o = e[a]) && ((n && !n(o, r, i)) || (u.push(o), c && t.push(a)));
      return u;
    }
    function Ee(e, t, n, r, i, o) {
      return (
        r && !r[_] && (r = Ee(r)),
        i && !i[_] && (i = Ee(i, o)),
        ae(function (o, u, a, s) {
          var c,
            l,
            f,
            p = [],
            d = [],
            h = u.length,
            g = o || _e(t || "*", a.nodeType ? [a] : a, []),
            v = !e || (!o && t) ? g : be(g, p, e, a, s),
            y = n ? (i || (o ? e : h || r) ? [] : u) : v;
          if ((n && n(v, y, a, s), r)) {
            (c = be(y, d)), r(c, [], a, s), (l = c.length);
            while (l--) (f = c[l]) && (y[d[l]] = !(v[d[l]] = f));
          }
          if (o) {
            if (i || e) {
              if (i) {
                (c = []), (l = y.length);
                while (l--) (f = y[l]) && c.push((v[l] = f));
                i(null, (y = []), c, s);
              }
              l = y.length;
              while (l--)
                (f = y[l]) &&
                  (c = i ? j(o, f) : p[l]) > -1 &&
                  (o[c] = !(u[c] = f));
            }
          } else (y = be(y === u ? y.splice(h, y.length) : y)), i ? i(null, u, y, s) : O.apply(u, y);
        })
      );
    }
    function xe(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          u = r.relative[e[0].type],
          a = u || r.relative[" "],
          s = u ? 1 : 0,
          l = me(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          f = me(
            function (e) {
              return j(t, e) > -1;
            },
            a,
            !0
          ),
          p = [
            function (e, n, r) {
              var i =
                (!u && (r || n !== c)) ||
                ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
              return (t = null), i;
            },
          ];
        s < o;
        s++
      )
        if ((n = r.relative[e[s].type])) p = [me(we(p), n)];
        else {
          if ((n = r.filter[e[s].type].apply(null, e[s].matches))[_]) {
            for (i = ++s; i < o; i++) if (r.relative[e[i].type]) break;
            return Ee(
              s > 1 && we(p),
              s > 1 &&
                ye(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(U, "$1"),
              n,
              s < i && xe(e.slice(s, i)),
              i < o && xe((e = e.slice(i))),
              i < o && ye(e)
            );
          }
          p.push(n);
        }
      return we(p);
    }
    function Te(e, t) {
      var n = t.length > 0,
        i = e.length > 0,
        o = function (o, u, a, s, l) {
          var f,
            h,
            v,
            y = 0,
            m = "0",
            w = o && [],
            _ = [],
            b = c,
            x = o || (i && r.find.TAG("*", l)),
            T = (E += null == b ? 1 : Math.random() || 0.1),
            S = x.length;
          for (
            l && (c = u === d || u || l);
            m !== S && null != (f = x[m]);
            m++
          ) {
            if (i && f) {
              (h = 0), u || f.ownerDocument === d || (p(f), (a = !g));
              while ((v = e[h++]))
                if (v(f, u || d, a)) {
                  s.push(f);
                  break;
                }
              l && (E = T);
            }
            n && ((f = !v && f) && y--, o && w.push(f));
          }
          if (((y += m), n && m !== y)) {
            h = 0;
            while ((v = t[h++])) v(w, _, u, a);
            if (o) {
              if (y > 0) while (m--) w[m] || _[m] || (_[m] = R.call(s));
              _ = be(_);
            }
            O.apply(s, _),
              l && !o && _.length > 0 && y + t.length > 1 && oe.uniqueSort(s);
          }
          return l && ((E = T), (c = b)), w;
        };
      return n ? ae(o) : o;
    }
    return (
      (a = oe.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = C[e + " "];
          if (!o) {
            t || (t = u(e)), (n = t.length);
            while (n--) (o = xe(t[n]))[_] ? r.push(o) : i.push(o);
            (o = C(e, Te(i, r))).selector = e;
          }
          return o;
        }),
      (s = oe.select =
        function (e, t, n, i) {
          var o,
            s,
            c,
            l,
            f,
            p = "function" == typeof e && e,
            d = !i && u((e = p.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              (s = d[0] = d[0].slice(0)).length > 2 &&
              "ID" === (c = s[0]).type &&
              9 === t.nodeType &&
              g &&
              r.relative[s[1].type]
            ) {
              if (!(t = (r.find.ID(c.matches[0].replace(Z, ee), t) || [])[0]))
                return n;
              p && (t = t.parentNode), (e = e.slice(s.shift().value.length));
            }
            o = Q.needsContext.test(e) ? 0 : s.length;
            while (o--) {
              if (((c = s[o]), r.relative[(l = c.type)])) break;
              if (
                (f = r.find[l]) &&
                (i = f(
                  c.matches[0].replace(Z, ee),
                  (J.test(s[0].type) && ge(t.parentNode)) || t
                ))
              ) {
                if ((s.splice(o, 1), !(e = i.length && ye(s))))
                  return O.apply(n, i), n;
                break;
              }
            }
          }
          return (
            (p || a(e, d))(
              i,
              t,
              !g,
              n,
              !t || (J.test(e) && ge(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = _.split("").sort(A).join("") === _),
      (n.detectDuplicates = !!f),
      p(),
      (n.sortDetached = se(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      })),
      se(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        ce("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        se(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        ce("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      se(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        ce(I, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      oe
    );
  })(e);
  (b.find = T),
    (b.expr = T.selectors),
    (b.expr[":"] = b.expr.pseudos),
    (b.uniqueSort = b.unique = T.uniqueSort),
    (b.text = T.getText),
    (b.isXMLDoc = T.isXML),
    (b.contains = T.contains),
    (b.escapeSelector = T.escape);
  var S = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && b(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    C = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    A = b.expr.match.needsContext;
  function k(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function R(e, t, n) {
    return g(t)
      ? b.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? b.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? b.grep(e, function (e) {
          return s.call(t, e) > -1 !== n;
        })
      : b.filter(t, e, n);
  }
  (b.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? b.find.matchesSelector(r, e)
          ? [r]
          : []
        : b.find.matches(
            e,
            b.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    b.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            b(e).filter(function () {
              for (t = 0; t < r; t++) if (b.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) b.find(e, i[t], n);
        return r > 1 ? b.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(R(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(R(this, e || [], !0));
      },
      is: function (e) {
        return !!R(this, "string" == typeof e && A.test(e) ? b(e) : e || [], !1)
          .length;
      },
    });
  var L,
    O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((b.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || L), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : O.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof b ? t[0] : t),
          b.merge(
            this,
            b.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)
          ),
          N.test(i[1]) && b.isPlainObject(t))
        )
          for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : g(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(b)
      : b.makeArray(e, this);
  }).prototype = b.fn),
    (L = b(r));
  var D = /^(?:parents|prev(?:Until|All))/,
    j = { children: !0, contents: !0, next: !0, prev: !0 };
  b.fn.extend({
    has: function (e) {
      var t = b(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (b.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        u = "string" != typeof e && b(e);
      if (!A.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (u
                ? u.index(n) > -1
                : 1 === n.nodeType && b.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? s.call(b(e), this[0])
          : s.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  });
  function I(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  b.each(
    {
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function (e) {
        return S(e, "parentNode");
      },
      parentsUntil: function (e, t, n) {
        return S(e, "parentNode", n);
      },
      next: function (e) {
        return I(e, "nextSibling");
      },
      prev: function (e) {
        return I(e, "previousSibling");
      },
      nextAll: function (e) {
        return S(e, "nextSibling");
      },
      prevAll: function (e) {
        return S(e, "previousSibling");
      },
      nextUntil: function (e, t, n) {
        return S(e, "nextSibling", n);
      },
      prevUntil: function (e, t, n) {
        return S(e, "previousSibling", n);
      },
      siblings: function (e) {
        return C((e.parentNode || {}).firstChild, e);
      },
      children: function (e) {
        return C(e.firstChild);
      },
      contents: function (e) {
        return k(e, "iframe")
          ? e.contentDocument
          : (k(e, "template") && (e = e.content || e),
            b.merge([], e.childNodes));
      },
    },
    function (e, t) {
      b.fn[e] = function (n, r) {
        var i = b.map(this, t, n);
        return (
          "Until" !== e.slice(-5) && (r = n),
          r && "string" == typeof r && (i = b.filter(r, i)),
          this.length > 1 &&
            (j[e] || b.uniqueSort(i), D.test(e) && i.reverse()),
          this.pushStack(i)
        );
      };
    }
  );
  var M = /[^\x20\t\r\n\f]+/g;
  function P(e) {
    var t = {};
    return (
      b.each(e.match(M) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  b.Callbacks = function (e) {
    e = "string" == typeof e ? P(e) : b.extend({}, e);
    var t,
      n,
      r,
      i,
      o = [],
      u = [],
      a = -1,
      s = function () {
        for (i = i || e.once, r = t = !0; u.length; a = -1) {
          n = u.shift();
          while (++a < o.length)
            !1 === o[a].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((a = o.length), (n = !1));
        }
        e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
      },
      c = {
        add: function () {
          return (
            o &&
              (n && !t && ((a = o.length - 1), u.push(n)),
              (function t(n) {
                b.each(n, function (n, r) {
                  g(r)
                    ? (e.unique && c.has(r)) || o.push(r)
                    : r && r.length && "string" !== w(r) && t(r);
                });
              })(arguments),
              n && !t && s()),
            this
          );
        },
        remove: function () {
          return (
            b.each(arguments, function (e, t) {
              var n;
              while ((n = b.inArray(t, o, n)) > -1)
                o.splice(n, 1), n <= a && a--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? b.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (i = u = []), (o = n = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (i = u = []), n || t || (o = n = ""), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              u.push(n),
              t || s()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return c;
  };
  function B(e) {
    return e;
  }
  function H(e) {
    throw e;
  }
  function q(e, t, n, r) {
    var i;
    try {
      e && g((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && g((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  b.extend({
    Deferred: function (t) {
      var n = [
          [
            "notify",
            "progress",
            b.Callbacks("memory"),
            b.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            b.Callbacks("once memory"),
            b.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            b.Callbacks("once memory"),
            b.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        r = "pending",
        i = {
          state: function () {
            return r;
          },
          always: function () {
            return o.done(arguments).fail(arguments), this;
          },
          catch: function (e) {
            return i.then(null, e);
          },
          pipe: function () {
            var e = arguments;
            return b
              .Deferred(function (t) {
                b.each(n, function (n, r) {
                  var i = g(e[r[4]]) && e[r[4]];
                  o[r[1]](function () {
                    var e = i && i.apply(this, arguments);
                    e && g(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[r[0] + "With"](this, i ? [e] : arguments);
                  });
                }),
                  (e = null);
              })
              .promise();
          },
          then: function (t, r, i) {
            var o = 0;
            function u(t, n, r, i) {
              return function () {
                var a = this,
                  s = arguments,
                  c = function () {
                    var e, c;
                    if (!(t < o)) {
                      if ((e = r.apply(a, s)) === n.promise())
                        throw new TypeError("Thenable self-resolution");
                      (c =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        g(c)
                          ? i
                            ? c.call(e, u(o, n, B, i), u(o, n, H, i))
                            : (o++,
                              c.call(
                                e,
                                u(o, n, B, i),
                                u(o, n, H, i),
                                u(o, n, B, n.notifyWith)
                              ))
                          : (r !== B && ((a = void 0), (s = [e])),
                            (i || n.resolveWith)(a, s));
                    }
                  },
                  l = i
                    ? c
                    : function () {
                        try {
                          c();
                        } catch (e) {
                          b.Deferred.exceptionHook &&
                            b.Deferred.exceptionHook(e, l.stackTrace),
                            t + 1 >= o &&
                              (r !== H && ((a = void 0), (s = [e])),
                              n.rejectWith(a, s));
                        }
                      };
                t
                  ? l()
                  : (b.Deferred.getStackHook &&
                      (l.stackTrace = b.Deferred.getStackHook()),
                    e.setTimeout(l));
              };
            }
            return b
              .Deferred(function (e) {
                n[0][3].add(u(0, e, g(i) ? i : B, e.notifyWith)),
                  n[1][3].add(u(0, e, g(t) ? t : B)),
                  n[2][3].add(u(0, e, g(r) ? r : H));
              })
              .promise();
          },
          promise: function (e) {
            return null != e ? b.extend(e, i) : i;
          },
        },
        o = {};
      return (
        b.each(n, function (e, t) {
          var u = t[2],
            a = t[5];
          (i[t[1]] = u.add),
            a &&
              u.add(
                function () {
                  r = a;
                },
                n[3 - e][2].disable,
                n[3 - e][3].disable,
                n[0][2].lock,
                n[0][3].lock
              ),
            u.add(t[3].fire),
            (o[t[0]] = function () {
              return (
                o[t[0] + "With"](this === o ? void 0 : this, arguments), this
              );
            }),
            (o[t[0] + "With"] = u.fireWith);
        }),
        i.promise(o),
        t && t.call(o, o),
        o
      );
    },
    when: function (e) {
      var t = arguments.length,
        n = t,
        r = Array(n),
        i = o.call(arguments),
        u = b.Deferred(),
        a = function (e) {
          return function (n) {
            (r[e] = this),
              (i[e] = arguments.length > 1 ? o.call(arguments) : n),
              --t || u.resolveWith(r, i);
          };
        };
      if (
        t <= 1 &&
        (q(e, u.done(a(n)).resolve, u.reject, !t),
        "pending" === u.state() || g(i[n] && i[n].then))
      )
        return u.then();
      while (n--) q(i[n], a(n), u.reject);
      return u.promise();
    },
  });
  var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (b.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      U.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (b.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var F = b.Deferred();
  (b.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        b.readyException(e);
      }),
      this
    );
  }),
    b.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --b.readyWait : b.isReady) ||
          ((b.isReady = !0),
          (!0 !== e && --b.readyWait > 0) || F.resolveWith(r, [b]));
      },
    }),
    (b.ready.then = F.then);
  function W() {
    r.removeEventListener("DOMContentLoaded", W),
      e.removeEventListener("load", W),
      b.ready();
  }
  "complete" === r.readyState ||
  ("loading" !== r.readyState && !r.documentElement.doScroll)
    ? e.setTimeout(b.ready)
    : (r.addEventListener("DOMContentLoaded", W),
      e.addEventListener("load", W));
  var z = function (e, t, n, r, i, o, u) {
      var a = 0,
        s = e.length,
        c = null == n;
      if ("object" === w(n)) {
        i = !0;
        for (a in n) z(e, t, a, n[a], !0, o, u);
      } else if (
        void 0 !== r &&
        ((i = !0),
        g(r) || (u = !0),
        c &&
          (u
            ? (t.call(e, r), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(b(e), n);
              }))),
        t)
      )
        for (; a < s; a++) t(e[a], n, u ? r : r.call(e[a], a, t(e[a], n)));
      return i ? e : c ? t.call(e) : s ? t(e[0], n) : o;
    },
    $ = /^-ms-/,
    G = /-([a-z])/g;
  function Q(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace($, "ms-").replace(G, Q);
  }
  var K = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = b.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            K(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in r
              ? [t]
              : t.match(M) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || b.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !b.isEmptyObject(t);
      },
    });
  var X = new Y(),
    J = new Y(),
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ee = /[A-Z]/g;
  function te(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : Z.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = te(n);
        } catch (e) {}
        J.set(e, t, n);
      } else n = void 0;
    return n;
  }
  b.extend({
    hasData: function (e) {
      return J.hasData(e) || X.hasData(e);
    },
    data: function (e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function (e, t) {
      J.remove(e, t);
    },
    _data: function (e, t, n) {
      return X.access(e, t, n);
    },
    _removeData: function (e, t) {
      X.remove(e, t);
    },
  }),
    b.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          u = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = J.get(o)), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))
          ) {
            n = u.length;
            while (n--)
              u[n] &&
                0 === (r = u[n].name).indexOf("data-") &&
                ((r = V(r.slice(5))), ne(o, r, i[r]));
            X.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              J.set(this, e);
            })
          : z(
              this,
              function (t) {
                var n;
                if (o && void 0 === t) {
                  if (void 0 !== (n = J.get(o, e))) return n;
                  if (void 0 !== (n = ne(o, e))) return n;
                } else
                  this.each(function () {
                    J.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          J.remove(this, e);
        });
      },
    }),
    b.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = X.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = X.access(e, t, b.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = b.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = b._queueHooks(e, t),
          u = function () {
            b.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, u, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          X.get(e, n) ||
          X.access(e, n, {
            empty: b.Callbacks("once memory").add(function () {
              X.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    b.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? b.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = b.queue(this, e, t);
                b._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          b.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = b.Deferred(),
          o = this,
          u = this.length,
          a = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (u--)
          (n = X.get(o[u], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(a));
        return a(), i.promise(t);
      },
    });
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
    oe = ["Top", "Right", "Bottom", "Left"],
    ue = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          b.contains(e.ownerDocument, e) &&
          "none" === b.css(e, "display"))
      );
    },
    ae = function (e, t, n, r) {
      var i,
        o,
        u = {};
      for (o in t) (u[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = u[o];
      return i;
    };
  function se(e, t, n, r) {
    var i,
      o,
      u = 20,
      a = r
        ? function () {
            return r.cur();
          }
        : function () {
            return b.css(e, t, "");
          },
      s = a(),
      c = (n && n[3]) || (b.cssNumber[t] ? "" : "px"),
      l = (b.cssNumber[t] || ("px" !== c && +s)) && ie.exec(b.css(e, t));
    if (l && l[3] !== c) {
      (s /= 2), (c = c || l[3]), (l = +s || 1);
      while (u--)
        b.style(e, t, l + c),
          (1 - o) * (1 - (o = a() / s || 0.5)) <= 0 && (u = 0),
          (l /= o);
      (l *= 2), b.style(e, t, l + c), (n = n || []);
    }
    return (
      n &&
        ((l = +l || +s || 0),
        (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = c), (r.start = l), (r.end = i))),
      i
    );
  }
  var ce = {};
  function le(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = ce[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = b.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      (ce[r] = i),
      i)
    );
  }
  function fe(e, t) {
    for (var n, r, i = [], o = 0, u = e.length; o < u; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((i[o] = X.get(r, "display") || null),
              i[o] || (r.style.display = "")),
            "" === r.style.display && ue(r) && (i[o] = le(r)))
          : "none" !== n && ((i[o] = "none"), X.set(r, "display", n)));
    for (o = 0; o < u; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  b.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ue(this) ? b(this).show() : b(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && k(e, t)) ? b.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"));
  }
  var me = /<|&#?\w+;/;
  function we(e, t, n, r, i) {
    for (
      var o,
        u,
        a,
        s,
        c,
        l,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) b.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (u = u || f.appendChild(t.createElement("div"))),
            (a = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (s = ge[a] || ge._default),
            (u.innerHTML = s[1] + b.htmlPrefilter(o) + s[2]),
            (l = s[0]);
          while (l--) u = u.lastChild;
          b.merge(p, u.childNodes), ((u = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && b.inArray(o, r) > -1) i && i.push(o);
      else if (
        ((c = b.contains(o.ownerDocument, o)),
        (u = ve(f.appendChild(o), "script")),
        c && ye(u),
        n)
      ) {
        l = 0;
        while ((o = u[l++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  !(function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
      t = r.createElement("input");
    t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var _e = r.documentElement,
    be = /^key/,
    Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    xe = /^([^.]*)(?:\.(.+)|)/;
  function Te() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function Ce() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function Ae(e, t, n, r, i, o) {
    var u, a;
    if ("object" == typeof t) {
      "string" != typeof n && ((r = r || n), (n = void 0));
      for (a in t) Ae(e, a, n, r, t[a], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Se;
    else if (!i) return e;
    return (
      1 === o &&
        ((u = i),
        ((i = function (e) {
          return b().off(e), u.apply(this, arguments);
        }).guid = u.guid || (u.guid = b.guid++))),
      e.each(function () {
        b.event.add(this, t, i, r, n);
      })
    );
  }
  (b.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        u,
        a,
        s,
        c,
        l,
        f,
        p,
        d,
        h,
        g,
        v = X.get(e);
      if (v) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && b.find.matchesSelector(_e, i),
          n.guid || (n.guid = b.guid++),
          (s = v.events) || (s = v.events = {}),
          (u = v.handle) ||
            (u = v.handle =
              function (t) {
                return "undefined" != typeof b && b.event.triggered !== t.type
                  ? b.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
          (c = (t = (t || "").match(M) || [""]).length);
        while (c--)
          (d = g = (a = xe.exec(t[c]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            d &&
              ((f = b.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = b.event.special[d] || {}),
              (l = b.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && b.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = s[d]) ||
                (((p = s[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, u)) ||
                  (e.addEventListener && e.addEventListener(d, u))),
              f.add &&
                (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, l) : p.push(l),
              (b.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        u,
        a,
        s,
        c,
        l,
        f,
        p,
        d,
        h,
        g,
        v = X.hasData(e) && X.get(e);
      if (v && (s = v.events)) {
        c = (t = (t || "").match(M) || [""]).length;
        while (c--)
          if (
            ((a = xe.exec(t[c]) || []),
            (d = g = a[1]),
            (h = (a[2] || "").split(".").sort()),
            d)
          ) {
            (f = b.event.special[d] || {}),
              (p = s[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (a =
                a[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (u = o = p.length);
            while (o--)
              (l = p[o]),
                (!i && g !== l.origType) ||
                  (n && n.guid !== l.guid) ||
                  (a && !a.test(l.namespace)) ||
                  (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                  (p.splice(o, 1),
                  l.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, l));
            u &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                b.removeEvent(e, d, v.handle),
              delete s[d]);
          } else for (d in s) b.event.remove(e, d + t[c], n, r, !0);
        b.isEmptyObject(s) && X.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t = b.event.fix(e),
        n,
        r,
        i,
        o,
        u,
        a,
        s = new Array(arguments.length),
        c = (X.get(this, "events") || {})[t.type] || [],
        l = b.event.special[t.type] || {};
      for (s[0] = t, n = 1; n < arguments.length; n++) s[n] = arguments[n];
      if (
        ((t.delegateTarget = this),
        !l.preDispatch || !1 !== l.preDispatch.call(this, t))
      ) {
        (a = b.event.handlers.call(this, t, c)), (n = 0);
        while ((o = a[n++]) && !t.isPropagationStopped()) {
          (t.currentTarget = o.elem), (r = 0);
          while ((u = o.handlers[r++]) && !t.isImmediatePropagationStopped())
            (t.rnamespace && !t.rnamespace.test(u.namespace)) ||
              ((t.handleObj = u),
              (t.data = u.data),
              void 0 !==
                (i = (
                  (b.event.special[u.origType] || {}).handle || u.handler
                ).apply(o.elem, s)) &&
                !1 === (t.result = i) &&
                (t.preventDefault(), t.stopPropagation()));
        }
        return l.postDispatch && l.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        u,
        a = [],
        s = t.delegateCount,
        c = e.target;
      if (s && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (o = [], u = {}, n = 0; n < s; n++)
              void 0 === u[(i = (r = t[n]).selector + " ")] &&
                (u[i] = r.needsContext
                  ? b(i, this).index(c) > -1
                  : b.find(i, this, null, [c]).length),
                u[i] && o.push(r);
            o.length && a.push({ elem: c, handlers: o });
          }
      return (
        (c = this), s < t.length && a.push({ elem: c, handlers: t.slice(s) }), a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(b.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[b.expando] ? e : new b.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Ce() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Ce() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && k(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return k(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (b.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (b.Event = function (e, t) {
      if (!(this instanceof b.Event)) return new b.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Te
              : Se),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && b.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[b.expando] = !0);
    }),
    (b.Event.prototype = {
      constructor: b.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Te),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Te),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Te),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    b.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ee.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      b.event.addProp
    ),
    b.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        b.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || b.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    b.fn.extend({
      on: function (e, t, n, r) {
        return Ae(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ae(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            b(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Se),
          this.each(function () {
            b.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ne = /<script|<style|<link/i,
    Re = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Oe(e, t) {
    return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? b(e).children("tbody")[0] || e
      : e;
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function je(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Ie(e, t) {
    var n, r, i, o, u, a, s, c;
    if (1 === t.nodeType) {
      if (
        X.hasData(e) &&
        ((o = X.access(e)), (u = X.set(t, o)), (c = o.events))
      ) {
        delete u.handle, (u.events = {});
        for (i in c)
          for (n = 0, r = c[i].length; n < r; n++) b.event.add(t, i, c[i][n]);
      }
      J.hasData(e) && ((a = J.access(e)), (s = b.extend({}, a)), J.set(t, s));
    }
  }
  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function Pe(e, t, n, r) {
    t = u.apply([], t);
    var i,
      o,
      a,
      s,
      c,
      l,
      f = 0,
      p = e.length,
      d = p - 1,
      v = t[0],
      y = g(v);
    if (y || (p > 1 && "string" == typeof v && !h.checkClone && Re.test(v)))
      return e.each(function (i) {
        var o = e.eq(i);
        y && (t[0] = v.call(this, i, o.html())), Pe(o, t, n, r);
      });
    if (
      p &&
      ((i = we(t, e[0].ownerDocument, !1, e, r)),
      (o = i.firstChild),
      1 === i.childNodes.length && (i = o),
      o || r)
    ) {
      for (s = (a = b.map(ve(i, "script"), De)).length; f < p; f++)
        (c = i),
          f !== d &&
            ((c = b.clone(c, !0, !0)), s && b.merge(a, ve(c, "script"))),
          n.call(e[f], c, f);
      if (s)
        for (l = a[a.length - 1].ownerDocument, b.map(a, je), f = 0; f < s; f++)
          (c = a[f]),
            he.test(c.type || "") &&
              !X.access(c, "globalEval") &&
              b.contains(l, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? b._evalUrl && b._evalUrl(c.src)
                : m(c.textContent.replace(Le, ""), l, c));
    }
    return e;
  }
  function Be(e, t, n) {
    for (var r, i = t ? b.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || b.cleanData(ve(r)),
        r.parentNode &&
          (n && b.contains(r.ownerDocument, r) && ye(ve(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  b.extend({
    htmlPrefilter: function (e) {
      return e.replace(ke, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        u,
        a = e.cloneNode(!0),
        s = b.contains(e.ownerDocument, e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          b.isXMLDoc(e)
        )
      )
        for (u = ve(a), r = 0, i = (o = ve(e)).length; r < i; r++)
          Me(o[r], u[r]);
      if (t)
        if (n)
          for (o = o || ve(e), u = u || ve(a), r = 0, i = o.length; r < i; r++)
            Ie(o[r], u[r]);
        else Ie(e, a);
      return (
        (u = ve(a, "script")).length > 0 && ye(u, !s && ve(e, "script")), a
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = b.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (K(n)) {
          if ((t = n[X.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? b.event.remove(n, r) : b.removeEvent(n, r, t.handle);
            n[X.expando] = void 0;
          }
          n[J.expando] && (n[J.expando] = void 0);
        }
    },
  }),
    b.fn.extend({
      detach: function (e) {
        return Be(this, e, !0);
      },
      remove: function (e) {
        return Be(this, e);
      },
      text: function (e) {
        return z(
          this,
          function (e) {
            return void 0 === e
              ? b.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Oe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Oe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (b.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return b.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return z(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ne.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = b.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (b.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Pe(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            b.inArray(this, e) < 0 &&
              (b.cleanData(ve(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    b.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        b.fn[e] = function (e) {
          for (var n, r = [], i = b(e), o = i.length - 1, u = 0; u <= o; u++)
            (n = u === o ? this : this.clone(!0)),
              b(i[u])[t](n),
              a.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var He = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
    qe = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Ue = new RegExp(oe.join("|"), "i");
  !(function () {
    function t() {
      if (l) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          _e.appendChild(c).appendChild(l);
        var t = e.getComputedStyle(l);
        (i = "1%" !== t.top),
          (s = 12 === n(t.marginLeft)),
          (l.style.right = "60%"),
          (a = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (l.style.position = "absolute"),
          (u = 36 === l.offsetWidth || "absolute"),
          _e.removeChild(c),
          (l = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      u,
      a,
      s,
      c = r.createElement("div"),
      l = r.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === l.style.backgroundClip),
      b.extend(h, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), a;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), s;
        },
        scrollboxSize: function () {
          return t(), u;
        },
      }));
  })();
  function Fe(e, t, n) {
    var r,
      i,
      o,
      u,
      a = e.style;
    return (
      (n = n || qe(e)) &&
        ("" !== (u = n.getPropertyValue(t) || n[t]) ||
          b.contains(e.ownerDocument, e) ||
          (u = b.style(e, t)),
        !h.pixelBoxStyles() &&
          He.test(u) &&
          Ue.test(t) &&
          ((r = a.width),
          (i = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = u),
          (u = n.width),
          (a.width = r),
          (a.minWidth = i),
          (a.maxWidth = o))),
      void 0 !== u ? u + "" : u
    );
  }
  function We(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  var ze = /^(none|table(?!-c[ea]).+)/,
    $e = /^--/,
    Ge = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" },
    Ve = ["Webkit", "Moz", "ms"],
    Ke = r.createElement("div").style;
  function Ye(e) {
    if (e in Ke) return e;
    var t = e[0].toUpperCase() + e.slice(1),
      n = Ve.length;
    while (n--) if ((e = Ve[n] + t) in Ke) return e;
  }
  function Xe(e) {
    var t = b.cssProps[e];
    return t || (t = b.cssProps[e] = Ye(e) || e), t;
  }
  function Je(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ze(e, t, n, r, i, o) {
    var u = "width" === t ? 1 : 0,
      a = 0,
      s = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; u < 4; u += 2)
      "margin" === n && (s += b.css(e, n + oe[u], !0, i)),
        r
          ? ("content" === n && (s -= b.css(e, "padding" + oe[u], !0, i)),
            "margin" !== n &&
              (s -= b.css(e, "border" + oe[u] + "Width", !0, i)))
          : ((s += b.css(e, "padding" + oe[u], !0, i)),
            "padding" !== n
              ? (s += b.css(e, "border" + oe[u] + "Width", !0, i))
              : (a += b.css(e, "border" + oe[u] + "Width", !0, i)));
    return (
      !r &&
        o >= 0 &&
        (s += Math.max(
          0,
          Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] - o - s - a - 0.5
          )
        )),
      s
    );
  }
  function et(e, t, n) {
    var r = qe(e),
      i = Fe(e, t, r),
      o = "border-box" === b.css(e, "boxSizing", !1, r),
      u = o;
    if (He.test(i)) {
      if (!n) return i;
      i = "auto";
    }
    return (
      (u = u && (h.boxSizingReliable() || i === e.style[t])),
      ("auto" === i ||
        (!parseFloat(i) && "inline" === b.css(e, "display", !1, r))) &&
        ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (u = !0)),
      (i = parseFloat(i) || 0) +
        Ze(e, t, n || (o ? "border" : "content"), u, r, i) +
        "px"
    );
  }
  b.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          u,
          a = V(t),
          s = $e.test(t),
          c = e.style;
        if (
          (s || (t = Xe(a)), (u = b.cssHooks[t] || b.cssHooks[a]), void 0 === n)
        )
          return u && "get" in u && void 0 !== (i = u.get(e, !1, r)) ? i : c[t];
        "string" == (o = typeof n) &&
          (i = ie.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n === n &&
            ("number" === o &&
              (n += (i && i[3]) || (b.cssNumber[a] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (u && "set" in u && void 0 === (n = u.set(e, n, r))) ||
              (s ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        u,
        a = V(t);
      return (
        $e.test(t) || (t = Xe(a)),
        (u = b.cssHooks[t] || b.cssHooks[a]) &&
          "get" in u &&
          (i = u.get(e, !0, n)),
        void 0 === i && (i = Fe(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    b.each(["height", "width"], function (e, t) {
      b.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !ze.test(b.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? et(e, t, r)
              : ae(e, Ge, function () {
                  return et(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = qe(e),
            u = "border-box" === b.css(e, "boxSizing", !1, o),
            a = r && Ze(e, t, r, u, o);
          return (
            u &&
              h.scrollboxSize() === o.position &&
              (a -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  Ze(e, t, "border", !1, o) -
                  0.5
              )),
            a &&
              (i = ie.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = b.css(e, t))),
            Je(e, n, a)
          );
        },
      };
    }),
    (b.cssHooks.marginLeft = We(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Fe(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ae(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    b.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (b.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (b.cssHooks[e + t].set = Je);
    }),
    b.fn.extend({
      css: function (e, t) {
        return z(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              u = 0;
            if (Array.isArray(t)) {
              for (r = qe(e), i = t.length; u < i; u++)
                o[t[u]] = b.css(e, t[u], !1, r);
              return o;
            }
            return void 0 !== n ? b.style(e, t, n) : b.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    });
  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }
  (b.Tween = tt),
    (tt.prototype = {
      constructor: tt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || b.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (b.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = tt.propHooks[this.prop];
        return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = tt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                b.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : tt.propHooks._default.set(this),
          this
        );
      },
    }),
    (tt.prototype.init.prototype = tt.prototype),
    (tt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = b.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          b.fx.step[e.prop]
            ? b.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[b.cssProps[e.prop]] && !b.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : b.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (tt.propHooks.scrollTop = tt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (b.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (b.fx = tt.prototype.init),
    (b.fx.step = {});
  var nt,
    rt,
    it = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
  function ut() {
    rt &&
      (!1 === r.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(ut)
        : e.setTimeout(ut, b.fx.interval),
      b.fx.tick());
  }
  function at() {
    return (
      e.setTimeout(function () {
        nt = void 0;
      }),
      (nt = Date.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
        o = 0,
        u = i.length;
      o < u;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(e, t, n) {
    var r,
      i,
      o,
      u,
      a,
      s,
      c,
      l,
      f = "width" in t || "height" in t,
      p = this,
      d = {},
      h = e.style,
      g = e.nodeType && ue(e),
      v = X.get(e, "fxshow");
    n.queue ||
      (null == (u = b._queueHooks(e, "fx")).unqueued &&
        ((u.unqueued = 0),
        (a = u.empty.fire),
        (u.empty.fire = function () {
          u.unqueued || a();
        })),
      u.unqueued++,
      p.always(function () {
        p.always(function () {
          u.unqueued--, b.queue(e, "fx").length || u.empty.fire();
        });
      }));
    for (r in t)
      if (((i = t[r]), it.test(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))
        ) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }
        d[r] = (v && v[r]) || b.style(e, r);
      }
    if ((s = !b.isEmptyObject(t)) || !b.isEmptyObject(d)) {
      f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (c = v && v.display) && (c = X.get(e, "display")),
        "none" === (l = b.css(e, "display")) &&
          (c
            ? (l = c)
            : (fe([e], !0),
              (c = e.style.display || c),
              (l = b.css(e, "display")),
              fe([e]))),
        ("inline" === l || ("inline-block" === l && null != c)) &&
          "none" === b.css(e, "float") &&
          (s ||
            (p.done(function () {
              h.display = c;
            }),
            null == c && ((l = h.display), (c = "none" === l ? "" : l))),
          (h.display = "inline-block"))),
        n.overflow &&
          ((h.overflow = "hidden"),
          p.always(function () {
            (h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]);
          })),
        (s = !1);
      for (r in d)
        s ||
          (v
            ? "hidden" in v && (g = v.hidden)
            : (v = X.access(e, "fxshow", { display: c })),
          o && (v.hidden = !g),
          g && fe([e], !0),
          p.done(function () {
            g || fe([e]), X.remove(e, "fxshow");
            for (r in d) b.style(e, r, d[r]);
          })),
          (s = ct(g ? v[r] : 0, r, p)),
          r in v || ((v[r] = s.start), g && ((s.end = s.start), (s.start = 0)));
    }
  }
  function ft(e, t) {
    var n, r, i, o, u;
    for (n in e)
      if (
        ((r = V(n)),
        (i = t[r]),
        (o = e[n]),
        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (u = b.cssHooks[r]) && "expand" in u)
      ) {
        (o = u.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function pt(e, t, n) {
    var r,
      i,
      o = 0,
      u = pt.prefilters.length,
      a = b.Deferred().always(function () {
        delete s.elem;
      }),
      s = function () {
        if (i) return !1;
        for (
          var t = nt || at(),
            n = Math.max(0, c.startTime + c.duration - t),
            r = 1 - (n / c.duration || 0),
            o = 0,
            u = c.tweens.length;
          o < u;
          o++
        )
          c.tweens[o].run(r);
        return (
          a.notifyWith(e, [c, r, n]),
          r < 1 && u
            ? n
            : (u || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        );
      },
      c = a.promise({
        elem: e,
        props: b.extend({}, t),
        opts: b.extend(!0, { specialEasing: {}, easing: b.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: nt || at(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = b.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? c.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) c.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
              : a.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      l = c.props;
    for (ft(l, c.opts.specialEasing); o < u; o++)
      if ((r = pt.prefilters[o].call(c, e, l, c.opts)))
        return (
          g(r.stop) &&
            (b._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      b.map(l, ct, c),
      g(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      b.fx.timer(b.extend(s, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (b.Animation = b.extend(pt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, ie.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (pt.tweeners[n] = pt.tweeners[n] || []),
          pt.tweeners[n].unshift(t);
    },
    prefilters: [lt],
    prefilter: function (e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    },
  })),
    (b.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? b.extend({}, e)
          : {
              complete: n || (!n && t) || (g(e) && e),
              duration: e,
              easing: (n && t) || (t && !g(t) && t),
            };
      return (
        b.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in b.fx.speeds
              ? (r.duration = b.fx.speeds[r.duration])
              : (r.duration = b.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          g(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue);
        }),
        r
      );
    }),
    b.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ue)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = b.isEmptyObject(e),
          o = b.speed(t, n, r),
          u = function () {
            var t = pt(this, b.extend({}, e), o);
            (i || X.get(this, "finish")) && t.stop(!0);
          };
        return (
          (u.finish = u),
          i || !1 === o.queue ? this.each(u) : this.queue(o.queue, u)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = b.timers,
              u = X.get(this);
            if (i) u[i] && u[i].stop && r(u[i]);
            else for (i in u) u[i] && u[i].stop && ot.test(i) && r(u[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || b.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = X.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = b.timers,
              u = r ? r.length : 0;
            for (
              n.finish = !0,
                b.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < u; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    b.each(["toggle", "show", "hide"], function (e, t) {
      var n = b.fn[t];
      b.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(st(t, !0), e, r, i);
      };
    }),
    b.each(
      {
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        b.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (b.timers = []),
    (b.fx.tick = function () {
      var e,
        t = 0,
        n = b.timers;
      for (nt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || b.fx.stop(), (nt = void 0);
    }),
    (b.fx.timer = function (e) {
      b.timers.push(e), b.fx.start();
    }),
    (b.fx.interval = 13),
    (b.fx.start = function () {
      rt || ((rt = !0), ut());
    }),
    (b.fx.stop = function () {
      rt = null;
    }),
    (b.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (b.fn.delay = function (t, n) {
      return (
        (t = b.fx ? b.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
      (e.type = "checkbox"),
        (h.checkOn = "" !== e.value),
        (h.optSelected = t.selected),
        ((e = r.createElement("input")).value = "t"),
        (e.type = "radio"),
        (h.radioValue = "t" === e.value);
    })();
  var dt,
    ht = b.expr.attrHandle;
  b.fn.extend({
    attr: function (e, t) {
      return z(this, b.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        b.removeAttr(this, e);
      });
    },
  }),
    b.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? b.prop(e, t, n)
            : ((1 === o && b.isXMLDoc(e)) ||
                (i =
                  b.attrHooks[t.toLowerCase()] ||
                  (b.expr.match.bool.test(t) ? dt : void 0)),
              void 0 !== n
                ? null === n
                  ? void b.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = b.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && k(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(M);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (dt = {
      set: function (e, t, n) {
        return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    b.each(b.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ht[t] || b.find.attr;
      ht[t] = function (e, t, r) {
        var i,
          o,
          u = t.toLowerCase();
        return (
          r ||
            ((o = ht[u]),
            (ht[u] = i),
            (i = null != n(e, t, r) ? u : null),
            (ht[u] = o)),
          i
        );
      };
    });
  var gt = /^(?:input|select|textarea|button)$/i,
    vt = /^(?:a|area)$/i;
  b.fn.extend({
    prop: function (e, t) {
      return z(this, b.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[b.propFix[e] || e];
      });
    },
  }),
    b.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && b.isXMLDoc(e)) ||
              ((t = b.propFix[t] || t), (i = b.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = b.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : gt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (b.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    b.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        b.propFix[this.toLowerCase()] = this;
      }
    );
  function yt(e) {
    return (e.match(M) || []).join(" ");
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function wt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }
  b.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        u,
        a,
        s = 0;
      if (g(e))
        return this.each(function (t) {
          b(this).addClass(e.call(this, t, mt(this)));
        });
      if ((t = wt(e)).length)
        while ((n = this[s++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && " " + yt(i) + " "))) {
            u = 0;
            while ((o = t[u++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (a = yt(r)) && n.setAttribute("class", a);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        u,
        a,
        s = 0;
      if (g(e))
        return this.each(function (t) {
          b(this).removeClass(e.call(this, t, mt(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ((t = wt(e)).length)
        while ((n = this[s++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && " " + yt(i) + " "))) {
            u = 0;
            while ((o = t[u++]))
              while (r.indexOf(" " + o + " ") > -1)
                r = r.replace(" " + o + " ", " ");
            i !== (a = yt(r)) && n.setAttribute("class", a);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e,
        r = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && r
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : g(e)
        ? this.each(function (n) {
            b(this).toggleClass(e.call(this, n, mt(this), t), t);
          })
        : this.each(function () {
            var t, i, o, u;
            if (r) {
              (i = 0), (o = b(this)), (u = wt(e));
              while ((t = u[i++]))
                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while ((n = this[r++]))
        if (1 === n.nodeType && (" " + yt(mt(n)) + " ").indexOf(t) > -1)
          return !0;
      return !1;
    },
  });
  var _t = /\r/g;
  b.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      {
        if (arguments.length)
          return (
            (r = g(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                (null == (i = r ? e.call(this, n, b(this).val()) : e)
                  ? (i = "")
                  : "number" == typeof i
                  ? (i += "")
                  : Array.isArray(i) &&
                    (i = b.map(i, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((t =
                  b.valHooks[this.type] ||
                  b.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, i, "value")) ||
                  (this.value = i));
            })
          );
        if (i)
          return (t =
            b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (n = t.get(i, "value"))
            ? n
            : "string" == typeof (n = i.value)
            ? n.replace(_t, "")
            : null == n
            ? ""
            : n;
      }
    },
  }),
    b.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = b.find.attr(e, "value");
            return null != t ? t : yt(b.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              u = "select-one" === e.type,
              a = u ? null : [],
              s = u ? o + 1 : i.length;
            for (r = o < 0 ? s : u ? o : 0; r < s; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))
              ) {
                if (((t = b(n).val()), u)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = b.makeArray(t),
              u = i.length;
            while (u--)
              ((r = i[u]).selected =
                b.inArray(b.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    b.each(["radio", "checkbox"], function () {
      (b.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = b.inArray(b(e).val(), t) > -1);
        },
      }),
        h.checkOn ||
          (b.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    Et = function (e) {
      e.stopPropagation();
    };
  b.extend(b.event, {
    trigger: function (t, n, i, o) {
      var u,
        a,
        s,
        c,
        l,
        p,
        d,
        h,
        y = [i || r],
        m = f.call(t, "type") ? t.type : t,
        w = f.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = h = s = i = i || r),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !bt.test(m + b.event.triggered) &&
          (m.indexOf(".") > -1 && ((m = (w = m.split(".")).shift()), w.sort()),
          (l = m.indexOf(":") < 0 && "on" + m),
          (t = t[b.expando] ? t : new b.Event(m, "object" == typeof t && t)),
          (t.isTrigger = o ? 2 : 3),
          (t.namespace = w.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : b.makeArray(n, [t])),
          (d = b.event.special[m] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !v(i)) {
          for (
            c = d.delegateType || m, bt.test(c + m) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            y.push(a), (s = a);
          s === (i.ownerDocument || r) &&
            y.push(s.defaultView || s.parentWindow || e);
        }
        u = 0;
        while ((a = y[u++]) && !t.isPropagationStopped())
          (h = a),
            (t.type = u > 1 ? c : d.bindType || m),
            (p = (X.get(a, "events") || {})[t.type] && X.get(a, "handle")) &&
              p.apply(a, n),
            (p = l && a[l]) &&
              p.apply &&
              K(a) &&
              ((t.result = p.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = m),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(y.pop(), n)) ||
            !K(i) ||
            (l &&
              g(i[m]) &&
              !v(i) &&
              ((s = i[l]) && (i[l] = null),
              (b.event.triggered = m),
              t.isPropagationStopped() && h.addEventListener(m, Et),
              i[m](),
              t.isPropagationStopped() && h.removeEventListener(m, Et),
              (b.event.triggered = void 0),
              s && (i[l] = s))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = b.extend(new b.Event(), n, { type: e, isSimulated: !0 });
      b.event.trigger(r, null, t);
    },
  }),
    b.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          b.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return b.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      b.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          b.event.simulate(t, e.target, b.event.fix(e));
        };
        b.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = X.access(r, t);
            i || r.addEventListener(e, n, !0), X.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = X.access(r, t) - 1;
            i
              ? X.access(r, t, i)
              : (r.removeEventListener(e, n, !0), X.remove(r, t));
          },
        };
      });
  var xt = e.location,
    Tt = Date.now(),
    St = /\?/;
  b.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        b.error("Invalid XML: " + t),
      n
    );
  };
  var Ct = /\[\]$/,
    At = /\r?\n/g,
    kt = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function Rt(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      b.each(t, function (t, i) {
        n || Ct.test(e)
          ? r(e, i)
          : Rt(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== w(t)) r(e, t);
    else for (i in t) Rt(e + "[" + i + "]", t[i], n, r);
  }
  (b.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = g(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !b.isPlainObject(e)))
      b.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Rt(n, e[n], t, i);
    return r.join("&");
  }),
    b.fn.extend({
      serialize: function () {
        return b.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = b.prop(this, "elements");
          return e ? b.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !b(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !kt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = b(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? b.map(n, function (e) {
                  return { name: t.name, value: e.replace(At, "\r\n") };
                })
              : { name: t.name, value: n.replace(At, "\r\n") };
          })
          .get();
      },
    });
  var Lt = /%20/g,
    Ot = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Mt = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Bt = {},
    Ht = {},
    qt = "*/".concat("*"),
    Ut = r.createElement("a");
  Ut.href = xt.href;
  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(M) || [];
      if (g(n))
        while ((r = o[i++]))
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function Wt(e, t, n, r) {
    var i = {},
      o = e === Ht;
    function u(a) {
      var s;
      return (
        (i[a] = !0),
        b.each(e[a] || [], function (e, a) {
          var c = a(t, n, r);
          return "string" != typeof c || o || i[c]
            ? o
              ? !(s = c)
              : void 0
            : (t.dataTypes.unshift(c), u(c), !1);
        }),
        s
      );
    }
    return u(t.dataTypes[0]) || (!i["*"] && u("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = b.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && b.extend(!0, e, r), e;
  }
  function $t(e, t, n) {
    var r,
      i,
      o,
      u,
      a = e.contents,
      s = e.dataTypes;
    while ("*" === s[0])
      s.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in a)
        if (a[i] && a[i].test(r)) {
          s.unshift(i);
          break;
        }
    if (s[0] in n) o = s[0];
    else {
      for (i in n) {
        if (!s[0] || e.converters[i + " " + s[0]]) {
          o = i;
          break;
        }
        u || (u = i);
      }
      o = o || u;
    }
    if (o) return o !== s[0] && s.unshift(o), n[o];
  }
  function Gt(e, t, n, r) {
    var i,
      o,
      u,
      a,
      s,
      c = {},
      l = e.dataTypes.slice();
    if (l[1]) for (u in e.converters) c[u.toLowerCase()] = e.converters[u];
    o = l.shift();
    while (o)
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (s = o),
        (o = l.shift()))
      )
        if ("*" === o) o = s;
        else if ("*" !== s && s !== o) {
          if (!(u = c[s + " " + o] || c["* " + o]))
            for (i in c)
              if (
                (a = i.split(" "))[1] === o &&
                (u = c[s + " " + a[0]] || c["* " + a[0]])
              ) {
                !0 === u
                  ? (u = c[i])
                  : !0 !== c[i] && ((o = a[0]), l.unshift(a[1]));
                break;
              }
          if (!0 !== u)
            if (u && e["throws"]) t = u(t);
            else
              try {
                t = u(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: u ? e : "No conversion from " + s + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  b.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: xt.href,
      type: "GET",
      isLocal: It.test(xt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": qt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": b.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? zt(zt(e, b.ajaxSettings), t) : zt(b.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(Bt),
    ajaxTransport: Ft(Ht),
    ajax: function (t, n) {
      "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
      var i,
        o,
        u,
        a,
        s,
        c,
        l,
        f,
        p,
        d,
        h = b.ajaxSetup({}, n),
        g = h.context || h,
        v = h.context && (g.nodeType || g.jquery) ? b(g) : b.event,
        y = b.Deferred(),
        m = b.Callbacks("once memory"),
        w = h.statusCode || {},
        _ = {},
        E = {},
        x = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (l) {
              if (!a) {
                a = {};
                while ((t = jt.exec(u))) a[t[1].toLowerCase()] = t[2];
              }
              t = a[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return l ? u : null;
          },
          setRequestHeader: function (e, t) {
            return (
              null == l &&
                ((e = E[e.toLowerCase()] = E[e.toLowerCase()] || e),
                (_[e] = t)),
              this
            );
          },
          overrideMimeType: function (e) {
            return null == l && (h.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (l) T.always(e[T.status]);
              else for (t in e) w[t] = [w[t], e[t]];
            return this;
          },
          abort: function (e) {
            var t = e || x;
            return i && i.abort(t), S(0, t), this;
          },
        };
      if (
        (y.promise(T),
        (h.url = ((t || h.url || xt.href) + "").replace(
          Pt,
          xt.protocol + "//"
        )),
        (h.type = n.method || n.type || h.method || h.type),
        (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
        null == h.crossDomain)
      ) {
        c = r.createElement("a");
        try {
          (c.href = h.url),
            (c.href = c.href),
            (h.crossDomain =
              Ut.protocol + "//" + Ut.host != c.protocol + "//" + c.host);
        } catch (e) {
          h.crossDomain = !0;
        }
      }
      if (
        (h.data &&
          h.processData &&
          "string" != typeof h.data &&
          (h.data = b.param(h.data, h.traditional)),
        Wt(Bt, h, n, T),
        l)
      )
        return T;
      (f = b.event && h.global) &&
        0 == b.active++ &&
        b.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Mt.test(h.type)),
        (o = h.url.replace(Ot, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(Lt, "+"))
          : ((d = h.url.slice(o.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((o += (St.test(o) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Dt, "$1")),
              (d = (St.test(o) ? "&" : "?") + "_=" + Tt++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (b.lastModified[o] &&
            T.setRequestHeader("If-Modified-Since", b.lastModified[o]),
          b.etag[o] && T.setRequestHeader("If-None-Match", b.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          T.setRequestHeader("Content-Type", h.contentType),
        T.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + qt + "; q=0.01" : "")
            : h.accepts["*"]
        );
      for (p in h.headers) T.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(g, T, h) || l))
        return T.abort();
      if (
        ((x = "abort"),
        m.add(h.complete),
        T.done(h.success),
        T.fail(h.error),
        (i = Wt(Ht, h, n, T)))
      ) {
        if (((T.readyState = 1), f && v.trigger("ajaxSend", [T, h]), l))
          return T;
        h.async &&
          h.timeout > 0 &&
          (s = e.setTimeout(function () {
            T.abort("timeout");
          }, h.timeout));
        try {
          (l = !1), i.send(_, S);
        } catch (e) {
          if (l) throw e;
          S(-1, e);
        }
      } else S(-1, "No Transport");
      function S(t, n, r, a) {
        var c,
          p,
          d,
          _,
          E,
          x = n;
        l ||
          ((l = !0),
          s && e.clearTimeout(s),
          (i = void 0),
          (u = a || ""),
          (T.readyState = t > 0 ? 4 : 0),
          (c = (t >= 200 && t < 300) || 304 === t),
          r && (_ = $t(h, T, r)),
          (_ = Gt(h, _, T, c)),
          c
            ? (h.ifModified &&
                ((E = T.getResponseHeader("Last-Modified")) &&
                  (b.lastModified[o] = E),
                (E = T.getResponseHeader("etag")) && (b.etag[o] = E)),
              204 === t || "HEAD" === h.type
                ? (x = "nocontent")
                : 304 === t
                ? (x = "notmodified")
                : ((x = _.state), (p = _.data), (c = !(d = _.error))))
            : ((d = x), (!t && x) || ((x = "error"), t < 0 && (t = 0))),
          (T.status = t),
          (T.statusText = (n || x) + ""),
          c ? y.resolveWith(g, [p, x, T]) : y.rejectWith(g, [T, x, d]),
          T.statusCode(w),
          (w = void 0),
          f && v.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? p : d]),
          m.fireWith(g, [T, x]),
          f &&
            (v.trigger("ajaxComplete", [T, h]),
            --b.active || b.event.trigger("ajaxStop")));
      }
      return T;
    },
    getJSON: function (e, t, n) {
      return b.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return b.get(e, void 0, t, "script");
    },
  }),
    b.each(["get", "post"], function (e, t) {
      b[t] = function (e, n, r, i) {
        return (
          g(n) && ((i = i || r), (r = n), (n = void 0)),
          b.ajax(
            b.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              b.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (b._evalUrl = function (e) {
      return b.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    b.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (g(e) && (e = e.call(this[0])),
            (t = b(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return g(e)
          ? this.each(function (t) {
              b(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = b(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = g(e);
        return this.each(function (n) {
          b(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              b(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (b.expr.pseudos.hidden = function (e) {
      return !b.expr.pseudos.visible(e);
    }),
    (b.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (b.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Qt = { 0: 200, 1223: 204 },
    Vt = b.ajaxSettings.xhr();
  (h.cors = !!Vt && "withCredentials" in Vt),
    (h.ajax = Vt = !!Vt),
    b.ajaxTransport(function (t) {
      var n, r;
      if (h.cors || (Vt && !t.crossDomain))
        return {
          send: function (i, o) {
            var u,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (u in t.xhrFields) a[u] = t.xhrFields[u];
            t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
              t.crossDomain ||
                i["X-Requested-With"] ||
                (i["X-Requested-With"] = "XMLHttpRequest");
            for (u in i) a.setRequestHeader(u, i[u]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    r =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  "abort" === e
                    ? a.abort()
                    : "error" === e
                    ? "number" != typeof a.status
                      ? o(0, "error")
                      : o(a.status, a.statusText)
                    : o(
                        Qt[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (r = a.onerror = a.ontimeout = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = r)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    b.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    b.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return b.globalEval(e), e;
        },
      },
    }),
    b.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    b.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, o) {
            (t = b("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              r.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Kt = [],
    Yt = /(=)\?(?=&|$)|\?\?/;
  b.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || b.expando + "_" + Tt++;
      return (this[e] = !0), e;
    },
  }),
    b.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        u,
        a =
          !1 !== t.jsonp &&
          (Yt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Yt.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Yt, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return u || b.error(i + " was not called"), u[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            u = arguments;
          }),
          r.always(function () {
            void 0 === o ? b(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Kt.push(i)),
              u && g(o) && o(u[0]),
              (u = o = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument = (function () {
      var e = r.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
      );
    })()),
    (b.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && ((n = t), (t = !1));
      var i, o, u;
      return (
        t ||
          (h.createHTMLDocument
            ? (((i = (t =
                r.implementation.createHTMLDocument("")).createElement(
                "base"
              )).href = r.location.href),
              t.head.appendChild(i))
            : (t = r)),
        (o = N.exec(e)),
        (u = !n && []),
        o
          ? [t.createElement(o[1])]
          : ((o = we([e], t, u)),
            u && u.length && b(u).remove(),
            b.merge([], o.childNodes))
      );
    }),
    (b.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        u = this,
        a = e.indexOf(" ");
      return (
        a > -1 && ((r = yt(e.slice(a))), (e = e.slice(0, a))),
        g(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        u.length > 0 &&
          b
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                u.html(r ? b("<div>").append(b.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  u.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    b.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        b.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (b.expr.pseudos.animated = function (e) {
      return b.grep(b.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (b.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          u,
          a,
          s,
          c,
          l = b.css(e, "position"),
          f = b(e),
          p = {};
        "static" === l && (e.style.position = "relative"),
          (a = f.offset()),
          (o = b.css(e, "top")),
          (s = b.css(e, "left")),
          (c =
            ("absolute" === l || "fixed" === l) && (o + s).indexOf("auto") > -1)
            ? ((u = (r = f.position()).top), (i = r.left))
            : ((u = parseFloat(o) || 0), (i = parseFloat(s) || 0)),
          g(t) && (t = t.call(e, n, b.extend({}, a))),
          null != t.top && (p.top = t.top - a.top + u),
          null != t.left && (p.left = t.left - a.left + i),
          "using" in t ? t.using.call(e, p) : f.css(p);
      },
    }),
    b.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                b.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        if (r)
          return r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === b.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === b.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = b(e).offset()).top += b.css(e, "borderTopWidth", !0)),
              (i.left += b.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - b.css(r, "marginTop", !0),
            left: t.left - i.left - b.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === b.css(e, "position")) e = e.offsetParent;
          return e || _e;
        });
      },
    }),
    b.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        b.fn[e] = function (r) {
          return z(
            this,
            function (e, r, i) {
              var o;
              if (
                (v(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
              )
                return o ? o[t] : e[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (e[r] = i);
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    b.each(["top", "left"], function (e, t) {
      b.cssHooks[t] = We(h.pixelPosition, function (e, n) {
        if (n)
          return (n = Fe(e, t)), He.test(n) ? b(e).position()[t] + "px" : n;
      });
    }),
    b.each({ Height: "height", Width: "width" }, function (e, t) {
      b.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          b.fn[r] = function (i, o) {
            var u = arguments.length && (n || "boolean" != typeof i),
              a = n || (!0 === i || !0 === o ? "margin" : "border");
            return z(
              this,
              function (t, n, i) {
                var o;
                return v(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === i
                  ? b.css(t, n, a)
                  : b.style(t, n, i, a);
              },
              t,
              u ? i : void 0,
              u
            );
          };
        }
      );
    }),
    b.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        b.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    b.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    b.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (b.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
        return (
          (r = o.call(arguments, 2)),
          (i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)));
          }),
          (i.guid = e.guid = e.guid || b.guid++),
          i
        );
    }),
    (b.holdReady = function (e) {
      e ? b.readyWait++ : b.ready(!0);
    }),
    (b.isArray = Array.isArray),
    (b.parseJSON = JSON.parse),
    (b.nodeName = k),
    (b.isFunction = g),
    (b.isWindow = v),
    (b.camelCase = V),
    (b.type = w),
    (b.now = Date.now),
    (b.isNumeric = function (e) {
      var t = b.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return b;
      });
  var Xt = e.jQuery,
    Jt = e.$;
  return (
    (b.noConflict = function (t) {
      return e.$ === b && (e.$ = Jt), t && e.jQuery === b && (e.jQuery = Xt), b;
    }),
    t || (e.jQuery = e.$ = b),
    b
  );
});
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function () {
  function e(e, t, n) {
    switch (n.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, n[0]);
      case 2:
        return e.call(t, n[0], n[1]);
      case 3:
        return e.call(t, n[0], n[1], n[2]);
    }
    return e.apply(t, n);
  }
  function t(e, t, n, r) {
    for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
      var u = e[i];
      t(r, u, n(u), e);
    }
    return r;
  }
  function n(e, t) {
    for (
      var n = -1, r = null == e ? 0 : e.length;
      ++n < r && t(e[n], n, e) !== !1;

    );
    return e;
  }
  function r(e, t) {
    for (var n = null == e ? 0 : e.length; n-- && t(e[n], n, e) !== !1; );
    return e;
  }
  function i(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
      if (!t(e[n], n, e)) return !1;
    return !0;
  }
  function o(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r; ) {
      var u = e[n];
      t(u, n, e) && (o[i++] = u);
    }
    return o;
  }
  function u(e, t) {
    return !!(null == e ? 0 : e.length) && y(e, t, 0) > -1;
  }
  function a(e, t, n) {
    for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
      if (n(t, e[r])) return !0;
    return !1;
  }
  function s(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
      i[n] = t(e[n], n, e);
    return i;
  }
  function c(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
    return e;
  }
  function l(e, t, n, r) {
    var i = -1,
      o = null == e ? 0 : e.length;
    for (r && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e);
    return n;
  }
  function f(e, t, n, r) {
    var i = null == e ? 0 : e.length;
    for (r && i && (n = e[--i]); i--; ) n = t(n, e[i], i, e);
    return n;
  }
  function p(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
      if (t(e[n], n, e)) return !0;
    return !1;
  }
  function d(e) {
    return e.split("");
  }
  function h(e) {
    return e.match(It) || [];
  }
  function g(e, t, n) {
    var r;
    return (
      n(e, function (e, n, i) {
        if (t(e, n, i)) return (r = n), !1;
      }),
      r
    );
  }
  function v(e, t, n, r) {
    for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
      if (t(e[o], o, e)) return o;
    return -1;
  }
  function y(e, t, n) {
    return t === t ? z(e, t, n) : v(e, w, n);
  }
  function m(e, t, n, r) {
    for (var i = n - 1, o = e.length; ++i < o; ) if (r(e[i], t)) return i;
    return -1;
  }
  function w(e) {
    return e !== e;
  }
  function _(e, t) {
    var n = null == e ? 0 : e.length;
    return n ? S(e, t) / n : Re;
  }
  function b(e) {
    return function (t) {
      return null == t ? X : t[e];
    };
  }
  function E(e) {
    return function (t) {
      return null == e ? X : e[t];
    };
  }
  function x(e, t, n, r, i) {
    return (
      i(e, function (e, i, o) {
        n = r ? ((r = !1), e) : t(n, e, i, o);
      }),
      n
    );
  }
  function T(e, t) {
    var n = e.length;
    for (e.sort(t); n--; ) e[n] = e[n].value;
    return e;
  }
  function S(e, t) {
    for (var n, r = -1, i = e.length; ++r < i; ) {
      var o = t(e[r]);
      o !== X && (n = n === X ? o : n + o);
    }
    return n;
  }
  function C(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
    return r;
  }
  function A(e, t) {
    return s(t, function (t) {
      return [t, e[t]];
    });
  }
  function k(e) {
    return function (t) {
      return e(t);
    };
  }
  function N(e, t) {
    return s(t, function (t) {
      return e[t];
    });
  }
  function R(e, t) {
    return e.has(t);
  }
  function L(e, t) {
    for (var n = -1, r = e.length; ++n < r && y(t, e[n], 0) > -1; );
    return n;
  }
  function O(e, t) {
    for (var n = e.length; n-- && y(t, e[n], 0) > -1; );
    return n;
  }
  function D(e, t) {
    for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
    return r;
  }
  function j(e) {
    return "\\" + Vn[e];
  }
  function I(e, t) {
    return null == e ? X : e[t];
  }
  function M(e) {
    return Hn.test(e);
  }
  function P(e) {
    return qn.test(e);
  }
  function B(e) {
    for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
    return n;
  }
  function H(e) {
    var t = -1,
      n = Array(e.size);
    return (
      e.forEach(function (e, r) {
        n[++t] = [r, e];
      }),
      n
    );
  }
  function q(e, t) {
    return function (n) {
      return e(t(n));
    };
  }
  function U(e, t) {
    for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
      var u = e[n];
      (u !== t && u !== ie) || ((e[n] = ie), (o[i++] = n));
    }
    return o;
  }
  function F(e) {
    var t = -1,
      n = Array(e.size);
    return (
      e.forEach(function (e) {
        n[++t] = e;
      }),
      n
    );
  }
  function W(e) {
    var t = -1,
      n = Array(e.size);
    return (
      e.forEach(function (e) {
        n[++t] = [e, e];
      }),
      n
    );
  }
  function z(e, t, n) {
    for (var r = n - 1, i = e.length; ++r < i; ) if (e[r] === t) return r;
    return -1;
  }
  function $(e, t, n) {
    for (var r = n + 1; r--; ) if (e[r] === t) return r;
    return r;
  }
  function G(e) {
    return M(e) ? V(e) : fr(e);
  }
  function Q(e) {
    return M(e) ? K(e) : d(e);
  }
  function V(e) {
    for (var t = (Pn.lastIndex = 0); Pn.test(e); ) ++t;
    return t;
  }
  function K(e) {
    return e.match(Pn) || [];
  }
  function Y(e) {
    return e.match(Bn) || [];
  }
  var X,
    J = "4.17.20",
    Z = 200,
    ee = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
    te = "Expected a function",
    ne = "__lodash_hash_undefined__",
    re = 500,
    ie = "__lodash_placeholder__",
    oe = 1,
    ue = 2,
    ae = 4,
    se = 1,
    ce = 2,
    le = 1,
    fe = 2,
    pe = 4,
    de = 8,
    he = 16,
    ge = 32,
    ve = 64,
    ye = 128,
    me = 256,
    we = 512,
    _e = 30,
    be = "...",
    Ee = 800,
    xe = 16,
    Te = 1,
    Se = 2,
    Ce = 3,
    Ae = 1 / 0,
    ke = 9007199254740991,
    Ne = 17976931348623157e292,
    Re = NaN,
    Le = 4294967295,
    Oe = Le - 1,
    De = Le >>> 1,
    je = [
      ["ary", ye],
      ["bind", le],
      ["bindKey", fe],
      ["curry", de],
      ["curryRight", he],
      ["flip", we],
      ["partial", ge],
      ["partialRight", ve],
      ["rearg", me],
    ],
    Ie = "[object Arguments]",
    Me = "[object Array]",
    Pe = "[object AsyncFunction]",
    Be = "[object Boolean]",
    He = "[object Date]",
    qe = "[object DOMException]",
    Ue = "[object Error]",
    Fe = "[object Function]",
    We = "[object GeneratorFunction]",
    ze = "[object Map]",
    $e = "[object Number]",
    Ge = "[object Null]",
    Qe = "[object Object]",
    Ve = "[object Promise]",
    Ke = "[object Proxy]",
    Ye = "[object RegExp]",
    Xe = "[object Set]",
    Je = "[object String]",
    Ze = "[object Symbol]",
    et = "[object Undefined]",
    tt = "[object WeakMap]",
    nt = "[object WeakSet]",
    rt = "[object ArrayBuffer]",
    it = "[object DataView]",
    ot = "[object Float32Array]",
    ut = "[object Float64Array]",
    at = "[object Int8Array]",
    st = "[object Int16Array]",
    ct = "[object Int32Array]",
    lt = "[object Uint8Array]",
    ft = "[object Uint8ClampedArray]",
    pt = "[object Uint16Array]",
    dt = "[object Uint32Array]",
    ht = /\b__p \+= '';/g,
    gt = /\b(__p \+=) '' \+/g,
    vt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
    yt = /&(?:amp|lt|gt|quot|#39);/g,
    mt = /[&<>"']/g,
    wt = RegExp(yt.source),
    _t = RegExp(mt.source),
    bt = /<%-([\s\S]+?)%>/g,
    Et = /<%([\s\S]+?)%>/g,
    xt = /<%=([\s\S]+?)%>/g,
    Tt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    St = /^\w*$/,
    Ct =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    At = /[\\^$.*+?()[\]{}|]/g,
    kt = RegExp(At.source),
    Nt = /^\s+|\s+$/g,
    Rt = /^\s+/,
    Lt = /\s+$/,
    Ot = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    Dt = /\{\n\/\* \[wrapped with (.+)\] \*/,
    jt = /,? & /,
    It = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
    Mt = /\\(\\)?/g,
    Pt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
    Bt = /\w*$/,
    Ht = /^[-+]0x[0-9a-f]+$/i,
    qt = /^0b[01]+$/i,
    Ut = /^\[object .+?Constructor\]$/,
    Ft = /^0o[0-7]+$/i,
    Wt = /^(?:0|[1-9]\d*)$/,
    zt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    $t = /($^)/,
    Gt = /['\n\r\u2028\u2029\\]/g,
    Qt = "\\ud800-\\udfff",
    Vt = "\\u0300-\\u036f",
    Kt = "\\ufe20-\\ufe2f",
    Yt = "\\u20d0-\\u20ff",
    Xt = Vt + Kt + Yt,
    Jt = "\\u2700-\\u27bf",
    Zt = "a-z\\xdf-\\xf6\\xf8-\\xff",
    en = "\\xac\\xb1\\xd7\\xf7",
    tn = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
    nn = "\\u2000-\\u206f",
    rn =
      " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    on = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    un = "\\ufe0e\\ufe0f",
    an = en + tn + nn + rn,
    sn = "['’]",
    cn = "[" + Qt + "]",
    ln = "[" + an + "]",
    fn = "[" + Xt + "]",
    pn = "\\d+",
    dn = "[" + Jt + "]",
    hn = "[" + Zt + "]",
    gn = "[^" + Qt + an + pn + Jt + Zt + on + "]",
    vn = "\\ud83c[\\udffb-\\udfff]",
    yn = "(?:" + fn + "|" + vn + ")",
    mn = "[^" + Qt + "]",
    wn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    _n = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    bn = "[" + on + "]",
    En = "\\u200d",
    xn = "(?:" + hn + "|" + gn + ")",
    Tn = "(?:" + bn + "|" + gn + ")",
    Sn = "(?:" + sn + "(?:d|ll|m|re|s|t|ve))?",
    Cn = "(?:" + sn + "(?:D|LL|M|RE|S|T|VE))?",
    An = yn + "?",
    kn = "[" + un + "]?",
    Nn = "(?:" + En + "(?:" + [mn, wn, _n].join("|") + ")" + kn + An + ")*",
    Rn = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
    Ln = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
    On = kn + An + Nn,
    Dn = "(?:" + [dn, wn, _n].join("|") + ")" + On,
    jn = "(?:" + [mn + fn + "?", fn, wn, _n, cn].join("|") + ")",
    In = RegExp(sn, "g"),
    Mn = RegExp(fn, "g"),
    Pn = RegExp(vn + "(?=" + vn + ")|" + jn + On, "g"),
    Bn = RegExp(
      [
        bn + "?" + hn + "+" + Sn + "(?=" + [ln, bn, "$"].join("|") + ")",
        Tn + "+" + Cn + "(?=" + [ln, bn + xn, "$"].join("|") + ")",
        bn + "?" + xn + "+" + Sn,
        bn + "+" + Cn,
        Ln,
        Rn,
        pn,
        Dn,
      ].join("|"),
      "g"
    ),
    Hn = RegExp("[" + En + Qt + Xt + un + "]"),
    qn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
    Un = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout",
    ],
    Fn = -1,
    Wn = {};
  (Wn[ot] =
    Wn[ut] =
    Wn[at] =
    Wn[st] =
    Wn[ct] =
    Wn[lt] =
    Wn[ft] =
    Wn[pt] =
    Wn[dt] =
      !0),
    (Wn[Ie] =
      Wn[Me] =
      Wn[rt] =
      Wn[Be] =
      Wn[it] =
      Wn[He] =
      Wn[Ue] =
      Wn[Fe] =
      Wn[ze] =
      Wn[$e] =
      Wn[Qe] =
      Wn[Ye] =
      Wn[Xe] =
      Wn[Je] =
      Wn[tt] =
        !1);
  var zn = {};
  (zn[Ie] =
    zn[Me] =
    zn[rt] =
    zn[it] =
    zn[Be] =
    zn[He] =
    zn[ot] =
    zn[ut] =
    zn[at] =
    zn[st] =
    zn[ct] =
    zn[ze] =
    zn[$e] =
    zn[Qe] =
    zn[Ye] =
    zn[Xe] =
    zn[Je] =
    zn[Ze] =
    zn[lt] =
    zn[ft] =
    zn[pt] =
    zn[dt] =
      !0),
    (zn[Ue] = zn[Fe] = zn[tt] = !1);
  var $n = {
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s",
    },
    Gn = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    Qn = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'",
    },
    Vn = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029",
    },
    Kn = parseFloat,
    Yn = parseInt,
    Xn =
      "object" == typeof global && global && global.Object === Object && global,
    Jn = "object" == typeof self && self && self.Object === Object && self,
    Zn = Xn || Jn || Function("return this")(),
    er = "object" == typeof exports && exports && !exports.nodeType && exports,
    tr =
      er && "object" == typeof module && module && !module.nodeType && module,
    nr = tr && tr.exports === er,
    rr = nr && Xn.process,
    ir = (function () {
      try {
        var e = tr && tr.require && tr.require("util").types;
        return e ? e : rr && rr.binding && rr.binding("util");
      } catch (e) {}
    })(),
    or = ir && ir.isArrayBuffer,
    ur = ir && ir.isDate,
    ar = ir && ir.isMap,
    sr = ir && ir.isRegExp,
    cr = ir && ir.isSet,
    lr = ir && ir.isTypedArray,
    fr = b("length"),
    pr = E($n),
    dr = E(Gn),
    hr = E(Qn),
    gr = function d(E) {
      function z(e) {
        if (os(e) && !yp(e) && !(e instanceof It)) {
          if (e instanceof K) return e;
          if (vl.call(e, "__wrapped__")) return nu(e);
        }
        return new K(e);
      }
      function V() {}
      function K(e, t) {
        (this.__wrapped__ = e),
          (this.__actions__ = []),
          (this.__chain__ = !!t),
          (this.__index__ = 0),
          (this.__values__ = X);
      }
      function It(e) {
        (this.__wrapped__ = e),
          (this.__actions__ = []),
          (this.__dir__ = 1),
          (this.__filtered__ = !1),
          (this.__iteratees__ = []),
          (this.__takeCount__ = Le),
          (this.__views__ = []);
      }
      function Qt() {
        var e = new It(this.__wrapped__);
        return (
          (e.__actions__ = Ii(this.__actions__)),
          (e.__dir__ = this.__dir__),
          (e.__filtered__ = this.__filtered__),
          (e.__iteratees__ = Ii(this.__iteratees__)),
          (e.__takeCount__ = this.__takeCount__),
          (e.__views__ = Ii(this.__views__)),
          e
        );
      }
      function Vt() {
        if (this.__filtered__) {
          var e = new It(this);
          (e.__dir__ = -1), (e.__filtered__ = !0);
        } else (e = this.clone()), (e.__dir__ *= -1);
        return e;
      }
      function Kt() {
        var e = this.__wrapped__.value(),
          t = this.__dir__,
          n = yp(e),
          r = t < 0,
          i = n ? e.length : 0,
          o = So(0, i, this.__views__),
          u = o.start,
          a = o.end,
          s = a - u,
          c = r ? a : u - 1,
          l = this.__iteratees__,
          f = l.length,
          p = 0,
          d = Gl(s, this.__takeCount__);
        if (!n || (!r && i == s && d == s)) return mi(e, this.__actions__);
        var h = [];
        e: for (; s-- && p < d; ) {
          c += t;
          for (var g = -1, v = e[c]; ++g < f; ) {
            var y = l[g],
              m = y.iteratee,
              w = y.type,
              _ = m(v);
            if (w == Se) v = _;
            else if (!_) {
              if (w == Te) continue e;
              break e;
            }
          }
          h[p++] = v;
        }
        return h;
      }
      function Yt(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function Xt() {
        (this.__data__ = nf ? nf(null) : {}), (this.size = 0);
      }
      function Jt(e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      }
      function Zt(e) {
        var t = this.__data__;
        if (nf) {
          var n = t[e];
          return n === ne ? X : n;
        }
        return vl.call(t, e) ? t[e] : X;
      }
      function en(e) {
        var t = this.__data__;
        return nf ? t[e] !== X : vl.call(t, e);
      }
      function tn(e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = nf && t === X ? ne : t),
          this
        );
      }
      function nn(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function rn() {
        (this.__data__ = []), (this.size = 0);
      }
      function on(e) {
        var t = this.__data__,
          n = Rn(t, e);
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : Rl.call(t, n, 1), --this.size, !0)
        );
      }
      function un(e) {
        var t = this.__data__,
          n = Rn(t, e);
        return n < 0 ? X : t[n][1];
      }
      function an(e) {
        return Rn(this.__data__, e) > -1;
      }
      function sn(e, t) {
        var n = this.__data__,
          r = Rn(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
      }
      function cn(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function ln() {
        (this.size = 0),
          (this.__data__ = {
            hash: new Yt(),
            map: new (Jl || nn)(),
            string: new Yt(),
          });
      }
      function fn(e) {
        var t = bo(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      }
      function pn(e) {
        return bo(this, e).get(e);
      }
      function dn(e) {
        return bo(this, e).has(e);
      }
      function hn(e, t) {
        var n = bo(this, e),
          r = n.size;
        return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
      }
      function gn(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new cn(); ++t < n; ) this.add(e[t]);
      }
      function vn(e) {
        return this.__data__.set(e, ne), this;
      }
      function yn(e) {
        return this.__data__.has(e);
      }
      function mn(e) {
        this.size = (this.__data__ = new nn(e)).size;
      }
      function wn() {
        (this.__data__ = new nn()), (this.size = 0);
      }
      function _n(e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      }
      function bn(e) {
        return this.__data__.get(e);
      }
      function En(e) {
        return this.__data__.has(e);
      }
      function xn(e, t) {
        var n = this.__data__;
        if (n instanceof nn) {
          var r = n.__data__;
          if (!Jl || r.length < Z - 1)
            return r.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new cn(r);
        }
        return n.set(e, t), (this.size = n.size), this;
      }
      function Tn(e, t) {
        var n = yp(e),
          r = !n && vp(e),
          i = !n && !r && wp(e),
          o = !n && !r && !i && Tp(e),
          u = n || r || i || o,
          a = u ? C(e.length, cl) : [],
          s = a.length;
        for (var c in e)
          (!t && !vl.call(e, c)) ||
            (u &&
              ("length" == c ||
                (i && ("offset" == c || "parent" == c)) ||
                (o &&
                  ("buffer" == c || "byteLength" == c || "byteOffset" == c)) ||
                Do(c, s))) ||
            a.push(c);
        return a;
      }
      function Sn(e) {
        var t = e.length;
        return t ? e[Zr(0, t - 1)] : X;
      }
      function Cn(e, t) {
        return Jo(Ii(e), Bn(t, 0, e.length));
      }
      function An(e) {
        return Jo(Ii(e));
      }
      function kn(e, t, n) {
        ((n === X || $a(e[t], n)) && (n !== X || t in e)) || jn(e, t, n);
      }
      function Nn(e, t, n) {
        var r = e[t];
        (vl.call(e, t) && $a(r, n) && (n !== X || t in e)) || jn(e, t, n);
      }
      function Rn(e, t) {
        for (var n = e.length; n--; ) if ($a(e[n][0], t)) return n;
        return -1;
      }
      function Ln(e, t, n, r) {
        return (
          gf(e, function (e, i, o) {
            t(r, e, n(e), o);
          }),
          r
        );
      }
      function On(e, t) {
        return e && Mi(t, qs(t), e);
      }
      function Dn(e, t) {
        return e && Mi(t, Us(t), e);
      }
      function jn(e, t, n) {
        "__proto__" == t && jl
          ? jl(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      }
      function Pn(e, t) {
        for (var n = -1, r = t.length, i = nl(r), o = null == e; ++n < r; )
          i[n] = o ? X : Ps(e, t[n]);
        return i;
      }
      function Bn(e, t, n) {
        return (
          e === e &&
            (n !== X && (e = e <= n ? e : n), t !== X && (e = e >= t ? e : t)),
          e
        );
      }
      function Hn(e, t, r, i, o, u) {
        var a,
          s = t & oe,
          c = t & ue,
          l = t & ae;
        if ((r && (a = o ? r(e, i, o, u) : r(e)), a !== X)) return a;
        if (!is(e)) return e;
        var f = yp(e);
        if (f) {
          if (((a = ko(e)), !s)) return Ii(e, a);
        } else {
          var p = Af(e),
            d = p == Fe || p == We;
          if (wp(e)) return Si(e, s);
          if (p == Qe || p == Ie || (d && !o)) {
            if (((a = c || d ? {} : No(e)), !s))
              return c ? Bi(e, Dn(a, e)) : Pi(e, On(a, e));
          } else {
            if (!zn[p]) return o ? e : {};
            a = Ro(e, p, s);
          }
        }
        u || (u = new mn());
        var h = u.get(e);
        if (h) return h;
        u.set(e, a),
          xp(e)
            ? e.forEach(function (n) {
                a.add(Hn(n, t, r, n, e, u));
              })
            : bp(e) &&
              e.forEach(function (n, i) {
                a.set(i, Hn(n, t, r, i, e, u));
              });
        var g = l ? (c ? yo : vo) : c ? Us : qs,
          v = f ? X : g(e);
        return (
          n(v || e, function (n, i) {
            v && ((i = n), (n = e[i])), Nn(a, i, Hn(n, t, r, i, e, u));
          }),
          a
        );
      }
      function qn(e) {
        var t = qs(e);
        return function (n) {
          return $n(n, e, t);
        };
      }
      function $n(e, t, n) {
        var r = n.length;
        if (null == e) return !r;
        for (e = al(e); r--; ) {
          var i = n[r],
            o = t[i],
            u = e[i];
          if ((u === X && !(i in e)) || !o(u)) return !1;
        }
        return !0;
      }
      function Gn(e, t, n) {
        if ("function" != typeof e) throw new ll(te);
        return Rf(function () {
          e.apply(X, n);
        }, t);
      }
      function Qn(e, t, n, r) {
        var i = -1,
          o = u,
          c = !0,
          l = e.length,
          f = [],
          p = t.length;
        if (!l) return f;
        n && (t = s(t, k(n))),
          r
            ? ((o = a), (c = !1))
            : t.length >= Z && ((o = R), (c = !1), (t = new gn(t)));
        e: for (; ++i < l; ) {
          var d = e[i],
            h = null == n ? d : n(d);
          if (((d = r || 0 !== d ? d : 0), c && h === h)) {
            for (var g = p; g--; ) if (t[g] === h) continue e;
            f.push(d);
          } else o(t, h, r) || f.push(d);
        }
        return f;
      }
      function Vn(e, t) {
        var n = !0;
        return (
          gf(e, function (e, r, i) {
            return (n = !!t(e, r, i));
          }),
          n
        );
      }
      function Xn(e, t, n) {
        for (var r = -1, i = e.length; ++r < i; ) {
          var o = e[r],
            u = t(o);
          if (null != u && (a === X ? u === u && !vs(u) : n(u, a)))
            var a = u,
              s = o;
        }
        return s;
      }
      function Jn(e, t, n, r) {
        var i = e.length;
        for (
          n = Es(n),
            n < 0 && (n = -n > i ? 0 : i + n),
            r = r === X || r > i ? i : Es(r),
            r < 0 && (r += i),
            r = n > r ? 0 : xs(r);
          n < r;

        )
          e[n++] = t;
        return e;
      }
      function er(e, t) {
        var n = [];
        return (
          gf(e, function (e, r, i) {
            t(e, r, i) && n.push(e);
          }),
          n
        );
      }
      function tr(e, t, n, r, i) {
        var o = -1,
          u = e.length;
        for (n || (n = Oo), i || (i = []); ++o < u; ) {
          var a = e[o];
          t > 0 && n(a)
            ? t > 1
              ? tr(a, t - 1, n, r, i)
              : c(i, a)
            : r || (i[i.length] = a);
        }
        return i;
      }
      function rr(e, t) {
        return e && yf(e, t, qs);
      }
      function ir(e, t) {
        return e && mf(e, t, qs);
      }
      function fr(e, t) {
        return o(t, function (t) {
          return ts(e[t]);
        });
      }
      function gr(e, t) {
        t = xi(t, e);
        for (var n = 0, r = t.length; null != e && n < r; ) e = e[Zo(t[n++])];
        return n && n == r ? e : X;
      }
      function yr(e, t, n) {
        var r = t(e);
        return yp(e) ? r : c(r, n(e));
      }
      function mr(e) {
        return null == e
          ? e === X
            ? et
            : Ge
          : Dl && Dl in al(e)
          ? To(e)
          : $o(e);
      }
      function wr(e, t) {
        return e > t;
      }
      function _r(e, t) {
        return null != e && vl.call(e, t);
      }
      function br(e, t) {
        return null != e && t in al(e);
      }
      function Er(e, t, n) {
        return e >= Gl(t, n) && e < $l(t, n);
      }
      function xr(e, t, n) {
        for (
          var r = n ? a : u,
            i = e[0].length,
            o = e.length,
            c = o,
            l = nl(o),
            f = 1 / 0,
            p = [];
          c--;

        ) {
          var d = e[c];
          c && t && (d = s(d, k(t))),
            (f = Gl(d.length, f)),
            (l[c] =
              !n && (t || (i >= 120 && d.length >= 120)) ? new gn(c && d) : X);
        }
        d = e[0];
        var h = -1,
          g = l[0];
        e: for (; ++h < i && p.length < f; ) {
          var v = d[h],
            y = t ? t(v) : v;
          if (((v = n || 0 !== v ? v : 0), !(g ? R(g, y) : r(p, y, n)))) {
            for (c = o; --c; ) {
              var m = l[c];
              if (!(m ? R(m, y) : r(e[c], y, n))) continue e;
            }
            g && g.push(y), p.push(v);
          }
        }
        return p;
      }
      function Tr(e, t, n, r) {
        return (
          rr(e, function (e, i, o) {
            t(r, n(e), i, o);
          }),
          r
        );
      }
      function Sr(t, n, r) {
        (n = xi(n, t)), (t = Qo(t, n));
        var i = null == t ? t : t[Zo(bu(n))];
        return null == i ? X : e(i, t, r);
      }
      function Cr(e) {
        return os(e) && mr(e) == Ie;
      }
      function Ar(e) {
        return os(e) && mr(e) == rt;
      }
      function kr(e) {
        return os(e) && mr(e) == He;
      }
      function Nr(e, t, n, r, i) {
        return (
          e === t ||
          (null == e || null == t || (!os(e) && !os(t))
            ? e !== e && t !== t
            : Rr(e, t, n, r, Nr, i))
        );
      }
      function Rr(e, t, n, r, i, o) {
        var u = yp(e),
          a = yp(t),
          s = u ? Me : Af(e),
          c = a ? Me : Af(t);
        (s = s == Ie ? Qe : s), (c = c == Ie ? Qe : c);
        var l = s == Qe,
          f = c == Qe,
          p = s == c;
        if (p && wp(e)) {
          if (!wp(t)) return !1;
          (u = !0), (l = !1);
        }
        if (p && !l)
          return (
            o || (o = new mn()),
            u || Tp(e) ? fo(e, t, n, r, i, o) : po(e, t, s, n, r, i, o)
          );
        if (!(n & se)) {
          var d = l && vl.call(e, "__wrapped__"),
            h = f && vl.call(t, "__wrapped__");
          if (d || h) {
            var g = d ? e.value() : e,
              v = h ? t.value() : t;
            return o || (o = new mn()), i(g, v, n, r, o);
          }
        }
        return !!p && (o || (o = new mn()), ho(e, t, n, r, i, o));
      }
      function Lr(e) {
        return os(e) && Af(e) == ze;
      }
      function Or(e, t, n, r) {
        var i = n.length,
          o = i,
          u = !r;
        if (null == e) return !o;
        for (e = al(e); i--; ) {
          var a = n[i];
          if (u && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1;
        }
        for (; ++i < o; ) {
          a = n[i];
          var s = a[0],
            c = e[s],
            l = a[1];
          if (u && a[2]) {
            if (c === X && !(s in e)) return !1;
          } else {
            var f = new mn();
            if (r) var p = r(c, l, s, e, t, f);
            if (!(p === X ? Nr(l, c, se | ce, r, f) : p)) return !1;
          }
        }
        return !0;
      }
      function Dr(e) {
        return !(!is(e) || Bo(e)) && (ts(e) ? El : Ut).test(eu(e));
      }
      function jr(e) {
        return os(e) && mr(e) == Ye;
      }
      function Ir(e) {
        return os(e) && Af(e) == Xe;
      }
      function Mr(e) {
        return os(e) && rs(e.length) && !!Wn[mr(e)];
      }
      function Pr(e) {
        return "function" == typeof e
          ? e
          : null == e
          ? Rc
          : "object" == typeof e
          ? yp(e)
            ? Wr(e[0], e[1])
            : Fr(e)
          : Bc(e);
      }
      function Br(e) {
        if (!Ho(e)) return zl(e);
        var t = [];
        for (var n in al(e)) vl.call(e, n) && "constructor" != n && t.push(n);
        return t;
      }
      function Hr(e) {
        if (!is(e)) return zo(e);
        var t = Ho(e),
          n = [];
        for (var r in e)
          ("constructor" != r || (!t && vl.call(e, r))) && n.push(r);
        return n;
      }
      function qr(e, t) {
        return e < t;
      }
      function Ur(e, t) {
        var n = -1,
          r = Ga(e) ? nl(e.length) : [];
        return (
          gf(e, function (e, i, o) {
            r[++n] = t(e, i, o);
          }),
          r
        );
      }
      function Fr(e) {
        var t = Eo(e);
        return 1 == t.length && t[0][2]
          ? Uo(t[0][0], t[0][1])
          : function (n) {
              return n === e || Or(n, e, t);
            };
      }
      function Wr(e, t) {
        return Io(e) && qo(t)
          ? Uo(Zo(e), t)
          : function (n) {
              var r = Ps(n, e);
              return r === X && r === t ? Hs(n, e) : Nr(t, r, se | ce);
            };
      }
      function zr(e, t, n, r, i) {
        e !== t &&
          yf(
            t,
            function (o, u) {
              if ((i || (i = new mn()), is(o))) $r(e, t, u, n, zr, r, i);
              else {
                var a = r ? r(Ko(e, u), o, u + "", e, t, i) : X;
                a === X && (a = o), kn(e, u, a);
              }
            },
            Us
          );
      }
      function $r(e, t, n, r, i, o, u) {
        var a = Ko(e, n),
          s = Ko(t, n),
          c = u.get(s);
        if (c) return kn(e, n, c), X;
        var l = o ? o(a, s, n + "", e, t, u) : X,
          f = l === X;
        if (f) {
          var p = yp(s),
            d = !p && wp(s),
            h = !p && !d && Tp(s);
          (l = s),
            p || d || h
              ? yp(a)
                ? (l = a)
                : Qa(a)
                ? (l = Ii(a))
                : d
                ? ((f = !1), (l = Si(s, !0)))
                : h
                ? ((f = !1), (l = Ri(s, !0)))
                : (l = [])
              : ds(s) || vp(s)
              ? ((l = a),
                vp(a) ? (l = Ss(a)) : (is(a) && !ts(a)) || (l = No(s)))
              : (f = !1);
        }
        f && (u.set(s, l), i(l, s, r, o, u), u.delete(s)), kn(e, n, l);
      }
      function Gr(e, t) {
        var n = e.length;
        if (n) return (t += t < 0 ? n : 0), Do(t, n) ? e[t] : X;
      }
      function Qr(e, t, n) {
        t = t.length
          ? s(t, function (e) {
              return yp(e)
                ? function (t) {
                    return gr(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [Rc];
        var r = -1;
        return (
          (t = s(t, k(_o()))),
          T(
            Ur(e, function (e, n, i) {
              return {
                criteria: s(t, function (t) {
                  return t(e);
                }),
                index: ++r,
                value: e,
              };
            }),
            function (e, t) {
              return Oi(e, t, n);
            }
          )
        );
      }
      function Vr(e, t) {
        return Kr(e, t, function (t, n) {
          return Hs(e, n);
        });
      }
      function Kr(e, t, n) {
        for (var r = -1, i = t.length, o = {}; ++r < i; ) {
          var u = t[r],
            a = gr(e, u);
          n(a, u) && oi(o, xi(u, e), a);
        }
        return o;
      }
      function Yr(e) {
        return function (t) {
          return gr(t, e);
        };
      }
      function Xr(e, t, n, r) {
        var i = r ? m : y,
          o = -1,
          u = t.length,
          a = e;
        for (e === t && (t = Ii(t)), n && (a = s(e, k(n))); ++o < u; )
          for (
            var c = 0, l = t[o], f = n ? n(l) : l;
            (c = i(a, f, c, r)) > -1;

          )
            a !== e && Rl.call(a, c, 1), Rl.call(e, c, 1);
        return e;
      }
      function Jr(e, t) {
        for (var n = e ? t.length : 0, r = n - 1; n--; ) {
          var i = t[n];
          if (n == r || i !== o) {
            var o = i;
            Do(i) ? Rl.call(e, i, 1) : gi(e, i);
          }
        }
        return e;
      }
      function Zr(e, t) {
        return e + Hl(Kl() * (t - e + 1));
      }
      function ei(e, t, n, r) {
        for (var i = -1, o = $l(Bl((t - e) / (n || 1)), 0), u = nl(o); o--; )
          (u[r ? o : ++i] = e), (e += n);
        return u;
      }
      function ti(e, t) {
        var n = "";
        if (!e || t < 1 || t > ke) return n;
        do {
          t % 2 && (n += e), (t = Hl(t / 2)), t && (e += e);
        } while (t);
        return n;
      }
      function ni(e, t) {
        return Lf(Go(e, t, Rc), e + "");
      }
      function ri(e) {
        return Sn(Zs(e));
      }
      function ii(e, t) {
        var n = Zs(e);
        return Jo(n, Bn(t, 0, n.length));
      }
      function oi(e, t, n, r) {
        if (!is(e)) return e;
        t = xi(t, e);
        for (
          var i = -1, o = t.length, u = o - 1, a = e;
          null != a && ++i < o;

        ) {
          var s = Zo(t[i]),
            c = n;
          if ("__proto__" === s || "constructor" === s || "prototype" === s)
            return e;
          if (i != u) {
            var l = a[s];
            (c = r ? r(l, s, a) : X),
              c === X && (c = is(l) ? l : Do(t[i + 1]) ? [] : {});
          }
          Nn(a, s, c), (a = a[s]);
        }
        return e;
      }
      function ui(e) {
        return Jo(Zs(e));
      }
      function ai(e, t, n) {
        var r = -1,
          i = e.length;
        t < 0 && (t = -t > i ? 0 : i + t),
          (n = n > i ? i : n),
          n < 0 && (n += i),
          (i = t > n ? 0 : (n - t) >>> 0),
          (t >>>= 0);
        for (var o = nl(i); ++r < i; ) o[r] = e[r + t];
        return o;
      }
      function si(e, t) {
        var n;
        return (
          gf(e, function (e, r, i) {
            return (n = t(e, r, i)), !n;
          }),
          !!n
        );
      }
      function ci(e, t, n) {
        var r = 0,
          i = null == e ? r : e.length;
        if ("number" == typeof t && t === t && i <= De) {
          for (; r < i; ) {
            var o = (r + i) >>> 1,
              u = e[o];
            null !== u && !vs(u) && (n ? u <= t : u < t)
              ? (r = o + 1)
              : (i = o);
          }
          return i;
        }
        return li(e, t, Rc, n);
      }
      function li(e, t, n, r) {
        var i = 0,
          o = null == e ? 0 : e.length;
        if (0 === o) return 0;
        t = n(t);
        for (var u = t !== t, a = null === t, s = vs(t), c = t === X; i < o; ) {
          var l = Hl((i + o) / 2),
            f = n(e[l]),
            p = f !== X,
            d = null === f,
            h = f === f,
            g = vs(f);
          if (u) var v = r || h;
          else
            v = c
              ? h && (r || p)
              : a
              ? h && p && (r || !d)
              : s
              ? h && p && !d && (r || !g)
              : !d && !g && (r ? f <= t : f < t);
          v ? (i = l + 1) : (o = l);
        }
        return Gl(o, Oe);
      }
      function fi(e, t) {
        for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
          var u = e[n],
            a = t ? t(u) : u;
          if (!n || !$a(a, s)) {
            var s = a;
            o[i++] = 0 === u ? 0 : u;
          }
        }
        return o;
      }
      function pi(e) {
        return "number" == typeof e ? e : vs(e) ? Re : +e;
      }
      function di(e) {
        if ("string" == typeof e) return e;
        if (yp(e)) return s(e, di) + "";
        if (vs(e)) return df ? df.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -Ae ? "-0" : t;
      }
      function hi(e, t, n) {
        var r = -1,
          i = u,
          o = e.length,
          s = !0,
          c = [],
          l = c;
        if (n) (s = !1), (i = a);
        else if (o >= Z) {
          var f = t ? null : xf(e);
          if (f) return F(f);
          (s = !1), (i = R), (l = new gn());
        } else l = t ? [] : c;
        e: for (; ++r < o; ) {
          var p = e[r],
            d = t ? t(p) : p;
          if (((p = n || 0 !== p ? p : 0), s && d === d)) {
            for (var h = l.length; h--; ) if (l[h] === d) continue e;
            t && l.push(d), c.push(p);
          } else i(l, d, n) || (l !== c && l.push(d), c.push(p));
        }
        return c;
      }
      function gi(e, t) {
        return (t = xi(t, e)), (e = Qo(e, t)), null == e || delete e[Zo(bu(t))];
      }
      function vi(e, t, n, r) {
        return oi(e, t, n(gr(e, t)), r);
      }
      function yi(e, t, n, r) {
        for (
          var i = e.length, o = r ? i : -1;
          (r ? o-- : ++o < i) && t(e[o], o, e);

        );
        return n
          ? ai(e, r ? 0 : o, r ? o + 1 : i)
          : ai(e, r ? o + 1 : 0, r ? i : o);
      }
      function mi(e, t) {
        var n = e;
        return (
          n instanceof It && (n = n.value()),
          l(
            t,
            function (e, t) {
              return t.func.apply(t.thisArg, c([e], t.args));
            },
            n
          )
        );
      }
      function wi(e, t, n) {
        var r = e.length;
        if (r < 2) return r ? hi(e[0]) : [];
        for (var i = -1, o = nl(r); ++i < r; )
          for (var u = e[i], a = -1; ++a < r; )
            a != i && (o[i] = Qn(o[i] || u, e[a], t, n));
        return hi(tr(o, 1), t, n);
      }
      function _i(e, t, n) {
        for (var r = -1, i = e.length, o = t.length, u = {}; ++r < i; ) {
          n(u, e[r], r < o ? t[r] : X);
        }
        return u;
      }
      function bi(e) {
        return Qa(e) ? e : [];
      }
      function Ei(e) {
        return "function" == typeof e ? e : Rc;
      }
      function xi(e, t) {
        return yp(e) ? e : Io(e, t) ? [e] : Of(As(e));
      }
      function Ti(e, t, n) {
        var r = e.length;
        return (n = n === X ? r : n), !t && n >= r ? e : ai(e, t, n);
      }
      function Si(e, t) {
        if (t) return e.slice();
        var n = e.length,
          r = Cl ? Cl(n) : new e.constructor(n);
        return e.copy(r), r;
      }
      function Ci(e) {
        var t = new e.constructor(e.byteLength);
        return new Sl(t).set(new Sl(e)), t;
      }
      function Ai(e, t) {
        return new e.constructor(
          t ? Ci(e.buffer) : e.buffer,
          e.byteOffset,
          e.byteLength
        );
      }
      function ki(e) {
        var t = new e.constructor(e.source, Bt.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      }
      function Ni(e) {
        return pf ? al(pf.call(e)) : {};
      }
      function Ri(e, t) {
        return new e.constructor(
          t ? Ci(e.buffer) : e.buffer,
          e.byteOffset,
          e.length
        );
      }
      function Li(e, t) {
        if (e !== t) {
          var n = e !== X,
            r = null === e,
            i = e === e,
            o = vs(e),
            u = t !== X,
            a = null === t,
            s = t === t,
            c = vs(t);
          if (
            (!a && !c && !o && e > t) ||
            (o && u && s && !a && !c) ||
            (r && u && s) ||
            (!n && s) ||
            !i
          )
            return 1;
          if (
            (!r && !o && !c && e < t) ||
            (c && n && i && !r && !o) ||
            (a && n && i) ||
            (!u && i) ||
            !s
          )
            return -1;
        }
        return 0;
      }
      function Oi(e, t, n) {
        for (
          var r = -1,
            i = e.criteria,
            o = t.criteria,
            u = i.length,
            a = n.length;
          ++r < u;

        ) {
          var s = Li(i[r], o[r]);
          if (s) {
            if (r >= a) return s;
            return s * ("desc" == n[r] ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function Di(e, t, n, r) {
        for (
          var i = -1,
            o = e.length,
            u = n.length,
            a = -1,
            s = t.length,
            c = $l(o - u, 0),
            l = nl(s + c),
            f = !r;
          ++a < s;

        )
          l[a] = t[a];
        for (; ++i < u; ) (f || i < o) && (l[n[i]] = e[i]);
        for (; c--; ) l[a++] = e[i++];
        return l;
      }
      function ji(e, t, n, r) {
        for (
          var i = -1,
            o = e.length,
            u = -1,
            a = n.length,
            s = -1,
            c = t.length,
            l = $l(o - a, 0),
            f = nl(l + c),
            p = !r;
          ++i < l;

        )
          f[i] = e[i];
        for (var d = i; ++s < c; ) f[d + s] = t[s];
        for (; ++u < a; ) (p || i < o) && (f[d + n[u]] = e[i++]);
        return f;
      }
      function Ii(e, t) {
        var n = -1,
          r = e.length;
        for (t || (t = nl(r)); ++n < r; ) t[n] = e[n];
        return t;
      }
      function Mi(e, t, n, r) {
        var i = !n;
        n || (n = {});
        for (var o = -1, u = t.length; ++o < u; ) {
          var a = t[o],
            s = r ? r(n[a], e[a], a, n, e) : X;
          s === X && (s = e[a]), i ? jn(n, a, s) : Nn(n, a, s);
        }
        return n;
      }
      function Pi(e, t) {
        return Mi(e, Sf(e), t);
      }
      function Bi(e, t) {
        return Mi(e, Cf(e), t);
      }
      function Hi(e, n) {
        return function (r, i) {
          var o = yp(r) ? t : Ln,
            u = n ? n() : {};
          return o(r, e, _o(i, 2), u);
        };
      }
      function qi(e) {
        return ni(function (t, n) {
          var r = -1,
            i = n.length,
            o = i > 1 ? n[i - 1] : X,
            u = i > 2 ? n[2] : X;
          for (
            o = e.length > 3 && "function" == typeof o ? (i--, o) : X,
              u && jo(n[0], n[1], u) && ((o = i < 3 ? X : o), (i = 1)),
              t = al(t);
            ++r < i;

          ) {
            var a = n[r];
            a && e(t, a, r, o);
          }
          return t;
        });
      }
      function Ui(e, t) {
        return function (n, r) {
          if (null == n) return n;
          if (!Ga(n)) return e(n, r);
          for (
            var i = n.length, o = t ? i : -1, u = al(n);
            (t ? o-- : ++o < i) && r(u[o], o, u) !== !1;

          );
          return n;
        };
      }
      function Fi(e) {
        return function (t, n, r) {
          for (var i = -1, o = al(t), u = r(t), a = u.length; a--; ) {
            var s = u[e ? a : ++i];
            if (n(o[s], s, o) === !1) break;
          }
          return t;
        };
      }
      function Wi(e, t, n) {
        function r() {
          return (this && this !== Zn && this instanceof r ? o : e).apply(
            i ? n : this,
            arguments
          );
        }
        var i = t & le,
          o = Gi(e);
        return r;
      }
      function zi(e) {
        return function (t) {
          t = As(t);
          var n = M(t) ? Q(t) : X,
            r = n ? n[0] : t.charAt(0),
            i = n ? Ti(n, 1).join("") : t.slice(1);
          return r[e]() + i;
        };
      }
      function $i(e) {
        return function (t) {
          return l(Sc(oc(t).replace(In, "")), e, "");
        };
      }
      function Gi(e) {
        return function () {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var n = hf(e.prototype),
            r = e.apply(n, t);
          return is(r) ? r : n;
        };
      }
      function Qi(t, n, r) {
        function i() {
          for (var u = arguments.length, a = nl(u), s = u, c = wo(i); s--; )
            a[s] = arguments[s];
          var l = u < 3 && a[0] !== c && a[u - 1] !== c ? [] : U(a, c);
          return (
            (u -= l.length),
            u < r
              ? io(t, n, Yi, i.placeholder, X, a, l, X, X, r - u)
              : e(this && this !== Zn && this instanceof i ? o : t, this, a)
          );
        }
        var o = Gi(t);
        return i;
      }
      function Vi(e) {
        return function (t, n, r) {
          var i = al(t);
          if (!Ga(t)) {
            var o = _o(n, 3);
            (t = qs(t)),
              (n = function (e) {
                return o(i[e], e, i);
              });
          }
          var u = e(t, n, r);
          return u > -1 ? i[o ? t[u] : u] : X;
        };
      }
      function Ki(e) {
        return go(function (t) {
          var n = t.length,
            r = n,
            i = K.prototype.thru;
          for (e && t.reverse(); r--; ) {
            var o = t[r];
            if ("function" != typeof o) throw new ll(te);
            if (i && !u && "wrapper" == mo(o)) var u = new K([], !0);
          }
          for (r = u ? r : n; ++r < n; ) {
            o = t[r];
            var a = mo(o),
              s = "wrapper" == a ? Tf(o) : X;
            u =
              s &&
              Po(s[0]) &&
              s[1] == (ye | de | ge | me) &&
              !s[4].length &&
              1 == s[9]
                ? u[mo(s[0])].apply(u, s[3])
                : 1 == o.length && Po(o)
                ? u[a]()
                : u.thru(o);
          }
          return function () {
            var e = arguments,
              r = e[0];
            if (u && 1 == e.length && yp(r)) return u.plant(r).value();
            for (var i = 0, o = n ? t[i].apply(this, e) : r; ++i < n; )
              o = t[i].call(this, o);
            return o;
          };
        });
      }
      function Yi(e, t, n, r, i, o, u, a, s, c) {
        function l() {
          for (var y = arguments.length, m = nl(y), w = y; w--; )
            m[w] = arguments[w];
          if (h)
            var _ = wo(l),
              b = D(m, _);
          if (
            (r && (m = Di(m, r, i, h)),
            o && (m = ji(m, o, u, h)),
            (y -= b),
            h && y < c)
          ) {
            return io(e, t, Yi, l.placeholder, n, m, U(m, _), a, s, c - y);
          }
          var E = p ? n : this,
            x = d ? E[e] : e;
          return (
            (y = m.length),
            a ? (m = Vo(m, a)) : g && y > 1 && m.reverse(),
            f && s < y && (m.length = s),
            this && this !== Zn && this instanceof l && (x = v || Gi(x)),
            x.apply(E, m)
          );
        }
        var f = t & ye,
          p = t & le,
          d = t & fe,
          h = t & (de | he),
          g = t & we,
          v = d ? X : Gi(e);
        return l;
      }
      function Xi(e, t) {
        return function (n, r) {
          return Tr(n, e, t(r), {});
        };
      }
      function Ji(e, t) {
        return function (n, r) {
          var i;
          if (n === X && r === X) return t;
          if ((n !== X && (i = n), r !== X)) {
            if (i === X) return r;
            "string" == typeof n || "string" == typeof r
              ? ((n = di(n)), (r = di(r)))
              : ((n = pi(n)), (r = pi(r))),
              (i = e(n, r));
          }
          return i;
        };
      }
      function Zi(t) {
        return go(function (n) {
          return (
            (n = s(n, k(_o()))),
            ni(function (r) {
              var i = this;
              return t(n, function (t) {
                return e(t, i, r);
              });
            })
          );
        });
      }
      function eo(e, t) {
        t = t === X ? " " : di(t);
        var n = t.length;
        if (n < 2) return n ? ti(t, e) : t;
        var r = ti(t, Bl(e / G(t)));
        return M(t) ? Ti(Q(r), 0, e).join("") : r.slice(0, e);
      }
      function to(t, n, r, i) {
        function o() {
          for (
            var n = -1,
              s = arguments.length,
              c = -1,
              l = i.length,
              f = nl(l + s),
              p = this && this !== Zn && this instanceof o ? a : t;
            ++c < l;

          )
            f[c] = i[c];
          for (; s--; ) f[c++] = arguments[++n];
          return e(p, u ? r : this, f);
        }
        var u = n & le,
          a = Gi(t);
        return o;
      }
      function no(e) {
        return function (t, n, r) {
          return (
            r && "number" != typeof r && jo(t, n, r) && (n = r = X),
            (t = bs(t)),
            n === X ? ((n = t), (t = 0)) : (n = bs(n)),
            (r = r === X ? (t < n ? 1 : -1) : bs(r)),
            ei(t, n, r, e)
          );
        };
      }
      function ro(e) {
        return function (t, n) {
          return (
            ("string" == typeof t && "string" == typeof n) ||
              ((t = Ts(t)), (n = Ts(n))),
            e(t, n)
          );
        };
      }
      function io(e, t, n, r, i, o, u, a, s, c) {
        var l = t & de,
          f = l ? u : X,
          p = l ? X : u,
          d = l ? o : X,
          h = l ? X : o;
        (t |= l ? ge : ve), (t &= ~(l ? ve : ge)), t & pe || (t &= ~(le | fe));
        var g = [e, t, i, d, f, h, p, a, s, c],
          v = n.apply(X, g);
        return Po(e) && Nf(v, g), (v.placeholder = r), Yo(v, e, t);
      }
      function oo(e) {
        var t = ul[e];
        return function (e, n) {
          if (((e = Ts(e)), (n = null == n ? 0 : Gl(Es(n), 292)), n && Fl(e))) {
            var r = (As(e) + "e").split("e");
            return (
              (r = (As(t(r[0] + "e" + (+r[1] + n))) + "e").split("e")),
              +(r[0] + "e" + (+r[1] - n))
            );
          }
          return t(e);
        };
      }
      function uo(e) {
        return function (t) {
          var n = Af(t);
          return n == ze ? H(t) : n == Xe ? W(t) : A(t, e(t));
        };
      }
      function ao(e, t, n, r, i, o, u, a) {
        var s = t & fe;
        if (!s && "function" != typeof e) throw new ll(te);
        var c = r ? r.length : 0;
        if (
          (c || ((t &= ~(ge | ve)), (r = i = X)),
          (u = u === X ? u : $l(Es(u), 0)),
          (a = a === X ? a : Es(a)),
          (c -= i ? i.length : 0),
          t & ve)
        ) {
          var l = r,
            f = i;
          r = i = X;
        }
        var p = s ? X : Tf(e),
          d = [e, t, n, r, i, l, f, o, u, a];
        if (
          (p && Wo(d, p),
          (e = d[0]),
          (t = d[1]),
          (n = d[2]),
          (r = d[3]),
          (i = d[4]),
          (a = d[9] = d[9] === X ? (s ? 0 : e.length) : $l(d[9] - c, 0)),
          !a && t & (de | he) && (t &= ~(de | he)),
          t && t != le)
        )
          h =
            t == de || t == he
              ? Qi(e, t, a)
              : (t != ge && t != (le | ge)) || i.length
              ? Yi.apply(X, d)
              : to(e, t, n, r);
        else var h = Wi(e, t, n);
        return Yo((p ? wf : Nf)(h, d), e, t);
      }
      function so(e, t, n, r) {
        return e === X || ($a(e, dl[n]) && !vl.call(r, n)) ? t : e;
      }
      function co(e, t, n, r, i, o) {
        return (
          is(e) && is(t) && (o.set(t, e), zr(e, t, X, co, o), o.delete(t)), e
        );
      }
      function lo(e) {
        return ds(e) ? X : e;
      }
      function fo(e, t, n, r, i, o) {
        var u = n & se,
          a = e.length,
          s = t.length;
        if (a != s && !(u && s > a)) return !1;
        var c = o.get(e),
          l = o.get(t);
        if (c && l) return c == t && l == e;
        var f = -1,
          d = !0,
          h = n & ce ? new gn() : X;
        for (o.set(e, t), o.set(t, e); ++f < a; ) {
          var g = e[f],
            v = t[f];
          if (r) var y = u ? r(v, g, f, t, e, o) : r(g, v, f, e, t, o);
          if (y !== X) {
            if (y) continue;
            d = !1;
            break;
          }
          if (h) {
            if (
              !p(t, function (e, t) {
                if (!R(h, t) && (g === e || i(g, e, n, r, o))) return h.push(t);
              })
            ) {
              d = !1;
              break;
            }
          } else if (g !== v && !i(g, v, n, r, o)) {
            d = !1;
            break;
          }
        }
        return o.delete(e), o.delete(t), d;
      }
      function po(e, t, n, r, i, o, u) {
        switch (n) {
          case it:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case rt:
            return !(e.byteLength != t.byteLength || !o(new Sl(e), new Sl(t)));
          case Be:
          case He:
          case $e:
            return $a(+e, +t);
          case Ue:
            return e.name == t.name && e.message == t.message;
          case Ye:
          case Je:
            return e == t + "";
          case ze:
            var a = H;
          case Xe:
            var s = r & se;
            if ((a || (a = F), e.size != t.size && !s)) return !1;
            var c = u.get(e);
            if (c) return c == t;
            (r |= ce), u.set(e, t);
            var l = fo(a(e), a(t), r, i, o, u);
            return u.delete(e), l;
          case Ze:
            if (pf) return pf.call(e) == pf.call(t);
        }
        return !1;
      }
      function ho(e, t, n, r, i, o) {
        var u = n & se,
          a = vo(e),
          s = a.length;
        if (s != vo(t).length && !u) return !1;
        for (var c = s; c--; ) {
          var l = a[c];
          if (!(u ? l in t : vl.call(t, l))) return !1;
        }
        var f = o.get(e),
          p = o.get(t);
        if (f && p) return f == t && p == e;
        var d = !0;
        o.set(e, t), o.set(t, e);
        for (var h = u; ++c < s; ) {
          l = a[c];
          var g = e[l],
            v = t[l];
          if (r) var y = u ? r(v, g, l, t, e, o) : r(g, v, l, e, t, o);
          if (!(y === X ? g === v || i(g, v, n, r, o) : y)) {
            d = !1;
            break;
          }
          h || (h = "constructor" == l);
        }
        if (d && !h) {
          var m = e.constructor,
            w = t.constructor;
          m != w &&
            "constructor" in e &&
            "constructor" in t &&
            !(
              "function" == typeof m &&
              m instanceof m &&
              "function" == typeof w &&
              w instanceof w
            ) &&
            (d = !1);
        }
        return o.delete(e), o.delete(t), d;
      }
      function go(e) {
        return Lf(Go(e, X, du), e + "");
      }
      function vo(e) {
        return yr(e, qs, Sf);
      }
      function yo(e) {
        return yr(e, Us, Cf);
      }
      function mo(e) {
        for (
          var t = e.name + "", n = of[t], r = vl.call(of, t) ? n.length : 0;
          r--;

        ) {
          var i = n[r],
            o = i.func;
          if (null == o || o == e) return i.name;
        }
        return t;
      }
      function wo(e) {
        return (vl.call(z, "placeholder") ? z : e).placeholder;
      }
      function _o() {
        var e = z.iteratee || Lc;
        return (
          (e = e === Lc ? Pr : e),
          arguments.length ? e(arguments[0], arguments[1]) : e
        );
      }
      function bo(e, t) {
        var n = e.__data__;
        return Mo(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      }
      function Eo(e) {
        for (var t = qs(e), n = t.length; n--; ) {
          var r = t[n],
            i = e[r];
          t[n] = [r, i, qo(i)];
        }
        return t;
      }
      function xo(e, t) {
        var n = I(e, t);
        return Dr(n) ? n : X;
      }
      function To(e) {
        var t = vl.call(e, Dl),
          n = e[Dl];
        try {
          e[Dl] = X;
          var r = !0;
        } catch (e) {}
        var i = wl.call(e);
        return r && (t ? (e[Dl] = n) : delete e[Dl]), i;
      }
      function So(e, t, n) {
        for (var r = -1, i = n.length; ++r < i; ) {
          var o = n[r],
            u = o.size;
          switch (o.type) {
            case "drop":
              e += u;
              break;
            case "dropRight":
              t -= u;
              break;
            case "take":
              t = Gl(t, e + u);
              break;
            case "takeRight":
              e = $l(e, t - u);
          }
        }
        return { start: e, end: t };
      }
      function Co(e) {
        var t = e.match(Dt);
        return t ? t[1].split(jt) : [];
      }
      function Ao(e, t, n) {
        t = xi(t, e);
        for (var r = -1, i = t.length, o = !1; ++r < i; ) {
          var u = Zo(t[r]);
          if (!(o = null != e && n(e, u))) break;
          e = e[u];
        }
        return o || ++r != i
          ? o
          : ((i = null == e ? 0 : e.length),
            !!i && rs(i) && Do(u, i) && (yp(e) || vp(e)));
      }
      function ko(e) {
        var t = e.length,
          n = new e.constructor(t);
        return (
          t &&
            "string" == typeof e[0] &&
            vl.call(e, "index") &&
            ((n.index = e.index), (n.input = e.input)),
          n
        );
      }
      function No(e) {
        return "function" != typeof e.constructor || Ho(e) ? {} : hf(Al(e));
      }
      function Ro(e, t, n) {
        var r = e.constructor;
        switch (t) {
          case rt:
            return Ci(e);
          case Be:
          case He:
            return new r(+e);
          case it:
            return Ai(e, n);
          case ot:
          case ut:
          case at:
          case st:
          case ct:
          case lt:
          case ft:
          case pt:
          case dt:
            return Ri(e, n);
          case ze:
            return new r();
          case $e:
          case Je:
            return new r(e);
          case Ye:
            return ki(e);
          case Xe:
            return new r();
          case Ze:
            return Ni(e);
        }
      }
      function Lo(e, t) {
        var n = t.length;
        if (!n) return e;
        var r = n - 1;
        return (
          (t[r] = (n > 1 ? "& " : "") + t[r]),
          (t = t.join(n > 2 ? ", " : " ")),
          e.replace(Ot, "{\n/* [wrapped with " + t + "] */\n")
        );
      }
      function Oo(e) {
        return yp(e) || vp(e) || !!(Ll && e && e[Ll]);
      }
      function Do(e, t) {
        var n = typeof e;
        return (
          (t = null == t ? ke : t),
          !!t &&
            ("number" == n || ("symbol" != n && Wt.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
        );
      }
      function jo(e, t, n) {
        if (!is(n)) return !1;
        var r = typeof t;
        return (
          !!("number" == r
            ? Ga(n) && Do(t, n.length)
            : "string" == r && t in n) && $a(n[t], e)
        );
      }
      function Io(e, t) {
        if (yp(e)) return !1;
        var n = typeof e;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != e &&
            !vs(e)
          ) ||
          St.test(e) ||
          !Tt.test(e) ||
          (null != t && e in al(t))
        );
      }
      function Mo(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      }
      function Po(e) {
        var t = mo(e),
          n = z[t];
        if ("function" != typeof n || !(t in It.prototype)) return !1;
        if (e === n) return !0;
        var r = Tf(n);
        return !!r && e === r[0];
      }
      function Bo(e) {
        return !!ml && ml in e;
      }
      function Ho(e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || dl);
      }
      function qo(e) {
        return e === e && !is(e);
      }
      function Uo(e, t) {
        return function (n) {
          return null != n && n[e] === t && (t !== X || e in al(n));
        };
      }
      function Fo(e) {
        var t = La(e, function (e) {
            return n.size === re && n.clear(), e;
          }),
          n = t.cache;
        return t;
      }
      function Wo(e, t) {
        var n = e[1],
          r = t[1],
          i = n | r,
          o = i < (le | fe | ye),
          u =
            (r == ye && n == de) ||
            (r == ye && n == me && e[7].length <= t[8]) ||
            (r == (ye | me) && t[7].length <= t[8] && n == de);
        if (!o && !u) return e;
        r & le && ((e[2] = t[2]), (i |= n & le ? 0 : pe));
        var a = t[3];
        if (a) {
          var s = e[3];
          (e[3] = s ? Di(s, a, t[4]) : a), (e[4] = s ? U(e[3], ie) : t[4]);
        }
        return (
          (a = t[5]),
          a &&
            ((s = e[5]),
            (e[5] = s ? ji(s, a, t[6]) : a),
            (e[6] = s ? U(e[5], ie) : t[6])),
          (a = t[7]),
          a && (e[7] = a),
          r & ye && (e[8] = null == e[8] ? t[8] : Gl(e[8], t[8])),
          null == e[9] && (e[9] = t[9]),
          (e[0] = t[0]),
          (e[1] = i),
          e
        );
      }
      function zo(e) {
        var t = [];
        if (null != e) for (var n in al(e)) t.push(n);
        return t;
      }
      function $o(e) {
        return wl.call(e);
      }
      function Go(t, n, r) {
        return (
          (n = $l(n === X ? t.length - 1 : n, 0)),
          function () {
            for (
              var i = arguments, o = -1, u = $l(i.length - n, 0), a = nl(u);
              ++o < u;

            )
              a[o] = i[n + o];
            o = -1;
            for (var s = nl(n + 1); ++o < n; ) s[o] = i[o];
            return (s[n] = r(a)), e(t, this, s);
          }
        );
      }
      function Qo(e, t) {
        return t.length < 2 ? e : gr(e, ai(t, 0, -1));
      }
      function Vo(e, t) {
        for (var n = e.length, r = Gl(t.length, n), i = Ii(e); r--; ) {
          var o = t[r];
          e[r] = Do(o, n) ? i[o] : X;
        }
        return e;
      }
      function Ko(e, t) {
        if (
          ("constructor" !== t || "function" != typeof e[t]) &&
          "__proto__" != t
        )
          return e[t];
      }
      function Yo(e, t, n) {
        var r = t + "";
        return Lf(e, Lo(r, tu(Co(r), n)));
      }
      function Xo(e) {
        var t = 0,
          n = 0;
        return function () {
          var r = Ql(),
            i = xe - (r - n);
          if (((n = r), i > 0)) {
            if (++t >= Ee) return arguments[0];
          } else t = 0;
          return e.apply(X, arguments);
        };
      }
      function Jo(e, t) {
        var n = -1,
          r = e.length,
          i = r - 1;
        for (t = t === X ? r : t; ++n < t; ) {
          var o = Zr(n, i),
            u = e[o];
          (e[o] = e[n]), (e[n] = u);
        }
        return (e.length = t), e;
      }
      function Zo(e) {
        if ("string" == typeof e || vs(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Ae ? "-0" : t;
      }
      function eu(e) {
        if (null != e) {
          try {
            return gl.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }
      function tu(e, t) {
        return (
          n(je, function (n) {
            var r = "_." + n[0];
            t & n[1] && !u(e, r) && e.push(r);
          }),
          e.sort()
        );
      }
      function nu(e) {
        if (e instanceof It) return e.clone();
        var t = new K(e.__wrapped__, e.__chain__);
        return (
          (t.__actions__ = Ii(e.__actions__)),
          (t.__index__ = e.__index__),
          (t.__values__ = e.__values__),
          t
        );
      }
      function ru(e, t, n) {
        t = (n ? jo(e, t, n) : t === X) ? 1 : $l(Es(t), 0);
        var r = null == e ? 0 : e.length;
        if (!r || t < 1) return [];
        for (var i = 0, o = 0, u = nl(Bl(r / t)); i < r; )
          u[o++] = ai(e, i, (i += t));
        return u;
      }
      function iu(e) {
        for (
          var t = -1, n = null == e ? 0 : e.length, r = 0, i = [];
          ++t < n;

        ) {
          var o = e[t];
          o && (i[r++] = o);
        }
        return i;
      }
      function ou() {
        var e = arguments.length;
        if (!e) return [];
        for (var t = nl(e - 1), n = arguments[0], r = e; r--; )
          t[r - 1] = arguments[r];
        return c(yp(n) ? Ii(n) : [n], tr(t, 1));
      }
      function uu(e, t, n) {
        var r = null == e ? 0 : e.length;
        return r
          ? ((t = n || t === X ? 1 : Es(t)), ai(e, t < 0 ? 0 : t, r))
          : [];
      }
      function au(e, t, n) {
        var r = null == e ? 0 : e.length;
        return r
          ? ((t = n || t === X ? 1 : Es(t)),
            (t = r - t),
            ai(e, 0, t < 0 ? 0 : t))
          : [];
      }
      function su(e, t) {
        return e && e.length ? yi(e, _o(t, 3), !0, !0) : [];
      }
      function cu(e, t) {
        return e && e.length ? yi(e, _o(t, 3), !0) : [];
      }
      function lu(e, t, n, r) {
        var i = null == e ? 0 : e.length;
        return i
          ? (n && "number" != typeof n && jo(e, t, n) && ((n = 0), (r = i)),
            Jn(e, t, n, r))
          : [];
      }
      function fu(e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var i = null == n ? 0 : Es(n);
        return i < 0 && (i = $l(r + i, 0)), v(e, _o(t, 3), i);
      }
      function pu(e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var i = r - 1;
        return (
          n !== X && ((i = Es(n)), (i = n < 0 ? $l(r + i, 0) : Gl(i, r - 1))),
          v(e, _o(t, 3), i, !0)
        );
      }
      function du(e) {
        return (null == e ? 0 : e.length) ? tr(e, 1) : [];
      }
      function hu(e) {
        return (null == e ? 0 : e.length) ? tr(e, Ae) : [];
      }
      function gu(e, t) {
        return (null == e ? 0 : e.length)
          ? ((t = t === X ? 1 : Es(t)), tr(e, t))
          : [];
      }
      function vu(e) {
        for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n; ) {
          var i = e[t];
          r[i[0]] = i[1];
        }
        return r;
      }
      function yu(e) {
        return e && e.length ? e[0] : X;
      }
      function mu(e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var i = null == n ? 0 : Es(n);
        return i < 0 && (i = $l(r + i, 0)), y(e, t, i);
      }
      function wu(e) {
        return (null == e ? 0 : e.length) ? ai(e, 0, -1) : [];
      }
      function _u(e, t) {
        return null == e ? "" : Wl.call(e, t);
      }
      function bu(e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : X;
      }
      function Eu(e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var i = r;
        return (
          n !== X && ((i = Es(n)), (i = i < 0 ? $l(r + i, 0) : Gl(i, r - 1))),
          t === t ? $(e, t, i) : v(e, w, i, !0)
        );
      }
      function xu(e, t) {
        return e && e.length ? Gr(e, Es(t)) : X;
      }
      function Tu(e, t) {
        return e && e.length && t && t.length ? Xr(e, t) : e;
      }
      function Su(e, t, n) {
        return e && e.length && t && t.length ? Xr(e, t, _o(n, 2)) : e;
      }
      function Cu(e, t, n) {
        return e && e.length && t && t.length ? Xr(e, t, X, n) : e;
      }
      function Au(e, t) {
        var n = [];
        if (!e || !e.length) return n;
        var r = -1,
          i = [],
          o = e.length;
        for (t = _o(t, 3); ++r < o; ) {
          var u = e[r];
          t(u, r, e) && (n.push(u), i.push(r));
        }
        return Jr(e, i), n;
      }
      function ku(e) {
        return null == e ? e : Yl.call(e);
      }
      function Nu(e, t, n) {
        var r = null == e ? 0 : e.length;
        return r
          ? (n && "number" != typeof n && jo(e, t, n)
              ? ((t = 0), (n = r))
              : ((t = null == t ? 0 : Es(t)), (n = n === X ? r : Es(n))),
            ai(e, t, n))
          : [];
      }
      function Ru(e, t) {
        return ci(e, t);
      }
      function Lu(e, t, n) {
        return li(e, t, _o(n, 2));
      }
      function Ou(e, t) {
        var n = null == e ? 0 : e.length;
        if (n) {
          var r = ci(e, t);
          if (r < n && $a(e[r], t)) return r;
        }
        return -1;
      }
      function Du(e, t) {
        return ci(e, t, !0);
      }
      function ju(e, t, n) {
        return li(e, t, _o(n, 2), !0);
      }
      function Iu(e, t) {
        if (null == e ? 0 : e.length) {
          var n = ci(e, t, !0) - 1;
          if ($a(e[n], t)) return n;
        }
        return -1;
      }
      function Mu(e) {
        return e && e.length ? fi(e) : [];
      }
      function Pu(e, t) {
        return e && e.length ? fi(e, _o(t, 2)) : [];
      }
      function Bu(e) {
        var t = null == e ? 0 : e.length;
        return t ? ai(e, 1, t) : [];
      }
      function Hu(e, t, n) {
        return e && e.length
          ? ((t = n || t === X ? 1 : Es(t)), ai(e, 0, t < 0 ? 0 : t))
          : [];
      }
      function qu(e, t, n) {
        var r = null == e ? 0 : e.length;
        return r
          ? ((t = n || t === X ? 1 : Es(t)),
            (t = r - t),
            ai(e, t < 0 ? 0 : t, r))
          : [];
      }
      function Uu(e, t) {
        return e && e.length ? yi(e, _o(t, 3), !1, !0) : [];
      }
      function Fu(e, t) {
        return e && e.length ? yi(e, _o(t, 3)) : [];
      }
      function Wu(e) {
        return e && e.length ? hi(e) : [];
      }
      function zu(e, t) {
        return e && e.length ? hi(e, _o(t, 2)) : [];
      }
      function $u(e, t) {
        return (
          (t = "function" == typeof t ? t : X), e && e.length ? hi(e, X, t) : []
        );
      }
      function Gu(e) {
        if (!e || !e.length) return [];
        var t = 0;
        return (
          (e = o(e, function (e) {
            if (Qa(e)) return (t = $l(e.length, t)), !0;
          })),
          C(t, function (t) {
            return s(e, b(t));
          })
        );
      }
      function Qu(t, n) {
        if (!t || !t.length) return [];
        var r = Gu(t);
        return null == n
          ? r
          : s(r, function (t) {
              return e(n, X, t);
            });
      }
      function Vu(e, t) {
        return _i(e || [], t || [], Nn);
      }
      function Ku(e, t) {
        return _i(e || [], t || [], oi);
      }
      function Yu(e) {
        var t = z(e);
        return (t.__chain__ = !0), t;
      }
      function Xu(e, t) {
        return t(e), e;
      }
      function Ju(e, t) {
        return t(e);
      }
      function Zu() {
        return Yu(this);
      }
      function ea() {
        return new K(this.value(), this.__chain__);
      }
      function ta() {
        this.__values__ === X && (this.__values__ = _s(this.value()));
        var e = this.__index__ >= this.__values__.length;
        return { done: e, value: e ? X : this.__values__[this.__index__++] };
      }
      function na() {
        return this;
      }
      function ra(e) {
        for (var t, n = this; n instanceof V; ) {
          var r = nu(n);
          (r.__index__ = 0),
            (r.__values__ = X),
            t ? (i.__wrapped__ = r) : (t = r);
          var i = r;
          n = n.__wrapped__;
        }
        return (i.__wrapped__ = e), t;
      }
      function ia() {
        var e = this.__wrapped__;
        if (e instanceof It) {
          var t = e;
          return (
            this.__actions__.length && (t = new It(this)),
            (t = t.reverse()),
            t.__actions__.push({ func: Ju, args: [ku], thisArg: X }),
            new K(t, this.__chain__)
          );
        }
        return this.thru(ku);
      }
      function oa() {
        return mi(this.__wrapped__, this.__actions__);
      }
      function ua(e, t, n) {
        var r = yp(e) ? i : Vn;
        return n && jo(e, t, n) && (t = X), r(e, _o(t, 3));
      }
      function aa(e, t) {
        return (yp(e) ? o : er)(e, _o(t, 3));
      }
      function sa(e, t) {
        return tr(ha(e, t), 1);
      }
      function ca(e, t) {
        return tr(ha(e, t), Ae);
      }
      function la(e, t, n) {
        return (n = n === X ? 1 : Es(n)), tr(ha(e, t), n);
      }
      function fa(e, t) {
        return (yp(e) ? n : gf)(e, _o(t, 3));
      }
      function pa(e, t) {
        return (yp(e) ? r : vf)(e, _o(t, 3));
      }
      function da(e, t, n, r) {
        (e = Ga(e) ? e : Zs(e)), (n = n && !r ? Es(n) : 0);
        var i = e.length;
        return (
          n < 0 && (n = $l(i + n, 0)),
          gs(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && y(e, t, n) > -1
        );
      }
      function ha(e, t) {
        return (yp(e) ? s : Ur)(e, _o(t, 3));
      }
      function ga(e, t, n, r) {
        return null == e
          ? []
          : (yp(t) || (t = null == t ? [] : [t]),
            (n = r ? X : n),
            yp(n) || (n = null == n ? [] : [n]),
            Qr(e, t, n));
      }
      function va(e, t, n) {
        var r = yp(e) ? l : x,
          i = arguments.length < 3;
        return r(e, _o(t, 4), n, i, gf);
      }
      function ya(e, t, n) {
        var r = yp(e) ? f : x,
          i = arguments.length < 3;
        return r(e, _o(t, 4), n, i, vf);
      }
      function ma(e, t) {
        return (yp(e) ? o : er)(e, Oa(_o(t, 3)));
      }
      function wa(e) {
        return (yp(e) ? Sn : ri)(e);
      }
      function _a(e, t, n) {
        return (
          (t = (n ? jo(e, t, n) : t === X) ? 1 : Es(t)), (yp(e) ? Cn : ii)(e, t)
        );
      }
      function ba(e) {
        return (yp(e) ? An : ui)(e);
      }
      function Ea(e) {
        if (null == e) return 0;
        if (Ga(e)) return gs(e) ? G(e) : e.length;
        var t = Af(e);
        return t == ze || t == Xe ? e.size : Br(e).length;
      }
      function xa(e, t, n) {
        var r = yp(e) ? p : si;
        return n && jo(e, t, n) && (t = X), r(e, _o(t, 3));
      }
      function Ta(e, t) {
        if ("function" != typeof t) throw new ll(te);
        return (
          (e = Es(e)),
          function () {
            if (--e < 1) return t.apply(this, arguments);
          }
        );
      }
      function Sa(e, t, n) {
        return (
          (t = n ? X : t),
          (t = e && null == t ? e.length : t),
          ao(e, ye, X, X, X, X, t)
        );
      }
      function Ca(e, t) {
        var n;
        if ("function" != typeof t) throw new ll(te);
        return (
          (e = Es(e)),
          function () {
            return (
              --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = X), n
            );
          }
        );
      }
      function Aa(e, t, n) {
        t = n ? X : t;
        var r = ao(e, de, X, X, X, X, X, t);
        return (r.placeholder = Aa.placeholder), r;
      }
      function ka(e, t, n) {
        t = n ? X : t;
        var r = ao(e, he, X, X, X, X, X, t);
        return (r.placeholder = ka.placeholder), r;
      }
      function Na(e, t, n) {
        function r(t) {
          var n = p,
            r = d;
          return (p = d = X), (m = t), (g = e.apply(r, n));
        }
        function i(e) {
          return (m = e), (v = Rf(a, t)), w ? r(e) : g;
        }
        function o(e) {
          var n = e - y,
            r = e - m,
            i = t - n;
          return _ ? Gl(i, h - r) : i;
        }
        function u(e) {
          var n = e - y,
            r = e - m;
          return y === X || n >= t || n < 0 || (_ && r >= h);
        }
        function a() {
          var e = op();
          return u(e) ? s(e) : ((v = Rf(a, o(e))), X);
        }
        function s(e) {
          return (v = X), b && p ? r(e) : ((p = d = X), g);
        }
        function c() {
          v !== X && Ef(v), (m = 0), (p = y = d = v = X);
        }
        function l() {
          return v === X ? g : s(op());
        }
        function f() {
          var e = op(),
            n = u(e);
          if (((p = arguments), (d = this), (y = e), n)) {
            if (v === X) return i(y);
            if (_) return Ef(v), (v = Rf(a, t)), r(y);
          }
          return v === X && (v = Rf(a, t)), g;
        }
        var p,
          d,
          h,
          g,
          v,
          y,
          m = 0,
          w = !1,
          _ = !1,
          b = !0;
        if ("function" != typeof e) throw new ll(te);
        return (
          (t = Ts(t) || 0),
          is(n) &&
            ((w = !!n.leading),
            (_ = "maxWait" in n),
            (h = _ ? $l(Ts(n.maxWait) || 0, t) : h),
            (b = "trailing" in n ? !!n.trailing : b)),
          (f.cancel = c),
          (f.flush = l),
          f
        );
      }
      function Ra(e) {
        return ao(e, we);
      }
      function La(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new ll(te);
        var n = function () {
          var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            o = n.cache;
          if (o.has(i)) return o.get(i);
          var u = e.apply(this, r);
          return (n.cache = o.set(i, u) || o), u;
        };
        return (n.cache = new (La.Cache || cn)()), n;
      }
      function Oa(e) {
        if ("function" != typeof e) throw new ll(te);
        return function () {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function Da(e) {
        return Ca(2, e);
      }
      function ja(e, t) {
        if ("function" != typeof e) throw new ll(te);
        return (t = t === X ? t : Es(t)), ni(e, t);
      }
      function Ia(t, n) {
        if ("function" != typeof t) throw new ll(te);
        return (
          (n = null == n ? 0 : $l(Es(n), 0)),
          ni(function (r) {
            var i = r[n],
              o = Ti(r, 0, n);
            return i && c(o, i), e(t, this, o);
          })
        );
      }
      function Ma(e, t, n) {
        var r = !0,
          i = !0;
        if ("function" != typeof e) throw new ll(te);
        return (
          is(n) &&
            ((r = "leading" in n ? !!n.leading : r),
            (i = "trailing" in n ? !!n.trailing : i)),
          Na(e, t, { leading: r, maxWait: t, trailing: i })
        );
      }
      function Pa(e) {
        return Sa(e, 1);
      }
      function Ba(e, t) {
        return fp(Ei(t), e);
      }
      function Ha() {
        if (!arguments.length) return [];
        var e = arguments[0];
        return yp(e) ? e : [e];
      }
      function qa(e) {
        return Hn(e, ae);
      }
      function Ua(e, t) {
        return (t = "function" == typeof t ? t : X), Hn(e, ae, t);
      }
      function Fa(e) {
        return Hn(e, oe | ae);
      }
      function Wa(e, t) {
        return (t = "function" == typeof t ? t : X), Hn(e, oe | ae, t);
      }
      function za(e, t) {
        return null == t || $n(e, t, qs(t));
      }
      function $a(e, t) {
        return e === t || (e !== e && t !== t);
      }
      function Ga(e) {
        return null != e && rs(e.length) && !ts(e);
      }
      function Qa(e) {
        return os(e) && Ga(e);
      }
      function Va(e) {
        return e === !0 || e === !1 || (os(e) && mr(e) == Be);
      }
      function Ka(e) {
        return os(e) && 1 === e.nodeType && !ds(e);
      }
      function Ya(e) {
        if (null == e) return !0;
        if (
          Ga(e) &&
          (yp(e) ||
            "string" == typeof e ||
            "function" == typeof e.splice ||
            wp(e) ||
            Tp(e) ||
            vp(e))
        )
          return !e.length;
        var t = Af(e);
        if (t == ze || t == Xe) return !e.size;
        if (Ho(e)) return !Br(e).length;
        for (var n in e) if (vl.call(e, n)) return !1;
        return !0;
      }
      function Xa(e, t) {
        return Nr(e, t);
      }
      function Ja(e, t, n) {
        n = "function" == typeof n ? n : X;
        var r = n ? n(e, t) : X;
        return r === X ? Nr(e, t, X, n) : !!r;
      }
      function Za(e) {
        if (!os(e)) return !1;
        var t = mr(e);
        return (
          t == Ue ||
          t == qe ||
          ("string" == typeof e.message && "string" == typeof e.name && !ds(e))
        );
      }
      function es(e) {
        return "number" == typeof e && Fl(e);
      }
      function ts(e) {
        if (!is(e)) return !1;
        var t = mr(e);
        return t == Fe || t == We || t == Pe || t == Ke;
      }
      function ns(e) {
        return "number" == typeof e && e == Es(e);
      }
      function rs(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= ke;
      }
      function is(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      function os(e) {
        return null != e && "object" == typeof e;
      }
      function us(e, t) {
        return e === t || Or(e, t, Eo(t));
      }
      function as(e, t, n) {
        return (n = "function" == typeof n ? n : X), Or(e, t, Eo(t), n);
      }
      function ss(e) {
        return ps(e) && e != +e;
      }
      function cs(e) {
        if (kf(e)) throw new il(ee);
        return Dr(e);
      }
      function ls(e) {
        return null === e;
      }
      function fs(e) {
        return null == e;
      }
      function ps(e) {
        return "number" == typeof e || (os(e) && mr(e) == $e);
      }
      function ds(e) {
        if (!os(e) || mr(e) != Qe) return !1;
        var t = Al(e);
        if (null === t) return !0;
        var n = vl.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && gl.call(n) == _l;
      }
      function hs(e) {
        return ns(e) && e >= -ke && e <= ke;
      }
      function gs(e) {
        return "string" == typeof e || (!yp(e) && os(e) && mr(e) == Je);
      }
      function vs(e) {
        return "symbol" == typeof e || (os(e) && mr(e) == Ze);
      }
      function ys(e) {
        return e === X;
      }
      function ms(e) {
        return os(e) && Af(e) == tt;
      }
      function ws(e) {
        return os(e) && mr(e) == nt;
      }
      function _s(e) {
        if (!e) return [];
        if (Ga(e)) return gs(e) ? Q(e) : Ii(e);
        if (Ol && e[Ol]) return B(e[Ol]());
        var t = Af(e);
        return (t == ze ? H : t == Xe ? F : Zs)(e);
      }
      function bs(e) {
        if (!e) return 0 === e ? e : 0;
        if (((e = Ts(e)), e === Ae || e === -Ae)) {
          return (e < 0 ? -1 : 1) * Ne;
        }
        return e === e ? e : 0;
      }
      function Es(e) {
        var t = bs(e),
          n = t % 1;
        return t === t ? (n ? t - n : t) : 0;
      }
      function xs(e) {
        return e ? Bn(Es(e), 0, Le) : 0;
      }
      function Ts(e) {
        if ("number" == typeof e) return e;
        if (vs(e)) return Re;
        if (is(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = is(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(Nt, "");
        var n = qt.test(e);
        return n || Ft.test(e)
          ? Yn(e.slice(2), n ? 2 : 8)
          : Ht.test(e)
          ? Re
          : +e;
      }
      function Ss(e) {
        return Mi(e, Us(e));
      }
      function Cs(e) {
        return e ? Bn(Es(e), -ke, ke) : 0 === e ? e : 0;
      }
      function As(e) {
        return null == e ? "" : di(e);
      }
      function ks(e, t) {
        var n = hf(e);
        return null == t ? n : On(n, t);
      }
      function Ns(e, t) {
        return g(e, _o(t, 3), rr);
      }
      function Rs(e, t) {
        return g(e, _o(t, 3), ir);
      }
      function Ls(e, t) {
        return null == e ? e : yf(e, _o(t, 3), Us);
      }
      function Os(e, t) {
        return null == e ? e : mf(e, _o(t, 3), Us);
      }
      function Ds(e, t) {
        return e && rr(e, _o(t, 3));
      }
      function js(e, t) {
        return e && ir(e, _o(t, 3));
      }
      function Is(e) {
        return null == e ? [] : fr(e, qs(e));
      }
      function Ms(e) {
        return null == e ? [] : fr(e, Us(e));
      }
      function Ps(e, t, n) {
        var r = null == e ? X : gr(e, t);
        return r === X ? n : r;
      }
      function Bs(e, t) {
        return null != e && Ao(e, t, _r);
      }
      function Hs(e, t) {
        return null != e && Ao(e, t, br);
      }
      function qs(e) {
        return Ga(e) ? Tn(e) : Br(e);
      }
      function Us(e) {
        return Ga(e) ? Tn(e, !0) : Hr(e);
      }
      function Fs(e, t) {
        var n = {};
        return (
          (t = _o(t, 3)),
          rr(e, function (e, r, i) {
            jn(n, t(e, r, i), e);
          }),
          n
        );
      }
      function Ws(e, t) {
        var n = {};
        return (
          (t = _o(t, 3)),
          rr(e, function (e, r, i) {
            jn(n, r, t(e, r, i));
          }),
          n
        );
      }
      function zs(e, t) {
        return $s(e, Oa(_o(t)));
      }
      function $s(e, t) {
        if (null == e) return {};
        var n = s(yo(e), function (e) {
          return [e];
        });
        return (
          (t = _o(t)),
          Kr(e, n, function (e, n) {
            return t(e, n[0]);
          })
        );
      }
      function Gs(e, t, n) {
        t = xi(t, e);
        var r = -1,
          i = t.length;
        for (i || ((i = 1), (e = X)); ++r < i; ) {
          var o = null == e ? X : e[Zo(t[r])];
          o === X && ((r = i), (o = n)), (e = ts(o) ? o.call(e) : o);
        }
        return e;
      }
      function Qs(e, t, n) {
        return null == e ? e : oi(e, t, n);
      }
      function Vs(e, t, n, r) {
        return (
          (r = "function" == typeof r ? r : X), null == e ? e : oi(e, t, n, r)
        );
      }
      function Ks(e, t, r) {
        var i = yp(e),
          o = i || wp(e) || Tp(e);
        if (((t = _o(t, 4)), null == r)) {
          var u = e && e.constructor;
          r = o ? (i ? new u() : []) : is(e) && ts(u) ? hf(Al(e)) : {};
        }
        return (
          (o ? n : rr)(e, function (e, n, i) {
            return t(r, e, n, i);
          }),
          r
        );
      }
      function Ys(e, t) {
        return null == e || gi(e, t);
      }
      function Xs(e, t, n) {
        return null == e ? e : vi(e, t, Ei(n));
      }
      function Js(e, t, n, r) {
        return (
          (r = "function" == typeof r ? r : X),
          null == e ? e : vi(e, t, Ei(n), r)
        );
      }
      function Zs(e) {
        return null == e ? [] : N(e, qs(e));
      }
      function ec(e) {
        return null == e ? [] : N(e, Us(e));
      }
      function tc(e, t, n) {
        return (
          n === X && ((n = t), (t = X)),
          n !== X && ((n = Ts(n)), (n = n === n ? n : 0)),
          t !== X && ((t = Ts(t)), (t = t === t ? t : 0)),
          Bn(Ts(e), t, n)
        );
      }
      function nc(e, t, n) {
        return (
          (t = bs(t)),
          n === X ? ((n = t), (t = 0)) : (n = bs(n)),
          (e = Ts(e)),
          Er(e, t, n)
        );
      }
      function rc(e, t, n) {
        if (
          (n && "boolean" != typeof n && jo(e, t, n) && (t = n = X),
          n === X &&
            ("boolean" == typeof t
              ? ((n = t), (t = X))
              : "boolean" == typeof e && ((n = e), (e = X))),
          e === X && t === X
            ? ((e = 0), (t = 1))
            : ((e = bs(e)), t === X ? ((t = e), (e = 0)) : (t = bs(t))),
          e > t)
        ) {
          var r = e;
          (e = t), (t = r);
        }
        if (n || e % 1 || t % 1) {
          var i = Kl();
          return Gl(e + i * (t - e + Kn("1e-" + ((i + "").length - 1))), t);
        }
        return Zr(e, t);
      }
      function ic(e) {
        return Yp(As(e).toLowerCase());
      }
      function oc(e) {
        return (e = As(e)), e && e.replace(zt, pr).replace(Mn, "");
      }
      function uc(e, t, n) {
        (e = As(e)), (t = di(t));
        var r = e.length;
        n = n === X ? r : Bn(Es(n), 0, r);
        var i = n;
        return (n -= t.length), n >= 0 && e.slice(n, i) == t;
      }
      function ac(e) {
        return (e = As(e)), e && _t.test(e) ? e.replace(mt, dr) : e;
      }
      function sc(e) {
        return (e = As(e)), e && kt.test(e) ? e.replace(At, "\\$&") : e;
      }
      function cc(e, t, n) {
        (e = As(e)), (t = Es(t));
        var r = t ? G(e) : 0;
        if (!t || r >= t) return e;
        var i = (t - r) / 2;
        return eo(Hl(i), n) + e + eo(Bl(i), n);
      }
      function lc(e, t, n) {
        (e = As(e)), (t = Es(t));
        var r = t ? G(e) : 0;
        return t && r < t ? e + eo(t - r, n) : e;
      }
      function fc(e, t, n) {
        (e = As(e)), (t = Es(t));
        var r = t ? G(e) : 0;
        return t && r < t ? eo(t - r, n) + e : e;
      }
      function pc(e, t, n) {
        return (
          n || null == t ? (t = 0) : t && (t = +t),
          Vl(As(e).replace(Rt, ""), t || 0)
        );
      }
      function dc(e, t, n) {
        return (t = (n ? jo(e, t, n) : t === X) ? 1 : Es(t)), ti(As(e), t);
      }
      function hc() {
        var e = arguments,
          t = As(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      function gc(e, t, n) {
        return (
          n && "number" != typeof n && jo(e, t, n) && (t = n = X),
          (n = n === X ? Le : n >>> 0)
            ? ((e = As(e)),
              e &&
              ("string" == typeof t || (null != t && !Ep(t))) &&
              ((t = di(t)), !t && M(e))
                ? Ti(Q(e), 0, n)
                : e.split(t, n))
            : []
        );
      }
      function vc(e, t, n) {
        return (
          (e = As(e)),
          (n = null == n ? 0 : Bn(Es(n), 0, e.length)),
          (t = di(t)),
          e.slice(n, n + t.length) == t
        );
      }
      function yc(e, t, n) {
        var r = z.templateSettings;
        n && jo(e, t, n) && (t = X), (e = As(e)), (t = Np({}, t, r, so));
        var i,
          o,
          u = Np({}, t.imports, r.imports, so),
          a = qs(u),
          s = N(u, a),
          c = 0,
          l = t.interpolate || $t,
          f = "__p += '",
          p = sl(
            (t.escape || $t).source +
              "|" +
              l.source +
              "|" +
              (l === xt ? Pt : $t).source +
              "|" +
              (t.evaluate || $t).source +
              "|$",
            "g"
          ),
          d =
            "//# sourceURL=" +
            (vl.call(t, "sourceURL")
              ? (t.sourceURL + "").replace(/\s/g, " ")
              : "lodash.templateSources[" + ++Fn + "]") +
            "\n";
        e.replace(p, function (t, n, r, u, a, s) {
          return (
            r || (r = u),
            (f += e.slice(c, s).replace(Gt, j)),
            n && ((i = !0), (f += "' +\n__e(" + n + ") +\n'")),
            a && ((o = !0), (f += "';\n" + a + ";\n__p += '")),
            r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
            (c = s + t.length),
            t
          );
        }),
          (f += "';\n");
        var h = vl.call(t, "variable") && t.variable;
        h || (f = "with (obj) {\n" + f + "\n}\n"),
          (f = (o ? f.replace(ht, "") : f)
            .replace(gt, "$1")
            .replace(vt, "$1;")),
          (f =
            "function(" +
            (h || "obj") +
            ") {\n" +
            (h ? "" : "obj || (obj = {});\n") +
            "var __t, __p = ''" +
            (i ? ", __e = _.escape" : "") +
            (o
              ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
              : ";\n") +
            f +
            "return __p\n}");
        var g = Xp(function () {
          return ol(a, d + "return " + f).apply(X, s);
        });
        if (((g.source = f), Za(g))) throw g;
        return g;
      }
      function mc(e) {
        return As(e).toLowerCase();
      }
      function wc(e) {
        return As(e).toUpperCase();
      }
      function _c(e, t, n) {
        if (((e = As(e)), e && (n || t === X))) return e.replace(Nt, "");
        if (!e || !(t = di(t))) return e;
        var r = Q(e),
          i = Q(t);
        return Ti(r, L(r, i), O(r, i) + 1).join("");
      }
      function bc(e, t, n) {
        if (((e = As(e)), e && (n || t === X))) return e.replace(Lt, "");
        if (!e || !(t = di(t))) return e;
        var r = Q(e);
        return Ti(r, 0, O(r, Q(t)) + 1).join("");
      }
      function Ec(e, t, n) {
        if (((e = As(e)), e && (n || t === X))) return e.replace(Rt, "");
        if (!e || !(t = di(t))) return e;
        var r = Q(e);
        return Ti(r, L(r, Q(t))).join("");
      }
      function xc(e, t) {
        var n = _e,
          r = be;
        if (is(t)) {
          var i = "separator" in t ? t.separator : i;
          (n = "length" in t ? Es(t.length) : n),
            (r = "omission" in t ? di(t.omission) : r);
        }
        e = As(e);
        var o = e.length;
        if (M(e)) {
          var u = Q(e);
          o = u.length;
        }
        if (n >= o) return e;
        var a = n - G(r);
        if (a < 1) return r;
        var s = u ? Ti(u, 0, a).join("") : e.slice(0, a);
        if (i === X) return s + r;
        if ((u && (a += s.length - a), Ep(i))) {
          if (e.slice(a).search(i)) {
            var c,
              l = s;
            for (
              i.global || (i = sl(i.source, As(Bt.exec(i)) + "g")),
                i.lastIndex = 0;
              (c = i.exec(l));

            )
              var f = c.index;
            s = s.slice(0, f === X ? a : f);
          }
        } else if (e.indexOf(di(i), a) != a) {
          var p = s.lastIndexOf(i);
          p > -1 && (s = s.slice(0, p));
        }
        return s + r;
      }
      function Tc(e) {
        return (e = As(e)), e && wt.test(e) ? e.replace(yt, hr) : e;
      }
      function Sc(e, t, n) {
        return (
          (e = As(e)),
          (t = n ? X : t),
          t === X ? (P(e) ? Y(e) : h(e)) : e.match(t) || []
        );
      }
      function Cc(t) {
        var n = null == t ? 0 : t.length,
          r = _o();
        return (
          (t = n
            ? s(t, function (e) {
                if ("function" != typeof e[1]) throw new ll(te);
                return [r(e[0]), e[1]];
              })
            : []),
          ni(function (r) {
            for (var i = -1; ++i < n; ) {
              var o = t[i];
              if (e(o[0], this, r)) return e(o[1], this, r);
            }
          })
        );
      }
      function Ac(e) {
        return qn(Hn(e, oe));
      }
      function kc(e) {
        return function () {
          return e;
        };
      }
      function Nc(e, t) {
        return null == e || e !== e ? t : e;
      }
      function Rc(e) {
        return e;
      }
      function Lc(e) {
        return Pr("function" == typeof e ? e : Hn(e, oe));
      }
      function Oc(e) {
        return Fr(Hn(e, oe));
      }
      function Dc(e, t) {
        return Wr(e, Hn(t, oe));
      }
      function jc(e, t, r) {
        var i = qs(t),
          o = fr(t, i);
        null != r ||
          (is(t) && (o.length || !i.length)) ||
          ((r = t), (t = e), (e = this), (o = fr(t, qs(t))));
        var u = !(is(r) && "chain" in r && !r.chain),
          a = ts(e);
        return (
          n(o, function (n) {
            var r = t[n];
            (e[n] = r),
              a &&
                (e.prototype[n] = function () {
                  var t = this.__chain__;
                  if (u || t) {
                    var n = e(this.__wrapped__);
                    return (
                      (n.__actions__ = Ii(this.__actions__)).push({
                        func: r,
                        args: arguments,
                        thisArg: e,
                      }),
                      (n.__chain__ = t),
                      n
                    );
                  }
                  return r.apply(e, c([this.value()], arguments));
                });
          }),
          e
        );
      }
      function Ic() {
        return Zn._ === this && (Zn._ = bl), this;
      }
      function Mc() {}
      function Pc(e) {
        return (
          (e = Es(e)),
          ni(function (t) {
            return Gr(t, e);
          })
        );
      }
      function Bc(e) {
        return Io(e) ? b(Zo(e)) : Yr(e);
      }
      function Hc(e) {
        return function (t) {
          return null == e ? X : gr(e, t);
        };
      }
      function qc() {
        return [];
      }
      function Uc() {
        return !1;
      }
      function Fc() {
        return {};
      }
      function Wc() {
        return "";
      }
      function zc() {
        return !0;
      }
      function $c(e, t) {
        if (((e = Es(e)), e < 1 || e > ke)) return [];
        var n = Le,
          r = Gl(e, Le);
        (t = _o(t)), (e -= Le);
        for (var i = C(r, t); ++n < e; ) t(n);
        return i;
      }
      function Gc(e) {
        return yp(e) ? s(e, Zo) : vs(e) ? [e] : Ii(Of(As(e)));
      }
      function Qc(e) {
        var t = ++yl;
        return As(e) + t;
      }
      function Vc(e) {
        return e && e.length ? Xn(e, Rc, wr) : X;
      }
      function Kc(e, t) {
        return e && e.length ? Xn(e, _o(t, 2), wr) : X;
      }
      function Yc(e) {
        return _(e, Rc);
      }
      function Xc(e, t) {
        return _(e, _o(t, 2));
      }
      function Jc(e) {
        return e && e.length ? Xn(e, Rc, qr) : X;
      }
      function Zc(e, t) {
        return e && e.length ? Xn(e, _o(t, 2), qr) : X;
      }
      function el(e) {
        return e && e.length ? S(e, Rc) : 0;
      }
      function tl(e, t) {
        return e && e.length ? S(e, _o(t, 2)) : 0;
      }
      E = null == E ? Zn : vr.defaults(Zn.Object(), E, vr.pick(Zn, Un));
      var nl = E.Array,
        rl = E.Date,
        il = E.Error,
        ol = E.Function,
        ul = E.Math,
        al = E.Object,
        sl = E.RegExp,
        cl = E.String,
        ll = E.TypeError,
        fl = nl.prototype,
        pl = ol.prototype,
        dl = al.prototype,
        hl = E["__core-js_shared__"],
        gl = pl.toString,
        vl = dl.hasOwnProperty,
        yl = 0,
        ml = (function () {
          var e = /[^.]+$/.exec((hl && hl.keys && hl.keys.IE_PROTO) || "");
          return e ? "Symbol(src)_1." + e : "";
        })(),
        wl = dl.toString,
        _l = gl.call(al),
        bl = Zn._,
        El = sl(
          "^" +
            gl
              .call(vl)
              .replace(At, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        xl = nr ? E.Buffer : X,
        Tl = E.Symbol,
        Sl = E.Uint8Array,
        Cl = xl ? xl.allocUnsafe : X,
        Al = q(al.getPrototypeOf, al),
        kl = al.create,
        Nl = dl.propertyIsEnumerable,
        Rl = fl.splice,
        Ll = Tl ? Tl.isConcatSpreadable : X,
        Ol = Tl ? Tl.iterator : X,
        Dl = Tl ? Tl.toStringTag : X,
        jl = (function () {
          try {
            var e = xo(al, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        })(),
        Il = E.clearTimeout !== Zn.clearTimeout && E.clearTimeout,
        Ml = rl && rl.now !== Zn.Date.now && rl.now,
        Pl = E.setTimeout !== Zn.setTimeout && E.setTimeout,
        Bl = ul.ceil,
        Hl = ul.floor,
        ql = al.getOwnPropertySymbols,
        Ul = xl ? xl.isBuffer : X,
        Fl = E.isFinite,
        Wl = fl.join,
        zl = q(al.keys, al),
        $l = ul.max,
        Gl = ul.min,
        Ql = rl.now,
        Vl = E.parseInt,
        Kl = ul.random,
        Yl = fl.reverse,
        Xl = xo(E, "DataView"),
        Jl = xo(E, "Map"),
        Zl = xo(E, "Promise"),
        ef = xo(E, "Set"),
        tf = xo(E, "WeakMap"),
        nf = xo(al, "create"),
        rf = tf && new tf(),
        of = {},
        uf = eu(Xl),
        af = eu(Jl),
        sf = eu(Zl),
        cf = eu(ef),
        lf = eu(tf),
        ff = Tl ? Tl.prototype : X,
        pf = ff ? ff.valueOf : X,
        df = ff ? ff.toString : X,
        hf = (function () {
          function e() {}
          return function (t) {
            if (!is(t)) return {};
            if (kl) return kl(t);
            e.prototype = t;
            var n = new e();
            return (e.prototype = X), n;
          };
        })();
      (z.templateSettings = {
        escape: bt,
        evaluate: Et,
        interpolate: xt,
        variable: "",
        imports: { _: z },
      }),
        (z.prototype = V.prototype),
        (z.prototype.constructor = z),
        (K.prototype = hf(V.prototype)),
        (K.prototype.constructor = K),
        (It.prototype = hf(V.prototype)),
        (It.prototype.constructor = It),
        (Yt.prototype.clear = Xt),
        (Yt.prototype.delete = Jt),
        (Yt.prototype.get = Zt),
        (Yt.prototype.has = en),
        (Yt.prototype.set = tn),
        (nn.prototype.clear = rn),
        (nn.prototype.delete = on),
        (nn.prototype.get = un),
        (nn.prototype.has = an),
        (nn.prototype.set = sn),
        (cn.prototype.clear = ln),
        (cn.prototype.delete = fn),
        (cn.prototype.get = pn),
        (cn.prototype.has = dn),
        (cn.prototype.set = hn),
        (gn.prototype.add = gn.prototype.push = vn),
        (gn.prototype.has = yn),
        (mn.prototype.clear = wn),
        (mn.prototype.delete = _n),
        (mn.prototype.get = bn),
        (mn.prototype.has = En),
        (mn.prototype.set = xn);
      var gf = Ui(rr),
        vf = Ui(ir, !0),
        yf = Fi(),
        mf = Fi(!0),
        wf = rf
          ? function (e, t) {
              return rf.set(e, t), e;
            }
          : Rc,
        _f = jl
          ? function (e, t) {
              return jl(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: kc(t),
                writable: !0,
              });
            }
          : Rc,
        bf = ni,
        Ef =
          Il ||
          function (e) {
            return Zn.clearTimeout(e);
          },
        xf =
          ef && 1 / F(new ef([, -0]))[1] == Ae
            ? function (e) {
                return new ef(e);
              }
            : Mc,
        Tf = rf
          ? function (e) {
              return rf.get(e);
            }
          : Mc,
        Sf = ql
          ? function (e) {
              return null == e
                ? []
                : ((e = al(e)),
                  o(ql(e), function (t) {
                    return Nl.call(e, t);
                  }));
            }
          : qc,
        Cf = ql
          ? function (e) {
              for (var t = []; e; ) c(t, Sf(e)), (e = Al(e));
              return t;
            }
          : qc,
        Af = mr;
      ((Xl && Af(new Xl(new ArrayBuffer(1))) != it) ||
        (Jl && Af(new Jl()) != ze) ||
        (Zl && Af(Zl.resolve()) != Ve) ||
        (ef && Af(new ef()) != Xe) ||
        (tf && Af(new tf()) != tt)) &&
        (Af = function (e) {
          var t = mr(e),
            n = t == Qe ? e.constructor : X,
            r = n ? eu(n) : "";
          if (r)
            switch (r) {
              case uf:
                return it;
              case af:
                return ze;
              case sf:
                return Ve;
              case cf:
                return Xe;
              case lf:
                return tt;
            }
          return t;
        });
      var kf = hl ? ts : Uc,
        Nf = Xo(wf),
        Rf =
          Pl ||
          function (e, t) {
            return Zn.setTimeout(e, t);
          },
        Lf = Xo(_f),
        Of = Fo(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(Ct, function (e, n, r, i) {
              t.push(r ? i.replace(Mt, "$1") : n || e);
            }),
            t
          );
        }),
        Df = ni(function (e, t) {
          return Qa(e) ? Qn(e, tr(t, 1, Qa, !0)) : [];
        }),
        jf = ni(function (e, t) {
          var n = bu(t);
          return (
            Qa(n) && (n = X), Qa(e) ? Qn(e, tr(t, 1, Qa, !0), _o(n, 2)) : []
          );
        }),
        If = ni(function (e, t) {
          var n = bu(t);
          return Qa(n) && (n = X), Qa(e) ? Qn(e, tr(t, 1, Qa, !0), X, n) : [];
        }),
        Mf = ni(function (e) {
          var t = s(e, bi);
          return t.length && t[0] === e[0] ? xr(t) : [];
        }),
        Pf = ni(function (e) {
          var t = bu(e),
            n = s(e, bi);
          return (
            t === bu(n) ? (t = X) : n.pop(),
            n.length && n[0] === e[0] ? xr(n, _o(t, 2)) : []
          );
        }),
        Bf = ni(function (e) {
          var t = bu(e),
            n = s(e, bi);
          return (
            (t = "function" == typeof t ? t : X),
            t && n.pop(),
            n.length && n[0] === e[0] ? xr(n, X, t) : []
          );
        }),
        Hf = ni(Tu),
        qf = go(function (e, t) {
          var n = null == e ? 0 : e.length,
            r = Pn(e, t);
          return (
            Jr(
              e,
              s(t, function (e) {
                return Do(e, n) ? +e : e;
              }).sort(Li)
            ),
            r
          );
        }),
        Uf = ni(function (e) {
          return hi(tr(e, 1, Qa, !0));
        }),
        Ff = ni(function (e) {
          var t = bu(e);
          return Qa(t) && (t = X), hi(tr(e, 1, Qa, !0), _o(t, 2));
        }),
        Wf = ni(function (e) {
          var t = bu(e);
          return (
            (t = "function" == typeof t ? t : X), hi(tr(e, 1, Qa, !0), X, t)
          );
        }),
        zf = ni(function (e, t) {
          return Qa(e) ? Qn(e, t) : [];
        }),
        $f = ni(function (e) {
          return wi(o(e, Qa));
        }),
        Gf = ni(function (e) {
          var t = bu(e);
          return Qa(t) && (t = X), wi(o(e, Qa), _o(t, 2));
        }),
        Qf = ni(function (e) {
          var t = bu(e);
          return (t = "function" == typeof t ? t : X), wi(o(e, Qa), X, t);
        }),
        Vf = ni(Gu),
        Kf = ni(function (e) {
          var t = e.length,
            n = t > 1 ? e[t - 1] : X;
          return (n = "function" == typeof n ? (e.pop(), n) : X), Qu(e, n);
        }),
        Yf = go(function (e) {
          var t = e.length,
            n = t ? e[0] : 0,
            r = this.__wrapped__,
            i = function (t) {
              return Pn(t, e);
            };
          return !(t > 1 || this.__actions__.length) && r instanceof It && Do(n)
            ? ((r = r.slice(n, +n + (t ? 1 : 0))),
              r.__actions__.push({ func: Ju, args: [i], thisArg: X }),
              new K(r, this.__chain__).thru(function (e) {
                return t && !e.length && e.push(X), e;
              }))
            : this.thru(i);
        }),
        Xf = Hi(function (e, t, n) {
          vl.call(e, n) ? ++e[n] : jn(e, n, 1);
        }),
        Jf = Vi(fu),
        Zf = Vi(pu),
        ep = Hi(function (e, t, n) {
          vl.call(e, n) ? e[n].push(t) : jn(e, n, [t]);
        }),
        tp = ni(function (t, n, r) {
          var i = -1,
            o = "function" == typeof n,
            u = Ga(t) ? nl(t.length) : [];
          return (
            gf(t, function (t) {
              u[++i] = o ? e(n, t, r) : Sr(t, n, r);
            }),
            u
          );
        }),
        np = Hi(function (e, t, n) {
          jn(e, n, t);
        }),
        rp = Hi(
          function (e, t, n) {
            e[n ? 0 : 1].push(t);
          },
          function () {
            return [[], []];
          }
        ),
        ip = ni(function (e, t) {
          if (null == e) return [];
          var n = t.length;
          return (
            n > 1 && jo(e, t[0], t[1])
              ? (t = [])
              : n > 2 && jo(t[0], t[1], t[2]) && (t = [t[0]]),
            Qr(e, tr(t, 1), [])
          );
        }),
        op =
          Ml ||
          function () {
            return Zn.Date.now();
          },
        up = ni(function (e, t, n) {
          var r = le;
          if (n.length) {
            var i = U(n, wo(up));
            r |= ge;
          }
          return ao(e, r, t, n, i);
        }),
        ap = ni(function (e, t, n) {
          var r = le | fe;
          if (n.length) {
            var i = U(n, wo(ap));
            r |= ge;
          }
          return ao(t, r, e, n, i);
        }),
        sp = ni(function (e, t) {
          return Gn(e, 1, t);
        }),
        cp = ni(function (e, t, n) {
          return Gn(e, Ts(t) || 0, n);
        });
      La.Cache = cn;
      var lp = bf(function (t, n) {
          n =
            1 == n.length && yp(n[0]) ? s(n[0], k(_o())) : s(tr(n, 1), k(_o()));
          var r = n.length;
          return ni(function (i) {
            for (var o = -1, u = Gl(i.length, r); ++o < u; )
              i[o] = n[o].call(this, i[o]);
            return e(t, this, i);
          });
        }),
        fp = ni(function (e, t) {
          return ao(e, ge, X, t, U(t, wo(fp)));
        }),
        pp = ni(function (e, t) {
          return ao(e, ve, X, t, U(t, wo(pp)));
        }),
        dp = go(function (e, t) {
          return ao(e, me, X, X, X, t);
        }),
        hp = ro(wr),
        gp = ro(function (e, t) {
          return e >= t;
        }),
        vp = Cr(
          (function () {
            return arguments;
          })()
        )
          ? Cr
          : function (e) {
              return os(e) && vl.call(e, "callee") && !Nl.call(e, "callee");
            },
        yp = nl.isArray,
        mp = or ? k(or) : Ar,
        wp = Ul || Uc,
        _p = ur ? k(ur) : kr,
        bp = ar ? k(ar) : Lr,
        Ep = sr ? k(sr) : jr,
        xp = cr ? k(cr) : Ir,
        Tp = lr ? k(lr) : Mr,
        Sp = ro(qr),
        Cp = ro(function (e, t) {
          return e <= t;
        }),
        Ap = qi(function (e, t) {
          if (Ho(t) || Ga(t)) return Mi(t, qs(t), e), X;
          for (var n in t) vl.call(t, n) && Nn(e, n, t[n]);
        }),
        kp = qi(function (e, t) {
          Mi(t, Us(t), e);
        }),
        Np = qi(function (e, t, n, r) {
          Mi(t, Us(t), e, r);
        }),
        Rp = qi(function (e, t, n, r) {
          Mi(t, qs(t), e, r);
        }),
        Lp = go(Pn),
        Op = ni(function (e, t) {
          e = al(e);
          var n = -1,
            r = t.length,
            i = r > 2 ? t[2] : X;
          for (i && jo(t[0], t[1], i) && (r = 1); ++n < r; )
            for (var o = t[n], u = Us(o), a = -1, s = u.length; ++a < s; ) {
              var c = u[a],
                l = e[c];
              (l === X || ($a(l, dl[c]) && !vl.call(e, c))) && (e[c] = o[c]);
            }
          return e;
        }),
        Dp = ni(function (t) {
          return t.push(X, co), e(Bp, X, t);
        }),
        jp = Xi(function (e, t, n) {
          null != t && "function" != typeof t.toString && (t = wl.call(t)),
            (e[t] = n);
        }, kc(Rc)),
        Ip = Xi(function (e, t, n) {
          null != t && "function" != typeof t.toString && (t = wl.call(t)),
            vl.call(e, t) ? e[t].push(n) : (e[t] = [n]);
        }, _o),
        Mp = ni(Sr),
        Pp = qi(function (e, t, n) {
          zr(e, t, n);
        }),
        Bp = qi(function (e, t, n, r) {
          zr(e, t, n, r);
        }),
        Hp = go(function (e, t) {
          var n = {};
          if (null == e) return n;
          var r = !1;
          (t = s(t, function (t) {
            return (t = xi(t, e)), r || (r = t.length > 1), t;
          })),
            Mi(e, yo(e), n),
            r && (n = Hn(n, oe | ue | ae, lo));
          for (var i = t.length; i--; ) gi(n, t[i]);
          return n;
        }),
        qp = go(function (e, t) {
          return null == e ? {} : Vr(e, t);
        }),
        Up = uo(qs),
        Fp = uo(Us),
        Wp = $i(function (e, t, n) {
          return (t = t.toLowerCase()), e + (n ? ic(t) : t);
        }),
        zp = $i(function (e, t, n) {
          return e + (n ? "-" : "") + t.toLowerCase();
        }),
        $p = $i(function (e, t, n) {
          return e + (n ? " " : "") + t.toLowerCase();
        }),
        Gp = zi("toLowerCase"),
        Qp = $i(function (e, t, n) {
          return e + (n ? "_" : "") + t.toLowerCase();
        }),
        Vp = $i(function (e, t, n) {
          return e + (n ? " " : "") + Yp(t);
        }),
        Kp = $i(function (e, t, n) {
          return e + (n ? " " : "") + t.toUpperCase();
        }),
        Yp = zi("toUpperCase"),
        Xp = ni(function (t, n) {
          try {
            return e(t, X, n);
          } catch (e) {
            return Za(e) ? e : new il(e);
          }
        }),
        Jp = go(function (e, t) {
          return (
            n(t, function (t) {
              (t = Zo(t)), jn(e, t, up(e[t], e));
            }),
            e
          );
        }),
        Zp = Ki(),
        ed = Ki(!0),
        td = ni(function (e, t) {
          return function (n) {
            return Sr(n, e, t);
          };
        }),
        nd = ni(function (e, t) {
          return function (n) {
            return Sr(e, n, t);
          };
        }),
        rd = Zi(s),
        id = Zi(i),
        od = Zi(p),
        ud = no(),
        ad = no(!0),
        sd = Ji(function (e, t) {
          return e + t;
        }, 0),
        cd = oo("ceil"),
        ld = Ji(function (e, t) {
          return e / t;
        }, 1),
        fd = oo("floor"),
        pd = Ji(function (e, t) {
          return e * t;
        }, 1),
        dd = oo("round"),
        hd = Ji(function (e, t) {
          return e - t;
        }, 0);
      return (
        (z.after = Ta),
        (z.ary = Sa),
        (z.assign = Ap),
        (z.assignIn = kp),
        (z.assignInWith = Np),
        (z.assignWith = Rp),
        (z.at = Lp),
        (z.before = Ca),
        (z.bind = up),
        (z.bindAll = Jp),
        (z.bindKey = ap),
        (z.castArray = Ha),
        (z.chain = Yu),
        (z.chunk = ru),
        (z.compact = iu),
        (z.concat = ou),
        (z.cond = Cc),
        (z.conforms = Ac),
        (z.constant = kc),
        (z.countBy = Xf),
        (z.create = ks),
        (z.curry = Aa),
        (z.curryRight = ka),
        (z.debounce = Na),
        (z.defaults = Op),
        (z.defaultsDeep = Dp),
        (z.defer = sp),
        (z.delay = cp),
        (z.difference = Df),
        (z.differenceBy = jf),
        (z.differenceWith = If),
        (z.drop = uu),
        (z.dropRight = au),
        (z.dropRightWhile = su),
        (z.dropWhile = cu),
        (z.fill = lu),
        (z.filter = aa),
        (z.flatMap = sa),
        (z.flatMapDeep = ca),
        (z.flatMapDepth = la),
        (z.flatten = du),
        (z.flattenDeep = hu),
        (z.flattenDepth = gu),
        (z.flip = Ra),
        (z.flow = Zp),
        (z.flowRight = ed),
        (z.fromPairs = vu),
        (z.functions = Is),
        (z.functionsIn = Ms),
        (z.groupBy = ep),
        (z.initial = wu),
        (z.intersection = Mf),
        (z.intersectionBy = Pf),
        (z.intersectionWith = Bf),
        (z.invert = jp),
        (z.invertBy = Ip),
        (z.invokeMap = tp),
        (z.iteratee = Lc),
        (z.keyBy = np),
        (z.keys = qs),
        (z.keysIn = Us),
        (z.map = ha),
        (z.mapKeys = Fs),
        (z.mapValues = Ws),
        (z.matches = Oc),
        (z.matchesProperty = Dc),
        (z.memoize = La),
        (z.merge = Pp),
        (z.mergeWith = Bp),
        (z.method = td),
        (z.methodOf = nd),
        (z.mixin = jc),
        (z.negate = Oa),
        (z.nthArg = Pc),
        (z.omit = Hp),
        (z.omitBy = zs),
        (z.once = Da),
        (z.orderBy = ga),
        (z.over = rd),
        (z.overArgs = lp),
        (z.overEvery = id),
        (z.overSome = od),
        (z.partial = fp),
        (z.partialRight = pp),
        (z.partition = rp),
        (z.pick = qp),
        (z.pickBy = $s),
        (z.property = Bc),
        (z.propertyOf = Hc),
        (z.pull = Hf),
        (z.pullAll = Tu),
        (z.pullAllBy = Su),
        (z.pullAllWith = Cu),
        (z.pullAt = qf),
        (z.range = ud),
        (z.rangeRight = ad),
        (z.rearg = dp),
        (z.reject = ma),
        (z.remove = Au),
        (z.rest = ja),
        (z.reverse = ku),
        (z.sampleSize = _a),
        (z.set = Qs),
        (z.setWith = Vs),
        (z.shuffle = ba),
        (z.slice = Nu),
        (z.sortBy = ip),
        (z.sortedUniq = Mu),
        (z.sortedUniqBy = Pu),
        (z.split = gc),
        (z.spread = Ia),
        (z.tail = Bu),
        (z.take = Hu),
        (z.takeRight = qu),
        (z.takeRightWhile = Uu),
        (z.takeWhile = Fu),
        (z.tap = Xu),
        (z.throttle = Ma),
        (z.thru = Ju),
        (z.toArray = _s),
        (z.toPairs = Up),
        (z.toPairsIn = Fp),
        (z.toPath = Gc),
        (z.toPlainObject = Ss),
        (z.transform = Ks),
        (z.unary = Pa),
        (z.union = Uf),
        (z.unionBy = Ff),
        (z.unionWith = Wf),
        (z.uniq = Wu),
        (z.uniqBy = zu),
        (z.uniqWith = $u),
        (z.unset = Ys),
        (z.unzip = Gu),
        (z.unzipWith = Qu),
        (z.update = Xs),
        (z.updateWith = Js),
        (z.values = Zs),
        (z.valuesIn = ec),
        (z.without = zf),
        (z.words = Sc),
        (z.wrap = Ba),
        (z.xor = $f),
        (z.xorBy = Gf),
        (z.xorWith = Qf),
        (z.zip = Vf),
        (z.zipObject = Vu),
        (z.zipObjectDeep = Ku),
        (z.zipWith = Kf),
        (z.entries = Up),
        (z.entriesIn = Fp),
        (z.extend = kp),
        (z.extendWith = Np),
        jc(z, z),
        (z.add = sd),
        (z.attempt = Xp),
        (z.camelCase = Wp),
        (z.capitalize = ic),
        (z.ceil = cd),
        (z.clamp = tc),
        (z.clone = qa),
        (z.cloneDeep = Fa),
        (z.cloneDeepWith = Wa),
        (z.cloneWith = Ua),
        (z.conformsTo = za),
        (z.deburr = oc),
        (z.defaultTo = Nc),
        (z.divide = ld),
        (z.endsWith = uc),
        (z.eq = $a),
        (z.escape = ac),
        (z.escapeRegExp = sc),
        (z.every = ua),
        (z.find = Jf),
        (z.findIndex = fu),
        (z.findKey = Ns),
        (z.findLast = Zf),
        (z.findLastIndex = pu),
        (z.findLastKey = Rs),
        (z.floor = fd),
        (z.forEach = fa),
        (z.forEachRight = pa),
        (z.forIn = Ls),
        (z.forInRight = Os),
        (z.forOwn = Ds),
        (z.forOwnRight = js),
        (z.get = Ps),
        (z.gt = hp),
        (z.gte = gp),
        (z.has = Bs),
        (z.hasIn = Hs),
        (z.head = yu),
        (z.identity = Rc),
        (z.includes = da),
        (z.indexOf = mu),
        (z.inRange = nc),
        (z.invoke = Mp),
        (z.isArguments = vp),
        (z.isArray = yp),
        (z.isArrayBuffer = mp),
        (z.isArrayLike = Ga),
        (z.isArrayLikeObject = Qa),
        (z.isBoolean = Va),
        (z.isBuffer = wp),
        (z.isDate = _p),
        (z.isElement = Ka),
        (z.isEmpty = Ya),
        (z.isEqual = Xa),
        (z.isEqualWith = Ja),
        (z.isError = Za),
        (z.isFinite = es),
        (z.isFunction = ts),
        (z.isInteger = ns),
        (z.isLength = rs),
        (z.isMap = bp),
        (z.isMatch = us),
        (z.isMatchWith = as),
        (z.isNaN = ss),
        (z.isNative = cs),
        (z.isNil = fs),
        (z.isNull = ls),
        (z.isNumber = ps),
        (z.isObject = is),
        (z.isObjectLike = os),
        (z.isPlainObject = ds),
        (z.isRegExp = Ep),
        (z.isSafeInteger = hs),
        (z.isSet = xp),
        (z.isString = gs),
        (z.isSymbol = vs),
        (z.isTypedArray = Tp),
        (z.isUndefined = ys),
        (z.isWeakMap = ms),
        (z.isWeakSet = ws),
        (z.join = _u),
        (z.kebabCase = zp),
        (z.last = bu),
        (z.lastIndexOf = Eu),
        (z.lowerCase = $p),
        (z.lowerFirst = Gp),
        (z.lt = Sp),
        (z.lte = Cp),
        (z.max = Vc),
        (z.maxBy = Kc),
        (z.mean = Yc),
        (z.meanBy = Xc),
        (z.min = Jc),
        (z.minBy = Zc),
        (z.stubArray = qc),
        (z.stubFalse = Uc),
        (z.stubObject = Fc),
        (z.stubString = Wc),
        (z.stubTrue = zc),
        (z.multiply = pd),
        (z.nth = xu),
        (z.noConflict = Ic),
        (z.noop = Mc),
        (z.now = op),
        (z.pad = cc),
        (z.padEnd = lc),
        (z.padStart = fc),
        (z.parseInt = pc),
        (z.random = rc),
        (z.reduce = va),
        (z.reduceRight = ya),
        (z.repeat = dc),
        (z.replace = hc),
        (z.result = Gs),
        (z.round = dd),
        (z.runInContext = d),
        (z.sample = wa),
        (z.size = Ea),
        (z.snakeCase = Qp),
        (z.some = xa),
        (z.sortedIndex = Ru),
        (z.sortedIndexBy = Lu),
        (z.sortedIndexOf = Ou),
        (z.sortedLastIndex = Du),
        (z.sortedLastIndexBy = ju),
        (z.sortedLastIndexOf = Iu),
        (z.startCase = Vp),
        (z.startsWith = vc),
        (z.subtract = hd),
        (z.sum = el),
        (z.sumBy = tl),
        (z.template = yc),
        (z.times = $c),
        (z.toFinite = bs),
        (z.toInteger = Es),
        (z.toLength = xs),
        (z.toLower = mc),
        (z.toNumber = Ts),
        (z.toSafeInteger = Cs),
        (z.toString = As),
        (z.toUpper = wc),
        (z.trim = _c),
        (z.trimEnd = bc),
        (z.trimStart = Ec),
        (z.truncate = xc),
        (z.unescape = Tc),
        (z.uniqueId = Qc),
        (z.upperCase = Kp),
        (z.upperFirst = Yp),
        (z.each = fa),
        (z.eachRight = pa),
        (z.first = yu),
        jc(
          z,
          (function () {
            var e = {};
            return (
              rr(z, function (t, n) {
                vl.call(z.prototype, n) || (e[n] = t);
              }),
              e
            );
          })(),
          { chain: !1 }
        ),
        (z.VERSION = J),
        n(
          ["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"],
          function (e) {
            z[e].placeholder = z;
          }
        ),
        n(["drop", "take"], function (e, t) {
          (It.prototype[e] = function (n) {
            n = n === X ? 1 : $l(Es(n), 0);
            var r = this.__filtered__ && !t ? new It(this) : this.clone();
            return (
              r.__filtered__
                ? (r.__takeCount__ = Gl(n, r.__takeCount__))
                : r.__views__.push({
                    size: Gl(n, Le),
                    type: e + (r.__dir__ < 0 ? "Right" : ""),
                  }),
              r
            );
          }),
            (It.prototype[e + "Right"] = function (t) {
              return this.reverse()[e](t).reverse();
            });
        }),
        n(["filter", "map", "takeWhile"], function (e, t) {
          var n = t + 1,
            r = n == Te || n == Ce;
          It.prototype[e] = function (e) {
            var t = this.clone();
            return (
              t.__iteratees__.push({ iteratee: _o(e, 3), type: n }),
              (t.__filtered__ = t.__filtered__ || r),
              t
            );
          };
        }),
        n(["head", "last"], function (e, t) {
          var n = "take" + (t ? "Right" : "");
          It.prototype[e] = function () {
            return this[n](1).value()[0];
          };
        }),
        n(["initial", "tail"], function (e, t) {
          var n = "drop" + (t ? "" : "Right");
          It.prototype[e] = function () {
            return this.__filtered__ ? new It(this) : this[n](1);
          };
        }),
        (It.prototype.compact = function () {
          return this.filter(Rc);
        }),
        (It.prototype.find = function (e) {
          return this.filter(e).head();
        }),
        (It.prototype.findLast = function (e) {
          return this.reverse().find(e);
        }),
        (It.prototype.invokeMap = ni(function (e, t) {
          return "function" == typeof e
            ? new It(this)
            : this.map(function (n) {
                return Sr(n, e, t);
              });
        })),
        (It.prototype.reject = function (e) {
          return this.filter(Oa(_o(e)));
        }),
        (It.prototype.slice = function (e, t) {
          e = Es(e);
          var n = this;
          return n.__filtered__ && (e > 0 || t < 0)
            ? new It(n)
            : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
              t !== X &&
                ((t = Es(t)), (n = t < 0 ? n.dropRight(-t) : n.take(t - e))),
              n);
        }),
        (It.prototype.takeRightWhile = function (e) {
          return this.reverse().takeWhile(e).reverse();
        }),
        (It.prototype.toArray = function () {
          return this.take(Le);
        }),
        rr(It.prototype, function (e, t) {
          var n = /^(?:filter|find|map|reject)|While$/.test(t),
            r = /^(?:head|last)$/.test(t),
            i = z[r ? "take" + ("last" == t ? "Right" : "") : t],
            o = r || /^find/.test(t);
          i &&
            (z.prototype[t] = function () {
              var t = this.__wrapped__,
                u = r ? [1] : arguments,
                a = t instanceof It,
                s = u[0],
                l = a || yp(t),
                f = function (e) {
                  var t = i.apply(z, c([e], u));
                  return r && p ? t[0] : t;
                };
              l && n && "function" == typeof s && 1 != s.length && (a = l = !1);
              var p = this.__chain__,
                d = !!this.__actions__.length,
                h = o && !p,
                g = a && !d;
              if (!o && l) {
                t = g ? t : new It(this);
                var v = e.apply(t, u);
                return (
                  v.__actions__.push({ func: Ju, args: [f], thisArg: X }),
                  new K(v, p)
                );
              }
              return h && g
                ? e.apply(this, u)
                : ((v = this.thru(f)), h ? (r ? v.value()[0] : v.value()) : v);
            });
        }),
        n(["pop", "push", "shift", "sort", "splice", "unshift"], function (e) {
          var t = fl[e],
            n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
            r = /^(?:pop|shift)$/.test(e);
          z.prototype[e] = function () {
            var e = arguments;
            if (r && !this.__chain__) {
              var i = this.value();
              return t.apply(yp(i) ? i : [], e);
            }
            return this[n](function (n) {
              return t.apply(yp(n) ? n : [], e);
            });
          };
        }),
        rr(It.prototype, function (e, t) {
          var n = z[t];
          if (n) {
            var r = n.name + "";
            vl.call(of, r) || (of[r] = []), of[r].push({ name: t, func: n });
          }
        }),
        (of[Yi(X, fe).name] = [{ name: "wrapper", func: X }]),
        (It.prototype.clone = Qt),
        (It.prototype.reverse = Vt),
        (It.prototype.value = Kt),
        (z.prototype.at = Yf),
        (z.prototype.chain = Zu),
        (z.prototype.commit = ea),
        (z.prototype.next = ta),
        (z.prototype.plant = ra),
        (z.prototype.reverse = ia),
        (z.prototype.toJSON = z.prototype.valueOf = z.prototype.value = oa),
        (z.prototype.first = z.prototype.head),
        Ol && (z.prototype[Ol] = na),
        z
      );
    },
    vr = gr();
  "function" == typeof define && "object" == typeof define.amd && define.amd
    ? ((Zn._ = vr),
      define(function () {
        return vr;
      }))
    : tr
    ? (((tr.exports = vr)._ = vr), (er._ = vr))
    : (Zn._ = vr);
}.call(this));
const e = "LIBHOOK_SELECTOR_STORE";
const t = "LIBHOOK_SELECTOR_CONN";
const n = "LIBHOOK_SELECTOR_CHAT";
const r = "LIBHOOK_SELECTOR_CONTACT";
const i = "LIBHOOK_SELECTOR_CONTACT_MODEL";
const o = "LIBHOOK_SELECTOR_BUSINESSPROFILE";
const u = "LIBHOOK_SELECTOR_WAPQUERY";
const a = "LIBHOOK_SELECTOR_GROUPMETADATA";
const s = "LIBHOOK_SELECTOR_SENDMESSAGEPROTOTYPE";
const c = "LIBHOOK_SELECTOR_MSG";
const l = "LIBHOOK_SELECTOR_MSG_MODELS";
const f = "LIBHOOK_SELECTOR_LABEL";
const p = "LIBHOOK_SELECTOR_PRESENCE";
const d = "LIBHOOK_SELECTOR_VCARD";
const h = "LIBHOOK_SELECTOR_PRESENCE_FIRST";
const g = "LIBHOOK_WEBPACK";
const v = "SHELL_LOADED_INDICATOR";
let y = {};
function m(e, t) {
  if (y[t]) {
    const n = y[t].split(".");
    return n.reduce((e, t) => e[t], e);
  }
}
const w = "REQUEST_HI";
const b = "NOTIFY_LIB_READY";
const E = "NOTIFY_NEW_CHATS";
const x = "NOTIFY_PRESENCE_CHANGE";
const T = "REQUEST_GET_USER_INFO";
const S = "REQUEST_GET_USER_GROUPS_INFO";
const C = "REQUEST_GET_USER_BUISNESS_CONTACT_INFO";
const A = "REQUEST_GET_USER_SAVED_CONTACT";
const k = "REQUEST_GET_USER_ONLY_WA_CONTACT";
const N = "REQUEST_GET_USER_BROADCAST";
const R = "REQUEST_GET_GROUP_MEMBERS";
const L = "REQUEST_GET_CHAT_MESSAGES";
const O = "REQUEST_GET_ALL_CHAT_FOR_CONTACT";
const D = "REQUEST_GET_USER_LABELS";
const j = "REQUEST_GET_LABEL_MEMBERS";
const I = "REQUEST_GET_CHATS_FOR_CONTACT_ARRAY";
const M = "REQUEST_SEND_MESSAGE";
const P = "REQUEST_SEND_REPLY_TO_MESSAGE";
const B = "REQUEST_SEND_FORWARD";
const H = "REQUEST_SEND_VCARD_TO_CONTACT";
const q = "REQUEST_SEND_LINK_PREVIEW_TO_CONTACT";
const U = "REQUEST_SEND_MESSAGE_TO_ACTIVE_CHAT";
const F = "REQUEST_ATTACH_FILE";
const W = "REQUEST_CLEAR_ATTACH_FILE";
const z = "SEND_ATTACH_FILE";
const G = "REQUEST_SEND_ATTACH_FILE_TO_ACTIVE_CHAT";
const Q = "REQUEST_SET_FILES";
const V = "REQUEST_GET_ATTACHMENTS";
const K = "CREATE_GROUP_MEMBER";
const Y = "REQUEST_PIN_UNREAD_MESSAGE";
const X = "REQUEST_UNPIN_UNREAD_MESSAGE";
const J = "REQUEST_START_CHECK_PRESENCE";
const Z = "REQUEST_STOP_CHECK_PRESENCE";
const ee = "REQUEST_SET_MODEL";
const te = "REQUEST_ENABLE_READ_RECIEPT";
const ne = "REQUEST_DISABLE_READ_RECIEPT";
const re = "REQUEST_ENABLE_TYPING_STATE";
const ie = "REQUEST_DISABLE_TYPING_STATE";
const oe = "REQUEST_START_SAVE_DELETE_CHATS";
const ue = "REQUEST_STOP_SAVE_DELETE_CHATS";
const ae = "REQUEST_SHOW_ONLINE_STATE";
const se = "REQUEST_HIDE_ONLINE_STATE";
const ce = "REQUEST_ENABLE_MEDIA_PLAYED_RECIEPT";
const le = "REQUEST_DISABLE_MEDIA_PLAYED_RECIEPT";
const fe = "REQUEST_SET_SELECTORS";
const pe = "REQUEST_ALL_CHATS_SINCE";
const de = "REQUEST_ACTIVE_CHAT_ID";
const he = "REQUEST_IS_CONTACT_BLOCKED";
function ge(e) {
  let t = 0;
  let n = [
    {
      id: "Store",
      conditions: (e) =>
        e.default && e.default.Chat && e.default.Msg ? e.default : null,
    },
    {
      id: "MediaCollection",
      conditions: (e) =>
        e.default &&
        e.default.prototype &&
        e.default.prototype.processAttachments
          ? e.default
          : null,
    },
    { id: "MediaProcess", conditions: (e) => (e.BLOB ? e : null) },
    { id: "Wap", conditions: (e) => (e.createGroup ? e : null) },
    {
      id: "ServiceWorker",
      conditions: (e) => (e.default && e.default.killServiceWorker ? e : null),
    },
    { id: "State", conditions: (e) => (e.STATE && e.STREAM ? e : null) },
    {
      id: "WapDelete",
      conditions: (e) =>
        e.sendConversationDelete && e.sendConversationDelete.length == 2
          ? e
          : null,
    },
    {
      id: "Conn",
      conditions: (e) =>
        e.default && e.default.ref && e.default.refTTL ? e.default : null,
    },
    {
      id: "WapQuery",
      conditions: (e) =>
        e.queryExist ? e : e.default && e.default.queryExist ? e.default : null,
    },
    { id: "CryptoLib", conditions: (e) => (e.decryptE2EMedia ? e : null) },
    {
      id: "OpenChat",
      conditions: (e) =>
        e.default && e.default.prototype && e.default.prototype.openChat
          ? e.default
          : null,
    },
    {
      id: "UserConstructor",
      conditions: (e) =>
        e.default &&
        e.default.prototype &&
        e.default.prototype.isServer &&
        e.default.prototype.isUser
          ? e.default
          : null,
    },
    {
      id: "SendTextMsgToChat",
      conditions: (e) => (e.sendTextMsgToChat ? e.sendTextMsgToChat : null),
    },
    { id: "SendSeen", conditions: (e) => (e.sendSeen ? e.sendSeen : null) },
    {
      id: "sendDelete",
      conditions: (e) => (e.sendDelete ? e.sendDelete : null),
    },
    {
      id: "Presence2",
      conditions: (e) =>
        e.setPresenceAvailable && e.setPresenceUnavailable ? e : null,
    },
    {
      id: "sendMsgToChat",
      conditions: (e) => (e.sendMsgToChat ? e.sendMsgToChat : null),
    },
    { id: "Vcard", conditions: (e) => (e.vcardFromContactModel ? e : null) },
    {
      id: "addAndSendMsgToChat",
      conditions: (e) => (e.addAndSendMsgToChat ? e.addAndSendMsgToChat : null),
    },
    {
      id: "MsgKey",
      conditions: (e) =>
        e.default &&
        e.default.toString &&
        e.default.toString().includes("MsgKey error: obj is null/undefined")
          ? e.default
          : null,
    },
    {
      id: "WidFactory",
      conditions: (e) =>
        e.isWidlike && e.createWid && e.createWidFromWidLike ? e : null,
    },
    {
      id: "MyStatus",
      conditions: (e) => (e.getStatus && e.setMyStatus ? e : null),
    },
    {
      id: "ChatUtil",
      conditions: function (e) {
        return e.sendClear ? e : null;
      },
    },
  ];
  let r = 0;
  try {
    for (let i in e) {
      ++r;
      let o = e[i];
      if (typeof o === "object" && o !== null) {
        n.forEach((e) => {
          if (!e.conditions || e.foundedModule) return;
          let n = e.conditions(o);
          if (n !== null) {
            t++;
            e.foundedModule = n;
          }
        });
        if (t === n.length) {
          break;
        }
      }
    }
  } catch (e) {}
  let i = n.find((e) => e.id === "Store");
  window.Store = i.foundedModule ? i.foundedModule : {};
  n.splice(n.indexOf(i), 1);
  n.forEach((e) => {
    if (e.foundedModule) {
      window.Store[e.id] = e.foundedModule;
    }
  });
  window.Store.sendMessagePrototype = function (e) {
    return window.Store.SendTextMsgToChat(this, ...arguments);
  };
  Be();
  He();
  Re.notifyLibReady();
}
function ve() {
  if (y && y[g] && y[v] && document.querySelectorAll(y[v]).length !== 0) {
    //console.log(`Shell Loaded.`);
    clearInterval(ye);
    if (typeof window[y[g]] === "function") {
      window[y[g]]([], { parasite: (e, t, n) => ge(n) }, ["parasite"]);
    } else {
      window[y[g]].push([
        ["parasite"],
        {},
        function (e, t, n) {
          for (var r in ((t = []), e.m)) t.push(e(r));
          ge(t);
        },
      ]);
    }
  }
}
let ye = setInterval(ve, 1e3);
const me = "INSTANCE_TYPE_CONTENT";
const we = "INSTANCE_TYPE_LIB";
function _e() {
  return `${Date.now()}${Math.floor(Math.random() * 1e4 + 1)}`;
}
class be {
  constructor(e, t) {
    this.subject = e;
    this.payload = t;
    this.id = _e();
  }
}
class Ee {
  constructor(e, t) {
    this.subject = e.subject;
    this.id = e.id;
    this.payload = e.payload;
    this.response = t;
  }
}
class xe {
  constructor(e, t) {
    this.subject = e.subject;
    this.id = e.id;
    this.payload = e.payload;
    this.error = t.message || "Error";
  }
}
function Te(e, t) {
  const n = "contentToLibHook";
  const r = "libHookToContent";
  const i = new Map();
  let o = null;
  let u = null;
  function a() {
    if (e === me) {
      s();
    } else {
      c();
    }
  }
  a();
  function s() {
    _(document.body, n);
    _(document.body, r);
    const e = document.querySelector(`#${r} `);
    if (e) {
      w(e, l);
    } else {
      throw new Error("Unable to find Libhook Div");
    }
  }
  function c() {
    const e = v();
    if (e) {
      w(e, l);
    } else {
      throw new Error("Unable to find Content to Lib Hook");
    }
  }
  function l(e, t) {
    e.filter((e) => e.addedNodes.length).forEach((e) => {
      e.addedNodes.forEach(async (e) => {
        const t = y(e);
        if (t.hasOwnProperty("error")) {
          d(t);
        } else if (t.hasOwnProperty("response")) {
          p(t);
        } else if (t) {
          f(t);
        }
      });
    });
  }
  async function f(e) {
    t(e);
  }
  async function p(e) {
    if (e) {
      const t = i.get(e.id);
      if (t && t.resolve) {
        i.delete(e.id);
        t.resolve(e.response);
      } else {
        console.warn(
          `No Resolve Call back found for message: ${e.id} ${e.subject} `
        );
      }
    }
  }
  async function d(e) {
    if (e) {
      const t = i.get(e.id);
      if (t && t.reject) {
        i.delete(e.id);
        t.reject(e.error);
      } else {
        console.warn(
          `No Reject Call back found for message: ${e.id} ${e.subject} `
        );
      }
    }
  }
  function h(e, t) {
    _(e, t.id, t);
  }
  function g() {
    if (!u) {
      u = document.querySelector(`#${r} `);
    }
    return u;
  }
  function v() {
    if (!o) {
      o = document.querySelector(`#${n} `);
    }
    return o;
  }
  function y(e) {
    if (e) {
      const t = m(e);
      e.parentNode.removeChild(e);
      return t;
    }
  }
  function m(e) {
    return JSON.parse(e.value);
  }
  function w(e, t) {
    const n =
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver;
    const r = { attributes: true, childList: true, subtree: true };
    const i = new n(t);
    i.observe(e, r);
  }
  function _(e, t, n = null) {
    if (e) {
      if (t) {
        const r = document.createElement("input");
        r.id = t;
        r.style.display = "none";
        r.value = JSON.stringify(n);
        e.appendChild(r);
      } else {
        throw new Error("Missing Id");
      }
    } else {
      throw new Error("Missing ParentNode");
    }
  }
  function b(t, n) {
    if (e === me) {
      h(v(), new Ee(t, n));
    } else {
      h(g(), new Ee(t, n));
    }
  }
  function E(t, n) {
    if (e === me) {
      h(v(), new xe(t, n));
    } else {
      h(g(), new xe(t, n));
    }
  }
  function x(t, n) {
    if (n) {
      i.set(t.id, n);
    } else {
      console.warn(
        `No CallBacks Object found for message: ${t.id} ${t.subject} `
      );
    }
    if (e === me) {
      h(v(), t);
    } else {
      h(g(), t);
    }
  }
  function T(t) {
    if (e === me) {
      h(v(), t);
    } else {
      h(g(), t);
    }
  }
  return { sendRequest: x, sendResponse: b, sendError: E, sendNotification: T };
}
function Se() {
  let e = {};
  const t = 2e3;
  const r = 2e3;
  let i = _.debounce(d, t);
  function o() {
    a();
  }
  function u() {
    return Oe.getPinUnreadChats();
  }
  function a() {
    m(window, c).on("add", p);
    m(window, c).on("change:ack", p);
  }
  function s() {
    f();
  }
  function l() {
    m(window, h).off("change:isOnline");
  }
  function f() {
    m(window, h).on("change:isOnline", function (e, t) {
      if (e) {
        const n = We(e.id._serialized);
        if (n) {
          Re.notifyPresenceChange({ contact: n, isOnline: t });
        }
      }
    });
  }
  function p(t) {
    const n = xt(t);
    if (t.isNewMsg) {
      if (!t.isSentByMe) {
        e[n.messageId] = n;
        g(n);
        i();
      }
    }
  }
  function d() {
    const t = [];
    Object.keys(e).forEach((n) => t.push(e[n]));
    e = {};
    Re.notifyNewChats(t.filter((e) => e.type === "chat"));
  }
  function g(e) {
    const t = Le.getInspectChats();
    t.push(e);
    Le.setInspectChats(t);
  }
  function v() {
    m(window, n).on("change:unreadCount", w);
  }
  function y() {
    m(window, n).off("change:unreadCount");
  }
  function w(e) {
    const t = e.hasUnread;
    if (!t) {
      e.t = e.toriginal || e.t;
    } else {
      e.toriginal = e.t;
    }
    console.log("onunreadcountchange");
    It();
  }
  function b() {
    m(window, c).on("change:msgKey", E);
  }
  function E(e) {
    let t = Le.getInspectChats();
    deletedChat = t.filter((t) => t.messageId === e.oldKey._serialized);
    let n = Le.getDeletedChats();
    deletedChatsObject = St(deletedChat, e.newKey._serialized);
    n.push(deletedChatsObject);
    Le.setDeletedChats(n);
    jt(deletedChatsObject);
  }
  function x() {
    m(window, c).off("change:msgKey");
  }
  function T() {
    m(window, n).on("change:active", (e, t) => {
      if (t) {
        e.unreadCount = 0;
      }
    });
  }
  function S() {
    m(window, n).off("change:active");
  }
  function C() {}
  o();
  return {
    cleanup: C,
    addPresenceListener: s,
    removePresenceListner: l,
    addUnreadCountListener: v,
    removeUnreadCountListener: y,
    addDeleteChatListener: b,
    removeDeleteChatListener: x,
    addActiveChatListener: T,
    removeActiveChatListener: S,
  };
}
function Ce() {
  let e = null;
  let t = null;
  let n = null;
  function r() {
    i(window.Store.WapQuery.sendChatstateComposing);
    o(window.Store.WapQuery.sendConversationSeen);
    u(window.Store.WapQuery.sendMessagePlayed);
  }
  function i(t) {
    e = t;
  }
  function o(e) {
    t = e;
  }
  function u(e) {
    n = e;
  }
  function a() {
    return e;
  }
  function s() {
    return t;
  }
  function c() {
    return n;
  }
  function l() {
    return new Promise();
  }
  function f() {
    window.Store.WapQuery.sendConversationSeen = s();
  }
  function p() {
    window.Store.WapQuery.sendConversationSeen = l();
  }
  function d() {
    window.Store.WapQuery.sendChatstateComposing = a();
  }
  function h() {
    window.Store.WapQuery.sendChatstateComposing = l();
  }
  function g() {
    window.Store.WapQuery.sendMessagePlayed = c();
  }
  function v() {
    window.Store.WapQuery.sendMessagePlayed = l();
  }
  r();
  return {
    enableReadReciept: f,
    disableReadReciept: p,
    enableTypingState: d,
    disableTypingState: h,
    enableMediaPlayedReciept: g,
    disableMediaPlayedReciept: v,
  };
}
function Ae() {
  const e = Te(we, t);
  e.sendNotification(new be(w));
  async function t(t) {
    switch (t.subject) {
      case w: {
        e.sendResponse(t, "HELLO");
        break;
      }
      case T: {
        try {
          const n = await Ue();
          e.sendResponse(t, n);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case ee: {
        try {
          Pe(t.payload);
          e.sendResponse(t, "Model Set");
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case S: {
        try {
          const n = Fe();
          e.sendResponse(t, n);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case C: {
        try {
          const n = Ge();
          e.sendResponse(t, n);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case A: {
        try {
          const n = ze();
          e.sendResponse(t, n);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case k: {
        try {
          const n = $e();
          e.sendResponse(t, n);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case N: {
        try {
          const n = Qe();
          e.sendResponse(t, n);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case R: {
        try {
          const n = t.payload;
          const r = await Ke(n);
          e.sendResponse(t, r);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case L: {
        try {
          const n = t.payload;
          const r = getContactChats(n);
          e.sendResponse(t, r);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case O: {
        try {
          const n = t.payload;
          const r = await tt(n);
          e.sendResponse(t, r);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case U: {
        try {
          const n = t.payload;
          let r = await rt(n);
          e.sendResponse(t, r);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case P: {
        try {
          const n = t.payload;
          let r = await ot(n);
          e.sendResponse(t, r);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case B: {
        try {
          const n = t.payload;
          let r = await ut(n);
          e.sendResponse(t, r);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case q: {
        try {
          linkInfoObject = t.payload;
          let n = await Ze(linkInfoObject);
          e.sendResponse(t, n);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case G: {
        try {
          const n = t.payload;
          let r = await it(n);
          console.log(r);
          e.sendResponse(t, r);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case z: {
        try {
          const n = t.payload;
          let r = await lt(n);
          console.log(r);
          e.sendResponse(t, r);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case F: {
        try {
          let n = await Nt();
          console.log(n);
          e.sendResponse(t, n);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case W: {
        try {
          let n = Ct();
          e.sendResponse(t, n);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case Y: {
        try {
          Pt();
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case X: {
        try {
          Bt();
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case J: {
        try {
          Ht();
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case Z: {
        try {
          qt();
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case te: {
        try {
          Ut();
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case ne: {
        try {
          Ft();
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case re: {
        try {
          Wt();
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case ie: {
        try {
          zt();
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case ae: {
        try {
          Qt();
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case se: {
        try {
          Vt();
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case ce: {
        try {
          Yt();
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case le: {
        try {
          Kt();
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case V: {
        e.sendResponse(t, je);
        break;
      }
      case D: {
        try {
          let n = await pt();
          e.sendResponse(t, n);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case j: {
        try {
          labelName = t.payload;
          let n = await dt(labelName);
          e.sendResponse(t, n);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case oe: {
        try {
          $t();
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case ue: {
        try {
          Gt();
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case I: {
        try {
          const n = t.payload;
          let r = getAllChatsForContactsArray(n);
          e.sendResponse(t, r);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case Q: {
        try {
          je = t.payload;
          At(je);
          e.sendResponse(t, "");
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case fe: {
        try {
          y = t.payload;
          e.sendResponse(t, "");
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case de: {
        try {
          let n = wt();
          e.sendResponse(t, n);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
      case he: {
        try {
          let n = yt(t.payload);
          e.sendResponse(t, n);
        } catch (n) {
          console.log(n);
          e.sendError(t, n);
        }
        break;
      }
    }
  }
  function n() {
    e.sendNotification(new be(b));
  }
  function r(t) {
    e.sendNotification(new be(E, t));
  }
  function i(t, n) {
    e.sendNotification(new be(x, { contact: t, status: n }));
  }
  return { notifyLibReady: n, notifyNewChats: r, notifyPresenceChange: i };
}
function ke() {
  let e = false;
  let t = false;
  let n = true;
  let r = true;
  let i = false;
  let o = false;
  let u = false;
  function a() {
    return e;
  }
  function s(t) {
    e = t;
  }
  function c() {
    return t;
  }
  function l(e) {
    t = e;
  }
  function f() {
    return n;
  }
  function p(e) {
    n = e;
  }
  function d() {
    return r;
  }
  function h(e) {
    r = e;
  }
  function g(e) {
    i = e;
  }
  function v() {
    return i;
  }
  function y(e) {
    o = e;
  }
  function m() {
    return o;
  }
  function w(e) {
    u = e;
  }
  function _() {
    return u;
  }
  function b(a) {
    e = a.pinUnreadChats || false;
    t = a.presenceCheck || false;
    i = a.saveDeleteChats || false;
    o = a.hideOnlineState || false;
    u = a.disableMediaPlayedReciept || false;
    n = a.readReciept != null ? a.readReciept : true;
    r = a.typingState != null ? a.typingState : true;
  }
  return {
    setModel: b,
    getPinUnreadChats: a,
    setPinUnreadChats: s,
    getPresenceCheck: c,
    setPresenceCheck: l,
    getReadReciept: f,
    setReadReciept: p,
    getTypingState: d,
    setTypingState: h,
    getSaveDeleteChats: v,
    setSaveDeleteChats: g,
    setHideOnlineState: y,
    getHideOnlineState: m,
    setMediaPlayedReciept: w,
    getMediaPlayedReciept: _,
  };
}
function Ne() {
  const e = "KEY_ATTACHMENTS";
  const t = "KEY_DELETED_CHATS";
  function n() {
    return `${window?.Store?.Conn?._serialized}_INSPECTED_MESSAGE`;
  }
  function r(e, t) {
    window.localStorage.setItem(e, t);
  }
  function i(e) {
    return window.localStorage.getItem(e);
  }
  function o() {
    const e = i(t);
    return e ? JSON.parse(e) : [];
  }
  function u(e) {
    r(t, e ? JSON.stringify(e) : null);
  }
  function a(e) {
    const t = n();
    r(t, e ? JSON.stringify(e) : null);
  }
  function s() {
    const e = n();
    const t = i(e);
    return t ? JSON.parse(t) : [];
  }
  function c() {
    const t = i(e);
    return t ? JSON.parse(t) : [];
  }
  function l(t) {
    r(e, t ? JSON.stringify(t) : null);
  }
  return {
    getAttachments: c,
    setAttachments: l,
    setInspectChats: a,
    getInspectChats: s,
    getDeletedChats: o,
    setDeletedChats: u,
  };
}
const Re = Ae();
const Le = Ne();
let Oe = ke();
let De = null;
let je = Le.getAttachments();
let Ie = null;
let Me = null;
function Pe(e) {
  Oe.setModel(e);
  kt();
  Xt();
}
function Be() {
  Ie = Ie || Se();
}
function He() {
  De = De || Ce();
}
async function qe() {
  if (m(window, r)) {
    const e = await m(window, r)._models.find((e) => e.isMe);
    return bt(e);
  } else {
    throw new Error("User Not found");
  }
}
async function Ue() {
  return await qe();
}
function Fe() {
  const e = m(window, n)
    .filter((e) => e.isGroup)
    .map((e) => ({ name: e.contact.name, id: e.contact.id._serialized }));
  if (e.length > 0) {
    return e;
  } else {
    return "No Group Found";
  }
}
function We(e) {
  const t = m(window, r).get(e);
  return t ? Et(t) : null;
}
function ze() {
  const e = m(window, i)
    .filter((e) => e.isMyContact)
    .map((e) => Et(e));
  if (e.length > 0) {
    return e;
  } else {
    return "No Saved Contact Found";
  }
}
function $e() {
  const e = m(window, i)
    .filter((e) => e.isWAContact && !e.isMyContact)
    .map((e) => Et(e));
  if (e.length > 0) {
    return e;
  } else {
    return "No contacts";
  }
}
function Ge() {
  const e = Object.entries(m(window, o));
  const t = e[1][1];
  const n = [];
  t.map((e) => n.push({ id: e.id._serialized }));
  if (n.length > 0) {
    return n;
  } else {
    return "No Buisness Contact";
  }
}
function Qe() {
  const e = m(window, n)
    .filter((e) => e.isBroadcast)
    .map((e) => ({ name: e.contact.name, id: e.id._serialized }));
  if (e.length > 0) {
    return e;
  } else {
    return "No Broadcast channel found";
  }
}
function Ve(e) {
  let t = null;
  if (!Array.isArray(e)) {
    t = e.split(" ");
  } else {
    t = e;
  }
  return t.map((e) => `${e}@c.us`);
}
async function Ke(e) {
  const t = await Je(e);
  return t;
}
async function Ye(e) {
  let t = m(window, a).find(e);
  if (t !== undefined) {
    if (t.stale) {
      await t.update();
    }
  }
  return t;
}
async function Xe(e) {
  const t = await Ye(e);
  return t.participants._models;
}
async function Je(e) {
  const t = (await Xe(e)).map((e) => Et(e.contact));
  return t;
}
async function Ze(t) {
  const n = gt(t.phoneNumber);
  const r = await et(t.link);
  if (r) {
    const t = await m(window, e).SendTextMsgToChat(n, r.canonicalUrl, {
      linkPreview: r,
    });
    if (t === "OK") {
      return "Link with link preview Send";
    } else {
      throw new Error("Link not Send");
    }
  }
}
async function et(e) {
  if (e) {
    const t = await m(window, u).queryLinkPreview(e);
    if (t) {
      return {
        canonicalUrl: t.canonicalUrl,
        matchedText: t.canonicalUrl,
        compose: true,
        title: t.title,
        thumbnail: t.thumbnail,
      };
    } else {
      throw new Error("Preview generation failed . Plz Try Again");
    }
  } else {
    throw new Error("No link Provided");
  }
}
async function tt(e, t, n) {
  let r = [];
  const i = gt(e);
  let o = Et(gt(e).contact).displayName;
  let u = true;
  const a = i.msgs._models.map((e) => xt(e));
  if (a && a.length) {
    r = a.filter((e) => e.timestamp > t && e.timestamp < n);
    if (a[0].timestamp < t && i.msgs.msgLoadState.isLoadingEarlierMsgs) {
      u = false;
    }
  }
  while (u) {
    const e = await nt(i);
    if (e && e.length > 0) {
      if (e[0].timestamp < t) {
        u = false;
      }
      const i = e.filter((e) => e.timestamp > t && e.timestamp < n);
      r.unshift(...i);
    } else {
      u = false;
    }
  }
  r.forEach((e) => (e.name = o));
  return r;
}
async function nt(e) {
  const t = await e.loadEarlierMsgs();
  if (t) {
    return t.map((e) => xt(e));
  }
}
async function rt(e) {
  e = e.replaceAll("&amp;", "&");
  const t = m(window, n).where({ active: true });
  if (t.length) {
    const n = await m(window, s).apply(t[0], [e]);
    if (n === "OK") {
      return "Message Sent";
    } else {
      throw new Error("Message not Send");
    }
  } else {
    throw new Error("No Active Chat");
  }
}
async function it(e) {
  const t = m(window, n).where({ active: true });
  if (t.length) {
    if (je.length) {
      for (let n = 0; n < je.length; ++n) {
        const r = await ft(
          t[0],
          Ot(je[n].base64, je[n].name),
          n === 0 ? e.caption : ""
        );
        if (r) {
        } else {
        }
      }
    } else {
      throw new Error("No Attached File. Plz Attached a File");
    }
  } else {
    throw new Error("No Contact Found");
  }
  return "done";
}
async function ot(t) {
  const r = t.messageId.split("_")[1];
  const i = m(window, n).get(r);
  const o = st(t.messageId);
  if (i) {
    if (t.reply) {
      const n = await m(window, e).SendTextMsgToChat(i, t.reply, o);
      if (n === "OK") {
        return "Reply Sent";
      } else {
        throw new Error("Reply not Send");
      }
    } else {
      throw new Error("Reply cannot be empty");
    }
  } else {
    throw new Error("No Chat Found");
  }
}
async function ut(e) {
  const t = gt(e.phoneNumber);
  const n = at(e.messageId);
  if (t) {
    try {
      await t.forwardMessages(n);
      return "Msg Forwarded";
    } catch (e) {
      return e;
    }
  } else {
    throw new Error("No Chat Found");
  }
}
function at(e) {
  const t = e.split(" ");
  if (t) {
    const e = t.map((e) => m(window, c).get(e));
    return e;
  } else {
    throw new Error("Pls Mention Message to be forwarded");
  }
}
function st(e) {
  const t = m(window, c).get(e);
  if (t) {
    const e = t.id.id;
    const n = t.from;
    return { quotedMsg: t, quotedStanzaID: e, quotedParticipant: n };
  } else {
    throw new Error("No Message found");
  }
}
function ct(e) {
  const t = new window.Store.MsgKey(Object.assign({}, m(window, l)[0].id));
  t.fromMe = true;
  t.id = (Math.random() * 1e32).toString(32).toUpperCase();
  t.remote = new window.Store.WidFactory.createWid(e);
  t._serialized = `${t.fromMe}_${t.remote}_${t.id}`;
  return t;
}
async function lt(e) {
  const t = gt(e.chatId);
  if (t) {
    if (je.length) {
      for (let n = 0; n < je.length; ++n) {
        const r = await ft(
          t,
          Ot(je[n].base64, je[n].name),
          n === 0 ? e.caption : ""
        );
        if (r) {
        } else {
        }
      }
    } else {
      throw new Error("No Attached File. Plz Attached a File");
    }
  } else {
    throw new Error("No Contact Found");
  }
  return "done";
}
async function ft(e, t, n) {
  const r = new window.Store.MediaCollection(e);
  await r.processAttachments([{ file: t }, 1], e, 1);
  console.log(r);
  const i = r._models[0];
  return await i.sendToChat(e, { caption: n });
}
async function pt() {
  const e = await m(window, f).where({});
  if (e) {
    return e.map((e) => ({
      id: e.id,
      name: e.name,
      color: e.hexColor,
      count: e.count,
    }));
  } else {
    throw new Error("No Labels found");
  }
}
function dt(e) {
  let t = [];
  let n = null;
  const i = ht(e);
  if (i.size) {
    i.forEach((e) => {
      n = m(window, r).get(e);
      t.push(Et(n));
    });
  }
  return t;
}
function ht(e) {
  let t = m(window, f).where({ name: e })[0];
  if (t) {
    let e = t.labelItemCollection._models;
    let n = new Set();
    e.forEach((e) => n.add(e.parentId));
    return n;
  } else {
    throw new Error(`Label = ${e} not defined in your system`);
  }
}
function gt(e) {
  let t = "";
  if (e.search("@") === -1) {
    t = vt(e);
  } else {
    t = e;
  }
  chat = m(window, n).get(t);
  if (chat) {
    return chat;
  } else {
    throw new Error("No Chat Found");
  }
}
function vt(e) {
  if (!!e) {
    const t = m(window, i).find(
      (t) => t.id.user.includes(e) && t.id.server === "c.us"
    );
    if (t) {
      return t.id._serialized;
    } else {
      throw new Error("No contact Found");
    }
  } else {
    throw new Error("Please provide contact number.");
  }
}
function yt(e) {
  if (!!e) {
    const t = m(window, i).find(
      (t) => t.id.user.includes(e) && t.id.server === "c.us"
    );
    if (t) {
      return t.isBlocked();
    } else {
      return false;
    }
  } else {
    throw new Error("Please provide contact number.");
  }
}
function mt(e) {
  return e.toString().substring(0, e.toString().length - 5);
}
function wt() {
  let e = m(window, n).where({ active: true });
  if (e && e.length > 0) {
    return e[0].id;
  } else {
    e = m(window, n).getActive();
    if (e) {
      return e.id;
    } else {
      return "noactivechat";
    }
  }
}
function _t(e) {
  return {
    battery: e.battery,
    is24h: e.is24h,
    locales: e.locales,
    name: e.pushname,
    sentByMe: e.isSentByMe,
    phoneNumber: mt(e.wid),
  };
}
function bt(e) {
  return {
    battery: e.battery,
    is24h: e.is24h,
    locales: e.locales,
    name: e.displayName,
    sentByMe: e.isSentByMe,
    phoneNumber: e.userid,
  };
}
function Et(e) {
  if (e === undefined) {
    return null;
  }
  return {
    id: e.id._serialized,
    userphone: e.id.user,
    formattedName: e.formattedName || e.formattedTitle,
    pushName: e.pushname,
    notifyName: e.notifyName,
    displayName: e.displayName,
    isBusiness: e.isBusiness,
    toriginal: e.toriginal || e.t,
    isBlocked: e.isBlocked(),
  };
}
function xt(e) {
  return {
    messageId: e.id._serialized,
    timestamp: e.t,
    backupTime: e.toriginal || e.t,
    isGroup: e.isGroup,
    type: e.type,
    sentByMe: e.isSentByMe,
    isNewMsg: e.isNewMsg || false,
    sender: e.from._serialized,
    reciever: e.to._serialized,
    content: e.body,
    link: e.link,
    repliedToMsg: e.quotedMsg || "",
    repliedTo: e.quotedParticipant ? e.quotedParticipant_serialized : "",
    repliedMsgId: e.quotedStanzaID || "",
    ack: e.__x_ack || "",
    name: Tt(e?.chat?.contact),
  };
}
function Tt(e) {
  const {
    formattedName: t,
    pushName: n,
    notifyName: r,
    displayName: i,
    formattedShortName: o,
    mentionName: u,
    formattedUser: a,
    name: s,
  } = e;
  const c = {
    formattedName: t,
    pushName: n,
    notifyName: r,
    displayName: i,
    formattedShortName: o,
    mentionName: u,
    formattedUser: a,
    name: s,
  };
  const l = Object.keys(c).filter((e) => c[e]);
  const f = l.find((e) =>
    c[e].replaceAll(/[\s@~`!@#$%^&*()_=+\\';:"\/?>.<,-]/g, "").match(/\D+/)
  );
  if (f) {
    return c[f];
  } else {
    if (l.length) {
      return c[l[0]].replace(/\W+/g, "");
    } else {
      return "";
    }
  }
}
function St(e, t) {
  return { ...e[0], newMessageId: t };
}
function Ct() {
  if (je) {
    je = null;
    return "File Removed";
  } else {
    throw new Error("No File Attached");
  }
}
function At(e) {
  je = e;
  Le.setAttachments(je);
}
function kt() {
  const e = m(window, c).filter(
    (e) =>
      (new Date() / 10 ** 3 - e.t) / 3600 < 1.2 &&
      (e?.sender?._serialized !== "status@broadcast" ||
        e?.from?._serialized !== "status@broadcast")
  );
  let t = [];
  t = e.map((e) => xt(e));
  Le.setInspectChats(t);
}
function Nt() {
  return new Promise((e, t) => {
    const n = $("#app");
    const r = $(
      "<div id='fileSelectionBtnWrapper' style='position: fixed; width: 100%; height: 100%; background-color: rgba(0,0,0,0.85);z-index: 11111;display: flex; flex-direction: row; align-items: center;'> <div style='display: flex; width: 100%; justify-content: center;'> <p id='fileTypeImageButton' onclick = 'onFileTypeImageClicked()' style='cursor: pointer; > <svg id='image-Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 53 53' enable-background='new 0 0 53 53' width='100' height='100'> <filter height='130%' id='image-dropshadow'> <feOffset dy='2' result='offsetblur'></feOffset> <feComponentTransfer> <feFuncA slope='.08' type='linear'></feFuncA> </feComponentTransfer> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in='SourceGraphic'></feMergeNode> </feMerge> </filter> <defs> <circle id='image-SVGID_1_' cx='26.5' cy='26.5' r='25.5'></circle> </defs> <clipPath id='image-SVGID_2_'> <use xlink:href='#image-SVGID_1_' overflow='visible'></use> </clipPath> <g clip-path='url(#image-SVGID_2_)'> <path fill='#8333A3' d='M54.1 23.5H35.3v-2.4c0-1-.8-1.8-1.8-1.8H19.2c-.9 0-1.7.8-1.7 1.8v10.7c0 1 .8 1.8 1.8 1.8h14.2c.4 0 .8-.2 1.2-.4L42 48.8c6.7-3.6 12.1-13.2 12.1-25.3z'></path> <path fill='#702A8C' d='M33.6 33.6l-7-.1-10.6 18c4.4 2.4 17 4.5 27-2.6l-8.3-15.7c-.3.3-.7.4-1.1.4z'></path> <path fill='#9A37A3' d='M19.3 33.6c-1 0-1.8-.8-1.8-1.8l.1-1.5-18.7-.3c1.5 9.4 8.9 18.6 17.5 22l10.7-18.4h-7.8z'></path> <path fill='#CE64DE' d='M17.6 21.2c0-.9 1.1-1.7 2-1.8L11.7 4.2C6.4 7.1-.8 12.9-1.1 30.8l18.7-.1v-9.5z'></path> <path fill='#BF59CF' d='M19.3 19.4l9.5.4 9.8-17.3C33.3-.7 21.4-3 10.7 4.6l8.6 14.8z'></path> <path fill='#AC44CF' d='M38.5 1.8L28.4 19.4h5.2c1 0 1.8.8 1.8 1.8l-.4 2.7 19.1-.1c-1-9.2-7.6-18.1-15.6-22z'></path> </g> <path fill='#F5F5F5' filter='url(#image-dropshadow)' d='M33.9 33.9H19.1c-1 0-1.9-.8-1.9-1.9V21c0-1 .8-1.9 1.9-1.9h14.8c1 0 1.9.8 1.9 1.9v11c-.1 1.1-.9 1.9-1.9 1.9zm-2.2-12c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm1.9 8L28.9 27l-2.4 1.2-4.7-3.5-2.4 2.3v4.7h14.2v-1.8z'></path> </svg> <span style='color: #fff; background-color: #000; padding: 15px; border-radius: 35px; margin: 15px; display: inline-block;'>Photos/Videos</span> </p> <p id='fileTypeDocumentButton' onclick='onFileTypeDocumentClicked()' style='cursor: pointer; > <svg id='document-Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 53 53' enable-background='new 0 0 53 53' width='100' height='100'> <filter height='130%' id='document-dropshadow'> <feOffset dy='2' result='offsetblur'></feOffset> <feComponentTransfer> <feFuncA slope='.08' type='linear'></feFuncA> </feComponentTransfer> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in='SourceGraphic'></feMergeNode> </feMerge> </filter> <defs> <circle id='document-SVGID_1_' cx='26.5' cy='26.5' r='25.5'></circle> </defs> <clipPath id='document-SVGID_2_'> <use xlink:href='#document-SVGID_1_' overflow='visible'></use> </clipPath> <g clip-path='url(#document-SVGID_2_)'> <path fill='#5157AE' d='M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z'></path> <path fill='#5F66CD' d='M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z'></path> </g> <path fill='#F5F5F5' filter='url(#document-dropshadow)' d='M21.4 16.3c-1.1 0-2 .9-2 2v15.6c0 1.1.9 2 2 2h11.7c1.1 0 2-.9 2-2V22.1l-5.9-5.9-7.8.1zm6.8 6.1v-4.7l5.4 5.4h-4.8c-.4 0-.6-.3-.6-.7z'></path> </svg> <span style='color: #fff; background-color: #000; padding: 15px; border-radius: 35px; margin: 15px; display: inline-block;'>Documents</span> </p> <p id='fileTypeContactButton' onclick='onfileTypeContactClicked()' style='cursor: pointer; > <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 53 53' width='100' height='100'> <defs> <circle id='contact-SVGID_1_' cx='26.5' cy='26.5' r='25.5'></circle> </defs> <clipPath id='contact-SVGID_2_'> <use xlink:href='#contact-SVGID_1_' overflow='visible'></use> </clipPath> <g clip-path='url(#contact-SVGID_2_)'> <path fill='#0A7BBF' d='M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z'></path> <path fill='#09ABF4' d='M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z'></path> </g> <g fill='#F5F5F5'> <use xlink:href='#svg-contact' filter='url(#attach-shadow)'></use> <path id='svg-contact' d='M26.5 26.1c-2.5 0-4.6-2-4.6-4.6 0-2.5 2-4.6 4.6-4.6 2.5 0 4.6 2 4.6 4.6s-2.1 4.6-4.6 4.6zm-.2 8.4h-8.9V32c0-.4.1-.8.4-1.1 1.3-1.3 4.6-2.4 8.5-2.4s7.3 1.1 8.7 2.4c.3.3.6.7.6 1.1v2.5h-9.3z'></path> </g> </svg> <span style='color: #fff; background-color: #000; padding: 15px; border-radius: 35px; margin: 15px; display: inline-block;'>Contact</span> </p> </div> <span data-icon='x-light' role='button' class='' style='position: absolute; right: 0; top: 0; margin-right: 10px; margin-top: 10px;' id='closeFileSelectionBtnWrapper' onclick='removeFileTypeButtons()'> <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='48' height='48'> <path fill='#FFF' d='M19.058 17.236l-5.293-5.293 5.293-5.293-1.764-1.764L12 10.178 6.707 4.885 4.942 6.649l5.293 5.293-5.293 5.293L6.707 19 12 13.707 17.293 19l1.765-1.764z'></path> </svg> </span> </p> </div>"
    );
    n.before(r);
    document
      .getElementById("fileTypeImageButton")
      .addEventListener("click", () => {
        const t = $(
          `<input id="imageSelectionBtn" accept="image/*,video/mp4,video/3gpp,video/quicktime" type="file" multiple="" style="display: none;">`
        );
        n.after(t);
        setTimeout(() => {
          $("#imageSelectionBtn").on("change", async function () {
            const t = $(this)[0].files;
            Rt("fileSelectionBtnWrapper");
            je = [];
            for (file of t) {
              const e = await Lt(file);
              je.push({
                name: file.name,
                size: file.size,
                type: file.type,
                base64: e,
              });
            }
            Le.setAttachments(je);
            e(je);
          });
          document.getElementById("imageSelectionBtn").click();
        }, 1e3);
        Rt("fileSelectionBtnWrapper");
      });
    document
      .getElementById("fileTypeDocumentButton")
      .addEventListener("click", () => {
        const t = $(
          `<input id="docSelectionBtn" accept="*" type="file" multiple="" style="display: none;">`
        );
        n.after(t);
        setTimeout(() => {
          $("#docSelectionBtn").on("change", async function () {
            const t = $(this)[0].files;
            Rt("fileSelectionBtnWrapper");
            je = [];
            for (file of t) {
              const e = await Lt(file);
              je.push({
                name: file.name,
                size: file.size,
                type: file.type,
                base64: e,
              });
            }
            Le.setAttachments(je);
            e(je);
          });
          document.getElementById("docSelectionBtn").click();
        }, 1e3);
        Rt("fileSelectionBtnWrapper");
      });
    document
      .getElementById("fileTypeContactButton")
      .addEventListener("click", () => {
        Rt("fileSelectionBtnWrapper");
      });
    document
      .getElementById("closeFileSelectionBtnWrapper")
      .addEventListener("click", () => {
        Rt("fileSelectionBtnWrapper");
      });
  });
}
function Rt(e) {
  const t = document.getElementById(e);
  t ? t.parentNode.removeChild(t) : null;
}
function Lt(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    r.readAsDataURL(e);
    r.onload = () => t(r.result);
    r.onerror = (e) => n(e);
  });
}
function Ot(e, t) {
  var n = e.split(","),
    r = n[0].match(/:(.*?);/)[1],
    i = atob(n[1]),
    o = i.length,
    u = new Uint8Array(o);
  while (o--) {
    u[o] = i.charCodeAt(o);
  }
  return new File([u], t, { type: r });
}
function Dt() {
  if (Oe.getSaveDeleteChats()) {
    const e = Le.getDeletedChats();
    if (e) {
      e.map((e) => jt(e));
    }
  }
}
function jt(e) {
  const t = m(window, c).get(e.newMessageId);
  if (t) {
    t.type = e.type;
    t.body = `🚫 ${e.content}`;
  }
}
function It() {
  const e = m(window, n).where({ hasUnread: true });
  const t = Math.floor(new Date().getTime() / 10 ** 3);
  e.forEach((e) => {
    e.toriginal = e.toriginal || e.t;
    e.t = t + e.toriginal;
  });
}
function Mt() {
  const e = m(window, n).where({ hasUnread: true });
  e.forEach((e) => {
    e.t = e.toriginal || e.t;
  });
}
function Pt() {
  Ie.addUnreadCountListener();
  Oe.setPinUnreadChats(true);
  It();
}
function Bt() {
  Ie.removeUnreadCountListener();
  Oe.setPinUnreadChats(false);
  Mt();
}
function Ht() {
  Ie.addPresenceListener();
}
function qt() {
  Ie.removePresenceListner();
}
function Ut() {
  De.enableReadReciept();
  Ie.removeActiveChatListener();
}
function Ft() {
  De.disableReadReciept();
  Ie.addActiveChatListener();
}
function Wt() {
  De.enableTypingState();
}
function zt() {
  De.disableTypingState();
}
function $t() {
  Ie.addDeleteChatListener();
  Dt();
}
function Gt() {
  Ie.removeDeleteChatListener();
}
function Qt() {
  if (Me) {
    clearInterval(Me);
  }
}
function Vt() {
  Me = setInterval(m(window, p).setPresenceUnavailable, 100);
}
function Kt() {
  De.disableMediaPlayedReciept();
}
function Yt() {
  De.enableMediaPlayedReciept();
}
function Xt() {
  if (Oe.getPinUnreadChats()) {
    Pt();
  }
  if (Oe.getPresenceCheck()) {
    Ie.addPresenceListener();
  }
  if (!Oe.getReadReciept()) {
    De.disableReadReciept();
    Ie.addActiveChatListener();
  }
  if (!Oe.getTypingState()) {
    De.disableTypingState();
  }
  if (Oe.getSaveDeleteChats()) {
    Ie.addDeleteChatListener();
    Dt();
  }
  if (Oe.getHideOnlineState()) {
    Vt();
  }
  if (Oe.getMediaPlayedReciept()) {
    De.disableMediaPlayedReciept();
  }
}
