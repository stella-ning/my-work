!
function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    }: t(e)
} ("undefined" != typeof window ? window: this,
function(C, e) {
    var t = [],
    T = C.document,
    c = t.slice,
    g = t.concat,
    a = t.push,
    i = t.indexOf,
    n = {},
    r = n.toString,
    h = n.hasOwnProperty,
    m = {},
    o = "2.2.4",
    E = function(e, t) {
        return new E.fn.init(e, t)
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    u = /^-ms-/,
    l = /-([\da-z])/gi,
    f = function(e, t) {
        return t.toUpperCase()
    };
    function d(e) {
        var t = !!e && "length" in e && e.length,
        n = E.type(e);
        return "function" !== n && !E.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: o,
        constructor: E,
        selector: "",
        length: 0,
        toArray: function() {
            return c.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this,
            function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (e < 0 ? t: 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: t.sort,
        splice: t.splice
    },
    E.extend = E.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {},
        a++), "object" == typeof s || E.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++) if (null != (e = arguments[a])) for (t in e) n = s[t],
        s !== (r = e[t]) && (l && r && (E.isPlainObject(r) || (i = E.isArray(r))) ? (o = i ? (i = !1, n && E.isArray(n) ? n: []) : n && E.isPlainObject(n) ? n: {},
        s[t] = E.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    },
    E.extend({
        expando: "jQuery" + (o + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === E.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return ! E.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== E.type(e) || e.nodeType || E.isWindow(e)) return ! 1;
            if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype || {},
            "isPrototypeOf")) return ! 1;
            for (t in e);
            return void 0 === t || h.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object": typeof e
        },
        globalEval: function(e) {
            var t, n = eval; (e = E.trim(e)) && (1 === e.indexOf("use strict") ? ((t = T.createElement("script")).text = e, T.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(u, "ms-").replace(l, f)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "": (e + "").replace(s, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length,
            r = 0,
            i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) ! t(e[i], i) !== s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
            s = [];
            if (d(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return g.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n),
            E.isFunction(e) ? (r = c.call(arguments, 2), (i = function() {
                return e.apply(t || this, r.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || E.guid++, i) : void 0
        },
        now: Date.now,
        support: m
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        var e, h, x, o, i, g, f, m, w, u, l, A, C, s, T, v, a, c, y, E = "sizzle" + 1 * new Date,
        b = n.document,
        S = 0,
        r = 0,
        d = ie(),
        p = ie(),
        k = ie(),
        N = function(e, t) {
            return e === t && (l = !0),
            0
        },
        j = {}.hasOwnProperty,
        t = [],
        D = t.pop,
        L = t.push,
        M = t.push,
        q = t.slice,
        O = function(e, t) {
            for (var n = 0,
            r = e.length; n < r; n++) if (e[n] === t) return n;
            return - 1
        },
        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        I = "[\\x20\\t\\r\\n\\f]",
        P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        $ = "\\[" + I + "*(" + P + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + I + "*\\]",
        R = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
        F = new RegExp(I + "+", "g"),
        B = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
        z = new RegExp("^" + I + "*," + I + "*"),
        W = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
        _ = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
        Q = new RegExp(R),
        U = new RegExp("^" + P + "$"),
        V = {
            ID: new RegExp("^#(" + P + ")"),
            CLASS: new RegExp("^\\.(" + P + ")"),
            TAG: new RegExp("^(" + P + "|[*])"),
            ATTR: new RegExp("^" + $),
            PSEUDO: new RegExp("^" + R),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + H + ")$", "i"),
            needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
        },
        X = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = /'|\\/g,
        ee = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
        te = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t: r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        ne = function() {
            A()
        };
        try {
            M.apply(t = q.call(b.childNodes), b.childNodes),
            t[b.childNodes.length].nodeType
        } catch(e) {
            M = {
                apply: t.length ?
                function(e, t) {
                    L.apply(e, q.call(t))
                }: function(e, t) {
                    for (var n = e.length,
                    r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        function re(e, t, n, r) {
            var i, o, s, a, u, l, c, f, d = t && t.ownerDocument,
            p = t ? t.nodeType: 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t: b) !== C && A(t), t = t || C, T)) {
                if (11 !== p && (l = J.exec(e))) if (i = l[1]) {
                    if (9 === p) {
                        if (! (s = t.getElementById(i))) return n;
                        if (s.id === i) return n.push(s),
                        n
                    } else if (d && (s = d.getElementById(i)) && y(t, s) && s.id === i) return n.push(s),
                    n
                } else {
                    if (l[2]) return M.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((i = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(i)),
                    n
                }
                if (h.qsa && !k[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p) d = t,
                    f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(Z, "\\$&") : t.setAttribute("id", a = E), o = (c = g(e)).length, u = U.test(a) ? "#" + a: "[id='" + a + "']"; o--;) c[o] = u + " " + he(c[o]);
                        f = c.join(","),
                        d = K.test(e) && de(t.parentNode) || t
                    }
                    if (f) try {
                        return M.apply(n, d.querySelectorAll(f)),
                        n
                    } catch(e) {} finally {
                        a === E && t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace(B, "$1"), t, n, r)
        }
        function ie() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function oe(e) {
            return e[E] = !0,
            e
        }
        function se(e) {
            var t = C.createElement("div");
            try {
                return !! e(t)
            } catch(e) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ae(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
        }
        function ue(e, t) {
            var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function le(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function ce(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function fe(s) {
            return oe(function(o) {
                return o = +o,
                oe(function(e, t) {
                    for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function de(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = re.support = {},
        i = re.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !! t && "HTML" !== t.nodeName
        },
        A = re.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e: b;
            return r !== C && 9 === r.nodeType && r.documentElement && (s = (C = r).documentElement, T = !i(C), (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ne, !1) : n.attachEvent && n.attachEvent("onunload", ne)), h.attributes = se(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), h.getElementsByTagName = se(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }), h.getElementsByClassName = Y.test(C.getElementsByClassName), h.getById = se(function(e) {
                return s.appendChild(e).id = E,
                !C.getElementsByName || !C.getElementsByName(E).length
            }), h.getById ? (x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && T) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            },
            x.filter.ID = function(e) {
                var t = e.replace(ee, te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function(e) {
                var n = e.replace(ee, te);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }), x.find.TAG = h.getElementsByTagName ?
            function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
            }: function(e, t) {
                var n, r = [],
                i = 0,
                o = t.getElementsByTagName(e);
                if ("*" !== e) return o;
                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                return r
            },
            x.find.CLASS = h.getElementsByClassName &&
            function(e, t) {
                return void 0 !== t.getElementsByClassName && T ? t.getElementsByClassName(e) : void 0
            },
            a = [], v = [], (h.qsa = Y.test(C.querySelectorAll)) && (se(function(e) {
                s.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + H + ")"),
                e.querySelectorAll("[id~=" + E + "-]").length || v.push("~="),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + E + "+*").length || v.push(".#.+[+~]")
            }), se(function(e) {
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + I + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })), (h.matchesSelector = Y.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && se(function(e) {
                h.disconnectedMatch = c.call(e, "div"),
                c.call(e, "[s!='']:x"),
                a.push("!=", R)
            }), v = v.length && new RegExp(v.join("|")), a = a.length && new RegExp(a.join("|")), t = Y.test(s.compareDocumentPosition), y = t || Y.test(s.contains) ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            N = t ?
            function(e, t) {
                if (e === t) return l = !0,
                0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === b && y(b, e) ? -1 : t === C || t.ownerDocument === b && y(b, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & n ? -1 : 1)
            }: function(e, t) {
                if (e === t) return l = !0,
                0;
                var n, r = 0,
                i = e.parentNode,
                o = t.parentNode,
                s = [e],
                a = [t];
                if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? O(u, e) - O(u, t) : 0;
                if (i === o) return ue(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (; s[r] === a[r];) r++;
                return r ? ue(s[r], a[r]) : s[r] === b ? -1 : a[r] === b ? 1 : 0
            }),
            C
        },
        re.matches = function(e, t) {
            return re(e, null, null, t)
        },
        re.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== C && A(e), t = t.replace(_, "='$1']"), h.matchesSelector && T && !k[t + " "] && (!a || !a.test(t)) && (!v || !v.test(t))) try {
                var n = c.call(e, t);
                if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch(e) {}
            return 0 < re(t, C, null, [e]).length
        },
        re.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && A(e),
            y(e, t)
        },
        re.attr = function(e, t) { (e.ownerDocument || e) !== C && A(e);
            var n = x.attrHandle[t.toLowerCase()],
            r = n && j.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
            return void 0 !== r ? r: h.attributes || !T ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
        },
        re.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        re.uniqueSort = function(e) {
            var t, n = [],
            r = 0,
            i = 0;
            if (l = !h.detectDuplicates, u = !h.sortStable && e.slice(0), e.sort(N), l) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return u = null,
            e
        },
        o = re.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += o(t);
            return n
        },
        (x = re.selectors = {
            cacheLength: 50,
            createPseudo: oe,
            match: V,
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
                    return e[1] = e[1].replace(ee, te),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && Q.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ee, te).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = d[e + " "];
                    return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && d(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = re.attr(e, n);
                        return null == t ? "!=" === r: !r || (t += "", "=" === r ? t === i: "!=" === r ? t !== i: "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice( - i.length) === i: "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, m) {
                    var v = "nth" !== h.slice(0, 3),
                    y = "last" !== h.slice( - 4),
                    b = "of-type" === e;
                    return 1 === g && 0 === m ?
                    function(e) {
                        return !! e.parentNode
                    }: function(e, t, n) {
                        var r, i, o, s, a, u, l = v !== y ? "nextSibling": "previousSibling",
                        c = e.parentNode,
                        f = b && e.nodeName.toLowerCase(),
                        d = !n && !b,
                        p = !1;
                        if (c) {
                            if (v) {
                                for (; l;) {
                                    for (s = e; s = s[l];) if (b ? s.nodeName.toLowerCase() === f: 1 === s.nodeType) return ! 1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return ! 0
                            }
                            if (u = [y ? c.firstChild: c.lastChild], y && d) {
                                for (p = (a = (r = (i = (o = (s = c)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], s = a && c.childNodes[a]; s = ++a && s && s[l] || (p = a = 0) || u.pop();) if (1 === s.nodeType && ++p && s === e) {
                                    i[h] = [S, a, p];
                                    break
                                }
                            } else if (d && (p = a = (r = (i = (o = (s = e)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === p) for (; (s = ++a && s && s[l] || (p = a = 0) || u.pop()) && ((b ? s.nodeName.toLowerCase() !== f: 1 !== s.nodeType) || !++p || (d && ((i = (o = s[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [S, p]), s !== e)););
                            return (p -= m) === g || p % g == 0 && 0 <= p / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                    return s[E] ? s(o) : 1 < s.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                        for (var n, r = s(e, o), i = r.length; i--;) e[n = O(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return s(e, 0, t)
                    }) : s
                }
            },
            pseudos: {
                not: oe(function(e) {
                    var r = [],
                    i = [],
                    a = f(e.replace(B, "$1"));
                    return a[E] ? oe(function(e, t, n, r) {
                        for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        a(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: oe(function(t) {
                    return function(e) {
                        return 0 < re(t, e).length
                    }
                }),
                contains: oe(function(t) {
                    return t = t.replace(ee, te),
                    function(e) {
                        return - 1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                    }
                }),
                lang: oe(function(n) {
                    return U.test(n || "") || re.error("unsupported lang: " + n),
                    n = n.replace(ee, te).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = T ? e.lang: e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while (( e = e . parentNode ) && 1 === e.nodeType);
                        return ! 1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === s
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return ! 1 === e.disabled
                },
                disabled: function(e) {
                    return ! 0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! x.pseudos.empty(e)
                },
                header: function(e) {
                    return G.test(e.nodeName)
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
                first: fe(function() {
                    return [0]
                }),
                last: fe(function(e, t) {
                    return [t - 1]
                }),
                eq: fe(function(e, t, n) {
                    return [n < 0 ? n + t: n]
                }),
                even: fe(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: fe(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: fe(function(e, t, n) {
                    for (var r = n < 0 ? n + t: n; 0 <= --r;) e.push(r);
                    return e
                }),
                gt: fe(function(e, t, n) {
                    for (var r = n < 0 ? n + t: n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[e] = le(e);
        for (e in {
            submit: !0,
            reset: !0
        }) x.pseudos[e] = ce(e);
        function pe() {}
        function he(e) {
            for (var t = 0,
            n = e.length,
            r = ""; t < n; t++) r += e[t].value;
            return r
        }
        function ge(a, e, t) {
            var u = e.dir,
            l = t && "parentNode" === u,
            c = r++;
            return e.first ?
            function(e, t, n) {
                for (; e = e[u];) if (1 === e.nodeType || l) return a(e, t, n)
            }: function(e, t, n) {
                var r, i, o, s = [S, c];
                if (n) {
                    for (; e = e[u];) if ((1 === e.nodeType || l) && a(e, t, n)) return ! 0
                } else for (; e = e[u];) if (1 === e.nodeType || l) {
                    if ((r = (i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[u]) && r[0] === S && r[1] === c) return s[2] = r[2];
                    if ((i[u] = s)[2] = a(e, t, n)) return ! 0
                }
            }
        }
        function me(i) {
            return 1 < i.length ?
            function(e, t, n) {
                for (var r = i.length; r--;) if (!i[r](e, t, n)) return ! 1;
                return ! 0
            }: i[0]
        }
        function ve(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
            return s
        }
        function ye(p, h, g, m, v, e) {
            return m && !m[E] && (m = ye(m)),
            v && !v[E] && (v = ye(v, e)),
            oe(function(e, t, n, r) {
                var i, o, s, a = [],
                u = [],
                l = t.length,
                c = e ||
                function(e, t, n) {
                    for (var r = 0,
                    i = t.length; r < i; r++) re(e, t[r], n);
                    return n
                } (h || "*", n.nodeType ? [n] : n, []),
                f = !p || !e && h ? c: ve(c, a, p, n, r),
                d = g ? v || (e ? p: l || m) ? [] : t: f;
                if (g && g(f, d, n, r), m) for (i = ve(d, u), m(i, [], n, r), o = i.length; o--;)(s = i[o]) && (d[u[o]] = !(f[u[o]] = s));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (i = [], o = d.length; o--;)(s = d[o]) && i.push(f[o] = s);
                            v(null, d = [], i, r)
                        }
                        for (o = d.length; o--;)(s = d[o]) && -1 < (i = v ? O(e, s) : a[o]) && (e[i] = !(t[i] = s))
                    }
                } else d = ve(d === t ? d.splice(l, d.length) : d),
                v ? v(null, t, d, r) : M.apply(t, d)
            })
        }
        function be(e) {
            for (var i, t, n, r = e.length,
            o = x.relative[e[0].type], s = o || x.relative[" "], a = o ? 1 : 0, u = ge(function(e) {
                return e === i
            },
            s, !0), l = ge(function(e) {
                return - 1 < O(i, e)
            },
            s, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }]; a < r; a++) if (t = x.relative[e[a].type]) c = [ge(me(c), t)];
            else {
                if ((t = x.filter[e[a].type].apply(null, e[a].matches))[E]) {
                    for (n = ++a; n < r && !x.relative[e[n].type]; n++);
                    return ye(1 < a && me(c), 1 < a && he(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*": ""
                    })).replace(B, "$1"), t, a < n && be(e.slice(a, n)), n < r && be(e = e.slice(n)), n < r && he(e))
                }
                c.push(t)
            }
            return me(c)
        }
        return pe.prototype = x.filters = x.pseudos,
        x.setFilters = new pe,
        g = re.tokenize = function(e, t) {
            var n, r, i, o, s, a, u, l = p[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (s = e, a = [], u = x.preFilter; s;) {
                for (o in n && !(r = z.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = W.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(B, " ")
                }), s = s.slice(n.length)), x.filter) ! (r = V[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length: s ? re.error(e) : p(e, a).slice(0)
        },
        f = re.compile = function(e, t) {
            var n, m, v, y, b, r, i = [],
            o = [],
            s = k[e + " "];
            if (!s) {
                for (t || (t = g(e)), n = t.length; n--;)(s = be(t[n]))[E] ? i.push(s) : o.push(s); (s = k(e, (m = o, y = 0 < (v = i).length, b = 0 < m.length, r = function(e, t, n, r, i) {
                    var o, s, a, u = 0,
                    l = "0",
                    c = e && [],
                    f = [],
                    d = w,
                    p = e || b && x.find.TAG("*", i),
                    h = S += null == d ? 1 : Math.random() || .1,
                    g = p.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = p[l]); l++) {
                        if (b && o) {
                            for (s = 0, t || o.ownerDocument === C || (A(o), n = !T); a = m[s++];) if (a(o, t || C, n)) {
                                r.push(o);
                                break
                            }
                            i && (S = h)
                        }
                        y && ((o = !a && o) && u--, e && c.push(o))
                    }
                    if (u += l, y && l !== u) {
                        for (s = 0; a = v[s++];) a(c, f, t, n);
                        if (e) {
                            if (0 < u) for (; l--;) c[l] || f[l] || (f[l] = D.call(r));
                            f = ve(f)
                        }
                        M.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + v.length && re.uniqueSort(r)
                    }
                    return i && (S = h, w = d),
                    c
                },
                y ? oe(r) : r))).selector = e
            }
            return s
        },
        m = re.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
            c = !r && g(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && h.getById && 9 === t.nodeType && T && x.relative[o[1].type]) {
                    if (! (t = (x.find.ID(s.matches[0].replace(ee, te), t) || [])[0])) return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = V.needsContext.test(e) ? 0 : o.length; i--&&(s = o[i], !x.relative[a = s.type]);) if ((u = x.find[a]) && (r = u(s.matches[0].replace(ee, te), K.test(o[0].type) && de(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = r.length && he(o))) return M.apply(n, r),
                    n;
                    break
                }
            }
            return (l || f(e, c))(r, t, !T, n, !t || K.test(e) && de(t.parentNode) || t),
            n
        },
        h.sortStable = E.split("").sort(N).join("") === E,
        h.detectDuplicates = !!l,
        A(),
        h.sortDetached = se(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("div"))
        }),
        se(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ae("type|href|height|width",
        function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        h.attributes && se(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ae("value",
        function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        se(function(e) {
            return null == e.getAttribute("disabled")
        }) || ae(H,
        function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
        }),
        re
    } (C);
    E.find = p,
    E.expr = p.selectors,
    E.expr[":"] = E.expr.pseudos,
    E.uniqueSort = E.unique = p.uniqueSort,
    E.text = p.getText,
    E.isXMLDoc = p.isXML,
    E.contains = p.contains;
    var v = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (i && E(e).is(n)) break;
            r.push(e)
        }
        return r
    },
    y = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    },
    b = E.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
    function A(e, n, r) {
        if (E.isFunction(n)) return E.grep(e,
        function(e, t) {
            return !! n.call(e, t, e) !== r
        });
        if (n.nodeType) return E.grep(e,
        function(e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (w.test(n)) return E.filter(n, e, r);
            n = E.filter(n, e)
        }
        return E.grep(e,
        function(e) {
            return - 1 < i.call(n, e) !== r
        })
    }
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t,
        function(e) {
            return 1 === e.nodeType
        }))
    },
    E.fn.extend({
        find: function(e) {
            var t, n = this.length,
            r = [],
            i = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                for (t = 0; t < n; t++) if (E.contains(i[t], this)) return ! 0
            }));
            for (t = 0; t < n; t++) E.find(e, i[t], r);
            return (r = this.pushStack(1 < n ? E.unique(r) : r)).selector = this.selector ? this.selector + " " + e: e,
            r
        },
        filter: function(e) {
            return this.pushStack(A(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(A(this, e || [], !0))
        },
        is: function(e) {
            return !! A(this, "string" == typeof e && b.test(e) ? E(e) : e || [], !1).length
        }
    });
    var S, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/; (E.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || S, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : E.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), E.makeArray(e, this));
        if (! (r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : k.exec(e)) || !r[1] && t) return ! t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t: T, !0)), x.test(r[1]) && E.isPlainObject(t)) for (r in t) E.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = T.getElementById(r[2])) && i.parentNode && (this.length = 1, this[0] = i),
        this.context = T,
        this.selector = e,
        this
    }).prototype = E.fn,
    S = E(T);
    var N = /^(?:parents|prev(?:Until|All))/,
    j = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function D(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this),
            n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return ! 0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0,
            i = this.length,
            o = [], s = b.test(e) || "string" != typeof e ? E(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return v(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return v(e, "parentNode", n)
        },
        next: function(e) {
            return D(e, "nextSibling")
        },
        prev: function(e) {
            return D(e, "previousSibling")
        },
        nextAll: function(e) {
            return v(e, "nextSibling")
        },
        prevAll: function(e) {
            return v(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return v(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return v(e, "previousSibling", n)
        },
        siblings: function(e) {
            return y((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return y(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || E.merge([], e.childNodes)
        }
    },
    function(r, i) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, i, e);
            return "Until" !== r.slice( - 5) && (t = e),
            t && "string" == typeof t && (n = E.filter(t, n)),
            1 < this.length && (j[r] || E.uniqueSort(n), N.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var L, M = /\S+/g;
    function q() {
        T.removeEventListener("DOMContentLoaded", q),
        C.removeEventListener("load", q),
        E.ready()
    }
    E.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {},
        E.each(e.match(M) || [],
        function(e, t) {
            n[t] = !0
        }), n) : E.extend({},
        r);
        var i, t, o, s, a = [],
        u = [],
        l = -1,
        c = function() {
            for (s = r.once, o = i = !0; u.length; l = -1) for (t = u.shift(); ++l < a.length;) ! 1 === a[l].apply(t[0], t[1]) && r.stopOnFalse && (l = a.length, t = !1);
            r.memory || (t = !1),
            i = !1,
            s && (a = t ? [] : "")
        },
        f = {
            add: function() {
                return a && (t && !i && (l = a.length - 1, u.push(t)),
                function n(e) {
                    E.each(e,
                    function(e, t) {
                        E.isFunction(t) ? r.unique && f.has(t) || a.push(t) : t && t.length && "string" !== E.type(t) && n(t)
                    })
                } (arguments), t && !i && c()),
                this
            },
            remove: function() {
                return E.each(arguments,
                function(e, t) {
                    for (var n; - 1 < (n = E.inArray(t, a, n));) a.splice(n, 1),
                    n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < E.inArray(e, a) : 0 < a.length
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return s = u = [],
                a = t = "",
                this
            },
            disabled: function() {
                return ! a
            },
            lock: function() {
                return s = u = [],
                t || (a = t = ""),
                this
            },
            locked: function() {
                return !! s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! o
            }
        };
        return f
    },
    E.extend({
        Deferred: function(e) {
            var o = [["resolve", "done", E.Callbacks("once memory"), "resolved"], ["reject", "fail", E.Callbacks("once memory"), "rejected"], ["notify", "progress", E.Callbacks("memory")]],
            i = "pending",
            s = {
                state: function() {
                    return i
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var i = arguments;
                    return E.Deferred(function(r) {
                        E.each(o,
                        function(e, t) {
                            var n = E.isFunction(i[e]) && i[e];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && E.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === s ? r.promise() : this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? E.extend(e, s) : s
                }
            },
            a = {};
            return s.pipe = s.then,
            E.each(o,
            function(e, t) {
                var n = t[2],
                r = t[3];
                s[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                },
                o[1 ^ e][2].disable, o[2][2].lock),
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? s: this, arguments),
                    this
                },
                a[t[0] + "With"] = n.fireWith
            }),
            s.promise(a),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            var i, t, n, r = 0,
            o = c.call(arguments),
            s = o.length,
            a = 1 !== s || e && E.isFunction(e.promise) ? s: 0,
            u = 1 === a ? e: E.Deferred(),
            l = function(t, n, r) {
                return function(e) {
                    n[t] = this,
                    r[t] = 1 < arguments.length ? c.call(arguments) : e,
                    r === i ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                }
            };
            if (1 < s) for (i = new Array(s), t = new Array(s), n = new Array(s); r < s; r++) o[r] && E.isFunction(o[r].promise) ? o[r].promise().progress(l(r, t, i)).done(l(r, n, o)).fail(u.reject) : --a;
            return a || u.resolveWith(n, o),
            u.promise()
        }
    }),
    E.fn.ready = function(e) {
        return E.ready.promise().done(e),
        this
    },
    E.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? E.readyWait++:E.ready(!0)
        },
        ready: function(e) { (!0 === e ? --E.readyWait: E.isReady) || ((E.isReady = !0) !== e && 0 < --E.readyWait || (L.resolveWith(T, [E]), E.fn.triggerHandler && (E(T).triggerHandler("ready"), E(T).off("ready"))))
        }
    }),
    E.ready.promise = function(e) {
        return L || (L = E.Deferred(), "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? C.setTimeout(E.ready) : (T.addEventListener("DOMContentLoaded", q), C.addEventListener("load", q))),
        L.promise(e)
    },
    E.ready.promise();
    var O = function(e, t, n, r, i, o, s) {
        var a = 0,
        u = e.length,
        l = null == n;
        if ("object" === E.type(n)) for (a in i = !0, n) O(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0, E.isFunction(r) || (s = !0), l && (t = s ? (t.call(e, r), null) : (l = t,
        function(e, t, n) {
            return l.call(E(e), n)
        })), t)) for (; a < u; a++) t(e[a], n, s ? r: r.call(e[a], a, t(e[a], n)));
        return i ? e: l ? t.call(e) : u ? t(e[0], n) : o
    },
    H = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function I() {
        this.expando = E.expando + I.uid++
    }
    I.uid = 1,
    I.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n: Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }),
            e[this.expando]
        },
        cache: function(e) {
            if (!H(e)) return {};
            var t = e[this.expando];
            return t || (t = {},
            H(e) && (e.nodeType ? e[this.expando] = t: Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n;
            else for (r in t) i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r: this.get(e, E.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n: t)
        },
        remove: function(e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    n = (r = E.isArray(t) ? t.concat(t.map(E.camelCase)) : (i = E.camelCase(t), t in o ? [t, i] : (r = i) in o ? [r] : r.match(M) || [])).length;
                    for (; n--;) delete o[r[n]]
                } (void 0 === t || E.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var P = new I,
    $ = new I,
    R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    F = /[A-Z]/g;
    function B(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(F, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: R.test(n) ? E.parseJSON(n) : n)
            } catch(e) {}
            $.set(e, t, n)
        } else n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return $.hasData(e) || P.hasData(e)
        },
        data: function(e, t, n) {
            return $.access(e, t, n)
        },
        removeData: function(e, t) {
            $.remove(e, t)
        },
        _data: function(e, t, n) {
            return P.access(e, t, n)
        },
        _removeData: function(e, t) {
            P.remove(e, t)
        }
    }),
    E.fn.extend({
        data: function(r, e) {
            var t, n, i, o = this[0],
            s = o && o.attributes;
            if (void 0 !== r) return "object" == typeof r ? this.each(function() {
                $.set(this, r)
            }) : O(this,
            function(t) {
                var e, n;
                if (o && void 0 === t) {
                    if (void 0 !== (e = $.get(o, r) || $.get(o, r.replace(F, "-$&").toLowerCase()))) return e;
                    if (n = E.camelCase(r), void 0 !== (e = $.get(o, n))) return e;
                    if (void 0 !== (e = B(o, n, void 0))) return e
                } else n = E.camelCase(r),
                this.each(function() {
                    var e = $.get(this, n);
                    $.set(this, n, t),
                    -1 < r.indexOf("-") && void 0 !== e && $.set(this, r, t)
                })
            },
            null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = $.get(o), 1 === o.nodeType && !P.get(o, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = E.camelCase(n.slice(5)), B(o, n, i[n])));
                P.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                $.remove(this, e)
            })
        }
    }),
    E.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = P.get(e, t), n && (!r || E.isArray(n) ? r = P.access(e, t, E.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e,
            function() {
                E.dequeue(e, t)
            },
            o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return P.get(e, n) || P.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    P.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--),
            arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this: this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
            i = E.Deferred(),
            o = this,
            s = this.length,
            a = function() {--r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = P.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(),
            i.promise(t)
        }
    });
    var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    W = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
    _ = ["Top", "Right", "Bottom", "Left"],
    Q = function(e, t) {
        return e = t || e,
        "none" === E.css(e, "display") || !E.contains(e.ownerDocument, e)
    };
    function U(e, t, n, r) {
        var i, o = 1,
        s = 20,
        a = r ?
        function() {
            return r.cur()
        }: function() {
            return E.css(e, t, "")
        },
        u = a(),
        l = n && n[3] || (E.cssNumber[t] ? "": "px"),
        c = (E.cssNumber[t] || "px" !== l && +u) && W.exec(E.css(e, t));
        if (c && c[3] !== l) for (l = l || c[3], n = n || [], c = +u || 1; c /= o = o || ".5", E.style(e, t, c + l), o !== (o = a() / u) && 1 !== o && --s;);
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)),
        i
    }
    var V = /^(?:checkbox|radio)$/i,
    X = /<([\w:-]+)/,
    G = /^$|\/(?:java|ecma)script/i,
    Y = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function J(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && E.nodeName(e, t) ? E.merge([e], n) : n
    }
    function K(e, t) {
        for (var n = 0,
        r = e.length; n < r; n++) P.set(e[n], "globalEval", !t || P.get(t[n], "globalEval"))
    }
    Y.optgroup = Y.option,
    Y.tbody = Y.tfoot = Y.colgroup = Y.caption = Y.thead,
    Y.th = Y.td;
    var Z, ee, te = /<|&#?\w+;/;
    function ne(e, t, n, r, i) {
        for (var o, s, a, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) if ((o = e[p]) || 0 === o) if ("object" === E.type(o)) E.merge(d, o.nodeType ? [o] : o);
        else if (te.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (X.exec(o) || ["", ""])[1].toLowerCase(), u = Y[a] || Y._default, s.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0]; c--;) s = s.lastChild;
            E.merge(d, s.childNodes),
            (s = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];) if (r && -1 < E.inArray(o, r)) i && i.push(o);
        else if (l = E.contains(o.ownerDocument, o), s = J(f.appendChild(o), "script"), l && K(s), n) for (c = 0; o = s[c++];) G.test(o.type || "") && n.push(o);
        return f
    }
    Z = T.createDocumentFragment().appendChild(T.createElement("div")),
    (ee = T.createElement("input")).setAttribute("type", "radio"),
    ee.setAttribute("checked", "checked"),
    ee.setAttribute("name", "t"),
    Z.appendChild(ee),
    m.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked,
    Z.innerHTML = "<textarea>x</textarea>",
    m.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue;
    var re = /^key/,
    ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    oe = /^([^.]*)(?:\.(.+)|)/;
    function se() {
        return ! 0
    }
    function ae() {
        return ! 1
    }
    function ue() {
        try {
            return T.activeElement
        } catch(e) {}
    }
    function le(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n, n = void 0), t) le(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ae;
        else if (!i) return e;
        return 1 === o && (s = i, (i = function(e) {
            return E().off(e),
            s.apply(this, arguments)
        }).guid = s.guid || (s.guid = E.guid++)),
        e.each(function() {
            E.event.add(this, t, i, r, n)
        })
    }
    E.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, u, l, c, f, d, p, h, g, m = P.get(t);
            if (m) for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = E.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
            }), l = (e = (e || "").match(M) || [""]).length; l--;) p = g = (a = oe.exec(e[l]) || [])[1],
            h = (a[2] || "").split(".").sort(),
            p && (f = E.event.special[p] || {},
            p = (i ? f.delegateType: f.bindType) || p, f = E.event.special[p] || {},
            c = E.extend({
                type: p,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && E.expr.match.needsContext.test(i),
                namespace: h.join(".")
            },
            o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, s) || t.addEventListener && t.addEventListener(p, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), E.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, d, p, h, g, m = P.hasData(e) && P.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(M) || [""]).length; l--;) if (p = g = (a = oe.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
                    for (f = E.event.special[p] || {},
                    d = u[p = (r ? f.delegateType: f.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o],
                    !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                    s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || E.removeEvent(e, p, m.handle), delete u[p])
                } else for (p in u) E.event.remove(e, p + t[l], n, r, !0);
                E.isEmptyObject(u) && P.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = E.event.fix(e);
            var t, n, r, i, o, s = [],
            a = c.call(arguments),
            u = (P.get(this, "events") || {})[e.type] || [],
            l = E.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (s = E.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
            a = t.delegateCount,
            u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? -1 < E(i, this).index(u) : E.find(i, this, null, [u]).length),
                r[i] && r.push(o);
                r.length && s.push({
                    elem: u,
                    handlers: r
                })
            }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || T).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[E.expando]) return e;
            var t, n, r, i = e.type,
            o = e,
            s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = ie.test(i) ? this.mouseHooks: re.test(i) ? this.keyHooks: {}), r = s.props ? this.props.concat(s.props) : this.props, e = new E.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = T),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ue() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ue() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && E.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return E.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    },
    E.Event = function(e, t) {
        return this instanceof E.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? se: ae) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || E.now(), void(this[E.expando] = !0)) : new E.Event(e, t)
    },
    E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: ae,
        isPropagationStopped: ae,
        isImmediatePropagationStopped: ae,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = se,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = se,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = se,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i),
                t
            }
        }
    }),
    E.fn.extend({
        on: function(e, t, n, r) {
            return le(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return le(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
            E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
            this;
            if ("object" != typeof e) return ! 1 !== t && "function" != typeof t || (n = t, t = void 0),
            !1 === n && (n = ae),
            this.each(function() {
                E.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        }
    });
    var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    fe = /<script|<style|<link/i,
    de = /checked\s*(?:[^=]|=\s*.checked.)/i,
    pe = /^true\/(.*)/,
    he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function ge(e, t) {
        return E.nodeName(e, "table") && E.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function me(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function ve(e) {
        var t = pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function ye(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (P.hasData(e) && (o = P.access(e), s = P.set(t, o), l = o.events)) for (i in delete s.handle, s.events = {},
            l) for (n = 0, r = l[i].length; n < r; n++) E.event.add(t, i, l[i][n]);
            $.hasData(e) && (a = $.access(e), u = E.extend({},
            a), $.set(t, u))
        }
    }
    function be(n, r, i, o) {
        r = g.apply([], r);
        var e, t, s, a, u, l, c = 0,
        f = n.length,
        d = f - 1,
        p = r[0],
        h = E.isFunction(p);
        if (h || 1 < f && "string" == typeof p && !m.checkClone && de.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())),
            be(t, r, i, o)
        });
        if (f && (t = (e = ne(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = E.map(J(e, "script"), me)).length; c < f; c++) u = e,
            c !== d && (u = E.clone(u, !0, !0), a && E.merge(s, J(u, "script"))),
            i.call(n[c], u, c);
            if (a) for (l = s[s.length - 1].ownerDocument, E.map(s, ve), c = 0; c < a; c++) u = s[c],
            G.test(u.type || "") && !P.access(u, "globalEval") && E.contains(l, u) && (u.src ? E._evalUrl && E._evalUrl(u.src) : E.globalEval(u.textContent.replace(he, "")))
        }
        return n
    }
    function xe(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(J(r)),
        r.parentNode && (n && E.contains(r.ownerDocument, r) && K(J(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e.replace(ce, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, s, a, u, l, c = e.cloneNode(!0),
            f = E.contains(e.ownerDocument, e);
            if (! (m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (s = J(c), r = 0, i = (o = J(e)).length; r < i; r++) a = o[r],
            u = s[r],
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && V.test(a.type) ? u.checked = a.checked: "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (t) if (n) for (o = o || J(e), s = s || J(c), r = 0, i = o.length; r < i; r++) ye(o[r], s[r]);
            else ye(e, c);
            return 0 < (s = J(c, "script")).length && K(s, !f && J(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.event.special,
            o = 0; void 0 !== (n = e[o]); o++) if (H(n)) {
                if (t = n[P.expando]) {
                    if (t.events) for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                    n[P.expando] = void 0
                }
                n[$.expando] && (n[$.expando] = void 0)
            }
        }
    }),
    E.fn.extend({
        domManip: be,
        detach: function(e) {
            return xe(this, e, !0)
        },
        remove: function(e) {
            return xe(this, e)
        },
        text: function(e) {
            return O(this,
            function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            },
            null, e, arguments.length)
        },
        append: function() {
            return be(this, arguments,
            function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ge(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return be(this, arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ge(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return be(this, arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return be(this, arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(J(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e: t,
            this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return O(this,
            function(e) {
                var t = this[0] || {},
                n = 0,
                r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !fe.test(e) && !Y[(X.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(J(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch(e) {}
                }
                t && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return be(this, arguments,
            function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(J(this)), t && t.replaceChild(e, this))
            },
            n)
        }
    }),
    E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, s) {
        E.fn[e] = function(e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this: this.clone(!0),
            E(r[o])[s](t),
            a.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var we, Ae = {
        HTML: "block",
        BODY: "block"
    };
    function Ce(e, t) {
        var n = E(t.createElement(e)).appendTo(t.body),
        r = E.css(n[0], "display");
        return n.detach(),
        r
    }
    function Te(e) {
        var t = T,
        n = Ae[e];
        return n || ("none" !== (n = Ce(e, t)) && n || ((t = (we = (we || E("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Ce(e, t), we.detach()), Ae[e] = n),
        n
    }
    var Ee = /^margin/,
    Se = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"),
    ke = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    },
    Ne = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o],
        e.style[o] = t[o];
        for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
        return i
    },
    je = T.documentElement;
    function De(e, t, n) {
        var r, i, o, s, a = e.style;
        return "" !== (s = (n = n || ke(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || E.contains(e.ownerDocument, e) || (s = E.style(e, t)),
        n && !m.pixelMarginRight() && Se.test(s) && Ee.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o),
        void 0 !== s ? s + "": s
    }
    function Le(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get: (this.get = t).apply(this, arguments)
            }
        }
    } !
    function() {
        var t, n, r, i, o = T.createElement("div"),
        s = T.createElement("div");
        if (s.style) {
            function e() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                s.innerHTML = "",
                je.appendChild(o);
                var e = C.getComputedStyle(s);
                t = "1%" !== e.top,
                i = "2px" === e.marginLeft,
                n = "4px" === e.width,
                s.style.marginRight = "50%",
                r = "4px" === e.marginRight,
                je.removeChild(o)
            }
            s.style.backgroundClip = "content-box",
            s.cloneNode(!0).style.backgroundClip = "",
            m.clearCloneStyle = "content-box" === s.style.backgroundClip,
            o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            o.appendChild(s),
            E.extend(m, {
                pixelPosition: function() {
                    return e(),
                    t
                },
                boxSizingReliable: function() {
                    return null == n && e(),
                    n
                },
                pixelMarginRight: function() {
                    return null == n && e(),
                    r
                },
                reliableMarginLeft: function() {
                    return null == n && e(),
                    i
                },
                reliableMarginRight: function() {
                    var e, t = s.appendChild(T.createElement("div"));
                    return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    t.style.marginRight = t.style.width = "0",
                    s.style.width = "1px",
                    je.appendChild(o),
                    e = !parseFloat(C.getComputedStyle(t).marginRight),
                    je.removeChild(o),
                    s.removeChild(t),
                    e
                }
            })
        }
    } ();
    var Me = /^(none|table(?!-c[ea]).+)/,
    qe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Oe = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    He = ["Webkit", "O", "Moz", "ms"],
    Ie = T.createElement("div").style;
    function Pe(e) {
        if (e in Ie) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = He.length; n--;) if ((e = He[n] + t) in Ie) return e
    }
    function $e(e, t, n) {
        var r = W.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Re(e, t, n, r, i) {
        for (var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2)"margin" === n && (s += E.css(e, n + _[o], !0, i)),
        r ? ("content" === n && (s -= E.css(e, "padding" + _[o], !0, i)), "margin" !== n && (s -= E.css(e, "border" + _[o] + "Width", !0, i))) : (s += E.css(e, "padding" + _[o], !0, i), "padding" !== n && (s += E.css(e, "border" + _[o] + "Width", !0, i)));
        return s
    }
    function Fe(e, t, n) {
        var r = !0,
        i = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = ke(e),
        s = "border-box" === E.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = De(e, t, o)) < 0 || null == i) && (i = e.style[t]), Se.test(i)) return i;
            r = s && (m.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + Re(e, t, n || (s ? "border": "content"), r, o) + "px"
    }
    function Be(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)(r = e[s]).style && (o[s] = P.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Q(r) && (o[s] = P.access(r, "olddisplay", Te(r.nodeName)))) : (i = Q(r), "none" === n && i || P.set(r, "olddisplay", i ? n: E.css(r, "display"))));
        for (s = 0; s < a; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "": "none"));
        return e
    }
    function ze(e, t, n, r, i) {
        return new ze.prototype.init(e, t, n, r, i)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = De(e, "opacity");
                        return "" === n ? "1": n
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
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = E.camelCase(t),
                u = e.style;
                return t = E.cssProps[a] || (E.cssProps[a] = Pe(a) || a),
                s = E.cssHooks[t] || E.cssHooks[a],
                void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i: u[t] : ("string" === (o = typeof n) && (i = W.exec(n)) && i[1] && (n = U(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (E.cssNumber[a] ? "": "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = E.camelCase(t);
            return t = E.cssProps[a] || (E.cssProps[a] = Pe(a) || a),
            (s = E.cssHooks[t] || E.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)),
            void 0 === i && (i = De(e, t, r)),
            "normal" === i && t in Oe && (i = Oe[t]),
            "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    E.each(["height", "width"],
    function(e, s) {
        E.cssHooks[s] = {
            get: function(e, t, n) {
                return t ? Me.test(E.css(e, "display")) && 0 === e.offsetWidth ? Ne(e, qe,
                function() {
                    return Fe(e, s, n)
                }) : Fe(e, s, n) : void 0
            },
            set: function(e, t, n) {
                var r, i = n && ke(e),
                o = n && Re(e, s, n, "border-box" === E.css(e, "boxSizing", !1, i), i);
                return o && (r = W.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = E.css(e, s)),
                $e(0, t, o)
            }
        }
    }),
    E.cssHooks.marginLeft = Le(m.reliableMarginLeft,
    function(e, t) {
        return t ? (parseFloat(De(e, "marginLeft")) || e.getBoundingClientRect().left - Ne(e, {
            marginLeft: 0
        },
        function() {
            return e.getBoundingClientRect().left
        })) + "px": void 0
    }),
    E.cssHooks.marginRight = Le(m.reliableMarginRight,
    function(e, t) {
        return t ? Ne(e, {
            display: "inline-block"
        },
        De, [e, "marginRight"]) : void 0
    }),
    E.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(i, o) {
        E.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0,
                n = {},
                r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + _[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        Ee.test(i) || (E.cssHooks[i + o].set = $e)
    }),
    E.fn.extend({
        css: function(e, t) {
            return O(this,
            function(e, t, n) {
                var r, i, o = {},
                s = 0;
                if (E.isArray(t)) {
                    for (r = ke(e), i = t.length; s < i; s++) o[t[s]] = E.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            },
            e, t, 1 < arguments.length)
        },
        show: function() {
            return Be(this, !0)
        },
        hide: function() {
            return Be(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Q(this) ? E(this).show() : E(this).hide()
            })
        }
    }),
    ((E.Tween = ze).prototype = {
        constructor: ze,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || E.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (E.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = ze.propHooks[this.prop];
            return e && e.get ? e.get(this) : ze.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = ze.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : ze.propHooks._default.set(this),
            this
        }
    }).init.prototype = ze.prototype,
    (ze.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t: 0
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[E.cssProps[e.prop]] && !E.cssHooks[e.prop] ? e.elem[e.prop] = e.now: E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = ze.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    E.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    E.fx = ze.prototype.init,
    E.fx.step = {};
    var We, _e, Qe, Ue, Ve, Xe = /^(?:toggle|show|hide)$/,
    Ge = /queueHooks$/;
    function Ye() {
        return C.setTimeout(function() {
            We = void 0
        }),
        We = E.now()
    }
    function Je(e, t) {
        var n, r = 0,
        i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = _[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function Ke(e, t, n) {
        for (var r, i = (Ze.tweeners[t] || []).concat(Ze.tweeners["*"]), o = 0, s = i.length; o < s; o++) if (r = i[o].call(n, t, e)) return r
    }
    function Ze(o, e, t) {
        var n, s, r = 0,
        i = Ze.prefilters.length,
        a = E.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (s) return ! 1;
            for (var e = We || Ye(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return a.notifyWith(o, [l, n, t]),
            n < 1 && i ? t: (a.resolveWith(o, [l]), !1)
        },
        l = a.promise({
            elem: o,
            props: E.extend({},
            e),
            opts: E.extend(!0, {
                specialEasing: {},
                easing: E.easing._default
            },
            t),
            originalProperties: e,
            originalOptions: t,
            startTime: We || Ye(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = E.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0,
                n = e ? l.tweens.length: 0;
                if (s) return this;
                for (s = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (a.notifyWith(o, [l, 1, 0]), a.resolveWith(o, [l, e])) : a.rejectWith(o, [l, e]),
                this
            }
        }),
        c = l.props;
        for (function(e, t) {
            var n, r, i, o, s;
            for (n in e) if (i = t[r = E.camelCase(n)], o = e[n], E.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = E.cssHooks[r]) && "expand" in s) for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
            else t[r] = i
        } (c, l.opts.specialEasing); r < i; r++) if (n = Ze.prefilters[r].call(l, o, c, l.opts)) return E.isFunction(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = E.proxy(n.stop, n)),
        n;
        return E.map(c, Ke, l),
        E.isFunction(l.opts.start) && l.opts.start.call(o, l),
        E.fx.timer(E.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    E.Animation = E.extend(Ze, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return U(n.elem, e, W.exec(t), n),
                n
            }]
        },
        tweener: function(e, t) {
            for (var n, r = 0,
            i = (e = E.isFunction(e) ? (t = e, ["*"]) : e.match(M)).length; r < i; r++) n = e[r],
            Ze.tweeners[n] = Ze.tweeners[n] || [],
            Ze.tweeners[n].unshift(t)
        },
        prefilters: [function(t, e, n) {
            var r, i, o, s, a, u, l, c = this,
            f = {},
            d = t.style,
            p = t.nodeType && Q(t),
            h = P.get(t, "fxshow");
            for (r in n.queue || (null == (a = E._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                a.unqueued || u()
            }), a.unqueued++, c.always(function() {
                c.always(function() {
                    a.unqueued--,
                    E.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ("none" === (l = E.css(t, "display")) ? P.get(t, "olddisplay") || Te(t.nodeName) : l) && "none" === E.css(t, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", c.always(function() {
                d.overflow = n.overflow[0],
                d.overflowX = n.overflow[1],
                d.overflowY = n.overflow[2]
            })), e) if (i = e[r], Xe.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (p ? "hide": "show")) {
                    if ("show" !== i || !h || void 0 === h[r]) continue;
                    p = !0
                }
                f[r] = h && h[r] || E.style(t, r)
            } else l = void 0;
            if (E.isEmptyObject(f))"inline" === ("none" === l ? Te(t.nodeName) : l) && (d.display = l);
            else for (r in h ? "hidden" in h && (p = h.hidden) : h = P.access(t, "fxshow", {}), o && (h.hidden = !p), p ? E(t).show() : c.done(function() {
                E(t).hide()
            }), c.done(function() {
                var e;
                for (e in P.remove(t, "fxshow"), f) E.style(t, e, f[e])
            }), f) s = Ke(p ? h[r] : 0, r, c),
            r in h || (h[r] = s.start, p && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }],
        prefilter: function(e, t) {
            t ? Ze.prefilters.unshift(e) : Ze.prefilters.push(e)
        }
    }),
    E.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? E.extend({},
        e) : {
            complete: n || !n && t || E.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !E.isFunction(t) && t
        };
        return r.duration = E.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in E.fx.speeds ? E.fx.speeds[r.duration] : E.fx.speeds._default,
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            E.isFunction(r.old) && r.old.call(this),
            r.queue && E.dequeue(this, r.queue)
        },
        r
    },
    E.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Q).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = E.isEmptyObject(t),
            o = E.speed(e, n, r),
            s = function() {
                var e = Ze(this, E.extend({},
                t), o); (i || P.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(i, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0),
            e && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0,
                t = null != i && i + "queueHooks",
                n = E.timers,
                r = P.get(this);
                if (t) r[t] && r[t].stop && s(r[t]);
                else for (t in r) r[t] && r[t].stop && Ge.test(t) && s(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1)); ! e && o || E.dequeue(this, i)
            })
        },
        finish: function(s) {
            return ! 1 !== s && (s = s || "fx"),
            this.each(function() {
                var e, t = P.get(this),
                n = t[s + "queue"],
                r = t[s + "queueHooks"],
                i = E.timers,
                o = n ? n.length: 0;
                for (t.finish = !0, E.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    E.each(["toggle", "show", "hide"],
    function(e, r) {
        var i = E.fn[r];
        E.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Je(r, !0), e, t, n)
        }
    }),
    E.each({
        slideDown: Je("show"),
        slideUp: Je("hide"),
        slideToggle: Je("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, r) {
        E.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    E.timers = [],
    E.fx.tick = function() {
        var e, t = 0,
        n = E.timers;
        for (We = E.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(),
        We = void 0
    },
    E.fx.timer = function(e) {
        E.timers.push(e),
        e() ? E.fx.start() : E.timers.pop()
    },
    E.fx.interval = 13,
    E.fx.start = function() {
        _e || (_e = C.setInterval(E.fx.tick, E.fx.interval))
    },
    E.fx.stop = function() {
        C.clearInterval(_e),
        _e = null
    },
    E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e,
        function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    },
    Qe = T.createElement("input"),
    Ue = T.createElement("select"),
    Ve = Ue.appendChild(T.createElement("option")),
    Qe.type = "checkbox",
    m.checkOn = "" !== Qe.value,
    m.optSelected = Ve.selected,
    Ue.disabled = !0,
    m.optDisabled = !Ve.disabled,
    (Qe = T.createElement("input")).value = "t",
    Qe.type = "radio",
    m.radioValue = "t" === Qe.value;
    var et, tt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return O(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }),
    E.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (t = t.toLowerCase(), i = E.attrHooks[t] || (E.expr.match.bool.test(t) ? et: void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r: null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!m.radioValue && "radio" === t && E.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            o = t && t.match(M);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = E.propFix[n] || n,
            E.expr.match.bool.test(n) && (e[r] = !1),
            e.removeAttribute(n)
        }
    }),
    et = {
        set: function(e, t, n) {
            return ! 1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    E.each(E.expr.match.bool.source.match(/\w+/g),
    function(e, t) {
        var o = tt[t] || E.find.attr;
        tt[t] = function(e, t, n) {
            var r, i;
            return n || (i = tt[t], tt[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, tt[t] = i),
            r
        }
    });
    var nt = /^(?:input|select|textarea|button)$/i,
    rt = /^(?:a|area)$/i;
    E.fn.extend({
        prop: function(e, t) {
            return O(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }),
    E.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]),
            void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: e[t] = n: i && "get" in i && null !== (r = i.get(e, t)) ? r: e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : nt.test(e.nodeName) || rt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    m.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        E.propFix[this.toLowerCase()] = this
    });
    var it = /[\t\r\n\f]/g;
    function ot(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (E.isFunction(t)) return this.each(function(e) {
                E(this).addClass(t.call(this, e, ot(this)))
            });
            if ("string" == typeof t && t) for (e = t.match(M) || []; n = this[u++];) if (i = ot(n), r = 1 === n.nodeType && (" " + i + " ").replace(it, " ")) {
                for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (a = E.trim(r)) && n.setAttribute("class", a)
            }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (E.isFunction(t)) return this.each(function(e) {
                E(this).removeClass(t.call(this, e, ot(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(M) || []; n = this[u++];) if (i = ot(n), r = 1 === n.nodeType && (" " + i + " ").replace(it, " ")) {
                for (s = 0; o = e[s++];) for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                i !== (a = E.trim(r)) && n.setAttribute("class", a)
            }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : E.isFunction(i) ? this.each(function(e) {
                E(this).toggleClass(i.call(this, e, ot(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if ("string" === o) for (t = 0, n = E(this), r = i.match(M) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== o || ((e = ot(this)) && P.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "": P.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && -1 < (" " + ot(n) + " ").replace(it, " ").indexOf(t)) return ! 0;
            return ! 1
        }
    });
    var st = /\r/g,
    at = /[\x20\t\r\n\f]+/g;
    E.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = E.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "": "number" == typeof t ? t += "": E.isArray(t) && (t = E.map(t,
                function(e) {
                    return null == e ? "": e + ""
                })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e: "string" == typeof(e = t.value) ? e.replace(st, "") : null == e ? "": e: void 0
        }
    }),
    E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t: E.trim(E.text(e)).replace(at, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type || i < 0,
                    s = o ? null: [], a = o ? i + 1 : r.length, u = i < 0 ? a: o ? i: 0; u < a; u++) if (((n = r[u]).selected || u === i) && (m.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !E.nodeName(n.parentNode, "optgroup"))) {
                        if (t = E(n).val(), o) return t;
                        s.push(t)
                    }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options,
                    o = E.makeArray(t), s = i.length; s--;)((r = i[s]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    E.each(["radio", "checkbox"],
    function() {
        E.valHooks[this] = {
            set: function(e, t) {
                return E.isArray(t) ? e.checked = -1 < E.inArray(E(e).val(), t) : void 0
            }
        },
        m.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    });
    var ut = /^(?:focusinfocus|focusoutblur)$/;
    E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var i, o, s, a, u, l, c, f = [n || T],
            d = h.call(e, "type") ? e.type: e,
            p = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = s = n = n || T, 3 !== n.nodeType && 8 !== n.nodeType && !ut.test(d + E.event.triggered) && ( - 1 < d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[E.expando] ? e: new E.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !E.isWindow(n)) {
                    for (a = c.delegateType || d, ut.test(a + d) || (o = o.parentNode); o; o = o.parentNode) f.push(o),
                    s = o;
                    s === (n.ownerDocument || T) && f.push(s.defaultView || s.parentWindow || C)
                }
                for (i = 0; (o = f[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? a: c.bindType || d,
                (l = (P.get(o, "events") || {})[e.type] && P.get(o, "handle")) && l.apply(o, t),
                (l = u && o[u]) && l.apply && H(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !H(n) || u && E.isFunction(n[d]) && !E.isWindow(n) && ((s = n[u]) && (n[u] = null), n[E.event.triggered = d](), E.event.triggered = void 0, s && (n[u] = s)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(r, null, t)
        }
    }),
    E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? E.event.trigger(e, t, n, !0) : void 0
        }
    }),
    E.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    E.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    m.focusin = "onfocusin" in C,
    m.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(n, r) {
        var i = function(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                t = P.access(e, r);
                t || e.addEventListener(n, i, !0),
                P.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                t = P.access(e, r) - 1;
                t ? P.access(e, r, t) : (e.removeEventListener(n, i, !0), P.remove(e, r))
            }
        }
    });
    var lt = C.location,
    ct = E.now(),
    ft = /\?/;
    E.parseJSON = function(e) {
        return JSON.parse(e + "")
    },
    E.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch(e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e),
        t
    };
    var dt = /#.*$/,
    pt = /([?&])_=[^&]*/,
    ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    gt = /^(?:GET|HEAD)$/,
    mt = /^\/\//,
    vt = {},
    yt = {},
    bt = "*/".concat("*"),
    xt = T.createElement("a");
    function wt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
            i = e.toLowerCase().match(M) || [];
            if (E.isFunction(t)) for (; n = i[r++];)"+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function At(t, i, o, s) {
        var a = {},
        u = t === yt;
        function l(e) {
            var r;
            return a[e] = !0,
            E.each(t[e] || [],
            function(e, t) {
                var n = t(i, o, s);
                return "string" != typeof n || u || a[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !a["*"] && l("*")
    }
    function Ct(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e: r || (r = {}))[n] = t[n]);
        return r && E.extend(!0, e, r),
        e
    }
    xt.href = lt.href,
    E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: lt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(lt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bt,
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
                "text json": E.parseJSON,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ct(Ct(e, E.ajaxSettings), t) : Ct(E.ajaxSettings, e)
        },
        ajaxPrefilter: wt(vt),
        ajaxTransport: wt(yt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0),
            t = t || {};
            var c, f, d, n, p, r, h, i, g = E.ajaxSetup({},
            t),
            m = g.context || g,
            v = g.context && (m.nodeType || m.jquery) ? E(m) : E.event,
            y = E.Deferred(),
            b = E.Callbacks("once memory"),
            x = g.statusCode || {},
            o = {},
            s = {},
            w = 0,
            a = "canceled",
            A = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!n) for (n = {}; t = ht.exec(d);) n[t[1].toLowerCase()] = t[2];
                        t = n[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? d: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = s[n] = s[n] || e, o[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return w || (g.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (w < 2) for (t in e) x[t] = [x[t], e[t]];
                    else A.always(e[A.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || a;
                    return c && c.abort(t),
                    u(0, t),
                    this
                }
            };
            if (y.promise(A).complete = b.add, A.success = A.done, A.error = A.fail, g.url = ((e || g.url || lt.href) + "").replace(dt, "").replace(mt, lt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = E.trim(g.dataType || "*").toLowerCase().match(M) || [""], null == g.crossDomain) {
                r = T.createElement("a");
                try {
                    r.href = g.url,
                    r.href = r.href,
                    g.crossDomain = xt.protocol + "//" + xt.host != r.protocol + "//" + r.host
                } catch(e) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = E.param(g.data, g.traditional)), At(vt, g, t, A), 2 === w) return A;
            for (i in (h = E.event && g.global) && 0 == E.active++&&E.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !gt.test(g.type), f = g.url, g.hasContent || (g.data && (f = g.url += (ft.test(f) ? "&": "?") + g.data, delete g.data), !1 === g.cache && (g.url = pt.test(f) ? f.replace(pt, "$1_=" + ct++) : f + (ft.test(f) ? "&": "?") + "_=" + ct++)), g.ifModified && (E.lastModified[f] && A.setRequestHeader("If-Modified-Since", E.lastModified[f]), E.etag[f] && A.setRequestHeader("If-None-Match", E.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && A.setRequestHeader("Content-Type", g.contentType), A.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + bt + "; q=0.01": "") : g.accepts["*"]), g.headers) A.setRequestHeader(i, g.headers[i]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, A, g) || 2 === w)) return A.abort();
            for (i in a = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) A[i](g[i]);
            if (c = At(yt, g, t, A)) {
                if (A.readyState = 1, h && v.trigger("ajaxSend", [A, g]), 2 === w) return A;
                g.async && 0 < g.timeout && (p = C.setTimeout(function() {
                    A.abort("timeout")
                },
                g.timeout));
                try {
                    w = 1,
                    c.send(o, u)
                } catch(e) {
                    if (! (w < 2)) throw e;
                    u( - 1, e)
                }
            } else u( - 1, "No Transport");
            function u(e, t, n, r) {
                var i, o, s, a, u, l = t;
                2 !== w && (w = 2, p && C.clearTimeout(p), c = void 0, d = r || "", A.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents,
                    u = e.dataTypes;
                    "*" === u[0];) u.shift(),
                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (i in a) if (a[i] && a[i].test(r)) {
                        u.unshift(i);
                        break
                    }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s || (s = i)
                        }
                        o = o || s
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
                } (g, A, n)), a = function(e, t, n, r) {
                    var i, o, s, a, u, l = {},
                    c = e.dataTypes.slice();
                    if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                        if (! (s = l[u + " " + o] || l["* " + o])) for (i in l) if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) { ! 0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                            break
                        }
                        if (!0 !== s) if (s && e.throws) t = s(t);
                        else try {
                            t = s(t)
                        } catch(e) {
                            return {
                                state: "parsererror",
                                error: s ? e: "No conversion from " + u + " to " + o
                            }
                        }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                } (g, a, A, i), i ? (g.ifModified && ((u = A.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u), (u = A.getResponseHeader("etag")) && (E.etag[f] = u)), 204 === e || "HEAD" === g.type ? l = "nocontent": 304 === e ? l = "notmodified": (l = a.state, o = a.data, i = !(s = a.error))) : (s = l, !e && l || (l = "error", e < 0 && (e = 0))), A.status = e, A.statusText = (t || l) + "", i ? y.resolveWith(m, [o, l, A]) : y.rejectWith(m, [A, l, s]), A.statusCode(x), x = void 0, h && v.trigger(i ? "ajaxSuccess": "ajaxError", [A, g, i ? o: s]), b.fireWith(m, [A, l]), h && (v.trigger("ajaxComplete", [A, g]), --E.active || E.event.trigger("ajaxStop")))
            }
            return A
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script")
        }
    }),
    E.each(["get", "post"],
    function(e, i) {
        E[i] = function(e, t, n, r) {
            return E.isFunction(t) && (r = r || n, n = t, t = void 0),
            E.ajax(E.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            },
            E.isPlainObject(e) && e))
        }
    }),
    E._evalUrl = function(e) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    },
    E.fn.extend({
        wrapAll: function(t) {
            var e;
            return E.isFunction(t) ? this.each(function(e) {
                E(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = E(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return E.isFunction(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this),
                t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = E.isFunction(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                E.nodeName(this, "body") || E(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    E.expr.filters.hidden = function(e) {
        return ! E.expr.filters.visible(e)
    },
    E.expr.filters.visible = function(e) {
        return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
    };
    var Tt = /%20/g,
    Et = /\[\]$/,
    St = /\r?\n/g,
    kt = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
    function jt(n, e, r, i) {
        var t;
        if (E.isArray(e)) E.each(e,
        function(e, t) {
            r || Et.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e: "") + "]", t, r, i)
        });
        else if (r || "object" !== E.type(e)) i(n, e);
        else for (t in e) jt(n + "[" + t + "]", e[t], r, i)
    }
    E.param = function(e, t) {
        var n, r = [],
        i = function(e, t) {
            t = E.isFunction(t) ? t() : null == t ? "": t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = E.ajaxSettings && E.ajaxSettings.traditional), E.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e,
        function() {
            i(this.name, this.value)
        });
        else for (n in e) jt(n, e[n], t, i);
        return r.join("&").replace(Tt, "+")
    },
    E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Nt.test(this.nodeName) && !kt.test(e) && (this.checked || !V.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null: E.isArray(n) ? E.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    }),
    E.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch(e) {}
    };
    var Dt = {
        0 : 200,
        1223 : 204
    },
    Lt = E.ajaxSettings.xhr();
    m.cors = !!Lt && "withCredentials" in Lt,
    m.ajax = Lt = !!Lt,
    E.ajaxTransport(function(i) {
        var o, s;
        return m.cors || Lt && !i.crossDomain ? {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Dt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        }: {
                            text: r.responseText
                        },
                        r.getAllResponseHeaders()))
                    }
                },
                r.onload = o(),
                s = r.onerror = o("error"),
                void 0 !== r.onabort ? r.onabort = s: r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && s()
                    })
                },
                o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch(e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }: void 0
    }),
    E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e),
                e
            }
        }
    }),
    E.ajaxPrefilter("script",
    function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    E.ajaxTransport("script",
    function(n) {
        var r, i;
        if (n.crossDomain) return {
            send: function(e, t) {
                r = E("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(),
                    i = null,
                    e && t("error" === e.type ? 404 : 200, e.type)
                }),
                T.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Mt = [],
    qt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mt.pop() || E.expando + "_" + ct++;
            return this[e] = !0,
            e
        }
    }),
    E.ajaxPrefilter("json jsonp",
    function(e, t, n) {
        var r, i, o, s = !1 !== e.jsonp && (qt.test(e.url) ? "url": "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = E.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(qt, "$1" + r) : !1 !== e.jsonp && (e.url += (ft.test(e.url) ? "&": "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || E.error(r + " was not called"),
            o[0]
        },
        e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        },
        n.always(function() {
            void 0 === i ? E(C).removeProp(r) : C[r] = i,
            e[r] && (e.jsonpCallback = t.jsonpCallback, Mt.push(r)),
            o && E.isFunction(i) && i(o[0]),
            o = i = void 0
        }), "script") : void 0
    }),
    E.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1),
        t = t || T;
        var r = x.exec(e),
        i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ne([e], t, i), i && i.length && E(i).remove(), E.merge([], r.childNodes))
    };
    var Ot = E.fn.load;
    function Ht(e) {
        return E.isWindow(e) ? e: 9 === e.nodeType && e.defaultView
    }
    E.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
        var r, i, o, s = this,
        a = e.indexOf(" ");
        return - 1 < a && (r = E.trim(e.slice(a)), e = e.slice(0, a)),
        E.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < s.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n &&
        function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }),
        this
    },
    E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    E.expr.filters.animated = function(t) {
        return E.grep(E.timers,
        function(e) {
            return t === e.elem
        }).length
    },
    E.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l = E.css(e, "position"),
            c = E(e),
            f = {};
            "static" === l && (e.style.position = "relative"),
            a = c.offset(),
            o = E.css(e, "top"),
            u = E.css(e, "left"),
            i = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (r = c.position()).top, r.left) : (s = parseFloat(o) || 0, parseFloat(u) || 0),
            E.isFunction(t) && (t = t.call(e, n, E.extend({},
            a))),
            null != t.top && (f.top = t.top - a.top + s),
            null != t.left && (f.left = t.left - a.left + i),
            "using" in t ? t.using.call(e, f) : c.css(f)
        }
    },
    E.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this: this.each(function(e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0],
            i = {
                top: 0,
                left: 0
            },
            o = r && r.ownerDocument;
            return o ? (e = o.documentElement, E.contains(e, r) ? (i = r.getBoundingClientRect(), n = Ht(o), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === E.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), E.nodeName(e[0], "html") || (r = e.offset()), r.top += E.css(e[0], "borderTopWidth", !0), r.left += E.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - r.top - E.css(n, "marginTop", !0),
                    left: t.left - r.left - E.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                return e || je
            })
        }
    }),
    E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function(e) {
            return O(this,
            function(e, t, n) {
                var r = Ht(e);
                return void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? r.pageXOffset: n, o ? n: r.pageYOffset) : e[t] = n)
            },
            t, e, arguments.length)
        }
    }),
    E.each(["top", "left"],
    function(e, n) {
        E.cssHooks[n] = Le(m.pixelPosition,
        function(e, t) {
            return t ? (t = De(e, n), Se.test(t) ? E(e).position()[n] + "px": t) : void 0
        })
    }),
    E.each({
        Height: "height",
        Width: "width"
    },
    function(o, s) {
        E.each({
            padding: "inner" + o,
            content: s,
            "": "outer" + o
        },
        function(r, e) {
            E.fn[e] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                i = r || (!0 === e || !0 === t ? "margin": "border");
                return O(this,
                function(e, t, n) {
                    var r;
                    return E.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                },
                s, n ? e: void 0, n, null)
            }
        })
    }),
    E.fn.extend({
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
        },
        size: function() {
            return this.length
        }
    }),
    E.fn.andSelf = E.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return E
    });
    var It = C.jQuery,
    Pt = C.$;
    return E.noConflict = function(e) {
        return C.$ === E && (C.$ = Pt),
        e && C.jQuery === E && (C.jQuery = It),
        E
    },
    e || (C.jQuery = C.$ = E),
    E
}),
function(e) {
    var t, i, n, r, o, s, a, u = navigator.userAgent;
    e.HTMLPictureElement && /ecko/.test(u) && u.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (i = document.createElement("source"), n = function(e) {
        var t, n, r = e.parentNode;
        "PICTURE" === r.nodeName.toUpperCase() ? (t = i.cloneNode(), r.insertBefore(t, r.firstElementChild), setTimeout(function() {
            r.removeChild(t)
        })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, n = e.sizes, e.sizes += ",100vw", setTimeout(function() {
            e.sizes = n
        }))
    },
    r = function() {
        var e, t = document.querySelectorAll("picture > img, img[srcset][sizes]");
        for (e = 0; e < t.length; e++) n(t[e])
    },
    o = function() {
        clearTimeout(t),
        t = setTimeout(r, 99)
    },
    s = e.matchMedia && matchMedia("(orientation: landscape)"), a = function() {
        o(),
        s && s.addListener && s.addListener(o)
    },
    i.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), o))
} (window),
function(e, o, l) {
    "use strict";
    var i, c, u;
    o.createElement("picture");
    var C = {},
    s = !1,
    t = function() {},
    n = o.createElement("img"),
    f = n.getAttribute,
    d = n.setAttribute,
    p = n.removeAttribute,
    a = o.documentElement,
    r = {},
    T = {
        algorithm: ""
    },
    h = "data-pfsrc",
    g = h + "set",
    m = navigator.userAgent,
    E = /rident/.test(m) || /ecko/.test(m) && m.match(/rv\:(\d+)/) && 35 < RegExp.$1,
    S = "currentSrc",
    v = /\s+\+?\d+(e\d+)?w/,
    y = /(\([^)]+\))?\s*(.+)/,
    b = e.picturefillCFG,
    x = "font-size:100%!important;",
    w = !0,
    A = {},
    k = {},
    N = e.devicePixelRatio,
    j = {
        px: 1,
        in:96
    },
    D = o.createElement("a"),
    L = !1,
    M = /^[ \t\n\r\u000c]+/,
    q = /^[, \t\n\r\u000c]+/,
    O = /^[^ \t\n\r\u000c]+/,
    H = /[,]+$/,
    I = /^\d+$/,
    P = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
    $ = function(e, t, n, r) {
        e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
    },
    R = function(t) {
        var n = {};
        return function(e) {
            return e in n || (n[e] = t(e)),
            n[e]
        }
    };
    function F(e) {
        return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e
    }
    var B, z, W, _, Q, U, V, X, G, Y, J, K, Z, ee, te, ne, re, ie, oe, se = (B = /^([\d\.]+)(em|vw|px)$/, z = R(function(e) {
        return "return " +
        function() {
            for (var e = arguments,
            t = 0,
            n = e[0]; ++t in e;) n = n.replace(e[t], e[++t]);
            return n
        } ((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
    }),
    function(e, t) {
        var n;
        if (! (e in A)) if (A[e] = !1, t && (n = e.match(B))) A[e] = n[1] * j[n[2]];
        else try {
            A[e] = new Function("e", z(e))(j)
        } catch(e) {}
        return A[e]
    }),
    ae = function(e, t) {
        return e.w ? (e.cWidth = C.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d,
        e
    },
    ue = function(e) {
        if (s) {
            var t, n, r, i = e || {};
            if (i.elements && 1 === i.elements.nodeType && ("IMG" === i.elements.nodeName.toUpperCase() ? i.elements = [i.elements] : (i.context = i.elements, i.elements = null)), r = (t = i.elements || C.qsa(i.context || o, i.reevaluate || i.reselect ? C.sel: C.selShort)).length) {
                for (C.setupRun(i), L = !0, n = 0; n < r; n++) C.fillImg(t[n], i);
                C.teardownRun(i)
            }
        }
    };
    function le(e, t) {
        return e.res - t.res
    }
    function ce(e, t) {
        var n, r, i;
        if (e && t) for (i = C.parseSet(t), e = C.makeUrl(e), n = 0; n < i.length; n++) if (e === C.makeUrl(i[n].url)) {
            r = i[n];
            break
        }
        return r
    }
    e.console && console.warn,
    S in n || (S = "src"),
    r["image/jpeg"] = !0,
    r["image/gif"] = !0,
    r["image/png"] = !0,
    r["image/svg+xml"] = o.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"),
    C.ns = ("pf" + (new Date).getTime()).substr(0, 9),
    C.supSrcset = "srcset" in n,
    C.supSizes = "sizes" in n,
    C.supPicture = !!e.HTMLPictureElement,
    C.supSrcset && C.supPicture && !C.supSizes && (W = o.createElement("img"), n.srcset = "data:,a", W.src = "data:,a", C.supSrcset = n.complete === W.complete, C.supPicture = C.supSrcset && C.supPicture),
    C.supSrcset && !C.supSizes ? (_ = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", Q = o.createElement("img"), U = function() {
        2 === Q.width && (C.supSizes = !0),
        c = C.supSrcset && !C.supSizes,
        s = !0,
        setTimeout(ue)
    },
    Q.onload = U, Q.onerror = U, Q.setAttribute("sizes", "9px"), Q.srcset = _ + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", Q.src = _) : s = !0,
    C.selShort = "picture>img,img[srcset]",
    C.sel = C.selShort,
    C.cfg = T,
    C.DPR = N || 1,
    C.u = j,
    C.types = r,
    C.setSize = t,
    C.makeUrl = R(function(e) {
        return D.href = e,
        D.href
    }),
    C.qsa = function(e, t) {
        return "querySelector" in e ? e.querySelectorAll(t) : []
    },
    C.matchesMedia = function() {
        return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? C.matchesMedia = function(e) {
            return ! e || matchMedia(e).matches
        }: C.matchesMedia = C.mMQ,
        C.matchesMedia.apply(this, arguments)
    },
    C.mMQ = function(e) {
        return ! e || se(e)
    },
    C.calcLength = function(e) {
        var t = se(e, !0) || !1;
        return t < 0 && (t = !1),
        t
    },
    C.supportsType = function(e) {
        return ! e || r[e]
    },
    C.parseSize = R(function(e) {
        var t = (e || "").match(y);
        return {
            media: t && t[1],
            length: t && t[2]
        }
    }),
    C.parseSet = function(e) {
        return e.cands || (e.cands = function(r, f) {
            function e(e) {
                var t, n = e.exec(r.substring(s));
                if (n) return t = n[0],
                s += t.length,
                t
            }
            var d, p, t, n, i, o = r.length,
            s = 0,
            h = [];
            function a() {
                var e, t, n, r, i, o, s, a, u, l = !1,
                c = {};
                for (r = 0; r < p.length; r++) o = (i = p[r])[i.length - 1],
                s = i.substring(0, i.length - 1),
                a = parseInt(s, 10),
                u = parseFloat(s),
                I.test(s) && "w" === o ? ((e || t) && (l = !0), 0 === a ? l = !0 : e = a) : P.test(s) && "x" === o ? ((e || t || n) && (l = !0), u < 0 ? l = !0 : t = u) : I.test(s) && "h" === o ? ((n || t) && (l = !0), 0 === a ? l = !0 : n = a) : l = !0;
                l || (c.url = d, e && (c.w = e), t && (c.d = t), n && (c.h = n), n || t || e || (c.d = 1), 1 === c.d && (f.has1x = !0), c.set = f, h.push(c))
            }
            function u() {
                for (e(M), t = "", n = "in descriptor";;) {
                    if (i = r.charAt(s), "in descriptor" === n) if (F(i)) t && (p.push(t), t = "", n = "after descriptor");
                    else {
                        if ("," === i) return s += 1,
                        t && p.push(t),
                        void a();
                        if ("(" === i) t += i,
                        n = "in parens";
                        else {
                            if ("" === i) return t && p.push(t),
                            void a();
                            t += i
                        }
                    } else if ("in parens" === n) if (")" === i) t += i,
                    n = "in descriptor";
                    else {
                        if ("" === i) return p.push(t),
                        void a();
                        t += i
                    } else if ("after descriptor" === n) if (F(i));
                    else {
                        if ("" === i) return void a();
                        n = "in descriptor",
                        s -= 1
                    }
                    s += 1
                }
            }
            for (;;) {
                if (e(q), o <= s) return h;
                d = e(O),
                p = [],
                "," === d.slice( - 1) ? (d = d.replace(H, ""), a()) : u()
            }
        } (e.srcset, e)),
        e.cands
    },
    C.getEmValue = function() {
        var e;
        if (!i && (e = o.body)) {
            var t = o.createElement("div"),
            n = a.style.cssText,
            r = e.style.cssText;
            t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
            a.style.cssText = x,
            e.style.cssText = x,
            e.appendChild(t),
            i = t.offsetWidth,
            e.removeChild(t),
            i = parseFloat(i, 10),
            a.style.cssText = n,
            e.style.cssText = r
        }
        return i || 16
    },
    C.calcListLength = function(e) {
        if (! (e in k) || T.uT) {
            var t = C.calcLength(function(e) {
                var t, n, r, i, o, s, a, u = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
                for (r = (n = function(e) {
                    var t, n = "",
                    r = [],
                    i = [],
                    o = 0,
                    s = 0,
                    a = !1;
                    function u() {
                        n && (r.push(n), n = "")
                    }
                    function l() {
                        r[0] && (i.push(r), r = [])
                    }
                    for (;;) {
                        if ("" === (t = e.charAt(s))) return u(),
                        l(),
                        i;
                        if (a) {
                            if ("*" === t && "/" === e[s + 1]) {
                                a = !1,
                                s += 2,
                                u();
                                continue
                            }
                            s += 1
                        } else {
                            if (F(t)) {
                                if (e.charAt(s - 1) && F(e.charAt(s - 1)) || !n) {
                                    s += 1;
                                    continue
                                }
                                if (0 === o) {
                                    u(),
                                    s += 1;
                                    continue
                                }
                                t = " "
                            } else if ("(" === t) o += 1;
                            else if (")" === t) o -= 1;
                            else {
                                if ("," === t) {
                                    u(),
                                    l(),
                                    s += 1;
                                    continue
                                }
                                if ("/" === t && "*" === e.charAt(s + 1)) {
                                    a = !0,
                                    s += 2;
                                    continue
                                }
                            }
                            n += t,
                            s += 1
                        }
                    }
                } (e)).length, t = 0; t < r; t++) if (o = (i = n[t])[i.length - 1], a = o, u.test(a) && 0 <= parseFloat(a) || l.test(a) || "0" === a || "-0" === a || "+0" === a) {
                    if (s = o, i.pop(), 0 === i.length) return s;
                    if (i = i.join(" "), C.matchesMedia(i)) return s
                }
                return "100vw"
            } (e));
            k[e] = t || j.width
        }
        return k[e]
    },
    C.setRes = function(e) {
        var t;
        if (e) for (var n = 0,
        r = (t = C.parseSet(e)).length; n < r; n++) ae(t[n], e.sizes);
        return t
    },
    C.setRes.res = ae,
    C.applySetCandidate = function(e, t) {
        if (e.length) {
            var n, r, i, o, s, a, u, l, c, f, d, p, h, g, m, v, y, b, x, w = t[C.ns],
            A = C.DPR;
            if (a = w.curSrc || t[S], (u = w.curCan || (f = t, d = a, !(p = e[0].set) && d && (p = (p = f[C.ns].sets) && p[p.length - 1]), (h = ce(d, p)) && (d = C.makeUrl(d), f[C.ns].curSrc = d, (f[C.ns].curCan = h).res || ae(h, h.set.sizes)), h)) && u.set === e[0].set && ((c = E && !t.complete && u.res - .1 > A) || (u.cached = !0, u.res >= A && (s = u))), !s) for (e.sort(le), s = e[(o = e.length) - 1], r = 0; r < o; r++) if ((n = e[r]).res >= A) {
                s = e[i = r - 1] && (c || a !== C.makeUrl(n.url)) && (g = e[i].res, m = n.res, v = A, y = e[i].cached, x = b = void 0, v < ("saveData" === T.algorithm ? 2.7 < g ? v + 1 : (x = (m - v) * (b = Math.pow(g - .6, 1.5)), y && (x += .1 * b), g + x) : 1 < v ? Math.sqrt(g * m) : g)) ? e[i] : n;
                break
            }
            s && (l = C.makeUrl(s.url), w.curSrc = l, w.curCan = s, l !== a && C.setSrc(t, s), C.setSize(t))
        }
    },
    C.setSrc = function(e, t) {
        var n;
        e.src = t.url,
        "image/svg+xml" === t.set.type && (n = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = n))
    },
    C.getSet = function(e) {
        var t, n, r, i = !1,
        o = e[C.ns].sets;
        for (t = 0; t < o.length && !i; t++) if ((n = o[t]).srcset && C.matchesMedia(n.media) && (r = C.supportsType(n.type))) {
            "pending" === r && (n = r),
            i = n;
            break
        }
        return i
    },
    C.parseSets = function(e, t, n) {
        var r, i, o, s, a = t && "PICTURE" === t.nodeName.toUpperCase(),
        u = e[C.ns]; (u.src === l || n.src) && (u.src = f.call(e, "src"), u.src ? d.call(e, h, u.src) : p.call(e, h)),
        (u.srcset === l || n.srcset || !C.supSrcset || e.srcset) && (r = f.call(e, "srcset"), u.srcset = r, s = !0),
        u.sets = [],
        a && (u.pic = !0,
        function(e, t) {
            var n, r, i, o, s = e.getElementsByTagName("source");
            for (n = 0, r = s.length; n < r; n++)(i = s[n])[C.ns] = !0,
            (o = i.getAttribute("srcset")) && t.push({
                srcset: o,
                media: i.getAttribute("media"),
                type: i.getAttribute("type"),
                sizes: i.getAttribute("sizes")
            })
        } (t, u.sets)),
        u.srcset ? (i = {
            srcset: u.srcset,
            sizes: f.call(e, "sizes")
        },
        u.sets.push(i), (o = (c || u.src) && v.test(u.srcset || "")) || !u.src || ce(u.src, i) || i.has1x || (i.srcset += ", " + u.src, i.cands.push({
            url: u.src,
            d: 1,
            set: i
        }))) : u.src && u.sets.push({
            srcset: u.src,
            sizes: null
        }),
        u.curCan = null,
        u.curSrc = l,
        u.supported = !(a || i && !C.supSrcset || o && !C.supSizes),
        s && C.supSrcset && !u.supported && (r ? (d.call(e, g, r), e.srcset = "") : p.call(e, g)),
        u.supported && !u.srcset && (!u.src && e.src || e.src !== C.makeUrl(u.src)) && (null === u.src ? e.removeAttribute("src") : e.src = u.src),
        u.parsed = !0
    },
    C.fillImg = function(e, t) {
        var n, r, i, o, s, a = t.reselect || t.reevaluate; (e[C.ns] || (e[C.ns] = {}), n = e[C.ns], a || n.evaled !== u) && (n.parsed && !t.reevaluate || C.parseSets(e, e.parentNode, t), n.supported ? n.evaled = u: (r = e, o = C.getSet(r), s = !1, "pending" !== o && (s = u, o && (i = C.setRes(o), C.applySetCandidate(i, r))), r[C.ns].evaled = s))
    },
    C.setupRun = function() {
        L && !w && N === e.devicePixelRatio || (w = !1, N = e.devicePixelRatio, A = {},
        k = {},
        C.DPR = N || 1, j.width = Math.max(e.innerWidth || 0, a.clientWidth), j.height = Math.max(e.innerHeight || 0, a.clientHeight), j.vw = j.width / 100, j.vh = j.height / 100, u = [j.height, j.width, N].join("-"), j.em = C.getEmValue(), j.rem = j.em)
    },
    C.supPicture ? (ue = t, C.fillImg = t) : (Z = e.attachEvent ? /d$|^c/: /d$|^c|^i/, ee = function() {
        var e = o.readyState || "";
        te = setTimeout(ee, "loading" === e ? 200 : 999),
        o.body && (C.fillImgs(), (V = V || Z.test(e)) && clearTimeout(te))
    },
    te = setTimeout(ee, o.body ? 9 : 99), ne = a.clientHeight, $(e, "resize", (X = function() {
        w = Math.max(e.innerWidth || 0, a.clientWidth) !== j.width || a.clientHeight !== ne,
        ne = a.clientHeight,
        w && C.fillImgs()
    },
    G = 99, K = function() {
        var e = new Date - J;
        e < G ? Y = setTimeout(K, G - e) : (Y = null, X())
    },
    function() {
        J = new Date,
        Y || (Y = setTimeout(K, G))
    })), $(o, "readystatechange", ee)),
    C.picturefill = ue,
    C.fillImgs = ue,
    C.teardownRun = t,
    ue._ = C,
    e.picturefillCFG = {
        pf: C,
        push: function(e) {
            var t = e.shift();
            "function" == typeof C[t] ? C[t].apply(C, e) : (T[t] = e[0], L && C.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; b && b.length;) e.picturefillCFG.push(b.shift());
    e.picturefill = ue,
    "object" == typeof module && "object" == typeof module.exports ? module.exports = ue: "function" == typeof define && define.amd && define("picturefill",
    function() {
        return ue
    }),
    C.supPicture || (r["image/webp"] = (re = "image/webp", ie = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", (oe = new e.Image).onerror = function() {
        r[re] = !1,
        ue()
    },
    oe.onload = function() {
        r[re] = 1 === oe.width,
        ue()
    },
    oe.src = ie, "pending"))
} (window, document),
function(i) {
    "use strict";
    i.fn.fitVids = function(e) {
        var n = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var t = document.head || document.getElementsByTagName("head")[0],
            r = document.createElement("div");
            r.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',
            t.appendChild(r.childNodes[1])
        }
        return e && i.extend(n, e),
        this.each(function() {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            n.customSelector && e.push(n.customSelector);
            var r = ".fitvidsignore";
            n.ignore && (r = r + ", " + n.ignore);
            var t = i(this).find(e.join(",")); (t = (t = t.not("object object")).not(r)).each(function() {
                var e = i(this);
                if (! (0 < e.parents(r).length || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                    e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
                    var t = ("object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height()) / (isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10));
                    if (!e.attr("name")) {
                        var n = "fitvid" + i.fn.fitVids._count;
                        e.attr("name", n),
                        i.fn.fitVids._count++
                    }
                    e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * t + "%"),
                    e.removeAttr("height").removeAttr("width")
                }
            })
        })
    },
    i.fn.fitVids._count = 0
} (window.jQuery || window.Zepto),
function(a, r, i, u) {
    var l = a(r);
    a.fn.lazyload = function(e) {
        var t, o = this,
        s = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: r,
            data_attribute: "original",
            skip_invisible: !1,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        function n() {
            var t = 0;
            o.each(function() {
                var e = a(this);
                if (!s.skip_invisible || e.is(":visible")) if (a.abovethetop(this, s) || a.leftofbegin(this, s));
                else if (a.belowthefold(this, s) || a.rightoffold(this, s)) {
                    if (++t > s.failure_limit) return ! 1
                } else e.trigger("appear"),
                t = 0
            })
        }
        return e && (u !== e.failurelimit && (e.failure_limit = e.failurelimit, delete e.failurelimit), u !== e.effectspeed && (e.effect_speed = e.effectspeed, delete e.effectspeed), a.extend(s, e)),
        t = s.container === u || s.container === r ? l: a(s.container),
        0 === s.event.indexOf("scroll") && t.on(s.event,
        function() {
            return n()
        }),
        this.each(function() {
            var r = this,
            i = a(r);
            r.loaded = !1,
            i.attr("src") !== u && !1 !== i.attr("src") || i.is("img") && i.attr("src", s.placeholder),
            i.one("appear",
            function() {
                if (!this.loaded) {
                    if (s.appear) {
                        var e = o.length;
                        s.appear.call(r, e, s)
                    }
                    a("<img />").one("load",
                    function() {
                        var e = i.attr("data-" + s.data_attribute);
                        i.hide(),
                        i.is("img") ? i.attr("src", e) : i.css("background-image", "url('" + e + "')"),
                        i[s.effect](s.effect_speed),
                        r.loaded = !0;
                        var t = a.grep(o,
                        function(e) {
                            return ! e.loaded
                        });
                        if (o = a(t), s.load) {
                            var n = o.length;
                            s.load.call(r, n, s)
                        }
                    }).attr("src", i.attr("data-" + s.data_attribute))
                }
            }),
            0 !== s.event.indexOf("scroll") && i.on(s.event,
            function() {
                r.loaded || i.trigger("appear")
            })
        }),
        l.on("resize",
        function() {
            n()
        }),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && l.on("pageshow",
        function(e) {
            e.originalEvent && e.originalEvent.persisted && o.each(function() {
                a(this).trigger("appear")
            })
        }),
        a(i).ready(function() {
            n()
        }),
        this
    },
    a.belowthefold = function(e, t) {
        return (t.container === u || t.container === r ? (r.innerHeight ? r.innerHeight: l.height()) + l.scrollTop() : a(t.container).offset().top + a(t.container).height()) <= a(e).offset().top - t.threshold
    },
    a.rightoffold = function(e, t) {
        return (t.container === u || t.container === r ? l.width() + l.scrollLeft() : a(t.container).offset().left + a(t.container).width()) <= a(e).offset().left - t.threshold
    },
    a.abovethetop = function(e, t) {
        return (t.container === u || t.container === r ? l.scrollTop() : a(t.container).offset().top) >= a(e).offset().top + t.threshold + a(e).height()
    },
    a.leftofbegin = function(e, t) {
        return (t.container === u || t.container === r ? l.scrollLeft() : a(t.container).offset().left) >= a(e).offset().left + t.threshold + a(e).width()
    },
    a.inviewport = function(e, t) {
        return ! (a.rightoffold(e, t) || a.leftofbegin(e, t) || a.belowthefold(e, t) || a.abovethetop(e, t))
    },
    a.extend(a.expr[":"], {
        "below-the-fold": function(e) {
            return a.belowthefold(e, {
                threshold: 0
            })
        },
        "above-the-top": function(e) {
            return ! a.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-screen": function(e) {
            return a.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-screen": function(e) {
            return ! a.rightoffold(e, {
                threshold: 0
            })
        },
        "in-viewport": function(e) {
            return a.inviewport(e, {
                threshold: 0
            })
        },
        "above-the-fold": function(e) {
            return ! a.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-fold": function(e) {
            return a.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-fold": function(e) {
            return ! a.rightoffold(e, {
                threshold: 0
            })
        }
    })
} (jQuery, window, document),
function() {
    var r, t, n, u, i, o = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    },
    s = [].indexOf ||
    function(e) {
        for (var t = 0,
        n = this.length; t < n; t++) if (t in this && this[t] === e) return t;
        return - 1
    };
    t = function() {
        function e() {}
        return e.prototype.extend = function(e, t) {
            var n, r;
            for (n in t) r = t[n],
            null == e[n] && (e[n] = r);
            return e
        },
        e.prototype.isMobile = function(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        },
        e.prototype.createEvent = function(e, t, n, r) {
            var i;
            return null == t && (t = !1),
            null == n && (n = !1),
            null == r && (r = null),
            null != document.createEvent ? (i = document.createEvent("CustomEvent")).initCustomEvent(e, t, n, r) : null != document.createEventObject ? (i = document.createEventObject()).eventType = e: i.eventName = e,
            i
        },
        e.prototype.emitEvent = function(e, t) {
            return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
        },
        e.prototype.addEvent = function(e, t, n) {
            return null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
        },
        e.prototype.removeEvent = function(e, t, n) {
            return null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
        },
        e.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight: document.documentElement.clientHeight
        },
        e
    } (),
    n = this.WeakMap || this.MozWeakMap || (n = function() {
        function e() {
            this.keys = [],
            this.values = []
        }
        return e.prototype.get = function(e) {
            var t, n, r, i;
            for (t = n = 0, r = (i = this.keys).length; n < r; t = ++n) if (i[t] === e) return this.values[t]
        },
        e.prototype.set = function(e, t) {
            var n, r, i, o;
            for (n = r = 0, i = (o = this.keys).length; r < i; n = ++r) if (o[n] === e) return void(this.values[n] = t);
            return this.keys.push(e),
            this.values.push(t)
        },
        e
    } ()),
    r = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (r = function() {
        function e() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return e.notSupported = !0,
        e.prototype.observe = function() {},
        e
    } ()),
    u = this.getComputedStyle ||
    function(n, e) {
        return this.getPropertyValue = function(e) {
            var t;
            return "float" === e && (e = "styleFloat"),
            i.test(e) && e.replace(i,
            function(e, t) {
                return t.toUpperCase()
            }),
            (null != (t = n.currentStyle) ? t[e] : void 0) || null
        },
        this
    },
    i = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(e) {
            null == e && (e = {}),
            this.scrollCallback = o(this.scrollCallback, this),
            this.scrollHandler = o(this.scrollHandler, this),
            this.resetAnimation = o(this.resetAnimation, this),
            this.start = o(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(e, this.defaults),
            null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)),
            this.animationNameCache = new n,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        },
        e.prototype.init = function() {
            var e;
            return this.element = window.document.documentElement,
            "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        },
        e.prototype.start = function() {
            var i, e, t, n, s;
            if (this.stopped = !1, this.boxes = function() {
                var e, t, n, r;
                for (r = [], e = 0, t = (n = this.element.querySelectorAll("." + this.config.boxClass)).length; e < t; e++) i = n[e],
                r.push(i);
                return r
            }.call(this), this.all = function() {
                var e, t, n, r;
                for (r = [], e = 0, t = (n = this.boxes).length; e < t; e++) i = n[e],
                r.push(i);
                return r
            }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle();
            else for (e = 0, t = (n = this.boxes).length; e < t; e++) i = n[e],
            this.applyStyle(i, !0);
            if (this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new r((s = this,
            function(e) {
                var t, n, i, o, r;
                for (r = [], t = 0, n = e.length; t < n; t++) o = e[t],
                r.push(function() {
                    var e, t, n, r;
                    for (r = [], e = 0, t = (n = o.addedNodes || []).length; e < t; e++) i = n[e],
                    r.push(this.doSync(i));
                    return r
                }.call(s));
                return r
            })).observe(document.body, {
                childList: !0,
                subtree: !0
            })
        },
        e.prototype.stop = function() {
            if (this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
        },
        e.prototype.sync = function(e) {
            if (r.notSupported) return this.doSync(this.element)
        },
        e.prototype.doSync = function(e) {
            var t, n, r, i, o;
            if (null == e && (e = this.element), 1 === e.nodeType) {
                for (o = [], n = 0, r = (i = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass)).length; n < r; n++) t = i[n],
                s.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                return o
            }
        },
        e.prototype.show = function(e) {
            return this.applyStyle(e),
            e.className = e.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(e),
            this.util().emitEvent(e, this.wowEvent),
            this.util().addEvent(e, "animationend", this.resetAnimation),
            this.util().addEvent(e, "oanimationend", this.resetAnimation),
            this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation),
            e
        },
        e.prototype.applyStyle = function(e, t) {
            var n, r, i, o;
            return r = e.getAttribute("data-wow-duration"),
            n = e.getAttribute("data-wow-delay"),
            i = e.getAttribute("data-wow-iteration"),
            this.animate((o = this,
            function() {
                return o.customStyle(e, t, r, n, i)
            }))
        },
        e.prototype.animate = "requestAnimationFrame" in window ?
        function(e) {
            return window.requestAnimationFrame(e)
        }: function(e) {
            return e()
        },
        e.prototype.resetStyle = function() {
            var e, t, n, r, i;
            for (i = [], t = 0, n = (r = this.boxes).length; t < n; t++) e = r[t],
            i.push(e.style.visibility = "visible");
            return i
        },
        e.prototype.resetAnimation = function(e) {
            var t;
            if (0 <= e.type.toLowerCase().indexOf("animationend")) return (t = e.target || e.srcElement).className = t.className.replace(this.config.animateClass, "").trim()
        },
        e.prototype.customStyle = function(e, t, n, r, i) {
            return t && this.cacheAnimationName(e),
            e.style.visibility = t ? "hidden": "visible",
            n && this.vendorSet(e.style, {
                animationDuration: n
            }),
            r && this.vendorSet(e.style, {
                animationDelay: r
            }),
            i && this.vendorSet(e.style, {
                animationIterationCount: i
            }),
            this.vendorSet(e.style, {
                animationName: t ? "none": this.cachedAnimationName(e)
            }),
            e
        },
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(i, e) {
            var o, t, s, a;
            for (o in t = [], e) s = e[o],
            i["" + o] = s,
            t.push(function() {
                var e, t, n, r;
                for (r = [], e = 0, t = (n = this.vendors).length; e < t; e++) a = n[e],
                r.push(i["" + a + o.charAt(0).toUpperCase() + o.substr(1)] = s);
                return r
            }.call(this));
            return t
        },
        e.prototype.vendorCSS = function(e, t) {
            var n, r, i, o, s, a;
            for (o = (s = u(e)).getPropertyCSSValue(t), n = 0, r = (i = this.vendors).length; n < r; n++) a = i[n],
            o = o || s.getPropertyCSSValue("-" + a + "-" + t);
            return o
        },
        e.prototype.animationName = function(t) {
            var n;
            try {
                n = this.vendorCSS(t, "animation-name").cssText
            } catch(e) {
                n = u(t).getPropertyValue("animation-name")
            }
            return "none" === n ? "": n
        },
        e.prototype.cacheAnimationName = function(e) {
            return this.animationNameCache.set(e, this.animationName(e))
        },
        e.prototype.cachedAnimationName = function(e) {
            return this.animationNameCache.get(e)
        },
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        },
        e.prototype.scrollCallback = function() {
            var i;
            if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
                var e, t, n, r;
                for (r = [], e = 0, t = (n = this.boxes).length; e < t; e++)(i = n[e]) && (this.isVisible(i) ? this.show(i) : r.push(i));
                return r
            }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
        },
        e.prototype.offsetTop = function(e) {
            for (var t; void 0 === e.offsetTop;) e = e.parentNode;
            for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
            return t
        },
        e.prototype.isVisible = function(e) {
            var t, n, r, i, o;
            return n = e.getAttribute("data-wow-offset") || this.config.offset,
            i = (o = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - n,
            t = (r = this.offsetTop(e)) + e.clientHeight,
            r <= i && o <= t
        },
        e.prototype.util = function() {
            return null != this._util ? this._util: this._util = new t
        },
        e.prototype.disabled = function() {
            return ! this.config.mobile && this.util().isMobile(navigator.userAgent)
        },
        e
    } ()
}.call(this),
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function(e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function(e, t, n, r, i) {
        return - r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t + n: -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function(e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t + n: r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, r, i) {
        return - r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n: -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n: r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, r, i) {
        return - r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function(e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, r, i) {
        return - r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function(e, t, n, r, i) {
        return 0 == t ? n: r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function(e, t, n, r, i) {
        return t == i ? n + r: r * (1 - Math.pow(2, -10 * t / i)) + n
    },
    easeInOutExpo: function(e, t, n, r, i) {
        return 0 == t ? n: t == i ? n + r: (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n: r / 2 * (2 - Math.pow(2, -10 * --t)) + n
    },
    easeInCirc: function(e, t, n, r, i) {
        return - r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, r, i) {
        return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n: r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, r, i) {
        var o = 1.70158,
        s = 0,
        a = r;
        if (0 == t) return n;
        if (1 == (t /= i)) return n + r;
        if (s || (s = .3 * i), a < Math.abs(r)) {
            a = r;
            o = s / 4
        } else o = s / (2 * Math.PI) * Math.asin(r / a);
        return - a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / s) + n
    },
    easeOutElastic: function(e, t, n, r, i) {
        var o = 1.70158,
        s = 0,
        a = r;
        if (0 == t) return n;
        if (1 == (t /= i)) return n + r;
        if (s || (s = .3 * i), a < Math.abs(r)) {
            a = r;
            o = s / 4
        } else o = s / (2 * Math.PI) * Math.asin(r / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * i - o) * (2 * Math.PI) / s) + r + n
    },
    easeInOutElastic: function(e, t, n, r, i) {
        var o = 1.70158,
        s = 0,
        a = r;
        if (0 == t) return n;
        if (2 == (t /= i / 2)) return n + r;
        if (s || (s = i * (.3 * 1.5)), a < Math.abs(r)) {
            a = r;
            o = s / 4
        } else o = s / (2 * Math.PI) * Math.asin(r / a);
        return t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / s) * -.5 + n: a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / s) * .5 + r + n
    },
    easeInBack: function(e, t, n, r, i, o) {
        return null == o && (o = 1.70158),
        r * (t /= i) * t * ((o + 1) * t - o) + n
    },
    easeOutBack: function(e, t, n, r, i, o) {
        return null == o && (o = 1.70158),
        r * ((t = t / i - 1) * t * ((o + 1) * t + o) + 1) + n
    },
    easeInOutBack: function(e, t, n, r, i, o) {
        return null == o && (o = 1.70158),
        (t /= i / 2) < 1 ? r / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + n: r / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + n
    },
    easeInBounce: function(e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function(e, t, n, r, i) {
        return (t /= i) < 1 / 2.75 ? r * (7.5625 * t * t) + n: t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n: t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n: r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function(e, t, n, r, i) {
        return t < i / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, r, i) + n: .5 * jQuery.easing.easeOutBounce(e, 2 * t - i, 0, r, i) + .5 * r + n
    }
});
var browser = navigator.userAgent;
if (browser.match(/MSIE 10.0/i) || browser.match(/MSIE 9.0/i) || browser.match(/MSIE 8.0/i) || browser.match(/MSIE 7.0/i)) {
    var element = document.getElementById("sorryforie");
    element.className += " active"
}
function globalDevice(e) {
    return navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry/i) ? "1": "0"
}
browser.match(/MSIE 10.0/i) ? $("body").addClass("ie10") : browser.match(/rv:11.0/i) && $("body").addClass("ie11"),
(new WOW).init(),
$(window).load(function() {
    $(".load").fadeOut(500),
    $(".header").addClass("loaded")
}),
$(function() {
    var e, t, n, r = navigator.userAgent,
    i = ($(window).width(), $("html, body")),
    o = $(".header"),
    s = $(".nav"),
    a = $(".gotop");
    function u() {
        $(".resize-item").removeAttr("style"),
        setTimeout(l, 300)
    }
    function l() {
        for (var e, t = 0,
        n = 0; n < $(".resize-item").size(); n++) t <= (e = $(".resize-item").eq(n).height()) && (t = e);
        $(".resize-item").height(t)
    }
    $(".video").fitVids(),
    r.match(/iPhone|iPad|iPod|Android|BlackBerry/i) ? i.addClass("mobile") : r.match(/rv:11/i) ? i.addClass("ie") : i.addClass("desktop"),
    $(".nav-toggle").on("click", d),
    $(".mask").on("click", d),
    0 !== $(".video").size() && $(".video").fitVids(),
    p(),
    $(window).scroll(function() {
        150 < $(window).scrollTop() ? (o.addClass("fixed"), s.addClass("fixed")) : (o.removeClass("fixed"), s.removeClass("fixed"))
    }),
    $(window).resize(function() {
        $(".nav-toggle").removeClass("show"),
        $(".page").removeClass("show"),
        $("html,body").removeClass("show"),
        $(".nav").removeClass("show"),
        $(".hassub > .submenu").removeAttr("style"),
        $(".hassub").removeClass("open"),
        p(),
        u()
    }),
    $(window).scroll(function() {
        e = o.height(),
        t = $(window).scrollTop(),
        e < t ? a.removeClass("hide") : a.addClass("hide")
    }),
    a.on("click",
    function() {
        return i.stop(!0, !1).animate({
            scrollTop: 0
        },
        500),
        !1
    }),
    $(".nav-close").on("click", d),
    $(".lazy").lazyload({
        threshold: 500,
        effect: "fadeIn"
    }),
    u();
    var c, f = 0;
    function d() {
        return $(".page").toggleClass("show"),
        $("html,body").toggleClass("show"),
        $(".nav-toggle").toggleClass("show"),
        $(".nav").toggleClass("show"),
        !1
    }
    function p() {
        n = $("#js-rwd").width(),
        0 === n ? 0 : 1
    }
    $(".tags").on("click", "a",
    function() {
        if (2 != (c = $(this).index(".tags a"))) return $(this).addClass("current"),
        $(".tags a").eq(f).removeClass("current"),
        $(".tags-contents").eq(f).removeClass("show"),
        $(".tags-contents").eq(c).addClass("show"),
        f = c,
        !1
    }),
    0 !== $(".edit").size() && ($(".edit img").removeAttr("style"), $("img.big").unwrap("p"))
});