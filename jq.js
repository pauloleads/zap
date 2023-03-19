/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
	"use strict";
	var n = [],
		r = e.document,
		i = Object.getPrototypeOf,
		a = n.slice,
		s = n.concat,
		o = n.push,
		l = n.indexOf,
		c = {},
		d = c.toString,
		u = c.hasOwnProperty,
		f = u.toString,
		h = f.call(Object),
		p = {},
		m = function e(t) {
			return "function" == typeof t && "number" != typeof t.nodeType
		},
		g = function e(t) {
			return null != t && t === t.window
		},
		v = {
			type: !0,
			src: !0,
			noModule: !0
		};

	function b(e, t, n) {
		var i, a = (t = t || r).createElement("script");
		if (a.text = e, n)
			for (i in v) n[i] && (a[i] = n[i]);
		t.head.appendChild(a).parentNode.removeChild(a)
	}

	function y(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[d.call(e)] || "object" : typeof e
	}
	var _ = "3.3.1",
		w = function(e, t) {
			return new w.fn.init(e, t)
		},
		C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	w.fn = w.prototype = {
		jquery: "3.3.1",
		constructor: w,
		length: 0,
		toArray: function() {
			return a.call(this)
		},
		get: function(e) {
			return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = w.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return w.each(this, e)
		},
		map: function(e) {
			return this.pushStack(w.map(this, (function(t, n) {
				return e.call(t, n, t)
			})))
		},
		slice: function() {
			return this.pushStack(a.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: o,
		sort: n.sort,
		splice: n.splice
	}, w.extend = w.fn.extend = function() {
		var e, t, n, r, i, a, s = arguments[0] || {},
			o = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[o] || {}, o++), "object" == typeof s || m(s) || (s = {}), o === l && (s = this, o--); o < l; o++)
			if (null != (e = arguments[o]))
				for (t in e) n = s[t], s !== (r = e[t]) && (c && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, a = n && Array.isArray(n) ? n : []) : a = n && w.isPlainObject(n) ? n : {}, s[t] = w.extend(c, a, r)) : void 0 !== r && (s[t] = r));
		return s
	}, w.extend({
		expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			var t, n;
			return !(!e || "[object Object]" !== d.call(e)) && (!(t = i(e)) || "function" == typeof(n = u.call(t, "constructor") && t.constructor) && f.call(n) === h)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function(e) {
			b(e)
		},
		each: function(e, t) {
			var n, r = 0;
			if (k(e)) {
				for (n = e.length; r < n; r++)
					if (!1 === t.call(e[r], r, e[r])) break
			} else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(C, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (k(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : l.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r, i = [], a = 0, s = e.length, o = !n; a < s; a++)(r = !t(e[a], a)) !== o && i.push(e[a]);
			return i
		},
		map: function(e, t, n) {
			var r, i, a = 0,
				o = [];
			if (k(e))
				for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && o.push(i);
			else
				for (a in e) null != (i = t(e[a], a, n)) && o.push(i);
			return s.apply([], o)
		},
		guid: 1,
		support: p
	}), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
		c["[object " + t + "]"] = t.toLowerCase()
	}));

	function k(e) {
		var t = !!e && "length" in e && e.length,
			n = y(e);
		return !m(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	var E = function(e) {
		var t, n, r, i, a, s, o, l, c, d, u, f, h, p, m, g, v, b, y, _ = "sizzle" + 1 * new Date,
			w = e.document,
			C = 0,
			k = 0,
			E = se(),
			S = se(),
			$ = se(),
			x = function(e, t) {
				return e === t && (u = !0), 0
			},
			T = {}.hasOwnProperty,
			A = [],
			D = A.pop,
			R = A.push,
			I = A.push,
			N = A.slice,
			B = function(e, t) {
				for (var n = 0, r = e.length; n < r; n++)
					if (e[n] === t) return n;
				return -1
			},
			P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			O = "[\\x20\\t\\r\\n\\f]",
			M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			F = "\\[" + O + "*(" + M + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + O + "*\\]",
			L = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
			W = new RegExp(O + "+", "g"),
			U = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
			H = new RegExp("^" + O + "*," + O + "*"),
			z = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
			j = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
			G = new RegExp(L),
			V = new RegExp("^" + M + "$"),
			Y = {
				ID: new RegExp("^#(" + M + ")"),
				CLASS: new RegExp("^\\.(" + M + ")"),
				TAG: new RegExp("^(" + M + "|[*])"),
				ATTR: new RegExp("^" + F),
				PSEUDO: new RegExp("^" + L),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + P + ")$", "i"),
				needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
			},
			X = /^(?:input|select|textarea|button)$/i,
			K = /^h\d$/i,
			q = /^[^{]+\{\s*\[native \w/,
			Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			Q = /[+~]/,
			J = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
			ee = function(e, t, n) {
				var r = "0x" + t - 65536;
				return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
			},
			te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ne = function(e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			re = function() {
				f()
			},
			ie = be((function(e) {
				return !0 === e.disabled && ("form" in e || "label" in e)
			}), {
				dir: "parentNode",
				next: "legend"
			});
		try {
			I.apply(A = N.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
		} catch (e) {
			I = {
				apply: A.length ? function(e, t) {
					R.apply(e, N.call(t))
				} : function(e, t) {
					var n = e.length,
						r = 0;
					while (e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}

		function ae(e, t, r, i) {
			var a, o, c, d, u, p, v, b = t && t.ownerDocument,
				C = t ? t.nodeType : 9;
			if (r = r || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return r;
			if (!i && ((t ? t.ownerDocument || t : w) !== h && f(t), t = t || h, m)) {
				if (11 !== C && (u = Z.exec(e)))
					if (a = u[1]) {
						if (9 === C) {
							if (!(c = t.getElementById(a))) return r;
							if (c.id === a) return r.push(c), r
						} else if (b && (c = b.getElementById(a)) && y(t, c) && c.id === a) return r.push(c), r
					} else {
						if (u[2]) return I.apply(r, t.getElementsByTagName(e)), r;
						if ((a = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return I.apply(r, t.getElementsByClassName(a)), r
					} if (n.qsa && !$[e + " "] && (!g || !g.test(e))) {
					if (1 !== C) b = t, v = e;
					else if ("object" !== t.nodeName.toLowerCase()) {
						(d = t.getAttribute("id")) ? d = d.replace(te, ne): t.setAttribute("id", d = _), o = (p = s(e)).length;
						while (o--) p[o] = "#" + d + " " + ve(p[o]);
						v = p.join(","), b = Q.test(e) && me(t.parentNode) || t
					}
					if (v) try {
						return I.apply(r, b.querySelectorAll(v)), r
					} catch (e) {} finally {
						d === _ && t.removeAttribute("id")
					}
				}
			}
			return l(e.replace(U, "$1"), t, r, i)
		}

		function se() {
			var e = [];

			function t(n, i) {
				return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
			}
			return t
		}

		function oe(e) {
			return e[_] = !0, e
		}

		function le(e) {
			var t = h.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function ce(e, t) {
			var n = e.split("|"),
				i = n.length;
			while (i--) r.attrHandle[n[i]] = t
		}

		function de(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (r) return r;
			if (n)
				while (n = n.nextSibling)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function ue(e) {
			return function(t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}

		function fe(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function he(e) {
			return function(t) {
				return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
			}
		}

		function pe(e) {
			return oe((function(t) {
				return t = +t, oe((function(n, r) {
					var i, a = e([], n.length, t),
						s = a.length;
					while (s--) n[i = a[s]] && (n[i] = !(r[i] = n[i]))
				}))
			}))
		}

		function me(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}
		n = ae.support = {}, a = ae.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, f = ae.setDocument = function(e) {
			var t, i, s = e ? e.ownerDocument || e : w;
			return s !== h && 9 === s.nodeType && s.documentElement ? (h = s, p = h.documentElement, m = !a(h), w !== h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = le((function(e) {
				return e.className = "i", !e.getAttribute("className")
			})), n.getElementsByTagName = le((function(e) {
				return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
			})), n.getElementsByClassName = q.test(h.getElementsByClassName), n.getById = le((function(e) {
				return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length
			})), n.getById ? (r.filter.ID = function(e) {
				var t = e.replace(J, ee);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}, r.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && m) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}) : (r.filter.ID = function(e) {
				var t = e.replace(J, ee);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}, r.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && m) {
					var n, r, i, a = t.getElementById(e);
					if (a) {
						if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
						i = t.getElementsByName(e), r = 0;
						while (a = i[r++])
							if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
					}
					return []
				}
			}), r.find.TAG = n.getElementsByTagName ? function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var n, r = [],
					i = 0,
					a = t.getElementsByTagName(e);
				if ("*" === e) {
					while (n = a[i++]) 1 === n.nodeType && r.push(n);
					return r
				}
				return a
			}, r.find.CLASS = n.getElementsByClassName && function(e, t) {
				if ("undefined" != typeof t.getElementsByClassName && m) return t.getElementsByClassName(e)
			}, v = [], g = [], (n.qsa = q.test(h.querySelectorAll)) && (le((function(e) {
				p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + O + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]")
			})), le((function(e) {
				e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var t = h.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
			}))), (n.matchesSelector = q.test(b = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le((function(e) {
				n.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), v.push("!=", L)
			})), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = q.test(p.compareDocumentPosition), y = t || q.test(p.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function(e, t) {
				if (t)
					while (t = t.parentNode)
						if (t === e) return !0;
				return !1
			}, x = t ? function(e, t) {
				if (e === t) return u = !0, 0;
				var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === h || e.ownerDocument === w && y(w, e) ? -1 : t === h || t.ownerDocument === w && y(w, t) ? 1 : d ? B(d, e) - B(d, t) : 0 : 4 & r ? -1 : 1)
			} : function(e, t) {
				if (e === t) return u = !0, 0;
				var n, r = 0,
					i = e.parentNode,
					a = t.parentNode,
					s = [e],
					o = [t];
				if (!i || !a) return e === h ? -1 : t === h ? 1 : i ? -1 : a ? 1 : d ? B(d, e) - B(d, t) : 0;
				if (i === a) return de(e, t);
				n = e;
				while (n = n.parentNode) s.unshift(n);
				n = t;
				while (n = n.parentNode) o.unshift(n);
				while (s[r] === o[r]) r++;
				return r ? de(s[r], o[r]) : s[r] === w ? -1 : o[r] === w ? 1 : 0
			}, h) : h
		}, ae.matches = function(e, t) {
			return ae(e, null, null, t)
		}, ae.matchesSelector = function(e, t) {
			if ((e.ownerDocument || e) !== h && f(e), t = t.replace(j, "='$1']"), n.matchesSelector && m && !$[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
				var r = b.call(e, t);
				if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
			} catch (e) {}
			return ae(t, h, null, [e]).length > 0
		}, ae.contains = function(e, t) {
			return (e.ownerDocument || e) !== h && f(e), y(e, t)
		}, ae.attr = function(e, t) {
			(e.ownerDocument || e) !== h && f(e);
			var i = r.attrHandle[t.toLowerCase()],
				a = i && T.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
			return void 0 !== a ? a : n.attributes || !m ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
		}, ae.escape = function(e) {
			return (e + "").replace(te, ne)
		}, ae.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, ae.uniqueSort = function(e) {
			var t, r = [],
				i = 0,
				a = 0;
			if (u = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort(x), u) {
				while (t = e[a++]) t === e[a] && (i = r.push(a));
				while (i--) e.splice(r[i], 1)
			}
			return d = null, e
		}, i = ae.getText = function(e) {
			var t, n = "",
				r = 0,
				a = e.nodeType;
			if (a) {
				if (1 === a || 9 === a || 11 === a) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
				} else if (3 === a || 4 === a) return e.nodeValue
			} else
				while (t = e[r++]) n += i(t);
			return n
		}, (r = ae.selectors = {
			cacheLength: 50,
			createPseudo: oe,
			match: Y,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(J, ee).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = E[e + " "];
					return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && E(e, (function(e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					}))
				},
				ATTR: function(e, t, n) {
					return function(r) {
						var i = ae.attr(r, e);
						return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
					}
				},
				CHILD: function(e, t, n, r, i) {
					var a = "nth" !== e.slice(0, 3),
						s = "last" !== e.slice(-4),
						o = "of-type" === t;
					return 1 === r && 0 === i ? function(e) {
						return !!e.parentNode
					} : function(t, n, l) {
						var c, d, u, f, h, p, m = a !== s ? "nextSibling" : "previousSibling",
							g = t.parentNode,
							v = o && t.nodeName.toLowerCase(),
							b = !l && !o,
							y = !1;
						if (g) {
							if (a) {
								while (m) {
									f = t;
									while (f = f[m])
										if (o ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
									p = m = "only" === e && !p && "nextSibling"
								}
								return !0
							}
							if (p = [s ? g.firstChild : g.lastChild], s && b) {
								y = (h = (c = (d = (u = (f = g)[_] || (f[_] = {}))[f.uniqueID] || (u[f.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], f = h && g.childNodes[h];
								while (f = ++h && f && f[m] || (y = h = 0) || p.pop())
									if (1 === f.nodeType && ++y && f === t) {
										d[e] = [C, h, y];
										break
									}
							} else if (b && (y = h = (c = (d = (u = (f = t)[_] || (f[_] = {}))[f.uniqueID] || (u[f.uniqueID] = {}))[e] || [])[0] === C && c[1]), !1 === y)
								while (f = ++h && f && f[m] || (y = h = 0) || p.pop())
									if ((o ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) && ++y && (b && ((d = (u = f[_] || (f[_] = {}))[f.uniqueID] || (u[f.uniqueID] = {}))[e] = [C, y]), f === t)) break;
							return (y -= i) === r || y % r == 0 && y / r >= 0
						}
					}
				},
				PSEUDO: function(e, t) {
					var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
					return i[_] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? oe((function(e, n) {
						var r, a = i(e, t),
							s = a.length;
						while (s--) e[r = B(e, a[s])] = !(n[r] = a[s])
					})) : function(e) {
						return i(e, 0, n)
					}) : i
				}
			},
			pseudos: {
				not: oe((function(e) {
					var t = [],
						n = [],
						r = o(e.replace(U, "$1"));
					return r[_] ? oe((function(e, t, n, i) {
						var a, s = r(e, null, i, []),
							o = e.length;
						while (o--)(a = s[o]) && (e[o] = !(t[o] = a))
					})) : function(e, i, a) {
						return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
					}
				})),
				has: oe((function(e) {
					return function(t) {
						return ae(e, t).length > 0
					}
				})),
				contains: oe((function(e) {
					return e = e.replace(J, ee),
						function(t) {
							return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
						}
				})),
				lang: oe((function(e) {
					return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(J, ee).toLowerCase(),
						function(t) {
							var n;
							do {
								if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
							} while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				})),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === p
				},
				focus: function(e) {
					return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: he(!1),
				disabled: he(!0),
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !r.pseudos.empty(e)
				},
				header: function(e) {
					return K.test(e.nodeName)
				},
				input: function(e) {
					return X.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: pe((function() {
					return [0]
				})),
				last: pe((function(e, t) {
					return [t - 1]
				})),
				eq: pe((function(e, t, n) {
					return [n < 0 ? n + t : n]
				})),
				even: pe((function(e, t) {
					for (var n = 0; n < t; n += 2) e.push(n);
					return e
				})),
				odd: pe((function(e, t) {
					for (var n = 1; n < t; n += 2) e.push(n);
					return e
				})),
				lt: pe((function(e, t, n) {
					for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
					return e
				})),
				gt: pe((function(e, t, n) {
					for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
					return e
				}))
			}
		}).pseudos.nth = r.pseudos.eq;
		for (t in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) r.pseudos[t] = ue(t);
		for (t in {
				submit: !0,
				reset: !0
			}) r.pseudos[t] = fe(t);

		function ge() {}
		ge.prototype = r.filters = r.pseudos, r.setFilters = new ge, s = ae.tokenize = function(e, t) {
			var n, i, a, s, o, l, c, d = S[e + " "];
			if (d) return t ? 0 : d.slice(0);
			o = e, l = [], c = r.preFilter;
			while (o) {
				n && !(i = H.exec(o)) || (i && (o = o.slice(i[0].length) || o), l.push(a = [])), n = !1, (i = z.exec(o)) && (n = i.shift(), a.push({
					value: n,
					type: i[0].replace(U, " ")
				}), o = o.slice(n.length));
				for (s in r.filter) !(i = Y[s].exec(o)) || c[s] && !(i = c[s](i)) || (n = i.shift(), a.push({
					value: n,
					type: s,
					matches: i
				}), o = o.slice(n.length));
				if (!n) break
			}
			return t ? o.length : o ? ae.error(e) : S(e, l).slice(0)
		};

		function ve(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r
		}

		function be(e, t, n) {
			var r = t.dir,
				i = t.next,
				a = i || r,
				s = n && "parentNode" === a,
				o = k++;
			return t.first ? function(t, n, i) {
				while (t = t[r])
					if (1 === t.nodeType || s) return e(t, n, i);
				return !1
			} : function(t, n, l) {
				var c, d, u, f = [C, o];
				if (l) {
					while (t = t[r])
						if ((1 === t.nodeType || s) && e(t, n, l)) return !0
				} else
					while (t = t[r])
						if (1 === t.nodeType || s)
							if (u = t[_] || (t[_] = {}), d = u[t.uniqueID] || (u[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
							else {
								if ((c = d[a]) && c[0] === C && c[1] === o) return f[2] = c[2];
								if (d[a] = f, f[2] = e(t, n, l)) return !0
							} return !1
			}
		}

		function ye(e) {
			return e.length > 1 ? function(t, n, r) {
				var i = e.length;
				while (i--)
					if (!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}

		function _e(e, t, n) {
			for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
			return n
		}

		function we(e, t, n, r, i) {
			for (var a, s = [], o = 0, l = e.length, c = null != t; o < l; o++)(a = e[o]) && (n && !n(a, r, i) || (s.push(a), c && t.push(o)));
			return s
		}

		function Ce(e, t, n, r, i, a) {
			return r && !r[_] && (r = Ce(r)), i && !i[_] && (i = Ce(i, a)), oe((function(a, s, o, l) {
				var c, d, u, f = [],
					h = [],
					p = s.length,
					m = a || _e(t || "*", o.nodeType ? [o] : o, []),
					g = !e || !a && t ? m : we(m, f, e, o, l),
					v = n ? i || (a ? e : p || r) ? [] : s : g;
				if (n && n(g, v, o, l), r) {
					c = we(v, h), r(c, [], o, l), d = c.length;
					while (d--)(u = c[d]) && (v[h[d]] = !(g[h[d]] = u))
				}
				if (a) {
					if (i || e) {
						if (i) {
							c = [], d = v.length;
							while (d--)(u = v[d]) && c.push(g[d] = u);
							i(null, v = [], c, l)
						}
						d = v.length;
						while (d--)(u = v[d]) && (c = i ? B(a, u) : f[d]) > -1 && (a[c] = !(s[c] = u))
					}
				} else v = we(v === s ? v.splice(p, v.length) : v), i ? i(null, s, v, l) : I.apply(s, v)
			}))
		}

		function ke(e) {
			for (var t, n, i, a = e.length, s = r.relative[e[0].type], o = s || r.relative[" "], l = s ? 1 : 0, d = be((function(e) {
					return e === t
				}), o, !0), u = be((function(e) {
					return B(t, e) > -1
				}), o, !0), f = [function(e, n, r) {
					var i = !s && (r || n !== c) || ((t = n).nodeType ? d(e, n, r) : u(e, n, r));
					return t = null, i
				}]; l < a; l++)
				if (n = r.relative[e[l].type]) f = [be(ye(f), n)];
				else {
					if ((n = r.filter[e[l].type].apply(null, e[l].matches))[_]) {
						for (i = ++l; i < a; i++)
							if (r.relative[e[i].type]) break;
						return Ce(l > 1 && ye(f), l > 1 && ve(e.slice(0, l - 1).concat({
							value: " " === e[l - 2].type ? "*" : ""
						})).replace(U, "$1"), n, l < i && ke(e.slice(l, i)), i < a && ke(e = e.slice(i)), i < a && ve(e))
					}
					f.push(n)
				} return ye(f)
		}

		function Ee(e, t) {
			var n = t.length > 0,
				i = e.length > 0,
				a = function(a, s, o, l, d) {
					var u, p, g, v = 0,
						b = "0",
						y = a && [],
						_ = [],
						w = c,
						k = a || i && r.find.TAG("*", d),
						E = C += null == w ? 1 : Math.random() || .1,
						S = k.length;
					for (d && (c = s === h || s || d); b !== S && null != (u = k[b]); b++) {
						if (i && u) {
							p = 0, s || u.ownerDocument === h || (f(u), o = !m);
							while (g = e[p++])
								if (g(u, s || h, o)) {
									l.push(u);
									break
								} d && (C = E)
						}
						n && ((u = !g && u) && v--, a && y.push(u))
					}
					if (v += b, n && b !== v) {
						p = 0;
						while (g = t[p++]) g(y, _, s, o);
						if (a) {
							if (v > 0)
								while (b--) y[b] || _[b] || (_[b] = D.call(l));
							_ = we(_)
						}
						I.apply(l, _), d && !a && _.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
					}
					return d && (C = E, c = w), y
				};
			return n ? oe(a) : a
		}
		return o = ae.compile = function(e, t) {
			var n, r = [],
				i = [],
				a = $[e + " "];
			if (!a) {
				t || (t = s(e)), n = t.length;
				while (n--)(a = ke(t[n]))[_] ? r.push(a) : i.push(a);
				(a = $(e, Ee(i, r))).selector = e
			}
			return a
		}, l = ae.select = function(e, t, n, i) {
			var a, l, c, d, u, f = "function" == typeof e && e,
				h = !i && s(e = f.selector || e);
			if (n = n || [], 1 === h.length) {
				if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && r.relative[l[1].type]) {
					if (!(t = (r.find.ID(c.matches[0].replace(J, ee), t) || [])[0])) return n;
					f && (t = t.parentNode), e = e.slice(l.shift().value.length)
				}
				a = Y.needsContext.test(e) ? 0 : l.length;
				while (a--) {
					if (c = l[a], r.relative[d = c.type]) break;
					if ((u = r.find[d]) && (i = u(c.matches[0].replace(J, ee), Q.test(l[0].type) && me(t.parentNode) || t))) {
						if (l.splice(a, 1), !(e = i.length && ve(l))) return I.apply(n, i), n;
						break
					}
				}
			}
			return (f || o(e, h))(i, t, !m, n, !t || Q.test(e) && me(t.parentNode) || t), n
		}, n.sortStable = _.split("").sort(x).join("") === _, n.detectDuplicates = !!u, f(), n.sortDetached = le((function(e) {
			return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
		})), le((function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		})) || ce("type|href|height|width", (function(e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		})), n.attributes && le((function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		})) || ce("value", (function(e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		})), le((function(e) {
			return null == e.getAttribute("disabled")
		})) || ce(P, (function(e, t, n) {
			var r;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		})), ae
	}(e);
	w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
	var S = function(e, t, n) {
			var r = [],
				i = void 0 !== n;
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType) {
					if (i && w(e).is(n)) break;
					r.push(e)
				} return r
		},
		$ = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		x = w.expr.match.needsContext;

	function T(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function D(e, t, n) {
		return m(t) ? w.grep(e, (function(e, r) {
			return !!t.call(e, r, e) !== n
		})) : t.nodeType ? w.grep(e, (function(e) {
			return e === t !== n
		})) : "string" != typeof t ? w.grep(e, (function(e) {
			return l.call(t, e) > -1 !== n
		})) : w.filter(t, e, n)
	}
	w.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, (function(e) {
			return 1 === e.nodeType
		})))
	}, w.fn.extend({
		find: function(e) {
			var t, n, r = this.length,
				i = this;
			if ("string" != typeof e) return this.pushStack(w(e).filter((function() {
				for (t = 0; t < r; t++)
					if (w.contains(i[t], this)) return !0
			})));
			for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
			return r > 1 ? w.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(D(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(D(this, e || [], !0))
		},
		is: function(e) {
			return !!D(this, "string" == typeof e && x.test(e) ? w(e) : e || [], !1).length
		}
	});
	var R, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(w.fn.init = function(e, t, n) {
		var i, a;
		if (!e) return this;
		if (n = n || R, "string" == typeof e) {
			if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (i[1]) {
				if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
					for (i in t) m(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
				return this
			}
			return (a = r.getElementById(i[2])) && (this[0] = a, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
	}).prototype = w.fn, R = w(r);
	var N = /^(?:parents|prev(?:Until|All))/,
		B = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	w.fn.extend({
		has: function(e) {
			var t = w(e, this),
				n = t.length;
			return this.filter((function() {
				for (var e = 0; e < n; e++)
					if (w.contains(this, t[e])) return !0
			}))
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				a = [],
				s = "string" != typeof e && w(e);
			if (!x.test(e))
				for (; r < i; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
							a.push(n);
							break
						} return this.pushStack(a.length > 1 ? w.uniqueSort(a) : a)
		},
		index: function(e) {
			return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	});

	function P(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}
	w.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return S(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return S(e, "parentNode", n)
		},
		next: function(e) {
			return P(e, "nextSibling")
		},
		prev: function(e) {
			return P(e, "previousSibling")
		},
		nextAll: function(e) {
			return S(e, "nextSibling")
		},
		prevAll: function(e) {
			return S(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return S(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return S(e, "previousSibling", n)
		},
		siblings: function(e) {
			return $((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return $(e.firstChild)
		},
		contents: function(e) {
			return T(e, "iframe") ? e.contentDocument : (T(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
		}
	}, (function(e, t) {
		w.fn[e] = function(n, r) {
			var i = w.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (B[e] || w.uniqueSort(i), N.test(e) && i.reverse()), this.pushStack(i)
		}
	}));
	var O = /[^\x20\t\r\n\f]+/g;

	function M(e) {
		var t = {};
		return w.each(e.match(O) || [], (function(e, n) {
			t[n] = !0
		})), t
	}
	w.Callbacks = function(e) {
		e = "string" == typeof e ? M(e) : w.extend({}, e);
		var t, n, r, i, a = [],
			s = [],
			o = -1,
			l = function() {
				for (i = i || e.once, r = t = !0; s.length; o = -1) {
					n = s.shift();
					while (++o < a.length) !1 === a[o].apply(n[0], n[1]) && e.stopOnFalse && (o = a.length, n = !1)
				}
				e.memory || (n = !1), t = !1, i && (a = n ? [] : "")
			},
			c = {
				add: function() {
					return a && (n && !t && (o = a.length - 1, s.push(n)), function t(n) {
						w.each(n, (function(n, r) {
							m(r) ? e.unique && c.has(r) || a.push(r) : r && r.length && "string" !== y(r) && t(r)
						}))
					}(arguments), n && !t && l()), this
				},
				remove: function() {
					return w.each(arguments, (function(e, t) {
						var n;
						while ((n = w.inArray(t, a, n)) > -1) a.splice(n, 1), n <= o && o--
					})), this
				},
				has: function(e) {
					return e ? w.inArray(e, a) > -1 : a.length > 0
				},
				empty: function() {
					return a && (a = []), this
				},
				disable: function() {
					return i = s = [], a = n = "", this
				},
				disabled: function() {
					return !a
				},
				lock: function() {
					return i = s = [], n || t || (a = n = ""), this
				},
				locked: function() {
					return !!i
				},
				fireWith: function(e, n) {
					return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
				},
				fire: function() {
					return c.fireWith(this, arguments), this
				},
				fired: function() {
					return !!r
				}
			};
		return c
	};

	function F(e) {
		return e
	}

	function L(e) {
		throw e
	}

	function W(e, t, n, r) {
		var i;
		try {
			e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	w.extend({
		Deferred: function(t) {
			var n = [
					["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
					["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
				],
				r = "pending",
				i = {
					state: function() {
						return r
					},
					always: function() {
						return a.done(arguments).fail(arguments), this
					},
					catch: function(e) {
						return i.then(null, e)
					},
					pipe: function() {
						var e = arguments;
						return w.Deferred((function(t) {
							w.each(n, (function(n, r) {
								var i = m(e[r[4]]) && e[r[4]];
								a[r[1]]((function() {
									var e = i && i.apply(this, arguments);
									e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
								}))
							})), e = null
						})).promise()
					},
					then: function(t, r, i) {
						var a = 0;

						function s(t, n, r, i) {
							return function() {
								var o = this,
									l = arguments,
									c = function() {
										var e, c;
										if (!(t < a)) {
											if ((e = r.apply(o, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
											c = e && ("object" == typeof e || "function" == typeof e) && e.then, m(c) ? i ? c.call(e, s(a, n, F, i), s(a, n, L, i)) : (a++, c.call(e, s(a, n, F, i), s(a, n, L, i), s(a, n, F, n.notifyWith))) : (r !== F && (o = void 0, l = [e]), (i || n.resolveWith)(o, l))
										}
									},
									d = i ? c : function() {
										try {
											c()
										} catch (e) {
											w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (r !== L && (o = void 0, l = [e]), n.rejectWith(o, l))
										}
									};
								t ? d() : (w.Deferred.getStackHook && (d.stackTrace = w.Deferred.getStackHook()), e.setTimeout(d))
							}
						}
						return w.Deferred((function(e) {
							n[0][3].add(s(0, e, m(i) ? i : F, e.notifyWith)), n[1][3].add(s(0, e, m(t) ? t : F)), n[2][3].add(s(0, e, m(r) ? r : L))
						})).promise()
					},
					promise: function(e) {
						return null != e ? w.extend(e, i) : i
					}
				},
				a = {};
			return w.each(n, (function(e, t) {
				var s = t[2],
					o = t[5];
				i[t[1]] = s.add, o && s.add((function() {
					r = o
				}), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), a[t[0]] = function() {
					return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
				}, a[t[0] + "With"] = s.fireWith
			})), i.promise(a), t && t.call(a, a), a
		},
		when: function(e) {
			var t = arguments.length,
				n = t,
				r = Array(n),
				i = a.call(arguments),
				s = w.Deferred(),
				o = function(e) {
					return function(n) {
						r[e] = this, i[e] = arguments.length > 1 ? a.call(arguments) : n, --t || s.resolveWith(r, i)
					}
				};
			if (t <= 1 && (W(e, s.done(o(n)).resolve, s.reject, !t), "pending" === s.state() || m(i[n] && i[n].then))) return s.then();
			while (n--) W(i[n], o(n), s.reject);
			return s.promise()
		}
	});
	var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	w.Deferred.exceptionHook = function(t, n) {
		e.console && e.console.warn && t && U.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
	}, w.readyException = function(t) {
		e.setTimeout((function() {
			throw t
		}))
	};
	var H = w.Deferred();
	w.fn.ready = function(e) {
		return H.then(e)["catch"]((function(e) {
			w.readyException(e)
		})), this
	}, w.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || H.resolveWith(r, [w]))
		}
	}), w.ready.then = H.then;

	function z() {
		r.removeEventListener("DOMContentLoaded", z), e.removeEventListener("load", z), w.ready()
	}
	"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", z), e.addEventListener("load", z));
	var j = function(e, t, n, r, i, a, s) {
			var o = 0,
				l = e.length,
				c = null == n;
			if ("object" === y(n)) {
				i = !0;
				for (o in n) j(e, t, o, n[o], !0, a, s)
			} else if (void 0 !== r && (i = !0, m(r) || (s = !0), c && (s ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
					return c.call(w(e), n)
				})), t))
				for (; o < l; o++) t(e[o], n, s ? r : r.call(e[o], o, t(e[o], n)));
			return i ? e : c ? t.call(e) : l ? t(e[0], n) : a
		},
		G = /^-ms-/,
		V = /-([a-z])/g;

	function Y(e, t) {
		return t.toUpperCase()
	}

	function X(e) {
		return e.replace(G, "ms-").replace(V, Y)
	}
	var K = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};

	function q() {
		this.expando = w.expando + q.uid++
	}
	q.uid = 1, q.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var r, i = this.cache(e);
			if ("string" == typeof t) i[X(t)] = n;
			else
				for (r in t) i[X(r)] = t[r];
			return i
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r = e[this.expando];
			if (void 0 !== r) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(O) || []).length;
					while (n--) delete r[t[n]]
				}(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !w.isEmptyObject(t)
		}
	};
	var Z = new q,
		Q = new q,
		J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		ee = /[A-Z]/g;

	function te(e) {
		return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
	}

	function ne(e, t, n) {
		var r;
		if (void 0 === n && 1 === e.nodeType)
			if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
				try {
					n = te(n)
				} catch (e) {}
				Q.set(e, t, n)
			} else n = void 0;
		return n
	}
	w.extend({
		hasData: function(e) {
			return Q.hasData(e) || Z.hasData(e)
		},
		data: function(e, t, n) {
			return Q.access(e, t, n)
		},
		removeData: function(e, t) {
			Q.remove(e, t)
		},
		_data: function(e, t, n) {
			return Z.access(e, t, n)
		},
		_removeData: function(e, t) {
			Z.remove(e, t)
		}
	}), w.fn.extend({
		data: function(e, t) {
			var n, r, i, a = this[0],
				s = a && a.attributes;
			if (void 0 === e) {
				if (this.length && (i = Q.get(a), 1 === a.nodeType && !Z.get(a, "hasDataAttrs"))) {
					n = s.length;
					while (n--) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = X(r.slice(5)), ne(a, r, i[r]));
					Z.set(a, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof e ? this.each((function() {
				Q.set(this, e)
			})) : j(this, (function(t) {
				var n;
				if (a && void 0 === t) {
					if (void 0 !== (n = Q.get(a, e))) return n;
					if (void 0 !== (n = ne(a, e))) return n
				} else this.each((function() {
					Q.set(this, e, t)
				}))
			}), null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each((function() {
				Q.remove(this, e)
			}))
		}
	}), w.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = Z.get(e, t), n && (!r || Array.isArray(n) ? r = Z.access(e, t, w.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = w.queue(e, t),
				r = n.length,
				i = n.shift(),
				a = w._queueHooks(e, t),
				s = function() {
					w.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, s, a)), !r && a && a.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return Z.get(e, n) || Z.access(e, n, {
				empty: w.Callbacks("once memory").add((function() {
					Z.remove(e, [t + "queue", n])
				}))
			})
		}
	}), w.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function() {
				var n = w.queue(this, e, t);
				w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
			}))
		},
		dequeue: function(e) {
			return this.each((function() {
				w.dequeue(this, e)
			}))
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = w.Deferred(),
				a = this,
				s = this.length,
				o = function() {
					--r || i.resolveWith(a, [a])
				};
			"string" != typeof e && (t = e, e = void 0), e = e || "fx";
			while (s--)(n = Z.get(a[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(o));
			return o(), i.promise(t)
		}
	});
	var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
		ae = ["Top", "Right", "Bottom", "Left"],
		se = function(e, t) {
			return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
		},
		oe = function(e, t, n, r) {
			var i, a, s = {};
			for (a in t) s[a] = e.style[a], e.style[a] = t[a];
			i = n.apply(e, r || []);
			for (a in t) e.style[a] = s[a];
			return i
		};

	function le(e, t, n, r) {
		var i, a, s = 20,
			o = r ? function() {
				return r.cur()
			} : function() {
				return w.css(e, t, "")
			},
			l = o(),
			c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
			d = (w.cssNumber[t] || "px" !== c && +l) && ie.exec(w.css(e, t));
		if (d && d[3] !== c) {
			l /= 2, c = c || d[3], d = +l || 1;
			while (s--) w.style(e, t, d + c), (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (s = 0), d /= a;
			d *= 2, w.style(e, t, d + c), n = n || []
		}
		return n && (d = +d || +l || 0, i = n[1] ? d + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = d, r.end = i)), i
	}
	var ce = {};

	function de(e) {
		var t, n = e.ownerDocument,
			r = e.nodeName,
			i = ce[r];
		return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ce[r] = i, i)
	}

	function ue(e, t) {
		for (var n, r, i = [], a = 0, s = e.length; a < s; a++)(r = e[a]).style && (n = r.style.display, t ? ("none" === n && (i[a] = Z.get(r, "display") || null, i[a] || (r.style.display = "")), "" === r.style.display && se(r) && (i[a] = de(r))) : "none" !== n && (i[a] = "none", Z.set(r, "display", n)));
		for (a = 0; a < s; a++) null != i[a] && (e[a].style.display = i[a]);
		return e
	}
	w.fn.extend({
		show: function() {
			return ue(this, !0)
		},
		hide: function() {
			return ue(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
				se(this) ? w(this).show() : w(this).hide()
			}))
		}
	});
	var fe = /^(?:checkbox|radio)$/i,
		he = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		pe = /^$|^module$|\/(?:java|ecma)script/i,
		me = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;

	function ge(e, t) {
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && T(e, t) ? w.merge([e], n) : n
	}

	function ve(e, t) {
		for (var n = 0, r = e.length; n < r; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
	}
	var be = /<|&#?\w+;/;

	function ye(e, t, n, r, i) {
		for (var a, s, o, l, c, d, u = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
			if ((a = e[h]) || 0 === a)
				if ("object" === y(a)) w.merge(f, a.nodeType ? [a] : a);
				else if (be.test(a)) {
			s = s || u.appendChild(t.createElement("div")), o = (he.exec(a) || ["", ""])[1].toLowerCase(), l = me[o] || me._default, s.innerHTML = l[1] + w.htmlPrefilter(a) + l[2], d = l[0];
			while (d--) s = s.lastChild;
			w.merge(f, s.childNodes), (s = u.firstChild).textContent = ""
		} else f.push(t.createTextNode(a));
		u.textContent = "", h = 0;
		while (a = f[h++])
			if (r && w.inArray(a, r) > -1) i && i.push(a);
			else if (c = w.contains(a.ownerDocument, a), s = ge(u.appendChild(a), "script"), c && ve(s), n) {
			d = 0;
			while (a = s[d++]) pe.test(a.type || "") && n.push(a)
		}
		return u
	}! function() {
		var e = r.createDocumentFragment().appendChild(r.createElement("div")),
			t = r.createElement("input");
		t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
	}();
	var _e = r.documentElement,
		we = /^key/,
		Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		ke = /^([^.]*)(?:\.(.+)|)/;

	function Ee() {
		return !0
	}

	function Se() {
		return !1
	}

	function $e() {
		try {
			return r.activeElement
		} catch (e) {}
	}

	function xe(e, t, n, r, i, a) {
		var s, o;
		if ("object" == typeof t) {
			"string" != typeof n && (r = r || n, n = void 0);
			for (o in t) xe(e, o, n, r, t[o], a);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
		else if (!i) return e;
		return 1 === a && (s = i, (i = function(e) {
			return w().off(e), s.apply(this, arguments)
		}).guid = s.guid || (s.guid = w.guid++)), e.each((function() {
			w.event.add(this, t, i, r, n)
		}))
	}
	w.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var a, s, o, l, c, d, u, f, h, p, m, g = Z.get(e);
			if (g) {
				n.handler && (n = (a = n).handler, i = a.selector), i && w.find.matchesSelector(_e, i), n.guid || (n.guid = w.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
					return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
				}), c = (t = (t || "").match(O) || [""]).length;
				while (c--) h = m = (o = ke.exec(t[c]) || [])[1], p = (o[2] || "").split(".").sort(), h && (u = w.event.special[h] || {}, h = (i ? u.delegateType : u.bindType) || h, u = w.event.special[h] || {}, d = w.extend({
					type: h,
					origType: m,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && w.expr.match.needsContext.test(i),
					namespace: p.join(".")
				}, a), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, r, p, s) || e.addEventListener && e.addEventListener(h, s)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), w.event.global[h] = !0)
			}
		},
		remove: function(e, t, n, r, i) {
			var a, s, o, l, c, d, u, f, h, p, m, g = Z.hasData(e) && Z.get(e);
			if (g && (l = g.events)) {
				c = (t = (t || "").match(O) || [""]).length;
				while (c--)
					if (o = ke.exec(t[c]) || [], h = m = o[1], p = (o[2] || "").split(".").sort(), h) {
						u = w.event.special[h] || {}, f = l[h = (r ? u.delegateType : u.bindType) || h] || [], o = o[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = f.length;
						while (a--) d = f[a], !i && m !== d.origType || n && n.guid !== d.guid || o && !o.test(d.namespace) || r && r !== d.selector && ("**" !== r || !d.selector) || (f.splice(a, 1), d.selector && f.delegateCount--, u.remove && u.remove.call(e, d));
						s && !f.length && (u.teardown && !1 !== u.teardown.call(e, p, g.handle) || w.removeEvent(e, h, g.handle), delete l[h])
					} else
						for (h in l) w.event.remove(e, h + t[c], n, r, !0);
				w.isEmptyObject(l) && Z.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t = w.event.fix(e),
				n, r, i, a, s, o, l = new Array(arguments.length),
				c = (Z.get(this, "events") || {})[t.type] || [],
				d = w.event.special[t.type] || {};
			for (l[0] = t, n = 1; n < arguments.length; n++) l[n] = arguments[n];
			if (t.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, t)) {
				o = w.event.handlers.call(this, t, c), n = 0;
				while ((a = o[n++]) && !t.isPropagationStopped()) {
					t.currentTarget = a.elem, r = 0;
					while ((s = a.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, void 0 !== (i = ((w.event.special[s.origType] || {}).handle || s.handler).apply(a.elem, l)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
				}
				return d.postDispatch && d.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, a, s, o = [],
				l = t.delegateCount,
				c = e.target;
			if (l && c.nodeType && !("click" === e.type && e.button >= 1))
				for (; c !== this; c = c.parentNode || this)
					if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
						for (a = [], s = {}, n = 0; n < l; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? w(i, this).index(c) > -1 : w.find(i, this, null, [c]).length), s[i] && a.push(r);
						a.length && o.push({
							elem: c,
							handlers: a
						})
					} return c = this, l < t.length && o.push({
				elem: c,
				handlers: t.slice(l)
			}), o
		},
		addProp: function(e, t) {
			Object.defineProperty(w.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: m(t) ? function() {
					if (this.originalEvent) return t(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[e]
				},
				set: function(t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function(e) {
			return e[w.expando] ? e : new w.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== $e() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === $e() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if ("checkbox" === this.type && this.click && T(this, "input")) return this.click(), !1
				},
				_default: function(e) {
					return T(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, w.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, w.Event = function(e, t) {
		if (!(this instanceof w.Event)) return new w.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
	}, w.Event.prototype = {
		constructor: w.Event,
		isDefaultPrevented: Se,
		isPropagationStopped: Se,
		isImmediatePropagationStopped: Se,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, w.each({
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
		which: function(e) {
			var t = e.button;
			return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, w.event.addProp), w.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, (function(e, t) {
		w.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					a = e.handleObj;
				return i && (i === r || w.contains(r, i)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
			}
		}
	})), w.fn.extend({
		on: function(e, t, n, r) {
			return xe(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return xe(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each((function() {
				w.event.remove(this, e, n, t)
			}))
		}
	});
	var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		Ae = /<script|<style|<link/i,
		De = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function Ie(e, t) {
		return T(e, "table") && T(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
	}

	function Ne(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function Be(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function Pe(e, t) {
		var n, r, i, a, s, o, l, c;
		if (1 === t.nodeType) {
			if (Z.hasData(e) && (a = Z.access(e), s = Z.set(t, a), c = a.events)) {
				delete s.handle, s.events = {};
				for (i in c)
					for (n = 0, r = c[i].length; n < r; n++) w.event.add(t, i, c[i][n])
			}
			Q.hasData(e) && (o = Q.access(e), l = w.extend({}, o), Q.set(t, l))
		}
	}

	function Oe(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && fe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
	}

	function Me(e, t, n, r) {
		t = s.apply([], t);
		var i, a, o, l, c, d, u = 0,
			f = e.length,
			h = f - 1,
			g = t[0],
			v = m(g);
		if (v || f > 1 && "string" == typeof g && !p.checkClone && De.test(g)) return e.each((function(i) {
			var a = e.eq(i);
			v && (t[0] = g.call(this, i, a.html())), Me(a, t, n, r)
		}));
		if (f && (i = ye(t, e[0].ownerDocument, !1, e, r), a = i.firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
			for (l = (o = w.map(ge(i, "script"), Ne)).length; u < f; u++) c = i, u !== h && (c = w.clone(c, !0, !0), l && w.merge(o, ge(c, "script"))), n.call(e[u], c, u);
			if (l)
				for (d = o[o.length - 1].ownerDocument, w.map(o, Be), u = 0; u < l; u++) c = o[u], pe.test(c.type || "") && !Z.access(c, "globalEval") && w.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(c.src) : b(c.textContent.replace(Re, ""), d, c))
		}
		return e
	}

	function Fe(e, t, n) {
		for (var r, i = t ? w.filter(t, e) : e, a = 0; null != (r = i[a]); a++) n || 1 !== r.nodeType || w.cleanData(ge(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
		return e
	}
	w.extend({
		htmlPrefilter: function(e) {
			return e.replace(Te, "<$1></$2>")
		},
		clone: function(e, t, n) {
			var r, i, a, s, o = e.cloneNode(!0),
				l = w.contains(e.ownerDocument, e);
			if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
				for (s = ge(o), r = 0, i = (a = ge(e)).length; r < i; r++) Oe(a[r], s[r]);
			if (t)
				if (n)
					for (a = a || ge(e), s = s || ge(o), r = 0, i = a.length; r < i; r++) Pe(a[r], s[r]);
				else Pe(e, o);
			return (s = ge(o, "script")).length > 0 && ve(s, !l && ge(e, "script")), o
		},
		cleanData: function(e) {
			for (var t, n, r, i = w.event.special, a = 0; void 0 !== (n = e[a]); a++)
				if (K(n)) {
					if (t = n[Z.expando]) {
						if (t.events)
							for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
						n[Z.expando] = void 0
					}
					n[Q.expando] && (n[Q.expando] = void 0)
				}
		}
	}), w.fn.extend({
		detach: function(e) {
			return Fe(this, e, !0)
		},
		remove: function(e) {
			return Fe(this, e)
		},
		text: function(e) {
			return j(this, (function(e) {
				return void 0 === e ? w.text(this) : this.empty().each((function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				}))
			}), null, e, arguments.length)
		},
		append: function() {
			return Me(this, arguments, (function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e)
			}))
		},
		prepend: function() {
			return Me(this, arguments, (function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Ie(this, e);
					t.insertBefore(e, t.firstChild)
				}
			}))
		},
		before: function() {
			return Me(this, arguments, (function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			}))
		},
		after: function() {
			return Me(this, arguments, (function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			}))
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ge(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map((function() {
				return w.clone(this, e, t)
			}))
		},
		html: function(e) {
			return j(this, (function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Ae.test(e) && !me[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = w.htmlPrefilter(e);
					try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ge(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}), null, e, arguments.length)
		},
		replaceWith: function() {
			var e = [];
			return Me(this, arguments, (function(t) {
				var n = this.parentNode;
				w.inArray(this, e) < 0 && (w.cleanData(ge(this)), n && n.replaceChild(t, this))
			}), e)
		}
	}), w.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, (function(e, t) {
		w.fn[e] = function(e) {
			for (var n, r = [], i = w(e), a = i.length - 1, s = 0; s <= a; s++) n = s === a ? this : this.clone(!0), w(i[s])[t](n), o.apply(r, n.get());
			return this.pushStack(r)
		}
	}));
	var Le = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
		We = function(t) {
			var n = t.ownerDocument.defaultView;
			return n && n.opener || (n = e), n.getComputedStyle(t)
		},
		Ue = new RegExp(ae.join("|"), "i");
	! function() {
		function t() {
			if (d) {
				c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", _e.appendChild(c).appendChild(d);
				var t = e.getComputedStyle(d);
				i = "1%" !== t.top, l = 12 === n(t.marginLeft), d.style.right = "60%", o = 36 === n(t.right), a = 36 === n(t.width), d.style.position = "absolute", s = 36 === d.offsetWidth || "absolute", _e.removeChild(c), d = null
			}
		}

		function n(e) {
			return Math.round(parseFloat(e))
		}
		var i, a, s, o, l, c = r.createElement("div"),
			d = r.createElement("div");
		d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === d.style.backgroundClip, w.extend(p, {
			boxSizingReliable: function() {
				return t(), a
			},
			pixelBoxStyles: function() {
				return t(), o
			},
			pixelPosition: function() {
				return t(), i
			},
			reliableMarginLeft: function() {
				return t(), l
			},
			scrollboxSize: function() {
				return t(), s
			}
		}))
	}();

	function He(e, t, n) {
		var r, i, a, s, o = e.style;
		return (n = n || We(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (s = w.style(e, t)), !p.pixelBoxStyles() && Le.test(s) && Ue.test(t) && (r = o.width, i = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = r, o.minWidth = i, o.maxWidth = a)), void 0 !== s ? s + "" : s
	}

	function ze(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}
	var je = /^(none|table(?!-c[ea]).+)/,
		Ge = /^--/,
		Ve = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ye = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Xe = ["Webkit", "Moz", "ms"],
		Ke = r.createElement("div").style;

	function qe(e) {
		if (e in Ke) return e;
		var t = e[0].toUpperCase() + e.slice(1),
			n = Xe.length;
		while (n--)
			if ((e = Xe[n] + t) in Ke) return e
	}

	function Ze(e) {
		var t = w.cssProps[e];
		return t || (t = w.cssProps[e] = qe(e) || e), t
	}

	function Qe(e, t, n) {
		var r = ie.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function Je(e, t, n, r, i, a) {
		var s = "width" === t ? 1 : 0,
			o = 0,
			l = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; s < 4; s += 2) "margin" === n && (l += w.css(e, n + ae[s], !0, i)), r ? ("content" === n && (l -= w.css(e, "padding" + ae[s], !0, i)), "margin" !== n && (l -= w.css(e, "border" + ae[s] + "Width", !0, i))) : (l += w.css(e, "padding" + ae[s], !0, i), "padding" !== n ? l += w.css(e, "border" + ae[s] + "Width", !0, i) : o += w.css(e, "border" + ae[s] + "Width", !0, i));
		return !r && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5))), l
	}

	function et(e, t, n) {
		var r = We(e),
			i = He(e, t, r),
			a = "border-box" === w.css(e, "boxSizing", !1, r),
			s = a;
		if (Le.test(i)) {
			if (!n) return i;
			i = "auto"
		}
		return s = s && (p.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (i = parseFloat(i) || 0) + Je(e, t, n || (a ? "border" : "content"), s, r, i) + "px"
	}
	w.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = He(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
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
			zoom: !0
		},
		cssProps: {},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, a, s, o = X(t),
					l = Ge.test(t),
					c = e.style;
				if (l || (t = Ze(o)), s = w.cssHooks[t] || w.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];
				"string" == (a = typeof n) && (i = ie.exec(n)) && i[1] && (n = le(e, t, i), a = "number"), null != n && n === n && ("number" === a && (n += i && i[3] || (w.cssNumber[o] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
			}
		},
		css: function(e, t, n, r) {
			var i, a, s, o = X(t);
			return Ge.test(t) || (t = Ze(o)), (s = w.cssHooks[t] || w.cssHooks[o]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = He(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (a = parseFloat(i), !0 === n || isFinite(a) ? a || 0 : i) : i
		}
	}), w.each(["height", "width"], (function(e, t) {
		w.cssHooks[t] = {
			get: function(e, n, r) {
				if (n) return !je.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : oe(e, Ve, (function() {
					return et(e, t, r)
				}))
			},
			set: function(e, n, r) {
				var i, a = We(e),
					s = "border-box" === w.css(e, "boxSizing", !1, a),
					o = r && Je(e, t, r, s, a);
				return s && p.scrollboxSize() === a.position && (o -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - Je(e, t, "border", !1, a) - .5)), o && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Qe(e, n, o)
			}
		}
	})), w.cssHooks.marginLeft = ze(p.reliableMarginLeft, (function(e, t) {
		if (t) return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {
			marginLeft: 0
		}, (function() {
			return e.getBoundingClientRect().left
		}))) + "px"
	})), w.each({
		margin: "",
		padding: "",
		border: "Width"
	}, (function(e, t) {
		w.cssHooks[e + t] = {
			expand: function(n) {
				for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ae[r] + t] = a[r] || a[r - 2] || a[0];
				return i
			}
		}, "margin" !== e && (w.cssHooks[e + t].set = Qe)
	})), w.fn.extend({
		css: function(e, t) {
			return j(this, (function(e, t, n) {
				var r, i, a = {},
					s = 0;
				if (Array.isArray(t)) {
					for (r = We(e), i = t.length; s < i; s++) a[t[s]] = w.css(e, t[s], !1, r);
					return a
				}
				return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
			}), e, t, arguments.length > 1)
		}
	});

	function tt(e, t, n, r, i) {
		return new tt.prototype.init(e, t, n, r, i)
	}
	w.Tween = tt, tt.prototype = {
		constructor: tt,
		init: function(e, t, n, r, i, a) {
			this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (w.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = tt.propHooks[this.prop];
			return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = tt.propHooks[this.prop];
			return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
		}
	}, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function(e) {
				w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, w.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, w.fx = tt.prototype.init, w.fx.step = {};
	var nt, rt, it = /^(?:toggle|show|hide)$/,
		at = /queueHooks$/;

	function st() {
		rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, w.fx.interval), w.fx.tick())
	}

	function ot() {
		return e.setTimeout((function() {
			nt = void 0
		})), nt = Date.now()
	}

	function lt(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ae[r])] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function ct(e, t, n) {
		for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), a = 0, s = i.length; a < s; a++)
			if (r = i[a].call(n, t, e)) return r
	}

	function dt(e, t, n) {
		var r, i, a, s, o, l, c, d, u = "width" in t || "height" in t,
			f = this,
			h = {},
			p = e.style,
			m = e.nodeType && se(e),
			g = Z.get(e, "fxshow");
		n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function() {
			s.unqueued || o()
		}), s.unqueued++, f.always((function() {
			f.always((function() {
				s.unqueued--, w.queue(e, "fx").length || s.empty.fire()
			}))
		})));
		for (r in t)
			if (i = t[r], it.test(i)) {
				if (delete t[r], a = a || "toggle" === i, i === (m ? "hide" : "show")) {
					if ("show" !== i || !g || void 0 === g[r]) continue;
					m = !0
				}
				h[r] = g && g[r] || w.style(e, r)
			} if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h)) {
			u && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = Z.get(e, "display")), "none" === (d = w.css(e, "display")) && (c ? d = c : (ue([e], !0), c = e.style.display || c, d = w.css(e, "display"), ue([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === w.css(e, "float") && (l || (f.done((function() {
				p.display = c
			})), null == c && (d = p.display, c = "none" === d ? "" : d)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always((function() {
				p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
			}))), l = !1;
			for (r in h) l || (g ? "hidden" in g && (m = g.hidden) : g = Z.access(e, "fxshow", {
				display: c
			}), a && (g.hidden = !m), m && ue([e], !0), f.done((function() {
				m || ue([e]), Z.remove(e, "fxshow");
				for (r in h) w.style(e, r, h[r])
			}))), l = ct(m ? g[r] : 0, r, f), r in g || (g[r] = l.start, m && (l.end = l.start, l.start = 0))
		}
	}

	function ut(e, t) {
		var n, r, i, a, s;
		for (n in e)
			if (r = X(n), i = t[r], a = e[n], Array.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), (s = w.cssHooks[r]) && "expand" in s) {
				a = s.expand(a), delete e[r];
				for (n in a) n in e || (e[n] = a[n], t[n] = i)
			} else t[r] = i
	}

	function ft(e, t, n) {
		var r, i, a = 0,
			s = ft.prefilters.length,
			o = w.Deferred().always((function() {
				delete l.elem
			})),
			l = function() {
				if (i) return !1;
				for (var t = nt || ot(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), a = 0, s = c.tweens.length; a < s; a++) c.tweens[a].run(r);
				return o.notifyWith(e, [c, r, n]), r < 1 && s ? n : (s || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1)
			},
			c = o.promise({
				elem: e,
				props: w.extend({}, t),
				opts: w.extend(!0, {
					specialEasing: {},
					easing: w.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: nt || ot(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? c.tweens.length : 0;
					if (i) return this;
					for (i = !0; n < r; n++) c.tweens[n].run(1);
					return t ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]), this
				}
			}),
			d = c.props;
		for (ut(d, c.opts.specialEasing); a < s; a++)
			if (r = ft.prefilters[a].call(c, e, d, c.opts)) return m(r.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
		return w.map(d, ct, c), m(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
			elem: e,
			anim: c,
			queue: c.opts.queue
		})), c
	}
	w.Animation = w.extend(ft, {
			tweeners: {
				"*": [function(e, t) {
					var n = this.createTween(e, t);
					return le(n.elem, e, ie.exec(t), n), n
				}]
			},
			tweener: function(e, t) {
				m(e) ? (t = e, e = ["*"]) : e = e.match(O);
				for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
			},
			prefilters: [dt],
			prefilter: function(e, t) {
				t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
			}
		}), w.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? w.extend({}, e) : {
				complete: n || !n && t || m(e) && e,
				duration: e,
				easing: n && t || t && !m(t) && t
			};
			return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
				m(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
			}, r
		}, w.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(se).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(e, t, n, r) {
				var i = w.isEmptyObject(e),
					a = w.speed(t, n, r),
					s = function() {
						var t = ft(this, w.extend({}, e), a);
						(i || Z.get(this, "finish")) && t.stop(!0)
					};
				return s.finish = s, i || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
			},
			stop: function(e, t, n) {
				var r = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
					var t = !0,
						i = null != e && e + "queueHooks",
						a = w.timers,
						s = Z.get(this);
					if (i) s[i] && s[i].stop && r(s[i]);
					else
						for (i in s) s[i] && s[i].stop && at.test(i) && r(s[i]);
					for (i = a.length; i--;) a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1));
					!t && n || w.dequeue(this, e)
				}))
			},
			finish: function(e) {
				return !1 !== e && (e = e || "fx"), this.each((function() {
					var t, n = Z.get(this),
						r = n[e + "queue"],
						i = n[e + "queueHooks"],
						a = w.timers,
						s = r ? r.length : 0;
					for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
					for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				}))
			}
		}), w.each(["toggle", "show", "hide"], (function(e, t) {
			var n = w.fn[t];
			w.fn[t] = function(e, r, i) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, i)
			}
		})), w.each({
			slideDown: lt("show"),
			slideUp: lt("hide"),
			slideToggle: lt("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, (function(e, t) {
			w.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r)
			}
		})), w.timers = [], w.fx.tick = function() {
			var e, t = 0,
				n = w.timers;
			for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || w.fx.stop(), nt = void 0
		}, w.fx.timer = function(e) {
			w.timers.push(e), w.fx.start()
		}, w.fx.interval = 13, w.fx.start = function() {
			rt || (rt = !0, st())
		}, w.fx.stop = function() {
			rt = null
		}, w.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, w.fn.delay = function(t, n) {
			return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, (function(n, r) {
				var i = e.setTimeout(n, t);
				r.stop = function() {
					e.clearTimeout(i)
				}
			}))
		},
		function() {
			var e = r.createElement("input"),
				t = r.createElement("select").appendChild(r.createElement("option"));
			e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
		}();
	var ht, pt = w.expr.attrHandle;
	w.fn.extend({
		attr: function(e, t) {
			return j(this, w.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each((function() {
				w.removeAttr(this, e)
			}))
		}
	}), w.extend({
		attr: function(e, t, n) {
			var r, i, a = e.nodeType;
			if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === a && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!p.radioValue && "radio" === t && T(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, r = 0,
				i = t && t.match(O);
			if (i && 1 === e.nodeType)
				while (n = i[r++]) e.removeAttribute(n)
		}
	}), ht = {
		set: function(e, t, n) {
			return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, w.each(w.expr.match.bool.source.match(/\w+/g), (function(e, t) {
		var n = pt[t] || w.find.attr;
		pt[t] = function(e, t, r) {
			var i, a, s = t.toLowerCase();
			return r || (a = pt[s], pt[s] = i, i = null != n(e, t, r) ? s : null, pt[s] = a), i
		}
	}));
	var mt = /^(?:input|select|textarea|button)$/i,
		gt = /^(?:a|area)$/i;
	w.fn.extend({
		prop: function(e, t) {
			return j(this, w.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each((function() {
				delete this[w.propFix[e] || e]
			}))
		}
	}), w.extend({
		prop: function(e, t, n) {
			var r, i, a = e.nodeType;
			if (3 !== a && 8 !== a && 2 !== a) return 1 === a && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = w.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : mt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), p.optSelected || (w.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
		w.propFix[this.toLowerCase()] = this
	}));

	function vt(e) {
		return (e.match(O) || []).join(" ")
	}

	function bt(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function yt(e) {
		return Array.isArray(e) ? e : "string" == typeof e ? e.match(O) || [] : []
	}
	w.fn.extend({
		addClass: function(e) {
			var t, n, r, i, a, s, o, l = 0;
			if (m(e)) return this.each((function(t) {
				w(this).addClass(e.call(this, t, bt(this)))
			}));
			if ((t = yt(e)).length)
				while (n = this[l++])
					if (i = bt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
						s = 0;
						while (a = t[s++]) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
						i !== (o = vt(r)) && n.setAttribute("class", o)
					} return this
		},
		removeClass: function(e) {
			var t, n, r, i, a, s, o, l = 0;
			if (m(e)) return this.each((function(t) {
				w(this).removeClass(e.call(this, t, bt(this)))
			}));
			if (!arguments.length) return this.attr("class", "");
			if ((t = yt(e)).length)
				while (n = this[l++])
					if (i = bt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
						s = 0;
						while (a = t[s++])
							while (r.indexOf(" " + a + " ") > -1) r = r.replace(" " + a + " ", " ");
						i !== (o = vt(r)) && n.setAttribute("class", o)
					} return this
		},
		toggleClass: function(e, t) {
			var n = typeof e,
				r = "string" === n || Array.isArray(e);
			return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each((function(n) {
				w(this).toggleClass(e.call(this, n, bt(this), t), t)
			})) : this.each((function() {
				var t, i, a, s;
				if (r) {
					i = 0, a = w(this), s = yt(e);
					while (t = s[i++]) a.hasClass(t) ? a.removeClass(t) : a.addClass(t)
				} else void 0 !== e && "boolean" !== n || ((t = bt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
			}))
		},
		hasClass: function(e) {
			var t, n, r = 0;
			t = " " + e + " ";
			while (n = this[r++])
				if (1 === n.nodeType && (" " + vt(bt(n)) + " ").indexOf(t) > -1) return !0;
			return !1
		}
	});
	var _t = /\r/g;
	w.fn.extend({
		val: function(e) {
			var t, n, r, i = this[0]; {
				if (arguments.length) return r = m(e), this.each((function(n) {
					var i;
					1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, (function(e) {
						return null == e ? "" : e + ""
					}))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				}));
				if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(_t, "") : null == n ? "" : n
			}
		}
	}), w.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = w.find.attr(e, "value");
					return null != t ? t : vt(w.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, r, i = e.options,
						a = e.selectedIndex,
						s = "select-one" === e.type,
						o = s ? null : [],
						l = s ? a + 1 : i.length;
					for (r = a < 0 ? l : s ? a : 0; r < l; r++)
						if (((n = i[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !T(n.parentNode, "optgroup"))) {
							if (t = w(n).val(), s) return t;
							o.push(t)
						} return o
				},
				set: function(e, t) {
					var n, r, i = e.options,
						a = w.makeArray(t),
						s = i.length;
					while (s--)((r = i[s]).selected = w.inArray(w.valHooks.option.get(r), a) > -1) && (n = !0);
					return n || (e.selectedIndex = -1), a
				}
			}
		}
	}), w.each(["radio", "checkbox"], (function() {
		w.valHooks[this] = {
			set: function(e, t) {
				if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
			}
		}, p.checkOn || (w.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	})), p.focusin = "onfocusin" in e;
	var wt = /^(?:focusinfocus|focusoutblur)$/,
		Ct = function(e) {
			e.stopPropagation()
		};
	w.extend(w.event, {
		trigger: function(t, n, i, a) {
			var s, o, l, c, d, f, h, p, v = [i || r],
				b = u.call(t, "type") ? t.type : t,
				y = u.call(t, "namespace") ? t.namespace.split(".") : [];
			if (o = p = l = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(b + w.event.triggered) && (b.indexOf(".") > -1 && (b = (y = b.split(".")).shift(), y.sort()), d = b.indexOf(":") < 0 && "on" + b, t = t[w.expando] ? t : new w.Event(b, "object" == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), h = w.event.special[b] || {}, a || !h.trigger || !1 !== h.trigger.apply(i, n))) {
				if (!a && !h.noBubble && !g(i)) {
					for (c = h.delegateType || b, wt.test(c + b) || (o = o.parentNode); o; o = o.parentNode) v.push(o), l = o;
					l === (i.ownerDocument || r) && v.push(l.defaultView || l.parentWindow || e)
				}
				s = 0;
				while ((o = v[s++]) && !t.isPropagationStopped()) p = o, t.type = s > 1 ? c : h.bindType || b, (f = (Z.get(o, "events") || {})[t.type] && Z.get(o, "handle")) && f.apply(o, n), (f = d && o[d]) && f.apply && K(o) && (t.result = f.apply(o, n), !1 === t.result && t.preventDefault());
				return t.type = b, a || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !K(i) || d && m(i[b]) && !g(i) && ((l = i[d]) && (i[d] = null), w.event.triggered = b, t.isPropagationStopped() && p.addEventListener(b, Ct), i[b](), t.isPropagationStopped() && p.removeEventListener(b, Ct), w.event.triggered = void 0, l && (i[d] = l)), t.result
			}
		},
		simulate: function(e, t, n) {
			var r = w.extend(new w.Event, n, {
				type: e,
				isSimulated: !0
			});
			w.event.trigger(r, null, t)
		}
	}), w.fn.extend({
		trigger: function(e, t) {
			return this.each((function() {
				w.event.trigger(e, t, this)
			}))
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return w.event.trigger(e, t, n, !0)
		}
	}), p.focusin || w.each({
		focus: "focusin",
		blur: "focusout"
	}, (function(e, t) {
		var n = function(e) {
			w.event.simulate(t, e.target, w.event.fix(e))
		};
		w.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this,
					i = Z.access(r, t);
				i || r.addEventListener(e, n, !0), Z.access(r, t, (i || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this,
					i = Z.access(r, t) - 1;
				i ? Z.access(r, t, i) : (r.removeEventListener(e, n, !0), Z.remove(r, t))
			}
		}
	}));
	var kt = e.location,
		Et = Date.now(),
		St = /\?/;
	w.parseXML = function(t) {
		var n;
		if (!t || "string" != typeof t) return null;
		try {
			n = (new e.DOMParser).parseFromString(t, "text/xml")
		} catch (e) {
			n = void 0
		}
		return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
	};
	var $t = /\[\]$/,
		xt = /\r?\n/g,
		Tt = /^(?:submit|button|image|reset|file)$/i,
		At = /^(?:input|select|textarea|keygen)/i;

	function Dt(e, t, n, r) {
		var i;
		if (Array.isArray(t)) w.each(t, (function(t, i) {
			n || $t.test(e) ? r(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
		}));
		else if (n || "object" !== y(t)) r(e, t);
		else
			for (i in t) Dt(e + "[" + i + "]", t[i], n, r)
	}
	w.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				var n = m(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function() {
			i(this.name, this.value)
		}));
		else
			for (n in e) Dt(n, e[n], t, i);
		return r.join("&")
	}, w.fn.extend({
		serialize: function() {
			return w.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map((function() {
				var e = w.prop(this, "elements");
				return e ? w.makeArray(e) : this
			})).filter((function() {
				var e = this.type;
				return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Tt.test(e) && (this.checked || !fe.test(e))
			})).map((function(e, t) {
				var n = w(this).val();
				return null == n ? null : Array.isArray(n) ? w.map(n, (function(e) {
					return {
						name: t.name,
						value: e.replace(xt, "\r\n")
					}
				})) : {
					name: t.name,
					value: n.replace(xt, "\r\n")
				}
			})).get()
		}
	});
	var Rt = /%20/g,
		It = /#.*$/,
		Nt = /([?&])_=[^&]*/,
		Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Ot = /^(?:GET|HEAD)$/,
		Mt = /^\/\//,
		Ft = {},
		Lt = {},
		Wt = "*/".concat("*"),
		Ut = r.createElement("a");
	Ut.href = kt.href;

	function Ht(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				a = t.toLowerCase().match(O) || [];
			if (m(n))
				while (r = a[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function zt(e, t, n, r) {
		var i = {},
			a = e === Lt;

		function s(o) {
			var l;
			return i[o] = !0, w.each(e[o] || [], (function(e, o) {
				var c = o(t, n, r);
				return "string" != typeof c || a || i[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
			})), l
		}
		return s(t.dataTypes[0]) || !i["*"] && s("*")
	}

	function jt(e, t) {
		var n, r, i = w.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && w.extend(!0, e, r), e
	}

	function Gt(e, t, n) {
		var r, i, a, s, o = e.contents,
			l = e.dataTypes;
		while ("*" === l[0]) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r)
			for (i in o)
				if (o[i] && o[i].test(r)) {
					l.unshift(i);
					break
				} if (l[0] in n) a = l[0];
		else {
			for (i in n) {
				if (!l[0] || e.converters[i + " " + l[0]]) {
					a = i;
					break
				}
				s || (s = i)
			}
			a = a || s
		}
		if (a) return a !== l[0] && l.unshift(a), n[a]
	}

	function Vt(e, t, n, r) {
		var i, a, s, o, l, c = {},
			d = e.dataTypes.slice();
		if (d[1])
			for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
		a = d.shift();
		while (a)
			if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = d.shift())
				if ("*" === a) a = l;
				else if ("*" !== l && l !== a) {
			if (!(s = c[l + " " + a] || c["* " + a]))
				for (i in c)
					if ((o = i.split(" "))[1] === a && (s = c[l + " " + o[0]] || c["* " + o[0]])) {
						!0 === s ? s = c[i] : !0 !== c[i] && (a = o[0], d.unshift(o[1]));
						break
					} if (!0 !== s)
				if (s && e["throws"]) t = s(t);
				else try {
					t = s(t)
				} catch (e) {
					return {
						state: "parsererror",
						error: s ? e : "No conversion from " + l + " to " + a
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}
	w.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: kt.href,
			type: "GET",
			isLocal: Pt.test(kt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Wt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": w.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? jt(jt(e, w.ajaxSettings), t) : jt(w.ajaxSettings, e)
		},
		ajaxPrefilter: Ht(Ft),
		ajaxTransport: Ht(Lt),
		ajax: function(t, n) {
			"object" == typeof t && (n = t, t = void 0), n = n || {};
			var i, a, s, o, l, c, d, u, f, h, p = w.ajaxSetup({}, n),
				m = p.context || p,
				g = p.context && (m.nodeType || m.jquery) ? w(m) : w.event,
				v = w.Deferred(),
				b = w.Callbacks("once memory"),
				y = p.statusCode || {},
				_ = {},
				C = {},
				k = "canceled",
				E = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (d) {
							if (!o) {
								o = {};
								while (t = Bt.exec(s)) o[t[1].toLowerCase()] = t[2]
							}
							t = o[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return d ? s : null
					},
					setRequestHeader: function(e, t) {
						return null == d && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, _[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == d && (p.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (d) E.always(e[E.status]);
							else
								for (t in e) y[t] = [y[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || k;
						return i && i.abort(t), S(0, t), this
					}
				};
			if (v.promise(E), p.url = ((t || p.url || kt.href) + "").replace(Mt, kt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(O) || [""], null == p.crossDomain) {
				c = r.createElement("a");
				try {
					c.href = p.url, c.href = c.href, p.crossDomain = Ut.protocol + "//" + Ut.host != c.protocol + "//" + c.host
				} catch (e) {
					p.crossDomain = !0
				}
			}
			if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), zt(Ft, p, n, E), d) return E;
			(u = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ot.test(p.type), a = p.url.replace(It, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Rt, "+")) : (h = p.url.slice(a.length), p.data && (p.processData || "string" == typeof p.data) && (a += (St.test(a) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (a = a.replace(Nt, "$1"), h = (St.test(a) ? "&" : "?") + "_=" + Et++ + h), p.url = a + h), p.ifModified && (w.lastModified[a] && E.setRequestHeader("If-Modified-Since", w.lastModified[a]), w.etag[a] && E.setRequestHeader("If-None-Match", w.etag[a])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && E.setRequestHeader("Content-Type", p.contentType), E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : p.accepts["*"]);
			for (f in p.headers) E.setRequestHeader(f, p.headers[f]);
			if (p.beforeSend && (!1 === p.beforeSend.call(m, E, p) || d)) return E.abort();
			if (k = "abort", b.add(p.complete), E.done(p.success), E.fail(p.error), i = zt(Lt, p, n, E)) {
				if (E.readyState = 1, u && g.trigger("ajaxSend", [E, p]), d) return E;
				p.async && p.timeout > 0 && (l = e.setTimeout((function() {
					E.abort("timeout")
				}), p.timeout));
				try {
					d = !1, i.send(_, S)
				} catch (e) {
					if (d) throw e;
					S(-1, e)
				}
			} else S(-1, "No Transport");

			function S(t, n, r, o) {
				var c, f, h, _, C, k = n;
				d || (d = !0, l && e.clearTimeout(l), i = void 0, s = o || "", E.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (_ = Gt(p, E, r)), _ = Vt(p, _, E, c), c ? (p.ifModified && ((C = E.getResponseHeader("Last-Modified")) && (w.lastModified[a] = C), (C = E.getResponseHeader("etag")) && (w.etag[a] = C)), 204 === t || "HEAD" === p.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = _.state, f = _.data, c = !(h = _.error))) : (h = k, !t && k || (k = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || k) + "", c ? v.resolveWith(m, [f, k, E]) : v.rejectWith(m, [E, k, h]), E.statusCode(y), y = void 0, u && g.trigger(c ? "ajaxSuccess" : "ajaxError", [E, p, c ? f : h]), b.fireWith(m, [E, k]), u && (g.trigger("ajaxComplete", [E, p]), --w.active || w.event.trigger("ajaxStop")))
			}
			return E
		},
		getJSON: function(e, t, n) {
			return w.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return w.get(e, void 0, t, "script")
		}
	}), w.each(["get", "post"], (function(e, t) {
		w[t] = function(e, n, r, i) {
			return m(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			}, w.isPlainObject(e) && e))
		}
	})), w._evalUrl = function(e) {
		return w.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, w.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (m(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
				var e = this;
				while (e.firstElementChild) e = e.firstElementChild;
				return e
			})).append(this)), this
		},
		wrapInner: function(e) {
			return m(e) ? this.each((function(t) {
				w(this).wrapInner(e.call(this, t))
			})) : this.each((function() {
				var t = w(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			}))
		},
		wrap: function(e) {
			var t = m(e);
			return this.each((function(n) {
				w(this).wrapAll(t ? e.call(this, n) : e)
			}))
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each((function() {
				w(this).replaceWith(this.childNodes)
			})), this
		}
	}), w.expr.pseudos.hidden = function(e) {
		return !w.expr.pseudos.visible(e)
	}, w.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, w.ajaxSettings.xhr = function() {
		try {
			return new e.XMLHttpRequest
		} catch (e) {}
	};
	var Yt = {
			0: 200,
			1223: 204
		},
		Xt = w.ajaxSettings.xhr();
	p.cors = !!Xt && "withCredentials" in Xt, p.ajax = Xt = !!Xt, w.ajaxTransport((function(t) {
		var n, r;
		if (p.cors || Xt && !t.crossDomain) return {
			send: function(i, a) {
				var s, o = t.xhr();
				if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (s in t.xhrFields) o[s] = t.xhrFields[s];
				t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
				for (s in i) o.setRequestHeader(s, i[s]);
				n = function(e) {
					return function() {
						n && (n = r = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(Yt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
							binary: o.response
						} : {
							text: o.responseText
						}, o.getAllResponseHeaders()))
					}
				}, o.onload = n(), r = o.onerror = o.ontimeout = n("error"), void 0 !== o.onabort ? o.onabort = r : o.onreadystatechange = function() {
					4 === o.readyState && e.setTimeout((function() {
						n && r()
					}))
				}, n = n("abort");
				try {
					o.send(t.hasContent && t.data || null)
				} catch (e) {
					if (n) throw e
				}
			},
			abort: function() {
				n && n()
			}
		}
	})), w.ajaxPrefilter((function(e) {
		e.crossDomain && (e.contents.script = !1)
	})), w.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return w.globalEval(e), e
			}
		}
	}), w.ajaxPrefilter("script", (function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	})), w.ajaxTransport("script", (function(e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function(i, a) {
					t = w("<script>").prop({
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type)
					}), r.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	}));
	var Kt = [],
		qt = /(=)\?(?=&|$)|\?\?/;
	w.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Kt.pop() || w.expando + "_" + Et++;
			return this[e] = !0, e
		}
	}), w.ajaxPrefilter("json jsonp", (function(t, n, r) {
		var i, a, s, o = !1 !== t.jsonp && (qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(t.data) && "data");
		if (o || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(qt, "$1" + i) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return s || w.error(i + " was not called"), s[0]
		}, t.dataTypes[0] = "json", a = e[i], e[i] = function() {
			s = arguments
		}, r.always((function() {
			void 0 === a ? w(e).removeProp(i) : e[i] = a, t[i] && (t.jsonpCallback = n.jsonpCallback, Kt.push(i)), s && m(a) && a(s[0]), s = a = void 0
		})), "script"
	})), p.createHTMLDocument = function() {
		var e = r.implementation.createHTMLDocument("").body;
		return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
	}(), w.parseHTML = function(e, t, n) {
		if ("string" != typeof e) return [];
		"boolean" == typeof t && (n = t, t = !1);
		var i, a, s;
		return t || (p.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), a = A.exec(e), s = !n && [], a ? [t.createElement(a[1])] : (a = ye([e], t, s), s && s.length && w(s).remove(), w.merge([], a.childNodes))
	}, w.fn.load = function(e, t, n) {
		var r, i, a, s = this,
			o = e.indexOf(" ");
		return o > -1 && (r = vt(e.slice(o)), e = e.slice(0, o)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && w.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done((function(e) {
			a = arguments, s.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
		})).always(n && function(e, t) {
			s.each((function() {
				n.apply(this, a || [e.responseText, t, e])
			}))
		}), this
	}, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
		w.fn[t] = function(e) {
			return this.on(t, e)
		}
	})), w.expr.pseudos.animated = function(e) {
		return w.grep(w.timers, (function(t) {
			return e === t.elem
		})).length
	}, w.offset = {
		setOffset: function(e, t, n) {
			var r, i, a, s, o, l, c, d = w.css(e, "position"),
				u = w(e),
				f = {};
			"static" === d && (e.style.position = "relative"), o = u.offset(), a = w.css(e, "top"), l = w.css(e, "left"), (c = ("absolute" === d || "fixed" === d) && (a + l).indexOf("auto") > -1) ? (s = (r = u.position()).top, i = r.left) : (s = parseFloat(a) || 0, i = parseFloat(l) || 0), m(t) && (t = t.call(e, n, w.extend({}, o))), null != t.top && (f.top = t.top - o.top + s), null != t.left && (f.left = t.left - o.left + i), "using" in t ? t.using.call(e, f) : u.css(f)
		}
	}, w.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each((function(t) {
				w.offset.setOffset(this, e, t)
			}));
			var t, n, r = this[0];
			if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
				top: t.top + n.pageYOffset,
				left: t.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			}
		},
		position: function() {
			if (this[0]) {
				var e, t, n, r = this[0],
					i = {
						top: 0,
						left: 0
					};
				if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
				else {
					t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
					while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
					e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - i.top - w.css(r, "marginTop", !0),
					left: t.left - i.left - w.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map((function() {
				var e = this.offsetParent;
				while (e && "static" === w.css(e, "position")) e = e.offsetParent;
				return e || _e
			}))
		}
	}), w.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, (function(e, t) {
		var n = "pageYOffset" === t;
		w.fn[e] = function(r) {
			return j(this, (function(e, r, i) {
				var a;
				if (g(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === i) return a ? a[t] : e[r];
				a ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : e[r] = i
			}), e, r, arguments.length)
		}
	})), w.each(["top", "left"], (function(e, t) {
		w.cssHooks[t] = ze(p.pixelPosition, (function(e, n) {
			if (n) return n = He(e, t), Le.test(n) ? w(e).position()[t] + "px" : n
		}))
	})), w.each({
		Height: "height",
		Width: "width"
	}, (function(e, t) {
		w.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, (function(n, r) {
			w.fn[r] = function(i, a) {
				var s = arguments.length && (n || "boolean" != typeof i),
					o = n || (!0 === i || !0 === a ? "margin" : "border");
				return j(this, (function(t, n, i) {
					var a;
					return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === i ? w.css(t, n, o) : w.style(t, n, i, o)
				}), t, s ? i : void 0, s)
			}
		}))
	})), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
		w.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	})), w.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), w.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	}), w.proxy = function(e, t) {
		var n, r, i;
		if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = a.call(arguments, 2), i = function() {
			return e.apply(t || this, r.concat(a.call(arguments)))
		}, i.guid = e.guid = e.guid || w.guid++, i
	}, w.holdReady = function(e) {
		e ? w.readyWait++ : w.ready(!0)
	}, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = T, w.isFunction = m, w.isWindow = g, w.camelCase = X, w.type = y, w.now = Date.now, w.isNumeric = function(e) {
		var t = w.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, "function" == typeof define && define.amd && define("jquery", [], (function() {
		return w
	}));
	var Zt = e.jQuery,
		Qt = e.$;
	return w.noConflict = function(t) {
		return e.$ === w && (e.$ = Qt), t && e.jQuery === w && (e.jQuery = Zt), w
	}, t || (e.jQuery = e.$ = w), w
}));