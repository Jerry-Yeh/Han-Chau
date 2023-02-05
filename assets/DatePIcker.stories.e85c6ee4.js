var _a;
import { c as commonjsGlobal } from "./_commonjsHelpers.712cc82f.js";
import { j as jsx } from "./jsx-runtime.db436af5.js";
import { _ as _createClass, a as _classCallCheck, b as _defineProperty$1, c as canUseDom, d as _objectSpread2$1, C as CSSMotion, i as index, e as contains, f as _slicedToArray, u as useLayoutEffect, g as isEqual$1, h as composeRef, j as _typeof$1, k as isVisible, l as useSafeState, w as wrapperRaf, m as _asyncToGenerator, n as _regeneratorRuntime, o as _objectWithoutProperties, p as _inherits, q as _createSuper, r as findDOMNode, s as supportRef, t as useMergedState, v as ConfigContext, x as ConfigProvider, y as noteOnce, z as _toConsumableArray, A as useMemo, B as warningOnce, D as genComponentStyleHook, E as merge, F as initInputToken, G as genCompactItemStyle, H as genActiveStyle, I as resetComponent, J as genHoverStyle, K as genBasicInputStyle, L as textEllipsis, T as TinyColor, M as Button, N as AntdIcon, O as useCompactItemContext, S as SizeContext, P as DisabledContext, Q as FormItemInputContext, R as LocaleReceiver, U as enUS, V as CloseCircleFilled, W as getStatusClassNames, X as getMergedStatus, Y as AntdDecorator } from "./AntdDecorator.061a331e.js";
import { r as react, R as React } from "./index.2e2f892a.js";
import { c as classNames } from "./index.0579b088.js";
import { d as _extends, c as _assertThisInitialized } from "./isNativeReflectConstruct.fd0a40b8.js";
import { R as ReactDOM } from "./index.36b4d5ff.js";
var Keyframe = /* @__PURE__ */ function() {
  function Keyframe2(name, style) {
    _classCallCheck(this, Keyframe2);
    _defineProperty$1(this, "name", void 0);
    _defineProperty$1(this, "style", void 0);
    _defineProperty$1(this, "_keyframe", true);
    this.name = name;
    this.style = style;
  }
  _createClass(Keyframe2, [{
    key: "getName",
    value: function getName() {
      var hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
    }
  }]);
  return Keyframe2;
}();
const roundedArrow = (width, innerRadius, outerRadius, bgColor, boxShadow) => {
  const unitWidth = width / 2;
  const ax = unitWidth - outerRadius * (Math.sqrt(2) - 1);
  const ay = unitWidth;
  const bx = unitWidth + outerRadius * (1 - 1 / Math.sqrt(2));
  const by = unitWidth - outerRadius * (1 - 1 / Math.sqrt(2));
  const cx = 2 * unitWidth - innerRadius * (1 / Math.sqrt(2));
  const cy = innerRadius * (1 / Math.sqrt(2));
  const dx = 4 * unitWidth - cx;
  const dy = cy;
  const ex = 4 * unitWidth - bx;
  const ey = by;
  const fx = 4 * unitWidth - ax;
  const fy = ay;
  return {
    borderRadius: {
      _skip_check_: true,
      value: `0 0 ${innerRadius}px`
    },
    pointerEvents: "none",
    width: width * 2,
    height: width * 2,
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      width: width / Math.sqrt(2),
      height: width / Math.sqrt(2),
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: true,
        value: `0 0 ${innerRadius}px 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow,
      zIndex: 0,
      background: "transparent"
    },
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: width * 2,
      height: width / 2,
      background: bgColor,
      clipPath: `path('M ${ax} ${ay} A ${outerRadius} ${outerRadius} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${innerRadius} ${innerRadius} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${outerRadius} ${outerRadius} 0 0 0 ${fx} ${fy} Z')`,
      content: '""'
    }
  };
};
function addEventListenerWrap(target, eventType, cb, option) {
  var callback = ReactDOM.unstable_batchedUpdates ? function run(e) {
    ReactDOM.unstable_batchedUpdates(cb, e);
  } : cb;
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }
  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback, option);
      }
    }
  };
}
const isMobile = function() {
  if (typeof navigator === "undefined" || typeof window === "undefined") {
    return false;
  }
  var agent = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
};
var KeyCode = {
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  QUESTION_MARK: 63,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  WIN_IME: 229,
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey || keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
var Portal = /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
  var didUpdate = props.didUpdate, getContainer = props.getContainer, children = props.children;
  var parentRef = react.exports.useRef();
  var containerRef = react.exports.useRef();
  react.exports.useImperativeHandle(ref, function() {
    return {};
  });
  var initRef = react.exports.useRef(false);
  if (!initRef.current && canUseDom()) {
    containerRef.current = getContainer();
    parentRef.current = containerRef.current.parentNode;
    initRef.current = true;
  }
  react.exports.useEffect(function() {
    didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
  });
  react.exports.useEffect(function() {
    if (containerRef.current.parentNode === null && parentRef.current !== null) {
      parentRef.current.appendChild(containerRef.current);
    }
    return function() {
      var _containerRef$current, _containerRef$current2;
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? /* @__PURE__ */ ReactDOM.createPortal(children, containerRef.current) : null;
});
function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _objectSpread2$1(_objectSpread2$1({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);
  for (var i = 0; i < placements.length; i += 1) {
    var placement = placements[i];
    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }
  return "";
}
function getMotion(_ref) {
  var prefixCls = _ref.prefixCls, motion = _ref.motion, animation = _ref.animation, transitionName = _ref.transitionName;
  if (motion) {
    return motion;
  }
  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }
  if (transitionName) {
    return {
      motionName: transitionName
    };
  }
  return null;
}
function Mask(props) {
  var prefixCls = props.prefixCls, visible = props.visible, zIndex = props.zIndex, mask = props.mask, maskMotion = props.maskMotion, maskAnimation = props.maskAnimation, maskTransitionName = props.maskTransitionName;
  if (!mask) {
    return null;
  }
  var motion = {};
  if (maskMotion || maskTransitionName || maskAnimation) {
    motion = _objectSpread2$1({
      motionAppear: true
    }, getMotion({
      motion: maskMotion,
      prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    }));
  }
  return /* @__PURE__ */ react.exports.createElement(CSSMotion, _extends({}, motion, {
    visible,
    removeOnLeave: true
  }), function(_ref) {
    var className = _ref.className;
    return /* @__PURE__ */ react.exports.createElement("div", {
      style: {
        zIndex
      },
      className: classNames("".concat(prefixCls, "-mask"), className)
    });
  });
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var vendorPrefix;
var jsCssMap = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-",
  O: "-o-"
};
function getVendorPrefix() {
  if (vendorPrefix !== void 0) {
    return vendorPrefix;
  }
  vendorPrefix = "";
  var style = document.createElement("p").style;
  var testProp = "Transform";
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}
function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : "transitionProperty";
}
function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : "transform";
}
function setTransitionProperty(node, value) {
  var name = getTransitionName();
  if (name) {
    node.style[name] = value;
    if (name !== "transitionProperty") {
      node.style.transitionProperty = value;
    }
  }
}
function setTransform(node, value) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value;
    if (name !== "transform") {
      node.style.transform = value;
    }
  }
}
function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue("transform") || style.getPropertyValue(getTransformName());
  if (transform && transform !== "none") {
    var matrix = transform.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue("transform") || style.getPropertyValue(getTransformName());
  if (transform && transform !== "none") {
    var arr;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(",").map(function(item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(","), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(",").map(function(item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(","), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}
var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX;
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = "none";
  elem.offsetHeight;
  elem.style.display = originalStyle;
}
function css(el, name, v) {
  var value = v;
  if (_typeof(name) === "object") {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return void 0;
  }
  if (typeof value !== "undefined") {
    if (typeof value === "number") {
      value = "".concat(value, "px");
    }
    el.style[name] = value;
    return void 0;
  }
  return getComputedStyleX(el, name);
}
function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  box = elem.getBoundingClientRect();
  x = Math.floor(box.left);
  y = Math.floor(box.top);
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}
function getScroll(w, top) {
  var ret = w["page".concat(top ? "Y" : "X", "Offset")];
  var method = "scroll".concat(top ? "Top" : "Left");
  if (typeof ret !== "number") {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== "number") {
      ret = d.body[method];
    }
  }
  return ret;
}
function getScrollLeft(w) {
  return getScroll(w);
}
function getScrollTop(w) {
  return getScroll(w, true);
}
function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
function isWindow(obj) {
  return obj !== null && obj !== void 0 && obj == obj.window;
}
function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}
function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = "";
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }
  return val;
}
var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), "i");
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = "currentStyle";
var RUNTIME_STYLE = "runtimeStyle";
var LEFT = "left";
var PX = "px";
function _getComputedStyleIE(elem, name) {
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
    style[LEFT] = name === "fontSize" ? "1em" : ret || 0;
    ret = style.pixelLeft + PX;
    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === "" ? "auto" : ret;
}
if (typeof window !== "undefined") {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}
function getOffsetDirection(dir, option) {
  if (dir === "left") {
    return option.useCssRight ? "right" : dir;
  }
  return option.useCssBottom ? "bottom" : dir;
}
function oppositeOffsetDirection(dir) {
  if (dir === "left") {
    return "right";
  } else if (dir === "right") {
    return "left";
  } else if (dir === "top") {
    return "bottom";
  } else if (dir === "bottom") {
    return "top";
  }
}
function setLeftTop(elem, offset2, option) {
  if (css(elem, "position") === "static") {
    elem.style.position = "relative";
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection("left", option);
  var verticalProperty = getOffsetDirection("top", option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
  if (horizontalProperty !== "left") {
    presetH = 999;
  }
  if (verticalProperty !== "top") {
    presetV = 999;
  }
  var originalTransition = "";
  var originalOffset = getOffset(elem);
  if ("left" in offset2 || "top" in offset2) {
    originalTransition = getTransitionProperty(elem) || "";
    setTransitionProperty(elem, "none");
  }
  if ("left" in offset2) {
    elem.style[oppositeHorizontalProperty] = "";
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }
  if ("top" in offset2) {
    elem.style[oppositeVerticalProperty] = "";
    elem.style[verticalProperty] = "".concat(presetV, "px");
  }
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset2) {
    if (offset2.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === "left" ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  forceRelayout(elem);
  if ("left" in offset2 || "top" in offset2) {
    setTransitionProperty(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset2) {
    if (offset2.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset2[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}
function setTransform$1(elem, offset2) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };
  if ("left" in offset2) {
    resultXY.x = originalXY.x + offset2.left - originalOffset.left;
  }
  if ("top" in offset2) {
    resultXY.y = originalXY.y + offset2.top - originalOffset.top;
  }
  setTransformXY(elem, resultXY);
}
function setOffset(elem, offset2, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset2.left.toFixed(0);
    var tTop = offset2.top.toFixed(0);
    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }
  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset2, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset2);
  } else {
    setLeftTop(elem, offset2, option);
  }
}
function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}
function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, "boxSizing") === "border-box";
}
var BOX_MODELS = ["margin", "border", "padding"];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;
function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name;
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }
  callback.call(elem);
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}
function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === "border") {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}
var domUtils = {
  getParent: function getParent(element) {
    var parent = element;
    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);
    return parent;
  }
};
each(["Width", "Height"], function(name) {
  domUtils["doc".concat(name)] = function(refWin) {
    var d = refWin.document;
    return Math.max(
      d.documentElement["scroll".concat(name)],
      d.body["scroll".concat(name)],
      domUtils["viewport".concat(name)](d)
    );
  };
  domUtils["viewport".concat(name)] = function(win) {
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    return doc.compatMode === "CSS1Compat" && documentElementProp || body && body[prop] || documentElementProp;
  };
});
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === "width" ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === "width" ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  var borderBoxValue = name === "width" ? Math.floor(elem.getBoundingClientRect().width) : Math.floor(elem.getBoundingClientRect().height);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === void 0 || borderBoxValue <= 0) {
    borderBoxValue = void 0;
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === void 0 || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    cssBoxValue = Math.floor(parseFloat(cssBoxValue)) || 0;
  }
  if (extra === void 0) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== void 0 || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ["border", "padding"], which);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ["border"], which) : getPBMWidth(elem, ["margin"], which));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}
var cssShow = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var val;
  var elem = args[0];
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(void 0, args);
  } else {
    swap(elem, cssShow, function() {
      val = getWH.apply(void 0, args);
    });
  }
  return val;
}
each(["width", "height"], function(name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils["outer".concat(first)] = function(el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  domUtils[name] = function(elem, v) {
    var val = v;
    if (val !== void 0) {
      if (elem) {
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ["padding", "border"], which);
        }
        return css(elem, name, val);
      }
      return void 0;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});
function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}
var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== "undefined") {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow,
  each,
  css,
  clone: function clone(obj) {
    var i;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },
  mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge2() {
    var ret = {};
    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? void 0 : arguments[i]);
    }
    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);
var getParent2 = utils.getParent;
function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, "position");
  var skipStatic = positionStyle === "fixed" || positionStyle === "absolute";
  if (!skipStatic) {
    return element.nodeName.toLowerCase() === "html" ? null : getParent2(element);
  }
  for (parent = getParent2(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent2(parent)) {
    positionStyle = utils.css(parent, "position");
    if (positionStyle !== "static") {
      return parent;
    }
  }
  return null;
}
var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;
  for (parent = getParent$1(element); parent && parent !== body && parent !== doc; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, "position");
    if (positionStyle === "fixed") {
      return true;
    }
  }
  return false;
}
function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;
  while (el) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || el.clientWidth !== 0) && el !== body && el !== documentElement && utils.css(el, "overflow") !== "visible") {
      var pos = utils.offset(el);
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(
        visibleRect.right,
        pos.left + el.clientWidth
      );
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = getOffsetParent(el);
  }
  var originalPosition = null;
  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, "position");
    if (position === "absolute") {
      element.style.position = "fixed";
    }
  }
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;
  var bodyStyle = window.getComputedStyle(body);
  if (bodyStyle.overflowX === "hidden") {
    documentWidth = win.innerWidth;
  }
  if (bodyStyle.overflowY === "hidden") {
    documentHeight = win.innerHeight;
  }
  if (element.style) {
    element.style.position = originalPosition;
  }
  if (alwaysByViewport || isAncestorFixed(element)) {
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}
function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };
  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }
  return utils.mix(pos, size);
}
function getRegion(node) {
  var offset2;
  var w;
  var h;
  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset2 = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset2 = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }
  offset2.width = w;
  offset2.height = h;
  return offset2;
}
function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;
  if (V === "c") {
    y += h / 2;
  } else if (V === "b") {
    y += h;
  }
  if (H === "c") {
    x += w / 2;
  } else if (H === "r") {
    x += w;
  }
  return {
    left: x,
    top: y
  };
}
function getElFuturePos(elRegion, refNodeRegion, points, offset2, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset2[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset2[1] - targetOffset[1])
  };
}
function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}
function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}
function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}
function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}
function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function(p) {
    ret.push(p.replace(reg, function(m) {
      return map[m];
    }));
  });
  return ret;
}
function flipOffset(offset2, index2) {
  offset2[index2] = -offset2[index2];
  return offset2;
}
function convertOffset(str, offsetLen) {
  var n;
  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }
  return n || 0;
}
function normalizeOffset(offset2, el) {
  offset2[0] = convertOffset(offset2[0], el.width);
  offset2[1] = convertOffset(offset2[1], el.height);
}
function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset2 = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset2 = [].concat(offset2);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport);
  var visibleRect = getVisibleRectForElement(source, alwaysByViewport);
  var elRegion = getRegion(source);
  normalizeOffset(offset2, elRegion);
  normalizeOffset(targetOffset, tgtRegion);
  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset2, targetOffset);
  var newElRegion = utils.merge(elRegion, elFuturePos);
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        var newPoints = flip(points, /[lr]/gi, {
          l: "r",
          r: "l"
        });
        var newOffset = flipOffset(offset2, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset2 = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }
    if (overflow.adjustY) {
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        var _newPoints = flip(points, /[tb]/gi, {
          t: "b",
          b: "t"
        });
        var _newOffset = flipOffset(offset2, 1);
        var _newTargetOffset = flipOffset(targetOffset, 1);
        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset2 = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    }
    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset2, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points;
      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: "r",
          r: "l"
        });
      }
      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: "b",
          b: "t"
        });
      }
      points = _newPoints2;
      offset2 = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    }
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }
  if (newElRegion.width !== elRegion.width) {
    utils.css(source, "width", utils.width(source) + newElRegion.width - elRegion.width);
  }
  if (newElRegion.height !== elRegion.height) {
    utils.css(source, "height", utils.height(source) + newElRegion.height - elRegion.height);
  }
  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points,
    offset: offset2,
    targetOffset,
    overflow: newOverflowCfg
  };
}
function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}
function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}
alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;
function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  if ("pageX" in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }
  if ("pageY" in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }
  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;
  var points = [align.points[0], "cc"];
  return doAlign(el, tgtRegion, _objectSpread2(_objectSpread2({}, align), {}, {
    points
  }), pointInView);
}
const useBuffer = function(callback, buffer) {
  var calledRef = React.useRef(false);
  var timeoutRef = React.useRef(null);
  function cancelTrigger() {
    window.clearTimeout(timeoutRef.current);
  }
  function trigger(force) {
    cancelTrigger();
    if (!calledRef.current || force === true) {
      if (callback(force) === false) {
        return;
      }
      calledRef.current = true;
      timeoutRef.current = window.setTimeout(function() {
        calledRef.current = false;
      }, buffer);
    } else {
      timeoutRef.current = window.setTimeout(function() {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }
  return [trigger, function() {
    calledRef.current = false;
    cancelTrigger();
  }];
};
function isSamePoint(prev, next) {
  if (prev === next)
    return true;
  if (!prev || !next)
    return false;
  if ("pageX" in next && "pageY" in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }
  if ("clientX" in next && "clientY" in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }
  return false;
}
function restoreFocus(activeElement, container) {
  if (activeElement !== document.activeElement && contains(container, activeElement) && typeof activeElement.focus === "function") {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;
  function onResize(_ref) {
    var _ref2 = _slicedToArray(_ref, 1), target = _ref2[0].target;
    if (!document.documentElement.contains(target))
      return;
    var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      Promise.resolve().then(function() {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }
    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }
  var resizeObserver = new index(onResize);
  if (element) {
    resizeObserver.observe(element);
  }
  return function() {
    resizeObserver.disconnect();
  };
}
function getElement(func) {
  if (typeof func !== "function")
    return null;
  return func();
}
function getPoint(point) {
  if (_typeof$1(point) !== "object" || !point)
    return null;
  return point;
}
var Align = function Align2(_ref, ref) {
  var children = _ref.children, disabled = _ref.disabled, target = _ref.target, align = _ref.align, onAlign = _ref.onAlign, monitorWindowResize = _ref.monitorWindowResize, _ref$monitorBufferTim = _ref.monitorBufferTime, monitorBufferTime = _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
  var cacheRef = React.useRef({});
  var nodeRef = React.useRef();
  var childNode = React.Children.only(children);
  var forceAlignPropsRef = React.useRef({});
  forceAlignPropsRef.current.disabled = disabled;
  forceAlignPropsRef.current.target = target;
  forceAlignPropsRef.current.align = align;
  forceAlignPropsRef.current.onAlign = onAlign;
  var _useBuffer = useBuffer(function() {
    var _forceAlignPropsRef$c = forceAlignPropsRef.current, latestDisabled = _forceAlignPropsRef$c.disabled, latestTarget = _forceAlignPropsRef$c.target, latestAlign = _forceAlignPropsRef$c.align, latestOnAlign = _forceAlignPropsRef$c.onAlign;
    var source = nodeRef.current;
    if (!latestDisabled && latestTarget && source) {
      var _result;
      var _element = getElement(latestTarget);
      var _point = getPoint(latestTarget);
      cacheRef.current.element = _element;
      cacheRef.current.point = _point;
      cacheRef.current.align = latestAlign;
      var _document = document, activeElement = _document.activeElement;
      if (_element && isVisible(_element)) {
        _result = alignElement(source, _element, latestAlign);
      } else if (_point) {
        _result = alignPoint(source, _point, latestAlign);
      }
      restoreFocus(activeElement, source);
      if (latestOnAlign && _result) {
        latestOnAlign(source, _result);
      }
      return true;
    }
    return false;
  }, monitorBufferTime), _useBuffer2 = _slicedToArray(_useBuffer, 2), _forceAlign = _useBuffer2[0], cancelForceAlign = _useBuffer2[1];
  var _React$useState = React.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), element = _React$useState2[0], setElement = _React$useState2[1];
  var _React$useState3 = React.useState(), _React$useState4 = _slicedToArray(_React$useState3, 2), point = _React$useState4[0], setPoint = _React$useState4[1];
  useLayoutEffect(function() {
    setElement(getElement(target));
    setPoint(getPoint(target));
  });
  React.useEffect(function() {
    if (cacheRef.current.element !== element || !isSamePoint(cacheRef.current.point, point) || !isEqual$1(cacheRef.current.align, align)) {
      _forceAlign();
    }
  });
  React.useEffect(function() {
    var cancelFn = monitorResize(nodeRef.current, _forceAlign);
    return cancelFn;
  }, [nodeRef.current]);
  React.useEffect(function() {
    var cancelFn = monitorResize(element, _forceAlign);
    return cancelFn;
  }, [element]);
  React.useEffect(function() {
    if (!disabled) {
      _forceAlign();
    } else {
      cancelForceAlign();
    }
  }, [disabled]);
  React.useEffect(function() {
    if (monitorWindowResize) {
      var cancelFn = addEventListenerWrap(window, "resize", _forceAlign);
      return cancelFn.remove;
    }
  }, [monitorWindowResize]);
  React.useEffect(function() {
    return function() {
      cancelForceAlign();
    };
  }, []);
  React.useImperativeHandle(ref, function() {
    return {
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    };
  });
  if (/* @__PURE__ */ React.isValidElement(childNode)) {
    childNode = /* @__PURE__ */ React.cloneElement(childNode, {
      ref: composeRef(childNode.ref, nodeRef)
    });
  }
  return childNode;
};
var RcAlign = /* @__PURE__ */ React.forwardRef(Align);
RcAlign.displayName = "Align";
var StatusQueue = ["measure", "alignPre", "align", null, "motion"];
const useVisibleStatus = function(visible, doMeasure) {
  var _useState = useSafeState(null), _useState2 = _slicedToArray(_useState, 2), status = _useState2[0], setInternalStatus = _useState2[1];
  var rafRef = react.exports.useRef();
  function setStatus(nextStatus) {
    setInternalStatus(nextStatus, true);
  }
  function cancelRaf() {
    wrapperRaf.cancel(rafRef.current);
  }
  function goNextStatus(callback) {
    cancelRaf();
    rafRef.current = wrapperRaf(function() {
      setStatus(function(prev) {
        switch (status) {
          case "align":
            return "motion";
          case "motion":
            return "stable";
        }
        return prev;
      });
      callback === null || callback === void 0 ? void 0 : callback();
    });
  }
  react.exports.useEffect(function() {
    setStatus("measure");
  }, [visible]);
  react.exports.useEffect(function() {
    switch (status) {
      case "measure":
        doMeasure();
        break;
    }
    if (status) {
      rafRef.current = wrapperRaf(/* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
        var index2, nextStatus;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index2 = StatusQueue.indexOf(status);
                nextStatus = StatusQueue[index2 + 1];
                if (nextStatus && index2 !== -1) {
                  setStatus(nextStatus);
                }
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }, [status]);
  react.exports.useEffect(function() {
    return function() {
      cancelRaf();
    };
  }, []);
  return [status, goNextStatus];
};
const useStretchStyle = function(stretch) {
  var _React$useState = react.exports.useState({
    width: 0,
    height: 0
  }), _React$useState2 = _slicedToArray(_React$useState, 2), targetSize = _React$useState2[0], setTargetSize = _React$useState2[1];
  function measureStretch(element) {
    var tgtWidth = element.offsetWidth, tgtHeight = element.offsetHeight;
    var _element$getBoundingC = element.getBoundingClientRect(), width = _element$getBoundingC.width, height = _element$getBoundingC.height;
    if (Math.abs(tgtWidth - width) < 1 && Math.abs(tgtHeight - height) < 1) {
      tgtWidth = width;
      tgtHeight = height;
    }
    setTargetSize({
      width: tgtWidth,
      height: tgtHeight
    });
  }
  var style = react.exports.useMemo(function() {
    var sizeStyle = {};
    if (stretch) {
      var width = targetSize.width, height = targetSize.height;
      if (stretch.indexOf("height") !== -1 && height) {
        sizeStyle.height = height;
      } else if (stretch.indexOf("minHeight") !== -1 && height) {
        sizeStyle.minHeight = height;
      }
      if (stretch.indexOf("width") !== -1 && width) {
        sizeStyle.width = width;
      } else if (stretch.indexOf("minWidth") !== -1 && width) {
        sizeStyle.minWidth = width;
      }
    }
    return sizeStyle;
  }, [stretch, targetSize]);
  return [style, measureStretch];
};
var PopupInner = /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
  var visible = props.visible, prefixCls = props.prefixCls, className = props.className, style = props.style, children = props.children, zIndex = props.zIndex, stretch = props.stretch, destroyPopupOnHide = props.destroyPopupOnHide, forceRender = props.forceRender, align = props.align, point = props.point, getRootDomNode = props.getRootDomNode, getClassNameFromAlign = props.getClassNameFromAlign, onAlign = props.onAlign, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onMouseDown = props.onMouseDown, onTouchStart = props.onTouchStart, onClick = props.onClick;
  var alignRef = react.exports.useRef();
  var elementRef = react.exports.useRef();
  var _useState = react.exports.useState(), _useState2 = _slicedToArray(_useState, 2), alignedClassName = _useState2[0], setAlignedClassName = _useState2[1];
  var _useStretchStyle = useStretchStyle(stretch), _useStretchStyle2 = _slicedToArray(_useStretchStyle, 2), stretchStyle = _useStretchStyle2[0], measureStretchStyle = _useStretchStyle2[1];
  function doMeasure() {
    if (stretch) {
      measureStretchStyle(getRootDomNode());
    }
  }
  var _useVisibleStatus = useVisibleStatus(visible, doMeasure), _useVisibleStatus2 = _slicedToArray(_useVisibleStatus, 2), status = _useVisibleStatus2[0], goNextStatus = _useVisibleStatus2[1];
  var _useState3 = react.exports.useState(0), _useState4 = _slicedToArray(_useState3, 2), alignTimes = _useState4[0], setAlignTimes = _useState4[1];
  var prepareResolveRef = react.exports.useRef();
  useLayoutEffect(function() {
    if (status === "alignPre") {
      setAlignTimes(0);
    }
  }, [status]);
  function getAlignTarget() {
    if (point) {
      return point;
    }
    return getRootDomNode;
  }
  function forceAlign() {
    var _alignRef$current;
    (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0 ? void 0 : _alignRef$current.forceAlign();
  }
  function onInternalAlign(popupDomNode, matchAlign) {
    var nextAlignedClassName = getClassNameFromAlign(matchAlign);
    if (alignedClassName !== nextAlignedClassName) {
      setAlignedClassName(nextAlignedClassName);
    }
    setAlignTimes(function(val) {
      return val + 1;
    });
    if (status === "align") {
      onAlign === null || onAlign === void 0 ? void 0 : onAlign(popupDomNode, matchAlign);
    }
  }
  useLayoutEffect(function() {
    if (status === "align") {
      if (alignTimes < 3) {
        forceAlign();
      } else {
        goNextStatus(function() {
          var _prepareResolveRef$cu;
          (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0 ? void 0 : _prepareResolveRef$cu.call(prepareResolveRef);
        });
      }
    }
  }, [alignTimes]);
  var motion = _objectSpread2$1({}, getMotion(props));
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function(eventName) {
    var originHandler = motion[eventName];
    motion[eventName] = function(element, event) {
      goNextStatus();
      return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
    };
  });
  function onShowPrepare() {
    return new Promise(function(resolve) {
      prepareResolveRef.current = resolve;
    });
  }
  react.exports.useEffect(function() {
    if (!motion.motionName && status === "motion") {
      goNextStatus();
    }
  }, [motion.motionName, status]);
  react.exports.useImperativeHandle(ref, function() {
    return {
      forceAlign,
      getElement: function getElement2() {
        return elementRef.current;
      }
    };
  });
  var mergedStyle = _objectSpread2$1(_objectSpread2$1({}, stretchStyle), {}, {
    zIndex,
    opacity: status === "motion" || status === "stable" || !visible ? void 0 : 0,
    pointerEvents: !visible && status !== "stable" ? "none" : void 0
  }, style);
  var alignDisabled = true;
  if (align !== null && align !== void 0 && align.points && (status === "align" || status === "stable")) {
    alignDisabled = false;
  }
  var childNode = children;
  if (react.exports.Children.count(children) > 1) {
    childNode = /* @__PURE__ */ react.exports.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  }
  return /* @__PURE__ */ react.exports.createElement(CSSMotion, _extends({
    visible,
    ref: elementRef,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }, motion, {
    onAppearPrepare: onShowPrepare,
    onEnterPrepare: onShowPrepare,
    removeOnLeave: destroyPopupOnHide,
    forceRender
  }), function(_ref, motionRef) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    var mergedClassName = classNames(prefixCls, className, alignedClassName, motionClassName);
    return /* @__PURE__ */ react.exports.createElement(RcAlign, {
      target: getAlignTarget(),
      key: "popup",
      ref: alignRef,
      monitorWindowResize: true,
      disabled: alignDisabled,
      align,
      onAlign: onInternalAlign
    }, /* @__PURE__ */ react.exports.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      onMouseEnter,
      onMouseLeave,
      onMouseDownCapture: onMouseDown,
      onTouchStartCapture: onTouchStart,
      onClick,
      style: _objectSpread2$1(_objectSpread2$1({}, motionStyle), mergedStyle)
    }, childNode));
  });
});
PopupInner.displayName = "PopupInner";
var MobilePopupInner = /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, visible = props.visible, zIndex = props.zIndex, children = props.children, _props$mobile = props.mobile;
  _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
  var popupClassName = _props$mobile.popupClassName, popupStyle = _props$mobile.popupStyle, _props$mobile$popupMo = _props$mobile.popupMotion, popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo, popupRender = _props$mobile.popupRender, onClick = props.onClick;
  var elementRef = react.exports.useRef();
  react.exports.useImperativeHandle(ref, function() {
    return {
      forceAlign: function forceAlign() {
      },
      getElement: function getElement2() {
        return elementRef.current;
      }
    };
  });
  var mergedStyle = _objectSpread2$1({
    zIndex
  }, popupStyle);
  var childNode = children;
  if (react.exports.Children.count(children) > 1) {
    childNode = /* @__PURE__ */ react.exports.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  }
  if (popupRender) {
    childNode = popupRender(childNode);
  }
  return /* @__PURE__ */ react.exports.createElement(CSSMotion, _extends({
    visible,
    ref: elementRef,
    removeOnLeave: true
  }, popupMotion), function(_ref, motionRef) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    var mergedClassName = classNames(prefixCls, popupClassName, motionClassName);
    return /* @__PURE__ */ react.exports.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      onClick,
      style: _objectSpread2$1(_objectSpread2$1({}, motionStyle), mergedStyle)
    }, childNode);
  });
});
MobilePopupInner.displayName = "MobilePopupInner";
var _excluded = ["visible", "mobile"];
var Popup = /* @__PURE__ */ react.exports.forwardRef(function(_ref, ref) {
  var visible = _ref.visible, mobile = _ref.mobile, props = _objectWithoutProperties(_ref, _excluded);
  var _useState = react.exports.useState(visible), _useState2 = _slicedToArray(_useState, 2), innerVisible = _useState2[0], serInnerVisible = _useState2[1];
  var _useState3 = react.exports.useState(false), _useState4 = _slicedToArray(_useState3, 2), inMobile = _useState4[0], setInMobile = _useState4[1];
  var cloneProps = _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    visible: innerVisible
  });
  react.exports.useEffect(function() {
    serInnerVisible(visible);
    if (visible && mobile) {
      setInMobile(isMobile());
    }
  }, [visible, mobile]);
  var popupNode = inMobile ? /* @__PURE__ */ react.exports.createElement(MobilePopupInner, _extends({}, cloneProps, {
    mobile,
    ref
  })) : /* @__PURE__ */ react.exports.createElement(PopupInner, _extends({}, cloneProps, {
    ref
  }));
  return /* @__PURE__ */ react.exports.createElement("div", null, /* @__PURE__ */ react.exports.createElement(Mask, cloneProps), popupNode);
});
Popup.displayName = "Popup";
var TriggerContext = /* @__PURE__ */ react.exports.createContext(null);
function noop() {
}
function returnEmptyString() {
  return "";
}
function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }
  return window.document;
}
var ALL_HANDLERS = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"];
function generateTrigger(PortalComponent) {
  var Trigger2 = /* @__PURE__ */ function(_React$Component) {
    _inherits(Trigger3, _React$Component);
    var _super = _createSuper(Trigger3);
    function Trigger3(props) {
      var _this;
      _classCallCheck(this, Trigger3);
      _this = _super.call(this, props);
      _defineProperty$1(_assertThisInitialized(_this), "popupRef", /* @__PURE__ */ react.exports.createRef());
      _defineProperty$1(_assertThisInitialized(_this), "triggerRef", /* @__PURE__ */ react.exports.createRef());
      _defineProperty$1(_assertThisInitialized(_this), "portalContainer", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "attachId", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "clickOutsideHandler", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "touchOutsideHandler", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "contextMenuOutsideHandler1", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "contextMenuOutsideHandler2", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "mouseDownTimeout", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "focusTime", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "preClickTime", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "preTouchTime", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "delayTimer", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "hasPopupMouseDown", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "onMouseEnter", function(e) {
        var mouseEnterDelay = _this.props.mouseEnterDelay;
        _this.fireEvents("onMouseEnter", e);
        _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
      });
      _defineProperty$1(_assertThisInitialized(_this), "onMouseMove", function(e) {
        _this.fireEvents("onMouseMove", e);
        _this.setPoint(e);
      });
      _defineProperty$1(_assertThisInitialized(_this), "onMouseLeave", function(e) {
        _this.fireEvents("onMouseLeave", e);
        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      });
      _defineProperty$1(_assertThisInitialized(_this), "onPopupMouseEnter", function() {
        _this.clearDelayTimer();
      });
      _defineProperty$1(_assertThisInitialized(_this), "onPopupMouseLeave", function(e) {
        var _this$popupRef$curren;
        if (e.relatedTarget && !e.relatedTarget.setTimeout && contains((_this$popupRef$curren = _this.popupRef.current) === null || _this$popupRef$curren === void 0 ? void 0 : _this$popupRef$curren.getElement(), e.relatedTarget)) {
          return;
        }
        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      });
      _defineProperty$1(_assertThisInitialized(_this), "onFocus", function(e) {
        _this.fireEvents("onFocus", e);
        _this.clearDelayTimer();
        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();
          _this.delaySetPopupVisible(true, _this.props.focusDelay);
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "onMouseDown", function(e) {
        _this.fireEvents("onMouseDown", e);
        _this.preClickTime = Date.now();
      });
      _defineProperty$1(_assertThisInitialized(_this), "onTouchStart", function(e) {
        _this.fireEvents("onTouchStart", e);
        _this.preTouchTime = Date.now();
      });
      _defineProperty$1(_assertThisInitialized(_this), "onBlur", function(e) {
        _this.fireEvents("onBlur", e);
        _this.clearDelayTimer();
        if (_this.isBlurToHide()) {
          _this.delaySetPopupVisible(false, _this.props.blurDelay);
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "onContextMenu", function(e) {
        e.preventDefault();
        _this.fireEvents("onContextMenu", e);
        _this.setPopupVisible(true, e);
      });
      _defineProperty$1(_assertThisInitialized(_this), "onContextMenuClose", function() {
        if (_this.isContextMenuToShow()) {
          _this.close();
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "onClick", function(event) {
        _this.fireEvents("onClick", event);
        if (_this.focusTime) {
          var preTime;
          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }
          if (Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }
          _this.focusTime = 0;
        }
        _this.preClickTime = 0;
        _this.preTouchTime = 0;
        if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
          event.preventDefault();
        }
        var nextVisible = !_this.state.popupVisible;
        if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) {
          _this.setPopupVisible(!_this.state.popupVisible, event);
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "onPopupMouseDown", function() {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function() {
          _this.hasPopupMouseDown = false;
        }, 0);
        if (_this.context) {
          var _this$context;
          (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "onDocumentClick", function(event) {
        if (_this.props.mask && !_this.props.maskClosable) {
          return;
        }
        var target = event.target;
        var root = _this.getRootDomNode();
        var popupNode = _this.getPopupDomNode();
        if ((!contains(root, target) || _this.isContextMenuOnly()) && !contains(popupNode, target) && !_this.hasPopupMouseDown) {
          _this.close();
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "getRootDomNode", function() {
        var getTriggerDOMNode = _this.props.getTriggerDOMNode;
        if (getTriggerDOMNode) {
          return getTriggerDOMNode(_this.triggerRef.current);
        }
        try {
          var domNode = findDOMNode(_this.triggerRef.current);
          if (domNode) {
            return domNode;
          }
        } catch (err) {
        }
        return ReactDOM.findDOMNode(_assertThisInitialized(_this));
      });
      _defineProperty$1(_assertThisInitialized(_this), "getPopupClassNameFromAlign", function(align) {
        var className = [];
        var _this$props = _this.props, popupPlacement = _this$props.popupPlacement, builtinPlacements = _this$props.builtinPlacements, prefixCls = _this$props.prefixCls, alignPoint2 = _this$props.alignPoint, getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;
        if (popupPlacement && builtinPlacements) {
          className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint2));
        }
        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }
        return className.join(" ");
      });
      _defineProperty$1(_assertThisInitialized(_this), "getComponent", function() {
        var _this$props2 = _this.props, prefixCls = _this$props2.prefixCls, destroyPopupOnHide = _this$props2.destroyPopupOnHide, popupClassName = _this$props2.popupClassName, onPopupAlign = _this$props2.onPopupAlign, popupMotion = _this$props2.popupMotion, popupAnimation = _this$props2.popupAnimation, popupTransitionName = _this$props2.popupTransitionName, popupStyle = _this$props2.popupStyle, mask = _this$props2.mask, maskAnimation = _this$props2.maskAnimation, maskTransitionName = _this$props2.maskTransitionName, maskMotion = _this$props2.maskMotion, zIndex = _this$props2.zIndex, popup = _this$props2.popup, stretch = _this$props2.stretch, alignPoint2 = _this$props2.alignPoint, mobile = _this$props2.mobile, forceRender = _this$props2.forceRender, onPopupClick = _this$props2.onPopupClick;
        var _this$state = _this.state, popupVisible = _this$state.popupVisible, point = _this$state.point;
        var align = _this.getPopupAlign();
        var mouseProps = {};
        if (_this.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this.onPopupMouseEnter;
        }
        if (_this.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this.onPopupMouseLeave;
        }
        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return /* @__PURE__ */ react.exports.createElement(Popup, _extends({
          prefixCls,
          destroyPopupOnHide,
          visible: popupVisible,
          point: alignPoint2 && point,
          className: popupClassName,
          align,
          onAlign: onPopupAlign,
          animation: popupAnimation,
          getClassNameFromAlign: _this.getPopupClassNameFromAlign
        }, mouseProps, {
          stretch,
          getRootDomNode: _this.getRootDomNode,
          style: popupStyle,
          mask,
          zIndex,
          transitionName: popupTransitionName,
          maskAnimation,
          maskTransitionName,
          maskMotion,
          ref: _this.popupRef,
          motion: popupMotion,
          mobile,
          forceRender,
          onClick: onPopupClick
        }), typeof popup === "function" ? popup() : popup);
      });
      _defineProperty$1(_assertThisInitialized(_this), "attachParent", function(popupContainer) {
        wrapperRaf.cancel(_this.attachId);
        var _this$props3 = _this.props, getPopupContainer = _this$props3.getPopupContainer, getDocument2 = _this$props3.getDocument;
        var domNode = _this.getRootDomNode();
        var mountNode;
        if (!getPopupContainer) {
          mountNode = getDocument2(_this.getRootDomNode()).body;
        } else if (domNode || getPopupContainer.length === 0) {
          mountNode = getPopupContainer(domNode);
        }
        if (mountNode) {
          mountNode.appendChild(popupContainer);
        } else {
          _this.attachId = wrapperRaf(function() {
            _this.attachParent(popupContainer);
          });
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "getContainer", function() {
        if (!_this.portalContainer) {
          var getDocument2 = _this.props.getDocument;
          var popupContainer = getDocument2(_this.getRootDomNode()).createElement("div");
          popupContainer.style.position = "absolute";
          popupContainer.style.top = "0";
          popupContainer.style.left = "0";
          popupContainer.style.width = "100%";
          _this.portalContainer = popupContainer;
        }
        _this.attachParent(_this.portalContainer);
        return _this.portalContainer;
      });
      _defineProperty$1(_assertThisInitialized(_this), "setPoint", function(point) {
        var alignPoint2 = _this.props.alignPoint;
        if (!alignPoint2 || !point)
          return;
        _this.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY
          }
        });
      });
      _defineProperty$1(_assertThisInitialized(_this), "handlePortalUpdate", function() {
        if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
          _this.props.afterPopupVisibleChange(_this.state.popupVisible);
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "triggerContextValue", {
        onPopupMouseDown: _this.onPopupMouseDown
      });
      var _popupVisible;
      if ("popupVisible" in props) {
        _popupVisible = !!props.popupVisible;
      } else {
        _popupVisible = !!props.defaultPopupVisible;
      }
      _this.state = {
        prevPopupVisible: _popupVisible,
        popupVisible: _popupVisible
      };
      ALL_HANDLERS.forEach(function(h) {
        _this["fire".concat(h)] = function(e) {
          _this.fireEvents(h, e);
        };
      });
      return _this;
    }
    _createClass(Trigger3, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var props = this.props;
        var state = this.state;
        if (state.popupVisible) {
          var currentDocument;
          if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
            currentDocument = props.getDocument(this.getRootDomNode());
            this.clickOutsideHandler = addEventListenerWrap(currentDocument, "mousedown", this.onDocumentClick);
          }
          if (!this.touchOutsideHandler) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = addEventListenerWrap(currentDocument, "touchstart", this.onDocumentClick);
          }
          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = addEventListenerWrap(currentDocument, "scroll", this.onContextMenuClose);
          }
          if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
            this.contextMenuOutsideHandler2 = addEventListenerWrap(window, "blur", this.onContextMenuClose);
          }
          return;
        }
        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        wrapperRaf.cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function getPopupDomNode() {
        var _this$popupRef$curren2;
        return ((_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0 ? void 0 : _this$popupRef$curren2.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function getPopupAlign() {
        var props = this.props;
        var popupPlacement = props.popupPlacement, popupAlign = props.popupAlign, builtinPlacements = props.builtinPlacements;
        if (popupPlacement && builtinPlacements) {
          return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
        }
        return popupAlign;
      }
    }, {
      key: "setPopupVisible",
      value: function setPopupVisible(popupVisible, event) {
        var alignPoint2 = this.props.alignPoint;
        var prevPopupVisible = this.state.popupVisible;
        this.clearDelayTimer();
        if (prevPopupVisible !== popupVisible) {
          if (!("popupVisible" in this.props)) {
            this.setState({
              popupVisible,
              prevPopupVisible
            });
          }
          this.props.onPopupVisibleChange(popupVisible);
        }
        if (alignPoint2 && event && popupVisible) {
          this.setPoint(event);
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function delaySetPopupVisible(visible, delayS, event) {
        var _this2 = this;
        var delay = delayS * 1e3;
        this.clearDelayTimer();
        if (delay) {
          var point = event ? {
            pageX: event.pageX,
            pageY: event.pageY
          } : null;
          this.delayTimer = window.setTimeout(function() {
            _this2.setPopupVisible(visible, point);
            _this2.clearDelayTimer();
          }, delay);
        } else {
          this.setPopupVisible(visible, event);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function clearDelayTimer() {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function clearOutsideHandler() {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }
        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }
        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }
        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function createTwoChains(event) {
        var childPros = this.props.children.props;
        var props = this.props;
        if (childPros[event] && props[event]) {
          return this["fire".concat(event)];
        }
        return childPros[event] || props[event];
      }
    }, {
      key: "isClickToShow",
      value: function isClickToShow() {
        var _this$props4 = this.props, action = _this$props4.action, showAction = _this$props4.showAction;
        return action.indexOf("click") !== -1 || showAction.indexOf("click") !== -1;
      }
    }, {
      key: "isContextMenuOnly",
      value: function isContextMenuOnly() {
        var action = this.props.action;
        return action === "contextMenu" || action.length === 1 && action[0] === "contextMenu";
      }
    }, {
      key: "isContextMenuToShow",
      value: function isContextMenuToShow() {
        var _this$props5 = this.props, action = _this$props5.action, showAction = _this$props5.showAction;
        return action.indexOf("contextMenu") !== -1 || showAction.indexOf("contextMenu") !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function isClickToHide() {
        var _this$props6 = this.props, action = _this$props6.action, hideAction = _this$props6.hideAction;
        return action.indexOf("click") !== -1 || hideAction.indexOf("click") !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function isMouseEnterToShow() {
        var _this$props7 = this.props, action = _this$props7.action, showAction = _this$props7.showAction;
        return action.indexOf("hover") !== -1 || showAction.indexOf("mouseEnter") !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function isMouseLeaveToHide() {
        var _this$props8 = this.props, action = _this$props8.action, hideAction = _this$props8.hideAction;
        return action.indexOf("hover") !== -1 || hideAction.indexOf("mouseLeave") !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function isFocusToShow() {
        var _this$props9 = this.props, action = _this$props9.action, showAction = _this$props9.showAction;
        return action.indexOf("focus") !== -1 || showAction.indexOf("focus") !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function isBlurToHide() {
        var _this$props10 = this.props, action = _this$props10.action, hideAction = _this$props10.hideAction;
        return action.indexOf("focus") !== -1 || hideAction.indexOf("blur") !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function forcePopupAlign() {
        if (this.state.popupVisible) {
          var _this$popupRef$curren3;
          (_this$popupRef$curren3 = this.popupRef.current) === null || _this$popupRef$curren3 === void 0 ? void 0 : _this$popupRef$curren3.forceAlign();
        }
      }
    }, {
      key: "fireEvents",
      value: function fireEvents(type, e) {
        var childCallback = this.props.children.props[type];
        if (childCallback) {
          childCallback(e);
        }
        var callback = this.props[type];
        if (callback) {
          callback(e);
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.setPopupVisible(false);
      }
    }, {
      key: "render",
      value: function render() {
        var popupVisible = this.state.popupVisible;
        var _this$props11 = this.props, children = _this$props11.children, forceRender = _this$props11.forceRender, alignPoint2 = _this$props11.alignPoint, className = _this$props11.className, autoDestroy = _this$props11.autoDestroy;
        var child = react.exports.Children.only(children);
        var newChildProps = {
          key: "trigger"
        };
        if (this.isContextMenuToShow()) {
          newChildProps.onContextMenu = this.onContextMenu;
        } else {
          newChildProps.onContextMenu = this.createTwoChains("onContextMenu");
        }
        if (this.isClickToHide() || this.isClickToShow()) {
          newChildProps.onClick = this.onClick;
          newChildProps.onMouseDown = this.onMouseDown;
          newChildProps.onTouchStart = this.onTouchStart;
        } else {
          newChildProps.onClick = this.createTwoChains("onClick");
          newChildProps.onMouseDown = this.createTwoChains("onMouseDown");
          newChildProps.onTouchStart = this.createTwoChains("onTouchStart");
        }
        if (this.isMouseEnterToShow()) {
          newChildProps.onMouseEnter = this.onMouseEnter;
          if (alignPoint2) {
            newChildProps.onMouseMove = this.onMouseMove;
          }
        } else {
          newChildProps.onMouseEnter = this.createTwoChains("onMouseEnter");
        }
        if (this.isMouseLeaveToHide()) {
          newChildProps.onMouseLeave = this.onMouseLeave;
        } else {
          newChildProps.onMouseLeave = this.createTwoChains("onMouseLeave");
        }
        if (this.isFocusToShow() || this.isBlurToHide()) {
          newChildProps.onFocus = this.onFocus;
          newChildProps.onBlur = this.onBlur;
        } else {
          newChildProps.onFocus = this.createTwoChains("onFocus");
          newChildProps.onBlur = this.createTwoChains("onBlur");
        }
        var childrenClassName = classNames(child && child.props && child.props.className, className);
        if (childrenClassName) {
          newChildProps.className = childrenClassName;
        }
        var cloneProps = _objectSpread2$1({}, newChildProps);
        if (supportRef(child)) {
          cloneProps.ref = composeRef(this.triggerRef, child.ref);
        }
        var trigger = /* @__PURE__ */ react.exports.cloneElement(child, cloneProps);
        var portal;
        if (popupVisible || this.popupRef.current || forceRender) {
          portal = /* @__PURE__ */ react.exports.createElement(PortalComponent, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }
        if (!popupVisible && autoDestroy) {
          portal = null;
        }
        return /* @__PURE__ */ react.exports.createElement(TriggerContext.Provider, {
          value: this.triggerContextValue
        }, trigger, portal);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref, prevState) {
        var popupVisible = _ref.popupVisible;
        var newState = {};
        if (popupVisible !== void 0 && prevState.popupVisible !== popupVisible) {
          newState.popupVisible = popupVisible;
          newState.prevPopupVisible = prevState.popupVisible;
        }
        return newState;
      }
    }]);
    return Trigger3;
  }(react.exports.Component);
  _defineProperty$1(Trigger2, "contextType", TriggerContext);
  _defineProperty$1(Trigger2, "defaultProps", {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  });
  return Trigger2;
}
const Trigger = generateTrigger(Portal);
const initMotionCommon = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
const initMotionCommonLeave = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
const initMotion = function(motionCls, inKeyframes, outKeyframes, duration) {
  let sameLevel = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const sameLevelPrefix = sameLevel ? "&" : "";
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
      animationPlayState: "paused"
    }),
    [`${sameLevelPrefix}${motionCls}-leave`]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
      animationPlayState: "paused"
    }),
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: "running"
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
};
const moveDownIn = new Keyframe("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveDownOut = new Keyframe("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveLeftIn = new Keyframe("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveLeftOut = new Keyframe("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveRightIn = new Keyframe("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveRightOut = new Keyframe("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveUpIn = new Keyframe("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveUpOut = new Keyframe("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveMotion = {
  "move-up": {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  "move-down": {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  "move-left": {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  "move-right": {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};
const slideUpIn = new Keyframe("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideUpOut = new Keyframe("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideDownIn = new Keyframe("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
});
const slideDownOut = new Keyframe("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
});
const slideLeftIn = new Keyframe("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideLeftOut = new Keyframe("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideRightIn = new Keyframe("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
});
const slideRightOut = new Keyframe("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
});
const slideMotion = {
  "slide-up": {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  "slide-down": {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  "slide-left": {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  "slide-right": {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};
function genPurePanel(Component, defaultPrefixCls, getDropdownCls) {
  return function PurePanel2(props) {
    const {
      prefixCls: customizePrefixCls,
      style
    } = props;
    const holderRef = react.exports.useRef(null);
    const [popupHeight, setPopupHeight] = react.exports.useState(0);
    const [popupWidth, setPopupWidth] = react.exports.useState(0);
    const [open, setOpen] = useMergedState(false, {
      value: props.open
    });
    const {
      getPrefixCls
    } = react.exports.useContext(ConfigContext);
    const prefixCls = getPrefixCls(defaultPrefixCls || "select", customizePrefixCls);
    react.exports.useEffect(() => {
      setOpen(true);
      if (typeof ResizeObserver !== "undefined") {
        const resizeObserver = new ResizeObserver((entries) => {
          const element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        const interval = setInterval(() => {
          var _a2;
          const dropdownCls = getDropdownCls ? `.${getDropdownCls(prefixCls)}` : `.${prefixCls}-dropdown`;
          const popup = (_a2 = holderRef.current) === null || _a2 === void 0 ? void 0 : _a2.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver.observe(popup);
          }
        }, 10);
        return () => {
          clearInterval(interval);
          resizeObserver.disconnect();
        };
      }
    }, []);
    return /* @__PURE__ */ react.exports.createElement(ConfigProvider, {
      theme: {
        token: {
          motionDurationFast: "0.01s",
          motionDurationMid: "0.01s",
          motionDurationSlow: "0.01s"
        }
      }
    }, /* @__PURE__ */ react.exports.createElement("div", {
      ref: holderRef,
      style: {
        paddingBottom: popupHeight,
        position: "relative",
        width: "fit-content",
        minWidth: popupWidth
      }
    }, /* @__PURE__ */ react.exports.createElement(Component, Object.assign({}, props, {
      style: Object.assign(Object.assign({}, style), {
        margin: 0
      }),
      open,
      visible: open,
      getPopupContainer: () => holderRef.current
    }))));
  };
}
var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
};
var dayjs_min = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
      var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
      return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
    } }, m = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, v = { s: m, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date())
        return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
      return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(t2) {
      return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return void 0 === t2;
    } }, g = "en", D = {};
    D[g] = M;
    var p = function(t2) {
      return t2 instanceof _;
    }, S = function t2(e2, n2, r2) {
      var i2;
      if (!e2)
        return g;
      if ("string" == typeof e2) {
        var s2 = e2.toLowerCase();
        D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
        var u2 = e2.split("-");
        if (!i2 && u2.length > 1)
          return t2(u2[0]);
      } else {
        var a2 = e2.name;
        D[a2] = e2, i2 = a2;
      }
      return !r2 && i2 && (g = i2), i2 || !r2 && g;
    }, w = function(t2, e2) {
      if (p(t2))
        return t2.clone();
      var n2 = "object" == typeof e2 ? e2 : {};
      return n2.date = t2, n2.args = arguments, new _(n2);
    }, O = v;
    O.l = S, O.i = p, O.w = function(t2, e2) {
      return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var _ = function() {
      function M2(t2) {
        this.$L = S(t2.locale, null, true), this.parse(t2);
      }
      var m2 = M2.prototype;
      return m2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (null === e2)
            return new Date(NaN);
          if (O.u(e2))
            return new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if ("string" == typeof e2 && !/Z$/i.test(e2)) {
            var r2 = e2.match($);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.$x = t2.x || {}, this.init();
      }, m2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m2.$utils = function() {
        return O;
      }, m2.isValid = function() {
        return !(this.$d.toString() === l);
      }, m2.isSame = function(t2, e2) {
        var n2 = w(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m2.isAfter = function(t2, e2) {
        return w(t2) < this.startOf(e2);
      }, m2.isBefore = function(t2, e2) {
        return this.endOf(e2) < w(t2);
      }, m2.$g = function(t2, e2, n2) {
        return O.u(t2) ? this[e2] : this.set(n2, t2);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t2, e2) {
        var n2 = this, r2 = !!O.u(e2) || e2, h2 = O.p(t2), l2 = function(t3, e3) {
          var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a);
        }, $2 = function(t3, e3) {
          return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
        switch (h2) {
          case c:
            return r2 ? l2(1, 0) : l2(31, 11);
          case f:
            return r2 ? l2(1, M3) : l2(0, M3 + 1);
          case o:
            var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
            return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
          case a:
          case d:
            return $2(v2 + "Hours", 0);
          case u:
            return $2(v2 + "Minutes", 1);
          case s:
            return $2(v2 + "Seconds", 2);
          case i:
            return $2(v2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, m2.$set = function(t2, e2) {
        var n2, o2 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
        if (o2 === f || o2 === c) {
          var y2 = this.clone().set(d, 1);
          y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          l2 && this.$d[l2]($2);
        return this.init(), this;
      }, m2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, m2.get = function(t2) {
        return this[O.p(t2)]();
      }, m2.add = function(r2, h2) {
        var d2, l2 = this;
        r2 = Number(r2);
        var $2 = O.p(h2), y2 = function(t2) {
          var e2 = w(l2);
          return O.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
        };
        if ($2 === f)
          return this.set(f, this.$M + r2);
        if ($2 === c)
          return this.set(c, this.$y + r2);
        if ($2 === a)
          return y2(1);
        if ($2 === o)
          return y2(7);
        var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
        return O.w(m3, this);
      }, m2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, m2.format = function(t2) {
        var e2 = this, n2 = this.$locale();
        if (!this.isValid())
          return n2.invalidDate || l;
        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h2 = function(t3, n3, i3, s3) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
        }, c2 = function(t3) {
          return O.s(s2 % 12 || 12, t3, "0");
        }, d2 = n2.meridiem || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        }, $2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o2, 2), ddd: h2(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
        return r2.replace(y, function(t3, e3) {
          return e3 || $2[t3] || i2.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r2, d2, l2) {
        var $2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, v2 = this - M3, g2 = O.m(this, M3);
        return g2 = ($2 = {}, $2[c] = g2 / 12, $2[f] = g2, $2[h] = g2 / 3, $2[o] = (v2 - m3) / 6048e5, $2[a] = (v2 - m3) / 864e5, $2[u] = v2 / n, $2[s] = v2 / e, $2[i] = v2 / t, $2)[y2] || v2, l2 ? g2 : O.a(g2);
      }, m2.daysInMonth = function() {
        return this.endOf(f).$D;
      }, m2.$locale = function() {
        return D[this.$L];
      }, m2.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = S(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m2.clone = function() {
        return O.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), T = _.prototype;
    return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t2) {
      T[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), w.extend = function(t2, e2) {
      return t2.$i || (t2(e2, _, w), t2.$i = true), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
      return w(1e3 * t2);
    }, w.en = D[g], w.Ls = D, w.p = {}, w;
  });
})(dayjs_min);
const dayjs = dayjs_min.exports;
var weekday$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      t.prototype.weekday = function(e2) {
        var t2 = this.$locale().weekStart || 0, i = this.$W, n = (i < t2 ? i + 7 : i) - t2;
        return this.$utils().u(e2) ? n : this.subtract(n, "day").add(e2, "day");
      };
    };
  });
})(weekday$1);
const weekday = weekday$1.exports;
var localeData$1 = { exports: {} };
(function(module, exports) {
  !function(n, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    return function(n, e, t) {
      var r = e.prototype, o = function(n2) {
        return n2 && (n2.indexOf ? n2 : n2.s);
      }, u = function(n2, e2, t2, r2, u2) {
        var i2 = n2.name ? n2 : n2.$locale(), a2 = o(i2[e2]), s2 = o(i2[t2]), f = a2 || s2.map(function(n3) {
          return n3.slice(0, r2);
        });
        if (!u2)
          return f;
        var d = i2.weekStart;
        return f.map(function(n3, e3) {
          return f[(e3 + (d || 0)) % 7];
        });
      }, i = function() {
        return t.Ls[t.locale()];
      }, a = function(n2, e2) {
        return n2.formats[e2] || function(n3) {
          return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n4, e3, t2) {
            return e3 || t2.slice(1);
          });
        }(n2.formats[e2.toUpperCase()]);
      }, s = function() {
        var n2 = this;
        return { months: function(e2) {
          return e2 ? e2.format("MMMM") : u(n2, "months");
        }, monthsShort: function(e2) {
          return e2 ? e2.format("MMM") : u(n2, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return n2.$locale().weekStart || 0;
        }, weekdays: function(e2) {
          return e2 ? e2.format("dddd") : u(n2, "weekdays");
        }, weekdaysMin: function(e2) {
          return e2 ? e2.format("dd") : u(n2, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(e2) {
          return e2 ? e2.format("ddd") : u(n2, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(e2) {
          return a(n2.$locale(), e2);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      r.localeData = function() {
        return s.bind(this)();
      }, t.localeData = function() {
        var n2 = i();
        return { firstDayOfWeek: function() {
          return n2.weekStart || 0;
        }, weekdays: function() {
          return t.weekdays();
        }, weekdaysShort: function() {
          return t.weekdaysShort();
        }, weekdaysMin: function() {
          return t.weekdaysMin();
        }, months: function() {
          return t.months();
        }, monthsShort: function() {
          return t.monthsShort();
        }, longDateFormat: function(e2) {
          return a(n2, e2);
        }, meridiem: n2.meridiem, ordinal: n2.ordinal };
      }, t.months = function() {
        return u(i(), "months");
      }, t.monthsShort = function() {
        return u(i(), "monthsShort", "months", 3);
      }, t.weekdays = function(n2) {
        return u(i(), "weekdays", null, null, n2);
      }, t.weekdaysShort = function(n2) {
        return u(i(), "weekdaysShort", "weekdays", 3, n2);
      }, t.weekdaysMin = function(n2) {
        return u(i(), "weekdaysMin", "weekdays", 2, n2);
      };
    };
  });
})(localeData$1);
const localeData = localeData$1.exports;
var weekOfYear$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    var e = "week", t = "year";
    return function(i, n, r) {
      var f = n.prototype;
      f.week = function(i2) {
        if (void 0 === i2 && (i2 = null), null !== i2)
          return this.add(7 * (i2 - this.week()), "day");
        var n2 = this.$locale().yearStart || 1;
        if (11 === this.month() && this.date() > 25) {
          var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
          if (f2.isBefore(s))
            return 1;
        }
        var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
        return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
      }, f.weeks = function(e2) {
        return void 0 === e2 && (e2 = null), this.week(e2);
      };
    };
  });
})(weekOfYear$1);
const weekOfYear = weekOfYear$1.exports;
var weekYear$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      t.prototype.weekYear = function() {
        var e2 = this.month(), t2 = this.week(), n = this.year();
        return 1 === t2 && 11 === e2 ? n + 1 : 0 === e2 && t2 >= 52 ? n - 1 : n;
      };
    };
  });
})(weekYear$1);
const weekYear = weekYear$1.exports;
var advancedFormat$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      var r = t.prototype, n = r.format;
      r.format = function(e2) {
        var t2 = this, r2 = this.$locale();
        if (!this.isValid())
          return n.bind(this)(e2);
        var s = this.$utils(), a = (e2 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e3) {
          switch (e3) {
            case "Q":
              return Math.ceil((t2.$M + 1) / 3);
            case "Do":
              return r2.ordinal(t2.$D);
            case "gggg":
              return t2.weekYear();
            case "GGGG":
              return t2.isoWeekYear();
            case "wo":
              return r2.ordinal(t2.week(), "W");
            case "w":
            case "ww":
              return s.s(t2.week(), "w" === e3 ? 1 : 2, "0");
            case "W":
            case "WW":
              return s.s(t2.isoWeek(), "W" === e3 ? 1 : 2, "0");
            case "k":
            case "kk":
              return s.s(String(0 === t2.$H ? 24 : t2.$H), "k" === e3 ? 1 : 2, "0");
            case "X":
              return Math.floor(t2.$d.getTime() / 1e3);
            case "x":
              return t2.$d.getTime();
            case "z":
              return "[" + t2.offsetName() + "]";
            case "zzz":
              return "[" + t2.offsetName("long") + "]";
            default:
              return e3;
          }
        });
        return n.bind(this)(a);
      };
    };
  });
})(advancedFormat$1);
const advancedFormat = advancedFormat$1.exports;
var customParseFormat$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d\d/, r = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, o = {}, s = function(e2) {
      return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
    };
    var a = function(e2) {
      return function(t2) {
        this[e2] = +t2;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
      (this.zone || (this.zone = {})).offset = function(e3) {
        if (!e3)
          return 0;
        if ("Z" === e3)
          return 0;
        var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
        return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
      }(e2);
    }], h = function(e2) {
      var t2 = o[e2];
      return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
    }, u = function(e2, t2) {
      var n2, r2 = o.meridiem;
      if (r2) {
        for (var i2 = 1; i2 <= 24; i2 += 1)
          if (e2.indexOf(r2(i2, 0, t2)) > -1) {
            n2 = i2 > 12;
            break;
          }
      } else
        n2 = e2 === (t2 ? "pm" : "PM");
      return n2;
    }, d = { A: [i, function(e2) {
      this.afternoon = u(e2, false);
    }], a: [i, function(e2) {
      this.afternoon = u(e2, true);
    }], S: [/\d/, function(e2) {
      this.milliseconds = 100 * +e2;
    }], SS: [n, function(e2) {
      this.milliseconds = 10 * +e2;
    }], SSS: [/\d{3}/, function(e2) {
      this.milliseconds = +e2;
    }], s: [r, a("seconds")], ss: [r, a("seconds")], m: [r, a("minutes")], mm: [r, a("minutes")], H: [r, a("hours")], h: [r, a("hours")], HH: [r, a("hours")], hh: [r, a("hours")], D: [r, a("day")], DD: [n, a("day")], Do: [i, function(e2) {
      var t2 = o.ordinal, n2 = e2.match(/\d+/);
      if (this.day = n2[0], t2)
        for (var r2 = 1; r2 <= 31; r2 += 1)
          t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
    }], M: [r, a("month")], MM: [n, a("month")], MMM: [i, function(e2) {
      var t2 = h("months"), n2 = (h("monthsShort") || t2.map(function(e3) {
        return e3.slice(0, 3);
      })).indexOf(e2) + 1;
      if (n2 < 1)
        throw new Error();
      this.month = n2 % 12 || n2;
    }], MMMM: [i, function(e2) {
      var t2 = h("months").indexOf(e2) + 1;
      if (t2 < 1)
        throw new Error();
      this.month = t2 % 12 || t2;
    }], Y: [/[+-]?\d+/, a("year")], YY: [n, function(e2) {
      this.year = s(e2);
    }], YYYY: [/\d{4}/, a("year")], Z: f, ZZ: f };
    function c(n2) {
      var r2, i2;
      r2 = n2, i2 = o && o.formats;
      for (var s2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t2, n3, r3) {
        var o2 = r3 && r3.toUpperCase();
        return n3 || i2[r3] || e[r3] || i2[o2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e2, t3, n4) {
          return t3 || n4.slice(1);
        });
      })).match(t), a2 = s2.length, f2 = 0; f2 < a2; f2 += 1) {
        var h2 = s2[f2], u2 = d[h2], c2 = u2 && u2[0], l = u2 && u2[1];
        s2[f2] = l ? { regex: c2, parser: l } : h2.replace(/^\[|\]$/g, "");
      }
      return function(e2) {
        for (var t2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
          var i3 = s2[n3];
          if ("string" == typeof i3)
            r3 += i3.length;
          else {
            var o2 = i3.regex, f3 = i3.parser, h3 = e2.slice(r3), u3 = o2.exec(h3)[0];
            f3.call(t2, u3), e2 = e2.replace(u3, "");
          }
        }
        return function(e3) {
          var t3 = e3.afternoon;
          if (void 0 !== t3) {
            var n4 = e3.hours;
            t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
          }
        }(t2), t2;
      };
    }
    return function(e2, t2, n2) {
      n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (s = e2.parseTwoDigitYear);
      var r2 = t2.prototype, i2 = r2.parse;
      r2.parse = function(e3) {
        var t3 = e3.date, r3 = e3.utc, s2 = e3.args;
        this.$u = r3;
        var a2 = s2[1];
        if ("string" == typeof a2) {
          var f2 = true === s2[2], h2 = true === s2[3], u2 = f2 || h2, d2 = s2[2];
          h2 && (d2 = s2[2]), o = this.$locale(), !f2 && d2 && (o = n2.Ls[d2]), this.$d = function(e4, t4, n3) {
            try {
              if (["x", "X"].indexOf(t4) > -1)
                return new Date(("X" === t4 ? 1e3 : 1) * e4);
              var r4 = c(t4)(e4), i3 = r4.year, o2 = r4.month, s3 = r4.day, a3 = r4.hours, f3 = r4.minutes, h3 = r4.seconds, u3 = r4.milliseconds, d3 = r4.zone, l2 = new Date(), m2 = s3 || (i3 || o2 ? 1 : l2.getDate()), M2 = i3 || l2.getFullYear(), Y = 0;
              i3 && !o2 || (Y = o2 > 0 ? o2 - 1 : l2.getMonth());
              var p = a3 || 0, v = f3 || 0, D = h3 || 0, g = u3 || 0;
              return d3 ? new Date(Date.UTC(M2, Y, m2, p, v, D, g + 60 * d3.offset * 1e3)) : n3 ? new Date(Date.UTC(M2, Y, m2, p, v, D, g)) : new Date(M2, Y, m2, p, v, D, g);
            } catch (e5) {
              return new Date("");
            }
          }(t3, a2, r3), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t3 != this.format(a2) && (this.$d = new Date("")), o = {};
        } else if (a2 instanceof Array)
          for (var l = a2.length, m = 1; m <= l; m += 1) {
            s2[1] = a2[m - 1];
            var M = n2.apply(this, s2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            m === l && (this.$d = new Date(""));
          }
        else
          i2.call(this, e3);
      };
    };
  });
})(customParseFormat$1);
const customParseFormat = customParseFormat$1.exports;
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(function(o, c) {
  var proto = c.prototype;
  var oldFormat = proto.format;
  proto.format = function f(formatStr) {
    var str = (formatStr || "").replace("Wo", "wo");
    return oldFormat.bind(this)(str);
  };
});
var localeMap = {
  bn_BD: "bn-bd",
  by_BY: "be",
  en_GB: "en-gb",
  en_US: "en",
  fr_BE: "fr",
  fr_CA: "fr-ca",
  hy_AM: "hy-am",
  kmr_IQ: "ku",
  nl_BE: "nl-be",
  pt_BR: "pt-br",
  zh_CN: "zh-cn",
  zh_HK: "zh-hk",
  zh_TW: "zh-tw"
};
var parseLocale = function parseLocale2(locale) {
  var mapLocale = localeMap[locale];
  return mapLocale || locale.split("_")[0];
};
var parseNoMatchNotice = function parseNoMatchNotice2() {
  noteOnce(false, "Not match any format. Please help to fire a issue about this.");
};
var generateConfig = {
  getNow: function getNow() {
    return dayjs();
  },
  getFixedDate: function getFixedDate(string) {
    return dayjs(string, ["YYYY-M-DD", "YYYY-MM-DD"]);
  },
  getEndDate: function getEndDate(date) {
    return date.endOf("month");
  },
  getWeekDay: function getWeekDay(date) {
    var clone2 = date.locale("en");
    return clone2.weekday() + clone2.localeData().firstDayOfWeek();
  },
  getYear: function getYear(date) {
    return date.year();
  },
  getMonth: function getMonth(date) {
    return date.month();
  },
  getDate: function getDate(date) {
    return date.date();
  },
  getHour: function getHour(date) {
    return date.hour();
  },
  getMinute: function getMinute(date) {
    return date.minute();
  },
  getSecond: function getSecond(date) {
    return date.second();
  },
  addYear: function addYear(date, diff) {
    return date.add(diff, "year");
  },
  addMonth: function addMonth(date, diff) {
    return date.add(diff, "month");
  },
  addDate: function addDate(date, diff) {
    return date.add(diff, "day");
  },
  setYear: function setYear(date, year) {
    return date.year(year);
  },
  setMonth: function setMonth(date, month) {
    return date.month(month);
  },
  setDate: function setDate(date, num) {
    return date.date(num);
  },
  setHour: function setHour(date, hour) {
    return date.hour(hour);
  },
  setMinute: function setMinute(date, minute) {
    return date.minute(minute);
  },
  setSecond: function setSecond(date, second) {
    return date.second(second);
  },
  isAfter: function isAfter(date1, date2) {
    return date1.isAfter(date2);
  },
  isValidate: function isValidate(date) {
    return date.isValid();
  },
  locale: {
    getWeekFirstDay: function getWeekFirstDay(locale) {
      return dayjs().locale(parseLocale(locale)).localeData().firstDayOfWeek();
    },
    getWeekFirstDate: function getWeekFirstDate(locale, date) {
      return date.locale(parseLocale(locale)).weekday(0);
    },
    getWeek: function getWeek(locale, date) {
      return date.locale(parseLocale(locale)).week();
    },
    getShortWeekDays: function getShortWeekDays(locale) {
      return dayjs().locale(parseLocale(locale)).localeData().weekdaysMin();
    },
    getShortMonths: function getShortMonths(locale) {
      return dayjs().locale(parseLocale(locale)).localeData().monthsShort();
    },
    format: function format(locale, date, _format) {
      return date.locale(parseLocale(locale)).format(_format);
    },
    parse: function parse(locale, text, formats) {
      var localeStr = parseLocale(locale);
      for (var i = 0; i < formats.length; i += 1) {
        var format2 = formats[i];
        var formatText = text;
        if (format2.includes("wo") || format2.includes("Wo")) {
          var year = formatText.split("-")[0];
          var weekStr = formatText.split("-")[1];
          var firstWeek = dayjs(year, "YYYY").startOf("year").locale(localeStr);
          for (var j = 0; j <= 52; j += 1) {
            var nextWeek = firstWeek.add(j, "week");
            if (nextWeek.format("Wo") === weekStr) {
              return nextWeek;
            }
          }
          parseNoMatchNotice();
          return null;
        }
        var date = dayjs(formatText, format2, true).locale(localeStr);
        if (date.isValid()) {
          return date;
        }
      }
      if (text) {
        parseNoMatchNotice();
      }
      return null;
    }
  }
};
var PanelContext = /* @__PURE__ */ react.exports.createContext({});
var HIDDEN_STYLE = {
  visibility: "hidden"
};
function Header(_ref) {
  var prefixCls = _ref.prefixCls, _ref$prevIcon = _ref.prevIcon, prevIcon = _ref$prevIcon === void 0 ? "\u2039" : _ref$prevIcon, _ref$nextIcon = _ref.nextIcon, nextIcon = _ref$nextIcon === void 0 ? "\u203A" : _ref$nextIcon, _ref$superPrevIcon = _ref.superPrevIcon, superPrevIcon = _ref$superPrevIcon === void 0 ? "\xAB" : _ref$superPrevIcon, _ref$superNextIcon = _ref.superNextIcon, superNextIcon = _ref$superNextIcon === void 0 ? "\xBB" : _ref$superNextIcon, onSuperPrev = _ref.onSuperPrev, onSuperNext = _ref.onSuperNext, onPrev = _ref.onPrev, onNext = _ref.onNext, children = _ref.children;
  var _React$useContext = react.exports.useContext(PanelContext), hideNextBtn = _React$useContext.hideNextBtn, hidePrevBtn = _React$useContext.hidePrevBtn;
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: prefixCls
  }, onSuperPrev && /* @__PURE__ */ react.exports.createElement("button", {
    type: "button",
    onClick: onSuperPrev,
    tabIndex: -1,
    className: "".concat(prefixCls, "-super-prev-btn"),
    style: hidePrevBtn ? HIDDEN_STYLE : {}
  }, superPrevIcon), onPrev && /* @__PURE__ */ react.exports.createElement("button", {
    type: "button",
    onClick: onPrev,
    tabIndex: -1,
    className: "".concat(prefixCls, "-prev-btn"),
    style: hidePrevBtn ? HIDDEN_STYLE : {}
  }, prevIcon), /* @__PURE__ */ react.exports.createElement("div", {
    className: "".concat(prefixCls, "-view")
  }, children), onNext && /* @__PURE__ */ react.exports.createElement("button", {
    type: "button",
    onClick: onNext,
    tabIndex: -1,
    className: "".concat(prefixCls, "-next-btn"),
    style: hideNextBtn ? HIDDEN_STYLE : {}
  }, nextIcon), onSuperNext && /* @__PURE__ */ react.exports.createElement("button", {
    type: "button",
    onClick: onSuperNext,
    tabIndex: -1,
    className: "".concat(prefixCls, "-super-next-btn"),
    style: hideNextBtn ? HIDDEN_STYLE : {}
  }, superNextIcon));
}
function DecadeHeader(props) {
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, viewDate = props.viewDate, onPrevDecades = props.onPrevDecades, onNextDecades = props.onNextDecades;
  var _React$useContext = react.exports.useContext(PanelContext), hideHeader = _React$useContext.hideHeader;
  if (hideHeader) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  var yearNumber = generateConfig2.getYear(viewDate);
  var startYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  var endYear = startYear + DECADE_DISTANCE_COUNT - 1;
  return /* @__PURE__ */ react.exports.createElement(Header, _extends({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevDecades,
    onSuperNext: onNextDecades
  }), startYear, "-", endYear);
}
function setTime(generateConfig2, date, hour, minute, second) {
  var nextTime = generateConfig2.setHour(date, hour);
  nextTime = generateConfig2.setMinute(nextTime, minute);
  nextTime = generateConfig2.setSecond(nextTime, second);
  return nextTime;
}
function setDateTime(generateConfig2, date, defaultDate) {
  if (!defaultDate) {
    return date;
  }
  var newDate = date;
  newDate = generateConfig2.setHour(newDate, generateConfig2.getHour(defaultDate));
  newDate = generateConfig2.setMinute(newDate, generateConfig2.getMinute(defaultDate));
  newDate = generateConfig2.setSecond(newDate, generateConfig2.getSecond(defaultDate));
  return newDate;
}
function getLowerBoundTime(hour, minute, second, hourStep, minuteStep, secondStep) {
  var lowerBoundHour = Math.floor(hour / hourStep) * hourStep;
  if (lowerBoundHour < hour) {
    return [lowerBoundHour, 60 - minuteStep, 60 - secondStep];
  }
  var lowerBoundMinute = Math.floor(minute / minuteStep) * minuteStep;
  if (lowerBoundMinute < minute) {
    return [lowerBoundHour, lowerBoundMinute, 60 - secondStep];
  }
  var lowerBoundSecond = Math.floor(second / secondStep) * secondStep;
  return [lowerBoundHour, lowerBoundMinute, lowerBoundSecond];
}
function getLastDay(generateConfig2, date) {
  var year = generateConfig2.getYear(date);
  var month = generateConfig2.getMonth(date) + 1;
  var endDate = generateConfig2.getEndDate(generateConfig2.getFixedDate("".concat(year, "-").concat(month, "-01")));
  var lastDay = generateConfig2.getDate(endDate);
  var monthShow = month < 10 ? "0".concat(month) : "".concat(month);
  return "".concat(year, "-").concat(monthShow, "-").concat(lastDay);
}
function PanelBody(_ref) {
  var prefixCls = _ref.prefixCls, disabledDate = _ref.disabledDate, onSelect = _ref.onSelect, picker = _ref.picker, rowNum = _ref.rowNum, colNum = _ref.colNum, prefixColumn = _ref.prefixColumn, rowClassName = _ref.rowClassName, baseDate = _ref.baseDate, getCellClassName = _ref.getCellClassName, getCellText = _ref.getCellText, getCellNode = _ref.getCellNode, getCellDate = _ref.getCellDate, generateConfig2 = _ref.generateConfig, titleCell = _ref.titleCell, headerCells = _ref.headerCells;
  var _React$useContext = react.exports.useContext(PanelContext), onDateMouseEnter = _React$useContext.onDateMouseEnter, onDateMouseLeave = _React$useContext.onDateMouseLeave, mode = _React$useContext.mode;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var rows = [];
  for (var i = 0; i < rowNum; i += 1) {
    var row = [];
    var rowStartDate = void 0;
    var _loop = function _loop2(j2) {
      var _objectSpread22;
      var offset2 = i * colNum + j2;
      var currentDate = getCellDate(baseDate, offset2);
      var disabled = getCellDateDisabled({
        cellDate: currentDate,
        mode,
        disabledDate,
        generateConfig: generateConfig2
      });
      if (j2 === 0) {
        rowStartDate = currentDate;
        if (prefixColumn) {
          row.push(prefixColumn(rowStartDate));
        }
      }
      var title = titleCell && titleCell(currentDate);
      row.push(/* @__PURE__ */ react.exports.createElement("td", {
        key: j2,
        title,
        className: classNames(cellPrefixCls, _objectSpread2$1((_objectSpread22 = {}, _defineProperty$1(_objectSpread22, "".concat(cellPrefixCls, "-disabled"), disabled), _defineProperty$1(_objectSpread22, "".concat(cellPrefixCls, "-start"), getCellText(currentDate) === 1 || picker === "year" && Number(title) % 10 === 0), _defineProperty$1(_objectSpread22, "".concat(cellPrefixCls, "-end"), title === getLastDay(generateConfig2, currentDate) || picker === "year" && Number(title) % 10 === 9), _objectSpread22), getCellClassName(currentDate))),
        onClick: function onClick() {
          if (!disabled) {
            onSelect(currentDate);
          }
        },
        onMouseEnter: function onMouseEnter() {
          if (!disabled && onDateMouseEnter) {
            onDateMouseEnter(currentDate);
          }
        },
        onMouseLeave: function onMouseLeave() {
          if (!disabled && onDateMouseLeave) {
            onDateMouseLeave(currentDate);
          }
        }
      }, getCellNode ? getCellNode(currentDate) : /* @__PURE__ */ react.exports.createElement("div", {
        className: "".concat(cellPrefixCls, "-inner")
      }, getCellText(currentDate))));
    };
    for (var j = 0; j < colNum; j += 1) {
      _loop(j);
    }
    rows.push(/* @__PURE__ */ react.exports.createElement("tr", {
      key: i,
      className: rowClassName && rowClassName(rowStartDate)
    }, row));
  }
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: "".concat(prefixCls, "-body")
  }, /* @__PURE__ */ react.exports.createElement("table", {
    className: "".concat(prefixCls, "-content")
  }, headerCells && /* @__PURE__ */ react.exports.createElement("thead", null, /* @__PURE__ */ react.exports.createElement("tr", null, headerCells)), /* @__PURE__ */ react.exports.createElement("tbody", null, rows)));
}
var DECADE_COL_COUNT = 3;
var DECADE_ROW_COUNT = 4;
function DecadeBody(props) {
  var DECADE_UNIT_DIFF_DES = DECADE_UNIT_DIFF - 1;
  var prefixCls = props.prefixCls, viewDate = props.viewDate, generateConfig2 = props.generateConfig;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var yearNumber = generateConfig2.getYear(viewDate);
  var decadeYearNumber = Math.floor(yearNumber / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;
  var startDecadeYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  var endDecadeYear = startDecadeYear + DECADE_DISTANCE_COUNT - 1;
  var baseDecadeYear = generateConfig2.setYear(viewDate, startDecadeYear - Math.ceil((DECADE_COL_COUNT * DECADE_ROW_COUNT * DECADE_UNIT_DIFF - DECADE_DISTANCE_COUNT) / 2));
  var getCellClassName = function getCellClassName2(date) {
    var _ref;
    var startDecadeNumber = generateConfig2.getYear(date);
    var endDecadeNumber = startDecadeNumber + DECADE_UNIT_DIFF_DES;
    return _ref = {}, _defineProperty$1(_ref, "".concat(cellPrefixCls, "-in-view"), startDecadeYear <= startDecadeNumber && endDecadeNumber <= endDecadeYear), _defineProperty$1(_ref, "".concat(cellPrefixCls, "-selected"), startDecadeNumber === decadeYearNumber), _ref;
  };
  return /* @__PURE__ */ react.exports.createElement(PanelBody, _extends({}, props, {
    rowNum: DECADE_ROW_COUNT,
    colNum: DECADE_COL_COUNT,
    baseDate: baseDecadeYear,
    getCellText: function getCellText(date) {
      var startDecadeNumber = generateConfig2.getYear(date);
      return "".concat(startDecadeNumber, "-").concat(startDecadeNumber + DECADE_UNIT_DIFF_DES);
    },
    getCellClassName,
    getCellDate: function getCellDate(date, offset2) {
      return generateConfig2.addYear(date, offset2 * DECADE_UNIT_DIFF);
    }
  }));
}
var scrollIds = /* @__PURE__ */ new Map();
function waitElementReady(element, callback) {
  var id;
  function tryOrNextFrame() {
    if (isVisible(element)) {
      callback();
    } else {
      id = wrapperRaf(function() {
        tryOrNextFrame();
      });
    }
  }
  tryOrNextFrame();
  return function() {
    wrapperRaf.cancel(id);
  };
}
function scrollTo(element, to, duration) {
  if (scrollIds.get(element)) {
    cancelAnimationFrame(scrollIds.get(element));
  }
  if (duration <= 0) {
    scrollIds.set(element, requestAnimationFrame(function() {
      element.scrollTop = to;
    }));
    return;
  }
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  scrollIds.set(element, requestAnimationFrame(function() {
    element.scrollTop += perTick;
    if (element.scrollTop !== to) {
      scrollTo(element, to, duration - 10);
    }
  }));
}
function createKeyDownHandler(event, _ref) {
  var onLeftRight = _ref.onLeftRight, onCtrlLeftRight = _ref.onCtrlLeftRight, onUpDown = _ref.onUpDown, onPageUpDown = _ref.onPageUpDown, onEnter = _ref.onEnter;
  var which = event.which, ctrlKey = event.ctrlKey, metaKey = event.metaKey;
  switch (which) {
    case KeyCode.LEFT:
      if (ctrlKey || metaKey) {
        if (onCtrlLeftRight) {
          onCtrlLeftRight(-1);
          return true;
        }
      } else if (onLeftRight) {
        onLeftRight(-1);
        return true;
      }
      break;
    case KeyCode.RIGHT:
      if (ctrlKey || metaKey) {
        if (onCtrlLeftRight) {
          onCtrlLeftRight(1);
          return true;
        }
      } else if (onLeftRight) {
        onLeftRight(1);
        return true;
      }
      break;
    case KeyCode.UP:
      if (onUpDown) {
        onUpDown(-1);
        return true;
      }
      break;
    case KeyCode.DOWN:
      if (onUpDown) {
        onUpDown(1);
        return true;
      }
      break;
    case KeyCode.PAGE_UP:
      if (onPageUpDown) {
        onPageUpDown(-1);
        return true;
      }
      break;
    case KeyCode.PAGE_DOWN:
      if (onPageUpDown) {
        onPageUpDown(1);
        return true;
      }
      break;
    case KeyCode.ENTER:
      if (onEnter) {
        onEnter();
        return true;
      }
      break;
  }
  return false;
}
function getDefaultFormat(format2, picker, showTime, use12Hours) {
  var mergedFormat = format2;
  if (!mergedFormat) {
    switch (picker) {
      case "time":
        mergedFormat = use12Hours ? "hh:mm:ss a" : "HH:mm:ss";
        break;
      case "week":
        mergedFormat = "gggg-wo";
        break;
      case "month":
        mergedFormat = "YYYY-MM";
        break;
      case "quarter":
        mergedFormat = "YYYY-[Q]Q";
        break;
      case "year":
        mergedFormat = "YYYY";
        break;
      default:
        mergedFormat = showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
    }
  }
  return mergedFormat;
}
function getInputSize(picker, format2, generateConfig2) {
  var defaultSize = picker === "time" ? 8 : 10;
  var length = typeof format2 === "function" ? format2(generateConfig2.getNow()).length : format2.length;
  return Math.max(defaultSize, length) + 2;
}
var globalClickFunc = null;
var clickCallbacks = /* @__PURE__ */ new Set();
function addGlobalMouseDownEvent(callback) {
  if (!globalClickFunc && typeof window !== "undefined" && window.addEventListener) {
    globalClickFunc = function globalClickFunc2(e) {
      _toConsumableArray(clickCallbacks).forEach(function(queueFunc) {
        queueFunc(e);
      });
    };
    window.addEventListener("mousedown", globalClickFunc);
  }
  clickCallbacks.add(callback);
  return function() {
    clickCallbacks.delete(callback);
    if (clickCallbacks.size === 0) {
      window.removeEventListener("mousedown", globalClickFunc);
      globalClickFunc = null;
    }
  };
}
function getTargetFromEvent(e) {
  var target = e.target;
  if (e.composed && target.shadowRoot) {
    var _e$composedPath;
    return ((_e$composedPath = e.composedPath) === null || _e$composedPath === void 0 ? void 0 : _e$composedPath.call(e)[0]) || target;
  }
  return target;
}
var getYearNextMode = function getYearNextMode2(next) {
  if (next === "month" || next === "date") {
    return "year";
  }
  return next;
};
var getMonthNextMode = function getMonthNextMode2(next) {
  if (next === "date") {
    return "month";
  }
  return next;
};
var getQuarterNextMode = function getQuarterNextMode2(next) {
  if (next === "month" || next === "date") {
    return "quarter";
  }
  return next;
};
var getWeekNextMode = function getWeekNextMode2(next) {
  if (next === "date") {
    return "week";
  }
  return next;
};
var PickerModeMap = {
  year: getYearNextMode,
  month: getMonthNextMode,
  quarter: getQuarterNextMode,
  week: getWeekNextMode,
  time: null,
  date: null
};
function elementsContains(elements, target) {
  return elements.some(function(ele) {
    return ele && ele.contains(target);
  });
}
var DECADE_UNIT_DIFF = 10;
var DECADE_DISTANCE_COUNT = DECADE_UNIT_DIFF * 10;
function DecadePanel(props) {
  var prefixCls = props.prefixCls, onViewDateChange = props.onViewDateChange, generateConfig2 = props.generateConfig, viewDate = props.viewDate, operationRef = props.operationRef, onSelect = props.onSelect, onPanelChange = props.onPanelChange;
  var panelPrefixCls = "".concat(prefixCls, "-decade-panel");
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          onSelect(generateConfig2.addYear(viewDate, diff * DECADE_UNIT_DIFF), "key");
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          onSelect(generateConfig2.addYear(viewDate, diff * DECADE_DISTANCE_COUNT), "key");
        },
        onUpDown: function onUpDown(diff) {
          onSelect(generateConfig2.addYear(viewDate, diff * DECADE_UNIT_DIFF * DECADE_COL_COUNT), "key");
        },
        onEnter: function onEnter() {
          onPanelChange("year", viewDate);
        }
      });
    }
  };
  var onDecadesChange = function onDecadesChange2(diff) {
    var newDate = generateConfig2.addYear(viewDate, diff * DECADE_DISTANCE_COUNT);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  var onInternalSelect = function onInternalSelect2(date) {
    onSelect(date, "mouse");
    onPanelChange("year", date);
  };
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: panelPrefixCls
  }, /* @__PURE__ */ react.exports.createElement(DecadeHeader, _extends({}, props, {
    prefixCls,
    onPrevDecades: function onPrevDecades() {
      onDecadesChange(-1);
    },
    onNextDecades: function onNextDecades() {
      onDecadesChange(1);
    }
  })), /* @__PURE__ */ react.exports.createElement(DecadeBody, _extends({}, props, {
    prefixCls,
    onSelect: onInternalSelect
  })));
}
var WEEK_DAY_COUNT = 7;
function isNullEqual(value1, value2) {
  if (!value1 && !value2) {
    return true;
  }
  if (!value1 || !value2) {
    return false;
  }
  return void 0;
}
function isSameDecade(generateConfig2, decade1, decade2) {
  var equal = isNullEqual(decade1, decade2);
  if (typeof equal === "boolean") {
    return equal;
  }
  var num1 = Math.floor(generateConfig2.getYear(decade1) / 10);
  var num2 = Math.floor(generateConfig2.getYear(decade2) / 10);
  return num1 === num2;
}
function isSameYear(generateConfig2, year1, year2) {
  var equal = isNullEqual(year1, year2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return generateConfig2.getYear(year1) === generateConfig2.getYear(year2);
}
function getQuarter(generateConfig2, date) {
  var quota = Math.floor(generateConfig2.getMonth(date) / 3);
  return quota + 1;
}
function isSameQuarter(generateConfig2, quarter1, quarter2) {
  var equal = isNullEqual(quarter1, quarter2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return isSameYear(generateConfig2, quarter1, quarter2) && getQuarter(generateConfig2, quarter1) === getQuarter(generateConfig2, quarter2);
}
function isSameMonth(generateConfig2, month1, month2) {
  var equal = isNullEqual(month1, month2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return isSameYear(generateConfig2, month1, month2) && generateConfig2.getMonth(month1) === generateConfig2.getMonth(month2);
}
function isSameDate(generateConfig2, date1, date2) {
  var equal = isNullEqual(date1, date2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return generateConfig2.getYear(date1) === generateConfig2.getYear(date2) && generateConfig2.getMonth(date1) === generateConfig2.getMonth(date2) && generateConfig2.getDate(date1) === generateConfig2.getDate(date2);
}
function isSameTime(generateConfig2, time1, time2) {
  var equal = isNullEqual(time1, time2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return generateConfig2.getHour(time1) === generateConfig2.getHour(time2) && generateConfig2.getMinute(time1) === generateConfig2.getMinute(time2) && generateConfig2.getSecond(time1) === generateConfig2.getSecond(time2);
}
function isSameWeek(generateConfig2, locale, date1, date2) {
  var equal = isNullEqual(date1, date2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return generateConfig2.locale.getWeek(locale, date1) === generateConfig2.locale.getWeek(locale, date2);
}
function isEqual(generateConfig2, value1, value2) {
  return isSameDate(generateConfig2, value1, value2) && isSameTime(generateConfig2, value1, value2);
}
function isInRange(generateConfig2, startDate, endDate, current) {
  if (!startDate || !endDate || !current) {
    return false;
  }
  return !isSameDate(generateConfig2, startDate, current) && !isSameDate(generateConfig2, endDate, current) && generateConfig2.isAfter(current, startDate) && generateConfig2.isAfter(endDate, current);
}
function getWeekStartDate(locale, generateConfig2, value) {
  var weekFirstDay = generateConfig2.locale.getWeekFirstDay(locale);
  var monthStartDate = generateConfig2.setDate(value, 1);
  var startDateWeekDay = generateConfig2.getWeekDay(monthStartDate);
  var alignStartDate = generateConfig2.addDate(monthStartDate, weekFirstDay - startDateWeekDay);
  if (generateConfig2.getMonth(alignStartDate) === generateConfig2.getMonth(value) && generateConfig2.getDate(alignStartDate) > 1) {
    alignStartDate = generateConfig2.addDate(alignStartDate, -7);
  }
  return alignStartDate;
}
function getClosingViewDate(viewDate, picker, generateConfig2) {
  var offset2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  switch (picker) {
    case "year":
      return generateConfig2.addYear(viewDate, offset2 * 10);
    case "quarter":
    case "month":
      return generateConfig2.addYear(viewDate, offset2);
    default:
      return generateConfig2.addMonth(viewDate, offset2);
  }
}
function formatValue(value, _ref) {
  var generateConfig2 = _ref.generateConfig, locale = _ref.locale, format2 = _ref.format;
  return typeof format2 === "function" ? format2(value) : generateConfig2.locale.format(locale.locale, value, format2);
}
function parseValue(value, _ref2) {
  var generateConfig2 = _ref2.generateConfig, locale = _ref2.locale, formatList = _ref2.formatList;
  if (!value || typeof formatList[0] === "function") {
    return null;
  }
  return generateConfig2.locale.parse(locale.locale, value, formatList);
}
function getCellDateDisabled(_ref3) {
  var cellDate = _ref3.cellDate, mode = _ref3.mode, disabledDate = _ref3.disabledDate, generateConfig2 = _ref3.generateConfig;
  if (!disabledDate)
    return false;
  var getDisabledFromRange = function getDisabledFromRange2(currentMode, start, end) {
    var current = start;
    while (current <= end) {
      var _date = void 0;
      switch (currentMode) {
        case "date": {
          _date = generateConfig2.setDate(cellDate, current);
          if (!disabledDate(_date)) {
            return false;
          }
          break;
        }
        case "month": {
          _date = generateConfig2.setMonth(cellDate, current);
          if (!getCellDateDisabled({
            cellDate: _date,
            mode: "month",
            generateConfig: generateConfig2,
            disabledDate
          })) {
            return false;
          }
          break;
        }
        case "year": {
          _date = generateConfig2.setYear(cellDate, current);
          if (!getCellDateDisabled({
            cellDate: _date,
            mode: "year",
            generateConfig: generateConfig2,
            disabledDate
          })) {
            return false;
          }
          break;
        }
      }
      current += 1;
    }
    return true;
  };
  switch (mode) {
    case "date":
    case "week": {
      return disabledDate(cellDate);
    }
    case "month": {
      var startDate = 1;
      var endDate = generateConfig2.getDate(generateConfig2.getEndDate(cellDate));
      return getDisabledFromRange("date", startDate, endDate);
    }
    case "quarter": {
      var startMonth = Math.floor(generateConfig2.getMonth(cellDate) / 3) * 3;
      var endMonth = startMonth + 2;
      return getDisabledFromRange("month", startMonth, endMonth);
    }
    case "year": {
      return getDisabledFromRange("month", 0, 11);
    }
    case "decade": {
      var year = generateConfig2.getYear(cellDate);
      var startYear = Math.floor(year / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;
      var endYear = startYear + DECADE_UNIT_DIFF - 1;
      return getDisabledFromRange("year", startYear, endYear);
    }
  }
}
function useValueTexts(value, _ref) {
  var formatList = _ref.formatList, generateConfig2 = _ref.generateConfig, locale = _ref.locale;
  return useMemo(function() {
    if (!value) {
      return [[""], ""];
    }
    var firstValueText = "";
    var fullValueTexts = [];
    for (var i = 0; i < formatList.length; i += 1) {
      var format2 = formatList[i];
      var formatStr = formatValue(value, {
        generateConfig: generateConfig2,
        locale,
        format: format2
      });
      fullValueTexts.push(formatStr);
      if (i === 0) {
        firstValueText = formatStr;
      }
    }
    return [fullValueTexts, firstValueText];
  }, [value, formatList], function(prev, next) {
    return !isEqual(generateConfig2, prev[0], next[0]) || !shallowequal(prev[1], next[1]);
  });
}
function useHoverValue(valueText, _ref) {
  var formatList = _ref.formatList, generateConfig2 = _ref.generateConfig, locale = _ref.locale;
  var _useState = react.exports.useState(null), _useState2 = _slicedToArray(_useState, 2), value = _useState2[0], internalSetValue = _useState2[1];
  var raf = react.exports.useRef(null);
  function setValue(val) {
    var immediately = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    cancelAnimationFrame(raf.current);
    if (immediately) {
      internalSetValue(val);
      return;
    }
    raf.current = requestAnimationFrame(function() {
      internalSetValue(val);
    });
  }
  var _useValueTexts = useValueTexts(value, {
    formatList,
    generateConfig: generateConfig2,
    locale
  }), _useValueTexts2 = _slicedToArray(_useValueTexts, 2), firstText = _useValueTexts2[1];
  function onEnter(date) {
    setValue(date);
  }
  function onLeave() {
    var immediately = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    setValue(null, immediately);
  }
  react.exports.useEffect(function() {
    onLeave(true);
  }, [valueText]);
  react.exports.useEffect(function() {
    return function() {
      return cancelAnimationFrame(raf.current);
    };
  }, []);
  return [firstText, onEnter, onLeave];
}
function usePickerInput(_ref) {
  var open = _ref.open, value = _ref.value, isClickOutside = _ref.isClickOutside, triggerOpen = _ref.triggerOpen, forwardKeyDown = _ref.forwardKeyDown, _onKeyDown = _ref.onKeyDown, blurToCancel = _ref.blurToCancel, onSubmit = _ref.onSubmit, onCancel = _ref.onCancel, _onFocus = _ref.onFocus, _onBlur = _ref.onBlur;
  var _useState = react.exports.useState(false), _useState2 = _slicedToArray(_useState, 2), typing = _useState2[0], setTyping = _useState2[1];
  var _useState3 = react.exports.useState(false), _useState4 = _slicedToArray(_useState3, 2), focused = _useState4[0], setFocused = _useState4[1];
  var preventBlurRef = react.exports.useRef(false);
  var valueChangedRef = react.exports.useRef(false);
  var preventDefaultRef = react.exports.useRef(false);
  var inputProps = {
    onMouseDown: function onMouseDown() {
      setTyping(true);
      triggerOpen(true);
    },
    onKeyDown: function onKeyDown(e) {
      var preventDefault = function preventDefault2() {
        preventDefaultRef.current = true;
      };
      _onKeyDown(e, preventDefault);
      if (preventDefaultRef.current)
        return;
      switch (e.which) {
        case KeyCode.ENTER: {
          if (!open) {
            triggerOpen(true);
          } else if (onSubmit() !== false) {
            setTyping(true);
          }
          e.preventDefault();
          return;
        }
        case KeyCode.TAB: {
          if (typing && open && !e.shiftKey) {
            setTyping(false);
            e.preventDefault();
          } else if (!typing && open) {
            if (!forwardKeyDown(e) && e.shiftKey) {
              setTyping(true);
              e.preventDefault();
            }
          }
          return;
        }
        case KeyCode.ESC: {
          setTyping(true);
          onCancel();
          return;
        }
      }
      if (!open && ![KeyCode.SHIFT].includes(e.which)) {
        triggerOpen(true);
      } else if (!typing) {
        forwardKeyDown(e);
      }
    },
    onFocus: function onFocus(e) {
      setTyping(true);
      setFocused(true);
      if (_onFocus) {
        _onFocus(e);
      }
    },
    onBlur: function onBlur(e) {
      if (preventBlurRef.current || !isClickOutside(document.activeElement)) {
        preventBlurRef.current = false;
        return;
      }
      if (blurToCancel) {
        setTimeout(function() {
          var _document = document, activeElement = _document.activeElement;
          while (activeElement && activeElement.shadowRoot) {
            activeElement = activeElement.shadowRoot.activeElement;
          }
          if (isClickOutside(activeElement)) {
            onCancel();
          }
        }, 0);
      } else if (open) {
        triggerOpen(false);
        if (valueChangedRef.current) {
          onSubmit();
        }
      }
      setFocused(false);
      if (_onBlur) {
        _onBlur(e);
      }
    }
  };
  react.exports.useEffect(function() {
    valueChangedRef.current = false;
  }, [open]);
  react.exports.useEffect(function() {
    valueChangedRef.current = true;
  }, [value]);
  react.exports.useEffect(function() {
    return addGlobalMouseDownEvent(function(e) {
      var target = getTargetFromEvent(e);
      if (open) {
        var clickedOutside = isClickOutside(target);
        if (!clickedOutside) {
          preventBlurRef.current = true;
          requestAnimationFrame(function() {
            preventBlurRef.current = false;
          });
        } else if (!focused || clickedOutside) {
          triggerOpen(false);
        }
      }
    });
  });
  return [inputProps, {
    focused,
    typing
  }];
}
function usePresets(presets, legacyRanges) {
  return react.exports.useMemo(function() {
    if (presets) {
      return presets;
    }
    if (legacyRanges) {
      warningOnce(false, "`ranges` is deprecated. Please use `presets` instead.");
      var rangeLabels = Object.keys(legacyRanges);
      return rangeLabels.map(function(label) {
        var range = legacyRanges[label];
        var newValues = typeof range === "function" ? range() : range;
        return {
          label,
          value: newValues
        };
      });
    }
    return [];
  }, [presets, legacyRanges]);
}
function useTextValueMapping(_ref) {
  var valueTexts = _ref.valueTexts, onTextChange = _ref.onTextChange;
  var _React$useState = react.exports.useState(""), _React$useState2 = _slicedToArray(_React$useState, 2), text = _React$useState2[0], setInnerText = _React$useState2[1];
  var valueTextsRef = react.exports.useRef([]);
  valueTextsRef.current = valueTexts;
  function triggerTextChange(value) {
    setInnerText(value);
    onTextChange(value);
  }
  function resetText() {
    setInnerText(valueTextsRef.current[0]);
  }
  useLayoutEffect(function() {
    if (valueTexts.every(function(valText) {
      return valText !== text;
    })) {
      resetText();
    }
  }, [valueTexts.join("||")]);
  return [text, triggerTextChange, resetText];
}
function TimeHeader(props) {
  var _React$useContext = react.exports.useContext(PanelContext), hideHeader = _React$useContext.hideHeader;
  if (hideHeader) {
    return null;
  }
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, locale = props.locale, value = props.value, format2 = props.format;
  var headerPrefixCls = "".concat(prefixCls, "-header");
  return /* @__PURE__ */ react.exports.createElement(Header, {
    prefixCls: headerPrefixCls
  }, value ? formatValue(value, {
    locale,
    format: format2,
    generateConfig: generateConfig2
  }) : "\xA0");
}
function TimeUnitColumn(props) {
  var prefixCls = props.prefixCls, units = props.units, onSelect = props.onSelect, value = props.value, active = props.active, hideDisabledOptions = props.hideDisabledOptions;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var _React$useContext = react.exports.useContext(PanelContext), open = _React$useContext.open;
  var ulRef = react.exports.useRef(null);
  var liRefs = react.exports.useRef(/* @__PURE__ */ new Map());
  var scrollRef = react.exports.useRef();
  react.exports.useLayoutEffect(function() {
    var li = liRefs.current.get(value);
    if (li && open !== false) {
      scrollTo(ulRef.current, li.offsetTop, 120);
    }
  }, [value]);
  react.exports.useLayoutEffect(function() {
    if (open) {
      var li = liRefs.current.get(value);
      if (li) {
        scrollRef.current = waitElementReady(li, function() {
          scrollTo(ulRef.current, li.offsetTop, 0);
        });
      }
    }
    return function() {
      var _scrollRef$current;
      (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.call(scrollRef);
    };
  }, [open]);
  return /* @__PURE__ */ react.exports.createElement("ul", {
    className: classNames("".concat(prefixCls, "-column"), _defineProperty$1({}, "".concat(prefixCls, "-column-active"), active)),
    ref: ulRef,
    style: {
      position: "relative"
    }
  }, units.map(function(unit) {
    var _classNames2;
    if (hideDisabledOptions && unit.disabled) {
      return null;
    }
    return /* @__PURE__ */ react.exports.createElement("li", {
      key: unit.value,
      ref: function ref(element) {
        liRefs.current.set(unit.value, element);
      },
      className: classNames(cellPrefixCls, (_classNames2 = {}, _defineProperty$1(_classNames2, "".concat(cellPrefixCls, "-disabled"), unit.disabled), _defineProperty$1(_classNames2, "".concat(cellPrefixCls, "-selected"), value === unit.value), _classNames2)),
      onClick: function onClick() {
        if (unit.disabled) {
          return;
        }
        onSelect(unit.value);
      }
    }, /* @__PURE__ */ react.exports.createElement("div", {
      className: "".concat(cellPrefixCls, "-inner")
    }, unit.label));
  }));
}
function leftPad(str, length) {
  var fill = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  var current = String(str);
  while (current.length < length) {
    current = "".concat(fill).concat(str);
  }
  return current;
}
var tuple = function tuple2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
function toArray$1(val) {
  if (val === null || val === void 0) {
    return [];
  }
  return Array.isArray(val) ? val : [val];
}
function getDataOrAriaProps(props) {
  var retProps = {};
  Object.keys(props).forEach(function(key) {
    if ((key.substr(0, 5) === "data-" || key.substr(0, 5) === "aria-" || key === "role" || key === "name") && key.substr(0, 7) !== "data-__") {
      retProps[key] = props[key];
    }
  });
  return retProps;
}
function getValue(values, index2) {
  return values ? values[index2] : null;
}
function updateValues(values, value, index2) {
  var newValues = [getValue(values, 0), getValue(values, 1)];
  newValues[index2] = typeof value === "function" ? value(newValues[index2]) : value;
  if (!newValues[0] && !newValues[1]) {
    return null;
  }
  return newValues;
}
function shouldUnitsUpdate(prevUnits, nextUnits) {
  if (prevUnits.length !== nextUnits.length)
    return true;
  for (var i = 0; i < prevUnits.length; i += 1) {
    if (prevUnits[i].disabled !== nextUnits[i].disabled)
      return true;
  }
  return false;
}
function generateUnits(start, end, step, disabledUnits) {
  var units = [];
  for (var i = start; i <= end; i += step) {
    units.push({
      label: leftPad(i, 2),
      value: i,
      disabled: (disabledUnits || []).includes(i)
    });
  }
  return units;
}
function TimeBody(props) {
  var generateConfig2 = props.generateConfig, prefixCls = props.prefixCls, operationRef = props.operationRef, activeColumnIndex = props.activeColumnIndex, value = props.value, showHour = props.showHour, showMinute = props.showMinute, showSecond = props.showSecond, use12Hours = props.use12Hours, _props$hourStep = props.hourStep, hourStep = _props$hourStep === void 0 ? 1 : _props$hourStep, _props$minuteStep = props.minuteStep, minuteStep = _props$minuteStep === void 0 ? 1 : _props$minuteStep, _props$secondStep = props.secondStep, secondStep = _props$secondStep === void 0 ? 1 : _props$secondStep, disabledHours = props.disabledHours, disabledMinutes = props.disabledMinutes, disabledSeconds = props.disabledSeconds, disabledTime = props.disabledTime, hideDisabledOptions = props.hideDisabledOptions, onSelect = props.onSelect;
  var columns = [];
  var contentPrefixCls = "".concat(prefixCls, "-content");
  var columnPrefixCls = "".concat(prefixCls, "-time-panel");
  var isPM;
  var originHour = value ? generateConfig2.getHour(value) : -1;
  var hour = originHour;
  var minute = value ? generateConfig2.getMinute(value) : -1;
  var second = value ? generateConfig2.getSecond(value) : -1;
  var now = generateConfig2.getNow();
  var _React$useMemo = react.exports.useMemo(function() {
    if (disabledTime) {
      var disabledConfig = disabledTime(now);
      return [disabledConfig.disabledHours, disabledConfig.disabledMinutes, disabledConfig.disabledSeconds];
    }
    return [disabledHours, disabledMinutes, disabledSeconds];
  }, [disabledHours, disabledMinutes, disabledSeconds, disabledTime, now]), _React$useMemo2 = _slicedToArray(_React$useMemo, 3), mergedDisabledHours = _React$useMemo2[0], mergedDisabledMinutes = _React$useMemo2[1], mergedDisabledSeconds = _React$useMemo2[2];
  var setTime$1 = function setTime$12(isNewPM, newHour, newMinute, newSecond) {
    var newDate = value || generateConfig2.getNow();
    var mergedHour = Math.max(0, newHour);
    var mergedMinute = Math.max(0, newMinute);
    var mergedSecond = Math.max(0, newSecond);
    newDate = setTime(generateConfig2, newDate, !use12Hours || !isNewPM ? mergedHour : mergedHour + 12, mergedMinute, mergedSecond);
    return newDate;
  };
  var rawHours = generateUnits(0, 23, hourStep, mergedDisabledHours && mergedDisabledHours());
  var memorizedRawHours = useMemo(function() {
    return rawHours;
  }, rawHours, shouldUnitsUpdate);
  if (use12Hours) {
    isPM = hour >= 12;
    hour %= 12;
  }
  var _React$useMemo3 = react.exports.useMemo(function() {
    if (!use12Hours) {
      return [false, false];
    }
    var AMPMDisabled = [true, true];
    memorizedRawHours.forEach(function(_ref) {
      var disabled = _ref.disabled, hourValue = _ref.value;
      if (disabled)
        return;
      if (hourValue >= 12) {
        AMPMDisabled[1] = false;
      } else {
        AMPMDisabled[0] = false;
      }
    });
    return AMPMDisabled;
  }, [use12Hours, memorizedRawHours]), _React$useMemo4 = _slicedToArray(_React$useMemo3, 2), AMDisabled = _React$useMemo4[0], PMDisabled = _React$useMemo4[1];
  var hours = react.exports.useMemo(function() {
    if (!use12Hours)
      return memorizedRawHours;
    return memorizedRawHours.filter(isPM ? function(hourMeta) {
      return hourMeta.value >= 12;
    } : function(hourMeta) {
      return hourMeta.value < 12;
    }).map(function(hourMeta) {
      var hourValue = hourMeta.value % 12;
      var hourLabel = hourValue === 0 ? "12" : leftPad(hourValue, 2);
      return _objectSpread2$1(_objectSpread2$1({}, hourMeta), {}, {
        label: hourLabel,
        value: hourValue
      });
    });
  }, [use12Hours, isPM, memorizedRawHours]);
  var minutes = generateUnits(0, 59, minuteStep, mergedDisabledMinutes && mergedDisabledMinutes(originHour));
  var seconds = generateUnits(0, 59, secondStep, mergedDisabledSeconds && mergedDisabledSeconds(originHour, minute));
  operationRef.current = {
    onUpDown: function onUpDown(diff) {
      var column = columns[activeColumnIndex];
      if (column) {
        var valueIndex = column.units.findIndex(function(unit) {
          return unit.value === column.value;
        });
        var unitLen = column.units.length;
        for (var i = 1; i < unitLen; i += 1) {
          var nextUnit = column.units[(valueIndex + diff * i + unitLen) % unitLen];
          if (nextUnit.disabled !== true) {
            column.onSelect(nextUnit.value);
            break;
          }
        }
      }
    }
  };
  function addColumnNode(condition, node, columnValue, units, onColumnSelect) {
    if (condition !== false) {
      columns.push({
        node: /* @__PURE__ */ react.exports.cloneElement(node, {
          prefixCls: columnPrefixCls,
          value: columnValue,
          active: activeColumnIndex === columns.length,
          onSelect: onColumnSelect,
          units,
          hideDisabledOptions
        }),
        onSelect: onColumnSelect,
        value: columnValue,
        units
      });
    }
  }
  addColumnNode(showHour, /* @__PURE__ */ react.exports.createElement(TimeUnitColumn, {
    key: "hour"
  }), hour, hours, function(num) {
    onSelect(setTime$1(isPM, num, minute, second), "mouse");
  });
  addColumnNode(showMinute, /* @__PURE__ */ react.exports.createElement(TimeUnitColumn, {
    key: "minute"
  }), minute, minutes, function(num) {
    onSelect(setTime$1(isPM, hour, num, second), "mouse");
  });
  addColumnNode(showSecond, /* @__PURE__ */ react.exports.createElement(TimeUnitColumn, {
    key: "second"
  }), second, seconds, function(num) {
    onSelect(setTime$1(isPM, hour, minute, num), "mouse");
  });
  var PMIndex = -1;
  if (typeof isPM === "boolean") {
    PMIndex = isPM ? 1 : 0;
  }
  addColumnNode(use12Hours === true, /* @__PURE__ */ react.exports.createElement(TimeUnitColumn, {
    key: "12hours"
  }), PMIndex, [{
    label: "AM",
    value: 0,
    disabled: AMDisabled
  }, {
    label: "PM",
    value: 1,
    disabled: PMDisabled
  }], function(num) {
    onSelect(setTime$1(!!num, hour, minute, second), "mouse");
  });
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: contentPrefixCls
  }, columns.map(function(_ref2) {
    var node = _ref2.node;
    return node;
  }));
}
var countBoolean = function countBoolean2(boolList) {
  return boolList.filter(function(bool) {
    return bool !== false;
  }).length;
};
function TimePanel(props) {
  var generateConfig2 = props.generateConfig, _props$format = props.format, format2 = _props$format === void 0 ? "HH:mm:ss" : _props$format, prefixCls = props.prefixCls, active = props.active, operationRef = props.operationRef, showHour = props.showHour, showMinute = props.showMinute, showSecond = props.showSecond, _props$use12Hours = props.use12Hours, use12Hours = _props$use12Hours === void 0 ? false : _props$use12Hours, onSelect = props.onSelect, value = props.value;
  var panelPrefixCls = "".concat(prefixCls, "-time-panel");
  var bodyOperationRef = react.exports.useRef();
  var _React$useState = react.exports.useState(-1), _React$useState2 = _slicedToArray(_React$useState, 2), activeColumnIndex = _React$useState2[0], setActiveColumnIndex = _React$useState2[1];
  var columnsCount = countBoolean([showHour, showMinute, showSecond, use12Hours]);
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          setActiveColumnIndex((activeColumnIndex + diff + columnsCount) % columnsCount);
        },
        onUpDown: function onUpDown(diff) {
          if (activeColumnIndex === -1) {
            setActiveColumnIndex(0);
          } else if (bodyOperationRef.current) {
            bodyOperationRef.current.onUpDown(diff);
          }
        },
        onEnter: function onEnter() {
          onSelect(value || generateConfig2.getNow(), "key");
          setActiveColumnIndex(-1);
        }
      });
    },
    onBlur: function onBlur() {
      setActiveColumnIndex(-1);
    }
  };
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: classNames(panelPrefixCls, _defineProperty$1({}, "".concat(panelPrefixCls, "-active"), active))
  }, /* @__PURE__ */ react.exports.createElement(TimeHeader, _extends({}, props, {
    format: format2,
    prefixCls
  })), /* @__PURE__ */ react.exports.createElement(TimeBody, _extends({}, props, {
    prefixCls,
    activeColumnIndex,
    operationRef: bodyOperationRef
  })));
}
var RangeContext = /* @__PURE__ */ react.exports.createContext({});
function useCellClassName(_ref) {
  var cellPrefixCls = _ref.cellPrefixCls, generateConfig2 = _ref.generateConfig, rangedValue = _ref.rangedValue, hoverRangedValue = _ref.hoverRangedValue, isInView = _ref.isInView, isSameCell = _ref.isSameCell, offsetCell = _ref.offsetCell, today = _ref.today, value = _ref.value;
  function getClassName(currentDate) {
    var _ref2;
    var prevDate = offsetCell(currentDate, -1);
    var nextDate = offsetCell(currentDate, 1);
    var rangeStart = getValue(rangedValue, 0);
    var rangeEnd = getValue(rangedValue, 1);
    var hoverStart = getValue(hoverRangedValue, 0);
    var hoverEnd = getValue(hoverRangedValue, 1);
    var isRangeHovered = isInRange(generateConfig2, hoverStart, hoverEnd, currentDate);
    function isRangeStart(date) {
      return isSameCell(rangeStart, date);
    }
    function isRangeEnd(date) {
      return isSameCell(rangeEnd, date);
    }
    var isHoverStart = isSameCell(hoverStart, currentDate);
    var isHoverEnd = isSameCell(hoverEnd, currentDate);
    var isHoverEdgeStart = (isRangeHovered || isHoverEnd) && (!isInView(prevDate) || isRangeEnd(prevDate));
    var isHoverEdgeEnd = (isRangeHovered || isHoverStart) && (!isInView(nextDate) || isRangeStart(nextDate));
    return _ref2 = {}, _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-in-view"), isInView(currentDate)), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-in-range"), isInRange(generateConfig2, rangeStart, rangeEnd, currentDate)), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-start"), isRangeStart(currentDate)), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-end"), isRangeEnd(currentDate)), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-start-single"), isRangeStart(currentDate) && !rangeEnd), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-end-single"), isRangeEnd(currentDate) && !rangeStart), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-start-near-hover"), isRangeStart(currentDate) && (isSameCell(prevDate, hoverStart) || isInRange(generateConfig2, hoverStart, hoverEnd, prevDate))), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-end-near-hover"), isRangeEnd(currentDate) && (isSameCell(nextDate, hoverEnd) || isInRange(generateConfig2, hoverStart, hoverEnd, nextDate))), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-hover"), isRangeHovered), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-hover-start"), isHoverStart), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-hover-end"), isHoverEnd), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-start"), isHoverEdgeStart), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-end"), isHoverEdgeEnd), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-start-near-range"), isHoverEdgeStart && isSameCell(prevDate, rangeEnd)), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-end-near-range"), isHoverEdgeEnd && isSameCell(nextDate, rangeStart)), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-today"), isSameCell(today, currentDate)), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-selected"), isSameCell(value, currentDate)), _ref2;
  }
  return getClassName;
}
function DateBody(props) {
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, prefixColumn = props.prefixColumn, locale = props.locale, rowCount = props.rowCount, viewDate = props.viewDate, value = props.value, dateRender = props.dateRender;
  var _React$useContext = react.exports.useContext(RangeContext), rangedValue = _React$useContext.rangedValue, hoverRangedValue = _React$useContext.hoverRangedValue;
  var baseDate = getWeekStartDate(locale.locale, generateConfig2, viewDate);
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var weekFirstDay = generateConfig2.locale.getWeekFirstDay(locale.locale);
  var today = generateConfig2.getNow();
  var headerCells = [];
  var weekDaysLocale = locale.shortWeekDays || (generateConfig2.locale.getShortWeekDays ? generateConfig2.locale.getShortWeekDays(locale.locale) : []);
  if (prefixColumn) {
    headerCells.push(/* @__PURE__ */ react.exports.createElement("th", {
      key: "empty",
      "aria-label": "empty cell"
    }));
  }
  for (var i = 0; i < WEEK_DAY_COUNT; i += 1) {
    headerCells.push(/* @__PURE__ */ react.exports.createElement("th", {
      key: i
    }, weekDaysLocale[(i + weekFirstDay) % WEEK_DAY_COUNT]));
  }
  var getCellClassName = useCellClassName({
    cellPrefixCls,
    today,
    value,
    generateConfig: generateConfig2,
    rangedValue: prefixColumn ? null : rangedValue,
    hoverRangedValue: prefixColumn ? null : hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameDate(generateConfig2, current, target);
    },
    isInView: function isInView(date) {
      return isSameMonth(generateConfig2, date, viewDate);
    },
    offsetCell: function offsetCell(date, offset2) {
      return generateConfig2.addDate(date, offset2);
    }
  });
  var getCellNode = dateRender ? function(date) {
    return dateRender(date, today);
  } : void 0;
  return /* @__PURE__ */ react.exports.createElement(PanelBody, _extends({}, props, {
    rowNum: rowCount,
    colNum: WEEK_DAY_COUNT,
    baseDate,
    getCellNode,
    getCellText: generateConfig2.getDate,
    getCellClassName,
    getCellDate: generateConfig2.addDate,
    titleCell: function titleCell(date) {
      return formatValue(date, {
        locale,
        format: "YYYY-MM-DD",
        generateConfig: generateConfig2
      });
    },
    headerCells
  }));
}
function DateHeader(props) {
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, locale = props.locale, viewDate = props.viewDate, onNextMonth = props.onNextMonth, onPrevMonth = props.onPrevMonth, onNextYear = props.onNextYear, onPrevYear = props.onPrevYear, onYearClick = props.onYearClick, onMonthClick = props.onMonthClick;
  var _React$useContext = react.exports.useContext(PanelContext), hideHeader = _React$useContext.hideHeader;
  if (hideHeader) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  var monthsLocale = locale.shortMonths || (generateConfig2.locale.getShortMonths ? generateConfig2.locale.getShortMonths(locale.locale) : []);
  var month = generateConfig2.getMonth(viewDate);
  var yearNode = /* @__PURE__ */ react.exports.createElement("button", {
    type: "button",
    key: "year",
    onClick: onYearClick,
    tabIndex: -1,
    className: "".concat(prefixCls, "-year-btn")
  }, formatValue(viewDate, {
    locale,
    format: locale.yearFormat,
    generateConfig: generateConfig2
  }));
  var monthNode = /* @__PURE__ */ react.exports.createElement("button", {
    type: "button",
    key: "month",
    onClick: onMonthClick,
    tabIndex: -1,
    className: "".concat(prefixCls, "-month-btn")
  }, locale.monthFormat ? formatValue(viewDate, {
    locale,
    format: locale.monthFormat,
    generateConfig: generateConfig2
  }) : monthsLocale[month]);
  var monthYearNodes = locale.monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];
  return /* @__PURE__ */ react.exports.createElement(Header, _extends({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevYear,
    onPrev: onPrevMonth,
    onNext: onNextMonth,
    onSuperNext: onNextYear
  }), monthYearNodes);
}
var DATE_ROW_COUNT = 6;
function DatePanel(props) {
  var prefixCls = props.prefixCls, _props$panelName = props.panelName, panelName = _props$panelName === void 0 ? "date" : _props$panelName, keyboardConfig = props.keyboardConfig, active = props.active, operationRef = props.operationRef, generateConfig2 = props.generateConfig, value = props.value, viewDate = props.viewDate, onViewDateChange = props.onViewDateChange, onPanelChange = props.onPanelChange, _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-").concat(panelName, "-panel");
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, _objectSpread2$1({
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig2.addDate(value || viewDate, diff), "key");
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig2.addDate(value || viewDate, diff * WEEK_DAY_COUNT), "key");
        },
        onPageUpDown: function onPageUpDown(diff) {
          _onSelect(generateConfig2.addMonth(value || viewDate, diff), "key");
        }
      }, keyboardConfig));
    }
  };
  var onYearChange = function onYearChange2(diff) {
    var newDate = generateConfig2.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  var onMonthChange = function onMonthChange2(diff) {
    var newDate = generateConfig2.addMonth(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: classNames(panelPrefixCls, _defineProperty$1({}, "".concat(panelPrefixCls, "-active"), active))
  }, /* @__PURE__ */ react.exports.createElement(DateHeader, _extends({}, props, {
    prefixCls,
    value,
    viewDate,
    onPrevYear: function onPrevYear() {
      onYearChange(-1);
    },
    onNextYear: function onNextYear() {
      onYearChange(1);
    },
    onPrevMonth: function onPrevMonth() {
      onMonthChange(-1);
    },
    onNextMonth: function onNextMonth() {
      onMonthChange(1);
    },
    onMonthClick: function onMonthClick() {
      onPanelChange("month", viewDate);
    },
    onYearClick: function onYearClick() {
      onPanelChange("year", viewDate);
    }
  })), /* @__PURE__ */ react.exports.createElement(DateBody, _extends({}, props, {
    onSelect: function onSelect(date) {
      return _onSelect(date, "mouse");
    },
    prefixCls,
    value,
    viewDate,
    rowCount: DATE_ROW_COUNT
  })));
}
var ACTIVE_PANEL = tuple("date", "time");
function DatetimePanel(props) {
  var prefixCls = props.prefixCls, operationRef = props.operationRef, generateConfig2 = props.generateConfig, value = props.value, defaultValue = props.defaultValue, disabledTime = props.disabledTime, showTime = props.showTime, onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-datetime-panel");
  var _React$useState = react.exports.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), activePanel = _React$useState2[0], setActivePanel = _React$useState2[1];
  var dateOperationRef = react.exports.useRef({});
  var timeOperationRef = react.exports.useRef({});
  var timeProps = _typeof$1(showTime) === "object" ? _objectSpread2$1({}, showTime) : {};
  function getNextActive(offset2) {
    var activeIndex = ACTIVE_PANEL.indexOf(activePanel) + offset2;
    var nextActivePanel = ACTIVE_PANEL[activeIndex] || null;
    return nextActivePanel;
  }
  var onBlur = function onBlur2(e) {
    if (timeOperationRef.current.onBlur) {
      timeOperationRef.current.onBlur(e);
    }
    setActivePanel(null);
  };
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      if (event.which === KeyCode.TAB) {
        var nextActivePanel = getNextActive(event.shiftKey ? -1 : 1);
        setActivePanel(nextActivePanel);
        if (nextActivePanel) {
          event.preventDefault();
        }
        return true;
      }
      if (activePanel) {
        var ref = activePanel === "date" ? dateOperationRef : timeOperationRef;
        if (ref.current && ref.current.onKeyDown) {
          ref.current.onKeyDown(event);
        }
        return true;
      }
      if ([KeyCode.LEFT, KeyCode.RIGHT, KeyCode.UP, KeyCode.DOWN].includes(event.which)) {
        setActivePanel("date");
        return true;
      }
      return false;
    },
    onBlur,
    onClose: onBlur
  };
  var onInternalSelect = function onInternalSelect2(date, source) {
    var selectedDate = date;
    if (source === "date" && !value && timeProps.defaultValue) {
      selectedDate = generateConfig2.setHour(selectedDate, generateConfig2.getHour(timeProps.defaultValue));
      selectedDate = generateConfig2.setMinute(selectedDate, generateConfig2.getMinute(timeProps.defaultValue));
      selectedDate = generateConfig2.setSecond(selectedDate, generateConfig2.getSecond(timeProps.defaultValue));
    } else if (source === "time" && !value && defaultValue) {
      selectedDate = generateConfig2.setYear(selectedDate, generateConfig2.getYear(defaultValue));
      selectedDate = generateConfig2.setMonth(selectedDate, generateConfig2.getMonth(defaultValue));
      selectedDate = generateConfig2.setDate(selectedDate, generateConfig2.getDate(defaultValue));
    }
    if (onSelect) {
      onSelect(selectedDate, "mouse");
    }
  };
  var disabledTimes = disabledTime ? disabledTime(value || null) : {};
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: classNames(panelPrefixCls, _defineProperty$1({}, "".concat(panelPrefixCls, "-active"), activePanel))
  }, /* @__PURE__ */ react.exports.createElement(DatePanel, _extends({}, props, {
    operationRef: dateOperationRef,
    active: activePanel === "date",
    onSelect: function onSelect2(date) {
      onInternalSelect(setDateTime(generateConfig2, date, !value && _typeof$1(showTime) === "object" ? showTime.defaultValue : null), "date");
    }
  })), /* @__PURE__ */ react.exports.createElement(TimePanel, _extends({}, props, {
    format: void 0
  }, timeProps, disabledTimes, {
    disabledTime: null,
    defaultValue: void 0,
    operationRef: timeOperationRef,
    active: activePanel === "time",
    onSelect: function onSelect2(date) {
      onInternalSelect(date, "time");
    }
  })));
}
function WeekPanel(props) {
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, locale = props.locale, value = props.value;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var prefixColumn = function prefixColumn2(date) {
    return /* @__PURE__ */ react.exports.createElement("td", {
      key: "week",
      className: classNames(cellPrefixCls, "".concat(cellPrefixCls, "-week"))
    }, generateConfig2.locale.getWeek(locale.locale, date));
  };
  var rowPrefixCls = "".concat(prefixCls, "-week-panel-row");
  var rowClassName = function rowClassName2(date) {
    return classNames(rowPrefixCls, _defineProperty$1({}, "".concat(rowPrefixCls, "-selected"), isSameWeek(generateConfig2, locale.locale, value, date)));
  };
  return /* @__PURE__ */ react.exports.createElement(DatePanel, _extends({}, props, {
    panelName: "week",
    prefixColumn,
    rowClassName,
    keyboardConfig: {
      onLeftRight: null
    }
  }));
}
function MonthHeader(props) {
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, locale = props.locale, viewDate = props.viewDate, onNextYear = props.onNextYear, onPrevYear = props.onPrevYear, onYearClick = props.onYearClick;
  var _React$useContext = react.exports.useContext(PanelContext), hideHeader = _React$useContext.hideHeader;
  if (hideHeader) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  return /* @__PURE__ */ react.exports.createElement(Header, _extends({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevYear,
    onSuperNext: onNextYear
  }), /* @__PURE__ */ react.exports.createElement("button", {
    type: "button",
    onClick: onYearClick,
    className: "".concat(prefixCls, "-year-btn")
  }, formatValue(viewDate, {
    locale,
    format: locale.yearFormat,
    generateConfig: generateConfig2
  })));
}
var MONTH_COL_COUNT = 3;
var MONTH_ROW_COUNT = 4;
function MonthBody(props) {
  var prefixCls = props.prefixCls, locale = props.locale, value = props.value, viewDate = props.viewDate, generateConfig2 = props.generateConfig, monthCellRender = props.monthCellRender;
  var _React$useContext = react.exports.useContext(RangeContext), rangedValue = _React$useContext.rangedValue, hoverRangedValue = _React$useContext.hoverRangedValue;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var getCellClassName = useCellClassName({
    cellPrefixCls,
    value,
    generateConfig: generateConfig2,
    rangedValue,
    hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameMonth(generateConfig2, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset2) {
      return generateConfig2.addMonth(date, offset2);
    }
  });
  var monthsLocale = locale.shortMonths || (generateConfig2.locale.getShortMonths ? generateConfig2.locale.getShortMonths(locale.locale) : []);
  var baseMonth = generateConfig2.setMonth(viewDate, 0);
  var getCellNode = monthCellRender ? function(date) {
    return monthCellRender(date, locale);
  } : void 0;
  return /* @__PURE__ */ react.exports.createElement(PanelBody, _extends({}, props, {
    rowNum: MONTH_ROW_COUNT,
    colNum: MONTH_COL_COUNT,
    baseDate: baseMonth,
    getCellNode,
    getCellText: function getCellText(date) {
      return locale.monthFormat ? formatValue(date, {
        locale,
        format: locale.monthFormat,
        generateConfig: generateConfig2
      }) : monthsLocale[generateConfig2.getMonth(date)];
    },
    getCellClassName,
    getCellDate: generateConfig2.addMonth,
    titleCell: function titleCell(date) {
      return formatValue(date, {
        locale,
        format: "YYYY-MM",
        generateConfig: generateConfig2
      });
    }
  }));
}
function MonthPanel(props) {
  var prefixCls = props.prefixCls, operationRef = props.operationRef, onViewDateChange = props.onViewDateChange, generateConfig2 = props.generateConfig, value = props.value, viewDate = props.viewDate, onPanelChange = props.onPanelChange, _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-month-panel");
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig2.addMonth(value || viewDate, diff), "key");
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig2.addMonth(value || viewDate, diff * MONTH_COL_COUNT), "key");
        },
        onEnter: function onEnter() {
          onPanelChange("date", value || viewDate);
        }
      });
    }
  };
  var onYearChange = function onYearChange2(diff) {
    var newDate = generateConfig2.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: panelPrefixCls
  }, /* @__PURE__ */ react.exports.createElement(MonthHeader, _extends({}, props, {
    prefixCls,
    onPrevYear: function onPrevYear() {
      onYearChange(-1);
    },
    onNextYear: function onNextYear() {
      onYearChange(1);
    },
    onYearClick: function onYearClick() {
      onPanelChange("year", viewDate);
    }
  })), /* @__PURE__ */ react.exports.createElement(MonthBody, _extends({}, props, {
    prefixCls,
    onSelect: function onSelect(date) {
      _onSelect(date, "mouse");
      onPanelChange("date", date);
    }
  })));
}
function QuarterHeader(props) {
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, locale = props.locale, viewDate = props.viewDate, onNextYear = props.onNextYear, onPrevYear = props.onPrevYear, onYearClick = props.onYearClick;
  var _React$useContext = react.exports.useContext(PanelContext), hideHeader = _React$useContext.hideHeader;
  if (hideHeader) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  return /* @__PURE__ */ react.exports.createElement(Header, _extends({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevYear,
    onSuperNext: onNextYear
  }), /* @__PURE__ */ react.exports.createElement("button", {
    type: "button",
    onClick: onYearClick,
    className: "".concat(prefixCls, "-year-btn")
  }, formatValue(viewDate, {
    locale,
    format: locale.yearFormat,
    generateConfig: generateConfig2
  })));
}
var QUARTER_COL_COUNT = 4;
var QUARTER_ROW_COUNT = 1;
function QuarterBody(props) {
  var prefixCls = props.prefixCls, locale = props.locale, value = props.value, viewDate = props.viewDate, generateConfig2 = props.generateConfig;
  var _React$useContext = react.exports.useContext(RangeContext), rangedValue = _React$useContext.rangedValue, hoverRangedValue = _React$useContext.hoverRangedValue;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var getCellClassName = useCellClassName({
    cellPrefixCls,
    value,
    generateConfig: generateConfig2,
    rangedValue,
    hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameQuarter(generateConfig2, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset2) {
      return generateConfig2.addMonth(date, offset2 * 3);
    }
  });
  var baseQuarter = generateConfig2.setDate(generateConfig2.setMonth(viewDate, 0), 1);
  return /* @__PURE__ */ react.exports.createElement(PanelBody, _extends({}, props, {
    rowNum: QUARTER_ROW_COUNT,
    colNum: QUARTER_COL_COUNT,
    baseDate: baseQuarter,
    getCellText: function getCellText(date) {
      return formatValue(date, {
        locale,
        format: locale.quarterFormat || "[Q]Q",
        generateConfig: generateConfig2
      });
    },
    getCellClassName,
    getCellDate: function getCellDate(date, offset2) {
      return generateConfig2.addMonth(date, offset2 * 3);
    },
    titleCell: function titleCell(date) {
      return formatValue(date, {
        locale,
        format: "YYYY-[Q]Q",
        generateConfig: generateConfig2
      });
    }
  }));
}
function QuarterPanel(props) {
  var prefixCls = props.prefixCls, operationRef = props.operationRef, onViewDateChange = props.onViewDateChange, generateConfig2 = props.generateConfig, value = props.value, viewDate = props.viewDate, onPanelChange = props.onPanelChange, _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-quarter-panel");
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig2.addMonth(value || viewDate, diff * 3), "key");
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
        }
      });
    }
  };
  var onYearChange = function onYearChange2(diff) {
    var newDate = generateConfig2.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: panelPrefixCls
  }, /* @__PURE__ */ react.exports.createElement(QuarterHeader, _extends({}, props, {
    prefixCls,
    onPrevYear: function onPrevYear() {
      onYearChange(-1);
    },
    onNextYear: function onNextYear() {
      onYearChange(1);
    },
    onYearClick: function onYearClick() {
      onPanelChange("year", viewDate);
    }
  })), /* @__PURE__ */ react.exports.createElement(QuarterBody, _extends({}, props, {
    prefixCls,
    onSelect: function onSelect(date) {
      _onSelect(date, "mouse");
    }
  })));
}
function YearHeader(props) {
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, viewDate = props.viewDate, onPrevDecade = props.onPrevDecade, onNextDecade = props.onNextDecade, onDecadeClick = props.onDecadeClick;
  var _React$useContext = react.exports.useContext(PanelContext), hideHeader = _React$useContext.hideHeader;
  if (hideHeader) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  var yearNumber = generateConfig2.getYear(viewDate);
  var startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  var endYear = startYear + YEAR_DECADE_COUNT - 1;
  return /* @__PURE__ */ react.exports.createElement(Header, _extends({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevDecade,
    onSuperNext: onNextDecade
  }), /* @__PURE__ */ react.exports.createElement("button", {
    type: "button",
    onClick: onDecadeClick,
    className: "".concat(prefixCls, "-decade-btn")
  }, startYear, "-", endYear));
}
var YEAR_COL_COUNT = 3;
var YEAR_ROW_COUNT = 4;
function YearBody(props) {
  var prefixCls = props.prefixCls, value = props.value, viewDate = props.viewDate, locale = props.locale, generateConfig2 = props.generateConfig;
  var _React$useContext = react.exports.useContext(RangeContext), rangedValue = _React$useContext.rangedValue, hoverRangedValue = _React$useContext.hoverRangedValue;
  var yearPrefixCls = "".concat(prefixCls, "-cell");
  var yearNumber = generateConfig2.getYear(viewDate);
  var startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  var endYear = startYear + YEAR_DECADE_COUNT - 1;
  var baseYear = generateConfig2.setYear(viewDate, startYear - Math.ceil((YEAR_COL_COUNT * YEAR_ROW_COUNT - YEAR_DECADE_COUNT) / 2));
  var isInView = function isInView2(date) {
    var currentYearNumber = generateConfig2.getYear(date);
    return startYear <= currentYearNumber && currentYearNumber <= endYear;
  };
  var getCellClassName = useCellClassName({
    cellPrefixCls: yearPrefixCls,
    value,
    generateConfig: generateConfig2,
    rangedValue,
    hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameYear(generateConfig2, current, target);
    },
    isInView,
    offsetCell: function offsetCell(date, offset2) {
      return generateConfig2.addYear(date, offset2);
    }
  });
  return /* @__PURE__ */ react.exports.createElement(PanelBody, _extends({}, props, {
    rowNum: YEAR_ROW_COUNT,
    colNum: YEAR_COL_COUNT,
    baseDate: baseYear,
    getCellText: generateConfig2.getYear,
    getCellClassName,
    getCellDate: generateConfig2.addYear,
    titleCell: function titleCell(date) {
      return formatValue(date, {
        locale,
        format: "YYYY",
        generateConfig: generateConfig2
      });
    }
  }));
}
var YEAR_DECADE_COUNT = 10;
function YearPanel(props) {
  var prefixCls = props.prefixCls, operationRef = props.operationRef, onViewDateChange = props.onViewDateChange, generateConfig2 = props.generateConfig, value = props.value, viewDate = props.viewDate, sourceMode = props.sourceMode, _onSelect = props.onSelect, onPanelChange = props.onPanelChange;
  var panelPrefixCls = "".concat(prefixCls, "-year-panel");
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig2.addYear(value || viewDate, diff * YEAR_DECADE_COUNT), "key");
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig2.addYear(value || viewDate, diff * YEAR_COL_COUNT), "key");
        },
        onEnter: function onEnter() {
          onPanelChange(sourceMode === "date" ? "date" : "month", value || viewDate);
        }
      });
    }
  };
  var onDecadeChange = function onDecadeChange2(diff) {
    var newDate = generateConfig2.addYear(viewDate, diff * 10);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: panelPrefixCls
  }, /* @__PURE__ */ react.exports.createElement(YearHeader, _extends({}, props, {
    prefixCls,
    onPrevDecade: function onPrevDecade() {
      onDecadeChange(-1);
    },
    onNextDecade: function onNextDecade() {
      onDecadeChange(1);
    },
    onDecadeClick: function onDecadeClick() {
      onPanelChange("decade", viewDate);
    }
  })), /* @__PURE__ */ react.exports.createElement(YearBody, _extends({}, props, {
    prefixCls,
    onSelect: function onSelect(date) {
      onPanelChange(sourceMode === "date" ? "date" : "month", date);
      _onSelect(date, "mouse");
    }
  })));
}
function getExtraFooter(prefixCls, mode, renderExtraFooter) {
  if (!renderExtraFooter) {
    return null;
  }
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: "".concat(prefixCls, "-footer-extra")
  }, renderExtraFooter(mode));
}
function getRanges(_ref) {
  var prefixCls = _ref.prefixCls, _ref$components = _ref.components, components = _ref$components === void 0 ? {} : _ref$components, needConfirmButton = _ref.needConfirmButton, onNow = _ref.onNow, onOk = _ref.onOk, okDisabled = _ref.okDisabled, showNow = _ref.showNow, locale = _ref.locale;
  var presetNode;
  var okNode;
  if (needConfirmButton) {
    var Button2 = components.button || "button";
    if (onNow && showNow !== false) {
      presetNode = /* @__PURE__ */ react.exports.createElement("li", {
        className: "".concat(prefixCls, "-now")
      }, /* @__PURE__ */ react.exports.createElement("a", {
        className: "".concat(prefixCls, "-now-btn"),
        onClick: onNow
      }, locale.now));
    }
    okNode = needConfirmButton && /* @__PURE__ */ react.exports.createElement("li", {
      className: "".concat(prefixCls, "-ok")
    }, /* @__PURE__ */ react.exports.createElement(Button2, {
      disabled: okDisabled,
      onClick: onOk
    }, locale.ok));
  }
  if (!presetNode && !okNode) {
    return null;
  }
  return /* @__PURE__ */ react.exports.createElement("ul", {
    className: "".concat(prefixCls, "-ranges")
  }, presetNode, okNode);
}
function PickerPanel(props) {
  var _classNames;
  var _ref = props, _ref$prefixCls = _ref.prefixCls, prefixCls = _ref$prefixCls === void 0 ? "rc-picker" : _ref$prefixCls, className = _ref.className, style = _ref.style, locale = _ref.locale, generateConfig2 = _ref.generateConfig, value = _ref.value, defaultValue = _ref.defaultValue, pickerValue = _ref.pickerValue, defaultPickerValue = _ref.defaultPickerValue, disabledDate = _ref.disabledDate, mode = _ref.mode, _ref$picker = _ref.picker, picker = _ref$picker === void 0 ? "date" : _ref$picker, _ref$tabIndex = _ref.tabIndex, tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex, showNow = _ref.showNow, showTime = _ref.showTime, showToday = _ref.showToday, renderExtraFooter = _ref.renderExtraFooter, hideHeader = _ref.hideHeader, onSelect = _ref.onSelect, onChange = _ref.onChange, onPanelChange = _ref.onPanelChange, onMouseDown = _ref.onMouseDown, onPickerValueChange = _ref.onPickerValueChange, _onOk = _ref.onOk, components = _ref.components, direction = _ref.direction, _ref$hourStep = _ref.hourStep, hourStep = _ref$hourStep === void 0 ? 1 : _ref$hourStep, _ref$minuteStep = _ref.minuteStep, minuteStep = _ref$minuteStep === void 0 ? 1 : _ref$minuteStep, _ref$secondStep = _ref.secondStep, secondStep = _ref$secondStep === void 0 ? 1 : _ref$secondStep;
  var needConfirmButton = picker === "date" && !!showTime || picker === "time";
  var isHourStepValid = 24 % hourStep === 0;
  var isMinuteStepValid = 60 % minuteStep === 0;
  var isSecondStepValid = 60 % secondStep === 0;
  var panelContext = react.exports.useContext(PanelContext);
  var operationRef = panelContext.operationRef, onContextSelect = panelContext.onSelect, hideRanges = panelContext.hideRanges, defaultOpenValue = panelContext.defaultOpenValue;
  var _React$useContext = react.exports.useContext(RangeContext), inRange = _React$useContext.inRange, panelPosition = _React$useContext.panelPosition, rangedValue = _React$useContext.rangedValue, hoverRangedValue = _React$useContext.hoverRangedValue;
  var panelRef = react.exports.useRef({});
  var initRef = react.exports.useRef(true);
  var _useMergedState = useMergedState(null, {
    value,
    defaultValue,
    postState: function postState(val) {
      if (!val && defaultOpenValue && picker === "time") {
        return defaultOpenValue;
      }
      return val;
    }
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedValue = _useMergedState2[0], setInnerValue = _useMergedState2[1];
  var _useMergedState3 = useMergedState(null, {
    value: pickerValue,
    defaultValue: defaultPickerValue || mergedValue,
    postState: function postState(date) {
      var now2 = generateConfig2.getNow();
      if (!date) {
        return now2;
      }
      if (!mergedValue && showTime) {
        var defaultDateObject = _typeof$1(showTime) === "object" ? showTime.defaultValue : defaultValue;
        return setDateTime(generateConfig2, Array.isArray(date) ? date[0] : date, defaultDateObject || now2);
      }
      return Array.isArray(date) ? date[0] : date;
    }
  }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), viewDate = _useMergedState4[0], setInnerViewDate = _useMergedState4[1];
  var setViewDate = function setViewDate2(date) {
    setInnerViewDate(date);
    if (onPickerValueChange) {
      onPickerValueChange(date);
    }
  };
  var getInternalNextMode = function getInternalNextMode2(nextMode) {
    var getNextMode = PickerModeMap[picker];
    if (getNextMode) {
      return getNextMode(nextMode);
    }
    return nextMode;
  };
  var _useMergedState5 = useMergedState(function() {
    if (picker === "time") {
      return "time";
    }
    return getInternalNextMode("date");
  }, {
    value: mode
  }), _useMergedState6 = _slicedToArray(_useMergedState5, 2), mergedMode = _useMergedState6[0], setInnerMode = _useMergedState6[1];
  react.exports.useEffect(function() {
    setInnerMode(picker);
  }, [picker]);
  var _React$useState = react.exports.useState(function() {
    return mergedMode;
  }), _React$useState2 = _slicedToArray(_React$useState, 2), sourceMode = _React$useState2[0], setSourceMode = _React$useState2[1];
  var onInternalPanelChange = function onInternalPanelChange2(newMode, viewValue) {
    var nextMode = getInternalNextMode(newMode || mergedMode);
    setSourceMode(mergedMode);
    setInnerMode(nextMode);
    if (onPanelChange && (mergedMode !== nextMode || isEqual(generateConfig2, viewDate, viewDate))) {
      onPanelChange(viewValue, nextMode);
    }
  };
  var triggerSelect = function triggerSelect2(date, type) {
    var forceTriggerSelect = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (mergedMode === picker || forceTriggerSelect) {
      setInnerValue(date);
      if (onSelect) {
        onSelect(date);
      }
      if (onContextSelect) {
        onContextSelect(date, type);
      }
      if (onChange && !isEqual(generateConfig2, date, mergedValue) && !(disabledDate !== null && disabledDate !== void 0 && disabledDate(date))) {
        onChange(date);
      }
    }
  };
  var onInternalKeyDown = function onInternalKeyDown2(e) {
    if (panelRef.current && panelRef.current.onKeyDown) {
      if ([KeyCode.LEFT, KeyCode.RIGHT, KeyCode.UP, KeyCode.DOWN, KeyCode.PAGE_UP, KeyCode.PAGE_DOWN, KeyCode.ENTER].includes(e.which)) {
        e.preventDefault();
      }
      return panelRef.current.onKeyDown(e);
    }
    {
      warningOnce(false, "Panel not correct handle keyDown event. Please help to fire issue about this.");
      return false;
    }
  };
  var onInternalBlur = function onInternalBlur2(e) {
    if (panelRef.current && panelRef.current.onBlur) {
      panelRef.current.onBlur(e);
    }
  };
  if (operationRef && panelPosition !== "right") {
    operationRef.current = {
      onKeyDown: onInternalKeyDown,
      onClose: function onClose() {
        if (panelRef.current && panelRef.current.onClose) {
          panelRef.current.onClose();
        }
      }
    };
  }
  react.exports.useEffect(function() {
    if (value && !initRef.current) {
      setInnerViewDate(value);
    }
  }, [value]);
  react.exports.useEffect(function() {
    initRef.current = false;
  }, []);
  var panelNode;
  var pickerProps = _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    operationRef: panelRef,
    prefixCls,
    viewDate,
    value: mergedValue,
    onViewDateChange: setViewDate,
    sourceMode,
    onPanelChange: onInternalPanelChange,
    disabledDate
  });
  delete pickerProps.onChange;
  delete pickerProps.onSelect;
  switch (mergedMode) {
    case "decade":
      panelNode = /* @__PURE__ */ react.exports.createElement(DecadePanel, _extends({}, pickerProps, {
        onSelect: function onSelect2(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;
    case "year":
      panelNode = /* @__PURE__ */ react.exports.createElement(YearPanel, _extends({}, pickerProps, {
        onSelect: function onSelect2(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;
    case "month":
      panelNode = /* @__PURE__ */ react.exports.createElement(MonthPanel, _extends({}, pickerProps, {
        onSelect: function onSelect2(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;
    case "quarter":
      panelNode = /* @__PURE__ */ react.exports.createElement(QuarterPanel, _extends({}, pickerProps, {
        onSelect: function onSelect2(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;
    case "week":
      panelNode = /* @__PURE__ */ react.exports.createElement(WeekPanel, _extends({}, pickerProps, {
        onSelect: function onSelect2(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;
    case "time":
      delete pickerProps.showTime;
      panelNode = /* @__PURE__ */ react.exports.createElement(TimePanel, _extends({}, pickerProps, _typeof$1(showTime) === "object" ? showTime : null, {
        onSelect: function onSelect2(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;
    default:
      if (showTime) {
        panelNode = /* @__PURE__ */ react.exports.createElement(DatetimePanel, _extends({}, pickerProps, {
          onSelect: function onSelect2(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          }
        }));
      } else {
        panelNode = /* @__PURE__ */ react.exports.createElement(DatePanel, _extends({}, pickerProps, {
          onSelect: function onSelect2(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          }
        }));
      }
  }
  var extraFooter;
  var rangesNode;
  var onNow = function onNow2() {
    var now2 = generateConfig2.getNow();
    var lowerBoundTime = getLowerBoundTime(generateConfig2.getHour(now2), generateConfig2.getMinute(now2), generateConfig2.getSecond(now2), isHourStepValid ? hourStep : 1, isMinuteStepValid ? minuteStep : 1, isSecondStepValid ? secondStep : 1);
    var adjustedNow = setTime(
      generateConfig2,
      now2,
      lowerBoundTime[0],
      lowerBoundTime[1],
      lowerBoundTime[2]
    );
    triggerSelect(adjustedNow, "submit");
  };
  if (!hideRanges) {
    extraFooter = getExtraFooter(prefixCls, mergedMode, renderExtraFooter);
    rangesNode = getRanges({
      prefixCls,
      components,
      needConfirmButton,
      okDisabled: !mergedValue || disabledDate && disabledDate(mergedValue),
      locale,
      showNow,
      onNow: needConfirmButton && onNow,
      onOk: function onOk() {
        if (mergedValue) {
          triggerSelect(mergedValue, "submit", true);
          if (_onOk) {
            _onOk(mergedValue);
          }
        }
      }
    });
  }
  var todayNode;
  if (showToday && mergedMode === "date" && picker === "date" && !showTime) {
    var now = generateConfig2.getNow();
    var todayCls = "".concat(prefixCls, "-today-btn");
    var disabled = disabledDate && disabledDate(now);
    todayNode = /* @__PURE__ */ react.exports.createElement("a", {
      className: classNames(todayCls, disabled && "".concat(todayCls, "-disabled")),
      "aria-disabled": disabled,
      onClick: function onClick() {
        if (!disabled) {
          triggerSelect(now, "mouse", true);
        }
      }
    }, locale.today);
  }
  return /* @__PURE__ */ react.exports.createElement(PanelContext.Provider, {
    value: _objectSpread2$1(_objectSpread2$1({}, panelContext), {}, {
      mode: mergedMode,
      hideHeader: "hideHeader" in props ? hideHeader : panelContext.hideHeader,
      hidePrevBtn: inRange && panelPosition === "right",
      hideNextBtn: inRange && panelPosition === "left"
    })
  }, /* @__PURE__ */ react.exports.createElement("div", {
    tabIndex,
    className: classNames("".concat(prefixCls, "-panel"), className, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-panel-has-range"), rangedValue && rangedValue[0] && rangedValue[1]), _defineProperty$1(_classNames, "".concat(prefixCls, "-panel-has-range-hover"), hoverRangedValue && hoverRangedValue[0] && hoverRangedValue[1]), _defineProperty$1(_classNames, "".concat(prefixCls, "-panel-rtl"), direction === "rtl"), _classNames)),
    style,
    onKeyDown: onInternalKeyDown,
    onBlur: onInternalBlur,
    onMouseDown
  }, panelNode, extraFooter || rangesNode || todayNode ? /* @__PURE__ */ react.exports.createElement("div", {
    className: "".concat(prefixCls, "-footer")
  }, extraFooter, rangesNode, todayNode) : null));
}
var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ["tl", "bl"],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomRight: {
    points: ["tr", "br"],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ["bl", "tl"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ["br", "tr"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};
function PickerTrigger(_ref) {
  var _classNames;
  var prefixCls = _ref.prefixCls, popupElement = _ref.popupElement, popupStyle = _ref.popupStyle, visible = _ref.visible, dropdownClassName = _ref.dropdownClassName, dropdownAlign = _ref.dropdownAlign, transitionName = _ref.transitionName, getPopupContainer = _ref.getPopupContainer, children = _ref.children, range = _ref.range, popupPlacement = _ref.popupPlacement, direction = _ref.direction;
  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var getPopupPlacement = function getPopupPlacement2() {
    if (popupPlacement !== void 0) {
      return popupPlacement;
    }
    return direction === "rtl" ? "bottomRight" : "bottomLeft";
  };
  return /* @__PURE__ */ react.exports.createElement(Trigger, {
    showAction: [],
    hideAction: [],
    popupPlacement: getPopupPlacement(),
    builtinPlacements: BUILT_IN_PLACEMENTS,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: transitionName,
    popup: popupElement,
    popupAlign: dropdownAlign,
    popupVisible: visible,
    popupClassName: classNames(dropdownClassName, (_classNames = {}, _defineProperty$1(_classNames, "".concat(dropdownPrefixCls, "-range"), range), _defineProperty$1(_classNames, "".concat(dropdownPrefixCls, "-rtl"), direction === "rtl"), _classNames)),
    popupStyle,
    getPopupContainer
  }, children);
}
function PresetPanel(props) {
  var prefixCls = props.prefixCls, presets = props.presets, _onClick = props.onClick, onHover = props.onHover;
  if (!presets.length) {
    return null;
  }
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: "".concat(prefixCls, "-presets")
  }, /* @__PURE__ */ react.exports.createElement("ul", null, presets.map(function(_ref, index2) {
    var label = _ref.label, value = _ref.value;
    return /* @__PURE__ */ react.exports.createElement("li", {
      key: index2,
      onClick: function onClick() {
        _onClick(value);
      },
      onMouseEnter: function onMouseEnter() {
        onHover === null || onHover === void 0 ? void 0 : onHover(value);
      },
      onMouseLeave: function onMouseLeave() {
        onHover === null || onHover === void 0 ? void 0 : onHover(null);
      }
    }, label);
  })));
}
function InnerPicker(props) {
  var _classNames2;
  var _ref = props, _ref$prefixCls = _ref.prefixCls, prefixCls = _ref$prefixCls === void 0 ? "rc-picker" : _ref$prefixCls, id = _ref.id, tabIndex = _ref.tabIndex, style = _ref.style, className = _ref.className, dropdownClassName = _ref.dropdownClassName, dropdownAlign = _ref.dropdownAlign, popupStyle = _ref.popupStyle, transitionName = _ref.transitionName, generateConfig2 = _ref.generateConfig, locale = _ref.locale, inputReadOnly = _ref.inputReadOnly, allowClear = _ref.allowClear, autoFocus = _ref.autoFocus, showTime = _ref.showTime, _ref$picker = _ref.picker, picker = _ref$picker === void 0 ? "date" : _ref$picker, format2 = _ref.format, use12Hours = _ref.use12Hours, value = _ref.value, defaultValue = _ref.defaultValue, presets = _ref.presets, open = _ref.open, defaultOpen = _ref.defaultOpen, defaultOpenValue = _ref.defaultOpenValue, suffixIcon = _ref.suffixIcon, clearIcon = _ref.clearIcon, disabled = _ref.disabled, disabledDate = _ref.disabledDate, placeholder = _ref.placeholder, getPopupContainer = _ref.getPopupContainer, pickerRef = _ref.pickerRef, panelRender = _ref.panelRender, onChange = _ref.onChange, onOpenChange = _ref.onOpenChange, onFocus = _ref.onFocus, onBlur = _ref.onBlur, onMouseDown = _ref.onMouseDown, onMouseUp = _ref.onMouseUp, onMouseEnter = _ref.onMouseEnter, onMouseLeave = _ref.onMouseLeave, onContextMenu = _ref.onContextMenu, onClick = _ref.onClick, _onKeyDown = _ref.onKeyDown, _onSelect = _ref.onSelect, direction = _ref.direction, _ref$autoComplete = _ref.autoComplete, autoComplete = _ref$autoComplete === void 0 ? "off" : _ref$autoComplete, inputRender = _ref.inputRender;
  var inputRef = react.exports.useRef(null);
  var needConfirmButton = picker === "date" && !!showTime || picker === "time";
  var presetList = usePresets(presets);
  var formatList = toArray$1(getDefaultFormat(format2, picker, showTime, use12Hours));
  var panelDivRef = react.exports.useRef(null);
  var inputDivRef = react.exports.useRef(null);
  var containerRef = react.exports.useRef(null);
  var _useMergedState = useMergedState(null, {
    value,
    defaultValue
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedValue = _useMergedState2[0], setInnerValue = _useMergedState2[1];
  var _React$useState = react.exports.useState(mergedValue), _React$useState2 = _slicedToArray(_React$useState, 2), selectedValue = _React$useState2[0], setSelectedValue = _React$useState2[1];
  var operationRef = react.exports.useRef(null);
  var _useMergedState3 = useMergedState(false, {
    value: open,
    defaultValue: defaultOpen,
    postState: function postState(postOpen) {
      return disabled ? false : postOpen;
    },
    onChange: function onChange2(newOpen) {
      if (onOpenChange) {
        onOpenChange(newOpen);
      }
      if (!newOpen && operationRef.current && operationRef.current.onClose) {
        operationRef.current.onClose();
      }
    }
  }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), mergedOpen = _useMergedState4[0], triggerInnerOpen = _useMergedState4[1];
  var _useValueTexts = useValueTexts(selectedValue, {
    formatList,
    generateConfig: generateConfig2,
    locale
  }), _useValueTexts2 = _slicedToArray(_useValueTexts, 2), valueTexts = _useValueTexts2[0], firstValueText = _useValueTexts2[1];
  var _useTextValueMapping = useTextValueMapping({
    valueTexts,
    onTextChange: function onTextChange(newText) {
      var inputDate = parseValue(newText, {
        locale,
        formatList,
        generateConfig: generateConfig2
      });
      if (inputDate && (!disabledDate || !disabledDate(inputDate))) {
        setSelectedValue(inputDate);
      }
    }
  }), _useTextValueMapping2 = _slicedToArray(_useTextValueMapping, 3), text = _useTextValueMapping2[0], triggerTextChange = _useTextValueMapping2[1], resetText = _useTextValueMapping2[2];
  var triggerChange = function triggerChange2(newValue) {
    setSelectedValue(newValue);
    setInnerValue(newValue);
    if (onChange && !isEqual(generateConfig2, mergedValue, newValue)) {
      onChange(newValue, newValue ? formatValue(newValue, {
        generateConfig: generateConfig2,
        locale,
        format: formatList[0]
      }) : "");
    }
  };
  var triggerOpen = function triggerOpen2(newOpen) {
    if (disabled && newOpen) {
      return;
    }
    triggerInnerOpen(newOpen);
  };
  var forwardKeyDown = function forwardKeyDown2(e) {
    if (mergedOpen && operationRef.current && operationRef.current.onKeyDown) {
      return operationRef.current.onKeyDown(e);
    }
    {
      warningOnce(false, "Picker not correct forward KeyDown operation. Please help to fire issue about this.");
      return false;
    }
  };
  var onInternalClick = function onInternalClick2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    onClick === null || onClick === void 0 ? void 0 : onClick.apply(void 0, args);
    if (inputRef.current) {
      inputRef.current.focus();
      triggerOpen(true);
    }
  };
  var _usePickerInput = usePickerInput({
    blurToCancel: needConfirmButton,
    open: mergedOpen,
    value: text,
    triggerOpen,
    forwardKeyDown,
    isClickOutside: function isClickOutside(target) {
      return !elementsContains([panelDivRef.current, inputDivRef.current, containerRef.current], target);
    },
    onSubmit: function onSubmit() {
      if (!selectedValue || disabledDate && disabledDate(selectedValue)) {
        return false;
      }
      triggerChange(selectedValue);
      triggerOpen(false);
      resetText();
      return true;
    },
    onCancel: function onCancel() {
      triggerOpen(false);
      setSelectedValue(mergedValue);
      resetText();
    },
    onKeyDown: function onKeyDown(e, preventDefault) {
      _onKeyDown === null || _onKeyDown === void 0 ? void 0 : _onKeyDown(e, preventDefault);
    },
    onFocus,
    onBlur
  }), _usePickerInput2 = _slicedToArray(_usePickerInput, 2), inputProps = _usePickerInput2[0], _usePickerInput2$ = _usePickerInput2[1], focused = _usePickerInput2$.focused, typing = _usePickerInput2$.typing;
  react.exports.useEffect(function() {
    if (!mergedOpen) {
      setSelectedValue(mergedValue);
      if (!valueTexts.length || valueTexts[0] === "") {
        triggerTextChange("");
      } else if (firstValueText !== text) {
        resetText();
      }
    }
  }, [mergedOpen, valueTexts]);
  react.exports.useEffect(function() {
    if (!mergedOpen) {
      resetText();
    }
  }, [picker]);
  react.exports.useEffect(function() {
    setSelectedValue(mergedValue);
  }, [mergedValue]);
  if (pickerRef) {
    pickerRef.current = {
      focus: function focus() {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
      blur: function blur() {
        if (inputRef.current) {
          inputRef.current.blur();
        }
      }
    };
  }
  var _useHoverValue = useHoverValue(text, {
    formatList,
    generateConfig: generateConfig2,
    locale
  }), _useHoverValue2 = _slicedToArray(_useHoverValue, 3), hoverValue = _useHoverValue2[0], onEnter = _useHoverValue2[1], onLeave = _useHoverValue2[2];
  var panelProps = _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    className: void 0,
    style: void 0,
    pickerValue: void 0,
    onPickerValueChange: void 0,
    onChange: null
  });
  var panelNode = /* @__PURE__ */ react.exports.createElement("div", {
    className: "".concat(prefixCls, "-panel-layout")
  }, /* @__PURE__ */ react.exports.createElement(PresetPanel, {
    prefixCls,
    presets: presetList,
    onClick: function onClick2(nextValue) {
      triggerChange(nextValue);
      triggerOpen(false);
    }
  }), /* @__PURE__ */ react.exports.createElement(PickerPanel, _extends({}, panelProps, {
    generateConfig: generateConfig2,
    className: classNames(_defineProperty$1({}, "".concat(prefixCls, "-panel-focused"), !typing)),
    value: selectedValue,
    locale,
    tabIndex: -1,
    onSelect: function onSelect(date) {
      _onSelect === null || _onSelect === void 0 ? void 0 : _onSelect(date);
      setSelectedValue(date);
    },
    direction,
    onPanelChange: function onPanelChange(viewDate, mode) {
      var onPanelChange2 = props.onPanelChange;
      onLeave(true);
      onPanelChange2 === null || onPanelChange2 === void 0 ? void 0 : onPanelChange2(viewDate, mode);
    }
  })));
  if (panelRender) {
    panelNode = panelRender(panelNode);
  }
  var panel = /* @__PURE__ */ react.exports.createElement("div", {
    className: "".concat(prefixCls, "-panel-container"),
    ref: panelDivRef,
    onMouseDown: function onMouseDown2(e) {
      e.preventDefault();
    }
  }, panelNode);
  var suffixNode;
  if (suffixIcon) {
    suffixNode = /* @__PURE__ */ react.exports.createElement("span", {
      className: "".concat(prefixCls, "-suffix")
    }, suffixIcon);
  }
  var clearNode;
  if (allowClear && mergedValue && !disabled) {
    clearNode = /* @__PURE__ */ react.exports.createElement("span", {
      onMouseDown: function onMouseDown2(e) {
        e.preventDefault();
        e.stopPropagation();
      },
      onMouseUp: function onMouseUp2(e) {
        e.preventDefault();
        e.stopPropagation();
        triggerChange(null);
        triggerOpen(false);
      },
      className: "".concat(prefixCls, "-clear"),
      role: "button"
    }, clearIcon || /* @__PURE__ */ react.exports.createElement("span", {
      className: "".concat(prefixCls, "-clear-btn")
    }));
  }
  var mergedInputProps = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
    id,
    tabIndex,
    disabled,
    readOnly: inputReadOnly || typeof formatList[0] === "function" || !typing,
    value: hoverValue || text,
    onChange: function onChange2(e) {
      triggerTextChange(e.target.value);
    },
    autoFocus,
    placeholder,
    ref: inputRef,
    title: text
  }, inputProps), {}, {
    size: getInputSize(picker, formatList[0], generateConfig2)
  }, getDataOrAriaProps(props)), {}, {
    autoComplete
  });
  var inputNode = inputRender ? inputRender(mergedInputProps) : /* @__PURE__ */ react.exports.createElement("input", mergedInputProps);
  var onContextSelect = function onContextSelect2(date, type) {
    if (type === "submit" || type !== "key" && !needConfirmButton) {
      triggerChange(date);
      triggerOpen(false);
    }
  };
  var popupPlacement = direction === "rtl" ? "bottomRight" : "bottomLeft";
  return /* @__PURE__ */ react.exports.createElement(PanelContext.Provider, {
    value: {
      operationRef,
      hideHeader: picker === "time",
      onSelect: onContextSelect,
      open: mergedOpen,
      defaultOpenValue,
      onDateMouseEnter: onEnter,
      onDateMouseLeave: onLeave
    }
  }, /* @__PURE__ */ react.exports.createElement(PickerTrigger, {
    visible: mergedOpen,
    popupElement: panel,
    popupStyle,
    prefixCls,
    dropdownClassName,
    dropdownAlign,
    getPopupContainer,
    transitionName,
    popupPlacement,
    direction
  }, /* @__PURE__ */ react.exports.createElement("div", {
    ref: containerRef,
    className: classNames(prefixCls, className, (_classNames2 = {}, _defineProperty$1(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty$1(_classNames2, "".concat(prefixCls, "-focused"), focused), _defineProperty$1(_classNames2, "".concat(prefixCls, "-rtl"), direction === "rtl"), _classNames2)),
    style,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    onMouseLeave,
    onContextMenu,
    onClick: onInternalClick
  }, /* @__PURE__ */ react.exports.createElement("div", {
    className: classNames("".concat(prefixCls, "-input"), _defineProperty$1({}, "".concat(prefixCls, "-input-placeholder"), !!hoverValue)),
    ref: inputDivRef
  }, inputNode, suffixNode, clearNode))));
}
var Picker = /* @__PURE__ */ function(_React$Component) {
  _inherits(Picker2, _React$Component);
  var _super = _createSuper(Picker2);
  function Picker2() {
    var _this;
    _classCallCheck(this, Picker2);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$1(_assertThisInitialized(_this), "pickerRef", /* @__PURE__ */ react.exports.createRef());
    _defineProperty$1(_assertThisInitialized(_this), "focus", function() {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.focus();
      }
    });
    _defineProperty$1(_assertThisInitialized(_this), "blur", function() {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.blur();
      }
    });
    return _this;
  }
  _createClass(Picker2, [{
    key: "render",
    value: function render() {
      return /* @__PURE__ */ react.exports.createElement(InnerPicker, _extends({}, this.props, {
        pickerRef: this.pickerRef
      }));
    }
  }]);
  return Picker2;
}(react.exports.Component);
function useRangeDisabled(_ref, disabledStart, disabledEnd) {
  var picker = _ref.picker, locale = _ref.locale, selectedValue = _ref.selectedValue, disabledDate = _ref.disabledDate, disabled = _ref.disabled, generateConfig2 = _ref.generateConfig;
  var startDate = getValue(selectedValue, 0);
  var endDate = getValue(selectedValue, 1);
  function weekFirstDate(date) {
    return generateConfig2.locale.getWeekFirstDate(locale.locale, date);
  }
  function monthNumber(date) {
    var year = generateConfig2.getYear(date);
    var month = generateConfig2.getMonth(date);
    return year * 100 + month;
  }
  function quarterNumber(date) {
    var year = generateConfig2.getYear(date);
    var quarter = getQuarter(generateConfig2, date);
    return year * 10 + quarter;
  }
  var disabledStartDate = react.exports.useCallback(function(date) {
    if (disabledDate && disabledDate(date)) {
      return true;
    }
    if (disabled[1] && endDate) {
      return !isSameDate(generateConfig2, date, endDate) && generateConfig2.isAfter(date, endDate);
    }
    if (disabledStart && endDate) {
      switch (picker) {
        case "quarter":
          return quarterNumber(date) > quarterNumber(endDate);
        case "month":
          return monthNumber(date) > monthNumber(endDate);
        case "week":
          return weekFirstDate(date) > weekFirstDate(endDate);
        default:
          return !isSameDate(generateConfig2, date, endDate) && generateConfig2.isAfter(date, endDate);
      }
    }
    return false;
  }, [disabledDate, disabled[1], endDate, disabledStart]);
  var disabledEndDate = react.exports.useCallback(function(date) {
    if (disabledDate && disabledDate(date)) {
      return true;
    }
    if (disabled[0] && startDate) {
      return !isSameDate(generateConfig2, date, endDate) && generateConfig2.isAfter(startDate, date);
    }
    if (disabledEnd && startDate) {
      switch (picker) {
        case "quarter":
          return quarterNumber(date) < quarterNumber(startDate);
        case "month":
          return monthNumber(date) < monthNumber(startDate);
        case "week":
          return weekFirstDate(date) < weekFirstDate(startDate);
        default:
          return !isSameDate(generateConfig2, date, startDate) && generateConfig2.isAfter(startDate, date);
      }
    }
    return false;
  }, [disabledDate, disabled[0], startDate, disabledEnd]);
  return [disabledStartDate, disabledEndDate];
}
function getStartEndDistance(startDate, endDate, picker, generateConfig2) {
  var startNext = getClosingViewDate(startDate, picker, generateConfig2, 1);
  function getDistance(compareFunc) {
    if (compareFunc(startDate, endDate)) {
      return "same";
    }
    if (compareFunc(startNext, endDate)) {
      return "closing";
    }
    return "far";
  }
  switch (picker) {
    case "year":
      return getDistance(function(start, end) {
        return isSameDecade(generateConfig2, start, end);
      });
    case "quarter":
    case "month":
      return getDistance(function(start, end) {
        return isSameYear(generateConfig2, start, end);
      });
    default:
      return getDistance(function(start, end) {
        return isSameMonth(generateConfig2, start, end);
      });
  }
}
function getRangeViewDate(values, index2, picker, generateConfig2) {
  var startDate = getValue(values, 0);
  var endDate = getValue(values, 1);
  if (index2 === 0) {
    return startDate;
  }
  if (startDate && endDate) {
    var distance = getStartEndDistance(startDate, endDate, picker, generateConfig2);
    switch (distance) {
      case "same":
        return startDate;
      case "closing":
        return startDate;
      default:
        return getClosingViewDate(endDate, picker, generateConfig2, -1);
    }
  }
  return startDate;
}
function useRangeViewDates(_ref) {
  var values = _ref.values, picker = _ref.picker, defaultDates = _ref.defaultDates, generateConfig2 = _ref.generateConfig;
  var _React$useState = react.exports.useState(function() {
    return [getValue(defaultDates, 0), getValue(defaultDates, 1)];
  }), _React$useState2 = _slicedToArray(_React$useState, 2), defaultViewDates = _React$useState2[0], setDefaultViewDates = _React$useState2[1];
  var _React$useState3 = react.exports.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), viewDates = _React$useState4[0], setInternalViewDates = _React$useState4[1];
  var startDate = getValue(values, 0);
  var endDate = getValue(values, 1);
  function getViewDate(index2) {
    if (defaultViewDates[index2]) {
      return defaultViewDates[index2];
    }
    return getValue(viewDates, index2) || getRangeViewDate(values, index2, picker, generateConfig2) || startDate || endDate || generateConfig2.getNow();
  }
  function setViewDate(viewDate, index2) {
    if (viewDate) {
      var newViewDates = updateValues(viewDates, viewDate, index2);
      setDefaultViewDates(
        updateValues(defaultViewDates, null, index2) || [null, null]
      );
      var anotherIndex = (index2 + 1) % 2;
      if (!getValue(values, anotherIndex)) {
        newViewDates = updateValues(newViewDates, viewDate, anotherIndex);
      }
      setInternalViewDates(newViewDates);
    } else if (startDate || endDate) {
      setInternalViewDates(null);
    }
  }
  return [getViewDate, setViewDate];
}
function reorderValues(values, generateConfig2) {
  if (values && values[0] && values[1] && generateConfig2.isAfter(values[0], values[1])) {
    return [values[1], values[0]];
  }
  return values;
}
function canValueTrigger(value, index2, disabled, allowEmpty) {
  if (value) {
    return true;
  }
  if (allowEmpty && allowEmpty[index2]) {
    return true;
  }
  if (disabled[(index2 + 1) % 2]) {
    return true;
  }
  return false;
}
function InnerRangePicker(props) {
  var _classNames2, _classNames3, _classNames4;
  var _ref = props, _ref$prefixCls = _ref.prefixCls, prefixCls = _ref$prefixCls === void 0 ? "rc-picker" : _ref$prefixCls, id = _ref.id, style = _ref.style, className = _ref.className, popupStyle = _ref.popupStyle, dropdownClassName = _ref.dropdownClassName, transitionName = _ref.transitionName, dropdownAlign = _ref.dropdownAlign, getPopupContainer = _ref.getPopupContainer, generateConfig2 = _ref.generateConfig, locale = _ref.locale, placeholder = _ref.placeholder, autoFocus = _ref.autoFocus, disabled = _ref.disabled, format2 = _ref.format, _ref$picker = _ref.picker, picker = _ref$picker === void 0 ? "date" : _ref$picker, showTime = _ref.showTime, use12Hours = _ref.use12Hours, _ref$separator = _ref.separator, separator = _ref$separator === void 0 ? "~" : _ref$separator, value = _ref.value, defaultValue = _ref.defaultValue, defaultPickerValue = _ref.defaultPickerValue, open = _ref.open, defaultOpen = _ref.defaultOpen, disabledDate = _ref.disabledDate, _disabledTime = _ref.disabledTime, dateRender = _ref.dateRender, panelRender = _ref.panelRender, presets = _ref.presets, ranges = _ref.ranges, allowEmpty = _ref.allowEmpty, allowClear = _ref.allowClear, suffixIcon = _ref.suffixIcon, clearIcon = _ref.clearIcon, pickerRef = _ref.pickerRef, inputReadOnly = _ref.inputReadOnly, mode = _ref.mode, renderExtraFooter = _ref.renderExtraFooter, onChange = _ref.onChange, onOpenChange = _ref.onOpenChange, onPanelChange = _ref.onPanelChange, onCalendarChange = _ref.onCalendarChange, _onFocus = _ref.onFocus, onBlur = _ref.onBlur, onMouseDown = _ref.onMouseDown, onMouseUp = _ref.onMouseUp, onMouseEnter = _ref.onMouseEnter, onMouseLeave = _ref.onMouseLeave, onClick = _ref.onClick, _onOk = _ref.onOk, _onKeyDown = _ref.onKeyDown, components = _ref.components, order = _ref.order, direction = _ref.direction, activePickerIndex = _ref.activePickerIndex, _ref$autoComplete = _ref.autoComplete, autoComplete = _ref$autoComplete === void 0 ? "off" : _ref$autoComplete;
  var needConfirmButton = picker === "date" && !!showTime || picker === "time";
  var openRecordsRef = react.exports.useRef({});
  var containerRef = react.exports.useRef(null);
  var panelDivRef = react.exports.useRef(null);
  var startInputDivRef = react.exports.useRef(null);
  var endInputDivRef = react.exports.useRef(null);
  var separatorRef = react.exports.useRef(null);
  var startInputRef = react.exports.useRef(null);
  var endInputRef = react.exports.useRef(null);
  var arrowRef = react.exports.useRef(null);
  var formatList = toArray$1(getDefaultFormat(format2, picker, showTime, use12Hours));
  var _useMergedState = useMergedState(0, {
    value: activePickerIndex
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedActivePickerIndex = _useMergedState2[0], setMergedActivePickerIndex = _useMergedState2[1];
  var operationRef = react.exports.useRef(null);
  var mergedDisabled = react.exports.useMemo(function() {
    if (Array.isArray(disabled)) {
      return disabled;
    }
    return [disabled || false, disabled || false];
  }, [disabled]);
  var _useMergedState3 = useMergedState(null, {
    value,
    defaultValue,
    postState: function postState(values) {
      return picker === "time" && !order ? values : reorderValues(values, generateConfig2);
    }
  }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), mergedValue = _useMergedState4[0], setInnerValue = _useMergedState4[1];
  var _useRangeViewDates = useRangeViewDates({
    values: mergedValue,
    picker,
    defaultDates: defaultPickerValue,
    generateConfig: generateConfig2
  }), _useRangeViewDates2 = _slicedToArray(_useRangeViewDates, 2), getViewDate = _useRangeViewDates2[0], setViewDate = _useRangeViewDates2[1];
  var _useMergedState5 = useMergedState(mergedValue, {
    postState: function postState(values) {
      var postValues = values;
      if (mergedDisabled[0] && mergedDisabled[1]) {
        return postValues;
      }
      for (var i = 0; i < 2; i += 1) {
        if (mergedDisabled[i] && !getValue(postValues, i) && !getValue(allowEmpty, i)) {
          postValues = updateValues(postValues, generateConfig2.getNow(), i);
        }
      }
      return postValues;
    }
  }), _useMergedState6 = _slicedToArray(_useMergedState5, 2), selectedValue = _useMergedState6[0], setSelectedValue = _useMergedState6[1];
  var _useMergedState7 = useMergedState([picker, picker], {
    value: mode
  }), _useMergedState8 = _slicedToArray(_useMergedState7, 2), mergedModes = _useMergedState8[0], setInnerModes = _useMergedState8[1];
  react.exports.useEffect(function() {
    setInnerModes([picker, picker]);
  }, [picker]);
  var triggerModesChange = function triggerModesChange2(modes, values) {
    setInnerModes(modes);
    if (onPanelChange) {
      onPanelChange(values, modes);
    }
  };
  var _useRangeDisabled = useRangeDisabled({
    picker,
    selectedValue,
    locale,
    disabled: mergedDisabled,
    disabledDate,
    generateConfig: generateConfig2
  }, openRecordsRef.current[1], openRecordsRef.current[0]), _useRangeDisabled2 = _slicedToArray(_useRangeDisabled, 2), disabledStartDate = _useRangeDisabled2[0], disabledEndDate = _useRangeDisabled2[1];
  var _useMergedState9 = useMergedState(false, {
    value: open,
    defaultValue: defaultOpen,
    postState: function postState(postOpen) {
      return mergedDisabled[mergedActivePickerIndex] ? false : postOpen;
    },
    onChange: function onChange2(newOpen) {
      if (onOpenChange) {
        onOpenChange(newOpen);
      }
      if (!newOpen && operationRef.current && operationRef.current.onClose) {
        operationRef.current.onClose();
      }
    }
  }), _useMergedState10 = _slicedToArray(_useMergedState9, 2), mergedOpen = _useMergedState10[0], triggerInnerOpen = _useMergedState10[1];
  var startOpen = mergedOpen && mergedActivePickerIndex === 0;
  var endOpen = mergedOpen && mergedActivePickerIndex === 1;
  var _useState = react.exports.useState(0), _useState2 = _slicedToArray(_useState, 2), popupMinWidth = _useState2[0], setPopupMinWidth = _useState2[1];
  react.exports.useEffect(function() {
    if (!mergedOpen && containerRef.current) {
      setPopupMinWidth(containerRef.current.offsetWidth);
    }
  }, [mergedOpen]);
  var triggerRef = react.exports.useRef();
  function _triggerOpen(newOpen, index2) {
    if (newOpen) {
      clearTimeout(triggerRef.current);
      openRecordsRef.current[index2] = true;
      setMergedActivePickerIndex(index2);
      triggerInnerOpen(newOpen);
      if (!mergedOpen) {
        setViewDate(null, index2);
      }
    } else if (mergedActivePickerIndex === index2) {
      triggerInnerOpen(newOpen);
      var openRecords = openRecordsRef.current;
      triggerRef.current = setTimeout(function() {
        if (openRecords === openRecordsRef.current) {
          openRecordsRef.current = {};
        }
      });
    }
  }
  function triggerOpenAndFocus(index2) {
    _triggerOpen(true, index2);
    setTimeout(function() {
      var inputRef = [startInputRef, endInputRef][index2];
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  }
  function triggerChange(newValue, sourceIndex) {
    var values = newValue;
    var startValue = getValue(values, 0);
    var endValue = getValue(values, 1);
    if (startValue && endValue && generateConfig2.isAfter(startValue, endValue)) {
      if (picker === "week" && !isSameWeek(generateConfig2, locale.locale, startValue, endValue) || picker === "quarter" && !isSameQuarter(generateConfig2, startValue, endValue) || picker !== "week" && picker !== "quarter" && picker !== "time" && !isSameDate(generateConfig2, startValue, endValue)) {
        if (sourceIndex === 0) {
          values = [startValue, null];
          endValue = null;
        } else {
          startValue = null;
          values = [null, endValue];
        }
        openRecordsRef.current = _defineProperty$1({}, sourceIndex, true);
      } else if (picker !== "time" || order !== false) {
        values = reorderValues(values, generateConfig2);
      }
    }
    setSelectedValue(values);
    var startStr2 = values && values[0] ? formatValue(values[0], {
      generateConfig: generateConfig2,
      locale,
      format: formatList[0]
    }) : "";
    var endStr2 = values && values[1] ? formatValue(values[1], {
      generateConfig: generateConfig2,
      locale,
      format: formatList[0]
    }) : "";
    if (onCalendarChange) {
      var _info = {
        range: sourceIndex === 0 ? "start" : "end"
      };
      onCalendarChange(values, [startStr2, endStr2], _info);
    }
    var canStartValueTrigger = canValueTrigger(startValue, 0, mergedDisabled, allowEmpty);
    var canEndValueTrigger = canValueTrigger(endValue, 1, mergedDisabled, allowEmpty);
    var canTrigger = values === null || canStartValueTrigger && canEndValueTrigger;
    if (canTrigger) {
      setInnerValue(values);
      if (onChange && (!isEqual(generateConfig2, getValue(mergedValue, 0), startValue) || !isEqual(generateConfig2, getValue(mergedValue, 1), endValue))) {
        onChange(values, [startStr2, endStr2]);
      }
    }
    var nextOpenIndex = null;
    if (sourceIndex === 0 && !mergedDisabled[1]) {
      nextOpenIndex = 1;
    } else if (sourceIndex === 1 && !mergedDisabled[0]) {
      nextOpenIndex = 0;
    }
    if (nextOpenIndex !== null && nextOpenIndex !== mergedActivePickerIndex && (!openRecordsRef.current[nextOpenIndex] || !getValue(values, nextOpenIndex)) && getValue(values, sourceIndex)) {
      triggerOpenAndFocus(nextOpenIndex);
    } else {
      _triggerOpen(false, sourceIndex);
    }
  }
  var forwardKeyDown = function forwardKeyDown2(e) {
    if (mergedOpen && operationRef.current && operationRef.current.onKeyDown) {
      return operationRef.current.onKeyDown(e);
    }
    {
      warningOnce(false, "Picker not correct forward KeyDown operation. Please help to fire issue about this.");
      return false;
    }
  };
  var sharedTextHooksProps = {
    formatList,
    generateConfig: generateConfig2,
    locale
  };
  var _useValueTexts = useValueTexts(getValue(selectedValue, 0), sharedTextHooksProps), _useValueTexts2 = _slicedToArray(_useValueTexts, 2), startValueTexts = _useValueTexts2[0], firstStartValueText = _useValueTexts2[1];
  var _useValueTexts3 = useValueTexts(getValue(selectedValue, 1), sharedTextHooksProps), _useValueTexts4 = _slicedToArray(_useValueTexts3, 2), endValueTexts = _useValueTexts4[0], firstEndValueText = _useValueTexts4[1];
  var _onTextChange = function onTextChange(newText, index2) {
    var inputDate = parseValue(newText, {
      locale,
      formatList,
      generateConfig: generateConfig2
    });
    var disabledFunc = index2 === 0 ? disabledStartDate : disabledEndDate;
    if (inputDate && !disabledFunc(inputDate)) {
      setSelectedValue(updateValues(selectedValue, inputDate, index2));
      setViewDate(inputDate, index2);
    }
  };
  var _useTextValueMapping = useTextValueMapping({
    valueTexts: startValueTexts,
    onTextChange: function onTextChange(newText) {
      return _onTextChange(newText, 0);
    }
  }), _useTextValueMapping2 = _slicedToArray(_useTextValueMapping, 3), startText = _useTextValueMapping2[0], triggerStartTextChange = _useTextValueMapping2[1], resetStartText = _useTextValueMapping2[2];
  var _useTextValueMapping3 = useTextValueMapping({
    valueTexts: endValueTexts,
    onTextChange: function onTextChange(newText) {
      return _onTextChange(newText, 1);
    }
  }), _useTextValueMapping4 = _slicedToArray(_useTextValueMapping3, 3), endText = _useTextValueMapping4[0], triggerEndTextChange = _useTextValueMapping4[1], resetEndText = _useTextValueMapping4[2];
  var _useState3 = react.exports.useState(null), _useState4 = _slicedToArray(_useState3, 2), rangeHoverValue = _useState4[0], setRangeHoverValue = _useState4[1];
  var _useState5 = react.exports.useState(null), _useState6 = _slicedToArray(_useState5, 2), hoverRangedValue = _useState6[0], setHoverRangedValue = _useState6[1];
  var _useHoverValue = useHoverValue(startText, {
    formatList,
    generateConfig: generateConfig2,
    locale
  }), _useHoverValue2 = _slicedToArray(_useHoverValue, 3), startHoverValue = _useHoverValue2[0], onStartEnter = _useHoverValue2[1], onStartLeave = _useHoverValue2[2];
  var _useHoverValue3 = useHoverValue(endText, {
    formatList,
    generateConfig: generateConfig2,
    locale
  }), _useHoverValue4 = _slicedToArray(_useHoverValue3, 3), endHoverValue = _useHoverValue4[0], onEndEnter = _useHoverValue4[1], onEndLeave = _useHoverValue4[2];
  var onDateMouseEnter = function onDateMouseEnter2(date) {
    setHoverRangedValue(updateValues(selectedValue, date, mergedActivePickerIndex));
    if (mergedActivePickerIndex === 0) {
      onStartEnter(date);
    } else {
      onEndEnter(date);
    }
  };
  var onDateMouseLeave = function onDateMouseLeave2() {
    setHoverRangedValue(updateValues(selectedValue, null, mergedActivePickerIndex));
    if (mergedActivePickerIndex === 0) {
      onStartLeave();
    } else {
      onEndLeave();
    }
  };
  var getSharedInputHookProps = function getSharedInputHookProps2(index2, resetText) {
    return {
      blurToCancel: needConfirmButton,
      forwardKeyDown,
      onBlur,
      isClickOutside: function isClickOutside(target) {
        return !elementsContains([panelDivRef.current, startInputDivRef.current, endInputDivRef.current, containerRef.current], target);
      },
      onFocus: function onFocus(e) {
        setMergedActivePickerIndex(index2);
        if (_onFocus) {
          _onFocus(e);
        }
      },
      triggerOpen: function triggerOpen(newOpen) {
        _triggerOpen(newOpen, index2);
      },
      onSubmit: function onSubmit() {
        if (!selectedValue || disabledDate && disabledDate(selectedValue[index2])) {
          return false;
        }
        triggerChange(selectedValue, index2);
        resetText();
      },
      onCancel: function onCancel() {
        _triggerOpen(false, index2);
        setSelectedValue(mergedValue);
        resetText();
      }
    };
  };
  var _usePickerInput = usePickerInput(_objectSpread2$1(_objectSpread2$1({}, getSharedInputHookProps(0, resetStartText)), {}, {
    open: startOpen,
    value: startText,
    onKeyDown: function onKeyDown(e, preventDefault) {
      _onKeyDown === null || _onKeyDown === void 0 ? void 0 : _onKeyDown(e, preventDefault);
    }
  })), _usePickerInput2 = _slicedToArray(_usePickerInput, 2), startInputProps = _usePickerInput2[0], _usePickerInput2$ = _usePickerInput2[1], startFocused = _usePickerInput2$.focused, startTyping = _usePickerInput2$.typing;
  var _usePickerInput3 = usePickerInput(_objectSpread2$1(_objectSpread2$1({}, getSharedInputHookProps(1, resetEndText)), {}, {
    open: endOpen,
    value: endText,
    onKeyDown: function onKeyDown(e, preventDefault) {
      _onKeyDown === null || _onKeyDown === void 0 ? void 0 : _onKeyDown(e, preventDefault);
    }
  })), _usePickerInput4 = _slicedToArray(_usePickerInput3, 2), endInputProps = _usePickerInput4[0], _usePickerInput4$ = _usePickerInput4[1], endFocused = _usePickerInput4$.focused, endTyping = _usePickerInput4$.typing;
  var onPickerClick = function onPickerClick2(e) {
    if (onClick) {
      onClick(e);
    }
    if (!mergedOpen && !startInputRef.current.contains(e.target) && !endInputRef.current.contains(e.target)) {
      if (!mergedDisabled[0]) {
        triggerOpenAndFocus(0);
      } else if (!mergedDisabled[1]) {
        triggerOpenAndFocus(1);
      }
    }
  };
  var onPickerMouseDown = function onPickerMouseDown2(e) {
    if (onMouseDown) {
      onMouseDown(e);
    }
    if (mergedOpen && (startFocused || endFocused) && !startInputRef.current.contains(e.target) && !endInputRef.current.contains(e.target)) {
      e.preventDefault();
    }
  };
  var startStr = mergedValue && mergedValue[0] ? formatValue(mergedValue[0], {
    locale,
    format: "YYYYMMDDHHmmss",
    generateConfig: generateConfig2
  }) : "";
  var endStr = mergedValue && mergedValue[1] ? formatValue(mergedValue[1], {
    locale,
    format: "YYYYMMDDHHmmss",
    generateConfig: generateConfig2
  }) : "";
  react.exports.useEffect(function() {
    if (!mergedOpen) {
      setSelectedValue(mergedValue);
      if (!startValueTexts.length || startValueTexts[0] === "") {
        triggerStartTextChange("");
      } else if (firstStartValueText !== startText) {
        resetStartText();
      }
      if (!endValueTexts.length || endValueTexts[0] === "") {
        triggerEndTextChange("");
      } else if (firstEndValueText !== endText) {
        resetEndText();
      }
    }
  }, [mergedOpen, startValueTexts, endValueTexts]);
  react.exports.useEffect(function() {
    setSelectedValue(mergedValue);
  }, [startStr, endStr]);
  if (pickerRef) {
    pickerRef.current = {
      focus: function focus() {
        if (startInputRef.current) {
          startInputRef.current.focus();
        }
      },
      blur: function blur() {
        if (startInputRef.current) {
          startInputRef.current.blur();
        }
        if (endInputRef.current) {
          endInputRef.current.blur();
        }
      }
    };
  }
  var presetList = usePresets(presets, ranges);
  function renderPanel() {
    var panelPosition = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var panelProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var panelHoverRangedValue = null;
    if (mergedOpen && hoverRangedValue && hoverRangedValue[0] && hoverRangedValue[1] && generateConfig2.isAfter(hoverRangedValue[1], hoverRangedValue[0])) {
      panelHoverRangedValue = hoverRangedValue;
    }
    var panelShowTime = showTime;
    if (showTime && _typeof$1(showTime) === "object" && showTime.defaultValue) {
      var timeDefaultValues = showTime.defaultValue;
      panelShowTime = _objectSpread2$1(_objectSpread2$1({}, showTime), {}, {
        defaultValue: getValue(timeDefaultValues, mergedActivePickerIndex) || void 0
      });
    }
    var panelDateRender = null;
    if (dateRender) {
      panelDateRender = function panelDateRender2(date, today) {
        return dateRender(date, today, {
          range: mergedActivePickerIndex ? "end" : "start"
        });
      };
    }
    return /* @__PURE__ */ react.exports.createElement(RangeContext.Provider, {
      value: {
        inRange: true,
        panelPosition,
        rangedValue: rangeHoverValue || selectedValue,
        hoverRangedValue: panelHoverRangedValue
      }
    }, /* @__PURE__ */ react.exports.createElement(PickerPanel, _extends({}, props, panelProps, {
      dateRender: panelDateRender,
      showTime: panelShowTime,
      mode: mergedModes[mergedActivePickerIndex],
      generateConfig: generateConfig2,
      style: void 0,
      direction,
      disabledDate: mergedActivePickerIndex === 0 ? disabledStartDate : disabledEndDate,
      disabledTime: function disabledTime(date) {
        if (_disabledTime) {
          return _disabledTime(date, mergedActivePickerIndex === 0 ? "start" : "end");
        }
        return false;
      },
      className: classNames(_defineProperty$1({}, "".concat(prefixCls, "-panel-focused"), mergedActivePickerIndex === 0 ? !startTyping : !endTyping)),
      value: getValue(selectedValue, mergedActivePickerIndex),
      locale,
      tabIndex: -1,
      onPanelChange: function onPanelChange2(date, newMode) {
        if (mergedActivePickerIndex === 0) {
          onStartLeave(true);
        }
        if (mergedActivePickerIndex === 1) {
          onEndLeave(true);
        }
        triggerModesChange(updateValues(mergedModes, newMode, mergedActivePickerIndex), updateValues(selectedValue, date, mergedActivePickerIndex));
        var viewDate = date;
        if (panelPosition === "right" && mergedModes[mergedActivePickerIndex] === newMode) {
          viewDate = getClosingViewDate(viewDate, newMode, generateConfig2, -1);
        }
        setViewDate(viewDate, mergedActivePickerIndex);
      },
      onOk: null,
      onSelect: void 0,
      onChange: void 0,
      defaultValue: mergedActivePickerIndex === 0 ? getValue(selectedValue, 1) : getValue(selectedValue, 0)
    })));
  }
  var arrowLeft = 0;
  var panelLeft = 0;
  if (mergedActivePickerIndex && startInputDivRef.current && separatorRef.current && panelDivRef.current) {
    arrowLeft = startInputDivRef.current.offsetWidth + separatorRef.current.offsetWidth;
    var arrowMarginLeft = arrowRef.current.offsetLeft > arrowLeft ? arrowRef.current.offsetLeft - arrowLeft : arrowRef.current.offsetLeft;
    if (panelDivRef.current.offsetWidth !== void 0 && arrowRef.current.offsetWidth !== void 0 && arrowLeft > panelDivRef.current.offsetWidth - arrowRef.current.offsetWidth - (direction === "rtl" ? 0 : arrowMarginLeft)) {
      panelLeft = arrowLeft;
    }
  }
  var arrowPositionStyle = direction === "rtl" ? {
    right: arrowLeft
  } : {
    left: arrowLeft
  };
  function renderPanels() {
    var panels;
    var extraNode = getExtraFooter(prefixCls, mergedModes[mergedActivePickerIndex], renderExtraFooter);
    var rangesNode = getRanges({
      prefixCls,
      components,
      needConfirmButton,
      okDisabled: !getValue(selectedValue, mergedActivePickerIndex) || disabledDate && disabledDate(selectedValue[mergedActivePickerIndex]),
      locale,
      onOk: function onOk() {
        if (getValue(selectedValue, mergedActivePickerIndex)) {
          triggerChange(selectedValue, mergedActivePickerIndex);
          if (_onOk) {
            _onOk(selectedValue);
          }
        }
      }
    });
    if (picker !== "time" && !showTime) {
      var viewDate = getViewDate(mergedActivePickerIndex);
      var nextViewDate = getClosingViewDate(viewDate, picker, generateConfig2);
      var currentMode = mergedModes[mergedActivePickerIndex];
      var showDoublePanel = currentMode === picker;
      var leftPanel = renderPanel(showDoublePanel ? "left" : false, {
        pickerValue: viewDate,
        onPickerValueChange: function onPickerValueChange(newViewDate) {
          setViewDate(newViewDate, mergedActivePickerIndex);
        }
      });
      var rightPanel = renderPanel("right", {
        pickerValue: nextViewDate,
        onPickerValueChange: function onPickerValueChange(newViewDate) {
          setViewDate(getClosingViewDate(newViewDate, picker, generateConfig2, -1), mergedActivePickerIndex);
        }
      });
      if (direction === "rtl") {
        panels = /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, rightPanel, showDoublePanel && leftPanel);
      } else {
        panels = /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, leftPanel, showDoublePanel && rightPanel);
      }
    } else {
      panels = renderPanel();
    }
    var mergedNodes = /* @__PURE__ */ react.exports.createElement("div", {
      className: "".concat(prefixCls, "-panel-layout")
    }, /* @__PURE__ */ react.exports.createElement(PresetPanel, {
      prefixCls,
      presets: presetList,
      onClick: function onClick2(nextValue) {
        triggerChange(nextValue, null);
        _triggerOpen(false, mergedActivePickerIndex);
      },
      onHover: function onHover(hoverValue) {
        setRangeHoverValue(hoverValue);
      }
    }), /* @__PURE__ */ react.exports.createElement("div", null, /* @__PURE__ */ react.exports.createElement("div", {
      className: "".concat(prefixCls, "-panels")
    }, panels), (extraNode || rangesNode) && /* @__PURE__ */ react.exports.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, extraNode, rangesNode)));
    if (panelRender) {
      mergedNodes = panelRender(mergedNodes);
    }
    return /* @__PURE__ */ react.exports.createElement("div", {
      className: "".concat(prefixCls, "-panel-container"),
      style: {
        marginLeft: panelLeft
      },
      ref: panelDivRef,
      onMouseDown: function onMouseDown2(e) {
        e.preventDefault();
      }
    }, mergedNodes);
  }
  var rangePanel = /* @__PURE__ */ react.exports.createElement("div", {
    className: classNames("".concat(prefixCls, "-range-wrapper"), "".concat(prefixCls, "-").concat(picker, "-range-wrapper")),
    style: {
      minWidth: popupMinWidth
    }
  }, /* @__PURE__ */ react.exports.createElement("div", {
    ref: arrowRef,
    className: "".concat(prefixCls, "-range-arrow"),
    style: arrowPositionStyle
  }), renderPanels());
  var suffixNode;
  if (suffixIcon) {
    suffixNode = /* @__PURE__ */ react.exports.createElement("span", {
      className: "".concat(prefixCls, "-suffix")
    }, suffixIcon);
  }
  var clearNode;
  if (allowClear && (getValue(mergedValue, 0) && !mergedDisabled[0] || getValue(mergedValue, 1) && !mergedDisabled[1])) {
    clearNode = /* @__PURE__ */ react.exports.createElement("span", {
      onMouseDown: function onMouseDown2(e) {
        e.preventDefault();
        e.stopPropagation();
      },
      onMouseUp: function onMouseUp2(e) {
        e.preventDefault();
        e.stopPropagation();
        var values = mergedValue;
        if (!mergedDisabled[0]) {
          values = updateValues(values, null, 0);
        }
        if (!mergedDisabled[1]) {
          values = updateValues(values, null, 1);
        }
        triggerChange(values, null);
        _triggerOpen(false, mergedActivePickerIndex);
      },
      className: "".concat(prefixCls, "-clear")
    }, clearIcon || /* @__PURE__ */ react.exports.createElement("span", {
      className: "".concat(prefixCls, "-clear-btn")
    }));
  }
  var inputSharedProps = {
    size: getInputSize(picker, formatList[0], generateConfig2)
  };
  var activeBarLeft = 0;
  var activeBarWidth = 0;
  if (startInputDivRef.current && endInputDivRef.current && separatorRef.current) {
    if (mergedActivePickerIndex === 0) {
      activeBarWidth = startInputDivRef.current.offsetWidth;
    } else {
      activeBarLeft = arrowLeft;
      activeBarWidth = endInputDivRef.current.offsetWidth;
    }
  }
  var activeBarPositionStyle = direction === "rtl" ? {
    right: activeBarLeft
  } : {
    left: activeBarLeft
  };
  var onContextSelect = function onContextSelect2(date, type) {
    var values = updateValues(selectedValue, date, mergedActivePickerIndex);
    if (type === "submit" || type !== "key" && !needConfirmButton) {
      triggerChange(values, mergedActivePickerIndex);
      if (mergedActivePickerIndex === 0) {
        onStartLeave();
      } else {
        onEndLeave();
      }
    } else {
      setSelectedValue(values);
    }
  };
  return /* @__PURE__ */ react.exports.createElement(PanelContext.Provider, {
    value: {
      operationRef,
      hideHeader: picker === "time",
      onDateMouseEnter,
      onDateMouseLeave,
      hideRanges: true,
      onSelect: onContextSelect,
      open: mergedOpen
    }
  }, /* @__PURE__ */ react.exports.createElement(PickerTrigger, {
    visible: mergedOpen,
    popupElement: rangePanel,
    popupStyle,
    prefixCls,
    dropdownClassName,
    dropdownAlign,
    getPopupContainer,
    transitionName,
    range: true,
    direction
  }, /* @__PURE__ */ react.exports.createElement("div", _extends({
    ref: containerRef,
    className: classNames(prefixCls, "".concat(prefixCls, "-range"), className, (_classNames2 = {}, _defineProperty$1(_classNames2, "".concat(prefixCls, "-disabled"), mergedDisabled[0] && mergedDisabled[1]), _defineProperty$1(_classNames2, "".concat(prefixCls, "-focused"), mergedActivePickerIndex === 0 ? startFocused : endFocused), _defineProperty$1(_classNames2, "".concat(prefixCls, "-rtl"), direction === "rtl"), _classNames2)),
    style,
    onClick: onPickerClick,
    onMouseEnter,
    onMouseLeave,
    onMouseDown: onPickerMouseDown,
    onMouseUp
  }, getDataOrAriaProps(props)), /* @__PURE__ */ react.exports.createElement("div", {
    className: classNames("".concat(prefixCls, "-input"), (_classNames3 = {}, _defineProperty$1(_classNames3, "".concat(prefixCls, "-input-active"), mergedActivePickerIndex === 0), _defineProperty$1(_classNames3, "".concat(prefixCls, "-input-placeholder"), !!startHoverValue), _classNames3)),
    ref: startInputDivRef
  }, /* @__PURE__ */ react.exports.createElement("input", _extends({
    id,
    disabled: mergedDisabled[0],
    readOnly: inputReadOnly || typeof formatList[0] === "function" || !startTyping,
    value: startHoverValue || startText,
    onChange: function onChange2(e) {
      triggerStartTextChange(e.target.value);
    },
    autoFocus,
    placeholder: getValue(placeholder, 0) || "",
    ref: startInputRef
  }, startInputProps, inputSharedProps, {
    autoComplete
  }))), /* @__PURE__ */ react.exports.createElement("div", {
    className: "".concat(prefixCls, "-range-separator"),
    ref: separatorRef
  }, separator), /* @__PURE__ */ react.exports.createElement("div", {
    className: classNames("".concat(prefixCls, "-input"), (_classNames4 = {}, _defineProperty$1(_classNames4, "".concat(prefixCls, "-input-active"), mergedActivePickerIndex === 1), _defineProperty$1(_classNames4, "".concat(prefixCls, "-input-placeholder"), !!endHoverValue), _classNames4)),
    ref: endInputDivRef
  }, /* @__PURE__ */ react.exports.createElement("input", _extends({
    disabled: mergedDisabled[1],
    readOnly: inputReadOnly || typeof formatList[0] === "function" || !endTyping,
    value: endHoverValue || endText,
    onChange: function onChange2(e) {
      triggerEndTextChange(e.target.value);
    },
    placeholder: getValue(placeholder, 1) || "",
    ref: endInputRef
  }, endInputProps, inputSharedProps, {
    autoComplete
  }))), /* @__PURE__ */ react.exports.createElement("div", {
    className: "".concat(prefixCls, "-active-bar"),
    style: _objectSpread2$1(_objectSpread2$1({}, activeBarPositionStyle), {}, {
      width: activeBarWidth,
      position: "absolute"
    })
  }), suffixNode, clearNode)));
}
var RangePicker = /* @__PURE__ */ function(_React$Component) {
  _inherits(RangePicker2, _React$Component);
  var _super = _createSuper(RangePicker2);
  function RangePicker2() {
    var _this;
    _classCallCheck(this, RangePicker2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$1(_assertThisInitialized(_this), "pickerRef", /* @__PURE__ */ react.exports.createRef());
    _defineProperty$1(_assertThisInitialized(_this), "focus", function() {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.focus();
      }
    });
    _defineProperty$1(_assertThisInitialized(_this), "blur", function() {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.blur();
      }
    });
    return _this;
  }
  _createClass(RangePicker2, [{
    key: "render",
    value: function render() {
      return /* @__PURE__ */ react.exports.createElement(InnerRangePicker, _extends({}, this.props, {
        pickerRef: this.pickerRef
      }));
    }
  }]);
  return RangePicker2;
}(react.exports.Component);
const genPikerPadding = (token, inputHeight, fontSize, paddingHorizontal) => {
  const {
    lineHeight
  } = token;
  const fontHeight = Math.floor(fontSize * lineHeight) + 2;
  const paddingTop = Math.max((inputHeight - fontHeight) / 2, 0);
  const paddingBottom = Math.max(inputHeight - fontHeight - paddingTop, 0);
  return {
    padding: `${paddingTop}px ${paddingHorizontal}px ${paddingBottom}px`
  };
};
const genPickerCellInnerStyle = (token) => {
  const {
    componentCls,
    pickerCellInnerCls,
    pickerPanelCellHeight,
    motionDurationSlow,
    borderRadiusSM,
    motionDurationMid,
    controlItemBgHover,
    lineWidth,
    lineType,
    colorPrimary,
    controlItemBgActive,
    colorTextLightSolid,
    controlHeightSM,
    pickerDateHoverRangeBorderColor,
    pickerCellBorderGap,
    pickerBasicCellHoverWithRangeColor,
    pickerPanelCellWidth,
    colorTextDisabled,
    colorBgContainerDisabled
  } = token;
  return {
    "&::before": {
      position: "absolute",
      top: "50%",
      insetInlineStart: 0,
      insetInlineEnd: 0,
      zIndex: 1,
      height: pickerPanelCellHeight,
      transform: "translateY(-50%)",
      transition: `all ${motionDurationSlow}`,
      content: '""'
    },
    [pickerCellInnerCls]: {
      position: "relative",
      zIndex: 2,
      display: "inline-block",
      minWidth: pickerPanelCellHeight,
      height: pickerPanelCellHeight,
      lineHeight: `${pickerPanelCellHeight}px`,
      borderRadius: borderRadiusSM,
      transition: `background ${motionDurationMid}, border ${motionDurationMid}`
    },
    [`&:hover:not(&-in-view),
    &:hover:not(&-selected):not(&-range-start):not(&-range-end):not(&-range-hover-start):not(&-range-hover-end)`]: {
      [pickerCellInnerCls]: {
        background: controlItemBgHover
      }
    },
    [`&-in-view:is(&-today) ${pickerCellInnerCls}`]: {
      "&::before": {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        zIndex: 1,
        border: `${lineWidth}px ${lineType} ${colorPrimary}`,
        borderRadius: borderRadiusSM,
        content: '""'
      }
    },
    "&-in-view:is(&-in-range)": {
      position: "relative",
      "&::before": {
        background: controlItemBgActive
      }
    },
    [`&-in-view:is(&-selected) ${pickerCellInnerCls},
    &-in-view:is(&-range-start) ${pickerCellInnerCls},
    &-in-view:is(&-range-end) ${pickerCellInnerCls}`]: {
      color: colorTextLightSolid,
      background: colorPrimary
    },
    [`&-in-view:is(&-range-start):not(&-range-start-single),
      &-in-view:is(&-range-end):not(&-range-end-single)`]: {
      "&::before": {
        background: controlItemBgActive
      }
    },
    "&-in-view:is(&-range-start)::before": {
      insetInlineStart: "50%"
    },
    "&-in-view:is(&-range-end)::before": {
      insetInlineEnd: "50%"
    },
    [`&-in-view:is(&-range-hover-start):not(&-in-range):not(&-range-start):not(&-range-end),
      &-in-view:is(&-range-hover-end):not(&-in-range):not(&-range-start):not(&-range-end),
      &-in-view:is(&-range-hover-start):is(&-range-start-single),
      &-in-view:is(&-range-hover-start):is(&-range-start):is(&-range-end):is(&-range-end-near-hover),
      &-in-view:is(&-range-hover-end):is(&-range-start):is(&-range-end):is(&-range-start-near-hover),
      &-in-view:is(&-range-hover-end):is(&-range-end-single),
      &-in-view:is(&-range-hover):not(&-in-range)`]: {
      "&::after": {
        position: "absolute",
        top: "50%",
        zIndex: 0,
        height: controlHeightSM,
        borderTop: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
        borderBottom: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
        transform: "translateY(-50%)",
        transition: `all ${motionDurationSlow}`,
        content: '""'
      }
    },
    [`&-range-hover-start::after,
      &-range-hover-end::after,
      &-range-hover::after`]: {
      insetInlineEnd: 0,
      insetInlineStart: pickerCellBorderGap
    },
    [`&-in-view:is(&-in-range):is(&-range-hover)::before,
      &-in-view:is(&-range-start):is(&-range-hover)::before,
      &-in-view:is(&-range-end):is(&-range-hover)::before,
      &-in-view:is(&-range-start):not(&-range-start-single):is(&-range-hover-start)::before,
      &-in-view:is(&-range-end):not(&-range-end-single):is(&-range-hover-end)::before,
      ${componentCls}-panel
      > :not(${componentCls}-date-panel)
      &-in-view:is(&-in-range):is(&-range-hover-start)::before,
      ${componentCls}-panel
      > :not(${componentCls}-date-panel)
      &-in-view:is(&-in-range):is(&-range-hover-end)::before`]: {
      background: pickerBasicCellHoverWithRangeColor
    },
    [`&-in-view:is(&-range-start):not(&-range-start-single):not(&-range-end) ${pickerCellInnerCls}`]: {
      borderStartStartRadius: borderRadiusSM,
      borderEndStartRadius: borderRadiusSM,
      borderStartEndRadius: 0,
      borderEndEndRadius: 0
    },
    [`&-in-view:is(&-range-end):not(&-range-end-single):not(&-range-start) ${pickerCellInnerCls}`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      borderStartEndRadius: borderRadiusSM,
      borderEndEndRadius: borderRadiusSM
    },
    "&-range-hover:is(&-range-end)::after": {
      insetInlineStart: "50%"
    },
    [`tr > &-in-view:is(&-range-hover):first-child::after,
      tr > &-in-view:is(&-range-hover-end):first-child::after,
      &-in-view:is(&-start):is(&-range-hover-edge-start):is(&-range-hover-edge-start-near-range)::after,
      &-in-view:is(&-range-hover-edge-start):not(&-range-hover-edge-start-near-range)::after,
      &-in-view:is(&-range-hover-start)::after`]: {
      insetInlineStart: (pickerPanelCellWidth - pickerPanelCellHeight) / 2,
      borderInlineStart: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
      borderStartStartRadius: lineWidth,
      borderEndStartRadius: lineWidth
    },
    [`tr > &-in-view:is(&-range-hover):last-child::after,
      tr > &-in-view:is(&-range-hover-start):last-child::after,
      &-in-view:is(&-end):is(&-range-hover-edge-end):is(&-range-hover-edge-end-near-range)::after,
      &-in-view:is(&-range-hover-edge-end):not(&-range-hover-edge-end-near-range)::after,
      &-in-view:is(&-range-hover-end)::after`]: {
      insetInlineEnd: (pickerPanelCellWidth - pickerPanelCellHeight) / 2,
      borderInlineEnd: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
      borderStartEndRadius: lineWidth,
      borderEndEndRadius: lineWidth
    },
    "&-disabled": {
      color: colorTextDisabled,
      pointerEvents: "none",
      [pickerCellInnerCls]: {
        background: "transparent"
      },
      "&::before": {
        background: colorBgContainerDisabled
      }
    },
    [`&-disabled:is(&-today) ${pickerCellInnerCls}::before`]: {
      borderColor: colorTextDisabled
    }
  };
};
const genPanelStyle = (token) => {
  const {
    componentCls,
    pickerCellInnerCls,
    pickerYearMonthCellWidth,
    pickerControlIconSize,
    pickerPanelCellWidth,
    paddingSM,
    paddingXS,
    paddingXXS,
    colorBgContainer,
    lineWidth,
    lineType,
    borderRadiusLG,
    colorPrimary,
    colorTextHeading,
    colorSplit,
    pickerControlIconBorderWidth,
    colorIcon,
    pickerTextHeight,
    motionDurationMid,
    colorIconHover,
    fontWeightStrong,
    pickerPanelCellHeight,
    pickerCellPaddingVertical,
    colorTextDisabled,
    colorText,
    fontSize,
    pickerBasicCellHoverWithRangeColor,
    motionDurationSlow,
    pickerPanelWithoutTimeCellHeight,
    pickerQuarterPanelContentHeight,
    colorLink,
    colorLinkActive,
    colorLinkHover,
    pickerDateHoverRangeBorderColor,
    borderRadiusSM,
    colorTextLightSolid,
    borderRadius,
    controlItemBgHover,
    pickerTimePanelColumnHeight,
    pickerTimePanelColumnWidth,
    pickerTimePanelCellHeight,
    controlItemBgActive,
    marginXXS
  } = token;
  const pickerPanelWidth = pickerPanelCellWidth * 7 + paddingSM * 2 + 4;
  const hoverCellFixedDistance = (pickerPanelWidth - paddingXS * 2) / 3 - pickerYearMonthCellWidth / 2;
  return {
    [componentCls]: {
      "&-panel": {
        display: "inline-flex",
        flexDirection: "column",
        textAlign: "center",
        background: colorBgContainer,
        border: `${lineWidth}px ${lineType} ${colorSplit}`,
        borderRadius: borderRadiusLG,
        outline: "none",
        "&-focused": {
          borderColor: colorPrimary
        },
        "&-rtl": {
          direction: "rtl",
          [`${componentCls}-prev-icon,
              ${componentCls}-super-prev-icon`]: {
            transform: "rotate(135deg)"
          },
          [`${componentCls}-next-icon,
              ${componentCls}-super-next-icon`]: {
            transform: "rotate(-45deg)"
          }
        }
      },
      [`&-decade-panel,
        &-year-panel,
        &-quarter-panel,
        &-month-panel,
        &-week-panel,
        &-date-panel,
        &-time-panel`]: {
        display: "flex",
        flexDirection: "column",
        width: pickerPanelWidth
      },
      "&-header": {
        display: "flex",
        padding: `0 ${paddingXS}px`,
        color: colorTextHeading,
        borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`,
        "> *": {
          flex: "none"
        },
        button: {
          padding: 0,
          color: colorIcon,
          lineHeight: `${pickerTextHeight}px`,
          background: "transparent",
          border: 0,
          cursor: "pointer",
          transition: `color ${motionDurationMid}`
        },
        "> button": {
          minWidth: "1.6em",
          fontSize,
          "&:hover": {
            color: colorIconHover
          }
        },
        "&-view": {
          flex: "auto",
          fontWeight: fontWeightStrong,
          lineHeight: `${pickerTextHeight}px`,
          button: {
            color: "inherit",
            fontWeight: "inherit",
            verticalAlign: "top",
            "&:not(:first-child)": {
              marginInlineStart: paddingXS
            },
            "&:hover": {
              color: colorPrimary
            }
          }
        }
      },
      [`&-prev-icon,
        &-next-icon,
        &-super-prev-icon,
        &-super-next-icon`]: {
        position: "relative",
        display: "inline-block",
        width: pickerControlIconSize,
        height: pickerControlIconSize,
        "&::before": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          display: "inline-block",
          width: pickerControlIconSize,
          height: pickerControlIconSize,
          border: `0 solid currentcolor`,
          borderBlockStartWidth: pickerControlIconBorderWidth,
          borderBlockEndWidth: 0,
          borderInlineStartWidth: pickerControlIconBorderWidth,
          borderInlineEndWidth: 0,
          content: '""'
        }
      },
      [`&-super-prev-icon,
        &-super-next-icon`]: {
        "&::after": {
          position: "absolute",
          top: Math.ceil(pickerControlIconSize / 2),
          insetInlineStart: Math.ceil(pickerControlIconSize / 2),
          display: "inline-block",
          width: pickerControlIconSize,
          height: pickerControlIconSize,
          border: "0 solid currentcolor",
          borderBlockStartWidth: pickerControlIconBorderWidth,
          borderBlockEndWidth: 0,
          borderInlineStartWidth: pickerControlIconBorderWidth,
          borderInlineEndWidth: 0,
          content: '""'
        }
      },
      [`&-prev-icon,
        &-super-prev-icon`]: {
        transform: "rotate(-45deg)"
      },
      [`&-next-icon,
        &-super-next-icon`]: {
        transform: "rotate(135deg)"
      },
      "&-content": {
        width: "100%",
        tableLayout: "fixed",
        borderCollapse: "collapse",
        "th, td": {
          position: "relative",
          minWidth: pickerPanelCellHeight,
          fontWeight: "normal"
        },
        th: {
          height: pickerPanelCellHeight + pickerCellPaddingVertical * 2,
          color: colorText,
          verticalAlign: "middle"
        }
      },
      "&-cell": Object.assign({
        padding: `${pickerCellPaddingVertical}px 0`,
        color: colorTextDisabled,
        cursor: "pointer",
        "&-in-view": {
          color: colorText
        }
      }, genPickerCellInnerStyle(token)),
      [`&-date-panel ${componentCls}-cell-in-view${componentCls}-cell-in-range${componentCls}-cell-range-hover-start ${pickerCellInnerCls},
        &-date-panel ${componentCls}-cell-in-view${componentCls}-cell-in-range${componentCls}-cell-range-hover-end ${pickerCellInnerCls}`]: {
        "&::after": {
          position: "absolute",
          top: 0,
          bottom: 0,
          zIndex: -1,
          background: pickerBasicCellHoverWithRangeColor,
          transition: `all ${motionDurationSlow}`,
          content: '""'
        }
      },
      [`&-date-panel
        ${componentCls}-cell-in-view${componentCls}-cell-in-range${componentCls}-cell-range-hover-start
        ${pickerCellInnerCls}::after`]: {
        insetInlineEnd: -(pickerPanelCellWidth - pickerPanelCellHeight) / 2,
        insetInlineStart: 0
      },
      [`&-date-panel ${componentCls}-cell-in-view${componentCls}-cell-in-range${componentCls}-cell-range-hover-end ${pickerCellInnerCls}::after`]: {
        insetInlineEnd: 0,
        insetInlineStart: -(pickerPanelCellWidth - pickerPanelCellHeight) / 2
      },
      "&-range-hover:is(&-range-start)::after": {
        insetInlineEnd: "50%"
      },
      [`&-decade-panel,
        &-year-panel,
        &-quarter-panel,
        &-month-panel`]: {
        [`${componentCls}-content`]: {
          height: pickerPanelWithoutTimeCellHeight * 4
        },
        [pickerCellInnerCls]: {
          padding: `0 ${paddingXS}px`
        }
      },
      "&-quarter-panel": {
        [`${componentCls}-content`]: {
          height: pickerQuarterPanelContentHeight
        }
      },
      [`&-panel ${componentCls}-footer`]: {
        borderTop: `${lineWidth}px ${lineType} ${colorSplit}`
      },
      "&-footer": {
        width: "min-content",
        minWidth: "100%",
        lineHeight: `${pickerTextHeight - 2 * lineWidth}px`,
        textAlign: "center",
        "&-extra": {
          padding: `0 ${paddingSM}`,
          lineHeight: `${pickerTextHeight - 2 * lineWidth}px`,
          textAlign: "start",
          "&:not(:last-child)": {
            borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`
          }
        }
      },
      "&-now": {
        textAlign: "start"
      },
      "&-today-btn": {
        color: colorLink,
        "&:hover": {
          color: colorLinkHover
        },
        "&:active": {
          color: colorLinkActive
        },
        "&:is(&-disabled)": {
          color: colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      "&-decade-panel": {
        [pickerCellInnerCls]: {
          padding: `0 ${paddingXS / 2}px`
        },
        [`${componentCls}-cell::before`]: {
          display: "none"
        }
      },
      [`&-year-panel,
        &-quarter-panel,
        &-month-panel`]: {
        [`${componentCls}-body`]: {
          padding: `0 ${paddingXS}px`
        },
        [pickerCellInnerCls]: {
          width: pickerYearMonthCellWidth
        },
        [`${componentCls}-cell-range-hover-start::after`]: {
          insetInlineStart: hoverCellFixedDistance,
          borderInlineStart: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
          borderStartStartRadius: borderRadiusSM,
          borderBottomStartRadius: borderRadiusSM,
          borderStartEndRadius: 0,
          borderBottomEndRadius: 0,
          [`${componentCls}-panel-rtl &`]: {
            insetInlineEnd: hoverCellFixedDistance,
            borderInlineEnd: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
            borderStartStartRadius: 0,
            borderBottomStartRadius: 0,
            borderStartEndRadius: borderRadiusSM,
            borderBottomEndRadius: borderRadiusSM
          }
        },
        [`${componentCls}-cell-range-hover-end::after`]: {
          insetInlineEnd: hoverCellFixedDistance,
          borderInlineEnd: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
          borderStartStartRadius: 0,
          borderBottomStartRadius: 0,
          borderStartEndRadius: borderRadius,
          borderBottomEndRadius: borderRadius,
          [`${componentCls}-panel-rtl &`]: {
            insetInlineStart: hoverCellFixedDistance,
            borderInlineStart: `${lineWidth}px dashed ${pickerDateHoverRangeBorderColor}`,
            borderStartStartRadius: borderRadius,
            borderBottomStartRadius: borderRadius,
            borderStartEndRadius: 0,
            borderBottomEndRadius: 0
          }
        }
      },
      "&-week-panel": {
        [`${componentCls}-body`]: {
          padding: `${paddingXS}px ${paddingSM}px`
        },
        [`${componentCls}-cell`]: {
          [`&:hover ${pickerCellInnerCls},
      &-selected ${pickerCellInnerCls},
      ${pickerCellInnerCls}`]: {
            background: "transparent !important"
          }
        },
        "&-row": {
          td: {
            transition: `background ${motionDurationMid}`,
            "&:first-child": {
              borderStartStartRadius: borderRadiusSM,
              borderEndStartRadius: borderRadiusSM
            },
            "&:last-child": {
              borderStartEndRadius: borderRadiusSM,
              borderEndEndRadius: borderRadiusSM
            }
          },
          "&:hover td": {
            background: controlItemBgHover
          },
          [`&-selected td,
            &-selected:hover td`]: {
            background: colorPrimary,
            [`&${componentCls}-cell-week`]: {
              color: new TinyColor(colorTextLightSolid).setAlpha(0.5).toHexString()
            },
            [`&${componentCls}-cell-today ${pickerCellInnerCls}::before`]: {
              borderColor: colorTextLightSolid
            },
            [pickerCellInnerCls]: {
              color: colorTextLightSolid
            }
          }
        }
      },
      "&-date-panel": {
        [`${componentCls}-body`]: {
          padding: `${paddingXS}px ${paddingSM}px`
        },
        [`${componentCls}-content`]: {
          width: pickerPanelCellWidth * 7,
          th: {
            width: pickerPanelCellWidth
          }
        }
      },
      "&-datetime-panel": {
        display: "flex",
        [`${componentCls}-time-panel`]: {
          borderInlineStart: `${lineWidth}px ${lineType} ${colorSplit}`
        },
        [`${componentCls}-date-panel,
          ${componentCls}-time-panel`]: {
          transition: `opacity ${motionDurationSlow}`
        },
        "&-active": {
          [`${componentCls}-date-panel,
            ${componentCls}-time-panel`]: {
            opacity: 0.3,
            "&-active": {
              opacity: 1
            }
          }
        }
      },
      "&-time-panel": {
        width: "auto",
        minWidth: "auto",
        direction: "ltr",
        [`${componentCls}-content`]: {
          display: "flex",
          flex: "auto",
          height: pickerTimePanelColumnHeight
        },
        "&-column": {
          flex: "1 0 auto",
          width: pickerTimePanelColumnWidth,
          margin: `${paddingXXS}px 0`,
          padding: 0,
          overflowY: "hidden",
          textAlign: "start",
          listStyle: "none",
          transition: `background ${motionDurationMid}`,
          overflowX: "hidden",
          "&::after": {
            display: "block",
            height: pickerTimePanelColumnHeight - pickerTimePanelCellHeight,
            content: '""'
          },
          "&:not(:first-child)": {
            borderInlineStart: `${lineWidth}px ${lineType} ${colorSplit}`
          },
          "&-active": {
            background: new TinyColor(controlItemBgActive).setAlpha(0.2).toHexString()
          },
          "&:hover": {
            overflowY: "auto"
          },
          "> li": {
            margin: 0,
            padding: 0,
            [`&${componentCls}-time-panel-cell`]: {
              marginInline: marginXXS,
              [`${componentCls}-time-panel-cell-inner`]: {
                display: "block",
                width: pickerTimePanelColumnWidth - 2 * marginXXS,
                height: pickerTimePanelCellHeight,
                margin: 0,
                paddingBlock: 0,
                paddingInlineEnd: 0,
                paddingInlineStart: (pickerTimePanelColumnWidth - pickerTimePanelCellHeight) / 2,
                color: colorText,
                lineHeight: `${pickerTimePanelCellHeight}px`,
                borderRadius: borderRadiusSM,
                cursor: "pointer",
                transition: `background ${motionDurationMid}`,
                "&:hover": {
                  background: controlItemBgHover
                }
              },
              "&-selected": {
                [`${componentCls}-time-panel-cell-inner`]: {
                  background: controlItemBgActive
                }
              },
              "&-disabled": {
                [`${componentCls}-time-panel-cell-inner`]: {
                  color: colorTextDisabled,
                  background: "transparent",
                  cursor: "not-allowed"
                }
              }
            }
          }
        }
      },
      [`&-datetime-panel ${componentCls}-time-panel-column:after`]: {
        height: pickerTimePanelColumnHeight - pickerTimePanelCellHeight + paddingXXS * 2
      }
    }
  };
};
const genPickerStatusStyle = (token) => {
  const {
    componentCls,
    colorBgContainer,
    colorError,
    colorErrorOutline,
    colorWarning,
    colorWarningOutline
  } = token;
  return {
    [componentCls]: {
      "&-status-error&": {
        "&, &:not([disabled]):hover": {
          backgroundColor: colorBgContainer,
          borderColor: colorError
        },
        "&-focused, &:focus": Object.assign({}, genActiveStyle(merge(token, {
          inputBorderActiveColor: colorError,
          inputBorderHoverColor: colorError,
          controlOutline: colorErrorOutline
        }))),
        [`${componentCls}-active-bar`]: {
          background: colorError
        }
      },
      "&-status-warning&": {
        "&, &:not([disabled]):hover": {
          backgroundColor: colorBgContainer,
          borderColor: colorWarning
        },
        "&-focused, &:focus": Object.assign({}, genActiveStyle(merge(token, {
          inputBorderActiveColor: colorWarning,
          inputBorderHoverColor: colorWarning,
          controlOutline: colorWarningOutline
        }))),
        [`${componentCls}-active-bar`]: {
          background: colorWarning
        }
      }
    }
  };
};
const genPickerStyle = (token) => {
  const {
    componentCls,
    antCls,
    boxShadowPopoverArrow,
    controlHeight,
    fontSize,
    inputPaddingHorizontal,
    colorBgContainer,
    lineWidth,
    lineType,
    colorBorder,
    borderRadius,
    motionDurationMid,
    colorBgContainerDisabled,
    colorTextDisabled,
    colorTextPlaceholder,
    controlHeightLG,
    fontSizeLG,
    controlHeightSM,
    inputPaddingHorizontalSM,
    paddingXS,
    marginXS,
    colorTextDescription,
    lineWidthBold,
    lineHeight,
    colorPrimary,
    motionDurationSlow,
    zIndexPopup,
    paddingXXS,
    paddingSM,
    pickerTextHeight,
    controlItemBgActive,
    colorPrimaryBorder,
    sizePopupArrow,
    borderRadiusXS,
    borderRadiusOuter,
    colorBgElevated,
    borderRadiusLG,
    boxShadowSecondary,
    borderRadiusSM,
    colorSplit,
    controlItemBgHover,
    presetsWidth,
    presetsMaxWidth
  } = token;
  return [
    {
      [componentCls]: Object.assign(Object.assign(Object.assign({}, resetComponent(token)), genPikerPadding(token, controlHeight, fontSize, inputPaddingHorizontal)), {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        background: colorBgContainer,
        lineHeight: 1,
        border: `${lineWidth}px ${lineType} ${colorBorder}`,
        borderRadius,
        transition: `border ${motionDurationMid}, box-shadow ${motionDurationMid}`,
        "&:hover, &-focused": Object.assign({}, genHoverStyle(token)),
        "&-focused": Object.assign({}, genActiveStyle(token)),
        "&&-disabled": {
          background: colorBgContainerDisabled,
          borderColor: colorBorder,
          cursor: "not-allowed",
          [`${componentCls}-suffix`]: {
            color: colorTextDisabled
          }
        },
        "&&-borderless": {
          backgroundColor: "transparent !important",
          borderColor: "transparent !important",
          boxShadow: "none !important"
        },
        [`${componentCls}-input`]: {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          width: "100%",
          "> input": Object.assign(Object.assign({}, genBasicInputStyle(token)), {
            flex: "auto",
            minWidth: 1,
            height: "auto",
            padding: 0,
            background: "transparent",
            border: 0,
            "&:focus": {
              boxShadow: "none"
            },
            "&[disabled]": {
              background: "transparent"
            }
          }),
          "&:hover": {
            [`${componentCls}-clear`]: {
              opacity: 1
            }
          },
          "&-placeholder": {
            "> input": {
              color: colorTextPlaceholder
            }
          }
        },
        "&-large": Object.assign(Object.assign({}, genPikerPadding(token, controlHeightLG, fontSizeLG, inputPaddingHorizontal)), {
          [`${componentCls}-input > input`]: {
            fontSize: fontSizeLG
          }
        }),
        "&-small": Object.assign({}, genPikerPadding(token, controlHeightSM, fontSize, inputPaddingHorizontalSM)),
        [`${componentCls}-suffix`]: {
          display: "flex",
          flex: "none",
          alignSelf: "center",
          marginInlineStart: paddingXS / 2,
          color: colorTextDisabled,
          lineHeight: 1,
          pointerEvents: "none",
          "> *": {
            verticalAlign: "top",
            "&:not(:last-child)": {
              marginInlineEnd: marginXS
            }
          }
        },
        [`${componentCls}-clear`]: {
          position: "absolute",
          top: "50%",
          insetInlineEnd: 0,
          color: colorTextDisabled,
          lineHeight: 1,
          background: colorBgContainer,
          transform: "translateY(-50%)",
          cursor: "pointer",
          opacity: 0,
          transition: `opacity ${motionDurationMid}, color ${motionDurationMid}`,
          "> *": {
            verticalAlign: "top"
          },
          "&:hover": {
            color: colorTextDescription
          }
        },
        [`${componentCls}-separator`]: {
          position: "relative",
          display: "inline-block",
          width: "1em",
          height: fontSizeLG,
          color: colorTextDisabled,
          fontSize: fontSizeLG,
          verticalAlign: "top",
          cursor: "default",
          [`${componentCls}-focused &`]: {
            color: colorTextDescription
          },
          [`${componentCls}-range-separator &`]: {
            [`${componentCls}-disabled &`]: {
              cursor: "not-allowed"
            }
          }
        },
        "&-range": {
          position: "relative",
          display: "inline-flex",
          [`${componentCls}-clear`]: {
            insetInlineEnd: inputPaddingHorizontal
          },
          "&:hover": {
            [`${componentCls}-clear`]: {
              opacity: 1
            }
          },
          [`${componentCls}-active-bar`]: {
            bottom: -lineWidth,
            height: lineWidthBold,
            marginInlineStart: inputPaddingHorizontal,
            background: colorPrimary,
            opacity: 0,
            transition: `all ${motionDurationSlow} ease-out`,
            pointerEvents: "none"
          },
          [`&${componentCls}-focused`]: {
            [`${componentCls}-active-bar`]: {
              opacity: 1
            }
          },
          [`${componentCls}-range-separator`]: {
            alignItems: "center",
            padding: `0 ${paddingXS}px`,
            lineHeight: 1
          },
          [`&${componentCls}-small`]: {
            [`${componentCls}-clear`]: {
              insetInlineEnd: inputPaddingHorizontalSM
            },
            [`${componentCls}-active-bar`]: {
              marginInlineStart: inputPaddingHorizontalSM
            }
          }
        },
        "&-dropdown": Object.assign(Object.assign(Object.assign({}, resetComponent(token)), genPanelStyle(token)), {
          position: "absolute",
          top: -9999,
          left: {
            _skip_check_: true,
            value: -9999
          },
          zIndex: zIndexPopup,
          "&&-hidden": {
            display: "none"
          },
          "&&-placement-bottomLeft": {
            [`${componentCls}-range-arrow`]: {
              top: 0,
              display: "block",
              transform: "translateY(-100%)"
            }
          },
          "&&-placement-topLeft": {
            [`${componentCls}-range-arrow`]: {
              bottom: 0,
              display: "block",
              transform: "translateY(100%) rotate(180deg)"
            }
          },
          [`&${antCls}-slide-up-enter${antCls}-slide-up-enter-active&-placement-topLeft,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active&-placement-topRight,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active&-placement-topLeft,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active&-placement-topRight`]: {
            animationName: slideDownIn
          },
          [`&${antCls}-slide-up-enter${antCls}-slide-up-enter-active&-placement-bottomLeft,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active&-placement-bottomRight,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active&-placement-bottomLeft,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active&-placement-bottomRight`]: {
            animationName: slideUpIn
          },
          [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active&-placement-topLeft,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active&-placement-topRight`]: {
            animationName: slideDownOut
          },
          [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active&-placement-bottomLeft,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active&-placement-bottomRight`]: {
            animationName: slideUpOut
          },
          [`${componentCls}-panel > ${componentCls}-time-panel`]: {
            paddingTop: paddingXXS
          },
          [`${componentCls}-ranges`]: {
            marginBottom: 0,
            padding: `${paddingXXS}px ${paddingSM}px`,
            overflow: "hidden",
            lineHeight: `${pickerTextHeight - 2 * lineWidth - paddingXS / 2}px`,
            textAlign: "start",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            "> li": {
              display: "inline-block"
            },
            [`${componentCls}-preset > ${antCls}-tag-blue`]: {
              color: colorPrimary,
              background: controlItemBgActive,
              borderColor: colorPrimaryBorder,
              cursor: "pointer"
            },
            [`${componentCls}-ok`]: {
              marginInlineStart: "auto"
            }
          },
          [`${componentCls}-range-wrapper`]: {
            display: "flex",
            position: "relative"
          },
          [`${componentCls}-range-arrow`]: Object.assign({
            position: "absolute",
            zIndex: 1,
            display: "none",
            marginInlineStart: inputPaddingHorizontal * 1.5,
            transition: `left ${motionDurationSlow} ease-out`
          }, roundedArrow(sizePopupArrow, borderRadiusXS, borderRadiusOuter, colorBgElevated, boxShadowPopoverArrow)),
          [`${componentCls}-panel-container`]: {
            overflow: "hidden",
            verticalAlign: "top",
            background: colorBgElevated,
            borderRadius: borderRadiusLG,
            boxShadow: boxShadowSecondary,
            transition: `margin ${motionDurationSlow}`,
            [`${componentCls}-panel-layout`]: {
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "stretch"
            },
            [`${componentCls}-presets`]: {
              display: "flex",
              flexDirection: "column",
              minWidth: presetsWidth,
              maxWidth: presetsMaxWidth,
              ul: {
                height: 0,
                flex: "auto",
                listStyle: "none",
                overflow: "auto",
                margin: 0,
                padding: paddingXS,
                borderInlineEnd: `${lineWidth}px ${lineType} ${colorSplit}`,
                li: Object.assign(Object.assign({}, textEllipsis), {
                  borderRadius: borderRadiusSM,
                  paddingInline: paddingXS,
                  paddingBlock: (controlHeightSM - Math.round(fontSize * lineHeight)) / 2,
                  cursor: "pointer",
                  transition: `all ${motionDurationSlow}`,
                  "+ li": {
                    marginTop: marginXS
                  },
                  "&:hover": {
                    background: controlItemBgHover
                  }
                })
              }
            },
            [`${componentCls}-panels`]: {
              display: "inline-flex",
              flexWrap: "nowrap",
              direction: "ltr",
              [`${componentCls}-panel`]: {
                borderWidth: `0 0 ${lineWidth}px`
              },
              "&:last-child": {
                [`${componentCls}-panel`]: {
                  borderWidth: 0
                }
              }
            },
            [`${componentCls}-panel`]: {
              verticalAlign: "top",
              background: "transparent",
              borderRadius: 0,
              borderWidth: 0,
              [`${componentCls}-content,
            table`]: {
                textAlign: "center"
              },
              "&-focused": {
                borderColor: colorBorder
              }
            }
          }
        }),
        "&-dropdown-range": {
          padding: `${sizePopupArrow * 2 / 3}px 0`,
          "&-hidden": {
            display: "none"
          }
        },
        "&-rtl": {
          direction: "rtl",
          [`${componentCls}-separator`]: {
            transform: "rotate(180deg)"
          },
          [`${componentCls}-footer`]: {
            "&-extra": {
              direction: "rtl"
            }
          }
        }
      })
    },
    initSlideMotion(token, "slide-up"),
    initSlideMotion(token, "slide-down"),
    initMoveMotion(token, "move-up"),
    initMoveMotion(token, "move-down")
  ];
};
const initPickerPanelToken = (token) => {
  const pickerTimePanelCellHeight = 28;
  const {
    componentCls,
    controlHeightLG,
    controlHeightSM,
    colorPrimary,
    paddingXXS
  } = token;
  return {
    pickerCellInnerCls: `${componentCls}-cell-inner`,
    pickerTextHeight: controlHeightLG,
    pickerPanelCellWidth: controlHeightSM * 1.5,
    pickerPanelCellHeight: controlHeightSM,
    pickerDateHoverRangeBorderColor: new TinyColor(colorPrimary).lighten(20).toHexString(),
    pickerBasicCellHoverWithRangeColor: new TinyColor(colorPrimary).lighten(35).toHexString(),
    pickerPanelWithoutTimeCellHeight: controlHeightLG * 1.65,
    pickerYearMonthCellWidth: controlHeightLG * 1.5,
    pickerTimePanelColumnHeight: pickerTimePanelCellHeight * 8,
    pickerTimePanelColumnWidth: controlHeightLG * 1.4,
    pickerTimePanelCellHeight,
    pickerQuarterPanelContentHeight: controlHeightLG * 1.4,
    pickerCellPaddingVertical: paddingXXS,
    pickerCellBorderGap: 2,
    pickerControlIconSize: 7,
    pickerControlIconBorderWidth: 1.5
  };
};
const useStyle = genComponentStyleHook("DatePicker", (token) => {
  const pickerToken = merge(initInputToken(token), initPickerPanelToken(token));
  return [
    genPickerStyle(pickerToken),
    genPickerStatusStyle(pickerToken),
    genCompactItemStyle(token, {
      focusElCls: `${token.componentCls}-focused`
    })
  ];
}, (token) => ({
  presetsWidth: 120,
  presetsMaxWidth: 200,
  zIndexPopup: token.zIndexPopupBase + 50
}));
function PickerButton(props) {
  return /* @__PURE__ */ react.exports.createElement(Button, Object.assign({
    size: "small",
    type: "primary"
  }, props));
}
var CalendarOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" } }] }, "name": "calendar", "theme": "outlined" };
const CalendarOutlinedSvg = CalendarOutlined$2;
var CalendarOutlined = function CalendarOutlined2(props, ref) {
  return /* @__PURE__ */ react.exports.createElement(AntdIcon, _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    ref,
    icon: CalendarOutlinedSvg
  }));
};
CalendarOutlined.displayName = "CalendarOutlined";
const CalendarOutlined$1 = /* @__PURE__ */ react.exports.forwardRef(CalendarOutlined);
var ClockCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" } }] }, "name": "clock-circle", "theme": "outlined" };
const ClockCircleOutlinedSvg = ClockCircleOutlined$2;
var ClockCircleOutlined = function ClockCircleOutlined2(props, ref) {
  return /* @__PURE__ */ react.exports.createElement(AntdIcon, _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    ref,
    icon: ClockCircleOutlinedSvg
  }));
};
ClockCircleOutlined.displayName = "ClockCircleOutlined";
const ClockCircleOutlined$1 = /* @__PURE__ */ react.exports.forwardRef(ClockCircleOutlined);
var SwapRightOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z" } }] }, "name": "swap-right", "theme": "outlined" };
const SwapRightOutlinedSvg = SwapRightOutlined$2;
var SwapRightOutlined = function SwapRightOutlined2(props, ref) {
  return /* @__PURE__ */ react.exports.createElement(AntdIcon, _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    ref,
    icon: SwapRightOutlinedSvg
  }));
};
SwapRightOutlined.displayName = "SwapRightOutlined";
const SwapRightOutlined$1 = /* @__PURE__ */ react.exports.forwardRef(SwapRightOutlined);
function getPlaceholder(picker, locale, customizePlaceholder) {
  if (customizePlaceholder !== void 0) {
    return customizePlaceholder;
  }
  if (picker === "year" && locale.lang.yearPlaceholder) {
    return locale.lang.yearPlaceholder;
  }
  if (picker === "quarter" && locale.lang.quarterPlaceholder) {
    return locale.lang.quarterPlaceholder;
  }
  if (picker === "month" && locale.lang.monthPlaceholder) {
    return locale.lang.monthPlaceholder;
  }
  if (picker === "week" && locale.lang.weekPlaceholder) {
    return locale.lang.weekPlaceholder;
  }
  if (picker === "time" && locale.timePickerLocale.placeholder) {
    return locale.timePickerLocale.placeholder;
  }
  return locale.lang.placeholder;
}
function getRangePlaceholder(picker, locale, customizePlaceholder) {
  if (customizePlaceholder !== void 0) {
    return customizePlaceholder;
  }
  if (picker === "year" && locale.lang.yearPlaceholder) {
    return locale.lang.rangeYearPlaceholder;
  }
  if (picker === "quarter" && locale.lang.quarterPlaceholder) {
    return locale.lang.rangeQuarterPlaceholder;
  }
  if (picker === "month" && locale.lang.monthPlaceholder) {
    return locale.lang.rangeMonthPlaceholder;
  }
  if (picker === "week" && locale.lang.weekPlaceholder) {
    return locale.lang.rangeWeekPlaceholder;
  }
  if (picker === "time" && locale.timePickerLocale.placeholder) {
    return locale.timePickerLocale.rangePlaceholder;
  }
  return locale.lang.rangePlaceholder;
}
function transPlacement2DropdownAlign(direction, placement) {
  const overflow = {
    adjustX: 1,
    adjustY: 1
  };
  switch (placement) {
    case "bottomLeft": {
      return {
        points: ["tl", "bl"],
        offset: [0, 4],
        overflow
      };
    }
    case "bottomRight": {
      return {
        points: ["tr", "br"],
        offset: [0, 4],
        overflow
      };
    }
    case "topLeft": {
      return {
        points: ["bl", "tl"],
        offset: [0, -4],
        overflow
      };
    }
    case "topRight": {
      return {
        points: ["br", "tr"],
        offset: [0, -4],
        overflow
      };
    }
    default: {
      return {
        points: direction === "rtl" ? ["tr", "br"] : ["tl", "bl"],
        offset: [0, 4],
        overflow
      };
    }
  }
}
var __rest$1 = globalThis && globalThis.__rest || function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function generateRangePicker(generateConfig2) {
  const RangePicker$1 = /* @__PURE__ */ react.exports.forwardRef((props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      getPopupContainer: customGetPopupContainer,
      className,
      placement,
      size: customizeSize,
      disabled: customDisabled,
      bordered = true,
      placeholder,
      popupClassName,
      dropdownClassName,
      status: customStatus
    } = props, restProps = __rest$1(props, ["prefixCls", "getPopupContainer", "className", "placement", "size", "disabled", "bordered", "placeholder", "popupClassName", "dropdownClassName", "status"]);
    const innerRef = react.exports.useRef(null);
    const {
      getPrefixCls,
      direction,
      getPopupContainer
    } = react.exports.useContext(ConfigContext);
    const prefixCls = getPrefixCls("picker", customizePrefixCls);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const {
      format: format2,
      showTime,
      picker
    } = props;
    const rootPrefixCls = getPrefixCls();
    const [wrapSSR, hashId] = useStyle(prefixCls);
    let additionalOverrideProps = {};
    additionalOverrideProps = Object.assign(Object.assign(Object.assign({}, additionalOverrideProps), showTime ? getTimeProps(Object.assign({
      format: format2,
      picker
    }, showTime)) : {}), picker === "time" ? getTimeProps(Object.assign(Object.assign({
      format: format2
    }, props), {
      picker
    })) : {});
    const size = react.exports.useContext(SizeContext);
    const mergedSize = compactSize || customizeSize || size;
    const disabled = react.exports.useContext(DisabledContext);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    const formItemContext = react.exports.useContext(FormItemInputContext);
    const {
      hasFeedback,
      status: contextStatus,
      feedbackIcon
    } = formItemContext;
    const suffixNode = /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, picker === "time" ? /* @__PURE__ */ react.exports.createElement(ClockCircleOutlined$1, null) : /* @__PURE__ */ react.exports.createElement(CalendarOutlined$1, null), hasFeedback && feedbackIcon);
    react.exports.useImperativeHandle(ref, () => ({
      focus: () => {
        var _a2;
        return (_a2 = innerRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus();
      },
      blur: () => {
        var _a2;
        return (_a2 = innerRef.current) === null || _a2 === void 0 ? void 0 : _a2.blur();
      }
    }));
    return wrapSSR(/* @__PURE__ */ react.exports.createElement(LocaleReceiver, {
      componentName: "DatePicker",
      defaultLocale: enUS
    }, (contextLocale) => {
      const locale = Object.assign(Object.assign({}, contextLocale), props.locale);
      return /* @__PURE__ */ react.exports.createElement(RangePicker, Object.assign({
        separator: /* @__PURE__ */ react.exports.createElement("span", {
          "aria-label": "to",
          className: `${prefixCls}-separator`
        }, /* @__PURE__ */ react.exports.createElement(SwapRightOutlined$1, null)),
        disabled: mergedDisabled,
        ref: innerRef,
        dropdownAlign: transPlacement2DropdownAlign(direction, placement),
        placeholder: getRangePlaceholder(picker, locale, placeholder),
        suffixIcon: suffixNode,
        clearIcon: /* @__PURE__ */ react.exports.createElement(CloseCircleFilled, null),
        prevIcon: /* @__PURE__ */ react.exports.createElement("span", {
          className: `${prefixCls}-prev-icon`
        }),
        nextIcon: /* @__PURE__ */ react.exports.createElement("span", {
          className: `${prefixCls}-next-icon`
        }),
        superPrevIcon: /* @__PURE__ */ react.exports.createElement("span", {
          className: `${prefixCls}-super-prev-icon`
        }),
        superNextIcon: /* @__PURE__ */ react.exports.createElement("span", {
          className: `${prefixCls}-super-next-icon`
        }),
        allowClear: true,
        transitionName: `${rootPrefixCls}-slide-up`
      }, restProps, additionalOverrideProps, {
        className: classNames({
          [`${prefixCls}-${mergedSize}`]: mergedSize,
          [`${prefixCls}-borderless`]: !bordered
        }, getStatusClassNames(prefixCls, getMergedStatus(contextStatus, customStatus), hasFeedback), hashId, compactItemClassnames, className),
        locale: locale.lang,
        prefixCls,
        getPopupContainer: customGetPopupContainer || getPopupContainer,
        generateConfig: generateConfig2,
        components: Components,
        direction,
        dropdownClassName: classNames(hashId, popupClassName || dropdownClassName)
      }));
    }));
  });
  return RangePicker$1;
}
var __rest = globalThis && globalThis.__rest || function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function generatePicker$1(generateConfig2) {
  function getPicker(picker, displayName) {
    const Picker$1 = /* @__PURE__ */ react.exports.forwardRef((props, ref) => {
      const {
        prefixCls: customizePrefixCls,
        getPopupContainer: customizeGetPopupContainer,
        className,
        size: customizeSize,
        bordered = true,
        placement,
        placeholder,
        popupClassName,
        dropdownClassName,
        disabled: customDisabled,
        status: customStatus
      } = props, restProps = __rest(props, ["prefixCls", "getPopupContainer", "className", "size", "bordered", "placement", "placeholder", "popupClassName", "dropdownClassName", "disabled", "status"]);
      const {
        getPrefixCls,
        direction,
        getPopupContainer
      } = react.exports.useContext(ConfigContext);
      const prefixCls = getPrefixCls("picker", customizePrefixCls);
      const {
        compactSize,
        compactItemClassnames
      } = useCompactItemContext(prefixCls, direction);
      const innerRef = react.exports.useRef(null);
      const {
        format: format2,
        showTime
      } = props;
      const [wrapSSR, hashId] = useStyle(prefixCls);
      react.exports.useImperativeHandle(ref, () => ({
        focus: () => {
          var _a2;
          return (_a2 = innerRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus();
        },
        blur: () => {
          var _a2;
          return (_a2 = innerRef.current) === null || _a2 === void 0 ? void 0 : _a2.blur();
        }
      }));
      const additionalProps = {
        showToday: true
      };
      let additionalOverrideProps = {};
      if (picker) {
        additionalOverrideProps.picker = picker;
      }
      const mergedPicker = picker || props.picker;
      additionalOverrideProps = Object.assign(Object.assign(Object.assign({}, additionalOverrideProps), showTime ? getTimeProps(Object.assign({
        format: format2,
        picker: mergedPicker
      }, showTime)) : {}), mergedPicker === "time" ? getTimeProps(Object.assign(Object.assign({
        format: format2
      }, props), {
        picker: mergedPicker
      })) : {});
      const rootPrefixCls = getPrefixCls();
      const size = react.exports.useContext(SizeContext);
      const mergedSize = compactSize || customizeSize || size;
      const disabled = react.exports.useContext(DisabledContext);
      const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
      const formItemContext = react.exports.useContext(FormItemInputContext);
      const {
        hasFeedback,
        status: contextStatus,
        feedbackIcon
      } = formItemContext;
      const suffixNode = /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, mergedPicker === "time" ? /* @__PURE__ */ react.exports.createElement(ClockCircleOutlined$1, null) : /* @__PURE__ */ react.exports.createElement(CalendarOutlined$1, null), hasFeedback && feedbackIcon);
      return wrapSSR(/* @__PURE__ */ react.exports.createElement(LocaleReceiver, {
        componentName: "DatePicker",
        defaultLocale: enUS
      }, (contextLocale) => {
        const locale = Object.assign(Object.assign({}, contextLocale), props.locale);
        return /* @__PURE__ */ react.exports.createElement(Picker, Object.assign({
          ref: innerRef,
          placeholder: getPlaceholder(mergedPicker, locale, placeholder),
          suffixIcon: suffixNode,
          dropdownAlign: transPlacement2DropdownAlign(direction, placement),
          clearIcon: /* @__PURE__ */ react.exports.createElement(CloseCircleFilled, null),
          prevIcon: /* @__PURE__ */ react.exports.createElement("span", {
            className: `${prefixCls}-prev-icon`
          }),
          nextIcon: /* @__PURE__ */ react.exports.createElement("span", {
            className: `${prefixCls}-next-icon`
          }),
          superPrevIcon: /* @__PURE__ */ react.exports.createElement("span", {
            className: `${prefixCls}-super-prev-icon`
          }),
          superNextIcon: /* @__PURE__ */ react.exports.createElement("span", {
            className: `${prefixCls}-super-next-icon`
          }),
          allowClear: true,
          transitionName: `${rootPrefixCls}-slide-up`
        }, additionalProps, restProps, additionalOverrideProps, {
          locale: locale.lang,
          className: classNames({
            [`${prefixCls}-${mergedSize}`]: mergedSize,
            [`${prefixCls}-borderless`]: !bordered
          }, getStatusClassNames(prefixCls, getMergedStatus(contextStatus, customStatus), hasFeedback), hashId, compactItemClassnames, className),
          prefixCls,
          getPopupContainer: customizeGetPopupContainer || getPopupContainer,
          generateConfig: generateConfig2,
          components: Components,
          direction,
          disabled: mergedDisabled,
          dropdownClassName: classNames(hashId, popupClassName || dropdownClassName)
        }));
      }));
    });
    if (displayName) {
      Picker$1.displayName = displayName;
    }
    return Picker$1;
  }
  const DatePicker2 = getPicker();
  const WeekPicker = getPicker("week", "WeekPicker");
  const MonthPicker = getPicker("month", "MonthPicker");
  const YearPicker = getPicker("year", "YearPicker");
  const TimePicker = getPicker("time", "TimePicker");
  const QuarterPicker = getPicker("quarter", "QuarterPicker");
  return {
    DatePicker: DatePicker2,
    WeekPicker,
    MonthPicker,
    YearPicker,
    TimePicker,
    QuarterPicker
  };
}
const Components = {
  button: PickerButton
};
function toArray(list) {
  if (!list) {
    return [];
  }
  return Array.isArray(list) ? list : [list];
}
function getTimeProps(props) {
  const {
    format: format2,
    picker,
    showHour,
    showMinute,
    showSecond,
    use12Hours
  } = props;
  const firstFormat = toArray(format2)[0];
  const showTimeObj = Object.assign({}, props);
  if (firstFormat && typeof firstFormat === "string") {
    if (!firstFormat.includes("s") && showSecond === void 0) {
      showTimeObj.showSecond = false;
    }
    if (!firstFormat.includes("m") && showMinute === void 0) {
      showTimeObj.showMinute = false;
    }
    if (!firstFormat.includes("H") && !firstFormat.includes("h") && showHour === void 0) {
      showTimeObj.showHour = false;
    }
    if ((firstFormat.includes("a") || firstFormat.includes("A")) && use12Hours === void 0) {
      showTimeObj.use12Hours = true;
    }
  }
  if (picker === "time") {
    return showTimeObj;
  }
  if (typeof firstFormat === "function") {
    delete showTimeObj.format;
  }
  return {
    showTime: showTimeObj
  };
}
function generatePicker(generateConfig2) {
  const {
    DatePicker: DatePicker2,
    WeekPicker,
    MonthPicker,
    YearPicker,
    TimePicker,
    QuarterPicker
  } = generatePicker$1(generateConfig2);
  const RangePicker2 = generateRangePicker(generateConfig2);
  const MergedDatePicker = DatePicker2;
  MergedDatePicker.WeekPicker = WeekPicker;
  MergedDatePicker.MonthPicker = MonthPicker;
  MergedDatePicker.YearPicker = YearPicker;
  MergedDatePicker.RangePicker = RangePicker2;
  MergedDatePicker.TimePicker = TimePicker;
  MergedDatePicker.QuarterPicker = QuarterPicker;
  return MergedDatePicker;
}
const DatePicker$1 = generatePicker(generateConfig);
const PurePanel = genPurePanel(DatePicker$1, "picker");
DatePicker$1._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
const DatePicker$2 = DatePicker$1;
const HCDatePicker = (props) => {
  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };
  return /* @__PURE__ */ jsx(DatePicker$2, {
    format: "YYYY/MM/DD",
    picker: props.picker,
    onChange: props.onChange,
    placeholder: "YYYY / MM / DD",
    disabledDate
  });
};
const DatePicker = HCDatePicker;
try {
  DatePicker$2.displayName = "DatePicker";
  DatePicker$2.__docgenInfo = { "description": "", "displayName": "DatePicker", "props": { "picker": { "defaultValue": null, "description": "", "name": "picker", "required": false, "type": { "name": "enum", "value": [{ "value": '"date"' }, { "value": '"week"' }, { "value": '"month"' }, { "value": '"quarter"' }, { "value": '"year"' }] } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": true, "type": { "name": "((value: Dayjs | null, dateString: string) => void) | undefined" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
const DatePIcker_stories = {
  title: "Components/DatePicker",
  component: DatePicker,
  decorators: [AntdDecorator],
  argTypes: {}
};
const Basic = {
  render: () => {
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    return /* @__PURE__ */ jsx(DatePicker, {
      onChange
    });
  }
};
Basic.parameters = {
  ...Basic.parameters,
  storySource: {
    source: "{\n  render: () => {\n    const onChange: DatePickerProps['onChange'] = (date, dateString) => {\n      console.log(date, dateString);\n    };\n    return <HCDatePicker onChange={onChange} />;\n  }\n}",
    ...(_a = Basic.parameters) == null ? void 0 : _a.storySource
  }
};
const __namedExportsOrder = ["Basic"];
export {
  Basic,
  __namedExportsOrder,
  DatePIcker_stories as default
};
//# sourceMappingURL=DatePIcker.stories.e85c6ee4.js.map
