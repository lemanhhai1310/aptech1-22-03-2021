/*!version: 210207.2048 */
!function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document)
      throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  "use strict";
  var i = [],
    n = Object.getPrototypeOf,
    s = i.slice,
    a = i.flat ? function(e) {
      return i.flat.call(e)
    } : function(e) {
      return i.concat.apply([], e)
    },
    r = i.push,
    o = i.indexOf,
    l = {},
    d = l.toString,
    u = l.hasOwnProperty,
    c = u.toString,
    h = c.call(Object),
    p = {},
    f = function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
    },
    m = function(e) {
      return null != e && e === e.window
    },
    v = e.document,
    g = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
  function y(e, t, i) {
    var n,
      s,
      a = (i = i || v).createElement("script");
    if (a.text = e, t)
      for (n in g)
        (s = t[n] || t.getAttribute && t.getAttribute(n)) && a.setAttribute(n, s);
    i.head.appendChild(a).parentNode.removeChild(a)
  }
  function b(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[d.call(e)] || "object" : typeof e
  }
  var w = function(e, t) {
    return new w.fn.init(e, t)
  };
  function x(e) {
    var t = !!e && "length" in e && e.length,
      i = b(e);
    return !f(e) && !m(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  w.fn = w.prototype = {
    jquery: "3.5.1",
    constructor: w,
    length: 0,
    toArray: function() {
      return s.call(this)
    },
    get: function(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function(e) {
      var t = w.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function(e) {
      return w.each(this, e)
    },
    map: function(e) {
      return this.pushStack(w.map(this, function(t, i) {
        return e.call(t, i, t)
      }))
    },
    slice: function() {
      return this.pushStack(s.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    even: function() {
      return this.pushStack(w.grep(this, function(e, t) {
        return (t + 1) % 2
      }))
    },
    odd: function() {
      return this.pushStack(w.grep(this, function(e, t) {
        return t % 2
      }))
    },
    eq: function(e) {
      var t = this.length,
        i = +e + (e < 0 ? t : 0);
      return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: r,
    sort: i.sort,
    splice: i.splice
  },
    w.extend = w.fn.extend = function() {
      var e,
        t,
        i,
        n,
        s,
        a,
        r = arguments[0] || {},
        o = 1,
        l = arguments.length,
        d = !1;
      for ("boolean" == typeof r && (d = r, r = arguments[o] || {}, o++), "object" == typeof r || f(r) || (r = {}), o === l && (r = this, o--); o < l; o++)
        if (null != (e = arguments[o]))
          for (t in e)
            n = e[t],
            "__proto__" !== t && r !== n && (d && n && (w.isPlainObject(n) || (s = Array.isArray(n))) ? (i = r[t], a = s && !Array.isArray(i) ? [] : s || w.isPlainObject(i) ? i : {}, s = !1, r[t] = w.extend(d, a, n)) : void 0 !== n && (r[t] = n));
      return r
    },
    w.extend({
      expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
        var t,
          i;
        return !(!e || "[object Object]" !== d.call(e)) && (!(t = n(e)) || "function" == typeof (i = u.call(t, "constructor") && t.constructor) && c.call(i) === h)
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e)
          return !1;
        return !0
      },
      globalEval: function(e, t, i) {
        y(e, {
          nonce: t && t.nonce
        }, i)
      },
      each: function(e, t) {
        var i,
          n = 0;
        if (x(e))
          for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++)
            ;
        else
          for (n in e)
            if (!1 === t.call(e[n], n, e[n]))
              break;
        return e
      },
      makeArray: function(e, t) {
        var i = t || [];
        return null != e && (x(Object(e)) ? w.merge(i, "string" == typeof e ? [e] : e) : r.call(i, e)), i
      },
      inArray: function(e, t, i) {
        return null == t ? -1 : o.call(t, e, i)
      },
      merge: function(e, t) {
        for (var i = +t.length, n = 0, s = e.length; n < i; n++)
          e[s++] = t[n];
        return e.length = s, e
      },
      grep: function(e, t, i) {
        for (var n = [], s = 0, a = e.length, r = !i; s < a; s++)
          !t(e[s], s) !== r && n.push(e[s]);
        return n
      },
      map: function(e, t, i) {
        var n,
          s,
          r = 0,
          o = [];
        if (x(e))
          for (n = e.length; r < n; r++)
            null != (s = t(e[r], r, i)) && o.push(s);
        else
          for (r in e)
            null != (s = t(e[r], r, i)) && o.push(s);
        return a(o)
      },
      guid: 1,
      support: p
    }),
  "function" == typeof Symbol && (w.fn[Symbol.iterator] = i[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      l["[object " + t + "]"] = t.toLowerCase()
    });
  var T = function(e) {
    var t,
      i,
      n,
      s,
      a,
      r,
      o,
      l,
      d,
      u,
      c,
      h,
      p,
      f,
      m,
      v,
      g,
      y,
      b,
      w = "sizzle" + 1 * new Date,
      x = e.document,
      T = 0,
      E = 0,
      C = le(),
      S = le(),
      k = le(),
      M = le(),
      P = function(e, t) {
        return e === t && (c = !0), 0
      },
      A = {}.hasOwnProperty,
      D = [],
      L = D.pop,
      z = D.push,
      O = D.push,
      I = D.slice,
      $ = function(e, t) {
        for (var i = 0, n = e.length; i < n; i++)
          if (e[i] === t)
            return i;
        return -1
      },
      N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      j = "[\\x20\\t\\r\\n\\f]",
      H = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      _ = "\\[" + j + "*(" + H + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + j + "*\\]",
      q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _ + ")*)|.*)\\)|)",
      B = new RegExp(j + "+", "g"),
      R = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
      F = new RegExp("^" + j + "*," + j + "*"),
      G = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
      W = new RegExp(j + "|>"),
      X = new RegExp(q),
      V = new RegExp("^" + H + "$"),
      Y = {
        ID: new RegExp("^#(" + H + ")"),
        CLASS: new RegExp("^\\.(" + H + ")"),
        TAG: new RegExp("^(" + H + "|[*])"),
        ATTR: new RegExp("^" + _),
        PSEUDO: new RegExp("^" + q),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + N + ")$", "i"),
        needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
      },
      U = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"),
      ie = function(e, t) {
        var i = "0x" + e.slice(1) - 65536;
        return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
      },
      ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      se = function(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      },
      ae = function() {
        h()
      },
      re = we(function(e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      O.apply(D = I.call(x.childNodes), x.childNodes),
        D[x.childNodes.length].nodeType
    } catch (e) {
      O = {
        apply: D.length ? function(e, t) {
          z.apply(e, I.call(t))
        } : function(e, t) {
          for (var i = e.length, n = 0; e[i++] = t[n++];)
            ;
          e.length = i - 1
        }
      }
    }
    function oe(e, t, n, s) {
      var a,
        o,
        d,
        u,
        c,
        f,
        g,
        y = t && t.ownerDocument,
        x = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x)
        return n;
      if (!s && (h(t), t = t || p, m)) {
        if (11 !== x && (c = Z.exec(e)))
          if (a = c[1]) {
            if (9 === x) {
              if (!(d = t.getElementById(a)))
                return n;
              if (d.id === a)
                return n.push(d), n
            } else if (y && (d = y.getElementById(a)) && b(t, d) && d.id === a)
              return n.push(d), n
          } else {
            if (c[2])
              return O.apply(n, t.getElementsByTagName(e)), n;
            if ((a = c[3]) && i.getElementsByClassName && t.getElementsByClassName)
              return O.apply(n, t.getElementsByClassName(a)), n
          }
        if (i.qsa && !M[e + " "] && (!v || !v.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
          if (g = e, y = t, 1 === x && (W.test(e) || G.test(e))) {
            for ((y = ee.test(e) && ge(t.parentNode) || t) === t && i.scope || ((u = t.getAttribute("id")) ? u = u.replace(ne, se) : t.setAttribute("id", u = w)), o = (f = r(e)).length; o--;)
              f[o] = (u ? "#" + u : ":scope") + " " + be(f[o]);
            g = f.join(",")
          }
          try {
            return O.apply(n, y.querySelectorAll(g)), n
          } catch (t) {
            M(e, !0)
          } finally {
            u === w && t.removeAttribute("id")
          }
        }
      }
      return l(e.replace(R, "$1"), t, n, s)
    }
    function le() {
      var e = [];
      return function t(i, s) {
        return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = s
      }
    }
    function de(e) {
      return e[w] = !0, e
    }
    function ue(e) {
      var t = p.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t),
          t = null
      }
    }
    function ce(e, t) {
      for (var i = e.split("|"), s = i.length; s--;)
        n.attrHandle[i[s]] = t
    }
    function he(e, t) {
      var i = t && e,
        n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (n)
        return n;
      if (i)
        for (; i = i.nextSibling;)
          if (i === t)
            return -1;
      return e ? 1 : -1
    }
    function pe(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }
    function fe(e) {
      return function(t) {
        var i = t.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && t.type === e
      }
    }
    function me(e) {
      return function(t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
      }
    }
    function ve(e) {
      return de(function(t) {
        return t = +t, de(function(i, n) {
          for (var s, a = e([], i.length, t), r = a.length; r--;)
            i[s = a[r]] && (i[s] = !(n[s] = i[s]))
        })
      })
    }
    function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }
    for (t in i = oe.support = {}, a = oe.isXML = function(e) {
      var t = e.namespaceURI,
        i = (e.ownerDocument || e).documentElement;
      return !U.test(t || i && i.nodeName || "HTML")
    }, h = oe.setDocument = function(e) {
      var t,
        s,
        r = e ? e.ownerDocument || e : x;
      return r != p && 9 === r.nodeType && r.documentElement ? (f = (p = r).documentElement, m = !a(p), x != p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", ae, !1) : s.attachEvent && s.attachEvent("onunload", ae)), i.scope = ue(function(e) {
        return f.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
      }), i.attributes = ue(function(e) {
        return e.className = "i", !e.getAttribute("className")
      }), i.getElementsByTagName = ue(function(e) {
        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
      }), i.getElementsByClassName = J.test(p.getElementsByClassName), i.getById = ue(function(e) {
        return f.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
      }), i.getById ? (n.filter.ID = function(e) {
        var t = e.replace(te, ie);
        return function(e) {
          return e.getAttribute("id") === t
        }
      }, n.find.ID = function(e, t) {
        if (void 0 !== t.getElementById && m) {
          var i = t.getElementById(e);
          return i ? [i] : []
        }
      }) : (n.filter.ID = function(e) {
        var t = e.replace(te, ie);
        return function(e) {
          var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return i && i.value === t
        }
      }, n.find.ID = function(e, t) {
        if (void 0 !== t.getElementById && m) {
          var i,
            n,
            s,
            a = t.getElementById(e);
          if (a) {
            if ((i = a.getAttributeNode("id")) && i.value === e)
              return [a];
            for (s = t.getElementsByName(e), n = 0; a = s[n++];)
              if ((i = a.getAttributeNode("id")) && i.value === e)
                return [a]
          }
          return []
        }
      }), n.find.TAG = i.getElementsByTagName ? function(e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
      } : function(e, t) {
        var i,
          n = [],
          s = 0,
          a = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; i = a[s++];)
            1 === i.nodeType && n.push(i);
          return n
        }
        return a
      }, n.find.CLASS = i.getElementsByClassName && function(e, t) {
        if (void 0 !== t.getElementsByClassName && m)
          return t.getElementsByClassName(e)
      }, g = [], v = [], (i.qsa = J.test(p.querySelectorAll)) && (ue(function(e) {
        var t;
        f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
        e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + j + "*(?:''|\"\")"),
        e.querySelectorAll("[selected]").length || v.push("\\[" + j + "*(?:value|" + N + ")"),
        e.querySelectorAll("[id~=" + w + "-]").length || v.push("~="),
          (t = p.createElement("input")).setAttribute("name", ""),
          e.appendChild(t),
        e.querySelectorAll("[name='']").length || v.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"),
        e.querySelectorAll(":checked").length || v.push(":checked"),
        e.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]"),
          e.querySelectorAll("\\\f"),
          v.push("[\\r\\n\\f]")
      }), ue(function(e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = p.createElement("input");
        t.setAttribute("type", "hidden"),
          e.appendChild(t).setAttribute("name", "D"),
        e.querySelectorAll("[name=d]").length && v.push("name" + j + "*[*^$|!~]?="),
        2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
          f.appendChild(e).disabled = !0,
        2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
          e.querySelectorAll("*,:x"),
          v.push(",.*:")
      })), (i.matchesSelector = J.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ue(function(e) {
        i.disconnectedMatch = y.call(e, "*"),
          y.call(e, "[s!='']:x"),
          g.push("!=", q)
      }), v = v.length && new RegExp(v.join("|")), g = g.length && new RegExp(g.join("|")), t = J.test(f.compareDocumentPosition), b = t || J.test(f.contains) ? function(e, t) {
        var i = 9 === e.nodeType ? e.documentElement : e,
          n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
      } : function(e, t) {
        if (t)
          for (; t = t.parentNode;)
            if (t === e)
              return !0;
        return !1
      }, P = t ? function(e, t) {
        if (e === t)
          return c = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e == p || e.ownerDocument == x && b(x, e) ? -1 : t == p || t.ownerDocument == x && b(x, t) ? 1 : u ? $(u, e) - $(u, t) : 0 : 4 & n ? -1 : 1)
      } : function(e, t) {
        if (e === t)
          return c = !0, 0;
        var i,
          n = 0,
          s = e.parentNode,
          a = t.parentNode,
          r = [e],
          o = [t];
        if (!s || !a)
          return e == p ? -1 : t == p ? 1 : s ? -1 : a ? 1 : u ? $(u, e) - $(u, t) : 0;
        if (s === a)
          return he(e, t);
        for (i = e; i = i.parentNode;)
          r.unshift(i);
        for (i = t; i = i.parentNode;)
          o.unshift(i);
        for (; r[n] === o[n];)
          n++;
        return n ? he(r[n], o[n]) : r[n] == x ? -1 : o[n] == x ? 1 : 0
      }, p) : p
    }, oe.matches = function(e, t) {
      return oe(e, null, null, t)
    }, oe.matchesSelector = function(e, t) {
      if (h(e), i.matchesSelector && m && !M[t + " "] && (!g || !g.test(t)) && (!v || !v.test(t)))
        try {
          var n = y.call(e, t);
          if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType)
            return n
        } catch (e) {
          M(t, !0)
        }
      return oe(t, p, null, [e]).length > 0
    }, oe.contains = function(e, t) {
      return (e.ownerDocument || e) != p && h(e), b(e, t)
    }, oe.attr = function(e, t) {
      (e.ownerDocument || e) != p && h(e);
      var s = n.attrHandle[t.toLowerCase()],
        a = s && A.call(n.attrHandle, t.toLowerCase()) ? s(e, t, !m) : void 0;
      return void 0 !== a ? a : i.attributes || !m ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
    }, oe.escape = function(e) {
      return (e + "").replace(ne, se)
    }, oe.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, oe.uniqueSort = function(e) {
      var t,
        n = [],
        s = 0,
        a = 0;
      if (c = !i.detectDuplicates, u = !i.sortStable && e.slice(0), e.sort(P), c) {
        for (; t = e[a++];)
          t === e[a] && (s = n.push(a));
        for (; s--;)
          e.splice(n[s], 1)
      }
      return u = null, e
    }, s = oe.getText = function(e) {
      var t,
        i = "",
        n = 0,
        a = e.nodeType;
      if (a) {
        if (1 === a || 9 === a || 11 === a) {
          if ("string" == typeof e.textContent)
            return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling)
            i += s(e)
        } else if (3 === a || 4 === a)
          return e.nodeValue
      } else
        for (; t = e[n++];)
          i += s(t);
      return i
    }, (n = oe.selectors = {
      cacheLength: 50,
      createPseudo: de,
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
          return e[1] = e[1].replace(te, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
        },
        PSEUDO: function(e) {
          var t,
            i = !e[6] && e[2];
          return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && X.test(i) && (t = r(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(te, ie).toLowerCase();
          return "*" === e ? function() {
            return !0
          } : function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(e) {
          var t = C[e + " "];
          return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && C(e, function(e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
          })
        },
        ATTR: function(e, t, i) {
          return function(n) {
            var s = oe.attr(n, e);
            return null == s ? "!=" === t : !t || (s += "", "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && s.indexOf(i) > -1 : "$=" === t ? i && s.slice(-i.length) === i : "~=" === t ? (" " + s.replace(B, " ") + " ").indexOf(i) > -1 : "|=" === t && (s === i || s.slice(0, i.length + 1) === i + "-"))
          }
        },
        CHILD: function(e, t, i, n, s) {
          var a = "nth" !== e.slice(0, 3),
            r = "last" !== e.slice(-4),
            o = "of-type" === t;
          return 1 === n && 0 === s ? function(e) {
            return !!e.parentNode
          } : function(t, i, l) {
            var d,
              u,
              c,
              h,
              p,
              f,
              m = a !== r ? "nextSibling" : "previousSibling",
              v = t.parentNode,
              g = o && t.nodeName.toLowerCase(),
              y = !l && !o,
              b = !1;
            if (v) {
              if (a) {
                for (; m;) {
                  for (h = t; h = h[m];)
                    if (o ? h.nodeName.toLowerCase() === g : 1 === h.nodeType)
                      return !1;
                  f = m = "only" === e && !f && "nextSibling"
                }
                return !0
              }
              if (f = [r ? v.firstChild : v.lastChild], r && y) {
                for (b = (p = (d = (u = (c = (h = v)[w] || (h[w] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] || [])[0] === T && d[1]) && d[2], h = p && v.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop();)
                  if (1 === h.nodeType && ++b && h === t) {
                    u[e] = [T, p, b];
                    break
                  }
              } else if (y && (b = p = (d = (u = (c = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] || [])[0] === T && d[1]), !1 === b)
                for (; (h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++b || (y && ((u = (c = h[w] || (h[w] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] = [T, b]), h !== t));)
                  ;
              return (b -= s) === n || b % n == 0 && b / n >= 0
            }
          }
        },
        PSEUDO: function(e, t) {
          var i,
            s = n.pseudos[e] || n.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return s[w] ? s(t) : s.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? de(function(e, i) {
            for (var n, a = s(e, t), r = a.length; r--;)
              e[n = $(e, a[r])] = !(i[n] = a[r])
          }) : function(e) {
            return s(e, 0, i)
          }) : s
        }
      },
      pseudos: {
        not: de(function(e) {
          var t = [],
            i = [],
            n = o(e.replace(R, "$1"));
          return n[w] ? de(function(e, t, i, s) {
            for (var a, r = n(e, null, s, []), o = e.length; o--;)
              (a = r[o]) && (e[o] = !(t[o] = a))
          }) : function(e, s, a) {
            return t[0] = e, n(t, null, a, i), t[0] = null, !i.pop()
          }
        }),
        has: de(function(e) {
          return function(t) {
            return oe(e, t).length > 0
          }
        }),
        contains: de(function(e) {
          return e = e.replace(te, ie), function(t) {
            return (t.textContent || s(t)).indexOf(e) > -1
          }
        }),
        lang: de(function(e) {
          return V.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ie).toLowerCase(), function(t) {
            var i;
            do {
              if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1
          }
        }),
        target: function(t) {
          var i = e.location && e.location.hash;
          return i && i.slice(1) === t.id
        },
        root: function(e) {
          return e === f
        },
        focus: function(e) {
          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: me(!1),
        disabled: me(!0),
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6)
              return !1;
          return !0
        },
        parent: function(e) {
          return !n.pseudos.empty(e)
        },
        header: function(e) {
          return K.test(e.nodeName)
        },
        input: function(e) {
          return Q.test(e.nodeName)
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        },
        first: ve(function() {
          return [0]
        }),
        last: ve(function(e, t) {
          return [t - 1]
        }),
        eq: ve(function(e, t, i) {
          return [i < 0 ? i + t : i]
        }),
        even: ve(function(e, t) {
          for (var i = 0; i < t; i += 2)
            e.push(i);
          return e
        }),
        odd: ve(function(e, t) {
          for (var i = 1; i < t; i += 2)
            e.push(i);
          return e
        }),
        lt: ve(function(e, t, i) {
          for (var n = i < 0 ? i + t : i > t ? t : i; --n >= 0;)
            e.push(n);
          return e
        }),
        gt: ve(function(e, t, i) {
          for (var n = i < 0 ? i + t : i; ++n < t;)
            e.push(n);
          return e
        })
      }
    }).pseudos.nth = n.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    })
      n.pseudos[t] = pe(t);
    for (t in {
      submit: !0,
      reset: !0
    })
      n.pseudos[t] = fe(t);
    function ye() {}
    function be(e) {
      for (var t = 0, i = e.length, n = ""; t < i; t++)
        n += e[t].value;
      return n
    }
    function we(e, t, i) {
      var n = t.dir,
        s = t.next,
        a = s || n,
        r = i && "parentNode" === a,
        o = E++;
      return t.first ? function(t, i, s) {
        for (; t = t[n];)
          if (1 === t.nodeType || r)
            return e(t, i, s);
        return !1
      } : function(t, i, l) {
        var d,
          u,
          c,
          h = [T, o];
        if (l) {
          for (; t = t[n];)
            if ((1 === t.nodeType || r) && e(t, i, l))
              return !0
        } else
          for (; t = t[n];)
            if (1 === t.nodeType || r)
              if (u = (c = t[w] || (t[w] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), s && s === t.nodeName.toLowerCase())
                t = t[n] || t;
              else {
                if ((d = u[a]) && d[0] === T && d[1] === o)
                  return h[2] = d[2];
                if (u[a] = h, h[2] = e(t, i, l))
                  return !0
              }
        return !1
      }
    }
    function xe(e) {
      return e.length > 1 ? function(t, i, n) {
        for (var s = e.length; s--;)
          if (!e[s](t, i, n))
            return !1;
        return !0
      } : e[0]
    }
    function Te(e, t, i, n, s) {
      for (var a, r = [], o = 0, l = e.length, d = null != t; o < l; o++)
        (a = e[o]) && (i && !i(a, n, s) || (r.push(a), d && t.push(o)));
      return r
    }
    function Ee(e, t, i, n, s, a) {
      return n && !n[w] && (n = Ee(n)), s && !s[w] && (s = Ee(s, a)), de(function(a, r, o, l) {
        var d,
          u,
          c,
          h = [],
          p = [],
          f = r.length,
          m = a || function(e, t, i) {
            for (var n = 0, s = t.length; n < s; n++)
              oe(e, t[n], i);
            return i
          }(t || "*", o.nodeType ? [o] : o, []),
          v = !e || !a && t ? m : Te(m, h, e, o, l),
          g = i ? s || (a ? e : f || n) ? [] : r : v;
        if (i && i(v, g, o, l), n)
          for (d = Te(g, p), n(d, [], o, l), u = d.length; u--;)
            (c = d[u]) && (g[p[u]] = !(v[p[u]] = c));
        if (a) {
          if (s || e) {
            if (s) {
              for (d = [], u = g.length; u--;)
                (c = g[u]) && d.push(v[u] = c);
              s(null, g = [], d, l)
            }
            for (u = g.length; u--;)
              (c = g[u]) && (d = s ? $(a, c) : h[u]) > -1 && (a[d] = !(r[d] = c))
          }
        } else
          g = Te(g === r ? g.splice(f, g.length) : g),
            s ? s(null, r, g, l) : O.apply(r, g)
      })
    }
    function Ce(e) {
      for (var t, i, s, a = e.length, r = n.relative[e[0].type], o = r || n.relative[" "], l = r ? 1 : 0, u = we(function(e) {
        return e === t
      }, o, !0), c = we(function(e) {
        return $(t, e) > -1
      }, o, !0), h = [function(e, i, n) {
        var s = !r && (n || i !== d) || ((t = i).nodeType ? u(e, i, n) : c(e, i, n));
        return t = null, s
      }]; l < a; l++)
        if (i = n.relative[e[l].type])
          h = [we(xe(h), i)];
        else {
          if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
            for (s = ++l; s < a && !n.relative[e[s].type]; s++)
              ;
            return Ee(l > 1 && xe(h), l > 1 && be(e.slice(0, l - 1).concat({
              value: " " === e[l - 2].type ? "*" : ""
            })).replace(R, "$1"), i, l < s && Ce(e.slice(l, s)), s < a && Ce(e = e.slice(s)), s < a && be(e))
          }
          h.push(i)
        }
      return xe(h)
    }
    return ye.prototype = n.filters = n.pseudos, n.setFilters = new ye, r = oe.tokenize = function(e, t) {
      var i,
        s,
        a,
        r,
        o,
        l,
        d,
        u = S[e + " "];
      if (u)
        return t ? 0 : u.slice(0);
      for (o = e, l = [], d = n.preFilter; o;) {
        for (r in i && !(s = F.exec(o)) || (s && (o = o.slice(s[0].length) || o), l.push(a = [])), i = !1, (s = G.exec(o)) && (i = s.shift(), a.push({
          value: i,
          type: s[0].replace(R, " ")
        }), o = o.slice(i.length)), n.filter)
          !(s = Y[r].exec(o)) || d[r] && !(s = d[r](s)) || (i = s.shift(), a.push({
            value: i,
            type: r,
            matches: s
          }), o = o.slice(i.length));
        if (!i)
          break
      }
      return t ? o.length : o ? oe.error(e) : S(e, l).slice(0)
    }, o = oe.compile = function(e, t) {
      var i,
        s = [],
        a = [],
        o = k[e + " "];
      if (!o) {
        for (t || (t = r(e)), i = t.length; i--;)
          (o = Ce(t[i]))[w] ? s.push(o) : a.push(o);
        (o = k(e, function(e, t) {
          var i = t.length > 0,
            s = e.length > 0,
            a = function(a, r, o, l, u) {
              var c,
                f,
                v,
                g = 0,
                y = "0",
                b = a && [],
                w = [],
                x = d,
                E = a || s && n.find.TAG("*", u),
                C = T += null == x ? 1 : Math.random() || .1,
                S = E.length;
              for (u && (d = r == p || r || u); y !== S && null != (c = E[y]); y++) {
                if (s && c) {
                  for (f = 0, r || c.ownerDocument == p || (h(c), o = !m); v = e[f++];)
                    if (v(c, r || p, o)) {
                      l.push(c);
                      break
                    }
                  u && (T = C)
                }
                i && ((c = !v && c) && g--, a && b.push(c))
              }
              if (g += y, i && y !== g) {
                for (f = 0; v = t[f++];)
                  v(b, w, r, o);
                if (a) {
                  if (g > 0)
                    for (; y--;)
                      b[y] || w[y] || (w[y] = L.call(l));
                  w = Te(w)
                }
                O.apply(l, w),
                u && !a && w.length > 0 && g + t.length > 1 && oe.uniqueSort(l)
              }
              return u && (T = C, d = x), b
            };
          return i ? de(a) : a
        }(a, s))).selector = e
      }
      return o
    }, l = oe.select = function(e, t, i, s) {
      var a,
        l,
        d,
        u,
        c,
        h = "function" == typeof e && e,
        p = !s && r(e = h.selector || e);
      if (i = i || [], 1 === p.length) {
        if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (d = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
          if (!(t = (n.find.ID(d.matches[0].replace(te, ie), t) || [])[0]))
            return i;
          h && (t = t.parentNode),
            e = e.slice(l.shift().value.length)
        }
        for (a = Y.needsContext.test(e) ? 0 : l.length; a-- && (d = l[a], !n.relative[u = d.type]);)
          if ((c = n.find[u]) && (s = c(d.matches[0].replace(te, ie), ee.test(l[0].type) && ge(t.parentNode) || t))) {
            if (l.splice(a, 1), !(e = s.length && be(l)))
              return O.apply(i, s), i;
            break
          }
      }
      return (h || o(e, p))(s, t, !m, i, !t || ee.test(e) && ge(t.parentNode) || t), i
    }, i.sortStable = w.split("").sort(P).join("") === w, i.detectDuplicates = !!c, h(), i.sortDetached = ue(function(e) {
      return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
    }), ue(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || ce("type|href|height|width", function(e, t, i) {
      if (!i)
        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), i.attributes && ue(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || ce("value", function(e, t, i) {
      if (!i && "input" === e.nodeName.toLowerCase())
        return e.defaultValue
    }), ue(function(e) {
      return null == e.getAttribute("disabled")
    }) || ce(N, function(e, t, i) {
      var n;
      if (!i)
        return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
    }), oe
  }(e);
  w.find = T,
    w.expr = T.selectors,
    w.expr[":"] = w.expr.pseudos,
    w.uniqueSort = w.unique = T.uniqueSort,
    w.text = T.getText,
    w.isXMLDoc = T.isXML,
    w.contains = T.contains,
    w.escapeSelector = T.escape;
  var E = function(e, t, i) {
      for (var n = [], s = void 0 !== i; (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (s && w(e).is(i))
            break;
          n.push(e)
        }
      return n
    },
    C = function(e, t) {
      for (var i = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && i.push(e);
      return i
    },
    S = w.expr.match.needsContext;
  function k(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function P(e, t, i) {
    return f(t) ? w.grep(e, function(e, n) {
      return !!t.call(e, n, e) !== i
    }) : t.nodeType ? w.grep(e, function(e) {
      return e === t !== i
    }) : "string" != typeof t ? w.grep(e, function(e) {
      return o.call(t, e) > -1 !== i
    }) : w.filter(t, e, i)
  }
  w.filter = function(e, t, i) {
    var n = t[0];
    return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? w.find.matchesSelector(n, e) ? [n] : [] : w.find.matches(e, w.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  },
    w.fn.extend({
      find: function(e) {
        var t,
          i,
          n = this.length,
          s = this;
        if ("string" != typeof e)
          return this.pushStack(w(e).filter(function() {
            for (t = 0; t < n; t++)
              if (w.contains(s[t], this))
                return !0
          }));
        for (i = this.pushStack([]), t = 0; t < n; t++)
          w.find(e, s[t], i);
        return n > 1 ? w.uniqueSort(i) : i
      },
      filter: function(e) {
        return this.pushStack(P(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(P(this, e || [], !0))
      },
      is: function(e) {
        return !!P(this, "string" == typeof e && S.test(e) ? w(e) : e || [], !1).length
      }
    });
  var A,
    D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function(e, t, i) {
    var n,
      s;
    if (!e)
      return this;
    if (i = i || A, "string" == typeof e) {
      if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !n[1] && t)
        return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
      if (n[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : v, !0)), M.test(n[1]) && w.isPlainObject(t))
          for (n in t)
            f(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
        return this
      }
      return (s = v.getElementById(n[2])) && (this[0] = s, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : f(e) ? void 0 !== i.ready ? i.ready(e) : e(w) : w.makeArray(e, this)
  }).prototype = w.fn,
    A = w(v);
  var L = /^(?:parents|prev(?:Until|All))/,
    z = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  function O(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;)
      ;
    return e
  }
  w.fn.extend({
    has: function(e) {
      var t = w(e, this),
        i = t.length;
      return this.filter(function() {
        for (var e = 0; e < i; e++)
          if (w.contains(this, t[e]))
            return !0
      })
    },
    closest: function(e, t) {
      var i,
        n = 0,
        s = this.length,
        a = [],
        r = "string" != typeof e && w(e);
      if (!S.test(e))
        for (; n < s; n++)
          for (i = this[n]; i && i !== t; i = i.parentNode)
            if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && w.find.matchesSelector(i, e))) {
              a.push(i);
              break
            }
      return this.pushStack(a.length > 1 ? w.uniqueSort(a) : a)
    },
    index: function(e) {
      return e ? "string" == typeof e ? o.call(w(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }),
    w.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return E(e, "parentNode")
      },
      parentsUntil: function(e, t, i) {
        return E(e, "parentNode", i)
      },
      next: function(e) {
        return O(e, "nextSibling")
      },
      prev: function(e) {
        return O(e, "previousSibling")
      },
      nextAll: function(e) {
        return E(e, "nextSibling")
      },
      prevAll: function(e) {
        return E(e, "previousSibling")
      },
      nextUntil: function(e, t, i) {
        return E(e, "nextSibling", i)
      },
      prevUntil: function(e, t, i) {
        return E(e, "previousSibling", i)
      },
      siblings: function(e) {
        return C((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return C(e.firstChild)
      },
      contents: function(e) {
        return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
      }
    }, function(e, t) {
      w.fn[e] = function(i, n) {
        var s = w.map(this, t, i);
        return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (s = w.filter(n, s)), this.length > 1 && (z[e] || w.uniqueSort(s), L.test(e) && s.reverse()), this.pushStack(s)
      }
    });
  var I = /[^\x20\t\r\n\f]+/g;
  function $(e) {
    return e
  }
  function N(e) {
    throw e
  }
  function j(e, t, i, n) {
    var s;
    try {
      e && f(s = e.promise) ? s.call(e).done(t).fail(i) : e && f(s = e.then) ? s.call(e, t, i) : t.apply(void 0, [e].slice(n))
    } catch (e) {
      i.apply(void 0, [e])
    }
  }
  w.Callbacks = function(e) {
    e = "string" == typeof e ? function(e) {
      var t = {};
      return w.each(e.match(I) || [], function(e, i) {
        t[i] = !0
      }), t
    }(e) : w.extend({}, e);
    var t,
      i,
      n,
      s,
      a = [],
      r = [],
      o = -1,
      l = function() {
        for (s = s || e.once, n = t = !0; r.length; o = -1)
          for (i = r.shift(); ++o < a.length;)
            !1 === a[o].apply(i[0], i[1]) && e.stopOnFalse && (o = a.length, i = !1);
        e.memory || (i = !1),
          t = !1,
        s && (a = i ? [] : "")
      },
      d = {
        add: function() {
          return a && (i && !t && (o = a.length - 1, r.push(i)), function t(i) {
            w.each(i, function(i, n) {
              f(n) ? e.unique && d.has(n) || a.push(n) : n && n.length && "string" !== b(n) && t(n)
            })
          }(arguments), i && !t && l()), this
        },
        remove: function() {
          return w.each(arguments, function(e, t) {
            for (var i; (i = w.inArray(t, a, i)) > -1;)
              a.splice(i, 1),
              i <= o && o--
          }), this
        },
        has: function(e) {
          return e ? w.inArray(e, a) > -1 : a.length > 0
        },
        empty: function() {
          return a && (a = []), this
        },
        disable: function() {
          return s = r = [], a = i = "", this
        },
        disabled: function() {
          return !a
        },
        lock: function() {
          return s = r = [], i || t || (a = i = ""), this
        },
        locked: function() {
          return !!s
        },
        fireWith: function(e, i) {
          return s || (i = [e, (i = i || []).slice ? i.slice() : i], r.push(i), t || l()), this
        },
        fire: function() {
          return d.fireWith(this, arguments), this
        },
        fired: function() {
          return !!n
        }
      };
    return d
  },
    w.extend({
      Deferred: function(t) {
        var i = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          n = "pending",
          s = {
            state: function() {
              return n
            },
            always: function() {
              return a.done(arguments).fail(arguments), this
            },
            catch: function(e) {
              return s.then(null, e)
            },
            pipe: function() {
              var e = arguments;
              return w.Deferred(function(t) {
                w.each(i, function(i, n) {
                  var s = f(e[n[4]]) && e[n[4]];
                  a[n[1]](function() {
                    var e = s && s.apply(this, arguments);
                    e && f(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, s ? [e] : arguments)
                  })
                }),
                  e = null
              }).promise()
            },
            then: function(t, n, s) {
              var a = 0;
              function r(t, i, n, s) {
                return function() {
                  var o = this,
                    l = arguments,
                    d = function() {
                      var e,
                        d;
                      if (!(t < a)) {
                        if ((e = n.apply(o, l)) === i.promise())
                          throw new TypeError("Thenable self-resolution");
                        d = e && ("object" == typeof e || "function" == typeof e) && e.then,
                          f(d) ? s ? d.call(e, r(a, i, $, s), r(a, i, N, s)) : (a++, d.call(e, r(a, i, $, s), r(a, i, N, s), r(a, i, $, i.notifyWith))) : (n !== $ && (o = void 0, l = [e]), (s || i.resolveWith)(o, l))
                      }
                    },
                    u = s ? d : function() {
                      try {
                        d()
                      } catch (e) {
                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace),
                        t + 1 >= a && (n !== N && (o = void 0, l = [e]), i.rejectWith(o, l))
                      }
                    };
                  t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u))
                }
              }
              return w.Deferred(function(e) {
                i[0][3].add(r(0, e, f(s) ? s : $, e.notifyWith)),
                  i[1][3].add(r(0, e, f(t) ? t : $)),
                  i[2][3].add(r(0, e, f(n) ? n : N))
              }).promise()
            },
            promise: function(e) {
              return null != e ? w.extend(e, s) : s
            }
          },
          a = {};
        return w.each(i, function(e, t) {
          var r = t[2],
            o = t[5];
          s[t[1]] = r.add,
          o && r.add(function() {
            n = o
          }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock),
            r.add(t[3].fire),
            a[t[0]] = function() {
              return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
            },
            a[t[0] + "With"] = r.fireWith
        }), s.promise(a), t && t.call(a, a), a
      },
      when: function(e) {
        var t = arguments.length,
          i = t,
          n = Array(i),
          a = s.call(arguments),
          r = w.Deferred(),
          o = function(e) {
            return function(i) {
              n[e] = this,
                a[e] = arguments.length > 1 ? s.call(arguments) : i,
              --t || r.resolveWith(n, a)
            }
          };
        if (t <= 1 && (j(e, r.done(o(i)).resolve, r.reject, !t), "pending" === r.state() || f(a[i] && a[i].then)))
          return r.then();
        for (; i--;)
          j(a[i], o(i), r.reject);
        return r.promise()
      }
    });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function(t, i) {
    e.console && e.console.warn && t && H.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
  },
    w.readyException = function(t) {
      e.setTimeout(function() {
        throw t
      })
    };
  var _ = w.Deferred();
  function q() {
    v.removeEventListener("DOMContentLoaded", q),
      e.removeEventListener("load", q),
      w.ready()
  }
  w.fn.ready = function(e) {
    return _.then(e).catch(function(e) {
      w.readyException(e)
    }), this
  },
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
        (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || _.resolveWith(v, [w]))
      }
    }),
    w.ready.then = _.then,
    "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? e.setTimeout(w.ready) : (v.addEventListener("DOMContentLoaded", q), e.addEventListener("load", q));
  var B = function(e, t, i, n, s, a, r) {
      var o = 0,
        l = e.length,
        d = null == i;
      if ("object" === b(i))
        for (o in s = !0, i)
          B(e, t, o, i[o], !0, a, r);
      else if (void 0 !== n && (s = !0, f(n) || (r = !0), d && (r ? (t.call(e, n), t = null) : (d = t, t = function(e, t, i) {
        return d.call(w(e), i)
      })), t))
        for (; o < l; o++)
          t(e[o], i, r ? n : n.call(e[o], o, t(e[o], i)));
      return s ? e : d ? t.call(e) : l ? t(e[0], i) : a
    },
    R = /^-ms-/,
    F = /-([a-z])/g;
  function G(e, t) {
    return t.toUpperCase()
  }
  function W(e) {
    return e.replace(R, "ms-").replace(F, G)
  }
  var X = function(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };
  function V() {
    this.expando = w.expando + V.uid++
  }
  V.uid = 1,
    V.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function(e, t, i) {
        var n,
          s = this.cache(e);
        if ("string" == typeof t)
          s[W(t)] = i;
        else
          for (n in t)
            s[W(n)] = t[n];
        return s
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][W(t)]
      },
      access: function(e, t, i) {
        return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
      },
      remove: function(e, t) {
        var i,
          n = e[this.expando];
        if (void 0 !== n) {
          if (void 0 !== t) {
            i = (t = Array.isArray(t) ? t.map(W) : (t = W(t)) in n ? [t] : t.match(I) || []).length;
            for (; i--;)
              delete n[t[i]]
          }
          (void 0 === t || w.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t)
      }
    };
  var Y = new V,
    U = new V,
    Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function J(e, t, i) {
    var n;
    if (void 0 === i && 1 === e.nodeType)
      if (n = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
        try {
          i = function(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
          }(i)
        } catch (e) {}
        U.set(e, t, i)
      } else
        i = void 0;
    return i
  }
  w.extend({
    hasData: function(e) {
      return U.hasData(e) || Y.hasData(e)
    },
    data: function(e, t, i) {
      return U.access(e, t, i)
    },
    removeData: function(e, t) {
      U.remove(e, t)
    },
    _data: function(e, t, i) {
      return Y.access(e, t, i)
    },
    _removeData: function(e, t) {
      Y.remove(e, t)
    }
  }),
    w.fn.extend({
      data: function(e, t) {
        var i,
          n,
          s,
          a = this[0],
          r = a && a.attributes;
        if (void 0 === e) {
          if (this.length && (s = U.get(a), 1 === a.nodeType && !Y.get(a, "hasDataAttrs"))) {
            for (i = r.length; i--;)
              r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = W(n.slice(5)), J(a, n, s[n]));
            Y.set(a, "hasDataAttrs", !0)
          }
          return s
        }
        return "object" == typeof e ? this.each(function() {
          U.set(this, e)
        }) : B(this, function(t) {
          var i;
          if (a && void 0 === t)
            return void 0 !== (i = U.get(a, e)) ? i : void 0 !== (i = J(a, e)) ? i : void 0;
          this.each(function() {
            U.set(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
        return this.each(function() {
          U.remove(this, e)
        })
      }
    }),
    w.extend({
      queue: function(e, t, i) {
        var n;
        if (e)
          return t = (t || "fx") + "queue", n = Y.get(e, t), i && (!n || Array.isArray(i) ? n = Y.access(e, t, w.makeArray(i)) : n.push(i)), n || []
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var i = w.queue(e, t),
          n = i.length,
          s = i.shift(),
          a = w._queueHooks(e, t);
        "inprogress" === s && (s = i.shift(), n--),
        s && ("fx" === t && i.unshift("inprogress"), delete a.stop, s.call(e, function() {
          w.dequeue(e, t)
        }, a)),
        !n && a && a.empty.fire()
      },
      _queueHooks: function(e, t) {
        var i = t + "queueHooks";
        return Y.get(e, i) || Y.access(e, i, {
          empty: w.Callbacks("once memory").add(function() {
            Y.remove(e, [t + "queue", i])
          })
        })
      }
    }),
    w.fn.extend({
      queue: function(e, t) {
        var i = 2;
        return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
          var i = w.queue(this, e, t);
          w._queueHooks(this, e),
          "fx" === e && "inprogress" !== i[0] && w.dequeue(this, e)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          w.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        var i,
          n = 1,
          s = w.Deferred(),
          a = this,
          r = this.length,
          o = function() {
            --n || s.resolveWith(a, [a])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)
          (i = Y.get(a[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
        return o(), s.promise(t)
      }
    });
  var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
    te = ["Top", "Right", "Bottom", "Left"],
    ie = v.documentElement,
    ne = function(e) {
      return w.contains(e.ownerDocument, e)
    },
    se = {
      composed: !0
    };
  ie.getRootNode && (ne = function(e) {
    return w.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
  });
  var ae = function(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ne(e) && "none" === w.css(e, "display")
  };
  function re(e, t, i, n) {
    var s,
      a,
      r = 20,
      o = n ? function() {
        return n.cur()
      } : function() {
        return w.css(e, t, "")
      },
      l = o(),
      d = i && i[3] || (w.cssNumber[t] ? "" : "px"),
      u = e.nodeType && (w.cssNumber[t] || "px" !== d && +l) && ee.exec(w.css(e, t));
    if (u && u[3] !== d) {
      for (l /= 2, d = d || u[3], u = +l || 1; r--;)
        w.style(e, t, u + d),
        (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (r = 0),
          u /= a;
      u *= 2,
        w.style(e, t, u + d),
        i = i || []
    }
    return i && (u = +u || +l || 0, s = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = d, n.start = u, n.end = s)), s
  }
  var oe = {};
  function le(e) {
    var t,
      i = e.ownerDocument,
      n = e.nodeName,
      s = oe[n];
    return s || (t = i.body.appendChild(i.createElement(n)), s = w.css(t, "display"), t.parentNode.removeChild(t), "none" === s && (s = "block"), oe[n] = s, s)
  }
  function de(e, t) {
    for (var i, n, s = [], a = 0, r = e.length; a < r; a++)
      (n = e[a]).style && (i = n.style.display, t ? ("none" === i && (s[a] = Y.get(n, "display") || null, s[a] || (n.style.display = "")), "" === n.style.display && ae(n) && (s[a] = le(n))) : "none" !== i && (s[a] = "none", Y.set(n, "display", i)));
    for (a = 0; a < r; a++)
      null != s[a] && (e[a].style.display = s[a]);
    return e
  }
  w.fn.extend({
    show: function() {
      return de(this, !0)
    },
    hide: function() {
      return de(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        ae(this) ? w(this).show() : w(this).hide()
      })
    }
  });
  var ue,
    ce,
    he = /^(?:checkbox|radio)$/i,
    pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    fe = /^$|^module$|\/(?:java|ecma)script/i;
  ue = v.createDocumentFragment().appendChild(v.createElement("div")),
    (ce = v.createElement("input")).setAttribute("type", "radio"),
    ce.setAttribute("checked", "checked"),
    ce.setAttribute("name", "t"),
    ue.appendChild(ce),
    p.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ue.innerHTML = "<textarea>x</textarea>",
    p.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue,
    ue.innerHTML = "<option></option>",
    p.option = !!ue.lastChild;
  var me = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function ve(e, t) {
    var i;
    return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? w.merge([e], i) : i
  }
  function ge(e, t) {
    for (var i = 0, n = e.length; i < n; i++)
      Y.set(e[i], "globalEval", !t || Y.get(t[i], "globalEval"))
  }
  me.tbody = me.tfoot = me.colgroup = me.caption = me.thead,
    me.th = me.td,
  p.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;
  function be(e, t, i, n, s) {
    for (var a, r, o, l, d, u, c = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
      if ((a = e[p]) || 0 === a)
        if ("object" === b(a))
          w.merge(h, a.nodeType ? [a] : a);
        else if (ye.test(a)) {
          for (r = r || c.appendChild(t.createElement("div")), o = (pe.exec(a) || ["", ""])[1].toLowerCase(), l = me[o] || me._default, r.innerHTML = l[1] + w.htmlPrefilter(a) + l[2], u = l[0]; u--;)
            r = r.lastChild;
          w.merge(h, r.childNodes),
            (r = c.firstChild).textContent = ""
        } else
          h.push(t.createTextNode(a));
    for (c.textContent = "", p = 0; a = h[p++];)
      if (n && w.inArray(a, n) > -1)
        s && s.push(a);
      else if (d = ne(a), r = ve(c.appendChild(a), "script"), d && ge(r), i)
        for (u = 0; a = r[u++];)
          fe.test(a.type || "") && i.push(a);
    return c
  }
  var we = /^key/,
    xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
    return !0
  }
  function Ce() {
    return !1
  }
  function Se(e, t) {
    return e === function() {
      try {
        return v.activeElement
      } catch (e) {}
    }() == ("focus" === t)
  }
  function ke(e, t, i, n, s, a) {
    var r,
      o;
    if ("object" == typeof t) {
      for (o in "string" != typeof i && (n = n || i, i = void 0), t)
        ke(e, o, i, n, t[o], a);
      return e
    }
    if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s)
      s = Ce;
    else if (!s)
      return e;
    return 1 === a && (r = s, (s = function(e) {
      return w().off(e), r.apply(this, arguments)
    }).guid = r.guid || (r.guid = w.guid++)), e.each(function() {
      w.event.add(this, t, s, n, i)
    })
  }
  function Me(e, t, i) {
    i ? (Y.set(e, t, !1), w.event.add(e, t, {
      namespace: !1,
      handler: function(e) {
        var n,
          a,
          r = Y.get(this, t);
        if (1 & e.isTrigger && this[t]) {
          if (r.length)
            (w.event.special[t] || {}).delegateType && e.stopPropagation();
          else if (r = s.call(arguments), Y.set(this, t, r), n = i(this, t), this[t](), r !== (a = Y.get(this, t)) || n ? Y.set(this, t, !1) : a = {}, r !== a)
            return e.stopImmediatePropagation(), e.preventDefault(), a.value
        } else
          r.length && (Y.set(this, t, {
            value: w.event.trigger(w.extend(r[0], w.Event.prototype), r.slice(1), this)
          }), e.stopImmediatePropagation())
      }
    })) : void 0 === Y.get(e, t) && w.event.add(e, t, Ee)
  }
  w.event = {
    global: {},
    add: function(e, t, i, n, s) {
      var a,
        r,
        o,
        l,
        d,
        u,
        c,
        h,
        p,
        f,
        m,
        v = Y.get(e);
      if (X(e))
        for (i.handler && (i = (a = i).handler, s = a.selector), s && w.find.matchesSelector(ie, s), i.guid || (i.guid = w.guid++), (l = v.events) || (l = v.events = Object.create(null)), (r = v.handle) || (r = v.handle = function(t) {
          return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
        }), d = (t = (t || "").match(I) || [""]).length; d--;)
          p = m = (o = Te.exec(t[d]) || [])[1],
            f = (o[2] || "").split(".").sort(),
          p && (c = w.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, c = w.event.special[p] || {}, u = w.extend({
            type: p,
            origType: m,
            data: n,
            handler: i,
            guid: i.guid,
            selector: s,
            needsContext: s && w.expr.match.needsContext.test(s),
            namespace: f.join(".")
          }, a), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, n, f, r) || e.addEventListener && e.addEventListener(p, r)), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, u) : h.push(u), w.event.global[p] = !0)
    },
    remove: function(e, t, i, n, s) {
      var a,
        r,
        o,
        l,
        d,
        u,
        c,
        h,
        p,
        f,
        m,
        v = Y.hasData(e) && Y.get(e);
      if (v && (l = v.events)) {
        for (d = (t = (t || "").match(I) || [""]).length; d--;)
          if (p = m = (o = Te.exec(t[d]) || [])[1], f = (o[2] || "").split(".").sort(), p) {
            for (c = w.event.special[p] || {}, h = l[p = (n ? c.delegateType : c.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = a = h.length; a--;)
              u = h[a],
              !s && m !== u.origType || i && i.guid !== u.guid || o && !o.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(a, 1), u.selector && h.delegateCount--, c.remove && c.remove.call(e, u));
            r && !h.length && (c.teardown && !1 !== c.teardown.call(e, f, v.handle) || w.removeEvent(e, p, v.handle), delete l[p])
          } else
            for (p in l)
              w.event.remove(e, p + t[d], i, n, !0);
        w.isEmptyObject(l) && Y.remove(e, "handle events")
      }
    },
    dispatch: function(e) {
      var t,
        i,
        n,
        s,
        a,
        r,
        o = new Array(arguments.length),
        l = w.event.fix(e),
        d = (Y.get(this, "events") || Object.create(null))[l.type] || [],
        u = w.event.special[l.type] || {};
      for (o[0] = l, t = 1; t < arguments.length; t++)
        o[t] = arguments[t];
      if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
        for (r = w.event.handlers.call(this, l, d), t = 0; (s = r[t++]) && !l.isPropagationStopped();)
          for (l.currentTarget = s.elem, i = 0; (a = s.handlers[i++]) && !l.isImmediatePropagationStopped();)
            l.rnamespace && !1 !== a.namespace && !l.rnamespace.test(a.namespace) || (l.handleObj = a, l.data = a.data, void 0 !== (n = ((w.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, o)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, l), l.result
      }
    },
    handlers: function(e, t) {
      var i,
        n,
        s,
        a,
        r,
        o = [],
        l = t.delegateCount,
        d = e.target;
      if (l && d.nodeType && !("click" === e.type && e.button >= 1))
        for (; d !== this; d = d.parentNode || this)
          if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
            for (a = [], r = {}, i = 0; i < l; i++)
              void 0 === r[s = (n = t[i]).selector + " "] && (r[s] = n.needsContext ? w(s, this).index(d) > -1 : w.find(s, this, null, [d]).length),
              r[s] && a.push(n);
            a.length && o.push({
              elem: d,
              handlers: a
            })
          }
      return d = this, l < t.length && o.push({
        elem: d,
        handlers: t.slice(l)
      }), o
    },
    addProp: function(e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: f(t) ? function() {
          if (this.originalEvent)
            return t(this.originalEvent)
        } : function() {
          if (this.originalEvent)
            return this.originalEvent[e]
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
      click: {
        setup: function(e) {
          var t = this || e;
          return he.test(t.type) && t.click && k(t, "input") && Me(t, "click", Ee), !1
        },
        trigger: function(e) {
          var t = this || e;
          return he.test(t.type) && t.click && k(t, "input") && Me(t, "click"), !0
        },
        _default: function(e) {
          var t = e.target;
          return he.test(t.type) && t.click && k(t, "input") && Y.get(t, "click") || k(t, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  },
    w.removeEvent = function(e, t, i) {
      e.removeEventListener && e.removeEventListener(t, i)
    },
    w.Event = function(e, t) {
      if (!(this instanceof w.Event))
        return new w.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e,
      t && w.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[w.expando] = !0
    },
    w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: Ce,
      isPropagationStopped: Ce,
      isImmediatePropagationStopped: Ce,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = Ee,
        e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = Ee,
        e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Ee,
        e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation()
      }
    },
    w.each({
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
      code: !0,
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
        return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
    }, w.event.addProp),
    w.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      w.event.special[e] = {
        setup: function() {
          return Me(this, e, Se), !1
        },
        trigger: function() {
          return Me(this, e), !0
        },
        delegateType: t
      }
    }),
    w.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      w.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var i,
            n = e.relatedTarget,
            s = e.handleObj;
          return n && (n === this || w.contains(this, n)) || (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
        }
      }
    }),
    w.fn.extend({
      on: function(e, t, i, n) {
        return ke(this, e, t, i, n)
      },
      one: function(e, t, i, n) {
        return ke(this, e, t, i, n, 1)
      },
      off: function(e, t, i) {
        var n,
          s;
        if (e && e.preventDefault && e.handleObj)
          return n = e.handleObj, w(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
        if ("object" == typeof e) {
          for (s in e)
            this.off(s, t, e[s]);
          return this
        }
        return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Ce), this.each(function() {
          w.event.remove(this, e, i, t)
        })
      }
    });
  var Pe = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
    return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
  }
  function ze(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }
  function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }
  function Ie(e, t) {
    var i,
      n,
      s,
      a,
      r,
      o;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (o = Y.get(e).events))
        for (s in Y.remove(t, "handle events"), o)
          for (i = 0, n = o[s].length; i < n; i++)
            w.event.add(t, s, o[s][i]);
      U.hasData(e) && (a = U.access(e), r = w.extend({}, a), U.set(t, r))
    }
  }
  function $e(e, t, i, n) {
    t = a(t);
    var s,
      r,
      o,
      l,
      d,
      u,
      c = 0,
      h = e.length,
      m = h - 1,
      v = t[0],
      g = f(v);
    if (g || h > 1 && "string" == typeof v && !p.checkClone && Ae.test(v))
      return e.each(function(s) {
        var a = e.eq(s);
        g && (t[0] = v.call(this, s, a.html())),
          $e(a, t, i, n)
      });
    if (h && (r = (s = be(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === s.childNodes.length && (s = r), r || n)) {
      for (l = (o = w.map(ve(s, "script"), ze)).length; c < h; c++)
        d = s,
        c !== m && (d = w.clone(d, !0, !0), l && w.merge(o, ve(d, "script"))),
          i.call(e[c], d, c);
      if (l)
        for (u = o[o.length - 1].ownerDocument, w.map(o, Oe), c = 0; c < l; c++)
          d = o[c],
          fe.test(d.type || "") && !Y.access(d, "globalEval") && w.contains(u, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? w._evalUrl && !d.noModule && w._evalUrl(d.src, {
            nonce: d.nonce || d.getAttribute("nonce")
          }, u) : y(d.textContent.replace(De, ""), d, u))
    }
    return e
  }
  function Ne(e, t, i) {
    for (var n, s = t ? w.filter(t, e) : e, a = 0; null != (n = s[a]); a++)
      i || 1 !== n.nodeType || w.cleanData(ve(n)),
      n.parentNode && (i && ne(n) && ge(ve(n, "script")), n.parentNode.removeChild(n));
    return e
  }
  w.extend({
    htmlPrefilter: function(e) {
      return e
    },
    clone: function(e, t, i) {
      var n,
        s,
        a,
        r,
        o,
        l,
        d,
        u = e.cloneNode(!0),
        c = ne(e);
      if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
        for (r = ve(u), n = 0, s = (a = ve(e)).length; n < s; n++)
          o = a[n],
            l = r[n],
            void 0,
            "input" === (d = l.nodeName.toLowerCase()) && he.test(o.type) ? l.checked = o.checked : "input" !== d && "textarea" !== d || (l.defaultValue = o.defaultValue);
      if (t)
        if (i)
          for (a = a || ve(e), r = r || ve(u), n = 0, s = a.length; n < s; n++)
            Ie(a[n], r[n]);
        else
          Ie(e, u);
      return (r = ve(u, "script")).length > 0 && ge(r, !c && ve(e, "script")), u
    },
    cleanData: function(e) {
      for (var t, i, n, s = w.event.special, a = 0; void 0 !== (i = e[a]); a++)
        if (X(i)) {
          if (t = i[Y.expando]) {
            if (t.events)
              for (n in t.events)
                s[n] ? w.event.remove(i, n) : w.removeEvent(i, n, t.handle);
            i[Y.expando] = void 0
          }
          i[U.expando] && (i[U.expando] = void 0)
        }
    }
  }),
    w.fn.extend({
      detach: function(e) {
        return Ne(this, e, !0)
      },
      remove: function(e) {
        return Ne(this, e)
      },
      text: function(e) {
        return B(this, function(e) {
          return void 0 === e ? w.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      },
      append: function() {
        return $e(this, arguments, function(e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
        })
      },
      prepend: function() {
        return $e(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return $e(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return $e(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ve(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return w.clone(this, e, t)
        })
      },
      html: function(e) {
        return B(this, function(e) {
          var t = this[0] || {},
            i = 0,
            n = this.length;
          if (void 0 === e && 1 === t.nodeType)
            return t.innerHTML;
          if ("string" == typeof e && !Pe.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = w.htmlPrefilter(e);
            try {
              for (; i < n; i++)
                1 === (t = this[i] || {}).nodeType && (w.cleanData(ve(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var e = [];
        return $e(this, arguments, function(t) {
          var i = this.parentNode;
          w.inArray(this, e) < 0 && (w.cleanData(ve(this)), i && i.replaceChild(t, this))
        }, e)
      }
    }),
    w.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      w.fn[e] = function(e) {
        for (var i, n = [], s = w(e), a = s.length - 1, o = 0; o <= a; o++)
          i = o === a ? this : this.clone(!0),
            w(s[o])[t](i),
            r.apply(n, i.get());
        return this.pushStack(n)
      }
    });
  var je = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
    He = function(t) {
      var i = t.ownerDocument.defaultView;
      return i && i.opener || (i = e), i.getComputedStyle(t)
    },
    _e = function(e, t, i) {
      var n,
        s,
        a = {};
      for (s in t)
        a[s] = e.style[s],
          e.style[s] = t[s];
      for (s in n = i.call(e), t)
        e.style[s] = a[s];
      return n
    },
    qe = new RegExp(te.join("|"), "i");
  function Be(e, t, i) {
    var n,
      s,
      a,
      r,
      o = e.style;
    return (i = i || He(e)) && ("" !== (r = i.getPropertyValue(t) || i[t]) || ne(e) || (r = w.style(e, t)), !p.pixelBoxStyles() && je.test(r) && qe.test(t) && (n = o.width, s = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = i.width, o.width = n, o.minWidth = s, o.maxWidth = a)), void 0 !== r ? r + "" : r
  }
  function Re(e, t) {
    return {
      get: function() {
        if (!e())
          return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }
  !function() {
    function t() {
      if (u) {
        d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
          u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
          ie.appendChild(d).appendChild(u);
        var t = e.getComputedStyle(u);
        n = "1%" !== t.top,
          l = 12 === i(t.marginLeft),
          u.style.right = "60%",
          r = 36 === i(t.right),
          s = 36 === i(t.width),
          u.style.position = "absolute",
          a = 12 === i(u.offsetWidth / 3),
          ie.removeChild(d),
          u = null
      }
    }
    function i(e) {
      return Math.round(parseFloat(e))
    }
    var n,
      s,
      a,
      r,
      o,
      l,
      d = v.createElement("div"),
      u = v.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(p, {
      boxSizingReliable: function() {
        return t(), s
      },
      pixelBoxStyles: function() {
        return t(), r
      },
      pixelPosition: function() {
        return t(), n
      },
      reliableMarginLeft: function() {
        return t(), l
      },
      scrollboxSize: function() {
        return t(), a
      },
      reliableTrDimensions: function() {
        var t,
          i,
          n,
          s;
        return null == o && (t = v.createElement("table"), i = v.createElement("tr"), n = v.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", i.style.height = "1px", n.style.height = "9px", ie.appendChild(t).appendChild(i).appendChild(n), s = e.getComputedStyle(i), o = parseInt(s.height) > 3, ie.removeChild(t)), o
      }
    }))
  }();
  var Fe = ["Webkit", "Moz", "ms"],
    Ge = v.createElement("div").style,
    We = {};
  function Xe(e) {
    var t = w.cssProps[e] || We[e];
    return t || (e in Ge ? e : We[e] = function(e) {
      for (var t = e[0].toUpperCase() + e.slice(1), i = Fe.length; i--;)
        if ((e = Fe[i] + t) in Ge)
          return e
    }(e) || e)
  }
  var Ve = /^(none|table(?!-c[ea]).+)/,
    Ye = /^--/,
    Ue = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Qe = {
      letterSpacing: "0",
      fontWeight: "400"
    };
  function Ke(e, t, i) {
    var n = ee.exec(t);
    return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
  }
  function Je(e, t, i, n, s, a) {
    var r = "width" === t ? 1 : 0,
      o = 0,
      l = 0;
    if (i === (n ? "border" : "content"))
      return 0;
    for (; r < 4; r += 2)
      "margin" === i && (l += w.css(e, i + te[r], !0, s)),
        n ? ("content" === i && (l -= w.css(e, "padding" + te[r], !0, s)), "margin" !== i && (l -= w.css(e, "border" + te[r] + "Width", !0, s))) : (l += w.css(e, "padding" + te[r], !0, s), "padding" !== i ? l += w.css(e, "border" + te[r] + "Width", !0, s) : o += w.css(e, "border" + te[r] + "Width", !0, s));
    return !n && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5)) || 0), l
  }
  function Ze(e, t, i) {
    var n = He(e),
      s = (!p.boxSizingReliable() || i) && "border-box" === w.css(e, "boxSizing", !1, n),
      a = s,
      r = Be(e, t, n),
      o = "offset" + t[0].toUpperCase() + t.slice(1);
    if (je.test(r)) {
      if (!i)
        return r;
      r = "auto"
    }
    return (!p.boxSizingReliable() && s || !p.reliableTrDimensions() && k(e, "tr") || "auto" === r || !parseFloat(r) && "inline" === w.css(e, "display", !1, n)) && e.getClientRects().length && (s = "border-box" === w.css(e, "boxSizing", !1, n), (a = o in e) && (r = e[o])), (r = parseFloat(r) || 0) + Je(e, t, i || (s ? "border" : "content"), a, n, r) + "px"
  }
  function et(e, t, i, n, s) {
    return new et.prototype.init(e, t, i, n, s)
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var i = Be(e, "opacity");
            return "" === i ? "1" : i
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
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function(e, t, i, n) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var s,
          a,
          r,
          o = W(t),
          l = Ye.test(t),
          d = e.style;
        if (l || (t = Xe(o)), r = w.cssHooks[t] || w.cssHooks[o], void 0 === i)
          return r && "get" in r && void 0 !== (s = r.get(e, !1, n)) ? s : d[t];
        "string" === (a = typeof i) && (s = ee.exec(i)) && s[1] && (i = re(e, t, s), a = "number"),
        null != i && i == i && ("number" !== a || l || (i += s && s[3] || (w.cssNumber[o] ? "" : "px")), p.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (d[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l ? d.setProperty(t, i) : d[t] = i))
      }
    },
    css: function(e, t, i, n) {
      var s,
        a,
        r,
        o = W(t);
      return Ye.test(t) || (t = Xe(o)), (r = w.cssHooks[t] || w.cssHooks[o]) && "get" in r && (s = r.get(e, !0, i)), void 0 === s && (s = Be(e, t, n)), "normal" === s && t in Qe && (s = Qe[t]), "" === i || i ? (a = parseFloat(s), !0 === i || isFinite(a) ? a || 0 : s) : s
    }
  }),
    w.each(["height", "width"], function(e, t) {
      w.cssHooks[t] = {
        get: function(e, i, n) {
          if (i)
            return !Ve.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, n) : _e(e, Ue, function() {
              return Ze(e, t, n)
            })
        },
        set: function(e, i, n) {
          var s,
            a = He(e),
            r = !p.scrollboxSize() && "absolute" === a.position,
            o = (r || n) && "border-box" === w.css(e, "boxSizing", !1, a),
            l = n ? Je(e, t, n, o, a) : 0;
          return o && r && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - Je(e, t, "border", !1, a) - .5)), l && (s = ee.exec(i)) && "px" !== (s[3] || "px") && (e.style[t] = i, i = w.css(e, t)), Ke(0, i, l)
        }
      }
    }),
    w.cssHooks.marginLeft = Re(p.reliableMarginLeft, function(e, t) {
      if (t)
        return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - _e(e, {
          marginLeft: 0
        }, function() {
          return e.getBoundingClientRect().left
        })) + "px"
    }),
    w.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      w.cssHooks[e + t] = {
        expand: function(i) {
          for (var n = 0, s = {}, a = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
            s[e + te[n] + t] = a[n] || a[n - 2] || a[0];
          return s
        }
      },
      "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }),
    w.fn.extend({
      css: function(e, t) {
        return B(this, function(e, t, i) {
          var n,
            s,
            a = {},
            r = 0;
          if (Array.isArray(t)) {
            for (n = He(e), s = t.length; r < s; r++)
              a[t[r]] = w.css(e, t[r], !1, n);
            return a
          }
          return void 0 !== i ? w.style(e, t, i) : w.css(e, t)
        }, e, t, arguments.length > 1)
      }
    }),
    w.Tween = et,
    et.prototype = {
      constructor: et,
      init: function(e, t, i, n, s, a) {
        this.elem = e,
          this.prop = i,
          this.easing = s || w.easing._default,
          this.options = t,
          this.start = this.now = this.cur(),
          this.end = n,
          this.unit = a || (w.cssNumber[i] ? "" : "px")
      },
      cur: function() {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this)
      },
      run: function(e) {
        var t,
          i = et.propHooks[this.prop];
        return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : et.propHooks._default.set(this), this
      }
    },
    et.prototype.init.prototype = et.prototype,
    et.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
        },
        set: function(e) {
          w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    },
    et.propHooks.scrollTop = et.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    },
    w.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    },
    w.fx = et.prototype.init,
    w.fx.step = {};
  var tt,
    it,
    nt = /^(?:toggle|show|hide)$/,
    st = /queueHooks$/;
  function at() {
    it && (!1 === v.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
  }
  function rt() {
    return e.setTimeout(function() {
      tt = void 0
    }), tt = Date.now()
  }
  function ot(e, t) {
    var i,
      n = 0,
      s = {
        height: e
      };
    for (t = t ? 1 : 0; n < 4; n += 2 - t)
      s["margin" + (i = te[n])] = s["padding" + i] = e;
    return t && (s.opacity = s.width = e), s
  }
  function lt(e, t, i) {
    for (var n, s = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), a = 0, r = s.length; a < r; a++)
      if (n = s[a].call(i, t, e))
        return n
  }
  function dt(e, t, i) {
    var n,
      s,
      a = 0,
      r = dt.prefilters.length,
      o = w.Deferred().always(function() {
        delete l.elem
      }),
      l = function() {
        if (s)
          return !1;
        for (var t = tt || rt(), i = Math.max(0, d.startTime + d.duration - t), n = 1 - (i / d.duration || 0), a = 0, r = d.tweens.length; a < r; a++)
          d.tweens[a].run(n);
        return o.notifyWith(e, [d, n, i]), n < 1 && r ? i : (r || o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d]), !1)
      },
      d = o.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, {
          specialEasing: {},
          easing: w.easing._default
        }, i),
        originalProperties: t,
        originalOptions: i,
        startTime: tt || rt(),
        duration: i.duration,
        tweens: [],
        createTween: function(t, i) {
          var n = w.Tween(e, d.opts, t, i, d.opts.specialEasing[t] || d.opts.easing);
          return d.tweens.push(n), n
        },
        stop: function(t) {
          var i = 0,
            n = t ? d.tweens.length : 0;
          if (s)
            return this;
          for (s = !0; i < n; i++)
            d.tweens[i].run(1);
          return t ? (o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d, t])) : o.rejectWith(e, [d, t]), this
        }
      }),
      u = d.props;
    for (!function(e, t) {
      var i,
        n,
        s,
        a,
        r;
      for (i in e)
        if (s = t[n = W(i)], a = e[i], Array.isArray(a) && (s = a[1], a = e[i] = a[0]), i !== n && (e[n] = a, delete e[i]), (r = w.cssHooks[n]) && "expand" in r)
          for (i in a = r.expand(a), delete e[n], a)
            i in e || (e[i] = a[i], t[i] = s);
        else
          t[n] = s
    }(u, d.opts.specialEasing); a < r; a++)
      if (n = dt.prefilters[a].call(d, e, u, d.opts))
        return f(n.stop) && (w._queueHooks(d.elem, d.opts.queue).stop = n.stop.bind(n)), n;
    return w.map(u, lt, d), f(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), w.fx.timer(w.extend(l, {
      elem: e,
      anim: d,
      queue: d.opts.queue
    })), d
  }
  w.Animation = w.extend(dt, {
    tweeners: {
      "*": [function(e, t) {
        var i = this.createTween(e, t);
        return re(i.elem, e, ee.exec(t), i), i
      }]
    },
    tweener: function(e, t) {
      f(e) ? (t = e, e = ["*"]) : e = e.match(I);
      for (var i, n = 0, s = e.length; n < s; n++)
        i = e[n],
          dt.tweeners[i] = dt.tweeners[i] || [],
          dt.tweeners[i].unshift(t)
    },
    prefilters: [function(e, t, i) {
      var n,
        s,
        a,
        r,
        o,
        l,
        d,
        u,
        c = "width" in t || "height" in t,
        h = this,
        p = {},
        f = e.style,
        m = e.nodeType && ae(e),
        v = Y.get(e, "fxshow");
      for (n in i.queue || (null == (r = w._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, o = r.empty.fire, r.empty.fire = function() {
        r.unqueued || o()
      }), r.unqueued++, h.always(function() {
        h.always(function() {
          r.unqueued--,
          w.queue(e, "fx").length || r.empty.fire()
        })
      })), t)
        if (s = t[n], nt.test(s)) {
          if (delete t[n], a = a || "toggle" === s, s === (m ? "hide" : "show")) {
            if ("show" !== s || !v || void 0 === v[n])
              continue;
            m = !0
          }
          p[n] = v && v[n] || w.style(e, n)
        }
      if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
        for (n in c && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (d = v && v.display) && (d = Y.get(e, "display")), "none" === (u = w.css(e, "display")) && (d ? u = d : (de([e], !0), d = e.style.display || d, u = w.css(e, "display"), de([e]))), ("inline" === u || "inline-block" === u && null != d) && "none" === w.css(e, "float") && (l || (h.done(function() {
          f.display = d
        }), null == d && (u = f.display, d = "none" === u ? "" : u)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function() {
          f.overflow = i.overflow[0],
            f.overflowX = i.overflow[1],
            f.overflowY = i.overflow[2]
        })), l = !1, p)
          l || (v ? "hidden" in v && (m = v.hidden) : v = Y.access(e, "fxshow", {
            display: d
          }), a && (v.hidden = !m), m && de([e], !0), h.done(function() {
            for (n in m || de([e]), Y.remove(e, "fxshow"), p)
              w.style(e, n, p[n])
          })),
            l = lt(m ? v[n] : 0, n, h),
          n in v || (v[n] = l.start, m && (l.end = l.start, l.start = 0))
    }],
    prefilter: function(e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
    }
  }),
    w.speed = function(e, t, i) {
      var n = e && "object" == typeof e ? w.extend({}, e) : {
        complete: i || !i && t || f(e) && e,
        duration: e,
        easing: i && t || t && !f(t) && t
      };
      return w.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in w.fx.speeds ? n.duration = w.fx.speeds[n.duration] : n.duration = w.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
        f(n.old) && n.old.call(this),
        n.queue && w.dequeue(this, n.queue)
      }, n
    },
    w.fn.extend({
      fadeTo: function(e, t, i, n) {
        return this.filter(ae).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, i, n)
      },
      animate: function(e, t, i, n) {
        var s = w.isEmptyObject(e),
          a = w.speed(t, i, n),
          r = function() {
            var t = dt(this, w.extend({}, e), a);
            (s || Y.get(this, "finish")) && t.stop(!0)
          };
        return r.finish = r, s || !1 === a.queue ? this.each(r) : this.queue(a.queue, r)
      },
      stop: function(e, t, i) {
        var n = function(e) {
          var t = e.stop;
          delete e.stop,
            t(i)
        };
        return "string" != typeof e && (i = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
          var t = !0,
            s = null != e && e + "queueHooks",
            a = w.timers,
            r = Y.get(this);
          if (s)
            r[s] && r[s].stop && n(r[s]);
          else
            for (s in r)
              r[s] && r[s].stop && st.test(s) && n(r[s]);
          for (s = a.length; s--;)
            a[s].elem !== this || null != e && a[s].queue !== e || (a[s].anim.stop(i), t = !1, a.splice(s, 1));
          !t && i || w.dequeue(this, e)
        })
      },
      finish: function(e) {
        return !1 !== e && (e = e || "fx"), this.each(function() {
          var t,
            i = Y.get(this),
            n = i[e + "queue"],
            s = i[e + "queueHooks"],
            a = w.timers,
            r = n ? n.length : 0;
          for (i.finish = !0, w.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = a.length; t--;)
            a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
          for (t = 0; t < r; t++)
            n[t] && n[t].finish && n[t].finish.call(this);
          delete i.finish
        })
      }
    }),
    w.each(["toggle", "show", "hide"], function(e, t) {
      var i = w.fn[t];
      w.fn[t] = function(e, n, s) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ot(t, !0), e, n, s)
      }
    }),
    w.each({
      slideDown: ot("show"),
      slideUp: ot("hide"),
      slideToggle: ot("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      w.fn[e] = function(e, i, n) {
        return this.animate(t, e, i, n)
      }
    }),
    w.timers = [],
    w.fx.tick = function() {
      var e,
        t = 0,
        i = w.timers;
      for (tt = Date.now(); t < i.length; t++)
        (e = i[t])() || i[t] !== e || i.splice(t--, 1);
      i.length || w.fx.stop(),
        tt = void 0
    },
    w.fx.timer = function(e) {
      w.timers.push(e),
        w.fx.start()
    },
    w.fx.interval = 13,
    w.fx.start = function() {
      it || (it = !0, at())
    },
    w.fx.stop = function() {
      it = null
    },
    w.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    },
    w.fn.delay = function(t, i) {
      return t = w.fx && w.fx.speeds[t] || t, i = i || "fx", this.queue(i, function(i, n) {
        var s = e.setTimeout(i, t);
        n.stop = function() {
          e.clearTimeout(s)
        }
      })
    },
    function() {
      var e = v.createElement("input"),
        t = v.createElement("select").appendChild(v.createElement("option"));
      e.type = "checkbox",
        p.checkOn = "" !== e.value,
        p.optSelected = t.selected,
        (e = v.createElement("input")).value = "t",
        e.type = "radio",
        p.radioValue = "t" === e.value
    }();
  var ut,
    ct = w.expr.attrHandle;
  w.fn.extend({
    attr: function(e, t) {
      return B(this, w.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        w.removeAttr(this, e)
      })
    }
  }),
    w.extend({
      attr: function(e, t, i) {
        var n,
          s,
          a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a)
          return void 0 === e.getAttribute ? w.prop(e, t, i) : (1 === a && w.isXMLDoc(e) || (s = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ut : void 0)), void 0 !== i ? null === i ? void w.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : s && "get" in s && null !== (n = s.get(e, t)) ? n : null == (n = w.find.attr(e, t)) ? void 0 : n)
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!p.radioValue && "radio" === t && k(e, "input")) {
              var i = e.value;
              return e.setAttribute("type", t), i && (e.value = i), t
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var i,
          n = 0,
          s = t && t.match(I);
        if (s && 1 === e.nodeType)
          for (; i = s[n++];)
            e.removeAttribute(i)
      }
    }),
    ut = {
      set: function(e, t, i) {
        return !1 === t ? w.removeAttr(e, i) : e.setAttribute(i, i), i
      }
    },
    w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var i = ct[t] || w.find.attr;
      ct[t] = function(e, t, n) {
        var s,
          a,
          r = t.toLowerCase();
        return n || (a = ct[r], ct[r] = s, s = null != i(e, t, n) ? r : null, ct[r] = a), s
      }
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    pt = /^(?:a|area)$/i;
  function ft(e) {
    return (e.match(I) || []).join(" ")
  }
  function mt(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }
  function vt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
  }
  w.fn.extend({
    prop: function(e, t) {
      return B(this, w.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[w.propFix[e] || e]
      })
    }
  }),
    w.extend({
      prop: function(e, t, i) {
        var n,
          s,
          a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a)
          return 1 === a && w.isXMLDoc(e) || (t = w.propFix[t] || t, s = w.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = w.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : ht.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }),
  p.optSelected || (w.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      w.propFix[this.toLowerCase()] = this
    }),
    w.fn.extend({
      addClass: function(e) {
        var t,
          i,
          n,
          s,
          a,
          r,
          o,
          l = 0;
        if (f(e))
          return this.each(function(t) {
            w(this).addClass(e.call(this, t, mt(this)))
          });
        if ((t = vt(e)).length)
          for (; i = this[l++];)
            if (s = mt(i), n = 1 === i.nodeType && " " + ft(s) + " ") {
              for (r = 0; a = t[r++];)
                n.indexOf(" " + a + " ") < 0 && (n += a + " ");
              s !== (o = ft(n)) && i.setAttribute("class", o)
            }
        return this
      },
      removeClass: function(e) {
        var t,
          i,
          n,
          s,
          a,
          r,
          o,
          l = 0;
        if (f(e))
          return this.each(function(t) {
            w(this).removeClass(e.call(this, t, mt(this)))
          });
        if (!arguments.length)
          return this.attr("class", "");
        if ((t = vt(e)).length)
          for (; i = this[l++];)
            if (s = mt(i), n = 1 === i.nodeType && " " + ft(s) + " ") {
              for (r = 0; a = t[r++];)
                for (; n.indexOf(" " + a + " ") > -1;)
                  n = n.replace(" " + a + " ", " ");
              s !== (o = ft(n)) && i.setAttribute("class", o)
            }
        return this
      },
      toggleClass: function(e, t) {
        var i = typeof e,
          n = "string" === i || Array.isArray(e);
        return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : f(e) ? this.each(function(i) {
          w(this).toggleClass(e.call(this, i, mt(this), t), t)
        }) : this.each(function() {
          var t,
            s,
            a,
            r;
          if (n)
            for (s = 0, a = w(this), r = vt(e); t = r[s++];)
              a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
          else
            void 0 !== e && "boolean" !== i || ((t = mt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
        })
      },
      hasClass: function(e) {
        var t,
          i,
          n = 0;
        for (t = " " + e + " "; i = this[n++];)
          if (1 === i.nodeType && (" " + ft(mt(i)) + " ").indexOf(t) > -1)
            return !0;
        return !1
      }
    });
  var gt = /\r/g;
  w.fn.extend({
    val: function(e) {
      var t,
        i,
        n,
        s = this[0];
      return arguments.length ? (n = f(e), this.each(function(i) {
        var s;
        1 === this.nodeType && (null == (s = n ? e.call(this, i, w(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = w.map(s, function(e) {
          return null == e ? "" : e + ""
        })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
      })) : s ? (t = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(gt, "") : null == i ? "" : i : void 0
    }
  }),
    w.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : ft(w.text(e))
          }
        },
        select: {
          get: function(e) {
            var t,
              i,
              n,
              s = e.options,
              a = e.selectedIndex,
              r = "select-one" === e.type,
              o = r ? null : [],
              l = r ? a + 1 : s.length;
            for (n = a < 0 ? l : r ? a : 0; n < l; n++)
              if (((i = s[n]).selected || n === a) && !i.disabled && (!i.parentNode.disabled || !k(i.parentNode, "optgroup"))) {
                if (t = w(i).val(), r)
                  return t;
                o.push(t)
              }
            return o
          },
          set: function(e, t) {
            for (var i, n, s = e.options, a = w.makeArray(t), r = s.length; r--;)
              ((n = s[r]).selected = w.inArray(w.valHooks.option.get(n), a) > -1) && (i = !0);
            return i || (e.selectedIndex = -1), a
          }
        }
      }
    }),
    w.each(["radio", "checkbox"], function() {
      w.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t))
            return e.checked = w.inArray(w(e).val(), t) > -1
        }
      },
      p.checkOn || (w.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    }),
    p.focusin = "onfocusin" in e;
  var yt = /^(?:focusinfocus|focusoutblur)$/,
    bt = function(e) {
      e.stopPropagation()
    };
  w.extend(w.event, {
    trigger: function(t, i, n, s) {
      var a,
        r,
        o,
        l,
        d,
        c,
        h,
        p,
        g = [n || v],
        y = u.call(t, "type") ? t.type : t,
        b = u.call(t, "namespace") ? t.namespace.split(".") : [];
      if (r = p = o = n = n || v, 3 !== n.nodeType && 8 !== n.nodeType && !yt.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), d = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : w.makeArray(i, [t]), h = w.event.special[y] || {}, s || !h.trigger || !1 !== h.trigger.apply(n, i))) {
        if (!s && !h.noBubble && !m(n)) {
          for (l = h.delegateType || y, yt.test(l + y) || (r = r.parentNode); r; r = r.parentNode)
            g.push(r),
              o = r;
          o === (n.ownerDocument || v) && g.push(o.defaultView || o.parentWindow || e)
        }
        for (a = 0; (r = g[a++]) && !t.isPropagationStopped();)
          p = r,
            t.type = a > 1 ? l : h.bindType || y,
          (c = (Y.get(r, "events") || Object.create(null))[t.type] && Y.get(r, "handle")) && c.apply(r, i),
          (c = d && r[d]) && c.apply && X(r) && (t.result = c.apply(r, i), !1 === t.result && t.preventDefault());
        return t.type = y, s || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(g.pop(), i) || !X(n) || d && f(n[y]) && !m(n) && ((o = n[d]) && (n[d] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, bt), n[y](), t.isPropagationStopped() && p.removeEventListener(y, bt), w.event.triggered = void 0, o && (n[d] = o)), t.result
      }
    },
    simulate: function(e, t, i) {
      var n = w.extend(new w.Event, i, {
        type: e,
        isSimulated: !0
      });
      w.event.trigger(n, null, t)
    }
  }),
    w.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          w.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var i = this[0];
        if (i)
          return w.event.trigger(e, t, i, !0)
      }
    }),
  p.focusin || w.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var i = function(e) {
      w.event.simulate(t, e.target, w.event.fix(e))
    };
    w.event.special[t] = {
      setup: function() {
        var n = this.ownerDocument || this.document || this,
          s = Y.access(n, t);
        s || n.addEventListener(e, i, !0),
          Y.access(n, t, (s || 0) + 1)
      },
      teardown: function() {
        var n = this.ownerDocument || this.document || this,
          s = Y.access(n, t) - 1;
        s ? Y.access(n, t, s) : (n.removeEventListener(e, i, !0), Y.remove(n, t))
      }
    }
  });
  var wt = e.location,
    xt = {
      guid: Date.now()
    },
    Tt = /\?/;
  w.parseXML = function(t) {
    var i;
    if (!t || "string" != typeof t)
      return null;
    try {
      i = (new e.DOMParser).parseFromString(t, "text/xml")
    } catch (e) {
      i = void 0
    }
    return i && !i.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), i
  };
  var Et = /\[\]$/,
    Ct = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function Mt(e, t, i, n) {
    var s;
    if (Array.isArray(t))
      w.each(t, function(t, s) {
        i || Et.test(e) ? n(e, s) : Mt(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, i, n)
      });
    else if (i || "object" !== b(t))
      n(e, t);
    else
      for (s in t)
        Mt(e + "[" + s + "]", t[s], i, n)
  }
  w.param = function(e, t) {
    var i,
      n = [],
      s = function(e, t) {
        var i = f(t) ? t() : t;
        n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
      };
    if (null == e)
      return "";
    if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
      w.each(e, function() {
        s(this.name, this.value)
      });
    else
      for (i in e)
        Mt(i, e[i], t, s);
    return n.join("&")
  },
    w.fn.extend({
      serialize: function() {
        return w.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !w(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !he.test(e))
        }).map(function(e, t) {
          var i = w(this).val();
          return null == i ? null : Array.isArray(i) ? w.map(i, function(e) {
            return {
              name: t.name,
              value: e.replace(Ct, "\r\n")
            }
          }) : {
            name: t.name,
            value: i.replace(Ct, "\r\n")
          }
        }).get()
      }
    });
  var Pt = /%20/g,
    At = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    zt = /^(?:GET|HEAD)$/,
    Ot = /^\/\//,
    It = {},
    $t = {},
    Nt = "*/".concat("*"),
    jt = v.createElement("a");
  function Ht(e) {
    return function(t, i) {
      "string" != typeof t && (i = t, t = "*");
      var n,
        s = 0,
        a = t.toLowerCase().match(I) || [];
      if (f(i))
        for (; n = a[s++];)
          "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
    }
  }
  function _t(e, t, i, n) {
    var s = {},
      a = e === $t;
    function r(o) {
      var l;
      return s[o] = !0, w.each(e[o] || [], function(e, o) {
        var d = o(t, i, n);
        return "string" != typeof d || a || s[d] ? a ? !(l = d) : void 0 : (t.dataTypes.unshift(d), r(d), !1)
      }), l
    }
    return r(t.dataTypes[0]) || !s["*"] && r("*")
  }
  function qt(e, t) {
    var i,
      n,
      s = w.ajaxSettings.flatOptions || {};
    for (i in t)
      void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
    return n && w.extend(!0, e, n), e
  }
  jt.href = wt.href,
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: wt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Nt,
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
        return t ? qt(qt(e, w.ajaxSettings), t) : qt(w.ajaxSettings, e)
      },
      ajaxPrefilter: Ht(It),
      ajaxTransport: Ht($t),
      ajax: function(t, i) {
        "object" == typeof t && (i = t, t = void 0),
          i = i || {};
        var n,
          s,
          a,
          r,
          o,
          l,
          d,
          u,
          c,
          h,
          p = w.ajaxSetup({}, i),
          f = p.context || p,
          m = p.context && (f.nodeType || f.jquery) ? w(f) : w.event,
          g = w.Deferred(),
          y = w.Callbacks("once memory"),
          b = p.statusCode || {},
          x = {},
          T = {},
          E = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (d) {
                if (!r)
                  for (r = {}; t = Lt.exec(a);)
                    r[t[1].toLowerCase() + " "] = (r[t[1].toLowerCase() + " "] || []).concat(t[2]);
                t = r[e.toLowerCase() + " "]
              }
              return null == t ? null : t.join(", ")
            },
            getAllResponseHeaders: function() {
              return d ? a : null
            },
            setRequestHeader: function(e, t) {
              return null == d && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, x[e] = t), this
            },
            overrideMimeType: function(e) {
              return null == d && (p.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (d)
                  C.always(e[C.status]);
                else
                  for (t in e)
                    b[t] = [b[t], e[t]];
              return this
            },
            abort: function(e) {
              var t = e || E;
              return n && n.abort(t), S(0, t), this
            }
          };
        if (g.promise(C), p.url = ((t || p.url || wt.href) + "").replace(Ot, wt.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(I) || [""], null == p.crossDomain) {
          l = v.createElement("a");
          try {
            l.href = p.url,
              l.href = l.href,
              p.crossDomain = jt.protocol + "//" + jt.host != l.protocol + "//" + l.host
          } catch (e) {
            p.crossDomain = !0
          }
        }
        if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), _t(It, p, i, C), d)
          return C;
        for (c in (u = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !zt.test(p.type), s = p.url.replace(At, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Pt, "+")) : (h = p.url.slice(s.length), p.data && (p.processData || "string" == typeof p.data) && (s += (Tt.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace(Dt, "$1"), h = (Tt.test(s) ? "&" : "?") + "_=" + xt.guid++ + h), p.url = s + h), p.ifModified && (w.lastModified[s] && C.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && C.setRequestHeader("If-None-Match", w.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : p.accepts["*"]), p.headers)
          C.setRequestHeader(c, p.headers[c]);
        if (p.beforeSend && (!1 === p.beforeSend.call(f, C, p) || d))
          return C.abort();
        if (E = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), n = _t($t, p, i, C)) {
          if (C.readyState = 1, u && m.trigger("ajaxSend", [C, p]), d)
            return C;
          p.async && p.timeout > 0 && (o = e.setTimeout(function() {
            C.abort("timeout")
          }, p.timeout));
          try {
            d = !1,
              n.send(x, S)
          } catch (e) {
            if (d)
              throw e;
            S(-1, e)
          }
        } else
          S(-1, "No Transport");
        function S(t, i, r, l) {
          var c,
            h,
            v,
            x,
            T,
            E = i;
          d || (d = !0, o && e.clearTimeout(o), n = void 0, a = l || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (x = function(e, t, i) {
            for (var n, s, a, r, o = e.contents, l = e.dataTypes; "*" === l[0];)
              l.shift(),
              void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
            if (n)
              for (s in o)
                if (o[s] && o[s].test(n)) {
                  l.unshift(s);
                  break
                }
            if (l[0] in i)
              a = l[0];
            else {
              for (s in i) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                  a = s;
                  break
                }
                r || (r = s)
              }
              a = a || r
            }
            if (a)
              return a !== l[0] && l.unshift(a), i[a]
          }(p, C, r)), !c && w.inArray("script", p.dataTypes) > -1 && (p.converters["text script"] = function() {}), x = function(e, t, i, n) {
            var s,
              a,
              r,
              o,
              l,
              d = {},
              u = e.dataTypes.slice();
            if (u[1])
              for (r in e.converters)
                d[r.toLowerCase()] = e.converters[r];
            for (a = u.shift(); a;)
              if (e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
                if ("*" === a)
                  a = l;
                else if ("*" !== l && l !== a) {
                  if (!(r = d[l + " " + a] || d["* " + a]))
                    for (s in d)
                      if ((o = s.split(" "))[1] === a && (r = d[l + " " + o[0]] || d["* " + o[0]])) {
                        !0 === r ? r = d[s] : !0 !== d[s] && (a = o[0], u.unshift(o[1]));
                        break
                      }
                  if (!0 !== r)
                    if (r && e.throws)
                      t = r(t);
                    else
                      try {
                        t = r(t)
                      } catch (e) {
                        return {
                          state: "parsererror",
                          error: r ? e : "No conversion from " + l + " to " + a
                        }
                      }
                }
            return {
              state: "success",
              data: t
            }
          }(p, x, C, c), c ? (p.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (w.lastModified[s] = T), (T = C.getResponseHeader("etag")) && (w.etag[s] = T)), 204 === t || "HEAD" === p.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = x.state, h = x.data, c = !(v = x.error))) : (v = E, !t && E || (E = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (i || E) + "", c ? g.resolveWith(f, [h, E, C]) : g.rejectWith(f, [C, E, v]), C.statusCode(b), b = void 0, u && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? h : v]), y.fireWith(f, [C, E]), u && (m.trigger("ajaxComplete", [C, p]), --w.active || w.event.trigger("ajaxStop")))
        }
        return C
      },
      getJSON: function(e, t, i) {
        return w.get(e, t, i, "json")
      },
      getScript: function(e, t) {
        return w.get(e, void 0, t, "script")
      }
    }),
    w.each(["get", "post"], function(e, t) {
      w[t] = function(e, i, n, s) {
        return f(i) && (s = s || n, n = i, i = void 0), w.ajax(w.extend({
          url: e,
          type: t,
          dataType: s,
          data: i,
          success: n
        }, w.isPlainObject(e) && e))
      }
    }),
    w.ajaxPrefilter(function(e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    w._evalUrl = function(e, t, i) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function() {}
        },
        dataFilter: function(e) {
          w.globalEval(e, t, i)
        }
      })
    },
    w.fn.extend({
      wrapAll: function(e) {
        var t;
        return this[0] && (f(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstElementChild;)
            e = e.firstElementChild;
          return e
        }).append(this)), this
      },
      wrapInner: function(e) {
        return f(e) ? this.each(function(t) {
          w(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
          var t = w(this),
            i = t.contents();
          i.length ? i.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = f(e);
        return this.each(function(i) {
          w(this).wrapAll(t ? e.call(this, i) : e)
        })
      },
      unwrap: function(e) {
        return this.parent(e).not("body").each(function() {
          w(this).replaceWith(this.childNodes)
        }), this
      }
    }),
    w.expr.pseudos.hidden = function(e) {
      return !w.expr.pseudos.visible(e)
    },
    w.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    },
    w.ajaxSettings.xhr = function() {
      try {
        return new e.XMLHttpRequest
      } catch (e) {}
    };
  var Bt = {
      0: 200,
      1223: 204
    },
    Rt = w.ajaxSettings.xhr();
  p.cors = !!Rt && "withCredentials" in Rt,
    p.ajax = Rt = !!Rt,
    w.ajaxTransport(function(t) {
      var i,
        n;
      if (p.cors || Rt && !t.crossDomain)
        return {
          send: function(s, a) {
            var r,
              o = t.xhr();
            if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
              for (r in t.xhrFields)
                o[r] = t.xhrFields[r];
            for (r in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s)
              o.setRequestHeader(r, s[r]);
            i = function(e) {
              return function() {
                i && (i = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(Bt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                  binary: o.response
                } : {
                  text: o.responseText
                }, o.getAllResponseHeaders()))
              }
            },
              o.onload = i(),
              n = o.onerror = o.ontimeout = i("error"),
              void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function() {
                4 === o.readyState && e.setTimeout(function() {
                  i && n()
                })
              },
              i = i("abort");
            try {
              o.send(t.hasContent && t.data || null)
            } catch (e) {
              if (i)
                throw e
            }
          },
          abort: function() {
            i && i()
          }
        }
    }),
    w.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1)
    }),
    w.ajaxSetup({
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
    }),
    w.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1),
      e.crossDomain && (e.type = "GET")
    }),
    w.ajaxTransport("script", function(e) {
      var t,
        i;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function(n, s) {
            t = w("<script>").attr(e.scriptAttrs || {}).prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", i = function(e) {
              t.remove(),
                i = null,
              e && s("error" === e.type ? 404 : 200, e.type)
            }),
              v.head.appendChild(t[0])
          },
          abort: function() {
            i && i()
          }
        }
    });
  var Ft,
    Gt = [],
    Wt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Gt.pop() || w.expando + "_" + xt.guid++;
      return this[e] = !0, e
    }
  }),
    w.ajaxPrefilter("json jsonp", function(t, i, n) {
      var s,
        a,
        r,
        o = !1 !== t.jsonp && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");
      if (o || "jsonp" === t.dataTypes[0])
        return s = t.jsonpCallback = f(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Wt, "$1" + s) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function() {
          return r || w.error(s + " was not called"), r[0]
        }, t.dataTypes[0] = "json", a = e[s], e[s] = function() {
          r = arguments
        }, n.always(function() {
          void 0 === a ? w(e).removeProp(s) : e[s] = a,
          t[s] && (t.jsonpCallback = i.jsonpCallback, Gt.push(s)),
          r && f(a) && a(r[0]),
            r = a = void 0
        }), "script"
    }),
    p.createHTMLDocument = ((Ft = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length),
    w.parseHTML = function(e, t, i) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (p.createHTMLDocument ? ((n = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href, t.head.appendChild(n)) : t = v), s = M.exec(e), a = !i && [], s ? [t.createElement(s[1])] : (s = be([e], t, a), a && a.length && w(a).remove(), w.merge([], s.childNodes)));
      var n,
        s,
        a
    },
    w.fn.load = function(e, t, i) {
      var n,
        s,
        a,
        r = this,
        o = e.indexOf(" ");
      return o > -1 && (n = ft(e.slice(o)), e = e.slice(0, o)), f(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"), r.length > 0 && w.ajax({
        url: e,
        type: s || "GET",
        dataType: "html",
        data: t
      }).done(function(e) {
        a = arguments,
          r.html(n ? w("<div>").append(w.parseHTML(e)).find(n) : e)
      }).always(i && function(e, t) {
        r.each(function() {
          i.apply(this, a || [e.responseText, t, e])
        })
      }), this
    },
    w.expr.pseudos.animated = function(e) {
      return w.grep(w.timers, function(t) {
        return e === t.elem
      }).length
    },
    w.offset = {
      setOffset: function(e, t, i) {
        var n,
          s,
          a,
          r,
          o,
          l,
          d = w.css(e, "position"),
          u = w(e),
          c = {};
        "static" === d && (e.style.position = "relative"),
          o = u.offset(),
          a = w.css(e, "top"),
          l = w.css(e, "left"),
          ("absolute" === d || "fixed" === d) && (a + l).indexOf("auto") > -1 ? (r = (n = u.position()).top, s = n.left) : (r = parseFloat(a) || 0, s = parseFloat(l) || 0),
        f(t) && (t = t.call(e, i, w.extend({}, o))),
        null != t.top && (c.top = t.top - o.top + r),
        null != t.left && (c.left = t.left - o.left + s),
          "using" in t ? t.using.call(e, c) : ("number" == typeof c.top && (c.top += "px"), "number" == typeof c.left && (c.left += "px"), u.css(c))
      }
    },
    w.fn.extend({
      offset: function(e) {
        if (arguments.length)
          return void 0 === e ? this : this.each(function(t) {
            w.offset.setOffset(this, e, t)
          });
        var t,
          i,
          n = this[0];
        return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
          top: t.top + i.pageYOffset,
          left: t.left + i.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0
      },
      position: function() {
        if (this[0]) {
          var e,
            t,
            i,
            n = this[0],
            s = {
              top: 0,
              left: 0
            };
          if ("fixed" === w.css(n, "position"))
            t = n.getBoundingClientRect();
          else {
            for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === w.css(e, "position");)
              e = e.parentNode;
            e && e !== n && 1 === e.nodeType && ((s = w(e).offset()).top += w.css(e, "borderTopWidth", !0), s.left += w.css(e, "borderLeftWidth", !0))
          }
          return {
            top: t.top - s.top - w.css(n, "marginTop", !0),
            left: t.left - s.left - w.css(n, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && "static" === w.css(e, "position");)
            e = e.offsetParent;
          return e || ie
        })
      }
    }),
    w.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, t) {
      var i = "pageYOffset" === t;
      w.fn[e] = function(n) {
        return B(this, function(e, n, s) {
          var a;
          if (m(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === s)
            return a ? a[t] : e[n];
          a ? a.scrollTo(i ? a.pageXOffset : s, i ? s : a.pageYOffset) : e[n] = s
        }, e, n, arguments.length)
      }
    }),
    w.each(["top", "left"], function(e, t) {
      w.cssHooks[t] = Re(p.pixelPosition, function(e, i) {
        if (i)
          return i = Be(e, t), je.test(i) ? w(e).position()[t] + "px" : i
      })
    }),
    w.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      w.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(i, n) {
        w.fn[n] = function(s, a) {
          var r = arguments.length && (i || "boolean" != typeof s),
            o = i || (!0 === s || !0 === a ? "margin" : "border");
          return B(this, function(t, i, s) {
            var a;
            return m(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === s ? w.css(t, i, o) : w.style(t, i, s, o)
          }, t, r ? s : void 0, r)
        }
      })
    }),
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      w.fn[t] = function(e) {
        return this.on(t, e)
      }
    }),
    w.fn.extend({
      bind: function(e, t, i) {
        return this.on(e, null, t, i)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, i, n) {
        return this.on(t, e, i, n)
      },
      undelegate: function(e, t, i) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
      },
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }),
    w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
      w.fn[t] = function(e, i) {
        return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
      }
    });
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  w.proxy = function(e, t) {
    var i,
      n,
      a;
    if ("string" == typeof t && (i = e[t], t = e, e = i), f(e))
      return n = s.call(arguments, 2), (a = function() {
        return e.apply(t || this, n.concat(s.call(arguments)))
      }).guid = e.guid = e.guid || w.guid++, a
  },
    w.holdReady = function(e) {
      e ? w.readyWait++ : w.ready(!0)
    },
    w.isArray = Array.isArray,
    w.parseJSON = JSON.parse,
    w.nodeName = k,
    w.isFunction = f,
    w.isWindow = m,
    w.camelCase = W,
    w.type = b,
    w.now = Date.now,
    w.isNumeric = function(e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    },
    w.trim = function(e) {
      return null == e ? "" : (e + "").replace(Xt, "")
    },
  "function" == typeof define && define.amd && define("jquery", [], function() {
    return w
  });
  var Vt = e.jQuery,
    Yt = e.$;
  return w.noConflict = function(t) {
    return e.$ === w && (e.$ = Yt), t && e.jQuery === w && (e.jQuery = Vt), w
  }, void 0 === t && (e.jQuery = e.$ = w), w
}),
  function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Util = t(e.jQuery)
  }(this, function(e) {
    "use strict";
    var t = function(e) {
        return e && "object" == typeof e && "default" in e ? e : {
          default: e
        }
      }(e),
      i = "transitionend";
    function n(e) {
      var i = this,
        n = !1;
      return t.default(this).one(s.TRANSITION_END, function() {
        n = !0
      }), setTimeout(function() {
        n || s.triggerTransitionEnd(i)
      }, e), this
    }
    var s = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function(e) {
        do {
          e += ~~(1e6 * Math.random())
        } while (document.getElementById(e));
        return e
      },
      getSelectorFromElement: function(e) {
        var t = e.getAttribute("data-target");
        if (!t || "#" === t) {
          var i = e.getAttribute("href");
          t = i && "#" !== i ? i.trim() : ""
        }
        try {
          return document.querySelector(t) ? t : null
        } catch (e) {
          return null
        }
      },
      getTransitionDurationFromElement: function(e) {
        if (!e)
          return 0;
        var i = t.default(e).css("transition-duration"),
          n = t.default(e).css("transition-delay"),
          s = parseFloat(i),
          a = parseFloat(n);
        return s || a ? (i = i.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(i) + parseFloat(n))) : 0
      },
      reflow: function(e) {
        return e.offsetHeight
      },
      triggerTransitionEnd: function(e) {
        t.default(e).trigger(i)
      },
      supportsTransitionEnd: function() {
        return Boolean(i)
      },
      isElement: function(e) {
        return (e[0] || e).nodeType
      },
      typeCheckConfig: function(e, t, i) {
        for (var n in i)
          if (Object.prototype.hasOwnProperty.call(i, n)) {
            var a = i[n],
              r = t[n],
              o = r && s.isElement(r) ? "element" : null === (l = r) || void 0 === l ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(a).test(o))
              throw new Error(e.toUpperCase() + ': Option "' + n + '" provided type "' + o + '" but expected type "' + a + '".')
          }
        var l
      },
      findShadowRoot: function(e) {
        if (!document.documentElement.attachShadow)
          return null;
        if ("function" == typeof e.getRootNode) {
          var t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null
        }
        return e instanceof ShadowRoot ? e : e.parentNode ? s.findShadowRoot(e.parentNode) : null
      },
      jQueryDetection: function() {
        if (void 0 === t.default)
          throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.default.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)
          throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
      }
    };
    return s.jQueryDetection(), t.default.fn.emulateTransitionEnd = n, t.default.event.special[s.TRANSITION_END] = {
      bindType: i,
      delegateType: i,
      handle: function(e) {
        if (t.default(e.target).is(this))
          return e.handleObj.handler.apply(this, arguments)
      }
    }, s
  }),
  function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Collapse = t(e.jQuery, e.Util)
  }(this, function(e, t) {
    "use strict";
    function i(e) {
      return e && "object" == typeof e && "default" in e ? e : {
        default: e
      }
    }
    var n = i(e),
      s = i(t);
    function a(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1,
          n.configurable = !0,
        "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n)
      }
    }
    function r() {
      return (r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
        }
        return e
      }).apply(this, arguments)
    }
    var o = "collapse",
      l = "bs.collapse",
      d = n.default.fn[o],
      u = {
        toggle: !0,
        parent: ""
      },
      c = {
        toggle: "boolean",
        parent: "(string|element)"
      },
      h = '[data-toggle="collapse"]',
      p = function() {
        function e(e, t) {
          this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
          for (var i = [].slice.call(document.querySelectorAll(h)), n = 0, a = i.length; n < a; n++) {
            var r = i[n],
              o = s.default.getSelectorFromElement(r),
              l = [].slice.call(document.querySelectorAll(o)).filter(function(t) {
                return t === e
              });
            null !== o && l.length > 0 && (this._selector = o, this._triggerArray.push(r))
          }
          this._parent = this._config.parent ? this._getParent() : null,
          this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle()
        }
        var t,
          i,
          d,
          p = e.prototype;
        return p.toggle = function() {
          n.default(this._element).hasClass("show") ? this.hide() : this.show()
        }, p.show = function() {
          var t,
            i,
            a = this;
          if (!this._isTransitioning && !n.default(this._element).hasClass("show") && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
            return "string" == typeof a._config.parent ? e.getAttribute("data-parent") === a._config.parent : e.classList.contains("collapse")
          })).length && (t = null), !(t && (i = n.default(t).not(this._selector).data(l)) && i._isTransitioning))) {
            var r = n.default.Event("show.bs.collapse");
            if (n.default(this._element).trigger(r), !r.isDefaultPrevented()) {
              t && (e._jQueryInterface.call(n.default(t).not(this._selector), "hide"), i || n.default(t).data(l, null));
              var o = this._getDimension();
              n.default(this._element).removeClass("collapse").addClass("collapsing"),
                this._element.style[o] = 0,
              this._triggerArray.length && n.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var d = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                u = s.default.getTransitionDurationFromElement(this._element);
              n.default(this._element).one(s.default.TRANSITION_END, function() {
                n.default(a._element).removeClass("collapsing").addClass("collapse show"),
                  a._element.style[o] = "",
                  a.setTransitioning(!1),
                  n.default(a._element).trigger("shown.bs.collapse")
              }).emulateTransitionEnd(u),
                this._element.style[o] = this._element[d] + "px"
            }
          }
        }, p.hide = function() {
          var e = this;
          if (!this._isTransitioning && n.default(this._element).hasClass("show")) {
            var t = n.default.Event("hide.bs.collapse");
            if (n.default(this._element).trigger(t), !t.isDefaultPrevented()) {
              var i = this._getDimension();
              this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                s.default.reflow(this._element),
                n.default(this._element).addClass("collapsing").removeClass("collapse show");
              var a = this._triggerArray.length;
              if (a > 0)
                for (var r = 0; r < a; r++) {
                  var o = this._triggerArray[r],
                    l = s.default.getSelectorFromElement(o);
                  if (null !== l)
                    n.default([].slice.call(document.querySelectorAll(l))).hasClass("show") || n.default(o).addClass("collapsed").attr("aria-expanded", !1)
                }
              this.setTransitioning(!0);
              this._element.style[i] = "";
              var d = s.default.getTransitionDurationFromElement(this._element);
              n.default(this._element).one(s.default.TRANSITION_END, function() {
                e.setTransitioning(!1),
                  n.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
              }).emulateTransitionEnd(d)
            }
          }
        }, p.setTransitioning = function(e) {
          this._isTransitioning = e
        }, p.dispose = function() {
          n.default.removeData(this._element, l),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }, p._getConfig = function(e) {
          return (e = r({}, u, e)).toggle = Boolean(e.toggle), s.default.typeCheckConfig(o, e, c), e
        }, p._getDimension = function() {
          return n.default(this._element).hasClass("width") ? "width" : "height"
        }, p._getParent = function() {
          var t,
            i = this;
          s.default.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
          var a = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
            r = [].slice.call(t.querySelectorAll(a));
          return n.default(r).each(function(t, n) {
            i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
          }), t
        }, p._addAriaAndCollapsedClass = function(e, t) {
          var i = n.default(e).hasClass("show");
          t.length && n.default(t).toggleClass("collapsed", !i).attr("aria-expanded", i)
        }, e._getTargetFromElement = function(e) {
          var t = s.default.getSelectorFromElement(e);
          return t ? document.querySelector(t) : null
        }, e._jQueryInterface = function(t) {
          return this.each(function() {
            var i = n.default(this),
              s = i.data(l),
              a = r({}, u, i.data(), "object" == typeof t && t ? t : {});
            if (!s && a.toggle && "string" == typeof t && /show|hide/.test(t) && (a.toggle = !1), s || (s = new e(this, a), i.data(l, s)), "string" == typeof t) {
              if (void 0 === s[t])
                throw new TypeError('No method named "' + t + '"');
              s[t]()
            }
          })
        }, t = e, d = [{
          key: "VERSION",
          get: function() {
            return "4.6.0"
          }
        }, {
          key: "Default",
          get: function() {
            return u
          }
        }], (i = null) && a(t.prototype, i), d && a(t, d), e
      }();
    return n.default(document).on("click.bs.collapse.data-api", h, function(e) {
      "A" === e.currentTarget.tagName && e.preventDefault();
      var t = n.default(this),
        i = s.default.getSelectorFromElement(this),
        a = [].slice.call(document.querySelectorAll(i));
      n.default(a).each(function() {
        var e = n.default(this),
          i = e.data(l) ? "toggle" : t.data();
        p._jQueryInterface.call(e, i)
      })
    }), n.default.fn[o] = p._jQueryInterface, n.default.fn[o].Constructor = p, n.default.fn[o].noConflict = function() {
      return n.default.fn[o] = d, p._jQueryInterface
    }, p
  }),
  function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
  }(this, function() {
    "use strict";
    function e(e) {
      return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }
    function t(i, n) {
      void 0 === i && (i = {}),
      void 0 === n && (n = {}),
        Object.keys(n).forEach(function(s) {
          void 0 === i[s] ? i[s] = n[s] : e(n[s]) && e(i[s]) && Object.keys(n[s]).length > 0 && t(i[s], n[s])
        })
    }
    var i = "undefined" != typeof document ? document : {},
      n = {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
          blur: function() {},
          nodeName: ""
        },
        querySelector: function() {
          return null
        },
        querySelectorAll: function() {
          return []
        },
        getElementById: function() {
          return null
        },
        createEvent: function() {
          return {
            initEvent: function() {}
          }
        },
        createElement: function() {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function() {},
            getElementsByTagName: function() {
              return []
            }
          }
        },
        createElementNS: function() {
          return {}
        },
        importNode: function() {
          return null
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };
    t(i, n);
    var s = "undefined" != typeof window ? window : {};
    t(s, {
      document: n,
      navigator: {
        userAgent: ""
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      },
      history: {
        replaceState: function() {},
        pushState: function() {},
        go: function() {},
        back: function() {}
      },
      CustomEvent: function() {
        return this
      },
      addEventListener: function() {},
      removeEventListener: function() {},
      getComputedStyle: function() {
        return {
          getPropertyValue: function() {
            return ""
          }
        }
      },
      Image: function() {},
      Date: function() {},
      screen: {},
      setTimeout: function() {},
      clearTimeout: function() {},
      matchMedia: function() {
        return {}
      }
    });
    var a = function(e) {
      for (var t = 0; t < e.length; t += 1)
        this[t] = e[t];
      return this.length = e.length, this
    };
    function r(e, t) {
      var n = [],
        r = 0;
      if (e && !t && e instanceof a)
        return e;
      if (e)
        if ("string" == typeof e) {
          var o,
            l,
            d = e.trim();
          if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
            var u = "div";
            for (0 === d.indexOf("<li") && (u = "ul"), 0 === d.indexOf("<tr") && (u = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (u = "tr"), 0 === d.indexOf("<tbody") && (u = "table"), 0 === d.indexOf("<option") && (u = "select"), (l = i.createElement(u)).innerHTML = d, r = 0; r < l.childNodes.length; r += 1)
              n.push(l.childNodes[r])
          } else
            for (o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || i).querySelectorAll(e.trim()) : [i.getElementById(e.trim().split("#")[1])], r = 0; r < o.length; r += 1)
              o[r] && n.push(o[r])
        } else if (e.nodeType || e === s || e === i)
          n.push(e);
        else if (e.length > 0 && e[0].nodeType)
          for (r = 0; r < e.length; r += 1)
            n.push(e[r]);
      return new a(n)
    }
    function o(e) {
      for (var t = [], i = 0; i < e.length; i += 1)
        -1 === t.indexOf(e[i]) && t.push(e[i]);
      return t
    }
    r.fn = a.prototype,
      r.Class = a,
      r.Dom7 = a;
    var l = {
      addClass: function(e) {
        if (void 0 === e)
          return this;
        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
          for (var n = 0; n < this.length; n += 1)
            void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[i]);
        return this
      },
      removeClass: function(e) {
        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
          for (var n = 0; n < this.length; n += 1)
            void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[i]);
        return this
      },
      hasClass: function(e) {
        return !!this[0] && this[0].classList.contains(e)
      },
      toggleClass: function(e) {
        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
          for (var n = 0; n < this.length; n += 1)
            void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
        return this
      },
      attr: function(e, t) {
        var i = arguments;
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var n = 0; n < this.length; n += 1)
          if (2 === i.length)
            this[n].setAttribute(e, t);
          else
            for (var s in e)
              this[n][s] = e[s],
                this[n].setAttribute(s, e[s]);
        return this
      },
      removeAttr: function(e) {
        for (var t = 0; t < this.length; t += 1)
          this[t].removeAttribute(e);
        return this
      },
      data: function(e, t) {
        var i;
        if (void 0 !== t) {
          for (var n = 0; n < this.length; n += 1)
            (i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
              i.dom7ElementDataStorage[e] = t;
          return this
        }
        if (i = this[0]) {
          if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
            return i.dom7ElementDataStorage[e];
          var s = i.getAttribute("data-" + e);
          return s || void 0
        }
      },
      transform: function(e) {
        for (var t = 0; t < this.length; t += 1) {
          var i = this[t].style;
          i.webkitTransform = e,
            i.transform = e
        }
        return this
      },
      transition: function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t += 1) {
          var i = this[t].style;
          i.webkitTransitionDuration = e,
            i.transitionDuration = e
        }
        return this
      },
      on: function() {
        for (var e, t = [], i = arguments.length; i--;)
          t[i] = arguments[i];
        var n = t[0],
          s = t[1],
          a = t[2],
          o = t[3];
        function l(e) {
          var t = e.target;
          if (t) {
            var i = e.target.dom7EventData || [];
            if (i.indexOf(e) < 0 && i.unshift(e), r(t).is(s))
              a.apply(t, i);
            else
              for (var n = r(t).parents(), o = 0; o < n.length; o += 1)
                r(n[o]).is(s) && a.apply(n[o], i)
          }
        }
        function d(e) {
          var t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e),
            a.apply(this, t)
        }
        "function" == typeof t[1] && (n = (e = t)[0], a = e[1], o = e[2], s = void 0),
        o || (o = !1);
        for (var u, c = n.split(" "), h = 0; h < this.length; h += 1) {
          var p = this[h];
          if (s)
            for (u = 0; u < c.length; u += 1) {
              var f = c[u];
              p.dom7LiveListeners || (p.dom7LiveListeners = {}),
              p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []),
                p.dom7LiveListeners[f].push({
                  listener: a,
                  proxyListener: l
                }),
                p.addEventListener(f, l, o)
            }
          else
            for (u = 0; u < c.length; u += 1) {
              var m = c[u];
              p.dom7Listeners || (p.dom7Listeners = {}),
              p.dom7Listeners[m] || (p.dom7Listeners[m] = []),
                p.dom7Listeners[m].push({
                  listener: a,
                  proxyListener: d
                }),
                p.addEventListener(m, d, o)
            }
        }
        return this
      },
      off: function() {
        for (var e, t = [], i = arguments.length; i--;)
          t[i] = arguments[i];
        var n = t[0],
          s = t[1],
          a = t[2],
          r = t[3];
        "function" == typeof t[1] && (n = (e = t)[0], a = e[1], r = e[2], s = void 0),
        r || (r = !1);
        for (var o = n.split(" "), l = 0; l < o.length; l += 1)
          for (var d = o[l], u = 0; u < this.length; u += 1) {
            var c = this[u],
              h = void 0;
            if (!s && c.dom7Listeners ? h = c.dom7Listeners[d] : s && c.dom7LiveListeners && (h = c.dom7LiveListeners[d]), h && h.length)
              for (var p = h.length - 1; p >= 0; p -= 1) {
                var f = h[p];
                a && f.listener === a ? (c.removeEventListener(d, f.proxyListener, r), h.splice(p, 1)) : a && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === a ? (c.removeEventListener(d, f.proxyListener, r), h.splice(p, 1)) : a || (c.removeEventListener(d, f.proxyListener, r), h.splice(p, 1))
              }
          }
        return this
      },
      trigger: function() {
        for (var e = [], t = arguments.length; t--;)
          e[t] = arguments[t];
        for (var n = e[0].split(" "), a = e[1], r = 0; r < n.length; r += 1)
          for (var o = n[r], l = 0; l < this.length; l += 1) {
            var d = this[l],
              u = void 0;
            try {
              u = new s.CustomEvent(o, {
                detail: a,
                bubbles: !0,
                cancelable: !0
              })
            } catch (e) {
              (u = i.createEvent("Event")).initEvent(o, !0, !0),
                u.detail = a
            }
            d.dom7EventData = e.filter(function(e, t) {
              return t > 0
            }),
              d.dispatchEvent(u),
              d.dom7EventData = [],
              delete d.dom7EventData
          }
        return this
      },
      transitionEnd: function(e) {
        var t,
          i = ["webkitTransitionEnd", "transitionend"],
          n = this;
        function s(a) {
          if (a.target === this)
            for (e.call(this, a), t = 0; t < i.length; t += 1)
              n.off(i[t], s)
        }
        if (e)
          for (t = 0; t < i.length; t += 1)
            n.on(i[t], s);
        return this
      },
      outerWidth: function(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
          }
          return this[0].offsetWidth
        }
        return null
      },
      outerHeight: function(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
          }
          return this[0].offsetHeight
        }
        return null
      },
      offset: function() {
        if (this.length > 0) {
          var e = this[0],
            t = e.getBoundingClientRect(),
            n = i.body,
            a = e.clientTop || n.clientTop || 0,
            r = e.clientLeft || n.clientLeft || 0,
            o = e === s ? s.scrollY : e.scrollTop,
            l = e === s ? s.scrollX : e.scrollLeft;
          return {
            top: t.top + o - a,
            left: t.left + l - r
          }
        }
        return null
      },
      css: function(e, t) {
        var i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (var n in e)
                this[i].style[n] = e[n];
            return this
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e)
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1)
            this[i].style[e] = t;
          return this
        }
        return this
      },
      each: function(e) {
        if (!e)
          return this;
        for (var t = 0; t < this.length; t += 1)
          if (!1 === e.call(this[t], t, this[t]))
            return this;
        return this
      },
      html: function(e) {
        if (void 0 === e)
          return this[0] ? this[0].innerHTML : void 0;
        for (var t = 0; t < this.length; t += 1)
          this[t].innerHTML = e;
        return this
      },
      text: function(e) {
        if (void 0 === e)
          return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1)
          this[t].textContent = e;
        return this
      },
      is: function(e) {
        var t,
          n,
          o = this[0];
        if (!o || void 0 === e)
          return !1;
        if ("string" == typeof e) {
          if (o.matches)
            return o.matches(e);
          if (o.webkitMatchesSelector)
            return o.webkitMatchesSelector(e);
          if (o.msMatchesSelector)
            return o.msMatchesSelector(e);
          for (t = r(e), n = 0; n < t.length; n += 1)
            if (t[n] === o)
              return !0;
          return !1
        }
        if (e === i)
          return o === i;
        if (e === s)
          return o === s;
        if (e.nodeType || e instanceof a) {
          for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
            if (t[n] === o)
              return !0;
          return !1
        }
        return !1
      },
      index: function() {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling);)
            1 === t.nodeType && (e += 1);
          return e
        }
      },
      eq: function(e) {
        if (void 0 === e)
          return this;
        var t,
          i = this.length;
        return new a(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
      },
      append: function() {
        for (var e, t = [], n = arguments.length; n--;)
          t[n] = arguments[n];
        for (var s = 0; s < t.length; s += 1) {
          e = t[s];
          for (var r = 0; r < this.length; r += 1)
            if ("string" == typeof e) {
              var o = i.createElement("div");
              for (o.innerHTML = e; o.firstChild;)
                this[r].appendChild(o.firstChild)
            } else if (e instanceof a)
              for (var l = 0; l < e.length; l += 1)
                this[r].appendChild(e[l]);
            else
              this[r].appendChild(e)
        }
        return this
      },
      prepend: function(e) {
        var t,
          n;
        for (t = 0; t < this.length; t += 1)
          if ("string" == typeof e) {
            var s = i.createElement("div");
            for (s.innerHTML = e, n = s.childNodes.length - 1; n >= 0; n -= 1)
              this[t].insertBefore(s.childNodes[n], this[t].childNodes[0])
          } else if (e instanceof a)
            for (n = 0; n < e.length; n += 1)
              this[t].insertBefore(e[n], this[t].childNodes[0]);
          else
            this[t].insertBefore(e, this[t].childNodes[0]);
        return this
      },
      next: function(e) {
        return this.length > 0 ? e ? this[0].nextElementSibling && r(this[0].nextElementSibling).is(e) ? new a([this[0].nextElementSibling]) : new a([]) : this[0].nextElementSibling ? new a([this[0].nextElementSibling]) : new a([]) : new a([])
      },
      nextAll: function(e) {
        var t = [],
          i = this[0];
        if (!i)
          return new a([]);
        for (; i.nextElementSibling;) {
          var n = i.nextElementSibling;
          e ? r(n).is(e) && t.push(n) : t.push(n),
            i = n
        }
        return new a(t)
      },
      prev: function(e) {
        if (this.length > 0) {
          var t = this[0];
          return e ? t.previousElementSibling && r(t.previousElementSibling).is(e) ? new a([t.previousElementSibling]) : new a([]) : t.previousElementSibling ? new a([t.previousElementSibling]) : new a([])
        }
        return new a([])
      },
      prevAll: function(e) {
        var t = [],
          i = this[0];
        if (!i)
          return new a([]);
        for (; i.previousElementSibling;) {
          var n = i.previousElementSibling;
          e ? r(n).is(e) && t.push(n) : t.push(n),
            i = n
        }
        return new a(t)
      },
      parent: function(e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          null !== this[i].parentNode && (e ? r(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
        return r(o(t))
      },
      parents: function(e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var n = this[i].parentNode; n;)
            e ? r(n).is(e) && t.push(n) : t.push(n),
              n = n.parentNode;
        return r(o(t))
      },
      closest: function(e) {
        var t = this;
        return void 0 === e ? new a([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
      },
      find: function(e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var n = this[i].querySelectorAll(e), s = 0; s < n.length; s += 1)
            t.push(n[s]);
        return new a(t)
      },
      children: function(e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var n = this[i].childNodes, s = 0; s < n.length; s += 1)
            e ? 1 === n[s].nodeType && r(n[s]).is(e) && t.push(n[s]) : 1 === n[s].nodeType && t.push(n[s]);
        return new a(o(t))
      },
      filter: function(e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          e.call(this[i], i, this[i]) && t.push(this[i]);
        return new a(t)
      },
      remove: function() {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this
      },
      add: function() {
        for (var e = [], t = arguments.length; t--;)
          e[t] = arguments[t];
        var i,
          n;
        for (i = 0; i < e.length; i += 1) {
          var s = r(e[i]);
          for (n = 0; n < s.length; n += 1)
            this[this.length] = s[n],
              this.length += 1
        }
        return this
      },
      styles: function() {
        return this[0] ? s.getComputedStyle(this[0], null) : {}
      }
    };
    Object.keys(l).forEach(function(e) {
      r.fn[e] = r.fn[e] || l[e]
    });
    var d = {
        deleteProps: function(e) {
          var t = e;
          Object.keys(t).forEach(function(e) {
            try {
              t[e] = null
            } catch (e) {}
            try {
              delete t[e]
            } catch (e) {}
          })
        },
        nextTick: function(e, t) {
          return void 0 === t && (t = 0), setTimeout(e, t)
        },
        now: function() {
          return Date.now()
        },
        getTranslate: function(e, t) {
          var i,
            n,
            a;
          void 0 === t && (t = "x");
          var r = s.getComputedStyle(e, null);
          return s.WebKitCSSMatrix ? ((n = r.transform || r.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(function(e) {
            return e.replace(",", ".")
          }).join(", ")), a = new s.WebKitCSSMatrix("none" === n ? "" : n)) : i = (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
        },
        parseUrlQuery: function(e) {
          var t,
            i,
            n,
            a,
            r = {},
            o = e || s.location.href;
          if ("string" == typeof o && o.length)
            for (a = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
              return "" !== e
            })).length, t = 0; t < a; t += 1)
              n = i[t].replace(/#\S+/g, "").split("="),
                r[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
          return r
        },
        isObject: function(e) {
          return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
          for (var e = [], t = arguments.length; t--;)
            e[t] = arguments[t];
          for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
            var s = e[n];
            if (void 0 !== s && null !== s)
              for (var a = Object.keys(Object(s)), r = 0, o = a.length; r < o; r += 1) {
                var l = a[r],
                  u = Object.getOwnPropertyDescriptor(s, l);
                void 0 !== u && u.enumerable && (d.isObject(i[l]) && d.isObject(s[l]) ? d.extend(i[l], s[l]) : !d.isObject(i[l]) && d.isObject(s[l]) ? (i[l] = {}, d.extend(i[l], s[l])) : i[l] = s[l])
              }
          }
          return i
        }
      },
      u = {
        touch: !!("ontouchstart" in s || s.DocumentTouch && i instanceof s.DocumentTouch),
        pointerEvents: !!s.PointerEvent && "maxTouchPoints" in s.navigator && s.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in s || "WebkitMutationObserver" in s,
        passiveListener: function() {
          var e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function() {
                e = !0
              }
            });
            s.addEventListener("testPassiveListener", null, t)
          } catch (e) {}
          return e
        }(),
        gestures: "ongesturestart" in s
      },
      c = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e,
          t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
          t.on(e, t.params.on[e])
        })
      },
      h = {
        components: {
          configurable: !0
        }
      };
    c.prototype.on = function(e, t, i) {
      var n = this;
      if ("function" != typeof t)
        return n;
      var s = i ? "unshift" : "push";
      return e.split(" ").forEach(function(e) {
        n.eventsListeners[e] || (n.eventsListeners[e] = []),
          n.eventsListeners[e][s](t)
      }), n
    },
      c.prototype.once = function(e, t, i) {
        var n = this;
        if ("function" != typeof t)
          return n;
        function s() {
          for (var i = [], a = arguments.length; a--;)
            i[a] = arguments[a];
          n.off(e, s),
          s.f7proxy && delete s.f7proxy,
            t.apply(n, i)
        }
        return s.f7proxy = t, n.on(e, s, i)
      },
      c.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function(e) {
          void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function(n, s) {
            (n === t || n.f7proxy && n.f7proxy === t) && i.eventsListeners[e].splice(s, 1)
          })
        }), i) : i
      },
      c.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;)
          e[t] = arguments[t];
        var i,
          n,
          s,
          a = this;
        return a.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), s = a) : (i = e[0].events, n = e[0].data, s = e[0].context || a), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
          if (a.eventsListeners && a.eventsListeners[e]) {
            var t = [];
            a.eventsListeners[e].forEach(function(e) {
              t.push(e)
            }),
              t.forEach(function(e) {
                e.apply(s, n)
              })
          }
        }), a) : a
      },
      c.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
          var n = t.modules[i];
          n.params && d.extend(e, n.params)
        })
      },
      c.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
          var n = t.modules[i],
            s = e[i] || {};
          n.instance && Object.keys(n.instance).forEach(function(e) {
            var i = n.instance[e];
            t[e] = "function" == typeof i ? i.bind(t) : i
          }),
          n.on && t.on && Object.keys(n.on).forEach(function(e) {
            t.on(e, n.on[e])
          }),
          n.create && n.create.bind(t)(s)
        })
      },
      h.components.set = function(e) {
        this.use && this.use(e)
      },
      c.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;)
          t[i] = arguments[i + 1];
        var n = this;
        n.prototype.modules || (n.prototype.modules = {});
        var s = e.name || Object.keys(n.prototype.modules).length + "_" + d.now();
        return n.prototype.modules[s] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
          n.prototype[t] = e.proto[t]
        }), e.static && Object.keys(e.static).forEach(function(t) {
          n[t] = e.static[t]
        }), e.install && e.install.apply(n, t), n
      },
      c.use = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;)
          t[i] = arguments[i + 1];
        var n = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
          return n.installModule(e)
        }), n) : n.installModule.apply(n, [e].concat(t))
      },
      Object.defineProperties(c, h);
    var p = {
      updateSize: function() {
        var e,
          t,
          i = this.$el;
        e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth,
          t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight,
        0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
          width: e,
          height: t,
          size: this.isHorizontal() ? e : t
        }))
      },
      updateSlides: function() {
        var e = this.params,
          t = this.$wrapperEl,
          i = this.size,
          n = this.rtlTranslate,
          a = this.wrongRTL,
          r = this.virtual && e.virtual.enabled,
          o = r ? this.virtual.slides.length : this.slides.length,
          l = t.children("." + this.params.slideClass),
          u = r ? this.virtual.slides.length : l.length,
          c = [],
          h = [],
          p = [];
        function f(t) {
          return !e.cssMode || t !== l.length - 1
        }
        var m = e.slidesOffsetBefore;
        "function" == typeof m && (m = e.slidesOffsetBefore.call(this));
        var v = e.slidesOffsetAfter;
        "function" == typeof v && (v = e.slidesOffsetAfter.call(this));
        var g = this.snapGrid.length,
          y = this.snapGrid.length,
          b = e.spaceBetween,
          w = -m,
          x = 0,
          T = 0;
        if (void 0 !== i) {
          var E,
            C;
          "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * i),
            this.virtualSize = -b,
            n ? l.css({
              marginLeft: "",
              marginTop: ""
            }) : l.css({
              marginRight: "",
              marginBottom: ""
            }),
          e.slidesPerColumn > 1 && (E = Math.floor(u / e.slidesPerColumn) === u / this.params.slidesPerColumn ? u : Math.ceil(u / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
          for (var S, k = e.slidesPerColumn, M = E / k, P = Math.floor(u / e.slidesPerColumn), A = 0; A < u; A += 1) {
            C = 0;
            var D = l.eq(A);
            if (e.slidesPerColumn > 1) {
              var L = void 0,
                z = void 0,
                O = void 0;
              if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                var I = Math.floor(A / (e.slidesPerGroup * e.slidesPerColumn)),
                  $ = A - e.slidesPerColumn * e.slidesPerGroup * I,
                  N = 0 === I ? e.slidesPerGroup : Math.min(Math.ceil((u - I * k * e.slidesPerGroup) / k), e.slidesPerGroup);
                L = (z = $ - (O = Math.floor($ / N)) * N + I * e.slidesPerGroup) + O * E / k,
                  D.css({
                    "-webkit-box-ordinal-group": L,
                    "-moz-box-ordinal-group": L,
                    "-ms-flex-order": L,
                    "-webkit-order": L,
                    order: L
                  })
              } else
                "column" === e.slidesPerColumnFill ? (O = A - (z = Math.floor(A / k)) * k, (z > P || z === P && O === k - 1) && (O += 1) >= k && (O = 0, z += 1)) : z = A - (O = Math.floor(A / M)) * M;
              D.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== O && e.spaceBetween && e.spaceBetween + "px")
            }
            if ("none" !== D.css("display")) {
              if ("auto" === e.slidesPerView) {
                var j = s.getComputedStyle(D[0], null),
                  H = D[0].style.transform,
                  _ = D[0].style.webkitTransform;
                if (H && (D[0].style.transform = "none"), _ && (D[0].style.webkitTransform = "none"), e.roundLengths)
                  C = this.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);
                else if (this.isHorizontal()) {
                  var q = parseFloat(j.getPropertyValue("width")),
                    B = parseFloat(j.getPropertyValue("padding-left")),
                    R = parseFloat(j.getPropertyValue("padding-right")),
                    F = parseFloat(j.getPropertyValue("margin-left")),
                    G = parseFloat(j.getPropertyValue("margin-right")),
                    W = j.getPropertyValue("box-sizing");
                  C = W && "border-box" === W ? q + F + G : q + B + R + F + G
                } else {
                  var X = parseFloat(j.getPropertyValue("height")),
                    V = parseFloat(j.getPropertyValue("padding-top")),
                    Y = parseFloat(j.getPropertyValue("padding-bottom")),
                    U = parseFloat(j.getPropertyValue("margin-top")),
                    Q = parseFloat(j.getPropertyValue("margin-bottom")),
                    K = j.getPropertyValue("box-sizing");
                  C = K && "border-box" === K ? X + U + Q : X + V + Y + U + Q
                }
                H && (D[0].style.transform = H),
                _ && (D[0].style.webkitTransform = _),
                e.roundLengths && (C = Math.floor(C))
              } else
                C = (i - (e.slidesPerView - 1) * b) / e.slidesPerView,
                e.roundLengths && (C = Math.floor(C)),
                l[A] && (this.isHorizontal() ? l[A].style.width = C + "px" : l[A].style.height = C + "px");
              l[A] && (l[A].swiperSlideSize = C),
                p.push(C),
                e.centeredSlides ? (w = w + C / 2 + x / 2 + b, 0 === x && 0 !== A && (w = w - i / 2 - b), 0 === A && (w = w - i / 2 - b), Math.abs(w) < .001 && (w = 0), e.roundLengths && (w = Math.floor(w)), T % e.slidesPerGroup == 0 && c.push(w), h.push(w)) : (e.roundLengths && (w = Math.floor(w)), (T - Math.min(this.params.slidesPerGroupSkip, T)) % this.params.slidesPerGroup == 0 && c.push(w), h.push(w), w = w + C + b),
                this.virtualSize += C + b,
                x = C,
                T += 1
            }
          }
          if (this.virtualSize = Math.max(this.virtualSize, i) + v, n && a && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
            width: this.virtualSize + e.spaceBetween + "px"
          }), e.setWrapperSize && (this.isHorizontal() ? t.css({
            width: this.virtualSize + e.spaceBetween + "px"
          }) : t.css({
            height: this.virtualSize + e.spaceBetween + "px"
          })), e.slidesPerColumn > 1 && (this.virtualSize = (C + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({
            width: this.virtualSize + e.spaceBetween + "px"
          }) : t.css({
            height: this.virtualSize + e.spaceBetween + "px"
          }), e.centeredSlides)) {
            S = [];
            for (var J = 0; J < c.length; J += 1) {
              var Z = c[J];
              e.roundLengths && (Z = Math.floor(Z)),
              c[J] < this.virtualSize + c[0] && S.push(Z)
            }
            c = S
          }
          if (!e.centeredSlides) {
            S = [];
            for (var ee = 0; ee < c.length; ee += 1) {
              var te = c[ee];
              e.roundLengths && (te = Math.floor(te)),
              c[ee] <= this.virtualSize - i && S.push(te)
            }
            c = S,
            Math.floor(this.virtualSize - i) - Math.floor(c[c.length - 1]) > 1 && c.push(this.virtualSize - i)
          }
          if (0 === c.length && (c = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? n ? l.filter(f).css({
            marginLeft: b + "px"
          }) : l.filter(f).css({
            marginRight: b + "px"
          }) : l.filter(f).css({
            marginBottom: b + "px"
          })), e.centeredSlides && e.centeredSlidesBounds) {
            var ie = 0;
            p.forEach(function(t) {
              ie += t + (e.spaceBetween ? e.spaceBetween : 0)
            });
            var ne = (ie -= e.spaceBetween) - i;
            c = c.map(function(e) {
              return e < 0 ? -m : e > ne ? ne + v : e
            })
          }
          if (e.centerInsufficientSlides) {
            var se = 0;
            if (p.forEach(function(t) {
              se += t + (e.spaceBetween ? e.spaceBetween : 0)
            }), (se -= e.spaceBetween) < i) {
              var ae = (i - se) / 2;
              c.forEach(function(e, t) {
                c[t] = e - ae
              }),
                h.forEach(function(e, t) {
                  h[t] = e + ae
                })
            }
          }
          d.extend(this, {
            slides: l,
            snapGrid: c,
            slidesGrid: h,
            slidesSizesGrid: p
          }),
          u !== o && this.emit("slidesLengthChange"),
          c.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")),
          h.length !== y && this.emit("slidesGridLengthChange"),
          (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
        }
      },
      updateAutoHeight: function(e) {
        var t,
          i = [],
          n = 0;
        if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
          if (this.params.centeredSlides)
            this.visibleSlides.each(function(e, t) {
              i.push(t)
            });
          else
            for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
              var s = this.activeIndex + t;
              if (s > this.slides.length)
                break;
              i.push(this.slides.eq(s)[0])
            }
        else
          i.push(this.slides.eq(this.activeIndex)[0]);
        for (t = 0; t < i.length; t += 1)
          if (void 0 !== i[t]) {
            var a = i[t].offsetHeight;
            n = a > n ? a : n
          }
        n && this.$wrapperEl.css("height", n + "px")
      },
      updateSlidesOffset: function() {
        for (var e = this.slides, t = 0; t < e.length; t += 1)
          e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
      },
      updateSlidesProgress: function(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this.params,
          i = this.slides,
          n = this.rtlTranslate;
        if (0 !== i.length) {
          void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
          var s = -e;
          n && (s = e),
            i.removeClass(t.slideVisibleClass),
            this.visibleSlidesIndexes = [],
            this.visibleSlides = [];
          for (var a = 0; a < i.length; a += 1) {
            var o = i[a],
              l = (s + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
            if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
              var d = -(s - o.swiperSlideOffset),
                u = d + this.slidesSizesGrid[a];
              (d >= 0 && d < this.size - 1 || u > 1 && u <= this.size || d <= 0 && u >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(a), i.eq(a).addClass(t.slideVisibleClass))
            }
            o.progress = n ? -l : l
          }
          this.visibleSlides = r(this.visibleSlides)
        }
      },
      updateProgress: function(e) {
        if (void 0 === e) {
          var t = this.rtlTranslate ? -1 : 1;
          e = this && this.translate && this.translate * t || 0
        }
        var i = this.params,
          n = this.maxTranslate() - this.minTranslate(),
          s = this.progress,
          a = this.isBeginning,
          r = this.isEnd,
          o = a,
          l = r;
        0 === n ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / n) <= 0, r = s >= 1),
          d.extend(this, {
            progress: s,
            isBeginning: a,
            isEnd: r
          }),
        (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e),
        a && !o && this.emit("reachBeginning toEdge"),
        r && !l && this.emit("reachEnd toEdge"),
        (o && !a || l && !r) && this.emit("fromEdge"),
          this.emit("progress", s)
      },
      updateSlidesClasses: function() {
        var e,
          t = this.slides,
          i = this.params,
          n = this.$wrapperEl,
          s = this.activeIndex,
          a = this.realIndex,
          r = this.virtual && i.virtual.enabled;
        t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
          (e = r ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(i.slideActiveClass),
        i.loop && (e.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass));
        var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
        i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
        var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
        i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
        i.loop && (o.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
      },
      updateActiveIndex: function(e) {
        var t,
          i = this.rtlTranslate ? this.translate : -this.translate,
          n = this.slidesGrid,
          s = this.snapGrid,
          a = this.params,
          r = this.activeIndex,
          o = this.realIndex,
          l = this.snapIndex,
          u = e;
        if (void 0 === u) {
          for (var c = 0; c < n.length; c += 1)
            void 0 !== n[c + 1] ? i >= n[c] && i < n[c + 1] - (n[c + 1] - n[c]) / 2 ? u = c : i >= n[c] && i < n[c + 1] && (u = c + 1) : i >= n[c] && (u = c);
          a.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
        }
        if (s.indexOf(i) >= 0)
          t = s.indexOf(i);
        else {
          var h = Math.min(a.slidesPerGroupSkip, u);
          t = h + Math.floor((u - h) / a.slidesPerGroup)
        }
        if (t >= s.length && (t = s.length - 1), u !== r) {
          var p = parseInt(this.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
          d.extend(this, {
            snapIndex: t,
            realIndex: p,
            previousIndex: r,
            activeIndex: u
          }),
            this.emit("activeIndexChange"),
            this.emit("snapIndexChange"),
          o !== p && this.emit("realIndexChange"),
          (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
        } else
          t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
      },
      updateClickedSlide: function(e) {
        var t = this.params,
          i = r(e.target).closest("." + t.slideClass)[0],
          n = !1;
        if (i)
          for (var s = 0; s < this.slides.length; s += 1)
            this.slides[s] === i && (n = !0);
        if (!i || !n)
          return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
        this.clickedSlide = i,
          this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(r(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = r(i).index(),
        t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
      }
    };
    var f = {
      getTranslate: function(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this.params,
          i = this.rtlTranslate,
          n = this.translate,
          s = this.$wrapperEl;
        if (t.virtualTranslate)
          return i ? -n : n;
        if (t.cssMode)
          return n;
        var a = d.getTranslate(s[0], e);
        return i && (a = -a), a || 0
      },
      setTranslate: function(e, t) {
        var i = this.rtlTranslate,
          n = this.params,
          s = this.$wrapperEl,
          a = this.wrapperEl,
          r = this.progress,
          o = 0,
          l = 0;
        this.isHorizontal() ? o = i ? -e : e : l = e,
        n.roundLengths && (o = Math.floor(o), l = Math.floor(l)),
          n.cssMode ? a[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : n.virtualTranslate || s.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
          this.previousTranslate = this.translate,
          this.translate = this.isHorizontal() ? o : l;
        var d = this.maxTranslate() - this.minTranslate();
        (0 === d ? 0 : (e - this.minTranslate()) / d) !== r && this.updateProgress(e),
          this.emit("setTranslate", this.translate, t)
      },
      minTranslate: function() {
        return -this.snapGrid[0]
      },
      maxTranslate: function() {
        return -this.snapGrid[this.snapGrid.length - 1]
      },
      translateTo: function(e, t, i, n, s) {
        var a;
        void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0),
        void 0 === n && (n = !0);
        var r = this,
          o = r.params,
          l = r.wrapperEl;
        if (r.animating && o.preventInteractionOnTransition)
          return !1;
        var d,
          u = r.minTranslate(),
          c = r.maxTranslate();
        if (d = n && e > u ? u : n && e < c ? c : e, r.updateProgress(d), o.cssMode) {
          var h = r.isHorizontal();
          return 0 === t ? l[h ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((a = {})[h ? "left" : "top"] = -d, a.behavior = "smooth", a)) : l[h ? "scrollLeft" : "scrollTop"] = -d, !0
        }
        return 0 === t ? (r.setTransition(0), r.setTranslate(d), i && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(d), i && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
      }
    };
    var m = {
      setTransition: function(e, t) {
        this.params.cssMode || this.$wrapperEl.transition(e),
          this.emit("setTransition", e, t)
      },
      transitionStart: function(e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
          n = this.params,
          s = this.previousIndex;
        if (!n.cssMode) {
          n.autoHeight && this.updateAutoHeight();
          var a = t;
          if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionStart"), e && i !== s) {
            if ("reset" === a)
              return void this.emit("slideResetTransitionStart");
            this.emit("slideChangeTransitionStart"),
              "next" === a ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
          }
        }
      },
      transitionEnd: function(e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
          n = this.previousIndex,
          s = this.params;
        if (this.animating = !1, !s.cssMode) {
          this.setTransition(0);
          var a = t;
          if (a || (a = i > n ? "next" : i < n ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== n) {
            if ("reset" === a)
              return void this.emit("slideResetTransitionEnd");
            this.emit("slideChangeTransitionEnd"),
              "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
          }
        }
      }
    };
    var v = {
      slideTo: function(e, t, i, n) {
        var s;
        void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0);
        var a = this,
          r = e;
        r < 0 && (r = 0);
        var o = a.params,
          l = a.snapGrid,
          d = a.slidesGrid,
          u = a.previousIndex,
          c = a.activeIndex,
          h = a.rtlTranslate,
          p = a.wrapperEl;
        if (a.animating && o.preventInteractionOnTransition)
          return !1;
        var f = Math.min(a.params.slidesPerGroupSkip, r),
          m = f + Math.floor((r - f) / a.params.slidesPerGroup);
        m >= l.length && (m = l.length - 1),
        (c || o.initialSlide || 0) === (u || 0) && i && a.emit("beforeSlideChangeStart");
        var v,
          g = -l[m];
        if (a.updateProgress(g), o.normalizeSlideIndex)
          for (var y = 0; y < d.length; y += 1)
            -Math.floor(100 * g) >= Math.floor(100 * d[y]) && (r = y);
        if (a.initialized && r !== c) {
          if (!a.allowSlideNext && g < a.translate && g < a.minTranslate())
            return !1;
          if (!a.allowSlidePrev && g > a.translate && g > a.maxTranslate() && (c || 0) !== r)
            return !1
        }
        if (v = r > c ? "next" : r < c ? "prev" : "reset", h && -g === a.translate || !h && g === a.translate)
          return a.updateActiveIndex(r), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(g), "reset" !== v && (a.transitionStart(i, v), a.transitionEnd(i, v)), !1;
        if (o.cssMode) {
          var b = a.isHorizontal(),
            w = -g;
          return h && (w = p.scrollWidth - p.offsetWidth - w), 0 === t ? p[b ? "scrollLeft" : "scrollTop"] = w : p.scrollTo ? p.scrollTo(((s = {})[b ? "left" : "top"] = w, s.behavior = "smooth", s)) : p[b ? "scrollLeft" : "scrollTop"] = w, !0
        }
        return 0 === t ? (a.setTransition(0), a.setTranslate(g), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, n), a.transitionStart(i, v), a.transitionEnd(i, v)) : (a.setTransition(t), a.setTranslate(g), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, n), a.transitionStart(i, v), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
          a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, v))
        }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0
      },
      slideToLoop: function(e, t, i, n) {
        void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0);
        var s = e;
        return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, i, n)
      },
      slideNext: function(e, t, i) {
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0);
        var n = this.params,
          s = this.animating,
          a = this.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
        if (n.loop) {
          if (s)
            return !1;
          this.loopFix(),
            this._clientLeft = this.$wrapperEl[0].clientLeft
        }
        return this.slideTo(this.activeIndex + a, e, t, i)
      },
      slidePrev: function(e, t, i) {
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0);
        var n = this.params,
          s = this.animating,
          a = this.snapGrid,
          r = this.slidesGrid,
          o = this.rtlTranslate;
        if (n.loop) {
          if (s)
            return !1;
          this.loopFix(),
            this._clientLeft = this.$wrapperEl[0].clientLeft
        }
        function l(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
        }
        var d,
          u = l(o ? this.translate : -this.translate),
          c = a.map(function(e) {
            return l(e)
          }),
          h = (r.map(function(e) {
            return l(e)
          }), a[c.indexOf(u)], a[c.indexOf(u) - 1]);
        return void 0 === h && n.cssMode && a.forEach(function(e) {
          !h && u >= e && (h = e)
        }), void 0 !== h && (d = r.indexOf(h)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
      },
      slideReset: function(e, t, i) {
        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
      },
      slideToClosest: function(e, t, i, n) {
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === n && (n = .5);
        var s = this.activeIndex,
          a = Math.min(this.params.slidesPerGroupSkip, s),
          r = a + Math.floor((s - a) / this.params.slidesPerGroup),
          o = this.rtlTranslate ? this.translate : -this.translate;
        if (o >= this.snapGrid[r]) {
          var l = this.snapGrid[r];
          o - l > (this.snapGrid[r + 1] - l) * n && (s += this.params.slidesPerGroup)
        } else {
          var d = this.snapGrid[r - 1];
          o - d <= (this.snapGrid[r] - d) * n && (s -= this.params.slidesPerGroup)
        }
        return s = Math.max(s, 0), s = Math.min(s, this.slidesGrid.length - 1), this.slideTo(s, e, t, i)
      },
      slideToClickedSlide: function() {
        var e,
          t = this,
          i = t.params,
          n = t.$wrapperEl,
          s = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
          a = t.clickedIndex;
        if (i.loop) {
          if (t.animating)
            return;
          e = parseInt(r(t.clickedSlide).attr("data-swiper-slide-index"), 10),
            i.centeredSlides ? a < t.loopedSlides - s / 2 || a > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), a = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
              t.slideTo(a)
            })) : t.slideTo(a) : a > t.slides.length - s ? (t.loopFix(), a = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
              t.slideTo(a)
            })) : t.slideTo(a)
        } else
          t.slideTo(a)
      }
    };
    var g = {
      loopCreate: function() {
        var e = this,
          t = e.params,
          n = e.$wrapperEl;
        n.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
        var s = n.children("." + t.slideClass);
        if (t.loopFillGroupWithBlank) {
          var a = t.slidesPerGroup - s.length % t.slidesPerGroup;
          if (a !== t.slidesPerGroup) {
            for (var o = 0; o < a; o += 1) {
              var l = r(i.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
              n.append(l)
            }
            s = n.children("." + t.slideClass)
          }
        }
        "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = s.length),
          e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)),
          e.loopedSlides += t.loopAdditionalSlides,
        e.loopedSlides > s.length && (e.loopedSlides = s.length);
        var d = [],
          u = [];
        s.each(function(t, i) {
          var n = r(i);
          t < e.loopedSlides && u.push(i),
          t < s.length && t >= s.length - e.loopedSlides && d.push(i),
            n.attr("data-swiper-slide-index", t)
        });
        for (var c = 0; c < u.length; c += 1)
          n.append(r(u[c].cloneNode(!0)).addClass(t.slideDuplicateClass));
        for (var h = d.length - 1; h >= 0; h -= 1)
          n.prepend(r(d[h].cloneNode(!0)).addClass(t.slideDuplicateClass))
      },
      loopFix: function() {
        this.emit("beforeLoopFix");
        var e,
          t = this.activeIndex,
          i = this.slides,
          n = this.loopedSlides,
          s = this.allowSlidePrev,
          a = this.allowSlideNext,
          r = this.snapGrid,
          o = this.rtlTranslate;
        this.allowSlidePrev = !0,
          this.allowSlideNext = !0;
        var l = -r[t] - this.getTranslate();
        t < n ? (e = i.length - 3 * n + t, e += n, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)) : t >= i.length - n && (e = -i.length + t + n, e += n, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l));
        this.allowSlidePrev = s,
          this.allowSlideNext = a,
          this.emit("loopFix")
      },
      loopDestroy: function() {
        var e = this.$wrapperEl,
          t = this.params,
          i = this.slides;
        e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(),
          i.removeAttr("data-swiper-slide-index")
      }
    };
    var y = {
      setGrabCursor: function(e) {
        if (!(u.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
          var t = this.el;
          t.style.cursor = "move",
            t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
            t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
            t.style.cursor = e ? "grabbing" : "grab"
        }
      },
      unsetGrabCursor: function() {
        u.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
      }
    };
    var b,
      w,
      x,
      T,
      E,
      C,
      S,
      k,
      M,
      P,
      A,
      D,
      L,
      z,
      O,
      I = {
        appendSlide: function(e) {
          var t = this.$wrapperEl,
            i = this.params;
          if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
            for (var n = 0; n < e.length; n += 1)
              e[n] && t.append(e[n]);
          else
            t.append(e);
          i.loop && this.loopCreate(),
          i.observer && u.observer || this.update()
        },
        prependSlide: function(e) {
          var t = this.params,
            i = this.$wrapperEl,
            n = this.activeIndex;
          t.loop && this.loopDestroy();
          var s = n + 1;
          if ("object" == typeof e && "length" in e) {
            for (var a = 0; a < e.length; a += 1)
              e[a] && i.prepend(e[a]);
            s = n + e.length
          } else
            i.prepend(e);
          t.loop && this.loopCreate(),
          t.observer && u.observer || this.update(),
            this.slideTo(s, 0, !1)
        },
        addSlide: function(e, t) {
          var i = this.$wrapperEl,
            n = this.params,
            s = this.activeIndex;
          n.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + n.slideClass));
          var a = this.slides.length;
          if (e <= 0)
            this.prependSlide(t);
          else if (e >= a)
            this.appendSlide(t);
          else {
            for (var r = s > e ? s + 1 : s, o = [], l = a - 1; l >= e; l -= 1) {
              var d = this.slides.eq(l);
              d.remove(),
                o.unshift(d)
            }
            if ("object" == typeof t && "length" in t) {
              for (var c = 0; c < t.length; c += 1)
                t[c] && i.append(t[c]);
              r = s > e ? s + t.length : s
            } else
              i.append(t);
            for (var h = 0; h < o.length; h += 1)
              i.append(o[h]);
            n.loop && this.loopCreate(),
            n.observer && u.observer || this.update(),
              n.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
          }
        },
        removeSlide: function(e) {
          var t = this.params,
            i = this.$wrapperEl,
            n = this.activeIndex;
          t.loop && (n -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
          var s,
            a = n;
          if ("object" == typeof e && "length" in e) {
            for (var r = 0; r < e.length; r += 1)
              s = e[r],
              this.slides[s] && this.slides.eq(s).remove(),
              s < a && (a -= 1);
            a = Math.max(a, 0)
          } else
            s = e,
            this.slides[s] && this.slides.eq(s).remove(),
            s < a && (a -= 1),
              a = Math.max(a, 0);
          t.loop && this.loopCreate(),
          t.observer && u.observer || this.update(),
            t.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1)
        },
        removeAllSlides: function() {
          for (var e = [], t = 0; t < this.slides.length; t += 1)
            e.push(t);
          this.removeSlide(e)
        }
      },
      $ = (b = s.navigator.platform, w = s.navigator.userAgent, x = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !(!s.cordova && !s.phonegap),
        phonegap: !(!s.cordova && !s.phonegap),
        electron: !1
      }, T = s.screen.width, E = s.screen.height, C = w.match(/(Android);?[\s\/]+([\d.]+)?/), S = w.match(/(iPad).*OS\s([\d_]+)/), k = w.match(/(iPod)(.*OS\s([\d_]+))?/), M = !S && w.match(/(iPhone\sOS|iOS)\s([\d_]+)/), P = w.indexOf("MSIE ") >= 0 || w.indexOf("Trident/") >= 0, A = w.indexOf("Edge/") >= 0, D = w.indexOf("Gecko/") >= 0 && w.indexOf("Firefox/") >= 0, L = "Win32" === b, z = w.toLowerCase().indexOf("electron") >= 0, O = "MacIntel" === b, !S && O && u.touch && (1024 === T && 1366 === E || 834 === T && 1194 === E || 834 === T && 1112 === E || 768 === T && 1024 === E) && (S = w.match(/(Version)\/([\d.]+)/), O = !1), x.ie = P, x.edge = A, x.firefox = D, C && !L && (x.os = "android", x.osVersion = C[2], x.android = !0, x.androidChrome = w.toLowerCase().indexOf("chrome") >= 0), (S || M || k) && (x.os = "ios", x.ios = !0), M && !k && (x.osVersion = M[2].replace(/_/g, "."), x.iphone = !0), S && (x.osVersion = S[2].replace(/_/g, "."), x.ipad = !0), k && (x.osVersion = k[3] ? k[3].replace(/_/g, ".") : null, x.ipod = !0), x.ios && x.osVersion && w.indexOf("Version/") >= 0 && "10" === x.osVersion.split(".")[0] && (x.osVersion = w.toLowerCase().split("version/")[1].split(" ")[0]), x.webView = !(!(M || S || k) || !w.match(/.*AppleWebKit(?!.*Safari)/i) && !s.navigator.standalone) || s.matchMedia && s.matchMedia("(display-mode: standalone)").matches, x.webview = x.webView, x.standalone = x.webView, x.desktop = !(x.ios || x.android) || z, x.desktop && (x.electron = z, x.macos = O, x.windows = L, x.macos && (x.os = "macos"), x.windows && (x.os = "windows")), x.pixelRatio = s.devicePixelRatio || 1, x);
    function N() {
      var e = this.params,
        t = this.el;
      if (!t || 0 !== t.offsetWidth) {
        e.breakpoints && this.setBreakpoint();
        var i = this.allowSlideNext,
          n = this.allowSlidePrev,
          s = this.snapGrid;
        this.allowSlideNext = !0,
          this.allowSlidePrev = !0,
          this.updateSize(),
          this.updateSlides(),
          this.updateSlidesClasses(),
          ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0),
        this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
          this.allowSlidePrev = n,
          this.allowSlideNext = i,
        this.params.watchOverflow && s !== this.snapGrid && this.checkOverflow()
      }
    }
    var j = !1;
    function H() {}
    var _ = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
      },
      q = {
        update: p,
        translate: f,
        transition: m,
        slide: v,
        loop: g,
        grabCursor: y,
        manipulation: I,
        events: {
          attachEvents: function() {
            var e = this.params,
              t = this.touchEvents,
              n = this.el,
              a = this.wrapperEl;
            this.onTouchStart = function(e) {
              var t = this.touchEventsData,
                n = this.params,
                a = this.touches;
              if (!this.animating || !n.preventInteractionOnTransition) {
                var o = e;
                o.originalEvent && (o = o.originalEvent);
                var l = r(o.target);
                if (("wrapper" !== n.touchEventsTarget || l.closest(this.wrapperEl).length) && (t.isTouchEvent = "touchstart" === o.type, (t.isTouchEvent || !("which" in o) || 3 !== o.which) && !(!t.isTouchEvent && "button" in o && o.button > 0 || t.isTouched && t.isMoved)))
                  if (n.noSwiping && l.closest(n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass)[0])
                    this.allowClick = !0;
                  else if (!n.swipeHandler || l.closest(n.swipeHandler)[0]) {
                    a.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX,
                      a.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                    var u = a.currentX,
                      c = a.currentY,
                      h = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                      p = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                    if (!h || !(u <= p || u >= s.screen.width - p)) {
                      if (d.extend(t, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                      }), a.startX = u, a.startY = c, t.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, n.threshold > 0 && (t.allowThresholdMove = !1), "touchstart" !== o.type) {
                        var f = !0;
                        l.is(t.formElements) && (f = !1),
                        i.activeElement && r(i.activeElement).is(t.formElements) && i.activeElement !== l[0] && i.activeElement.blur();
                        var m = f && this.allowTouchMove && n.touchStartPreventDefault;
                        (n.touchStartForcePreventDefault || m) && o.preventDefault()
                      }
                      this.emit("touchStart", o)
                    }
                  }
              }
            }.bind(this),
              this.onTouchMove = function(e) {
                var t = this.touchEventsData,
                  n = this.params,
                  s = this.touches,
                  a = this.rtlTranslate,
                  o = e;
                if (o.originalEvent && (o = o.originalEvent), t.isTouched) {
                  if (!t.isTouchEvent || "touchmove" === o.type) {
                    var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
                      u = "touchmove" === o.type ? l.pageX : o.pageX,
                      c = "touchmove" === o.type ? l.pageY : o.pageY;
                    if (o.preventedByNestedSwiper)
                      return s.startX = u, void (s.startY = c);
                    if (!this.allowTouchMove)
                      return this.allowClick = !1, void (t.isTouched && (d.extend(s, {
                        startX: u,
                        startY: c,
                        currentX: u,
                        currentY: c
                      }), t.touchStartTime = d.now()));
                    if (t.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                      if (this.isVertical()) {
                        if (c < s.startY && this.translate <= this.maxTranslate() || c > s.startY && this.translate >= this.minTranslate())
                          return t.isTouched = !1, void (t.isMoved = !1)
                      } else if (u < s.startX && this.translate <= this.maxTranslate() || u > s.startX && this.translate >= this.minTranslate())
                        return;
                    if (t.isTouchEvent && i.activeElement && o.target === i.activeElement && r(o.target).is(t.formElements))
                      return t.isMoved = !0, void (this.allowClick = !1);
                    if (t.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                      s.currentX = u,
                        s.currentY = c;
                      var h,
                        p = s.currentX - s.startX,
                        f = s.currentY - s.startY;
                      if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(f, 2)) < this.params.threshold))
                        if (void 0 === t.isScrolling && (this.isHorizontal() && s.currentY === s.startY || this.isVertical() && s.currentX === s.startX ? t.isScrolling = !1 : p * p + f * f >= 25 && (h = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, t.isScrolling = this.isHorizontal() ? h > n.touchAngle : 90 - h > n.touchAngle)), t.isScrolling && this.emit("touchMoveOpposite", o), void 0 === t.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (t.startMoving = !0)), t.isScrolling)
                          t.isTouched = !1;
                        else if (t.startMoving) {
                          this.allowClick = !1,
                          !n.cssMode && o.cancelable && o.preventDefault(),
                          n.touchMoveStopPropagation && !n.nested && o.stopPropagation(),
                          t.isMoved || (n.loop && this.loopFix(), t.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), t.allowMomentumBounce = !1, !n.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)),
                            this.emit("sliderMove", o),
                            t.isMoved = !0;
                          var m = this.isHorizontal() ? p : f;
                          s.diff = m,
                            m *= n.touchRatio,
                          a && (m = -m),
                            this.swipeDirection = m > 0 ? "prev" : "next",
                            t.currentTranslate = m + t.startTranslate;
                          var v = !0,
                            g = n.resistanceRatio;
                          if (n.touchReleaseOnEdges && (g = 0), m > 0 && t.currentTranslate > this.minTranslate() ? (v = !1, n.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + m, g))) : m < 0 && t.currentTranslate < this.maxTranslate() && (v = !1, n.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - m, g))), v && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate), n.threshold > 0) {
                            if (!(Math.abs(m) > n.threshold || t.allowThresholdMove))
                              return void (t.currentTranslate = t.startTranslate);
                            if (!t.allowThresholdMove)
                              return t.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, t.currentTranslate = t.startTranslate, void (s.diff = this.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                          }
                          n.followFinger && !n.cssMode && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), n.freeMode && (0 === t.velocities.length && t.velocities.push({
                            position: s[this.isHorizontal() ? "startX" : "startY"],
                            time: t.touchStartTime
                          }), t.velocities.push({
                            position: s[this.isHorizontal() ? "currentX" : "currentY"],
                            time: d.now()
                          })), this.updateProgress(t.currentTranslate), this.setTranslate(t.currentTranslate))
                        }
                    }
                  }
                } else
                  t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", o)
              }.bind(this),
              this.onTouchEnd = function(e) {
                var t = this,
                  i = t.touchEventsData,
                  n = t.params,
                  s = t.touches,
                  a = t.rtlTranslate,
                  r = t.$wrapperEl,
                  o = t.slidesGrid,
                  l = t.snapGrid,
                  u = e;
                if (u.originalEvent && (u = u.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", u), i.allowTouchCallbacks = !1, !i.isTouched)
                  return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
                n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var c,
                  h = d.now(),
                  p = h - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(u), t.emit("tap click", u), p < 300 && h - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", u)), i.lastClickTime = d.now(), d.nextTick(function() {
                  t.destroyed || (t.allowClick = !0)
                }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate)
                  return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, c = n.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, !n.cssMode)
                  if (n.freeMode) {
                    if (c < -t.minTranslate())
                      return void t.slideTo(t.activeIndex);
                    if (c > -t.maxTranslate())
                      return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (n.freeModeMomentum) {
                      if (i.velocities.length > 1) {
                        var f = i.velocities.pop(),
                          m = i.velocities.pop(),
                          v = f.position - m.position,
                          g = f.time - m.time;
                        t.velocity = v / g,
                          t.velocity /= 2,
                        Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0),
                        (g > 150 || d.now() - f.time > 300) && (t.velocity = 0)
                      } else
                        t.velocity = 0;
                      t.velocity *= n.freeModeMomentumVelocityRatio,
                        i.velocities.length = 0;
                      var y = 1e3 * n.freeModeMomentumRatio,
                        b = t.velocity * y,
                        w = t.translate + b;
                      a && (w = -w);
                      var x,
                        T,
                        E = !1,
                        C = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                      if (w < t.maxTranslate())
                        n.freeModeMomentumBounce ? (w + t.maxTranslate() < -C && (w = t.maxTranslate() - C), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : w = t.maxTranslate(),
                        n.loop && n.centeredSlides && (T = !0);
                      else if (w > t.minTranslate())
                        n.freeModeMomentumBounce ? (w - t.minTranslate() > C && (w = t.minTranslate() + C), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : w = t.minTranslate(),
                        n.loop && n.centeredSlides && (T = !0);
                      else if (n.freeModeSticky) {
                        for (var S, k = 0; k < l.length; k += 1)
                          if (l[k] > -w) {
                            S = k;
                            break
                          }
                        w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                      }
                      if (T && t.once("transitionEnd", function() {
                        t.loopFix()
                      }), 0 !== t.velocity) {
                        if (y = a ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity), n.freeModeSticky) {
                          var M = Math.abs((a ? -w : w) - t.translate),
                            P = t.slidesSizesGrid[t.activeIndex];
                          y = M < P ? n.speed : M < 2 * P ? 1.5 * n.speed : 2.5 * n.speed
                        }
                      } else if (n.freeModeSticky)
                        return void t.slideToClosest();
                      n.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(function() {
                        t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), setTimeout(function() {
                          t.setTranslate(x),
                            r.transitionEnd(function() {
                              t && !t.destroyed && t.transitionEnd()
                            })
                        }, 0))
                      })) : t.velocity ? (t.updateProgress(w), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(function() {
                        t && !t.destroyed && t.transitionEnd()
                      }))) : t.updateProgress(w),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses()
                    } else if (n.freeModeSticky)
                      return void t.slideToClosest();
                    (!n.freeModeMomentum || p >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                  } else {
                    for (var A = 0, D = t.slidesSizesGrid[0], L = 0; L < o.length; L += L < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                      var z = L < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                      void 0 !== o[L + z] ? c >= o[L] && c < o[L + z] && (A = L, D = o[L + z] - o[L]) : c >= o[L] && (A = L, D = o[o.length - 1] - o[o.length - 2])
                    }
                    var O = (c - o[A]) / D,
                      I = A < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    if (p > n.longSwipesMs) {
                      if (!n.longSwipes)
                        return void t.slideTo(t.activeIndex);
                      "next" === t.swipeDirection && (O >= n.longSwipesRatio ? t.slideTo(A + I) : t.slideTo(A)),
                      "prev" === t.swipeDirection && (O > 1 - n.longSwipesRatio ? t.slideTo(A + I) : t.slideTo(A))
                    } else {
                      if (!n.shortSwipes)
                        return void t.slideTo(t.activeIndex);
                      !t.navigation || u.target !== t.navigation.nextEl && u.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(A + I), "prev" === t.swipeDirection && t.slideTo(A)) : u.target === t.navigation.nextEl ? t.slideTo(A + I) : t.slideTo(A)
                    }
                  }
              }.bind(this),
            e.cssMode && (this.onScroll = function() {
              var e = this.wrapperEl,
                t = this.rtlTranslate;
              this.previousTranslate = this.translate,
                this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop,
              -0 === this.translate && (this.translate = 0),
                this.updateActiveIndex(),
                this.updateSlidesClasses();
              var i = this.maxTranslate() - this.minTranslate();
              (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate),
                this.emit("setTranslate", this.translate, !1)
            }.bind(this)),
              this.onClick = function(e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
              }.bind(this);
            var o = !!e.nested;
            if (!u.touch && u.pointerEvents)
              n.addEventListener(t.start, this.onTouchStart, !1),
                i.addEventListener(t.move, this.onTouchMove, o),
                i.addEventListener(t.end, this.onTouchEnd, !1);
            else {
              if (u.touch) {
                var l = !("touchstart" !== t.start || !u.passiveListener || !e.passiveListeners) && {
                  passive: !0,
                  capture: !1
                };
                n.addEventListener(t.start, this.onTouchStart, l),
                  n.addEventListener(t.move, this.onTouchMove, u.passiveListener ? {
                    passive: !1,
                    capture: o
                  } : o),
                  n.addEventListener(t.end, this.onTouchEnd, l),
                t.cancel && n.addEventListener(t.cancel, this.onTouchEnd, l),
                j || (i.addEventListener("touchstart", H), j = !0)
              }
              (e.simulateTouch && !$.ios && !$.android || e.simulateTouch && !u.touch && $.ios) && (n.addEventListener("mousedown", this.onTouchStart, !1), i.addEventListener("mousemove", this.onTouchMove, o), i.addEventListener("mouseup", this.onTouchEnd, !1))
            }
            (e.preventClicks || e.preventClicksPropagation) && n.addEventListener("click", this.onClick, !0),
            e.cssMode && a.addEventListener("scroll", this.onScroll),
              e.updateOnWindowResize ? this.on($.ios || $.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N, !0) : this.on("observerUpdate", N, !0)
          },
          detachEvents: function() {
            var e = this.params,
              t = this.touchEvents,
              n = this.el,
              s = this.wrapperEl,
              a = !!e.nested;
            if (!u.touch && u.pointerEvents)
              n.removeEventListener(t.start, this.onTouchStart, !1),
                i.removeEventListener(t.move, this.onTouchMove, a),
                i.removeEventListener(t.end, this.onTouchEnd, !1);
            else {
              if (u.touch) {
                var r = !("onTouchStart" !== t.start || !u.passiveListener || !e.passiveListeners) && {
                  passive: !0,
                  capture: !1
                };
                n.removeEventListener(t.start, this.onTouchStart, r),
                  n.removeEventListener(t.move, this.onTouchMove, a),
                  n.removeEventListener(t.end, this.onTouchEnd, r),
                t.cancel && n.removeEventListener(t.cancel, this.onTouchEnd, r)
              }
              (e.simulateTouch && !$.ios && !$.android || e.simulateTouch && !u.touch && $.ios) && (n.removeEventListener("mousedown", this.onTouchStart, !1), i.removeEventListener("mousemove", this.onTouchMove, a), i.removeEventListener("mouseup", this.onTouchEnd, !1))
            }
            (e.preventClicks || e.preventClicksPropagation) && n.removeEventListener("click", this.onClick, !0),
            e.cssMode && s.removeEventListener("scroll", this.onScroll),
              this.off($.ios || $.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N)
          }
        },
        breakpoints: {
          setBreakpoint: function() {
            var e = this.activeIndex,
              t = this.initialized,
              i = this.loopedSlides;
            void 0 === i && (i = 0);
            var n = this.params,
              s = this.$el,
              a = n.breakpoints;
            if (a && (!a || 0 !== Object.keys(a).length)) {
              var r = this.getBreakpoint(a);
              if (r && this.currentBreakpoint !== r) {
                var o = r in a ? a[r] : void 0;
                o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function(e) {
                  var t = o[e];
                  void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                });
                var l = o || this.originalParams,
                  u = n.slidesPerColumn > 1,
                  c = l.slidesPerColumn > 1;
                u && !c ? s.removeClass(n.containerModifierClass + "multirow " + n.containerModifierClass + "multirow-column") : !u && c && (s.addClass(n.containerModifierClass + "multirow"), "column" === l.slidesPerColumnFill && s.addClass(n.containerModifierClass + "multirow-column"));
                var h = l.direction && l.direction !== n.direction,
                  p = n.loop && (l.slidesPerView !== n.slidesPerView || h);
                h && t && this.changeDirection(),
                  d.extend(this.params, l),
                  d.extend(this, {
                    allowTouchMove: this.params.allowTouchMove,
                    allowSlideNext: this.params.allowSlideNext,
                    allowSlidePrev: this.params.allowSlidePrev
                  }),
                  this.currentBreakpoint = r,
                p && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)),
                  this.emit("breakpoint", l)
              }
            }
          },
          getBreakpoint: function(e) {
            if (e) {
              var t = !1,
                i = Object.keys(e).map(function(e) {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    var t = parseFloat(e.substr(1));
                    return {
                      value: s.innerHeight * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                });
              i.sort(function(e, t) {
                return parseInt(e.value, 10) - parseInt(t.value, 10)
              });
              for (var n = 0; n < i.length; n += 1) {
                var a = i[n],
                  r = a.point;
                a.value <= s.innerWidth && (t = r)
              }
              return t || "max"
            }
          }
        },
        checkOverflow: {
          checkOverflow: function() {
            var e = this.params,
              t = this.isLocked,
              i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
            e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length,
              this.allowSlideNext = !this.isLocked,
              this.allowSlidePrev = !this.isLocked,
            t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
            t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update())
          }
        },
        classes: {
          addClasses: function() {
            var e = this.classNames,
              t = this.params,
              i = this.rtl,
              n = this.$el,
              s = [];
            s.push("initialized"),
              s.push(t.direction),
            t.freeMode && s.push("free-mode"),
            t.autoHeight && s.push("autoheight"),
            i && s.push("rtl"),
            t.slidesPerColumn > 1 && (s.push("multirow"), "column" === t.slidesPerColumnFill && s.push("multirow-column")),
            $.android && s.push("android"),
            $.ios && s.push("ios"),
            t.cssMode && s.push("css-mode"),
              s.forEach(function(i) {
                e.push(t.containerModifierClass + i)
              }),
              n.addClass(e.join(" "))
          },
          removeClasses: function() {
            var e = this.$el,
              t = this.classNames;
            e.removeClass(t.join(" "))
          }
        },
        images: {
          loadImage: function(e, t, i, n, a, o) {
            var l;
            function d() {
              o && o()
            }
            r(e).parent("picture")[0] || e.complete && a ? d() : t ? ((l = new s.Image).onload = d, l.onerror = d, n && (l.sizes = n), i && (l.srcset = i), t && (l.src = t)) : d()
          },
          preloadImages: function() {
            var e = this;
            function t() {
              void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
            }
            e.imagesToLoad = e.$el.find("img");
            for (var i = 0; i < e.imagesToLoad.length; i += 1) {
              var n = e.imagesToLoad[i];
              e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
            }
          }
        }
      },
      B = {},
      R = function(e) {
        function t() {
          for (var i, n, s, a = [], o = arguments.length; o--;)
            a[o] = arguments[o];
          1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (n = (i = a)[0], s = i[1]),
          s || (s = {}),
            s = d.extend({}, s),
          n && !s.el && (s.el = n),
            e.call(this, s),
            Object.keys(q).forEach(function(e) {
              Object.keys(q[e]).forEach(function(i) {
                t.prototype[i] || (t.prototype[i] = q[e][i])
              })
            });
          var l = this;
          void 0 === l.modules && (l.modules = {}),
            Object.keys(l.modules).forEach(function(e) {
              var t = l.modules[e];
              if (t.params) {
                var i = Object.keys(t.params)[0],
                  n = t.params[i];
                if ("object" != typeof n || null === n)
                  return;
                if (!(i in s && "enabled" in n))
                  return;
                !0 === s[i] && (s[i] = {
                  enabled: !0
                }),
                "object" != typeof s[i] || "enabled" in s[i] || (s[i].enabled = !0),
                s[i] || (s[i] = {
                  enabled: !1
                })
              }
            });
          var c = d.extend({}, _);
          l.useModulesParams(c),
            l.params = d.extend({}, c, B, s),
            l.originalParams = d.extend({}, l.params),
            l.passedParams = d.extend({}, s),
            l.$ = r;
          var h = r(l.params.el);
          if (n = h[0]) {
            if (h.length > 1) {
              var p = [];
              return h.each(function(e, i) {
                var n = d.extend({}, s, {
                  el: i
                });
                p.push(new t(n))
              }), p
            }
            var f,
              m,
              v;
            return n.swiper = l, h.data("swiper", l), n && n.shadowRoot && n.shadowRoot.querySelector ? (f = r(n.shadowRoot.querySelector("." + l.params.wrapperClass))).children = function(e) {
              return h.children(e)
            } : f = h.children("." + l.params.wrapperClass), d.extend(l, {
              $el: h,
              el: n,
              $wrapperEl: f,
              wrapperEl: f[0],
              classNames: [],
              slides: r(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function() {
                return "horizontal" === l.params.direction
              },
              isVertical: function() {
                return "vertical" === l.params.direction
              },
              rtl: "rtl" === n.dir.toLowerCase() || "rtl" === h.css("direction"),
              rtlTranslate: "horizontal" === l.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === h.css("direction")),
              wrongRTL: "-webkit-box" === f.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: l.params.allowSlideNext,
              allowSlidePrev: l.params.allowSlidePrev,
              touchEvents: (m = ["touchstart", "touchmove", "touchend", "touchcancel"], v = ["mousedown", "mousemove", "mouseup"], u.pointerEvents && (v = ["pointerdown", "pointermove", "pointerup"]), l.touchEventsTouch = {
                start: m[0],
                move: m[1],
                end: m[2],
                cancel: m[3]
              }, l.touchEventsDesktop = {
                start: v[0],
                move: v[1],
                end: v[2]
              }, u.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: "input, select, option, textarea, button, video, label",
                lastClickTime: d.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
              },
              allowClick: !0,
              allowTouchMove: l.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
              },
              imagesToLoad: [],
              imagesLoaded: 0
            }), l.useModules(), l.params.init && l.init(), l
          }
        }
        e && (t.__proto__ = e),
          t.prototype = Object.create(e && e.prototype),
          t.prototype.constructor = t;
        var i = {
          extendedDefaults: {
            configurable: !0
          },
          defaults: {
            configurable: !0
          },
          Class: {
            configurable: !0
          },
          $: {
            configurable: !0
          }
        };
        return t.prototype.slidesPerViewDynamic = function() {
          var e = this.params,
            t = this.slides,
            i = this.slidesGrid,
            n = this.size,
            s = this.activeIndex,
            a = 1;
          if (e.centeredSlides) {
            for (var r, o = t[s].swiperSlideSize, l = s + 1; l < t.length; l += 1)
              t[l] && !r && (a += 1, (o += t[l].swiperSlideSize) > n && (r = !0));
            for (var d = s - 1; d >= 0; d -= 1)
              t[d] && !r && (a += 1, (o += t[d].swiperSlideSize) > n && (r = !0))
          } else
            for (var u = s + 1; u < t.length; u += 1)
              i[u] - i[s] < n && (a += 1);
          return a
        }, t.prototype.update = function() {
          var e = this;
          if (e && !e.destroyed) {
            var t = e.snapGrid,
              i = e.params;
            i.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(),
            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update")
          }
          function n() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i),
              e.updateActiveIndex(),
              e.updateSlidesClasses()
          }
        }, t.prototype.changeDirection = function(e, t) {
          void 0 === t && (t = !0);
          var i = this.params.direction;
          return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each(function(t, i) {
            "vertical" === e ? i.style.width = "" : i.style.height = ""
          }), this.emit("changeDirection"), t && this.update(), this)
        }, t.prototype.init = function() {
          this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
        }, t.prototype.destroy = function(e, t) {
          void 0 === e && (e = !0),
          void 0 === t && (t = !0);
          var i = this,
            n = i.params,
            s = i.$el,
            a = i.$wrapperEl,
            r = i.slides;
          return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
            i.off(e)
          }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0, null)
        }, t.extendDefaults = function(e) {
          d.extend(B, e)
        }, i.extendedDefaults.get = function() {
          return B
        }, i.defaults.get = function() {
          return _
        }, i.Class.get = function() {
          return e
        }, i.$.get = function() {
          return r
        }, Object.defineProperties(t, i), t
      }(c),
      F = {
        name: "device",
        proto: {
          device: $
        },
        static: {
          device: $
        }
      },
      G = {
        name: "support",
        proto: {
          support: u
        },
        static: {
          support: u
        }
      },
      W = function() {
        return {
          isEdge: !!s.navigator.userAgent.match(/Edge/g),
          isSafari: (e = s.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)
        };
        var e
      }(),
      X = {
        name: "browser",
        proto: {
          browser: W
        },
        static: {
          browser: W
        }
      },
      V = {
        name: "resize",
        create: function() {
          var e = this;
          d.extend(e, {
            resize: {
              resizeHandler: function() {
                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
              },
              orientationChangeHandler: function() {
                e && !e.destroyed && e.initialized && e.emit("orientationchange")
              }
            }
          })
        },
        on: {
          init: function() {
            s.addEventListener("resize", this.resize.resizeHandler),
              s.addEventListener("orientationchange", this.resize.orientationChangeHandler)
          },
          destroy: function() {
            s.removeEventListener("resize", this.resize.resizeHandler),
              s.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
          }
        }
      },
      Y = {
        func: s.MutationObserver || s.WebkitMutationObserver,
        attach: function(e, t) {
          void 0 === t && (t = {});
          var i = this,
            n = new (0, Y.func)(function(e) {
              if (1 !== e.length) {
                var t = function() {
                  i.emit("observerUpdate", e[0])
                };
                s.requestAnimationFrame ? s.requestAnimationFrame(t) : s.setTimeout(t, 0)
              } else
                i.emit("observerUpdate", e[0])
            });
          n.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData
          }),
            i.observer.observers.push(n)
        },
        init: function() {
          if (u.observer && this.params.observer) {
            if (this.params.observeParents)
              for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                this.observer.attach(e[t]);
            this.observer.attach(this.$el[0], {
              childList: this.params.observeSlideChildren
            }),
              this.observer.attach(this.$wrapperEl[0], {
                attributes: !1
              })
          }
        },
        destroy: function() {
          this.observer.observers.forEach(function(e) {
            e.disconnect()
          }),
            this.observer.observers = []
        }
      },
      U = {
        name: "observer",
        params: {
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        },
        create: function() {
          d.extend(this, {
            observer: {
              init: Y.init.bind(this),
              attach: Y.attach.bind(this),
              destroy: Y.destroy.bind(this),
              observers: []
            }
          })
        },
        on: {
          init: function() {
            this.observer.init()
          },
          destroy: function() {
            this.observer.destroy()
          }
        }
      },
      Q = {
        update: function(e) {
          var t = this,
            i = t.params,
            n = i.slidesPerView,
            s = i.slidesPerGroup,
            a = i.centeredSlides,
            r = t.params.virtual,
            o = r.addSlidesBefore,
            l = r.addSlidesAfter,
            u = t.virtual,
            c = u.from,
            h = u.to,
            p = u.slides,
            f = u.slidesGrid,
            m = u.renderSlide,
            v = u.offset;
          t.updateActiveIndex();
          var g,
            y,
            b,
            w = t.activeIndex || 0;
          g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            a ? (y = Math.floor(n / 2) + s + o, b = Math.floor(n / 2) + s + l) : (y = n + (s - 1) + o, b = s + l);
          var x = Math.max((w || 0) - b, 0),
            T = Math.min((w || 0) + y, p.length - 1),
            E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
          function C() {
            t.updateSlides(),
              t.updateProgress(),
              t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load()
          }
          if (d.extend(t.virtual, {
            from: x,
            to: T,
            offset: E,
            slidesGrid: t.slidesGrid
          }), c === x && h === T && !e)
            return t.slidesGrid !== f && E !== v && t.slides.css(g, E + "px"), void t.updateProgress();
          if (t.params.virtual.renderExternal)
            return t.params.virtual.renderExternal.call(t, {
              offset: E,
              from: x,
              to: T,
              slides: function() {
                for (var e = [], t = x; t <= T; t += 1)
                  e.push(p[t]);
                return e
              }()
            }), void C();
          var S = [],
            k = [];
          if (e)
            t.$wrapperEl.find("." + t.params.slideClass).remove();
          else
            for (var M = c; M <= h; M += 1)
              (M < x || M > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
          for (var P = 0; P < p.length; P += 1)
            P >= x && P <= T && (void 0 === h || e ? k.push(P) : (P > h && k.push(P), P < c && S.push(P)));
          k.forEach(function(e) {
            t.$wrapperEl.append(m(p[e], e))
          }),
            S.sort(function(e, t) {
              return t - e
            }).forEach(function(e) {
              t.$wrapperEl.prepend(m(p[e], e))
            }),
            t.$wrapperEl.children(".swiper-slide").css(g, E + "px"),
            C()
        },
        renderSlide: function(e, t) {
          var i = this.params.virtual;
          if (i.cache && this.virtual.cache[t])
            return this.virtual.cache[t];
          var n = i.renderSlide ? r(i.renderSlide.call(this, e, t)) : r('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
          return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = n), n
        },
        appendSlide: function(e) {
          if ("object" == typeof e && "length" in e)
            for (var t = 0; t < e.length; t += 1)
              e[t] && this.virtual.slides.push(e[t]);
          else
            this.virtual.slides.push(e);
          this.virtual.update(!0)
        },
        prependSlide: function(e) {
          var t = this.activeIndex,
            i = t + 1,
            n = 1;
          if (Array.isArray(e)) {
            for (var s = 0; s < e.length; s += 1)
              e[s] && this.virtual.slides.unshift(e[s]);
            i = t + e.length,
              n = e.length
          } else
            this.virtual.slides.unshift(e);
          if (this.params.virtual.cache) {
            var a = this.virtual.cache,
              r = {};
            Object.keys(a).forEach(function(e) {
              var t = a[e],
                i = t.attr("data-swiper-slide-index");
              i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
                r[parseInt(e, 10) + n] = t
            }),
              this.virtual.cache = r
          }
          this.virtual.update(!0),
            this.slideTo(i, 0)
        },
        removeSlide: function(e) {
          if (void 0 !== e && null !== e) {
            var t = this.activeIndex;
            if (Array.isArray(e))
              for (var i = e.length - 1; i >= 0; i -= 1)
                this.virtual.slides.splice(e[i], 1),
                this.params.virtual.cache && delete this.virtual.cache[e[i]],
                e[i] < t && (t -= 1),
                  t = Math.max(t, 0);
            else
              this.virtual.slides.splice(e, 1),
              this.params.virtual.cache && delete this.virtual.cache[e],
              e < t && (t -= 1),
                t = Math.max(t, 0);
            this.virtual.update(!0),
              this.slideTo(t, 0)
          }
        },
        removeAllSlides: function() {
          this.virtual.slides = [],
          this.params.virtual.cache && (this.virtual.cache = {}),
            this.virtual.update(!0),
            this.slideTo(0, 0)
        }
      },
      K = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            addSlidesBefore: 0,
            addSlidesAfter: 0
          }
        },
        create: function() {
          d.extend(this, {
            virtual: {
              update: Q.update.bind(this),
              appendSlide: Q.appendSlide.bind(this),
              prependSlide: Q.prependSlide.bind(this),
              removeSlide: Q.removeSlide.bind(this),
              removeAllSlides: Q.removeAllSlides.bind(this),
              renderSlide: Q.renderSlide.bind(this),
              slides: this.params.virtual.slides,
              cache: {}
            }
          })
        },
        on: {
          beforeInit: function() {
            if (this.params.virtual.enabled) {
              this.classNames.push(this.params.containerModifierClass + "virtual");
              var e = {
                watchSlidesProgress: !0
              };
              d.extend(this.params, e),
                d.extend(this.originalParams, e),
              this.params.initialSlide || this.virtual.update()
            }
          },
          setTranslate: function() {
            this.params.virtual.enabled && this.virtual.update()
          }
        }
      },
      J = {
        handle: function(e) {
          var t = this.rtlTranslate,
            n = e;
          n.originalEvent && (n = n.originalEvent);
          var a = n.keyCode || n.charCode,
            r = this.params.keyboard.pageUpDown,
            o = r && 33 === a,
            l = r && 34 === a,
            d = 37 === a,
            u = 39 === a,
            c = 38 === a,
            h = 40 === a;
          if (!this.allowSlideNext && (this.isHorizontal() && u || this.isVertical() && h || l))
            return !1;
          if (!this.allowSlidePrev && (this.isHorizontal() && d || this.isVertical() && c || o))
            return !1;
          if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
            if (this.params.keyboard.onlyInViewport && (o || l || d || u || c || h)) {
              var p = !1;
              if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length)
                return;
              var f = s.innerWidth,
                m = s.innerHeight,
                v = this.$el.offset();
              t && (v.left -= this.$el[0].scrollLeft);
              for (var g = [[v.left, v.top], [v.left + this.width, v.top], [v.left, v.top + this.height], [v.left + this.width, v.top + this.height]], y = 0; y < g.length; y += 1) {
                var b = g[y];
                b[0] >= 0 && b[0] <= f && b[1] >= 0 && b[1] <= m && (p = !0)
              }
              if (!p)
                return
            }
            this.isHorizontal() ? ((o || l || d || u) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((l || u) && !t || (o || d) && t) && this.slideNext(), ((o || d) && !t || (l || u) && t) && this.slidePrev()) : ((o || l || c || h) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (l || h) && this.slideNext(), (o || c) && this.slidePrev()),
              this.emit("keyPress", a)
          }
        },
        enable: function() {
          this.keyboard.enabled || (r(i).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
        },
        disable: function() {
          this.keyboard.enabled && (r(i).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
        }
      },
      Z = {
        name: "keyboard",
        params: {
          keyboard: {
            enabled: !1,
            onlyInViewport: !0,
            pageUpDown: !0
          }
        },
        create: function() {
          d.extend(this, {
            keyboard: {
              enabled: !1,
              enable: J.enable.bind(this),
              disable: J.disable.bind(this),
              handle: J.handle.bind(this)
            }
          })
        },
        on: {
          init: function() {
            this.params.keyboard.enabled && this.keyboard.enable()
          },
          destroy: function() {
            this.keyboard.enabled && this.keyboard.disable()
          }
        }
      };
    var ee = {
        lastScrollTime: d.now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function() {
          return s.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
            var e = "onwheel" in i;
            if (!e) {
              var t = i.createElement("div");
              t.setAttribute("onwheel", "return;"),
                e = "function" == typeof t.onwheel
            }
            return !e && i.implementation && i.implementation.hasFeature && !0 !== i.implementation.hasFeature("", "") && (e = i.implementation.hasFeature("Events.wheel", "3.0")), e
          }() ? "wheel" : "mousewheel"
        },
        normalize: function(e) {
          var t = 0,
            i = 0,
            n = 0,
            s = 0;
          return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, s = 10 * i, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (n = e.deltaX), e.shiftKey && !n && (n = s, s = 0), (n || s) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !t && (t = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
            spinX: t,
            spinY: i,
            pixelX: n,
            pixelY: s
          }
        },
        handleMouseEnter: function() {
          this.mouseEntered = !0
        },
        handleMouseLeave: function() {
          this.mouseEntered = !1
        },
        handle: function(e) {
          var t = e,
            i = this,
            n = i.params.mousewheel;
          i.params.cssMode && t.preventDefault();
          var s = i.$el;
          if ("container" !== i.params.mousewheel.eventsTarged && (s = r(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !s[0].contains(t.target) && !n.releaseOnEdges)
            return !0;
          t.originalEvent && (t = t.originalEvent);
          var a = 0,
            o = i.rtlTranslate ? -1 : 1,
            l = ee.normalize(t);
          if (n.forceToAxis)
            if (i.isHorizontal()) {
              if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY)))
                return !0;
              a = -l.pixelX * o
            } else {
              if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX)))
                return !0;
              a = -l.pixelY
            }
          else
            a = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
          if (0 === a)
            return !0;
          if (n.invert && (a = -a), i.params.freeMode) {
            var u = {
                time: d.now(),
                delta: Math.abs(a),
                direction: Math.sign(a)
              },
              c = i.mousewheel.lastEventBeforeSnap,
              h = c && u.time < c.time + 500 && u.delta <= c.delta && u.direction === c.direction;
            if (!h) {
              i.mousewheel.lastEventBeforeSnap = void 0,
              i.params.loop && i.loopFix();
              var p = i.getTranslate() + a * n.sensitivity,
                f = i.isBeginning,
                m = i.isEnd;
              if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!f && i.isBeginning || !m && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                clearTimeout(i.mousewheel.timeout),
                  i.mousewheel.timeout = void 0;
                var v = i.mousewheel.recentWheelEvents;
                v.length >= 15 && v.shift();
                var g = v.length ? v[v.length - 1] : void 0,
                  y = v[0];
                if (v.push(u), g && (u.delta > g.delta || u.direction !== g.direction))
                  v.splice(0);
                else if (v.length >= 15 && u.time - y.time < 500 && y.delta - u.delta >= 1 && u.delta <= 6) {
                  var b = a > 0 ? .8 : .2;
                  i.mousewheel.lastEventBeforeSnap = u,
                    v.splice(0),
                    i.mousewheel.timeout = d.nextTick(function() {
                      i.slideToClosest(i.params.speed, !0, void 0, b)
                    }, 0)
                }
                i.mousewheel.timeout || (i.mousewheel.timeout = d.nextTick(function() {
                  i.mousewheel.lastEventBeforeSnap = u,
                    v.splice(0),
                    i.slideToClosest(i.params.speed, !0, void 0, .5)
                }, 500))
              }
              if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate())
                return !0
            }
          } else {
            var w = {
                time: d.now(),
                delta: Math.abs(a),
                direction: Math.sign(a),
                raw: e
              },
              x = i.mousewheel.recentWheelEvents;
            x.length >= 2 && x.shift();
            var T = x.length ? x[x.length - 1] : void 0;
            if (x.push(w), T ? (w.direction !== T.direction || w.delta > T.delta || w.time > T.time + 150) && i.mousewheel.animateSlider(w) : i.mousewheel.animateSlider(w), i.mousewheel.releaseScroll(w))
              return !0
          }
          return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        },
        animateSlider: function(e) {
          return e.delta >= 6 && d.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new s.Date).getTime(), !1)
        },
        releaseScroll: function(e) {
          var t = this.params.mousewheel;
          if (e.direction < 0) {
            if (this.isEnd && !this.params.loop && t.releaseOnEdges)
              return !0
          } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
            return !0;
          return !1
        },
        enable: function() {
          var e = ee.event();
          if (this.params.cssMode)
            return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
          if (!e)
            return !1;
          if (this.mousewheel.enabled)
            return !1;
          var t = this.$el;
          return "container" !== this.params.mousewheel.eventsTarged && (t = r(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
        },
        disable: function() {
          var e = ee.event();
          if (this.params.cssMode)
            return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
          if (!e)
            return !1;
          if (!this.mousewheel.enabled)
            return !1;
          var t = this.$el;
          return "container" !== this.params.mousewheel.eventsTarged && (t = r(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
        }
      },
      te = {
        update: function() {
          var e = this.params.navigation;
          if (!this.params.loop) {
            var t = this.navigation,
              i = t.$nextEl,
              n = t.$prevEl;
            n && n.length > 0 && (this.isBeginning ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
            i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
          }
        },
        onPrevClick: function(e) {
          e.preventDefault(),
          this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick: function(e) {
          e.preventDefault(),
          this.isEnd && !this.params.loop || this.slideNext()
        },
        init: function() {
          var e,
            t,
            i = this.params.navigation;
          (i.nextEl || i.prevEl) && (i.nextEl && (e = r(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = r(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), d.extend(this.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0]
          }))
        },
        destroy: function() {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)),
          i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
        }
      },
      ie = {
        update: function() {
          var e = this.rtl,
            t = this.params.pagination;
          if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
            var i,
              n = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
              s = this.pagination.$el,
              a = this.params.loop ? Math.ceil((n - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
            if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > n - 1 - 2 * this.loopedSlides && (i -= n - 2 * this.loopedSlides), i > a - 1 && (i -= a), i < 0 && "bullets" !== this.params.paginationType && (i = a + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
              var o,
                l,
                d,
                u = this.pagination.bullets;
              if (t.dynamicBullets && (this.pagination.bulletSize = u.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(u.length, t.dynamicMainBullets) - 1)) + o) / 2), u.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), s.length > 1)
                u.each(function(e, n) {
                  var s = r(n),
                    a = s.index();
                  a === i && s.addClass(t.bulletActiveClass),
                  t.dynamicBullets && (a >= o && a <= l && s.addClass(t.bulletActiveClass + "-main"), a === o && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), a === l && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                });
              else {
                var c = u.eq(i),
                  h = c.index();
                if (c.addClass(t.bulletActiveClass), t.dynamicBullets) {
                  for (var p = u.eq(o), f = u.eq(l), m = o; m <= l; m += 1)
                    u.eq(m).addClass(t.bulletActiveClass + "-main");
                  if (this.params.loop)
                    if (h >= u.length - t.dynamicMainBullets) {
                      for (var v = t.dynamicMainBullets; v >= 0; v -= 1)
                        u.eq(u.length - v).addClass(t.bulletActiveClass + "-main");
                      u.eq(u.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                    } else
                      p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                        f.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                  else
                    p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                      f.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                }
              }
              if (t.dynamicBullets) {
                var g = Math.min(u.length, t.dynamicMainBullets + 4),
                  y = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                  b = e ? "right" : "left";
                u.css(this.isHorizontal() ? b : "top", y + "px")
              }
            }
            if ("fraction" === t.type && (s.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), s.find("." + t.totalClass).text(t.formatFractionTotal(a))), "progressbar" === t.type) {
              var w;
              w = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
              var x = (i + 1) / a,
                T = 1,
                E = 1;
              "horizontal" === w ? T = x : E = x,
                s.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")").transition(this.params.speed)
            }
            "custom" === t.type && t.renderCustom ? (s.html(t.renderCustom(this, i + 1, a)), this.emit("paginationRender", this, s[0])) : this.emit("paginationUpdate", this, s[0]),
              s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
          }
        },
        render: function() {
          var e = this.params.pagination;
          if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
            var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
              i = this.pagination.$el,
              n = "";
            if ("bullets" === e.type) {
              for (var s = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, a = 0; a < s; a += 1)
                e.renderBullet ? n += e.renderBullet.call(this, a, e.bulletClass) : n += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
              i.html(n),
                this.pagination.bullets = i.find("." + e.bulletClass)
            }
            "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(n)),
            "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(n)),
            "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
          }
        },
        init: function() {
          var e = this,
            t = e.params.pagination;
          if (t.el) {
            var i = r(t.el);
            0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function(t) {
              t.preventDefault();
              var i = r(this).index() * e.params.slidesPerGroup;
              e.params.loop && (i += e.loopedSlides),
                e.slideTo(i)
            }), d.extend(e.pagination, {
              $el: i,
              el: i[0]
            }))
          }
        },
        destroy: function() {
          var e = this.params.pagination;
          if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
            var t = this.pagination.$el;
            t.removeClass(e.hiddenClass),
              t.removeClass(e.modifierClass + e.type),
            this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && t.off("click", "." + e.bulletClass)
          }
        }
      },
      ne = {
        setTranslate: function() {
          if (this.params.scrollbar.el && this.scrollbar.el) {
            var e = this.scrollbar,
              t = this.rtlTranslate,
              i = this.progress,
              n = e.dragSize,
              s = e.trackSize,
              a = e.$dragEl,
              r = e.$el,
              o = this.params.scrollbar,
              l = n,
              d = (s - n) * i;
            t ? (d = -d) > 0 ? (l = n - d, d = 0) : -d + n > s && (l = s + d) : d < 0 ? (l = n + d, d = 0) : d + n > s && (l = s - d),
              this.isHorizontal() ? (a.transform("translate3d(" + d + "px, 0, 0)"), a[0].style.width = l + "px") : (a.transform("translate3d(0px, " + d + "px, 0)"), a[0].style.height = l + "px"),
            o.hide && (clearTimeout(this.scrollbar.timeout), r[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
              r[0].style.opacity = 0,
                r.transition(400)
            }, 1e3))
          }
        },
        setTransition: function(e) {
          this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
          if (this.params.scrollbar.el && this.scrollbar.el) {
            var e = this.scrollbar,
              t = e.$dragEl,
              i = e.$el;
            t[0].style.width = "",
              t[0].style.height = "";
            var n,
              s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
              a = this.size / this.virtualSize,
              r = a * (s / this.size);
            n = "auto" === this.params.scrollbar.dragSize ? s * a : parseInt(this.params.scrollbar.dragSize, 10),
              this.isHorizontal() ? t[0].style.width = n + "px" : t[0].style.height = n + "px",
              i[0].style.display = a >= 1 ? "none" : "",
            this.params.scrollbar.hide && (i[0].style.opacity = 0),
              d.extend(e, {
                trackSize: s,
                divider: a,
                moveDivider: r,
                dragSize: n
              }),
              e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
          }
        },
        getPointerPosition: function(e) {
          return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        },
        setDragPosition: function(e) {
          var t,
            i = this.scrollbar,
            n = this.rtlTranslate,
            s = i.$el,
            a = i.dragSize,
            r = i.trackSize,
            o = i.dragStartPos;
          t = (i.getPointerPosition(e) - s.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : a / 2)) / (r - a),
            t = Math.max(Math.min(t, 1), 0),
          n && (t = 1 - t);
          var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
          this.updateProgress(l),
            this.setTranslate(l),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        },
        onDragStart: function(e) {
          var t = this.params.scrollbar,
            i = this.scrollbar,
            n = this.$wrapperEl,
            s = i.$el,
            a = i.$dragEl;
          this.scrollbar.isTouched = !0,
            this.scrollbar.dragStartPos = e.target === a[0] || e.target === a ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            n.transition(100),
            a.transition(100),
            i.setDragPosition(e),
            clearTimeout(this.scrollbar.dragTimeout),
            s.transition(0),
          t.hide && s.css("opacity", 1),
          this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"),
            this.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
          var t = this.scrollbar,
            i = this.$wrapperEl,
            n = t.$el,
            s = t.$dragEl;
          this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
          var t = this.params.scrollbar,
            i = this.scrollbar,
            n = this.$wrapperEl,
            s = i.$el;
          this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), n.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function() {
            s.css("opacity", 0),
              s.transition(400)
          }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
        },
        enableDraggable: function() {
          if (this.params.scrollbar.el) {
            var e = this.scrollbar,
              t = this.touchEventsTouch,
              n = this.touchEventsDesktop,
              s = this.params,
              a = e.$el[0],
              r = !(!u.passiveListener || !s.passiveListeners) && {
                passive: !1,
                capture: !1
              },
              o = !(!u.passiveListener || !s.passiveListeners) && {
                passive: !0,
                capture: !1
              };
            u.touch ? (a.addEventListener(t.start, this.scrollbar.onDragStart, r), a.addEventListener(t.move, this.scrollbar.onDragMove, r), a.addEventListener(t.end, this.scrollbar.onDragEnd, o)) : (a.addEventListener(n.start, this.scrollbar.onDragStart, r), i.addEventListener(n.move, this.scrollbar.onDragMove, r), i.addEventListener(n.end, this.scrollbar.onDragEnd, o))
          }
        },
        disableDraggable: function() {
          if (this.params.scrollbar.el) {
            var e = this.scrollbar,
              t = this.touchEventsTouch,
              n = this.touchEventsDesktop,
              s = this.params,
              a = e.$el[0],
              r = !(!u.passiveListener || !s.passiveListeners) && {
                passive: !1,
                capture: !1
              },
              o = !(!u.passiveListener || !s.passiveListeners) && {
                passive: !0,
                capture: !1
              };
            u.touch ? (a.removeEventListener(t.start, this.scrollbar.onDragStart, r), a.removeEventListener(t.move, this.scrollbar.onDragMove, r), a.removeEventListener(t.end, this.scrollbar.onDragEnd, o)) : (a.removeEventListener(n.start, this.scrollbar.onDragStart, r), i.removeEventListener(n.move, this.scrollbar.onDragMove, r), i.removeEventListener(n.end, this.scrollbar.onDragEnd, o))
          }
        },
        init: function() {
          if (this.params.scrollbar.el) {
            var e = this.scrollbar,
              t = this.$el,
              i = this.params.scrollbar,
              n = r(i.el);
            this.params.uniqueNavElements && "string" == typeof i.el && n.length > 1 && 1 === t.find(i.el).length && (n = t.find(i.el));
            var s = n.find("." + this.params.scrollbar.dragClass);
            0 === s.length && (s = r('<div class="' + this.params.scrollbar.dragClass + '"></div>'), n.append(s)),
              d.extend(e, {
                $el: n,
                el: n[0],
                $dragEl: s,
                dragEl: s[0]
              }),
            i.draggable && e.enableDraggable()
          }
        },
        destroy: function() {
          this.scrollbar.disableDraggable()
        }
      },
      se = {
        setTransform: function(e, t) {
          var i = this.rtl,
            n = r(e),
            s = i ? -1 : 1,
            a = n.attr("data-swiper-parallax") || "0",
            o = n.attr("data-swiper-parallax-x"),
            l = n.attr("data-swiper-parallax-y"),
            d = n.attr("data-swiper-parallax-scale"),
            u = n.attr("data-swiper-parallax-opacity");
          if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = a, l = "0") : (l = a, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * s + "%" : o * t * s + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", void 0 !== u && null !== u) {
            var c = u - (u - 1) * (1 - Math.abs(t));
            n[0].style.opacity = c
          }
          if (void 0 === d || null === d)
            n.transform("translate3d(" + o + ", " + l + ", 0px)");
          else {
            var h = d - (d - 1) * (1 - Math.abs(t));
            n.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + h + ")")
          }
        },
        setTranslate: function() {
          var e = this,
            t = e.$el,
            i = e.slides,
            n = e.progress,
            s = e.snapGrid;
          t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
            e.parallax.setTransform(i, n)
          }),
            i.each(function(t, i) {
              var a = i.progress;
              e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (a += Math.ceil(t / 2) - n * (s.length - 1)),
                a = Math.min(Math.max(a, -1), 1),
                r(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
                  e.parallax.setTransform(i, a)
                })
            })
        },
        setTransition: function(e) {
          void 0 === e && (e = this.params.speed);
          this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
            var n = r(i),
              s = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (s = 0),
              n.transition(s)
          })
        }
      },
      ae = {
        getDistanceBetweenTouches: function(e) {
          if (e.targetTouches.length < 2)
            return 1;
          var t = e.targetTouches[0].pageX,
            i = e.targetTouches[0].pageY,
            n = e.targetTouches[1].pageX,
            s = e.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(n - t, 2) + Math.pow(s - i, 2))
        },
        onGestureStart: function(e) {
          var t = this.params.zoom,
            i = this.zoom,
            n = i.gesture;
          if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !u.gestures) {
            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
              return;
            i.fakeGestureTouched = !0,
              n.scaleStart = ae.getDistanceBetweenTouches(e)
          }
          n.$slideEl && n.$slideEl.length || (n.$slideEl = r(e.target).closest("." + this.params.slideClass), 0 === n.$slideEl.length && (n.$slideEl = this.slides.eq(this.activeIndex)), n.$imageEl = n.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass), n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== n.$imageWrapEl.length) ? (n.$imageEl && n.$imageEl.transition(0), this.zoom.isScaling = !0) : n.$imageEl = void 0
        },
        onGestureChange: function(e) {
          var t = this.params.zoom,
            i = this.zoom,
            n = i.gesture;
          if (!u.gestures) {
            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
              return;
            i.fakeGestureMoved = !0,
              n.scaleMove = ae.getDistanceBetweenTouches(e)
          }
          n.$imageEl && 0 !== n.$imageEl.length && (u.gestures ? i.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        },
        onGestureEnd: function(e) {
          var t = this.params.zoom,
            i = this.zoom,
            n = i.gesture;
          if (!u.gestures) {
            if (!i.fakeGestureTouched || !i.fakeGestureMoved)
              return;
            if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !$.android)
              return;
            i.fakeGestureTouched = !1,
              i.fakeGestureMoved = !1
          }
          n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
        },
        onTouchStart: function(e) {
          var t = this.zoom,
            i = t.gesture,
            n = t.image;
          i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || ($.android && e.cancelable && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
          var t = this.zoom,
            i = t.gesture,
            n = t.image,
            s = t.velocity;
          if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, n.isTouched && i.$slideEl)) {
            n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (n.startX = -n.startX, n.startY = -n.startY));
            var a = n.width * t.scale,
              r = n.height * t.scale;
            if (!(a < i.slideWidth && r < i.slideHeight)) {
              if (n.minX = Math.min(i.slideWidth / 2 - a / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - r / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !n.isMoved && !t.isScaling) {
                if (this.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x))
                  return void (n.isTouched = !1);
                if (!this.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y))
                  return void (n.isTouched = !1)
              }
              e.cancelable && e.preventDefault(),
                e.stopPropagation(),
                n.isMoved = !0,
                n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX,
                n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY,
              n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)),
              n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)),
              n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)),
              n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)),
              s.prevPositionX || (s.prevPositionX = n.touchesCurrent.x),
              s.prevPositionY || (s.prevPositionY = n.touchesCurrent.y),
              s.prevTime || (s.prevTime = Date.now()),
                s.x = (n.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2,
                s.y = (n.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2,
              Math.abs(n.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0),
              Math.abs(n.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0),
                s.prevPositionX = n.touchesCurrent.x,
                s.prevPositionY = n.touchesCurrent.y,
                s.prevTime = Date.now(),
                i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
            }
          }
        },
        onTouchEnd: function() {
          var e = this.zoom,
            t = e.gesture,
            i = e.image,
            n = e.velocity;
          if (t.$imageEl && 0 !== t.$imageEl.length) {
            if (!i.isTouched || !i.isMoved)
              return i.isTouched = !1, void (i.isMoved = !1);
            i.isTouched = !1,
              i.isMoved = !1;
            var s = 300,
              a = 300,
              r = n.x * s,
              o = i.currentX + r,
              l = n.y * a,
              d = i.currentY + l;
            0 !== n.x && (s = Math.abs((o - i.currentX) / n.x)),
            0 !== n.y && (a = Math.abs((d - i.currentY) / n.y));
            var u = Math.max(s, a);
            i.currentX = o,
              i.currentY = d;
            var c = i.width * e.scale,
              h = i.height * e.scale;
            i.minX = Math.min(t.slideWidth / 2 - c / 2, 0),
              i.maxX = -i.minX,
              i.minY = Math.min(t.slideHeight / 2 - h / 2, 0),
              i.maxY = -i.minY,
              i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
              i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
              t.$imageWrapEl.transition(u).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
          }
        },
        onTransitionEnd: function() {
          var e = this.zoom,
            t = e.gesture;
          t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
        },
        toggle: function(e) {
          var t = this.zoom;
          t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
          var t,
            i,
            n,
            s,
            a,
            r,
            o,
            l,
            d,
            u,
            c,
            h,
            p,
            f,
            m,
            v,
            g = this.zoom,
            y = this.params.zoom,
            b = g.gesture,
            w = g.image;
          (b.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? b.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : b.$slideEl = this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), b.$imageWrapEl = b.$imageEl.parent("." + y.containerClass)), b.$imageEl && 0 !== b.$imageEl.length) && (b.$slideEl.addClass("" + y.zoomedSlideClass), void 0 === w.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = w.touchesStart.x, i = w.touchesStart.y), g.scale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, g.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, e ? (m = b.$slideEl[0].offsetWidth, v = b.$slideEl[0].offsetHeight, n = b.$slideEl.offset().left + m / 2 - t, s = b.$slideEl.offset().top + v / 2 - i, o = b.$imageEl[0].offsetWidth, l = b.$imageEl[0].offsetHeight, d = o * g.scale, u = l * g.scale, p = -(c = Math.min(m / 2 - d / 2, 0)), f = -(h = Math.min(v / 2 - u / 2, 0)), a = n * g.scale, r = s * g.scale, a < c && (a = c), a > p && (a = p), r < h && (r = h), r > f && (r = f)) : (a = 0, r = 0), b.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + r + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
        },
        out: function() {
          var e = this.zoom,
            t = this.params.zoom,
            i = e.gesture;
          i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)),
          i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
        },
        enable: function() {
          var e = this.zoom;
          if (!e.enabled) {
            e.enabled = !0;
            var t = !("touchstart" !== this.touchEvents.start || !u.passiveListener || !this.params.passiveListeners) && {
                passive: !0,
                capture: !1
              },
              i = !u.passiveListener || {
                passive: !1,
                capture: !0
              },
              n = "." + this.params.slideClass;
            u.gestures ? (this.$wrapperEl.on("gesturestart", n, e.onGestureStart, t), this.$wrapperEl.on("gesturechange", n, e.onGestureChange, t), this.$wrapperEl.on("gestureend", n, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, n, e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, n, e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, n, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, n, e.onGestureEnd, t)),
              this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
          }
        },
        disable: function() {
          var e = this.zoom;
          if (e.enabled) {
            this.zoom.enabled = !1;
            var t = !("touchstart" !== this.touchEvents.start || !u.passiveListener || !this.params.passiveListeners) && {
                passive: !0,
                capture: !1
              },
              i = !u.passiveListener || {
                passive: !1,
                capture: !0
              },
              n = "." + this.params.slideClass;
            u.gestures ? (this.$wrapperEl.off("gesturestart", n, e.onGestureStart, t), this.$wrapperEl.off("gesturechange", n, e.onGestureChange, t), this.$wrapperEl.off("gestureend", n, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, n, e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, n, e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, n, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, n, e.onGestureEnd, t)),
              this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
          }
        }
      },
      re = {
        loadInSlide: function(e, t) {
          void 0 === t && (t = !0);
          var i = this,
            n = i.params.lazy;
          if (void 0 !== e && 0 !== i.slides.length) {
            var s = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
              a = s.find("." + n.elementClass + ":not(." + n.loadedClass + "):not(." + n.loadingClass + ")");
            !s.hasClass(n.elementClass) || s.hasClass(n.loadedClass) || s.hasClass(n.loadingClass) || (a = a.add(s[0])),
            0 !== a.length && a.each(function(e, a) {
              var o = r(a);
              o.addClass(n.loadingClass);
              var l = o.attr("data-background"),
                d = o.attr("data-src"),
                u = o.attr("data-srcset"),
                c = o.attr("data-sizes"),
                h = o.parent("picture");
              i.loadImage(o[0], d || l, u, c, !1, function() {
                if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                  if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (u && (o.attr("srcset", u), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), h.length && h.children("source").each(function(e, t) {
                    var i = r(t);
                    i.attr("data-srcset") && (i.attr("srcset", i.attr("data-srcset")), i.removeAttr("data-srcset"))
                  }), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(n.loadedClass).removeClass(n.loadingClass), s.find("." + n.preloaderClass).remove(), i.params.loop && t) {
                    var e = s.attr("data-swiper-slide-index");
                    if (s.hasClass(i.params.slideDuplicateClass)) {
                      var a = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                      i.lazy.loadInSlide(a.index(), !1)
                    } else {
                      var p = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                      i.lazy.loadInSlide(p.index(), !1)
                    }
                  }
                  i.emit("lazyImageReady", s[0], o[0]),
                  i.params.autoHeight && i.updateAutoHeight()
                }
              }),
                i.emit("lazyImageLoad", s[0], o[0])
            })
          }
        },
        load: function() {
          var e = this,
            t = e.$wrapperEl,
            i = e.params,
            n = e.slides,
            s = e.activeIndex,
            a = e.virtual && i.virtual.enabled,
            o = i.lazy,
            l = i.slidesPerView;
          function d(e) {
            if (a) {
              if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                return !0
            } else if (n[e])
              return !0;
            return !1
          }
          function u(e) {
            return a ? r(e).attr("data-swiper-slide-index") : r(e).index()
          }
          if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility)
            t.children("." + i.slideVisibleClass).each(function(t, i) {
              var n = a ? r(i).attr("data-swiper-slide-index") : r(i).index();
              e.lazy.loadInSlide(n)
            });
          else if (l > 1)
            for (var c = s; c < s + l; c += 1)
              d(c) && e.lazy.loadInSlide(c);
          else
            e.lazy.loadInSlide(s);
          if (o.loadPrevNext)
            if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
              for (var h = o.loadPrevNextAmount, p = l, f = Math.min(s + p + Math.max(h, p), n.length), m = Math.max(s - Math.max(p, h), 0), v = s + l; v < f; v += 1)
                d(v) && e.lazy.loadInSlide(v);
              for (var g = m; g < s; g += 1)
                d(g) && e.lazy.loadInSlide(g)
            } else {
              var y = t.children("." + i.slideNextClass);
              y.length > 0 && e.lazy.loadInSlide(u(y));
              var b = t.children("." + i.slidePrevClass);
              b.length > 0 && e.lazy.loadInSlide(u(b))
            }
        }
      },
      oe = {
        LinearSpline: function(e, t) {
          var i,
            n,
            s,
            a,
            r,
            o = function(e, t) {
              for (n = -1, i = e.length; i - n > 1;)
                e[s = i + n >> 1] <= t ? n = s : i = s;
              return i
            };
          return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
            return e ? (r = o(this.x, e), a = r - 1, (e - this.x[a]) * (this.y[r] - this.y[a]) / (this.x[r] - this.x[a]) + this.y[a]) : 0
          }, this
        },
        getInterpolateFunction: function(e) {
          this.controller.spline || (this.controller.spline = this.params.loop ? new oe.LinearSpline(this.slidesGrid, e.slidesGrid) : new oe.LinearSpline(this.snapGrid, e.snapGrid))
        },
        setTranslate: function(e, t) {
          var i,
            n,
            s = this,
            a = s.controller.control;
          function r(e) {
            var t = s.rtlTranslate ? -s.translate : s.translate;
            "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), n = -s.controller.spline.interpolate(-t)),
            n && "container" !== s.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), n = (t - s.minTranslate()) * i + e.minTranslate()),
            s.params.controller.inverse && (n = e.maxTranslate() - n),
              e.updateProgress(n),
              e.setTranslate(n, s),
              e.updateActiveIndex(),
              e.updateSlidesClasses()
          }
          if (Array.isArray(a))
            for (var o = 0; o < a.length; o += 1)
              a[o] !== t && a[o] instanceof R && r(a[o]);
          else
            a instanceof R && t !== a && r(a)
        },
        setTransition: function(e, t) {
          var i,
            n = this,
            s = n.controller.control;
          function a(t) {
            t.setTransition(e, n),
            0 !== e && (t.transitionStart(), t.params.autoHeight && d.nextTick(function() {
              t.updateAutoHeight()
            }), t.$wrapperEl.transitionEnd(function() {
              s && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
            }))
          }
          if (Array.isArray(s))
            for (i = 0; i < s.length; i += 1)
              s[i] !== t && s[i] instanceof R && a(s[i]);
          else
            s instanceof R && t !== s && a(s)
        }
      },
      le = {
        makeElFocusable: function(e) {
          return e.attr("tabIndex", "0"), e
        },
        makeElNotFocusable: function(e) {
          return e.attr("tabIndex", "-1"), e
        },
        addElRole: function(e, t) {
          return e.attr("role", t), e
        },
        addElLabel: function(e, t) {
          return e.attr("aria-label", t), e
        },
        disableEl: function(e) {
          return e.attr("aria-disabled", !0), e
        },
        enableEl: function(e) {
          return e.attr("aria-disabled", !1), e
        },
        onEnterKey: function(e) {
          var t = this.params.a11y;
          if (13 === e.keyCode) {
            var i = r(e.target);
            this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
            this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
            this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
          }
        },
        notify: function(e) {
          var t = this.a11y.liveRegion;
          0 !== t.length && (t.html(""), t.html(e))
        },
        updateNavigation: function() {
          if (!this.params.loop && this.navigation) {
            var e = this.navigation,
              t = e.$nextEl,
              i = e.$prevEl;
            i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))),
            t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)))
          }
        },
        updatePagination: function() {
          var e = this,
            t = e.params.a11y;
          e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, n) {
            var s = r(n);
            e.a11y.makeElFocusable(s),
              e.a11y.addElRole(s, "button"),
              e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1))
          })
        },
        init: function() {
          this.$el.append(this.a11y.liveRegion);
          var e,
            t,
            i = this.params.a11y;
          this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
          this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
          e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)),
          t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)),
          this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        },
        destroy: function() {
          var e,
            t;
          this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
          this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
          this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
          e && e.off("keydown", this.a11y.onEnterKey),
          t && t.off("keydown", this.a11y.onEnterKey),
          this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
      },
      de = {
        init: function() {
          if (this.params.history) {
            if (!s.history || !s.history.pushState)
              return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
            var e = this.history;
            e.initialized = !0,
              e.paths = de.getPathValues(),
            (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || s.addEventListener("popstate", this.history.setHistoryPopState))
          }
        },
        destroy: function() {
          this.params.history.replaceState || s.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
          this.history.paths = de.getPathValues(),
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
          var e = s.location.pathname.slice(1).split("/").filter(function(e) {
              return "" !== e
            }),
            t = e.length;
          return {
            key: e[t - 2],
            value: e[t - 1]
          }
        },
        setHistory: function(e, t) {
          if (this.history.initialized && this.params.history.enabled) {
            var i = this.slides.eq(t),
              n = de.slugify(i.attr("data-history"));
            s.location.pathname.includes(e) || (n = e + "/" + n);
            var a = s.history.state;
            a && a.value === n || (this.params.history.replaceState ? s.history.replaceState({
              value: n
            }, null, n) : s.history.pushState({
              value: n
            }, null, n))
          }
        },
        slugify: function(e) {
          return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, i) {
          if (t)
            for (var n = 0, s = this.slides.length; n < s; n += 1) {
              var a = this.slides.eq(n);
              if (de.slugify(a.attr("data-history")) === t && !a.hasClass(this.params.slideDuplicateClass)) {
                var r = a.index();
                this.slideTo(r, e, i)
              }
            }
          else
            this.slideTo(0, e, i)
        }
      },
      ue = {
        onHashCange: function() {
          this.emit("hashChange");
          var e = i.location.hash.replace("#", "");
          if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
            var t = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
            if (void 0 === t)
              return;
            this.slideTo(t)
          }
        },
        setHash: function() {
          if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
            if (this.params.hashNavigation.replaceState && s.history && s.history.replaceState)
              s.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""),
                this.emit("hashSet");
            else {
              var e = this.slides.eq(this.activeIndex),
                t = e.attr("data-hash") || e.attr("data-history");
              i.location.hash = t || "",
                this.emit("hashSet")
            }
        },
        init: function() {
          if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
            this.hashNavigation.initialized = !0;
            var e = i.location.hash.replace("#", "");
            if (e)
              for (var t = 0, n = this.slides.length; t < n; t += 1) {
                var a = this.slides.eq(t);
                if ((a.attr("data-hash") || a.attr("data-history")) === e && !a.hasClass(this.params.slideDuplicateClass)) {
                  var o = a.index();
                  this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                }
              }
            this.params.hashNavigation.watchState && r(s).on("hashchange", this.hashNavigation.onHashCange)
          }
        },
        destroy: function() {
          this.params.hashNavigation.watchState && r(s).off("hashchange", this.hashNavigation.onHashCange)
        }
      },
      ce = {
        run: function() {
          var e = this,
            t = e.slides.eq(e.activeIndex),
            i = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = d.nextTick(function() {
              e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
              e.params.cssMode && e.autoplay.running && e.autoplay.run()
            }, i)
        },
        start: function() {
          return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
        },
        stop: function() {
          return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
        },
        pause: function(e) {
          this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
        }
      },
      he = {
        setTranslate: function() {
          for (var e = this.slides, t = 0; t < e.length; t += 1) {
            var i = this.slides.eq(t),
              n = -i[0].swiperSlideOffset;
            this.params.virtualTranslate || (n -= this.translate);
            var s = 0;
            this.isHorizontal() || (s = n, n = 0);
            var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
            i.css({
              opacity: a
            }).transform("translate3d(" + n + "px, " + s + "px, 0px)")
          }
        },
        setTransition: function(e) {
          var t = this,
            i = t.slides,
            n = t.$wrapperEl;
          if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
            var s = !1;
            i.transitionEnd(function() {
              if (!s && t && !t.destroyed) {
                s = !0,
                  t.animating = !1;
                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                  n.trigger(e[i])
              }
            })
          }
        }
      },
      pe = {
        setTranslate: function() {
          var e,
            t = this.$el,
            i = this.$wrapperEl,
            n = this.slides,
            s = this.width,
            a = this.height,
            o = this.rtlTranslate,
            l = this.size,
            d = this.params.cubeEffect,
            u = this.isHorizontal(),
            c = this.virtual && this.params.virtual.enabled,
            h = 0;
          d.shadow && (u ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = r('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
            height: s + "px"
          })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = r('<div class="swiper-cube-shadow"></div>'), t.append(e)));
          for (var p = 0; p < n.length; p += 1) {
            var f = n.eq(p),
              m = p;
            c && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
            var v = 90 * m,
              g = Math.floor(v / 360);
            o && (v = -v, g = Math.floor(-v / 360));
            var y = Math.max(Math.min(f[0].progress, 1), -1),
              b = 0,
              w = 0,
              x = 0;
            m % 4 == 0 ? (b = 4 * -g * l, x = 0) : (m - 1) % 4 == 0 ? (b = 0, x = 4 * -g * l) : (m - 2) % 4 == 0 ? (b = l + 4 * g * l, x = l) : (m - 3) % 4 == 0 && (b = -l, x = 3 * l + 4 * l * g),
            o && (b = -b),
            u || (w = b, b = 0);
            var T = "rotateX(" + (u ? 0 : -v) + "deg) rotateY(" + (u ? v : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + x + "px)";
            if (y <= 1 && y > -1 && (h = 90 * m + 90 * y, o && (h = 90 * -m - 90 * y)), f.transform(T), d.slideShadows) {
              var E = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                C = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
              0 === E.length && (E = r('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), f.append(E)),
              0 === C.length && (C = r('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), f.append(C)),
              E.length && (E[0].style.opacity = Math.max(-y, 0)),
              C.length && (C[0].style.opacity = Math.max(y, 0))
            }
          }
          if (i.css({
            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
            "transform-origin": "50% 50% -" + l / 2 + "px"
          }), d.shadow)
            if (u)
              e.transform("translate3d(0px, " + (s / 2 + d.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
            else {
              var S = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                k = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2),
                M = d.shadowScale,
                P = d.shadowScale / k,
                A = d.shadowOffset;
              e.transform("scale3d(" + M + ", 1, " + P + ") translate3d(0px, " + (a / 2 + A) + "px, " + -a / 2 / P + "px) rotateX(-90deg)")
            }
          var D = W.isSafari || W.isWebView ? -l / 2 : 0;
          i.transform("translate3d(0px,0," + D + "px) rotateX(" + (this.isHorizontal() ? 0 : h) + "deg) rotateY(" + (this.isHorizontal() ? -h : 0) + "deg)")
        },
        setTransition: function(e) {
          var t = this.$el;
          this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
          this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
      },
      fe = {
        setTranslate: function() {
          for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
            var n = e.eq(i),
              s = n[0].progress;
            this.params.flipEffect.limitRotation && (s = Math.max(Math.min(n[0].progress, 1), -1));
            var a = -180 * s,
              o = 0,
              l = -n[0].swiperSlideOffset,
              d = 0;
            if (this.isHorizontal() ? t && (a = -a) : (d = l, l = 0, o = -a, a = 0), n[0].style.zIndex = -Math.abs(Math.round(s)) + e.length, this.params.flipEffect.slideShadows) {
              var u = this.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                c = this.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
              0 === u.length && (u = r('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), n.append(u)),
              0 === c.length && (c = r('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(c)),
              u.length && (u[0].style.opacity = Math.max(-s, 0)),
              c.length && (c[0].style.opacity = Math.max(s, 0))
            }
            n.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + a + "deg)")
          }
        },
        setTransition: function(e) {
          var t = this,
            i = t.slides,
            n = t.activeIndex,
            s = t.$wrapperEl;
          if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
            var a = !1;
            i.eq(n).transitionEnd(function() {
              if (!a && t && !t.destroyed) {
                a = !0,
                  t.animating = !1;
                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                  s.trigger(e[i])
              }
            })
          }
        }
      },
      me = {
        setTranslate: function() {
          for (var e = this.width, t = this.height, i = this.slides, n = this.$wrapperEl, s = this.slidesSizesGrid, a = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, c = o ? a.rotate : -a.rotate, h = a.depth, p = 0, f = i.length; p < f; p += 1) {
            var m = i.eq(p),
              v = s[p],
              g = (d - m[0].swiperSlideOffset - v / 2) / v * a.modifier,
              y = o ? c * g : 0,
              b = o ? 0 : c * g,
              w = -h * Math.abs(g),
              x = a.stretch;
            "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(a.stretch) / 100 * v);
            var T = o ? 0 : x * g,
              E = o ? x * g : 0,
              C = 1 - (1 - a.scale) * Math.abs(g);
            Math.abs(E) < .001 && (E = 0),
            Math.abs(T) < .001 && (T = 0),
            Math.abs(w) < .001 && (w = 0),
            Math.abs(y) < .001 && (y = 0),
            Math.abs(b) < .001 && (b = 0),
            Math.abs(C) < .001 && (C = 0);
            var S = "translate3d(" + E + "px," + T + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + y + "deg) scale(" + C + ")";
            if (m.transform(S), m[0].style.zIndex = 1 - Math.abs(Math.round(g)), a.slideShadows) {
              var k = o ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                M = o ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
              0 === k.length && (k = r('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), m.append(k)),
              0 === M.length && (M = r('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), m.append(M)),
              k.length && (k[0].style.opacity = g > 0 ? g : 0),
              M.length && (M[0].style.opacity = -g > 0 ? -g : 0)
            }
          }
          (u.pointerEvents || u.prefixedPointerEvents) && (n[0].style.perspectiveOrigin = d + "px 50%")
        },
        setTransition: function(e) {
          this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
      },
      ve = {
        init: function() {
          var e = this.params.thumbs,
            t = this.constructor;
          e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, d.extend(this.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), d.extend(this.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          })) : d.isObject(e.swiper) && (this.thumbs.swiper = new t(d.extend({}, e.swiper, {
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          })), this.thumbs.swiperCreated = !0),
            this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),
            this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
        },
        onThumbClick: function() {
          var e = this.thumbs.swiper;
          if (e) {
            var t = e.clickedIndex,
              i = e.clickedSlide;
            if (!(i && r(i).hasClass(this.params.thumbs.slideThumbActiveClass) || void 0 === t || null === t)) {
              var n;
              if (n = e.params.loop ? parseInt(r(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                var s = this.activeIndex;
                this.slides.eq(s).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, s = this.activeIndex);
                var a = this.slides.eq(s).prevAll('[data-swiper-slide-index="' + n + '"]').eq(0).index(),
                  o = this.slides.eq(s).nextAll('[data-swiper-slide-index="' + n + '"]').eq(0).index();
                n = void 0 === a ? o : void 0 === o ? a : o - s < s - a ? o : a
              }
              this.slideTo(n)
            }
          }
        },
        update: function(e) {
          var t = this.thumbs.swiper;
          if (t) {
            var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
              n = this.params.thumbs.autoScrollOffset,
              s = n && !t.params.loop;
            if (this.realIndex !== t.realIndex || s) {
              var a,
                r,
                o = t.activeIndex;
              if (t.params.loop) {
                t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, o = t.activeIndex);
                var l = t.slides.eq(o).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                  d = t.slides.eq(o).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                a = void 0 === l ? d : void 0 === d ? l : d - o == o - l ? o : d - o < o - l ? d : l,
                  r = this.activeIndex > this.previousIndex ? "next" : "prev"
              } else
                r = (a = this.realIndex) > this.previousIndex ? "next" : "prev";
              s && (a += "next" === r ? n : -1 * n),
              t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(a) < 0 && (t.params.centeredSlides ? a = a > o ? a - Math.floor(i / 2) + 1 : a + Math.floor(i / 2) - 1 : a > o && (a = a - i + 1), t.slideTo(a, e ? 0 : void 0))
            }
            var u = 1,
              c = this.params.thumbs.slideThumbActiveClass;
            if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (u = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (u = 1), u = Math.floor(u), t.slides.removeClass(c), t.params.loop || t.params.virtual && t.params.virtual.enabled)
              for (var h = 0; h < u; h += 1)
                t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + h) + '"]').addClass(c);
            else
              for (var p = 0; p < u; p += 1)
                t.slides.eq(this.realIndex + p).addClass(c)
          }
        }
      },
      ge = [F, G, X, V, U, K, Z, {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container"
          }
        },
        create: function() {
          d.extend(this, {
            mousewheel: {
              enabled: !1,
              enable: ee.enable.bind(this),
              disable: ee.disable.bind(this),
              handle: ee.handle.bind(this),
              handleMouseEnter: ee.handleMouseEnter.bind(this),
              handleMouseLeave: ee.handleMouseLeave.bind(this),
              animateSlider: ee.animateSlider.bind(this),
              releaseScroll: ee.releaseScroll.bind(this),
              lastScrollTime: d.now(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: []
            }
          })
        },
        on: {
          init: function() {
            !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(),
            this.params.mousewheel.enabled && this.mousewheel.enable()
          },
          destroy: function() {
            this.params.cssMode && this.mousewheel.enable(),
            this.mousewheel.enabled && this.mousewheel.disable()
          }
        }
      }, {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
          }
        },
        create: function() {
          d.extend(this, {
            navigation: {
              init: te.init.bind(this),
              update: te.update.bind(this),
              destroy: te.destroy.bind(this),
              onNextClick: te.onNextClick.bind(this),
              onPrevClick: te.onPrevClick.bind(this)
            }
          })
        },
        on: {
          init: function() {
            this.navigation.init(),
              this.navigation.update()
          },
          toEdge: function() {
            this.navigation.update()
          },
          fromEdge: function() {
            this.navigation.update()
          },
          destroy: function() {
            this.navigation.destroy()
          },
          click: function(e) {
            var t,
              i = this.navigation,
              n = i.$nextEl,
              s = i.$prevEl;
            !this.params.navigation.hideOnClick || r(e.target).is(s) || r(e.target).is(n) || (n ? t = n.hasClass(this.params.navigation.hiddenClass) : s && (t = s.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), n && n.toggleClass(this.params.navigation.hiddenClass), s && s.toggleClass(this.params.navigation.hiddenClass))
          }
        }
      }, {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function(e) {
              return e
            },
            formatFractionTotal: function(e) {
              return e
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock"
          }
        },
        create: function() {
          d.extend(this, {
            pagination: {
              init: ie.init.bind(this),
              render: ie.render.bind(this),
              update: ie.update.bind(this),
              destroy: ie.destroy.bind(this),
              dynamicBulletIndex: 0
            }
          })
        },
        on: {
          init: function() {
            this.pagination.init(),
              this.pagination.render(),
              this.pagination.update()
          },
          activeIndexChange: function() {
            this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
          },
          snapIndexChange: function() {
            this.params.loop || this.pagination.update()
          },
          slidesLengthChange: function() {
            this.params.loop && (this.pagination.render(), this.pagination.update())
          },
          snapGridLengthChange: function() {
            this.params.loop || (this.pagination.render(), this.pagination.update())
          },
          destroy: function() {
            this.pagination.destroy()
          },
          click: function(e) {
            this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !r(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
          }
        }
      }, {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
          }
        },
        create: function() {
          d.extend(this, {
            scrollbar: {
              init: ne.init.bind(this),
              destroy: ne.destroy.bind(this),
              updateSize: ne.updateSize.bind(this),
              setTranslate: ne.setTranslate.bind(this),
              setTransition: ne.setTransition.bind(this),
              enableDraggable: ne.enableDraggable.bind(this),
              disableDraggable: ne.disableDraggable.bind(this),
              setDragPosition: ne.setDragPosition.bind(this),
              getPointerPosition: ne.getPointerPosition.bind(this),
              onDragStart: ne.onDragStart.bind(this),
              onDragMove: ne.onDragMove.bind(this),
              onDragEnd: ne.onDragEnd.bind(this),
              isTouched: !1,
              timeout: null,
              dragTimeout: null
            }
          })
        },
        on: {
          init: function() {
            this.scrollbar.init(),
              this.scrollbar.updateSize(),
              this.scrollbar.setTranslate()
          },
          update: function() {
            this.scrollbar.updateSize()
          },
          resize: function() {
            this.scrollbar.updateSize()
          },
          observerUpdate: function() {
            this.scrollbar.updateSize()
          },
          setTranslate: function() {
            this.scrollbar.setTranslate()
          },
          setTransition: function(e) {
            this.scrollbar.setTransition(e)
          },
          destroy: function() {
            this.scrollbar.destroy()
          }
        }
      }, {
        name: "parallax",
        params: {
          parallax: {
            enabled: !1
          }
        },
        create: function() {
          d.extend(this, {
            parallax: {
              setTransform: se.setTransform.bind(this),
              setTranslate: se.setTranslate.bind(this),
              setTransition: se.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
          },
          init: function() {
            this.params.parallax.enabled && this.parallax.setTranslate()
          },
          setTranslate: function() {
            this.params.parallax.enabled && this.parallax.setTranslate()
          },
          setTransition: function(e) {
            this.params.parallax.enabled && this.parallax.setTransition(e)
          }
        }
      }, {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
          }
        },
        create: function() {
          var e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
              }
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
            t[i] = ae[i].bind(e)
          }),
            d.extend(e, {
              zoom: t
            });
          var i = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: function() {
              return i
            },
            set: function(t) {
              if (i !== t) {
                var n = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                  s = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                e.emit("zoomChange", t, n, s)
              }
              i = t
            }
          })
        },
        on: {
          init: function() {
            this.params.zoom.enabled && this.zoom.enable()
          },
          destroy: function() {
            this.zoom.disable()
          },
          touchStart: function(e) {
            this.zoom.enabled && this.zoom.onTouchStart(e)
          },
          touchEnd: function(e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e)
          },
          doubleTap: function(e) {
            this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
          },
          transitionEnd: function() {
            this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
          },
          slideChange: function() {
            this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
          }
        }
      }, {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader"
          }
        },
        create: function() {
          d.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: re.load.bind(this),
              loadInSlide: re.loadInSlide.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
          },
          init: function() {
            this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
          },
          scroll: function() {
            this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
          },
          resize: function() {
            this.params.lazy.enabled && this.lazy.load()
          },
          scrollbarDragMove: function() {
            this.params.lazy.enabled && this.lazy.load()
          },
          transitionStart: function() {
            this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
          },
          transitionEnd: function() {
            this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
          },
          slideChange: function() {
            this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
          }
        }
      }, {
        name: "controller",
        params: {
          controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
          }
        },
        create: function() {
          d.extend(this, {
            controller: {
              control: this.params.controller.control,
              getInterpolateFunction: oe.getInterpolateFunction.bind(this),
              setTranslate: oe.setTranslate.bind(this),
              setTransition: oe.setTransition.bind(this)
            }
          })
        },
        on: {
          update: function() {
            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
          },
          resize: function() {
            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
          },
          observerUpdate: function() {
            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
          },
          setTranslate: function(e, t) {
            this.controller.control && this.controller.setTranslate(e, t)
          },
          setTransition: function(e, t) {
            this.controller.control && this.controller.setTransition(e, t)
          }
        }
      }, {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}"
          }
        },
        create: function() {
          var e = this;
          d.extend(e, {
            a11y: {
              liveRegion: r('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
            }
          }),
            Object.keys(le).forEach(function(t) {
              e.a11y[t] = le[t].bind(e)
            })
        },
        on: {
          init: function() {
            this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
          },
          toEdge: function() {
            this.params.a11y.enabled && this.a11y.updateNavigation()
          },
          fromEdge: function() {
            this.params.a11y.enabled && this.a11y.updateNavigation()
          },
          paginationUpdate: function() {
            this.params.a11y.enabled && this.a11y.updatePagination()
          },
          destroy: function() {
            this.params.a11y.enabled && this.a11y.destroy()
          }
        }
      }, {
        name: "history",
        params: {
          history: {
            enabled: !1,
            replaceState: !1,
            key: "slides"
          }
        },
        create: function() {
          d.extend(this, {
            history: {
              init: de.init.bind(this),
              setHistory: de.setHistory.bind(this),
              setHistoryPopState: de.setHistoryPopState.bind(this),
              scrollToSlide: de.scrollToSlide.bind(this),
              destroy: de.destroy.bind(this)
            }
          })
        },
        on: {
          init: function() {
            this.params.history.enabled && this.history.init()
          },
          destroy: function() {
            this.params.history.enabled && this.history.destroy()
          },
          transitionEnd: function() {
            this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
          },
          slideChange: function() {
            this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
          }
        }
      }, {
        name: "hash-navigation",
        params: {
          hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1
          }
        },
        create: function() {
          d.extend(this, {
            hashNavigation: {
              initialized: !1,
              init: ue.init.bind(this),
              destroy: ue.destroy.bind(this),
              setHash: ue.setHash.bind(this),
              onHashCange: ue.onHashCange.bind(this)
            }
          })
        },
        on: {
          init: function() {
            this.params.hashNavigation.enabled && this.hashNavigation.init()
          },
          destroy: function() {
            this.params.hashNavigation.enabled && this.hashNavigation.destroy()
          },
          transitionEnd: function() {
            this.hashNavigation.initialized && this.hashNavigation.setHash()
          },
          slideChange: function() {
            this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
          }
        }
      }, {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1
          }
        },
        create: function() {
          var e = this;
          d.extend(e, {
            autoplay: {
              running: !1,
              paused: !1,
              run: ce.run.bind(e),
              start: ce.start.bind(e),
              stop: ce.stop.bind(e),
              pause: ce.pause.bind(e),
              onVisibilityChange: function() {
                "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(),
                "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
              },
              onTransitionEnd: function(t) {
                e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
              }
            }
          })
        },
        on: {
          init: function() {
            this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
          },
          beforeTransitionStart: function(e, t) {
            this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
          },
          sliderFirstMove: function() {
            this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
          },
          touchEnd: function() {
            this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
          },
          destroy: function() {
            this.autoplay.running && this.autoplay.stop(),
              document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
          }
        }
      }, {
        name: "effect-fade",
        params: {
          fadeEffect: {
            crossFade: !1
          }
        },
        create: function() {
          d.extend(this, {
            fadeEffect: {
              setTranslate: he.setTranslate.bind(this),
              setTransition: he.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            if ("fade" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "fade");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              d.extend(this.params, e),
                d.extend(this.originalParams, e)
            }
          },
          setTranslate: function() {
            "fade" === this.params.effect && this.fadeEffect.setTranslate()
          },
          setTransition: function(e) {
            "fade" === this.params.effect && this.fadeEffect.setTransition(e)
          }
        }
      }, {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
          }
        },
        create: function() {
          d.extend(this, {
            cubeEffect: {
              setTranslate: pe.setTranslate.bind(this),
              setTransition: pe.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            if ("cube" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "cube"),
                this.classNames.push(this.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
              };
              d.extend(this.params, e),
                d.extend(this.originalParams, e)
            }
          },
          setTranslate: function() {
            "cube" === this.params.effect && this.cubeEffect.setTranslate()
          },
          setTransition: function(e) {
            "cube" === this.params.effect && this.cubeEffect.setTransition(e)
          }
        }
      }, {
        name: "effect-flip",
        params: {
          flipEffect: {
            slideShadows: !0,
            limitRotation: !0
          }
        },
        create: function() {
          d.extend(this, {
            flipEffect: {
              setTranslate: fe.setTranslate.bind(this),
              setTransition: fe.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            if ("flip" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "flip"),
                this.classNames.push(this.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              d.extend(this.params, e),
                d.extend(this.originalParams, e)
            }
          },
          setTranslate: function() {
            "flip" === this.params.effect && this.flipEffect.setTranslate()
          },
          setTransition: function(e) {
            "flip" === this.params.effect && this.flipEffect.setTransition(e)
          }
        }
      }, {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0
          }
        },
        create: function() {
          d.extend(this, {
            coverflowEffect: {
              setTranslate: me.setTranslate.bind(this),
              setTransition: me.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
          },
          setTranslate: function() {
            "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
          },
          setTransition: function(e) {
            "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
          }
        }
      }, {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs"
          }
        },
        create: function() {
          d.extend(this, {
            thumbs: {
              swiper: null,
              init: ve.init.bind(this),
              update: ve.update.bind(this),
              onThumbClick: ve.onThumbClick.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            var e = this.params.thumbs;
            e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
          },
          slideChange: function() {
            this.thumbs.swiper && this.thumbs.update()
          },
          update: function() {
            this.thumbs.swiper && this.thumbs.update()
          },
          resize: function() {
            this.thumbs.swiper && this.thumbs.update()
          },
          observerUpdate: function() {
            this.thumbs.swiper && this.thumbs.update()
          },
          setTransition: function(e) {
            var t = this.thumbs.swiper;
            t && t.setTransition(e)
          },
          beforeDestroy: function() {
            var e = this.thumbs.swiper;
            e && this.thumbs.swiperCreated && e && e.destroy()
          }
        }
      }];
    return void 0 === R.use && (R.use = R.Class.use, R.installModule = R.Class.installModule), R.use(ge), R
  }),
  function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
  }(this, function() {
    return function(e) {
      function t(n) {
        if (i[n])
          return i[n].exports;
        var s = i[n] = {
          exports: {},
          id: n,
          loaded: !1
        };
        return e[n].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
      }
      var i = {};
      return t.m = e, t.c = i, t.p = "dist/", t(0)
    }([function(e, t, i) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var s = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
          }
          return e
        },
        a = n((n(i(1)), i(6))),
        r = n(i(7)),
        o = n(i(8)),
        l = n(i(9)),
        d = n(i(10)),
        u = n(i(11)),
        c = n(i(14)),
        h = [],
        p = !1,
        f = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: "DOMContentLoaded",
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: !1
        },
        m = function() {
          if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (p = !0), p)
            return h = (0, u.default)(h, f), (0, d.default)(h, f.once), h
        },
        v = function() {
          h = (0, c.default)(),
            m()
        };
      e.exports = {
        init: function(e) {
          f = s(f, e),
            h = (0, c.default)();
          var t = document.all && !window.atob;
          return function(e) {
            return !0 === e || "mobile" === e && l.default.mobile() || "phone" === e && l.default.phone() || "tablet" === e && l.default.tablet() || "function" == typeof e && !0 === e()
          }(f.disable) || t ? void h.forEach(function(e, t) {
            e.node.removeAttribute("data-aos"),
              e.node.removeAttribute("data-aos-easing"),
              e.node.removeAttribute("data-aos-duration"),
              e.node.removeAttribute("data-aos-delay")
          }) : (f.disableMutationObserver || o.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), f.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", f.easing), document.querySelector("body").setAttribute("data-aos-duration", f.duration), document.querySelector("body").setAttribute("data-aos-delay", f.delay), "DOMContentLoaded" === f.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? m(!0) : "load" === f.startEvent ? window.addEventListener(f.startEvent, function() {
            m(!0)
          }) : document.addEventListener(f.startEvent, function() {
            m(!0)
          }), window.addEventListener("resize", (0, r.default)(m, f.debounceDelay, !0)), window.addEventListener("orientationchange", (0, r.default)(m, f.debounceDelay, !0)), window.addEventListener("scroll", (0, a.default)(function() {
            (0, d.default)(h, f.once)
          }, f.throttleDelay)), f.disableMutationObserver || o.default.ready("[data-aos]", v), h)
        },
        refresh: m,
        refreshHard: v
      }
    }, function(e, t) {}, , , , , function(e, t) {
      (function(t) {
        "use strict";
        function i(e, t, i) {
          function s(t) {
            var i = c,
              n = h;
            return c = h = void 0, g = t, f = e.apply(n, i)
          }
          function r(e) {
            var i = e - v;
            return void 0 === v || i >= t || i < 0 || T && e - g >= p
          }
          function l() {
            var e = x();
            return r(e) ? d(e) : void (m = setTimeout(l, function(e) {
              var i = t - (e - v);
              return T ? w(i, p - (e - g)) : i
            }(e)))
          }
          function d(e) {
            return m = void 0, E && c ? s(e) : (c = h = void 0, f)
          }
          function u() {
            var e = x(),
              i = r(e);
            if (c = arguments, h = this, v = e, i) {
              if (void 0 === m)
                return function(e) {
                  return g = e, m = setTimeout(l, t), y ? s(e) : f
                }(v);
              if (T)
                return m = setTimeout(l, t), s(v)
            }
            return void 0 === m && (m = setTimeout(l, t)), f
          }
          var c,
            h,
            p,
            f,
            m,
            v,
            g = 0,
            y = !1,
            T = !1,
            E = !0;
          if ("function" != typeof e)
            throw new TypeError(o);
          return t = a(t) || 0, n(i) && (y = !!i.leading, p = (T = "maxWait" in i) ? b(a(i.maxWait) || 0, t) : p, E = "trailing" in i ? !!i.trailing : E), u.cancel = function() {
            void 0 !== m && clearTimeout(m),
              g = 0,
              c = v = h = m = void 0
          }, u.flush = function() {
            return void 0 === m ? f : d(x())
          }, u
        }
        function n(e) {
          var t = void 0 === e ? "undefined" : r(e);
          return !!e && ("object" == t || "function" == t)
        }
        function s(e) {
          return "symbol" == (void 0 === e ? "undefined" : r(e)) || function(e) {
            return !!e && "object" == (void 0 === e ? "undefined" : r(e))
          }(e) && y.call(e) == d
        }
        function a(e) {
          if ("number" == typeof e)
            return e;
          if (s(e))
            return l;
          if (n(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = n(t) ? t + "" : t
          }
          if ("string" != typeof e)
            return 0 === e ? e : +e;
          e = e.replace(u, "");
          var i = h.test(e);
          return i || p.test(e) ? f(e.slice(2), i ? 2 : 8) : c.test(e) ? l : +e
        }
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          },
          o = "Expected a function",
          l = NaN,
          d = "[object Symbol]",
          u = /^\s+|\s+$/g,
          c = /^[-+]0x[0-9a-f]+$/i,
          h = /^0b[01]+$/i,
          p = /^0o[0-7]+$/i,
          f = parseInt,
          m = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
          v = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
          g = m || v || Function("return this")(),
          y = Object.prototype.toString,
          b = Math.max,
          w = Math.min,
          x = function() {
            return g.Date.now()
          };
        e.exports = function(e, t, s) {
          var a = !0,
            r = !0;
          if ("function" != typeof e)
            throw new TypeError(o);
          return n(s) && (a = "leading" in s ? !!s.leading : a, r = "trailing" in s ? !!s.trailing : r), i(e, t, {
            leading: a,
            maxWait: t,
            trailing: r
          })
        }
      }).call(t, function() {
        return this
      }())
    }, function(e, t) {
      (function(t) {
        "use strict";
        function i(e) {
          var t = void 0 === e ? "undefined" : a(e);
          return !!e && ("object" == t || "function" == t)
        }
        function n(e) {
          return "symbol" == (void 0 === e ? "undefined" : a(e)) || function(e) {
            return !!e && "object" == (void 0 === e ? "undefined" : a(e))
          }(e) && g.call(e) == l
        }
        function s(e) {
          if ("number" == typeof e)
            return e;
          if (n(e))
            return o;
          if (i(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = i(t) ? t + "" : t
          }
          if ("string" != typeof e)
            return 0 === e ? e : +e;
          e = e.replace(d, "");
          var s = c.test(e);
          return s || h.test(e) ? p(e.slice(2), s ? 2 : 8) : u.test(e) ? o : +e
        }
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          },
          r = "Expected a function",
          o = NaN,
          l = "[object Symbol]",
          d = /^\s+|\s+$/g,
          u = /^[-+]0x[0-9a-f]+$/i,
          c = /^0b[01]+$/i,
          h = /^0o[0-7]+$/i,
          p = parseInt,
          f = "object" == (void 0 === t ? "undefined" : a(t)) && t && t.Object === Object && t,
          m = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
          v = f || m || Function("return this")(),
          g = Object.prototype.toString,
          y = Math.max,
          b = Math.min,
          w = function() {
            return v.Date.now()
          };
        e.exports = function(e, t, n) {
          function a(t) {
            var i = c,
              n = h;
            return c = h = void 0, g = t, f = e.apply(n, i)
          }
          function o(e) {
            var i = e - v;
            return void 0 === v || i >= t || i < 0 || T && e - g >= p
          }
          function l() {
            var e = w();
            return o(e) ? d(e) : void (m = setTimeout(l, function(e) {
              var i = t - (e - v);
              return T ? b(i, p - (e - g)) : i
            }(e)))
          }
          function d(e) {
            return m = void 0, E && c ? a(e) : (c = h = void 0, f)
          }
          function u() {
            var e = w(),
              i = o(e);
            if (c = arguments, h = this, v = e, i) {
              if (void 0 === m)
                return function(e) {
                  return g = e, m = setTimeout(l, t), x ? a(e) : f
                }(v);
              if (T)
                return m = setTimeout(l, t), a(v)
            }
            return void 0 === m && (m = setTimeout(l, t)), f
          }
          var c,
            h,
            p,
            f,
            m,
            v,
            g = 0,
            x = !1,
            T = !1,
            E = !0;
          if ("function" != typeof e)
            throw new TypeError(r);
          return t = s(t) || 0, i(n) && (x = !!n.leading, p = (T = "maxWait" in n) ? y(s(n.maxWait) || 0, t) : p, E = "trailing" in n ? !!n.trailing : E), u.cancel = function() {
            void 0 !== m && clearTimeout(m),
              g = 0,
              c = v = h = m = void 0
          }, u.flush = function() {
            return void 0 === m ? f : d(w())
          }, u
        }
      }).call(t, function() {
        return this
      }())
    }, function(e, t) {
      "use strict";
      function i() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
      }
      function n(e) {
        e && e.forEach(function(e) {
          var t = Array.prototype.slice.call(e.addedNodes),
            i = Array.prototype.slice.call(e.removedNodes);
          if (function e(t) {
            var i = void 0,
              n = void 0;
            for (i = 0; i < t.length; i += 1) {
              if ((n = t[i]).dataset && n.dataset.aos)
                return !0;
              if (n.children && e(n.children))
                return !0
            }
            return !1
          }(t.concat(i)))
            return s()
        })
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var s = function() {};
      t.default = {
        isSupported: function() {
          return !!i()
        },
        ready: function(e, t) {
          var a = window.document,
            r = new (i())(n);
          s = t,
            r.observe(a.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0
            })
        }
      }
    }, function(e, t) {
      "use strict";
      function i() {
        return navigator.userAgent || navigator.vendor || window.opera || ""
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function() {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              n.enumerable = n.enumerable || !1,
                n.configurable = !0,
              "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t
          }
        }(),
        s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        o = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        l = function() {
          function e() {
            !function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            }(this, e)
          }
          return n(e, [{
            key: "phone",
            value: function() {
              var e = i();
              return !(!s.test(e) && !a.test(e.substr(0, 4)))
            }
          }, {
            key: "mobile",
            value: function() {
              var e = i();
              return !(!r.test(e) && !o.test(e.substr(0, 4)))
            }
          }, {
            key: "tablet",
            value: function() {
              return this.mobile() && !this.phone()
            }
          }]), e
        }();
      t.default = new l
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = function(e, t) {
        var i = window.pageYOffset,
          n = window.innerHeight;
        e.forEach(function(e, s) {
          !function(e, t, i) {
            var n = e.node.getAttribute("data-aos-once");
            t > e.position ? e.node.classList.add("aos-animate") : void 0 !== n && ("false" === n || !i && "true" !== n) && e.node.classList.remove("aos-animate")
          }(e, n + i, t)
        })
      }
    }, function(e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i(12));
      t.default = function(e, t) {
        return e.forEach(function(e, i) {
          e.node.classList.add("aos-init"),
            e.position = (0, n.default)(e.node, t.offset)
        }), e
      }
    }, function(e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(i(13));
      t.default = function(e, t) {
        var i = 0,
          s = 0,
          a = window.innerHeight,
          r = {
            offset: e.getAttribute("data-aos-offset"),
            anchor: e.getAttribute("data-aos-anchor"),
            anchorPlacement: e.getAttribute("data-aos-anchor-placement")
          };
        switch (r.offset && !isNaN(r.offset) && (s = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), i = (0, n.default)(e).top, r.anchorPlacement) {
          case "top-bottom":
            break;
          case "center-bottom":
            i += e.offsetHeight / 2;
            break;
          case "bottom-bottom":
            i += e.offsetHeight;
            break;
          case "top-center":
            i += a / 2;
            break;
          case "bottom-center":
            i += a / 2 + e.offsetHeight;
            break;
          case "center-center":
            i += a / 2 + e.offsetHeight / 2;
            break;
          case "top-top":
            i += a;
            break;
          case "bottom-top":
            i += e.offsetHeight + a;
            break;
          case "center-top":
            i += e.offsetHeight / 2 + a
        }
        return r.anchorPlacement || r.offset || isNaN(t) || (s = t), i + s
      }
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = function(e) {
        for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)
          t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0),
            i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0),
            e = e.offsetParent;
        return {
          top: i,
          left: t
        }
      }
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = function(e) {
        return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
          return {
            node: e
          }
        })
      }
    }])
  }),
  function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Typed = t() : e.Typed = t()
  }(this, function() {
    return function(e) {
      var t = {};
      function i(n) {
        if (t[n])
          return t[n].exports;
        var s = t[n] = {
          exports: {},
          id: n,
          loaded: !1
        };
        return e[n].call(s.exports, s, s.exports, i), s.loaded = !0, s.exports
      }
      return i.m = e, i.c = t, i.p = "", i(0)
    }([function(e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function() {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
              n.configurable = !0,
            "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, i, n) {
          return i && e(t.prototype, i), n && e(t, n), t
        }
      }();
      var s = i(1),
        a = i(3),
        r = function() {
          function e(t, i) {
            !function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            }(this, e),
              s.initializer.load(this, i, t),
              this.begin()
          }
          return n(e, [{
            key: "toggle",
            value: function() {
              this.pause.status ? this.start() : this.stop()
            }
          }, {
            key: "stop",
            value: function() {
              this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
            }
          }, {
            key: "start",
            value: function() {
              this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
            }
          }, {
            key: "destroy",
            value: function() {
              this.reset(!1),
                this.options.onDestroy(this)
            }
          }, {
            key: "reset",
            value: function() {
              var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
              clearInterval(this.timeout),
                this.replaceText(""),
              this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null),
                this.strPos = 0,
                this.arrayPos = 0,
                this.curLoop = 0,
              e && (this.insertCursor(), this.options.onReset(this), this.begin())
            }
          }, {
            key: "begin",
            value: function() {
              var e = this;
              this.options.onBegin(this),
                this.typingComplete = !1,
                this.shuffleStringsIfNeeded(this),
                this.insertCursor(),
              this.bindInputFocusEvents && this.bindFocusEvents(),
                this.timeout = setTimeout(function() {
                  e.currentElContent && 0 !== e.currentElContent.length ? e.backspace(e.currentElContent, e.currentElContent.length) : e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                }, this.startDelay)
            }
          }, {
            key: "typewrite",
            value: function(e, t) {
              var i = this;
              this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
              var n = this.humanizer(this.typeSpeed),
                s = 1;
              !0 !== this.pause.status ? this.timeout = setTimeout(function() {
                t = a.htmlParser.typeHtmlChars(e, t, i);
                var n = 0,
                  r = e.substr(t);
                if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                  var o = 1;
                  o += (r = /\d+/.exec(r)[0]).length,
                    n = parseInt(r),
                    i.temporaryPause = !0,
                    i.options.onTypingPaused(i.arrayPos, i),
                    e = e.substring(0, t) + e.substring(t + o),
                    i.toggleBlinking(!0)
                }
                if ("`" === r.charAt(0)) {
                  for (; "`" !== e.substr(t + s).charAt(0) && !(t + ++s > e.length);)
                    ;
                  var l = e.substring(0, t),
                    d = e.substring(l.length + 1, t + s),
                    u = e.substring(t + s + 1);
                  e = l + d + u,
                    s--
                }
                i.timeout = setTimeout(function() {
                  i.toggleBlinking(!1),
                    t >= e.length ? i.doneTyping(e, t) : i.keepTyping(e, t, s),
                  i.temporaryPause && (i.temporaryPause = !1, i.options.onTypingResumed(i.arrayPos, i))
                }, n)
              }, n) : this.setPauseStatus(e, t, !0)
            }
          }, {
            key: "keepTyping",
            value: function(e, t, i) {
              0 === t && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)),
                t += i;
              var n = e.substr(0, t);
              this.replaceText(n),
                this.typewrite(e, t)
            }
          }, {
            key: "doneTyping",
            value: function(e, t) {
              var i = this;
              this.options.onStringTyped(this.arrayPos, this),
                this.toggleBlinking(!0),
              this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                i.backspace(e, t)
              }, this.backDelay))
            }
          }, {
            key: "backspace",
            value: function(e, t) {
              var i = this;
              if (!0 !== this.pause.status) {
                if (this.fadeOut)
                  return this.initFadeOut();
                this.toggleBlinking(!1);
                var n = this.humanizer(this.backSpeed);
                this.timeout = setTimeout(function() {
                  t = a.htmlParser.backSpaceHtmlChars(e, t, i);
                  var n = e.substr(0, t);
                  if (i.replaceText(n), i.smartBackspace) {
                    var s = i.strings[i.arrayPos + 1];
                    s && n === s.substr(0, t) ? i.stopNum = t : i.stopNum = 0
                  }
                  t > i.stopNum ? (t--, i.backspace(e, t)) : t <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.options.onLastStringBackspaced(), i.shuffleStringsIfNeeded(), i.begin()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], t))
                }, n)
              } else
                this.setPauseStatus(e, t, !0)
            }
          }, {
            key: "complete",
            value: function() {
              this.options.onComplete(this),
                this.loop ? this.curLoop++ : this.typingComplete = !0
            }
          }, {
            key: "setPauseStatus",
            value: function(e, t, i) {
              this.pause.typewrite = i,
                this.pause.curString = e,
                this.pause.curStrPos = t
            }
          }, {
            key: "toggleBlinking",
            value: function(e) {
              this.cursor && (this.pause.status || this.cursorBlinking !== e && (this.cursorBlinking = e, e ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
            }
          }, {
            key: "humanizer",
            value: function(e) {
              return Math.round(Math.random() * e / 2) + e
            }
          }, {
            key: "shuffleStringsIfNeeded",
            value: function() {
              this.shuffle && (this.sequence = this.sequence.sort(function() {
                return Math.random() - .5
              }))
            }
          }, {
            key: "initFadeOut",
            value: function() {
              var e = this;
              return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
                e.arrayPos++,
                  e.replaceText(""),
                  e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), e.arrayPos = 0)
              }, this.fadeOutDelay)
            }
          }, {
            key: "replaceText",
            value: function(e) {
              this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
            }
          }, {
            key: "bindFocusEvents",
            value: function() {
              var e = this;
              this.isInput && (this.el.addEventListener("focus", function(t) {
                e.stop()
              }), this.el.addEventListener("blur", function(t) {
                e.el.value && 0 !== e.el.value.length || e.start()
              }))
            }
          }, {
            key: "insertCursor",
            value: function() {
              this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
            }
          }]), e
        }();
      t.default = r,
        e.exports = t.default
    }, function(e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
          }
          return e
        },
        s = function() {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              n.enumerable = n.enumerable || !1,
                n.configurable = !0,
              "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t
          }
        }();
      var a,
        r = i(2),
        o = (a = r) && a.__esModule ? a : {
          default: a
        },
        l = function() {
          function e() {
            !function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            }(this, e)
          }
          return s(e, [{
            key: "load",
            value: function(e, t, i) {
              if (e.el = "string" == typeof i ? document.querySelector(i) : i, e.options = n({}, o.default, t), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function(e) {
                return e.trim()
              }), "string" == typeof e.options.stringsElement ? e.stringsElement = document.querySelector(e.options.stringsElement) : e.stringsElement = e.options.stringsElement, e.stringsElement) {
                e.strings = [],
                  e.stringsElement.style.display = "none";
                var s = Array.prototype.slice.apply(e.stringsElement.children),
                  a = s.length;
                if (a)
                  for (var r = 0; r < a; r += 1) {
                    var l = s[r];
                    e.strings.push(l.innerHTML.trim())
                  }
              }
              for (var r in e.strPos = 0, e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.sequence = [], e.pause = {
                status: !1,
                typewrite: !0,
                curString: "",
                curStrPos: 0
              }, e.typingComplete = !1, e.strings)
                e.sequence[r] = r;
              e.currentElContent = this.getCurrentElContent(e),
                e.autoInsertCss = e.options.autoInsertCss,
                this.appendAnimationCss(e)
            }
          }, {
            key: "getCurrentElContent",
            value: function(e) {
              return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
            }
          }, {
            key: "appendAnimationCss",
            value: function(e) {
              if (e.autoInsertCss && (e.showCursor || e.fadeOut) && !document.querySelector("[data-typed-js-css]")) {
                var t = document.createElement("style");
                t.type = "text/css",
                  t.setAttribute("data-typed-js-css", !0);
                var i = "";
                e.showCursor && (i += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                e.fadeOut && (i += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                0 !== t.length && (t.innerHTML = i, document.body.appendChild(t))
              }
            }
          }]), e
        }();
      t.default = l;
      var d = new l;
      t.initializer = d
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        smartBackspace: !0,
        shuffle: !1,
        backDelay: 700,
        fadeOut: !1,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 500,
        loop: !1,
        loopCount: 1 / 0,
        showCursor: !0,
        cursorChar: "|",
        autoInsertCss: !0,
        attr: null,
        bindInputFocusEvents: !1,
        contentType: "html",
        onBegin: function(e) {},
        onComplete: function(e) {},
        preStringTyped: function(e, t) {},
        onStringTyped: function(e, t) {},
        onLastStringBackspaced: function(e) {},
        onTypingPaused: function(e, t) {},
        onTypingResumed: function(e, t) {},
        onReset: function(e) {},
        onStop: function(e, t) {},
        onStart: function(e, t) {},
        onDestroy: function(e) {}
      };
      t.default = i,
        e.exports = t.default
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function() {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
              n.configurable = !0,
            "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, i, n) {
          return i && e(t.prototype, i), n && e(t, n), t
        }
      }();
      var n = function() {
        function e() {
          !function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
          }(this, e)
        }
        return i(e, [{
          key: "typeHtmlChars",
          value: function(e, t, i) {
            if ("html" !== i.contentType)
              return t;
            var n = e.substr(t).charAt(0);
            if ("<" === n || "&" === n) {
              var s = "";
              for (s = "<" === n ? ">" : ";"; e.substr(t + 1).charAt(0) !== s && !(++t + 1 > e.length);)
                ;
              t++
            }
            return t
          }
        }, {
          key: "backSpaceHtmlChars",
          value: function(e, t, i) {
            if ("html" !== i.contentType)
              return t;
            var n = e.substr(t).charAt(0);
            if (">" === n || ";" === n) {
              var s = "";
              for (s = ">" === n ? "<" : "&"; e.substr(t - 1).charAt(0) !== s && !(--t < 0);)
                ;
              t--
            }
            return t
          }
        }]), e
      }();
      t.default = n;
      var s = new n;
      t.htmlParser = s
    }])
  }),
  function(e, t, i, n) {
    var s = "lazyLoadXT",
      a = "lazied",
      r = "load error",
      o = i.documentElement || i.body,
      l = {
        autoInit: !0,
        selector: "img[data-src]",
        blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        throttle: 99,
        forceLoad: t.onscroll === n || !!t.operamini || !o.getBoundingClientRect,
        loadEvent: "pageshow",
        updateEvent: "load orientationchange resize scroll touchmove focus",
        forceEvent: "lazyloadall",
        oninit: {
          removeClass: "lazy"
        },
        onshow: {
          addClass: "lazy-hidden"
        },
        onload: {
          removeClass: "lazy-hidden",
          addClass: "lazy-loaded"
        },
        onerror: {
          removeClass: "lazy-hidden"
        },
        checkDuplicates: !0
      },
      d = {
        srcAttr: "data-src",
        edgeX: 0,
        edgeY: 0,
        visibleOnly: !0
      },
      u = e(t),
      c = e.isFunction,
      h = e.extend,
      p = e.data || function(t, i) {
        return e(t).data(i)
      },
      f = [],
      m = 0,
      v = 0;
    function g(e, t) {
      return e[t] === n ? l[t] : e[t]
    }
    function y() {
      var e = t.pageYOffset;
      return e === n ? o.scrollTop : e
    }
    function b(e, t) {
      var i = l["on" + e];
      i && (c(i) ? i.call(t[0]) : (i.addClass && t.addClass(i.addClass), i.removeClass && t.removeClass(i.removeClass))),
        t.trigger("lazy" + e, [t]),
        E()
    }
    function w(t) {
      b(t.type, e(this).off(r, w))
    }
    function x(i) {
      if (f.length) {
        i = i || l.forceLoad,
          m = 1 / 0;
        var n,
          d,
          u = y(),
          h = t.innerHeight || o.clientHeight,
          v = t.innerWidth || o.clientWidth;
        for (n = 0, d = f.length; n < d; n++) {
          var g,
            x = f[n],
            T = x[0],
            E = x[s],
            C = !1,
            S = i || p(T, a) < 0;
          if (e.contains(o, T)) {
            if (i || !E.visibleOnly || T.offsetWidth || T.offsetHeight) {
              if (!S) {
                var k = T.getBoundingClientRect(),
                  M = E.edgeX,
                  P = E.edgeY;
                S = (g = k.top + u - P - h) <= u && k.bottom > -P && k.left <= v + M && k.right > -M
              }
              if (S) {
                x.on(r, w),
                  b("show", x);
                var A = E.srcAttr,
                  D = c(A) ? A(x) : T.getAttribute(A);
                D && (T.src = D),
                  C = !0
              } else
                g < m && (m = g)
            }
          } else
            C = !0;
          C && (p(T, a, 0), f.splice(n--, 1), d--)
        }
        d || b("complete", e(o))
      }
    }
    function T() {
      v > 1 ? (v = 1, x(), setTimeout(T, l.throttle)) : v = 0
    }
    function E(e) {
      f.length && (e && "scroll" === e.type && e.currentTarget === t && m >= y() || (v || setTimeout(T, 0), v = 2))
    }
    function C() {
      u.lazyLoadXT()
    }
    function S() {
      x(!0)
    }
    e[s] = h(l, d, e[s]),
      e.fn[s] = function(i) {
        var n,
          r = g(i = i || {}, "blankImage"),
          o = g(i, "checkDuplicates"),
          u = g(i, "scrollContainer"),
          c = g(i, "show"),
          m = {};
        for (n in e(u).on("scroll", E), d)
          m[n] = g(i, n);
        return this.each(function(n, d) {
          if (d === t)
            e(l.selector).lazyLoadXT(i);
          else {
            var u = o && p(d, a),
              v = e(d).data(a, c ? -1 : 1);
            if (u)
              return void E();
            r && "IMG" === d.tagName && !d.src && (d.src = r),
              v[s] = h({}, m),
              b("init", v),
              f.push(v),
              E()
          }
        })
      },
      e(i).ready(function() {
        b("start", u),
          u.on(l.updateEvent, E).on(l.forceEvent, S),
          e(i).on(l.updateEvent, E),
        l.autoInit && (u.on(l.loadEvent, C), C())
      })
  }(window.jQuery || window.Zepto || window.$, window, document),
  function(e, t, i, n) {
    var s = "lazyLoadXT",
      a = "lazied",
      r = "load error",
      o = i.documentElement || i.body,
      l = {
        autoInit: !0,
        selector: "img[data-src]",
        blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        throttle: 99,
        forceLoad: t.onscroll === n || !!t.operamini || !o.getBoundingClientRect,
        loadEvent: "pageshow",
        updateEvent: "load orientationchange resize scroll touchmove focus",
        forceEvent: "lazyloadall",
        oninit: {
          removeClass: "lazy"
        },
        onshow: {
          addClass: "lazy-hidden"
        },
        onload: {
          removeClass: "lazy-hidden",
          addClass: "lazy-loaded"
        },
        onerror: {
          removeClass: "lazy-hidden"
        },
        checkDuplicates: !0
      },
      d = {
        srcAttr: "data-src",
        edgeX: 0,
        edgeY: 0,
        visibleOnly: !0
      },
      u = e(t),
      c = e.isFunction,
      h = e.extend,
      p = e.data || function(t, i) {
        return e(t).data(i)
      },
      f = [],
      m = 0,
      v = 0;
    function g(e, t) {
      return e[t] === n ? l[t] : e[t]
    }
    function y() {
      var e = t.pageYOffset;
      return e === n ? o.scrollTop : e
    }
    function b(e, t) {
      var i = l["on" + e];
      i && (c(i) ? i.call(t[0]) : (i.addClass && t.addClass(i.addClass), i.removeClass && t.removeClass(i.removeClass))),
        t.trigger("lazy" + e, [t]),
        E()
    }
    function w(t) {
      b(t.type, e(this).off(r, w))
    }
    function x(i) {
      if (f.length) {
        i = i || l.forceLoad,
          m = 1 / 0;
        var n,
          d,
          u = y(),
          h = t.innerHeight || o.clientHeight,
          v = t.innerWidth || o.clientWidth;
        for (n = 0, d = f.length; n < d; n++) {
          var g,
            x = f[n],
            T = x[0],
            E = x[s],
            C = !1,
            S = i || p(T, a) < 0;
          if (e.contains(o, T)) {
            if (i || !E.visibleOnly || T.offsetWidth || T.offsetHeight) {
              if (!S) {
                var k = T.getBoundingClientRect(),
                  M = E.edgeX,
                  P = E.edgeY;
                S = (g = k.top + u - P - h) <= u && k.bottom > -P && k.left <= v + M && k.right > -M
              }
              if (S) {
                x.on(r, w),
                  b("show", x);
                var A = E.srcAttr,
                  D = c(A) ? A(x) : T.getAttribute(A);
                D && (T.src = D),
                  C = !0
              } else
                g < m && (m = g)
            }
          } else
            C = !0;
          C && (p(T, a, 0), f.splice(n--, 1), d--)
        }
        d || b("complete", e(o))
      }
    }
    function T() {
      v > 1 ? (v = 1, x(), setTimeout(T, l.throttle)) : v = 0
    }
    function E(e) {
      f.length && (e && "scroll" === e.type && e.currentTarget === t && m >= y() || (v || setTimeout(T, 0), v = 2))
    }
    function C() {
      u.lazyLoadXT()
    }
    function S() {
      x(!0)
    }
    e[s] = h(l, d, e[s]),
      e.fn[s] = function(i) {
        var n,
          r = g(i = i || {}, "blankImage"),
          o = g(i, "checkDuplicates"),
          u = g(i, "scrollContainer"),
          c = g(i, "show"),
          m = {};
        for (n in e(u).on("scroll", E), d)
          m[n] = g(i, n);
        return this.each(function(n, d) {
          if (d === t)
            e(l.selector).lazyLoadXT(i);
          else {
            var u = o && p(d, a),
              v = e(d).data(a, c ? -1 : 1);
            if (u)
              return void E();
            r && "IMG" === d.tagName && !d.src && (d.src = r),
              v[s] = h({}, m),
              b("init", v),
              f.push(v),
              E()
          }
        })
      },
      e(i).ready(function() {
        b("start", u),
          u.on(l.updateEvent, E).on(l.forceEvent, S),
          e(i).on(l.updateEvent, E),
        l.autoInit && (u.on(l.loadEvent, C), C())
      })
  }(window.jQuery || window.Zepto || window.$, window, document),
  function(e) {
    var t = e.lazyLoadXT;
    t.selector += ",video,iframe[data-src]",
      t.videoPoster = "data-poster",
      e(document).on("lazyshow", "video", function(i, n) {
        var s = n.lazyLoadXT.srcAttr,
          a = e.isFunction(s),
          r = !1;
        n.attr("poster", n.attr(t.videoPoster)),
          n.children("source,track").each(function(t, i) {
            var n = e(i),
              o = a ? s(n) : n.attr(s);
            o && (n.attr("src", o), r = !0)
          }),
        r && this.load()
      })
  }(window.jQuery || window.Zepto || window.$),
  function(e) {
    var t = e.lazyLoadXT,
      i = t.bgAttr || "data-bg";
    t.selector += ",[" + i + "]",
      e(document).on("lazyshow", function(t) {
        var n = e(t.target),
          s = n.attr(i);
        s && n.css("background-image", "url('" + s + "')").removeAttr(i).triggerHandler("load")
      })
  }(window.jQuery || window.Zepto || window.$),
  function(e, t, i, n) {
    "use strict";
    var s = "countDown",
      a = {
        css_class: "countdown",
        always_show_days: !1,
        with_labels: !0,
        with_seconds: !0,
        with_separators: !0,
        with_hh_leading_zero: !0,
        with_mm_leading_zero: !0,
        with_ss_leading_zero: !0,
        label_dd: "days",
        label_hh: "hours",
        label_mm: "minutes",
        label_ss: "seconds",
        separator: ":",
        separator_days: ","
      };
    function r(t, i) {
      this.element = e(t),
        this.options = e.extend({}, a, i),
        this._defaults = a,
        this._name = s,
        this.init()
    }
    e.extend(r.prototype, {
      init: function() {
        this.element.children().length || (this.element.attr("datetime") && (this.endDate = this.parseEndDate(this.element.attr("datetime"))), void 0 === this.endDate && (this.endDate = this.parseEndDate(this.element.text())), void 0 !== this.endDate && (this.element.is("time") ? this.timeElement = this.element : (this.timeElement = e("<time></time>"), this.element.html(this.timeElement)), this.markup(), this.setTimeoutDelay = this.sToMs(1), this.daysVisible = !0, this.timeElement.on("time.elapsed", this.options.onTimeElapsed), this.timeElement.on("time.tick", this.options.onTick), this.doCountDown()))
      },
      parseEndDate: function(e) {
        var t;
        return (t = this.parseDuration(e)) instanceof Date ? t : (t = this.parseDateTime(e)) instanceof Date ? t : (t = this.parseHumanReadableDuration(e)) instanceof Date ? t : (t = Date.parse(e), isNaN(t) ? void 0 : new Date(t))
      },
      parseDuration: function(e) {
        var t,
          i,
          n,
          s,
          a,
          r,
          o = e.match(/^P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)(?:\.(\d{1,3}))?S)?$/);
        if (o)
          return i = o[1] ? this.dToMs(o[1]) : 0, n = o[2] ? this.hToMs(o[2]) : 0, s = o[3] ? this.mToMs(o[3]) : 0, a = o[4] ? this.sToMs(o[4]) : 0, r = o[5] ? parseInt(o[5], 10) : 0, (t = new Date).setTime(t.getTime() + i + n + s + a + r), t
      },
      parseDateTime: function(e) {
        var t = e.match(/^(\d{4,})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2})(?:\:(\d{2}))?(?:\.(\d{1,3}))?([Z\+\-\:\d]+)?$/);
        if (t) {
          var i,
            n,
            s,
            a,
            r,
            o,
            l,
            d,
            u = t[8] ? t[8].match(/^([\+\-])?(\d{2}):?(\d{2})$/) : void 0,
            c = 0;
          return u && (c = this.hToMs(u[2]) + this.mToMs(u[3]), c = "-" === u[1] ? c : -c), n = t[1], s = t[2] - 1, a = t[3], r = t[4] || 0, o = t[5] || 0, l = t[6] || 0, d = t[7] || 0, (i = new Date(Date.UTC(n, s, a, r, o, l, d))).setTime(i.getTime() + c), i
        }
      },
      parseHumanReadableDuration: function(e) {
        var t,
          i,
          n,
          s,
          a,
          r,
          o = e.match(/^(?:(\d+).+\s)?(\d+)[h:]\s?(\d+)[m:]?\s?(\d+)?[s]?(?:\.(\d{1,3}))?$/);
        if (o)
          return t = new Date, i = o[1] ? this.dToMs(o[1]) : 0, n = o[2] ? this.hToMs(o[2]) : 0, s = o[3] ? this.mToMs(o[3]) : 0, a = o[4] ? this.sToMs(o[4]) : 0, r = o[5] ? parseInt(o[5], 10) : 0, t.setTime(t.getTime() + i + n + s + a + r), t
      },
      sToMs: function(e) {
        return 1e3 * parseInt(e, 10)
      },
      mToMs: function(e) {
        return 60 * parseInt(e, 10) * 1e3
      },
      hToMs: function(e) {
        return 60 * parseInt(e, 10) * 60 * 1e3
      },
      dToMs: function(e) {
        return 24 * parseInt(e, 10) * 60 * 60 * 1e3
      },
      msToS: function(e) {
        return parseInt(e / 1e3 % 60, 10)
      },
      msToM: function(e) {
        return parseInt(e / 1e3 / 60 % 60, 10)
      },
      msToH: function(e) {
        return parseInt(e / 1e3 / 60 / 60 % 24, 10)
      },
      msToD: function(e) {
        return parseInt(e / 1e3 / 60 / 60 / 24, 10)
      },
      markup: function() {
        var e = ['<span class="item item-dd">', '<span class="dd"></span>', '<span class="label label-dd">', this.options.label_dd, "</span>", "</span>", '<span class="separator separator-dd">', this.options.separator_days, "</span>", '<span class="item item-hh">', '<span class="hh-1"></span>', '<span class="hh-2"></span>', '<span class="label label-hh">', this.options.label_hh, "</span>", "</span>", '<span class="separator">', this.options.separator, "</span>", '<span class="item item-mm">', '<span class="mm-1"></span>', '<span class="mm-2"></span>', '<span class="label label-mm">', this.options.label_mm, "</span>", "</span>", '<span class="separator">', this.options.separator, "</span>", '<span class="item item-ss">', '<span class="ss-1"></span>', '<span class="ss-2"></span>', '<span class="label label-ss">', this.options.label_ss, "</span>", "</span>"];
        this.timeElement.html(e.join("")),
        this.options.with_labels || this.timeElement.find(".label").remove(),
        this.options.with_separators || this.timeElement.find(".separator").remove(),
        this.options.with_seconds || (this.timeElement.find(".item-ss").remove(), this.timeElement.find(".separator").last().remove()),
          this.item_dd = this.timeElement.find(".item-dd"),
          this.separator_dd = this.timeElement.find(".separator-dd"),
          this.remaining_dd = this.timeElement.find(".dd"),
          this.remaining_hh1 = this.timeElement.find(".hh-1"),
          this.remaining_hh2 = this.timeElement.find(".hh-2"),
          this.remaining_mm1 = this.timeElement.find(".mm-1"),
          this.remaining_mm2 = this.timeElement.find(".mm-2"),
          this.remaining_ss1 = this.timeElement.find(".ss-1"),
          this.remaining_ss2 = this.timeElement.find(".ss-2"),
          this.timeElement.addClass(this.options.css_class)
      },
      doCountDown: function() {
        var e = this.endDate.getTime() - (new Date).getTime(),
          i = this.msToS(e),
          n = this.msToM(e),
          s = this.msToH(e),
          a = this.msToD(e);
        if (e <= 0 && (i = n = s = a = 0), this.displayRemainingTime({
          ss: i < 10 ? (this.options.with_ss_leading_zero ? "0" : " ") + i.toString() : i.toString(),
          mm: n < 10 ? (this.options.with_mm_leading_zero ? "0" : " ") + n.toString() : n.toString(),
          hh: s < 10 ? (this.options.with_hh_leading_zero ? "0" : " ") + s.toString() : s.toString(),
          dd: a.toString()
        }), this.options.with_seconds || 0 !== a || 0 !== n || 0 !== s || (i = 0), 0 === a && 0 === n && 0 === s && 0 === i)
          return this.timeElement.trigger("time.elapsed");
        var r = this;
        return t.setTimeout(function() {
          r.doCountDown()
        }, r.setTimeoutDelay), this.timeElement.trigger("time.tick", e)
      },
      displayRemainingTime: function(e) {
        var t = [];
        t.push("P"),
        "0" !== e.dd && t.push(e.dd, "D"),
          t.push("T", e.hh, "H", e.mm, "M"),
        this.options.with_seconds && t.push(e.ss, "S"),
          this.timeElement.attr("datetime", t.join("")),
        this.daysVisible && !this.options.always_show_days && "0" === e.dd && (this.item_dd.remove(), this.separator_dd.remove(), this.daysVisible = !1),
          this.remaining_dd.text(e.dd),
          this.remaining_hh1.text(e.hh[0].trim()),
          this.remaining_hh2.text(e.hh[1]),
          this.remaining_mm1.text(e.mm[0].trim()),
          this.remaining_mm2.text(e.mm[1]),
          this.remaining_ss1.text(e.ss[0].trim()),
          this.remaining_ss2.text(e.ss[1])
      }
    }),
      e.fn[s] = function(t) {
        var i,
          n = arguments;
        return void 0 === t || "object" == typeof t ? this.each(function() {
          e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new r(this, t))
        }) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each(function() {
          var a = e.data(this, "plugin_" + s);
          a instanceof r && "function" == typeof a[t] && (i = a[t].apply(a, Array.prototype.slice.call(n, 1))),
          "destroy" === t && e.data(this, "plugin_" + s, null)
        }), void 0 !== i ? i : this) : void 0
      }
  }(window.jQuery, window, document),
  $(document).ready(function() {
    window.HTMLGUN = {
      fnScroll: function(e, t) {
        if (e && e.length)
          return $("html, body").animate({
            scrollTop: e.offset().top - (t || 50)
          }, 1e3), !1
      },
      fixSliderHeight: function(e) {
        if (e) {
          var t = $(`#fixCss${e}`);
          t.length ? t.empty() : (t = $(`<style id="fixCss${e}" />`), $("head").append(t));
          var i = "#" + e + " .swiper-slide {height: " + $("#" + e).find(".swiper-wrapper").height() + "px !important;}";
          t.html(i)
        }
      },
      skyFullOfStars: function() {
        var e = ["#f5d76e", "#f7ca18", "#f4d03f", "#ececec", "#ecf0f1", "#a2ded0"],
          t = 100;
        window.innerWidth < 768 && (t = 50);
        for (var i = 0; i <= t; i++) {
          var n = 5 * Math.random(),
            s = e[parseInt(4 * Math.random())];
          $("#starsBox").prepend('<span style=" width: ' + n + "px; height: " + n + "px; top: " + 100 * Math.random() + "%; left: " + 100 * Math.random() + "%; background: " + s + "; box-shadow: 0 0 " + 10 * Math.random() + "px" + s + ';"></span>')
        }
        setTimeout(function() {
          $("#starsBox span").each(function() {
            $(this).css("top", 100 * Math.random() + "%").css("left", 100 * Math.random() + "%")
          })
        }, 1),
          setInterval(function() {
            $("#starsBox span").each(function() {
              $(this).css("top", 100 * Math.random() + "%").css("left", 100 * Math.random() + "%")
            })
          }, 1e5)
      },
      init: function() {
        var e = this;
        $('a[href*="#"].link-scroll').on("click", function() {
          if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash).length ? $(this.hash) : $("[name=" + this.hash.slice(1) + "]");
            return e.fnScroll(t), !1
          }
        }),
          $("#siteNav .nav-link").on("click", function() {
            $("#siteNav").collapse("hide")
          }),
          new Swiper("#semSlider", {
            pagination: {
              el: ".swiper-pagination-sem",
              clickable: !0,
              renderBullet: function(e, t) {
                return '<span class="' + t + '">Học kỳ ' + (e + 1) + "</span>"
              }
            },
            slidesPerView: 1,
            spaceBetween: 10,
            lazy: !0,
            on: {
              init: function() {
                setTimeout(function() {
                  e.fixSliderHeight("semSlider")
                }, 200)
              }
            }
          }),
          new Swiper("#gallery", {
            navigation: {
              nextEl: ".swiper-button-gallery.swiper-button-next",
              prevEl: ".swiper-button-gallery.swiper-button-prev"
            },
            loop: !0,
            slidesPerView: 1,
            spaceBetween: 10,
            lazy: !0,
            breakpoints: {
              768: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }
          }),
          new Swiper("#testimonials", {
            navigation: {
              nextEl: ".swiper-button-testimonials.swiper-button-next",
              prevEl: ".swiper-button-testimonials.swiper-button-prev"
            },
            loop: !0,
            lazy: !0,
            slidesPerView: 1,
            spaceBetween: 10,
            breakpoints: {
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              }
            },
            on: {
              init: function() {
                setTimeout(function() {
                  e.fixSliderHeight("testimonials")
                }, 200)
              }
            }
          }),
          $(window).scroll(function() {
            $(".btn-scroll-top").toggleClass("visible", $(this).scrollTop() > 100)
          }),
          new Typed("#bannerTyping", {
            strings: ["Web - App - Game - Software"],
            typeSpeed: 100,
            loop: !0,
            backSpeed: 20,
            backDelay: 5e3
          }),
          AOS.init({
            easing: "ease-in-out-sine",
            duration: 1e3,
            once: !0
          }),
          e.skyFullOfStars(),
          $("#countdown").countDown({
            with_separators: !1
          })
      }
    },
      HTMLGUN.init()
  });

