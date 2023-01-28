import { g as getDefaultExportFromCjs } from "./_commonjsHelpers.712cc82f.js";
import { r as react } from "./index.2e2f892a.js";
import { c as _baseToString, a as isArray_1, d as isArguments_1, e as isBuffer$2, f as isTypedArray_1, b as isFunction_1, g as isLength_1, h as _Stack, j as _equalArrays, k as _equalByTag, l as _getTag, i as isObjectLike_1, m as isObject_1, n as isSymbol_1, o as _MapCache, p as _getNative } from "./_getTag.d1b75f35.js";
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k(a) {
    if (0 === a.length)
      return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a:
        for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
          var m = 2 * (d + 1) - 1, C2 = a[m], n = m + 1, x = a[n];
          if (0 > g(C2, c))
            n < e && 0 > g(x, C2) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C2, a[m] = c, d = m);
          else if (n < e && 0 > g(x, c))
            a[d] = x, a[n] = c, d = n;
          else
            break a;
        }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l = performance;
    exports.unstable_now = function() {
      return l.now();
    };
  } else {
    var p2 = Date, q = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q;
    };
  }
  var r = [], t2 = [], u = 1, v = null, y = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h(t2); null !== b; ) {
      if (null === b.callback)
        k(t2);
      else if (b.startTime <= a)
        k(t2), b.sortIndex = b.expirationTime, f(r, b);
      else
        break;
      b = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h(r))
        A2 = true, I2(J);
      else {
        var b = h(t2);
        null !== b && K2(H2, b.startTime - a);
      }
  }
  function J(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y;
    try {
      G2(b);
      for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M2()); ) {
        var d = v.callback;
        if ("function" === typeof d) {
          v.callback = null;
          y = v.priorityLevel;
          var e = d(v.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e ? v.callback = e : v === h(r) && k(r);
          G2(b);
        } else
          k(r);
        v = h(r);
      }
      if (null !== v)
        var w = true;
      else {
        var m = h(t2);
        null !== m && K2(H2, m.startTime - b);
        w = false;
      }
      return w;
    } finally {
      v = null, y = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F)
    S2 = function() {
      F(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r);
  };
  exports.unstable_next = function(a) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y;
    }
    var c = y;
    y = b;
    try {
      return a();
    } finally {
      y = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y;
    y = a;
    try {
      return b();
    } finally {
      y = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f(t2, a), null === h(r) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f(r, a), A2 || z2 || (A2 = true, I2(J)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y;
    return function() {
      var c = y;
      y = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y = c;
      }
    };
  };
})(scheduler_production_min);
(function(module) {
  {
    module.exports = scheduler_production_min;
  }
})(scheduler);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, ba = scheduler.exports;
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++)
    da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function na(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function oa(a, b, c, d) {
  if (null !== c && 0 === c.type)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (null !== c)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function pa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || oa(a, b, c, d))
    return true;
  if (d)
    return false;
  if (null !== c)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function t(a, b, c, d, e, f, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new t(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new t(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new t(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new t(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new t(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new t(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new t(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new t(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new t(a, 5, false, a.toLowerCase(), null, false, false);
});
var qa = /[\-:]([a-z])/g;
function ra(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    qa,
    ra
  );
  z[b] = new t(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(qa, ra);
  z[b] = new t(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(qa, ra);
  z[b] = new t(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new t(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new t("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new t(a, 1, false, a.toLowerCase(), null, true, true);
});
function sa(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
    pa(b, c, e, d) && (c = null), d || null === e ? na(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ta = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ua = Symbol.for("react.element"), va = Symbol.for("react.portal"), wa = Symbol.for("react.fragment"), xa = Symbol.for("react.strict_mode"), za = Symbol.for("react.profiler"), Aa = Symbol.for("react.provider"), Ba = Symbol.for("react.context"), Ca = Symbol.for("react.forward_ref"), Da = Symbol.for("react.suspense"), Ea = Symbol.for("react.suspense_list"), Fa = Symbol.for("react.memo"), Ga = Symbol.for("react.lazy");
var Ha = Symbol.for("react.offscreen");
var Ia = Symbol.iterator;
function Ja(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ia && a[Ia] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, Ka;
function La(a) {
  if (void 0 === Ka)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Ka = b && b[1] || "";
    }
  return "\n" + Ka + a;
}
var Ma = false;
function Na(a, b) {
  if (!a || Ma)
    return "";
  Ma = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l) {
          var d = l;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l) {
          d = l;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l) {
        d = l;
      }
      a();
    }
  } catch (l) {
    if (l && d && "string" === typeof l.stack) {
      for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f[h]) {
                var k = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                return k;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Ma = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? La(a) : "";
}
function Oa(a) {
  switch (a.tag) {
    case 5:
      return La(a.type);
    case 16:
      return La("Lazy");
    case 13:
      return La("Suspense");
    case 19:
      return La("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Na(a.type, false), a;
    case 11:
      return a = Na(a.type.render, false), a;
    case 1:
      return a = Na(a.type, true), a;
    default:
      return "";
  }
}
function Pa(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case wa:
      return "Fragment";
    case va:
      return "Portal";
    case za:
      return "Profiler";
    case xa:
      return "StrictMode";
    case Da:
      return "Suspense";
    case Ea:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ba:
        return (a.displayName || "Context") + ".Consumer";
      case Aa:
        return (a._context.displayName || "Context") + ".Provider";
      case Ca:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Fa:
        return b = a.displayName || null, null !== b ? b : Pa(a.type) || "Memo";
      case Ga:
        b = a._payload;
        a = a._init;
        try {
          return Pa(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Qa(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pa(b);
    case 8:
      return b === xa ? "StrictMode" : "Mode";
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
      if ("function" === typeof b)
        return b.displayName || b.name || null;
      if ("string" === typeof b)
        return b;
  }
  return null;
}
function Ra(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Sa(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ta(a) {
  var b = Sa(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Ua(a) {
  a._valueTracker || (a._valueTracker = Ta(a));
}
function Va(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Sa(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Wa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Xa(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Ya(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Ra(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function Za(a, b) {
  b = b.checked;
  null != b && sa(a, "checked", b, false);
}
function $a(a, b) {
  Za(a, b);
  var c = Ra(b.value), d = b.type;
  if (null != c)
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Ra(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function cb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function bb(a, b, c) {
  if ("number" !== b || Wa(a.ownerDocument) !== a)
    null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var db = Array.isArray;
function eb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Ra(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function fb(a, b) {
  if (null != b.dangerouslySetInnerHTML)
    throw Error(p(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function gb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b)
        throw Error(p(92));
      if (db(c)) {
        if (1 < c.length)
          throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Ra(c) };
}
function hb(a, b) {
  var c = Ra(b.value), d = Ra(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function ib(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function jb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? jb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var lb, mb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b;
  else {
    lb = lb || document.createElement("div");
    lb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = lb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function nb(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var ob = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, pb = ["Webkit", "ms", "Moz", "O"];
Object.keys(ob).forEach(function(a) {
  pb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    ob[b] = ob[a];
  });
});
function qb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || ob.hasOwnProperty(a) && ob[a] ? ("" + b).trim() : b + "px";
}
function rb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = qb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var sb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function tb(a, b) {
  if (b) {
    if (sb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
      throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children)
        throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
        throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style)
      throw Error(p(62));
  }
}
function ub(a, b) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var vb = null;
function wb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var xb = null, yb = null, zb = null;
function Ab(a) {
  if (a = Bb(a)) {
    if ("function" !== typeof xb)
      throw Error(p(280));
    var b = a.stateNode;
    b && (b = Cb(b), xb(a.stateNode, a.type, b));
  }
}
function Db(a) {
  yb ? zb ? zb.push(a) : zb = [a] : yb = a;
}
function Eb() {
  if (yb) {
    var a = yb, b = zb;
    zb = yb = null;
    Ab(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Ab(b[a]);
  }
}
function Fb(a, b) {
  return a(b);
}
function Gb() {
}
var Hb = false;
function Ib(a, b, c) {
  if (Hb)
    return a(b, c);
  Hb = true;
  try {
    return Fb(a, b, c);
  } finally {
    if (Hb = false, null !== yb || null !== zb)
      Gb(), Eb();
  }
}
function Jb(a, b) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Cb(c);
  if (null === d)
    return null;
  c = d[b];
  a:
    switch (b) {
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
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(p(231, b, typeof c));
  return c;
}
var Kb = false;
if (ia)
  try {
    var Lb = {};
    Object.defineProperty(Lb, "passive", { get: function() {
      Kb = true;
    } });
    window.addEventListener("test", Lb, Lb);
    window.removeEventListener("test", Lb, Lb);
  } catch (a) {
    Kb = false;
  }
function Mb(a, b, c, d, e, f, g, h, k) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l);
  } catch (n) {
    this.onError(n);
  }
}
var Nb = false, Ob = null, Pb = false, Qb = null, Rb = { onError: function(a) {
  Nb = true;
  Ob = a;
} };
function Sb(a, b, c, d, e, f, g, h, k) {
  Nb = false;
  Ob = null;
  Mb.apply(Rb, arguments);
}
function Tb(a, b, c, d, e, f, g, h, k) {
  Sb.apply(this, arguments);
  if (Nb) {
    if (Nb) {
      var l = Ob;
      Nb = false;
      Ob = null;
    } else
      throw Error(p(198));
    Pb || (Pb = true, Qb = l);
  }
}
function Ub(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Vb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b)
      return b.dehydrated;
  }
  return null;
}
function Wb(a) {
  if (Ub(a) !== a)
    throw Error(p(188));
}
function Xb(a) {
  var b = a.alternate;
  if (!b) {
    b = Ub(a);
    if (null === b)
      throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e)
      break;
    var f = e.alternate;
    if (null === f) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f; ) {
        if (f === c)
          return Wb(e), a;
        if (f === d)
          return Wb(e), b;
        f = f.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return)
      c = e, d = f;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h; ) {
          if (h === c) {
            g = true;
            c = f;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(p(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p(190));
  }
  if (3 !== c.tag)
    throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Yb(a) {
  a = Xb(a);
  return null !== a ? Zb(a) : null;
}
function Zb(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b = Zb(a);
    if (null !== b)
      return b;
    a = a.sibling;
  }
  return null;
}
var $b = ba.unstable_scheduleCallback, ac = ba.unstable_cancelCallback, bc = ba.unstable_shouldYield, cc = ba.unstable_requestPaint, B = ba.unstable_now, dc = ba.unstable_getCurrentPriorityLevel, ec = ba.unstable_ImmediatePriority, fc = ba.unstable_UserBlockingPriority, gc = ba.unstable_NormalPriority, hc = ba.unstable_LowPriority, ic = ba.unstable_IdlePriority, jc = null, kc = null;
function lc(a) {
  if (kc && "function" === typeof kc.onCommitFiberRoot)
    try {
      kc.onCommitFiberRoot(jc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
}
var nc = Math.clz32 ? Math.clz32 : mc, oc = Math.log, pc = Math.LN2;
function mc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (oc(a) / pc | 0) | 0;
}
var qc = 64, rc = 4194304;
function sc(a) {
  switch (a & -a) {
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
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function tc(a, b) {
  var c = a.pendingLanes;
  if (0 === c)
    return 0;
  var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = sc(h) : (f &= g, 0 !== f && (d = sc(f)));
  } else
    g = c & ~e, 0 !== g ? d = sc(g) : 0 !== f && (d = sc(f));
  if (0 === d)
    return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240)))
    return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - nc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function uc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
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
      return b + 5e3;
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
function vc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
    var g = 31 - nc(f), h = 1 << g, k = e[g];
    if (-1 === k) {
      if (0 === (h & c) || 0 !== (h & d))
        e[g] = uc(h, b);
    } else
      k <= b && (a.expiredLanes |= h);
    f &= ~h;
  }
}
function wc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function xc() {
  var a = qc;
  qc <<= 1;
  0 === (qc & 4194240) && (qc = 64);
  return a;
}
function yc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function zc(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - nc(b);
  a[b] = c;
}
function Ac(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - nc(c), f = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f;
  }
}
function Bc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - nc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Cc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Dc, Ec, Fc, Gc, Hc, Ic = false, Jc = [], Kc = null, Lc = null, Mc = null, Nc = /* @__PURE__ */ new Map(), Oc = /* @__PURE__ */ new Map(), Pc = [], Qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Rc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Kc = null;
      break;
    case "dragenter":
    case "dragleave":
      Lc = null;
      break;
    case "mouseover":
    case "mouseout":
      Mc = null;
      break;
    case "pointerover":
    case "pointerout":
      Nc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Oc.delete(b.pointerId);
  }
}
function Sc(a, b, c, d, e, f) {
  if (null === a || a.nativeEvent !== f)
    return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Bb(b), null !== b && Ec(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Tc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Kc = Sc(Kc, a, b, c, d, e), true;
    case "dragenter":
      return Lc = Sc(Lc, a, b, c, d, e), true;
    case "mouseover":
      return Mc = Sc(Mc, a, b, c, d, e), true;
    case "pointerover":
      var f = e.pointerId;
      Nc.set(f, Sc(Nc.get(f) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f = e.pointerId, Oc.set(f, Sc(Oc.get(f) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Uc(a) {
  var b = Vc(a.target);
  if (null !== b) {
    var c = Ub(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Vb(c), null !== b) {
          a.blockedOn = b;
          Hc(a.priority, function() {
            Fc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Wc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Xc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      vb = d;
      c.target.dispatchEvent(d);
      vb = null;
    } else
      return b = Bb(c), null !== b && Ec(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Yc(a, b, c) {
  Wc(a) && c.delete(b);
}
function Zc() {
  Ic = false;
  null !== Kc && Wc(Kc) && (Kc = null);
  null !== Lc && Wc(Lc) && (Lc = null);
  null !== Mc && Wc(Mc) && (Mc = null);
  Nc.forEach(Yc);
  Oc.forEach(Yc);
}
function $c(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Ic || (Ic = true, ba.unstable_scheduleCallback(ba.unstable_NormalPriority, Zc)));
}
function ad(a) {
  function b(b2) {
    return $c(b2, a);
  }
  if (0 < Jc.length) {
    $c(Jc[0], a);
    for (var c = 1; c < Jc.length; c++) {
      var d = Jc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Kc && $c(Kc, a);
  null !== Lc && $c(Lc, a);
  null !== Mc && $c(Mc, a);
  Nc.forEach(b);
  Oc.forEach(b);
  for (c = 0; c < Pc.length; c++)
    d = Pc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Pc.length && (c = Pc[0], null === c.blockedOn); )
    Uc(c), null === c.blockedOn && Pc.shift();
}
var bd = ta.ReactCurrentBatchConfig, cd = true;
function dd(a, b, c, d) {
  var e = C, f = bd.transition;
  bd.transition = null;
  try {
    C = 1, ed(a, b, c, d);
  } finally {
    C = e, bd.transition = f;
  }
}
function fd(a, b, c, d) {
  var e = C, f = bd.transition;
  bd.transition = null;
  try {
    C = 4, ed(a, b, c, d);
  } finally {
    C = e, bd.transition = f;
  }
}
function ed(a, b, c, d) {
  if (cd) {
    var e = Xc(a, b, c, d);
    if (null === e)
      gd(a, b, d, hd, c), Rc(a, d);
    else if (Tc(e, a, b, c, d))
      d.stopPropagation();
    else if (Rc(a, d), b & 4 && -1 < Qc.indexOf(a)) {
      for (; null !== e; ) {
        var f = Bb(e);
        null !== f && Dc(f);
        f = Xc(a, b, c, d);
        null === f && gd(a, b, d, hd, c);
        if (f === e)
          break;
        e = f;
      }
      null !== e && d.stopPropagation();
    } else
      gd(a, b, d, null, c);
  }
}
var hd = null;
function Xc(a, b, c, d) {
  hd = null;
  a = wb(d);
  a = Vc(a);
  if (null !== a)
    if (b = Ub(a), null === b)
      a = null;
    else if (c = b.tag, 13 === c) {
      a = Vb(b);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated)
        return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else
      b !== a && (a = null);
  hd = a;
  return null;
}
function id(a) {
  switch (a) {
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
      switch (dc()) {
        case ec:
          return 1;
        case fc:
          return 4;
        case gc:
        case hc:
          return 16;
        case ic:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jd = null, kd = null, ld = null;
function md() {
  if (ld)
    return ld;
  var a, b = kd, c = b.length, d, e = "value" in jd ? jd.value : jd.textContent, f = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
    ;
  return ld = e.slice(a, 1 < d ? 1 - d : void 0);
}
function nd(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function od() {
  return true;
}
function pd() {
  return false;
}
function qd(a) {
  function b(b2, d, e, f, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? od : pd;
    this.isPropagationStopped = pd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = od);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = od);
  }, persist: function() {
  }, isPersistent: od });
  return b;
}
var rd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, sd = qd(rd), td = A({}, rd, { view: 0, detail: 0 }), ud = qd(td), vd, wd, xd, zd = A({}, td, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== xd && (xd && "mousemove" === a.type ? (vd = a.screenX - xd.screenX, wd = a.screenY - xd.screenY) : wd = vd = 0, xd = a);
  return vd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : wd;
} }), Ad = qd(zd), Bd = A({}, zd, { dataTransfer: 0 }), Cd = qd(Bd), Dd = A({}, td, { relatedTarget: 0 }), Ed = qd(Dd), Fd = A({}, rd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gd = qd(Fd), Hd = A({}, rd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Id = qd(Hd), Jd = A({}, rd, { data: 0 }), Kd = qd(Jd), Ld = {
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
  MozPrintableKey: "Unidentified"
}, Md = {
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
  224: "Meta"
}, Nd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Od(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Nd[a]) ? !!b[a] : false;
}
function yd() {
  return Od;
}
var Pd = A({}, td, { key: function(a) {
  if (a.key) {
    var b = Ld[a.key] || a.key;
    if ("Unidentified" !== b)
      return b;
  }
  return "keypress" === a.type ? (a = nd(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Md[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yd, charCode: function(a) {
  return "keypress" === a.type ? nd(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? nd(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Qd = qd(Pd), Rd = A({}, zd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sd = qd(Rd), Td = A({}, td, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yd }), Ud = qd(Td), Vd = A({}, rd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wd = qd(Vd), Xd = A({}, zd, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Yd = qd(Xd), Zd = [9, 13, 27, 32], $d = ia && "CompositionEvent" in window, ae = null;
ia && "documentMode" in document && (ae = document.documentMode);
var be = ia && "TextEvent" in window && !ae, ce = ia && (!$d || ae && 8 < ae && 11 >= ae), de = String.fromCharCode(32), ee = false;
function fe(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== Zd.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function ge(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var he = false;
function ie(a, b) {
  switch (a) {
    case "compositionend":
      return ge(b);
    case "keypress":
      if (32 !== b.which)
        return null;
      ee = true;
      return de;
    case "textInput":
      return a = b.data, a === de && ee ? null : a;
    default:
      return null;
  }
}
function je(a, b) {
  if (he)
    return "compositionend" === a || !$d && fe(a, b) ? (a = md(), ld = kd = jd = null, he = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return ce && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var ke = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function le(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!ke[a.type] : "textarea" === b ? true : false;
}
function me(a, b, c, d) {
  Db(d);
  b = ne(b, "onChange");
  0 < b.length && (c = new sd("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var oe = null, pe = null;
function qe(a) {
  re(a, 0);
}
function se(a) {
  var b = te(a);
  if (Va(b))
    return a;
}
function ue(a, b) {
  if ("change" === a)
    return b;
}
var ve = false;
if (ia) {
  var we;
  if (ia) {
    var xe = "oninput" in document;
    if (!xe) {
      var ye = document.createElement("div");
      ye.setAttribute("oninput", "return;");
      xe = "function" === typeof ye.oninput;
    }
    we = xe;
  } else
    we = false;
  ve = we && (!document.documentMode || 9 < document.documentMode);
}
function ze() {
  oe && (oe.detachEvent("onpropertychange", Ae), pe = oe = null);
}
function Ae(a) {
  if ("value" === a.propertyName && se(pe)) {
    var b = [];
    me(b, pe, a, wb(a));
    Ib(qe, b);
  }
}
function Be(a, b, c) {
  "focusin" === a ? (ze(), oe = b, pe = c, oe.attachEvent("onpropertychange", Ae)) : "focusout" === a && ze();
}
function Ce(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return se(pe);
}
function De(a, b) {
  if ("click" === a)
    return se(b);
}
function Ee(a, b) {
  if ("input" === a || "change" === a)
    return se(b);
}
function Fe(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var Ge = "function" === typeof Object.is ? Object.is : Fe;
function He(a, b) {
  if (Ge(a, b))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !Ge(a[e], b[e]))
      return false;
  }
  return true;
}
function Ie(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Je(a, b) {
  var c = Ie(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Ie(c);
  }
}
function Ke(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Ke(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Le() {
  for (var a = window, b = Wa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Wa(a.document);
  }
  return b;
}
function Me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Ne(a) {
  var b = Le(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Ke(c.ownerDocument.documentElement, c)) {
    if (null !== d && Me(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
        c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f = Math.min(d.start, e);
        d = void 0 === d.end ? f : Math.min(d.end, e);
        !a.extend && f > d && (e = d, d = f, f = e);
        e = Je(c, f);
        var g = Je(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; )
      1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++)
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Oe = ia && "documentMode" in document && 11 >= document.documentMode, Pe = null, Qe = null, Re = null, Se = false;
function Te(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Se || null == Pe || Pe !== Wa(d) || (d = Pe, "selectionStart" in d && Me(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Re && He(Re, d) || (Re = d, d = ne(Qe, "onSelect"), 0 < d.length && (b = new sd("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Pe)));
}
function Ue(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var Ve = { animationend: Ue("Animation", "AnimationEnd"), animationiteration: Ue("Animation", "AnimationIteration"), animationstart: Ue("Animation", "AnimationStart"), transitionend: Ue("Transition", "TransitionEnd") }, We = {}, Xe = {};
ia && (Xe = document.createElement("div").style, "AnimationEvent" in window || (delete Ve.animationend.animation, delete Ve.animationiteration.animation, delete Ve.animationstart.animation), "TransitionEvent" in window || delete Ve.transitionend.transition);
function Ye(a) {
  if (We[a])
    return We[a];
  if (!Ve[a])
    return a;
  var b = Ve[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Xe)
      return We[a] = b[c];
  return a;
}
var Ze = Ye("animationend"), $e = Ye("animationiteration"), af = Ye("animationstart"), bf = Ye("transitionend"), cf = /* @__PURE__ */ new Map(), df = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ef(a, b) {
  cf.set(a, b);
  fa(b, [a]);
}
for (var ff = 0; ff < df.length; ff++) {
  var gf = df[ff], hf = gf.toLowerCase(), jf = gf[0].toUpperCase() + gf.slice(1);
  ef(hf, "on" + jf);
}
ef(Ze, "onAnimationEnd");
ef($e, "onAnimationIteration");
ef(af, "onAnimationStart");
ef("dblclick", "onDoubleClick");
ef("focusin", "onFocus");
ef("focusout", "onBlur");
ef(bf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kf));
function mf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Tb(d, b, void 0, a);
  a.currentTarget = null;
}
function re(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          mf(e, h, l);
          f = k;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          mf(e, h, l);
          f = k;
        }
    }
  }
  if (Pb)
    throw a = Qb, Pb = false, Qb = null, a;
}
function D(a, b) {
  var c = b[nf];
  void 0 === c && (c = b[nf] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (of(b, a, 2, false), c.add(d));
}
function pf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  of(c, a, d, b);
}
var qf = "_reactListening" + Math.random().toString(36).slice(2);
function rf(a) {
  if (!a[qf]) {
    a[qf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (lf.has(b2) || pf(b2, false, a), pf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[qf] || (b[qf] = true, pf("selectionchange", false, b));
  }
}
function of(a, b, c, d) {
  switch (id(b)) {
    case 1:
      var e = dd;
      break;
    case 4:
      e = fd;
      break;
    default:
      e = ed;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Kb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function gd(a, b, c, d, e) {
  var f = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e)
            break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k = g.tag;
              if (3 === k || 4 === k) {
                if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; null !== h; ) {
            g = Vc(h);
            if (null === g)
              return;
            k = g.tag;
            if (5 === k || 6 === k) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Ib(function() {
    var d2 = f, e2 = wb(c), g2 = [];
    a: {
      var h2 = cf.get(a);
      if (void 0 !== h2) {
        var k2 = sd, m = a;
        switch (a) {
          case "keypress":
            if (0 === nd(c))
              break a;
          case "keydown":
          case "keyup":
            k2 = Qd;
            break;
          case "focusin":
            m = "focus";
            k2 = Ed;
            break;
          case "focusout":
            m = "blur";
            k2 = Ed;
            break;
          case "beforeblur":
          case "afterblur":
            k2 = Ed;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k2 = Ad;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k2 = Cd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k2 = Ud;
            break;
          case Ze:
          case $e:
          case af:
            k2 = Gd;
            break;
          case bf:
            k2 = Wd;
            break;
          case "scroll":
            k2 = ud;
            break;
          case "wheel":
            k2 = Yd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k2 = Id;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k2 = Sd;
        }
        var w = 0 !== (b & 4), J = !w && "scroll" === a, v = w ? null !== h2 ? h2 + "Capture" : null : h2;
        w = [];
        for (var x = d2, r; null !== x; ) {
          r = x;
          var F = r.stateNode;
          5 === r.tag && null !== F && (r = F, null !== v && (F = Jb(x, v), null != F && w.push(sf(x, F, r))));
          if (J)
            break;
          x = x.return;
        }
        0 < w.length && (h2 = new k2(h2, m, null, c, e2), g2.push({ event: h2, listeners: w }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k2 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== vb && (m = c.relatedTarget || c.fromElement) && (Vc(m) || m[tf]))
          break a;
        if (k2 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k2) {
            if (m = c.relatedTarget || c.toElement, k2 = d2, m = m ? Vc(m) : null, null !== m && (J = Ub(m), m !== J || 5 !== m.tag && 6 !== m.tag))
              m = null;
          } else
            k2 = null, m = d2;
          if (k2 !== m) {
            w = Ad;
            F = "onMouseLeave";
            v = "onMouseEnter";
            x = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              w = Sd, F = "onPointerLeave", v = "onPointerEnter", x = "pointer";
            J = null == k2 ? h2 : te(k2);
            r = null == m ? h2 : te(m);
            h2 = new w(F, x + "leave", k2, c, e2);
            h2.target = J;
            h2.relatedTarget = r;
            F = null;
            Vc(e2) === d2 && (w = new w(v, x + "enter", m, c, e2), w.target = r, w.relatedTarget = J, F = w);
            J = F;
            if (k2 && m)
              b: {
                w = k2;
                v = m;
                x = 0;
                for (r = w; r; r = uf(r))
                  x++;
                r = 0;
                for (F = v; F; F = uf(F))
                  r++;
                for (; 0 < x - r; )
                  w = uf(w), x--;
                for (; 0 < r - x; )
                  v = uf(v), r--;
                for (; x--; ) {
                  if (w === v || null !== v && w === v.alternate)
                    break b;
                  w = uf(w);
                  v = uf(v);
                }
                w = null;
              }
            else
              w = null;
            null !== k2 && vf(g2, h2, k2, w, false);
            null !== m && null !== J && vf(g2, J, m, w, true);
          }
        }
      }
      a: {
        h2 = d2 ? te(d2) : window;
        k2 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k2 || "input" === k2 && "file" === h2.type)
          var Z = ue;
        else if (le(h2))
          if (ve)
            Z = Ee;
          else {
            Z = Ce;
            var ya = Be;
          }
        else
          (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (Z = De);
        if (Z && (Z = Z(a, d2))) {
          me(g2, Z, c, e2);
          break a;
        }
        ya && ya(a, h2, d2);
        "focusout" === a && (ya = h2._wrapperState) && ya.controlled && "number" === h2.type && bb(h2, "number", h2.value);
      }
      ya = d2 ? te(d2) : window;
      switch (a) {
        case "focusin":
          if (le(ya) || "true" === ya.contentEditable)
            Pe = ya, Qe = d2, Re = null;
          break;
        case "focusout":
          Re = Qe = Pe = null;
          break;
        case "mousedown":
          Se = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Se = false;
          Te(g2, c, e2);
          break;
        case "selectionchange":
          if (Oe)
            break;
        case "keydown":
        case "keyup":
          Te(g2, c, e2);
      }
      var ab;
      if ($d)
        b: {
          switch (a) {
            case "compositionstart":
              var ca = "onCompositionStart";
              break b;
            case "compositionend":
              ca = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ca = "onCompositionUpdate";
              break b;
          }
          ca = void 0;
        }
      else
        he ? fe(a, c) && (ca = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ca = "onCompositionStart");
      ca && (ce && "ko" !== c.locale && (he || "onCompositionStart" !== ca ? "onCompositionEnd" === ca && he && (ab = md()) : (jd = e2, kd = "value" in jd ? jd.value : jd.textContent, he = true)), ya = ne(d2, ca), 0 < ya.length && (ca = new Kd(ca, a, null, c, e2), g2.push({ event: ca, listeners: ya }), ab ? ca.data = ab : (ab = ge(c), null !== ab && (ca.data = ab))));
      if (ab = be ? ie(a, c) : je(a, c))
        d2 = ne(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Kd("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = ab);
    }
    re(g2, b);
  });
}
function sf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function ne(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f = e.stateNode;
    5 === e.tag && null !== f && (e = f, f = Jb(a, c), null != f && d.unshift(sf(a, f, e)), f = Jb(a, b), null != f && d.push(sf(a, f, e)));
    a = a.return;
  }
  return d;
}
function uf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function vf(a, b, c, d, e) {
  for (var f = b._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k = h.alternate, l = h.stateNode;
    if (null !== k && k === d)
      break;
    5 === h.tag && null !== l && (h = l, e ? (k = Jb(c, f), null != k && g.unshift(sf(c, k, h))) : e || (k = Jb(c, f), null != k && g.push(sf(c, k, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var wf = /\r\n?/g, xf = /\u0000|\uFFFD/g;
function yf(a) {
  return ("string" === typeof a ? a : "" + a).replace(wf, "\n").replace(xf, "");
}
function zf(a, b, c) {
  b = yf(b);
  if (yf(a) !== b && c)
    throw Error(p(425));
}
function Af() {
}
var Bf = null, Cf = null;
function Df(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ef = "function" === typeof setTimeout ? setTimeout : void 0, Ff = "function" === typeof clearTimeout ? clearTimeout : void 0, Gf = "function" === typeof Promise ? Promise : void 0, If = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Gf ? function(a) {
  return Gf.resolve(null).then(a).catch(Hf);
} : Ef;
function Hf(a) {
  setTimeout(function() {
    throw a;
  });
}
function Jf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType)
      if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          ad(b);
          return;
        }
        d--;
      } else
        "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  ad(b);
}
function Kf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b)
      break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b)
        break;
      if ("/$" === b)
        return null;
    }
  }
  return a;
}
function Lf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b)
          return a;
        b--;
      } else
        "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Mf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Mf, Of = "__reactProps$" + Mf, tf = "__reactContainer$" + Mf, nf = "__reactEvents$" + Mf, Pf = "__reactListeners$" + Mf, Qf = "__reactHandles$" + Mf;
function Vc(a) {
  var b = a[Nf];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[tf] || c[Nf]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child)
        for (a = Lf(a); null !== a; ) {
          if (c = a[Nf])
            return c;
          a = Lf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Bb(a) {
  a = a[Nf] || a[tf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function te(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p(33));
}
function Cb(a) {
  return a[Of] || null;
}
var Rf = [], Sf = -1;
function Tf(a) {
  return { current: a };
}
function E(a) {
  0 > Sf || (a.current = Rf[Sf], Rf[Sf] = null, Sf--);
}
function G(a, b) {
  Sf++;
  Rf[Sf] = a.current;
  a.current = b;
}
var Uf = {}, H = Tf(Uf), Vf = Tf(false), Wf = Uf;
function Xf(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Uf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f;
  for (f in c)
    e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Yf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function Zf() {
  E(Vf);
  E(H);
}
function $f(a, b, c) {
  if (H.current !== Uf)
    throw Error(p(168));
  G(H, b);
  G(Vf, c);
}
function ag(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext)
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in b))
      throw Error(p(108, Qa(a) || "Unknown", e));
  return A({}, c, d);
}
function bg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Uf;
  Wf = H.current;
  G(H, a);
  G(Vf, Vf.current);
  return true;
}
function cg(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(p(169));
  c ? (a = ag(a, b, Wf), d.__reactInternalMemoizedMergedChildContext = a, E(Vf), E(H), G(H, a)) : E(Vf);
  G(Vf, c);
}
var dg = null, eg = false, fg = false;
function gg(a) {
  null === dg ? dg = [a] : dg.push(a);
}
function hg(a) {
  eg = true;
  gg(a);
}
function ig() {
  if (!fg && null !== dg) {
    fg = true;
    var a = 0, b = C;
    try {
      var c = dg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      dg = null;
      eg = false;
    } catch (e) {
      throw null !== dg && (dg = dg.slice(a + 1)), $b(ec, ig), e;
    } finally {
      C = b, fg = false;
    }
  }
  return null;
}
var jg = ta.ReactCurrentBatchConfig;
function kg(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
var lg = Tf(null), mg = null, ng = null, og = null;
function pg() {
  og = ng = mg = null;
}
function qg(a) {
  var b = lg.current;
  E(lg);
  a._currentValue = b;
}
function rg(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c)
      break;
    a = a.return;
  }
}
function sg(a, b) {
  mg = a;
  og = ng = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (tg = true), a.firstContext = null);
}
function ug(a) {
  var b = a._currentValue;
  if (og !== a)
    if (a = { context: a, memoizedValue: b, next: null }, null === ng) {
      if (null === mg)
        throw Error(p(308));
      ng = a;
      mg.dependencies = { lanes: 0, firstContext: a };
    } else
      ng = ng.next = a;
  return b;
}
var vg = null, wg = false;
function xg(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function yg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function zg(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a, b) {
  var c = a.updateQueue;
  null !== c && (c = c.shared, Bg(a) ? (a = c.interleaved, null === a ? (b.next = b, null === vg ? vg = [c] : vg.push(c)) : (b.next = a.next, a.next = b), c.interleaved = b) : (a = c.pending, null === a ? b.next = b : (b.next = a.next, a.next = b), c.pending = b));
}
function Cg(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Bc(a, c);
  }
}
function Dg(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f ? e = f = g : f = f.next = g;
        c = c.next;
      } while (null !== c);
      null === f ? e = f = b : f = f.next = b;
    } else
      e = f = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function Eg(a, b, c, d) {
  var e = a.updateQueue;
  wg = false;
  var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k = h, l = k.next;
    k.next = null;
    null === g ? f = l : g.next = l;
    g = k;
    var n = a.alternate;
    null !== n && (n = n.updateQueue, h = n.lastBaseUpdate, h !== g && (null === h ? n.firstBaseUpdate = l : h.next = l, n.lastBaseUpdate = k));
  }
  if (null !== f) {
    var u = e.baseState;
    g = 0;
    n = l = k = null;
    h = f;
    do {
      var q = h.lane, y = h.eventTime;
      if ((d & q) === q) {
        null !== n && (n = n.next = {
          eventTime: y,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var m = a, w = h;
          q = b;
          y = c;
          switch (w.tag) {
            case 1:
              m = w.payload;
              if ("function" === typeof m) {
                u = m.call(y, u, q);
                break a;
              }
              u = m;
              break a;
            case 3:
              m.flags = m.flags & -65537 | 128;
            case 0:
              m = w.payload;
              q = "function" === typeof m ? m.call(y, u, q) : m;
              if (null === q || void 0 === q)
                break a;
              u = A({}, u, q);
              break a;
            case 2:
              wg = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, q = e.effects, null === q ? e.effects = [h] : q.push(h));
      } else
        y = { eventTime: y, lane: q, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === n ? (l = n = y, k = u) : n = n.next = y, g |= q;
      h = h.next;
      if (null === h)
        if (h = e.shared.pending, null === h)
          break;
        else
          q = h, h = q.next, q.next = null, e.lastBaseUpdate = q, e.shared.pending = null;
    } while (1);
    null === n && (k = u);
    e.baseState = k;
    e.firstBaseUpdate = l;
    e.lastBaseUpdate = n;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do
        g |= e.lane, e = e.next;
      while (e !== b);
    } else
      null === f && (e.shared.lanes = 0);
    Fg |= g;
    a.lanes = g;
    a.memoizedState = u;
  }
}
function Gg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e)
          throw Error(p(191, e));
        e.call(d);
      }
    }
}
var Hg = new aa.Component().refs;
function Ig(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var Mg = { isMounted: function(a) {
  return (a = a._reactInternals) ? Ub(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = Jg(), e = Kg(a), f = zg(d, e);
  f.payload = b;
  void 0 !== c && null !== c && (f.callback = c);
  Ag(a, f);
  b = Lg(a, e, d);
  null !== b && Cg(b, a, e);
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = Jg(), e = Kg(a), f = zg(d, e);
  f.tag = 1;
  f.payload = b;
  void 0 !== c && null !== c && (f.callback = c);
  Ag(a, f);
  b = Lg(a, e, d);
  null !== b && Cg(b, a, e);
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = Jg(), d = Kg(a), e = zg(
    c,
    d
  );
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  Ag(a, e);
  b = Lg(a, d, c);
  null !== b && Cg(b, a, d);
} };
function Ng(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !He(c, d) || !He(e, f) : true;
}
function Og(a, b, c) {
  var d = false, e = Uf;
  var f = b.contextType;
  "object" === typeof f && null !== f ? f = ug(f) : (e = Yf(b) ? Wf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Xf(a, e) : Uf);
  b = new b(c, f);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Mg;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function Pg(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Mg.enqueueReplaceState(b, b.state, null);
}
function Qg(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Hg;
  xg(a);
  var f = b.contextType;
  "object" === typeof f && null !== f ? e.context = ug(f) : (f = Yf(b) ? Wf : H.current, e.context = Xf(a, f));
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  "function" === typeof f && (Ig(a, b, f, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Mg.enqueueReplaceState(e, e.state, null), Eg(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
var Rg = [], Sg = 0, Tg = null, Ug = 0, Vg = [], Wg = 0, Xg = null, Yg = 1, Zg = "";
function $g(a, b) {
  Rg[Sg++] = Ug;
  Rg[Sg++] = Tg;
  Tg = a;
  Ug = b;
}
function ah(a, b, c) {
  Vg[Wg++] = Yg;
  Vg[Wg++] = Zg;
  Vg[Wg++] = Xg;
  Xg = a;
  var d = Yg;
  a = Zg;
  var e = 32 - nc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f = 32 - nc(b) + e;
  if (30 < f) {
    var g = e - e % 5;
    f = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    Yg = 1 << 32 - nc(b) + e | c << e | d;
    Zg = f + a;
  } else
    Yg = 1 << f | c << e | d, Zg = a;
}
function bh(a) {
  null !== a.return && ($g(a, 1), ah(a, 1, 0));
}
function ch(a) {
  for (; a === Tg; )
    Tg = Rg[--Sg], Rg[Sg] = null, Ug = Rg[--Sg], Rg[Sg] = null;
  for (; a === Xg; )
    Xg = Vg[--Wg], Vg[Wg] = null, Zg = Vg[--Wg], Vg[Wg] = null, Yg = Vg[--Wg], Vg[Wg] = null;
}
var dh = null, eh = null, I = false, fh = null;
function gh(a, b) {
  var c = hh(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function ih(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, dh = a, eh = Kf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, dh = a, eh = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== Xg ? { id: Yg, overflow: Zg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = hh(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, dh = a, eh = null, true) : false;
    default:
      return false;
  }
}
function jh(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function kh(a) {
  if (I) {
    var b = eh;
    if (b) {
      var c = b;
      if (!ih(a, b)) {
        if (jh(a))
          throw Error(p(418));
        b = Kf(c.nextSibling);
        var d = dh;
        b && ih(a, b) ? gh(d, c) : (a.flags = a.flags & -4097 | 2, I = false, dh = a);
      }
    } else {
      if (jh(a))
        throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      dh = a;
    }
  }
}
function lh(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  dh = a;
}
function mh(a) {
  if (a !== dh)
    return false;
  if (!I)
    return lh(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Df(a.type, a.memoizedProps));
  if (b && (b = eh)) {
    if (jh(a)) {
      for (a = eh; a; )
        a = Kf(a.nextSibling);
      throw Error(p(418));
    }
    for (; b; )
      gh(a, b), b = Kf(b.nextSibling);
  }
  lh(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              eh = Kf(a.nextSibling);
              break a;
            }
            b--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      eh = null;
    }
  } else
    eh = dh ? Kf(a.stateNode.nextSibling) : null;
  return true;
}
function nh() {
  eh = dh = null;
  I = false;
}
function oh(a) {
  null === fh ? fh = [a] : fh.push(a);
}
function ph(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag)
          throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p(147, a));
      var e = d, f = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f)
        return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        b2 === Hg && (b2 = e.refs = {});
        null === a2 ? delete b2[f] : b2[f] = a2;
      };
      b._stringRef = f;
      return b;
    }
    if ("string" !== typeof a)
      throw Error(p(284));
    if (!c._owner)
      throw Error(p(290, a));
  }
  return a;
}
function qh(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function rh(a) {
  var b = a._init;
  return b(a._payload);
}
function sh(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; null !== d2; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
      null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = th(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2)
      return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag)
      return b2 = uh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c2, d2) {
    var f2 = c2.type;
    if (f2 === wa)
      return n(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ga && rh(f2) === b2.type))
      return d2 = e(b2, c2.props), d2.ref = ph(a2, b2, c2), d2.return = a2, d2;
    d2 = vh(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = ph(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = wh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function n(a2, b2, c2, d2, f2) {
    if (null === b2 || 7 !== b2.tag)
      return b2 = xh(c2, a2.mode, d2, f2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function u(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
      return b2 = uh("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case ua:
          return c2 = vh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = ph(a2, null, b2), c2.return = a2, c2;
        case va:
          return b2 = wh(b2, a2.mode, c2), b2.return = a2, b2;
        case Ga:
          var d2 = b2._init;
          return u(a2, d2(b2._payload), c2);
      }
      if (db(b2) || Ja(b2))
        return b2 = xh(b2, a2.mode, c2, null), b2.return = a2, b2;
      qh(a2, b2);
    }
    return null;
  }
  function q(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
      return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case ua:
          return c2.key === e2 ? k(a2, b2, c2, d2) : null;
        case va:
          return c2.key === e2 ? l(a2, b2, c2, d2) : null;
        case Ga:
          return e2 = c2._init, q(
            a2,
            b2,
            e2(c2._payload),
            d2
          );
      }
      if (db(c2) || Ja(c2))
        return null !== e2 ? null : n(a2, b2, c2, d2, null);
      qh(a2, c2);
    }
    return null;
  }
  function y(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case ua:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
        case Ga:
          var f2 = d2._init;
          return y(a2, b2, c2, f2(d2._payload), e2);
      }
      if (db(d2) || Ja(d2))
        return a2 = a2.get(c2) || null, n(b2, a2, d2, e2, null);
      qh(b2, d2);
    }
    return null;
  }
  function m(e2, g2, h2, k2) {
    for (var l2 = null, n2 = null, r = g2, m2 = g2 = 0, x = null; null !== r && m2 < h2.length; m2++) {
      r.index > m2 ? (x = r, r = null) : x = r.sibling;
      var v = q(e2, r, h2[m2], k2);
      if (null === v) {
        null === r && (r = x);
        break;
      }
      a && r && null === v.alternate && b(e2, r);
      g2 = f(v, g2, m2);
      null === n2 ? l2 = v : n2.sibling = v;
      n2 = v;
      r = x;
    }
    if (m2 === h2.length)
      return c(e2, r), I && $g(e2, m2), l2;
    if (null === r) {
      for (; m2 < h2.length; m2++)
        r = u(e2, h2[m2], k2), null !== r && (g2 = f(r, g2, m2), null === n2 ? l2 = r : n2.sibling = r, n2 = r);
      I && $g(e2, m2);
      return l2;
    }
    for (r = d(e2, r); m2 < h2.length; m2++)
      x = y(r, e2, m2, h2[m2], k2), null !== x && (a && null !== x.alternate && r.delete(null === x.key ? m2 : x.key), g2 = f(x, g2, m2), null === n2 ? l2 = x : n2.sibling = x, n2 = x);
    a && r.forEach(function(a2) {
      return b(e2, a2);
    });
    I && $g(e2, m2);
    return l2;
  }
  function w(e2, g2, h2, k2) {
    var l2 = Ja(h2);
    if ("function" !== typeof l2)
      throw Error(p(150));
    h2 = l2.call(h2);
    if (null == h2)
      throw Error(p(151));
    for (var n2 = l2 = null, m2 = g2, r = g2 = 0, x = null, v = h2.next(); null !== m2 && !v.done; r++, v = h2.next()) {
      m2.index > r ? (x = m2, m2 = null) : x = m2.sibling;
      var w2 = q(e2, m2, v.value, k2);
      if (null === w2) {
        null === m2 && (m2 = x);
        break;
      }
      a && m2 && null === w2.alternate && b(e2, m2);
      g2 = f(w2, g2, r);
      null === n2 ? l2 = w2 : n2.sibling = w2;
      n2 = w2;
      m2 = x;
    }
    if (v.done)
      return c(
        e2,
        m2
      ), I && $g(e2, r), l2;
    if (null === m2) {
      for (; !v.done; r++, v = h2.next())
        v = u(e2, v.value, k2), null !== v && (g2 = f(v, g2, r), null === n2 ? l2 = v : n2.sibling = v, n2 = v);
      I && $g(e2, r);
      return l2;
    }
    for (m2 = d(e2, m2); !v.done; r++, v = h2.next())
      v = y(m2, e2, r, v.value, k2), null !== v && (a && null !== v.alternate && m2.delete(null === v.key ? r : v.key), g2 = f(v, g2, r), null === n2 ? l2 = v : n2.sibling = v, n2 = v);
    a && m2.forEach(function(a2) {
      return b(e2, a2);
    });
    I && $g(e2, r);
    return l2;
  }
  function J(a2, d2, f2, h2) {
    "object" === typeof f2 && null !== f2 && f2.type === wa && null === f2.key && (f2 = f2.props.children);
    if ("object" === typeof f2 && null !== f2) {
      switch (f2.$$typeof) {
        case ua:
          a: {
            for (var k2 = f2.key, l2 = d2; null !== l2; ) {
              if (l2.key === k2) {
                k2 = f2.type;
                if (k2 === wa) {
                  if (7 === l2.tag) {
                    c(a2, l2.sibling);
                    d2 = e(l2, f2.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ga && rh(k2) === l2.type) {
                  c(a2, l2.sibling);
                  d2 = e(l2, f2.props);
                  d2.ref = ph(a2, l2, f2);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l2);
                break;
              } else
                b(a2, l2);
              l2 = l2.sibling;
            }
            f2.type === wa ? (d2 = xh(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = vh(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = ph(a2, d2, f2), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case va:
          a: {
            for (l2 = f2.key; null !== d2; ) {
              if (d2.key === l2)
                if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = wh(f2, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ga:
          return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
      }
      if (db(f2))
        return m(a2, d2, f2, h2);
      if (Ja(f2))
        return w(a2, d2, f2, h2);
      qh(a2, f2);
    }
    return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = uh(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J;
}
var yh = sh(true), zh = sh(false), Ah = {}, Bh = Tf(Ah), Ch = Tf(Ah), Dh = Tf(Ah);
function Eh(a) {
  if (a === Ah)
    throw Error(p(174));
  return a;
}
function Fh(a, b) {
  G(Dh, b);
  G(Ch, a);
  G(Bh, Ah);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : kb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = kb(b, a);
  }
  E(Bh);
  G(Bh, b);
}
function Gh() {
  E(Bh);
  E(Ch);
  E(Dh);
}
function Hh(a) {
  Eh(Dh.current);
  var b = Eh(Bh.current);
  var c = kb(b, a.type);
  b !== c && (G(Ch, a), G(Bh, c));
}
function Ih(a) {
  Ch.current === a && (E(Bh), E(Ch));
}
var K = Tf(0);
function Jh(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128))
        return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Kh = [];
function Lh() {
  for (var a = 0; a < Kh.length; a++)
    Kh[a]._workInProgressVersionPrimary = null;
  Kh.length = 0;
}
var Mh = ta.ReactCurrentDispatcher, Nh = ta.ReactCurrentBatchConfig, Oh = 0, L = null, M = null, N = null, Ph = false, Qh = false, Rh = 0, Sh = 0;
function O() {
  throw Error(p(321));
}
function Th(a, b) {
  if (null === b)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!Ge(a[c], b[c]))
      return false;
  return true;
}
function Uh(a, b, c, d, e, f) {
  Oh = f;
  L = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Mh.current = null === a || null === a.memoizedState ? Vh : Wh;
  a = c(d, e);
  if (Qh) {
    f = 0;
    do {
      Qh = false;
      Rh = 0;
      if (25 <= f)
        throw Error(p(301));
      f += 1;
      N = M = null;
      b.updateQueue = null;
      Mh.current = Xh;
      a = c(d, e);
    } while (Qh);
  }
  Mh.current = Yh;
  b = null !== M && null !== M.next;
  Oh = 0;
  N = M = L = null;
  Ph = false;
  if (b)
    throw Error(p(300));
  return a;
}
function Zh() {
  var a = 0 !== Rh;
  Rh = 0;
  return a;
}
function $h() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === N ? L.memoizedState = N = a : N = N.next = a;
  return N;
}
function ai() {
  if (null === M) {
    var a = L.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = M.next;
  var b = null === N ? L.memoizedState : N.next;
  if (null !== b)
    N = b, M = a;
  else {
    if (null === a)
      throw Error(p(310));
    M = a;
    a = { memoizedState: M.memoizedState, baseState: M.baseState, baseQueue: M.baseQueue, queue: M.queue, next: null };
    null === N ? L.memoizedState = N = a : N = N.next = a;
  }
  return N;
}
function bi(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function ci(a) {
  var b = ai(), c = b.queue;
  if (null === c)
    throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = M, e = d.baseQueue, f = c.pending;
  if (null !== f) {
    if (null !== e) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c.pending = null;
  }
  if (null !== e) {
    f = e.next;
    d = d.baseState;
    var h = g = null, k = null, l = f;
    do {
      var n = l.lane;
      if ((Oh & n) === n)
        null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
      else {
        var u = {
          lane: n,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        };
        null === k ? (h = k = u, g = d) : k = k.next = u;
        L.lanes |= n;
        Fg |= n;
      }
      l = l.next;
    } while (null !== l && l !== f);
    null === k ? g = d : k.next = h;
    Ge(d, b.memoizedState) || (tg = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f = e.lane, L.lanes |= f, Fg |= f, e = e.next;
    while (e !== a);
  } else
    null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function di(a) {
  var b = ai(), c = b.queue;
  if (null === c)
    throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f = a(f, g.action), g = g.next;
    while (g !== e);
    Ge(f, b.memoizedState) || (tg = true);
    b.memoizedState = f;
    null === b.baseQueue && (b.baseState = f);
    c.lastRenderedState = f;
  }
  return [f, d];
}
function ei() {
}
function fi(a, b) {
  var c = L, d = ai(), e = b(), f = !Ge(d.memoizedState, e);
  f && (d.memoizedState = e, tg = true);
  d = d.queue;
  gi(hi.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f || null !== N && N.memoizedState.tag & 1) {
    c.flags |= 2048;
    ii(9, ji.bind(null, c, d, e, b), void 0, null);
    if (null === P)
      throw Error(p(349));
    0 !== (Oh & 30) || ki(c, b, e);
  }
  return e;
}
function ki(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = L.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, L.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function ji(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  li(b) && Lg(a, 1, -1);
}
function hi(a, b, c) {
  return c(function() {
    li(b) && Lg(a, 1, -1);
  });
}
function li(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !Ge(a, c);
  } catch (d) {
    return true;
  }
}
function mi(a) {
  var b = $h();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ni.bind(null, L, a);
  return [b.memoizedState, a];
}
function ii(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = L.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, L.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function oi() {
  return ai().memoizedState;
}
function pi(a, b, c, d) {
  var e = $h();
  L.flags |= a;
  e.memoizedState = ii(1 | b, c, void 0, void 0 === d ? null : d);
}
function qi(a, b, c, d) {
  var e = ai();
  d = void 0 === d ? null : d;
  var f = void 0;
  if (null !== M) {
    var g = M.memoizedState;
    f = g.destroy;
    if (null !== d && Th(d, g.deps)) {
      e.memoizedState = ii(b, c, f, d);
      return;
    }
  }
  L.flags |= a;
  e.memoizedState = ii(1 | b, c, f, d);
}
function ri(a, b) {
  return pi(8390656, 8, a, b);
}
function gi(a, b) {
  return qi(2048, 8, a, b);
}
function si(a, b) {
  return qi(4, 2, a, b);
}
function ti(a, b) {
  return qi(4, 4, a, b);
}
function ui(a, b) {
  if ("function" === typeof b)
    return a = a(), b(a), function() {
      b(null);
    };
  if (null !== b && void 0 !== b)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function vi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return qi(4, 4, ui.bind(null, b, a), c);
}
function wi() {
}
function xi(a, b) {
  var c = ai();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Th(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function yi(a, b) {
  var c = ai();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Th(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function zi(a, b, c) {
  if (0 === (Oh & 21))
    return a.baseState && (a.baseState = false, tg = true), a.memoizedState = c;
  Ge(c, b) || (c = xc(), L.lanes |= c, Fg |= c, a.baseState = true);
  return b;
}
function Ai(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Nh.transition;
  Nh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Nh.transition = d;
  }
}
function Bi() {
  return ai().memoizedState;
}
function Ci(a, b, c) {
  var d = Kg(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  Di(a) ? Ei(b, c) : (Fi(a, b, c), c = Jg(), a = Lg(a, d, c), null !== a && Gi(a, b, d));
}
function ni(a, b, c) {
  var d = Kg(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Di(a))
    Ei(b, e);
  else {
    Fi(a, b, e);
    var f = a.alternate;
    if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f))
      try {
        var g = b.lastRenderedState, h = f(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (Ge(h, g))
          return;
      } catch (k) {
      } finally {
      }
    c = Jg();
    a = Lg(a, d, c);
    null !== a && Gi(a, b, d);
  }
}
function Di(a) {
  var b = a.alternate;
  return a === L || null !== b && b === L;
}
function Ei(a, b) {
  Qh = Ph = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Fi(a, b, c) {
  Bg(a) ? (a = b.interleaved, null === a ? (c.next = c, null === vg ? vg = [b] : vg.push(b)) : (c.next = a.next, a.next = c), b.interleaved = c) : (a = b.pending, null === a ? c.next = c : (c.next = a.next, a.next = c), b.pending = c);
}
function Gi(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Bc(a, c);
  }
}
var Yh = { readContext: ug, useCallback: O, useContext: O, useEffect: O, useImperativeHandle: O, useInsertionEffect: O, useLayoutEffect: O, useMemo: O, useReducer: O, useRef: O, useState: O, useDebugValue: O, useDeferredValue: O, useTransition: O, useMutableSource: O, useSyncExternalStore: O, useId: O, unstable_isNewReconciler: false }, Vh = { readContext: ug, useCallback: function(a, b) {
  $h().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: ug, useEffect: ri, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return pi(
    4194308,
    4,
    ui.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return pi(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return pi(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = $h();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = $h();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = Ci.bind(null, L, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = $h();
  a = { current: a };
  return b.memoizedState = a;
}, useState: mi, useDebugValue: wi, useDeferredValue: function(a) {
  return $h().memoizedState = a;
}, useTransition: function() {
  var a = mi(false), b = a[0];
  a = Ai.bind(null, a[1]);
  $h().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = L, e = $h();
  if (I) {
    if (void 0 === c)
      throw Error(p(407));
    c = c();
  } else {
    c = b();
    if (null === P)
      throw Error(p(349));
    0 !== (Oh & 30) || ki(d, b, c);
  }
  e.memoizedState = c;
  var f = { value: c, getSnapshot: b };
  e.queue = f;
  ri(hi.bind(
    null,
    d,
    f,
    a
  ), [a]);
  d.flags |= 2048;
  ii(9, ji.bind(null, d, f, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = $h(), b = P.identifierPrefix;
  if (I) {
    var c = Zg;
    var d = Yg;
    c = (d & ~(1 << 32 - nc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Rh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else
    c = Sh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Wh = {
  readContext: ug,
  useCallback: xi,
  useContext: ug,
  useEffect: gi,
  useImperativeHandle: vi,
  useInsertionEffect: si,
  useLayoutEffect: ti,
  useMemo: yi,
  useReducer: ci,
  useRef: oi,
  useState: function() {
    return ci(bi);
  },
  useDebugValue: wi,
  useDeferredValue: function(a) {
    var b = ai();
    return zi(b, M.memoizedState, a);
  },
  useTransition: function() {
    var a = ci(bi)[0], b = ai().memoizedState;
    return [a, b];
  },
  useMutableSource: ei,
  useSyncExternalStore: fi,
  useId: Bi,
  unstable_isNewReconciler: false
}, Xh = { readContext: ug, useCallback: xi, useContext: ug, useEffect: gi, useImperativeHandle: vi, useInsertionEffect: si, useLayoutEffect: ti, useMemo: yi, useReducer: di, useRef: oi, useState: function() {
  return di(bi);
}, useDebugValue: wi, useDeferredValue: function(a) {
  var b = ai();
  return null === M ? b.memoizedState = a : zi(b, M.memoizedState, a);
}, useTransition: function() {
  var a = di(bi)[0], b = ai().memoizedState;
  return [a, b];
}, useMutableSource: ei, useSyncExternalStore: fi, useId: Bi, unstable_isNewReconciler: false };
function Hi(a, b) {
  try {
    var c = "", d = b;
    do
      c += Oa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f) {
    e = "\nError generating stack: " + f.message + "\n" + f.stack;
  }
  return { value: a, source: b, stack: e };
}
function Ii(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ji = "function" === typeof WeakMap ? WeakMap : Map;
function Ki(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Li || (Li = true, Mi = d);
    Ii(a, b);
  };
  return c;
}
function Ni(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Ii(a, b);
    };
  }
  var f = a.stateNode;
  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
    Ii(a, b);
    "function" !== typeof d && (null === Oi ? Oi = /* @__PURE__ */ new Set([this]) : Oi.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Pi(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Ji();
    var e = /* @__PURE__ */ new Set();
    d.set(b, e);
  } else
    e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Qi.bind(null, a, b, c), b.then(a, a));
}
function Ri(a) {
  do {
    var b;
    if (b = 13 === a.tag)
      b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Si(a, b, c, d, e) {
  if (0 === (a.mode & 1))
    return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = zg(-1, 1), b.tag = 2, Ag(c, b))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Ti, Ui, Vi, Wi;
Ti = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag)
      a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Ui = function() {
};
Vi = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    Eh(Bh.current);
    var f = null;
    switch (c) {
      case "input":
        e = Xa(a, e);
        d = Xa(a, d);
        f = [];
        break;
      case "select":
        e = A({}, e, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f = [];
        break;
      case "textarea":
        e = fb(a, e);
        d = fb(a, d);
        f = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Af);
    }
    tb(c, d);
    var g;
    c = null;
    for (l in e)
      if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l])
        if ("style" === l) {
          var h = e[l];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
    for (l in d) {
      var k = d[l];
      h = null != e ? e[l] : void 0;
      if (d.hasOwnProperty(l) && k !== h && (null != k || null != h))
        if ("style" === l)
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k)
              k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else
            c || (f || (f = []), f.push(
              l,
              c
            )), c = k;
        else
          "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
    }
    c && (f = f || []).push("style", c);
    var l = f;
    if (b.updateQueue = l)
      b.flags |= 4;
  }
};
Wi = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Xi(a, b) {
  if (!I)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; )
          null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function Q(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b)
    for (var e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else
    for (e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Yi(a, b, c) {
  var d = b.pendingProps;
  ch(b);
  switch (b.tag) {
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
      return Q(b), null;
    case 1:
      return Yf(b.type) && Zf(), Q(b), null;
    case 3:
      d = b.stateNode;
      Gh();
      E(Vf);
      E(H);
      Lh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child)
        mh(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== fh && (Zi(fh), fh = null));
      Ui(a, b);
      Q(b);
      return null;
    case 5:
      Ih(b);
      var e = Eh(Dh.current);
      c = b.type;
      if (null !== a && null != b.stateNode)
        Vi(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode)
            throw Error(p(166));
          Q(b);
          return null;
        }
        a = Eh(Bh.current);
        if (mh(b)) {
          d = b.stateNode;
          c = b.type;
          var f = b.memoizedProps;
          d[Nf] = b;
          d[Of] = f;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < kf.length; e++)
                D(kf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Ya(d, f);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f.multiple };
              D("invalid", d);
              break;
            case "textarea":
              gb(d, f), D("invalid", d);
          }
          tb(c, f);
          e = null;
          for (var g in f)
            if (f.hasOwnProperty(g)) {
              var h = f[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && zf(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && zf(
                d.textContent,
                h,
                a
              ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
            }
          switch (c) {
            case "input":
              Ua(d);
              cb(d, f, true);
              break;
            case "textarea":
              Ua(d);
              ib(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f.onClick && (d.onclick = Af);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = jb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Nf] = b;
          a[Of] = d;
          Ti(a, b, false, false);
          b.stateNode = a;
          a: {
            g = ub(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < kf.length; e++)
                  D(kf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Ya(a, d);
                e = Xa(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                gb(a, d);
                e = fb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            tb(c, e);
            h = e;
            for (f in h)
              if (h.hasOwnProperty(f)) {
                var k = h[f];
                "style" === f ? rb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && mb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && nb(a, k) : "number" === typeof k && nb(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && sa(a, f, k, g));
              }
            switch (c) {
              case "input":
                Ua(a);
                cb(a, d, false);
                break;
              case "textarea":
                Ua(a);
                ib(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Ra(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f = d.value;
                null != f ? eb(a, !!d.multiple, f, false) : null != d.defaultValue && eb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Af);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      Q(b);
      return null;
    case 6:
      if (a && null != b.stateNode)
        Wi(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode)
          throw Error(p(166));
        c = Eh(Dh.current);
        Eh(Bh.current);
        if (mh(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Nf] = b;
          if (f = d.nodeValue !== c) {
            if (a = dh, null !== a)
              switch (a.tag) {
                case 3:
                  zf(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && zf(d.nodeValue, c, 0 !== (a.mode & 1));
              }
          }
          f && (b.flags |= 4);
        } else
          d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Nf] = b, b.stateNode = d;
      }
      Q(b);
      return null;
    case 13:
      E(K);
      d = b.memoizedState;
      if (I && null !== eh && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) {
        for (d = eh; d; )
          d = Kf(d.nextSibling);
        nh();
        b.flags |= 98560;
        return b;
      }
      if (null !== d && null !== d.dehydrated) {
        d = mh(b);
        if (null === a) {
          if (!d)
            throw Error(p(318));
          d = b.memoizedState;
          d = null !== d ? d.dehydrated : null;
          if (!d)
            throw Error(p(317));
          d[Nf] = b;
        } else
          nh(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
        Q(b);
        return null;
      }
      null !== fh && (Zi(fh), fh = null);
      if (0 !== (b.flags & 128))
        return b.lanes = c, b;
      d = null !== d;
      c = false;
      null === a ? mh(b) : c = null !== a.memoizedState;
      d !== c && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (K.current & 1) ? 0 === R && (R = 3) : $i()));
      null !== b.updateQueue && (b.flags |= 4);
      Q(b);
      return null;
    case 4:
      return Gh(), Ui(a, b), null === a && rf(b.stateNode.containerInfo), Q(b), null;
    case 10:
      return qg(b.type._context), Q(b), null;
    case 17:
      return Yf(b.type) && Zf(), Q(b), null;
    case 19:
      E(K);
      f = b.memoizedState;
      if (null === f)
        return Q(b), null;
      d = 0 !== (b.flags & 128);
      g = f.rendering;
      if (null === g)
        if (d)
          Xi(f, false);
        else {
          if (0 !== R || null !== a && 0 !== (a.flags & 128))
            for (a = b.child; null !== a; ) {
              g = Jh(a);
              if (null !== g) {
                b.flags |= 128;
                Xi(f, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; )
                  f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(K, K.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          null !== f.tail && B() > aj && (b.flags |= 128, d = true, Xi(f, false), b.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = Jh(g), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Xi(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I)
              return Q(b), null;
          } else
            2 * B() - f.renderingStartTime > aj && 1073741824 !== c && (b.flags |= 128, d = true, Xi(f, false), b.lanes = 4194304);
        f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
      }
      if (null !== f.tail)
        return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = K.current, G(K, d ? c & 1 | 2 : c & 1), b;
      Q(b);
      return null;
    case 22:
    case 23:
      return bj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (cj & 1073741824) && (Q(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : Q(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
var dj = ta.ReactCurrentOwner, tg = false;
function ej(a, b, c, d) {
  b.child = null === a ? zh(b, null, c, d) : yh(b, a.child, c, d);
}
function fj(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  sg(b, e);
  d = Uh(a, b, c, d, f, e);
  c = Zh();
  if (null !== a && !tg)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, gj(a, b, e);
  I && c && bh(b);
  b.flags |= 1;
  ej(a, b, d, e);
  return b.child;
}
function hj(a, b, c, d, e) {
  if (null === a) {
    var f = c.type;
    if ("function" === typeof f && !ij(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b.tag = 15, b.type = f, jj(a, b, f, d, e);
    a = vh(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f = a.child;
  if (0 === (a.lanes & e)) {
    var g = f.memoizedProps;
    c = c.compare;
    c = null !== c ? c : He;
    if (c(g, d) && a.ref === b.ref)
      return gj(a, b, e);
  }
  b.flags |= 1;
  a = th(f, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function jj(a, b, c, d, e) {
  if (null !== a) {
    var f = a.memoizedProps;
    if (He(f, d) && a.ref === b.ref)
      if (tg = false, b.pendingProps = d = f, 0 !== (a.lanes & e))
        0 !== (a.flags & 131072) && (tg = true);
      else
        return b.lanes = a.lanes, gj(a, b, e);
  }
  return kj(a, b, c, d, e);
}
function lj(a, b, c) {
  var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode)
    if (0 === (b.mode & 1))
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(mj, cj), cj |= c;
    else if (0 !== (c & 1073741824))
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, d = null !== f ? f.baseLanes : c, G(mj, cj), cj |= d;
    else
      return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(mj, cj), cj |= a, null;
  else
    null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(mj, cj), cj |= d;
  ej(a, b, e, c);
  return b.child;
}
function nj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c)
    b.flags |= 512, b.flags |= 2097152;
}
function kj(a, b, c, d, e) {
  var f = Yf(c) ? Wf : H.current;
  f = Xf(b, f);
  sg(b, e);
  c = Uh(a, b, c, d, f, e);
  d = Zh();
  if (null !== a && !tg)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, gj(a, b, e);
  I && d && bh(b);
  b.flags |= 1;
  ej(a, b, c, e);
  return b.child;
}
function oj(a, b, c, d, e) {
  if (Yf(c)) {
    var f = true;
    bg(b);
  } else
    f = false;
  sg(b, e);
  if (null === b.stateNode)
    null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Og(b, c, d), Qg(b, c, d, e), d = true;
  else if (null === a) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k = g.context, l = c.contextType;
    "object" === typeof l && null !== l ? l = ug(l) : (l = Yf(c) ? Wf : H.current, l = Xf(b, l));
    var n = c.getDerivedStateFromProps, u = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
    u || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Pg(b, g, d, l);
    wg = false;
    var q = b.memoizedState;
    g.state = q;
    Eg(b, d, g, e);
    k = b.memoizedState;
    h !== d || q !== k || Vf.current || wg ? ("function" === typeof n && (Ig(b, c, n, d), k = b.memoizedState), (h = wg || Ng(b, c, h, d, q, k, l)) ? (u || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    yg(a, b);
    h = b.memoizedProps;
    l = b.type === b.elementType ? h : kg(b.type, h);
    g.props = l;
    u = b.pendingProps;
    q = g.context;
    k = c.contextType;
    "object" === typeof k && null !== k ? k = ug(k) : (k = Yf(c) ? Wf : H.current, k = Xf(b, k));
    var y = c.getDerivedStateFromProps;
    (n = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== u || q !== k) && Pg(b, g, d, k);
    wg = false;
    q = b.memoizedState;
    g.state = q;
    Eg(b, d, g, e);
    var m = b.memoizedState;
    h !== u || q !== m || Vf.current || wg ? ("function" === typeof y && (Ig(b, c, y, d), m = b.memoizedState), (l = wg || Ng(b, c, l, d, q, m, k) || false) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, m, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, m, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && q === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && q === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = m), g.props = d, g.state = m, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && q === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && q === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return pj(a, b, c, d, f, e);
}
function pj(a, b, c, d, e, f) {
  nj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g)
    return e && cg(b, c, false), gj(a, b, f);
  d = b.stateNode;
  dj.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = yh(b, a.child, null, f), b.child = yh(b, null, h, f)) : ej(a, b, h, f);
  b.memoizedState = d.state;
  e && cg(b, c, true);
  return b.child;
}
function qj(a) {
  var b = a.stateNode;
  b.pendingContext ? $f(a, b.pendingContext, b.pendingContext !== b.context) : b.context && $f(a, b.context, false);
  Fh(a, b.containerInfo);
}
function rj(a, b, c, d, e) {
  nh();
  oh(e);
  b.flags |= 256;
  ej(a, b, c, d);
  return b.child;
}
var sj = { dehydrated: null, treeContext: null, retryLane: 0 };
function tj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function uj(a, b) {
  return { baseLanes: a.baseLanes | b, cachePool: null, transitions: a.transitions };
}
function vj(a, b, c) {
  var d = b.pendingProps, e = K.current, f = false, g = 0 !== (b.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h)
    f = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e |= 1;
  G(K, e & 1);
  if (null === a) {
    kh(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    e = d.children;
    a = d.fallback;
    return f ? (d = b.mode, f = b.child, e = { mode: "hidden", children: e }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = e) : f = wj(e, d, 0, null), a = xh(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = tj(c), b.memoizedState = sj, a) : xj(b, e);
  }
  e = a.memoizedState;
  if (null !== e) {
    h = e.dehydrated;
    if (null !== h) {
      if (g) {
        if (b.flags & 256)
          return b.flags &= -257, yj(a, b, c, Error(p(422)));
        if (null !== b.memoizedState)
          return b.child = a.child, b.flags |= 128, null;
        f = d.fallback;
        e = b.mode;
        d = wj({ mode: "visible", children: d.children }, e, 0, null);
        f = xh(f, e, c, null);
        f.flags |= 2;
        d.return = b;
        f.return = b;
        d.sibling = f;
        b.child = d;
        0 !== (b.mode & 1) && yh(
          b,
          a.child,
          null,
          c
        );
        b.child.memoizedState = tj(c);
        b.memoizedState = sj;
        return f;
      }
      if (0 === (b.mode & 1))
        b = yj(a, b, c, null);
      else if ("$!" === h.data)
        b = yj(a, b, c, Error(p(419)));
      else if (d = 0 !== (c & a.childLanes), tg || d) {
        d = P;
        if (null !== d) {
          switch (c & -c) {
            case 4:
              f = 2;
              break;
            case 16:
              f = 8;
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
              f = 32;
              break;
            case 536870912:
              f = 268435456;
              break;
            default:
              f = 0;
          }
          d = 0 !== (f & (d.suspendedLanes | c)) ? 0 : f;
          0 !== d && d !== e.retryLane && (e.retryLane = d, Lg(a, d, -1));
        }
        $i();
        b = yj(a, b, c, Error(p(421)));
      } else
        "$?" === h.data ? (b.flags |= 128, b.child = a.child, b = zj.bind(null, a), h._reactRetry = b, b = null) : (c = e.treeContext, eh = Kf(h.nextSibling), dh = b, I = true, fh = null, null !== c && (Vg[Wg++] = Yg, Vg[Wg++] = Zg, Vg[Wg++] = Xg, Yg = c.id, Zg = c.overflow, Xg = b), b = xj(b, b.pendingProps.children), b.flags |= 4096);
      return b;
    }
    if (f)
      return d = Aj(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? tj(c) : uj(e, c), f.childLanes = a.childLanes & ~c, b.memoizedState = sj, d;
    c = Bj(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  if (f)
    return d = Aj(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? tj(c) : uj(e, c), f.childLanes = a.childLanes & ~c, b.memoizedState = sj, d;
  c = Bj(a, b, d.children, c);
  b.memoizedState = null;
  return c;
}
function xj(a, b) {
  b = wj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function Bj(a, b, c, d) {
  var e = a.child;
  a = e.sibling;
  c = th(e, { mode: "visible", children: c });
  0 === (b.mode & 1) && (c.lanes = d);
  c.return = b;
  c.sibling = null;
  null !== a && (d = b.deletions, null === d ? (b.deletions = [a], b.flags |= 16) : d.push(a));
  return b.child = c;
}
function Aj(a, b, c, d, e) {
  var f = b.mode;
  a = a.child;
  var g = a.sibling, h = { mode: "hidden", children: c };
  0 === (f & 1) && b.child !== a ? (c = b.child, c.childLanes = 0, c.pendingProps = h, b.deletions = null) : (c = th(a, h), c.subtreeFlags = a.subtreeFlags & 14680064);
  null !== g ? d = th(g, d) : (d = xh(d, f, e, null), d.flags |= 2);
  d.return = b;
  c.return = b;
  c.sibling = d;
  b.child = c;
  return d;
}
function yj(a, b, c, d) {
  null !== d && oh(d);
  yh(b, a.child, null, c);
  a = xj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function Cj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  rg(a.return, b, c);
}
function Dj(a, b, c, d, e) {
  var f = a.memoizedState;
  null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
}
function Ej(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f = d.tail;
  ej(a, b, d.children, c);
  d = K.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && Cj(a, c, b);
          else if (19 === a.tag)
            Cj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  G(K, d);
  if (0 === (b.mode & 1))
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; )
          a = c.alternate, null !== a && null === Jh(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        Dj(b, false, e, c, f);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Jh(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        Dj(b, true, c, null, f);
        break;
      case "together":
        Dj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function gj(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  Fg |= b.lanes;
  if (0 === (c & b.childLanes))
    return null;
  if (null !== a && b.child !== a.child)
    throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = th(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; )
      a = a.sibling, c = c.sibling = th(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function Fj(a, b, c) {
  switch (b.tag) {
    case 3:
      qj(b);
      nh();
      break;
    case 5:
      Hh(b);
      break;
    case 1:
      Yf(b.type) && bg(b);
      break;
    case 4:
      Fh(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G(lg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated)
          return G(K, K.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes))
          return vj(a, b, c);
        G(K, K.current & 1);
        a = gj(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(K, K.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d)
          return Ej(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(K, K.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b.lanes = 0, lj(a, b, c);
  }
  return gj(a, b, c);
}
function Gj(a, b) {
  ch(b);
  switch (b.tag) {
    case 1:
      return Yf(b.type) && Zf(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return Gh(), E(Vf), E(H), Lh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Ih(b), null;
    case 13:
      E(K);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate)
          throw Error(p(340));
        nh();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(K), null;
    case 4:
      return Gh(), null;
    case 10:
      return qg(b.type._context), null;
    case 22:
    case 23:
      return bj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hj = false, S = false, Ij = "function" === typeof WeakSet ? WeakSet : Set, T = null;
function Jj(a, b) {
  var c = a.ref;
  if (null !== c)
    if ("function" === typeof c)
      try {
        c(null);
      } catch (d) {
        U(a, b, d);
      }
    else
      c.current = null;
}
function Kj(a, b, c) {
  try {
    c();
  } catch (d) {
    U(a, b, d);
  }
}
var Lj = false;
function Mj(a, b) {
  Bf = cd;
  a = Le();
  if (Me(a)) {
    if ("selectionStart" in a)
      var c = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f.nodeType;
          } catch (Z) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k = -1, l = 0, n = 0, u = a, q = null;
          b:
            for (; ; ) {
              for (var y; ; ) {
                u !== c || 0 !== e && 3 !== u.nodeType || (h = g + e);
                u !== f || 0 !== d && 3 !== u.nodeType || (k = g + d);
                3 === u.nodeType && (g += u.nodeValue.length);
                if (null === (y = u.firstChild))
                  break;
                q = u;
                u = y;
              }
              for (; ; ) {
                if (u === a)
                  break b;
                q === c && ++l === e && (h = g);
                q === f && ++n === d && (k = g);
                if (null !== (y = u.nextSibling))
                  break;
                u = q;
                q = u.parentNode;
              }
              u = y;
            }
          c = -1 === h || -1 === k ? null : { start: h, end: k };
        } else
          c = null;
      }
    c = c || { start: 0, end: 0 };
  } else
    c = null;
  Cf = { focusedElem: a, selectionRange: c };
  cd = false;
  for (T = b; null !== T; )
    if (b = T, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
      a.return = b, T = a;
    else
      for (; null !== T; ) {
        b = T;
        try {
          var m = b.alternate;
          if (0 !== (b.flags & 1024))
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== m) {
                  var w = m.memoizedProps, J = m.memoizedState, v = b.stateNode, x = v.getSnapshotBeforeUpdate(b.elementType === b.type ? w : kg(b.type, w), J);
                  v.__reactInternalSnapshotBeforeUpdate = x;
                }
                break;
              case 3:
                var r = b.stateNode.containerInfo;
                if (1 === r.nodeType)
                  r.textContent = "";
                else if (9 === r.nodeType) {
                  var F = r.body;
                  null != F && (F.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
        } catch (Z) {
          U(b, b.return, Z);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          T = a;
          break;
        }
        T = b.return;
      }
  m = Lj;
  Lj = false;
  return m;
}
function Nj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f = e.destroy;
        e.destroy = void 0;
        void 0 !== f && Kj(b, c, f);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Oj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Pj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Qj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Qj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Nf], delete b[Of], delete b[nf], delete b[Pf], delete b[Qf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Rj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Sj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Rj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Tj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Af));
  else if (4 !== d && (a = a.child, null !== a))
    for (Tj(a, b, c), a = a.sibling; null !== a; )
      Tj(a, b, c), a = a.sibling;
}
function Uj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a))
    for (Uj(a, b, c), a = a.sibling; null !== a; )
      Uj(a, b, c), a = a.sibling;
}
var V = null, Vj = false;
function Wj(a, b, c) {
  for (c = c.child; null !== c; )
    Xj(a, b, c), c = c.sibling;
}
function Xj(a, b, c) {
  if (kc && "function" === typeof kc.onCommitFiberUnmount)
    try {
      kc.onCommitFiberUnmount(jc, c);
    } catch (h) {
    }
  switch (c.tag) {
    case 5:
      S || Jj(c, b);
    case 6:
      var d = V, e = Vj;
      V = null;
      Wj(a, b, c);
      V = d;
      Vj = e;
      null !== V && (Vj ? (a = V, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : V.removeChild(c.stateNode));
      break;
    case 18:
      null !== V && (Vj ? (a = V, c = c.stateNode, 8 === a.nodeType ? Jf(a.parentNode, c) : 1 === a.nodeType && Jf(a, c), ad(a)) : Jf(V, c.stateNode));
      break;
    case 4:
      d = V;
      e = Vj;
      V = c.stateNode.containerInfo;
      Vj = true;
      Wj(a, b, c);
      V = d;
      Vj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!S && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f = e, g = f.destroy;
          f = f.tag;
          void 0 !== g && (0 !== (f & 2) ? Kj(c, b, g) : 0 !== (f & 4) && Kj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Wj(a, b, c);
      break;
    case 1:
      if (!S && (Jj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          U(c, b, h);
        }
      Wj(a, b, c);
      break;
    case 21:
      Wj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (S = (d = S) || null !== c.memoizedState, Wj(a, b, c), S = d) : Wj(a, b, c);
      break;
    default:
      Wj(a, b, c);
  }
}
function Yj(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Ij());
    b.forEach(function(b2) {
      var d = Zj.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function ak(a, b) {
  var c = b.deletions;
  if (null !== c)
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f = a, g = b, h = g;
        a:
          for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                V = h.stateNode;
                Vj = false;
                break a;
              case 3:
                V = h.stateNode.containerInfo;
                Vj = true;
                break a;
              case 4:
                V = h.stateNode.containerInfo;
                Vj = true;
                break a;
            }
            h = h.return;
          }
        if (null === V)
          throw Error(p(160));
        Xj(f, g, e);
        V = null;
        Vj = false;
        var k = e.alternate;
        null !== k && (k.return = null);
        e.return = null;
      } catch (l) {
        U(e, b, l);
      }
    }
  if (b.subtreeFlags & 12854)
    for (b = b.child; null !== b; )
      bk(b, a), b = b.sibling;
}
function bk(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ak(b, a);
      ck(a);
      if (d & 4) {
        try {
          Nj(3, a, a.return), Oj(3, a);
        } catch (m) {
          U(a, a.return, m);
        }
        try {
          Nj(5, a, a.return);
        } catch (m) {
          U(a, a.return, m);
        }
      }
      break;
    case 1:
      ak(b, a);
      ck(a);
      d & 512 && null !== c && Jj(c, c.return);
      break;
    case 5:
      ak(b, a);
      ck(a);
      d & 512 && null !== c && Jj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          nb(e, "");
        } catch (m) {
          U(a, a.return, m);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
        a.updateQueue = null;
        if (null !== k)
          try {
            "input" === h && "radio" === f.type && null != f.name && Za(e, f);
            ub(h, g);
            var l = ub(h, f);
            for (g = 0; g < k.length; g += 2) {
              var n = k[g], u = k[g + 1];
              "style" === n ? rb(e, u) : "dangerouslySetInnerHTML" === n ? mb(e, u) : "children" === n ? nb(e, u) : sa(e, n, u, l);
            }
            switch (h) {
              case "input":
                $a(e, f);
                break;
              case "textarea":
                hb(e, f);
                break;
              case "select":
                var q = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f.multiple;
                var y = f.value;
                null != y ? eb(e, !!f.multiple, y, false) : q !== !!f.multiple && (null != f.defaultValue ? eb(
                  e,
                  !!f.multiple,
                  f.defaultValue,
                  true
                ) : eb(e, !!f.multiple, f.multiple ? [] : "", false));
            }
            e[Of] = f;
          } catch (m) {
            U(a, a.return, m);
          }
      }
      break;
    case 6:
      ak(b, a);
      ck(a);
      if (d & 4) {
        if (null === a.stateNode)
          throw Error(p(162));
        l = a.stateNode;
        n = a.memoizedProps;
        try {
          l.nodeValue = n;
        } catch (m) {
          U(a, a.return, m);
        }
      }
      break;
    case 3:
      ak(b, a);
      ck(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated)
        try {
          ad(b.containerInfo);
        } catch (m) {
          U(a, a.return, m);
        }
      break;
    case 4:
      ak(b, a);
      ck(a);
      break;
    case 13:
      ak(b, a);
      ck(a);
      l = a.child;
      l.flags & 8192 && null !== l.memoizedState && (null === l.alternate || null === l.alternate.memoizedState) && (dk = B());
      d & 4 && Yj(a);
      break;
    case 22:
      l = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (S = (n = S) || l, ak(b, a), S = n) : ak(b, a);
      ck(a);
      if (d & 8192) {
        n = null !== a.memoizedState;
        a:
          for (u = null, q = a; ; ) {
            if (5 === q.tag) {
              if (null === u) {
                u = q;
                try {
                  e = q.stateNode, n ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = qb("display", g));
                } catch (m) {
                  U(a, a.return, m);
                }
              }
            } else if (6 === q.tag) {
              if (null === u)
                try {
                  q.stateNode.nodeValue = n ? "" : q.memoizedProps;
                } catch (m) {
                  U(a, a.return, m);
                }
            } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
              q.child.return = q;
              q = q.child;
              continue;
            }
            if (q === a)
              break a;
            for (; null === q.sibling; ) {
              if (null === q.return || q.return === a)
                break a;
              u === q && (u = null);
              q = q.return;
            }
            u === q && (u = null);
            q.sibling.return = q.return;
            q = q.sibling;
          }
        if (n && !l && 0 !== (a.mode & 1))
          for (T = a, a = a.child; null !== a; ) {
            for (l = T = a; null !== T; ) {
              n = T;
              u = n.child;
              switch (n.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nj(
                    4,
                    n,
                    n.return
                  );
                  break;
                case 1:
                  Jj(n, n.return);
                  f = n.stateNode;
                  if ("function" === typeof f.componentWillUnmount) {
                    q = n;
                    y = n.return;
                    try {
                      e = q, f.props = e.memoizedProps, f.state = e.memoizedState, f.componentWillUnmount();
                    } catch (m) {
                      U(q, y, m);
                    }
                  }
                  break;
                case 5:
                  Jj(n, n.return);
                  break;
                case 22:
                  if (null !== n.memoizedState) {
                    ek(l);
                    continue;
                  }
              }
              null !== u ? (u.return = n, T = u) : ek(l);
            }
            a = a.sibling;
          }
      }
      break;
    case 19:
      ak(b, a);
      ck(a);
      d & 4 && Yj(a);
      break;
    case 21:
      break;
    default:
      ak(b, a), ck(a);
  }
}
function ck(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Rj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (nb(e, ""), d.flags &= -33);
          var f = Sj(a);
          Uj(a, f, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Sj(a);
          Tj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k) {
      U(a, a.return, k);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function fk(a, b, c) {
  T = a;
  gk(a);
}
function gk(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== T; ) {
    var e = T, f = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Hj;
      if (!g) {
        var h = e.alternate, k = null !== h && null !== h.memoizedState || S;
        h = Hj;
        var l = S;
        Hj = g;
        if ((S = k) && !l)
          for (T = e; null !== T; )
            g = T, k = g.child, 22 === g.tag && null !== g.memoizedState ? hk(e) : null !== k ? (k.return = g, T = k) : hk(e);
        for (; null !== f; )
          T = f, gk(f), f = f.sibling;
        T = e;
        Hj = h;
        S = l;
      }
      ik(a);
    } else
      0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, T = f) : ik(a);
  }
}
function ik(a) {
  for (; null !== T; ) {
    var b = T;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772))
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              S || Oj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !S)
                if (null === c)
                  d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : kg(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f = b.updateQueue;
              null !== f && Gg(b, f, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child)
                  switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                Gg(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h;
                var k = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k.autoFocus && c.focus();
                    break;
                  case "img":
                    k.src && (c.src = k.src);
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
              if (null === b.memoizedState) {
                var l = b.alternate;
                if (null !== l) {
                  var n = l.memoizedState;
                  if (null !== n) {
                    var u = n.dehydrated;
                    null !== u && ad(u);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(p(163));
          }
        S || b.flags & 512 && Pj(b);
      } catch (q) {
        U(b, b.return, q);
      }
    }
    if (b === a) {
      T = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      T = c;
      break;
    }
    T = b.return;
  }
}
function ek(a) {
  for (; null !== T; ) {
    var b = T;
    if (b === a) {
      T = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      T = c;
      break;
    }
    T = b.return;
  }
}
function hk(a) {
  for (; null !== T; ) {
    var b = T;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Oj(4, b);
          } catch (k) {
            U(b, c, k);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k) {
              U(b, e, k);
            }
          }
          var f = b.return;
          try {
            Pj(b);
          } catch (k) {
            U(b, f, k);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Pj(b);
          } catch (k) {
            U(b, g, k);
          }
      }
    } catch (k) {
      U(b, b.return, k);
    }
    if (b === a) {
      T = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      T = h;
      break;
    }
    T = b.return;
  }
}
var jk = Math.ceil, kk = ta.ReactCurrentDispatcher, lk = ta.ReactCurrentOwner, mk = ta.ReactCurrentBatchConfig, W = 0, P = null, X = null, Y = 0, cj = 0, mj = Tf(0), R = 0, nk = null, Fg = 0, ok = 0, pk = 0, qk = null, rk = null, dk = 0, aj = Infinity, sk = null, Li = false, Mi = null, Oi = null, tk = false, uk = null, vk = 0, wk = 0, xk = null, yk = -1, zk = 0;
function Jg() {
  return 0 !== (W & 6) ? B() : -1 !== yk ? yk : yk = B();
}
function Kg(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (W & 2) && 0 !== Y)
    return Y & -Y;
  if (null !== jg.transition)
    return 0 === zk && (zk = xc()), zk;
  a = C;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : id(a.type);
  return a;
}
function Lg(a, b, c) {
  if (50 < wk)
    throw wk = 0, xk = null, Error(p(185));
  var d = Ak(a, b);
  if (null === d)
    return null;
  zc(d, b, c);
  if (0 === (W & 2) || d !== P)
    d === P && (0 === (W & 2) && (ok |= b), 4 === R && Bk(d, Y)), Ck(d, c), 1 === b && 0 === W && 0 === (a.mode & 1) && (aj = B() + 500, eg && ig());
  return d;
}
function Ak(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
function Bg(a) {
  return (null !== P || null !== vg) && 0 !== (a.mode & 1) && 0 === (W & 2);
}
function Ck(a, b) {
  var c = a.callbackNode;
  vc(a, b);
  var d = tc(a, a === P ? Y : 0);
  if (0 === d)
    null !== c && ac(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && ac(c);
    if (1 === b)
      0 === a.tag ? hg(Dk.bind(null, a)) : gg(Dk.bind(null, a)), If(function() {
        0 === W && ig();
      }), c = null;
    else {
      switch (Cc(d)) {
        case 1:
          c = ec;
          break;
        case 4:
          c = fc;
          break;
        case 16:
          c = gc;
          break;
        case 536870912:
          c = ic;
          break;
        default:
          c = gc;
      }
      c = Ek(c, Fk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Fk(a, b) {
  yk = -1;
  zk = 0;
  if (0 !== (W & 6))
    throw Error(p(327));
  var c = a.callbackNode;
  if (Gk() && a.callbackNode !== c)
    return null;
  var d = tc(a, a === P ? Y : 0);
  if (0 === d)
    return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
    b = Hk(a, d);
  else {
    b = d;
    var e = W;
    W |= 2;
    var f = Ik();
    if (P !== a || Y !== b)
      sk = null, aj = B() + 500, Jk(a, b);
    do
      try {
        Kk();
        break;
      } catch (h) {
        Lk(a, h);
      }
    while (1);
    pg();
    kk.current = f;
    W = e;
    null !== X ? b = 0 : (P = null, Y = 0, b = R);
  }
  if (0 !== b) {
    2 === b && (e = wc(a), 0 !== e && (d = e, b = Mk(a, e)));
    if (1 === b)
      throw c = nk, Jk(a, 0), Bk(a, d), Ck(a, B()), c;
    if (6 === b)
      Bk(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Nk(e) && (b = Hk(a, d), 2 === b && (f = wc(a), 0 !== f && (d = f, b = Mk(a, f))), 1 === b))
        throw c = nk, Jk(a, 0), Bk(a, d), Ck(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Ok(a, rk, sk);
          break;
        case 3:
          Bk(a, d);
          if ((d & 130023424) === d && (b = dk + 500 - B(), 10 < b)) {
            if (0 !== tc(a, 0))
              break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              Jg();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ef(Ok.bind(null, a, rk, sk), b);
            break;
          }
          Ok(a, rk, sk);
          break;
        case 4:
          Bk(a, d);
          if ((d & 4194240) === d)
            break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - nc(d);
            f = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * jk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ef(Ok.bind(null, a, rk, sk), d);
            break;
          }
          Ok(a, rk, sk);
          break;
        case 5:
          Ok(a, rk, sk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Ck(a, B());
  return a.callbackNode === c ? Fk.bind(null, a) : null;
}
function Mk(a, b) {
  var c = qk;
  a.current.memoizedState.isDehydrated && (Jk(a, b).flags |= 256);
  a = Hk(a, b);
  2 !== a && (b = rk, rk = c, null !== b && Zi(b));
  return a;
}
function Zi(a) {
  null === rk ? rk = a : rk.push.apply(rk, a);
}
function Nk(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c))
        for (var d = 0; d < c.length; d++) {
          var e = c[d], f = e.getSnapshot;
          e = e.value;
          try {
            if (!Ge(f(), e))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c)
      c.return = b, b = c;
    else {
      if (b === a)
        break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a)
          return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Bk(a, b) {
  b &= ~pk;
  b &= ~ok;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - nc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Dk(a) {
  if (0 !== (W & 6))
    throw Error(p(327));
  Gk();
  var b = tc(a, 0);
  if (0 === (b & 1))
    return Ck(a, B()), null;
  var c = Hk(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = wc(a);
    0 !== d && (b = d, c = Mk(a, d));
  }
  if (1 === c)
    throw c = nk, Jk(a, 0), Bk(a, b), Ck(a, B()), c;
  if (6 === c)
    throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Ok(a, rk, sk);
  Ck(a, B());
  return null;
}
function Pk(a, b) {
  var c = W;
  W |= 1;
  try {
    return a(b);
  } finally {
    W = c, 0 === W && (aj = B() + 500, eg && ig());
  }
}
function Qk(a) {
  null !== uk && 0 === uk.tag && 0 === (W & 6) && Gk();
  var b = W;
  W |= 1;
  var c = mk.transition, d = C;
  try {
    if (mk.transition = null, C = 1, a)
      return a();
  } finally {
    C = d, mk.transition = c, W = b, 0 === (W & 6) && ig();
  }
}
function bj() {
  cj = mj.current;
  E(mj);
}
function Jk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Ff(c));
  if (null !== X)
    for (c = X.return; null !== c; ) {
      var d = c;
      ch(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && Zf();
          break;
        case 3:
          Gh();
          E(Vf);
          E(H);
          Lh();
          break;
        case 5:
          Ih(d);
          break;
        case 4:
          Gh();
          break;
        case 13:
          E(K);
          break;
        case 19:
          E(K);
          break;
        case 10:
          qg(d.type._context);
          break;
        case 22:
        case 23:
          bj();
      }
      c = c.return;
    }
  P = a;
  X = a = th(a.current, null);
  Y = cj = b;
  R = 0;
  nk = null;
  pk = ok = Fg = 0;
  rk = qk = null;
  if (null !== vg) {
    for (b = 0; b < vg.length; b++)
      if (c = vg[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f = c.pending;
        if (null !== f) {
          var g = f.next;
          f.next = e;
          d.next = g;
        }
        c.pending = d;
      }
    vg = null;
  }
  return a;
}
function Lk(a, b) {
  do {
    var c = X;
    try {
      pg();
      Mh.current = Yh;
      if (Ph) {
        for (var d = L.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Ph = false;
      }
      Oh = 0;
      N = M = L = null;
      Qh = false;
      Rh = 0;
      lk.current = null;
      if (null === c || null === c.return) {
        R = 1;
        nk = b;
        X = null;
        break;
      }
      a: {
        var f = a, g = c.return, h = c, k = b;
        b = Y;
        h.flags |= 32768;
        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
          var l = k, n = h, u = n.tag;
          if (0 === (n.mode & 1) && (0 === u || 11 === u || 15 === u)) {
            var q = n.alternate;
            q ? (n.updateQueue = q.updateQueue, n.memoizedState = q.memoizedState, n.lanes = q.lanes) : (n.updateQueue = null, n.memoizedState = null);
          }
          var y = Ri(g);
          if (null !== y) {
            y.flags &= -257;
            Si(y, g, h, f, b);
            y.mode & 1 && Pi(f, l, b);
            b = y;
            k = l;
            var m = b.updateQueue;
            if (null === m) {
              var w = /* @__PURE__ */ new Set();
              w.add(k);
              b.updateQueue = w;
            } else
              m.add(k);
            break a;
          } else {
            if (0 === (b & 1)) {
              Pi(f, l, b);
              $i();
              break a;
            }
            k = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J = Ri(g);
          if (null !== J) {
            0 === (J.flags & 65536) && (J.flags |= 256);
            Si(J, g, h, f, b);
            oh(k);
            break a;
          }
        }
        f = k;
        4 !== R && (R = 2);
        null === qk ? qk = [f] : qk.push(f);
        k = Hi(k, h);
        h = g;
        do {
          switch (h.tag) {
            case 3:
              h.flags |= 65536;
              b &= -b;
              h.lanes |= b;
              var v = Ki(h, k, b);
              Dg(h, v);
              break a;
            case 1:
              f = k;
              var x = h.type, r = h.stateNode;
              if (0 === (h.flags & 128) && ("function" === typeof x.getDerivedStateFromError || null !== r && "function" === typeof r.componentDidCatch && (null === Oi || !Oi.has(r)))) {
                h.flags |= 65536;
                b &= -b;
                h.lanes |= b;
                var F = Ni(h, f, b);
                Dg(h, F);
                break a;
              }
          }
          h = h.return;
        } while (null !== h);
      }
      Rk(c);
    } catch (Z) {
      b = Z;
      X === c && null !== c && (X = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Ik() {
  var a = kk.current;
  kk.current = Yh;
  return null === a ? Yh : a;
}
function $i() {
  if (0 === R || 3 === R || 2 === R)
    R = 4;
  null === P || 0 === (Fg & 268435455) && 0 === (ok & 268435455) || Bk(P, Y);
}
function Hk(a, b) {
  var c = W;
  W |= 2;
  var d = Ik();
  if (P !== a || Y !== b)
    sk = null, Jk(a, b);
  do
    try {
      Sk();
      break;
    } catch (e) {
      Lk(a, e);
    }
  while (1);
  pg();
  W = c;
  kk.current = d;
  if (null !== X)
    throw Error(p(261));
  P = null;
  Y = 0;
  return R;
}
function Sk() {
  for (; null !== X; )
    Tk(X);
}
function Kk() {
  for (; null !== X && !bc(); )
    Tk(X);
}
function Tk(a) {
  var b = Uk(a.alternate, a, cj);
  a.memoizedProps = a.pendingProps;
  null === b ? Rk(a) : X = b;
  lk.current = null;
}
function Rk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Yi(c, b, cj), null !== c) {
        X = c;
        return;
      }
    } else {
      c = Gj(c, b);
      if (null !== c) {
        c.flags &= 32767;
        X = c;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        R = 6;
        X = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      X = b;
      return;
    }
    X = b = a;
  } while (null !== b);
  0 === R && (R = 5);
}
function Ok(a, b, c) {
  var d = C, e = mk.transition;
  try {
    mk.transition = null, C = 1, Vk(a, b, c, d);
  } finally {
    mk.transition = e, C = d;
  }
  return null;
}
function Vk(a, b, c, d) {
  do
    Gk();
  while (null !== uk);
  if (0 !== (W & 6))
    throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f = c.lanes | c.childLanes;
  Ac(a, f);
  a === P && (X = P = null, Y = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || tk || (tk = true, Ek(gc, function() {
    Gk();
    return null;
  }));
  f = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f) {
    f = mk.transition;
    mk.transition = null;
    var g = C;
    C = 1;
    var h = W;
    W |= 4;
    lk.current = null;
    Mj(a, c);
    bk(c, a);
    Ne(Cf);
    cd = !!Bf;
    Cf = Bf = null;
    a.current = c;
    fk(c);
    cc();
    W = h;
    C = g;
    mk.transition = f;
  } else
    a.current = c;
  tk && (tk = false, uk = a, vk = e);
  f = a.pendingLanes;
  0 === f && (Oi = null);
  lc(c.stateNode);
  Ck(a, B());
  if (null !== b)
    for (d = a.onRecoverableError, c = 0; c < b.length; c++)
      d(b[c]);
  if (Li)
    throw Li = false, a = Mi, Mi = null, a;
  0 !== (vk & 1) && 0 !== a.tag && Gk();
  f = a.pendingLanes;
  0 !== (f & 1) ? a === xk ? wk++ : (wk = 0, xk = a) : wk = 0;
  ig();
  return null;
}
function Gk() {
  if (null !== uk) {
    var a = Cc(vk), b = mk.transition, c = C;
    try {
      mk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === uk)
        var d = false;
      else {
        a = uk;
        uk = null;
        vk = 0;
        if (0 !== (W & 6))
          throw Error(p(331));
        var e = W;
        W |= 4;
        for (T = a.current; null !== T; ) {
          var f = T, g = f.child;
          if (0 !== (T.flags & 16)) {
            var h = f.deletions;
            if (null !== h) {
              for (var k = 0; k < h.length; k++) {
                var l = h[k];
                for (T = l; null !== T; ) {
                  var n = T;
                  switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(8, n, f);
                  }
                  var u = n.child;
                  if (null !== u)
                    u.return = n, T = u;
                  else
                    for (; null !== T; ) {
                      n = T;
                      var q = n.sibling, y = n.return;
                      Qj(n);
                      if (n === l) {
                        T = null;
                        break;
                      }
                      if (null !== q) {
                        q.return = y;
                        T = q;
                        break;
                      }
                      T = y;
                    }
                }
              }
              var m = f.alternate;
              if (null !== m) {
                var w = m.child;
                if (null !== w) {
                  m.child = null;
                  do {
                    var J = w.sibling;
                    w.sibling = null;
                    w = J;
                  } while (null !== w);
                }
              }
              T = f;
            }
          }
          if (0 !== (f.subtreeFlags & 2064) && null !== g)
            g.return = f, T = g;
          else
            b:
              for (; null !== T; ) {
                f = T;
                if (0 !== (f.flags & 2048))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(9, f, f.return);
                  }
                var v = f.sibling;
                if (null !== v) {
                  v.return = f.return;
                  T = v;
                  break b;
                }
                T = f.return;
              }
        }
        var x = a.current;
        for (T = x; null !== T; ) {
          g = T;
          var r = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== r)
            r.return = g, T = r;
          else
            b:
              for (g = x; null !== T; ) {
                h = T;
                if (0 !== (h.flags & 2048))
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oj(9, h);
                    }
                  } catch (Z) {
                    U(h, h.return, Z);
                  }
                if (h === g) {
                  T = null;
                  break b;
                }
                var F = h.sibling;
                if (null !== F) {
                  F.return = h.return;
                  T = F;
                  break b;
                }
                T = h.return;
              }
        }
        W = e;
        ig();
        if (kc && "function" === typeof kc.onPostCommitFiberRoot)
          try {
            kc.onPostCommitFiberRoot(jc, a);
          } catch (Z) {
          }
        d = true;
      }
      return d;
    } finally {
      C = c, mk.transition = b;
    }
  }
  return false;
}
function Wk(a, b, c) {
  b = Hi(c, b);
  b = Ki(a, b, 1);
  Ag(a, b);
  b = Jg();
  a = Ak(a, 1);
  null !== a && (zc(a, 1, b), Ck(a, b));
}
function U(a, b, c) {
  if (3 === a.tag)
    Wk(a, a, c);
  else
    for (; null !== b; ) {
      if (3 === b.tag) {
        Wk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Oi || !Oi.has(d))) {
          a = Hi(c, a);
          a = Ni(b, a, 1);
          Ag(b, a);
          a = Jg();
          b = Ak(b, 1);
          null !== b && (zc(b, 1, a), Ck(b, a));
          break;
        }
      }
      b = b.return;
    }
}
function Qi(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = Jg();
  a.pingedLanes |= a.suspendedLanes & c;
  P === a && (Y & c) === c && (4 === R || 3 === R && (Y & 130023424) === Y && 500 > B() - dk ? Jk(a, 0) : pk |= c);
  Ck(a, b);
}
function Xk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = rc, rc <<= 1, 0 === (rc & 130023424) && (rc = 4194304)));
  var c = Jg();
  a = Ak(a, b);
  null !== a && (zc(a, b, c), Ck(a, c));
}
function zj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Xk(a, c);
}
function Zj(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Xk(a, c);
}
var Uk;
Uk = function(a, b, c) {
  if (null !== a)
    if (a.memoizedProps !== b.pendingProps || Vf.current)
      tg = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128))
        return tg = false, Fj(a, b, c);
      tg = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    tg = false, I && 0 !== (b.flags & 1048576) && ah(b, Ug, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      a = b.pendingProps;
      var e = Xf(b, H.current);
      sg(b, c);
      e = Uh(null, b, d, a, e, c);
      var f = Zh();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Yf(d) ? (f = true, bg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, xg(b), e.updater = Mg, b.stateNode = e, e._reactInternals = b, Qg(b, d, a, c), b = pj(null, b, d, true, f, c)) : (b.tag = 0, I && f && bh(b), ej(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = Yk(d);
        a = kg(d, a);
        switch (e) {
          case 0:
            b = kj(null, b, d, a, c);
            break a;
          case 1:
            b = oj(
              null,
              b,
              d,
              a,
              c
            );
            break a;
          case 11:
            b = fj(null, b, d, a, c);
            break a;
          case 14:
            b = hj(null, b, d, kg(d.type, a), c);
            break a;
        }
        throw Error(p(306, d, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : kg(d, e), kj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : kg(d, e), oj(a, b, d, e, c);
    case 3:
      a: {
        qj(b);
        if (null === a)
          throw Error(p(387));
        d = b.pendingProps;
        f = b.memoizedState;
        e = f.element;
        yg(a, b);
        Eg(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f.isDehydrated)
          if (f = {
            element: d,
            isDehydrated: false,
            cache: g.cache,
            pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
            transitions: g.transitions
          }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
            e = Error(p(423));
            b = rj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Error(p(424));
            b = rj(a, b, d, c, e);
            break a;
          } else
            for (eh = Kf(b.stateNode.containerInfo.firstChild), dh = b, I = true, fh = null, c = zh(b, null, d, c), b.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          nh();
          if (d === e) {
            b = gj(a, b, c);
            break a;
          }
          ej(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Hh(b), null === a && kh(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Df(d, e) ? g = null : null !== f && Df(d, f) && (b.flags |= 32), nj(a, b), ej(a, b, g, c), b.child;
    case 6:
      return null === a && kh(b), null;
    case 13:
      return vj(a, b, c);
    case 4:
      return Fh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = yh(b, null, d, c) : ej(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : kg(d, e), fj(a, b, d, e, c);
    case 7:
      return ej(a, b, b.pendingProps, c), b.child;
    case 8:
      return ej(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return ej(
        a,
        b,
        b.pendingProps.children,
        c
      ), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f = b.memoizedProps;
        g = e.value;
        G(lg, d._currentValue);
        d._currentValue = g;
        if (null !== f)
          if (Ge(f.value, g)) {
            if (f.children === e.children && !Vf.current) {
              b = gj(a, b, c);
              break a;
            }
          } else
            for (f = b.child, null !== f && (f.return = b); null !== f; ) {
              var h = f.dependencies;
              if (null !== h) {
                g = f.child;
                for (var k = h.firstContext; null !== k; ) {
                  if (k.context === d) {
                    if (1 === f.tag) {
                      k = zg(-1, c & -c);
                      k.tag = 2;
                      var l = f.updateQueue;
                      if (null !== l) {
                        l = l.shared;
                        var n = l.pending;
                        null === n ? k.next = k : (k.next = n.next, n.next = k);
                        l.pending = k;
                      }
                    }
                    f.lanes |= c;
                    k = f.alternate;
                    null !== k && (k.lanes |= c);
                    rg(f.return, c, b);
                    h.lanes |= c;
                    break;
                  }
                  k = k.next;
                }
              } else if (10 === f.tag)
                g = f.type === b.type ? null : f.child;
              else if (18 === f.tag) {
                g = f.return;
                if (null === g)
                  throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                rg(g, c, b);
                g = f.sibling;
              } else
                g = f.child;
              if (null !== g)
                g.return = f;
              else
                for (g = f; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f = g.sibling;
                  if (null !== f) {
                    f.return = g.return;
                    g = f;
                    break;
                  }
                  g = g.return;
                }
              f = g;
            }
        ej(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, sg(b, c), e = ug(e), d = d(e), b.flags |= 1, ej(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = kg(d, b.pendingProps), e = kg(d.type, e), hj(a, b, d, e, c);
    case 15:
      return jj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : kg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Yf(d) ? (a = true, bg(b)) : a = false, sg(b, c), Og(b, d, e), Qg(b, d, e, c), pj(null, b, d, true, a, c);
    case 19:
      return Ej(a, b, c);
    case 22:
      return lj(a, b, c);
  }
  throw Error(p(
    156,
    b.tag
  ));
};
function Ek(a, b) {
  return $b(a, b);
}
function Zk(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function hh(a, b, c, d) {
  return new Zk(a, b, c, d);
}
function ij(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Yk(a) {
  if ("function" === typeof a)
    return ij(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Ca)
      return 11;
    if (a === Fa)
      return 14;
  }
  return 2;
}
function th(a, b) {
  var c = a.alternate;
  null === c ? (c = hh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function vh(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if ("function" === typeof a)
    ij(a) && (g = 1);
  else if ("string" === typeof a)
    g = 5;
  else
    a:
      switch (a) {
        case wa:
          return xh(c.children, e, f, b);
        case xa:
          g = 8;
          e |= 8;
          break;
        case za:
          return a = hh(12, c, b, e | 2), a.elementType = za, a.lanes = f, a;
        case Da:
          return a = hh(13, c, b, e), a.elementType = Da, a.lanes = f, a;
        case Ea:
          return a = hh(19, c, b, e), a.elementType = Ea, a.lanes = f, a;
        case Ha:
          return wj(c, e, f, b);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Aa:
                g = 10;
                break a;
              case Ba:
                g = 9;
                break a;
              case Ca:
                g = 11;
                break a;
              case Fa:
                g = 14;
                break a;
              case Ga:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
  b = hh(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f;
  return b;
}
function xh(a, b, c, d) {
  a = hh(7, a, d, b);
  a.lanes = c;
  return a;
}
function wj(a, b, c, d) {
  a = hh(22, a, d, b);
  a.elementType = Ha;
  a.lanes = c;
  a.stateNode = {};
  return a;
}
function uh(a, b, c) {
  a = hh(6, a, null, b);
  a.lanes = c;
  return a;
}
function wh(a, b, c) {
  b = hh(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function $k(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = yc(0);
  this.expirationTimes = yc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = yc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function al(a, b, c, d, e, f, g, h, k) {
  a = new $k(a, b, c, h, k);
  1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
  f = hh(3, null, null, b);
  a.current = f;
  f.stateNode = a;
  f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  xg(f);
  return a;
}
function bl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: va, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function cl(a) {
  if (!a)
    return Uf;
  a = a._reactInternals;
  a: {
    if (Ub(a) !== a || 1 !== a.tag)
      throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Yf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Yf(c))
      return ag(a, c, b);
  }
  return b;
}
function dl(a, b, c, d, e, f, g, h, k) {
  a = al(c, d, true, a, e, f, g, h, k);
  a.context = cl(null);
  c = a.current;
  d = Jg();
  e = Kg(c);
  f = zg(d, e);
  f.callback = void 0 !== b && null !== b ? b : null;
  Ag(c, f);
  a.current.lanes = e;
  zc(a, e, d);
  Ck(a, d);
  return a;
}
function el(a, b, c, d) {
  var e = b.current, f = Jg(), g = Kg(e);
  c = cl(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = zg(f, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  Ag(e, b);
  a = Lg(e, g, f);
  null !== a && Cg(a, e, g);
  return g;
}
function fl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function gl(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function hl(a, b) {
  gl(a, b);
  (a = a.alternate) && gl(a, b);
}
function il() {
  return null;
}
var jl = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function kl(a) {
  this._internalRoot = a;
}
ll.prototype.render = kl.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b)
    throw Error(p(409));
  el(a, b, null, null);
};
ll.prototype.unmount = kl.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Qk(function() {
      el(null, a, null, null);
    });
    b[tf] = null;
  }
};
function ll(a) {
  this._internalRoot = a;
}
ll.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Gc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Pc.length && 0 !== b && b < Pc[c].priority; c++)
      ;
    Pc.splice(c, 0, a);
    0 === c && Uc(a);
  }
};
function ml(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function nl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ol() {
}
function pl(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f = d;
      d = function() {
        var a2 = fl(g);
        f.call(a2);
      };
    }
    var g = dl(b, d, a, 0, null, false, false, "", ol);
    a._reactRootContainer = g;
    a[tf] = g.current;
    rf(8 === a.nodeType ? a.parentNode : a);
    Qk();
    return g;
  }
  for (; e = a.lastChild; )
    a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = fl(k);
      h.call(a2);
    };
  }
  var k = al(a, 0, false, null, null, false, false, "", ol);
  a._reactRootContainer = k;
  a[tf] = k.current;
  rf(8 === a.nodeType ? a.parentNode : a);
  Qk(function() {
    el(b, k, c, d);
  });
  return k;
}
function ql(a, b, c, d, e) {
  var f = c._reactRootContainer;
  if (f) {
    var g = f;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = fl(g);
        h.call(a2);
      };
    }
    el(b, g, a, e);
  } else
    g = pl(c, b, a, e, d);
  return fl(g);
}
Dc = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = sc(b.pendingLanes);
        0 !== c && (Bc(b, c | 1), Ck(b, B()), 0 === (W & 6) && (aj = B() + 500, ig()));
      }
      break;
    case 13:
      var d = Jg();
      Qk(function() {
        return Lg(a, 1, d);
      });
      hl(a, 1);
  }
};
Ec = function(a) {
  if (13 === a.tag) {
    var b = Jg();
    Lg(a, 134217728, b);
    hl(a, 134217728);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = Jg(), c = Kg(a);
    Lg(a, c, b);
    hl(a, c);
  }
};
Gc = function() {
  return C;
};
Hc = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
xb = function(a, b, c) {
  switch (b) {
    case "input":
      $a(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Cb(d);
            if (!e)
              throw Error(p(90));
            Va(d);
            $a(d, e);
          }
        }
      }
      break;
    case "textarea":
      hb(a, c);
      break;
    case "select":
      b = c.value, null != b && eb(a, !!c.multiple, b, false);
  }
};
Fb = Pk;
Gb = Qk;
var rl = { usingClientEntryPoint: false, Events: [Bb, te, Cb, Db, Eb, Pk] }, sl = { findFiberByHostInstance: Vc, bundleType: 0, version: "18.1.0", rendererPackageName: "react-dom" };
var tl = { bundleType: sl.bundleType, version: sl.version, rendererPackageName: sl.rendererPackageName, rendererConfig: sl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ta.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Yb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: sl.findFiberByHostInstance || il, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.1.0-next-22edb9f77-20220426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ul.isDisabled && ul.supportsFiber)
    try {
      jc = ul.inject(tl), kc = ul;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ml(b))
    throw Error(p(200));
  return bl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!ml(a))
    throw Error(p(299));
  var c = false, d = "", e = jl;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = al(a, 1, false, null, null, c, false, d, e);
  a[tf] = b.current;
  rf(8 === a.nodeType ? a.parentNode : a);
  return new kl(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render)
      throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Yb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Qk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!nl(b))
    throw Error(p(200));
  return ql(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!ml(a))
    throw Error(p(405));
  var d = null != c && c.hydratedSources || null, e = false, f = "", g = jl;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = dl(b, null, a, 1, null != c ? c : null, e, false, f, g);
  a[tf] = b.current;
  rf(a);
  if (d)
    for (a = 0; a < d.length; a++)
      c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
  return new ll(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!nl(b))
    throw Error(p(200));
  return ql(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!nl(a))
    throw Error(p(40));
  return a._reactRootContainer ? (Qk(function() {
    ql(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[tf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Pk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!nl(c))
    throw Error(p(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p(38));
  return ql(a, b, c, false, d);
};
reactDom_production_min.version = "18.1.0-next-22edb9f77-20220426";
(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
})(reactDom);
const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(reactDom.exports);
var baseToString = _baseToString;
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$1;
function arrayPush$1(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush$1;
var arrayPush = _arrayPush, isArray$6 = isArray_1;
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$6(object) ? result : arrayPush(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$1;
function arrayFilter$1(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$1() {
  return [];
}
var stubArray_1 = stubArray$1;
var arrayFilter = _arrayFilter, stubArray = stubArray_1;
var objectProto$5 = Object.prototype;
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$1;
function baseTimes$1(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var baseTimes = _baseTimes, isArguments$1 = isArguments_1, isArray$5 = isArray_1, isBuffer$1 = isBuffer$2.exports, isIndex$1 = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$5(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$1(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;
var objectProto$3 = Object.prototype;
function isPrototype$1(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$3;
  return value === proto;
}
var _isPrototype = isPrototype$1;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction = isFunction_1, isLength$1 = isLength_1;
function isArrayLike$1(value) {
  return value != null && isLength$1(value.length) && !isFunction(value);
}
var isArrayLike_1 = isArrayLike$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike = isArrayLike_1;
function keys$3(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var keys_1 = keys$3;
var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys$2 = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys$2, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var Stack$1 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$4 = isArray_1, isBuffer = isBuffer$2.exports, isTypedArray = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$4(object), othIsArr = isArray$4(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$1());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike = isObjectLike_1;
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}
var _baseIsEqual = baseIsEqual$2;
var Stack = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys$1 = keys_1;
function getMatchData$1(object) {
  var result = keys$1(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
var isArray$3 = isArray_1, isSymbol$1 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value, object) {
  if (isArray$3(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$3;
var MapCache = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache)();
  return memoized;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
var isArray$2 = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$2(value, object) {
  if (isArray$2(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$2;
var isSymbol = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$4(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$4;
var castPath$1 = _castPath, toKey$3 = _toKey;
function baseGet$2(object, path) {
  path = castPath$1(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey$3(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var _baseGet = baseGet$2;
var baseGet$1 = _baseGet;
function get$1(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet$1(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$1;
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn$1;
var castPath = _castPath, isArguments = isArguments_1, isArray$1 = isArray_1, isIndex = _isIndex, isLength = isLength_1, toKey$2 = _toKey;
function hasPath$1(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey$2(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object) || isArguments(object));
}
var _hasPath = hasPath$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var hasIn_1 = hasIn$1;
var baseIsEqual = _baseIsEqual, get = get_1, hasIn = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$1 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$1(value) {
  return value;
}
var identity_1 = identity$1;
function baseProperty$1(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet = _baseGet;
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity = identity_1, isArray = isArray_1, property = property_1;
function baseIteratee$1(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$1;
var getNative = _getNative;
var defineProperty$1 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$1;
var defineProperty = _defineProperty;
function baseAssignValue$1(object, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$1;
var overArg = _overArg;
var getPrototype = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype;
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
var baseFor = _baseFor, keys = keys_1;
function baseForOwn$1(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}
var _baseForOwn = baseForOwn$1;
var baseAssignValue = _baseAssignValue, baseForOwn = _baseForOwn, baseIteratee = _baseIteratee;
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee);
  baseForOwn(object, function(value, key, object2) {
    baseAssignValue(result, key, iteratee(value, key, object2));
  });
  return result;
}
var mapValues_1 = mapValues;
var doctrine = {};
var utils = {};
var ast = { exports: {} };
(function() {
  function isExpression(node) {
    if (node == null) {
      return false;
    }
    switch (node.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "CallExpression":
      case "ConditionalExpression":
      case "FunctionExpression":
      case "Identifier":
      case "Literal":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "ObjectExpression":
      case "SequenceExpression":
      case "ThisExpression":
      case "UnaryExpression":
      case "UpdateExpression":
        return true;
    }
    return false;
  }
  function isIterationStatement(node) {
    if (node == null) {
      return false;
    }
    switch (node.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
        return true;
    }
    return false;
  }
  function isStatement(node) {
    if (node == null) {
      return false;
    }
    switch (node.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
        return true;
    }
    return false;
  }
  function isSourceElement(node) {
    return isStatement(node) || node != null && node.type === "FunctionDeclaration";
  }
  function trailingStatement(node) {
    switch (node.type) {
      case "IfStatement":
        if (node.alternate != null) {
          return node.alternate;
        }
        return node.consequent;
      case "LabeledStatement":
      case "ForStatement":
      case "ForInStatement":
      case "WhileStatement":
      case "WithStatement":
        return node.body;
    }
    return null;
  }
  function isProblematicIfStatement(node) {
    var current;
    if (node.type !== "IfStatement") {
      return false;
    }
    if (node.alternate == null) {
      return false;
    }
    current = node.consequent;
    do {
      if (current.type === "IfStatement") {
        if (current.alternate == null) {
          return true;
        }
      }
      current = trailingStatement(current);
    } while (current);
    return false;
  }
  ast.exports = {
    isExpression,
    isStatement,
    isIterationStatement,
    isSourceElement,
    isProblematicIfStatement,
    trailingStatement
  };
})();
var code = { exports: {} };
(function() {
  var ES6Regex, ES5Regex, NON_ASCII_WHITESPACES, IDENTIFIER_START, IDENTIFIER_PART, ch2;
  ES5Regex = {
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
  };
  ES6Regex = {
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
  };
  function isDecimalDigit(ch3) {
    return 48 <= ch3 && ch3 <= 57;
  }
  function isHexDigit(ch3) {
    return 48 <= ch3 && ch3 <= 57 || 97 <= ch3 && ch3 <= 102 || 65 <= ch3 && ch3 <= 70;
  }
  function isOctalDigit(ch3) {
    return ch3 >= 48 && ch3 <= 55;
  }
  NON_ASCII_WHITESPACES = [
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8239,
    8287,
    12288,
    65279
  ];
  function isWhiteSpace(ch3) {
    return ch3 === 32 || ch3 === 9 || ch3 === 11 || ch3 === 12 || ch3 === 160 || ch3 >= 5760 && NON_ASCII_WHITESPACES.indexOf(ch3) >= 0;
  }
  function isLineTerminator(ch3) {
    return ch3 === 10 || ch3 === 13 || ch3 === 8232 || ch3 === 8233;
  }
  function fromCodePoint(cp) {
    if (cp <= 65535) {
      return String.fromCharCode(cp);
    }
    var cu1 = String.fromCharCode(Math.floor((cp - 65536) / 1024) + 55296);
    var cu2 = String.fromCharCode((cp - 65536) % 1024 + 56320);
    return cu1 + cu2;
  }
  IDENTIFIER_START = new Array(128);
  for (ch2 = 0; ch2 < 128; ++ch2) {
    IDENTIFIER_START[ch2] = ch2 >= 97 && ch2 <= 122 || ch2 >= 65 && ch2 <= 90 || ch2 === 36 || ch2 === 95;
  }
  IDENTIFIER_PART = new Array(128);
  for (ch2 = 0; ch2 < 128; ++ch2) {
    IDENTIFIER_PART[ch2] = ch2 >= 97 && ch2 <= 122 || ch2 >= 65 && ch2 <= 90 || ch2 >= 48 && ch2 <= 57 || ch2 === 36 || ch2 === 95;
  }
  function isIdentifierStartES5(ch3) {
    return ch3 < 128 ? IDENTIFIER_START[ch3] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch3));
  }
  function isIdentifierPartES5(ch3) {
    return ch3 < 128 ? IDENTIFIER_PART[ch3] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch3));
  }
  function isIdentifierStartES6(ch3) {
    return ch3 < 128 ? IDENTIFIER_START[ch3] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch3));
  }
  function isIdentifierPartES6(ch3) {
    return ch3 < 128 ? IDENTIFIER_PART[ch3] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch3));
  }
  code.exports = {
    isDecimalDigit,
    isHexDigit,
    isOctalDigit,
    isWhiteSpace,
    isLineTerminator,
    isIdentifierStartES5,
    isIdentifierPartES5,
    isIdentifierStartES6,
    isIdentifierPartES6
  };
})();
var keyword = { exports: {} };
(function() {
  var code$1 = code.exports;
  function isStrictModeReservedWordES6(id2) {
    switch (id2) {
      case "implements":
      case "interface":
      case "package":
      case "private":
      case "protected":
      case "public":
      case "static":
      case "let":
        return true;
      default:
        return false;
    }
  }
  function isKeywordES5(id2, strict) {
    if (!strict && id2 === "yield") {
      return false;
    }
    return isKeywordES6(id2, strict);
  }
  function isKeywordES6(id2, strict) {
    if (strict && isStrictModeReservedWordES6(id2)) {
      return true;
    }
    switch (id2.length) {
      case 2:
        return id2 === "if" || id2 === "in" || id2 === "do";
      case 3:
        return id2 === "var" || id2 === "for" || id2 === "new" || id2 === "try";
      case 4:
        return id2 === "this" || id2 === "else" || id2 === "case" || id2 === "void" || id2 === "with" || id2 === "enum";
      case 5:
        return id2 === "while" || id2 === "break" || id2 === "catch" || id2 === "throw" || id2 === "const" || id2 === "yield" || id2 === "class" || id2 === "super";
      case 6:
        return id2 === "return" || id2 === "typeof" || id2 === "delete" || id2 === "switch" || id2 === "export" || id2 === "import";
      case 7:
        return id2 === "default" || id2 === "finally" || id2 === "extends";
      case 8:
        return id2 === "function" || id2 === "continue" || id2 === "debugger";
      case 10:
        return id2 === "instanceof";
      default:
        return false;
    }
  }
  function isReservedWordES5(id2, strict) {
    return id2 === "null" || id2 === "true" || id2 === "false" || isKeywordES5(id2, strict);
  }
  function isReservedWordES6(id2, strict) {
    return id2 === "null" || id2 === "true" || id2 === "false" || isKeywordES6(id2, strict);
  }
  function isRestrictedWord(id2) {
    return id2 === "eval" || id2 === "arguments";
  }
  function isIdentifierNameES5(id2) {
    var i, iz, ch2;
    if (id2.length === 0) {
      return false;
    }
    ch2 = id2.charCodeAt(0);
    if (!code$1.isIdentifierStartES5(ch2)) {
      return false;
    }
    for (i = 1, iz = id2.length; i < iz; ++i) {
      ch2 = id2.charCodeAt(i);
      if (!code$1.isIdentifierPartES5(ch2)) {
        return false;
      }
    }
    return true;
  }
  function decodeUtf16(lead, trail) {
    return (lead - 55296) * 1024 + (trail - 56320) + 65536;
  }
  function isIdentifierNameES6(id2) {
    var i, iz, ch2, lowCh, check;
    if (id2.length === 0) {
      return false;
    }
    check = code$1.isIdentifierStartES6;
    for (i = 0, iz = id2.length; i < iz; ++i) {
      ch2 = id2.charCodeAt(i);
      if (55296 <= ch2 && ch2 <= 56319) {
        ++i;
        if (i >= iz) {
          return false;
        }
        lowCh = id2.charCodeAt(i);
        if (!(56320 <= lowCh && lowCh <= 57343)) {
          return false;
        }
        ch2 = decodeUtf16(ch2, lowCh);
      }
      if (!check(ch2)) {
        return false;
      }
      check = code$1.isIdentifierPartES6;
    }
    return true;
  }
  function isIdentifierES5(id2, strict) {
    return isIdentifierNameES5(id2) && !isReservedWordES5(id2, strict);
  }
  function isIdentifierES6(id2, strict) {
    return isIdentifierNameES6(id2) && !isReservedWordES6(id2, strict);
  }
  keyword.exports = {
    isKeywordES5,
    isKeywordES6,
    isReservedWordES5,
    isReservedWordES6,
    isRestrictedWord,
    isIdentifierNameES5,
    isIdentifierNameES6,
    isIdentifierES5,
    isIdentifierES6
  };
})();
(function() {
  utils.ast = ast.exports;
  utils.code = code.exports;
  utils.keyword = keyword.exports;
})();
var typed = {};
var utility = {};
const name = "doctrine";
const description = "JSDoc parser";
const homepage = "https://github.com/eslint/doctrine";
const main = "lib/doctrine.js";
const version = "3.0.0";
const engines = {
  node: ">=6.0.0"
};
const directories = {
  lib: "./lib"
};
const files = [
  "lib"
];
const maintainers = [
  {
    name: "Nicholas C. Zakas",
    email: "nicholas+npm@nczconsulting.com",
    web: "https://www.nczonline.net"
  },
  {
    name: "Yusuke Suzuki",
    email: "utatane.tea@gmail.com",
    web: "https://github.com/Constellation"
  }
];
const repository = "eslint/doctrine";
const devDependencies = {
  coveralls: "^3.0.1",
  dateformat: "^1.0.11",
  eslint: "^1.10.3",
  "eslint-release": "^1.0.0",
  linefix: "^0.1.1",
  mocha: "^3.4.2",
  "npm-license": "^0.3.1",
  nyc: "^10.3.2",
  semver: "^5.0.3",
  shelljs: "^0.5.3",
  "shelljs-nodecli": "^0.1.1",
  should: "^5.0.1"
};
const license = "Apache-2.0";
const scripts = {
  pretest: "npm run lint",
  test: "nyc mocha",
  coveralls: "nyc report --reporter=text-lcov | coveralls",
  lint: "eslint lib/",
  "generate-release": "eslint-generate-release",
  "generate-alpharelease": "eslint-generate-prerelease alpha",
  "generate-betarelease": "eslint-generate-prerelease beta",
  "generate-rcrelease": "eslint-generate-prerelease rc",
  "publish-release": "eslint-publish-release"
};
const dependencies = {
  esutils: "^2.0.2"
};
const require$$0 = {
  name,
  description,
  homepage,
  main,
  version,
  engines,
  directories,
  files,
  maintainers,
  repository,
  devDependencies,
  license,
  scripts,
  dependencies
};
function assert(expr, message) {
  if (!Boolean(expr)) {
    throw new Error(message || "unknown assertion error");
  }
}
var assert_1 = assert;
(function() {
  var VERSION;
  VERSION = require$$0.version;
  utility.VERSION = VERSION;
  function DoctrineError(message) {
    this.name = "DoctrineError";
    this.message = message;
  }
  DoctrineError.prototype = function() {
    var Middle = function() {
    };
    Middle.prototype = Error.prototype;
    return new Middle();
  }();
  DoctrineError.prototype.constructor = DoctrineError;
  utility.DoctrineError = DoctrineError;
  function throwError(message) {
    throw new DoctrineError(message);
  }
  utility.throwError = throwError;
  utility.assert = assert_1;
})();
(function() {
  var Syntax, Token, source, length, index, previous, token, value, esutils, utility$1, rangeOffset, addRange;
  esutils = utils;
  utility$1 = utility;
  Syntax = {
    NullableLiteral: "NullableLiteral",
    AllLiteral: "AllLiteral",
    NullLiteral: "NullLiteral",
    UndefinedLiteral: "UndefinedLiteral",
    VoidLiteral: "VoidLiteral",
    UnionType: "UnionType",
    ArrayType: "ArrayType",
    RecordType: "RecordType",
    FieldType: "FieldType",
    FunctionType: "FunctionType",
    ParameterType: "ParameterType",
    RestType: "RestType",
    NonNullableType: "NonNullableType",
    OptionalType: "OptionalType",
    NullableType: "NullableType",
    NameExpression: "NameExpression",
    TypeApplication: "TypeApplication",
    StringLiteralType: "StringLiteralType",
    NumericLiteralType: "NumericLiteralType",
    BooleanLiteralType: "BooleanLiteralType"
  };
  Token = {
    ILLEGAL: 0,
    DOT_LT: 1,
    REST: 2,
    LT: 3,
    GT: 4,
    LPAREN: 5,
    RPAREN: 6,
    LBRACE: 7,
    RBRACE: 8,
    LBRACK: 9,
    RBRACK: 10,
    COMMA: 11,
    COLON: 12,
    STAR: 13,
    PIPE: 14,
    QUESTION: 15,
    BANG: 16,
    EQUAL: 17,
    NAME: 18,
    STRING: 19,
    NUMBER: 20,
    EOF: 21
  };
  function isTypeName(ch2) {
    return "><(){}[],:*|?!=".indexOf(String.fromCharCode(ch2)) === -1 && !esutils.code.isWhiteSpace(ch2) && !esutils.code.isLineTerminator(ch2);
  }
  function Context(previous2, index2, token2, value2) {
    this._previous = previous2;
    this._index = index2;
    this._token = token2;
    this._value = value2;
  }
  Context.prototype.restore = function() {
    previous = this._previous;
    index = this._index;
    token = this._token;
    value = this._value;
  };
  Context.save = function() {
    return new Context(previous, index, token, value);
  };
  function maybeAddRange(node, range) {
    if (addRange) {
      node.range = [range[0] + rangeOffset, range[1] + rangeOffset];
    }
    return node;
  }
  function advance() {
    var ch2 = source.charAt(index);
    index += 1;
    return ch2;
  }
  function scanHexEscape(prefix) {
    var i, len, ch2, code2 = 0;
    len = prefix === "u" ? 4 : 2;
    for (i = 0; i < len; ++i) {
      if (index < length && esutils.code.isHexDigit(source.charCodeAt(index))) {
        ch2 = advance();
        code2 = code2 * 16 + "0123456789abcdef".indexOf(ch2.toLowerCase());
      } else {
        return "";
      }
    }
    return String.fromCharCode(code2);
  }
  function scanString() {
    var str2 = "", quote, ch2, code2, unescaped, restore;
    quote = source.charAt(index);
    ++index;
    while (index < length) {
      ch2 = advance();
      if (ch2 === quote) {
        quote = "";
        break;
      } else if (ch2 === "\\") {
        ch2 = advance();
        if (!esutils.code.isLineTerminator(ch2.charCodeAt(0))) {
          switch (ch2) {
            case "n":
              str2 += "\n";
              break;
            case "r":
              str2 += "\r";
              break;
            case "t":
              str2 += "	";
              break;
            case "u":
            case "x":
              restore = index;
              unescaped = scanHexEscape(ch2);
              if (unescaped) {
                str2 += unescaped;
              } else {
                index = restore;
                str2 += ch2;
              }
              break;
            case "b":
              str2 += "\b";
              break;
            case "f":
              str2 += "\f";
              break;
            case "v":
              str2 += "\v";
              break;
            default:
              if (esutils.code.isOctalDigit(ch2.charCodeAt(0))) {
                code2 = "01234567".indexOf(ch2);
                if (index < length && esutils.code.isOctalDigit(source.charCodeAt(index))) {
                  code2 = code2 * 8 + "01234567".indexOf(advance());
                  if ("0123".indexOf(ch2) >= 0 && index < length && esutils.code.isOctalDigit(source.charCodeAt(index))) {
                    code2 = code2 * 8 + "01234567".indexOf(advance());
                  }
                }
                str2 += String.fromCharCode(code2);
              } else {
                str2 += ch2;
              }
              break;
          }
        } else {
          if (ch2 === "\r" && source.charCodeAt(index) === 10) {
            ++index;
          }
        }
      } else if (esutils.code.isLineTerminator(ch2.charCodeAt(0))) {
        break;
      } else {
        str2 += ch2;
      }
    }
    if (quote !== "") {
      utility$1.throwError("unexpected quote");
    }
    value = str2;
    return Token.STRING;
  }
  function scanNumber() {
    var number, ch2;
    number = "";
    ch2 = source.charCodeAt(index);
    if (ch2 !== 46) {
      number = advance();
      ch2 = source.charCodeAt(index);
      if (number === "0") {
        if (ch2 === 120 || ch2 === 88) {
          number += advance();
          while (index < length) {
            ch2 = source.charCodeAt(index);
            if (!esutils.code.isHexDigit(ch2)) {
              break;
            }
            number += advance();
          }
          if (number.length <= 2) {
            utility$1.throwError("unexpected token");
          }
          if (index < length) {
            ch2 = source.charCodeAt(index);
            if (esutils.code.isIdentifierStartES5(ch2)) {
              utility$1.throwError("unexpected token");
            }
          }
          value = parseInt(number, 16);
          return Token.NUMBER;
        }
        if (esutils.code.isOctalDigit(ch2)) {
          number += advance();
          while (index < length) {
            ch2 = source.charCodeAt(index);
            if (!esutils.code.isOctalDigit(ch2)) {
              break;
            }
            number += advance();
          }
          if (index < length) {
            ch2 = source.charCodeAt(index);
            if (esutils.code.isIdentifierStartES5(ch2) || esutils.code.isDecimalDigit(ch2)) {
              utility$1.throwError("unexpected token");
            }
          }
          value = parseInt(number, 8);
          return Token.NUMBER;
        }
        if (esutils.code.isDecimalDigit(ch2)) {
          utility$1.throwError("unexpected token");
        }
      }
      while (index < length) {
        ch2 = source.charCodeAt(index);
        if (!esutils.code.isDecimalDigit(ch2)) {
          break;
        }
        number += advance();
      }
    }
    if (ch2 === 46) {
      number += advance();
      while (index < length) {
        ch2 = source.charCodeAt(index);
        if (!esutils.code.isDecimalDigit(ch2)) {
          break;
        }
        number += advance();
      }
    }
    if (ch2 === 101 || ch2 === 69) {
      number += advance();
      ch2 = source.charCodeAt(index);
      if (ch2 === 43 || ch2 === 45) {
        number += advance();
      }
      ch2 = source.charCodeAt(index);
      if (esutils.code.isDecimalDigit(ch2)) {
        number += advance();
        while (index < length) {
          ch2 = source.charCodeAt(index);
          if (!esutils.code.isDecimalDigit(ch2)) {
            break;
          }
          number += advance();
        }
      } else {
        utility$1.throwError("unexpected token");
      }
    }
    if (index < length) {
      ch2 = source.charCodeAt(index);
      if (esutils.code.isIdentifierStartES5(ch2)) {
        utility$1.throwError("unexpected token");
      }
    }
    value = parseFloat(number);
    return Token.NUMBER;
  }
  function scanTypeName() {
    var ch2, ch22;
    value = advance();
    while (index < length && isTypeName(source.charCodeAt(index))) {
      ch2 = source.charCodeAt(index);
      if (ch2 === 46) {
        if (index + 1 >= length) {
          return Token.ILLEGAL;
        }
        ch22 = source.charCodeAt(index + 1);
        if (ch22 === 60) {
          break;
        }
      }
      value += advance();
    }
    return Token.NAME;
  }
  function next() {
    var ch2;
    previous = index;
    while (index < length && esutils.code.isWhiteSpace(source.charCodeAt(index))) {
      advance();
    }
    if (index >= length) {
      token = Token.EOF;
      return token;
    }
    ch2 = source.charCodeAt(index);
    switch (ch2) {
      case 39:
      case 34:
        token = scanString();
        return token;
      case 58:
        advance();
        token = Token.COLON;
        return token;
      case 44:
        advance();
        token = Token.COMMA;
        return token;
      case 40:
        advance();
        token = Token.LPAREN;
        return token;
      case 41:
        advance();
        token = Token.RPAREN;
        return token;
      case 91:
        advance();
        token = Token.LBRACK;
        return token;
      case 93:
        advance();
        token = Token.RBRACK;
        return token;
      case 123:
        advance();
        token = Token.LBRACE;
        return token;
      case 125:
        advance();
        token = Token.RBRACE;
        return token;
      case 46:
        if (index + 1 < length) {
          ch2 = source.charCodeAt(index + 1);
          if (ch2 === 60) {
            advance();
            advance();
            token = Token.DOT_LT;
            return token;
          }
          if (ch2 === 46 && index + 2 < length && source.charCodeAt(index + 2) === 46) {
            advance();
            advance();
            advance();
            token = Token.REST;
            return token;
          }
          if (esutils.code.isDecimalDigit(ch2)) {
            token = scanNumber();
            return token;
          }
        }
        token = Token.ILLEGAL;
        return token;
      case 60:
        advance();
        token = Token.LT;
        return token;
      case 62:
        advance();
        token = Token.GT;
        return token;
      case 42:
        advance();
        token = Token.STAR;
        return token;
      case 124:
        advance();
        token = Token.PIPE;
        return token;
      case 63:
        advance();
        token = Token.QUESTION;
        return token;
      case 33:
        advance();
        token = Token.BANG;
        return token;
      case 61:
        advance();
        token = Token.EQUAL;
        return token;
      case 45:
        token = scanNumber();
        return token;
      default:
        if (esutils.code.isDecimalDigit(ch2)) {
          token = scanNumber();
          return token;
        }
        utility$1.assert(isTypeName(ch2));
        token = scanTypeName();
        return token;
    }
  }
  function consume(target, text) {
    utility$1.assert(token === target, text || "consumed token not matched");
    next();
  }
  function expect(target, message) {
    if (token !== target) {
      utility$1.throwError(message || "unexpected token");
    }
    next();
  }
  function parseUnionType() {
    var elements, startIndex = index - 1;
    consume(Token.LPAREN, "UnionType should start with (");
    elements = [];
    if (token !== Token.RPAREN) {
      while (true) {
        elements.push(parseTypeExpression());
        if (token === Token.RPAREN) {
          break;
        }
        expect(Token.PIPE);
      }
    }
    consume(Token.RPAREN, "UnionType should end with )");
    return maybeAddRange({
      type: Syntax.UnionType,
      elements
    }, [startIndex, previous]);
  }
  function parseArrayType() {
    var elements, startIndex = index - 1, restStartIndex;
    consume(Token.LBRACK, "ArrayType should start with [");
    elements = [];
    while (token !== Token.RBRACK) {
      if (token === Token.REST) {
        restStartIndex = index - 3;
        consume(Token.REST);
        elements.push(maybeAddRange({
          type: Syntax.RestType,
          expression: parseTypeExpression()
        }, [restStartIndex, previous]));
        break;
      } else {
        elements.push(parseTypeExpression());
      }
      if (token !== Token.RBRACK) {
        expect(Token.COMMA);
      }
    }
    expect(Token.RBRACK);
    return maybeAddRange({
      type: Syntax.ArrayType,
      elements
    }, [startIndex, previous]);
  }
  function parseFieldName() {
    var v = value;
    if (token === Token.NAME || token === Token.STRING) {
      next();
      return v;
    }
    if (token === Token.NUMBER) {
      consume(Token.NUMBER);
      return String(v);
    }
    utility$1.throwError("unexpected token");
  }
  function parseFieldType() {
    var key, rangeStart = previous;
    key = parseFieldName();
    if (token === Token.COLON) {
      consume(Token.COLON);
      return maybeAddRange({
        type: Syntax.FieldType,
        key,
        value: parseTypeExpression()
      }, [rangeStart, previous]);
    }
    return maybeAddRange({
      type: Syntax.FieldType,
      key,
      value: null
    }, [rangeStart, previous]);
  }
  function parseRecordType() {
    var fields, rangeStart = index - 1, rangeEnd;
    consume(Token.LBRACE, "RecordType should start with {");
    fields = [];
    if (token === Token.COMMA) {
      consume(Token.COMMA);
    } else {
      while (token !== Token.RBRACE) {
        fields.push(parseFieldType());
        if (token !== Token.RBRACE) {
          expect(Token.COMMA);
        }
      }
    }
    rangeEnd = index;
    expect(Token.RBRACE);
    return maybeAddRange({
      type: Syntax.RecordType,
      fields
    }, [rangeStart, rangeEnd]);
  }
  function parseNameExpression() {
    var name2 = value, rangeStart = index - name2.length;
    expect(Token.NAME);
    if (token === Token.COLON && (name2 === "module" || name2 === "external" || name2 === "event")) {
      consume(Token.COLON);
      name2 += ":" + value;
      expect(Token.NAME);
    }
    return maybeAddRange({
      type: Syntax.NameExpression,
      name: name2
    }, [rangeStart, previous]);
  }
  function parseTypeExpressionList() {
    var elements = [];
    elements.push(parseTop());
    while (token === Token.COMMA) {
      consume(Token.COMMA);
      elements.push(parseTop());
    }
    return elements;
  }
  function parseTypeName() {
    var expr, applications, startIndex = index - value.length;
    expr = parseNameExpression();
    if (token === Token.DOT_LT || token === Token.LT) {
      next();
      applications = parseTypeExpressionList();
      expect(Token.GT);
      return maybeAddRange({
        type: Syntax.TypeApplication,
        expression: expr,
        applications
      }, [startIndex, previous]);
    }
    return expr;
  }
  function parseResultType() {
    consume(Token.COLON, "ResultType should start with :");
    if (token === Token.NAME && value === "void") {
      consume(Token.NAME);
      return {
        type: Syntax.VoidLiteral
      };
    }
    return parseTypeExpression();
  }
  function parseParametersType() {
    var params = [], optionalSequence = false, expr, rest = false, startIndex, restStartIndex = index - 3, nameStartIndex;
    while (token !== Token.RPAREN) {
      if (token === Token.REST) {
        consume(Token.REST);
        rest = true;
      }
      startIndex = previous;
      expr = parseTypeExpression();
      if (expr.type === Syntax.NameExpression && token === Token.COLON) {
        nameStartIndex = previous - expr.name.length;
        consume(Token.COLON);
        expr = maybeAddRange({
          type: Syntax.ParameterType,
          name: expr.name,
          expression: parseTypeExpression()
        }, [nameStartIndex, previous]);
      }
      if (token === Token.EQUAL) {
        consume(Token.EQUAL);
        expr = maybeAddRange({
          type: Syntax.OptionalType,
          expression: expr
        }, [startIndex, previous]);
        optionalSequence = true;
      } else {
        if (optionalSequence) {
          utility$1.throwError("unexpected token");
        }
      }
      if (rest) {
        expr = maybeAddRange({
          type: Syntax.RestType,
          expression: expr
        }, [restStartIndex, previous]);
      }
      params.push(expr);
      if (token !== Token.RPAREN) {
        expect(Token.COMMA);
      }
    }
    return params;
  }
  function parseFunctionType() {
    var isNew, thisBinding, params, result, fnType, startIndex = index - value.length;
    utility$1.assert(token === Token.NAME && value === "function", "FunctionType should start with 'function'");
    consume(Token.NAME);
    expect(Token.LPAREN);
    isNew = false;
    params = [];
    thisBinding = null;
    if (token !== Token.RPAREN) {
      if (token === Token.NAME && (value === "this" || value === "new")) {
        isNew = value === "new";
        consume(Token.NAME);
        expect(Token.COLON);
        thisBinding = parseTypeName();
        if (token === Token.COMMA) {
          consume(Token.COMMA);
          params = parseParametersType();
        }
      } else {
        params = parseParametersType();
      }
    }
    expect(Token.RPAREN);
    result = null;
    if (token === Token.COLON) {
      result = parseResultType();
    }
    fnType = maybeAddRange({
      type: Syntax.FunctionType,
      params,
      result
    }, [startIndex, previous]);
    if (thisBinding) {
      fnType["this"] = thisBinding;
      if (isNew) {
        fnType["new"] = true;
      }
    }
    return fnType;
  }
  function parseBasicTypeExpression() {
    var context, startIndex;
    switch (token) {
      case Token.STAR:
        consume(Token.STAR);
        return maybeAddRange({
          type: Syntax.AllLiteral
        }, [previous - 1, previous]);
      case Token.LPAREN:
        return parseUnionType();
      case Token.LBRACK:
        return parseArrayType();
      case Token.LBRACE:
        return parseRecordType();
      case Token.NAME:
        startIndex = index - value.length;
        if (value === "null") {
          consume(Token.NAME);
          return maybeAddRange({
            type: Syntax.NullLiteral
          }, [startIndex, previous]);
        }
        if (value === "undefined") {
          consume(Token.NAME);
          return maybeAddRange({
            type: Syntax.UndefinedLiteral
          }, [startIndex, previous]);
        }
        if (value === "true" || value === "false") {
          consume(Token.NAME);
          return maybeAddRange({
            type: Syntax.BooleanLiteralType,
            value: value === "true"
          }, [startIndex, previous]);
        }
        context = Context.save();
        if (value === "function") {
          try {
            return parseFunctionType();
          } catch (e) {
            context.restore();
          }
        }
        return parseTypeName();
      case Token.STRING:
        next();
        return maybeAddRange({
          type: Syntax.StringLiteralType,
          value
        }, [previous - value.length - 2, previous]);
      case Token.NUMBER:
        next();
        return maybeAddRange({
          type: Syntax.NumericLiteralType,
          value
        }, [previous - String(value).length, previous]);
      default:
        utility$1.throwError("unexpected token");
    }
  }
  function parseTypeExpression() {
    var expr, rangeStart;
    if (token === Token.QUESTION) {
      rangeStart = index - 1;
      consume(Token.QUESTION);
      if (token === Token.COMMA || token === Token.EQUAL || token === Token.RBRACE || token === Token.RPAREN || token === Token.PIPE || token === Token.EOF || token === Token.RBRACK || token === Token.GT) {
        return maybeAddRange({
          type: Syntax.NullableLiteral
        }, [rangeStart, previous]);
      }
      return maybeAddRange({
        type: Syntax.NullableType,
        expression: parseBasicTypeExpression(),
        prefix: true
      }, [rangeStart, previous]);
    } else if (token === Token.BANG) {
      rangeStart = index - 1;
      consume(Token.BANG);
      return maybeAddRange({
        type: Syntax.NonNullableType,
        expression: parseBasicTypeExpression(),
        prefix: true
      }, [rangeStart, previous]);
    } else {
      rangeStart = previous;
    }
    expr = parseBasicTypeExpression();
    if (token === Token.BANG) {
      consume(Token.BANG);
      return maybeAddRange({
        type: Syntax.NonNullableType,
        expression: expr,
        prefix: false
      }, [rangeStart, previous]);
    }
    if (token === Token.QUESTION) {
      consume(Token.QUESTION);
      return maybeAddRange({
        type: Syntax.NullableType,
        expression: expr,
        prefix: false
      }, [rangeStart, previous]);
    }
    if (token === Token.LBRACK) {
      consume(Token.LBRACK);
      expect(Token.RBRACK, "expected an array-style type declaration (" + value + "[])");
      return maybeAddRange({
        type: Syntax.TypeApplication,
        expression: maybeAddRange({
          type: Syntax.NameExpression,
          name: "Array"
        }, [rangeStart, previous]),
        applications: [expr]
      }, [rangeStart, previous]);
    }
    return expr;
  }
  function parseTop() {
    var expr, elements;
    expr = parseTypeExpression();
    if (token !== Token.PIPE) {
      return expr;
    }
    elements = [expr];
    consume(Token.PIPE);
    while (true) {
      elements.push(parseTypeExpression());
      if (token !== Token.PIPE) {
        break;
      }
      consume(Token.PIPE);
    }
    return maybeAddRange({
      type: Syntax.UnionType,
      elements
    }, [0, index]);
  }
  function parseTopParamType() {
    var expr;
    if (token === Token.REST) {
      consume(Token.REST);
      return maybeAddRange({
        type: Syntax.RestType,
        expression: parseTop()
      }, [0, index]);
    }
    expr = parseTop();
    if (token === Token.EQUAL) {
      consume(Token.EQUAL);
      return maybeAddRange({
        type: Syntax.OptionalType,
        expression: expr
      }, [0, index]);
    }
    return expr;
  }
  function parseType(src, opt) {
    var expr;
    source = src;
    length = source.length;
    index = 0;
    previous = 0;
    addRange = opt && opt.range;
    rangeOffset = opt && opt.startIndex || 0;
    next();
    expr = parseTop();
    if (opt && opt.midstream) {
      return {
        expression: expr,
        index: previous
      };
    }
    if (token !== Token.EOF) {
      utility$1.throwError("not reach to EOF");
    }
    return expr;
  }
  function parseParamType(src, opt) {
    var expr;
    source = src;
    length = source.length;
    index = 0;
    previous = 0;
    addRange = opt && opt.range;
    rangeOffset = opt && opt.startIndex || 0;
    next();
    expr = parseTopParamType();
    if (opt && opt.midstream) {
      return {
        expression: expr,
        index: previous
      };
    }
    if (token !== Token.EOF) {
      utility$1.throwError("not reach to EOF");
    }
    return expr;
  }
  function stringifyImpl(node, compact, topLevel) {
    var result, i, iz;
    switch (node.type) {
      case Syntax.NullableLiteral:
        result = "?";
        break;
      case Syntax.AllLiteral:
        result = "*";
        break;
      case Syntax.NullLiteral:
        result = "null";
        break;
      case Syntax.UndefinedLiteral:
        result = "undefined";
        break;
      case Syntax.VoidLiteral:
        result = "void";
        break;
      case Syntax.UnionType:
        if (!topLevel) {
          result = "(";
        } else {
          result = "";
        }
        for (i = 0, iz = node.elements.length; i < iz; ++i) {
          result += stringifyImpl(node.elements[i], compact);
          if (i + 1 !== iz) {
            result += compact ? "|" : " | ";
          }
        }
        if (!topLevel) {
          result += ")";
        }
        break;
      case Syntax.ArrayType:
        result = "[";
        for (i = 0, iz = node.elements.length; i < iz; ++i) {
          result += stringifyImpl(node.elements[i], compact);
          if (i + 1 !== iz) {
            result += compact ? "," : ", ";
          }
        }
        result += "]";
        break;
      case Syntax.RecordType:
        result = "{";
        for (i = 0, iz = node.fields.length; i < iz; ++i) {
          result += stringifyImpl(node.fields[i], compact);
          if (i + 1 !== iz) {
            result += compact ? "," : ", ";
          }
        }
        result += "}";
        break;
      case Syntax.FieldType:
        if (node.value) {
          result = node.key + (compact ? ":" : ": ") + stringifyImpl(node.value, compact);
        } else {
          result = node.key;
        }
        break;
      case Syntax.FunctionType:
        result = compact ? "function(" : "function (";
        if (node["this"]) {
          if (node["new"]) {
            result += compact ? "new:" : "new: ";
          } else {
            result += compact ? "this:" : "this: ";
          }
          result += stringifyImpl(node["this"], compact);
          if (node.params.length !== 0) {
            result += compact ? "," : ", ";
          }
        }
        for (i = 0, iz = node.params.length; i < iz; ++i) {
          result += stringifyImpl(node.params[i], compact);
          if (i + 1 !== iz) {
            result += compact ? "," : ", ";
          }
        }
        result += ")";
        if (node.result) {
          result += (compact ? ":" : ": ") + stringifyImpl(node.result, compact);
        }
        break;
      case Syntax.ParameterType:
        result = node.name + (compact ? ":" : ": ") + stringifyImpl(node.expression, compact);
        break;
      case Syntax.RestType:
        result = "...";
        if (node.expression) {
          result += stringifyImpl(node.expression, compact);
        }
        break;
      case Syntax.NonNullableType:
        if (node.prefix) {
          result = "!" + stringifyImpl(node.expression, compact);
        } else {
          result = stringifyImpl(node.expression, compact) + "!";
        }
        break;
      case Syntax.OptionalType:
        result = stringifyImpl(node.expression, compact) + "=";
        break;
      case Syntax.NullableType:
        if (node.prefix) {
          result = "?" + stringifyImpl(node.expression, compact);
        } else {
          result = stringifyImpl(node.expression, compact) + "?";
        }
        break;
      case Syntax.NameExpression:
        result = node.name;
        break;
      case Syntax.TypeApplication:
        result = stringifyImpl(node.expression, compact) + ".<";
        for (i = 0, iz = node.applications.length; i < iz; ++i) {
          result += stringifyImpl(node.applications[i], compact);
          if (i + 1 !== iz) {
            result += compact ? "," : ", ";
          }
        }
        result += ">";
        break;
      case Syntax.StringLiteralType:
        result = '"' + node.value + '"';
        break;
      case Syntax.NumericLiteralType:
        result = String(node.value);
        break;
      case Syntax.BooleanLiteralType:
        result = String(node.value);
        break;
      default:
        utility$1.throwError("Unknown type " + node.type);
    }
    return result;
  }
  function stringify(node, options) {
    if (options == null) {
      options = {};
    }
    return stringifyImpl(node, options.compact, options.topLevel);
  }
  typed.parseType = parseType;
  typed.parseParamType = parseParamType;
  typed.stringify = stringify;
  typed.Syntax = Syntax;
})();
(function(exports) {
  (function() {
    var typed$1, utility$1, jsdoc, esutils, hasOwnProperty2;
    esutils = utils;
    typed$1 = typed;
    utility$1 = utility;
    function sliceSource(source, index, last) {
      return source.slice(index, last);
    }
    hasOwnProperty2 = function() {
      var func = Object.prototype.hasOwnProperty;
      return function hasOwnProperty3(obj, name2) {
        return func.call(obj, name2);
      };
    }();
    function shallowCopy(obj) {
      var ret = {}, key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          ret[key] = obj[key];
        }
      }
      return ret;
    }
    function isASCIIAlphanumeric(ch2) {
      return ch2 >= 97 && ch2 <= 122 || ch2 >= 65 && ch2 <= 90 || ch2 >= 48 && ch2 <= 57;
    }
    function isParamTitle(title) {
      return title === "param" || title === "argument" || title === "arg";
    }
    function isReturnTitle(title) {
      return title === "return" || title === "returns";
    }
    function isProperty(title) {
      return title === "property" || title === "prop";
    }
    function isNameParameterRequired(title) {
      return isParamTitle(title) || isProperty(title) || title === "alias" || title === "this" || title === "mixes" || title === "requires";
    }
    function isAllowedName(title) {
      return isNameParameterRequired(title) || title === "const" || title === "constant";
    }
    function isAllowedNested(title) {
      return isProperty(title) || isParamTitle(title);
    }
    function isAllowedOptional(title) {
      return isProperty(title) || isParamTitle(title);
    }
    function isTypeParameterRequired(title) {
      return isParamTitle(title) || isReturnTitle(title) || title === "define" || title === "enum" || title === "implements" || title === "this" || title === "type" || title === "typedef" || isProperty(title);
    }
    function isAllowedType(title) {
      return isTypeParameterRequired(title) || title === "throws" || title === "const" || title === "constant" || title === "namespace" || title === "member" || title === "var" || title === "module" || title === "constructor" || title === "class" || title === "extends" || title === "augments" || title === "public" || title === "private" || title === "protected";
    }
    var WHITESPACE = "[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]";
    var STAR_MATCHER = "(" + WHITESPACE + "*(?:\\*" + WHITESPACE + "?)?)(.+|[\r\n\u2028\u2029])";
    function unwrapComment(doc) {
      return doc.replace(/^\/\*\*?/, "").replace(/\*\/$/, "").replace(new RegExp(STAR_MATCHER, "g"), "$2").replace(/\s*$/, "");
    }
    function convertUnwrappedCommentIndex(originalSource, unwrappedIndex) {
      var replacedSource = originalSource.replace(/^\/\*\*?/, "");
      var numSkippedChars = 0;
      var matcher = new RegExp(STAR_MATCHER, "g");
      var match;
      while (match = matcher.exec(replacedSource)) {
        numSkippedChars += match[1].length;
        if (match.index + match[0].length > unwrappedIndex + numSkippedChars) {
          return unwrappedIndex + numSkippedChars + originalSource.length - replacedSource.length;
        }
      }
      return originalSource.replace(/\*\/$/, "").replace(/\s*$/, "").length;
    }
    (function(exports2) {
      var Rules, index, lineNumber, length, source, originalSource, recoverable, sloppy, strict;
      function advance() {
        var ch2 = source.charCodeAt(index);
        index += 1;
        if (esutils.code.isLineTerminator(ch2) && !(ch2 === 13 && source.charCodeAt(index) === 10)) {
          lineNumber += 1;
        }
        return String.fromCharCode(ch2);
      }
      function scanTitle() {
        var title = "";
        advance();
        while (index < length && isASCIIAlphanumeric(source.charCodeAt(index))) {
          title += advance();
        }
        return title;
      }
      function seekContent() {
        var ch2, waiting, last = index;
        waiting = false;
        while (last < length) {
          ch2 = source.charCodeAt(last);
          if (esutils.code.isLineTerminator(ch2) && !(ch2 === 13 && source.charCodeAt(last + 1) === 10)) {
            waiting = true;
          } else if (waiting) {
            if (ch2 === 64) {
              break;
            }
            if (!esutils.code.isWhiteSpace(ch2)) {
              waiting = false;
            }
          }
          last += 1;
        }
        return last;
      }
      function parseType(title, last, addRange) {
        var ch2, brace, type, startIndex, direct = false;
        while (index < last) {
          ch2 = source.charCodeAt(index);
          if (esutils.code.isWhiteSpace(ch2)) {
            advance();
          } else if (ch2 === 123) {
            advance();
            break;
          } else {
            direct = true;
            break;
          }
        }
        if (direct) {
          return null;
        }
        brace = 1;
        type = "";
        while (index < last) {
          ch2 = source.charCodeAt(index);
          if (esutils.code.isLineTerminator(ch2)) {
            advance();
          } else {
            if (ch2 === 125) {
              brace -= 1;
              if (brace === 0) {
                advance();
                break;
              }
            } else if (ch2 === 123) {
              brace += 1;
            }
            if (type === "") {
              startIndex = index;
            }
            type += advance();
          }
        }
        if (brace !== 0) {
          return utility$1.throwError("Braces are not balanced");
        }
        if (isAllowedOptional(title)) {
          return typed$1.parseParamType(type, { startIndex: convertIndex(startIndex), range: addRange });
        }
        return typed$1.parseType(type, { startIndex: convertIndex(startIndex), range: addRange });
      }
      function scanIdentifier(last) {
        var identifier;
        if (!esutils.code.isIdentifierStartES5(source.charCodeAt(index)) && !source[index].match(/[0-9]/)) {
          return null;
        }
        identifier = advance();
        while (index < last && esutils.code.isIdentifierPartES5(source.charCodeAt(index))) {
          identifier += advance();
        }
        return identifier;
      }
      function skipWhiteSpace(last) {
        while (index < last && (esutils.code.isWhiteSpace(source.charCodeAt(index)) || esutils.code.isLineTerminator(source.charCodeAt(index)))) {
          advance();
        }
      }
      function parseName(last, allowBrackets, allowNestedParams) {
        var name2 = "", useBrackets, insideString;
        skipWhiteSpace(last);
        if (index >= last) {
          return null;
        }
        if (source.charCodeAt(index) === 91) {
          if (allowBrackets) {
            useBrackets = true;
            name2 = advance();
          } else {
            return null;
          }
        }
        name2 += scanIdentifier(last);
        if (allowNestedParams) {
          if (source.charCodeAt(index) === 58 && (name2 === "module" || name2 === "external" || name2 === "event")) {
            name2 += advance();
            name2 += scanIdentifier(last);
          }
          if (source.charCodeAt(index) === 91 && source.charCodeAt(index + 1) === 93) {
            name2 += advance();
            name2 += advance();
          }
          while (source.charCodeAt(index) === 46 || source.charCodeAt(index) === 47 || source.charCodeAt(index) === 35 || source.charCodeAt(index) === 45 || source.charCodeAt(index) === 126) {
            name2 += advance();
            name2 += scanIdentifier(last);
          }
        }
        if (useBrackets) {
          skipWhiteSpace(last);
          if (source.charCodeAt(index) === 61) {
            name2 += advance();
            skipWhiteSpace(last);
            var ch2;
            var bracketDepth = 1;
            while (index < last) {
              ch2 = source.charCodeAt(index);
              if (esutils.code.isWhiteSpace(ch2)) {
                if (!insideString) {
                  skipWhiteSpace(last);
                  ch2 = source.charCodeAt(index);
                }
              }
              if (ch2 === 39) {
                if (!insideString) {
                  insideString = "'";
                } else {
                  if (insideString === "'") {
                    insideString = "";
                  }
                }
              }
              if (ch2 === 34) {
                if (!insideString) {
                  insideString = '"';
                } else {
                  if (insideString === '"') {
                    insideString = "";
                  }
                }
              }
              if (ch2 === 91) {
                bracketDepth++;
              } else if (ch2 === 93 && --bracketDepth === 0) {
                break;
              }
              name2 += advance();
            }
          }
          skipWhiteSpace(last);
          if (index >= last || source.charCodeAt(index) !== 93) {
            return null;
          }
          name2 += advance();
        }
        return name2;
      }
      function skipToTag() {
        while (index < length && source.charCodeAt(index) !== 64) {
          advance();
        }
        if (index >= length) {
          return false;
        }
        utility$1.assert(source.charCodeAt(index) === 64);
        return true;
      }
      function convertIndex(rangeIndex) {
        if (source === originalSource) {
          return rangeIndex;
        }
        return convertUnwrappedCommentIndex(originalSource, rangeIndex);
      }
      function TagParser(options, title) {
        this._options = options;
        this._title = title.toLowerCase();
        this._tag = {
          title,
          description: null
        };
        if (this._options.lineNumbers) {
          this._tag.lineNumber = lineNumber;
        }
        this._first = index - title.length - 1;
        this._last = 0;
        this._extra = {};
      }
      TagParser.prototype.addError = function addError(errorText) {
        var args = Array.prototype.slice.call(arguments, 1), msg = errorText.replace(
          /%(\d)/g,
          function(whole, index2) {
            utility$1.assert(index2 < args.length, "Message reference must be in range");
            return args[index2];
          }
        );
        if (!this._tag.errors) {
          this._tag.errors = [];
        }
        if (strict) {
          utility$1.throwError(msg);
        }
        this._tag.errors.push(msg);
        return recoverable;
      };
      TagParser.prototype.parseType = function() {
        if (isTypeParameterRequired(this._title)) {
          try {
            this._tag.type = parseType(this._title, this._last, this._options.range);
            if (!this._tag.type) {
              if (!isParamTitle(this._title) && !isReturnTitle(this._title)) {
                if (!this.addError("Missing or invalid tag type")) {
                  return false;
                }
              }
            }
          } catch (error) {
            this._tag.type = null;
            if (!this.addError(error.message)) {
              return false;
            }
          }
        } else if (isAllowedType(this._title)) {
          try {
            this._tag.type = parseType(this._title, this._last, this._options.range);
          } catch (e) {
          }
        }
        return true;
      };
      TagParser.prototype._parseNamePath = function(optional) {
        var name2;
        name2 = parseName(this._last, sloppy && isAllowedOptional(this._title), true);
        if (!name2) {
          if (!optional) {
            if (!this.addError("Missing or invalid tag name")) {
              return false;
            }
          }
        }
        this._tag.name = name2;
        return true;
      };
      TagParser.prototype.parseNamePath = function() {
        return this._parseNamePath(false);
      };
      TagParser.prototype.parseNamePathOptional = function() {
        return this._parseNamePath(true);
      };
      TagParser.prototype.parseName = function() {
        var assign, name2;
        if (isAllowedName(this._title)) {
          this._tag.name = parseName(this._last, sloppy && isAllowedOptional(this._title), isAllowedNested(this._title));
          if (!this._tag.name) {
            if (!isNameParameterRequired(this._title)) {
              return true;
            }
            if (isParamTitle(this._title) && this._tag.type && this._tag.type.name) {
              this._extra.name = this._tag.type;
              this._tag.name = this._tag.type.name;
              this._tag.type = null;
            } else {
              if (!this.addError("Missing or invalid tag name")) {
                return false;
              }
            }
          } else {
            name2 = this._tag.name;
            if (name2.charAt(0) === "[" && name2.charAt(name2.length - 1) === "]") {
              assign = name2.substring(1, name2.length - 1).split("=");
              if (assign.length > 1) {
                this._tag["default"] = assign.slice(1).join("=");
              }
              this._tag.name = assign[0];
              if (this._tag.type && this._tag.type.type !== "OptionalType") {
                this._tag.type = {
                  type: "OptionalType",
                  expression: this._tag.type
                };
              }
            }
          }
        }
        return true;
      };
      TagParser.prototype.parseDescription = function parseDescription() {
        var description2 = sliceSource(source, index, this._last).trim();
        if (description2) {
          if (/^-\s+/.test(description2)) {
            description2 = description2.substring(2);
          }
          this._tag.description = description2;
        }
        return true;
      };
      TagParser.prototype.parseCaption = function parseDescription() {
        var description2 = sliceSource(source, index, this._last).trim();
        var captionStartTag = "<caption>";
        var captionEndTag = "</caption>";
        var captionStart = description2.indexOf(captionStartTag);
        var captionEnd = description2.indexOf(captionEndTag);
        if (captionStart >= 0 && captionEnd >= 0) {
          this._tag.caption = description2.substring(
            captionStart + captionStartTag.length,
            captionEnd
          ).trim();
          this._tag.description = description2.substring(captionEnd + captionEndTag.length).trim();
        } else {
          this._tag.description = description2;
        }
        return true;
      };
      TagParser.prototype.parseKind = function parseKind() {
        var kind, kinds;
        kinds = {
          "class": true,
          "constant": true,
          "event": true,
          "external": true,
          "file": true,
          "function": true,
          "member": true,
          "mixin": true,
          "module": true,
          "namespace": true,
          "typedef": true
        };
        kind = sliceSource(source, index, this._last).trim();
        this._tag.kind = kind;
        if (!hasOwnProperty2(kinds, kind)) {
          if (!this.addError("Invalid kind name '%0'", kind)) {
            return false;
          }
        }
        return true;
      };
      TagParser.prototype.parseAccess = function parseAccess() {
        var access;
        access = sliceSource(source, index, this._last).trim();
        this._tag.access = access;
        if (access !== "private" && access !== "protected" && access !== "public") {
          if (!this.addError("Invalid access name '%0'", access)) {
            return false;
          }
        }
        return true;
      };
      TagParser.prototype.parseThis = function parseThis() {
        var value = sliceSource(source, index, this._last).trim();
        if (value && value.charAt(0) === "{") {
          var gotType = this.parseType();
          if (gotType && this._tag.type.type === "NameExpression" || this._tag.type.type === "UnionType") {
            this._tag.name = this._tag.type.name;
            return true;
          } else {
            return this.addError("Invalid name for this");
          }
        } else {
          return this.parseNamePath();
        }
      };
      TagParser.prototype.parseVariation = function parseVariation() {
        var variation, text;
        text = sliceSource(source, index, this._last).trim();
        variation = parseFloat(text, 10);
        this._tag.variation = variation;
        if (isNaN(variation)) {
          if (!this.addError("Invalid variation '%0'", text)) {
            return false;
          }
        }
        return true;
      };
      TagParser.prototype.ensureEnd = function() {
        var shouldBeEmpty = sliceSource(source, index, this._last).trim();
        if (shouldBeEmpty) {
          if (!this.addError("Unknown content '%0'", shouldBeEmpty)) {
            return false;
          }
        }
        return true;
      };
      TagParser.prototype.epilogue = function epilogue() {
        var description2;
        description2 = this._tag.description;
        if (isAllowedOptional(this._title) && !this._tag.type && description2 && description2.charAt(0) === "[") {
          this._tag.type = this._extra.name;
          if (!this._tag.name) {
            this._tag.name = void 0;
          }
          if (!sloppy) {
            if (!this.addError("Missing or invalid tag name")) {
              return false;
            }
          }
        }
        return true;
      };
      Rules = {
        "access": ["parseAccess"],
        "alias": ["parseNamePath", "ensureEnd"],
        "augments": ["parseType", "parseNamePathOptional", "ensureEnd"],
        "constructor": ["parseType", "parseNamePathOptional", "ensureEnd"],
        "class": ["parseType", "parseNamePathOptional", "ensureEnd"],
        "extends": ["parseType", "parseNamePathOptional", "ensureEnd"],
        "example": ["parseCaption"],
        "deprecated": ["parseDescription"],
        "global": ["ensureEnd"],
        "inner": ["ensureEnd"],
        "instance": ["ensureEnd"],
        "kind": ["parseKind"],
        "mixes": ["parseNamePath", "ensureEnd"],
        "mixin": ["parseNamePathOptional", "ensureEnd"],
        "member": ["parseType", "parseNamePathOptional", "ensureEnd"],
        "method": ["parseNamePathOptional", "ensureEnd"],
        "module": ["parseType", "parseNamePathOptional", "ensureEnd"],
        "func": ["parseNamePathOptional", "ensureEnd"],
        "function": ["parseNamePathOptional", "ensureEnd"],
        "var": ["parseType", "parseNamePathOptional", "ensureEnd"],
        "name": ["parseNamePath", "ensureEnd"],
        "namespace": ["parseType", "parseNamePathOptional", "ensureEnd"],
        "private": ["parseType", "parseDescription"],
        "protected": ["parseType", "parseDescription"],
        "public": ["parseType", "parseDescription"],
        "readonly": ["ensureEnd"],
        "requires": ["parseNamePath", "ensureEnd"],
        "since": ["parseDescription"],
        "static": ["ensureEnd"],
        "summary": ["parseDescription"],
        "this": ["parseThis", "ensureEnd"],
        "todo": ["parseDescription"],
        "typedef": ["parseType", "parseNamePathOptional"],
        "variation": ["parseVariation"],
        "version": ["parseDescription"]
      };
      TagParser.prototype.parse = function parse3() {
        var i, iz, sequences, method;
        if (!this._title) {
          if (!this.addError("Missing or invalid title")) {
            return null;
          }
        }
        this._last = seekContent(this._title);
        if (this._options.range) {
          this._tag.range = [this._first, source.slice(0, this._last).replace(/\s*$/, "").length].map(convertIndex);
        }
        if (hasOwnProperty2(Rules, this._title)) {
          sequences = Rules[this._title];
        } else {
          sequences = ["parseType", "parseName", "parseDescription", "epilogue"];
        }
        for (i = 0, iz = sequences.length; i < iz; ++i) {
          method = sequences[i];
          if (!this[method]()) {
            return null;
          }
        }
        return this._tag;
      };
      function parseTag(options) {
        var title, parser, tag;
        if (!skipToTag()) {
          return null;
        }
        title = scanTitle();
        parser = new TagParser(options, title);
        tag = parser.parse();
        while (index < parser._last) {
          advance();
        }
        return tag;
      }
      function scanJSDocDescription(preserveWhitespace) {
        var description2 = "", ch2, atAllowed;
        atAllowed = true;
        while (index < length) {
          ch2 = source.charCodeAt(index);
          if (atAllowed && ch2 === 64) {
            break;
          }
          if (esutils.code.isLineTerminator(ch2)) {
            atAllowed = true;
          } else if (atAllowed && !esutils.code.isWhiteSpace(ch2)) {
            atAllowed = false;
          }
          description2 += advance();
        }
        return preserveWhitespace ? description2 : description2.trim();
      }
      function parse2(comment, options) {
        var tags = [], tag, description2, interestingTags, i, iz;
        if (options === void 0) {
          options = {};
        }
        if (typeof options.unwrap === "boolean" && options.unwrap) {
          source = unwrapComment(comment);
        } else {
          source = comment;
        }
        originalSource = comment;
        if (options.tags) {
          if (Array.isArray(options.tags)) {
            interestingTags = {};
            for (i = 0, iz = options.tags.length; i < iz; i++) {
              if (typeof options.tags[i] === "string") {
                interestingTags[options.tags[i]] = true;
              } else {
                utility$1.throwError('Invalid "tags" parameter: ' + options.tags);
              }
            }
          } else {
            utility$1.throwError('Invalid "tags" parameter: ' + options.tags);
          }
        }
        length = source.length;
        index = 0;
        lineNumber = 0;
        recoverable = options.recoverable;
        sloppy = options.sloppy;
        strict = options.strict;
        description2 = scanJSDocDescription(options.preserveWhitespace);
        while (true) {
          tag = parseTag(options);
          if (!tag) {
            break;
          }
          if (!interestingTags || interestingTags.hasOwnProperty(tag.title)) {
            tags.push(tag);
          }
        }
        return {
          description: description2,
          tags
        };
      }
      exports2.parse = parse2;
    })(jsdoc = {});
    exports.version = utility$1.VERSION;
    exports.parse = jsdoc.parse;
    exports.parseType = typed$1.parseType;
    exports.parseParamType = typed$1.parseParamType;
    exports.unwrapComment = unwrapComment;
    exports.Syntax = shallowCopy(typed$1.Syntax);
    exports.Error = utility$1.DoctrineError;
    exports.type = {
      Syntax: exports.Syntax,
      parseType: typed$1.parseType,
      parseParamType: typed$1.parseParamType,
      stringify: typed$1.stringify
    };
  })();
})(doctrine);
var convertSig = (type) => {
  switch (type.type) {
    case "function":
      return { name: "function" };
    case "object":
      let values = {};
      return type.signature.properties.forEach((prop) => {
        values[prop.key] = convert(prop.value);
      }), { name: "object", value: values };
    default:
      throw new Error(`Unknown: ${type}`);
  }
}, convert = (type) => {
  let { name: name2, raw } = type, base = {};
  switch (typeof raw < "u" && (base.raw = raw), type.name) {
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...base, name: name2 };
    case "Array":
      return { ...base, name: "array", value: type.elements.map(convert) };
    case "signature":
      return { ...base, ...convertSig(type) };
    case "union":
    case "intersection":
      return { ...base, name: name2, value: type.elements.map(convert) };
    default:
      return { ...base, name: "other", value: name2 };
  }
};
var isLiteral = (type) => type.name === "literal", toEnumOption = (element) => element.value.replace(/['|"]/g, ""), convertSig2 = (type) => {
  switch (type.type) {
    case "function":
      return { name: "function" };
    case "object":
      let values = {};
      return type.signature.properties.forEach((prop) => {
        values[prop.key] = convert2(prop.value);
      }), { name: "object", value: values };
    default:
      throw new Error(`Unknown: ${type}`);
  }
}, convert2 = (type) => {
  let { name: name2, raw } = type, base = {};
  switch (typeof raw < "u" && (base.raw = raw), type.name) {
    case "literal":
      return { ...base, name: "other", value: type.value };
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...base, name: name2 };
    case "Array":
      return { ...base, name: "array", value: type.elements.map(convert2) };
    case "signature":
      return { ...base, ...convertSig2(type) };
    case "union":
      return type.elements.every(isLiteral) ? { ...base, name: "enum", value: type.elements.map(toEnumOption) } : { ...base, name: name2, value: type.elements.map(convert2) };
    case "intersection":
      return { ...base, name: name2, value: type.elements.map(convert2) };
    default:
      return { ...base, name: "other", value: name2 };
  }
};
var QUOTE_REGEX = /^['"]|['"]$/g, trimQuotes = (str2) => str2.replace(QUOTE_REGEX, ""), includesQuotes = (str2) => QUOTE_REGEX.test(str2);
var SIGNATURE_REGEXP = /^\(.*\) => /, convert3 = (type) => {
  let { name: name2, raw, computed, value } = type, base = {};
  switch (typeof raw < "u" && (base.raw = raw), name2) {
    case "enum": {
      let values2 = computed ? value : value.map((v) => {
        let trimmedValue = trimQuotes(v.value);
        return includesQuotes(v.value) || Number.isNaN(Number(trimmedValue)) ? trimmedValue : Number(trimmedValue);
      });
      return { ...base, name: name2, value: values2 };
    }
    case "string":
    case "number":
    case "symbol":
      return { ...base, name: name2 };
    case "func":
      return { ...base, name: "function" };
    case "bool":
    case "boolean":
      return { ...base, name: "boolean" };
    case "arrayOf":
    case "array":
      return { ...base, name: "array", value: value && convert3(value) };
    case "object":
      return { ...base, name: name2 };
    case "objectOf":
      return { ...base, name: name2, value: convert3(value) };
    case "shape":
    case "exact":
      let values = mapValues_1(value, (field) => convert3(field));
      return { ...base, name: "object", value: values };
    case "union":
      return { ...base, name: "union", value: value.map((v) => convert3(v)) };
    case "instanceOf":
    case "element":
    case "elementType":
    default: {
      if ((name2 == null ? void 0 : name2.indexOf("|")) > 0)
        try {
          let literalValues = name2.split("|").map((v) => JSON.parse(v));
          return { ...base, name: "enum", value: literalValues };
        } catch {
        }
      let otherVal = value ? `${name2}(${value})` : name2, otherName = SIGNATURE_REGEXP.test(name2) ? "function" : "other";
      return { ...base, name: otherName, value: otherVal };
    }
  }
};
var convert4 = (docgenInfo) => {
  let { type, tsType, flowType } = docgenInfo;
  return type != null ? convert3(type) : tsType != null ? convert(tsType) : flowType != null ? convert2(flowType) : null;
};
var TypeSystem = ((TypeSystem2) => (TypeSystem2.JAVASCRIPT = "JavaScript", TypeSystem2.FLOW = "Flow", TypeSystem2.TYPESCRIPT = "TypeScript", TypeSystem2.UNKNOWN = "Unknown", TypeSystem2))(TypeSystem || {});
var BLACKLIST = ["null", "undefined"];
function isDefaultValueBlacklisted(value) {
  return BLACKLIST.some((x) => x === value);
}
var str = (obj) => {
  if (!obj)
    return "";
  if (typeof obj == "string")
    return obj;
  throw new Error(`Description: expected string, got: ${JSON.stringify(obj)}`);
};
function hasDocgen(component) {
  return !!component.__docgenInfo;
}
function isValidDocgenSection(docgenSection) {
  return docgenSection != null && Object.keys(docgenSection).length > 0;
}
function getDocgenSection(component, section) {
  return hasDocgen(component) ? component.__docgenInfo[section] : null;
}
function getDocgenDescription(component) {
  return hasDocgen(component) && str(component.__docgenInfo.description);
}
function containsJsDoc(value) {
  return value != null && value.includes("@");
}
function parse(content, tags) {
  let ast2;
  try {
    ast2 = doctrine.parse(content, { tags, sloppy: true });
  } catch (e) {
    throw console.error(e), new Error("Cannot parse JSDoc tags.");
  }
  return ast2;
}
var DEFAULT_OPTIONS = { tags: ["param", "arg", "argument", "returns", "ignore"] }, parseJsDoc = (value, options = DEFAULT_OPTIONS) => {
  if (!containsJsDoc(value))
    return { includesJsDoc: false, ignore: false };
  let jsDocAst = parse(value, options.tags), extractedTags = extractJsDocTags(jsDocAst);
  return extractedTags.ignore ? { includesJsDoc: true, ignore: true } : { includesJsDoc: true, ignore: false, description: jsDocAst.description, extractedTags };
};
function extractJsDocTags(ast2) {
  let extractedTags = { params: null, returns: null, ignore: false };
  for (let i = 0; i < ast2.tags.length; i += 1) {
    let tag = ast2.tags[i];
    if (tag.title === "ignore") {
      extractedTags.ignore = true;
      break;
    } else
      switch (tag.title) {
        case "param":
        case "arg":
        case "argument": {
          let paramTag = extractParam(tag);
          paramTag != null && (extractedTags.params == null && (extractedTags.params = []), extractedTags.params.push(paramTag));
          break;
        }
        case "returns": {
          let returnsTag = extractReturns(tag);
          returnsTag != null && (extractedTags.returns = returnsTag);
          break;
        }
      }
  }
  return extractedTags;
}
function extractParam(tag) {
  let paramName = tag.name;
  return paramName != null && paramName !== "null-null" ? { name: tag.name, type: tag.type, description: tag.description, getPrettyName: () => paramName.includes("null") ? paramName.replace("-null", "").replace(".null", "") : tag.name, getTypeName: () => tag.type != null ? extractTypeName(tag.type) : null } : null;
}
function extractReturns(tag) {
  return tag.type != null ? { type: tag.type, description: tag.description, getTypeName: () => extractTypeName(tag.type) } : null;
}
function extractTypeName(type) {
  return type.type === "NameExpression" ? type.name : type.type === "RecordType" ? `({${type.fields.map((field) => {
    if (field.value != null) {
      let valueTypeName = extractTypeName(field.value);
      return `${field.key}: ${valueTypeName}`;
    }
    return field.key;
  }).join(", ")}})` : type.type === "UnionType" ? `(${type.elements.map(extractTypeName).join("|")})` : type.type === "ArrayType" ? "[]" : type.type === "TypeApplication" && type.expression != null && type.expression.name === "Array" ? `${extractTypeName(type.applications[0])}[]` : type.type === "NullableType" || type.type === "NonNullableType" || type.type === "OptionalType" ? extractTypeName(type.expression) : type.type === "AllLiteral" ? "any" : null;
}
function isTooLongForTypeSummary(value) {
  return value.length > 90;
}
function isTooLongForDefaultValueSummary(value) {
  return value.length > 50;
}
function createSummaryValue(summary, detail) {
  return summary === detail ? { summary } : { summary, detail };
}
function generateUnionElement({ name: name2, value, elements, raw }) {
  return value != null ? value : elements != null ? elements.map(generateUnionElement).join(" | ") : raw != null ? raw : name2;
}
function generateUnion({ name: name2, raw, elements }) {
  return elements != null ? createSummaryValue(elements.map(generateUnionElement).join(" | ")) : raw != null ? createSummaryValue(raw.replace(/^\|\s*/, "")) : createSummaryValue(name2);
}
function generateFuncSignature({ type, raw }) {
  return raw != null ? createSummaryValue(raw) : createSummaryValue(type);
}
function generateObjectSignature({ type, raw }) {
  return raw != null ? isTooLongForTypeSummary(raw) ? createSummaryValue(type, raw) : createSummaryValue(raw) : createSummaryValue(type);
}
function generateSignature(flowType) {
  let { type } = flowType;
  return type === "object" ? generateObjectSignature(flowType) : generateFuncSignature(flowType);
}
function generateDefault({ name: name2, raw }) {
  return raw != null ? isTooLongForTypeSummary(raw) ? createSummaryValue(name2, raw) : createSummaryValue(raw) : createSummaryValue(name2);
}
function createType(type) {
  if (type == null)
    return null;
  switch (type.name) {
    case "union":
      return generateUnion(type);
    case "signature":
      return generateSignature(type);
    default:
      return generateDefault(type);
  }
}
function createDefaultValue(defaultValue, type) {
  if (defaultValue != null) {
    let { value } = defaultValue;
    if (!isDefaultValueBlacklisted(value))
      return isTooLongForDefaultValueSummary(value) ? createSummaryValue(type.name, value) : createSummaryValue(value);
  }
  return null;
}
var createFlowPropDef = (propName, docgenInfo) => {
  let { flowType, description: description2, required, defaultValue } = docgenInfo;
  return { name: propName, type: createType(flowType), required, description: description2, defaultValue: createDefaultValue(defaultValue, flowType) };
};
function createType2({ tsType, required }) {
  return tsType == null ? null : required ? createSummaryValue(tsType.name) : createSummaryValue(tsType.name.replace(" | undefined", ""));
}
function createDefaultValue2({ defaultValue }) {
  if (defaultValue != null) {
    let { value } = defaultValue;
    if (!isDefaultValueBlacklisted(value))
      return createSummaryValue(value);
  }
  return null;
}
var createTsPropDef = (propName, docgenInfo) => {
  let { description: description2, required } = docgenInfo;
  return { name: propName, type: createType2(docgenInfo), required, description: description2, defaultValue: createDefaultValue2(docgenInfo) };
};
function createType3(type) {
  return type != null ? createSummaryValue(type.name) : null;
}
function isReactDocgenTypescript(defaultValue) {
  let { computed, func } = defaultValue;
  return typeof computed > "u" && typeof func > "u";
}
function isStringValued(type) {
  return type ? type.name === "string" ? true : type.name === "enum" ? Array.isArray(type.value) && type.value.every(({ value: tv }) => typeof tv == "string" && tv[0] === '"' && tv[tv.length - 1] === '"') : false : false;
}
function createDefaultValue3(defaultValue, type) {
  if (defaultValue != null) {
    let { value } = defaultValue;
    if (!isDefaultValueBlacklisted(value))
      return isReactDocgenTypescript(defaultValue) && isStringValued(type) ? createSummaryValue(JSON.stringify(value)) : createSummaryValue(value);
  }
  return null;
}
function createBasicPropDef(name2, type, docgenInfo) {
  let { description: description2, required, defaultValue } = docgenInfo;
  return { name: name2, type: createType3(type), required, description: description2, defaultValue: createDefaultValue3(defaultValue, type) };
}
function applyJsDocResult(propDef, jsDocParsingResult) {
  if (jsDocParsingResult.includesJsDoc) {
    let { description: description2, extractedTags } = jsDocParsingResult;
    description2 != null && (propDef.description = jsDocParsingResult.description);
    let hasParams = extractedTags.params != null, hasReturns = extractedTags.returns != null && extractedTags.returns.type != null;
    (hasParams || hasReturns) && (propDef.jsDocTags = { params: hasParams && extractedTags.params.map((x) => ({ name: x.getPrettyName(), description: x.description })), returns: hasReturns && { description: extractedTags.returns.description } });
  }
  return propDef;
}
var javaScriptFactory = (propName, docgenInfo, jsDocParsingResult) => {
  let propDef = createBasicPropDef(propName, docgenInfo.type, docgenInfo);
  return propDef.sbType = convert4(docgenInfo), applyJsDocResult(propDef, jsDocParsingResult);
}, tsFactory = (propName, docgenInfo, jsDocParsingResult) => {
  let propDef = createTsPropDef(propName, docgenInfo);
  return propDef.sbType = convert4(docgenInfo), applyJsDocResult(propDef, jsDocParsingResult);
}, flowFactory = (propName, docgenInfo, jsDocParsingResult) => {
  let propDef = createFlowPropDef(propName, docgenInfo);
  return propDef.sbType = convert4(docgenInfo), applyJsDocResult(propDef, jsDocParsingResult);
}, unknownFactory = (propName, docgenInfo, jsDocParsingResult) => {
  let propDef = createBasicPropDef(propName, { name: "unknown" }, docgenInfo);
  return applyJsDocResult(propDef, jsDocParsingResult);
}, getPropDefFactory = (typeSystem) => {
  switch (typeSystem) {
    case "JavaScript":
      return javaScriptFactory;
    case "TypeScript":
      return tsFactory;
    case "Flow":
      return flowFactory;
    default:
      return unknownFactory;
  }
};
var getTypeSystem = (docgenInfo) => docgenInfo.type != null ? "JavaScript" : docgenInfo.flowType != null ? "Flow" : docgenInfo.tsType != null ? "TypeScript" : "Unknown", extractComponentSectionArray = (docgenSection) => {
  let typeSystem = getTypeSystem(docgenSection[0]), createPropDef = getPropDefFactory(typeSystem);
  return docgenSection.map((item) => {
    var _a;
    let sanitizedItem = item;
    return ((_a = item.type) == null ? void 0 : _a.elements) && (sanitizedItem = { ...item, type: { ...item.type, value: item.type.elements } }), extractProp(sanitizedItem.name, sanitizedItem, typeSystem, createPropDef);
  });
}, extractComponentSectionObject = (docgenSection) => {
  let docgenPropsKeys = Object.keys(docgenSection), typeSystem = getTypeSystem(docgenSection[docgenPropsKeys[0]]), createPropDef = getPropDefFactory(typeSystem);
  return docgenPropsKeys.map((propName) => {
    let docgenInfo = docgenSection[propName];
    return docgenInfo != null ? extractProp(propName, docgenInfo, typeSystem, createPropDef) : null;
  }).filter(Boolean);
}, extractComponentProps = (component, section) => {
  let docgenSection = getDocgenSection(component, section);
  return isValidDocgenSection(docgenSection) ? Array.isArray(docgenSection) ? extractComponentSectionArray(docgenSection) : extractComponentSectionObject(docgenSection) : [];
};
function extractProp(propName, docgenInfo, typeSystem, createPropDef) {
  let jsDocParsingResult = parseJsDoc(docgenInfo.description);
  return jsDocParsingResult.includesJsDoc && jsDocParsingResult.ignore ? null : { propDef: createPropDef(propName, docgenInfo, jsDocParsingResult), jsDocTags: jsDocParsingResult.extractedTags, docgenInfo, typeSystem };
}
function extractComponentDescription(component) {
  return component != null && getDocgenDescription(component);
}
const combineParameters = __STORYBOOK_MODULE_PREVIEW_API__.combineParameters;
var enhanceArgTypes = (context) => {
  let { component, argTypes: userArgTypes, parameters: { docs = {} } } = context, { extractArgTypes } = docs, extractedArgTypes = extractArgTypes && component ? extractArgTypes(component) : {};
  return extractedArgTypes ? combineParameters(extractedArgTypes, userArgTypes) : userArgTypes;
};
var ADDON_ID = "storybook/docs", SNIPPET_RENDERED = `${ADDON_ID}/snippet-rendered`, SourceType = ((SourceType2) => (SourceType2.AUTO = "auto", SourceType2.CODE = "code", SourceType2.DYNAMIC = "dynamic", SourceType2))(SourceType || {});
export {
  _getAllKeys as A,
  mapValues_1 as B,
  str as C,
  ReactDOM as R,
  SNIPPET_RENDERED as S,
  TypeSystem as T,
  _getPrototype as _,
  extractComponentDescription as a,
  SourceType as b,
  createSummaryValue as c,
  extractComponentProps as d,
  enhanceArgTypes as e,
  isTooLongForTypeSummary as f,
  getDocgenSection as g,
  hasDocgen as h,
  isTooLongForDefaultValueSummary as i,
  _baseIsEqual as j,
  _baseAssignValue as k,
  _castPath as l,
  _isIndex as m,
  _toKey as n,
  _baseGet as o,
  _arrayPush as p,
  _getSymbols as q,
  reactDom as r,
  stubArray_1 as s,
  _isPrototype as t,
  utils as u,
  _arrayLikeKeys as v,
  isArrayLike_1 as w,
  _baseGetAllKeys as x,
  _baseIteratee as y,
  keys_1 as z
};
//# sourceMappingURL=index.31ab949d.js.map
