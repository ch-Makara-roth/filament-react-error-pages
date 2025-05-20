import Z from "react";
import hr from "react-dom";
const yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ErrorLayout() {
    return Q;
  },
  get GenericError() {
    return Fe;
  },
  get NotFound() {
    return Rr;
  },
  get ServerError() {
    return _r;
  },
  get initErrorPages() {
    return B;
  }
}, Symbol.toStringTag, { value: "Module" }));
var ce = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Er() {
  if (ke)
    return W;
  ke = 1;
  var g = Z, l = Symbol.for("react.element"), c = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, R = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(T, m, O) {
    var h, j = {}, C = null, x = null;
    O !== void 0 && (C = "" + O), m.key !== void 0 && (C = "" + m.key), m.ref !== void 0 && (x = m.ref);
    for (h in m)
      p.call(m, h) && !_.hasOwnProperty(h) && (j[h] = m[h]);
    if (T && T.defaultProps)
      for (h in m = T.defaultProps, m)
        j[h] === void 0 && (j[h] = m[h]);
    return { $$typeof: l, type: T, key: C, ref: x, props: j, _owner: R.current };
  }
  return W.Fragment = c, W.jsx = E, W.jsxs = E, W;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function br() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var g = Z, l = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), T = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), Y = Symbol.iterator, q = "@@iterator";
    function K(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Y && e[Y] || e[q];
      return typeof r == "function" ? r : null;
    }
    var S = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        X("error", e, t);
      }
    }
    function X(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(a) {
          return String(a);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ee = !1, Le = !1, We = !1, Ue = !1, ze = !1, fe;
    fe = Symbol.for("react.module.reference");
    function Be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === _ || ze || e === R || e === O || e === h || Ue || e === x || ee || Le || We || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === j || e.$$typeof === E || e.$$typeof === T || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case c:
          return "Portal";
        case _:
          return "Profiler";
        case R:
          return "StrictMode";
        case O:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return de(r) + ".Consumer";
          case E:
            var t = e;
            return de(t._context) + ".Provider";
          case m:
            return Ye(e, e.render, "ForwardRef");
          case j:
            var n = e.displayName || null;
            return n !== null ? n : I(e.type) || "Memo";
          case C: {
            var s = e, u = s._payload, a = s._init;
            try {
              return I(a(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, N = 0, ve, ge, pe, me, he, ye, Ee;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function $e() {
      {
        if (N === 0) {
          ve = console.log, ge = console.info, pe = console.warn, me = console.error, he = console.group, ye = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function He() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ve
            }),
            info: D({}, e, {
              value: ge
            }),
            warn: D({}, e, {
              value: pe
            }),
            error: D({}, e, {
              value: me
            }),
            group: D({}, e, {
              value: he
            }),
            groupCollapsed: D({}, e, {
              value: ye
            }),
            groupEnd: D({}, e, {
              value: Ee
            })
          });
        }
        N < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = S.ReactCurrentDispatcher, te;
    function $(e, r, t) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            te = n && n[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ne = !1, H;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Ge();
    }
    function Re(e, r) {
      if (!e || ne)
        return "";
      {
        var t = H.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ne = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = re.current, re.current = null, $e();
      try {
        if (r) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (b) {
              n = b;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var o = b.stack.split(`
`), y = n.stack.split(`
`), f = o.length - 1, v = y.length - 1; f >= 1 && v >= 0 && o[f] !== y[v]; )
            v--;
          for (; f >= 1 && v >= 0; f--, v--)
            if (o[f] !== y[v]) {
              if (f !== 1 || v !== 1)
                do
                  if (f--, v--, v < 0 || o[f] !== y[v]) {
                    var w = `
` + o[f].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, w), w;
                  }
                while (f >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = u, He(), Error.prepareStackTrace = s;
      }
      var A = e ? e.displayName || e.name : "", P = A ? $(A) : "";
      return typeof e == "function" && H.set(e, P), P;
    }
    function Ve(e, r, t) {
      return Re(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Je(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case O:
          return $("Suspense");
        case h:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return Ve(e.render);
          case j:
            return G(e.type, r, t);
          case C: {
            var n = e, s = n._payload, u = n._init;
            try {
              return G(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, _e = {}, Te = S.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    function Ze(e, r, t, n, s) {
      {
        var u = Function.call.bind(F);
        for (var a in e)
          if (u(e, a)) {
            var o = void 0;
            try {
              if (typeof e[a] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              o = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              o = f;
            }
            o && !(o instanceof Error) && (V(s), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, typeof o), V(null)), o instanceof Error && !(o.message in _e) && (_e[o.message] = !0, V(s), d("Failed %s type: %s", t, o.message), V(null));
          }
      }
    }
    var Qe = Array.isArray;
    function oe(e) {
      return Qe(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function we(e) {
      if (Ke(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), je(e);
    }
    var L = S.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, xe, ae;
    ae = {};
    function er(e) {
      if (F.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (F.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = I(L.current.type);
        ae[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(L.current.type), e.ref), ae[t] = !0);
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function or(e, r) {
      {
        var t = function() {
          xe || (xe = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, n, s, u, a) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: a,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ir(e, r, t, n, s) {
      {
        var u, a = {}, o = null, y = null;
        t !== void 0 && (we(t), o = "" + t), rr(r) && (we(r.key), o = "" + r.key), er(r) && (y = r.ref, tr(r, s));
        for (u in r)
          F.call(r, u) && !Xe.hasOwnProperty(u) && (a[u] = r[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            a[u] === void 0 && (a[u] = f[u]);
        }
        if (o || y) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && nr(a, v), y && or(a, v);
        }
        return ar(e, o, y, s, n, L.current, a);
      }
    }
    var ie = S.ReactCurrentOwner, Se = S.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Ie() {
      {
        if (ie.current) {
          var e = I(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Oe = {};
    function ur(e) {
      {
        var r = Ie();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function De(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ie.current && (n = " It was passed a child from " + I(e._owner.type) + "."), M(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), M(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ue(n) && De(n, r);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = K(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), a; !(a = u.next()).done; )
              ue(a.value) && De(a.value, r);
        }
      }
    }
    function lr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = I(r);
          Ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !se) {
          se = !0;
          var s = I(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            M(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), M(null);
            break;
          }
        }
        e.ref !== null && (M(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
      }
    }
    var Me = {};
    function Ae(e, r, t, n, s, u) {
      {
        var a = Be(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = sr(s);
          y ? o += y : o += Ie();
          var f;
          e === null ? f = "null" : oe(e) ? f = "array" : e !== void 0 && e.$$typeof === l ? (f = "<" + (I(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, o);
        }
        var v = ir(e, r, t, s, u);
        if (v == null)
          return v;
        if (a) {
          var w = r.children;
          if (w !== void 0)
            if (n)
              if (oe(w)) {
                for (var A = 0; A < w.length; A++)
                  Pe(w[A], e);
                Object.freeze && Object.freeze(w);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(w, e);
        }
        if (F.call(r, "key")) {
          var P = I(e), b = Object.keys(r).filter(function(mr) {
            return mr !== "key";
          }), le = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Me[P + le]) {
            var pr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, le, P, pr, P), Me[P + le] = !0;
          }
        }
        return e === p ? cr(v) : lr(v), v;
      }
    }
    function fr(e, r, t) {
      return Ae(e, r, t, !0);
    }
    function dr(e, r, t) {
      return Ae(e, r, t, !1);
    }
    var vr = dr, gr = fr;
    U.Fragment = p, U.jsx = vr, U.jsxs = gr;
  }()), U;
}
process.env.NODE_ENV === "production" ? ce.exports = Er() : ce.exports = br();
var i = ce.exports;
const Q = ({
  title: g,
  subtitle: l,
  children: c,
  errorCode: p,
  showBackButton: R = !0,
  showHomeButton: _ = !0,
  backButtonText: E = "Go Back",
  homeButtonText: T = "Go to Homepage",
  homeUrl: m = "/",
  onBackClick: O,
  onHomeClick: h,
  illustration: j,
  logo: C,
  primaryColor: x = "#3b82f6",
  backgroundColor: Y = "#ffffff",
  textColor: q = "#1f2937",
  showErrorCode: K = !0,
  companyName: S,
  supportEmail: d
}) => {
  const X = () => O ? O() : window.history.back(), ee = () => h ? h() : window.location.href = m;
  return /* @__PURE__ */ i.jsx("div", { className: "error-page", style: { minHeight: "100vh", padding: "2rem", backgroundColor: Y, color: q }, children: /* @__PURE__ */ i.jsxs("div", { className: "error-container", style: { maxWidth: "36rem", margin: "0 auto", textAlign: "center" }, children: [
    C && /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsx("img", { src: C, alt: "Logo", style: { maxHeight: "3rem", marginBottom: "2rem" } }) }),
    j && /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsx("img", { src: j, alt: "Error", style: { maxWidth: "100%", marginBottom: "2rem" } }) }),
    K && /* @__PURE__ */ i.jsx("h1", { style: { fontSize: "5rem", color: x }, children: p }),
    /* @__PURE__ */ i.jsx("h2", { style: { fontSize: "1.875rem", marginBottom: "1rem" }, children: g }),
    l && /* @__PURE__ */ i.jsx("p", { style: { fontSize: "1.125rem", marginBottom: "2rem" }, children: l }),
    c,
    /* @__PURE__ */ i.jsxs("div", { style: { marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem" }, children: [
      R && /* @__PURE__ */ i.jsx("button", { onClick: X, style: { backgroundColor: "transparent", border: `1px solid ${x}`, color: x, padding: "0.75rem 1.5rem", borderRadius: "0.375rem" }, children: E }),
      _ && /* @__PURE__ */ i.jsx("button", { onClick: ee, style: { backgroundColor: x, border: "none", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.375rem" }, children: T })
    ] }),
    (S || d) && /* @__PURE__ */ i.jsxs("div", { style: { marginTop: "3rem", fontSize: "0.875rem", color: "rgba(0, 0, 0, 0.5)" }, children: [
      S && /* @__PURE__ */ i.jsx("p", { children: S }),
      d && /* @__PURE__ */ i.jsxs("p", { children: [
        "Need help? ",
        /* @__PURE__ */ i.jsx("a", { href: `mailto:${d}`, style: { color: x }, children: "Contact support" })
      ] })
    ] })
  ] }) });
}, Rr = ({
  message: g = "The page you're looking for doesn't exist or has been moved.",
  customImage: l,
  suggestions: c = [
    "Check that you typed the address correctly",
    "Go back to the previous page",
    "Visit our homepage"
  ],
  ...p
}) => {
  const R = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwMCAxOTVjNTIuNDY3IDAgOTUtNDIuNTMzIDk1LTk1UzE1Mi40NjcgNSAxMDAgNSA1IDQ3LjUzMyA1IDEwMHM0Mi41MzMgOTUgOTUgOTV6IiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMTAiLz48cGF0aCBkPSJNMTAwIDEwMHYzNU0xMjAgODBjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjBzLTIwIDguOTU0LTIwIDIwIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==";
  return /* @__PURE__ */ i.jsx(
    Q,
    {
      title: "Page Not Found",
      subtitle: g,
      errorCode: 404,
      illustration: l || R,
      ...p,
      children: c && c.length > 0 && /* @__PURE__ */ i.jsxs("div", { style: { textAlign: "left", margin: "0 auto", maxWidth: "28rem" }, children: [
        /* @__PURE__ */ i.jsx("p", { style: { fontWeight: 500, marginBottom: "0.5rem" }, children: "Try the following:" }),
        /* @__PURE__ */ i.jsx("ul", { style: { paddingLeft: "1.5rem" }, children: c.map((_, E) => /* @__PURE__ */ i.jsx("li", { style: { marginBottom: "0.5rem" }, children: _ }, E)) })
      ] })
    }
  );
}, _r = ({
  message: g = "We're sorry, but something went wrong on our server.",
  customImage: l,
  contactInfo: c = "If this problem persists, please contact our support team.",
  isRetryable: p = !0,
  onRetry: R,
  ..._
}) => {
  const E = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwMCAxOTVjNTIuNDY3IDAgOTUtNDIuNTMzIDk1LTk1UzE1Mi40NjcgNSAxMDAgNSA1IDQ3LjUzMyA1IDEwMHM0Mi41MzMgOTUgOTUgOTV6IiBzdHJva2U9IiNFRjQ0NDQiIHN0cm9rZS13aWR0aD0iMTAiLz48cGF0aCBkPSJNMTAwIDEyMHYyTTEwMCA2MHY0MCIgc3Ryb2tlPSIjRUY0NDQ0IiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=", T = () => {
    R ? R() : window.location.reload();
  };
  return /* @__PURE__ */ i.jsx(
    Q,
    {
      title: "Server Error",
      subtitle: g,
      errorCode: 500,
      illustration: l || E,
      primaryColor: "#ef4444",
      ..._,
      children: /* @__PURE__ */ i.jsxs("div", { style: { marginBottom: "2rem" }, children: [
        /* @__PURE__ */ i.jsx("p", { style: { marginBottom: "1rem" }, children: c }),
        p && /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: T,
            style: {
              backgroundColor: "#ef4444",
              border: "none",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.375rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.2s",
              marginTop: "1rem"
            },
            children: "Try again"
          }
        )
      ] })
    }
  );
}, Fe = ({
  message: g = "An error occurred.",
  customImage: l,
  ...c
}) => {
  const p = c.title || (c.errorCode ? `Error ${c.errorCode}` : "Error");
  return /* @__PURE__ */ i.jsx(
    Q,
    {
      title: p,
      subtitle: g,
      errorCode: c.errorCode || 0,
      ...c,
      children: /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsx("p", { children: "Please try again later or contact support if the problem persists." }) })
    }
  );
};
var k = {}, z = hr;
if (process.env.NODE_ENV === "production")
  k.createRoot = z.createRoot, k.hydrateRoot = z.hydrateRoot;
else {
  var J = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  k.createRoot = function(g, l) {
    J.usingClientEntryPoint = !0;
    try {
      return z.createRoot(g, l);
    } finally {
      J.usingClientEntryPoint = !1;
    }
  }, k.hydrateRoot = function(g, l, c) {
    J.usingClientEntryPoint = !0;
    try {
      return z.hydrateRoot(g, l, c);
    } finally {
      J.usingClientEntryPoint = !1;
    }
  };
}
const B = () => {
  if (typeof window > "u")
    return;
  const g = document.getElementById("filament-react-error-app");
  if (!g) {
    console.error("Error page container not found");
    return;
  }
  const l = window.filamentReactErrorPages;
  if (!l) {
    console.error("Error page configuration not found");
    return;
  }
  const c = l.componentName, p = yr[c];
  if (!p || typeof p != "function") {
    console.error(`Error component "${c}" not found, using GenericError instead`);
    const E = Fe;
    if (!E) {
      console.error("GenericError component not found");
      return;
    }
    k.createRoot(g).render(
      /* @__PURE__ */ i.jsx(Z.StrictMode, { children: /* @__PURE__ */ i.jsx(
        E,
        {
          errorCode: l.errorCode,
          ...l.props
        }
      ) })
    );
    return;
  }
  const R = k.createRoot(g), _ = p;
  R.render(
    /* @__PURE__ */ i.jsx(Z.StrictMode, { children: /* @__PURE__ */ i.jsx(
      _,
      {
        errorCode: l.errorCode,
        ...l.props
      }
    ) })
  );
};
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", B) : B());
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", B) : B());
export {
  Q as ErrorLayout,
  Fe as GenericError,
  Rr as NotFound,
  _r as ServerError,
  B as initErrorPages
};
//# sourceMappingURL=app.js.map
