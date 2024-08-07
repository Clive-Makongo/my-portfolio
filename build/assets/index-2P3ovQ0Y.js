function _m(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Em(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Vf = { exports: {} },
  Yo = {},
  Uf = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gi = Symbol.for("react.element"),
  wm = Symbol.for("react.portal"),
  Sm = Symbol.for("react.fragment"),
  Cm = Symbol.for("react.strict_mode"),
  Tm = Symbol.for("react.profiler"),
  km = Symbol.for("react.provider"),
  Nm = Symbol.for("react.context"),
  xm = Symbol.for("react.forward_ref"),
  Am = Symbol.for("react.suspense"),
  Om = Symbol.for("react.memo"),
  Lm = Symbol.for("react.lazy"),
  Vu = Symbol.iterator;
function Pm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vu && e[Vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Wf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Bf = Object.assign,
  Hf = {};
function gr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hf),
    (this.updater = n || Wf);
}
gr.prototype.isReactComponent = {};
gr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
gr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Kf() {}
Kf.prototype = gr.prototype;
function va(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hf),
    (this.updater = n || Wf);
}
var ya = (va.prototype = new Kf());
ya.constructor = va;
Bf(ya, gr.prototype);
ya.isPureReactComponent = !0;
var Uu = Array.isArray,
  Yf = Object.prototype.hasOwnProperty,
  _a = { current: null },
  Qf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Yf.call(t, r) && !Qf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: gi,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: _a.current,
  };
}
function Dm(e, t) {
  return {
    $$typeof: gi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ea(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gi;
}
function Im(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wu = /\/+/g;
function Cs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Im("" + e.key)
    : t.toString(36);
}
function Ji(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case gi:
          case wm:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Cs(s, 0) : r),
      Uu(i)
        ? ((n = ""),
          e != null && (n = e.replace(Wu, "$&/") + "/"),
          Ji(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Ea(i) &&
            (i = Dm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Wu, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Uu(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + Cs(o, l);
      s += Ji(o, t, n, a, i);
    }
  else if (((a = Pm(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Cs(o, l++)), (s += Ji(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function Oi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ji(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Rm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ye = { current: null },
  eo = { transition: null },
  $m = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: eo,
    ReactCurrentOwner: _a,
  };
M.Children = {
  map: Oi,
  forEach: function (e, t, n) {
    Oi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Oi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Oi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ea(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
M.Component = gr;
M.Fragment = Sm;
M.Profiler = Tm;
M.PureComponent = va;
M.StrictMode = Cm;
M.Suspense = Am;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $m;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Bf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = _a.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Yf.call(t, a) &&
        !Qf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: gi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: Nm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: km, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = Gf;
M.createFactory = function (e) {
  var t = Gf.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: xm, render: e };
};
M.isValidElement = Ea;
M.lazy = function (e) {
  return { $$typeof: Lm, _payload: { _status: -1, _result: e }, _init: Rm };
};
M.memo = function (e, t) {
  return { $$typeof: Om, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = eo.transition;
  eo.transition = {};
  try {
    e();
  } finally {
    eo.transition = t;
  }
};
M.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
M.useCallback = function (e, t) {
  return ye.current.useCallback(e, t);
};
M.useContext = function (e) {
  return ye.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return ye.current.useEffect(e, t);
};
M.useId = function () {
  return ye.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return ye.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return ye.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return ye.current.useRef(e);
};
M.useState = function (e) {
  return ye.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return ye.current.useTransition();
};
M.version = "18.2.0";
Uf.exports = M;
var A = Uf.exports;
const Xf = Em(A),
  Mm = _m({ __proto__: null, default: Xf }, [A]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jm = A,
  zm = Symbol.for("react.element"),
  bm = Symbol.for("react.fragment"),
  Fm = Object.prototype.hasOwnProperty,
  Vm = jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Um = { key: !0, ref: !0, __self: !0, __source: !0 };
function qf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Fm.call(t, r) && !Um.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: zm,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Vm.current,
  };
}
Yo.Fragment = bm;
Yo.jsx = qf;
Yo.jsxs = qf;
Vf.exports = Yo;
var T = Vf.exports,
  pl = {},
  Zf = { exports: {} },
  $e = {},
  Jf = { exports: {} },
  ed = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, I) {
    var R = O.length;
    O.push(I);
    e: for (; 0 < R; ) {
      var V = (R - 1) >>> 1,
        B = O[V];
      if (0 < i(B, I)) (O[V] = I), (O[R] = B), (R = V);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var I = O[0],
      R = O.pop();
    if (R !== I) {
      O[0] = R;
      e: for (var V = 0, B = O.length, dt = B >>> 1; V < dt; ) {
        var Ee = 2 * (V + 1) - 1,
          je = O[Ee],
          xe = Ee + 1,
          pt = O[xe];
        if (0 > i(je, R))
          xe < B && 0 > i(pt, je)
            ? ((O[V] = pt), (O[xe] = R), (V = xe))
            : ((O[V] = je), (O[Ee] = R), (V = Ee));
        else if (xe < B && 0 > i(pt, R)) (O[V] = pt), (O[xe] = R), (V = xe);
        else break e;
      }
    }
    return I;
  }
  function i(O, I) {
    var R = O.sortIndex - I.sortIndex;
    return R !== 0 ? R : O.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    p = null,
    m = 3,
    v = !1,
    _ = !1,
    y = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(O) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= O)
        r(u), (I.sortIndex = I.expirationTime), t(a, I);
      else break;
      I = n(u);
    }
  }
  function g(O) {
    if (((y = !1), h(O), !_))
      if (n(a) !== null) (_ = !0), oe(w);
      else {
        var I = n(u);
        I !== null && pe(g, I.startTime - O);
      }
  }
  function w(O, I) {
    (_ = !1), y && ((y = !1), d(x), (x = -1)), (v = !0);
    var R = m;
    try {
      for (
        h(I), p = n(a);
        p !== null && (!(p.expirationTime > I) || (O && !z()));

      ) {
        var V = p.callback;
        if (typeof V == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var B = V(p.expirationTime <= I);
          (I = e.unstable_now()),
            typeof B == "function" ? (p.callback = B) : p === n(a) && r(a),
            h(I);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var dt = !0;
      else {
        var Ee = n(u);
        Ee !== null && pe(g, Ee.startTime - I), (dt = !1);
      }
      return dt;
    } finally {
      (p = null), (m = R), (v = !1);
    }
  }
  var k = !1,
    N = null,
    x = -1,
    $ = 5,
    P = -1;
  function z() {
    return !(e.unstable_now() - P < $);
  }
  function ie() {
    if (N !== null) {
      var O = e.unstable_now();
      P = O;
      var I = !0;
      try {
        I = N(!0, O);
      } finally {
        I ? q() : ((k = !1), (N = null));
      }
    } else k = !1;
  }
  var q;
  if (typeof f == "function")
    q = function () {
      f(ie);
    };
  else if (typeof MessageChannel < "u") {
    var nt = new MessageChannel(),
      ft = nt.port2;
    (nt.port1.onmessage = ie),
      (q = function () {
        ft.postMessage(null);
      });
  } else
    q = function () {
      E(ie, 0);
    };
  function oe(O) {
    (N = O), k || ((k = !0), q());
  }
  function pe(O, I) {
    x = E(function () {
      O(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      _ || v || ((_ = !0), oe(w));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : ($ = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (O) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = m;
      }
      var R = m;
      m = I;
      try {
        return O();
      } finally {
        m = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, I) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var R = m;
      m = O;
      try {
        return I();
      } finally {
        m = R;
      }
    }),
    (e.unstable_scheduleCallback = function (O, I, R) {
      var V = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? V + R : V))
          : (R = V),
        O)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = R + B),
        (O = {
          id: c++,
          callback: I,
          priorityLevel: O,
          startTime: R,
          expirationTime: B,
          sortIndex: -1,
        }),
        R > V
          ? ((O.sortIndex = R),
            t(u, O),
            n(a) === null &&
              O === n(u) &&
              (y ? (d(x), (x = -1)) : (y = !0), pe(g, R - V)))
          : ((O.sortIndex = B), t(a, O), _ || v || ((_ = !0), oe(w))),
        O
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (O) {
      var I = m;
      return function () {
        var R = m;
        m = I;
        try {
          return O.apply(this, arguments);
        } finally {
          m = R;
        }
      };
    });
})(ed);
Jf.exports = ed;
var Wm = Jf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var td = A,
  Pe = Wm;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var nd = new Set(),
  Gr = {};
function Tn(e, t) {
  tr(e, t), tr(e + "Capture", t);
}
function tr(e, t) {
  for (Gr[e] = t, e = 0; e < t.length; e++) nd.add(t[e]);
}
var wt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  hl = Object.prototype.hasOwnProperty,
  Bm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bu = {},
  Hu = {};
function Hm(e) {
  return hl.call(Hu, e)
    ? !0
    : hl.call(Bu, e)
      ? !1
      : Bm.test(e)
        ? (Hu[e] = !0)
        : ((Bu[e] = !0), !1);
}
function Km(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ym(e, t, n, r) {
  if (t === null || typeof t > "u" || Km(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function _e(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new _e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ae[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wa = /[\-:]([a-z])/g;
function Sa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wa, Sa);
    ae[t] = new _e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wa, Sa);
    ae[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(wa, Sa);
  ae[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new _e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ca(e, t, n, r) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ym(t, n, i, r) && (n = null),
    r || i === null
      ? Hm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nt = td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Li = Symbol.for("react.element"),
  $n = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  Ta = Symbol.for("react.strict_mode"),
  ml = Symbol.for("react.profiler"),
  rd = Symbol.for("react.provider"),
  id = Symbol.for("react.context"),
  ka = Symbol.for("react.forward_ref"),
  gl = Symbol.for("react.suspense"),
  vl = Symbol.for("react.suspense_list"),
  Na = Symbol.for("react.memo"),
  Lt = Symbol.for("react.lazy"),
  od = Symbol.for("react.offscreen"),
  Ku = Symbol.iterator;
function Tr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ku && e[Ku]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Ts;
function Rr(e) {
  if (Ts === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ts = (t && t[1]) || "";
    }
  return (
    `
` +
    Ts +
    e
  );
}
var ks = !1;
function Ns(e, t) {
  if (!e || ks) return "";
  ks = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (ks = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Rr(e) : "";
}
function Qm(e) {
  switch (e.tag) {
    case 5:
      return Rr(e.type);
    case 16:
      return Rr("Lazy");
    case 13:
      return Rr("Suspense");
    case 19:
      return Rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ns(e.type, !1)), e;
    case 11:
      return (e = Ns(e.type.render, !1)), e;
    case 1:
      return (e = Ns(e.type, !0)), e;
    default:
      return "";
  }
}
function yl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case $n:
      return "Portal";
    case ml:
      return "Profiler";
    case Ta:
      return "StrictMode";
    case gl:
      return "Suspense";
    case vl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case id:
        return (e.displayName || "Context") + ".Consumer";
      case rd:
        return (e._context.displayName || "Context") + ".Provider";
      case ka:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Na:
        return (
          (t = e.displayName || null), t !== null ? t : yl(e.type) || "Memo"
        );
      case Lt:
        (t = e._payload), (e = e._init);
        try {
          return yl(e(t));
        } catch {}
    }
  return null;
}
function Gm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return yl(t);
    case 8:
      return t === Ta ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Kt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function sd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Xm(e) {
  var t = sd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Pi(e) {
  e._valueTracker || (e._valueTracker = Xm(e));
}
function ld(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = sd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function mo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _l(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Yu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ad(e, t) {
  (t = t.checked), t != null && Ca(e, "checked", t, !1);
}
function El(e, t) {
  ad(e, t);
  var n = Kt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? wl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && wl(e, t.type, Kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Qu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function wl(e, t, n) {
  (t !== "number" || mo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $r = Array.isArray;
function Gn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Kt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Sl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Gu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if ($r(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Kt(n) };
}
function ud(e, t) {
  var n = Kt(t.value),
    r = Kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Xu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function cd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Cl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? cd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Di,
  fd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Di = Di || document.createElement("div"),
          Di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Di.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  qm = ["Webkit", "ms", "Moz", "O"];
Object.keys(zr).forEach(function (e) {
  qm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zr[t] = zr[e]);
  });
});
function dd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (zr.hasOwnProperty(e) && zr[e])
      ? ("" + t).trim()
      : t + "px";
}
function pd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = dd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Zm = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Tl(e, t) {
  if (t) {
    if (Zm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function kl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Nl = null;
function xa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var xl = null,
  Xn = null,
  qn = null;
function qu(e) {
  if ((e = _i(e))) {
    if (typeof xl != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Zo(t)), xl(e.stateNode, e.type, t));
  }
}
function hd(e) {
  Xn ? (qn ? qn.push(e) : (qn = [e])) : (Xn = e);
}
function md() {
  if (Xn) {
    var e = Xn,
      t = qn;
    if (((qn = Xn = null), qu(e), t)) for (e = 0; e < t.length; e++) qu(t[e]);
  }
}
function gd(e, t) {
  return e(t);
}
function vd() {}
var xs = !1;
function yd(e, t, n) {
  if (xs) return e(t, n);
  xs = !0;
  try {
    return gd(e, t, n);
  } finally {
    (xs = !1), (Xn !== null || qn !== null) && (vd(), md());
  }
}
function qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Zo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Al = !1;
if (wt)
  try {
    var kr = {};
    Object.defineProperty(kr, "passive", {
      get: function () {
        Al = !0;
      },
    }),
      window.addEventListener("test", kr, kr),
      window.removeEventListener("test", kr, kr);
  } catch {
    Al = !1;
  }
function Jm(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var br = !1,
  go = null,
  vo = !1,
  Ol = null,
  eg = {
    onError: function (e) {
      (br = !0), (go = e);
    },
  };
function tg(e, t, n, r, i, o, s, l, a) {
  (br = !1), (go = null), Jm.apply(eg, arguments);
}
function ng(e, t, n, r, i, o, s, l, a) {
  if ((tg.apply(this, arguments), br)) {
    if (br) {
      var u = go;
      (br = !1), (go = null);
    } else throw Error(C(198));
    vo || ((vo = !0), (Ol = u));
  }
}
function kn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _d(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Zu(e) {
  if (kn(e) !== e) throw Error(C(188));
}
function rg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = kn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Zu(i), e;
        if (o === r) return Zu(i), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Ed(e) {
  return (e = rg(e)), e !== null ? wd(e) : null;
}
function wd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Sd = Pe.unstable_scheduleCallback,
  Ju = Pe.unstable_cancelCallback,
  ig = Pe.unstable_shouldYield,
  og = Pe.unstable_requestPaint,
  Z = Pe.unstable_now,
  sg = Pe.unstable_getCurrentPriorityLevel,
  Aa = Pe.unstable_ImmediatePriority,
  Cd = Pe.unstable_UserBlockingPriority,
  yo = Pe.unstable_NormalPriority,
  lg = Pe.unstable_LowPriority,
  Td = Pe.unstable_IdlePriority,
  Qo = null,
  st = null;
function ag(e) {
  if (st && typeof st.onCommitFiberRoot == "function")
    try {
      st.onCommitFiberRoot(Qo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : fg,
  ug = Math.log,
  cg = Math.LN2;
function fg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ug(e) / cg) | 0)) | 0;
}
var Ii = 64,
  Ri = 4194304;
function Mr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function _o(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = Mr(l)) : ((o &= s), o !== 0 && (r = Mr(o)));
  } else (s = n & ~i), s !== 0 ? (r = Mr(s)) : o !== 0 && (r = Mr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ze(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function dg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function pg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ze(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = dg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Ll(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function kd() {
  var e = Ii;
  return (Ii <<= 1), !(Ii & 4194240) && (Ii = 64), e;
}
function As(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ze(t)),
    (e[t] = n);
}
function hg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ze(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Oa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var b = 0;
function Nd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var xd,
  La,
  Ad,
  Od,
  Ld,
  Pl = !1,
  $i = [],
  jt = null,
  zt = null,
  bt = null,
  Zr = new Map(),
  Jr = new Map(),
  Dt = [],
  mg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function ec(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      jt = null;
      break;
    case "dragenter":
    case "dragleave":
      zt = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      Zr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jr.delete(t.pointerId);
  }
}
function Nr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = _i(t)), t !== null && La(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function gg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (jt = Nr(jt, e, t, n, r, i)), !0;
    case "dragenter":
      return (zt = Nr(zt, e, t, n, r, i)), !0;
    case "mouseover":
      return (bt = Nr(bt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Zr.set(o, Nr(Zr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Jr.set(o, Nr(Jr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Pd(e) {
  var t = un(e.target);
  if (t !== null) {
    var n = kn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _d(n)), t !== null)) {
          (e.blockedOn = t),
            Ld(e.priority, function () {
              Ad(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function to(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Dl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Nl = r), n.target.dispatchEvent(r), (Nl = null);
    } else return (t = _i(n)), t !== null && La(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function tc(e, t, n) {
  to(e) && n.delete(t);
}
function vg() {
  (Pl = !1),
    jt !== null && to(jt) && (jt = null),
    zt !== null && to(zt) && (zt = null),
    bt !== null && to(bt) && (bt = null),
    Zr.forEach(tc),
    Jr.forEach(tc);
}
function xr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Pl ||
      ((Pl = !0),
      Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, vg)));
}
function ei(e) {
  function t(i) {
    return xr(i, e);
  }
  if (0 < $i.length) {
    xr($i[0], e);
    for (var n = 1; n < $i.length; n++) {
      var r = $i[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    jt !== null && xr(jt, e),
      zt !== null && xr(zt, e),
      bt !== null && xr(bt, e),
      Zr.forEach(t),
      Jr.forEach(t),
      n = 0;
    n < Dt.length;
    n++
  )
    (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
    Pd(n), n.blockedOn === null && Dt.shift();
}
var Zn = Nt.ReactCurrentBatchConfig,
  Eo = !0;
function yg(e, t, n, r) {
  var i = b,
    o = Zn.transition;
  Zn.transition = null;
  try {
    (b = 1), Pa(e, t, n, r);
  } finally {
    (b = i), (Zn.transition = o);
  }
}
function _g(e, t, n, r) {
  var i = b,
    o = Zn.transition;
  Zn.transition = null;
  try {
    (b = 4), Pa(e, t, n, r);
  } finally {
    (b = i), (Zn.transition = o);
  }
}
function Pa(e, t, n, r) {
  if (Eo) {
    var i = Dl(e, t, n, r);
    if (i === null) zs(e, t, r, wo, n), ec(e, r);
    else if (gg(i, e, t, n, r)) r.stopPropagation();
    else if ((ec(e, r), t & 4 && -1 < mg.indexOf(e))) {
      for (; i !== null; ) {
        var o = _i(i);
        if (
          (o !== null && xd(o),
          (o = Dl(e, t, n, r)),
          o === null && zs(e, t, r, wo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else zs(e, t, r, null, n);
  }
}
var wo = null;
function Dl(e, t, n, r) {
  if (((wo = null), (e = xa(r)), (e = un(e)), e !== null))
    if (((t = kn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _d(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (wo = e), null;
}
function Dd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (sg()) {
        case Aa:
          return 1;
        case Cd:
          return 4;
        case yo:
        case lg:
          return 16;
        case Td:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rt = null,
  Da = null,
  no = null;
function Id() {
  if (no) return no;
  var e,
    t = Da,
    n = t.length,
    r,
    i = "value" in Rt ? Rt.value : Rt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (no = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ro(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Mi() {
  return !0;
}
function nc() {
  return !1;
}
function Me(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Mi
        : nc),
      (this.isPropagationStopped = nc),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Mi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Mi));
      },
      persist: function () {},
      isPersistent: Mi,
    }),
    t
  );
}
var vr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ia = Me(vr),
  yi = Q({}, vr, { view: 0, detail: 0 }),
  Eg = Me(yi),
  Os,
  Ls,
  Ar,
  Go = Q({}, yi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ra,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ar &&
            (Ar && e.type === "mousemove"
              ? ((Os = e.screenX - Ar.screenX), (Ls = e.screenY - Ar.screenY))
              : (Ls = Os = 0),
            (Ar = e)),
          Os);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ls;
    },
  }),
  rc = Me(Go),
  wg = Q({}, Go, { dataTransfer: 0 }),
  Sg = Me(wg),
  Cg = Q({}, yi, { relatedTarget: 0 }),
  Ps = Me(Cg),
  Tg = Q({}, vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kg = Me(Tg),
  Ng = Q({}, vr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  xg = Me(Ng),
  Ag = Q({}, vr, { data: 0 }),
  ic = Me(Ag),
  Og = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Lg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Pg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Dg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pg[e]) ? !!t[e] : !1;
}
function Ra() {
  return Dg;
}
var Ig = Q({}, yi, {
    key: function (e) {
      if (e.key) {
        var t = Og[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ro(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Lg[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ra,
    charCode: function (e) {
      return e.type === "keypress" ? ro(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ro(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Rg = Me(Ig),
  $g = Q({}, Go, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  oc = Me($g),
  Mg = Q({}, yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ra,
  }),
  jg = Me(Mg),
  zg = Q({}, vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bg = Me(zg),
  Fg = Q({}, Go, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Vg = Me(Fg),
  Ug = [9, 13, 27, 32],
  $a = wt && "CompositionEvent" in window,
  Fr = null;
wt && "documentMode" in document && (Fr = document.documentMode);
var Wg = wt && "TextEvent" in window && !Fr,
  Rd = wt && (!$a || (Fr && 8 < Fr && 11 >= Fr)),
  sc = " ",
  lc = !1;
function $d(e, t) {
  switch (e) {
    case "keyup":
      return Ug.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Md(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var jn = !1;
function Bg(e, t) {
  switch (e) {
    case "compositionend":
      return Md(t);
    case "keypress":
      return t.which !== 32 ? null : ((lc = !0), sc);
    case "textInput":
      return (e = t.data), e === sc && lc ? null : e;
    default:
      return null;
  }
}
function Hg(e, t) {
  if (jn)
    return e === "compositionend" || (!$a && $d(e, t))
      ? ((e = Id()), (no = Da = Rt = null), (jn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Rd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Kg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ac(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Kg[e.type] : t === "textarea";
}
function jd(e, t, n, r) {
  hd(r),
    (t = So(t, "onChange")),
    0 < t.length &&
      ((n = new Ia("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vr = null,
  ti = null;
function Yg(e) {
  Qd(e, 0);
}
function Xo(e) {
  var t = Fn(e);
  if (ld(t)) return e;
}
function Qg(e, t) {
  if (e === "change") return t;
}
var zd = !1;
if (wt) {
  var Ds;
  if (wt) {
    var Is = "oninput" in document;
    if (!Is) {
      var uc = document.createElement("div");
      uc.setAttribute("oninput", "return;"),
        (Is = typeof uc.oninput == "function");
    }
    Ds = Is;
  } else Ds = !1;
  zd = Ds && (!document.documentMode || 9 < document.documentMode);
}
function cc() {
  Vr && (Vr.detachEvent("onpropertychange", bd), (ti = Vr = null));
}
function bd(e) {
  if (e.propertyName === "value" && Xo(ti)) {
    var t = [];
    jd(t, ti, e, xa(e)), yd(Yg, t);
  }
}
function Gg(e, t, n) {
  e === "focusin"
    ? (cc(), (Vr = t), (ti = n), Vr.attachEvent("onpropertychange", bd))
    : e === "focusout" && cc();
}
function Xg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xo(ti);
}
function qg(e, t) {
  if (e === "click") return Xo(t);
}
function Zg(e, t) {
  if (e === "input" || e === "change") return Xo(t);
}
function Jg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var et = typeof Object.is == "function" ? Object.is : Jg;
function ni(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!hl.call(t, i) || !et(e[i], t[i])) return !1;
  }
  return !0;
}
function fc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function dc(e, t) {
  var n = fc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = fc(n);
  }
}
function Fd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Fd(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Vd() {
  for (var e = window, t = mo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = mo(e.document);
  }
  return t;
}
function Ma(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ev(e) {
  var t = Vd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Fd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ma(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = dc(n, o));
        var s = dc(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var tv = wt && "documentMode" in document && 11 >= document.documentMode,
  zn = null,
  Il = null,
  Ur = null,
  Rl = !1;
function pc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Rl ||
    zn == null ||
    zn !== mo(r) ||
    ((r = zn),
    "selectionStart" in r && Ma(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ur && ni(Ur, r)) ||
      ((Ur = r),
      (r = So(Il, "onSelect")),
      0 < r.length &&
        ((t = new Ia("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zn))));
}
function ji(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var bn = {
    animationend: ji("Animation", "AnimationEnd"),
    animationiteration: ji("Animation", "AnimationIteration"),
    animationstart: ji("Animation", "AnimationStart"),
    transitionend: ji("Transition", "TransitionEnd"),
  },
  Rs = {},
  Ud = {};
wt &&
  ((Ud = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete bn.animationend.animation,
    delete bn.animationiteration.animation,
    delete bn.animationstart.animation),
  "TransitionEvent" in window || delete bn.transitionend.transition);
function qo(e) {
  if (Rs[e]) return Rs[e];
  if (!bn[e]) return e;
  var t = bn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ud) return (Rs[e] = t[n]);
  return e;
}
var Wd = qo("animationend"),
  Bd = qo("animationiteration"),
  Hd = qo("animationstart"),
  Kd = qo("transitionend"),
  Yd = new Map(),
  hc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function qt(e, t) {
  Yd.set(e, t), Tn(t, [e]);
}
for (var $s = 0; $s < hc.length; $s++) {
  var Ms = hc[$s],
    nv = Ms.toLowerCase(),
    rv = Ms[0].toUpperCase() + Ms.slice(1);
  qt(nv, "on" + rv);
}
qt(Wd, "onAnimationEnd");
qt(Bd, "onAnimationIteration");
qt(Hd, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(Kd, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
Tn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Tn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Tn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Tn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var jr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  iv = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));
function mc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ng(r, t, void 0, e), (e.currentTarget = null);
}
function Qd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          mc(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          mc(i, l, u), (o = a);
        }
    }
  }
  if (vo) throw ((e = Ol), (vo = !1), (Ol = null), e);
}
function U(e, t) {
  var n = t[bl];
  n === void 0 && (n = t[bl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Gd(t, e, 2, !1), n.add(r));
}
function js(e, t, n) {
  var r = 0;
  t && (r |= 4), Gd(n, e, r, t);
}
var zi = "_reactListening" + Math.random().toString(36).slice(2);
function ri(e) {
  if (!e[zi]) {
    (e[zi] = !0),
      nd.forEach(function (n) {
        n !== "selectionchange" && (iv.has(n) || js(n, !1, e), js(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zi] || ((t[zi] = !0), js("selectionchange", !1, t));
  }
}
function Gd(e, t, n, r) {
  switch (Dd(t)) {
    case 1:
      var i = yg;
      break;
    case 4:
      i = _g;
      break;
    default:
      i = Pa;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Al ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function zs(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = un(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  yd(function () {
    var u = o,
      c = xa(n),
      p = [];
    e: {
      var m = Yd.get(e);
      if (m !== void 0) {
        var v = Ia,
          _ = e;
        switch (e) {
          case "keypress":
            if (ro(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Rg;
            break;
          case "focusin":
            (_ = "focus"), (v = Ps);
            break;
          case "focusout":
            (_ = "blur"), (v = Ps);
            break;
          case "beforeblur":
          case "afterblur":
            v = Ps;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = rc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Sg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = jg;
            break;
          case Wd:
          case Bd:
          case Hd:
            v = kg;
            break;
          case Kd:
            v = bg;
            break;
          case "scroll":
            v = Eg;
            break;
          case "wheel":
            v = Vg;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = xg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = oc;
        }
        var y = (t & 4) !== 0,
          E = !y && e === "scroll",
          d = y ? (m !== null ? m + "Capture" : null) : m;
        y = [];
        for (var f = u, h; f !== null; ) {
          h = f;
          var g = h.stateNode;
          if (
            (h.tag === 5 &&
              g !== null &&
              ((h = g),
              d !== null && ((g = qr(f, d)), g != null && y.push(ii(f, g, h)))),
            E)
          )
            break;
          f = f.return;
        }
        0 < y.length &&
          ((m = new v(m, _, null, n, c)), p.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Nl &&
            (_ = n.relatedTarget || n.fromElement) &&
            (un(_) || _[St]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          v
            ? ((_ = n.relatedTarget || n.toElement),
              (v = u),
              (_ = _ ? un(_) : null),
              _ !== null &&
                ((E = kn(_)), _ !== E || (_.tag !== 5 && _.tag !== 6)) &&
                (_ = null))
            : ((v = null), (_ = u)),
          v !== _)
        ) {
          if (
            ((y = rc),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = oc),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (E = v == null ? m : Fn(v)),
            (h = _ == null ? m : Fn(_)),
            (m = new y(g, f + "leave", v, n, c)),
            (m.target = E),
            (m.relatedTarget = h),
            (g = null),
            un(c) === u &&
              ((y = new y(d, f + "enter", _, n, c)),
              (y.target = h),
              (y.relatedTarget = E),
              (g = y)),
            (E = g),
            v && _)
          )
            t: {
              for (y = v, d = _, f = 0, h = y; h; h = On(h)) f++;
              for (h = 0, g = d; g; g = On(g)) h++;
              for (; 0 < f - h; ) (y = On(y)), f--;
              for (; 0 < h - f; ) (d = On(d)), h--;
              for (; f--; ) {
                if (y === d || (d !== null && y === d.alternate)) break t;
                (y = On(y)), (d = On(d));
              }
              y = null;
            }
          else y = null;
          v !== null && gc(p, m, v, y, !1),
            _ !== null && E !== null && gc(p, E, _, y, !0);
        }
      }
      e: {
        if (
          ((m = u ? Fn(u) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var w = Qg;
        else if (ac(m))
          if (zd) w = Zg;
          else {
            w = Xg;
            var k = Gg;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (w = qg);
        if (w && (w = w(e, u))) {
          jd(p, w, n, c);
          break e;
        }
        k && k(e, m, u),
          e === "focusout" &&
            (k = m._wrapperState) &&
            k.controlled &&
            m.type === "number" &&
            wl(m, "number", m.value);
      }
      switch (((k = u ? Fn(u) : window), e)) {
        case "focusin":
          (ac(k) || k.contentEditable === "true") &&
            ((zn = k), (Il = u), (Ur = null));
          break;
        case "focusout":
          Ur = Il = zn = null;
          break;
        case "mousedown":
          Rl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Rl = !1), pc(p, n, c);
          break;
        case "selectionchange":
          if (tv) break;
        case "keydown":
        case "keyup":
          pc(p, n, c);
      }
      var N;
      if ($a)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        jn
          ? $d(e, n) && (x = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x &&
        (Rd &&
          n.locale !== "ko" &&
          (jn || x !== "onCompositionStart"
            ? x === "onCompositionEnd" && jn && (N = Id())
            : ((Rt = c),
              (Da = "value" in Rt ? Rt.value : Rt.textContent),
              (jn = !0))),
        (k = So(u, x)),
        0 < k.length &&
          ((x = new ic(x, e, null, n, c)),
          p.push({ event: x, listeners: k }),
          N ? (x.data = N) : ((N = Md(n)), N !== null && (x.data = N)))),
        (N = Wg ? Bg(e, n) : Hg(e, n)) &&
          ((u = So(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new ic("onBeforeInput", "beforeinput", null, n, c)),
            p.push({ event: c, listeners: u }),
            (c.data = N)));
    }
    Qd(p, t);
  });
}
function ii(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function So(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = qr(e, n)),
      o != null && r.unshift(ii(e, o, i)),
      (o = qr(e, t)),
      o != null && r.push(ii(e, o, i))),
      (e = e.return);
  }
  return r;
}
function On(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function gc(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = qr(n, o)), a != null && s.unshift(ii(n, a, l)))
        : i || ((a = qr(n, o)), a != null && s.push(ii(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var ov = /\r\n?/g,
  sv = /\u0000|\uFFFD/g;
function vc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ov,
      `
`,
    )
    .replace(sv, "");
}
function bi(e, t, n) {
  if (((t = vc(t)), vc(e) !== t && n)) throw Error(C(425));
}
function Co() {}
var $l = null,
  Ml = null;
function jl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var zl = typeof setTimeout == "function" ? setTimeout : void 0,
  lv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  yc = typeof Promise == "function" ? Promise : void 0,
  av =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof yc < "u"
        ? function (e) {
            return yc.resolve(null).then(e).catch(uv);
          }
        : zl;
function uv(e) {
  setTimeout(function () {
    throw e;
  });
}
function bs(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ei(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ei(t);
}
function Ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function _c(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var yr = Math.random().toString(36).slice(2),
  ot = "__reactFiber$" + yr,
  oi = "__reactProps$" + yr,
  St = "__reactContainer$" + yr,
  bl = "__reactEvents$" + yr,
  cv = "__reactListeners$" + yr,
  fv = "__reactHandles$" + yr;
function un(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[St] || n[ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = _c(e); e !== null; ) {
          if ((n = e[ot])) return n;
          e = _c(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function _i(e) {
  return (
    (e = e[ot] || e[St]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Zo(e) {
  return e[oi] || null;
}
var Fl = [],
  Vn = -1;
function Zt(e) {
  return { current: e };
}
function W(e) {
  0 > Vn || ((e.current = Fl[Vn]), (Fl[Vn] = null), Vn--);
}
function F(e, t) {
  Vn++, (Fl[Vn] = e.current), (e.current = t);
}
var Yt = {},
  de = Zt(Yt),
  Te = Zt(!1),
  vn = Yt;
function nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ke(e) {
  return (e = e.childContextTypes), e != null;
}
function To() {
  W(Te), W(de);
}
function Ec(e, t, n) {
  if (de.current !== Yt) throw Error(C(168));
  F(de, t), F(Te, n);
}
function Xd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, Gm(e) || "Unknown", i));
  return Q({}, n, r);
}
function ko(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Yt),
    (vn = de.current),
    F(de, e),
    F(Te, Te.current),
    !0
  );
}
function wc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Xd(e, t, vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Te),
      W(de),
      F(de, e))
    : W(Te),
    F(Te, n);
}
var mt = null,
  Jo = !1,
  Fs = !1;
function qd(e) {
  mt === null ? (mt = [e]) : mt.push(e);
}
function dv(e) {
  (Jo = !0), qd(e);
}
function Jt() {
  if (!Fs && mt !== null) {
    Fs = !0;
    var e = 0,
      t = b;
    try {
      var n = mt;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (mt = null), (Jo = !1);
    } catch (i) {
      throw (mt !== null && (mt = mt.slice(e + 1)), Sd(Aa, Jt), i);
    } finally {
      (b = t), (Fs = !1);
    }
  }
  return null;
}
var Un = [],
  Wn = 0,
  No = null,
  xo = 0,
  ze = [],
  be = 0,
  yn = null,
  gt = 1,
  vt = "";
function ln(e, t) {
  (Un[Wn++] = xo), (Un[Wn++] = No), (No = e), (xo = t);
}
function Zd(e, t, n) {
  (ze[be++] = gt), (ze[be++] = vt), (ze[be++] = yn), (yn = e);
  var r = gt;
  e = vt;
  var i = 32 - Ze(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ze(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (gt = (1 << (32 - Ze(t) + i)) | (n << i) | r),
      (vt = o + e);
  } else (gt = (1 << o) | (n << i) | r), (vt = e);
}
function ja(e) {
  e.return !== null && (ln(e, 1), Zd(e, 1, 0));
}
function za(e) {
  for (; e === No; )
    (No = Un[--Wn]), (Un[Wn] = null), (xo = Un[--Wn]), (Un[Wn] = null);
  for (; e === yn; )
    (yn = ze[--be]),
      (ze[be] = null),
      (vt = ze[--be]),
      (ze[be] = null),
      (gt = ze[--be]),
      (ze[be] = null);
}
var Le = null,
  Oe = null,
  H = !1,
  qe = null;
function Jd(e, t) {
  var n = Fe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Sc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Le = e), (Oe = Ft(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Le = e), (Oe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = yn !== null ? { id: gt, overflow: vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Fe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Le = e),
            (Oe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Vl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ul(e) {
  if (H) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!Sc(e, t)) {
        if (Vl(e)) throw Error(C(418));
        t = Ft(n.nextSibling);
        var r = Le;
        t && Sc(e, t)
          ? Jd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Le = e));
      }
    } else {
      if (Vl(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Le = e);
    }
  }
}
function Cc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Le = e;
}
function Fi(e) {
  if (e !== Le) return !1;
  if (!H) return Cc(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !jl(e.type, e.memoizedProps))),
    t && (t = Oe))
  ) {
    if (Vl(e)) throw (ep(), Error(C(418)));
    for (; t; ) Jd(e, t), (t = Ft(t.nextSibling));
  }
  if ((Cc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Oe = Ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Oe = null;
    }
  } else Oe = Le ? Ft(e.stateNode.nextSibling) : null;
  return !0;
}
function ep() {
  for (var e = Oe; e; ) e = Ft(e.nextSibling);
}
function rr() {
  (Oe = Le = null), (H = !1);
}
function ba(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var pv = Nt.ReactCurrentBatchConfig;
function Ge(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ao = Zt(null),
  Oo = null,
  Bn = null,
  Fa = null;
function Va() {
  Fa = Bn = Oo = null;
}
function Ua(e) {
  var t = Ao.current;
  W(Ao), (e._currentValue = t);
}
function Wl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jn(e, t) {
  (Oo = e),
    (Fa = Bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function We(e) {
  var t = e._currentValue;
  if (Fa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
      if (Oo === null) throw Error(C(308));
      (Bn = e), (Oo.dependencies = { lanes: 0, firstContext: e });
    } else Bn = Bn.next = e;
  return t;
}
var cn = null;
function Wa(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function tp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Wa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Ct(e, r)
  );
}
function Ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Pt = !1;
function Ba(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function np(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), j & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Ct(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Wa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Ct(e, n)
  );
}
function io(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oa(e, n);
  }
}
function Tc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Lo(e, t, n, r) {
  var i = e.updateQueue;
  Pt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var p = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var m = l.lane,
        v = l.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var _ = e,
            y = l;
          switch (((m = t), (v = n), y.tag)) {
            case 1:
              if (((_ = y.payload), typeof _ == "function")) {
                p = _.call(v, p, m);
                break e;
              }
              p = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (
                ((_ = y.payload),
                (m = typeof _ == "function" ? _.call(v, p, m) : _),
                m == null)
              )
                break e;
              p = Q({}, p, m);
              break e;
            case 2:
              Pt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [l]) : m.push(l));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (a = p)) : (c = c.next = v),
          (s |= m);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (m = l),
          (l = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = p),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (En |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function kc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var rp = new td.Component().refs;
function Bl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var es = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? kn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = Wt(e),
      o = yt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Vt(e, o, i)),
      t !== null && (Je(t, e, i, r), io(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = Wt(e),
      o = yt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Vt(e, o, i)),
      t !== null && (Je(t, e, i, r), io(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = Wt(e),
      i = yt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Vt(e, i, r)),
      t !== null && (Je(t, e, r, n), io(t, e, r));
  },
};
function Nc(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ni(n, r) || !ni(i, o)
        : !0
  );
}
function ip(e, t, n) {
  var r = !1,
    i = Yt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = We(o))
      : ((i = ke(t) ? vn : de.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? nr(e, i) : Yt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = es),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function xc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && es.enqueueReplaceState(t, t.state, null);
}
function Hl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = rp), Ba(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = We(o))
    : ((o = ke(t) ? vn : de.current), (i.context = nr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Bl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && es.enqueueReplaceState(i, i.state, null),
      Lo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Or(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === rp && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Vi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Ac(e) {
  var t = e._init;
  return t(e._payload);
}
function op(e) {
  function t(d, f) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [f]), (d.flags |= 16)) : h.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function i(d, f) {
    return (d = Bt(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((d.flags |= 2), f) : h)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function l(d, f, h, g) {
    return f === null || f.tag !== 6
      ? ((f = Ys(h, d.mode, g)), (f.return = d), f)
      : ((f = i(f, h)), (f.return = d), f);
  }
  function a(d, f, h, g) {
    var w = h.type;
    return w === Mn
      ? c(d, f, h.props.children, g, h.key)
      : f !== null &&
          (f.elementType === w ||
            (typeof w == "object" &&
              w !== null &&
              w.$$typeof === Lt &&
              Ac(w) === f.type))
        ? ((g = i(f, h.props)), (g.ref = Or(d, f, h)), (g.return = d), g)
        : ((g = co(h.type, h.key, h.props, null, d.mode, g)),
          (g.ref = Or(d, f, h)),
          (g.return = d),
          g);
  }
  function u(d, f, h, g) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = Qs(h, d.mode, g)), (f.return = d), f)
      : ((f = i(f, h.children || [])), (f.return = d), f);
  }
  function c(d, f, h, g, w) {
    return f === null || f.tag !== 7
      ? ((f = mn(h, d.mode, g, w)), (f.return = d), f)
      : ((f = i(f, h)), (f.return = d), f);
  }
  function p(d, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Ys("" + f, d.mode, h)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Li:
          return (
            (h = co(f.type, f.key, f.props, null, d.mode, h)),
            (h.ref = Or(d, null, f)),
            (h.return = d),
            h
          );
        case $n:
          return (f = Qs(f, d.mode, h)), (f.return = d), f;
        case Lt:
          var g = f._init;
          return p(d, g(f._payload), h);
      }
      if ($r(f) || Tr(f))
        return (f = mn(f, d.mode, h, null)), (f.return = d), f;
      Vi(d, f);
    }
    return null;
  }
  function m(d, f, h, g) {
    var w = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return w !== null ? null : l(d, f, "" + h, g);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Li:
          return h.key === w ? a(d, f, h, g) : null;
        case $n:
          return h.key === w ? u(d, f, h, g) : null;
        case Lt:
          return (w = h._init), m(d, f, w(h._payload), g);
      }
      if ($r(h) || Tr(h)) return w !== null ? null : c(d, f, h, g, null);
      Vi(d, h);
    }
    return null;
  }
  function v(d, f, h, g, w) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (d = d.get(h) || null), l(f, d, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Li:
          return (d = d.get(g.key === null ? h : g.key) || null), a(f, d, g, w);
        case $n:
          return (d = d.get(g.key === null ? h : g.key) || null), u(f, d, g, w);
        case Lt:
          var k = g._init;
          return v(d, f, h, k(g._payload), w);
      }
      if ($r(g) || Tr(g)) return (d = d.get(h) || null), c(f, d, g, w, null);
      Vi(f, g);
    }
    return null;
  }
  function _(d, f, h, g) {
    for (
      var w = null, k = null, N = f, x = (f = 0), $ = null;
      N !== null && x < h.length;
      x++
    ) {
      N.index > x ? (($ = N), (N = null)) : ($ = N.sibling);
      var P = m(d, N, h[x], g);
      if (P === null) {
        N === null && (N = $);
        break;
      }
      e && N && P.alternate === null && t(d, N),
        (f = o(P, f, x)),
        k === null ? (w = P) : (k.sibling = P),
        (k = P),
        (N = $);
    }
    if (x === h.length) return n(d, N), H && ln(d, x), w;
    if (N === null) {
      for (; x < h.length; x++)
        (N = p(d, h[x], g)),
          N !== null &&
            ((f = o(N, f, x)), k === null ? (w = N) : (k.sibling = N), (k = N));
      return H && ln(d, x), w;
    }
    for (N = r(d, N); x < h.length; x++)
      ($ = v(N, d, x, h[x], g)),
        $ !== null &&
          (e && $.alternate !== null && N.delete($.key === null ? x : $.key),
          (f = o($, f, x)),
          k === null ? (w = $) : (k.sibling = $),
          (k = $));
    return (
      e &&
        N.forEach(function (z) {
          return t(d, z);
        }),
      H && ln(d, x),
      w
    );
  }
  function y(d, f, h, g) {
    var w = Tr(h);
    if (typeof w != "function") throw Error(C(150));
    if (((h = w.call(h)), h == null)) throw Error(C(151));
    for (
      var k = (w = null), N = f, x = (f = 0), $ = null, P = h.next();
      N !== null && !P.done;
      x++, P = h.next()
    ) {
      N.index > x ? (($ = N), (N = null)) : ($ = N.sibling);
      var z = m(d, N, P.value, g);
      if (z === null) {
        N === null && (N = $);
        break;
      }
      e && N && z.alternate === null && t(d, N),
        (f = o(z, f, x)),
        k === null ? (w = z) : (k.sibling = z),
        (k = z),
        (N = $);
    }
    if (P.done) return n(d, N), H && ln(d, x), w;
    if (N === null) {
      for (; !P.done; x++, P = h.next())
        (P = p(d, P.value, g)),
          P !== null &&
            ((f = o(P, f, x)), k === null ? (w = P) : (k.sibling = P), (k = P));
      return H && ln(d, x), w;
    }
    for (N = r(d, N); !P.done; x++, P = h.next())
      (P = v(N, d, x, P.value, g)),
        P !== null &&
          (e && P.alternate !== null && N.delete(P.key === null ? x : P.key),
          (f = o(P, f, x)),
          k === null ? (w = P) : (k.sibling = P),
          (k = P));
    return (
      e &&
        N.forEach(function (ie) {
          return t(d, ie);
        }),
      H && ln(d, x),
      w
    );
  }
  function E(d, f, h, g) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Mn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Li:
          e: {
            for (var w = h.key, k = f; k !== null; ) {
              if (k.key === w) {
                if (((w = h.type), w === Mn)) {
                  if (k.tag === 7) {
                    n(d, k.sibling),
                      (f = i(k, h.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  k.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Lt &&
                    Ac(w) === k.type)
                ) {
                  n(d, k.sibling),
                    (f = i(k, h.props)),
                    (f.ref = Or(d, k, h)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, k);
                break;
              } else t(d, k);
              k = k.sibling;
            }
            h.type === Mn
              ? ((f = mn(h.props.children, d.mode, g, h.key)),
                (f.return = d),
                (d = f))
              : ((g = co(h.type, h.key, h.props, null, d.mode, g)),
                (g.ref = Or(d, f, h)),
                (g.return = d),
                (d = g));
          }
          return s(d);
        case $n:
          e: {
            for (k = h.key; f !== null; ) {
              if (f.key === k)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(d, f.sibling),
                    (f = i(f, h.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = Qs(h, d.mode, g)), (f.return = d), (d = f);
          }
          return s(d);
        case Lt:
          return (k = h._init), E(d, f, k(h._payload), g);
      }
      if ($r(h)) return _(d, f, h, g);
      if (Tr(h)) return y(d, f, h, g);
      Vi(d, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = i(f, h)), (f.return = d), (d = f))
          : (n(d, f), (f = Ys(h, d.mode, g)), (f.return = d), (d = f)),
        s(d))
      : n(d, f);
  }
  return E;
}
var ir = op(!0),
  sp = op(!1),
  Ei = {},
  lt = Zt(Ei),
  si = Zt(Ei),
  li = Zt(Ei);
function fn(e) {
  if (e === Ei) throw Error(C(174));
  return e;
}
function Ha(e, t) {
  switch ((F(li, t), F(si, e), F(lt, Ei), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Cl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Cl(t, e));
  }
  W(lt), F(lt, t);
}
function or() {
  W(lt), W(si), W(li);
}
function lp(e) {
  fn(li.current);
  var t = fn(lt.current),
    n = Cl(t, e.type);
  t !== n && (F(si, e), F(lt, n));
}
function Ka(e) {
  si.current === e && (W(lt), W(si));
}
var K = Zt(0);
function Po(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Vs = [];
function Ya() {
  for (var e = 0; e < Vs.length; e++)
    Vs[e]._workInProgressVersionPrimary = null;
  Vs.length = 0;
}
var oo = Nt.ReactCurrentDispatcher,
  Us = Nt.ReactCurrentBatchConfig,
  _n = 0,
  Y = null,
  ee = null,
  ne = null,
  Do = !1,
  Wr = !1,
  ai = 0,
  hv = 0;
function ue() {
  throw Error(C(321));
}
function Qa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n])) return !1;
  return !0;
}
function Ga(e, t, n, r, i, o) {
  if (
    ((_n = o),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (oo.current = e === null || e.memoizedState === null ? yv : _v),
    (e = n(r, i)),
    Wr)
  ) {
    o = 0;
    do {
      if (((Wr = !1), (ai = 0), 25 <= o)) throw Error(C(301));
      (o += 1),
        (ne = ee = null),
        (t.updateQueue = null),
        (oo.current = Ev),
        (e = n(r, i));
    } while (Wr);
  }
  if (
    ((oo.current = Io),
    (t = ee !== null && ee.next !== null),
    (_n = 0),
    (ne = ee = Y = null),
    (Do = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Xa() {
  var e = ai !== 0;
  return (ai = 0), e;
}
function it() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (Y.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function Be() {
  if (ee === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = ne === null ? Y.memoizedState : ne.next;
  if (t !== null) (ne = t), (ee = e);
  else {
    if (e === null) throw Error(C(310));
    (ee = e),
      (e = {
        memoizedState: ee.memoizedState,
        baseState: ee.baseState,
        baseQueue: ee.baseQueue,
        queue: ee.queue,
        next: null,
      }),
      ne === null ? (Y.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function ui(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ws(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ee,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((_n & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (s = r)) : (a = a.next = p),
          (Y.lanes |= c),
          (En |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      et(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Y.lanes |= o), (En |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bs(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    et(o, t.memoizedState) || (Ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ap() {}
function up(e, t) {
  var n = Y,
    r = Be(),
    i = t(),
    o = !et(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ce = !0)),
    (r = r.queue),
    qa(dp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ci(9, fp.bind(null, n, r, i, t), void 0, null),
      re === null)
    )
      throw Error(C(349));
    _n & 30 || cp(n, t, i);
  }
  return i;
}
function cp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), pp(t) && hp(e);
}
function dp(e, t, n) {
  return n(function () {
    pp(t) && hp(e);
  });
}
function pp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function hp(e) {
  var t = Ct(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function Oc(e) {
  var t = it();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ui,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = vv.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function ci(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function mp() {
  return Be().memoizedState;
}
function so(e, t, n, r) {
  var i = it();
  (Y.flags |= e),
    (i.memoizedState = ci(1 | t, n, void 0, r === void 0 ? null : r));
}
function ts(e, t, n, r) {
  var i = Be();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ee !== null) {
    var s = ee.memoizedState;
    if (((o = s.destroy), r !== null && Qa(r, s.deps))) {
      i.memoizedState = ci(t, n, o, r);
      return;
    }
  }
  (Y.flags |= e), (i.memoizedState = ci(1 | t, n, o, r));
}
function Lc(e, t) {
  return so(8390656, 8, e, t);
}
function qa(e, t) {
  return ts(2048, 8, e, t);
}
function gp(e, t) {
  return ts(4, 2, e, t);
}
function vp(e, t) {
  return ts(4, 4, e, t);
}
function yp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function _p(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ts(4, 4, yp.bind(null, t, e), n)
  );
}
function Za() {}
function Ep(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wp(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sp(e, t, n) {
  return _n & 21
    ? (et(n, t) || ((n = kd()), (Y.lanes |= n), (En |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function mv(e, t) {
  var n = b;
  (b = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Us.transition;
  Us.transition = {};
  try {
    e(!1), t();
  } finally {
    (b = n), (Us.transition = r);
  }
}
function Cp() {
  return Be().memoizedState;
}
function gv(e, t, n) {
  var r = Wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Tp(e))
  )
    kp(t, n);
  else if (((n = tp(e, t, n, r)), n !== null)) {
    var i = me();
    Je(n, e, r, i), Np(n, t, r);
  }
}
function vv(e, t, n) {
  var r = Wt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Tp(e)) kp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), et(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Wa(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = tp(e, t, i, r)),
      n !== null && ((i = me()), Je(n, e, r, i), Np(n, t, r));
  }
}
function Tp(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function kp(e, t) {
  Wr = Do = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Np(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oa(e, n);
  }
}
var Io = {
    readContext: We,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  yv = {
    readContext: We,
    useCallback: function (e, t) {
      return (it().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: We,
    useEffect: Lc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        so(4194308, 4, yp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return so(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return so(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = it();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = it();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = gv.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = it();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Oc,
    useDebugValue: Za,
    useDeferredValue: function (e) {
      return (it().memoizedState = e);
    },
    useTransition: function () {
      var e = Oc(!1),
        t = e[0];
      return (e = mv.bind(null, e[1])), (it().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        i = it();
      if (H) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), re === null)) throw Error(C(349));
        _n & 30 || cp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Lc(dp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ci(9, fp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = it(),
        t = re.identifierPrefix;
      if (H) {
        var n = vt,
          r = gt;
        (n = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ai++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = hv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _v = {
    readContext: We,
    useCallback: Ep,
    useContext: We,
    useEffect: qa,
    useImperativeHandle: _p,
    useInsertionEffect: gp,
    useLayoutEffect: vp,
    useMemo: wp,
    useReducer: Ws,
    useRef: mp,
    useState: function () {
      return Ws(ui);
    },
    useDebugValue: Za,
    useDeferredValue: function (e) {
      var t = Be();
      return Sp(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Ws(ui)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: ap,
    useSyncExternalStore: up,
    useId: Cp,
    unstable_isNewReconciler: !1,
  },
  Ev = {
    readContext: We,
    useCallback: Ep,
    useContext: We,
    useEffect: qa,
    useImperativeHandle: _p,
    useInsertionEffect: gp,
    useLayoutEffect: vp,
    useMemo: wp,
    useReducer: Bs,
    useRef: mp,
    useState: function () {
      return Bs(ui);
    },
    useDebugValue: Za,
    useDeferredValue: function (e) {
      var t = Be();
      return ee === null ? (t.memoizedState = e) : Sp(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Bs(ui)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: ap,
    useSyncExternalStore: up,
    useId: Cp,
    unstable_isNewReconciler: !1,
  };
function sr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Qm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Hs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Kl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var wv = typeof WeakMap == "function" ? WeakMap : Map;
function xp(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      $o || (($o = !0), (na = r)), Kl(e, t);
    }),
    n
  );
}
function Ap(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Kl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Kl(e, t),
          typeof r != "function" &&
            (Ut === null ? (Ut = new Set([this])) : Ut.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Pc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = $v.bind(null, e, t, n)), t.then(e, e));
}
function Dc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ic(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = yt(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Sv = Nt.ReactCurrentOwner,
  Ce = !1;
function he(e, t, n, r) {
  t.child = e === null ? sp(t, null, n, r) : ir(t, e.child, n, r);
}
function Rc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Jn(t, i),
    (r = Ga(e, t, n, r, o, i)),
    (n = Xa()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Tt(e, t, i))
      : (H && n && ja(t), (t.flags |= 1), he(e, t, r, i), t.child)
  );
}
function $c(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !su(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Op(e, t, o, r, i))
      : ((e = co(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ni), n(s, r) && e.ref === t.ref)
    )
      return Tt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Bt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Op(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ni(o, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), Tt(e, t, i);
  }
  return Yl(e, t, n, r, i);
}
function Lp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(Kn, Ae),
        (Ae |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(Kn, Ae),
          (Ae |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        F(Kn, Ae),
        (Ae |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(Kn, Ae),
      (Ae |= r);
  return he(e, t, i, n), t.child;
}
function Pp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Yl(e, t, n, r, i) {
  var o = ke(n) ? vn : de.current;
  return (
    (o = nr(t, o)),
    Jn(t, i),
    (n = Ga(e, t, n, r, o, i)),
    (r = Xa()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Tt(e, t, i))
      : (H && r && ja(t), (t.flags |= 1), he(e, t, n, i), t.child)
  );
}
function Mc(e, t, n, r, i) {
  if (ke(n)) {
    var o = !0;
    ko(t);
  } else o = !1;
  if ((Jn(t, i), t.stateNode === null))
    lo(e, t), ip(t, n, r), Hl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = We(u))
      : ((u = ke(n) ? vn : de.current), (u = nr(t, u)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && xc(t, s, r, u)),
      (Pt = !1);
    var m = t.memoizedState;
    (s.state = m),
      Lo(t, r, s, i),
      (a = t.memoizedState),
      l !== r || m !== a || Te.current || Pt
        ? (typeof c == "function" && (Bl(t, n, c, r), (a = t.memoizedState)),
          (l = Pt || Nc(t, n, l, r, m, a, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      np(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ge(t.type, l)),
      (s.props = u),
      (p = t.pendingProps),
      (m = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = We(a))
        : ((a = ke(n) ? vn : de.current), (a = nr(t, a)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== p || m !== a) && xc(t, s, r, a)),
      (Pt = !1),
      (m = t.memoizedState),
      (s.state = m),
      Lo(t, r, s, i);
    var _ = t.memoizedState;
    l !== p || m !== _ || Te.current || Pt
      ? (typeof v == "function" && (Bl(t, n, v, r), (_ = t.memoizedState)),
        (u = Pt || Nc(t, n, u, r, m, _, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, _, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, _, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = _)),
        (s.props = r),
        (s.state = _),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ql(e, t, n, r, o, i);
}
function Ql(e, t, n, r, i, o) {
  Pp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && wc(t, n, !1), Tt(e, t, o);
  (r = t.stateNode), (Sv.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = ir(t, e.child, null, o)), (t.child = ir(t, null, l, o)))
      : he(e, t, l, o),
    (t.memoizedState = r.state),
    i && wc(t, n, !0),
    t.child
  );
}
function Dp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ec(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ec(e, t.context, !1),
    Ha(e, t.containerInfo);
}
function jc(e, t, n, r, i) {
  return rr(), ba(i), (t.flags |= 256), he(e, t, n, r), t.child;
}
var Gl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Xl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ip(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    F(K, i & 1),
    e === null)
  )
    return (
      Ul(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = is(s, r, 0, null)),
              (e = mn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Xl(n)),
              (t.memoizedState = Gl),
              e)
            : Ja(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Cv(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Bt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Bt(l, o)) : ((o = mn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Xl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Gl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Bt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ja(e, t) {
  return (
    (t = is({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ui(e, t, n, r) {
  return (
    r !== null && ba(r),
    ir(t, e.child, null, n),
    (e = Ja(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Cv(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Hs(Error(C(422)))), Ui(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = is({ mode: "visible", children: r.children }, i, 0, null)),
          (o = mn(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && ir(t, e.child, null, s),
          (t.child.memoizedState = Xl(s)),
          (t.memoizedState = Gl),
          o);
  if (!(t.mode & 1)) return Ui(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(C(419))), (r = Hs(o, r, void 0)), Ui(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Ce || l)) {
    if (((r = re), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Ct(e, i), Je(r, e, i, -1));
    }
    return ou(), (r = Hs(Error(C(421)))), Ui(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Mv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Oe = Ft(i.nextSibling)),
      (Le = t),
      (H = !0),
      (qe = null),
      e !== null &&
        ((ze[be++] = gt),
        (ze[be++] = vt),
        (ze[be++] = yn),
        (gt = e.id),
        (vt = e.overflow),
        (yn = t)),
      (t = Ja(t, r.children)),
      (t.flags |= 4096),
      t);
}
function zc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wl(e.return, t, n);
}
function Ks(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Rp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((he(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && zc(e, n, t);
        else if (e.tag === 19) zc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Po(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ks(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Po(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ks(t, !0, n, null, o);
        break;
      case "together":
        Ks(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function lo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (En |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Bt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Bt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Tv(e, t, n) {
  switch (t.tag) {
    case 3:
      Dp(t), rr();
      break;
    case 5:
      lp(t);
      break;
    case 1:
      ke(t.type) && ko(t);
      break;
    case 4:
      Ha(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      F(Ao, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ip(e, t, n)
            : (F(K, K.current & 1),
              (e = Tt(e, t, n)),
              e !== null ? e.sibling : null);
      F(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        F(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Lp(e, t, n);
  }
  return Tt(e, t, n);
}
var $p, ql, Mp, jp;
$p = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ql = function () {};
Mp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), fn(lt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = _l(e, i)), (r = _l(e, r)), (o = []);
        break;
      case "select":
        (i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Sl(e, i)), (r = Sl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Co);
    }
    Tl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Gr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (o = o || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Gr.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && U("scroll", e),
                    o || l === a || (o = []))
                  : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
jp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Lr(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function kv(e, t, n) {
  var r = t.pendingProps;
  switch ((za(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ce(t), null;
    case 1:
      return ke(t.type) && To(), ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        or(),
        W(Te),
        W(de),
        Ya(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (oa(qe), (qe = null)))),
        ql(e, t),
        ce(t),
        null
      );
    case 5:
      Ka(t);
      var i = fn(li.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Mp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ce(t), null;
        }
        if (((e = fn(lt.current)), Fi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ot] = t), (r[oi] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < jr.length; i++) U(jr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Yu(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Gu(r, o), U("invalid", r);
          }
          Tl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      bi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      bi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Gr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              Pi(r), Qu(r, o, !0);
              break;
            case "textarea":
              Pi(r), Xu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Co);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = cd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[ot] = t),
            (e[oi] = r),
            $p(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = kl(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < jr.length; i++) U(jr[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                Yu(e, r), (i = _l(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Gu(e, r), (i = Sl(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            Tl(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? pd(e, a)
                  : o === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && fd(e, a))
                    : o === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Xr(e, a)
                        : typeof a == "number" && Xr(e, "" + a)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Gr.hasOwnProperty(o)
                          ? a != null && o === "onScroll" && U("scroll", e)
                          : a != null && Ca(e, o, a, s));
              }
            switch (n) {
              case "input":
                Pi(e), Qu(e, r, !1);
                break;
              case "textarea":
                Pi(e), Xu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Gn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Gn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Co);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ce(t), null;
    case 6:
      if (e && t.stateNode != null) jp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = fn(li.current)), fn(lt.current), Fi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ot] = t),
            (o = r.nodeValue !== n) && ((e = Le), e !== null))
          )
            switch (e.tag) {
              case 3:
                bi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  bi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ot] = t),
            (t.stateNode = r);
      }
      return ce(t), null;
    case 13:
      if (
        (W(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Oe !== null && t.mode & 1 && !(t.flags & 128))
          ep(), rr(), (t.flags |= 98560), (o = !1);
        else if (((o = Fi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317));
            o[ot] = t;
          } else
            rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ce(t), (o = !1);
        } else qe !== null && (oa(qe), (qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? te === 0 && (te = 3) : ou())),
          t.updateQueue !== null && (t.flags |= 4),
          ce(t),
          null);
    case 4:
      return (
        or(), ql(e, t), e === null && ri(t.stateNode.containerInfo), ce(t), null
      );
    case 10:
      return Ua(t.type._context), ce(t), null;
    case 17:
      return ke(t.type) && To(), ce(t), null;
    case 19:
      if ((W(K), (o = t.memoizedState), o === null)) return ce(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Lr(o, !1);
        else {
          if (te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Po(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Lr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Z() > lr &&
            ((t.flags |= 128), (r = !0), Lr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Po(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Lr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !H)
            )
              return ce(t), null;
          } else
            2 * Z() - o.renderingStartTime > lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Lr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Z()),
          (t.sibling = null),
          (n = K.current),
          F(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (ce(t), null);
    case 22:
    case 23:
      return (
        iu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ae & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Nv(e, t) {
  switch ((za(t), t.tag)) {
    case 1:
      return (
        ke(t.type) && To(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        or(),
        W(Te),
        W(de),
        Ya(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ka(t), null;
    case 13:
      if ((W(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        rr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(K), null;
    case 4:
      return or(), null;
    case 10:
      return Ua(t.type._context), null;
    case 22:
    case 23:
      return iu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wi = !1,
  fe = !1,
  xv = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else n.current = null;
}
function Zl(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var bc = !1;
function Av(e, t) {
  if ((($l = Eo), (e = Vd()), Ma(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (i !== 0 && p.nodeType !== 3) || (l = s + i),
                p !== o || (r !== 0 && p.nodeType !== 3) || (a = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (m = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++u === i && (l = s),
                m === o && ++c === r && (a = s),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = v;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ml = { focusedElem: e, selectionRange: n }, Eo = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var _ = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var y = _.memoizedProps,
                    E = _.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ge(t.type, y),
                      E,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (g) {
          G(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (_ = bc), (bc = !1), _;
}
function Br(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Zl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ns(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Jl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function zp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), zp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ot], delete t[oi], delete t[bl], delete t[cv], delete t[fv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function bp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ea(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Co));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ea(e, t, n), e = e.sibling; e !== null; ) ea(e, t, n), (e = e.sibling);
}
function ta(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ta(e, t, n), e = e.sibling; e !== null; ) ta(e, t, n), (e = e.sibling);
}
var se = null,
  Xe = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) Fp(e, t, n), (n = n.sibling);
}
function Fp(e, t, n) {
  if (st && typeof st.onCommitFiberUnmount == "function")
    try {
      st.onCommitFiberUnmount(Qo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || Hn(n, t);
    case 6:
      var r = se,
        i = Xe;
      (se = null),
        At(e, t, n),
        (se = r),
        (Xe = i),
        se !== null &&
          (Xe
            ? ((e = se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null &&
        (Xe
          ? ((e = se),
            (n = n.stateNode),
            e.nodeType === 8
              ? bs(e.parentNode, n)
              : e.nodeType === 1 && bs(e, n),
            ei(e))
          : bs(se, n.stateNode));
      break;
    case 4:
      (r = se),
        (i = Xe),
        (se = n.stateNode.containerInfo),
        (Xe = !0),
        At(e, t, n),
        (se = r),
        (Xe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Zl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (Hn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          G(n, t, l);
        }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), At(e, t, n), (fe = r))
        : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function Vc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new xv()),
      t.forEach(function (r) {
        var i = jv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (se = l.stateNode), (Xe = !1);
              break e;
            case 3:
              (se = l.stateNode.containerInfo), (Xe = !0);
              break e;
            case 4:
              (se = l.stateNode.containerInfo), (Xe = !0);
              break e;
          }
          l = l.return;
        }
        if (se === null) throw Error(C(160));
        Fp(o, s, i), (se = null), (Xe = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        G(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Vp(t, e), (t = t.sibling);
}
function Vp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), rt(e), r & 4)) {
        try {
          Br(3, e, e.return), ns(3, e);
        } catch (y) {
          G(e, e.return, y);
        }
        try {
          Br(5, e, e.return);
        } catch (y) {
          G(e, e.return, y);
        }
      }
      break;
    case 1:
      Qe(t, e), rt(e), r & 512 && n !== null && Hn(n, n.return);
      break;
    case 5:
      if (
        (Qe(t, e),
        rt(e),
        r & 512 && n !== null && Hn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Xr(i, "");
        } catch (y) {
          G(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && ad(i, o),
              kl(l, s);
            var u = kl(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                p = a[s + 1];
              c === "style"
                ? pd(i, p)
                : c === "dangerouslySetInnerHTML"
                  ? fd(i, p)
                  : c === "children"
                    ? Xr(i, p)
                    : Ca(i, c, p, u);
            }
            switch (l) {
              case "input":
                El(i, o);
                break;
              case "textarea":
                ud(i, o);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Gn(i, !!o.multiple, v, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Gn(i, !!o.multiple, o.defaultValue, !0)
                      : Gn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[oi] = o;
          } catch (y) {
            G(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          G(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ei(t.containerInfo);
        } catch (y) {
          G(e, e.return, y);
        }
      break;
    case 4:
      Qe(t, e), rt(e);
      break;
    case 13:
      Qe(t, e),
        rt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (nu = Z())),
        r & 4 && Vc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (u = fe) || c), Qe(t, e), (fe = u)) : Qe(t, e),
        rt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (p = L = c; L !== null; ) {
              switch (((m = L), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Br(4, m, m.return);
                  break;
                case 1:
                  Hn(m, m.return);
                  var _ = m.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (_.props = t.memoizedProps),
                        (_.state = t.memoizedState),
                        _.componentWillUnmount();
                    } catch (y) {
                      G(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Hn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Wc(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (L = v)) : Wc(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (i = p.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = dd("display", s)));
              } catch (y) {
                G(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (y) {
                G(e, e.return, y);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Qe(t, e), rt(e), r & 4 && Vc(e);
      break;
    case 21:
      break;
    default:
      Qe(t, e), rt(e);
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Xr(i, ""), (r.flags &= -33));
          var o = Fc(e);
          ta(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Fc(e);
          ea(e, l, s);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      G(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ov(e, t, n) {
  (L = e), Up(e);
}
function Up(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Wi;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || fe;
        l = Wi;
        var u = fe;
        if (((Wi = s), (fe = a) && !u))
          for (L = i; L !== null; )
            (s = L),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Bc(i)
                : a !== null
                  ? ((a.return = s), (L = a))
                  : Bc(i);
        for (; o !== null; ) (L = o), Up(o), (o = o.sibling);
        (L = i), (Wi = l), (fe = u);
      }
      Uc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : Uc(e);
  }
}
function Uc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || ns(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ge(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && kc(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                kc(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var p = c.dehydrated;
                    p !== null && ei(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        fe || (t.flags & 512 && Jl(t));
      } catch (m) {
        G(t, t.return, m);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Wc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Bc(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ns(4, t);
          } catch (a) {
            G(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              G(t, i, a);
            }
          }
          var o = t.return;
          try {
            Jl(t);
          } catch (a) {
            G(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Jl(t);
          } catch (a) {
            G(t, s, a);
          }
      }
    } catch (a) {
      G(t, t.return, a);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (L = l);
      break;
    }
    L = t.return;
  }
}
var Lv = Math.ceil,
  Ro = Nt.ReactCurrentDispatcher,
  eu = Nt.ReactCurrentOwner,
  Ve = Nt.ReactCurrentBatchConfig,
  j = 0,
  re = null,
  J = null,
  le = 0,
  Ae = 0,
  Kn = Zt(0),
  te = 0,
  fi = null,
  En = 0,
  rs = 0,
  tu = 0,
  Hr = null,
  we = null,
  nu = 0,
  lr = 1 / 0,
  ht = null,
  $o = !1,
  na = null,
  Ut = null,
  Bi = !1,
  $t = null,
  Mo = 0,
  Kr = 0,
  ra = null,
  ao = -1,
  uo = 0;
function me() {
  return j & 6 ? Z() : ao !== -1 ? ao : (ao = Z());
}
function Wt(e) {
  return e.mode & 1
    ? j & 2 && le !== 0
      ? le & -le
      : pv.transition !== null
        ? (uo === 0 && (uo = kd()), uo)
        : ((e = b),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Dd(e.type))),
          e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < Kr) throw ((Kr = 0), (ra = null), Error(C(185)));
  vi(e, n, r),
    (!(j & 2) || e !== re) &&
      (e === re && (!(j & 2) && (rs |= n), te === 4 && It(e, le)),
      Ne(e, r),
      n === 1 && j === 0 && !(t.mode & 1) && ((lr = Z() + 500), Jo && Jt()));
}
function Ne(e, t) {
  var n = e.callbackNode;
  pg(e, t);
  var r = _o(e, e === re ? le : 0);
  if (r === 0)
    n !== null && Ju(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ju(n), t === 1))
      e.tag === 0 ? dv(Hc.bind(null, e)) : qd(Hc.bind(null, e)),
        av(function () {
          !(j & 6) && Jt();
        }),
        (n = null);
    else {
      switch (Nd(r)) {
        case 1:
          n = Aa;
          break;
        case 4:
          n = Cd;
          break;
        case 16:
          n = yo;
          break;
        case 536870912:
          n = Td;
          break;
        default:
          n = yo;
      }
      n = Xp(n, Wp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Wp(e, t) {
  if (((ao = -1), (uo = 0), j & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (er() && e.callbackNode !== n) return null;
  var r = _o(e, e === re ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = jo(e, r);
  else {
    t = r;
    var i = j;
    j |= 2;
    var o = Hp();
    (re !== e || le !== t) && ((ht = null), (lr = Z() + 500), hn(e, t));
    do
      try {
        Iv();
        break;
      } catch (l) {
        Bp(e, l);
      }
    while (!0);
    Va(),
      (Ro.current = o),
      (j = i),
      J !== null ? (t = 0) : ((re = null), (le = 0), (t = te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ll(e)), i !== 0 && ((r = i), (t = ia(e, i)))), t === 1)
    )
      throw ((n = fi), hn(e, 0), It(e, r), Ne(e, Z()), n);
    if (t === 6) It(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Pv(i) &&
          ((t = jo(e, r)),
          t === 2 && ((o = Ll(e)), o !== 0 && ((r = o), (t = ia(e, o)))),
          t === 1))
      )
        throw ((n = fi), hn(e, 0), It(e, r), Ne(e, Z()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          an(e, we, ht);
          break;
        case 3:
          if (
            (It(e, r), (r & 130023424) === r && ((t = nu + 500 - Z()), 10 < t))
          ) {
            if (_o(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = zl(an.bind(null, e, we, ht), t);
            break;
          }
          an(e, we, ht);
          break;
        case 4:
          if ((It(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ze(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Lv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = zl(an.bind(null, e, we, ht), r);
            break;
          }
          an(e, we, ht);
          break;
        case 5:
          an(e, we, ht);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Ne(e, Z()), e.callbackNode === n ? Wp.bind(null, e) : null;
}
function ia(e, t) {
  var n = Hr;
  return (
    e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
    (e = jo(e, t)),
    e !== 2 && ((t = we), (we = n), t !== null && oa(t)),
    e
  );
}
function oa(e) {
  we === null ? (we = e) : we.push.apply(we, e);
}
function Pv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!et(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function It(e, t) {
  for (
    t &= ~tu,
      t &= ~rs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ze(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Hc(e) {
  if (j & 6) throw Error(C(327));
  er();
  var t = _o(e, 0);
  if (!(t & 1)) return Ne(e, Z()), null;
  var n = jo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ll(e);
    r !== 0 && ((t = r), (n = ia(e, r)));
  }
  if (n === 1) throw ((n = fi), hn(e, 0), It(e, t), Ne(e, Z()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    an(e, we, ht),
    Ne(e, Z()),
    null
  );
}
function ru(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    (j = n), j === 0 && ((lr = Z() + 500), Jo && Jt());
  }
}
function wn(e) {
  $t !== null && $t.tag === 0 && !(j & 6) && er();
  var t = j;
  j |= 1;
  var n = Ve.transition,
    r = b;
  try {
    if (((Ve.transition = null), (b = 1), e)) return e();
  } finally {
    (b = r), (Ve.transition = n), (j = t), !(j & 6) && Jt();
  }
}
function iu() {
  (Ae = Kn.current), W(Kn);
}
function hn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), lv(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((za(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && To();
          break;
        case 3:
          or(), W(Te), W(de), Ya();
          break;
        case 5:
          Ka(r);
          break;
        case 4:
          or();
          break;
        case 13:
          W(K);
          break;
        case 19:
          W(K);
          break;
        case 10:
          Ua(r.type._context);
          break;
        case 22:
        case 23:
          iu();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (J = e = Bt(e.current, null)),
    (le = Ae = t),
    (te = 0),
    (fi = null),
    (tu = rs = En = 0),
    (we = Hr = null),
    cn !== null)
  ) {
    for (t = 0; t < cn.length; t++)
      if (((n = cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    cn = null;
  }
  return e;
}
function Bp(e, t) {
  do {
    var n = J;
    try {
      if ((Va(), (oo.current = Io), Do)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Do = !1;
      }
      if (
        ((_n = 0),
        (ne = ee = Y = null),
        (Wr = !1),
        (ai = 0),
        (eu.current = null),
        n === null || n.return === null)
      ) {
        (te = 1), (fi = t), (J = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = le),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = Dc(s);
          if (v !== null) {
            (v.flags &= -257),
              Ic(v, s, l, o, t),
              v.mode & 1 && Pc(o, u, t),
              (t = v),
              (a = u);
            var _ = t.updateQueue;
            if (_ === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else _.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Pc(o, u, t), ou();
              break e;
            }
            a = Error(C(426));
          }
        } else if (H && l.mode & 1) {
          var E = Dc(s);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Ic(E, s, l, o, t),
              ba(sr(a, l));
            break e;
          }
        }
        (o = a = sr(a, l)),
          te !== 4 && (te = 2),
          Hr === null ? (Hr = [o]) : Hr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = xp(o, a, t);
              Tc(o, d);
              break e;
            case 1:
              l = a;
              var f = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Ut === null || !Ut.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = Ap(o, l, t);
                Tc(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Yp(n);
    } catch (w) {
      (t = w), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Hp() {
  var e = Ro.current;
  return (Ro.current = Io), e === null ? Io : e;
}
function ou() {
  (te === 0 || te === 3 || te === 2) && (te = 4),
    re === null || (!(En & 268435455) && !(rs & 268435455)) || It(re, le);
}
function jo(e, t) {
  var n = j;
  j |= 2;
  var r = Hp();
  (re !== e || le !== t) && ((ht = null), hn(e, t));
  do
    try {
      Dv();
      break;
    } catch (i) {
      Bp(e, i);
    }
  while (!0);
  if ((Va(), (j = n), (Ro.current = r), J !== null)) throw Error(C(261));
  return (re = null), (le = 0), te;
}
function Dv() {
  for (; J !== null; ) Kp(J);
}
function Iv() {
  for (; J !== null && !ig(); ) Kp(J);
}
function Kp(e) {
  var t = Gp(e.alternate, e, Ae);
  (e.memoizedProps = e.pendingProps),
    t === null ? Yp(e) : (J = t),
    (eu.current = null);
}
function Yp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Nv(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (te = 6), (J = null);
        return;
      }
    } else if (((n = kv(n, t, Ae)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function an(e, t, n) {
  var r = b,
    i = Ve.transition;
  try {
    (Ve.transition = null), (b = 1), Rv(e, t, n, r);
  } finally {
    (Ve.transition = i), (b = r);
  }
  return null;
}
function Rv(e, t, n, r) {
  do er();
  while ($t !== null);
  if (j & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (hg(e, o),
    e === re && ((J = re = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Bi ||
      ((Bi = !0),
      Xp(yo, function () {
        return er(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ve.transition), (Ve.transition = null);
    var s = b;
    b = 1;
    var l = j;
    (j |= 4),
      (eu.current = null),
      Av(e, n),
      Vp(n, e),
      ev(Ml),
      (Eo = !!$l),
      (Ml = $l = null),
      (e.current = n),
      Ov(n),
      og(),
      (j = l),
      (b = s),
      (Ve.transition = o);
  } else e.current = n;
  if (
    (Bi && ((Bi = !1), ($t = e), (Mo = i)),
    (o = e.pendingLanes),
    o === 0 && (Ut = null),
    ag(n.stateNode),
    Ne(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if ($o) throw (($o = !1), (e = na), (na = null), e);
  return (
    Mo & 1 && e.tag !== 0 && er(),
    (o = e.pendingLanes),
    o & 1 ? (e === ra ? Kr++ : ((Kr = 0), (ra = e))) : (Kr = 0),
    Jt(),
    null
  );
}
function er() {
  if ($t !== null) {
    var e = Nd(Mo),
      t = Ve.transition,
      n = b;
    try {
      if (((Ve.transition = null), (b = 16 > e ? 16 : e), $t === null))
        var r = !1;
      else {
        if (((e = $t), ($t = null), (Mo = 0), j & 6)) throw Error(C(331));
        var i = j;
        for (j |= 4, L = e.current; L !== null; ) {
          var o = L,
            s = o.child;
          if (L.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Br(8, c, o);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (L = p);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var m = c.sibling,
                        v = c.return;
                      if ((zp(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (L = m);
                        break;
                      }
                      L = v;
                    }
                }
              }
              var _ = o.alternate;
              if (_ !== null) {
                var y = _.child;
                if (y !== null) {
                  _.child = null;
                  do {
                    var E = y.sibling;
                    (y.sibling = null), (y = E);
                  } while (y !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (L = s);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Br(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (L = d);
                break e;
              }
              L = o.return;
            }
        }
        var f = e.current;
        for (L = f; L !== null; ) {
          s = L;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (L = h);
          else
            e: for (s = f; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ns(9, l);
                  }
                } catch (w) {
                  G(l, l.return, w);
                }
              if (l === s) {
                L = null;
                break e;
              }
              var g = l.sibling;
              if (g !== null) {
                (g.return = l.return), (L = g);
                break e;
              }
              L = l.return;
            }
        }
        if (
          ((j = i), Jt(), st && typeof st.onPostCommitFiberRoot == "function")
        )
          try {
            st.onPostCommitFiberRoot(Qo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (b = n), (Ve.transition = t);
    }
  }
  return !1;
}
function Kc(e, t, n) {
  (t = sr(n, t)),
    (t = xp(e, t, 1)),
    (e = Vt(e, t, 1)),
    (t = me()),
    e !== null && (vi(e, 1, t), Ne(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) Kc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Kc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ut === null || !Ut.has(r)))
        ) {
          (e = sr(n, e)),
            (e = Ap(t, e, 1)),
            (t = Vt(t, e, 1)),
            (e = me()),
            t !== null && (vi(t, 1, e), Ne(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $v(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (le & n) === n &&
      (te === 4 || (te === 3 && (le & 130023424) === le && 500 > Z() - nu)
        ? hn(e, 0)
        : (tu |= n)),
    Ne(e, t);
}
function Qp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ri), (Ri <<= 1), !(Ri & 130023424) && (Ri = 4194304))
      : (t = 1));
  var n = me();
  (e = Ct(e, t)), e !== null && (vi(e, t, n), Ne(e, n));
}
function Mv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Qp(e, n);
}
function jv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Qp(e, n);
}
var Gp;
Gp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), Tv(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), H && t.flags & 1048576 && Zd(t, xo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      lo(e, t), (e = t.pendingProps);
      var i = nr(t, de.current);
      Jn(t, n), (i = Ga(null, t, r, e, i, n));
      var o = Xa();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ke(r) ? ((o = !0), ko(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ba(t),
            (i.updater = es),
            (t.stateNode = i),
            (i._reactInternals = t),
            Hl(t, r, e, n),
            (t = Ql(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && ja(t), he(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (lo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = bv(r)),
          (e = Ge(r, e)),
          i)
        ) {
          case 0:
            t = Yl(null, t, r, e, n);
            break e;
          case 1:
            t = Mc(null, t, r, e, n);
            break e;
          case 11:
            t = Rc(null, t, r, e, n);
            break e;
          case 14:
            t = $c(null, t, r, Ge(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Yl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Mc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Dp(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          np(e, t),
          Lo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = sr(Error(C(423)), t)), (t = jc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = sr(Error(C(424)), t)), (t = jc(e, t, r, n, i));
            break e;
          } else
            for (
              Oe = Ft(t.stateNode.containerInfo.firstChild),
                Le = t,
                H = !0,
                qe = null,
                n = sp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rr(), r === i)) {
            t = Tt(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        lp(t),
        e === null && Ul(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        jl(r, i) ? (s = null) : o !== null && jl(r, o) && (t.flags |= 32),
        Pp(e, t),
        he(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ul(t), null;
    case 13:
      return Ip(e, t, n);
    case 4:
      return (
        Ha(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ir(t, null, r, n)) : he(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Rc(e, t, r, i, n)
      );
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          F(Ao, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (et(o.value, s)) {
            if (o.children === i.children && !Te.current) {
              t = Tt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = yt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Wl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(C(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Wl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        he(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Jn(t, n),
        (i = We(i)),
        (r = r(i)),
        (t.flags |= 1),
        he(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ge(r, t.pendingProps)),
        (i = Ge(r.type, i)),
        $c(e, t, r, i, n)
      );
    case 15:
      return Op(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        lo(e, t),
        (t.tag = 1),
        ke(r) ? ((e = !0), ko(t)) : (e = !1),
        Jn(t, n),
        ip(t, r, i),
        Hl(t, r, i, n),
        Ql(null, t, r, !0, e, n)
      );
    case 19:
      return Rp(e, t, n);
    case 22:
      return Lp(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Xp(e, t) {
  return Sd(e, t);
}
function zv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Fe(e, t, n, r) {
  return new zv(e, t, n, r);
}
function su(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bv(e) {
  if (typeof e == "function") return su(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ka)) return 11;
    if (e === Na) return 14;
  }
  return 2;
}
function Bt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Fe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function co(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) su(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Mn:
        return mn(n.children, i, o, t);
      case Ta:
        (s = 8), (i |= 8);
        break;
      case ml:
        return (
          (e = Fe(12, n, t, i | 2)), (e.elementType = ml), (e.lanes = o), e
        );
      case gl:
        return (e = Fe(13, n, t, i)), (e.elementType = gl), (e.lanes = o), e;
      case vl:
        return (e = Fe(19, n, t, i)), (e.elementType = vl), (e.lanes = o), e;
      case od:
        return is(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case rd:
              s = 10;
              break e;
            case id:
              s = 9;
              break e;
            case ka:
              s = 11;
              break e;
            case Na:
              s = 14;
              break e;
            case Lt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Fe(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function mn(e, t, n, r) {
  return (e = Fe(7, e, r, t)), (e.lanes = n), e;
}
function is(e, t, n, r) {
  return (
    (e = Fe(22, e, r, t)),
    (e.elementType = od),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ys(e, t, n) {
  return (e = Fe(6, e, null, t)), (e.lanes = n), e;
}
function Qs(e, t, n) {
  return (
    (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Fv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = As(0)),
    (this.expirationTimes = As(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = As(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function lu(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new Fv(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Fe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ba(o),
    e
  );
}
function Vv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $n,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qp(e) {
  if (!e) return Yt;
  e = e._reactInternals;
  e: {
    if (kn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return Xd(e, n, t);
  }
  return t;
}
function Zp(e, t, n, r, i, o, s, l, a) {
  return (
    (e = lu(n, r, !0, e, i, o, s, l, a)),
    (e.context = qp(null)),
    (n = e.current),
    (r = me()),
    (i = Wt(n)),
    (o = yt(r, i)),
    (o.callback = t ?? null),
    Vt(n, o, i),
    (e.current.lanes = i),
    vi(e, i, r),
    Ne(e, r),
    e
  );
}
function os(e, t, n, r) {
  var i = t.current,
    o = me(),
    s = Wt(i);
  return (
    (n = qp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Vt(i, t, s)),
    e !== null && (Je(e, i, s, o), io(e, i, s)),
    s
  );
}
function zo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Yc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function au(e, t) {
  Yc(e, t), (e = e.alternate) && Yc(e, t);
}
function Uv() {
  return null;
}
var Jp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function uu(e) {
  this._internalRoot = e;
}
ss.prototype.render = uu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  os(e, t, null, null);
};
ss.prototype.unmount = uu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wn(function () {
      os(null, e, null, null);
    }),
      (t[St] = null);
  }
};
function ss(e) {
  this._internalRoot = e;
}
ss.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Od();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
    Dt.splice(n, 0, e), n === 0 && Pd(e);
  }
};
function cu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ls(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Qc() {}
function Wv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = zo(s);
        o.call(u);
      };
    }
    var s = Zp(t, r, e, 0, null, !1, !1, "", Qc);
    return (
      (e._reactRootContainer = s),
      (e[St] = s.current),
      ri(e.nodeType === 8 ? e.parentNode : e),
      wn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = zo(a);
      l.call(u);
    };
  }
  var a = lu(e, 0, !1, null, null, !1, !1, "", Qc);
  return (
    (e._reactRootContainer = a),
    (e[St] = a.current),
    ri(e.nodeType === 8 ? e.parentNode : e),
    wn(function () {
      os(t, a, n, r);
    }),
    a
  );
}
function as(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = zo(s);
        l.call(a);
      };
    }
    os(t, s, e, i);
  } else s = Wv(n, t, e, i, r);
  return zo(s);
}
xd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mr(t.pendingLanes);
        n !== 0 &&
          (Oa(t, n | 1), Ne(t, Z()), !(j & 6) && ((lr = Z() + 500), Jt()));
      }
      break;
    case 13:
      wn(function () {
        var r = Ct(e, 1);
        if (r !== null) {
          var i = me();
          Je(r, e, 1, i);
        }
      }),
        au(e, 1);
  }
};
La = function (e) {
  if (e.tag === 13) {
    var t = Ct(e, 134217728);
    if (t !== null) {
      var n = me();
      Je(t, e, 134217728, n);
    }
    au(e, 134217728);
  }
};
Ad = function (e) {
  if (e.tag === 13) {
    var t = Wt(e),
      n = Ct(e, t);
    if (n !== null) {
      var r = me();
      Je(n, e, t, r);
    }
    au(e, t);
  }
};
Od = function () {
  return b;
};
Ld = function (e, t) {
  var n = b;
  try {
    return (b = e), t();
  } finally {
    b = n;
  }
};
xl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((El(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Zo(r);
            if (!i) throw Error(C(90));
            ld(r), El(r, i);
          }
        }
      }
      break;
    case "textarea":
      ud(e, n);
      break;
    case "select":
      (t = n.value), t != null && Gn(e, !!n.multiple, t, !1);
  }
};
gd = ru;
vd = wn;
var Bv = { usingClientEntryPoint: !1, Events: [_i, Fn, Zo, hd, md, ru] },
  Pr = {
    findFiberByHostInstance: un,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Hv = {
    bundleType: Pr.bundleType,
    version: Pr.version,
    rendererPackageName: Pr.rendererPackageName,
    rendererConfig: Pr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ed(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Pr.findFiberByHostInstance || Uv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hi.isDisabled && Hi.supportsFiber)
    try {
      (Qo = Hi.inject(Hv)), (st = Hi);
    } catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bv;
$e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cu(t)) throw Error(C(200));
  return Vv(e, t, null, n);
};
$e.createRoot = function (e, t) {
  if (!cu(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = Jp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = lu(e, 1, !1, null, null, n, !1, r, i)),
    (e[St] = t.current),
    ri(e.nodeType === 8 ? e.parentNode : e),
    new uu(t)
  );
};
$e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Ed(t)), (e = e === null ? null : e.stateNode), e;
};
$e.flushSync = function (e) {
  return wn(e);
};
$e.hydrate = function (e, t, n) {
  if (!ls(t)) throw Error(C(200));
  return as(null, e, t, !0, n);
};
$e.hydrateRoot = function (e, t, n) {
  if (!cu(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Jp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Zp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[St] = t.current),
    ri(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ss(t);
};
$e.render = function (e, t, n) {
  if (!ls(t)) throw Error(C(200));
  return as(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function (e) {
  if (!ls(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (wn(function () {
        as(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[St] = null);
        });
      }),
      !0)
    : !1;
};
$e.unstable_batchedUpdates = ru;
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ls(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return as(e, t, n, !1, r);
};
$e.version = "18.2.0-next-9e3b772b8-20220608";
function eh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eh);
    } catch (e) {
      console.error(e);
    }
}
eh(), (Zf.exports = $e);
var Kv = Zf.exports,
  Gc = Kv;
(pl.createRoot = Gc.createRoot), (pl.hydrateRoot = Gc.hydrateRoot);
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function di() {
  return (
    (di = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    di.apply(this, arguments)
  );
}
var Mt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Mt || (Mt = {}));
const Xc = "popstate";
function Yv(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: l } = r.location;
    return sa(
      "",
      { pathname: o, search: s, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : bo(i);
  }
  return Gv(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function fu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Qv() {
  return Math.random().toString(36).substr(2, 8);
}
function qc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function sa(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    di(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? _r(t) : t,
      { state: n, key: (t && t.key) || r || Qv() },
    )
  );
}
function bo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function _r(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Gv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    l = Mt.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), s.replaceState(di({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function p() {
    l = Mt.Pop;
    let E = c(),
      d = E == null ? null : E - u;
    (u = E), a && a({ action: l, location: y.location, delta: d });
  }
  function m(E, d) {
    l = Mt.Push;
    let f = sa(y.location, E, d);
    n && n(f, E), (u = c() + 1);
    let h = qc(f, u),
      g = y.createHref(f);
    try {
      s.pushState(h, "", g);
    } catch (w) {
      if (w instanceof DOMException && w.name === "DataCloneError") throw w;
      i.location.assign(g);
    }
    o && a && a({ action: l, location: y.location, delta: 1 });
  }
  function v(E, d) {
    l = Mt.Replace;
    let f = sa(y.location, E, d);
    n && n(f, E), (u = c());
    let h = qc(f, u),
      g = y.createHref(f);
    s.replaceState(h, "", g),
      o && a && a({ action: l, location: y.location, delta: 0 });
  }
  function _(E) {
    let d = i.location.origin !== "null" ? i.location.origin : i.location.href,
      f = typeof E == "string" ? E : bo(E);
    return (
      X(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f,
      ),
      new URL(f, d)
    );
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return e(i, s);
    },
    listen(E) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Xc, p),
        (a = E),
        () => {
          i.removeEventListener(Xc, p), (a = null);
        }
      );
    },
    createHref(E) {
      return t(i, E);
    },
    createURL: _,
    encodeLocation(E) {
      let d = _(E);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: v,
    go(E) {
      return s.go(E);
    },
  };
  return y;
}
var Zc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Zc || (Zc = {}));
function Xv(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? _r(t) : t,
    i = ar(r.pathname || "/", n);
  if (i == null) return null;
  let o = th(e);
  qv(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) s = sy(o[l], ay(i));
  return s;
}
function th(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, l) => {
    let a = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (X(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Ht([r, a.relativePath]),
      c = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (X(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      th(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: iy(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, s);
      else for (let a of nh(o.path)) i(o, s, a);
    }),
    t
  );
}
function nh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = nh(r.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? o : [o, a].join("/")))),
    i && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function qv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : oy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Zv = /^:[\w-]+$/,
  Jv = 3,
  ey = 2,
  ty = 1,
  ny = 10,
  ry = -2,
  Jc = (e) => e === "*";
function iy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Jc) && (r += ry),
    t && (r += ey),
    n
      .filter((i) => !Jc(i))
      .reduce((i, o) => i + (Zv.test(o) ? Jv : o === "" ? ty : ny), r)
  );
}
function oy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function sy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      a = s === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = la(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        u,
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let p = l.route;
    o.push({
      params: r,
      pathname: Ht([i, c.pathname]),
      pathnameBase: py(Ht([i, c.pathnameBase])),
      route: p,
    }),
      c.pathnameBase !== "/" && (i = Ht([i, c.pathnameBase]));
  }
  return o;
}
function la(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ly(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, c, p) => {
      let { paramName: m, isOptional: v } = c;
      if (m === "*") {
        let y = l[p] || "";
        s = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const _ = l[p];
      return v && !_ ? (u[m] = void 0) : (u[m] = uy(_ || "", m)), u;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function ly(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    fu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function ay(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      fu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function uy(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      fu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ")."),
      ),
      e
    );
  }
}
function ar(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function cy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? _r(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : fy(n, t)) : t,
    search: hy(r),
    hash: my(i),
  };
}
function fy(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Gs(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function dy(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function rh(e, t) {
  let n = dy(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function ih(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = _r(e))
    : ((i = di({}, e)),
      X(
        !i.pathname || !i.pathname.includes("?"),
        Gs("?", "pathname", "search", i),
      ),
      X(
        !i.pathname || !i.pathname.includes("#"),
        Gs("#", "pathname", "hash", i),
      ),
      X(!i.search || !i.search.includes("#"), Gs("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    l;
  if (s == null) l = n;
  else {
    let p = t.length - 1;
    if (!r && s.startsWith("..")) {
      let m = s.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      i.pathname = m.join("/");
    }
    l = p >= 0 ? t[p] : "/";
  }
  let a = cy(i, l),
    u = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const Ht = (e) => e.join("/").replace(/\/\/+/g, "/"),
  py = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  hy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  my = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function gy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const oh = ["post", "put", "patch", "delete"];
new Set(oh);
const vy = ["get", ...oh];
new Set(vy);
/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pi() {
  return (
    (pi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pi.apply(this, arguments)
  );
}
const us = A.createContext(null),
  sh = A.createContext(null),
  en = A.createContext(null),
  cs = A.createContext(null),
  Nn = A.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  lh = A.createContext(null);
function yy(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  wi() || X(!1);
  let { basename: r, navigator: i } = A.useContext(en),
    { hash: o, pathname: s, search: l } = fs(e, { relative: n }),
    a = s;
  return (
    r !== "/" && (a = s === "/" ? r : Ht([r, s])),
    i.createHref({ pathname: a, search: l, hash: o })
  );
}
function wi() {
  return A.useContext(cs) != null;
}
function Si() {
  return wi() || X(!1), A.useContext(cs).location;
}
function ah(e) {
  A.useContext(en).static || A.useLayoutEffect(e);
}
function _y() {
  let { isDataRoute: e } = A.useContext(Nn);
  return e ? Dy() : Ey();
}
function Ey() {
  wi() || X(!1);
  let e = A.useContext(us),
    { basename: t, future: n, navigator: r } = A.useContext(en),
    { matches: i } = A.useContext(Nn),
    { pathname: o } = Si(),
    s = JSON.stringify(rh(i, n.v7_relativeSplatPath)),
    l = A.useRef(!1);
  return (
    ah(() => {
      l.current = !0;
    }),
    A.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let p = ih(u, JSON.parse(s), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : Ht([t, p.pathname])),
          (c.replace ? r.replace : r.push)(p, c.state, c);
      },
      [t, r, s, o, e],
    )
  );
}
function fs(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = A.useContext(en),
    { matches: i } = A.useContext(Nn),
    { pathname: o } = Si(),
    s = JSON.stringify(rh(i, r.v7_relativeSplatPath));
  return A.useMemo(() => ih(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function wy(e, t) {
  return Sy(e, t);
}
function Sy(e, t, n, r) {
  wi() || X(!1);
  let { navigator: i } = A.useContext(en),
    { matches: o } = A.useContext(Nn),
    s = o[o.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Si(),
    c;
  if (t) {
    var p;
    let E = typeof t == "string" ? _r(t) : t;
    a === "/" || ((p = E.pathname) != null && p.startsWith(a)) || X(!1),
      (c = E);
  } else c = u;
  let m = c.pathname || "/",
    v = a === "/" ? m : m.slice(a.length) || "/",
    _ = Xv(e, { pathname: v }),
    y = xy(
      _ &&
        _.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, l, E.params),
            pathname: Ht([
              a,
              i.encodeLocation
                ? i.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? a
                : Ht([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
      r,
    );
  return t && y
    ? A.createElement(
        cs.Provider,
        {
          value: {
            location: pi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: Mt.Pop,
          },
        },
        y,
      )
    : y;
}
function Cy() {
  let e = Py(),
    t = gy(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return A.createElement(
    A.Fragment,
    null,
    A.createElement("h2", null, "Unexpected Application Error!"),
    A.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? A.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const Ty = A.createElement(Cy, null);
class ky extends A.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? A.createElement(
          Nn.Provider,
          { value: this.props.routeContext },
          A.createElement(lh.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Ny(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = A.useContext(us);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    A.createElement(Nn.Provider, { value: t }, r)
  );
}
function xy(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let s = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let c = s.findIndex(
      (p) => p.route.id && (l == null ? void 0 : l[p.route.id]),
    );
    c >= 0 || X(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let p = s[c];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = c),
        p.route.id)
      ) {
        let { loaderData: m, errors: v } = n,
          _ =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!v || v[p.route.id] === void 0);
        if (p.route.lazy || _) {
          (a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, p, m) => {
    let v,
      _ = !1,
      y = null,
      E = null;
    n &&
      ((v = l && p.route.id ? l[p.route.id] : void 0),
      (y = p.route.errorElement || Ty),
      a &&
        (u < 0 && m === 0
          ? (Iy("route-fallback", !1), (_ = !0), (E = null))
          : u === m &&
            ((_ = !0), (E = p.route.hydrateFallbackElement || null))));
    let d = t.concat(s.slice(0, m + 1)),
      f = () => {
        let h;
        return (
          v
            ? (h = y)
            : _
              ? (h = E)
              : p.route.Component
                ? (h = A.createElement(p.route.Component, null))
                : p.route.element
                  ? (h = p.route.element)
                  : (h = c),
          A.createElement(Ny, {
            match: p,
            routeContext: { outlet: c, matches: d, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? A.createElement(ky, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: v,
          children: f(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var uh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(uh || {}),
  Fo = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Fo || {});
function Ay(e) {
  let t = A.useContext(us);
  return t || X(!1), t;
}
function Oy(e) {
  let t = A.useContext(sh);
  return t || X(!1), t;
}
function Ly(e) {
  let t = A.useContext(Nn);
  return t || X(!1), t;
}
function ch(e) {
  let t = Ly(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function Py() {
  var e;
  let t = A.useContext(lh),
    n = Oy(Fo.UseRouteError),
    r = ch(Fo.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Dy() {
  let { router: e } = Ay(uh.UseNavigateStable),
    t = ch(Fo.UseNavigateStable),
    n = A.useRef(!1);
  return (
    ah(() => {
      n.current = !0;
    }),
    A.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, pi({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
const ef = {};
function Iy(e, t, n) {
  !t && !ef[e] && (ef[e] = !0);
}
function Yn(e) {
  X(!1);
}
function Ry(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Mt.Pop,
    navigator: o,
    static: s = !1,
    future: l,
  } = e;
  wi() && X(!1);
  let a = t.replace(/^\/*/, "/"),
    u = A.useMemo(
      () => ({
        basename: a,
        navigator: o,
        static: s,
        future: pi({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, o, s],
    );
  typeof r == "string" && (r = _r(r));
  let {
      pathname: c = "/",
      search: p = "",
      hash: m = "",
      state: v = null,
      key: _ = "default",
    } = r,
    y = A.useMemo(() => {
      let E = ar(c, a);
      return E == null
        ? null
        : {
            location: { pathname: E, search: p, hash: m, state: v, key: _ },
            navigationType: i,
          };
    }, [a, c, p, m, v, _, i]);
  return y == null
    ? null
    : A.createElement(
        en.Provider,
        { value: u },
        A.createElement(cs.Provider, { children: n, value: y }),
      );
}
function fh(e) {
  let { children: t, location: n } = e;
  return wy(aa(t), n);
}
new Promise(() => {});
function aa(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    A.Children.forEach(e, (r, i) => {
      if (!A.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === A.Fragment) {
        n.push.apply(n, aa(r.props.children, o));
        return;
      }
      r.type !== Yn && X(!1), !r.props.index || !r.props.children || X(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = aa(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vo() {
  return (
    (Vo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vo.apply(this, arguments)
  );
}
function dh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function $y(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function My(e, t) {
  return e.button === 0 && (!t || t === "_self") && !$y(e);
}
const jy = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  zy = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  by = A.createContext({ isTransitioning: !1 }),
  Fy = "startTransition",
  tf = Mm[Fy];
function Vy(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = A.useRef();
  o.current == null && (o.current = Yv({ window: i, v5Compat: !0 }));
  let s = o.current,
    [l, a] = A.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = A.useCallback(
      (p) => {
        u && tf ? tf(() => a(p)) : a(p);
      },
      [a, u],
    );
  return (
    A.useLayoutEffect(() => s.listen(c), [s, c]),
    A.createElement(Ry, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
const Uy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Wy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  du = A.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: l,
        target: a,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: p,
      } = t,
      m = dh(t, jy),
      { basename: v } = A.useContext(en),
      _,
      y = !1;
    if (typeof u == "string" && Wy.test(u) && ((_ = u), Uy))
      try {
        let h = new URL(window.location.href),
          g = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
          w = ar(g.pathname, v);
        g.origin === h.origin && w != null
          ? (u = w + g.search + g.hash)
          : (y = !0);
      } catch {}
    let E = yy(u, { relative: i }),
      d = Hy(u, {
        replace: s,
        state: l,
        target: a,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: p,
      });
    function f(h) {
      r && r(h), h.defaultPrevented || d(h);
    }
    return A.createElement(
      "a",
      Vo({}, m, { href: _ || E, onClick: y || o ? r : f, ref: n, target: a }),
    );
  }),
  Xs = A.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: s = !1,
        style: l,
        to: a,
        unstable_viewTransition: u,
        children: c,
      } = t,
      p = dh(t, zy),
      m = fs(a, { relative: p.relative }),
      v = Si(),
      _ = A.useContext(sh),
      { navigator: y, basename: E } = A.useContext(en),
      d = _ != null && Ky(m) && u === !0,
      f = y.encodeLocation ? y.encodeLocation(m).pathname : m.pathname,
      h = v.pathname,
      g =
        _ && _.navigation && _.navigation.location
          ? _.navigation.location.pathname
          : null;
    i ||
      ((h = h.toLowerCase()),
      (g = g ? g.toLowerCase() : null),
      (f = f.toLowerCase())),
      g && E && (g = ar(g, E) || g);
    const w = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let k = h === f || (!s && h.startsWith(f) && h.charAt(w) === "/"),
      N =
        g != null &&
        (g === f || (!s && g.startsWith(f) && g.charAt(f.length) === "/")),
      x = { isActive: k, isPending: N, isTransitioning: d },
      $ = k ? r : void 0,
      P;
    typeof o == "function"
      ? (P = o(x))
      : (P = [
          o,
          k ? "active" : null,
          N ? "pending" : null,
          d ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let z = typeof l == "function" ? l(x) : l;
    return A.createElement(
      du,
      Vo({}, p, {
        "aria-current": $,
        className: P,
        ref: n,
        style: z,
        to: a,
        unstable_viewTransition: u,
      }),
      typeof c == "function" ? c(x) : c,
    );
  });
var ua;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ua || (ua = {}));
var nf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(nf || (nf = {}));
function By(e) {
  let t = A.useContext(us);
  return t || X(!1), t;
}
function Hy(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    a = _y(),
    u = Si(),
    c = fs(e, { relative: s });
  return A.useCallback(
    (p) => {
      if (My(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : bo(u) === bo(c);
        a(e, {
          replace: m,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: l,
        });
      }
    },
    [u, a, c, r, i, n, e, o, s, l],
  );
}
function Ky(e, t) {
  t === void 0 && (t = {});
  let n = A.useContext(by);
  n == null && X(!1);
  let { basename: r } = By(ua.useViewTransitionState),
    i = fs(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = ar(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = ar(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return la(i.pathname, s) != null || la(i.pathname, o) != null;
}
function pu(e) {
  return T.jsx("div", {
    className: `container ${e.className}`,
    style: e.style,
    children: e.children,
  });
}
function Uo(e) {
  return T.jsx("div", { className: "row", children: e.children });
}
function hi(e) {
  const t = e.size
    .split(" ")
    .map((n) => "col-" + n)
    .join(" ");
  return T.jsx("div", {
    className: `${t} ${e.className}`,
    children: e.children,
  });
}
function Yy(e) {
  return T.jsx("form", {
    className: "search",
    children: T.jsxs("div", {
      className: "mb-3",
      children: [
        T.jsx("label", {
          htmlFor: "message",
          className: "form-label",
          children: "Message me:",
        }),
        T.jsx("input", {
          value: e.search,
          onChange: e.handleInputChange,
          name: "breed",
          list: "breeds",
          type: "text",
          className: "form-control",
          placeholder: "Type your message here",
          id: "input-message",
        }),
        T.jsx("button", {
          type: "submit",
          onClick: e.handleFormSubmit,
          className: "btn btn-success",
          children: "Submit",
        }),
      ],
    }),
  });
}
function Qy() {
  return T.jsxs("div", {
    children: [
      T.jsx("h1", { children: "Contact Page" }),
      T.jsx(pu, {
        className: "contacts",
        children: T.jsxs(Uo, {
          children: [
            T.jsxs(hi, {
              className: "contacts-col d-flex flex-column align-items-end",
              size: "md-3 sm-12",
              children: [
                T.jsxs("h2", {
                  className: "contacts-text",
                  children: [
                    T.jsx("strong", { children: "Email:" }),
                    " ",
                    T.jsx("br", {}),
                    "clivemakongo@gmail.com",
                  ],
                }),
                T.jsxs("h2", {
                  className: "contacts-text",
                  children: [
                    " ",
                    T.jsx("strong", { children: "GitHub" }),
                    ": ",
                    T.jsx("br", {}),
                    "https://github.com/Clive-Makongo",
                  ],
                }),
              ],
            }),
            T.jsx(hi, {
              className: "contacts-col d-flex align-items-end",
              size: "md-3 sm-12",
              children: T.jsx(Yy, {}),
            }),
          ],
        }),
      }),
    ],
  });
}
function Gy(e) {
  return T.jsx("div", {
    className: "hero text-center",
    style: { backgroundImage: `url(${e.backgroundImage})` },
    children: e.children,
  });
}
const Xy = "/assets/02-hero-bg-0R7LftOu.jpg";
function rf() {
  return T.jsxs("div", {
    children: [
      T.jsx(Gy, {
        backgroundImage: Xy,
        children: T.jsx(pu, {
          children: T.jsxs(Uo, {
            children: [
              T.jsx("h1", {
                style: { padding: 1 },
                children: "Clive Makong'o",
              }),
              T.jsx("div", {
                style: { display: "flex", justifyContent: "center" },
                children: T.jsx(hi, {
                  size: "md-3 sm-12",
                  children: T.jsx("img", {
                    class: "about col-sm-12",
                    id: "about-me-pic",
                    src: "https://github.com/Clive-Makongo/portfolio2/blob/main/assets/images/profile-pic.jpg?raw=true",
                  }),
                }),
              }),
              T.jsx("h2", { children: "Front End Web Developer" }),
            ],
          }),
        }),
      }),
      T.jsx("br", {}),
      " ",
      T.jsx("p", {
        className: "col-sm-12",
        children:
          "Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.",
      }),
    ],
  });
}
function qy(e) {
  return T.jsx("div", {
    className: "project",
    children: T.jsxs(pu, {
      className: "d-flex align-items-center flex-column",
      style: { minHeight: "80%" },
      children: [
        T.jsx(Uo, {
          children: T.jsx("h4", { className: "title", children: e[0].title }),
        }),
        T.jsxs(Uo, {
          children: [
            T.jsx(hi, {
              size: "md-9",
              children: T.jsx("img", {
                id: "project-pics",
                src: e[0].image,
                alt: "",
              }),
            }),
            T.jsx(hi, {
              size: "md-3",
              children: T.jsxs("div", {
                className:
                  "d-flex flex-column justify-content-around align-items-start project-text",
                children: [
                  T.jsxs("p", {
                    children: [
                      " ",
                      T.jsx("strong", { children: "Link to application: " }),
                      "  ",
                      T.jsx("br", {}),
                      " ",
                      e[0].pages,
                    ],
                  }),
                  T.jsxs("p", {
                    children: [
                      " ",
                      T.jsx("strong", { children: "Link to Github:" }),
                      " ",
                      T.jsx("br", {}),
                      " ",
                      e[0].github,
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const qs = [
  {
    id: "0",
    title: "Console Finances",
    pages: "https://clive-makongo.github.io/Console-Finances/",
    github: "https://github.com/Clive-Makongo/Console-Finances",
    image:
      "https://github.com/Clive-Makongo/Console-Finances/blob/main/assets/images/Untitled.jpg?raw=true",
  },
  {
    id: "1",
    title: "Password Generator",
    pages: "https://clive-makongo.github.io/passwordGen/",
    github: "https://github.com/Clive-Makongo/passwordGen",
    image:
      "https://github.com/Clive-Makongo/passwordGen/blob/main/assets/05-javascript-challenge-demo.png?raw=true",
  },
  {
    id: "2",
    title: "Weather Dashboard",
    pages: "https://clive-makongo.github.io/weatherDashboard/",
    github: "https://github.com/Clive-Makongo/weatherDashboard",
    image:
      "https://github.com/Clive-Makongo/weatherDashboard/blob/main/assets/10-server-side-apis-challenge-demo.png?raw=true",
  },
  {
    id: "3",
    title: "Work Day Scheduler",
    pages: "https://clive-makongo.github.io/dayPlanner/",
    github: "https://github.com/Clive-Makongo/passwordGen",
    image:
      "https://raw.githubusercontent.com/Clive-Makongo/dayPlanner/main/images/screencapture-file-C-Users-Clive-dayPlanner-starter-index-html-2023-12-12-20_19_55.jpeg",
  },
  {
    id: "4",
    title: "Code Quiz",
    pages: "https://clive-makongo.github.io/codeQuiz/",
    github: "https://clive-makongo.github.io/codeQuiz/",
    image:
      "https://github.com/Clive-Makongo/codeQuiz/blob/main/assets/images/08-web-apis-challenge-demo.gif?raw=true",
  },
  {
    id: "5",
    title: "Mood App",
    pages: "https://angelica-zach.github.io/Mood-App/",
    github: "https://github.com/angelica-zach/Mood-App",
    image:
      "https://github.com/Clive-Makongo/Mood-Application/blob/main/assets/ezgif-2-d66232c556.gif?raw=true",
  },
];
function Zy(e) {
  return T.jsx("button", {
    onClick: e.onClick,
    type: "button",
    className: "btn btn-outline-secondary ",
    "data-btn": e.id,
    children: e.text,
  });
}
function Jy() {
  const [e, t] = A.useState(qs),
    n = (r) => {
      const i = qs.filter((o) => o.id === r);
      t(i);
    };
  return T.jsxs("div", {
    children: [
      T.jsxs("div", {
        className: "container choose-project",
        children: [
          T.jsx("h1", { children: "Choose Project" }),
          T.jsx("div", {
            className: "project-buttons d-flex justify-content-between",
            children: qs.map((r) =>
              T.jsx(
                "div",
                {
                  id: `project${r.id}`,
                  children: T.jsx(du, {
                    to: "project",
                    role: "button",
                    className: "btn btn-link",
                    children: T.jsx(Zy, {
                      text: r.title,
                      onClick: () => n(r.id),
                    }),
                  }),
                },
                r.id,
              ),
            ),
          }),
        ],
      }),
      T.jsx("div", {
        className: "load-projects",
        children: T.jsx(fh, {
          children: T.jsx(Yn, {
            path: "project",
            element: T.jsx(qy, { ...e }),
          }),
        }),
      }),
    ],
  });
}
function e_() {
  return T.jsx("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light",
    children: T.jsxs("div", {
      className: "container-fluid",
      children: [
        T.jsx(du, {
          className: "navbar-brand",
          to: "/",
          children: "Portfolio",
        }),
        T.jsx("button", {
          className: "navbar-toggler",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarNav",
          "aria-controls": "navbarNav",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          children: T.jsx("span", { class: "navbar-toggler-icon" }),
        }),
        T.jsx("div", {
          className: "collapse navbar-collapse",
          id: "navbarNav",
          children: T.jsxs("ul", {
            className: "navbar-nav",
            children: [
              T.jsx("li", {
                className: "nav-item",
                children: T.jsx(Xs, {
                  to: "/",
                  end: !0,
                  className: ({ isActive: e }) =>
                    e ? "nav-link active" : "nav-link",
                  children: "About",
                }),
              }),
              T.jsx("li", {
                className: "nav-item",
                children: T.jsx(Xs, {
                  to: "/project-gallery",
                  className: ({ isActive: e }) =>
                    e ? "nav-link active" : "nav-link",
                  children: "Project Gallery",
                }),
              }),
              T.jsx("li", {
                className: "nav-item",
                children: T.jsx(Xs, {
                  to: "/contact",
                  className: ({ isActive: e }) =>
                    e ? "nav-link active" : "nav-link",
                  children: "Contact",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function t_() {
  return T.jsx("footer", {
    className: "footer",
    children: T.jsx("span", { children: "Pupster 2017" }),
  });
}
function n_(e) {
  return T.jsx("main", { className: "wrapper", children: e.children });
}
function r_() {
  return T.jsx(Vy, {
    children: T.jsxs("div", {
      children: [
        T.jsx(e_, {}),
        T.jsx(n_, {
          children: T.jsxs(fh, {
            children: [
              T.jsx(Yn, { path: "/", element: T.jsx(rf, {}) }),
              T.jsx(Yn, { path: "/about", element: T.jsx(rf, {}) }),
              T.jsx(Yn, { path: "/contact", element: T.jsx(Qy, {}) }),
              T.jsx(Yn, { path: "/project-gallery/*", element: T.jsx(Jy, {}) }),
            ],
          }),
        }),
        T.jsx(t_, {}),
      ],
    }),
  });
}
var ge = "top",
  De = "bottom",
  Ie = "right",
  ve = "left",
  ds = "auto",
  Er = [ge, De, Ie, ve],
  Sn = "start",
  ur = "end",
  ph = "clippingParents",
  hu = "viewport",
  Dn = "popper",
  hh = "reference",
  ca = Er.reduce(function (e, t) {
    return e.concat([t + "-" + Sn, t + "-" + ur]);
  }, []),
  mu = [].concat(Er, [ds]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Sn, t + "-" + ur]);
  }, []),
  mh = "beforeRead",
  gh = "read",
  vh = "afterRead",
  yh = "beforeMain",
  _h = "main",
  Eh = "afterMain",
  wh = "beforeWrite",
  Sh = "write",
  Ch = "afterWrite",
  Th = [mh, gh, vh, yh, _h, Eh, wh, Sh, Ch];
function ct(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Re(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Cn(e) {
  var t = Re(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ue(e) {
  var t = Re(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function gu(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Re(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function i_(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      i = t.attributes[n] || {},
      o = t.elements[n];
    !Ue(o) ||
      !ct(o) ||
      (Object.assign(o.style, r),
      Object.keys(i).forEach(function (s) {
        var l = i[s];
        l === !1 ? o.removeAttribute(s) : o.setAttribute(s, l === !0 ? "" : l);
      }));
  });
}
function o_(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var i = t.elements[r],
          o = t.attributes[r] || {},
          s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          l = s.reduce(function (a, u) {
            return (a[u] = ""), a;
          }, {});
        !Ue(i) ||
          !ct(i) ||
          (Object.assign(i.style, l),
          Object.keys(o).forEach(function (a) {
            i.removeAttribute(a);
          }));
      });
    }
  );
}
const vu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: i_,
  effect: o_,
  requires: ["computeStyles"],
};
function at(e) {
  return e.split("-")[0];
}
var gn = Math.max,
  Wo = Math.min,
  cr = Math.round;
function fa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function kh() {
  return !/^((?!chrome|android).)*safari/i.test(fa());
}
function fr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    i = 1,
    o = 1;
  t &&
    Ue(e) &&
    ((i = (e.offsetWidth > 0 && cr(r.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && cr(r.height) / e.offsetHeight) || 1));
  var s = Cn(e) ? Re(e) : window,
    l = s.visualViewport,
    a = !kh() && n,
    u = (r.left + (a && l ? l.offsetLeft : 0)) / i,
    c = (r.top + (a && l ? l.offsetTop : 0)) / o,
    p = r.width / i,
    m = r.height / o;
  return {
    width: p,
    height: m,
    top: c,
    right: u + p,
    bottom: c + m,
    left: u,
    x: u,
    y: c,
  };
}
function yu(e) {
  var t = fr(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function Nh(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && gu(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function kt(e) {
  return Re(e).getComputedStyle(e);
}
function s_(e) {
  return ["table", "td", "th"].indexOf(ct(e)) >= 0;
}
function tn(e) {
  return ((Cn(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function ps(e) {
  return ct(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (gu(e) ? e.host : null) || tn(e);
}
function of(e) {
  return !Ue(e) || kt(e).position === "fixed" ? null : e.offsetParent;
}
function l_(e) {
  var t = /firefox/i.test(fa()),
    n = /Trident/i.test(fa());
  if (n && Ue(e)) {
    var r = kt(e);
    if (r.position === "fixed") return null;
  }
  var i = ps(e);
  for (gu(i) && (i = i.host); Ue(i) && ["html", "body"].indexOf(ct(i)) < 0; ) {
    var o = kt(i);
    if (
      o.transform !== "none" ||
      o.perspective !== "none" ||
      o.contain === "paint" ||
      ["transform", "perspective"].indexOf(o.willChange) !== -1 ||
      (t && o.willChange === "filter") ||
      (t && o.filter && o.filter !== "none")
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function Ci(e) {
  for (var t = Re(e), n = of(e); n && s_(n) && kt(n).position === "static"; )
    n = of(n);
  return n &&
    (ct(n) === "html" || (ct(n) === "body" && kt(n).position === "static"))
    ? t
    : n || l_(e) || t;
}
function _u(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Yr(e, t, n) {
  return gn(e, Wo(t, n));
}
function a_(e, t, n) {
  var r = Yr(e, t, n);
  return r > n ? n : r;
}
function xh() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ah(e) {
  return Object.assign({}, xh(), e);
}
function Oh(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var u_ = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    Ah(typeof t != "number" ? t : Oh(t, Er))
  );
};
function c_(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    o = n.elements.arrow,
    s = n.modifiersData.popperOffsets,
    l = at(n.placement),
    a = _u(l),
    u = [ve, Ie].indexOf(l) >= 0,
    c = u ? "height" : "width";
  if (!(!o || !s)) {
    var p = u_(i.padding, n),
      m = yu(o),
      v = a === "y" ? ge : ve,
      _ = a === "y" ? De : Ie,
      y =
        n.rects.reference[c] + n.rects.reference[a] - s[a] - n.rects.popper[c],
      E = s[a] - n.rects.reference[a],
      d = Ci(o),
      f = d ? (a === "y" ? d.clientHeight || 0 : d.clientWidth || 0) : 0,
      h = y / 2 - E / 2,
      g = p[v],
      w = f - m[c] - p[_],
      k = f / 2 - m[c] / 2 + h,
      N = Yr(g, k, w),
      x = a;
    n.modifiersData[r] = ((t = {}), (t[x] = N), (t.centerOffset = N - k), t);
  }
}
function f_(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (Nh(t.elements.popper, i) && (t.elements.arrow = i)));
}
const Lh = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: c_,
  effect: f_,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function dr(e) {
  return e.split("-")[1];
}
var d_ = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function p_(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return { x: cr(n * i) / i || 0, y: cr(r * i) / i || 0 };
}
function sf(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    i = e.placement,
    o = e.variation,
    s = e.offsets,
    l = e.position,
    a = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    p = e.isFixed,
    m = s.x,
    v = m === void 0 ? 0 : m,
    _ = s.y,
    y = _ === void 0 ? 0 : _,
    E = typeof c == "function" ? c({ x: v, y }) : { x: v, y };
  (v = E.x), (y = E.y);
  var d = s.hasOwnProperty("x"),
    f = s.hasOwnProperty("y"),
    h = ve,
    g = ge,
    w = window;
  if (u) {
    var k = Ci(n),
      N = "clientHeight",
      x = "clientWidth";
    if (
      (k === Re(n) &&
        ((k = tn(n)),
        kt(k).position !== "static" &&
          l === "absolute" &&
          ((N = "scrollHeight"), (x = "scrollWidth"))),
      (k = k),
      i === ge || ((i === ve || i === Ie) && o === ur))
    ) {
      g = De;
      var $ = p && k === w && w.visualViewport ? w.visualViewport.height : k[N];
      (y -= $ - r.height), (y *= a ? 1 : -1);
    }
    if (i === ve || ((i === ge || i === De) && o === ur)) {
      h = Ie;
      var P = p && k === w && w.visualViewport ? w.visualViewport.width : k[x];
      (v -= P - r.width), (v *= a ? 1 : -1);
    }
  }
  var z = Object.assign({ position: l }, u && d_),
    ie = c === !0 ? p_({ x: v, y }, Re(n)) : { x: v, y };
  if (((v = ie.x), (y = ie.y), a)) {
    var q;
    return Object.assign(
      {},
      z,
      ((q = {}),
      (q[g] = f ? "0" : ""),
      (q[h] = d ? "0" : ""),
      (q.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + y + "px)"
          : "translate3d(" + v + "px, " + y + "px, 0)"),
      q),
    );
  }
  return Object.assign(
    {},
    z,
    ((t = {}),
    (t[g] = f ? y + "px" : ""),
    (t[h] = d ? v + "px" : ""),
    (t.transform = ""),
    t),
  );
}
function h_(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    o = n.adaptive,
    s = o === void 0 ? !0 : o,
    l = n.roundOffsets,
    a = l === void 0 ? !0 : l,
    u = {
      placement: at(t.placement),
      variation: dr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      sf(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: s,
          roundOffsets: a,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        sf(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: a,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const Eu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: h_,
  data: {},
};
var Ki = { passive: !0 };
function m_(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    o = i === void 0 ? !0 : i,
    s = r.resize,
    l = s === void 0 ? !0 : s,
    a = Re(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      u.forEach(function (c) {
        c.addEventListener("scroll", n.update, Ki);
      }),
    l && a.addEventListener("resize", n.update, Ki),
    function () {
      o &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", n.update, Ki);
        }),
        l && a.removeEventListener("resize", n.update, Ki);
    }
  );
}
const wu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: m_,
  data: {},
};
var g_ = { left: "right", right: "left", bottom: "top", top: "bottom" };
function fo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return g_[t];
  });
}
var v_ = { start: "end", end: "start" };
function lf(e) {
  return e.replace(/start|end/g, function (t) {
    return v_[t];
  });
}
function Su(e) {
  var t = Re(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Cu(e) {
  return fr(tn(e)).left + Su(e).scrollLeft;
}
function y_(e, t) {
  var n = Re(e),
    r = tn(e),
    i = n.visualViewport,
    o = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (i) {
    (o = i.width), (s = i.height);
    var u = kh();
    (u || (!u && t === "fixed")) && ((l = i.offsetLeft), (a = i.offsetTop));
  }
  return { width: o, height: s, x: l + Cu(e), y: a };
}
function __(e) {
  var t,
    n = tn(e),
    r = Su(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = gn(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0,
    ),
    s = gn(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0,
    ),
    l = -r.scrollLeft + Cu(e),
    a = -r.scrollTop;
  return (
    kt(i || n).direction === "rtl" &&
      (l += gn(n.clientWidth, i ? i.clientWidth : 0) - o),
    { width: o, height: s, x: l, y: a }
  );
}
function Tu(e) {
  var t = kt(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Ph(e) {
  return ["html", "body", "#document"].indexOf(ct(e)) >= 0
    ? e.ownerDocument.body
    : Ue(e) && Tu(e)
      ? e
      : Ph(ps(e));
}
function Qr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ph(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = Re(r),
    s = i ? [o].concat(o.visualViewport || [], Tu(r) ? r : []) : r,
    l = t.concat(s);
  return i ? l : l.concat(Qr(ps(s)));
}
function da(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function E_(e, t) {
  var n = fr(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function af(e, t, n) {
  return t === hu ? da(y_(e, n)) : Cn(t) ? E_(t, n) : da(__(tn(e)));
}
function w_(e) {
  var t = Qr(ps(e)),
    n = ["absolute", "fixed"].indexOf(kt(e).position) >= 0,
    r = n && Ue(e) ? Ci(e) : e;
  return Cn(r)
    ? t.filter(function (i) {
        return Cn(i) && Nh(i, r) && ct(i) !== "body";
      })
    : [];
}
function S_(e, t, n, r) {
  var i = t === "clippingParents" ? w_(e) : [].concat(t),
    o = [].concat(i, [n]),
    s = o[0],
    l = o.reduce(
      function (a, u) {
        var c = af(e, u, r);
        return (
          (a.top = gn(c.top, a.top)),
          (a.right = Wo(c.right, a.right)),
          (a.bottom = Wo(c.bottom, a.bottom)),
          (a.left = gn(c.left, a.left)),
          a
        );
      },
      af(e, s, r),
    );
  return (
    (l.width = l.right - l.left),
    (l.height = l.bottom - l.top),
    (l.x = l.left),
    (l.y = l.top),
    l
  );
}
function Dh(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? at(r) : null,
    o = r ? dr(r) : null,
    s = t.x + t.width / 2 - n.width / 2,
    l = t.y + t.height / 2 - n.height / 2,
    a;
  switch (i) {
    case ge:
      a = { x: s, y: t.y - n.height };
      break;
    case De:
      a = { x: s, y: t.y + t.height };
      break;
    case Ie:
      a = { x: t.x + t.width, y: l };
      break;
    case ve:
      a = { x: t.x - n.width, y: l };
      break;
    default:
      a = { x: t.x, y: t.y };
  }
  var u = i ? _u(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (o) {
      case Sn:
        a[u] = a[u] - (t[c] / 2 - n[c] / 2);
        break;
      case ur:
        a[u] = a[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return a;
}
function pr(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    o = n.strategy,
    s = o === void 0 ? e.strategy : o,
    l = n.boundary,
    a = l === void 0 ? ph : l,
    u = n.rootBoundary,
    c = u === void 0 ? hu : u,
    p = n.elementContext,
    m = p === void 0 ? Dn : p,
    v = n.altBoundary,
    _ = v === void 0 ? !1 : v,
    y = n.padding,
    E = y === void 0 ? 0 : y,
    d = Ah(typeof E != "number" ? E : Oh(E, Er)),
    f = m === Dn ? hh : Dn,
    h = e.rects.popper,
    g = e.elements[_ ? f : m],
    w = S_(Cn(g) ? g : g.contextElement || tn(e.elements.popper), a, c, s),
    k = fr(e.elements.reference),
    N = Dh({ reference: k, element: h, strategy: "absolute", placement: i }),
    x = da(Object.assign({}, h, N)),
    $ = m === Dn ? x : k,
    P = {
      top: w.top - $.top + d.top,
      bottom: $.bottom - w.bottom + d.bottom,
      left: w.left - $.left + d.left,
      right: $.right - w.right + d.right,
    },
    z = e.modifiersData.offset;
  if (m === Dn && z) {
    var ie = z[i];
    Object.keys(P).forEach(function (q) {
      var nt = [Ie, De].indexOf(q) >= 0 ? 1 : -1,
        ft = [ge, De].indexOf(q) >= 0 ? "y" : "x";
      P[q] += ie[ft] * nt;
    });
  }
  return P;
}
function C_(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    o = n.rootBoundary,
    s = n.padding,
    l = n.flipVariations,
    a = n.allowedAutoPlacements,
    u = a === void 0 ? mu : a,
    c = dr(r),
    p = c
      ? l
        ? ca
        : ca.filter(function (_) {
            return dr(_) === c;
          })
      : Er,
    m = p.filter(function (_) {
      return u.indexOf(_) >= 0;
    });
  m.length === 0 && (m = p);
  var v = m.reduce(function (_, y) {
    return (
      (_[y] = pr(e, { placement: y, boundary: i, rootBoundary: o, padding: s })[
        at(y)
      ]),
      _
    );
  }, {});
  return Object.keys(v).sort(function (_, y) {
    return v[_] - v[y];
  });
}
function T_(e) {
  if (at(e) === ds) return [];
  var t = fo(e);
  return [lf(e), t, lf(t)];
}
function k_(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var i = n.mainAxis,
        o = i === void 0 ? !0 : i,
        s = n.altAxis,
        l = s === void 0 ? !0 : s,
        a = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        p = n.rootBoundary,
        m = n.altBoundary,
        v = n.flipVariations,
        _ = v === void 0 ? !0 : v,
        y = n.allowedAutoPlacements,
        E = t.options.placement,
        d = at(E),
        f = d === E,
        h = a || (f || !_ ? [fo(E)] : T_(E)),
        g = [E].concat(h).reduce(function (Ee, je) {
          return Ee.concat(
            at(je) === ds
              ? C_(t, {
                  placement: je,
                  boundary: c,
                  rootBoundary: p,
                  padding: u,
                  flipVariations: _,
                  allowedAutoPlacements: y,
                })
              : je,
          );
        }, []),
        w = t.rects.reference,
        k = t.rects.popper,
        N = new Map(),
        x = !0,
        $ = g[0],
        P = 0;
      P < g.length;
      P++
    ) {
      var z = g[P],
        ie = at(z),
        q = dr(z) === Sn,
        nt = [ge, De].indexOf(ie) >= 0,
        ft = nt ? "width" : "height",
        oe = pr(t, {
          placement: z,
          boundary: c,
          rootBoundary: p,
          altBoundary: m,
          padding: u,
        }),
        pe = nt ? (q ? Ie : ve) : q ? De : ge;
      w[ft] > k[ft] && (pe = fo(pe));
      var O = fo(pe),
        I = [];
      if (
        (o && I.push(oe[ie] <= 0),
        l && I.push(oe[pe] <= 0, oe[O] <= 0),
        I.every(function (Ee) {
          return Ee;
        }))
      ) {
        ($ = z), (x = !1);
        break;
      }
      N.set(z, I);
    }
    if (x)
      for (
        var R = _ ? 3 : 1,
          V = function (je) {
            var xe = g.find(function (pt) {
              var on = N.get(pt);
              if (on)
                return on.slice(0, je).every(function (Es) {
                  return Es;
                });
            });
            if (xe) return ($ = xe), "break";
          },
          B = R;
        B > 0;
        B--
      ) {
        var dt = V(B);
        if (dt === "break") break;
      }
    t.placement !== $ &&
      ((t.modifiersData[r]._skip = !0), (t.placement = $), (t.reset = !0));
  }
}
const Ih = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: k_,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function uf(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function cf(e) {
  return [ge, Ie, De, ve].some(function (t) {
    return e[t] >= 0;
  });
}
function N_(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    s = pr(t, { elementContext: "reference" }),
    l = pr(t, { altBoundary: !0 }),
    a = uf(s, r),
    u = uf(l, i, o),
    c = cf(a),
    p = cf(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: p,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": p,
    }));
}
const Rh = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: N_,
};
function x_(e, t, n) {
  var r = at(e),
    i = [ve, ge].indexOf(r) >= 0 ? -1 : 1,
    o = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    s = o[0],
    l = o[1];
  return (
    (s = s || 0),
    (l = (l || 0) * i),
    [ve, Ie].indexOf(r) >= 0 ? { x: l, y: s } : { x: s, y: l }
  );
}
function A_(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    o = i === void 0 ? [0, 0] : i,
    s = mu.reduce(function (c, p) {
      return (c[p] = x_(p, t.rects, o)), c;
    }, {}),
    l = s[t.placement],
    a = l.x,
    u = l.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += a),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = s);
}
const $h = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: A_,
};
function O_(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Dh({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const ku = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: O_,
  data: {},
};
function L_(e) {
  return e === "x" ? "y" : "x";
}
function P_(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.mainAxis,
    o = i === void 0 ? !0 : i,
    s = n.altAxis,
    l = s === void 0 ? !1 : s,
    a = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    p = n.padding,
    m = n.tether,
    v = m === void 0 ? !0 : m,
    _ = n.tetherOffset,
    y = _ === void 0 ? 0 : _,
    E = pr(t, { boundary: a, rootBoundary: u, padding: p, altBoundary: c }),
    d = at(t.placement),
    f = dr(t.placement),
    h = !f,
    g = _u(d),
    w = L_(g),
    k = t.modifiersData.popperOffsets,
    N = t.rects.reference,
    x = t.rects.popper,
    $ =
      typeof y == "function"
        ? y(Object.assign({}, t.rects, { placement: t.placement }))
        : y,
    P =
      typeof $ == "number"
        ? { mainAxis: $, altAxis: $ }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, $),
    z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    ie = { x: 0, y: 0 };
  if (k) {
    if (o) {
      var q,
        nt = g === "y" ? ge : ve,
        ft = g === "y" ? De : Ie,
        oe = g === "y" ? "height" : "width",
        pe = k[g],
        O = pe + E[nt],
        I = pe - E[ft],
        R = v ? -x[oe] / 2 : 0,
        V = f === Sn ? N[oe] : x[oe],
        B = f === Sn ? -x[oe] : -N[oe],
        dt = t.elements.arrow,
        Ee = v && dt ? yu(dt) : { width: 0, height: 0 },
        je = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : xh(),
        xe = je[nt],
        pt = je[ft],
        on = Yr(0, N[oe], Ee[oe]),
        Es = h
          ? N[oe] / 2 - R - on - xe - P.mainAxis
          : V - on - xe - P.mainAxis,
        pm = h
          ? -N[oe] / 2 + R + on + pt + P.mainAxis
          : B + on + pt + P.mainAxis,
        ws = t.elements.arrow && Ci(t.elements.arrow),
        hm = ws ? (g === "y" ? ws.clientTop || 0 : ws.clientLeft || 0) : 0,
        Du = (q = z == null ? void 0 : z[g]) != null ? q : 0,
        mm = pe + Es - Du - hm,
        gm = pe + pm - Du,
        Iu = Yr(v ? Wo(O, mm) : O, pe, v ? gn(I, gm) : I);
      (k[g] = Iu), (ie[g] = Iu - pe);
    }
    if (l) {
      var Ru,
        vm = g === "x" ? ge : ve,
        ym = g === "x" ? De : Ie,
        sn = k[w],
        Ai = w === "y" ? "height" : "width",
        $u = sn + E[vm],
        Mu = sn - E[ym],
        Ss = [ge, ve].indexOf(d) !== -1,
        ju = (Ru = z == null ? void 0 : z[w]) != null ? Ru : 0,
        zu = Ss ? $u : sn - N[Ai] - x[Ai] - ju + P.altAxis,
        bu = Ss ? sn + N[Ai] + x[Ai] - ju - P.altAxis : Mu,
        Fu = v && Ss ? a_(zu, sn, bu) : Yr(v ? zu : $u, sn, v ? bu : Mu);
      (k[w] = Fu), (ie[w] = Fu - sn);
    }
    t.modifiersData[r] = ie;
  }
}
const Mh = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: P_,
  requiresIfExists: ["offset"],
};
function D_(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function I_(e) {
  return e === Re(e) || !Ue(e) ? Su(e) : D_(e);
}
function R_(e) {
  var t = e.getBoundingClientRect(),
    n = cr(t.width) / e.offsetWidth || 1,
    r = cr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function $_(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ue(t),
    i = Ue(t) && R_(t),
    o = tn(t),
    s = fr(e, i, n),
    l = { scrollLeft: 0, scrollTop: 0 },
    a = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((ct(t) !== "body" || Tu(o)) && (l = I_(t)),
      Ue(t)
        ? ((a = fr(t, !0)), (a.x += t.clientLeft), (a.y += t.clientTop))
        : o && (a.x = Cu(o))),
    {
      x: s.left + l.scrollLeft - a.x,
      y: s.top + l.scrollTop - a.y,
      width: s.width,
      height: s.height,
    }
  );
}
function M_(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (o) {
    t.set(o.name, o);
  });
  function i(o) {
    n.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function (l) {
      if (!n.has(l)) {
        var a = t.get(l);
        a && i(a);
      }
    }),
      r.push(o);
  }
  return (
    e.forEach(function (o) {
      n.has(o.name) || i(o);
    }),
    r
  );
}
function j_(e) {
  var t = M_(e);
  return Th.reduce(function (n, r) {
    return n.concat(
      t.filter(function (i) {
        return i.phase === r;
      }),
    );
  }, []);
}
function z_(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function b_(e) {
  var t = e.reduce(function (n, r) {
    var i = n[r.name];
    return (
      (n[r.name] = i
        ? Object.assign({}, i, r, {
            options: Object.assign({}, i.options, r.options),
            data: Object.assign({}, i.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var ff = { placement: "bottom", modifiers: [], strategy: "absolute" };
function df() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function hs(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    o = i === void 0 ? ff : i;
  return function (l, a, u) {
    u === void 0 && (u = o);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ff, o),
        modifiersData: {},
        elements: { reference: l, popper: a },
        attributes: {},
        styles: {},
      },
      p = [],
      m = !1,
      v = {
        state: c,
        setOptions: function (d) {
          var f = typeof d == "function" ? d(c.options) : d;
          y(),
            (c.options = Object.assign({}, o, c.options, f)),
            (c.scrollParents = {
              reference: Cn(l)
                ? Qr(l)
                : l.contextElement
                  ? Qr(l.contextElement)
                  : [],
              popper: Qr(a),
            });
          var h = j_(b_([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = h.filter(function (g) {
              return g.enabled;
            })),
            _(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!m) {
            var d = c.elements,
              f = d.reference,
              h = d.popper;
            if (df(f, h)) {
              (c.rects = {
                reference: $_(f, Ci(h), c.options.strategy === "fixed"),
                popper: yu(h),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (P) {
                  return (c.modifiersData[P.name] = Object.assign({}, P.data));
                });
              for (var g = 0; g < c.orderedModifiers.length; g++) {
                if (c.reset === !0) {
                  (c.reset = !1), (g = -1);
                  continue;
                }
                var w = c.orderedModifiers[g],
                  k = w.fn,
                  N = w.options,
                  x = N === void 0 ? {} : N,
                  $ = w.name;
                typeof k == "function" &&
                  (c = k({ state: c, options: x, name: $, instance: v }) || c);
              }
            }
          }
        },
        update: z_(function () {
          return new Promise(function (E) {
            v.forceUpdate(), E(c);
          });
        }),
        destroy: function () {
          y(), (m = !0);
        },
      };
    if (!df(l, a)) return v;
    v.setOptions(u).then(function (E) {
      !m && u.onFirstUpdate && u.onFirstUpdate(E);
    });
    function _() {
      c.orderedModifiers.forEach(function (E) {
        var d = E.name,
          f = E.options,
          h = f === void 0 ? {} : f,
          g = E.effect;
        if (typeof g == "function") {
          var w = g({ state: c, name: d, instance: v, options: h }),
            k = function () {};
          p.push(w || k);
        }
      });
    }
    function y() {
      p.forEach(function (E) {
        return E();
      }),
        (p = []);
    }
    return v;
  };
}
var F_ = hs(),
  V_ = [wu, ku, Eu, vu],
  U_ = hs({ defaultModifiers: V_ }),
  W_ = [wu, ku, Eu, vu, $h, Ih, Mh, Lh, Rh],
  Nu = hs({ defaultModifiers: W_ });
const jh = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterMain: Eh,
      afterRead: vh,
      afterWrite: Ch,
      applyStyles: vu,
      arrow: Lh,
      auto: ds,
      basePlacements: Er,
      beforeMain: yh,
      beforeRead: mh,
      beforeWrite: wh,
      bottom: De,
      clippingParents: ph,
      computeStyles: Eu,
      createPopper: Nu,
      createPopperBase: F_,
      createPopperLite: U_,
      detectOverflow: pr,
      end: ur,
      eventListeners: wu,
      flip: Ih,
      hide: Rh,
      left: ve,
      main: _h,
      modifierPhases: Th,
      offset: $h,
      placements: mu,
      popper: Dn,
      popperGenerator: hs,
      popperOffsets: ku,
      preventOverflow: Mh,
      read: gh,
      reference: hh,
      right: Ie,
      start: Sn,
      top: ge,
      variationPlacements: ca,
      viewport: hu,
      write: Sh,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
/*!
 * Bootstrap v5.3.2 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const Ot = new Map(),
  Zs = {
    set(e, t, n) {
      Ot.has(e) || Ot.set(e, new Map());
      const r = Ot.get(e);
      if (!r.has(t) && r.size !== 0) {
        console.error(
          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`,
        );
        return;
      }
      r.set(t, n);
    },
    get(e, t) {
      return (Ot.has(e) && Ot.get(e).get(t)) || null;
    },
    remove(e, t) {
      if (!Ot.has(e)) return;
      const n = Ot.get(e);
      n.delete(t), n.size === 0 && Ot.delete(e);
    },
  },
  B_ = 1e6,
  H_ = 1e3,
  pa = "transitionend",
  zh = (e) => (
    e &&
      window.CSS &&
      window.CSS.escape &&
      (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)),
    e
  ),
  K_ = (e) =>
    e == null
      ? `${e}`
      : Object.prototype.toString
          .call(e)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  Y_ = (e) => {
    do e += Math.floor(Math.random() * B_);
    while (document.getElementById(e));
    return e;
  },
  Q_ = (e) => {
    if (!e) return 0;
    let { transitionDuration: t, transitionDelay: n } =
      window.getComputedStyle(e);
    const r = Number.parseFloat(t),
      i = Number.parseFloat(n);
    return !r && !i
      ? 0
      : ((t = t.split(",")[0]),
        (n = n.split(",")[0]),
        (Number.parseFloat(t) + Number.parseFloat(n)) * H_);
  },
  bh = (e) => {
    e.dispatchEvent(new Event(pa));
  },
  _t = (e) =>
    !e || typeof e != "object"
      ? !1
      : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"),
  Qt = (e) =>
    _t(e)
      ? e.jquery
        ? e[0]
        : e
      : typeof e == "string" && e.length > 0
        ? document.querySelector(zh(e))
        : null,
  wr = (e) => {
    if (!_t(e) || e.getClientRects().length === 0) return !1;
    const t = getComputedStyle(e).getPropertyValue("visibility") === "visible",
      n = e.closest("details:not([open])");
    if (!n) return t;
    if (n !== e) {
      const r = e.closest("summary");
      if ((r && r.parentNode !== n) || r === null) return !1;
    }
    return t;
  },
  Gt = (e) =>
    !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled")
      ? !0
      : typeof e.disabled < "u"
        ? e.disabled
        : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false",
  Fh = (e) => {
    if (!document.documentElement.attachShadow) return null;
    if (typeof e.getRootNode == "function") {
      const t = e.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    }
    return e instanceof ShadowRoot ? e : e.parentNode ? Fh(e.parentNode) : null;
  },
  Bo = () => {},
  Ti = (e) => {
    e.offsetHeight;
  },
  Vh = () =>
    window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
      ? window.jQuery
      : null,
  Js = [],
  G_ = (e) => {
    document.readyState === "loading"
      ? (Js.length ||
          document.addEventListener("DOMContentLoaded", () => {
            for (const t of Js) t();
          }),
        Js.push(e))
      : e();
  },
  He = () => document.documentElement.dir === "rtl",
  Ye = (e) => {
    G_(() => {
      const t = Vh();
      if (t) {
        const n = e.NAME,
          r = t.fn[n];
        (t.fn[n] = e.jQueryInterface),
          (t.fn[n].Constructor = e),
          (t.fn[n].noConflict = () => ((t.fn[n] = r), e.jQueryInterface));
      }
    });
  },
  Se = (e, t = [], n = e) => (typeof e == "function" ? e(...t) : n),
  Uh = (e, t, n = !0) => {
    if (!n) {
      Se(e);
      return;
    }
    const i = Q_(t) + 5;
    let o = !1;
    const s = ({ target: l }) => {
      l === t && ((o = !0), t.removeEventListener(pa, s), Se(e));
    };
    t.addEventListener(pa, s),
      setTimeout(() => {
        o || bh(t);
      }, i);
  },
  xu = (e, t, n, r) => {
    const i = e.length;
    let o = e.indexOf(t);
    return o === -1
      ? !n && r
        ? e[i - 1]
        : e[0]
      : ((o += n ? 1 : -1),
        r && (o = (o + i) % i),
        e[Math.max(0, Math.min(o, i - 1))]);
  },
  X_ = /[^.]*(?=\..*)\.|.*/,
  q_ = /\..*/,
  Z_ = /::\d+$/,
  el = {};
let pf = 1;
const Wh = { mouseenter: "mouseover", mouseleave: "mouseout" },
  J_ = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll",
  ]);
function Bh(e, t) {
  return (t && `${t}::${pf++}`) || e.uidEvent || pf++;
}
function Hh(e) {
  const t = Bh(e);
  return (e.uidEvent = t), (el[t] = el[t] || {}), el[t];
}
function e0(e, t) {
  return function n(r) {
    return (
      Au(r, { delegateTarget: e }),
      n.oneOff && S.off(e, r.type, t),
      t.apply(e, [r])
    );
  };
}
function t0(e, t, n) {
  return function r(i) {
    const o = e.querySelectorAll(t);
    for (let { target: s } = i; s && s !== this; s = s.parentNode)
      for (const l of o)
        if (l === s)
          return (
            Au(i, { delegateTarget: s }),
            r.oneOff && S.off(e, i.type, t, n),
            n.apply(s, [i])
          );
  };
}
function Kh(e, t, n = null) {
  return Object.values(e).find(
    (r) => r.callable === t && r.delegationSelector === n,
  );
}
function Yh(e, t, n) {
  const r = typeof t == "string",
    i = r ? n : t || n;
  let o = Qh(e);
  return J_.has(o) || (o = e), [r, i, o];
}
function hf(e, t, n, r, i) {
  if (typeof t != "string" || !e) return;
  let [o, s, l] = Yh(t, n, r);
  t in Wh &&
    (s = ((_) =>
      function (y) {
        if (
          !y.relatedTarget ||
          (y.relatedTarget !== y.delegateTarget &&
            !y.delegateTarget.contains(y.relatedTarget))
        )
          return _.call(this, y);
      })(s));
  const a = Hh(e),
    u = a[l] || (a[l] = {}),
    c = Kh(u, s, o ? n : null);
  if (c) {
    c.oneOff = c.oneOff && i;
    return;
  }
  const p = Bh(s, t.replace(X_, "")),
    m = o ? t0(e, n, s) : e0(e, s);
  (m.delegationSelector = o ? n : null),
    (m.callable = s),
    (m.oneOff = i),
    (m.uidEvent = p),
    (u[p] = m),
    e.addEventListener(l, m, o);
}
function ha(e, t, n, r, i) {
  const o = Kh(t[n], r, i);
  o && (e.removeEventListener(n, o, !!i), delete t[n][o.uidEvent]);
}
function n0(e, t, n, r) {
  const i = t[n] || {};
  for (const [o, s] of Object.entries(i))
    o.includes(r) && ha(e, t, n, s.callable, s.delegationSelector);
}
function Qh(e) {
  return (e = e.replace(q_, "")), Wh[e] || e;
}
const S = {
  on(e, t, n, r) {
    hf(e, t, n, r, !1);
  },
  one(e, t, n, r) {
    hf(e, t, n, r, !0);
  },
  off(e, t, n, r) {
    if (typeof t != "string" || !e) return;
    const [i, o, s] = Yh(t, n, r),
      l = s !== t,
      a = Hh(e),
      u = a[s] || {},
      c = t.startsWith(".");
    if (typeof o < "u") {
      if (!Object.keys(u).length) return;
      ha(e, a, s, o, i ? n : null);
      return;
    }
    if (c) for (const p of Object.keys(a)) n0(e, a, p, t.slice(1));
    for (const [p, m] of Object.entries(u)) {
      const v = p.replace(Z_, "");
      (!l || t.includes(v)) && ha(e, a, s, m.callable, m.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e) return null;
    const r = Vh(),
      i = Qh(t),
      o = t !== i;
    let s = null,
      l = !0,
      a = !0,
      u = !1;
    o &&
      r &&
      ((s = r.Event(t, n)),
      r(e).trigger(s),
      (l = !s.isPropagationStopped()),
      (a = !s.isImmediatePropagationStopped()),
      (u = s.isDefaultPrevented()));
    const c = Au(new Event(t, { bubbles: l, cancelable: !0 }), n);
    return (
      u && c.preventDefault(),
      a && e.dispatchEvent(c),
      c.defaultPrevented && s && s.preventDefault(),
      c
    );
  },
};
function Au(e, t = {}) {
  for (const [n, r] of Object.entries(t))
    try {
      e[n] = r;
    } catch {
      Object.defineProperty(e, n, {
        configurable: !0,
        get() {
          return r;
        },
      });
    }
  return e;
}
function mf(e) {
  if (e === "true") return !0;
  if (e === "false") return !1;
  if (e === Number(e).toString()) return Number(e);
  if (e === "" || e === "null") return null;
  if (typeof e != "string") return e;
  try {
    return JSON.parse(decodeURIComponent(e));
  } catch {
    return e;
  }
}
function tl(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Et = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${tl(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${tl(t)}`);
  },
  getDataAttributes(e) {
    if (!e) return {};
    const t = {},
      n = Object.keys(e.dataset).filter(
        (r) => r.startsWith("bs") && !r.startsWith("bsConfig"),
      );
    for (const r of n) {
      let i = r.replace(/^bs/, "");
      (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
        (t[i] = mf(e.dataset[r]));
    }
    return t;
  },
  getDataAttribute(e, t) {
    return mf(e.getAttribute(`data-bs-${tl(t)}`));
  },
};
class ki {
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!',
    );
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  _configAfterMerge(t) {
    return t;
  }
  _mergeConfigObj(t, n) {
    const r = _t(n) ? Et.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...(typeof r == "object" ? r : {}),
      ...(_t(n) ? Et.getDataAttributes(n) : {}),
      ...(typeof t == "object" ? t : {}),
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [r, i] of Object.entries(n)) {
      const o = t[r],
        s = _t(o) ? "element" : K_(o);
      if (!new RegExp(i).test(s))
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${i}".`,
        );
    }
  }
}
const r0 = "5.3.2";
class tt extends ki {
  constructor(t, n) {
    super(),
      (t = Qt(t)),
      t &&
        ((this._element = t),
        (this._config = this._getConfig(n)),
        Zs.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Zs.remove(this._element, this.constructor.DATA_KEY),
      S.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
  }
  _queueCallback(t, n, r = !0) {
    Uh(t, n, r);
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t, this._element)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  static getInstance(t) {
    return Zs.get(Qt(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return r0;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(t) {
    return `${t}${this.EVENT_KEY}`;
  }
}
const nl = (e) => {
    let t = e.getAttribute("data-bs-target");
    if (!t || t === "#") {
      let n = e.getAttribute("href");
      if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
      n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
        (t = n && n !== "#" ? zh(n.trim()) : null);
    }
    return t;
  },
  D = {
    find(e, t = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(t, e));
    },
    findOne(e, t = document.documentElement) {
      return Element.prototype.querySelector.call(t, e);
    },
    children(e, t) {
      return [].concat(...e.children).filter((n) => n.matches(t));
    },
    parents(e, t) {
      const n = [];
      let r = e.parentNode.closest(t);
      for (; r; ) n.push(r), (r = r.parentNode.closest(t));
      return n;
    },
    prev(e, t) {
      let n = e.previousElementSibling;
      for (; n; ) {
        if (n.matches(t)) return [n];
        n = n.previousElementSibling;
      }
      return [];
    },
    next(e, t) {
      let n = e.nextElementSibling;
      for (; n; ) {
        if (n.matches(t)) return [n];
        n = n.nextElementSibling;
      }
      return [];
    },
    focusableChildren(e) {
      const t = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]',
      ]
        .map((n) => `${n}:not([tabindex^="-"])`)
        .join(",");
      return this.find(t, e).filter((n) => !Gt(n) && wr(n));
    },
    getSelectorFromElement(e) {
      const t = nl(e);
      return t && D.findOne(t) ? t : null;
    },
    getElementFromSelector(e) {
      const t = nl(e);
      return t ? D.findOne(t) : null;
    },
    getMultipleElementsFromSelector(e) {
      const t = nl(e);
      return t ? D.find(t) : [];
    },
  },
  ms = (e, t = "hide") => {
    const n = `click.dismiss${e.EVENT_KEY}`,
      r = e.NAME;
    S.on(document, n, `[data-bs-dismiss="${r}"]`, function (i) {
      if (
        (["A", "AREA"].includes(this.tagName) && i.preventDefault(), Gt(this))
      )
        return;
      const o = D.getElementFromSelector(this) || this.closest(`.${r}`);
      e.getOrCreateInstance(o)[t]();
    });
  },
  i0 = "alert",
  o0 = "bs.alert",
  Gh = `.${o0}`,
  s0 = `close${Gh}`,
  l0 = `closed${Gh}`,
  a0 = "fade",
  u0 = "show";
class gs extends tt {
  static get NAME() {
    return i0;
  }
  close() {
    if (S.trigger(this._element, s0).defaultPrevented) return;
    this._element.classList.remove(u0);
    const n = this._element.classList.contains(a0);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  _destroyElement() {
    this._element.remove(), S.trigger(this._element, l0), this.dispose();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = gs.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
ms(gs, "close");
Ye(gs);
const c0 = "button",
  f0 = "bs.button",
  d0 = `.${f0}`,
  p0 = ".data-api",
  h0 = "active",
  gf = '[data-bs-toggle="button"]',
  m0 = `click${d0}${p0}`;
class vs extends tt {
  static get NAME() {
    return c0;
  }
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(h0),
    );
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = vs.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
S.on(document, m0, gf, (e) => {
  e.preventDefault();
  const t = e.target.closest(gf);
  vs.getOrCreateInstance(t).toggle();
});
Ye(vs);
const g0 = "swipe",
  Sr = ".bs.swipe",
  v0 = `touchstart${Sr}`,
  y0 = `touchmove${Sr}`,
  _0 = `touchend${Sr}`,
  E0 = `pointerdown${Sr}`,
  w0 = `pointerup${Sr}`,
  S0 = "touch",
  C0 = "pen",
  T0 = "pointer-event",
  k0 = 40,
  N0 = { endCallback: null, leftCallback: null, rightCallback: null },
  x0 = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)",
  };
class Ho extends ki {
  constructor(t, n) {
    super(),
      (this._element = t),
      !(!t || !Ho.isSupported()) &&
        ((this._config = this._getConfig(n)),
        (this._deltaX = 0),
        (this._supportPointerEvents = !!window.PointerEvent),
        this._initEvents());
  }
  static get Default() {
    return N0;
  }
  static get DefaultType() {
    return x0;
  }
  static get NAME() {
    return g0;
  }
  dispose() {
    S.off(this._element, Sr);
  }
  _start(t) {
    if (!this._supportPointerEvents) {
      this._deltaX = t.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX);
  }
  _end(t) {
    this._eventIsPointerPenTouch(t) &&
      (this._deltaX = t.clientX - this._deltaX),
      this._handleSwipe(),
      Se(this._config.endCallback);
  }
  _move(t) {
    this._deltaX =
      t.touches && t.touches.length > 1
        ? 0
        : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= k0) return;
    const n = t / this._deltaX;
    (this._deltaX = 0),
      n && Se(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents
      ? (S.on(this._element, E0, (t) => this._start(t)),
        S.on(this._element, w0, (t) => this._end(t)),
        this._element.classList.add(T0))
      : (S.on(this._element, v0, (t) => this._start(t)),
        S.on(this._element, y0, (t) => this._move(t)),
        S.on(this._element, _0, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return (
      this._supportPointerEvents &&
      (t.pointerType === C0 || t.pointerType === S0)
    );
  }
  static isSupported() {
    return (
      "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
    );
  }
}
const A0 = "carousel",
  O0 = "bs.carousel",
  nn = `.${O0}`,
  Xh = ".data-api",
  L0 = "ArrowLeft",
  P0 = "ArrowRight",
  D0 = 500,
  Dr = "next",
  Ln = "prev",
  In = "left",
  po = "right",
  I0 = `slide${nn}`,
  rl = `slid${nn}`,
  R0 = `keydown${nn}`,
  $0 = `mouseenter${nn}`,
  M0 = `mouseleave${nn}`,
  j0 = `dragstart${nn}`,
  z0 = `load${nn}${Xh}`,
  b0 = `click${nn}${Xh}`,
  qh = "carousel",
  Yi = "active",
  F0 = "slide",
  V0 = "carousel-item-end",
  U0 = "carousel-item-start",
  W0 = "carousel-item-next",
  B0 = "carousel-item-prev",
  Zh = ".active",
  Jh = ".carousel-item",
  H0 = Zh + Jh,
  K0 = ".carousel-item img",
  Y0 = ".carousel-indicators",
  Q0 = "[data-bs-slide], [data-bs-slide-to]",
  G0 = '[data-bs-ride="carousel"]',
  X0 = { [L0]: po, [P0]: In },
  q0 = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0,
  },
  Z0 = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean",
  };
class Ni extends tt {
  constructor(t, n) {
    super(t, n),
      (this._interval = null),
      (this._activeElement = null),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this._swipeHelper = null),
      (this._indicatorsElement = D.findOne(Y0, this._element)),
      this._addEventListeners(),
      this._config.ride === qh && this.cycle();
  }
  static get Default() {
    return q0;
  }
  static get DefaultType() {
    return Z0;
  }
  static get NAME() {
    return A0;
  }
  next() {
    this._slide(Dr);
  }
  nextWhenVisible() {
    !document.hidden && wr(this._element) && this.next();
  }
  prev() {
    this._slide(Ln);
  }
  pause() {
    this._isSliding && bh(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(),
      this._updateInterval(),
      (this._interval = setInterval(
        () => this.nextWhenVisible(),
        this._config.interval,
      ));
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        S.one(this._element, rl, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(t) {
    const n = this._getItems();
    if (t > n.length - 1 || t < 0) return;
    if (this._isSliding) {
      S.one(this._element, rl, () => this.to(t));
      return;
    }
    const r = this._getItemIndex(this._getActive());
    if (r === t) return;
    const i = t > r ? Dr : Ln;
    this._slide(i, n[t]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  _configAfterMerge(t) {
    return (t.defaultInterval = t.interval), t;
  }
  _addEventListeners() {
    this._config.keyboard && S.on(this._element, R0, (t) => this._keydown(t)),
      this._config.pause === "hover" &&
        (S.on(this._element, $0, () => this.pause()),
        S.on(this._element, M0, () => this._maybeEnableCycle())),
      this._config.touch && Ho.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const r of D.find(K0, this._element))
      S.on(r, j0, (i) => i.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(In)),
      rightCallback: () => this._slide(this._directionToOrder(po)),
      endCallback: () => {
        this._config.pause === "hover" &&
          (this.pause(),
          this.touchTimeout && clearTimeout(this.touchTimeout),
          (this.touchTimeout = setTimeout(
            () => this._maybeEnableCycle(),
            D0 + this._config.interval,
          )));
      },
    };
    this._swipeHelper = new Ho(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName)) return;
    const n = X0[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement) return;
    const n = D.findOne(Zh, this._indicatorsElement);
    n.classList.remove(Yi), n.removeAttribute("aria-current");
    const r = D.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    r && (r.classList.add(Yi), r.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const t = this._activeElement || this._getActive();
    if (!t) return;
    const n = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
    this._config.interval = n || this._config.defaultInterval;
  }
  _slide(t, n = null) {
    if (this._isSliding) return;
    const r = this._getActive(),
      i = t === Dr,
      o = n || xu(this._getItems(), r, i, this._config.wrap);
    if (o === r) return;
    const s = this._getItemIndex(o),
      l = (v) =>
        S.trigger(this._element, v, {
          relatedTarget: o,
          direction: this._orderToDirection(t),
          from: this._getItemIndex(r),
          to: s,
        });
    if (l(I0).defaultPrevented || !r || !o) return;
    const u = !!this._interval;
    this.pause(),
      (this._isSliding = !0),
      this._setActiveIndicatorElement(s),
      (this._activeElement = o);
    const c = i ? U0 : V0,
      p = i ? W0 : B0;
    o.classList.add(p), Ti(o), r.classList.add(c), o.classList.add(c);
    const m = () => {
      o.classList.remove(c, p),
        o.classList.add(Yi),
        r.classList.remove(Yi, p, c),
        (this._isSliding = !1),
        l(rl);
    };
    this._queueCallback(m, r, this._isAnimated()), u && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(F0);
  }
  _getActive() {
    return D.findOne(H0, this._element);
  }
  _getItems() {
    return D.find(Jh, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), (this._interval = null));
  }
  _directionToOrder(t) {
    return He() ? (t === In ? Ln : Dr) : t === In ? Dr : Ln;
  }
  _orderToDirection(t) {
    return He() ? (t === Ln ? In : po) : t === Ln ? po : In;
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Ni.getOrCreateInstance(this, t);
      if (typeof t == "number") {
        n.to(t);
        return;
      }
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
S.on(document, b0, Q0, function (e) {
  const t = D.getElementFromSelector(this);
  if (!t || !t.classList.contains(qh)) return;
  e.preventDefault();
  const n = Ni.getOrCreateInstance(t),
    r = this.getAttribute("data-bs-slide-to");
  if (r) {
    n.to(r), n._maybeEnableCycle();
    return;
  }
  if (Et.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
S.on(window, z0, () => {
  const e = D.find(G0);
  for (const t of e) Ni.getOrCreateInstance(t);
});
Ye(Ni);
const J0 = "collapse",
  eE = "bs.collapse",
  xi = `.${eE}`,
  tE = ".data-api",
  nE = `show${xi}`,
  rE = `shown${xi}`,
  iE = `hide${xi}`,
  oE = `hidden${xi}`,
  sE = `click${xi}${tE}`,
  il = "show",
  Qn = "collapse",
  Qi = "collapsing",
  lE = "collapsed",
  aE = `:scope .${Qn} .${Qn}`,
  uE = "collapse-horizontal",
  cE = "width",
  fE = "height",
  dE = ".collapse.show, .collapse.collapsing",
  ma = '[data-bs-toggle="collapse"]',
  pE = { parent: null, toggle: !0 },
  hE = { parent: "(null|element)", toggle: "boolean" };
class mi extends tt {
  constructor(t, n) {
    super(t, n), (this._isTransitioning = !1), (this._triggerArray = []);
    const r = D.find(ma);
    for (const i of r) {
      const o = D.getSelectorFromElement(i),
        s = D.find(o).filter((l) => l === this._element);
      o !== null && s.length && this._triggerArray.push(i);
    }
    this._initializeChildren(),
      this._config.parent ||
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
      this._config.toggle && this.toggle();
  }
  static get Default() {
    return pE;
  }
  static get DefaultType() {
    return hE;
  }
  static get NAME() {
    return J0;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown()) return;
    let t = [];
    if (
      (this._config.parent &&
        (t = this._getFirstLevelChildren(dE)
          .filter((l) => l !== this._element)
          .map((l) => mi.getOrCreateInstance(l, { toggle: !1 }))),
      (t.length && t[0]._isTransitioning) ||
        S.trigger(this._element, nE).defaultPrevented)
    )
      return;
    for (const l of t) l.hide();
    const r = this._getDimension();
    this._element.classList.remove(Qn),
      this._element.classList.add(Qi),
      (this._element.style[r] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0);
    const i = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(Qi),
          this._element.classList.add(Qn, il),
          (this._element.style[r] = ""),
          S.trigger(this._element, rE);
      },
      s = `scroll${r[0].toUpperCase() + r.slice(1)}`;
    this._queueCallback(i, this._element, !0),
      (this._element.style[r] = `${this._element[s]}px`);
  }
  hide() {
    if (
      this._isTransitioning ||
      !this._isShown() ||
      S.trigger(this._element, iE).defaultPrevented
    )
      return;
    const n = this._getDimension();
    (this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`),
      Ti(this._element),
      this._element.classList.add(Qi),
      this._element.classList.remove(Qn, il);
    for (const i of this._triggerArray) {
      const o = D.getElementFromSelector(i);
      o && !this._isShown(o) && this._addAriaAndCollapsedClass([i], !1);
    }
    this._isTransitioning = !0;
    const r = () => {
      (this._isTransitioning = !1),
        this._element.classList.remove(Qi),
        this._element.classList.add(Qn),
        S.trigger(this._element, oE);
    };
    (this._element.style[n] = ""), this._queueCallback(r, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains(il);
  }
  _configAfterMerge(t) {
    return (t.toggle = !!t.toggle), (t.parent = Qt(t.parent)), t;
  }
  _getDimension() {
    return this._element.classList.contains(uE) ? cE : fE;
  }
  _initializeChildren() {
    if (!this._config.parent) return;
    const t = this._getFirstLevelChildren(ma);
    for (const n of t) {
      const r = D.getElementFromSelector(n);
      r && this._addAriaAndCollapsedClass([n], this._isShown(r));
    }
  }
  _getFirstLevelChildren(t) {
    const n = D.find(aE, this._config.parent);
    return D.find(t, this._config.parent).filter((r) => !n.includes(r));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const r of t)
        r.classList.toggle(lE, !n), r.setAttribute("aria-expanded", n);
  }
  static jQueryInterface(t) {
    const n = {};
    return (
      typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1),
      this.each(function () {
        const r = mi.getOrCreateInstance(this, n);
        if (typeof t == "string") {
          if (typeof r[t] > "u") throw new TypeError(`No method named "${t}"`);
          r[t]();
        }
      })
    );
  }
}
S.on(document, sE, ma, function (e) {
  (e.target.tagName === "A" ||
    (e.delegateTarget && e.delegateTarget.tagName === "A")) &&
    e.preventDefault();
  for (const t of D.getMultipleElementsFromSelector(this))
    mi.getOrCreateInstance(t, { toggle: !1 }).toggle();
});
Ye(mi);
const vf = "dropdown",
  mE = "bs.dropdown",
  xn = `.${mE}`,
  Ou = ".data-api",
  gE = "Escape",
  yf = "Tab",
  vE = "ArrowUp",
  _f = "ArrowDown",
  yE = 2,
  _E = `hide${xn}`,
  EE = `hidden${xn}`,
  wE = `show${xn}`,
  SE = `shown${xn}`,
  em = `click${xn}${Ou}`,
  tm = `keydown${xn}${Ou}`,
  CE = `keyup${xn}${Ou}`,
  Rn = "show",
  TE = "dropup",
  kE = "dropend",
  NE = "dropstart",
  xE = "dropup-center",
  AE = "dropdown-center",
  dn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
  OE = `${dn}.${Rn}`,
  ho = ".dropdown-menu",
  LE = ".navbar",
  PE = ".navbar-nav",
  DE = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
  IE = He() ? "top-end" : "top-start",
  RE = He() ? "top-start" : "top-end",
  $E = He() ? "bottom-end" : "bottom-start",
  ME = He() ? "bottom-start" : "bottom-end",
  jE = He() ? "left-start" : "right-start",
  zE = He() ? "right-start" : "left-start",
  bE = "top",
  FE = "bottom",
  VE = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle",
  },
  UE = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)",
  };
class ut extends tt {
  constructor(t, n) {
    super(t, n),
      (this._popper = null),
      (this._parent = this._element.parentNode),
      (this._menu =
        D.next(this._element, ho)[0] ||
        D.prev(this._element, ho)[0] ||
        D.findOne(ho, this._parent)),
      (this._inNavbar = this._detectNavbar());
  }
  static get Default() {
    return VE;
  }
  static get DefaultType() {
    return UE;
  }
  static get NAME() {
    return vf;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (Gt(this._element) || this._isShown()) return;
    const t = { relatedTarget: this._element };
    if (!S.trigger(this._element, wE, t).defaultPrevented) {
      if (
        (this._createPopper(),
        "ontouchstart" in document.documentElement && !this._parent.closest(PE))
      )
        for (const r of [].concat(...document.body.children))
          S.on(r, "mouseover", Bo);
      this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(Rn),
        this._element.classList.add(Rn),
        S.trigger(this._element, SE, t);
    }
  }
  hide() {
    if (Gt(this._element) || !this._isShown()) return;
    const t = { relatedTarget: this._element };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    (this._inNavbar = this._detectNavbar()),
      this._popper && this._popper.update();
  }
  _completeHide(t) {
    if (!S.trigger(this._element, _E, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const r of [].concat(...document.body.children))
          S.off(r, "mouseover", Bo);
      this._popper && this._popper.destroy(),
        this._menu.classList.remove(Rn),
        this._element.classList.remove(Rn),
        this._element.setAttribute("aria-expanded", "false"),
        Et.removeDataAttribute(this._menu, "popper"),
        S.trigger(this._element, EE, t);
    }
  }
  _getConfig(t) {
    if (
      ((t = super._getConfig(t)),
      typeof t.reference == "object" &&
        !_t(t.reference) &&
        typeof t.reference.getBoundingClientRect != "function")
    )
      throw new TypeError(
        `${vf.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
      );
    return t;
  }
  _createPopper() {
    if (typeof jh > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)",
      );
    let t = this._element;
    this._config.reference === "parent"
      ? (t = this._parent)
      : _t(this._config.reference)
        ? (t = Qt(this._config.reference))
        : typeof this._config.reference == "object" &&
          (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = Nu(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(Rn);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(kE)) return jE;
    if (t.classList.contains(NE)) return zE;
    if (t.classList.contains(xE)) return bE;
    if (t.classList.contains(AE)) return FE;
    const n =
      getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() ===
      "end";
    return t.classList.contains(TE) ? (n ? RE : IE) : n ? ME : $E;
  }
  _detectNavbar() {
    return this._element.closest(LE) !== null;
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string"
      ? t.split(",").map((n) => Number.parseInt(n, 10))
      : typeof t == "function"
        ? (n) => t(n, this._element)
        : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        { name: "offset", options: { offset: this._getOffset() } },
      ],
    };
    return (
      (this._inNavbar || this._config.display === "static") &&
        (Et.setDataAttribute(this._menu, "popper", "static"),
        (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
      { ...t, ...Se(this._config.popperConfig, [t]) }
    );
  }
  _selectMenuItem({ key: t, target: n }) {
    const r = D.find(DE, this._menu).filter((i) => wr(i));
    r.length && xu(r, n, t === _f, !r.includes(n)).focus();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = ut.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === yE || (t.type === "keyup" && t.key !== yf)) return;
    const n = D.find(OE);
    for (const r of n) {
      const i = ut.getInstance(r);
      if (!i || i._config.autoClose === !1) continue;
      const o = t.composedPath(),
        s = o.includes(i._menu);
      if (
        o.includes(i._element) ||
        (i._config.autoClose === "inside" && !s) ||
        (i._config.autoClose === "outside" && s) ||
        (i._menu.contains(t.target) &&
          ((t.type === "keyup" && t.key === yf) ||
            /input|select|option|textarea|form/i.test(t.target.tagName)))
      )
        continue;
      const l = { relatedTarget: i._element };
      t.type === "click" && (l.clickEvent = t), i._completeHide(l);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName),
      r = t.key === gE,
      i = [vE, _f].includes(t.key);
    if ((!i && !r) || (n && !r)) return;
    t.preventDefault();
    const o = this.matches(dn)
        ? this
        : D.prev(this, dn)[0] ||
          D.next(this, dn)[0] ||
          D.findOne(dn, t.delegateTarget.parentNode),
      s = ut.getOrCreateInstance(o);
    if (i) {
      t.stopPropagation(), s.show(), s._selectMenuItem(t);
      return;
    }
    s._isShown() && (t.stopPropagation(), s.hide(), o.focus());
  }
}
S.on(document, tm, dn, ut.dataApiKeydownHandler);
S.on(document, tm, ho, ut.dataApiKeydownHandler);
S.on(document, em, ut.clearMenus);
S.on(document, CE, ut.clearMenus);
S.on(document, em, dn, function (e) {
  e.preventDefault(), ut.getOrCreateInstance(this).toggle();
});
Ye(ut);
const nm = "backdrop",
  WE = "fade",
  Ef = "show",
  wf = `mousedown.bs.${nm}`,
  BE = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body",
  },
  HE = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)",
  };
class rm extends ki {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isAppended = !1),
      (this._element = null);
  }
  static get Default() {
    return BE;
  }
  static get DefaultType() {
    return HE;
  }
  static get NAME() {
    return nm;
  }
  show(t) {
    if (!this._config.isVisible) {
      Se(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Ti(n),
      n.classList.add(Ef),
      this._emulateAnimation(() => {
        Se(t);
      });
  }
  hide(t) {
    if (!this._config.isVisible) {
      Se(t);
      return;
    }
    this._getElement().classList.remove(Ef),
      this._emulateAnimation(() => {
        this.dispose(), Se(t);
      });
  }
  dispose() {
    this._isAppended &&
      (S.off(this._element, wf),
      this._element.remove(),
      (this._isAppended = !1));
  }
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      (t.className = this._config.className),
        this._config.isAnimated && t.classList.add(WE),
        (this._element = t);
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return (t.rootElement = Qt(t.rootElement)), t;
  }
  _append() {
    if (this._isAppended) return;
    const t = this._getElement();
    this._config.rootElement.append(t),
      S.on(t, wf, () => {
        Se(this._config.clickCallback);
      }),
      (this._isAppended = !0);
  }
  _emulateAnimation(t) {
    Uh(t, this._getElement(), this._config.isAnimated);
  }
}
const KE = "focustrap",
  YE = "bs.focustrap",
  Ko = `.${YE}`,
  QE = `focusin${Ko}`,
  GE = `keydown.tab${Ko}`,
  XE = "Tab",
  qE = "forward",
  Sf = "backward",
  ZE = { autofocus: !0, trapElement: null },
  JE = { autofocus: "boolean", trapElement: "element" };
class im extends ki {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null);
  }
  static get Default() {
    return ZE;
  }
  static get DefaultType() {
    return JE;
  }
  static get NAME() {
    return KE;
  }
  activate() {
    this._isActive ||
      (this._config.autofocus && this._config.trapElement.focus(),
      S.off(document, Ko),
      S.on(document, QE, (t) => this._handleFocusin(t)),
      S.on(document, GE, (t) => this._handleKeydown(t)),
      (this._isActive = !0));
  }
  deactivate() {
    this._isActive && ((this._isActive = !1), S.off(document, Ko));
  }
  _handleFocusin(t) {
    const { trapElement: n } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target)) return;
    const r = D.focusableChildren(n);
    r.length === 0
      ? n.focus()
      : this._lastTabNavDirection === Sf
        ? r[r.length - 1].focus()
        : r[0].focus();
  }
  _handleKeydown(t) {
    t.key === XE && (this._lastTabNavDirection = t.shiftKey ? Sf : qE);
  }
}
const Cf = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  Tf = ".sticky-top",
  Gi = "padding-right",
  kf = "margin-right";
class ga {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(),
      this._setElementAttributes(this._element, Gi, (n) => n + t),
      this._setElementAttributes(Cf, Gi, (n) => n + t),
      this._setElementAttributes(Tf, kf, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"),
      this._resetElementAttributes(this._element, Gi),
      this._resetElementAttributes(Cf, Gi),
      this._resetElementAttributes(Tf, kf);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"),
      (this._element.style.overflow = "hidden");
  }
  _setElementAttributes(t, n, r) {
    const i = this.getWidth(),
      o = (s) => {
        if (s !== this._element && window.innerWidth > s.clientWidth + i)
          return;
        this._saveInitialAttribute(s, n);
        const l = window.getComputedStyle(s).getPropertyValue(n);
        s.style.setProperty(n, `${r(Number.parseFloat(l))}px`);
      };
    this._applyManipulationCallback(t, o);
  }
  _saveInitialAttribute(t, n) {
    const r = t.style.getPropertyValue(n);
    r && Et.setDataAttribute(t, n, r);
  }
  _resetElementAttributes(t, n) {
    const r = (i) => {
      const o = Et.getDataAttribute(i, n);
      if (o === null) {
        i.style.removeProperty(n);
        return;
      }
      Et.removeDataAttribute(i, n), i.style.setProperty(n, o);
    };
    this._applyManipulationCallback(t, r);
  }
  _applyManipulationCallback(t, n) {
    if (_t(t)) {
      n(t);
      return;
    }
    for (const r of D.find(t, this._element)) n(r);
  }
}
const e1 = "modal",
  t1 = "bs.modal",
  Ke = `.${t1}`,
  n1 = ".data-api",
  r1 = "Escape",
  i1 = `hide${Ke}`,
  o1 = `hidePrevented${Ke}`,
  om = `hidden${Ke}`,
  sm = `show${Ke}`,
  s1 = `shown${Ke}`,
  l1 = `resize${Ke}`,
  a1 = `click.dismiss${Ke}`,
  u1 = `mousedown.dismiss${Ke}`,
  c1 = `keydown.dismiss${Ke}`,
  f1 = `click${Ke}${n1}`,
  Nf = "modal-open",
  d1 = "fade",
  xf = "show",
  ol = "modal-static",
  p1 = ".modal.show",
  h1 = ".modal-dialog",
  m1 = ".modal-body",
  g1 = '[data-bs-toggle="modal"]',
  v1 = { backdrop: !0, focus: !0, keyboard: !0 },
  y1 = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
class hr extends tt {
  constructor(t, n) {
    super(t, n),
      (this._dialog = D.findOne(h1, this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new ga()),
      this._addEventListeners();
  }
  static get Default() {
    return v1;
  }
  static get DefaultType() {
    return y1;
  }
  static get NAME() {
    return e1;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown ||
      this._isTransitioning ||
      S.trigger(this._element, sm, { relatedTarget: t }).defaultPrevented ||
      ((this._isShown = !0),
      (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(Nf),
      this._adjustDialog(),
      this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown ||
      this._isTransitioning ||
      S.trigger(this._element, i1).defaultPrevented ||
      ((this._isShown = !1),
      (this._isTransitioning = !0),
      this._focustrap.deactivate(),
      this._element.classList.remove(xf),
      this._queueCallback(
        () => this._hideModal(),
        this._element,
        this._isAnimated(),
      ));
  }
  dispose() {
    S.off(window, Ke),
      S.off(this._dialog, Ke),
      this._backdrop.dispose(),
      this._focustrap.deactivate(),
      super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new rm({
      isVisible: !!this._config.backdrop,
      isAnimated: this._isAnimated(),
    });
  }
  _initializeFocusTrap() {
    return new im({ trapElement: this._element });
  }
  _showElement(t) {
    document.body.contains(this._element) ||
      document.body.append(this._element),
      (this._element.style.display = "block"),
      this._element.removeAttribute("aria-hidden"),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      (this._element.scrollTop = 0);
    const n = D.findOne(m1, this._dialog);
    n && (n.scrollTop = 0), Ti(this._element), this._element.classList.add(xf);
    const r = () => {
      this._config.focus && this._focustrap.activate(),
        (this._isTransitioning = !1),
        S.trigger(this._element, s1, { relatedTarget: t });
    };
    this._queueCallback(r, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    S.on(this._element, c1, (t) => {
      if (t.key === r1) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }),
      S.on(window, l1, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }),
      S.on(this._element, u1, (t) => {
        S.one(this._element, a1, (n) => {
          if (!(this._element !== t.target || this._element !== n.target)) {
            if (this._config.backdrop === "static") {
              this._triggerBackdropTransition();
              return;
            }
            this._config.backdrop && this.hide();
          }
        });
      });
  }
  _hideModal() {
    (this._element.style.display = "none"),
      this._element.setAttribute("aria-hidden", !0),
      this._element.removeAttribute("aria-modal"),
      this._element.removeAttribute("role"),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        document.body.classList.remove(Nf),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          S.trigger(this._element, om);
      });
  }
  _isAnimated() {
    return this._element.classList.contains(d1);
  }
  _triggerBackdropTransition() {
    if (S.trigger(this._element, o1).defaultPrevented) return;
    const n =
        this._element.scrollHeight > document.documentElement.clientHeight,
      r = this._element.style.overflowY;
    r === "hidden" ||
      this._element.classList.contains(ol) ||
      (n || (this._element.style.overflowY = "hidden"),
      this._element.classList.add(ol),
      this._queueCallback(() => {
        this._element.classList.remove(ol),
          this._queueCallback(() => {
            this._element.style.overflowY = r;
          }, this._dialog);
      }, this._dialog),
      this._element.focus());
  }
  _adjustDialog() {
    const t =
        this._element.scrollHeight > document.documentElement.clientHeight,
      n = this._scrollBar.getWidth(),
      r = n > 0;
    if (r && !t) {
      const i = He() ? "paddingLeft" : "paddingRight";
      this._element.style[i] = `${n}px`;
    }
    if (!r && t) {
      const i = He() ? "paddingRight" : "paddingLeft";
      this._element.style[i] = `${n}px`;
    }
  }
  _resetAdjustments() {
    (this._element.style.paddingLeft = ""),
      (this._element.style.paddingRight = "");
  }
  static jQueryInterface(t, n) {
    return this.each(function () {
      const r = hr.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof r[t] > "u") throw new TypeError(`No method named "${t}"`);
        r[t](n);
      }
    });
  }
}
S.on(document, f1, g1, function (e) {
  const t = D.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
    S.one(t, sm, (i) => {
      i.defaultPrevented ||
        S.one(t, om, () => {
          wr(this) && this.focus();
        });
    });
  const n = D.findOne(p1);
  n && hr.getInstance(n).hide(), hr.getOrCreateInstance(t).toggle(this);
});
ms(hr);
Ye(hr);
const _1 = "offcanvas",
  E1 = "bs.offcanvas",
  xt = `.${E1}`,
  lm = ".data-api",
  w1 = `load${xt}${lm}`,
  S1 = "Escape",
  Af = "show",
  Of = "showing",
  Lf = "hiding",
  C1 = "offcanvas-backdrop",
  am = ".offcanvas.show",
  T1 = `show${xt}`,
  k1 = `shown${xt}`,
  N1 = `hide${xt}`,
  Pf = `hidePrevented${xt}`,
  um = `hidden${xt}`,
  x1 = `resize${xt}`,
  A1 = `click${xt}${lm}`,
  O1 = `keydown.dismiss${xt}`,
  L1 = '[data-bs-toggle="offcanvas"]',
  P1 = { backdrop: !0, keyboard: !0, scroll: !1 },
  D1 = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
class Xt extends tt {
  constructor(t, n) {
    super(t, n),
      (this._isShown = !1),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      this._addEventListeners();
  }
  static get Default() {
    return P1;
  }
  static get DefaultType() {
    return D1;
  }
  static get NAME() {
    return _1;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (
      this._isShown ||
      S.trigger(this._element, T1, { relatedTarget: t }).defaultPrevented
    )
      return;
    (this._isShown = !0),
      this._backdrop.show(),
      this._config.scroll || new ga().hide(),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      this._element.classList.add(Of);
    const r = () => {
      (!this._config.scroll || this._config.backdrop) &&
        this._focustrap.activate(),
        this._element.classList.add(Af),
        this._element.classList.remove(Of),
        S.trigger(this._element, k1, { relatedTarget: t });
    };
    this._queueCallback(r, this._element, !0);
  }
  hide() {
    if (!this._isShown || S.trigger(this._element, N1).defaultPrevented) return;
    this._focustrap.deactivate(),
      this._element.blur(),
      (this._isShown = !1),
      this._element.classList.add(Lf),
      this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(Af, Lf),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        this._config.scroll || new ga().reset(),
        S.trigger(this._element, um);
    };
    this._queueCallback(n, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  _initializeBackDrop() {
    const t = () => {
        if (this._config.backdrop === "static") {
          S.trigger(this._element, Pf);
          return;
        }
        this.hide();
      },
      n = !!this._config.backdrop;
    return new rm({
      className: C1,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null,
    });
  }
  _initializeFocusTrap() {
    return new im({ trapElement: this._element });
  }
  _addEventListeners() {
    S.on(this._element, O1, (t) => {
      if (t.key === S1) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        S.trigger(this._element, Pf);
      }
    });
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Xt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
S.on(document, A1, L1, function (e) {
  const t = D.getElementFromSelector(this);
  if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), Gt(this)))
    return;
  S.one(t, um, () => {
    wr(this) && this.focus();
  });
  const n = D.findOne(am);
  n && n !== t && Xt.getInstance(n).hide(),
    Xt.getOrCreateInstance(t).toggle(this);
});
S.on(window, w1, () => {
  for (const e of D.find(am)) Xt.getOrCreateInstance(e).show();
});
S.on(window, x1, () => {
  for (const e of D.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" &&
      Xt.getOrCreateInstance(e).hide();
});
ms(Xt);
Ye(Xt);
const I1 = /^aria-[\w-]*$/i,
  cm = {
    "*": ["class", "dir", "id", "lang", "role", I1],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: [],
  },
  R1 = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href",
  ]),
  $1 = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
  M1 = (e, t) => {
    const n = e.nodeName.toLowerCase();
    return t.includes(n)
      ? R1.has(n)
        ? !!$1.test(e.nodeValue)
        : !0
      : t.filter((r) => r instanceof RegExp).some((r) => r.test(n));
  };
function j1(e, t, n) {
  if (!e.length) return e;
  if (n && typeof n == "function") return n(e);
  const i = new window.DOMParser().parseFromString(e, "text/html"),
    o = [].concat(...i.body.querySelectorAll("*"));
  for (const s of o) {
    const l = s.nodeName.toLowerCase();
    if (!Object.keys(t).includes(l)) {
      s.remove();
      continue;
    }
    const a = [].concat(...s.attributes),
      u = [].concat(t["*"] || [], t[l] || []);
    for (const c of a) M1(c, u) || s.removeAttribute(c.nodeName);
  }
  return i.body.innerHTML;
}
const z1 = "TemplateFactory",
  b1 = {
    allowList: cm,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>",
  },
  F1 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string",
  },
  V1 = {
    entry: "(string|element|function|null)",
    selector: "(string|element)",
  };
class U1 extends ki {
  constructor(t) {
    super(), (this._config = this._getConfig(t));
  }
  static get Default() {
    return b1;
  }
  static get DefaultType() {
    return F1;
  }
  static get NAME() {
    return z1;
  }
  getContent() {
    return Object.values(this._config.content)
      .map((t) => this._resolvePossibleFunction(t))
      .filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(t) {
    return (
      this._checkContent(t),
      (this._config.content = { ...this._config.content, ...t }),
      this
    );
  }
  toHtml() {
    const t = document.createElement("div");
    t.innerHTML = this._maybeSanitize(this._config.template);
    for (const [i, o] of Object.entries(this._config.content))
      this._setContent(t, o, i);
    const n = t.children[0],
      r = this._resolvePossibleFunction(this._config.extraClass);
    return r && n.classList.add(...r.split(" ")), n;
  }
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [n, r] of Object.entries(t))
      super._typeCheckConfig({ selector: n, entry: r }, V1);
  }
  _setContent(t, n, r) {
    const i = D.findOne(r, t);
    if (i) {
      if (((n = this._resolvePossibleFunction(n)), !n)) {
        i.remove();
        return;
      }
      if (_t(n)) {
        this._putElementInTemplate(Qt(n), i);
        return;
      }
      if (this._config.html) {
        i.innerHTML = this._maybeSanitize(n);
        return;
      }
      i.textContent = n;
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize
      ? j1(t, this._config.allowList, this._config.sanitizeFn)
      : t;
  }
  _resolvePossibleFunction(t) {
    return Se(t, [this]);
  }
  _putElementInTemplate(t, n) {
    if (this._config.html) {
      (n.innerHTML = ""), n.append(t);
      return;
    }
    n.textContent = t.textContent;
  }
}
const W1 = "tooltip",
  B1 = new Set(["sanitize", "allowList", "sanitizeFn"]),
  sl = "fade",
  H1 = "modal",
  Xi = "show",
  K1 = ".tooltip-inner",
  Df = `.${H1}`,
  If = "hide.bs.modal",
  Ir = "hover",
  ll = "focus",
  Y1 = "click",
  Q1 = "manual",
  G1 = "hide",
  X1 = "hidden",
  q1 = "show",
  Z1 = "shown",
  J1 = "inserted",
  ew = "click",
  tw = "focusin",
  nw = "focusout",
  rw = "mouseenter",
  iw = "mouseleave",
  ow = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: He() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: He() ? "right" : "left",
  },
  sw = {
    allowList: cm,
    animation: !0,
    boundary: "clippingParents",
    container: !1,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: !1,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template:
      '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus",
  },
  lw = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
  };
class Cr extends tt {
  constructor(t, n) {
    if (typeof jh > "u")
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)",
      );
    super(t, n),
      (this._isEnabled = !0),
      (this._timeout = 0),
      (this._isHovered = null),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this._templateFactory = null),
      (this._newContent = null),
      (this.tip = null),
      this._setListeners(),
      this._config.selector || this._fixTitle();
  }
  static get Default() {
    return sw;
  }
  static get DefaultType() {
    return lw;
  }
  static get NAME() {
    return W1;
  }
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (this._isEnabled) {
      if (
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown())
      ) {
        this._leave();
        return;
      }
      this._enter();
    }
  }
  dispose() {
    clearTimeout(this._timeout),
      S.off(this._element.closest(Df), If, this._hideModalHandler),
      this._element.getAttribute("data-bs-original-title") &&
        this._element.setAttribute(
          "title",
          this._element.getAttribute("data-bs-original-title"),
        ),
      this._disposePopper(),
      super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled)) return;
    const t = S.trigger(this._element, this.constructor.eventName(q1)),
      r = (
        Fh(this._element) || this._element.ownerDocument.documentElement
      ).contains(this._element);
    if (t.defaultPrevented || !r) return;
    this._disposePopper();
    const i = this._getTipElement();
    this._element.setAttribute("aria-describedby", i.getAttribute("id"));
    const { container: o } = this._config;
    if (
      (this._element.ownerDocument.documentElement.contains(this.tip) ||
        (o.append(i), S.trigger(this._element, this.constructor.eventName(J1))),
      (this._popper = this._createPopper(i)),
      i.classList.add(Xi),
      "ontouchstart" in document.documentElement)
    )
      for (const l of [].concat(...document.body.children))
        S.on(l, "mouseover", Bo);
    const s = () => {
      S.trigger(this._element, this.constructor.eventName(Z1)),
        this._isHovered === !1 && this._leave(),
        (this._isHovered = !1);
    };
    this._queueCallback(s, this.tip, this._isAnimated());
  }
  hide() {
    if (
      !this._isShown() ||
      S.trigger(this._element, this.constructor.eventName(G1)).defaultPrevented
    )
      return;
    if (
      (this._getTipElement().classList.remove(Xi),
      "ontouchstart" in document.documentElement)
    )
      for (const i of [].concat(...document.body.children))
        S.off(i, "mouseover", Bo);
    (this._activeTrigger[Y1] = !1),
      (this._activeTrigger[ll] = !1),
      (this._activeTrigger[Ir] = !1),
      (this._isHovered = null);
    const r = () => {
      this._isWithActiveTrigger() ||
        (this._isHovered || this._disposePopper(),
        this._element.removeAttribute("aria-describedby"),
        S.trigger(this._element, this.constructor.eventName(X1)));
    };
    this._queueCallback(r, this.tip, this._isAnimated());
  }
  update() {
    this._popper && this._popper.update();
  }
  _isWithContent() {
    return !!this._getTitle();
  }
  _getTipElement() {
    return (
      this.tip ||
        (this.tip = this._createTipElement(
          this._newContent || this._getContentForTemplate(),
        )),
      this.tip
    );
  }
  _createTipElement(t) {
    const n = this._getTemplateFactory(t).toHtml();
    if (!n) return null;
    n.classList.remove(sl, Xi),
      n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const r = Y_(this.constructor.NAME).toString();
    return (
      n.setAttribute("id", r), this._isAnimated() && n.classList.add(sl), n
    );
  }
  setContent(t) {
    (this._newContent = t),
      this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return (
      this._templateFactory
        ? this._templateFactory.changeContent(t)
        : (this._templateFactory = new U1({
            ...this._config,
            content: t,
            extraClass: this._resolvePossibleFunction(this._config.customClass),
          })),
      this._templateFactory
    );
  }
  _getContentForTemplate() {
    return { [K1]: this._getTitle() };
  }
  _getTitle() {
    return (
      this._resolvePossibleFunction(this._config.title) ||
      this._element.getAttribute("data-bs-original-title")
    );
  }
  _initializeOnDelegatedTarget(t) {
    return this.constructor.getOrCreateInstance(
      t.delegateTarget,
      this._getDelegateConfig(),
    );
  }
  _isAnimated() {
    return (
      this._config.animation || (this.tip && this.tip.classList.contains(sl))
    );
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(Xi);
  }
  _createPopper(t) {
    const n = Se(this._config.placement, [this, t, this._element]),
      r = ow[n.toUpperCase()];
    return Nu(this._element, t, this._getPopperConfig(r));
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string"
      ? t.split(",").map((n) => Number.parseInt(n, 10))
      : typeof t == "function"
        ? (n) => t(n, this._element)
        : t;
  }
  _resolvePossibleFunction(t) {
    return Se(t, [this._element]);
  }
  _getPopperConfig(t) {
    const n = {
      placement: t,
      modifiers: [
        {
          name: "flip",
          options: { fallbackPlacements: this._config.fallbackPlacements },
        },
        { name: "offset", options: { offset: this._getOffset() } },
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        {
          name: "arrow",
          options: { element: `.${this.constructor.NAME}-arrow` },
        },
        {
          name: "preSetPlacement",
          enabled: !0,
          phase: "beforeMain",
          fn: (r) => {
            this._getTipElement().setAttribute(
              "data-popper-placement",
              r.state.placement,
            );
          },
        },
      ],
    };
    return { ...n, ...Se(this._config.popperConfig, [n]) };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const n of t)
      if (n === "click")
        S.on(
          this._element,
          this.constructor.eventName(ew),
          this._config.selector,
          (r) => {
            this._initializeOnDelegatedTarget(r).toggle();
          },
        );
      else if (n !== Q1) {
        const r =
            n === Ir
              ? this.constructor.eventName(rw)
              : this.constructor.eventName(tw),
          i =
            n === Ir
              ? this.constructor.eventName(iw)
              : this.constructor.eventName(nw);
        S.on(this._element, r, this._config.selector, (o) => {
          const s = this._initializeOnDelegatedTarget(o);
          (s._activeTrigger[o.type === "focusin" ? ll : Ir] = !0), s._enter();
        }),
          S.on(this._element, i, this._config.selector, (o) => {
            const s = this._initializeOnDelegatedTarget(o);
            (s._activeTrigger[o.type === "focusout" ? ll : Ir] =
              s._element.contains(o.relatedTarget)),
              s._leave();
          });
      }
    (this._hideModalHandler = () => {
      this._element && this.hide();
    }),
      S.on(this._element.closest(Df), If, this._hideModalHandler);
  }
  _fixTitle() {
    const t = this._element.getAttribute("title");
    t &&
      (!this._element.getAttribute("aria-label") &&
        !this._element.textContent.trim() &&
        this._element.setAttribute("aria-label", t),
      this._element.setAttribute("data-bs-original-title", t),
      this._element.removeAttribute("title"));
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0;
      return;
    }
    (this._isHovered = !0),
      this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show);
  }
  _leave() {
    this._isWithActiveTrigger() ||
      ((this._isHovered = !1),
      this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
  }
  _setTimeout(t, n) {
    clearTimeout(this._timeout), (this._timeout = setTimeout(t, n));
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(t) {
    const n = Et.getDataAttributes(this._element);
    for (const r of Object.keys(n)) B1.has(r) && delete n[r];
    return (
      (t = { ...n, ...(typeof t == "object" && t ? t : {}) }),
      (t = this._mergeConfigObj(t)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  _configAfterMerge(t) {
    return (
      (t.container = t.container === !1 ? document.body : Qt(t.container)),
      typeof t.delay == "number" &&
        (t.delay = { show: t.delay, hide: t.delay }),
      typeof t.title == "number" && (t.title = t.title.toString()),
      typeof t.content == "number" && (t.content = t.content.toString()),
      t
    );
  }
  _getDelegateConfig() {
    const t = {};
    for (const [n, r] of Object.entries(this._config))
      this.constructor.Default[n] !== r && (t[n] = r);
    return (t.selector = !1), (t.trigger = "manual"), t;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), (this._popper = null)),
      this.tip && (this.tip.remove(), (this.tip = null));
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Cr.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Ye(Cr);
const aw = "popover",
  uw = ".popover-header",
  cw = ".popover-body",
  fw = {
    ...Cr.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template:
      '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click",
  },
  dw = { ...Cr.DefaultType, content: "(null|string|element|function)" };
class Lu extends Cr {
  static get Default() {
    return fw;
  }
  static get DefaultType() {
    return dw;
  }
  static get NAME() {
    return aw;
  }
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  _getContentForTemplate() {
    return { [uw]: this._getTitle(), [cw]: this._getContent() };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Lu.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Ye(Lu);
const pw = "scrollspy",
  hw = "bs.scrollspy",
  Pu = `.${hw}`,
  mw = ".data-api",
  gw = `activate${Pu}`,
  Rf = `click${Pu}`,
  vw = `load${Pu}${mw}`,
  yw = "dropdown-item",
  Pn = "active",
  _w = '[data-bs-spy="scroll"]',
  al = "[href]",
  Ew = ".nav, .list-group",
  $f = ".nav-link",
  ww = ".nav-item",
  Sw = ".list-group-item",
  Cw = `${$f}, ${ww} > ${$f}, ${Sw}`,
  Tw = ".dropdown",
  kw = ".dropdown-toggle",
  Nw = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [0.1, 0.5, 1],
  },
  xw = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array",
  };
class ys extends tt {
  constructor(t, n) {
    super(t, n),
      (this._targetLinks = new Map()),
      (this._observableSections = new Map()),
      (this._rootElement =
        getComputedStyle(this._element).overflowY === "visible"
          ? null
          : this._element),
      (this._activeTarget = null),
      (this._observer = null),
      (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
      this.refresh();
  }
  static get Default() {
    return Nw;
  }
  static get DefaultType() {
    return xw;
  }
  static get NAME() {
    return pw;
  }
  refresh() {
    this._initializeTargetsAndObservables(),
      this._maybeEnableSmoothScroll(),
      this._observer
        ? this._observer.disconnect()
        : (this._observer = this._getNewObserver());
    for (const t of this._observableSections.values())
      this._observer.observe(t);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  _configAfterMerge(t) {
    return (
      (t.target = Qt(t.target) || document.body),
      (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
      typeof t.threshold == "string" &&
        (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))),
      t
    );
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll &&
      (S.off(this._config.target, Rf),
      S.on(this._config.target, Rf, al, (t) => {
        const n = this._observableSections.get(t.target.hash);
        if (n) {
          t.preventDefault();
          const r = this._rootElement || window,
            i = n.offsetTop - this._element.offsetTop;
          if (r.scrollTo) {
            r.scrollTo({ top: i, behavior: "smooth" });
            return;
          }
          r.scrollTop = i;
        }
      }));
  }
  _getNewObserver() {
    const t = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin,
    };
    return new IntersectionObserver((n) => this._observerCallback(n), t);
  }
  _observerCallback(t) {
    const n = (s) => this._targetLinks.get(`#${s.target.id}`),
      r = (s) => {
        (this._previousScrollData.visibleEntryTop = s.target.offsetTop),
          this._process(n(s));
      },
      i = (this._rootElement || document.documentElement).scrollTop,
      o = i >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = i;
    for (const s of t) {
      if (!s.isIntersecting) {
        (this._activeTarget = null), this._clearActiveClass(n(s));
        continue;
      }
      const l = s.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (o && l) {
        if ((r(s), !i)) return;
        continue;
      }
      !o && !l && r(s);
    }
  }
  _initializeTargetsAndObservables() {
    (this._targetLinks = new Map()), (this._observableSections = new Map());
    const t = D.find(al, this._config.target);
    for (const n of t) {
      if (!n.hash || Gt(n)) continue;
      const r = D.findOne(decodeURI(n.hash), this._element);
      wr(r) &&
        (this._targetLinks.set(decodeURI(n.hash), n),
        this._observableSections.set(n.hash, r));
    }
  }
  _process(t) {
    this._activeTarget !== t &&
      (this._clearActiveClass(this._config.target),
      (this._activeTarget = t),
      t.classList.add(Pn),
      this._activateParents(t),
      S.trigger(this._element, gw, { relatedTarget: t }));
  }
  _activateParents(t) {
    if (t.classList.contains(yw)) {
      D.findOne(kw, t.closest(Tw)).classList.add(Pn);
      return;
    }
    for (const n of D.parents(t, Ew))
      for (const r of D.prev(n, Cw)) r.classList.add(Pn);
  }
  _clearActiveClass(t) {
    t.classList.remove(Pn);
    const n = D.find(`${al}.${Pn}`, t);
    for (const r of n) r.classList.remove(Pn);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = ys.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
S.on(window, vw, () => {
  for (const e of D.find(_w)) ys.getOrCreateInstance(e);
});
Ye(ys);
const Aw = "tab",
  Ow = "bs.tab",
  An = `.${Ow}`,
  Lw = `hide${An}`,
  Pw = `hidden${An}`,
  Dw = `show${An}`,
  Iw = `shown${An}`,
  Rw = `click${An}`,
  $w = `keydown${An}`,
  Mw = `load${An}`,
  jw = "ArrowLeft",
  Mf = "ArrowRight",
  zw = "ArrowUp",
  jf = "ArrowDown",
  ul = "Home",
  zf = "End",
  pn = "active",
  bf = "fade",
  cl = "show",
  bw = "dropdown",
  fm = ".dropdown-toggle",
  Fw = ".dropdown-menu",
  fl = `:not(${fm})`,
  Vw = '.list-group, .nav, [role="tablist"]',
  Uw = ".nav-item, .list-group-item",
  Ww = `.nav-link${fl}, .list-group-item${fl}, [role="tab"]${fl}`,
  dm =
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
  dl = `${Ww}, ${dm}`,
  Bw = `.${pn}[data-bs-toggle="tab"], .${pn}[data-bs-toggle="pill"], .${pn}[data-bs-toggle="list"]`;
class mr extends tt {
  constructor(t) {
    super(t),
      (this._parent = this._element.closest(Vw)),
      this._parent &&
        (this._setInitialAttributes(this._parent, this._getChildren()),
        S.on(this._element, $w, (n) => this._keydown(n)));
  }
  static get NAME() {
    return Aw;
  }
  show() {
    const t = this._element;
    if (this._elemIsActive(t)) return;
    const n = this._getActiveElem(),
      r = n ? S.trigger(n, Lw, { relatedTarget: t }) : null;
    S.trigger(t, Dw, { relatedTarget: n }).defaultPrevented ||
      (r && r.defaultPrevented) ||
      (this._deactivate(n, t), this._activate(t, n));
  }
  _activate(t, n) {
    if (!t) return;
    t.classList.add(pn), this._activate(D.getElementFromSelector(t));
    const r = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(cl);
        return;
      }
      t.removeAttribute("tabindex"),
        t.setAttribute("aria-selected", !0),
        this._toggleDropDown(t, !0),
        S.trigger(t, Iw, { relatedTarget: n });
    };
    this._queueCallback(r, t, t.classList.contains(bf));
  }
  _deactivate(t, n) {
    if (!t) return;
    t.classList.remove(pn),
      t.blur(),
      this._deactivate(D.getElementFromSelector(t));
    const r = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(cl);
        return;
      }
      t.setAttribute("aria-selected", !1),
        t.setAttribute("tabindex", "-1"),
        this._toggleDropDown(t, !1),
        S.trigger(t, Pw, { relatedTarget: n });
    };
    this._queueCallback(r, t, t.classList.contains(bf));
  }
  _keydown(t) {
    if (![jw, Mf, zw, jf, ul, zf].includes(t.key)) return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((i) => !Gt(i));
    let r;
    if ([ul, zf].includes(t.key)) r = n[t.key === ul ? 0 : n.length - 1];
    else {
      const i = [Mf, jf].includes(t.key);
      r = xu(n, t.target, i, !0);
    }
    r && (r.focus({ preventScroll: !0 }), mr.getOrCreateInstance(r).show());
  }
  _getChildren() {
    return D.find(dl, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null;
  }
  _setInitialAttributes(t, n) {
    this._setAttributeIfNotExists(t, "role", "tablist");
    for (const r of n) this._setInitialAttributesOnChild(r);
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t);
    const n = this._elemIsActive(t),
      r = this._getOuterElement(t);
    t.setAttribute("aria-selected", n),
      r !== t && this._setAttributeIfNotExists(r, "role", "presentation"),
      n || t.setAttribute("tabindex", "-1"),
      this._setAttributeIfNotExists(t, "role", "tab"),
      this._setInitialAttributesOnTargetPanel(t);
  }
  _setInitialAttributesOnTargetPanel(t) {
    const n = D.getElementFromSelector(t);
    n &&
      (this._setAttributeIfNotExists(n, "role", "tabpanel"),
      t.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, n) {
    const r = this._getOuterElement(t);
    if (!r.classList.contains(bw)) return;
    const i = (o, s) => {
      const l = D.findOne(o, r);
      l && l.classList.toggle(s, n);
    };
    i(fm, pn), i(Fw, cl), r.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, r) {
    t.hasAttribute(n) || t.setAttribute(n, r);
  }
  _elemIsActive(t) {
    return t.classList.contains(pn);
  }
  _getInnerElement(t) {
    return t.matches(dl) ? t : D.findOne(dl, t);
  }
  _getOuterElement(t) {
    return t.closest(Uw) || t;
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = mr.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
S.on(document, Rw, dm, function (e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
    !Gt(this) && mr.getOrCreateInstance(this).show();
});
S.on(window, Mw, () => {
  for (const e of D.find(Bw)) mr.getOrCreateInstance(e);
});
Ye(mr);
const Hw = "toast",
  Kw = "bs.toast",
  rn = `.${Kw}`,
  Yw = `mouseover${rn}`,
  Qw = `mouseout${rn}`,
  Gw = `focusin${rn}`,
  Xw = `focusout${rn}`,
  qw = `hide${rn}`,
  Zw = `hidden${rn}`,
  Jw = `show${rn}`,
  eS = `shown${rn}`,
  tS = "fade",
  Ff = "hide",
  qi = "show",
  Zi = "showing",
  nS = { animation: "boolean", autohide: "boolean", delay: "number" },
  rS = { animation: !0, autohide: !0, delay: 5e3 };
class _s extends tt {
  constructor(t, n) {
    super(t, n),
      (this._timeout = null),
      (this._hasMouseInteraction = !1),
      (this._hasKeyboardInteraction = !1),
      this._setListeners();
  }
  static get Default() {
    return rS;
  }
  static get DefaultType() {
    return nS;
  }
  static get NAME() {
    return Hw;
  }
  show() {
    if (S.trigger(this._element, Jw).defaultPrevented) return;
    this._clearTimeout(),
      this._config.animation && this._element.classList.add(tS);
    const n = () => {
      this._element.classList.remove(Zi),
        S.trigger(this._element, eS),
        this._maybeScheduleHide();
    };
    this._element.classList.remove(Ff),
      Ti(this._element),
      this._element.classList.add(qi, Zi),
      this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || S.trigger(this._element, qw).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(Ff),
        this._element.classList.remove(Zi, qi),
        S.trigger(this._element, Zw);
    };
    this._element.classList.add(Zi),
      this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(),
      this.isShown() && this._element.classList.remove(qi),
      super.dispose();
  }
  isShown() {
    return this._element.classList.contains(qi);
  }
  _maybeScheduleHide() {
    this._config.autohide &&
      (this._hasMouseInteraction ||
        this._hasKeyboardInteraction ||
        (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
  }
  _onInteraction(t, n) {
    switch (t.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = n;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = n;
        break;
      }
    }
    if (n) {
      this._clearTimeout();
      return;
    }
    const r = t.relatedTarget;
    this._element === r ||
      this._element.contains(r) ||
      this._maybeScheduleHide();
  }
  _setListeners() {
    S.on(this._element, Yw, (t) => this._onInteraction(t, !0)),
      S.on(this._element, Qw, (t) => this._onInteraction(t, !1)),
      S.on(this._element, Gw, (t) => this._onInteraction(t, !0)),
      S.on(this._element, Xw, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), (this._timeout = null);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = _s.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
ms(_s);
Ye(_s);
const iS = pl.createRoot(document.getElementById("root"));
iS.render(T.jsx(Xf.StrictMode, { children: T.jsx(r_, {}) }));
