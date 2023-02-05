var _a;
import { r as react, R as React } from "./index.2e2f892a.js";
import { c as classNames } from "./index.0579b088.js";
import { a as jsxs, j as jsx, F as Fragment } from "./jsx-runtime.db436af5.js";
import { i as index, p as _inherits, q as _createSuper, a as _classCallCheck, _ as _createClass, s as supportRef, h as composeRef, d as _objectSpread2, r as findDOMNode, Z as toArray, N as AntdIcon, v as ConfigContext, $ as useStyle, Q as FormItemInputContext, b as _defineProperty, j as _typeof, o as _objectWithoutProperties, t as useMergedState, f as _slicedToArray, a0 as omit, z as _toConsumableArray, O as useCompactItemContext, S as SizeContext, P as DisabledContext, X as getMergedStatus, a1 as NoCompactStyle, a2 as NoFormStyle, W as getStatusClassNames, V as CloseCircleFilled, a3 as cloneElement, M as Button, u as useLayoutEffect, w as wrapperRaf, Y as AntdDecorator } from "./AntdDecorator.93551762.js";
import { _ as _extends } from "./extends.8d0a382a.js";
import "./_commonjsHelpers.712cc82f.js";
import "./index.36b4d5ff.js";
var elementListeners = /* @__PURE__ */ new Map();
function onResize(entities) {
  entities.forEach(function(entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 ? void 0 : _elementListeners$get.forEach(function(listener) {
      return listener(target);
    });
  });
}
var resizeObserver = new index(onResize);
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, /* @__PURE__ */ new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}
var DomWrapper = /* @__PURE__ */ function(_React$Component) {
  _inherits(DomWrapper2, _React$Component);
  var _super = _createSuper(DomWrapper2);
  function DomWrapper2() {
    _classCallCheck(this, DomWrapper2);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper2, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper2;
}(react.exports.Component);
var CollectionContext = /* @__PURE__ */ react.exports.createContext(null);
function Collection(_ref) {
  var children = _ref.children, onBatchResize = _ref.onBatchResize;
  var resizeIdRef = react.exports.useRef(0);
  var resizeInfosRef = react.exports.useRef([]);
  var onCollectionResize = react.exports.useContext(CollectionContext);
  var onResize2 = react.exports.useCallback(function(size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size,
      element,
      data
    });
    Promise.resolve().then(function() {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 ? void 0 : onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });
    onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return /* @__PURE__ */ react.exports.createElement(CollectionContext.Provider, {
    value: onResize2
  }, children);
}
function SingleObserver(props) {
  var children = props.children, disabled = props.disabled;
  var elementRef = react.exports.useRef(null);
  var wrapperRef = react.exports.useRef(null);
  var onCollectionResize = react.exports.useContext(CollectionContext);
  var isRenderProps = typeof children === "function";
  var mergedChildren = isRenderProps ? children(elementRef) : children;
  var sizeRef = react.exports.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });
  var canRef = !isRenderProps && /* @__PURE__ */ react.exports.isValidElement(mergedChildren) && supportRef(mergedChildren);
  var originRef = canRef ? mergedChildren.ref : null;
  var mergedRef = react.exports.useMemo(function() {
    return composeRef(originRef, elementRef);
  }, [originRef, elementRef]);
  var propsRef = react.exports.useRef(props);
  propsRef.current = props;
  var onInternalResize = react.exports.useCallback(function(target) {
    var _propsRef$current = propsRef.current, onResize2 = _propsRef$current.onResize, data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth, offsetHeight = target.offsetHeight;
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth,
        offsetHeight
      };
      sizeRef.current = size;
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = _objectSpread2(_objectSpread2({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      });
      onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(sizeInfo, target, data);
      if (onResize2) {
        Promise.resolve().then(function() {
          onResize2(sizeInfo, target);
        });
      }
    }
  }, []);
  react.exports.useEffect(function() {
    var currentElement = findDOMNode(elementRef.current) || findDOMNode(wrapperRef.current);
    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }
    return function() {
      return unobserve(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]);
  return /* @__PURE__ */ react.exports.createElement(DomWrapper, {
    ref: wrapperRef
  }, canRef ? /* @__PURE__ */ react.exports.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
var INTERNAL_PREFIX_KEY = "rc-observer-key";
function ResizeObserver(props) {
  var children = props.children;
  var childNodes = typeof children === "function" ? [children] : toArray(children);
  return childNodes.map(function(child, index2) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index2);
    return /* @__PURE__ */ react.exports.createElement(SingleObserver, _extends({}, props, {
      key
    }), child);
  });
}
ResizeObserver.Collection = Collection;
var SearchOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };
const SearchOutlinedSvg = SearchOutlined$2;
var SearchOutlined = function SearchOutlined2(props, ref) {
  return /* @__PURE__ */ react.exports.createElement(AntdIcon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref,
    icon: SearchOutlinedSvg
  }));
};
SearchOutlined.displayName = "SearchOutlined";
const SearchOutlined$1 = /* @__PURE__ */ react.exports.forwardRef(SearchOutlined);
var EyeOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, "name": "eye", "theme": "outlined" };
const EyeOutlinedSvg = EyeOutlined$2;
var EyeOutlined = function EyeOutlined2(props, ref) {
  return /* @__PURE__ */ react.exports.createElement(AntdIcon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref,
    icon: EyeOutlinedSvg
  }));
};
EyeOutlined.displayName = "EyeOutlined";
const EyeOutlined$1 = /* @__PURE__ */ react.exports.forwardRef(EyeOutlined);
const Group = (props) => {
  const {
    getPrefixCls,
    direction
  } = react.exports.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className = ""
  } = props;
  const prefixCls = getPrefixCls("input-group", customizePrefixCls);
  const inputPrefixCls = getPrefixCls("input");
  const [wrapSSR, hashId] = useStyle(inputPrefixCls);
  const cls = classNames(prefixCls, {
    [`${prefixCls}-lg`]: props.size === "large",
    [`${prefixCls}-sm`]: props.size === "small",
    [`${prefixCls}-compact`]: props.compact,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, hashId, className);
  const formItemContext = react.exports.useContext(FormItemInputContext);
  const groupFormItemContext = react.exports.useMemo(() => Object.assign(Object.assign({}, formItemContext), {
    isFormItemInput: false
  }), [formItemContext]);
  return wrapSSR(/* @__PURE__ */ react.exports.createElement("span", {
    className: cls,
    style: props.style,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    onFocus: props.onFocus,
    onBlur: props.onBlur
  }, /* @__PURE__ */ react.exports.createElement(FormItemInputContext.Provider, {
    value: groupFormItemContext
  }, props.children)));
};
const Group$1 = Group;
function hasAddon$1(props) {
  return !!(props.addonBefore || props.addonAfter);
}
function hasPrefixSuffix$1(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
function resolveOnChange$1(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  var event = e;
  if (e.type === "click") {
    var currentTarget = target.cloneNode(true);
    event = Object.create(e, {
      target: {
        value: currentTarget
      },
      currentTarget: {
        value: currentTarget
      }
    });
    currentTarget.value = "";
    onChange(event);
    return;
  }
  if (targetValue !== void 0) {
    event = Object.create(e, {
      target: {
        value: target
      },
      currentTarget: {
        value: target
      }
    });
    target.value = targetValue;
    onChange(event);
    return;
  }
  onChange(event);
}
function triggerFocus$1(element, option) {
  if (!element)
    return;
  element.focus(option);
  var _ref = option || {}, cursor = _ref.cursor;
  if (cursor) {
    var len = element.value.length;
    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0);
        break;
      case "end":
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}
function fixControlledValue$1(value) {
  if (typeof value === "undefined" || value === null) {
    return "";
  }
  return String(value);
}
var BaseInput = function BaseInput2(props) {
  var inputElement = props.inputElement, prefixCls = props.prefixCls, prefix = props.prefix, suffix = props.suffix, addonBefore = props.addonBefore, addonAfter = props.addonAfter, className = props.className, style = props.style, affixWrapperClassName = props.affixWrapperClassName, groupClassName = props.groupClassName, wrapperClassName = props.wrapperClassName, disabled = props.disabled, readOnly = props.readOnly, focused = props.focused, triggerFocus2 = props.triggerFocus, allowClear = props.allowClear, value = props.value, handleReset = props.handleReset, hidden = props.hidden;
  var containerRef = react.exports.useRef(null);
  var onInputClick = function onInputClick2(e) {
    var _containerRef$current;
    if ((_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.contains(e.target)) {
      triggerFocus2 === null || triggerFocus2 === void 0 ? void 0 : triggerFocus2();
    }
  };
  var getClearIcon = function getClearIcon2() {
    var _classNames;
    if (!allowClear) {
      return null;
    }
    var needClear = !disabled && !readOnly && value;
    var clearIconCls = "".concat(prefixCls, "-clear-icon");
    var iconNode = _typeof(allowClear) === "object" && allowClear !== null && allowClear !== void 0 && allowClear.clearIcon ? allowClear.clearIcon : "\u2716";
    return /* @__PURE__ */ jsx("span", {
      onClick: handleReset,
      onMouseDown: function onMouseDown(e) {
        return e.preventDefault();
      },
      className: classNames(clearIconCls, (_classNames = {}, _defineProperty(_classNames, "".concat(clearIconCls, "-hidden"), !needClear), _defineProperty(_classNames, "".concat(clearIconCls, "-has-suffix"), !!suffix), _classNames)),
      role: "button",
      tabIndex: -1,
      children: iconNode
    });
  };
  var element = /* @__PURE__ */ react.exports.cloneElement(inputElement, {
    value,
    hidden
  });
  if (hasPrefixSuffix$1(props)) {
    var _classNames2;
    var affixWrapperPrefixCls = "".concat(prefixCls, "-affix-wrapper");
    var affixWrapperCls = classNames(affixWrapperPrefixCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(affixWrapperPrefixCls, "-disabled"), disabled), _defineProperty(_classNames2, "".concat(affixWrapperPrefixCls, "-focused"), focused), _defineProperty(_classNames2, "".concat(affixWrapperPrefixCls, "-readonly"), readOnly), _defineProperty(_classNames2, "".concat(affixWrapperPrefixCls, "-input-with-clear-btn"), suffix && allowClear && value), _classNames2), !hasAddon$1(props) && className, affixWrapperClassName);
    var suffixNode = (suffix || allowClear) && /* @__PURE__ */ jsxs("span", {
      className: "".concat(prefixCls, "-suffix"),
      children: [getClearIcon(), suffix]
    });
    element = /* @__PURE__ */ jsxs("span", {
      className: affixWrapperCls,
      style,
      hidden: !hasAddon$1(props) && hidden,
      onClick: onInputClick,
      ref: containerRef,
      children: [prefix && /* @__PURE__ */ jsx("span", {
        className: "".concat(prefixCls, "-prefix"),
        children: prefix
      }), /* @__PURE__ */ react.exports.cloneElement(inputElement, {
        style: null,
        value,
        hidden: null
      }), suffixNode]
    });
  }
  if (hasAddon$1(props)) {
    var wrapperCls = "".concat(prefixCls, "-group");
    var addonCls = "".concat(wrapperCls, "-addon");
    var mergedWrapperClassName = classNames("".concat(prefixCls, "-wrapper"), wrapperCls, wrapperClassName);
    var mergedGroupClassName = classNames("".concat(prefixCls, "-group-wrapper"), className, groupClassName);
    return /* @__PURE__ */ jsx("span", {
      className: mergedGroupClassName,
      style,
      hidden,
      children: /* @__PURE__ */ jsxs("span", {
        className: mergedWrapperClassName,
        children: [addonBefore && /* @__PURE__ */ jsx("span", {
          className: addonCls,
          children: addonBefore
        }), /* @__PURE__ */ react.exports.cloneElement(element, {
          style: null,
          hidden: null
        }), addonAfter && /* @__PURE__ */ jsx("span", {
          className: addonCls,
          children: addonAfter
        })]
      })
    });
  }
  return element;
};
var _excluded$1 = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "type", "inputClassName"];
var Input$3 = /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
  var autoComplete = props.autoComplete, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onPressEnter = props.onPressEnter, onKeyDown = props.onKeyDown, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-input" : _props$prefixCls, disabled = props.disabled, htmlSize = props.htmlSize, className = props.className, maxLength = props.maxLength, suffix = props.suffix, showCount = props.showCount, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, inputClassName = props.inputClassName, rest = _objectWithoutProperties(props, _excluded$1);
  var _useMergedState = useMergedState(props.defaultValue, {
    value: props.value
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), value = _useMergedState2[0], setValue = _useMergedState2[1];
  var _useState = react.exports.useState(false), _useState2 = _slicedToArray(_useState, 2), focused = _useState2[0], setFocused = _useState2[1];
  var inputRef = react.exports.useRef(null);
  var focus = function focus2(option) {
    if (inputRef.current) {
      triggerFocus$1(inputRef.current, option);
    }
  };
  react.exports.useImperativeHandle(ref, function() {
    return {
      focus,
      blur: function blur() {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.blur();
      },
      setSelectionRange: function setSelectionRange(start, end, direction) {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.setSelectionRange(start, end, direction);
      },
      select: function select() {
        var _inputRef$current3;
        (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.select();
      },
      input: inputRef.current
    };
  });
  react.exports.useEffect(function() {
    setFocused(function(prev) {
      return prev && disabled ? false : prev;
    });
  }, [disabled]);
  var handleChange = function handleChange2(e) {
    if (props.value === void 0) {
      setValue(e.target.value);
    }
    if (inputRef.current) {
      resolveOnChange$1(inputRef.current, e, onChange);
    }
  };
  var handleKeyDown = function handleKeyDown2(e) {
    if (onPressEnter && e.key === "Enter") {
      onPressEnter(e);
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  };
  var handleFocus = function handleFocus2(e) {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  var handleBlur = function handleBlur2(e) {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };
  var handleReset = function handleReset2(e) {
    setValue("");
    focus();
    if (inputRef.current) {
      resolveOnChange$1(inputRef.current, e, onChange);
    }
  };
  var getInputElement = function getInputElement2() {
    var otherProps = omit(props, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      "defaultValue",
      "showCount",
      "affixWrapperClassName",
      "groupClassName",
      "inputClassName",
      "wrapperClassName",
      "htmlSize"
    ]);
    return /* @__PURE__ */ jsx("input", {
      autoComplete,
      ...otherProps,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      className: classNames(prefixCls, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled), inputClassName, !hasAddon$1(props) && !hasPrefixSuffix$1(props) && className),
      ref: inputRef,
      size: htmlSize,
      type
    });
  };
  var getSuffix = function getSuffix2() {
    var hasMaxLength = Number(maxLength) > 0;
    if (suffix || showCount) {
      var val = fixControlledValue$1(value);
      var valueLength = _toConsumableArray(val).length;
      var dataCount = _typeof(showCount) === "object" ? showCount.formatter({
        value: val,
        count: valueLength,
        maxLength
      }) : "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : "");
      return /* @__PURE__ */ jsxs(Fragment, {
        children: [!!showCount && /* @__PURE__ */ jsx("span", {
          className: classNames("".concat(prefixCls, "-show-count-suffix"), _defineProperty({}, "".concat(prefixCls, "-show-count-has-suffix"), !!suffix)),
          children: dataCount
        }), suffix]
      });
    }
    return null;
  };
  return /* @__PURE__ */ jsx(BaseInput, {
    ...rest,
    prefixCls,
    className,
    inputElement: getInputElement(),
    handleReset,
    value: fixControlledValue$1(value),
    focused,
    triggerFocus: focus,
    suffix: getSuffix(),
    disabled
  });
});
function useRemovePasswordTimeout(inputRef, triggerOnMount) {
  const removePasswordTimeoutRef = react.exports.useRef([]);
  const removePasswordTimeout = () => {
    removePasswordTimeoutRef.current.push(setTimeout(() => {
      var _a2, _b, _c, _d;
      if (((_a2 = inputRef.current) === null || _a2 === void 0 ? void 0 : _a2.input) && ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.input.getAttribute("type")) === "password" && ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.input.hasAttribute("value"))) {
        (_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.input.removeAttribute("value");
      }
    }));
  };
  react.exports.useEffect(() => {
    if (triggerOnMount) {
      removePasswordTimeout();
    }
    return () => removePasswordTimeoutRef.current.forEach((timer) => {
      if (timer) {
        clearTimeout(timer);
      }
    });
  }, []);
  return removePasswordTimeout;
}
function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
var __rest$3 = globalThis && globalThis.__rest || function(s, e) {
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
function fixControlledValue(value) {
  if (typeof value === "undefined" || value === null) {
    return "";
  }
  return String(value);
}
function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  let event = e;
  if (e.type === "click") {
    const currentTarget = target.cloneNode(true);
    event = Object.create(e, {
      target: {
        value: currentTarget
      },
      currentTarget: {
        value: currentTarget
      }
    });
    currentTarget.value = "";
    onChange(event);
    return;
  }
  if (targetValue !== void 0) {
    event = Object.create(e, {
      target: {
        value: target
      },
      currentTarget: {
        value: target
      }
    });
    target.value = targetValue;
    onChange(event);
    return;
  }
  onChange(event);
}
function triggerFocus(element, option) {
  if (!element) {
    return;
  }
  element.focus(option);
  const {
    cursor
  } = option || {};
  if (cursor) {
    const len = element.value.length;
    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0);
        break;
      case "end":
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
        break;
    }
  }
}
const Input$2 = /* @__PURE__ */ react.exports.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    status: customStatus,
    size: customSize,
    disabled: customDisabled,
    onBlur,
    onFocus,
    suffix,
    allowClear,
    addonAfter,
    addonBefore,
    className,
    onChange
  } = props, rest = __rest$3(props, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "onChange"]);
  const {
    getPrefixCls,
    direction,
    input
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("input", customizePrefixCls);
  const inputRef = react.exports.useRef(null);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const size = React.useContext(SizeContext);
  const mergedSize = compactSize || customSize || size;
  const disabled = React.useContext(DisabledContext);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = react.exports.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const inputHasPrefixSuffix = hasPrefixSuffix(props) || !!hasFeedback;
  const prevHasPrefixSuffix = react.exports.useRef(inputHasPrefixSuffix);
  react.exports.useEffect(() => {
    if (inputHasPrefixSuffix && !prevHasPrefixSuffix.current)
      ;
    prevHasPrefixSuffix.current = inputHasPrefixSuffix;
  }, [inputHasPrefixSuffix]);
  const removePasswordTimeout = useRemovePasswordTimeout(inputRef, true);
  const handleBlur = (e) => {
    removePasswordTimeout();
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };
  const handleFocus = (e) => {
    removePasswordTimeout();
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  const handleChange = (e) => {
    removePasswordTimeout();
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };
  const suffixNode = (hasFeedback || suffix) && /* @__PURE__ */ jsxs(Fragment, {
    children: [suffix, hasFeedback && feedbackIcon]
  });
  let mergedAllowClear;
  if (typeof allowClear === "object" && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: /* @__PURE__ */ jsx(CloseCircleFilled, {})
    };
  }
  return wrapSSR(
    /* @__PURE__ */ jsx(Input$3, {
      ...Object.assign({
        ref: composeRef(ref, inputRef),
        prefixCls,
        autoComplete: input === null || input === void 0 ? void 0 : input.autoComplete
      }, rest, {
        disabled: mergedDisabled || void 0,
        onBlur: handleBlur,
        onFocus: handleFocus,
        suffix: suffixNode,
        allowClear: mergedAllowClear,
        className: classNames(className, compactItemClassnames),
        onChange: handleChange,
        addonAfter: addonAfter && /* @__PURE__ */ jsx(NoCompactStyle, {
          children: /* @__PURE__ */ jsx(NoFormStyle, {
            override: true,
            status: true,
            children: addonAfter
          })
        }),
        addonBefore: addonBefore && /* @__PURE__ */ jsx(NoCompactStyle, {
          children: /* @__PURE__ */ jsx(NoFormStyle, {
            override: true,
            status: true,
            children: addonBefore
          })
        }),
        inputClassName: classNames({
          [`${prefixCls}-sm`]: mergedSize === "small",
          [`${prefixCls}-lg`]: mergedSize === "large",
          [`${prefixCls}-rtl`]: direction === "rtl",
          [`${prefixCls}-borderless`]: !bordered
        }, !inputHasPrefixSuffix && getStatusClassNames(prefixCls, mergedStatus), hashId),
        affixWrapperClassName: classNames({
          [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
          [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
          [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl",
          [`${prefixCls}-affix-wrapper-borderless`]: !bordered
        }, getStatusClassNames(`${prefixCls}-affix-wrapper`, mergedStatus, hasFeedback), hashId),
        wrapperClassName: classNames({
          [`${prefixCls}-group-rtl`]: direction === "rtl"
        }, hashId),
        groupClassName: classNames({
          [`${prefixCls}-group-wrapper-sm`]: mergedSize === "small",
          [`${prefixCls}-group-wrapper-lg`]: mergedSize === "large",
          [`${prefixCls}-group-wrapper-rtl`]: direction === "rtl"
        }, getStatusClassNames(`${prefixCls}-group-wrapper`, mergedStatus, hasFeedback), hashId)
      })
    })
  );
});
const InternalInput = Input$2;
var EyeInvisibleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { "tag": "path", "attrs": { "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, "name": "eye-invisible", "theme": "outlined" };
const EyeInvisibleOutlinedSvg = EyeInvisibleOutlined$2;
var EyeInvisibleOutlined = function EyeInvisibleOutlined2(props, ref) {
  return /* @__PURE__ */ react.exports.createElement(AntdIcon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref,
    icon: EyeInvisibleOutlinedSvg
  }));
};
EyeInvisibleOutlined.displayName = "EyeInvisibleOutlined";
const EyeInvisibleOutlined$1 = /* @__PURE__ */ react.exports.forwardRef(EyeInvisibleOutlined);
var __rest$2 = globalThis && globalThis.__rest || function(s, e) {
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
const defaultIconRender = (visible) => visible ? /* @__PURE__ */ react.exports.createElement(EyeOutlined$1, null) : /* @__PURE__ */ react.exports.createElement(EyeInvisibleOutlined$1, null);
const ActionMap = {
  click: "onClick",
  hover: "onMouseOver"
};
const Password = /* @__PURE__ */ react.exports.forwardRef((props, ref) => {
  const {
    visibilityToggle = true
  } = props;
  const visibilityControlled = typeof visibilityToggle === "object" && visibilityToggle.visible !== void 0;
  const [visible, setVisible] = react.exports.useState(() => visibilityControlled ? visibilityToggle.visible : false);
  const inputRef = react.exports.useRef(null);
  react.exports.useEffect(() => {
    if (visibilityControlled) {
      setVisible(visibilityToggle.visible);
    }
  }, [visibilityControlled, visibilityToggle]);
  const removePasswordTimeout = useRemovePasswordTimeout(inputRef);
  const onVisibleChange = () => {
    const {
      disabled
    } = props;
    if (disabled) {
      return;
    }
    if (visible) {
      removePasswordTimeout();
    }
    setVisible((prevState) => {
      var _a2;
      const newState = !prevState;
      if (typeof visibilityToggle === "object") {
        (_a2 = visibilityToggle.onVisibleChange) === null || _a2 === void 0 ? void 0 : _a2.call(visibilityToggle, newState);
      }
      return newState;
    });
  };
  const getIcon = (prefixCls2) => {
    const {
      action = "click",
      iconRender = defaultIconRender
    } = props;
    const iconTrigger = ActionMap[action] || "";
    const icon = iconRender(visible);
    const iconProps = {
      [iconTrigger]: onVisibleChange,
      className: `${prefixCls2}-icon`,
      key: "passwordIcon",
      onMouseDown: (e) => {
        e.preventDefault();
      },
      onMouseUp: (e) => {
        e.preventDefault();
      }
    };
    return /* @__PURE__ */ react.exports.cloneElement(/* @__PURE__ */ react.exports.isValidElement(icon) ? icon : /* @__PURE__ */ react.exports.createElement("span", null, icon), iconProps);
  };
  const {
    className,
    prefixCls: customizePrefixCls,
    inputPrefixCls: customizeInputPrefixCls,
    size
  } = props, restProps = __rest$2(props, ["className", "prefixCls", "inputPrefixCls", "size"]);
  const {
    getPrefixCls
  } = react.exports.useContext(ConfigContext);
  const inputPrefixCls = getPrefixCls("input", customizeInputPrefixCls);
  const prefixCls = getPrefixCls("input-password", customizePrefixCls);
  const suffixIcon = visibilityToggle && getIcon(prefixCls);
  const inputClassName = classNames(prefixCls, className, {
    [`${prefixCls}-${size}`]: !!size
  });
  const omittedProps = Object.assign(Object.assign({}, omit(restProps, ["suffix", "iconRender", "visibilityToggle"])), {
    type: visible ? "text" : "password",
    className: inputClassName,
    prefixCls: inputPrefixCls,
    suffix: suffixIcon
  });
  if (size) {
    omittedProps.size = size;
  }
  return /* @__PURE__ */ react.exports.createElement(InternalInput, Object.assign({
    ref: composeRef(ref, inputRef)
  }, omittedProps));
});
const Password$1 = Password;
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
const Search = /* @__PURE__ */ react.exports.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    inputPrefixCls: customizeInputPrefixCls,
    className,
    size: customizeSize,
    suffix,
    enterButton = false,
    addonAfter,
    loading,
    disabled,
    onSearch: customOnSearch,
    onChange: customOnChange,
    onCompositionStart,
    onCompositionEnd
  } = props, restProps = __rest$1(props, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]);
  const {
    getPrefixCls,
    direction
  } = react.exports.useContext(ConfigContext);
  const contextSize = react.exports.useContext(SizeContext);
  const composedRef = react.exports.useRef(false);
  const prefixCls = getPrefixCls("input-search", customizePrefixCls);
  const inputPrefixCls = getPrefixCls("input", customizeInputPrefixCls);
  const {
    compactSize
  } = useCompactItemContext(prefixCls, direction);
  const size = compactSize || customizeSize || contextSize;
  const inputRef = react.exports.useRef(null);
  const onChange = (e) => {
    if (e && e.target && e.type === "click" && customOnSearch) {
      customOnSearch(e.target.value, e);
    }
    if (customOnChange) {
      customOnChange(e);
    }
  };
  const onMouseDown = (e) => {
    var _a2;
    if (document.activeElement === ((_a2 = inputRef.current) === null || _a2 === void 0 ? void 0 : _a2.input)) {
      e.preventDefault();
    }
  };
  const onSearch = (e) => {
    var _a2, _b;
    if (customOnSearch) {
      customOnSearch((_b = (_a2 = inputRef.current) === null || _a2 === void 0 ? void 0 : _a2.input) === null || _b === void 0 ? void 0 : _b.value, e);
    }
  };
  const onPressEnter = (e) => {
    if (composedRef.current || loading) {
      return;
    }
    onSearch(e);
  };
  const searchIcon = typeof enterButton === "boolean" ? /* @__PURE__ */ react.exports.createElement(SearchOutlined$1, null) : null;
  const btnClassName = `${prefixCls}-button`;
  let button;
  const enterButtonAsElement = enterButton || {};
  const isAntdButton = enterButtonAsElement.type && enterButtonAsElement.type.__ANT_BUTTON === true;
  if (isAntdButton || enterButtonAsElement.type === "button") {
    button = cloneElement(enterButtonAsElement, Object.assign({
      onMouseDown,
      onClick: (e) => {
        var _a2, _b;
        (_b = (_a2 = enterButtonAsElement === null || enterButtonAsElement === void 0 ? void 0 : enterButtonAsElement.props) === null || _a2 === void 0 ? void 0 : _a2.onClick) === null || _b === void 0 ? void 0 : _b.call(_a2, e);
        onSearch(e);
      },
      key: "enterButton"
    }, isAntdButton ? {
      className: btnClassName,
      size
    } : {}));
  } else {
    button = /* @__PURE__ */ react.exports.createElement(Button, {
      className: btnClassName,
      type: enterButton ? "primary" : void 0,
      size,
      disabled,
      key: "enterButton",
      onMouseDown,
      onClick: onSearch,
      loading,
      icon: searchIcon
    }, enterButton);
  }
  if (addonAfter) {
    button = [button, cloneElement(addonAfter, {
      key: "addonAfter"
    })];
  }
  const cls = classNames(prefixCls, {
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-${size}`]: !!size,
    [`${prefixCls}-with-button`]: !!enterButton
  }, className);
  const handleOnCompositionStart = (e) => {
    composedRef.current = true;
    onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
  };
  const handleOnCompositionEnd = (e) => {
    composedRef.current = false;
    onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
  };
  return /* @__PURE__ */ react.exports.createElement(InternalInput, Object.assign({
    ref: composeRef(inputRef, ref),
    onPressEnter
  }, restProps, {
    size,
    onCompositionStart: handleOnCompositionStart,
    onCompositionEnd: handleOnCompositionEnd,
    prefixCls: inputPrefixCls,
    addonAfter: button,
    suffix,
    onChange,
    className: cls,
    disabled
  }));
});
const Search$1 = Search;
var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n";
var SIZING_STYLE = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break"];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var nodeRef = node.getAttribute("id") || node.getAttribute("data-reactid") || node.getAttribute("name");
  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  var style = window.getComputedStyle(node);
  var boxSizing = style.getPropertyValue("box-sizing") || style.getPropertyValue("-moz-box-sizing") || style.getPropertyValue("-webkit-box-sizing");
  var paddingSize = parseFloat(style.getPropertyValue("padding-bottom")) + parseFloat(style.getPropertyValue("padding-top"));
  var borderSize = parseFloat(style.getPropertyValue("border-bottom-width")) + parseFloat(style.getPropertyValue("border-top-width"));
  var sizingStyle = SIZING_STYLE.map(function(name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(";");
  var nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };
  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tab-index", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    document.body.appendChild(hiddenTextarea);
  }
  if (uiTextNode.getAttribute("wrap")) {
    hiddenTextarea.setAttribute("wrap", uiTextNode.getAttribute("wrap"));
  } else {
    hiddenTextarea.removeAttribute("wrap");
  }
  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache), paddingSize = _calculateNodeStyling.paddingSize, borderSize = _calculateNodeStyling.borderSize, boxSizing = _calculateNodeStyling.boxSizing, sizingStyle = _calculateNodeStyling.sizingStyle;
  hiddenTextarea.setAttribute("style", "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || "";
  var minHeight = void 0;
  var maxHeight = void 0;
  var overflowY;
  var height = hiddenTextarea.scrollHeight;
  if (boxSizing === "border-box") {
    height += borderSize;
  } else if (boxSizing === "content-box") {
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    hiddenTextarea.value = " ";
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === "border-box") {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === "border-box") {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? "" : "hidden";
      height = Math.min(maxHeight, height);
    }
  }
  var style = {
    height,
    overflowY,
    resize: "none"
  };
  if (minHeight) {
    style.minHeight = minHeight;
  }
  if (maxHeight) {
    style.maxHeight = maxHeight;
  }
  return style;
}
var _excluded = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"];
var RESIZE_START = 0;
var RESIZE_MEASURING = 1;
var RESIZE_STABLE = 2;
var ResizableTextArea = /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-textarea" : _props$prefixCls;
  props.onPressEnter;
  var defaultValue = props.defaultValue, value = props.value, autoSize = props.autoSize, onResize2 = props.onResize, className = props.className, style = props.style, disabled = props.disabled, onChange = props.onChange;
  props.onInternalAutoSize;
  var restProps = _objectWithoutProperties(props, _excluded);
  var _useMergedState = useMergedState(defaultValue, {
    value,
    postState: function postState(val) {
      return val !== null && val !== void 0 ? val : "";
    }
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedValue = _useMergedState2[0], setMergedValue = _useMergedState2[1];
  var onInternalChange = function onInternalChange2(event) {
    setMergedValue(event.target.value);
    onChange === null || onChange === void 0 ? void 0 : onChange(event);
  };
  var textareaRef = react.exports.useRef();
  react.exports.useImperativeHandle(ref, function() {
    return {
      textArea: textareaRef.current
    };
  });
  var _React$useMemo = react.exports.useMemo(function() {
    if (autoSize && _typeof(autoSize) === "object") {
      return [autoSize.minRows, autoSize.maxRows];
    }
    return [];
  }, [autoSize]), _React$useMemo2 = _slicedToArray(_React$useMemo, 2), minRows = _React$useMemo2[0], maxRows = _React$useMemo2[1];
  var needAutoSize = !!autoSize;
  var fixFirefoxAutoScroll = function fixFirefoxAutoScroll2() {
    try {
      if (document.activeElement === textareaRef.current) {
        var _textareaRef$current = textareaRef.current, selectionStart = _textareaRef$current.selectionStart, selectionEnd = _textareaRef$current.selectionEnd, scrollTop = _textareaRef$current.scrollTop;
        textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
        textareaRef.current.scrollTop = scrollTop;
      }
    } catch (e) {
    }
  };
  var _React$useState = react.exports.useState(RESIZE_STABLE), _React$useState2 = _slicedToArray(_React$useState, 2), resizeState = _React$useState2[0], setResizeState = _React$useState2[1];
  var _React$useState3 = react.exports.useState(), _React$useState4 = _slicedToArray(_React$useState3, 2), autoSizeStyle = _React$useState4[0], setAutoSizeStyle = _React$useState4[1];
  var startResize = function startResize2() {
    setResizeState(RESIZE_START);
  };
  useLayoutEffect(function() {
    if (needAutoSize) {
      startResize();
    }
  }, [value, minRows, maxRows, needAutoSize]);
  useLayoutEffect(function() {
    if (resizeState === RESIZE_START) {
      setResizeState(RESIZE_MEASURING);
    } else if (resizeState === RESIZE_MEASURING) {
      var textareaStyles = calculateAutoSizeStyle(textareaRef.current, false, minRows, maxRows);
      setResizeState(RESIZE_STABLE);
      setAutoSizeStyle(textareaStyles);
    } else {
      fixFirefoxAutoScroll();
    }
  }, [resizeState]);
  var resizeRafRef = react.exports.useRef();
  var cleanRaf = function cleanRaf2() {
    wrapperRaf.cancel(resizeRafRef.current);
  };
  var onInternalResize = function onInternalResize2(size) {
    if (resizeState === RESIZE_STABLE) {
      onResize2 === null || onResize2 === void 0 ? void 0 : onResize2(size);
      if (autoSize) {
        cleanRaf();
        resizeRafRef.current = wrapperRaf(function() {
          startResize();
        });
      }
    }
  };
  react.exports.useEffect(function() {
    return cleanRaf;
  }, []);
  var mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;
  var mergedStyle = _objectSpread2(_objectSpread2({}, style), mergedAutoSizeStyle);
  if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
    mergedStyle.overflowY = "hidden";
    mergedStyle.overflowX = "hidden";
  }
  return /* @__PURE__ */ react.exports.createElement(ResizeObserver, {
    onResize: onInternalResize,
    disabled: !(autoSize || onResize2)
  }, /* @__PURE__ */ react.exports.createElement("textarea", _extends({}, restProps, {
    ref: textareaRef,
    style: mergedStyle,
    className: classNames(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled)),
    disabled,
    value: mergedValue,
    onChange: onInternalChange
  })));
});
var TextArea$2 = /* @__PURE__ */ function(_React$Component) {
  _inherits(TextArea2, _React$Component);
  var _super = _createSuper(TextArea2);
  function TextArea2(props) {
    var _this;
    _classCallCheck(this, TextArea2);
    _this = _super.call(this, props);
    _this.resizableTextArea = void 0;
    _this.focus = function() {
      _this.resizableTextArea.textArea.focus();
    };
    _this.saveTextArea = function(resizableTextArea) {
      _this.resizableTextArea = resizableTextArea;
    };
    _this.handleChange = function(e) {
      var onChange = _this.props.onChange;
      _this.setValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };
    _this.handleKeyDown = function(e) {
      var _this$props = _this.props, onPressEnter = _this$props.onPressEnter, onKeyDown = _this$props.onKeyDown;
      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    };
    var value = typeof props.value === "undefined" || props.value === null ? props.defaultValue : props.value;
    _this.state = {
      value
    };
    return _this;
  }
  _createClass(TextArea2, [{
    key: "setValue",
    value: function setValue(value, callback) {
      if (!("value" in this.props)) {
        this.setState({
          value
        }, callback);
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      this.resizableTextArea.textArea.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /* @__PURE__ */ react.exports.createElement(ResizableTextArea, _extends({}, this.props, {
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        ref: this.saveTextArea
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ("value" in nextProps) {
        return {
          value: nextProps.value
        };
      }
      return null;
    }
  }]);
  return TextArea2;
}(react.exports.Component);
const ClearableInputType = ["text", "input"];
function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
let ClearableLabeledInput = /* @__PURE__ */ function(_React$Component) {
  _inherits(ClearableLabeledInput2, _React$Component);
  var _super = _createSuper(ClearableLabeledInput2);
  function ClearableLabeledInput2() {
    _classCallCheck(this, ClearableLabeledInput2);
    return _super.apply(this, arguments);
  }
  _createClass(ClearableLabeledInput2, [{
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      const {
        value,
        disabled,
        readOnly,
        handleReset,
        suffix
      } = this.props;
      const needClear = !disabled && !readOnly && value;
      const className = `${prefixCls}-clear-icon`;
      return /* @__PURE__ */ react.exports.createElement(CloseCircleFilled, {
        onClick: handleReset,
        onMouseDown: (e) => e.preventDefault(),
        className: classNames({
          [`${className}-hidden`]: !needClear,
          [`${className}-has-suffix`]: !!suffix
        }, className),
        role: "button"
      });
    }
  }, {
    key: "renderTextAreaWithClearIcon",
    value: function renderTextAreaWithClearIcon(prefixCls, element, statusContext) {
      const {
        value,
        allowClear,
        className,
        style,
        direction,
        bordered,
        hidden,
        status: customStatus,
        hashId
      } = this.props;
      const {
        status: contextStatus,
        hasFeedback
      } = statusContext;
      if (!allowClear) {
        return cloneElement(element, {
          value
        });
      }
      const affixWrapperCls = classNames(`${prefixCls}-affix-wrapper`, `${prefixCls}-affix-wrapper-textarea-with-clear-btn`, getStatusClassNames(`${prefixCls}-affix-wrapper`, getMergedStatus(contextStatus, customStatus), hasFeedback), {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
        [`${className}`]: !hasAddon(this.props) && className
      }, hashId);
      return /* @__PURE__ */ react.exports.createElement("span", {
        className: affixWrapperCls,
        style,
        hidden
      }, cloneElement(element, {
        style: null,
        value
      }), this.renderClearIcon(prefixCls));
    }
  }, {
    key: "render",
    value: function render() {
      return /* @__PURE__ */ react.exports.createElement(FormItemInputContext.Consumer, null, (statusContext) => {
        const {
          prefixCls,
          inputType,
          element
        } = this.props;
        if (inputType === ClearableInputType[0]) {
          return this.renderTextAreaWithClearIcon(prefixCls, element, statusContext);
        }
      });
    }
  }]);
  return ClearableLabeledInput2;
}(react.exports.Component);
const ClearableLabeledInput$1 = ClearableLabeledInput;
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
function fixEmojiLength(value, maxLength) {
  return _toConsumableArray(value || "").slice(0, maxLength).join("");
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
  let newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
  } else if (_toConsumableArray(preValue || "").length < triggerValue.length && _toConsumableArray(triggerValue || "").length > maxLength) {
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}
const TextArea = /* @__PURE__ */ react.exports.forwardRef((_a2, ref) => {
  var {
    prefixCls: customizePrefixCls,
    bordered = true,
    showCount = false,
    maxLength,
    className,
    style,
    size: customizeSize,
    disabled: customDisabled,
    onCompositionStart,
    onCompositionEnd,
    onChange,
    status: customStatus
  } = _a2, props = __rest(_a2, ["prefixCls", "bordered", "showCount", "maxLength", "className", "style", "size", "disabled", "onCompositionStart", "onCompositionEnd", "onChange", "status"]);
  const {
    getPrefixCls,
    direction
  } = react.exports.useContext(ConfigContext);
  const size = react.exports.useContext(SizeContext);
  const disabled = react.exports.useContext(DisabledContext);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = react.exports.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const innerRef = react.exports.useRef(null);
  const clearableInputRef = react.exports.useRef(null);
  const [compositing, setCompositing] = react.exports.useState(false);
  const oldCompositionValueRef = react.exports.useRef();
  const oldSelectionStartRef = react.exports.useRef(0);
  const [value, setValue] = useMergedState(props.defaultValue, {
    value: props.value
  });
  const {
    hidden
  } = props;
  const handleSetValue = (val2, callback) => {
    if (props.value === void 0) {
      setValue(val2);
      callback === null || callback === void 0 ? void 0 : callback();
    }
  };
  const hasMaxLength = Number(maxLength) > 0;
  const onInternalCompositionStart = (e) => {
    setCompositing(true);
    oldCompositionValueRef.current = value;
    oldSelectionStartRef.current = e.currentTarget.selectionStart;
    onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
  };
  const onInternalCompositionEnd = (e) => {
    var _a3;
    setCompositing(false);
    let triggerValue = e.currentTarget.value;
    if (hasMaxLength) {
      const isCursorInEnd = oldSelectionStartRef.current >= maxLength + 1 || oldSelectionStartRef.current === ((_a3 = oldCompositionValueRef.current) === null || _a3 === void 0 ? void 0 : _a3.length);
      triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.current, triggerValue, maxLength);
    }
    if (triggerValue !== value) {
      handleSetValue(triggerValue);
      resolveOnChange(e.currentTarget, e, onChange, triggerValue);
    }
    onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
  };
  const handleChange = (e) => {
    let triggerValue = e.target.value;
    if (!compositing && hasMaxLength) {
      const isCursorInEnd = e.target.selectionStart >= maxLength + 1 || e.target.selectionStart === triggerValue.length || !e.target.selectionStart;
      triggerValue = setTriggerValue(isCursorInEnd, value, triggerValue, maxLength);
    }
    handleSetValue(triggerValue);
    resolveOnChange(e.currentTarget, e, onChange, triggerValue);
  };
  const handleReset = (e) => {
    var _a3, _b, _c;
    handleSetValue("");
    (_a3 = innerRef.current) === null || _a3 === void 0 ? void 0 : _a3.focus();
    resolveOnChange((_c = (_b = innerRef.current) === null || _b === void 0 ? void 0 : _b.resizableTextArea) === null || _c === void 0 ? void 0 : _c.textArea, e, onChange);
  };
  const prefixCls = getPrefixCls("input", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  react.exports.useImperativeHandle(ref, () => {
    var _a3;
    return {
      resizableTextArea: (_a3 = innerRef.current) === null || _a3 === void 0 ? void 0 : _a3.resizableTextArea,
      focus: (option) => {
        var _a4, _b;
        triggerFocus((_b = (_a4 = innerRef.current) === null || _a4 === void 0 ? void 0 : _a4.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, option);
      },
      blur: () => {
        var _a4;
        return (_a4 = innerRef.current) === null || _a4 === void 0 ? void 0 : _a4.blur();
      }
    };
  });
  const textArea = /* @__PURE__ */ react.exports.createElement(TextArea$2, Object.assign({}, omit(props, ["allowClear"]), {
    disabled: mergedDisabled,
    className: classNames({
      [`${prefixCls}-borderless`]: !bordered,
      [className]: className && !showCount,
      [`${prefixCls}-sm`]: size === "small" || customizeSize === "small",
      [`${prefixCls}-lg`]: size === "large" || customizeSize === "large"
    }, getStatusClassNames(prefixCls, mergedStatus), hashId),
    style: showCount ? {
      resize: style === null || style === void 0 ? void 0 : style.resize
    } : style,
    prefixCls,
    onCompositionStart: onInternalCompositionStart,
    onChange: handleChange,
    onCompositionEnd: onInternalCompositionEnd,
    ref: innerRef
  }));
  let val = fixControlledValue(value);
  if (!compositing && hasMaxLength && (props.value === null || props.value === void 0)) {
    val = fixEmojiLength(val, maxLength);
  }
  const textareaNode = /* @__PURE__ */ react.exports.createElement(ClearableLabeledInput$1, Object.assign({
    disabled: mergedDisabled
  }, props, {
    prefixCls,
    direction,
    inputType: "text",
    value: val,
    element: textArea,
    handleReset,
    ref: clearableInputRef,
    bordered,
    status: customStatus,
    style: showCount ? void 0 : style,
    hashId
  }));
  if (showCount || hasFeedback) {
    const valueLength = _toConsumableArray(val).length;
    let dataCount = "";
    if (typeof showCount === "object") {
      dataCount = showCount.formatter({
        value: val,
        count: valueLength,
        maxLength
      });
    } else {
      dataCount = `${valueLength}${hasMaxLength ? ` / ${maxLength}` : ""}`;
    }
    return /* @__PURE__ */ react.exports.createElement("div", {
      hidden,
      className: classNames(`${prefixCls}-textarea`, {
        [`${prefixCls}-textarea-rtl`]: direction === "rtl",
        [`${prefixCls}-textarea-show-count`]: showCount
      }, getStatusClassNames(`${prefixCls}-textarea`, mergedStatus, hasFeedback), className, hashId),
      style,
      "data-count": dataCount
    }, textareaNode, hasFeedback && /* @__PURE__ */ react.exports.createElement("span", {
      className: `${prefixCls}-textarea-suffix`
    }, feedbackIcon));
  }
  return wrapSSR(textareaNode);
});
const TextArea$1 = TextArea;
const Input = InternalInput;
Input.Group = Group$1;
Input.Search = Search$1;
Input.TextArea = TextArea$1;
Input.Password = Password$1;
const Input$1 = Input;
const HCInput = (props) => {
  const btnClass = classNames(props.disabled ? "cursor-not-allowed text-disabled" : "cursor-pointer");
  return /* @__PURE__ */ jsxs(react.exports.Fragment, {
    children: [props.label && /* @__PURE__ */ jsx("label", {
      htmlFor: props.label,
      className: `inline-block mb-2 text-body-bold-s`,
      children: props.label
    }), /* @__PURE__ */ jsx(Input$1, {
      id: props.label,
      ref: props.value,
      type: props.type,
      placeholder: props.placeholder,
      prefix: props.prefix,
      suffix: props.suffix,
      disabled: props.disabled,
      className: `
          ${props.className}
          ${btnClass}
          w-full
          text-body-s
          h-12
          rounded-lg`
    })]
  });
};
HCInput.defaultProps = {
  className: "",
  type: "text",
  placeholder: "",
  disabled: false
};
const HCInput$1 = HCInput;
try {
  Input$1.displayName = "Input";
  Input$1.__docgenInfo = { "description": "", "displayName": "Input", "props": { "className": { "defaultValue": { value: "" }, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "Ref<InputRef>" } }, "type": { "defaultValue": { value: "text" }, "description": "", "name": "type", "required": false, "type": { "name": "string" } }, "placeholder": { "defaultValue": { value: "" }, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "prefix": { "defaultValue": null, "description": "", "name": "prefix", "required": false, "type": { "name": "ReactNode" } }, "suffix": { "defaultValue": null, "description": "", "name": "suffix", "required": false, "type": { "name": "ReactNode" } }, "disabled": { "defaultValue": { value: "false" }, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
const Input_stories = {
  title: "Components/Input",
  component: HCInput$1,
  decorators: [AntdDecorator],
  parameters: {
    docs: {
      source: {
        type: "dynamic",
        excludeDecorators: true
      }
    }
  },
  argTypes: {
    label: {
      control: "text",
      description: "A caption for input field.",
      table: {
        type: {
          summary: "string"
        }
      }
    },
    placeholder: {
      control: "text",
      description: "A short hint that describes the expected value of an input field.",
      table: {
        type: {
          summary: "string"
        }
      }
    },
    prefix: {
      control: "text",
      description: "The prefix icon or text for the input field.",
      table: {
        type: {
          summary: "ReactNode | string"
        }
      }
    },
    suffix: {
      control: "text",
      description: "The suffix icon or text for the input field.",
      table: {
        type: {
          summary: "ReactNode | string"
        }
      }
    },
    type: {
      control: "text",
      description: "The type of input field. See MDN for more.",
      table: {
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "text"
        }
      }
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: false
        }
      }
    }
  }
};
const Basic = {
  args: {
    label: "caption",
    disabled: false
  }
};
Basic.parameters = {
  ...Basic.parameters,
  storySource: {
    source: "{\n  args: {\n    label: 'caption',\n    disabled: false\n  }\n}",
    ...(_a = Basic.parameters) == null ? void 0 : _a.storySource
  }
};
const __namedExportsOrder = ["Basic"];
export {
  Basic,
  __namedExportsOrder,
  Input_stories as default
};
//# sourceMappingURL=Input.stories.d4add890.js.map
