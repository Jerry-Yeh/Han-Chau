import { _ as __vitePreload } from "./iframe.bff41132.js";
import { a as React, r as react, R as React$1 } from "./index.2e2f892a.js";
import { R as ReactDOM } from "./index.36b4d5ff.js";
import { s as scope } from "./index.e850844b.js";
import { q as eq_1, m as isObject_1, r as _arrayMap, s as _Set, t as _setToArray, u as _SetCache, v as _cacheHas, w as _root, x as _Uint8Array, y as _Symbol, l as _getTag, i as isObjectLike_1, z as _nodeUtil, A as _baseUnary, h as _Stack, e as isBuffer$1, a as isArray_1 } from "./_getTag.d1b75f35.js";
import { j as _baseIsEqual, k as _baseAssignValue, l as _castPath, m as _isIndex, n as _toKey, o as _baseGet, p as _arrayPush, _ as _getPrototype, q as _getSymbols, s as stubArray_1, r as _isPrototype, t as _arrayLikeKeys, v as isArrayLike_1, w as _baseGetAllKeys, x as _baseIteratee, y as keys_1, z as _getAllKeys, S as SNIPPET_RENDERED, A as mapValues_1, B as str, b as SourceType } from "./index.1fb95844.js";
import { _ as _setPrototypeOf$2, a as _isNativeReflectConstruct$2, b as _getPrototypeOf$2, c as _assertThisInitialized$2, d as _extends$2 } from "./isNativeReflectConstruct.fd0a40b8.js";
var getControlId = (value2) => `control-${value2.replace(/\s+/g, "-")}`, getControlSetterButtonId = (value2) => `set-${value2.replace(/\s+/g, "-")}`;
var __create$1 = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __getProtoOf$1 = Object.getPrototypeOf, __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __commonJS$1 = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames$1(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps$1 = (to, from2, except, desc) => {
  if (from2 && typeof from2 == "object" || typeof from2 == "function")
    for (let key of __getOwnPropNames$1(from2))
      !__hasOwnProp$1.call(to, key) && key !== except && __defProp$1(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc$1(from2, key)) || desc.enumerable });
  return to;
};
var __toESM$1 = (mod, isNodeMode, target) => (target = mod != null ? __create$1(__getProtoOf$1(mod)) : {}, __copyProps$1(isNodeMode || !mod || !mod.__esModule ? __defProp$1(target, "default", { value: mod, enumerable: true }) : target, mod));
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends$1.apply(this, arguments);
}
function _assertThisInitialized$1(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _setPrototypeOf$1(o2, p2) {
  return _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o22, p22) {
    return o22.__proto__ = p22, o22;
  }, _setPrototypeOf$1(o2, p2);
}
function _inheritsLoose$2(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype), subClass.prototype.constructor = subClass, _setPrototypeOf$1(subClass, superClass);
}
function _getPrototypeOf$1(o2) {
  return _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o22) {
    return o22.__proto__ || Object.getPrototypeOf(o22);
  }, _getPrototypeOf$1(o2);
}
function _isNativeFunction$2(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function _construct$2(Parent, args, Class) {
  return _isNativeReflectConstruct$1() ? _construct$2 = Reflect.construct.bind() : _construct$2 = function(Parent2, args2, Class2) {
    var a2 = [null];
    a2.push.apply(a2, args2);
    var Constructor = Function.bind.apply(Parent2, a2), instance = new Constructor();
    return Class2 && _setPrototypeOf$1(instance, Class2.prototype), instance;
  }, _construct$2.apply(null, arguments);
}
function _wrapNativeSuper$2(Class) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper$2 = function(Class2) {
    if (Class2 === null || !_isNativeFunction$2(Class2))
      return Class2;
    if (typeof Class2 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache < "u") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper7);
    }
    function Wrapper7() {
      return _construct$2(Class2, arguments, _getPrototypeOf$1(this).constructor);
    }
    return Wrapper7.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper7, enumerable: false, writable: true, configurable: true } }), _setPrototypeOf$1(Wrapper7, Class2);
  }, _wrapNativeSuper$2(Class);
}
var ERRORS = { 1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`, 2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`, 3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`, 4: `Couldn't generate valid rgb string from %s, it returned %s.

`, 5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`, 6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`, 7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`, 8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`, 9: `Please provide a number of steps to the modularScale helper.

`, 10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`, 12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`, 13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`, 14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`, 15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`, 16: `You must provide a template to this method.

`, 17: `You passed an unsupported selector state to this method.

`, 18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 19: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 23: `fontFace expects a name of a font-family.

`, 24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 25: `fontFace expects localFonts to be an array.

`, 26: `fontFace expects fileFormats to be an array.

`, 27: `radialGradient requries at least 2 color-stops to properly render.

`, 28: `Please supply a filename to retinaImage() as the first argument.

`, 29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`, 32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`, 33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`, 34: `borderRadius expects a radius value as a string or number as the second argument.

`, 35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 36: `Property must be a string value.

`, 37: `Syntax Error at %s.

`, 38: `Formula contains a function that needs parentheses at %s.

`, 39: `Formula is missing closing parenthesis at %s.

`, 40: `Formula has too many closing parentheses at %s.

`, 41: `All values in a formula must have the same unit or be unitless.

`, 42: `Please provide a number of steps to the modularScale helper.

`, 43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`, 45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`, 46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`, 47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 48: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`, 51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`, 52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 53: `fontFace expects localFonts to be an array.

`, 54: `fontFace expects fileFormats to be an array.

`, 55: `fontFace expects a name of a font-family.

`, 56: `linearGradient requries at least 2 color-stops to properly render.

`, 57: `radialGradient requries at least 2 color-stops to properly render.

`, 58: `Please supply a filename to retinaImage() as the first argument.

`, 59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 61: `Property must be a string value.

`, 62: `borderRadius expects a radius value as a string or number as the second argument.

`, 63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`, 65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`, 66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`, 67: `You must provide a template to this method.

`, 68: `You passed an unsupported selector state to this method.

`, 69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`, 70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`, 71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`, 72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`, 73: `Please provide a valid CSS variable.

`, 74: `CSS variable not found and no default was provided.

`, 75: `important requires a valid style object, got a %s instead.

`, 76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`, 77: `remToPx expects a value in "rem" but you provided it in "%s".

`, 78: `base must be set in "px" or "%" but you set it in "%s".
` };
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
    args[_key] = arguments[_key];
  var a2 = args[0], b2 = [], c2;
  for (c2 = 1; c2 < args.length; c2 += 1)
    b2.push(args[c2]);
  return b2.forEach(function(d2) {
    a2 = a2.replace(/%[a-z]/, d2);
  }), a2;
}
var PolishedError$2 = function(_Error) {
  _inheritsLoose$2(PolishedError2, _Error);
  function PolishedError2(code) {
    for (var _this, _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
      args[_key2 - 1] = arguments[_key2];
    return _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this, _assertThisInitialized$1(_this);
  }
  return PolishedError2;
}(_wrapNativeSuper$2(Error));
function colorToInt$2(color2) {
  return Math.round(color2 * 255);
}
function convertToInt$2(red, green, blue) {
  return colorToInt$2(red) + "," + colorToInt$2(green) + "," + colorToInt$2(blue);
}
function hslToRgb$2(hue, saturation, lightness, convert2) {
  if (convert2 === void 0 && (convert2 = convertToInt$2), saturation === 0)
    return convert2(lightness, lightness, lightness);
  var huePrime = (hue % 360 + 360) % 360 / 60, chroma = (1 - Math.abs(2 * lightness - 1)) * saturation, secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1)), red = 0, green = 0, blue = 0;
  huePrime >= 0 && huePrime < 1 ? (red = chroma, green = secondComponent) : huePrime >= 1 && huePrime < 2 ? (red = secondComponent, green = chroma) : huePrime >= 2 && huePrime < 3 ? (green = chroma, blue = secondComponent) : huePrime >= 3 && huePrime < 4 ? (green = secondComponent, blue = chroma) : huePrime >= 4 && huePrime < 5 ? (red = secondComponent, blue = chroma) : huePrime >= 5 && huePrime < 6 && (red = chroma, blue = secondComponent);
  var lightnessModification = lightness - chroma / 2, finalRed = red + lightnessModification, finalGreen = green + lightnessModification, finalBlue = blue + lightnessModification;
  return convert2(finalRed, finalGreen, finalBlue);
}
var namedColorMap$2 = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function nameToHex$2(color2) {
  if (typeof color2 != "string")
    return color2;
  var normalizedColorName = color2.toLowerCase();
  return namedColorMap$2[normalizedColorName] ? "#" + namedColorMap$2[normalizedColorName] : color2;
}
var hexRegex$2 = /^#[a-fA-F0-9]{6}$/, hexRgbaRegex$2 = /^#[a-fA-F0-9]{8}$/, reducedHexRegex$2 = /^#[a-fA-F0-9]{3}$/, reducedRgbaHexRegex$2 = /^#[a-fA-F0-9]{4}$/, rgbRegex$2 = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, rgbaRegex$2 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, hslRegex$2 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, hslaRegex$2 = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb$2(color2) {
  if (typeof color2 != "string")
    throw new PolishedError$2(3);
  var normalizedColor = nameToHex$2(color2);
  if (normalizedColor.match(hexRegex$2))
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16) };
  if (normalizedColor.match(hexRgbaRegex$2)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16), alpha };
  }
  if (normalizedColor.match(reducedHexRegex$2))
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16) };
  if (normalizedColor.match(reducedRgbaHexRegex$2)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16), alpha: _alpha };
  }
  var rgbMatched = rgbRegex$2.exec(normalizedColor);
  if (rgbMatched)
    return { red: parseInt("" + rgbMatched[1], 10), green: parseInt("" + rgbMatched[2], 10), blue: parseInt("" + rgbMatched[3], 10) };
  var rgbaMatched = rgbaRegex$2.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched)
    return { red: parseInt("" + rgbaMatched[1], 10), green: parseInt("" + rgbaMatched[2], 10), blue: parseInt("" + rgbaMatched[3], 10), alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4]) };
  var hslMatched = hslRegex$2.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10), saturation = parseInt("" + hslMatched[2], 10) / 100, lightness = parseInt("" + hslMatched[3], 10) / 100, rgbColorString = "rgb(" + hslToRgb$2(hue, saturation, lightness) + ")", hslRgbMatched = rgbRegex$2.exec(rgbColorString);
    if (!hslRgbMatched)
      throw new PolishedError$2(4, normalizedColor, rgbColorString);
    return { red: parseInt("" + hslRgbMatched[1], 10), green: parseInt("" + hslRgbMatched[2], 10), blue: parseInt("" + hslRgbMatched[3], 10) };
  }
  var hslaMatched = hslaRegex$2.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10), _saturation = parseInt("" + hslaMatched[2], 10) / 100, _lightness = parseInt("" + hslaMatched[3], 10) / 100, _rgbColorString = "rgb(" + hslToRgb$2(_hue, _saturation, _lightness) + ")", _hslRgbMatched = rgbRegex$2.exec(_rgbColorString);
    if (!_hslRgbMatched)
      throw new PolishedError$2(4, normalizedColor, _rgbColorString);
    return { red: parseInt("" + _hslRgbMatched[1], 10), green: parseInt("" + _hslRgbMatched[2], 10), blue: parseInt("" + _hslRgbMatched[3], 10), alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4]) };
  }
  throw new PolishedError$2(5);
}
function rgbToHsl$2(color2) {
  var red = color2.red / 255, green = color2.green / 255, blue = color2.blue / 255, max2 = Math.max(red, green, blue), min2 = Math.min(red, green, blue), lightness = (max2 + min2) / 2;
  if (max2 === min2)
    return color2.alpha !== void 0 ? { hue: 0, saturation: 0, lightness, alpha: color2.alpha } : { hue: 0, saturation: 0, lightness };
  var hue, delta = max2 - min2, saturation = lightness > 0.5 ? delta / (2 - max2 - min2) : delta / (max2 + min2);
  switch (max2) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  return hue *= 60, color2.alpha !== void 0 ? { hue, saturation, lightness, alpha: color2.alpha } : { hue, saturation, lightness };
}
function parseToHsl$2(color2) {
  return rgbToHsl$2(parseToRgb$2(color2));
}
var reduceHexValue$3 = function(value2) {
  return value2.length === 7 && value2[1] === value2[2] && value2[3] === value2[4] && value2[5] === value2[6] ? "#" + value2[1] + value2[3] + value2[5] : value2;
}, reduceHexValue$1$2 = reduceHexValue$3;
function numberToHex$2(value2) {
  var hex = value2.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex$2(color2) {
  return numberToHex$2(Math.round(color2 * 255));
}
function convertToHex$2(red, green, blue) {
  return reduceHexValue$1$2("#" + colorToHex$2(red) + colorToHex$2(green) + colorToHex$2(blue));
}
function hslToHex$2(hue, saturation, lightness) {
  return hslToRgb$2(hue, saturation, lightness, convertToHex$2);
}
function hsl$2(value2, saturation, lightness) {
  if (typeof value2 == "number" && typeof saturation == "number" && typeof lightness == "number")
    return hslToHex$2(value2, saturation, lightness);
  if (typeof value2 == "object" && saturation === void 0 && lightness === void 0)
    return hslToHex$2(value2.hue, value2.saturation, value2.lightness);
  throw new PolishedError$2(1);
}
function hsla$2(value2, saturation, lightness, alpha) {
  if (typeof value2 == "number" && typeof saturation == "number" && typeof lightness == "number" && typeof alpha == "number")
    return alpha >= 1 ? hslToHex$2(value2, saturation, lightness) : "rgba(" + hslToRgb$2(value2, saturation, lightness) + "," + alpha + ")";
  if (typeof value2 == "object" && saturation === void 0 && lightness === void 0 && alpha === void 0)
    return value2.alpha >= 1 ? hslToHex$2(value2.hue, value2.saturation, value2.lightness) : "rgba(" + hslToRgb$2(value2.hue, value2.saturation, value2.lightness) + "," + value2.alpha + ")";
  throw new PolishedError$2(2);
}
function rgb$2(value2, green, blue) {
  if (typeof value2 == "number" && typeof green == "number" && typeof blue == "number")
    return reduceHexValue$1$2("#" + numberToHex$2(value2) + numberToHex$2(green) + numberToHex$2(blue));
  if (typeof value2 == "object" && green === void 0 && blue === void 0)
    return reduceHexValue$1$2("#" + numberToHex$2(value2.red) + numberToHex$2(value2.green) + numberToHex$2(value2.blue));
  throw new PolishedError$2(6);
}
function rgba$2(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue == "string" && typeof secondValue == "number") {
    var rgbValue = parseToRgb$2(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else {
    if (typeof firstValue == "number" && typeof secondValue == "number" && typeof thirdValue == "number" && typeof fourthValue == "number")
      return fourthValue >= 1 ? rgb$2(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
    if (typeof firstValue == "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0)
      return firstValue.alpha >= 1 ? rgb$2(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError$2(7);
}
var isRgb$2 = function(color2) {
  return typeof color2.red == "number" && typeof color2.green == "number" && typeof color2.blue == "number" && (typeof color2.alpha != "number" || typeof color2.alpha > "u");
}, isRgba$2 = function(color2) {
  return typeof color2.red == "number" && typeof color2.green == "number" && typeof color2.blue == "number" && typeof color2.alpha == "number";
}, isHsl$2 = function(color2) {
  return typeof color2.hue == "number" && typeof color2.saturation == "number" && typeof color2.lightness == "number" && (typeof color2.alpha != "number" || typeof color2.alpha > "u");
}, isHsla$2 = function(color2) {
  return typeof color2.hue == "number" && typeof color2.saturation == "number" && typeof color2.lightness == "number" && typeof color2.alpha == "number";
};
function toColorString$2(color2) {
  if (typeof color2 != "object")
    throw new PolishedError$2(8);
  if (isRgba$2(color2))
    return rgba$2(color2);
  if (isRgb$2(color2))
    return rgb$2(color2);
  if (isHsla$2(color2))
    return hsla$2(color2);
  if (isHsl$2(color2))
    return hsl$2(color2);
  throw new PolishedError$2(8);
}
function curried$2(f2, length2, acc) {
  return function() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length2 ? f2.apply(this, combined) : curried$2(f2, length2, combined);
  };
}
function curry$2(f2) {
  return curried$2(f2, f2.length, []);
}
function guard$2(lowerBoundary, upperBoundary, value2) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value2));
}
function darken$2(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var hslColor = parseToHsl$2(color2);
  return toColorString$2(_extends$1({}, hslColor, { lightness: guard$2(0, 1, hslColor.lightness - parseFloat(amount)) }));
}
var curriedDarken$3 = curry$2(darken$2), curriedDarken$1$2 = curriedDarken$3;
function lighten$2(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var hslColor = parseToHsl$2(color2);
  return toColorString$2(_extends$1({}, hslColor, { lightness: guard$2(0, 1, hslColor.lightness + parseFloat(amount)) }));
}
var curriedLighten$3 = curry$2(lighten$2), curriedLighten$1$2 = curriedLighten$3;
function opacify$1(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var parsedColor = parseToRgb$2(color2), alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1, colorWithAlpha = _extends$1({}, parsedColor, { alpha: guard$2(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100) });
  return rgba$2(colorWithAlpha);
}
var curriedOpacify$2 = curry$2(opacify$1), curriedOpacify$1$1 = curriedOpacify$2;
function transparentize$2(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var parsedColor = parseToRgb$2(color2), alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1, colorWithAlpha = _extends$1({}, parsedColor, { alpha: guard$2(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100) });
  return rgba$2(colorWithAlpha);
}
var curriedTransparentize$3 = curry$2(transparentize$2), curriedTransparentize$1$2 = curriedTransparentize$3;
var color = { primary: "#FF4785", secondary: "#029CFD", tertiary: "#FAFBFC", ancillary: "#22a699", orange: "#FC521F", gold: "#FFAE00", green: "#66BF3C", seafoam: "#37D5D3", purple: "#6F2CAC", ultraviolet: "#2A0481", lightest: "#FFFFFF", lighter: "#F7FAFC", light: "#EEF3F6", mediumlight: "#ECF4F9", medium: "#D9E8F2", mediumdark: "#73828C", dark: "#5C6870", darker: "#454E54", darkest: "#2E3438", border: "hsla(203, 50%, 30%, 0.2)", positive: "#66BF3C", negative: "#FF4400", warning: "#E69D00", critical: "#FFFFFF", defaultText: "#2E3438", inverseText: "#FFFFFF", positiveText: "#448028", negativeText: "#D43900", warningText: "#A15C20" }, background = { app: "#F5FBFF", bar: color.lightest, content: color.lightest, gridCellSize: 10, hoverable: curriedTransparentize$1$2(0.93, color.secondary), positive: "#E1FFD4", negative: "#FEDED2", warning: "#FFF5CF", critical: "#FF4400" }, typography = { fonts: { base: ['"Nunito Sans"', "-apple-system", '".SFNSText-Regular"', '"San Francisco"', "BlinkMacSystemFont", '"Segoe UI"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"].join(", "), mono: ["ui-monospace", "Menlo", "Monaco", '"Roboto Mono"', '"Oxygen Mono"', '"Ubuntu Monospace"', '"Source Code Pro"', '"Droid Sans Mono"', '"Courier New"', "monospace"].join(", ") }, weight: { regular: 400, bold: 700, black: 900 }, size: { s1: 12, s2: 14, s3: 16, m1: 20, m2: 24, m3: 28, l1: 32, l2: 40, l3: 48, code: 90 } };
var theme = { base: "light", colorPrimary: "#FF4785", colorSecondary: "#029CFD", appBg: background.app, appContentBg: color.lightest, appBorderColor: color.border, appBorderRadius: 4, fontBase: typography.fonts.base, fontCode: typography.fonts.mono, textColor: color.darkest, textInverseColor: color.lightest, textMutedColor: color.mediumdark, barTextColor: color.mediumdark, barSelectedColor: color.secondary, barBg: color.lightest, buttonBg: background.app, buttonBorder: color.medium, booleanBg: color.mediumlight, booleanSelectedBg: color.lightest, inputBg: color.lightest, inputBorder: color.border, inputTextColor: color.darkest, inputBorderRadius: 4 }, light_default = theme;
var theme2 = { base: "dark", colorPrimary: "#FF4785", colorSecondary: "#029CFD", appBg: "#222425", appContentBg: "#1B1C1D", appBorderColor: "rgba(255,255,255,.1)", appBorderRadius: 4, fontBase: typography.fonts.base, fontCode: typography.fonts.mono, textColor: "#C9CDCF", textInverseColor: "#222425", textMutedColor: "#798186", barTextColor: "#798186", barSelectedColor: color.secondary, barBg: "#292C2E", buttonBg: "#222425", buttonBorder: "rgba(255,255,255,.1)", booleanBg: "#222425", booleanSelectedBg: "#2E3438", inputBg: "#1B1C1D", inputBorder: "rgba(255,255,255,.1)", inputTextColor: color.lightest, inputBorderRadius: 4 }, dark_default = theme2;
const logger$3 = __STORYBOOK_MODULE_CLIENT_LOGGER__.logger;
var { window: globalWindow$2 } = scope, mkColor = (color2) => ({ color: color2 }), isColorString = (color2) => typeof color2 != "string" ? (logger$3.warn(`Color passed to theme object should be a string. Instead ${color2}(${typeof color2}) was passed.`), false) : true, isValidColorForPolished = (color2) => !/(gradient|var|calc)/.test(color2), applyPolished = (type, color2) => type === "darken" ? rgba$2(`${curriedDarken$1$2(1, color2)}`, 0.95) : type === "lighten" ? rgba$2(`${curriedLighten$1$2(1, color2)}`, 0.95) : color2, colorFactory = (type) => (color2) => {
  if (!isColorString(color2) || !isValidColorForPolished(color2))
    return color2;
  try {
    return applyPolished(type, color2);
  } catch {
    return color2;
  }
}, lightenColor = colorFactory("lighten"), getPreferredColorScheme = () => !globalWindow$2 || !globalWindow$2.matchMedia ? "light" : globalWindow$2.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
var themes = { light: light_default, dark: dark_default, normal: light_default };
getPreferredColorScheme();
var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect = React["useInsertionEffect"] ? React["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || react.exports.useLayoutEffect;
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var memoizerific = { exports: {} };
(function(module, exports) {
  (function(f2) {
    {
      module.exports = f2();
    }
  })(function() {
    return function e2(t, n2, r2) {
      function s2(o3, u2) {
        if (!n2[o3]) {
          if (!t[o3]) {
            var a2 = typeof commonjsRequire == "function" && commonjsRequire;
            if (!u2 && a2)
              return a2(o3, true);
            if (i2)
              return i2(o3, true);
            var f2 = new Error("Cannot find module '" + o3 + "'");
            throw f2.code = "MODULE_NOT_FOUND", f2;
          }
          var l2 = n2[o3] = { exports: {} };
          t[o3][0].call(l2.exports, function(e3) {
            var n3 = t[o3][1][e3];
            return s2(n3 ? n3 : e3);
          }, l2, l2.exports, e2, t, n2, r2);
        }
        return n2[o3].exports;
      }
      var i2 = typeof commonjsRequire == "function" && commonjsRequire;
      for (var o2 = 0; o2 < r2.length; o2++)
        s2(r2[o2]);
      return s2;
    }({ 1: [function(_dereq_, module2, exports2) {
      module2.exports = function(forceSimilar) {
        if (typeof Map !== "function" || forceSimilar) {
          var Similar = _dereq_("./similar");
          return new Similar();
        } else {
          return /* @__PURE__ */ new Map();
        }
      };
    }, { "./similar": 2 }], 2: [function(_dereq_, module2, exports2) {
      function Similar() {
        this.list = [];
        this.lastItem = void 0;
        this.size = 0;
        return this;
      }
      Similar.prototype.get = function(key) {
        var index3;
        if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
          return this.lastItem.val;
        }
        index3 = this.indexOf(key);
        if (index3 >= 0) {
          this.lastItem = this.list[index3];
          return this.list[index3].val;
        }
        return void 0;
      };
      Similar.prototype.set = function(key, val) {
        var index3;
        if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
          this.lastItem.val = val;
          return this;
        }
        index3 = this.indexOf(key);
        if (index3 >= 0) {
          this.lastItem = this.list[index3];
          this.list[index3].val = val;
          return this;
        }
        this.lastItem = { key, val };
        this.list.push(this.lastItem);
        this.size++;
        return this;
      };
      Similar.prototype.delete = function(key) {
        var index3;
        if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
          this.lastItem = void 0;
        }
        index3 = this.indexOf(key);
        if (index3 >= 0) {
          this.size--;
          return this.list.splice(index3, 1)[0];
        }
        return void 0;
      };
      Similar.prototype.has = function(key) {
        var index3;
        if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
          return true;
        }
        index3 = this.indexOf(key);
        if (index3 >= 0) {
          this.lastItem = this.list[index3];
          return true;
        }
        return false;
      };
      Similar.prototype.forEach = function(callback, thisArg) {
        var i2;
        for (i2 = 0; i2 < this.size; i2++) {
          callback.call(thisArg || this, this.list[i2].val, this.list[i2].key, this);
        }
      };
      Similar.prototype.indexOf = function(key) {
        var i2;
        for (i2 = 0; i2 < this.size; i2++) {
          if (this.isEqual(this.list[i2].key, key)) {
            return i2;
          }
        }
        return -1;
      };
      Similar.prototype.isEqual = function(val1, val2) {
        return val1 === val2 || val1 !== val1 && val2 !== val2;
      };
      module2.exports = Similar;
    }, {}], 3: [function(_dereq_, module2, exports2) {
      var MapOrSimilar = _dereq_("map-or-similar");
      module2.exports = function(limit) {
        var cache = new MapOrSimilar(void 0 === "true"), lru = [];
        return function(fn) {
          var memoizerific2 = function() {
            var currentCache = cache, newMap, fnResult, argsLengthMinusOne = arguments.length - 1, lruPath = Array(argsLengthMinusOne + 1), isMemoized = true, i2;
            if ((memoizerific2.numArgs || memoizerific2.numArgs === 0) && memoizerific2.numArgs !== argsLengthMinusOne + 1) {
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            }
            for (i2 = 0; i2 < argsLengthMinusOne; i2++) {
              lruPath[i2] = {
                cacheItem: currentCache,
                arg: arguments[i2]
              };
              if (currentCache.has(arguments[i2])) {
                currentCache = currentCache.get(arguments[i2]);
                continue;
              }
              isMemoized = false;
              newMap = new MapOrSimilar(void 0 === "true");
              currentCache.set(arguments[i2], newMap);
              currentCache = newMap;
            }
            if (isMemoized) {
              if (currentCache.has(arguments[argsLengthMinusOne])) {
                fnResult = currentCache.get(arguments[argsLengthMinusOne]);
              } else {
                isMemoized = false;
              }
            }
            if (!isMemoized) {
              fnResult = fn.apply(null, arguments);
              currentCache.set(arguments[argsLengthMinusOne], fnResult);
            }
            if (limit > 0) {
              lruPath[argsLengthMinusOne] = {
                cacheItem: currentCache,
                arg: arguments[argsLengthMinusOne]
              };
              if (isMemoized) {
                moveToMostRecentLru(lru, lruPath);
              } else {
                lru.push(lruPath);
              }
              if (lru.length > limit) {
                removeCachedResult(lru.shift());
              }
            }
            memoizerific2.wasMemoized = isMemoized;
            memoizerific2.numArgs = argsLengthMinusOne + 1;
            return fnResult;
          };
          memoizerific2.limit = limit;
          memoizerific2.wasMemoized = false;
          memoizerific2.cache = cache;
          memoizerific2.lru = lru;
          return memoizerific2;
        };
      };
      function moveToMostRecentLru(lru, lruPath) {
        var lruLen = lru.length, lruPathLen = lruPath.length, isMatch, i2, ii;
        for (i2 = 0; i2 < lruLen; i2++) {
          isMatch = true;
          for (ii = 0; ii < lruPathLen; ii++) {
            if (!isEqual2(lru[i2][ii].arg, lruPath[ii].arg)) {
              isMatch = false;
              break;
            }
          }
          if (isMatch) {
            break;
          }
        }
        lru.push(lru.splice(i2, 1)[0]);
      }
      function removeCachedResult(removedLru) {
        var removedLruLen = removedLru.length, currentLru = removedLru[removedLruLen - 1], tmp, i2;
        currentLru.cacheItem.delete(currentLru.arg);
        for (i2 = removedLruLen - 2; i2 >= 0; i2--) {
          currentLru = removedLru[i2];
          tmp = currentLru.cacheItem.get(currentLru.arg);
          if (!tmp || !tmp.size) {
            currentLru.cacheItem.delete(currentLru.arg);
          } else {
            break;
          }
        }
      }
      function isEqual2(val1, val2) {
        return val1 === val2 || val1 !== val1 && val2 !== val2;
      }
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
})(memoizerific);
const memoize$1 = memoizerific.exports;
var require_react_is_development = __commonJS$1({ "../../node_modules/react-is/cjs/react-is.development.js"(exports) {
  (function() {
    var hasSymbol = typeof Symbol == "function" && Symbol.for, REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103, REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106, REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107, REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108, REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114, REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109, REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110, REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111, REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111, REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112, REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113, REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120, REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115, REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116, REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121, REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117, REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118, REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
    function isValidElementType(type) {
      return typeof type == "string" || typeof type == "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type == "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }
    function typeOf(object2) {
      if (typeof object2 == "object" && object2 !== null) {
        var $$typeof = object2.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object2.type;
            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;
              default:
                var $$typeofType = type && type.$$typeof;
                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
    }
    var AsyncMode = REACT_ASYNC_MODE_TYPE, ConcurrentMode = REACT_CONCURRENT_MODE_TYPE, ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element2 = REACT_ELEMENT_TYPE, ForwardRef = REACT_FORWARD_REF_TYPE, Fragment4 = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo = REACT_MEMO_TYPE, Portal = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = false;
    function isAsyncMode(object2) {
      return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = true, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), isConcurrentMode(object2) || typeOf(object2) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object2) {
      return typeOf(object2) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object2) {
      return typeOf(object2) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object2) {
      return typeOf(object2) === REACT_PROVIDER_TYPE;
    }
    function isElement2(object2) {
      return typeof object2 == "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object2) {
      return typeOf(object2) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object2) {
      return typeOf(object2) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object2) {
      return typeOf(object2) === REACT_LAZY_TYPE;
    }
    function isMemo(object2) {
      return typeOf(object2) === REACT_MEMO_TYPE;
    }
    function isPortal(object2) {
      return typeOf(object2) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object2) {
      return typeOf(object2) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object2) {
      return typeOf(object2) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object2) {
      return typeOf(object2) === REACT_SUSPENSE_TYPE;
    }
    exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, exports.ContextConsumer = ContextConsumer, exports.ContextProvider = ContextProvider, exports.Element = Element2, exports.ForwardRef = ForwardRef, exports.Fragment = Fragment4, exports.Lazy = Lazy, exports.Memo = Memo, exports.Portal = Portal, exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, exports.isElement = isElement2, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense, exports.isValidElementType = isValidElementType, exports.typeOf = typeOf;
  })();
} });
var require_react_is = __commonJS$1({ "../../node_modules/react-is/index.js"(exports, module) {
  module.exports = require_react_is_development();
} });
var require_hoist_non_react_statics_cjs = __commonJS$1({ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
  var reactIs = require_react_is(), REACT_STATICS = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, KNOWN_STATICS = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, FORWARD_REF_STATICS = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, MEMO_STATICS = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
  function getStatics(component) {
    return reactIs.isMemo(component) ? MEMO_STATICS : TYPE_STATICS[component.$$typeof] || REACT_STATICS;
  }
  var defineProperty = Object.defineProperty, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getPrototypeOf = Object.getPrototypeOf, objectPrototype = Object.prototype;
  function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent != "string") {
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent);
        inheritedComponent && inheritedComponent !== objectPrototype && hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist);
      }
      var keys2 = getOwnPropertyNames(sourceComponent);
      getOwnPropertySymbols && (keys2 = keys2.concat(getOwnPropertySymbols(sourceComponent)));
      for (var targetStatics = getStatics(targetComponent), sourceStatics = getStatics(sourceComponent), i2 = 0; i2 < keys2.length; ++i2) {
        var key = keys2[i2];
        if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
          try {
            defineProperty(targetComponent, key, descriptor);
          } catch {
          }
        }
      }
    }
    return targetComponent;
  }
  module.exports = hoistNonReactStatics2;
} });
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    return cache[arg] === void 0 && (cache[arg] = fn(arg)), cache[arg];
  };
}
var emotion_memoize_esm_default = memoize;
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, isPropValid = emotion_memoize_esm_default(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
}), emotion_is_prop_valid_esm_default = isPropValid;
function sheetForTag(tag) {
  if (tag.sheet)
    return tag.sheet;
  for (var i2 = 0; i2 < document.styleSheets.length; i2++)
    if (document.styleSheets[i2].ownerNode === tag)
      return document.styleSheets[i2];
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  return tag.setAttribute("data-emotion", options.key), options.nonce !== void 0 && tag.setAttribute("nonce", options.nonce), tag.appendChild(document.createTextNode("")), tag.setAttribute("data-s", ""), tag;
}
var StyleSheet = function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      _this.tags.length === 0 ? _this.insertionPoint ? before = _this.insertionPoint.nextSibling : _this.prepend ? before = _this.container.firstChild : before = _this.before : before = _this.tags[_this.tags.length - 1].nextSibling, _this.container.insertBefore(tag, before), _this.tags.push(tag);
    }, this.isSpeedy = options.speedy === void 0 ? false : options.speedy, this.tags = [], this.ctr = 0, this.nonce = options.nonce, this.key = options.key, this.container = options.container, this.prepend = options.prepend, this.insertionPoint = options.insertionPoint, this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  return _proto.hydrate = function(nodes) {
    nodes.forEach(this._insertTag);
  }, _proto.insert = function(rule) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(createStyleElement(this));
    var tag = this.tags[this.tags.length - 1], isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
    if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3, this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
        /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule) || console.error('There was a problem inserting the following rule: "' + rule + '"', e2);
      }
    } else
      tag.appendChild(document.createTextNode(rule));
    this.ctr++;
  }, _proto.flush = function() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    }), this.tags = [], this.ctr = 0, this._alreadyInsertedOrderInsensitiveRule = false;
  }, StyleSheet2;
}();
var MS = "-ms-", MOZ = "-moz-", WEBKIT = "-webkit-", COMMENT = "comm", RULESET = "rule", DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var abs = Math.abs, from = String.fromCharCode, assign = Object.assign;
function hash$1(value2, length2) {
  return charat(value2, 0) ^ 45 ? (((length2 << 2 ^ charat(value2, 0)) << 2 ^ charat(value2, 1)) << 2 ^ charat(value2, 2)) << 2 ^ charat(value2, 3) : 0;
}
function trim(value2) {
  return value2.trim();
}
function match(value2, pattern) {
  return (value2 = pattern.exec(value2)) ? value2[0] : value2;
}
function replace(value2, pattern, replacement) {
  return value2.replace(pattern, replacement);
}
function indexof(value2, search) {
  return value2.indexOf(search);
}
function charat(value2, index3) {
  return value2.charCodeAt(index3) | 0;
}
function substr(value2, begin, end2) {
  return value2.slice(begin, end2);
}
function strlen(value2) {
  return value2.length;
}
function sizeof(value2) {
  return value2.length;
}
function append(value2, array2) {
  return array2.push(value2), value2;
}
function combine(array2, callback) {
  return array2.map(callback).join("");
}
var line = 1, column = 1, length = 0, position = 0, character = 0, characters = "";
function node(value2, root, parent, type, props, children, length2) {
  return { value: value2, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  return character = position > 0 ? charat(characters, --position) : 0, column--, character === 10 && (column = 1, line--), character;
}
function next() {
  return character = position < length ? charat(characters, position++) : 0, column++, character === 10 && (column = 1, line++), character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end2) {
  return substr(characters, begin, end2);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value2) {
  return line = column = 1, length = strlen(characters = value2), position = 0, [];
}
function dealloc(value2) {
  return characters = "", value2;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  for (; (character = peek()) && character < 33; )
    next();
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index3, count2) {
  for (; --count2 && next() && !(character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97); )
    ;
  return slice(index3, caret() + (count2 < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  for (; next(); )
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        type !== 34 && type !== 39 && delimiter(character);
        break;
      case 40:
        type === 41 && delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index3) {
  for (; next() && type + character !== 47 + 10; )
    if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index3, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index3) {
  for (; !token(peek()); )
    next();
  return slice(index3, position);
}
function compile(value2) {
  return dealloc(parse$1("", null, null, null, [""], value2 = alloc(value2), 0, [0], value2));
}
function parse$1(value2, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  for (var index3 = 0, offset2 = 0, length2 = pseudo, atrule = 0, property = 0, previous = 0, variable = 1, scanning = 1, ampersand = 1, character2 = 0, type = "", props = rules, children = rulesets, reference2 = rule, characters2 = type; scanning; )
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1 && (ampersand = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index3++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset2:
            property > 0 && strlen(characters2) - length2 && append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            if (append(reference2 = ruleset(characters2, root, parent, index3, offset2, rules, points, type, props = [], children = [], length2), rulesets), character2 === 123)
              if (offset2 === 0)
                parse$1(characters2, root, reference2, reference2, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse$1(value2, reference2, reference2, rule && append(ruleset(value2, reference2, reference2, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse$1(characters2, reference2, reference2, reference2, [""], children, 0, points, children);
                }
        }
        index3 = offset2 = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index3++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            peek() === 45 && (characters2 += delimit(next())), atrule = peek(), offset2 = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            previous === 45 && strlen(characters2) == 2 && (variable = 0);
        }
    }
  return rulesets;
}
function ruleset(value2, root, parent, index3, offset2, rules, points, type, props, children, length2) {
  for (var post = offset2 - 1, rule = offset2 === 0 ? rules : [""], size = sizeof(rule), i2 = 0, j2 = 0, k2 = 0; i2 < index3; ++i2)
    for (var x2 = 0, y2 = substr(value2, post + 1, post = abs(j2 = points[i2])), z2 = value2; x2 < size; ++x2)
      (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2]))) && (props[k2++] = z2);
  return node(value2, root, parent, offset2 === 0 ? RULESET : type, props, children, length2);
}
function comment(value2, root, parent) {
  return node(value2, root, parent, COMMENT, from(char()), substr(value2, 2, -2), 0);
}
function declaration(value2, root, parent, length2) {
  return node(value2, root, parent, DECLARATION, substr(value2, 0, length2), substr(value2, length2 + 1, -1), length2);
}
function serialize(children, callback) {
  for (var output = "", length2 = sizeof(children), i2 = 0; i2 < length2; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index3, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index3, children, callback) {
    for (var output = "", i2 = 0; i2 < length2; i2++)
      output += collection[i2](element, index3, children, callback) || "";
    return output;
  };
}
var weakMemoize = function(func) {
  var cache = /* @__PURE__ */ new WeakMap();
  return function(arg) {
    if (cache.has(arg))
      return cache.get(arg);
    var ret = func(arg);
    return cache.set(arg, ret), ret;
  };
}, emotion_weak_memoize_esm_default = weakMemoize;
var identifierWithPointTracking = function(begin, points, index3) {
  for (var previous = 0, character2 = 0; previous = character2, character2 = peek(), previous === 38 && character2 === 12 && (points[index3] = 1), !token(character2); )
    next();
  return slice(begin, position);
}, toRules = function(parsed, points) {
  var index3 = -1, character2 = 44;
  do
    switch (token(character2)) {
      case 0:
        character2 === 38 && peek() === 12 && (points[index3] = 1), parsed[index3] += identifierWithPointTracking(position - 1, points, index3);
        break;
      case 2:
        parsed[index3] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index3] = peek() === 58 ? "&\f" : "", points[index3] = parsed[index3].length;
          break;
        }
      default:
        parsed[index3] += from(character2);
    }
  while (character2 = next());
  return parsed;
}, getRules = function(value2, points) {
  return dealloc(toRules(alloc(value2), points));
}, fixedElements = /* @__PURE__ */ new WeakMap(), compat = function(element) {
  if (!(element.type !== "rule" || !element.parent || element.length < 1)) {
    for (var value2 = element.value, parent = element.parent, isImplicitRule = element.column === parent.column && element.line === parent.line; parent.type !== "rule"; )
      if (parent = parent.parent, !parent)
        return;
    if (!(element.props.length === 1 && value2.charCodeAt(0) !== 58 && !fixedElements.get(parent)) && !isImplicitRule) {
      fixedElements.set(element, true);
      for (var points = [], rules = getRules(value2, points), parentRules = parent.props, i2 = 0, k2 = 0; i2 < rules.length; i2++)
        for (var j2 = 0; j2 < parentRules.length; j2++, k2++)
          element.props[k2] = points[i2] ? rules[i2].replace(/&\f/g, parentRules[j2]) : parentRules[j2] + " " + rules[i2];
    }
  }
}, removeLabel = function(element) {
  if (element.type === "decl") {
    var value2 = element.value;
    value2.charCodeAt(0) === 108 && value2.charCodeAt(2) === 98 && (element.return = "", element.value = "");
  }
}, ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", isIgnoringComment = function(element) {
  return element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
}, createUnsafeSelectorsAlarm = function(cache) {
  return function(element, index3, children) {
    if (!(element.type !== "rule" || cache.compat)) {
      var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
      if (unsafePseudoClasses) {
        for (var isNested = element.parent === children[0], commentContainer = isNested ? children[0].children : children, i2 = commentContainer.length - 1; i2 >= 0; i2--) {
          var node2 = commentContainer[i2];
          if (node2.line < element.line)
            break;
          if (node2.column < element.column) {
            if (isIgnoringComment(node2))
              return;
            break;
          }
        }
        unsafePseudoClasses.forEach(function(unsafePseudoClass) {
          console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, isImportRule = function(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
}, isPrependedWithRegularRules = function(index3, children) {
  for (var i2 = index3 - 1; i2 >= 0; i2--)
    if (!isImportRule(children[i2]))
      return true;
  return false;
}, nullifyElement = function(element) {
  element.type = "", element.value = "", element.return = "", element.children = "", element.props = "";
}, incorrectImportAlarm = function(element, index3, children) {
  isImportRule(element) && (element.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), nullifyElement(element)) : isPrependedWithRegularRules(index3, children) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), nullifyElement(element)));
};
function prefix(value2, length2) {
  switch (hash$1(value2, length2)) {
    case 5103:
      return WEBKIT + "print-" + value2 + value2;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value2 + value2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value2 + MOZ + value2 + MS + value2 + value2;
    case 6828:
    case 4268:
      return WEBKIT + value2 + MS + value2 + value2;
    case 6165:
      return WEBKIT + value2 + MS + "flex-" + value2 + value2;
    case 5187:
      return WEBKIT + value2 + replace(value2, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value2;
    case 5443:
      return WEBKIT + value2 + MS + "flex-item-" + replace(value2, /flex-|-self/, "") + value2;
    case 4675:
      return WEBKIT + value2 + MS + "flex-line-pack" + replace(value2, /align-content|flex-|-self/, "") + value2;
    case 5548:
      return WEBKIT + value2 + MS + replace(value2, "shrink", "negative") + value2;
    case 5292:
      return WEBKIT + value2 + MS + replace(value2, "basis", "preferred-size") + value2;
    case 6060:
      return WEBKIT + "box-" + replace(value2, "-grow", "") + WEBKIT + value2 + MS + replace(value2, "grow", "positive") + value2;
    case 4554:
      return WEBKIT + replace(value2, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value2;
    case 6187:
      return replace(replace(replace(value2, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value2, "") + value2;
    case 5495:
    case 3959:
      return replace(value2, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value2, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value2 + value2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value2, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value2;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value2) - 1 - length2 > 6)
        switch (charat(value2, length2 + 1)) {
          case 109:
            if (charat(value2, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value2, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value2, length2 + 3) == 108 ? "$3" : "$2-$3")) + value2;
          case 115:
            return ~indexof(value2, "stretch") ? prefix(replace(value2, "stretch", "fill-available"), length2) + value2 : value2;
        }
      break;
    case 4949:
      if (charat(value2, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value2, strlen(value2) - 3 - (~indexof(value2, "!important") && 10))) {
        case 107:
          return replace(value2, ":", ":" + WEBKIT) + value2;
        case 101:
          return replace(value2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value2, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value2;
      }
      break;
    case 5936:
      switch (charat(value2, length2 + 11)) {
        case 114:
          return WEBKIT + value2 + MS + replace(value2, /[svh]\w+-[tblr]{2}/, "tb") + value2;
        case 108:
          return WEBKIT + value2 + MS + replace(value2, /[svh]\w+-[tblr]{2}/, "tb-rl") + value2;
        case 45:
          return WEBKIT + value2 + MS + replace(value2, /[svh]\w+-[tblr]{2}/, "lr") + value2;
      }
      return WEBKIT + value2 + MS + value2 + value2;
  }
  return value2;
}
var prefixer = function(element, index3, children, callback) {
  if (element.length > -1 && !element.return)
    switch (element.type) {
      case DECLARATION:
        element.return = prefix(element.value, element.length);
        break;
      case KEYFRAMES:
        return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
      case RULESET:
        if (element.length)
          return combine(element.props, function(value2) {
            switch (match(value2, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return serialize([copy(element, { props: [replace(value2, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
              case "::placeholder":
                return serialize([copy(element, { props: [replace(value2, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }), copy(element, { props: [replace(value2, /:(plac\w+)/, ":" + MOZ + "$1")] }), copy(element, { props: [replace(value2, /:(plac\w+)/, MS + "input-$1")] })], callback);
            }
            return "";
          });
    }
}, defaultStylisPlugins = [prefixer], createCache = function(options) {
  var key = options.key;
  if (!key)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      dataEmotionAttribute.indexOf(" ") !== -1 && (document.head.appendChild(node2), node2.setAttribute("data-s", ""));
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  if (/[^a-z-]/.test(key))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
  var inserted = {}, container, nodesToHydrate = [];
  container = options.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node2) {
    for (var attrib = node2.getAttribute("data-emotion").split(" "), i2 = 1; i2 < attrib.length; i2++)
      inserted[attrib[i2]] = true;
    nodesToHydrate.push(node2);
  });
  var _insert, omnipresentPlugins = [compat, removeLabel];
  omnipresentPlugins.push(createUnsafeSelectorsAlarm({ get compat() {
    return cache.compat;
  } }), incorrectImportAlarm);
  {
    var currentSheet, finalizingPlugins = [stringify, function(element) {
      element.root || (element.return ? currentSheet.insert(element.return) : element.value && element.type !== COMMENT && currentSheet.insert(element.value + "{}"));
    }], serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins)), stylis = function(styles2) {
      return serialize(compile(styles2), serializer);
    };
    _insert = function(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet, serialized.map !== void 0 && (currentSheet = { insert: function(rule) {
        sheet.insert(rule + serialized.map);
      } }), stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles), shouldCache && (cache.inserted[serialized.name] = true);
    };
  }
  var cache = { key, sheet: new StyleSheet({ key, container, nonce: options.nonce, speedy: options.speedy, prepend: options.prepend, insertionPoint: options.insertionPoint }), nonce: options.nonce, inserted, registered: {}, insert: _insert };
  return cache.sheet.hydrate(nodesToHydrate), cache;
}, emotion_cache_browser_esm_default = createCache;
__toESM$1(require_hoist_non_react_statics_cjs());
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  return classNames.split(" ").forEach(function(className) {
    registered[className] !== void 0 ? registeredStyles.push(registered[className] + ";") : rawClassName += className + " ";
  }), rawClassName;
}
var registerStyles = function(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  (isStringTag === false || isBrowser === false) && cache.registered[className] === void 0 && (cache.registered[className] = serialized.styles);
}, insertStyles = function(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str2) {
  for (var h2 = 0, k2, i2 = 0, len = str2.length; len >= 4; ++i2, len -= 4)
    k2 = str2.charCodeAt(i2) & 255 | (str2.charCodeAt(++i2) & 255) << 8 | (str2.charCodeAt(++i2) & 255) << 16 | (str2.charCodeAt(++i2) & 255) << 24, k2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16), k2 ^= k2 >>> 24, h2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  switch (len) {
    case 3:
      h2 ^= (str2.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h2 ^= (str2.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h2 ^= str2.charCodeAt(i2) & 255, h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  return h2 ^= h2 >>> 13, h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16), ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var emotion_hash_esm_default = murmur2;
var unitlessKeys = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, emotion_unitless_esm_default = unitlessKeys;
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", hyphenateRegex = /[A-Z]|^ms/g, animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g, isCustomProperty = function(property) {
  return property.charCodeAt(1) === 45;
}, isProcessableValue = function(value2) {
  return value2 != null && typeof value2 != "boolean";
}, processStyleName = emotion_memoize_esm_default(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
}), processStyleValue = function(key, value2) {
  switch (key) {
    case "animation":
    case "animationName":
      if (typeof value2 == "string")
        return value2.replace(animationRegex, function(match2, p1, p2) {
          return cursor = { name: p1, styles: p2, next: cursor }, p1;
        });
  }
  return emotion_unitless_esm_default[key] !== 1 && !isCustomProperty(key) && typeof value2 == "number" && value2 !== 0 ? value2 + "px" : value2;
};
contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, contentValues = ["normal", "none", "initial", "inherit", "unset"], oldProcessStyleValue = processStyleValue, msPattern = /^-ms-/, hyphenPattern = /-(.)/g, hyphenatedCache = {}, processStyleValue = function(key, value2) {
  if (key === "content" && (typeof value2 != "string" || contentValues.indexOf(value2) === -1 && !contentValuePattern.test(value2) && (value2.charAt(0) !== value2.charAt(value2.length - 1) || value2.charAt(0) !== '"' && value2.charAt(0) !== "'")))
    throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value2 + "\"'`");
  var processed = oldProcessStyleValue(key, value2);
  return processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0 && (hyphenatedCache[key] = true, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str2, _char) {
    return _char.toUpperCase();
  }) + "?")), processed;
};
var contentValuePattern, contentValues, oldProcessStyleValue, msPattern, hyphenPattern, hyphenatedCache, noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null)
    return "";
  if (interpolation.__emotion_styles !== void 0) {
    if (interpolation.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(noComponentSelectorMessage);
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean":
      return "";
    case "object": {
      if (interpolation.anim === 1)
        return cursor = { name: interpolation.name, styles: interpolation.styles, next: cursor }, interpolation.name;
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0)
          for (; next2 !== void 0; )
            cursor = { name: next2.name, styles: next2.styles, next: cursor }, next2 = next2.next;
        var styles2 = interpolation.styles + ";";
        return interpolation.map !== void 0 && (styles2 += interpolation.map), styles2;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor, result = interpolation(mergedProps);
        return cursor = previousCursor, handleInterpolation(mergedProps, registered, result);
      } else
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      var matched = [], replaced = interpolation.replace(animationRegex, function(match2, p1, p2) {
        var fakeVarName = "animation" + matched.length;
        return matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + fakeVarName + "}";
      });
      matched.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + replaced + "`"));
      break;
  }
  if (registered == null)
    return interpolation;
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj))
    for (var i2 = 0; i2 < obj.length; i2++)
      string += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
  else
    for (var _key in obj) {
      var value2 = obj[_key];
      if (typeof value2 != "object")
        registered != null && registered[value2] !== void 0 ? string += _key + "{" + registered[value2] + "}" : isProcessableValue(value2) && (string += processStyleName(_key) + ":" + processStyleValue(_key, value2) + ";");
      else {
        if (_key === "NO_COMPONENT_SELECTOR")
          throw new Error(noComponentSelectorMessage);
        if (Array.isArray(value2) && typeof value2[0] == "string" && (registered == null || registered[value2[0]] === void 0))
          for (var _i = 0; _i < value2.length; _i++)
            isProcessableValue(value2[_i]) && (string += processStyleName(_key) + ":" + processStyleValue(_key, value2[_i]) + ";");
        else {
          var interpolated = handleInterpolation(mergedProps, registered, value2);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default:
              _key === "undefined" && console.error(UNDEFINED_AS_OBJECT_KEY_ERROR), string += _key + "{" + interpolated + "}";
          }
        }
      }
    }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g, sourceMapPattern;
sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var cursor, serializeStyles = function(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] == "object" && args[0] !== null && args[0].styles !== void 0)
    return args[0];
  var stringMode = true, styles2 = "";
  cursor = void 0;
  var strings = args[0];
  strings == null || strings.raw === void 0 ? (stringMode = false, styles2 += handleInterpolation(mergedProps, registered, strings)) : (strings[0] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR), styles2 += strings[0]);
  for (var i2 = 1; i2 < args.length; i2++)
    styles2 += handleInterpolation(mergedProps, registered, args[i2]), stringMode && (strings[i2] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR), styles2 += strings[i2]);
  var sourceMap;
  styles2 = styles2.replace(sourceMapPattern, function(match3) {
    return sourceMap = match3, "";
  }), labelPattern.lastIndex = 0;
  for (var identifierName = "", match2; (match2 = labelPattern.exec(styles2)) !== null; )
    identifierName += "-" + match2[1];
  var name = emotion_hash_esm_default(styles2) + identifierName;
  return { name, styles: styles2, map: sourceMap, next: cursor, toString: function() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
  } };
};
var hasOwnProperty$3 = {}.hasOwnProperty, EmotionCacheContext = react.exports.createContext(typeof HTMLElement < "u" ? emotion_cache_browser_esm_default({ key: "css" }) : null);
EmotionCacheContext.displayName = "EmotionCacheContext";
EmotionCacheContext.Provider;
var withEmotionCache = function(func) {
  return react.exports.forwardRef(function(props, ref) {
    var cache = react.exports.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
}, ThemeContext = react.exports.createContext({});
ThemeContext.displayName = "EmotionThemeContext";
var useTheme = function() {
  return react.exports.useContext(ThemeContext);
}, getTheme = function(outerTheme, theme3) {
  if (typeof theme3 == "function") {
    var mergedTheme = theme3(outerTheme);
    if (mergedTheme == null || typeof mergedTheme != "object" || Array.isArray(mergedTheme))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return mergedTheme;
  }
  if (theme3 == null || typeof theme3 != "object" || Array.isArray(theme3))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return _extends$1({}, outerTheme, theme3);
}, createCacheWithTheme = emotion_weak_memoize_esm_default(function(outerTheme) {
  return emotion_weak_memoize_esm_default(function(theme3) {
    return getTheme(outerTheme, theme3);
  });
}), ThemeProvider = function(props) {
  var theme3 = react.exports.useContext(ThemeContext);
  return props.theme !== theme3 && (theme3 = createCacheWithTheme(theme3)(props.theme)), react.exports.createElement(ThemeContext.Provider, { value: theme3 }, props.children);
};
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Insertion = function(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
}, Emotion = withEmotionCache(function(props, cache, ref) {
  var cssProp = props.css;
  typeof cssProp == "string" && cache.registered[cssProp] !== void 0 && (cssProp = cache.registered[cssProp]);
  var WrappedComponent = props[typePropName], registeredStyles = [cssProp], className = "";
  typeof props.className == "string" ? className = getRegisteredStyles(cache.registered, registeredStyles, props.className) : props.className != null && (className = props.className + " ");
  var serialized = serializeStyles(registeredStyles, void 0, react.exports.useContext(ThemeContext));
  if (serialized.name.indexOf("-") === -1) {
    var labelFromStack = props[labelPropName];
    labelFromStack && (serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]));
  }
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props)
    hasOwnProperty$3.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName && (newProps[key] = props[key]);
  return newProps.ref = ref, newProps.className = className, react.exports.createElement(react.exports.Fragment, null, react.exports.createElement(Insertion, { cache, serialized, isStringTag: typeof WrappedComponent == "string" }), react.exports.createElement(WrappedComponent, newProps));
});
Emotion.displayName = "EmotionCssPropInternal";
__toESM$1(require_hoist_non_react_statics_cjs());
var pkg = { name: "@emotion/react", version: "11.10.5", main: "dist/emotion-react.cjs.js", module: "dist/emotion-react.esm.js", browser: { "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js" }, exports: { ".": { module: { worker: "./dist/emotion-react.worker.esm.js", browser: "./dist/emotion-react.browser.esm.js", default: "./dist/emotion-react.esm.js" }, default: "./dist/emotion-react.cjs.js" }, "./jsx-runtime": { module: { worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js", browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js" }, default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js" }, "./_isolated-hnrs": { module: { worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js", browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js" }, default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js" }, "./jsx-dev-runtime": { module: { worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js", browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js" }, default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js" }, "./package.json": "./package.json", "./types/css-prop": "./types/css-prop.d.ts", "./macro": "./macro.js" }, types: "types/index.d.ts", files: ["src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.js", "macro.d.ts", "macro.js.flow"], sideEffects: false, author: "Emotion Contributors", license: "MIT", scripts: { "test:typescript": "dtslint types" }, dependencies: { "@babel/runtime": "^7.18.3", "@emotion/babel-plugin": "^11.10.5", "@emotion/cache": "^11.10.5", "@emotion/serialize": "^1.1.1", "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0", "@emotion/utils": "^1.2.0", "@emotion/weak-memoize": "^0.3.0", "hoist-non-react-statics": "^3.3.1" }, peerDependencies: { "@babel/core": "^7.0.0", react: ">=16.8.0" }, peerDependenciesMeta: { "@babel/core": { optional: true }, "@types/react": { optional: true } }, devDependencies: { "@babel/core": "^7.18.5", "@definitelytyped/dtslint": "0.0.112", "@emotion/css": "11.10.5", "@emotion/css-prettifier": "1.1.1", "@emotion/server": "11.10.0", "@emotion/styled": "11.10.5", "html-tag-names": "^1.1.2", react: "16.14.0", "svg-tag-names": "^1.1.1", typescript: "^4.5.5" }, repository: "https://github.com/emotion-js/emotion/tree/main/packages/react", publishConfig: { access: "public" }, "umd:main": "dist/emotion-react.umd.min.js", preconstruct: { entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"], umdName: "emotionReact", exports: { envConditions: ["browser", "worker"], extra: { "./types/css-prop": "./types/css-prop.d.ts", "./macro": "./macro.js" } } } }, warnedAboutCssPropForGlobal = false, Global = withEmotionCache(function(props, cache) {
  !warnedAboutCssPropForGlobal && (props.className || props.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), warnedAboutCssPropForGlobal = true);
  var styles2 = props.styles, serialized = serializeStyles([styles2], void 0, react.exports.useContext(ThemeContext)), sheetRef = react.exports.useRef();
  return useInsertionEffectWithLayoutFallback(function() {
    var key = cache.key + "-global", sheet = new cache.sheet.constructor({ key, nonce: cache.sheet.nonce, container: cache.sheet.container, speedy: cache.sheet.isSpeedy }), rehydrating = false, node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    return cache.sheet.tags.length && (sheet.before = cache.sheet.tags[0]), node2 !== null && (rehydrating = true, node2.setAttribute("data-emotion", key), sheet.hydrate([node2])), sheetRef.current = [sheet, rehydrating], function() {
      sheet.flush();
    };
  }, [cache]), useInsertionEffectWithLayoutFallback(function() {
    var sheetRefCurrent = sheetRef.current, sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0 && insertStyles(cache, serialized.next, true), sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element, sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]), null;
});
Global.displayName = "EmotionGlobal";
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
    args[_key] = arguments[_key];
  return serializeStyles(args);
}
var keyframes = function() {
  var insertable = css.apply(void 0, arguments), name = "animation-" + insertable.name;
  return { name, styles: "@keyframes " + name + "{" + insertable.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}, classnames = function classnames2(args) {
  for (var len = args.length, i2 = 0, cls = ""; i2 < len; i2++) {
    var arg = args[i2];
    if (arg != null) {
      var toAdd = void 0;
      switch (typeof arg) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(arg))
            toAdd = classnames2(arg);
          else {
            arg.styles !== void 0 && arg.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), toAdd = "";
            for (var k2 in arg)
              arg[k2] && k2 && (toAdd && (toAdd += " "), toAdd += k2);
          }
          break;
        }
        default:
          toAdd = arg;
      }
      toAdd && (cls && (cls += " "), cls += toAdd);
    }
  }
  return cls;
};
function merge(registered, css2, className) {
  var registeredStyles = [], rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  return registeredStyles.length < 2 ? className : rawClassName + css2(registeredStyles);
}
var Insertion3 = function(_ref) {
  var cache = _ref.cache, serializedArr = _ref.serializedArr;
  useInsertionEffectAlwaysWithSyncFallback(function() {
    for (var i2 = 0; i2 < serializedArr.length; i2++)
      var res = insertStyles(cache, serializedArr[i2], false);
  });
  return null;
}, ClassNames = withEmotionCache(function(props, cache) {
  var hasRendered = false, serializedArr = [], css2 = function() {
    if (hasRendered)
      throw new Error("css can only be used during render");
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
      args[_key] = arguments[_key];
    var serialized = serializeStyles(args, cache.registered);
    return serializedArr.push(serialized), registerStyles(cache, serialized, false), cache.key + "-" + serialized.name;
  }, cx = function() {
    if (hasRendered)
      throw new Error("cx can only be used during render");
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
      args[_key2] = arguments[_key2];
    return merge(cache.registered, css2, classnames(args));
  }, content = { css: css2, cx, theme: react.exports.useContext(ThemeContext) }, ele = props.children(content);
  return hasRendered = true, react.exports.createElement(react.exports.Fragment, null, react.exports.createElement(Insertion3, { cache, serializedArr }), ele);
});
ClassNames.displayName = "EmotionClassNames";
isBrowser2 = true, isTestEnv = typeof jest < "u" || typeof vi < "u", isBrowser2 && !isTestEnv && (globalContext = typeof globalThis < "u" ? globalThis : isBrowser2 ? window : global, globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__", globalContext[globalKey] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), globalContext[globalKey] = true);
var isBrowser2, isTestEnv, globalContext, globalKey;
var testOmitPropsOnStringTag = emotion_is_prop_valid_esm_default, testOmitPropsOnComponent = function(key) {
  return key !== "theme";
}, getDefaultShouldForwardProp = function(tag) {
  return typeof tag == "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
}, composeShouldForwardProps = function(tag, options, isReal) {
  var shouldForwardProp;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  return typeof shouldForwardProp != "function" && isReal && (shouldForwardProp = tag.__emotion_forwardProp), shouldForwardProp;
}, ILLEGAL_ESCAPE_SEQUENCE_ERROR2 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Insertion5 = function(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
}, createStyled = function createStyled2(tag, options) {
  if (tag === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var isReal = tag.__emotion_real === tag, baseTag = isReal && tag.__emotion_base || tag, identifierName, targetClassName;
  options !== void 0 && (identifierName = options.label, targetClassName = options.target);
  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal), defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag), shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments, styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0 && styles2.push("label:" + identifierName + ";"), args[0] == null || args[0].raw === void 0)
      styles2.push.apply(styles2, args);
    else {
      args[0][0] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2), styles2.push(args[0][0]);
      for (var len = args.length, i2 = 1; i2 < len; i2++)
        args[0][i2] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2), styles2.push(args[i2], args[0][i2]);
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag, className = "", classInterpolations = [], mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props)
          mergedProps[key] = props[key];
        mergedProps.theme = react.exports.useContext(ThemeContext);
      }
      typeof props.className == "string" ? className = getRegisteredStyles(cache.registered, classInterpolations, props.className) : props.className != null && (className = props.className + " ");
      var serialized = serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name, targetClassName !== void 0 && (className += " " + targetClassName);
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp, newProps = {};
      for (var _key in props)
        shouldUseAs && _key === "as" || finalShouldForwardProp(_key) && (newProps[_key] = props[_key]);
      return newProps.className = className, newProps.ref = ref, react.exports.createElement(react.exports.Fragment, null, react.exports.createElement(Insertion5, { cache, serialized, isStringTag: typeof FinalTag == "string" }), react.exports.createElement(FinalTag, newProps));
    });
    return Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag == "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")", Styled.defaultProps = tag.defaultProps, Styled.__emotion_real = Styled, Styled.__emotion_base = baseTag, Styled.__emotion_styles = styles2, Styled.__emotion_forwardProp = shouldForwardProp, Object.defineProperty(Styled, "toString", { value: function() {
      return targetClassName === void 0 ? "NO_COMPONENT_SELECTOR" : "." + targetClassName;
    } }), Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends$1({}, options, nextOptions, { shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true) })).apply(void 0, styles2);
    }, Styled;
  };
}, emotion_styled_base_browser_esm_default = createStyled;
var tags = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], newStyled = emotion_styled_base_browser_esm_default.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
var emotion_styled_browser_esm_default = newStyled;
var createReset = memoize$1(1)(({ typography: typography2 }) => ({ body: { fontFamily: typography2.fonts.base, fontSize: typography2.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, "*": { boxSizing: "border-box" }, "h1, h2, h3, h4, h5, h6": { fontWeight: typography2.weight.regular, margin: 0, padding: 0 }, "button, input, textarea, select": { fontFamily: "inherit", fontSize: "inherit", boxSizing: "border-box" }, sub: { fontSize: "0.8em", bottom: "-0.2em" }, sup: { fontSize: "0.8em", top: "-0.2em" }, "b, strong": { fontWeight: typography2.weight.bold }, hr: { border: "none", borderTop: "1px solid silver", clear: "both", marginBottom: "1.25rem" }, code: { fontFamily: typography2.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }, pre: { fontFamily: typography2.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0" } }));
memoize$1(1)(({ color: color2, background: background2, typography: typography2 }) => {
  let resetStyles = createReset({ typography: typography2 });
  return { ...resetStyles, body: { ...resetStyles.body, color: color2.defaultText, background: background2.app, overflow: "hidden" }, hr: { ...resetStyles.hr, borderTop: `1px solid ${color2.border}` } };
});
var easing = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" }, rotate360$1 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, glow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`, float = keyframes`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`, jiggle = keyframes`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`, inlineGlow = css`
  animation: ${glow} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`, hoverable = css`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`, animation = { rotate360: rotate360$1, glow, float, jiggle, inlineGlow, hoverable };
var chromeDark = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)", BASE_COLOR: "rgb(213, 213, 213)", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(227, 110, 236)", OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)", HTML_TAG_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)", HTML_COMMENT_COLOR: "rgb(137, 137, 137)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "rgb(145, 145, 145)", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "rgb(85, 85, 85)", TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)", TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)", TABLE_SORT_ICON_COLOR: "black", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, chromeLight = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "white", BASE_COLOR: "black", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(136, 19, 145)", OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)", HTML_TAG_COLOR: "rgb(168, 148, 166)", HTML_TAGNAME_COLOR: "rgb(136, 18, 128)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)", HTML_COMMENT_COLOR: "rgb(35, 110, 37)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "#6e6e6e", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "#aaa", TABLE_TH_BACKGROUND_COLOR: "#eee", TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)", TABLE_SORT_ICON_COLOR: "#6e6e6e", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, convertColors = (colors) => Object.entries(colors).reduce((acc, [k2, v2]) => ({ ...acc, [k2]: mkColor(v2) }), {}), create2 = ({ colors, mono }) => {
  let colorsObjs = convertColors(colors);
  return { token: { fontFamily: mono, WebkitFontSmoothing: "antialiased", "&.tag": colorsObjs.red3, "&.comment": { ...colorsObjs.green1, fontStyle: "italic" }, "&.prolog": { ...colorsObjs.green1, fontStyle: "italic" }, "&.doctype": { ...colorsObjs.green1, fontStyle: "italic" }, "&.cdata": { ...colorsObjs.green1, fontStyle: "italic" }, "&.string": colorsObjs.red1, "&.url": colorsObjs.cyan1, "&.symbol": colorsObjs.cyan1, "&.number": colorsObjs.cyan1, "&.boolean": colorsObjs.cyan1, "&.variable": colorsObjs.cyan1, "&.constant": colorsObjs.cyan1, "&.inserted": colorsObjs.cyan1, "&.atrule": colorsObjs.blue1, "&.keyword": colorsObjs.blue1, "&.attr-value": colorsObjs.blue1, "&.punctuation": colorsObjs.gray1, "&.operator": colorsObjs.gray1, "&.function": colorsObjs.gray1, "&.deleted": colorsObjs.red2, "&.important": { fontWeight: "bold" }, "&.bold": { fontWeight: "bold" }, "&.italic": { fontStyle: "italic" }, "&.class-name": colorsObjs.cyan2, "&.selector": colorsObjs.red3, "&.attr-name": colorsObjs.red4, "&.property": colorsObjs.red4, "&.regex": colorsObjs.red4, "&.entity": colorsObjs.red4, "&.directive.tag .tag": { background: "#ffff00", ...colorsObjs.gray1 } }, "language-json .token.boolean": colorsObjs.blue1, "language-json .token.number": colorsObjs.blue1, "language-json .token.property": colorsObjs.cyan2, namespace: { opacity: 0.7 } };
};
var lightSyntaxColors = { green1: "#008000", red1: "#A31515", red2: "#9a050f", red3: "#800000", red4: "#ff0000", gray1: "#393A34", cyan1: "#36acaa", cyan2: "#2B91AF", blue1: "#0000ff", blue2: "#00009f" }, darkSyntaxColors = { green1: "#7C7C7C", red1: "#92C379", red2: "#9a050f", red3: "#A8FF60", red4: "#96CBFE", gray1: "#EDEDED", cyan1: "#C6C5FE", cyan2: "#FFFFB6", blue1: "#B474DD", blue2: "#00009f" }, createColors = (vars) => ({ primary: vars.colorPrimary, secondary: vars.colorSecondary, tertiary: color.tertiary, ancillary: color.ancillary, orange: color.orange, gold: color.gold, green: color.green, seafoam: color.seafoam, purple: color.purple, ultraviolet: color.ultraviolet, lightest: color.lightest, lighter: color.lighter, light: color.light, mediumlight: color.mediumlight, medium: color.medium, mediumdark: color.mediumdark, dark: color.dark, darker: color.darker, darkest: color.darkest, border: color.border, positive: color.positive, negative: color.negative, warning: color.warning, critical: color.critical, defaultText: vars.textColor || color.darkest, inverseText: vars.textInverseColor || color.lightest, positiveText: color.positiveText, negativeText: color.negativeText, warningText: color.warningText }), convert = (inherit = themes[getPreferredColorScheme()]) => {
  let { base, colorPrimary, colorSecondary, appBg, appContentBg, appBorderColor, appBorderRadius, fontBase, fontCode, textColor, textInverseColor, barTextColor, barSelectedColor, barBg, buttonBg, buttonBorder, booleanBg, booleanSelectedBg, inputBg, inputBorder, inputTextColor, inputBorderRadius, brandTitle, brandUrl, brandImage, brandTarget, gridCellSize, ...rest } = inherit;
  return { ...rest, base, color: createColors(inherit), background: { app: appBg, bar: barBg, content: appContentBg, gridCellSize: gridCellSize || background.gridCellSize, hoverable: background.hoverable, positive: background.positive, negative: background.negative, warning: background.warning, critical: background.critical }, typography: { fonts: { base: fontBase, mono: fontCode }, weight: typography.weight, size: typography.size }, animation, easing, input: { background: inputBg, border: inputBorder, borderRadius: inputBorderRadius, color: inputTextColor }, button: { background: buttonBg || inputBg, border: buttonBorder || inputBorder }, boolean: { background: booleanBg || inputBorder, selectedBackground: booleanSelectedBg || inputBg }, layoutMargin: 10, appBorderColor, appBorderRadius, barTextColor, barSelectedColor: barSelectedColor || colorSecondary, barBg, brand: { title: brandTitle, url: brandUrl, image: brandImage || (brandTitle ? null : void 0), target: brandTarget }, code: create2({ colors: base === "light" ? lightSyntaxColors : darkSyntaxColors, mono: fontCode }), addonActionsTheme: { ...base === "light" ? chromeLight : chromeDark, BASE_FONT_FAMILY: fontCode, BASE_FONT_SIZE: typography.size.s2 - 1, BASE_LINE_HEIGHT: "18px", BASE_BACKGROUND_COLOR: "transparent", BASE_COLOR: textColor, ARROW_COLOR: curriedOpacify$1$1(0.2, appBorderColor), ARROW_MARGIN_RIGHT: 4, ARROW_FONT_SIZE: 8, TREENODE_FONT_FAMILY: fontCode, TREENODE_FONT_SIZE: typography.size.s2 - 1, TREENODE_LINE_HEIGHT: "18px", TREENODE_PADDING_LEFT: 12 } };
};
const logger$2 = __STORYBOOK_MODULE_CLIENT_LOGGER__.logger;
var isEmpty = (o2) => Object.keys(o2).length === 0, isObject$4 = (o2) => o2 != null && typeof o2 == "object", hasOwnProperty2 = (o2, ...args) => Object.prototype.hasOwnProperty.call(o2, ...args);
var makeObjectWithoutPrototype = () => /* @__PURE__ */ Object.create(null);
var deletedDiff = (lhs, rhs) => lhs === rhs || !isObject$4(lhs) || !isObject$4(rhs) ? {} : Object.keys(lhs).reduce((acc, key) => {
  if (hasOwnProperty2(rhs, key)) {
    let difference = deletedDiff(lhs[key], rhs[key]);
    return isObject$4(difference) && isEmpty(difference) || (acc[key] = difference), acc;
  }
  return acc[key] = void 0, acc;
}, makeObjectWithoutPrototype()), deleted_default = deletedDiff;
function dedent(templ) {
  for (var values = [], _i = 1; _i < arguments.length; _i++)
    values[_i - 1] = arguments[_i];
  var strings = Array.from(typeof templ == "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str2) {
    var matches = str2.match(/\n([\t ]+|(?!\s).)/g);
    return matches ? arr.concat(matches.map(function(match2) {
      var _a, _b;
      return (_b = (_a = match2.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    })) : arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp(`
[	 ]{` + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str2) {
      return str2.replace(pattern_1, `
`);
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string = strings[0];
  return values.forEach(function(value2, i2) {
    var endentations = string.match(/(?:^|\n)( *)$/), endentation = endentations ? endentations[1] : "", indentedValue = value2;
    typeof value2 == "string" && value2.includes(`
`) && (indentedValue = String(value2).split(`
`).map(function(str2, i22) {
      return i22 === 0 ? str2 : "" + endentation + str2;
    }).join(`
`)), string += indentedValue + strings[i2 + 1];
  }), string;
}
var ensure = (input) => {
  if (!input)
    return convert(light_default);
  let missing = deleted_default(light_default, input);
  return Object.keys(missing).length && logger$2.warn(dedent`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `, missing), convert(input);
};
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++)
    key = sourceKeys[i2], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 == "object" || typeof from2 == "function")
    for (let key of __getOwnPropNames(from2))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var require_markdown = __commonJS({ "../../node_modules/refractor/lang/markdown.js"(exports, module) {
  module.exports = markdown;
  markdown.displayName = "markdown";
  markdown.aliases = ["md"];
  function markdown(Prism) {
    (function(Prism2) {
      var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function createInline(pattern) {
        return pattern = pattern.replace(/<inner>/g, function() {
          return inner;
        }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + pattern + ")");
      }
      var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
        return tableCell;
      }), tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      Prism2.languages.markdown = Prism2.languages.extend("markup", {}), Prism2.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: true, greedy: true, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: Prism2.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + tableRow + tableLine + "(?:" + tableRow + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + tableRow + tableLine + ")(?:" + tableRow + ")*$"), lookbehind: true, inside: { "table-data": { pattern: RegExp(tableCell), inside: Prism2.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + tableRow + ")" + tableLine + "$"), lookbehind: true, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + tableRow + "$"), inside: { "table-header": { pattern: RegExp(tableCell), alias: "important", inside: Prism2.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: true, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: true, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: true }, "code-language": { pattern: /^(```).+/, lookbehind: true }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: true, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: true, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: true, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: true }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: true, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: true, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: true, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: true, greedy: true, alias: ["code", "keyword"] }, url: { pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: true, greedy: true, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: true, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: true }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: true }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: true } } } }), ["url", "bold", "italic", "strike"].forEach(function(token2) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(inside) {
          token2 !== inside && (Prism2.languages.markdown[token2].inside.content.inside[inside] = Prism2.languages.markdown[inside]);
        });
      }), Prism2.hooks.add("after-tokenize", function(env) {
        if (env.language !== "markdown" && env.language !== "md")
          return;
        function walkTokens(tokens) {
          if (!(!tokens || typeof tokens == "string"))
            for (var i2 = 0, l2 = tokens.length; i2 < l2; i2++) {
              var token2 = tokens[i2];
              if (token2.type !== "code") {
                walkTokens(token2.content);
                continue;
              }
              var codeLang = token2.content[1], codeBlock = token2.content[3];
              if (codeLang && codeBlock && codeLang.type === "code-language" && codeBlock.type === "code-block" && typeof codeLang.content == "string") {
                var lang = codeLang.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                lang = (/[a-z][\w-]*/i.exec(lang) || [""])[0].toLowerCase();
                var alias = "language-" + lang;
                codeBlock.alias ? typeof codeBlock.alias == "string" ? codeBlock.alias = [codeBlock.alias, alias] : codeBlock.alias.push(alias) : codeBlock.alias = [alias];
              }
            }
        }
        walkTokens(env.tokens);
      }), Prism2.hooks.add("wrap", function(env) {
        if (env.type === "code-block") {
          for (var codeLang = "", i2 = 0, l2 = env.classes.length; i2 < l2; i2++) {
            var cls = env.classes[i2], match2 = /language-(.+)/.exec(cls);
            if (match2) {
              codeLang = match2[1];
              break;
            }
          }
          var grammar = Prism2.languages[codeLang];
          if (grammar)
            env.content = Prism2.highlight(textContent(env.content.value), grammar, codeLang);
          else if (codeLang && codeLang !== "none" && Prism2.plugins.autoloader) {
            var id = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 1e16);
            env.attributes.id = id, Prism2.plugins.autoloader.loadLanguages(codeLang, function() {
              var ele = document.getElementById(id);
              ele && (ele.innerHTML = Prism2.highlight(ele.textContent, Prism2.languages[codeLang], codeLang));
            });
          }
        }
      });
      var tagPattern = RegExp(Prism2.languages.markup.tag.pattern.source, "gi"), KNOWN_ENTITY_NAMES = { amp: "&", lt: "<", gt: ">", quot: '"' }, fromCodePoint = String.fromCodePoint || String.fromCharCode;
      function textContent(html) {
        var text = html.replace(tagPattern, "");
        return text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(m2, code) {
          if (code = code.toLowerCase(), code[0] === "#") {
            var value2;
            return code[1] === "x" ? value2 = parseInt(code.slice(2), 16) : value2 = Number(code.slice(1)), fromCodePoint(value2);
          } else {
            var known = KNOWN_ENTITY_NAMES[code];
            return known || m2;
          }
        }), text;
      }
      Prism2.languages.md = Prism2.languages.markdown;
    })(Prism);
  }
} });
var require_yaml = __commonJS({ "../../node_modules/refractor/lang/yaml.js"(exports, module) {
  module.exports = yaml;
  yaml.displayName = "yaml";
  yaml.aliases = ["yml"];
  function yaml(Prism) {
    (function(Prism2) {
      var anchorOrAlias = /[*&][^\s[\]{},]+/, tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, properties = "(?:" + tag.source + "(?:[ 	]+" + anchorOrAlias.source + ")?|" + anchorOrAlias.source + "(?:[ 	]+" + tag.source + ")?)", plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
        return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
      }), string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
      function createValuePattern(value2, flags) {
        flags = (flags || "").replace(/m/g, "") + "m";
        var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
          return properties;
        }).replace(/<<value>>/g, function() {
          return value2;
        });
        return RegExp(pattern, flags);
      }
      Prism2.languages.yaml = { scalar: { pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return properties;
      })), lookbehind: true, alias: "string" }, comment: /#.*/, key: { pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return properties;
      }).replace(/<<key>>/g, function() {
        return "(?:" + plainKey + "|" + string + ")";
      })), lookbehind: true, greedy: true, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: true, alias: "important" }, datetime: { pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: true, alias: "number" }, boolean: { pattern: createValuePattern(/false|true/.source, "i"), lookbehind: true, alias: "important" }, null: { pattern: createValuePattern(/null|~/.source, "i"), lookbehind: true, alias: "important" }, string: { pattern: createValuePattern(string), lookbehind: true, greedy: true }, number: { pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: true }, tag, important: anchorOrAlias, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, Prism2.languages.yml = Prism2.languages.yaml;
    })(Prism);
  }
} });
var require_typescript = __commonJS({ "../../node_modules/refractor/lang/typescript.js"(exports, module) {
  module.exports = typescript;
  typescript.displayName = "typescript";
  typescript.aliases = ["ts"];
  function typescript(Prism) {
    (function(Prism2) {
      Prism2.languages.typescript = Prism2.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: true, greedy: true, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), Prism2.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete Prism2.languages.typescript.parameter, delete Prism2.languages.typescript["literal-property"];
      var typeInside = Prism2.languages.extend("typescript", {});
      delete typeInside["class-name"], Prism2.languages.typescript["class-name"].inside = typeInside, Prism2.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: true, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: typeInside } } } }), Prism2.languages.ts = Prism2.languages.typescript;
    })(Prism);
  }
} });
var require_jsx = __commonJS({ "../../node_modules/refractor/lang/jsx.js"(exports, module) {
  module.exports = jsx;
  jsx.displayName = "jsx";
  jsx.aliases = [];
  function jsx(Prism) {
    (function(Prism2) {
      var javascript = Prism2.util.clone(Prism2.languages.javascript), space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
      function re(source, flags) {
        return source = source.replace(/<S>/g, function() {
          return space;
        }).replace(/<BRACES>/g, function() {
          return braces;
        }).replace(/<SPREAD>/g, function() {
          return spread;
        }), RegExp(source, flags);
      }
      spread = re(spread).source, Prism2.languages.jsx = Prism2.languages.extend("markup", javascript), Prism2.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), Prism2.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, Prism2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, Prism2.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, Prism2.languages.jsx.tag.inside.comment = javascript.comment, Prism2.languages.insertBefore("inside", "attr-name", { spread: { pattern: re(/<SPREAD>/.source), inside: Prism2.languages.jsx } }, Prism2.languages.jsx.tag), Prism2.languages.insertBefore("inside", "special-attr", { script: { pattern: re(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: Prism2.languages.jsx } } }, Prism2.languages.jsx.tag);
      var stringifyToken = function(token2) {
        return token2 ? typeof token2 == "string" ? token2 : typeof token2.content == "string" ? token2.content : token2.content.map(stringifyToken).join("") : "";
      }, walkTokens = function(tokens) {
        for (var openedTags = [], i2 = 0; i2 < tokens.length; i2++) {
          var token2 = tokens[i2], notTagNorBrace = false;
          if (typeof token2 != "string" && (token2.type === "tag" && token2.content[0] && token2.content[0].type === "tag" ? token2.content[0].content[0].content === "</" ? openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token2.content[0].content[1]) && openedTags.pop() : token2.content[token2.content.length - 1].content === "/>" || openedTags.push({ tagName: stringifyToken(token2.content[0].content[1]), openedBraces: 0 }) : openedTags.length > 0 && token2.type === "punctuation" && token2.content === "{" ? openedTags[openedTags.length - 1].openedBraces++ : openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token2.type === "punctuation" && token2.content === "}" ? openedTags[openedTags.length - 1].openedBraces-- : notTagNorBrace = true), (notTagNorBrace || typeof token2 == "string") && openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
            var plainText = stringifyToken(token2);
            i2 < tokens.length - 1 && (typeof tokens[i2 + 1] == "string" || tokens[i2 + 1].type === "plain-text") && (plainText += stringifyToken(tokens[i2 + 1]), tokens.splice(i2 + 1, 1)), i2 > 0 && (typeof tokens[i2 - 1] == "string" || tokens[i2 - 1].type === "plain-text") && (plainText = stringifyToken(tokens[i2 - 1]) + plainText, tokens.splice(i2 - 1, 1), i2--), tokens[i2] = new Prism2.Token("plain-text", plainText, null, plainText);
          }
          token2.content && typeof token2.content != "string" && walkTokens(token2.content);
        }
      };
      Prism2.hooks.add("after-tokenize", function(env) {
        env.language !== "jsx" && env.language !== "tsx" || walkTokens(env.tokens);
      });
    })(Prism);
  }
} });
var require_tsx = __commonJS({ "../../node_modules/refractor/lang/tsx.js"(exports, module) {
  var refractorJsx = require_jsx(), refractorTypescript = require_typescript();
  module.exports = tsx;
  tsx.displayName = "tsx";
  tsx.aliases = [];
  function tsx(Prism) {
    Prism.register(refractorJsx), Prism.register(refractorTypescript), function(Prism2) {
      var typescript = Prism2.util.clone(Prism2.languages.typescript);
      Prism2.languages.tsx = Prism2.languages.extend("jsx", typescript), delete Prism2.languages.tsx.parameter, delete Prism2.languages.tsx["literal-property"];
      var tag = Prism2.languages.tsx.tag;
      tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags), tag.lookbehind = true;
    }(Prism);
  }
} });
var require_clike = __commonJS({ "../../node_modules/refractor/lang/clike.js"(exports, module) {
  module.exports = clike;
  clike.displayName = "clike";
  clike.aliases = [];
  function clike(Prism) {
    Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true, greedy: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
  }
} });
var require_javascript = __commonJS({ "../../node_modules/refractor/lang/javascript.js"(exports, module) {
  module.exports = javascript;
  javascript.displayName = "javascript";
  javascript.aliases = ["js"];
  function javascript(Prism) {
    Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: true }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: true }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source), lookbehind: true }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: true, greedy: true, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: true, alias: "language-regex", inside: Prism.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: true, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: true, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: true, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: true, greedy: true, alias: "property" } }), Prism.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: true, alias: "property" } }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), Prism.languages.js = Prism.languages.javascript;
  }
} });
var require_css = __commonJS({ "../../node_modules/refractor/lang/css.js"(exports, module) {
  module.exports = css2;
  css2.displayName = "css";
  css2.aliases = [];
  function css2(Prism) {
    (function(Prism2) {
      var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      Prism2.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: true, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: true } } }, url: { pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: true, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + string.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"), lookbehind: true }, string: { pattern: string, greedy: true }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: true }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: true }, punctuation: /[(){};:,]/ }, Prism2.languages.css.atrule.inside.rest = Prism2.languages.css;
      var markup = Prism2.languages.markup;
      markup && (markup.tag.addInlined("style", "css"), markup.tag.addAttribute("style", "css"));
    })(Prism);
  }
} });
var require_markup = __commonJS({ "../../node_modules/refractor/lang/markup.js"(exports, module) {
  module.exports = markup;
  markup.displayName = "markup";
  markup.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
  function markup(Prism) {
    Prism.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: true }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: true }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: true, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: true, greedy: true, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: true }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: true }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(env) {
      env.type === "entity" && (env.attributes.title = env.content.value.replace(/&amp;/, "&"));
    }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function(tagName, lang) {
      var includedCdataInside = {};
      includedCdataInside["language-" + lang] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: Prism.languages[lang] }, includedCdataInside.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var inside = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: includedCdataInside } };
      inside["language-" + lang] = { pattern: /[\s\S]+/, inside: Prism.languages[lang] };
      var def = {};
      def[tagName] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return tagName;
      }), "i"), lookbehind: true, greedy: true, inside }, Prism.languages.insertBefore("markup", "cdata", def);
    } }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { value: function(attrName, lang) {
      Prism.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: true, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: true, alias: [lang, "language-" + lang], inside: Prism.languages[lang] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
    } }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
  }
} });
var require_immutable = __commonJS({ "../../node_modules/xtend/immutable.js"(exports, module) {
  module.exports = extend;
  var hasOwnProperty3 = Object.prototype.hasOwnProperty;
  function extend() {
    for (var target = {}, i2 = 0; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source)
        hasOwnProperty3.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }
} });
var require_schema = __commonJS({ "../../node_modules/property-information/lib/util/schema.js"(exports, module) {
  module.exports = Schema;
  var proto = Schema.prototype;
  proto.space = null;
  proto.normal = {};
  proto.property = {};
  function Schema(property, normal, space) {
    this.property = property, this.normal = normal, space && (this.space = space);
  }
} });
var require_merge = __commonJS({ "../../node_modules/property-information/lib/util/merge.js"(exports, module) {
  var xtend = require_immutable(), Schema = require_schema();
  module.exports = merge2;
  function merge2(definitions) {
    for (var length2 = definitions.length, property = [], normal = [], index3 = -1, info, space; ++index3 < length2; )
      info = definitions[index3], property.push(info.property), normal.push(info.normal), space = info.space;
    return new Schema(xtend.apply(null, property), xtend.apply(null, normal), space);
  }
} });
var require_normalize = __commonJS({ "../../node_modules/property-information/normalize.js"(exports, module) {
  module.exports = normalize;
  function normalize(value2) {
    return value2.toLowerCase();
  }
} });
var require_info = __commonJS({ "../../node_modules/property-information/lib/util/info.js"(exports, module) {
  module.exports = Info;
  var proto = Info.prototype;
  proto.space = null;
  proto.attribute = null;
  proto.property = null;
  proto.boolean = false;
  proto.booleanish = false;
  proto.overloadedBoolean = false;
  proto.number = false;
  proto.commaSeparated = false;
  proto.spaceSeparated = false;
  proto.commaOrSpaceSeparated = false;
  proto.mustUseProperty = false;
  proto.defined = false;
  function Info(property, attribute) {
    this.property = property, this.attribute = attribute;
  }
} });
var require_types = __commonJS({ "../../node_modules/property-information/lib/util/types.js"(exports) {
  var powers = 0;
  exports.boolean = increment();
  exports.booleanish = increment();
  exports.overloadedBoolean = increment();
  exports.number = increment();
  exports.spaceSeparated = increment();
  exports.commaSeparated = increment();
  exports.commaOrSpaceSeparated = increment();
  function increment() {
    return Math.pow(2, ++powers);
  }
} });
var require_defined_info = __commonJS({ "../../node_modules/property-information/lib/util/defined-info.js"(exports, module) {
  var Info = require_info(), types = require_types();
  module.exports = DefinedInfo;
  DefinedInfo.prototype = new Info();
  DefinedInfo.prototype.defined = true;
  var checks = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"], checksLength = checks.length;
  function DefinedInfo(property, attribute, mask, space) {
    var index3 = -1, check;
    for (mark(this, "space", space), Info.call(this, property, attribute); ++index3 < checksLength; )
      check = checks[index3], mark(this, check, (mask & types[check]) === types[check]);
  }
  function mark(values, key, value2) {
    value2 && (values[key] = value2);
  }
} });
var require_create = __commonJS({ "../../node_modules/property-information/lib/util/create.js"(exports, module) {
  var normalize = require_normalize(), Schema = require_schema(), DefinedInfo = require_defined_info();
  module.exports = create;
  function create(definition) {
    var space = definition.space, mustUseProperty = definition.mustUseProperty || [], attributes = definition.attributes || {}, props = definition.properties, transform = definition.transform, property = {}, normal = {}, prop, info;
    for (prop in props)
      info = new DefinedInfo(prop, transform(attributes, prop), props[prop], space), mustUseProperty.indexOf(prop) !== -1 && (info.mustUseProperty = true), property[prop] = info, normal[normalize(prop)] = prop, normal[normalize(info.attribute)] = prop;
    return new Schema(property, normal, space);
  }
} });
var require_xlink = __commonJS({ "../../node_modules/property-information/lib/xlink.js"(exports, module) {
  var create = require_create();
  module.exports = create({ space: "xlink", transform: xlinkTransform, properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } });
  function xlinkTransform(_2, prop) {
    return "xlink:" + prop.slice(5).toLowerCase();
  }
} });
var require_xml = __commonJS({ "../../node_modules/property-information/lib/xml.js"(exports, module) {
  var create = require_create();
  module.exports = create({ space: "xml", transform: xmlTransform, properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
  function xmlTransform(_2, prop) {
    return "xml:" + prop.slice(3).toLowerCase();
  }
} });
var require_case_sensitive_transform = __commonJS({ "../../node_modules/property-information/lib/util/case-sensitive-transform.js"(exports, module) {
  module.exports = caseSensitiveTransform;
  function caseSensitiveTransform(attributes, attribute) {
    return attribute in attributes ? attributes[attribute] : attribute;
  }
} });
var require_case_insensitive_transform = __commonJS({ "../../node_modules/property-information/lib/util/case-insensitive-transform.js"(exports, module) {
  var caseSensitiveTransform = require_case_sensitive_transform();
  module.exports = caseInsensitiveTransform;
  function caseInsensitiveTransform(attributes, property) {
    return caseSensitiveTransform(attributes, property.toLowerCase());
  }
} });
var require_xmlns = __commonJS({ "../../node_modules/property-information/lib/xmlns.js"(exports, module) {
  var create = require_create(), caseInsensitiveTransform = require_case_insensitive_transform();
  module.exports = create({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: caseInsensitiveTransform, properties: { xmlns: null, xmlnsXLink: null } });
} });
var require_aria = __commonJS({ "../../node_modules/property-information/lib/aria.js"(exports, module) {
  var types = require_types(), create = require_create(), booleanish = types.booleanish, number = types.number, spaceSeparated = types.spaceSeparated;
  module.exports = create({ transform: ariaTransform, properties: { ariaActiveDescendant: null, ariaAtomic: booleanish, ariaAutoComplete: null, ariaBusy: booleanish, ariaChecked: booleanish, ariaColCount: number, ariaColIndex: number, ariaColSpan: number, ariaControls: spaceSeparated, ariaCurrent: null, ariaDescribedBy: spaceSeparated, ariaDetails: null, ariaDisabled: booleanish, ariaDropEffect: spaceSeparated, ariaErrorMessage: null, ariaExpanded: booleanish, ariaFlowTo: spaceSeparated, ariaGrabbed: booleanish, ariaHasPopup: null, ariaHidden: booleanish, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: spaceSeparated, ariaLevel: number, ariaLive: null, ariaModal: booleanish, ariaMultiLine: booleanish, ariaMultiSelectable: booleanish, ariaOrientation: null, ariaOwns: spaceSeparated, ariaPlaceholder: null, ariaPosInSet: number, ariaPressed: booleanish, ariaReadOnly: booleanish, ariaRelevant: null, ariaRequired: booleanish, ariaRoleDescription: spaceSeparated, ariaRowCount: number, ariaRowIndex: number, ariaRowSpan: number, ariaSelected: booleanish, ariaSetSize: number, ariaSort: null, ariaValueMax: number, ariaValueMin: number, ariaValueNow: number, ariaValueText: null, role: null } });
  function ariaTransform(_2, prop) {
    return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
  }
} });
var require_html = __commonJS({ "../../node_modules/property-information/lib/html.js"(exports, module) {
  var types = require_types(), create = require_create(), caseInsensitiveTransform = require_case_insensitive_transform(), boolean = types.boolean, overloadedBoolean = types.overloadedBoolean, booleanish = types.booleanish, number = types.number, spaceSeparated = types.spaceSeparated, commaSeparated = types.commaSeparated;
  module.exports = create({ space: "html", attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, transform: caseInsensitiveTransform, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: commaSeparated, acceptCharset: spaceSeparated, accessKey: spaceSeparated, action: null, allow: null, allowFullScreen: boolean, allowPaymentRequest: boolean, allowUserMedia: boolean, alt: null, as: null, async: boolean, autoCapitalize: null, autoComplete: spaceSeparated, autoFocus: boolean, autoPlay: boolean, capture: boolean, charSet: null, checked: boolean, cite: null, className: spaceSeparated, cols: number, colSpan: null, content: null, contentEditable: booleanish, controls: boolean, controlsList: spaceSeparated, coords: number | commaSeparated, crossOrigin: null, data: null, dateTime: null, decoding: null, default: boolean, defer: boolean, dir: null, dirName: null, disabled: boolean, download: overloadedBoolean, draggable: booleanish, encType: null, enterKeyHint: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: boolean, formTarget: null, headers: spaceSeparated, height: number, hidden: boolean, high: number, href: null, hrefLang: null, htmlFor: spaceSeparated, httpEquiv: spaceSeparated, id: null, imageSizes: null, imageSrcSet: commaSeparated, inputMode: null, integrity: null, is: null, isMap: boolean, itemId: null, itemProp: spaceSeparated, itemRef: spaceSeparated, itemScope: boolean, itemType: spaceSeparated, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: boolean, low: number, manifest: null, max: null, maxLength: number, media: null, method: null, min: null, minLength: number, multiple: boolean, muted: boolean, name: null, nonce: null, noModule: boolean, noValidate: boolean, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforePrint: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextMenu: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: boolean, optimum: number, pattern: null, ping: spaceSeparated, placeholder: null, playsInline: boolean, poster: null, preload: null, readOnly: boolean, referrerPolicy: null, rel: spaceSeparated, required: boolean, reversed: boolean, rows: number, rowSpan: number, sandbox: spaceSeparated, scope: null, scoped: boolean, seamless: boolean, selected: boolean, shape: null, size: number, sizes: null, slot: null, span: number, spellCheck: booleanish, src: null, srcDoc: null, srcLang: null, srcSet: commaSeparated, start: number, step: null, style: null, tabIndex: number, target: null, title: null, translate: null, type: null, typeMustMatch: boolean, useMap: null, value: booleanish, width: number, wrap: null, align: null, aLink: null, archive: spaceSeparated, axis: null, background: null, bgColor: null, border: number, borderColor: null, bottomMargin: number, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: boolean, declare: boolean, event: null, face: null, frame: null, frameBorder: null, hSpace: number, leftMargin: number, link: null, longDesc: null, lowSrc: null, marginHeight: number, marginWidth: number, noResize: boolean, noHref: boolean, noShade: boolean, noWrap: boolean, object: null, profile: null, prompt: null, rev: null, rightMargin: number, rules: null, scheme: null, scrolling: booleanish, standby: null, summary: null, text: null, topMargin: number, valueType: null, version: null, vAlign: null, vLink: null, vSpace: number, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: boolean, disableRemotePlayback: boolean, prefix: null, property: null, results: number, security: null, unselectable: null } });
} });
var require_html2 = __commonJS({ "../../node_modules/property-information/html.js"(exports, module) {
  var merge2 = require_merge(), xlink = require_xlink(), xml = require_xml(), xmlns = require_xmlns(), aria = require_aria(), html = require_html();
  module.exports = merge2([xml, xlink, xmlns, aria, html]);
} });
var require_find = __commonJS({ "../../node_modules/property-information/find.js"(exports, module) {
  var normalize = require_normalize(), DefinedInfo = require_defined_info(), Info = require_info(), data = "data";
  module.exports = find2;
  var valid = /^data[-\w.:]+$/i, dash = /-[a-z]/g, cap = /[A-Z]/g;
  function find2(schema, value2) {
    var normal = normalize(value2), prop = value2, Type2 = Info;
    return normal in schema.normal ? schema.property[schema.normal[normal]] : (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value2) && (value2.charAt(4) === "-" ? prop = datasetToProperty(value2) : value2 = datasetToAttribute(value2), Type2 = DefinedInfo), new Type2(prop, value2));
  }
  function datasetToProperty(attribute) {
    var value2 = attribute.slice(5).replace(dash, camelcase);
    return data + value2.charAt(0).toUpperCase() + value2.slice(1);
  }
  function datasetToAttribute(property) {
    var value2 = property.slice(4);
    return dash.test(value2) ? property : (value2 = value2.replace(cap, kebab), value2.charAt(0) !== "-" && (value2 = "-" + value2), data + value2);
  }
  function kebab($0) {
    return "-" + $0.toLowerCase();
  }
  function camelcase($0) {
    return $0.charAt(1).toUpperCase();
  }
} });
var require_hast_util_parse_selector = __commonJS({ "../../node_modules/hast-util-parse-selector/index.js"(exports, module) {
  module.exports = parse4;
  var search = /[#.]/g;
  function parse4(selector, defaultTagName) {
    for (var value2 = selector || "", name = defaultTagName || "div", props = {}, start2 = 0, subvalue, previous, match2; start2 < value2.length; )
      search.lastIndex = start2, match2 = search.exec(value2), subvalue = value2.slice(start2, match2 ? match2.index : value2.length), subvalue && (previous ? previous === "#" ? props.id = subvalue : props.className ? props.className.push(subvalue) : props.className = [subvalue] : name = subvalue, start2 += subvalue.length), match2 && (previous = match2[0], start2++);
    return { type: "element", tagName: name, properties: props, children: [] };
  }
} });
var require_space_separated_tokens = __commonJS({ "../../node_modules/space-separated-tokens/index.js"(exports) {
  exports.parse = parse4;
  exports.stringify = stringify2;
  var empty = "", space = " ", whiteSpace = /[ \t\n\r\f]+/g;
  function parse4(value2) {
    var input = String(value2 || empty).trim();
    return input === empty ? [] : input.split(whiteSpace);
  }
  function stringify2(values) {
    return values.join(space).trim();
  }
} });
var require_comma_separated_tokens = __commonJS({ "../../node_modules/comma-separated-tokens/index.js"(exports) {
  exports.parse = parse4;
  exports.stringify = stringify2;
  var comma = ",", space = " ", empty = "";
  function parse4(value2) {
    for (var values = [], input = String(value2 || empty), index3 = input.indexOf(comma), lastIndex = 0, end2 = false, val; !end2; )
      index3 === -1 && (index3 = input.length, end2 = true), val = input.slice(lastIndex, index3).trim(), (val || !end2) && values.push(val), lastIndex = index3 + 1, index3 = input.indexOf(comma, lastIndex);
    return values;
  }
  function stringify2(values, options) {
    var settings = options || {}, left2 = settings.padLeft === false ? empty : space, right2 = settings.padRight ? space : empty;
    return values[values.length - 1] === empty && (values = values.concat(empty)), values.join(right2 + comma + left2).trim();
  }
} });
var require_factory = __commonJS({ "../../node_modules/hastscript/factory.js"(exports, module) {
  var find2 = require_find(), normalize = require_normalize(), parseSelector = require_hast_util_parse_selector(), spaces = require_space_separated_tokens().parse, commas = require_comma_separated_tokens().parse;
  module.exports = factory;
  var own = {}.hasOwnProperty;
  function factory(schema, defaultTagName, caseSensitive) {
    var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null;
    return h2;
    function h2(selector, properties) {
      var node2 = parseSelector(selector, defaultTagName), children = Array.prototype.slice.call(arguments, 2), name = node2.tagName.toLowerCase(), property;
      if (node2.tagName = adjust && own.call(adjust, name) ? adjust[name] : name, properties && isChildren(properties, node2) && (children.unshift(properties), properties = null), properties)
        for (property in properties)
          addProperty(node2.properties, property, properties[property]);
      return addChild(node2.children, children), node2.tagName === "template" && (node2.content = { type: "root", children: node2.children }, node2.children = []), node2;
    }
    function addProperty(properties, key, value2) {
      var info, property, result;
      value2 == null || value2 !== value2 || (info = find2(schema, key), property = info.property, result = value2, typeof result == "string" && (info.spaceSeparated ? result = spaces(result) : info.commaSeparated ? result = commas(result) : info.commaOrSpaceSeparated && (result = spaces(commas(result).join(" ")))), property === "style" && typeof value2 != "string" && (result = style(result)), property === "className" && properties.className && (result = properties.className.concat(result)), properties[property] = parsePrimitives(info, property, result));
    }
  }
  function isChildren(value2, node2) {
    return typeof value2 == "string" || "length" in value2 || isNode(node2.tagName, value2);
  }
  function isNode(tagName, value2) {
    var type = value2.type;
    return tagName === "input" || !type || typeof type != "string" ? false : typeof value2.children == "object" && "length" in value2.children ? true : (type = type.toLowerCase(), tagName === "button" ? type !== "menu" && type !== "submit" && type !== "reset" && type !== "button" : "value" in value2);
  }
  function addChild(nodes, value2) {
    var index3, length2;
    if (typeof value2 == "string" || typeof value2 == "number") {
      nodes.push({ type: "text", value: String(value2) });
      return;
    }
    if (typeof value2 == "object" && "length" in value2) {
      for (index3 = -1, length2 = value2.length; ++index3 < length2; )
        addChild(nodes, value2[index3]);
      return;
    }
    if (typeof value2 != "object" || !("type" in value2))
      throw new Error("Expected node, nodes, or string, got `" + value2 + "`");
    nodes.push(value2);
  }
  function parsePrimitives(info, name, value2) {
    var index3, length2, result;
    if (typeof value2 != "object" || !("length" in value2))
      return parsePrimitive(info, name, value2);
    for (length2 = value2.length, index3 = -1, result = []; ++index3 < length2; )
      result[index3] = parsePrimitive(info, name, value2[index3]);
    return result;
  }
  function parsePrimitive(info, name, value2) {
    var result = value2;
    return info.number || info.positiveNumber ? !isNaN(result) && result !== "" && (result = Number(result)) : (info.boolean || info.overloadedBoolean) && typeof result == "string" && (result === "" || normalize(value2) === normalize(name)) && (result = true), result;
  }
  function style(value2) {
    var result = [], key;
    for (key in value2)
      result.push([key, value2[key]].join(": "));
    return result.join("; ");
  }
  function createAdjustMap(values) {
    for (var length2 = values.length, index3 = -1, result = {}, value2; ++index3 < length2; )
      value2 = values[index3], result[value2.toLowerCase()] = value2;
    return result;
  }
} });
var require_html3 = __commonJS({ "../../node_modules/hastscript/html.js"(exports, module) {
  var schema = require_html2(), factory = require_factory(), html = factory(schema, "div");
  html.displayName = "html";
  module.exports = html;
} });
var require_hastscript = __commonJS({ "../../node_modules/hastscript/index.js"(exports, module) {
  module.exports = require_html3();
} });
var require_character_entities_legacy = __commonJS({ "../../node_modules/character-entities-legacy/index.json"(exports, module) {
  module.exports = { AElig: "\xC6", AMP: "&", Aacute: "\xC1", Acirc: "\xC2", Agrave: "\xC0", Aring: "\xC5", Atilde: "\xC3", Auml: "\xC4", COPY: "\xA9", Ccedil: "\xC7", ETH: "\xD0", Eacute: "\xC9", Ecirc: "\xCA", Egrave: "\xC8", Euml: "\xCB", GT: ">", Iacute: "\xCD", Icirc: "\xCE", Igrave: "\xCC", Iuml: "\xCF", LT: "<", Ntilde: "\xD1", Oacute: "\xD3", Ocirc: "\xD4", Ograve: "\xD2", Oslash: "\xD8", Otilde: "\xD5", Ouml: "\xD6", QUOT: '"', REG: "\xAE", THORN: "\xDE", Uacute: "\xDA", Ucirc: "\xDB", Ugrave: "\xD9", Uuml: "\xDC", Yacute: "\xDD", aacute: "\xE1", acirc: "\xE2", acute: "\xB4", aelig: "\xE6", agrave: "\xE0", amp: "&", aring: "\xE5", atilde: "\xE3", auml: "\xE4", brvbar: "\xA6", ccedil: "\xE7", cedil: "\xB8", cent: "\xA2", copy: "\xA9", curren: "\xA4", deg: "\xB0", divide: "\xF7", eacute: "\xE9", ecirc: "\xEA", egrave: "\xE8", eth: "\xF0", euml: "\xEB", frac12: "\xBD", frac14: "\xBC", frac34: "\xBE", gt: ">", iacute: "\xED", icirc: "\xEE", iexcl: "\xA1", igrave: "\xEC", iquest: "\xBF", iuml: "\xEF", laquo: "\xAB", lt: "<", macr: "\xAF", micro: "\xB5", middot: "\xB7", nbsp: "\xA0", not: "\xAC", ntilde: "\xF1", oacute: "\xF3", ocirc: "\xF4", ograve: "\xF2", ordf: "\xAA", ordm: "\xBA", oslash: "\xF8", otilde: "\xF5", ouml: "\xF6", para: "\xB6", plusmn: "\xB1", pound: "\xA3", quot: '"', raquo: "\xBB", reg: "\xAE", sect: "\xA7", shy: "\xAD", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", szlig: "\xDF", thorn: "\xFE", times: "\xD7", uacute: "\xFA", ucirc: "\xFB", ugrave: "\xF9", uml: "\xA8", uuml: "\xFC", yacute: "\xFD", yen: "\xA5", yuml: "\xFF" };
} });
var require_character_reference_invalid = __commonJS({ "../../node_modules/character-reference-invalid/index.json"(exports, module) {
  module.exports = { "0": "\uFFFD", "128": "\u20AC", "130": "\u201A", "131": "\u0192", "132": "\u201E", "133": "\u2026", "134": "\u2020", "135": "\u2021", "136": "\u02C6", "137": "\u2030", "138": "\u0160", "139": "\u2039", "140": "\u0152", "142": "\u017D", "145": "\u2018", "146": "\u2019", "147": "\u201C", "148": "\u201D", "149": "\u2022", "150": "\u2013", "151": "\u2014", "152": "\u02DC", "153": "\u2122", "154": "\u0161", "155": "\u203A", "156": "\u0153", "158": "\u017E", "159": "\u0178" };
} });
var require_is_decimal = __commonJS({ "../../node_modules/is-decimal/index.js"(exports, module) {
  module.exports = decimal;
  function decimal(character2) {
    var code = typeof character2 == "string" ? character2.charCodeAt(0) : character2;
    return code >= 48 && code <= 57;
  }
} });
var require_is_hexadecimal = __commonJS({ "../../node_modules/is-hexadecimal/index.js"(exports, module) {
  module.exports = hexadecimal;
  function hexadecimal(character2) {
    var code = typeof character2 == "string" ? character2.charCodeAt(0) : character2;
    return code >= 97 && code <= 102 || code >= 65 && code <= 70 || code >= 48 && code <= 57;
  }
} });
var require_is_alphabetical = __commonJS({ "../../node_modules/is-alphabetical/index.js"(exports, module) {
  module.exports = alphabetical;
  function alphabetical(character2) {
    var code = typeof character2 == "string" ? character2.charCodeAt(0) : character2;
    return code >= 97 && code <= 122 || code >= 65 && code <= 90;
  }
} });
var require_is_alphanumerical = __commonJS({ "../../node_modules/is-alphanumerical/index.js"(exports, module) {
  var alphabetical = require_is_alphabetical(), decimal = require_is_decimal();
  module.exports = alphanumerical;
  function alphanumerical(character2) {
    return alphabetical(character2) || decimal(character2);
  }
} });
var require_character_entities = __commonJS({ "../../node_modules/character-entities/index.json"(exports, module) {
  module.exports = { AEli: "\xC6", AElig: "\xC6", AM: "&", AMP: "&", Aacut: "\xC1", Aacute: "\xC1", Abreve: "\u0102", Acir: "\xC2", Acirc: "\xC2", Acy: "\u0410", Afr: "\u{1D504}", Agrav: "\xC0", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\u{1D538}", ApplyFunction: "\u2061", Arin: "\xC5", Aring: "\xC5", Ascr: "\u{1D49C}", Assign: "\u2254", Atild: "\xC3", Atilde: "\xC3", Aum: "\xC4", Auml: "\xC4", Backslash: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", Bcy: "\u0411", Because: "\u2235", Bernoullis: "\u212C", Beta: "\u0392", Bfr: "\u{1D505}", Bopf: "\u{1D539}", Breve: "\u02D8", Bscr: "\u212C", Bumpeq: "\u224E", CHcy: "\u0427", COP: "\xA9", COPY: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", Cayleys: "\u212D", Ccaron: "\u010C", Ccedi: "\xC7", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", CenterDot: "\xB7", Cfr: "\u212D", Chi: "\u03A7", CircleDot: "\u2299", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", Colon: "\u2237", Colone: "\u2A74", Congruent: "\u2261", Conint: "\u222F", ContourIntegral: "\u222E", Copf: "\u2102", Coproduct: "\u2210", CounterClockwiseContourIntegral: "\u2233", Cross: "\u2A2F", Cscr: "\u{1D49E}", Cup: "\u22D3", CupCap: "\u224D", DD: "\u2145", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", Delta: "\u0394", Dfr: "\u{1D507}", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", Diamond: "\u22C4", DifferentialD: "\u2146", Dopf: "\u{1D53B}", Dot: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", DownTeeArrow: "\u21A7", Downarrow: "\u21D3", Dscr: "\u{1D49F}", Dstrok: "\u0110", ENG: "\u014A", ET: "\xD0", ETH: "\xD0", Eacut: "\xC9", Eacute: "\xC9", Ecaron: "\u011A", Ecir: "\xCA", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\u{1D508}", Egrav: "\xC8", Egrave: "\xC8", Element: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\u{1D53C}", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", Equilibrium: "\u21CC", Escr: "\u2130", Esim: "\u2A73", Eta: "\u0397", Eum: "\xCB", Euml: "\xCB", Exists: "\u2203", ExponentialE: "\u2147", Fcy: "\u0424", Ffr: "\u{1D509}", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", Fopf: "\u{1D53D}", ForAll: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", G: ">", GT: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\u{1D50A}", Gg: "\u22D9", Gopf: "\u{1D53E}", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", Gt: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", HilbertSpace: "\u210B", Hopf: "\u210D", HorizontalLine: "\u2500", Hscr: "\u210B", Hstrok: "\u0126", HumpDownHump: "\u224E", HumpEqual: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacut: "\xCD", Iacute: "\xCD", Icir: "\xCE", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Igrav: "\xCC", Igrave: "\xCC", Im: "\u2111", Imacr: "\u012A", ImaginaryI: "\u2148", Implies: "\u21D2", Int: "\u222C", Integral: "\u222B", Intersection: "\u22C2", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", Iogon: "\u012E", Iopf: "\u{1D540}", Iota: "\u0399", Iscr: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Ium: "\xCF", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\u{1D50D}", Jopf: "\u{1D541}", Jscr: "\u{1D4A5}", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\u{1D50E}", Kopf: "\u{1D542}", Kscr: "\u{1D4A6}", LJcy: "\u0409", L: "<", LT: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Larr: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", LeftArrow: "\u2190", LeftArrowBar: "\u21E4", LeftArrowRightArrow: "\u21C6", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", LeftRightArrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", LeftTeeArrow: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", LeftVectorBar: "\u2952", Leftarrow: "\u21D0", Leftrightarrow: "\u21D4", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", Lfr: "\u{1D50F}", Ll: "\u22D8", Lleftarrow: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", LongLeftRightArrow: "\u27F7", LongRightArrow: "\u27F6", Longleftarrow: "\u27F8", Longleftrightarrow: "\u27FA", Longrightarrow: "\u27F9", Lopf: "\u{1D543}", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", Lscr: "\u2112", Lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", MinusPlus: "\u2213", Mopf: "\u{1D544}", Mscr: "\u2133", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: `
`, Nfr: "\u{1D511}", NoBreak: "\u2060", NonBreakingSpace: "\xA0", Nopf: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangle: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", Nscr: "\u{1D4A9}", Ntild: "\xD1", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacut: "\xD3", Oacute: "\xD3", Ocir: "\xD4", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\u{1D512}", Ograv: "\xD2", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", Omicron: "\u039F", Oopf: "\u{1D546}", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", Or: "\u2A54", Oscr: "\u{1D4AA}", Oslas: "\xD8", Oslash: "\xD8", Otild: "\xD5", Otilde: "\xD5", Otimes: "\u2A37", Oum: "\xD6", Ouml: "\xD6", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", Pcy: "\u041F", Pfr: "\u{1D513}", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", Poincareplane: "\u210C", Popf: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", Prime: "\u2033", Product: "\u220F", Proportion: "\u2237", Proportional: "\u221D", Pscr: "\u{1D4AB}", Psi: "\u03A8", QUO: '"', QUOT: '"', Qfr: "\u{1D514}", Qopf: "\u211A", Qscr: "\u{1D4AC}", RBarr: "\u2910", RE: "\xAE", REG: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", Rfr: "\u211C", Rho: "\u03A1", RightAngleBracket: "\u27E9", RightArrow: "\u2192", RightArrowBar: "\u21E5", RightArrowLeftArrow: "\u21C4", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", RightTee: "\u22A2", RightTeeArrow: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", RightVectorBar: "\u2953", Rightarrow: "\u21D2", Ropf: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", Rscr: "\u211B", Rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\u{1D516}", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", Sopf: "\u{1D54A}", Sqrt: "\u221A", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", Sscr: "\u{1D4AE}", Star: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", SuchThat: "\u220B", Sum: "\u2211", Sup: "\u22D1", Superset: "\u2283", SupersetEqual: "\u2287", Supset: "\u22D1", THOR: "\xDE", THORN: "\xDE", TRADE: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "	", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\u{1D517}", Therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", Topf: "\u{1D54B}", TripleDot: "\u20DB", Tscr: "\u{1D4AF}", Tstrok: "\u0166", Uacut: "\xDA", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucir: "\xDB", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\u{1D518}", Ugrav: "\xD9", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", Uopf: "\u{1D54C}", UpArrow: "\u2191", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", UpDownArrow: "\u2195", UpEquilibrium: "\u296E", UpTee: "\u22A5", UpTeeArrow: "\u21A5", Uparrow: "\u21D1", Updownarrow: "\u21D5", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", Upsi: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\u{1D4B0}", Utilde: "\u0168", Uum: "\xDC", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", Vopf: "\u{1D54D}", Vscr: "\u{1D4B1}", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", Wfr: "\u{1D51A}", Wopf: "\u{1D54E}", Wscr: "\u{1D4B2}", Xfr: "\u{1D51B}", Xi: "\u039E", Xopf: "\u{1D54F}", Xscr: "\u{1D4B3}", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacut: "\xDD", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\u{1D51C}", Yopf: "\u{1D550}", Yscr: "\u{1D4B4}", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", ZeroWidthSpace: "\u200B", Zeta: "\u0396", Zfr: "\u2128", Zopf: "\u2124", Zscr: "\u{1D4B5}", aacut: "\xE1", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acir: "\xE2", acirc: "\xE2", acut: "\xB4", acute: "\xB4", acy: "\u0430", aeli: "\xE6", aelig: "\xE6", af: "\u2061", afr: "\u{1D51E}", agrav: "\xE0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", am: "&", amp: "&", and: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsd: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", aogon: "\u0105", aopf: "\u{1D552}", ap: "\u2248", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", apid: "\u224B", apos: "'", approx: "\u2248", approxeq: "\u224A", arin: "\xE5", aring: "\xE5", ascr: "\u{1D4B6}", ast: "*", asymp: "\u2248", asympeq: "\u224D", atild: "\xE3", atilde: "\xE3", aum: "\xE4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", beta: "\u03B2", beth: "\u2136", between: "\u226C", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxh: "\u2500", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", bprime: "\u2035", breve: "\u02D8", brvba: "\xA6", brvbar: "\xA6", bscr: "\u{1D4B7}", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", bumpeq: "\u224F", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", ccaps: "\u2A4D", ccaron: "\u010D", ccedi: "\xE7", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cedi: "\xB8", cedil: "\xB8", cemptyv: "\u29B2", cen: "\xA2", cent: "\xA2", centerdot: "\xB7", cfr: "\u{1D520}", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledR: "\xAE", circledS: "\u24C8", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", conint: "\u222E", copf: "\u{1D554}", coprod: "\u2210", cop: "\xA9", copy: "\xA9", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curre: "\xA4", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dArr: "\u21D3", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", darr: "\u2193", dash: "\u2010", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", dcaron: "\u010F", dcy: "\u0434", dd: "\u2146", ddagger: "\u2021", ddarr: "\u21CA", ddotseq: "\u2A77", de: "\xB0", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\u{1D521}", dharl: "\u21C3", dharr: "\u21C2", diam: "\u22C4", diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divid: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\u{1D555}", dot: "\u02D9", doteq: "\u2250", doteqdot: "\u2251", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", downarrow: "\u2193", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", dscr: "\u{1D4B9}", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eDDot: "\u2A77", eDot: "\u2251", eacut: "\xE9", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\xEA", ecirc: "\xEA", ecolon: "\u2255", ecy: "\u044D", edot: "\u0117", ee: "\u2147", efDot: "\u2252", efr: "\u{1D522}", eg: "\u2A9A", egrav: "\xE8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", equals: "=", equest: "\u225F", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", erarr: "\u2971", escr: "\u212F", esdot: "\u2250", esim: "\u2242", eta: "\u03B7", et: "\xF0", eth: "\xF0", eum: "\xEB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", expectation: "\u2130", exponentiale: "\u2147", fallingdotseq: "\u2252", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\u{1D523}", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\u{1D557}", forall: "\u2200", fork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac1: "\xBC", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac3: "\xBE", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", gE: "\u2267", gEl: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gammad: "\u03DD", gap: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", ge: "\u2265", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", ges: "\u2A7E", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\u{1D524}", gg: "\u226B", ggg: "\u22D9", gimel: "\u2137", gjcy: "\u0453", gl: "\u2277", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", gopf: "\u{1D558}", grave: "`", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", g: ">", gt: ">", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hArr: "\u21D4", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", hardcy: "\u044A", harr: "\u2194", harrcir: "\u2948", harrw: "\u21AD", hbar: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", horbar: "\u2015", hscr: "\u{1D4BD}", hslash: "\u210F", hstrok: "\u0127", hybull: "\u2043", hyphen: "\u2010", iacut: "\xED", iacute: "\xED", ic: "\u2063", icir: "\xEE", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexc: "\xA1", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", igrav: "\xEC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", image: "\u2111", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", imof: "\u22B7", imped: "\u01B5", in: "\u2208", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", int: "\u222B", intcal: "\u22BA", integers: "\u2124", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\u{1D55A}", iota: "\u03B9", iprod: "\u2A3C", iques: "\xBF", iquest: "\xBF", iscr: "\u{1D4BE}", isin: "\u2208", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", itilde: "\u0129", iukcy: "\u0456", ium: "\xEF", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\u{1D527}", jmath: "\u0237", jopf: "\u{1D55B}", jscr: "\u{1D4BF}", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\u{1D528}", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\u{1D55C}", kscr: "\u{1D4C0}", lAarr: "\u21DA", lArr: "\u21D0", lAtail: "\u291B", lBarr: "\u290E", lE: "\u2266", lEg: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", lambda: "\u03BB", lang: "\u27E8", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", laqu: "\xAB", laquo: "\xAB", larr: "\u2190", larrb: "\u21E4", larrbfs: "\u291F", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lceil: "\u2308", lcub: "{", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leftarrow: "\u2190", leftarrowtail: "\u21A2", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", leftthreetimes: "\u22CB", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", les: "\u2A7D", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", lessgtr: "\u2276", lesssim: "\u2272", lfisht: "\u297C", lfloor: "\u230A", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", ll: "\u226A", llarr: "\u21C7", llcorner: "\u231E", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", longleftrightarrow: "\u27F7", longmapsto: "\u27FC", longrightarrow: "\u27F6", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", lstrok: "\u0142", l: "<", lt: "<", ltcc: "\u2AA6", ltcir: "\u2A79", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", mac: "\xAF", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", measuredangle: "\u2221", mfr: "\u{1D52A}", mho: "\u2127", micr: "\xB5", micro: "\xB5", mid: "\u2223", midast: "*", midcir: "\u2AF0", middo: "\xB7", middot: "\xB7", minus: "\u2212", minusb: "\u229F", minusd: "\u2238", minusdu: "\u2A2A", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", mstpos: "\u223E", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nGtv: "\u226B\u0338", nLeftarrow: "\u21CD", nLeftrightarrow: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nLtv: "\u226A\u0338", nRightarrow: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nabla: "\u2207", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natur: "\u266E", natural: "\u266E", naturals: "\u2115", nbs: "\xA0", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", ne: "\u2260", neArr: "\u21D7", nearhk: "\u2924", nearr: "\u2197", nearrow: "\u2197", nedot: "\u2250\u0338", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", nexist: "\u2204", nexists: "\u2204", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", ngsim: "\u2275", ngt: "\u226F", ngtr: "\u226F", nhArr: "\u21CE", nharr: "\u21AE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", njcy: "\u045A", nlArr: "\u21CD", nlE: "\u2266\u0338", nlarr: "\u219A", nldr: "\u2025", nle: "\u2270", nleftarrow: "\u219A", nleftrightarrow: "\u21AE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nlsim: "\u2274", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nmid: "\u2224", nopf: "\u{1D55F}", no: "\xAC", not: "\xAC", notin: "\u2209", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", npar: "\u2226", nparallel: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", npre: "\u2AAF\u0338", nprec: "\u2280", npreceq: "\u2AAF\u0338", nrArr: "\u21CF", nrarr: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", ntild: "\xF1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwarr: "\u2196", nwarrow: "\u2196", nwnear: "\u2927", oS: "\u24C8", oacut: "\xF3", oacute: "\xF3", oast: "\u229B", ocir: "\xF4", ocirc: "\xF4", ocy: "\u043E", odash: "\u229D", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\u{1D52C}", ogon: "\u02DB", ograv: "\xF2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", oopf: "\u{1D560}", opar: "\u29B7", operp: "\u29B9", oplus: "\u2295", or: "\u2228", orarr: "\u21BB", ord: "\xBA", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oscr: "\u2134", oslas: "\xF8", oslash: "\xF8", osol: "\u2298", otild: "\xF5", otilde: "\xF5", otimes: "\u2297", otimesas: "\u2A36", oum: "\xF6", ouml: "\xF6", ovbar: "\u233D", par: "\xB6", para: "\xB6", parallel: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", pfr: "\u{1D52D}", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plus: "+", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", plusm: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", pointint: "\u2A15", popf: "\u{1D561}", poun: "\xA3", pound: "\xA3", pr: "\u227A", prE: "\u2AB3", prap: "\u2AB7", prcue: "\u227C", pre: "\u2AAF", prec: "\u227A", precapprox: "\u2AB7", preccurlyeq: "\u227C", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", precsim: "\u227E", prime: "\u2032", primes: "\u2119", prnE: "\u2AB5", prnap: "\u2AB9", prnsim: "\u22E8", prod: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", pscr: "\u{1D4C5}", psi: "\u03C8", puncsp: "\u2008", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", qprime: "\u2057", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quo: '"', quot: '"', rAarr: "\u21DB", rArr: "\u21D2", rAtail: "\u291C", rBarr: "\u290F", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raqu: "\xBB", raquo: "\xBB", rarr: "\u2192", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rceil: "\u2309", rcub: "}", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", rect: "\u25AD", re: "\xAE", reg: "\xAE", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", rightarrow: "\u2192", rightarrowtail: "\u21A3", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", rightthreetimes: "\u22CC", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", rsaquo: "\u203A", rscr: "\u{1D4C7}", rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", sbquo: "\u201A", sc: "\u227B", scE: "\u2AB4", scap: "\u2AB8", scaron: "\u0161", sccue: "\u227D", sce: "\u2AB0", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", scnap: "\u2ABA", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", scy: "\u0441", sdot: "\u22C5", sdotb: "\u22A1", sdote: "\u2A66", seArr: "\u21D8", searhk: "\u2925", searr: "\u2198", searrow: "\u2198", sec: "\xA7", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shortmid: "\u2223", shortparallel: "\u2225", sh: "\xAD", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", squ: "\u25A1", square: "\u25A1", squarf: "\u25AA", squf: "\u25AA", srarr: "\u2192", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", subE: "\u2AC5", subdot: "\u2ABD", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", subseteq: "\u2286", subseteqq: "\u2AC5", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succ: "\u227B", succapprox: "\u2AB8", succcurlyeq: "\u227D", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", sum: "\u2211", sung: "\u266A", sup: "\u2283", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supE: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supe: "\u2287", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swarhk: "\u2926", swarr: "\u2199", swarrow: "\u2199", swnwar: "\u292A", szli: "\xDF", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tbrk: "\u23B4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", thor: "\xFE", thorn: "\xFE", tilde: "\u02DC", time: "\xD7", times: "\xD7", timesb: "\u22A0", timesbar: "\u2A31", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", top: "\u22A4", topbot: "\u2336", topcir: "\u2AF1", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\u{1D4C9}", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", uArr: "\u21D1", uHar: "\u2963", uacut: "\xFA", uacute: "\xFA", uarr: "\u2191", ubrcy: "\u045E", ubreve: "\u016D", ucir: "\xFB", ucirc: "\xFB", ucy: "\u0443", udarr: "\u21C5", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", ufr: "\u{1D532}", ugrav: "\xF9", ugrave: "\xF9", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", um: "\xA8", uml: "\xA8", uogon: "\u0173", uopf: "\u{1D566}", uparrow: "\u2191", updownarrow: "\u2195", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", upsi: "\u03C5", upsih: "\u03D2", upsilon: "\u03C5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\u{1D4CA}", utdot: "\u22F0", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", uum: "\xFC", uuml: "\xFC", uwangle: "\u29A7", vArr: "\u21D5", vBar: "\u2AE8", vBarv: "\u2AE9", vDash: "\u22A8", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vcy: "\u0432", vdash: "\u22A2", vee: "\u2228", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", vert: "|", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", wedgeq: "\u2259", weierp: "\u2118", wfr: "\u{1D534}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", xfr: "\u{1D535}", xhArr: "\u27FA", xharr: "\u27F7", xi: "\u03BE", xlArr: "\u27F8", xlarr: "\u27F5", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrArr: "\u27F9", xrarr: "\u27F6", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", yacut: "\xFD", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", ye: "\xA5", yen: "\xA5", yfr: "\u{1D536}", yicy: "\u0457", yopf: "\u{1D56A}", yscr: "\u{1D4CE}", yucy: "\u044E", yum: "\xFF", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeetrf: "\u2128", zeta: "\u03B6", zfr: "\u{1D537}", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
} });
var require_decode_entity = __commonJS({ "../../node_modules/parse-entities/decode-entity.js"(exports, module) {
  var characterEntities = require_character_entities();
  module.exports = decodeEntity;
  var own = {}.hasOwnProperty;
  function decodeEntity(characters2) {
    return own.call(characterEntities, characters2) ? characterEntities[characters2] : false;
  }
} });
var require_parse_entities = __commonJS({ "../../node_modules/parse-entities/index.js"(exports, module) {
  var legacy = require_character_entities_legacy(), invalid = require_character_reference_invalid(), decimal = require_is_decimal(), hexadecimal = require_is_hexadecimal(), alphanumerical = require_is_alphanumerical(), decodeEntity = require_decode_entity();
  module.exports = parseEntities;
  var own = {}.hasOwnProperty, fromCharCode = String.fromCharCode, noop2 = Function.prototype, defaults = { warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: false, nonTerminated: true }, tab = 9, lineFeed = 10, formFeed = 12, space = 32, ampersand = 38, semicolon = 59, lessThan = 60, equalsTo = 61, numberSign = 35, uppercaseX = 88, lowercaseX = 120, replacementCharacter = 65533, name = "named", hexa = "hexadecimal", deci = "decimal", bases = {};
  bases[hexa] = 16;
  bases[deci] = 10;
  var tests = {};
  tests[name] = alphanumerical;
  tests[deci] = decimal;
  tests[hexa] = hexadecimal;
  var namedNotTerminated = 1, numericNotTerminated = 2, namedEmpty = 3, numericEmpty = 4, namedUnknown = 5, numericDisallowed = 6, numericProhibited = 7, messages = {};
  messages[namedNotTerminated] = "Named character references must be terminated by a semicolon";
  messages[numericNotTerminated] = "Numeric character references must be terminated by a semicolon";
  messages[namedEmpty] = "Named character references cannot be empty";
  messages[numericEmpty] = "Numeric character references cannot be empty";
  messages[namedUnknown] = "Named character references must be known";
  messages[numericDisallowed] = "Numeric character references cannot be disallowed";
  messages[numericProhibited] = "Numeric character references cannot be outside the permissible Unicode range";
  function parseEntities(value2, options) {
    var settings = {}, option, key;
    options || (options = {});
    for (key in defaults)
      option = options[key], settings[key] = option != null ? option : defaults[key];
    return (settings.position.indent || settings.position.start) && (settings.indent = settings.position.indent || [], settings.position = settings.position.start), parse4(value2, settings);
  }
  function parse4(value2, settings) {
    var additional = settings.additional, nonTerminated = settings.nonTerminated, handleText = settings.text, handleReference = settings.reference, handleWarning = settings.warning, textContext = settings.textContext, referenceContext = settings.referenceContext, warningContext = settings.warningContext, pos = settings.position, indent = settings.indent || [], length2 = value2.length, index3 = 0, lines = -1, column2 = pos.column || 1, line2 = pos.line || 1, queue = "", result = [], entityCharacters, namedEntity, terminated, characters2, character2, reference2, following, warning, reason, output, entity, begin, start2, type, test, prev2, next2, diff, end2;
    for (typeof additional == "string" && (additional = additional.charCodeAt(0)), prev2 = now(), warning = handleWarning ? parseError : noop2, index3--, length2++; ++index3 < length2; )
      if (character2 === lineFeed && (column2 = indent[lines] || 1), character2 = value2.charCodeAt(index3), character2 === ampersand) {
        if (following = value2.charCodeAt(index3 + 1), following === tab || following === lineFeed || following === formFeed || following === space || following === ampersand || following === lessThan || following !== following || additional && following === additional) {
          queue += fromCharCode(character2), column2++;
          continue;
        }
        for (start2 = index3 + 1, begin = start2, end2 = start2, following === numberSign ? (end2 = ++begin, following = value2.charCodeAt(end2), following === uppercaseX || following === lowercaseX ? (type = hexa, end2 = ++begin) : type = deci) : type = name, entityCharacters = "", entity = "", characters2 = "", test = tests[type], end2--; ++end2 < length2 && (following = value2.charCodeAt(end2), !!test(following)); )
          characters2 += fromCharCode(following), type === name && own.call(legacy, characters2) && (entityCharacters = characters2, entity = legacy[characters2]);
        terminated = value2.charCodeAt(end2) === semicolon, terminated && (end2++, namedEntity = type === name ? decodeEntity(characters2) : false, namedEntity && (entityCharacters = characters2, entity = namedEntity)), diff = 1 + end2 - start2, !terminated && !nonTerminated || (characters2 ? type === name ? (terminated && !entity ? warning(namedUnknown, 1) : (entityCharacters !== characters2 && (end2 = begin + entityCharacters.length, diff = 1 + end2 - begin, terminated = false), terminated || (reason = entityCharacters ? namedNotTerminated : namedEmpty, settings.attribute ? (following = value2.charCodeAt(end2), following === equalsTo ? (warning(reason, diff), entity = null) : alphanumerical(following) ? entity = null : warning(reason, diff)) : warning(reason, diff))), reference2 = entity) : (terminated || warning(numericNotTerminated, diff), reference2 = parseInt(characters2, bases[type]), prohibited(reference2) ? (warning(numericProhibited, diff), reference2 = fromCharCode(replacementCharacter)) : reference2 in invalid ? (warning(numericDisallowed, diff), reference2 = invalid[reference2]) : (output = "", disallowed(reference2) && warning(numericDisallowed, diff), reference2 > 65535 && (reference2 -= 65536, output += fromCharCode(reference2 >>> 10 | 55296), reference2 = 56320 | reference2 & 1023), reference2 = output + fromCharCode(reference2))) : type !== name && warning(numericEmpty, diff)), reference2 ? (flush(), prev2 = now(), index3 = end2 - 1, column2 += end2 - start2 + 1, result.push(reference2), next2 = now(), next2.offset++, handleReference && handleReference.call(referenceContext, reference2, { start: prev2, end: next2 }, value2.slice(start2 - 1, end2)), prev2 = next2) : (characters2 = value2.slice(start2 - 1, end2), queue += characters2, column2 += characters2.length, index3 = end2 - 1);
      } else
        character2 === 10 && (line2++, lines++, column2 = 0), character2 === character2 ? (queue += fromCharCode(character2), column2++) : flush();
    return result.join("");
    function now() {
      return { line: line2, column: column2, offset: index3 + (pos.offset || 0) };
    }
    function parseError(code, offset2) {
      var position2 = now();
      position2.column += offset2, position2.offset += offset2, handleWarning.call(warningContext, messages[code], position2, code);
    }
    function flush() {
      queue && (result.push(queue), handleText && handleText.call(textContext, queue, { start: prev2, end: now() }), queue = "");
    }
  }
  function prohibited(code) {
    return code >= 55296 && code <= 57343 || code > 1114111;
  }
  function disallowed(code) {
    return code >= 1 && code <= 8 || code === 11 || code >= 13 && code <= 31 || code >= 127 && code <= 159 || code >= 64976 && code <= 65007 || (code & 65535) === 65535 || (code & 65535) === 65534;
  }
} });
var require_prism_core = __commonJS({ "../../node_modules/refractor/node_modules/prismjs/components/prism-core.js"(exports, module) {
  var _self = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  var Prism = function(_self2) {
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, uniqueId = 0, plainTextGrammar = {}, _2 = { manual: _self2.Prism && _self2.Prism.manual, disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler, util: { encode: function encode(tokens) {
      return tokens instanceof Token ? new Token(tokens.type, encode(tokens.content), tokens.alias) : Array.isArray(tokens) ? tokens.map(encode) : tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(o2) {
      return Object.prototype.toString.call(o2).slice(8, -1);
    }, objId: function(obj) {
      return obj.__id || Object.defineProperty(obj, "__id", { value: ++uniqueId }), obj.__id;
    }, clone: function deepClone(o2, visited) {
      visited = visited || {};
      var clone, id;
      switch (_2.util.type(o2)) {
        case "Object":
          if (id = _2.util.objId(o2), visited[id])
            return visited[id];
          clone = {}, visited[id] = clone;
          for (var key in o2)
            o2.hasOwnProperty(key) && (clone[key] = deepClone(o2[key], visited));
          return clone;
        case "Array":
          return id = _2.util.objId(o2), visited[id] ? visited[id] : (clone = [], visited[id] = clone, o2.forEach(function(v2, i2) {
            clone[i2] = deepClone(v2, visited);
          }), clone);
        default:
          return o2;
      }
    }, getLanguage: function(element) {
      for (; element; ) {
        var m2 = lang.exec(element.className);
        if (m2)
          return m2[1].toLowerCase();
        element = element.parentElement;
      }
      return "none";
    }, setLanguage: function(element, language) {
      element.className = element.className.replace(RegExp(lang, "gi"), ""), element.classList.add("language-" + language);
    }, currentScript: function() {
      if (typeof document > "u")
        return null;
      if ("currentScript" in document && 1 < 2)
        return document.currentScript;
      try {
        throw new Error();
      } catch (err) {
        var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
        if (src) {
          var scripts = document.getElementsByTagName("script");
          for (var i2 in scripts)
            if (scripts[i2].src == src)
              return scripts[i2];
        }
        return null;
      }
    }, isActive: function(element, className, defaultActivation) {
      for (var no = "no-" + className; element; ) {
        var classList = element.classList;
        if (classList.contains(className))
          return true;
        if (classList.contains(no))
          return false;
        element = element.parentElement;
      }
      return !!defaultActivation;
    } }, languages: { plain: plainTextGrammar, plaintext: plainTextGrammar, text: plainTextGrammar, txt: plainTextGrammar, extend: function(id, redef) {
      var lang2 = _2.util.clone(_2.languages[id]);
      for (var key in redef)
        lang2[key] = redef[key];
      return lang2;
    }, insertBefore: function(inside, before, insert, root) {
      root = root || _2.languages;
      var grammar = root[inside], ret = {};
      for (var token2 in grammar)
        if (grammar.hasOwnProperty(token2)) {
          if (token2 == before)
            for (var newToken in insert)
              insert.hasOwnProperty(newToken) && (ret[newToken] = insert[newToken]);
          insert.hasOwnProperty(token2) || (ret[token2] = grammar[token2]);
        }
      var old = root[inside];
      return root[inside] = ret, _2.languages.DFS(_2.languages, function(key, value2) {
        value2 === old && key != inside && (this[key] = ret);
      }), ret;
    }, DFS: function DFS(o2, callback, type, visited) {
      visited = visited || {};
      var objId = _2.util.objId;
      for (var i2 in o2)
        if (o2.hasOwnProperty(i2)) {
          callback.call(o2, i2, o2[i2], type || i2);
          var property = o2[i2], propertyType = _2.util.type(property);
          propertyType === "Object" && !visited[objId(property)] ? (visited[objId(property)] = true, DFS(property, callback, null, visited)) : propertyType === "Array" && !visited[objId(property)] && (visited[objId(property)] = true, DFS(property, callback, i2, visited));
        }
    } }, plugins: {}, highlightAll: function(async, callback) {
      _2.highlightAllUnder(document, async, callback);
    }, highlightAllUnder: function(container, async, callback) {
      var env = { callback, container, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
      _2.hooks.run("before-highlightall", env), env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector)), _2.hooks.run("before-all-elements-highlight", env);
      for (var i2 = 0, element; element = env.elements[i2++]; )
        _2.highlightElement(element, async === true, env.callback);
    }, highlightElement: function(element, async, callback) {
      var language = _2.util.getLanguage(element), grammar = _2.languages[language];
      _2.util.setLanguage(element, language);
      var parent = element.parentElement;
      parent && parent.nodeName.toLowerCase() === "pre" && _2.util.setLanguage(parent, language);
      var code = element.textContent, env = { element, language, grammar, code };
      function insertHighlightedCode(highlightedCode) {
        env.highlightedCode = highlightedCode, _2.hooks.run("before-insert", env), env.element.innerHTML = env.highlightedCode, _2.hooks.run("after-highlight", env), _2.hooks.run("complete", env), callback && callback.call(env.element);
      }
      if (_2.hooks.run("before-sanity-check", env), parent = env.element.parentElement, parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex") && parent.setAttribute("tabindex", "0"), !env.code) {
        _2.hooks.run("complete", env), callback && callback.call(env.element);
        return;
      }
      if (_2.hooks.run("before-highlight", env), !env.grammar) {
        insertHighlightedCode(_2.util.encode(env.code));
        return;
      }
      if (async && _self2.Worker) {
        var worker = new Worker(_2.filename);
        worker.onmessage = function(evt) {
          insertHighlightedCode(evt.data);
        }, worker.postMessage(JSON.stringify({ language: env.language, code: env.code, immediateClose: true }));
      } else
        insertHighlightedCode(_2.highlight(env.code, env.grammar, env.language));
    }, highlight: function(text, grammar, language) {
      var env = { code: text, grammar, language };
      if (_2.hooks.run("before-tokenize", env), !env.grammar)
        throw new Error('The language "' + env.language + '" has no grammar.');
      return env.tokens = _2.tokenize(env.code, env.grammar), _2.hooks.run("after-tokenize", env), Token.stringify(_2.util.encode(env.tokens), env.language);
    }, tokenize: function(text, grammar) {
      var rest = grammar.rest;
      if (rest) {
        for (var token2 in rest)
          grammar[token2] = rest[token2];
        delete grammar.rest;
      }
      var tokenList = new LinkedList();
      return addAfter(tokenList, tokenList.head, text), matchGrammar(text, tokenList, grammar, tokenList.head, 0), toArray(tokenList);
    }, hooks: { all: {}, add: function(name, callback) {
      var hooks = _2.hooks.all;
      hooks[name] = hooks[name] || [], hooks[name].push(callback);
    }, run: function(name, env) {
      var callbacks = _2.hooks.all[name];
      if (!(!callbacks || !callbacks.length))
        for (var i2 = 0, callback; callback = callbacks[i2++]; )
          callback(env);
    } }, Token };
    _self2.Prism = _2;
    function Token(type, content, alias, matchedStr) {
      this.type = type, this.content = content, this.alias = alias, this.length = (matchedStr || "").length | 0;
    }
    Token.stringify = function stringify2(o2, language) {
      if (typeof o2 == "string")
        return o2;
      if (Array.isArray(o2)) {
        var s2 = "";
        return o2.forEach(function(e2) {
          s2 += stringify2(e2, language);
        }), s2;
      }
      var env = { type: o2.type, content: stringify2(o2.content, language), tag: "span", classes: ["token", o2.type], attributes: {}, language }, aliases = o2.alias;
      aliases && (Array.isArray(aliases) ? Array.prototype.push.apply(env.classes, aliases) : env.classes.push(aliases)), _2.hooks.run("wrap", env);
      var attributes = "";
      for (var name in env.attributes)
        attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
      return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
    };
    function matchPattern(pattern, pos, text, lookbehind) {
      pattern.lastIndex = pos;
      var match2 = pattern.exec(text);
      if (match2 && lookbehind && match2[1]) {
        var lookbehindLength = match2[1].length;
        match2.index += lookbehindLength, match2[0] = match2[0].slice(lookbehindLength);
      }
      return match2;
    }
    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
      for (var token2 in grammar)
        if (!(!grammar.hasOwnProperty(token2) || !grammar[token2])) {
          var patterns = grammar[token2];
          patterns = Array.isArray(patterns) ? patterns : [patterns];
          for (var j2 = 0; j2 < patterns.length; ++j2) {
            if (rematch && rematch.cause == token2 + "," + j2)
              return;
            var patternObj = patterns[j2], inside = patternObj.inside, lookbehind = !!patternObj.lookbehind, greedy = !!patternObj.greedy, alias = patternObj.alias;
            if (greedy && !patternObj.pattern.global) {
              var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
              patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
            }
            for (var pattern = patternObj.pattern || patternObj, currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail && !(rematch && pos >= rematch.reach); pos += currentNode.value.length, currentNode = currentNode.next) {
              var str2 = currentNode.value;
              if (tokenList.length > text.length)
                return;
              if (!(str2 instanceof Token)) {
                var removeCount = 1, match2;
                if (greedy) {
                  if (match2 = matchPattern(pattern, pos, text, lookbehind), !match2 || match2.index >= text.length)
                    break;
                  var from2 = match2.index, to = match2.index + match2[0].length, p2 = pos;
                  for (p2 += currentNode.value.length; from2 >= p2; )
                    currentNode = currentNode.next, p2 += currentNode.value.length;
                  if (p2 -= currentNode.value.length, pos = p2, currentNode.value instanceof Token)
                    continue;
                  for (var k2 = currentNode; k2 !== tokenList.tail && (p2 < to || typeof k2.value == "string"); k2 = k2.next)
                    removeCount++, p2 += k2.value.length;
                  removeCount--, str2 = text.slice(pos, p2), match2.index -= pos;
                } else if (match2 = matchPattern(pattern, 0, str2, lookbehind), !match2)
                  continue;
                var from2 = match2.index, matchStr = match2[0], before = str2.slice(0, from2), after = str2.slice(from2 + matchStr.length), reach = pos + str2.length;
                rematch && reach > rematch.reach && (rematch.reach = reach);
                var removeFrom = currentNode.prev;
                before && (removeFrom = addAfter(tokenList, removeFrom, before), pos += before.length), removeRange(tokenList, removeFrom, removeCount);
                var wrapped = new Token(token2, inside ? _2.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                if (currentNode = addAfter(tokenList, removeFrom, wrapped), after && addAfter(tokenList, currentNode, after), removeCount > 1) {
                  var nestedRematch = { cause: token2 + "," + j2, reach };
                  matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch), rematch && nestedRematch.reach > rematch.reach && (rematch.reach = nestedRematch.reach);
                }
              }
            }
          }
        }
    }
    function LinkedList() {
      var head = { value: null, prev: null, next: null }, tail = { value: null, prev: head, next: null };
      head.next = tail, this.head = head, this.tail = tail, this.length = 0;
    }
    function addAfter(list, node2, value2) {
      var next2 = node2.next, newNode = { value: value2, prev: node2, next: next2 };
      return node2.next = newNode, next2.prev = newNode, list.length++, newNode;
    }
    function removeRange(list, node2, count2) {
      for (var next2 = node2.next, i2 = 0; i2 < count2 && next2 !== list.tail; i2++)
        next2 = next2.next;
      node2.next = next2, next2.prev = node2, list.length -= i2;
    }
    function toArray(list) {
      for (var array2 = [], node2 = list.head.next; node2 !== list.tail; )
        array2.push(node2.value), node2 = node2.next;
      return array2;
    }
    if (!_self2.document)
      return _self2.addEventListener && (_2.disableWorkerMessageHandler || _self2.addEventListener("message", function(evt) {
        var message = JSON.parse(evt.data), lang2 = message.language, code = message.code, immediateClose = message.immediateClose;
        _self2.postMessage(_2.highlight(code, _2.languages[lang2], lang2)), immediateClose && _self2.close();
      }, false)), _2;
    var script = _2.util.currentScript();
    script && (_2.filename = script.src, script.hasAttribute("data-manual") && (_2.manual = true));
    function highlightAutomaticallyCallback() {
      _2.manual || _2.highlightAll();
    }
    if (!_2.manual) {
      var readyState = document.readyState;
      readyState === "loading" || readyState === "interactive" && script && script.defer ? document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback) : window.requestAnimationFrame ? window.requestAnimationFrame(highlightAutomaticallyCallback) : window.setTimeout(highlightAutomaticallyCallback, 16);
    }
    return _2;
  }(_self);
  typeof module < "u" && module.exports && (module.exports = Prism);
  typeof global < "u" && (global.Prism = Prism);
} });
var require_core = __commonJS({ "../../node_modules/refractor/core.js"(exports, module) {
  var ctx = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, restore = capture();
  ctx.Prism = { manual: true, disableWorkerMessageHandler: true };
  var h2 = require_hastscript(), decode = require_parse_entities(), Prism = require_prism_core(), markup = require_markup(), css2 = require_css(), clike = require_clike(), js = require_javascript();
  restore();
  var own = {}.hasOwnProperty;
  function Refractor() {
  }
  Refractor.prototype = Prism;
  var refract = new Refractor();
  module.exports = refract;
  refract.highlight = highlight;
  refract.register = register;
  refract.alias = alias;
  refract.registered = registered;
  refract.listLanguages = listLanguages;
  register(markup);
  register(css2);
  register(clike);
  register(js);
  refract.util.encode = encode;
  refract.Token.stringify = stringify2;
  function register(grammar) {
    if (typeof grammar != "function" || !grammar.displayName)
      throw new Error("Expected `function` for `grammar`, got `" + grammar + "`");
    refract.languages[grammar.displayName] === void 0 && grammar(refract);
  }
  function alias(name, alias2) {
    var languages = refract.languages, map = name, key, list, length2, index3;
    alias2 && (map = {}, map[name] = alias2);
    for (key in map)
      for (list = map[key], list = typeof list == "string" ? [list] : list, length2 = list.length, index3 = -1; ++index3 < length2; )
        languages[list[index3]] = languages[key];
  }
  function highlight(value2, name) {
    var sup = Prism.highlight, grammar;
    if (typeof value2 != "string")
      throw new Error("Expected `string` for `value`, got `" + value2 + "`");
    if (refract.util.type(name) === "Object")
      grammar = name, name = null;
    else {
      if (typeof name != "string")
        throw new Error("Expected `string` for `name`, got `" + name + "`");
      if (own.call(refract.languages, name))
        grammar = refract.languages[name];
      else
        throw new Error("Unknown language: `" + name + "` is not registered");
    }
    return sup.call(this, value2, grammar, name);
  }
  function registered(language) {
    if (typeof language != "string")
      throw new Error("Expected `string` for `language`, got `" + language + "`");
    return own.call(refract.languages, language);
  }
  function listLanguages() {
    var languages = refract.languages, list = [], language;
    for (language in languages)
      own.call(languages, language) && typeof languages[language] == "object" && list.push(language);
    return list;
  }
  function stringify2(value2, language, parent) {
    var env;
    return typeof value2 == "string" ? { type: "text", value: value2 } : refract.util.type(value2) === "Array" ? stringifyAll(value2, language) : (env = { type: value2.type, content: refract.Token.stringify(value2.content, language, parent), tag: "span", classes: ["token", value2.type], attributes: {}, language, parent }, value2.alias && (env.classes = env.classes.concat(value2.alias)), refract.hooks.run("wrap", env), h2(env.tag + "." + env.classes.join("."), attributes(env.attributes), env.content));
  }
  function stringifyAll(values, language) {
    for (var result = [], length2 = values.length, index3 = -1, value2; ++index3 < length2; )
      value2 = values[index3], value2 !== "" && value2 !== null && value2 !== void 0 && result.push(value2);
    for (index3 = -1, length2 = result.length; ++index3 < length2; )
      value2 = result[index3], result[index3] = refract.Token.stringify(value2, language, result);
    return result;
  }
  function encode(tokens) {
    return tokens;
  }
  function attributes(attrs) {
    var key;
    for (key in attrs)
      attrs[key] = decode(attrs[key]);
    return attrs;
  }
  function capture() {
    var defined = "Prism" in ctx, current = defined ? ctx.Prism : void 0;
    return restore2;
    function restore2() {
      defined ? ctx.Prism = current : delete ctx.Prism, defined = void 0, current = void 0;
    }
  }
} });
var require_bash = __commonJS({ "../../node_modules/refractor/lang/bash.js"(exports, module) {
  module.exports = bash;
  bash.displayName = "bash";
  bash.aliases = ["shell"];
  function bash(Prism) {
    (function(Prism2) {
      var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", commandAfterHeredoc = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: true, alias: "punctuation", inside: null }, insideString = { bash: commandAfterHeredoc, environment: { pattern: RegExp("\\$" + envVars), alias: "constant" }, variable: [{ pattern: /\$?\(\([\s\S]+?\)\)/, greedy: true, inside: { variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: true }, /^\$\(\(/], number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/, operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/, punctuation: /\(\(?|\)\)?|,|;/ } }, { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: true, inside: { variable: /^\$\(|^`|\)$|`$/ } }, { pattern: /\$\{[^}]+\}/, greedy: true, inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp("(\\{)" + envVars), lookbehind: true, alias: "constant" } } }, /\$(?:\w+|[#?*!@$])/], entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/ };
      Prism2.languages.bash = { shebang: { pattern: /^#!\s*\/.*/, alias: "important" }, comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: true }, "function-name": [{ pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: true, alias: "function" }, { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" }], "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: true }, "assign-left": { pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/, inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars), lookbehind: true, alias: "constant" } }, alias: "variable", lookbehind: true }, string: [{ pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: true, greedy: true, inside: insideString }, { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: true, greedy: true, inside: { bash: commandAfterHeredoc } }, { pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/, lookbehind: true, greedy: true, inside: insideString }, { pattern: /(^|[^$\\])'[^']*'/, lookbehind: true, greedy: true }, { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: true, inside: { entity: insideString.entity } }], environment: { pattern: RegExp("\\$?" + envVars), alias: "constant" }, variable: insideString.variable, function: { pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/, lookbehind: true }, keyword: { pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/, lookbehind: true }, builtin: { pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/, lookbehind: true, alias: "class-name" }, boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: true }, "file-descriptor": { pattern: /\B&\d\b/, alias: "important" }, operator: { pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/, inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } } }, punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/, number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: true } }, commandAfterHeredoc.inside = Prism2.languages.bash;
      for (var toBeCopied = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], inside = insideString.variable[1].inside, i2 = 0; i2 < toBeCopied.length; i2++)
        inside[toBeCopied[i2]] = Prism2.languages.bash[toBeCopied[i2]];
      Prism2.languages.shell = Prism2.languages.bash;
    })(Prism);
  }
} });
var require_js_extras = __commonJS({ "../../node_modules/refractor/lang/js-extras.js"(exports, module) {
  module.exports = jsExtras;
  jsExtras.displayName = "jsExtras";
  jsExtras.aliases = [];
  function jsExtras(Prism) {
    (function(Prism2) {
      Prism2.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + Prism2.languages.javascript["function-variable"].pattern.source), lookbehind: true, alias: ["function-variable", "method", "function", "property-access"] } }), Prism2.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + Prism2.languages.javascript.function.source), lookbehind: true, alias: ["function", "property-access"] } }), Prism2.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] });
      function withId(source, flags) {
        return RegExp(source.replace(/<ID>/g, function() {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
        }), flags);
      }
      Prism2.languages.insertBefore("javascript", "keyword", { imports: { pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source), lookbehind: true, inside: Prism2.languages.javascript }, exports: { pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source), lookbehind: true, inside: Prism2.languages.javascript } }), Prism2.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" }, { pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/, alias: "control-flow" }, { pattern: /\bnull\b/, alias: ["null", "nil"] }, { pattern: /\bundefined\b/, alias: "nil" }), Prism2.languages.insertBefore("javascript", "operator", { spread: { pattern: /\.{3}/, alias: "operator" }, arrow: { pattern: /=>/, alias: "operator" } }), Prism2.languages.insertBefore("javascript", "punctuation", { "property-access": { pattern: withId(/(\.\s*)#?<ID>/.source), lookbehind: true }, "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: true }, dom: { pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/, alias: "variable" }, console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" } });
      for (var maybeClassNameTokens = ["function", "function-variable", "method", "method-variable", "property-access"], i2 = 0; i2 < maybeClassNameTokens.length; i2++) {
        var token2 = maybeClassNameTokens[i2], value2 = Prism2.languages.javascript[token2];
        Prism2.util.type(value2) === "RegExp" && (value2 = Prism2.languages.javascript[token2] = { pattern: value2 });
        var inside = value2.inside || {};
        value2.inside = inside, inside["maybe-class-name"] = /^[A-Z][\s\S]*/;
      }
    })(Prism);
  }
} });
var require_json = __commonJS({ "../../node_modules/refractor/lang/json.js"(exports, module) {
  module.exports = json;
  json.displayName = "json";
  json.aliases = ["webmanifest"];
  function json(Prism) {
    Prism.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: true, greedy: true }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: true, greedy: true }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: true }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, Prism.languages.webmanifest = Prism.languages.json;
  }
} });
var require_graphql = __commonJS({ "../../node_modules/refractor/lang/graphql.js"(exports, module) {
  module.exports = graphql;
  graphql.displayName = "graphql";
  graphql.aliases = [];
  function graphql(Prism) {
    Prism.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: true, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: true, inside: Prism.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: true }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: true }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: true }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, Prism.hooks.add("after-tokenize", function(env) {
      if (env.language !== "graphql")
        return;
      var validTokens = env.tokens.filter(function(token2) {
        return typeof token2 != "string" && token2.type !== "comment" && token2.type !== "scalar";
      }), currentIndex = 0;
      function getToken(offset2) {
        return validTokens[currentIndex + offset2];
      }
      function isTokenType(types, offset2) {
        offset2 = offset2 || 0;
        for (var i22 = 0; i22 < types.length; i22++) {
          var token2 = getToken(i22 + offset2);
          if (!token2 || token2.type !== types[i22])
            return false;
        }
        return true;
      }
      function findClosingBracket(open, close) {
        for (var stackHeight = 1, i22 = currentIndex; i22 < validTokens.length; i22++) {
          var token2 = validTokens[i22], content = token2.content;
          if (token2.type === "punctuation" && typeof content == "string") {
            if (open.test(content))
              stackHeight++;
            else if (close.test(content) && (stackHeight--, stackHeight === 0))
              return i22;
          }
        }
        return -1;
      }
      function addAlias(token2, alias) {
        var aliases = token2.alias;
        aliases ? Array.isArray(aliases) || (token2.alias = aliases = [aliases]) : token2.alias = aliases = [], aliases.push(alias);
      }
      for (; currentIndex < validTokens.length; ) {
        var startToken = validTokens[currentIndex++];
        if (startToken.type === "keyword" && startToken.content === "mutation") {
          var inputVariables = [];
          if (isTokenType(["definition-mutation", "punctuation"]) && getToken(1).content === "(") {
            currentIndex += 2;
            var definitionEnd = findClosingBracket(/^\($/, /^\)$/);
            if (definitionEnd === -1)
              continue;
            for (; currentIndex < definitionEnd; currentIndex++) {
              var t = getToken(0);
              t.type === "variable" && (addAlias(t, "variable-input"), inputVariables.push(t.content));
            }
            currentIndex = definitionEnd + 1;
          }
          if (isTokenType(["punctuation", "property-query"]) && getToken(0).content === "{" && (currentIndex++, addAlias(getToken(0), "property-mutation"), inputVariables.length > 0)) {
            var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);
            if (mutationEnd === -1)
              continue;
            for (var i2 = currentIndex; i2 < mutationEnd; i2++) {
              var varToken = validTokens[i2];
              varToken.type === "variable" && inputVariables.indexOf(varToken.content) >= 0 && addAlias(varToken, "variable-input");
            }
          }
        }
      }
    });
  }
} });
const logger$1 = __STORYBOOK_MODULE_CLIENT_LOGGER__.logger;
var import_jsx = __toESM(require_jsx()), jsx_default = import_jsx.default;
var import_bash = __toESM(require_bash()), bash_default = import_bash.default;
var import_css = __toESM(require_css()), css_default = import_css.default;
var import_js_extras = __toESM(require_js_extras()), js_extras_default = import_js_extras.default;
var import_json = __toESM(require_json()), json_default = import_json.default;
var import_graphql = __toESM(require_graphql()), graphql_default = import_graphql.default;
var import_markup = __toESM(require_markup()), markup_default = import_markup.default;
var import_markdown = __toESM(require_markdown()), markdown_default = import_markdown.default;
var import_yaml = __toESM(require_yaml()), yaml_default = import_yaml.default;
var import_tsx = __toESM(require_tsx()), tsx_default = import_tsx.default;
var import_typescript = __toESM(require_typescript()), typescript_default = import_typescript.default;
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded), key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++)
      key = sourceSymbolKeys[i2], !(excluded.indexOf(key) >= 0) && Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
  }
  return target;
}
function _arrayLikeToArray(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o2, minLen) {
  if (o2) {
    if (typeof o2 == "string")
      return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor && (n2 = o2.constructor.name), n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o2, minLen);
  }
}
function _nonIterableSpread() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _typeof(obj) {
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value2) {
  return key = _toPropertyKey(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true }) : obj[key] = value2, obj;
}
function ownKeys(object2, enumerableOnly) {
  var keys2 = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function powerSetPermutations(arr) {
  var arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1)
    return arr;
  if (arrLength === 2)
    return [arr[0], arr[1], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0])];
  if (arrLength === 3)
    return [arr[0], arr[1], arr[2], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  if (arrLength >= 4)
    return [arr[0], arr[1], arr[2], arr[3], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3]), "".concat(arr[3], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
}
var classNameCombinations = {};
function getClassNameCombinations(classNames) {
  if (classNames.length === 0 || classNames.length === 1)
    return classNames;
  var key = classNames.join(".");
  return classNameCombinations[key] || (classNameCombinations[key] = powerSetPermutations(classNames)), classNameCombinations[key];
}
function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, stylesheet = arguments.length > 2 ? arguments[2] : void 0, nonTokenClassNames = classNames.filter(function(className) {
    return className !== "token";
  }), classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(function(styleObject, className) {
    return _objectSpread(_objectSpread({}, styleObject), stylesheet[className]);
  }, elementStyle);
}
function createClassNameString(classNames) {
  return classNames.join(" ");
}
function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function(children) {
    return childrenCount += 1, children.map(function(child, i2) {
      return createElement({ node: child, stylesheet, useInlineStyles, key: "code-segment-".concat(childrenCount, "-").concat(i2) });
    });
  };
}
function createElement(_ref) {
  var node2 = _ref.node, stylesheet = _ref.stylesheet, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, useInlineStyles = _ref.useInlineStyles, key = _ref.key, properties = node2.properties, type = node2.type, TagName = node2.tagName, value2 = node2.value;
  if (type === "text")
    return value2;
  if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles), props;
    if (!useInlineStyles)
      props = _objectSpread(_objectSpread({}, properties), {}, { className: createClassNameString(properties.className) });
    else {
      var allStylesheetSelectors = Object.keys(stylesheet).reduce(function(classes, selector) {
        return selector.split(".").forEach(function(className2) {
          classes.includes(className2) || classes.push(className2);
        }), classes;
      }, []), startingClassName = properties.className && properties.className.includes("token") ? ["token"] : [], className = properties.className && startingClassName.concat(properties.className.filter(function(className2) {
        return !allStylesheetSelectors.includes(className2);
      }));
      props = _objectSpread(_objectSpread({}, properties), {}, { className: createClassNameString(className) || void 0, style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet) });
    }
    var children = childrenCreator(node2.children);
    return React$1.createElement(TagName, _extends({ key }, props), children);
  }
}
var checkForListedLanguage_default = function(astGenerator, language) {
  var langs = astGenerator.listLanguages();
  return langs.indexOf(language) !== -1;
};
var _excluded = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
function ownKeys2(object2, enumerableOnly) {
  var keys2 = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var newLineRegex = /\n/g;
function getNewLines(str2) {
  return str2.match(newLineRegex);
}
function getAllLineNumbers(_ref) {
  var lines = _ref.lines, startingLineNumber = _ref.startingLineNumber, style = _ref.style;
  return lines.map(function(_2, i2) {
    var number = i2 + startingLineNumber;
    return React$1.createElement("span", { key: "line-".concat(i2), className: "react-syntax-highlighter-line-number", style: typeof style == "function" ? style(number) : style }, "".concat(number, `
`));
  });
}
function AllLineNumbers(_ref2) {
  var codeString = _ref2.codeString, codeStyle = _ref2.codeStyle, _ref2$containerStyle = _ref2.containerStyle, containerStyle = _ref2$containerStyle === void 0 ? { float: "left", paddingRight: "10px" } : _ref2$containerStyle, _ref2$numberStyle = _ref2.numberStyle, numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle, startingLineNumber = _ref2.startingLineNumber;
  return React$1.createElement("code", { style: Object.assign({}, codeStyle, containerStyle) }, getAllLineNumbers({ lines: codeString.replace(/\n$/, "").split(`
`), style: numberStyle, startingLineNumber }));
}
function getEmWidthOfNumber(num) {
  return "".concat(num.toString().length, ".25em");
}
function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
  return { type: "element", tagName: "span", properties: { key: "line-number--".concat(lineNumber), className: ["comment", "linenumber", "react-syntax-highlighter-line-number"], style: inlineLineNumberStyle }, children: [{ type: "text", value: lineNumber }] };
}
function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
  var defaultLineNumberStyle = { display: "inline-block", minWidth: getEmWidthOfNumber(largestLineNumber), paddingRight: "1em", textAlign: "right", userSelect: "none" }, customLineNumberStyle = typeof lineNumberStyle == "function" ? lineNumberStyle(lineNumber) : lineNumberStyle, assembledStyle = _objectSpread2(_objectSpread2({}, defaultLineNumberStyle), customLineNumberStyle);
  return assembledStyle;
}
function createLineElement(_ref3) {
  var children = _ref3.children, lineNumber = _ref3.lineNumber, lineNumberStyle = _ref3.lineNumberStyle, largestLineNumber = _ref3.largestLineNumber, showInlineLineNumbers = _ref3.showInlineLineNumbers, _ref3$lineProps = _ref3.lineProps, lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps, _ref3$className = _ref3.className, className = _ref3$className === void 0 ? [] : _ref3$className, showLineNumbers = _ref3.showLineNumbers, wrapLongLines = _ref3.wrapLongLines, properties = typeof lineProps == "function" ? lineProps(lineNumber) : lineProps;
  if (properties.className = className, lineNumber && showInlineLineNumbers) {
    var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
    children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
  }
  return wrapLongLines & showLineNumbers && (properties.style = _objectSpread2(_objectSpread2({}, properties.style), {}, { display: "flex" })), { type: "element", tagName: "span", properties, children };
}
function flattenCodeTree(tree) {
  for (var className = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], newTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], i2 = 0; i2 < tree.length; i2++) {
    var node2 = tree[i2];
    if (node2.type === "text")
      newTree.push(createLineElement({ children: [node2], className: _toConsumableArray(new Set(className)) }));
    else if (node2.children) {
      var classNames = className.concat(node2.properties.className);
      flattenCodeTree(node2.children, classNames).forEach(function(i22) {
        return newTree.push(i22);
      });
    }
  }
  return newTree;
}
function processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines) {
  var _ref4, tree = flattenCodeTree(codeTree.value), newTree = [], lastLineBreakIndex = -1, index3 = 0;
  function createWrappedLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return createLineElement({ children: children2, lineNumber: lineNumber2, lineNumberStyle, largestLineNumber, showInlineLineNumbers, lineProps, className, showLineNumbers, wrapLongLines });
  }
  function createUnwrappedLine(children2, lineNumber2) {
    if (showLineNumbers && lineNumber2 && showInlineLineNumbers) {
      var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber2, largestLineNumber);
      children2.unshift(getInlineLineNumber(lineNumber2, inlineLineNumberStyle));
    }
    return children2;
  }
  function createLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return wrapLines || className.length > 0 ? createWrappedLine(children2, lineNumber2, className) : createUnwrappedLine(children2, lineNumber2);
  }
  for (var _loop = function() {
    var node2 = tree[index3], value2 = node2.children[0].value, newLines = getNewLines(value2);
    if (newLines) {
      var splitValue = value2.split(`
`);
      splitValue.forEach(function(text, i2) {
        var lineNumber2 = showLineNumbers && newTree.length + startingLineNumber, newChild = { type: "text", value: "".concat(text, `
`) };
        if (i2 === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index3).concat(createLineElement({ children: [newChild], className: node2.properties.className })), _line = createLine(_children, lineNumber2);
          newTree.push(_line);
        } else if (i2 === splitValue.length - 1) {
          var stringChild = tree[index3 + 1] && tree[index3 + 1].children && tree[index3 + 1].children[0], lastLineInPreviousSpan = { type: "text", value: "".concat(text) };
          if (stringChild) {
            var newElem = createLineElement({ children: [lastLineInPreviousSpan], className: node2.properties.className });
            tree.splice(index3 + 1, 0, newElem);
          } else {
            var _children2 = [lastLineInPreviousSpan], _line2 = createLine(_children2, lineNumber2, node2.properties.className);
            newTree.push(_line2);
          }
        } else {
          var _children3 = [newChild], _line3 = createLine(_children3, lineNumber2, node2.properties.className);
          newTree.push(_line3);
        }
      }), lastLineBreakIndex = index3;
    }
    index3++;
  }; index3 < tree.length; )
    _loop();
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      var lineNumber = showLineNumbers && newTree.length + startingLineNumber, line2 = createLine(children, lineNumber);
      newTree.push(line2);
    }
  }
  return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}
function defaultRenderer(_ref5) {
  var rows = _ref5.rows, stylesheet = _ref5.stylesheet, useInlineStyles = _ref5.useInlineStyles;
  return rows.map(function(node2, i2) {
    return createElement({ node: node2, stylesheet, useInlineStyles, key: "code-segement".concat(i2) });
  });
}
function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto < "u";
}
function getCodeTree(_ref6) {
  var astGenerator = _ref6.astGenerator, language = _ref6.language, code = _ref6.code, defaultCodeValue = _ref6.defaultCodeValue;
  if (isHighlightJs(astGenerator)) {
    var hasLanguage = checkForListedLanguage_default(astGenerator, language);
    return language === "text" ? { value: defaultCodeValue, language: "text" } : hasLanguage ? astGenerator.highlight(language, code) : astGenerator.highlightAuto(code);
  }
  try {
    return language && language !== "text" ? { value: astGenerator.highlight(code, language) } : { value: defaultCodeValue };
  } catch {
    return { value: defaultCodeValue };
  }
}
function highlight_default(defaultAstGenerator, defaultStyle) {
  return function(_ref7) {
    var language = _ref7.language, children = _ref7.children, _ref7$style = _ref7.style, style = _ref7$style === void 0 ? defaultStyle : _ref7$style, _ref7$customStyle = _ref7.customStyle, customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle, _ref7$codeTagProps = _ref7.codeTagProps, codeTagProps = _ref7$codeTagProps === void 0 ? { className: language ? "language-".concat(language) : void 0, style: _objectSpread2(_objectSpread2({}, style['code[class*="language-"]']), style['code[class*="language-'.concat(language, '"]')]) } : _ref7$codeTagProps, _ref7$useInlineStyles = _ref7.useInlineStyles, useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles, _ref7$showLineNumbers = _ref7.showLineNumbers, showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers, _ref7$showInlineLineN = _ref7.showInlineLineNumbers, showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? true : _ref7$showInlineLineN, _ref7$startingLineNum = _ref7.startingLineNumber, startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum, lineNumberContainerStyle = _ref7.lineNumberContainerStyle, _ref7$lineNumberStyle = _ref7.lineNumberStyle, lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle, wrapLines = _ref7.wrapLines, _ref7$wrapLongLines = _ref7.wrapLongLines, wrapLongLines = _ref7$wrapLongLines === void 0 ? false : _ref7$wrapLongLines, _ref7$lineProps = _ref7.lineProps, lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps, renderer = _ref7.renderer, _ref7$PreTag = _ref7.PreTag, PreTag = _ref7$PreTag === void 0 ? "pre" : _ref7$PreTag, _ref7$CodeTag = _ref7.CodeTag, CodeTag = _ref7$CodeTag === void 0 ? "code" : _ref7$CodeTag, _ref7$code = _ref7.code, code = _ref7$code === void 0 ? (Array.isArray(children) ? children[0] : children) || "" : _ref7$code, astGenerator = _ref7.astGenerator, rest = _objectWithoutProperties(_ref7, _excluded);
    astGenerator = astGenerator || defaultAstGenerator;
    var allLineNumbers = showLineNumbers ? React$1.createElement(AllLineNumbers, { containerStyle: lineNumberContainerStyle, codeStyle: codeTagProps.style || {}, numberStyle: lineNumberStyle, startingLineNumber, codeString: code }) : null, defaultPreStyle = style.hljs || style['pre[class*="language-"]'] || { backgroundColor: "#fff" }, generatorClassName = isHighlightJs(astGenerator) ? "hljs" : "prismjs", preProps = useInlineStyles ? Object.assign({}, rest, { style: Object.assign({}, defaultPreStyle, customStyle) }) : Object.assign({}, rest, { className: rest.className ? "".concat(generatorClassName, " ").concat(rest.className) : generatorClassName, style: Object.assign({}, customStyle) });
    if (wrapLongLines ? codeTagProps.style = _objectSpread2(_objectSpread2({}, codeTagProps.style), {}, { whiteSpace: "pre-wrap" }) : codeTagProps.style = _objectSpread2(_objectSpread2({}, codeTagProps.style), {}, { whiteSpace: "pre" }), !astGenerator)
      return React$1.createElement(PreTag, preProps, allLineNumbers, React$1.createElement(CodeTag, codeTagProps, code));
    (wrapLines === void 0 && renderer || wrapLongLines) && (wrapLines = true), renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{ type: "text", value: code }], codeTree = getCodeTree({ astGenerator, language, code, defaultCodeValue });
    codeTree.language === null && (codeTree.value = defaultCodeValue);
    var largestLineNumber = codeTree.value.length + startingLineNumber, rows = processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines);
    return React$1.createElement(PreTag, preProps, React$1.createElement(CodeTag, codeTagProps, !showInlineLineNumbers && allLineNumbers, renderer({ rows, stylesheet: style, useInlineStyles })));
  };
}
var import_core = __toESM(require_core()), SyntaxHighlighter = highlight_default(import_core.default, {});
SyntaxHighlighter.registerLanguage = function(_2, language) {
  return import_core.default.register(language);
};
SyntaxHighlighter.alias = function(name, aliases) {
  return import_core.default.alias(name, aliases);
};
var prism_light_default = SyntaxHighlighter;
var Container$1 = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ position: "absolute", bottom: 0, right: 0, maxWidth: "100%", display: "flex", background: theme3.background.content, zIndex: 1 })), ActionButton = emotion_styled_browser_esm_default.button(({ theme: theme3 }) => ({ margin: 0, border: "0 none", padding: "4px 10px", cursor: "pointer", display: "flex", alignItems: "center", color: theme3.color.defaultText, background: theme3.background.content, fontSize: 12, lineHeight: "16px", fontFamily: theme3.typography.fonts.base, fontWeight: theme3.typography.weight.bold, borderTop: `1px solid ${theme3.appBorderColor}`, borderLeft: `1px solid ${theme3.appBorderColor}`, marginLeft: -1, borderRadius: "4px 0 0 0", "&:not(:last-child)": { borderRight: `1px solid ${theme3.appBorderColor}` }, "& + *": { borderLeft: `1px solid ${theme3.appBorderColor}`, borderRadius: 0 }, "&:focus": { boxShadow: `${theme3.color.secondary} 0 -3px 0 0 inset`, outline: "0 none" } }), ({ disabled }) => disabled && { cursor: "not-allowed", opacity: 0.5 });
ActionButton.displayName = "ActionButton";
var ActionBar = ({ actionItems, ...props }) => React$1.createElement(Container$1, { ...props }, actionItems.map(({ title, className, onClick, disabled }, index3) => React$1.createElement(ActionButton, { key: index3, className, onClick, disabled }, title)));
var GlobalScrollAreaStyles = react.exports.lazy(() => __vitePreload(() => import("./GlobalScrollAreaStyles-XIHNDKUY.05325a5c.js"), true ? ["./GlobalScrollAreaStyles-XIHNDKUY.05325a5c.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./iframe.bff41132.js","./index.36b4d5ff.js","./index.e850844b.js","./_getTag.d1b75f35.js","./index.1fb95844.js","./isNativeReflectConstruct.fd0a40b8.js"] : void 0, import.meta.url)), OverlayScrollbars = react.exports.lazy(() => __vitePreload(() => import("./OverlayScrollbars-VAV6LJAB.8db2ea71.js"), true ? ["./OverlayScrollbars-VAV6LJAB.8db2ea71.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./iframe.bff41132.js","./index.36b4d5ff.js","./index.e850844b.js","./_getTag.d1b75f35.js","./index.1fb95844.js","./isNativeReflectConstruct.fd0a40b8.js"] : void 0, import.meta.url)), Scroller = ({ horizontal, vertical, ...props }) => React$1.createElement(react.exports.Suspense, { fallback: React$1.createElement("div", { ...props }) }, React$1.createElement(GlobalScrollAreaStyles, null), React$1.createElement(OverlayScrollbars, { options: { scrollbars: { autoHide: "leave" } }, ...props })), ScrollArea = emotion_styled_browser_esm_default(Scroller)(({ vertical }) => vertical ? { overflowY: "auto", height: "100%" } : { overflowY: "hidden" }, ({ horizontal }) => horizontal ? { overflowX: "auto", width: "100%" } : { overflowX: "hidden" });
ScrollArea.defaultProps = { horizontal: false, vertical: false };
var { navigator: navigator$1, document: document$1, window: globalWindow$1 } = scope;
prism_light_default.registerLanguage("jsextra", js_extras_default);
prism_light_default.registerLanguage("jsx", jsx_default);
prism_light_default.registerLanguage("json", json_default);
prism_light_default.registerLanguage("yml", yaml_default);
prism_light_default.registerLanguage("md", markdown_default);
prism_light_default.registerLanguage("bash", bash_default);
prism_light_default.registerLanguage("css", css_default);
prism_light_default.registerLanguage("html", markup_default);
prism_light_default.registerLanguage("tsx", tsx_default);
prism_light_default.registerLanguage("typescript", typescript_default);
prism_light_default.registerLanguage("graphql", graphql_default);
var themedSyntax = memoize$1(2)((theme3) => Object.entries(theme3.code || {}).reduce((acc, [key, val]) => ({ ...acc, [`* .${key}`]: val }), {})), copyToClipboard = createCopyToClipboardFunction();
function createCopyToClipboardFunction() {
  return (navigator$1 == null ? void 0 : navigator$1.clipboard) ? (text) => navigator$1.clipboard.writeText(text) : async (text) => {
    let tmp = document$1.createElement("TEXTAREA"), focus = document$1.activeElement;
    tmp.value = text, document$1.body.appendChild(tmp), tmp.select(), document$1.execCommand("copy"), document$1.body.removeChild(tmp), focus.focus();
  };
}
var Wrapper$2 = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ position: "relative", overflow: "hidden", color: theme3.color.defaultText }), ({ theme: theme3, bordered }) => bordered ? { border: `1px solid ${theme3.appBorderColor}`, borderRadius: theme3.borderRadius, background: theme3.background.content } : {}, ({ showLineNumbers }) => showLineNumbers ? { ".react-syntax-highlighter-line-number::before": { content: "attr(data-line-number)" } } : {}), UnstyledScroller = ({ children, className }) => React$1.createElement(ScrollArea, { horizontal: true, vertical: true, className }, children), Scroller2 = emotion_styled_browser_esm_default(UnstyledScroller)({ position: "relative" }, ({ theme: theme3 }) => themedSyntax(theme3)), Pre$1 = emotion_styled_browser_esm_default.pre(({ theme: theme3, padded }) => ({ display: "flex", justifyContent: "flex-start", margin: 0, padding: padded ? theme3.layoutMargin : 0 })), Code$1 = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ flex: 1, paddingLeft: 2, paddingRight: theme3.layoutMargin, opacity: 1 })), processLineNumber = (row) => {
  let children = [...row.children], lineNumberNode = children[0], lineNumber = lineNumberNode.children[0].value, processedLineNumberNode = { ...lineNumberNode, children: [], properties: { ...lineNumberNode.properties, "data-line-number": lineNumber, style: { ...lineNumberNode.properties.style, userSelect: "auto" } } };
  return children[0] = processedLineNumberNode, { ...row, children };
}, defaultRenderer2 = ({ rows, stylesheet, useInlineStyles }) => rows.map((node2, i2) => createElement({ node: processLineNumber(node2), stylesheet, useInlineStyles, key: `code-segement${i2}` })), wrapRenderer = (renderer, showLineNumbers) => showLineNumbers ? renderer ? ({ rows, ...rest }) => renderer({ rows: rows.map((row) => processLineNumber(row)), ...rest }) : defaultRenderer2 : renderer, SyntaxHighlighter2$1 = ({ children, language = "jsx", copyable = false, bordered = false, padded = false, format: format2 = true, formatter = null, className = null, showLineNumbers = false, ...rest }) => {
  if (typeof children != "string" || !children.trim())
    return null;
  let highlightableCode = formatter ? formatter(format2, children) : children.trim(), [copied, setCopied] = react.exports.useState(false), onClick = react.exports.useCallback((e2) => {
    e2.preventDefault(), copyToClipboard(highlightableCode).then(() => {
      setCopied(true), globalWindow$1.setTimeout(() => setCopied(false), 1500);
    }).catch(logger$1.error);
  }, [highlightableCode]), renderer = wrapRenderer(rest.renderer, showLineNumbers);
  return React$1.createElement(Wrapper$2, { bordered, padded, showLineNumbers, className }, React$1.createElement(Scroller2, null, React$1.createElement(prism_light_default, { padded: padded || bordered, language, showLineNumbers, showInlineLineNumbers: showLineNumbers, useInlineStyles: false, PreTag: Pre$1, CodeTag: Code$1, lineNumberContainerStyle: {}, ...rest, renderer }, highlightableCode)), copyable ? React$1.createElement(ActionBar, { actionItems: [{ title: copied ? "Copied" : "Copy", onClick }] }) : null);
}, syntaxhighlighter_default = SyntaxHighlighter2$1;
function _setPrototypeOf(o2, p2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o22, p22) {
    return o22.__proto__ = p22, o22;
  }, _setPrototypeOf(o2, p2);
}
function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype), subClass.prototype.constructor = subClass, _setPrototypeOf(subClass, superClass);
}
var top = "top", bottom = "bottom", right = "right", left = "left", auto = "auto", basePlacements = [top, bottom, right, left], start = "start", end = "end", clippingParents = "clippingParents", viewport = "viewport", popper = "popper", reference = "reference", variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []), placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []), beforeRead = "beforeRead", read = "read", afterRead = "afterRead", beforeMain = "beforeMain", main = "main", afterMain = "afterMain", beforeWrite = "beforeWrite", write = "write", afterWrite = "afterWrite", modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node2) {
  if (node2 == null)
    return window;
  if (node2.toString() !== "[object Window]") {
    var ownerDocument = node2.ownerDocument;
    return ownerDocument && ownerDocument.defaultView || window;
  }
  return node2;
}
function isElement(node2) {
  var OwnElement = getWindow(node2).Element;
  return node2 instanceof OwnElement || node2 instanceof Element;
}
function isHTMLElement(node2) {
  var OwnElement = getWindow(node2).HTMLElement;
  return node2 instanceof OwnElement || node2 instanceof HTMLElement;
}
function isShadowRoot(node2) {
  if (typeof ShadowRoot > "u")
    return false;
  var OwnElement = getWindow(node2).ShadowRoot;
  return node2 instanceof OwnElement || node2 instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {}, attributes = state.attributes[name] || {}, element = state.elements[name];
    !isHTMLElement(element) || !getNodeName(element) || (Object.assign(element.style, style), Object.keys(attributes).forEach(function(name2) {
      var value2 = attributes[name2];
      value2 === false ? element.removeAttribute(name2) : element.setAttribute(name2, value2 === true ? "" : value2);
    }));
  });
}
function effect(_ref2) {
  var state = _ref2.state, initialStyles = { popper: { position: state.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(state.elements.popper.style, initialStyles.popper), state.styles = initialStyles, state.elements.arrow && Object.assign(state.elements.arrow.style, initialStyles.arrow), function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name], attributes = state.attributes[name] || {}, styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]), style = styleProperties.reduce(function(style2, property) {
        return style2[property] = "", style2;
      }, {});
      !isHTMLElement(element) || !getNodeName(element) || (Object.assign(element.style, style), Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      }));
    });
  };
}
var applyStyles_default = { name: "applyStyles", enabled: true, phase: "write", fn: applyStyles, effect, requires: ["computeStyles"] };
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max, min = Math.min, round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  return uaData != null && uaData.brands ? uaData.brands.map(function(item) {
    return item.brand + "/" + item.version;
  }).join(" ") : navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  includeScale === void 0 && (includeScale = false), isFixedStrategy === void 0 && (isFixedStrategy = false);
  var clientRect = element.getBoundingClientRect(), scaleX = 1, scaleY = 1;
  includeScale && isHTMLElement(element) && (scaleX = element.offsetWidth > 0 && round(clientRect.width) / element.offsetWidth || 1, scaleY = element.offsetHeight > 0 && round(clientRect.height) / element.offsetHeight || 1);
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport, addVisualOffsets = !isLayoutViewport() && isFixedStrategy, x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX, y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY, width = clientRect.width / scaleX, height = clientRect.height / scaleY;
  return { width, height, top: y2, right: x2 + width, bottom: y2 + height, left: x2, x: x2, y: y2 };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element), width = element.offsetWidth, height = element.offsetHeight;
  return Math.abs(clientRect.width - width) <= 1 && (width = clientRect.width), Math.abs(clientRect.height - height) <= 1 && (height = clientRect.height), { x: element.offsetLeft, y: element.offsetTop, width, height };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child))
    return true;
  if (rootNode && isShadowRoot(rootNode)) {
    var next2 = child;
    do {
      if (next2 && parent.isSameNode(next2))
        return true;
      next2 = next2.parentNode || next2.host;
    } while (next2);
  }
  return false;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  return getNodeName(element) === "html" ? element : element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  return !isHTMLElement(element) || getComputedStyle$1(element).position === "fixed" ? null : element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString()), isIE2 = /Trident/i.test(getUAString());
  if (isIE2 && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed")
      return null;
  }
  var currentNode = getParentNode(element);
  for (isShadowRoot(currentNode) && (currentNode = currentNode.host); isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0; ) {
    var css2 = getComputedStyle$1(currentNode);
    if (css2.transform !== "none" || css2.perspective !== "none" || css2.contain === "paint" || ["transform", "perspective"].indexOf(css2.willChange) !== -1 || isFirefox && css2.willChange === "filter" || isFirefox && css2.filter && css2.filter !== "none")
      return currentNode;
    currentNode = currentNode.parentNode;
  }
  return null;
}
function getOffsetParent(element) {
  for (var window2 = getWindow(element), offsetParent = getTrueOffsetParent(element); offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static"; )
    offsetParent = getTrueOffsetParent(offsetParent);
  return offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static") ? window2 : offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min2, value2, max2) {
  return max(min2, min(value2, max2));
}
function withinMaxClamp(min2, value2, max2) {
  var v2 = within(min2, value2, max2);
  return v2 > max2 ? max2 : v2;
}
function getFreshSideObject() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value2, keys2) {
  return keys2.reduce(function(hashMap, key) {
    return hashMap[key] = value2, hashMap;
  }, {});
}
var toPaddingObject = function(padding, state) {
  return padding = typeof padding == "function" ? padding(Object.assign({}, state.rects, { placement: state.placement })) : padding, mergePaddingObject(typeof padding != "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$, state = _ref.state, name = _ref.name, options = _ref.options, arrowElement = state.elements.arrow, popperOffsets2 = state.modifiersData.popperOffsets, basePlacement = getBasePlacement(state.placement), axis = getMainAxisFromPlacement(basePlacement), isVertical = [left, right].indexOf(basePlacement) >= 0, len = isVertical ? "height" : "width";
  if (!(!arrowElement || !popperOffsets2)) {
    var paddingObject = toPaddingObject(options.padding, state), arrowRect = getLayoutRect(arrowElement), minProp = axis === "y" ? top : left, maxProp = axis === "y" ? bottom : right, endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len], startDiff = popperOffsets2[axis] - state.rects.reference[axis], arrowOffsetParent = getOffsetParent(arrowElement), clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0, centerToReference = endDiff / 2 - startDiff / 2, min2 = paddingObject[minProp], max2 = clientSize - arrowRect[len] - paddingObject[maxProp], center = clientSize / 2 - arrowRect[len] / 2 + centerToReference, offset2 = within(min2, center, max2), axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options, _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement != null && !(typeof arrowElement == "string" && (arrowElement = state.elements.popper.querySelector(arrowElement), !arrowElement))) {
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
}
var arrow_default = { name: "arrow", enabled: true, phase: "main", fn: arrow, effect: effect2, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function roundOffsetsByDPR(_ref) {
  var x2 = _ref.x, y2 = _ref.y, win = window, dpr = win.devicePixelRatio || 1;
  return { x: round(x2 * dpr) / dpr || 0, y: round(y2 * dpr) / dpr || 0 };
}
function mapToStyles(_ref2) {
  var _Object$assign2, popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position2 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed, _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y, _ref3 = typeof roundOffsets == "function" ? roundOffsets({ x: x2, y: y2 }) : { x: x2, y: y2 };
  x2 = _ref3.x, y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x"), hasY = offsets.hasOwnProperty("y"), sideX = left, sideY = top, win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2), heightProp = "clientHeight", widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2) && (offsetParent = getDocumentElement(popper2), getComputedStyle$1(offsetParent).position !== "static" && position2 === "absolute" && (heightProp = "scrollHeight", widthProp = "scrollWidth")), offsetParent = offsetParent, placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y2 -= offsetY - popperRect.height, y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x2 -= offsetX - popperRect.width, x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({ position: position2 }, adaptive && unsetSides), _ref4 = roundOffsets === true ? roundOffsetsByDPR({ x: x2, y: y2 }) : { x: x2, y: y2 };
  if (x2 = _ref4.x, y2 = _ref4.y, gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options, _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = { placement: getBasePlacement(state.placement), variation: getVariation(state.placement), popper: state.elements.popper, popperRect: state.rects.popper, gpuAcceleration, isFixed: state.options.strategy === "fixed" };
  state.modifiersData.popperOffsets != null && (state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, { offsets: state.modifiersData.popperOffsets, position: state.options.strategy, adaptive, roundOffsets })))), state.modifiersData.arrow != null && (state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, { offsets: state.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets })))), state.attributes.popper = Object.assign({}, state.attributes.popper, { "data-popper-placement": state.placement });
}
var computeStyles_default = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: computeStyles, data: {} };
var passive = { passive: true };
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options, _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize, window2 = getWindow(state.elements.popper), scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  return scroll && scrollParents.forEach(function(scrollParent) {
    scrollParent.addEventListener("scroll", instance.update, passive);
  }), resize && window2.addEventListener("resize", instance.update, passive), function() {
    scroll && scrollParents.forEach(function(scrollParent) {
      scrollParent.removeEventListener("scroll", instance.update, passive);
    }), resize && window2.removeEventListener("resize", instance.update, passive);
  };
}
var eventListeners_default = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: effect3, data: {} };
var hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
var hash2 = { start: "end", end: "start" };
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}
function getWindowScroll(node2) {
  var win = getWindow(node2), scrollLeft = win.pageXOffset, scrollTop = win.pageYOffset;
  return { scrollLeft, scrollTop };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element), html = getDocumentElement(element), visualViewport = win.visualViewport, width = html.clientWidth, height = html.clientHeight, x2 = 0, y2 = 0;
  if (visualViewport) {
    width = visualViewport.width, height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    (layoutViewport || !layoutViewport && strategy === "fixed") && (x2 = visualViewport.offsetLeft, y2 = visualViewport.offsetTop);
  }
  return { width, height, x: x2 + getWindowScrollBarX(element), y: y2 };
}
function getDocumentRect(element) {
  var _element$ownerDocumen, html = getDocumentElement(element), winScroll = getWindowScroll(element), body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body, width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0), height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0), x2 = -winScroll.scrollLeft + getWindowScrollBarX(element), y2 = -winScroll.scrollTop;
  return getComputedStyle$1(body || html).direction === "rtl" && (x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width), { width, height, x: x2, y: y2 };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node2) {
  return ["html", "body", "#document"].indexOf(getNodeName(node2)) >= 0 ? node2.ownerDocument.body : isHTMLElement(node2) && isScrollParent(node2) ? node2 : getScrollParent(getParentNode(node2));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  list === void 0 && (list = []);
  var scrollParent = getScrollParent(element), isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body), win = getWindow(scrollParent), target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent, updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, { left: rect.x, top: rect.y, right: rect.x + rect.width, bottom: rect.y + rect.height });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  return rect.top = rect.top + element.clientTop, rect.left = rect.left + element.clientLeft, rect.bottom = rect.top + element.clientHeight, rect.right = rect.left + element.clientWidth, rect.width = element.clientWidth, rect.height = element.clientHeight, rect.x = rect.left, rect.y = rect.top, rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element)), canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0, clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  return isElement(clipperElement) ? clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  }) : [];
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary), clippingParents2 = [].concat(mainClippingParents, [rootBoundary]), firstClippingParent = clippingParents2[0], clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    return accRect.top = max(rect.top, accRect.top), accRect.right = min(rect.right, accRect.right), accRect.bottom = min(rect.bottom, accRect.bottom), accRect.left = max(rect.left, accRect.left), accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  return clippingRect.width = clippingRect.right - clippingRect.left, clippingRect.height = clippingRect.bottom - clippingRect.top, clippingRect.x = clippingRect.left, clippingRect.y = clippingRect.top, clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement, basePlacement = placement ? getBasePlacement(placement) : null, variation = placement ? getVariation(placement) : null, commonX = reference2.x + reference2.width / 2 - element.width / 2, commonY = reference2.y + reference2.height / 2 - element.height / 2, offsets;
  switch (basePlacement) {
    case top:
      offsets = { x: commonX, y: reference2.y - element.height };
      break;
    case bottom:
      offsets = { x: commonX, y: reference2.y + reference2.height };
      break;
    case right:
      offsets = { x: reference2.x + reference2.width, y: commonY };
      break;
    case left:
      offsets = { x: reference2.x - element.width, y: commonY };
      break;
    default:
      offsets = { x: reference2.x, y: reference2.y };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  options === void 0 && (options = {});
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding, paddingObject = mergePaddingObject(typeof padding != "number" ? padding : expandToHashMap(padding, basePlacements)), altContext = elementContext === popper ? reference : popper, popperRect = state.rects.popper, element = state.elements[altBoundary ? altContext : elementContext], clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy), referenceClientRect = getBoundingClientRect(state.elements.reference), popperOffsets2 = computeOffsets({ reference: referenceClientRect, element: popperRect, strategy: "absolute", placement }), popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2)), elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect, overflowOffsets = { top: clippingClientRect.top - elementClientRect.top + paddingObject.top, bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom, left: clippingClientRect.left - elementClientRect.left + paddingObject.left, right: elementClientRect.right - clippingClientRect.right + paddingObject.right }, offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1, axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  options === void 0 && (options = {});
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP, variation = getVariation(placement), placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements, allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  allowedPlacements.length === 0 && (allowedPlacements = placements2, false);
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    return acc[placement2] = detectOverflow(state, { placement: placement2, boundary, rootBoundary, padding })[getBasePlacement(placement2)], acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto)
    return [];
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (!state.modifiersData[name]._skip) {
    for (var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements, preferredPlacement = state.options.placement, basePlacement = getBasePlacement(preferredPlacement), isBasePlacement = basePlacement === preferredPlacement, fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement)), placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, { placement: placement2, boundary, rootBoundary, padding, flipVariations, allowedAutoPlacements }) : placement2);
    }, []), referenceRect = state.rects.reference, popperRect = state.rects.popper, checksMap = /* @__PURE__ */ new Map(), makeFallbackChecks = true, firstFittingPlacement = placements2[0], i2 = 0; i2 < placements2.length; i2++) {
      var placement = placements2[i2], _basePlacement = getBasePlacement(placement), isStartVariation = getVariation(placement) === start, isVertical = [top, bottom].indexOf(_basePlacement) >= 0, len = isVertical ? "width" : "height", overflow = detectOverflow(state, { placement, boundary, rootBoundary, altBoundary, padding }), mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      referenceRect[len] > popperRect[len] && (mainVariationSide = getOppositePlacement(mainVariationSide));
      var altVariationSide = getOppositePlacement(mainVariationSide), checks = [];
      if (checkMainAxis && checks.push(overflow[_basePlacement] <= 0), checkAltAxis && checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0), checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement, makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks)
      for (var numberOfChecks = flipVariations ? 3 : 1, _loop = function(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2)
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
        });
        if (fittingPlacement)
          return firstFittingPlacement = fittingPlacement, "break";
      }, _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break")
          break;
      }
    state.placement !== firstFittingPlacement && (state.modifiersData[name]._skip = true, state.placement = firstFittingPlacement, state.reset = true);
  }
}
var flip_default = { name: "flip", enabled: true, phase: "main", fn: flip, requiresIfExists: ["offset"], data: { _skip: false } };
function getSideOffsets(overflow, rect, preventedOffsets) {
  return preventedOffsets === void 0 && (preventedOffsets = { x: 0, y: 0 }), { top: overflow.top - rect.height - preventedOffsets.y, right: overflow.right - rect.width + preventedOffsets.x, bottom: overflow.bottom - rect.height + preventedOffsets.y, left: overflow.left - rect.width - preventedOffsets.x };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name, referenceRect = state.rects.reference, popperRect = state.rects.popper, preventedOffsets = state.modifiersData.preventOverflow, referenceOverflow = detectOverflow(state, { elementContext: "reference" }), popperAltOverflow = detectOverflow(state, { altBoundary: true }), referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect), popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets), isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets), hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = { referenceClippingOffsets, popperEscapeOffsets, isReferenceHidden, hasPopperEscaped }, state.attributes.popper = Object.assign({}, state.attributes.popper, { "data-popper-reference-hidden": isReferenceHidden, "data-popper-escaped": hasPopperEscaped });
}
var hide_default = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: hide };
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement), invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1, _ref = typeof offset2 == "function" ? offset2(Object.assign({}, rects, { placement })) : offset2, skidding = _ref[0], distance = _ref[1];
  return skidding = skidding || 0, distance = (distance || 0) * invertDistance, [left, right].indexOf(basePlacement) >= 0 ? { x: distance, y: skidding } : { x: skidding, y: distance };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name, _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset, data = placements.reduce(function(acc, placement) {
    return acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2), acc;
  }, {}), _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  state.modifiersData.popperOffsets != null && (state.modifiersData.popperOffsets.x += x2, state.modifiersData.popperOffsets.y += y2), state.modifiersData[name] = data;
}
var offset_default = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: offset };
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({ reference: state.rects.reference, element: state.rects.popper, strategy: "absolute", placement: state.placement });
}
var popperOffsets_default = { name: "popperOffsets", enabled: true, phase: "read", fn: popperOffsets, data: {} };
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name, _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset, overflow = detectOverflow(state, { boundary, rootBoundary, padding, altBoundary }), basePlacement = getBasePlacement(state.placement), variation = getVariation(state.placement), isBasePlacement = !variation, mainAxis = getMainAxisFromPlacement(basePlacement), altAxis = getAltAxis(mainAxis), popperOffsets2 = state.modifiersData.popperOffsets, referenceRect = state.rects.reference, popperRect = state.rects.popper, tetherOffsetValue = typeof tetherOffset == "function" ? tetherOffset(Object.assign({}, state.rects, { placement: state.placement })) : tetherOffset, normalizedTetherOffsetValue = typeof tetherOffsetValue == "number" ? { mainAxis: tetherOffsetValue, altAxis: tetherOffsetValue } : Object.assign({ mainAxis: 0, altAxis: 0 }, tetherOffsetValue), offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null, data = { x: 0, y: 0 };
  if (popperOffsets2) {
    if (checkMainAxis) {
      var _offsetModifierState$, mainSide = mainAxis === "y" ? top : left, altSide = mainAxis === "y" ? bottom : right, len = mainAxis === "y" ? "height" : "width", offset2 = popperOffsets2[mainAxis], min2 = offset2 + overflow[mainSide], max2 = offset2 - overflow[altSide], additive = tether ? -popperRect[len] / 2 : 0, minLen = variation === start ? referenceRect[len] : popperRect[len], maxLen = variation === start ? -popperRect[len] : -referenceRect[len], arrowElement = state.elements.arrow, arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : { width: 0, height: 0 }, arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject(), arrowPaddingMin = arrowPaddingObject[mainSide], arrowPaddingMax = arrowPaddingObject[altSide], arrowLen = within(0, referenceRect[len], arrowRect[len]), minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis, maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis, arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow), clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0, offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0, tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset, tetherMax = offset2 + maxOffset - offsetModifierValue, preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset, data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2, _mainSide = mainAxis === "x" ? top : left, _altSide = mainAxis === "x" ? bottom : right, _offset = popperOffsets2[altAxis], _len = altAxis === "y" ? "height" : "width", _min = _offset + overflow[_mainSide], _max = _offset - overflow[_altSide], isOriginSide = [top, left].indexOf(basePlacement) !== -1, _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0, _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis, _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max, _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset, data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
}
var preventOverflow_default = { name: "preventOverflow", enabled: true, phase: "main", fn: preventOverflow, requiresIfExists: ["offset"] };
function getHTMLElementScroll(element) {
  return { scrollLeft: element.scrollLeft, scrollTop: element.scrollTop };
}
function getNodeScroll(node2) {
  return node2 === getWindow(node2) || !isHTMLElement(node2) ? getWindowScroll(node2) : getHTMLElementScroll(node2);
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect(), scaleX = round(rect.width) / element.offsetWidth || 1, scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  isFixed === void 0 && (isFixed = false);
  var isOffsetParentAnElement = isHTMLElement(offsetParent), offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent), documentElement = getDocumentElement(offsetParent), rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed), scroll = { scrollLeft: 0, scrollTop: 0 }, offsets = { x: 0, y: 0 };
  return (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) && ((getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) && (scroll = getNodeScroll(offsetParent)), isHTMLElement(offsetParent) ? (offsets = getBoundingClientRect(offsetParent, true), offsets.x += offsetParent.clientLeft, offsets.y += offsetParent.clientTop) : documentElement && (offsets.x = getWindowScrollBarX(documentElement))), { x: rect.left + scroll.scrollLeft - offsets.x, y: rect.top + scroll.scrollTop - offsets.y, width: rect.width, height: rect.height };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map(), visited = /* @__PURE__ */ new Set(), result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        depModifier && sort(depModifier);
      }
    }), result.push(modifier);
  }
  return modifiers.forEach(function(modifier) {
    visited.has(modifier.name) || sort(modifier);
  }), result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    return pending || (pending = new Promise(function(resolve) {
      Promise.resolve().then(function() {
        pending = void 0, resolve(fn2());
      });
    })), pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    return merged2[current.name] = existing ? Object.assign({}, existing, current, { options: Object.assign({}, existing.options, current.options), data: Object.assign({}, existing.data, current.data) }) : current, merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = { placement: "bottom", modifiers: [], strategy: "absolute" };
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
    args[_key] = arguments[_key];
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect == "function");
  });
}
function popperGenerator(generatorOptions) {
  generatorOptions === void 0 && (generatorOptions = {});
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function(reference2, popper2, options) {
    options === void 0 && (options = defaultOptions);
    var state = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions), modifiersData: {}, elements: { reference: reference2, popper: popper2 }, attributes: {}, styles: {} }, effectCleanupFns = [], isDestroyed = false, instance = { state, setOptions: function(setOptionsAction) {
      var options2 = typeof setOptionsAction == "function" ? setOptionsAction(state.options) : setOptionsAction;
      cleanupModifierEffects(), state.options = Object.assign({}, defaultOptions, state.options, options2), state.scrollParents = { reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [], popper: listScrollParents(popper2) };
      var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
      if (state.orderedModifiers = orderedModifiers.filter(function(m2) {
        return m2.enabled;
      }), false)
        ;
      return runModifierEffects(), instance.update();
    }, forceUpdate: function() {
      if (!isDestroyed) {
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = { reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"), popper: getLayoutRect(popper3) }, state.reset = false, state.placement = state.options.placement, state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var __debug_loops__ = 0, index3 = 0; index3 < state.orderedModifiers.length; index3++) {
          if (state.reset === true) {
            state.reset = false, index3 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index3], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          typeof fn2 == "function" && (state = fn2({ state, options: _options, name, instance }) || state);
        }
      }
    }, update: debounce(function() {
      return new Promise(function(resolve) {
        instance.forceUpdate(), resolve(state);
      });
    }), destroy: function() {
      cleanupModifierEffects(), isDestroyed = true;
    } };
    if (!areValidElements(reference2, popper2))
      return instance;
    instance.setOptions(options).then(function(state2) {
      !isDestroyed && options.onFirstUpdate && options.onFirstUpdate(state2);
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect4 = _ref3.effect;
        if (typeof effect4 == "function") {
          var cleanupFn = effect4({ state, name, instance, options: options2 }), noopFn = function() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      }), effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default], createPopper = popperGenerator({ defaultModifiers });
var baseIsEqual = _baseIsEqual;
function isEqual(value2, other) {
  return baseIsEqual(value2, other);
}
var isEqual_1 = isEqual;
var count = (vals) => vals.map((v2) => typeof v2 !== "undefined").filter(Boolean).length;
var testValue = (cond, value2) => {
  const { exists, eq: eq2, neq, truthy } = cond;
  if (count([exists, eq2, neq, truthy]) > 1) {
    throw new Error(`Invalid conditional test ${JSON.stringify({ exists, eq: eq2, neq })}`);
  }
  if (typeof eq2 !== "undefined") {
    return isEqual_1(value2, eq2);
  }
  if (typeof neq !== "undefined") {
    return !isEqual_1(value2, neq);
  }
  if (typeof exists !== "undefined") {
    const valueExists = typeof value2 !== "undefined";
    return exists ? valueExists : !valueExists;
  }
  const shouldBeTruthy = typeof truthy === "undefined" ? true : truthy;
  return shouldBeTruthy ? !!value2 : !value2;
};
var includeConditionalArg = (argType, args, globals) => {
  if (!argType.if)
    return true;
  const { arg, global: global2 } = argType.if;
  if (count([arg, global2]) !== 1) {
    throw new Error(`Invalid conditional value ${JSON.stringify({ arg, global: global2 })}`);
  }
  const value2 = arg ? args[arg] : globals[global2];
  return testValue(argType.if, value2);
};
var sanitize = (string) => {
  return string.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
};
var nameSpaceClassNames = ({ ...props }, key) => {
  let classes = [props.class, props.className];
  return delete props.class, props.className = ["sbdocs", `sbdocs-${key}`, ...classes].filter(Boolean).join(" "), props;
};
function _assertThisInitialized(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _getPrototypeOf(o2) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o22) {
    return o22.__proto__ || Object.getPrototypeOf(o22);
  }, _getPrototypeOf(o2);
}
function _isNativeFunction$1(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function _construct$1(Parent, args, Class) {
  return _isNativeReflectConstruct() ? _construct$1 = Reflect.construct.bind() : _construct$1 = function(Parent2, args2, Class2) {
    var a2 = [null];
    a2.push.apply(a2, args2);
    var Constructor = Function.bind.apply(Parent2, a2), instance = new Constructor();
    return Class2 && _setPrototypeOf(instance, Class2.prototype), instance;
  }, _construct$1.apply(null, arguments);
}
function _wrapNativeSuper$1(Class) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper$1 = function(Class2) {
    if (Class2 === null || !_isNativeFunction$1(Class2))
      return Class2;
    if (typeof Class2 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache < "u") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper32);
    }
    function Wrapper32() {
      return _construct$1(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper32.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper32, enumerable: false, writable: true, configurable: true } }), _setPrototypeOf(Wrapper32, Class2);
  }, _wrapNativeSuper$1(Class);
}
var PolishedError$1 = function(_Error) {
  _inheritsLoose$1(PolishedError2, _Error);
  function PolishedError2(code) {
    var _this;
    _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    return _assertThisInitialized(_this);
  }
  return PolishedError2;
}(_wrapNativeSuper$1(Error));
function colorToInt$1(color2) {
  return Math.round(color2 * 255);
}
function convertToInt$1(red, green, blue) {
  return colorToInt$1(red) + "," + colorToInt$1(green) + "," + colorToInt$1(blue);
}
function hslToRgb$1(hue, saturation, lightness, convert2) {
  if (convert2 === void 0 && (convert2 = convertToInt$1), saturation === 0)
    return convert2(lightness, lightness, lightness);
  var huePrime = (hue % 360 + 360) % 360 / 60, chroma = (1 - Math.abs(2 * lightness - 1)) * saturation, secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1)), red = 0, green = 0, blue = 0;
  huePrime >= 0 && huePrime < 1 ? (red = chroma, green = secondComponent) : huePrime >= 1 && huePrime < 2 ? (red = secondComponent, green = chroma) : huePrime >= 2 && huePrime < 3 ? (green = chroma, blue = secondComponent) : huePrime >= 3 && huePrime < 4 ? (green = secondComponent, blue = chroma) : huePrime >= 4 && huePrime < 5 ? (red = secondComponent, blue = chroma) : huePrime >= 5 && huePrime < 6 && (red = chroma, blue = secondComponent);
  var lightnessModification = lightness - chroma / 2, finalRed = red + lightnessModification, finalGreen = green + lightnessModification, finalBlue = blue + lightnessModification;
  return convert2(finalRed, finalGreen, finalBlue);
}
var namedColorMap$1 = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function nameToHex$1(color2) {
  if (typeof color2 != "string")
    return color2;
  var normalizedColorName = color2.toLowerCase();
  return namedColorMap$1[normalizedColorName] ? "#" + namedColorMap$1[normalizedColorName] : color2;
}
var hexRegex$1 = /^#[a-fA-F0-9]{6}$/, hexRgbaRegex$1 = /^#[a-fA-F0-9]{8}$/, reducedHexRegex$1 = /^#[a-fA-F0-9]{3}$/, reducedRgbaHexRegex$1 = /^#[a-fA-F0-9]{4}$/, rgbRegex$1 = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, rgbaRegex$1 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, hslRegex$1 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, hslaRegex$1 = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb$1(color2) {
  if (typeof color2 != "string")
    throw new PolishedError$1(3);
  var normalizedColor = nameToHex$1(color2);
  if (normalizedColor.match(hexRegex$1))
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16) };
  if (normalizedColor.match(hexRgbaRegex$1)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16), alpha };
  }
  if (normalizedColor.match(reducedHexRegex$1))
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16) };
  if (normalizedColor.match(reducedRgbaHexRegex$1)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16), alpha: _alpha };
  }
  var rgbMatched = rgbRegex$1.exec(normalizedColor);
  if (rgbMatched)
    return { red: parseInt("" + rgbMatched[1], 10), green: parseInt("" + rgbMatched[2], 10), blue: parseInt("" + rgbMatched[3], 10) };
  var rgbaMatched = rgbaRegex$1.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched)
    return { red: parseInt("" + rgbaMatched[1], 10), green: parseInt("" + rgbaMatched[2], 10), blue: parseInt("" + rgbaMatched[3], 10), alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4]) };
  var hslMatched = hslRegex$1.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10), saturation = parseInt("" + hslMatched[2], 10) / 100, lightness = parseInt("" + hslMatched[3], 10) / 100, rgbColorString = "rgb(" + hslToRgb$1(hue, saturation, lightness) + ")", hslRgbMatched = rgbRegex$1.exec(rgbColorString);
    if (!hslRgbMatched)
      throw new PolishedError$1(4, normalizedColor, rgbColorString);
    return { red: parseInt("" + hslRgbMatched[1], 10), green: parseInt("" + hslRgbMatched[2], 10), blue: parseInt("" + hslRgbMatched[3], 10) };
  }
  var hslaMatched = hslaRegex$1.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10), _saturation = parseInt("" + hslaMatched[2], 10) / 100, _lightness = parseInt("" + hslaMatched[3], 10) / 100, _rgbColorString = "rgb(" + hslToRgb$1(_hue, _saturation, _lightness) + ")", _hslRgbMatched = rgbRegex$1.exec(_rgbColorString);
    if (!_hslRgbMatched)
      throw new PolishedError$1(4, normalizedColor, _rgbColorString);
    return { red: parseInt("" + _hslRgbMatched[1], 10), green: parseInt("" + _hslRgbMatched[2], 10), blue: parseInt("" + _hslRgbMatched[3], 10), alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4]) };
  }
  throw new PolishedError$1(5);
}
function rgbToHsl$1(color2) {
  var red = color2.red / 255, green = color2.green / 255, blue = color2.blue / 255, max2 = Math.max(red, green, blue), min2 = Math.min(red, green, blue), lightness = (max2 + min2) / 2;
  if (max2 === min2)
    return color2.alpha !== void 0 ? { hue: 0, saturation: 0, lightness, alpha: color2.alpha } : { hue: 0, saturation: 0, lightness };
  var hue, delta = max2 - min2, saturation = lightness > 0.5 ? delta / (2 - max2 - min2) : delta / (max2 + min2);
  switch (max2) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  return hue *= 60, color2.alpha !== void 0 ? { hue, saturation, lightness, alpha: color2.alpha } : { hue, saturation, lightness };
}
function parseToHsl$1(color2) {
  return rgbToHsl$1(parseToRgb$1(color2));
}
var reduceHexValue$2 = function(value2) {
  return value2.length === 7 && value2[1] === value2[2] && value2[3] === value2[4] && value2[5] === value2[6] ? "#" + value2[1] + value2[3] + value2[5] : value2;
}, reduceHexValue$1$1 = reduceHexValue$2;
function numberToHex$1(value2) {
  var hex = value2.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex$1(color2) {
  return numberToHex$1(Math.round(color2 * 255));
}
function convertToHex$1(red, green, blue) {
  return reduceHexValue$1$1("#" + colorToHex$1(red) + colorToHex$1(green) + colorToHex$1(blue));
}
function hslToHex$1(hue, saturation, lightness) {
  return hslToRgb$1(hue, saturation, lightness, convertToHex$1);
}
function hsl$1(value2, saturation, lightness) {
  if (typeof value2 == "number" && typeof saturation == "number" && typeof lightness == "number")
    return hslToHex$1(value2, saturation, lightness);
  if (typeof value2 == "object" && saturation === void 0 && lightness === void 0)
    return hslToHex$1(value2.hue, value2.saturation, value2.lightness);
  throw new PolishedError$1(1);
}
function hsla$1(value2, saturation, lightness, alpha) {
  if (typeof value2 == "number" && typeof saturation == "number" && typeof lightness == "number" && typeof alpha == "number")
    return alpha >= 1 ? hslToHex$1(value2, saturation, lightness) : "rgba(" + hslToRgb$1(value2, saturation, lightness) + "," + alpha + ")";
  if (typeof value2 == "object" && saturation === void 0 && lightness === void 0 && alpha === void 0)
    return value2.alpha >= 1 ? hslToHex$1(value2.hue, value2.saturation, value2.lightness) : "rgba(" + hslToRgb$1(value2.hue, value2.saturation, value2.lightness) + "," + value2.alpha + ")";
  throw new PolishedError$1(2);
}
function rgb$1(value2, green, blue) {
  if (typeof value2 == "number" && typeof green == "number" && typeof blue == "number")
    return reduceHexValue$1$1("#" + numberToHex$1(value2) + numberToHex$1(green) + numberToHex$1(blue));
  if (typeof value2 == "object" && green === void 0 && blue === void 0)
    return reduceHexValue$1$1("#" + numberToHex$1(value2.red) + numberToHex$1(value2.green) + numberToHex$1(value2.blue));
  throw new PolishedError$1(6);
}
function rgba$1(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue == "string" && typeof secondValue == "number") {
    var rgbValue = parseToRgb$1(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else {
    if (typeof firstValue == "number" && typeof secondValue == "number" && typeof thirdValue == "number" && typeof fourthValue == "number")
      return fourthValue >= 1 ? rgb$1(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
    if (typeof firstValue == "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0)
      return firstValue.alpha >= 1 ? rgb$1(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError$1(7);
}
var isRgb$1 = function(color2) {
  return typeof color2.red == "number" && typeof color2.green == "number" && typeof color2.blue == "number" && (typeof color2.alpha != "number" || typeof color2.alpha > "u");
}, isRgba$1 = function(color2) {
  return typeof color2.red == "number" && typeof color2.green == "number" && typeof color2.blue == "number" && typeof color2.alpha == "number";
}, isHsl$1 = function(color2) {
  return typeof color2.hue == "number" && typeof color2.saturation == "number" && typeof color2.lightness == "number" && (typeof color2.alpha != "number" || typeof color2.alpha > "u");
}, isHsla$1 = function(color2) {
  return typeof color2.hue == "number" && typeof color2.saturation == "number" && typeof color2.lightness == "number" && typeof color2.alpha == "number";
};
function toColorString$1(color2) {
  if (typeof color2 != "object")
    throw new PolishedError$1(8);
  if (isRgba$1(color2))
    return rgba$1(color2);
  if (isRgb$1(color2))
    return rgb$1(color2);
  if (isHsla$1(color2))
    return hsla$1(color2);
  if (isHsl$1(color2))
    return hsl$1(color2);
  throw new PolishedError$1(8);
}
function curried$1(f2, length2, acc) {
  return function() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length2 ? f2.apply(this, combined) : curried$1(f2, length2, combined);
  };
}
function curry$1(f2) {
  return curried$1(f2, f2.length, []);
}
function guard$1(lowerBoundary, upperBoundary, value2) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value2));
}
function darken$1(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var hslColor = parseToHsl$1(color2);
  return toColorString$1(_extends({}, hslColor, { lightness: guard$1(0, 1, hslColor.lightness - parseFloat(amount)) }));
}
var curriedDarken$2 = curry$1(darken$1), curriedDarken$1$1 = curriedDarken$2;
function lighten$1(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var hslColor = parseToHsl$1(color2);
  return toColorString$1(_extends({}, hslColor, { lightness: guard$1(0, 1, hslColor.lightness + parseFloat(amount)) }));
}
var curriedLighten$2 = curry$1(lighten$1), curriedLighten$1$1 = curriedLighten$2;
function transparentize$1(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var parsedColor = parseToRgb$1(color2), alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1, colorWithAlpha = _extends({}, parsedColor, { alpha: guard$1(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100) });
  return rgba$1(colorWithAlpha);
}
var curriedTransparentize$2 = curry$1(transparentize$1), curriedTransparentize$1$1 = curriedTransparentize$2;
var headerCommon = ({ theme: theme3 }) => ({ margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: theme3.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }), codeCommon = ({ theme: theme3 }) => ({ lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: theme3.typography.size.s2 - 1, border: theme3.base === "light" ? `1px solid ${theme3.color.mediumlight}` : `1px solid ${theme3.color.darker}`, color: theme3.base === "light" ? curriedTransparentize$1$1(0.1, theme3.color.defaultText) : curriedTransparentize$1$1(0.3, theme3.color.defaultText), backgroundColor: theme3.base === "light" ? theme3.color.lighter : theme3.color.border }), withReset = ({ theme: theme3 }) => ({ fontFamily: theme3.typography.fonts.base, fontSize: theme3.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }), withMargin = { margin: "16px 0" };
var Link = ({ href: input, children, ...props }) => {
  let isStorybookPath = /^\//.test(input), isAnchorUrl = /^#.*/.test(input), href = isStorybookPath ? `?path=${input}` : input;
  return React$1.createElement("a", { href, target: isAnchorUrl ? "_self" : "_top", ...props }, children);
};
var A$2 = emotion_styled_browser_esm_default(Link)(withReset, ({ theme: theme3 }) => ({ fontSize: "inherit", lineHeight: "24px", color: theme3.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }));
var Blockquote = emotion_styled_browser_esm_default.blockquote(withReset, withMargin, ({ theme: theme3 }) => ({ borderLeft: `4px solid ${theme3.color.medium}`, padding: "0 15px", color: theme3.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }));
var isReactChildString = (child) => typeof child == "string";
var isInlineCodeRegex = /[\n\r]/g, DefaultCodeBlock = emotion_styled_browser_esm_default.code(({ theme: theme3 }) => ({ fontFamily: theme3.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }), codeCommon), StyledSyntaxHighlighter$1 = emotion_styled_browser_esm_default(SyntaxHighlighter2$1)(({ theme: theme3 }) => ({ fontFamily: theme3.typography.fonts.mono, fontSize: `${theme3.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: theme3.appBorderRadius, boxShadow: theme3.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), Code = ({ className, children, ...props }) => {
  var _a;
  let language = (className || "").match(/lang-(\S+)/), childrenArray = react.exports.Children.toArray(children);
  return childrenArray.filter(isReactChildString).some((child) => child.match(isInlineCodeRegex)) ? React$1.createElement(StyledSyntaxHighlighter$1, { bordered: true, copyable: true, language: (_a = language == null ? void 0 : language[1]) != null ? _a : "plaintext", format: false, ...props }, children) : React$1.createElement(DefaultCodeBlock, { ...props, className }, childrenArray);
};
var Div = emotion_styled_browser_esm_default.div(withReset);
var DL = emotion_styled_browser_esm_default.dl(withReset, { ...withMargin, padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } });
var H1 = emotion_styled_browser_esm_default.h1(withReset, headerCommon, ({ theme: theme3 }) => ({ fontSize: `${theme3.typography.size.l1}px`, fontWeight: theme3.typography.weight.black }));
var H2 = emotion_styled_browser_esm_default.h2(withReset, headerCommon, ({ theme: theme3 }) => ({ fontSize: `${theme3.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${theme3.appBorderColor}` }));
var H3 = emotion_styled_browser_esm_default.h3(withReset, headerCommon, ({ theme: theme3 }) => ({ fontSize: `${theme3.typography.size.m1}px` }));
var H4 = emotion_styled_browser_esm_default.h4(withReset, headerCommon, ({ theme: theme3 }) => ({ fontSize: `${theme3.typography.size.s3}px` }));
var H5 = emotion_styled_browser_esm_default.h5(withReset, headerCommon, ({ theme: theme3 }) => ({ fontSize: `${theme3.typography.size.s2}px` }));
var H6 = emotion_styled_browser_esm_default.h6(withReset, headerCommon, ({ theme: theme3 }) => ({ fontSize: `${theme3.typography.size.s2}px`, color: theme3.color.dark }));
var HR = emotion_styled_browser_esm_default.hr(({ theme: theme3 }) => ({ border: "0 none", borderTop: `1px solid ${theme3.appBorderColor}`, height: 4, padding: 0 }));
var Img = emotion_styled_browser_esm_default.img({ maxWidth: "100%" });
var LI = emotion_styled_browser_esm_default.li(withReset, ({ theme: theme3 }) => ({ fontSize: theme3.typography.size.s2, color: theme3.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": codeCommon({ theme: theme3 }) }));
var listCommon = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, OL = emotion_styled_browser_esm_default.ol(withReset, withMargin, { ...listCommon, listStyle: "decimal" });
var P$1 = emotion_styled_browser_esm_default.p(withReset, withMargin, ({ theme: theme3 }) => ({ fontSize: theme3.typography.size.s2, lineHeight: "24px", color: theme3.color.defaultText, "& code": codeCommon({ theme: theme3 }) }));
var Pre = emotion_styled_browser_esm_default.pre(withReset, withMargin, ({ theme: theme3 }) => ({ fontFamily: theme3.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }));
var Span = emotion_styled_browser_esm_default.span(withReset, ({ theme: theme3 }) => ({ "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${theme3.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: theme3.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }));
var Table$1 = emotion_styled_browser_esm_default.table(withReset, withMargin, ({ theme: theme3 }) => ({ fontSize: theme3.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${theme3.appBorderColor}`, backgroundColor: theme3.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: theme3.base === "dark" ? theme3.color.darker : theme3.color.lighter }, "& tr th": { fontWeight: "bold", color: theme3.color.defaultText, border: `1px solid ${theme3.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${theme3.appBorderColor}`, color: theme3.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }));
var TT = emotion_styled_browser_esm_default.title(codeCommon);
var listCommon2 = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, UL = emotion_styled_browser_esm_default.ul(withReset, withMargin, { ...listCommon2, listStyle: "disc" });
var ResetWrapper = emotion_styled_browser_esm_default.div(withReset);
var components = { h1: (props) => React$1.createElement(H1, { ...nameSpaceClassNames(props, "h1") }), h2: (props) => React$1.createElement(H2, { ...nameSpaceClassNames(props, "h2") }), h3: (props) => React$1.createElement(H3, { ...nameSpaceClassNames(props, "h3") }), h4: (props) => React$1.createElement(H4, { ...nameSpaceClassNames(props, "h4") }), h5: (props) => React$1.createElement(H5, { ...nameSpaceClassNames(props, "h5") }), h6: (props) => React$1.createElement(H6, { ...nameSpaceClassNames(props, "h6") }), pre: (props) => React$1.createElement(Pre, { ...nameSpaceClassNames(props, "pre") }), a: (props) => React$1.createElement(A$2, { ...nameSpaceClassNames(props, "a") }), hr: (props) => React$1.createElement(HR, { ...nameSpaceClassNames(props, "hr") }), dl: (props) => React$1.createElement(DL, { ...nameSpaceClassNames(props, "dl") }), blockquote: (props) => React$1.createElement(Blockquote, { ...nameSpaceClassNames(props, "blockquote") }), table: (props) => React$1.createElement(Table$1, { ...nameSpaceClassNames(props, "table") }), img: (props) => React$1.createElement(Img, { ...nameSpaceClassNames(props, "img") }), div: (props) => React$1.createElement(Div, { ...nameSpaceClassNames(props, "div") }), span: (props) => React$1.createElement(Span, { ...nameSpaceClassNames(props, "span") }), li: (props) => React$1.createElement(LI, { ...nameSpaceClassNames(props, "li") }), ul: (props) => React$1.createElement(UL, { ...nameSpaceClassNames(props, "ul") }), ol: (props) => React$1.createElement(OL, { ...nameSpaceClassNames(props, "ol") }), p: (props) => React$1.createElement(P$1, { ...nameSpaceClassNames(props, "p") }), code: (props) => React$1.createElement(Code, { ...nameSpaceClassNames(props, "code") }), tt: (props) => React$1.createElement(TT, { ...nameSpaceClassNames(props, "tt") }), resetwrapper: (props) => React$1.createElement(ResetWrapper, { ...nameSpaceClassNames(props, "resetwrapper") }) };
var BadgeWrapper = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ display: "inline-block", fontSize: 11, lineHeight: "12px", alignSelf: "center", padding: "4px 12px", borderRadius: "3em", fontWeight: theme3.typography.weight.bold }), { svg: { height: 12, width: 12, marginRight: 4, marginTop: -2, path: { fill: "currentColor" } } }, ({ theme: theme3, status }) => {
  switch (status) {
    case "critical":
      return { color: theme3.color.critical, background: theme3.background.critical };
    case "negative":
      return { color: theme3.color.negativeText, background: theme3.background.negative, boxShadow: theme3.base === "light" ? `inset 0 0 0 1px ${curriedTransparentize$1$1(0.9, theme3.color.negativeText)}` : "none" };
    case "warning":
      return { color: theme3.color.warningText, background: theme3.background.warning, boxShadow: theme3.base === "light" ? `inset 0 0 0 1px ${curriedTransparentize$1$1(0.9, theme3.color.warningText)}` : "none" };
    case "neutral":
      return { color: theme3.color.dark, background: theme3.color.mediumlight, boxShadow: theme3.base === "light" ? `inset 0 0 0 1px ${curriedTransparentize$1$1(0.9, theme3.color.dark)}` : "none" };
    case "positive":
      return { color: theme3.color.positiveText, background: theme3.background.positive, boxShadow: theme3.base === "light" ? `inset 0 0 0 1px ${curriedTransparentize$1$1(0.9, theme3.color.positiveText)}` : "none" };
    default:
      return {};
  }
}), Badge = ({ ...props }) => React$1.createElement(BadgeWrapper, { ...props });
var icons = { user: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z" })), useralt: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z" })), useradd: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z" })), users: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z" }), React$1.createElement("path", { d: "M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z" })), profile: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z" })), facehappy: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), faceneutral: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), facesad: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), accessibility: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z" }), React$1.createElement("path", { d: "M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), accessibilityalt: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z" })), arrowup: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z" })), arrowdown: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z" })), arrowleft: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z" })), arrowright: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z" })), arrowupalt: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z" })), arrowdownalt: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z" })), arrowleftalt: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z" })), arrowrightalt: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z" })), expandalt: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "m7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z" })), collapse: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z" })), expand: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z" })), unfold: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "m6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z" }), React$1.createElement("path", { d: "M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z" }), React$1.createElement("path", { d: "M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" })), transfer: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z" })), redirect: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z" })), undo: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z" })), reply: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z" })), sync: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z" })), upload: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), download: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z" })), back: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z" })), proceed: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z" })), refresh: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z" })), globe: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z" })), compass: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), location: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z" })), pin: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z" })), time: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), dashboard: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z" })), timer: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z" })), home: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "m7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z" })), admin: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z" }), React$1.createElement("path", { d: "M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z" })), info: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), question: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), support: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" })), alert: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z" })), email: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z" })), phone: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "m7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z" })), link: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z" }), React$1.createElement("path", { d: "M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z" })), unlink: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "m1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), bell: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z" })), rss: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z" }), React$1.createElement("path", { d: "M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" })), sharealt: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z" }), React$1.createElement("path", { d: "M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z" })), share: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z" }), React$1.createElement("path", { d: "M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z" })), circlehollow: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z" })), circle: React$1.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z" }), bookmarkhollow: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z" })), bookmark: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z" })), hearthollow: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2" })), heart: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z" })), starhollow: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z" })), star: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z" })), certificate: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z" })), verified: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z" })), thumbsup: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), shield: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z" })), basket: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z" }), React$1.createElement("path", { d: "M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z" }), React$1.createElement("path", { d: "M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z" })), beaker: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z" })), hourglass: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z" })), flag: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z" })), cloudhollow: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z" })), cloud: React$1.createElement("path", { d: "M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z" }), edit: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "m13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z" })), cog: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z", fill: "#333" }), React$1.createElement("path", { fillRule: "evenodd", d: "M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z" })), nut: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z" })), wrench: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), ellipsis: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" })), check: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z" })), form: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z" }), React$1.createElement("path", { d: "m6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z" })), batchdeny: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z" })), batchaccept: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z" })), controls: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z" })), plus: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z" })), closeAlt: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z" })), cross: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z" })), trash: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z" })), pinalt: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z" })), unpin: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), add: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), subtract: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), close: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), delete: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z" })), passed: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z" })), changed: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" })), failed: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z" })), clear: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z" })), comment: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z" })), commentadd: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z" })), requestchange: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z" })), comments: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z" })), lock: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z" })), unlock: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z" }), React$1.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z" })), key: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z" })), outbox: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z" }), React$1.createElement("path", { d: "M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z" })), credit: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z" })), button: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z" }), React$1.createElement("path", { d: "M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z" })), type: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z" }), React$1.createElement("path", { d: "M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z" })), pointerdefault: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z" })), pointerhand: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z" })), browser: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), tablet: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z" })), mobile: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z" })), watch: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { key: "watch", fillRule: "evenodd", d: "M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" })), sidebar: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z" })), sidebaralt: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z" })), sidebaralttoggle: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z" })), sidebartoggle: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z" })), bottombar: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z" })), bottombartoggle: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z" })), cpu: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z" })), database: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z" })), memory: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z" })), structure: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z" })), box: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "m7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z" })), power: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z" }), React$1.createElement("path", { d: "M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z" })), photo: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z" })), component: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z" })), grid: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z" })), outline: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" })), photodrag: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z" }), React$1.createElement("path", { d: "M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z" })), search: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" })), zoom: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" })), zoomout: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" })), zoomreset: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z" })), eye: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "m14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z" })), eyeclose: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z" }), React$1.createElement("path", { d: "M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z" })), lightning: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z" })), lightningoff: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), contrast: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z" })), switchalt: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z" })), mirror: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z" })), grow: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z" }), React$1.createElement("path", { d: "M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z" })), paintbrush: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z" })), ruler: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z" })), stop: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), camera: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z" })), video: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z" })), speaker: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z" }), React$1.createElement("path", { d: "M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z" }), React$1.createElement("path", { d: "M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z" })), play: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "m12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z" })), playback: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z" })), playnext: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "m2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z" })), rewind: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z" })), fastforward: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z" })), stopalt: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z" })), book: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z" })), document: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z" })), copy: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z" })), category: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z" })), folder: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z" })), print: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z" })), graphline: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z" })), calendar: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z" })), graphbar: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z" })), menu: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z" })), menualt: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z" })), filter: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" })), docchart: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z" })), doclist: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z" })), markup: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z" })), bold: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z" })), italic: React$1.createElement("path", { d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z" }), paperclip: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z" })), listordered: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z" })), listunordered: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" })), paragraph: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z" })), markdown: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z" })), repository: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z" }), React$1.createElement("path", { d: "M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z" }), React$1.createElement("path", { d: "M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z" }), React$1.createElement("path", { fillRule: "evenodd", d: "M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z" })), commit: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" })), branch: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), pullrequest: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), merge: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), apple: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z" })), linux: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z" })), ubuntu: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z" })), windows: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z" })), storybook: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z" })), azuredevops: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "m0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z" })), bitbucket: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z" })), chrome: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z" })), chromatic: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z" })), componentdriven: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z" })), discord: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z" })), facebook: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z" })), figma: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { fillRule: "evenodd", d: "M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z" })), gdrive: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z" })), github: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z" })), gitlab: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z" })), google: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z" })), graphql: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z" })), medium: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z" })), redux: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z" })), twitter: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z" })), youtube: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z" })), vscode: React$1.createElement(React$1.Fragment, null, React$1.createElement("path", { d: "M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z" })) };
var Svg = emotion_styled_browser_esm_default.svg`
  display: inline-block;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`, Icons = ({ icon, useSymbol, ...props }) => React$1.createElement(Svg, { viewBox: "0 0 14 14", width: "14px", height: "14px", ...props }, useSymbol ? React$1.createElement("use", { xlinkHref: `#icon--${icon}` }) : icons[icon]), Symbols = react.exports.memo(function({ icons: keys2 = Object.keys(icons) }) {
  return React$1.createElement(Svg, { viewBox: "0 0 14 14", style: { position: "absolute", width: 0, height: 0 }, "data-chromatic": "ignore" }, keys2.map((key) => React$1.createElement("symbol", { id: `icon--${key}`, key }, icons[key])));
});
var LEFT_BUTTON = 0, isPlainLeftClick = (e2) => e2.button === LEFT_BUTTON && !e2.altKey && !e2.ctrlKey && !e2.metaKey && !e2.shiftKey, cancelled = (e2, cb) => {
  isPlainLeftClick(e2) && (e2.preventDefault(), cb(e2));
}, LinkInner = emotion_styled_browser_esm_default.span(({ withArrow }) => withArrow ? { "> svg:last-of-type": { height: "0.7em", width: "0.7em", marginRight: 0, marginLeft: "0.25em", bottom: "auto", verticalAlign: "inherit" } } : {}, ({ containsIcon }) => containsIcon ? { svg: { height: "1em", width: "1em", verticalAlign: "middle", position: "relative", bottom: 0, marginRight: 0 } } : {}), A2 = emotion_styled_browser_esm_default.a(({ theme: theme3 }) => ({ display: "inline-block", transition: "all 150ms ease-out", textDecoration: "none", color: theme3.color.secondary, "&:hover, &:focus": { cursor: "pointer", color: curriedDarken$1$1(0.07, theme3.color.secondary), "svg path": { fill: curriedDarken$1$1(0.07, theme3.color.secondary) } }, "&:active": { color: curriedDarken$1$1(0.1, theme3.color.secondary), "svg path": { fill: curriedDarken$1$1(0.1, theme3.color.secondary) } }, svg: { display: "inline-block", height: "1em", width: "1em", verticalAlign: "text-top", position: "relative", bottom: "-0.125em", marginRight: "0.4em", "& path": { fill: theme3.color.secondary } } }), ({ theme: theme3, secondary, tertiary }) => {
  let colors;
  return secondary && (colors = [theme3.textMutedColor, theme3.color.dark, theme3.color.darker]), tertiary && (colors = [theme3.color.dark, theme3.color.darkest, theme3.textMutedColor]), colors ? { color: colors[0], "svg path": { fill: colors[0] }, "&:hover": { color: colors[1], "svg path": { fill: colors[1] } }, "&:active": { color: colors[2], "svg path": { fill: colors[2] } } } : {};
}, ({ nochrome }) => nochrome ? { color: "inherit", "&:hover, &:active": { color: "inherit", textDecoration: "underline" } } : {}, ({ theme: theme3, inverse }) => inverse ? { color: theme3.color.lightest, "svg path": { fill: theme3.color.lightest }, "&:hover": { color: theme3.color.lighter, "svg path": { fill: theme3.color.lighter } }, "&:active": { color: theme3.color.light, "svg path": { fill: theme3.color.light } } } : {}, ({ isButton }) => isButton ? { border: 0, borderRadius: 0, background: "none", padding: 0, fontSize: "inherit" } : {}), Link2 = ({ cancel, children, onClick, withArrow, containsIcon, className, ...rest }) => React$1.createElement(A2, { ...rest, onClick: onClick && cancel ? (e2) => cancelled(e2, onClick) : onClick, className }, React$1.createElement(LinkInner, { withArrow, containsIcon }, children, withArrow && React$1.createElement(Icons, { icon: "arrowright" })));
Link2.defaultProps = { cancel: true, className: void 0, style: void 0, onClick: void 0, withArrow: false, containsIcon: false };
var DocumentWrapper = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ fontSize: `${theme3.typography.size.s2}px`, lineHeight: "1.6", h1: { fontSize: `${theme3.typography.size.l1}px`, fontWeight: theme3.typography.weight.black }, h2: { fontSize: `${theme3.typography.size.m2}px`, borderBottom: `1px solid ${theme3.appBorderColor}` }, h3: { fontSize: `${theme3.typography.size.m1}px` }, h4: { fontSize: `${theme3.typography.size.s3}px` }, h5: { fontSize: `${theme3.typography.size.s2}px` }, h6: { fontSize: `${theme3.typography.size.s2}px`, color: theme3.color.dark }, "pre:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "pre pre, pre.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px" }, "pre pre code, pre.prismjs code": { color: "inherit", fontSize: "inherit" }, "pre code": { margin: 0, padding: 0, whiteSpace: "pre", border: "none", background: "transparent" }, "pre code, pre tt": { backgroundColor: "transparent", border: "none" }, "body > *:first-of-type": { marginTop: "0 !important" }, "body > *:last-child": { marginBottom: "0 !important" }, a: { color: theme3.color.secondary, textDecoration: "none" }, "a.absent": { color: "#cc0000" }, "a.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 }, "h1, h2, h3, h4, h5, h6": { margin: "20px 0 10px", padding: 0, cursor: "text", position: "relative", "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }, "h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "p, blockquote, ul, ol, dl, li, table, pre": { margin: "15px 0" }, hr: { border: "0 none", borderTop: `1px solid ${theme3.appBorderColor}`, height: 4, padding: 0 }, "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": { marginTop: 0, paddingTop: 0 }, "body > h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": { marginTop: 0, paddingTop: 0 }, "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": { marginTop: 0 }, "li p.first": { display: "inline-block" }, "ul, ol": { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, dl: { padding: 0 }, "dl dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", margin: "0 0 15px", padding: "0 15px", "&:first-of-type": { padding: 0 }, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, blockquote: { borderLeft: `4px solid ${theme3.color.medium}`, padding: "0 15px", color: theme3.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, table: { padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${theme3.appBorderColor}`, backgroundColor: "white", margin: 0, padding: 0, "& th": { fontWeight: "bold", border: `1px solid ${theme3.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "& td": { border: `1px solid ${theme3.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "&:nth-of-type(2n)": { backgroundColor: theme3.color.lighter }, "& th :first-of-type, & td :first-of-type": { marginTop: 0 }, "& th :last-child, & td :last-child": { marginBottom: 0 } } }, img: { maxWidth: "100%" }, "span.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${theme3.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: theme3.color.darkest, display: "block", padding: "5px 0 0" } }, "span.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "span.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "span.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "span.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } }, "code, tt": { margin: "0 2px", padding: "0 5px", whiteSpace: "nowrap", border: `1px solid ${theme3.color.mediumlight}`, backgroundColor: theme3.color.lighter, borderRadius: 3, color: theme3.base === "dark" && theme3.color.darkest } }));
var LazySyntaxHighlighter = react.exports.lazy(() => __vitePreload(() => import("./syntaxhighlighter-6JBF4TYN.e4a60d36.js"), true ? ["./syntaxhighlighter-6JBF4TYN.e4a60d36.js","./iframe.bff41132.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./index.36b4d5ff.js","./index.e850844b.js","./_getTag.d1b75f35.js","./index.1fb95844.js","./isNativeReflectConstruct.fd0a40b8.js"] : void 0, import.meta.url)), LazySyntaxHighlighterWithFormatter = react.exports.lazy(async () => {
  let [{ SyntaxHighlighter: SyntaxHighlighter3 }, { formatter }] = await Promise.all([__vitePreload(() => import("./syntaxhighlighter-6JBF4TYN.e4a60d36.js"), true ? ["./syntaxhighlighter-6JBF4TYN.e4a60d36.js","./iframe.bff41132.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./index.36b4d5ff.js","./index.e850844b.js","./_getTag.d1b75f35.js","./index.1fb95844.js","./isNativeReflectConstruct.fd0a40b8.js"] : void 0, import.meta.url), __vitePreload(() => import("./formatter-GBS43WFC.7f841b4b.js"), true ? ["./formatter-GBS43WFC.7f841b4b.js","./iframe.bff41132.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./index.36b4d5ff.js","./index.e850844b.js","./_getTag.d1b75f35.js","./index.1fb95844.js","./isNativeReflectConstruct.fd0a40b8.js"] : void 0, import.meta.url)]);
  return { default: (props) => React$1.createElement(SyntaxHighlighter3, { ...props, formatter }) };
}), SyntaxHighlighter2 = (props) => React$1.createElement(react.exports.Suspense, { fallback: React$1.createElement("div", null) }, props.format !== false ? React$1.createElement(LazySyntaxHighlighterWithFormatter, { ...props }) : React$1.createElement(LazySyntaxHighlighter, { ...props }));
var toNumber = (input) => typeof input == "number" ? input : Number(input), Container = emotion_styled_browser_esm_default.div(({ theme: theme3, col, row = 1 }) => col ? { display: "inline-block", verticalAlign: "inherit", "& > *": { marginLeft: col * theme3.layoutMargin, verticalAlign: "inherit" }, ["& > *:first-child"]: { marginLeft: 0 } } : { "& > *": { marginTop: row * theme3.layoutMargin }, ["& > *:first-child"]: { marginTop: 0 } }, ({ theme: theme3, outer, col, row }) => {
  switch (true) {
    case !!(outer && col):
      return { marginLeft: outer * theme3.layoutMargin, marginRight: outer * theme3.layoutMargin };
    case !!(outer && row):
      return { marginTop: outer * theme3.layoutMargin, marginBottom: outer * theme3.layoutMargin };
    default:
      return {};
  }
}), Spaced = ({ col, row, outer, children, ...rest }) => {
  let outerAmount = toNumber(typeof outer == "number" || !outer ? outer : col || row);
  return React$1.createElement(Container, { col, row, outer: outerAmount, ...rest }, children);
};
var Title$1 = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ fontWeight: theme3.typography.weight.bold })), Desc = emotion_styled_browser_esm_default.div(), Message = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ padding: 30, textAlign: "center", color: theme3.color.defaultText, fontSize: theme3.typography.size.s2 - 1 })), Placeholder = ({ children, ...props }) => {
  let [title, desc] = react.exports.Children.toArray(children);
  return React$1.createElement(Message, { ...props }, React$1.createElement(Title$1, null, title), desc && React$1.createElement(Desc, null, desc));
};
function browserSupportsCssZoom() {
  try {
    return scope.document.implementation.createHTMLDocument("").body.style.zoom !== void 0;
  } catch {
    return false;
  }
}
var hasBrowserSupportForCssZoom = browserSupportsCssZoom(), ZoomElementWrapper = emotion_styled_browser_esm_default.div(({ scale = 1, height }) => hasBrowserSupportForCssZoom ? { "> *": { zoom: 1 / scale } } : { height: height ? height + 50 : "auto", transformOrigin: "top left", transform: `scale(${1 / scale})` }), useMutationObserver = ({ element, options = {}, callback }) => {
  let observer = react.exports.useRef();
  react.exports.useEffect(() => (observer.current || (observer.current = new MutationObserver((mutationRecord, mutationObserver) => {
    callback(mutationRecord, mutationObserver);
  })), (element == null ? void 0 : element.current) && observer.current.observe(element.current, options), () => observer.current.disconnect()), [element, observer, options]);
}, mutationObserverOptions = { subtree: true, childList: true };
function ZoomElement({ scale, children }) {
  let componentWrapperRef = react.exports.useRef(null), [height, setHeight] = react.exports.useState(0), handleMutations = react.exports.useCallback(() => {
    setHeight(componentWrapperRef.current.getBoundingClientRect().height);
  }, []);
  return react.exports.useEffect(() => {
    componentWrapperRef.current && setHeight(componentWrapperRef.current.getBoundingClientRect().height);
  }, [scale, componentWrapperRef.current]), useMutationObserver({ element: componentWrapperRef, options: mutationObserverOptions, callback: handleMutations }), React$1.createElement(ZoomElementWrapper, { scale, height }, React$1.createElement("div", { ref: hasBrowserSupportForCssZoom ? null : componentWrapperRef, className: "innerZoomElementWrapper" }, children));
}
var ZoomIFrame = class extends react.exports.Component {
  constructor() {
    super(...arguments);
    this.iframe = null;
  }
  componentDidMount() {
    let { iFrameRef } = this.props;
    this.iframe = iFrameRef.current;
  }
  shouldComponentUpdate(nextProps) {
    let { scale, active } = this.props;
    return scale !== nextProps.scale && this.setIframeInnerZoom(nextProps.scale), active !== nextProps.active && this.iframe.setAttribute("data-is-storybook", nextProps.active ? "true" : "false"), nextProps.children.props.src !== this.props.children.props.src;
  }
  setIframeInnerZoom(scale) {
    try {
      browserSupportsCssZoom() ? Object.assign(this.iframe.contentDocument.body.style, { zoom: 1 / scale, minHeight: `calc(100vh / ${1 / scale})` }) : Object.assign(this.iframe.contentDocument.body.style, { width: `${scale * 100}%`, height: `${scale * 100}%`, transform: `scale(${1 / scale})`, transformOrigin: "top left" });
    } catch {
      this.setIframeZoom(scale);
    }
  }
  setIframeZoom(scale) {
    Object.assign(this.iframe.style, { width: `${scale * 100}%`, height: `${scale * 100}%`, transform: `scale(${1 / scale})`, transformOrigin: "top left" });
  }
  render() {
    let { children } = this.props;
    return children;
  }
};
var Zoom$1 = { Element: ZoomElement, IFrame: ZoomIFrame };
var ButtonWrapper = emotion_styled_browser_esm_default.button(({ small, theme: theme3 }) => ({ border: 0, borderRadius: "3em", cursor: "pointer", display: "inline-block", overflow: "hidden", padding: small ? "8px 16px" : "13px 20px", position: "relative", textAlign: "center", textDecoration: "none", transition: "all 150ms ease-out", transform: "translate3d(0,0,0)", verticalAlign: "top", whiteSpace: "nowrap", userSelect: "none", opacity: 1, margin: 0, background: "transparent", fontSize: `${small ? theme3.typography.size.s1 : theme3.typography.size.s2 - 1}px`, fontWeight: theme3.typography.weight.bold, lineHeight: "1", svg: { display: "inline-block", height: small ? 12 : 14, width: small ? 12 : 14, verticalAlign: "top", marginRight: small ? 4 : 6, marginTop: small ? 0 : -1, marginBottom: small ? 0 : -1, pointerEvents: "none", path: { fill: "currentColor" } } }), ({ disabled }) => disabled ? { cursor: "not-allowed !important", opacity: 0.5, "&:hover": { transform: "none" } } : {}, ({ containsIcon, small }) => containsIcon ? { svg: { display: "block", margin: 0 }, ...small ? { padding: 10 } : { padding: 13 } } : {}, ({ theme: theme3, primary, secondary, gray }) => {
  let color2;
  return gray ? color2 = theme3.color.mediumlight : secondary ? color2 = theme3.color.secondary : primary && (color2 = theme3.color.primary), color2 ? { background: color2, color: gray ? theme3.color.darkest : theme3.color.lightest, "&:hover": { background: curriedDarken$1$1(0.05, color2) }, "&:active": { boxShadow: "rgba(0, 0, 0, 0.1) 0 0 0 3em inset" }, "&:focus": { boxShadow: `${rgba$1(color2, 1)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${rgba$1(color2, 0.2)} 0 8px 18px 0px` } } : {};
}, ({ theme: theme3, tertiary, inForm, small }) => tertiary ? { background: theme3.button.background, color: theme3.input.color, boxShadow: `${theme3.button.border} 0 0 0 1px inset`, borderRadius: theme3.input.borderRadius, ...inForm && small ? { padding: "10px 16px" } : {}, "&:hover": { background: theme3.base === "light" ? curriedDarken$1$1(0.02, theme3.button.background) : curriedLighten$1$1(0.03, theme3.button.background), ...inForm ? {} : { boxShadow: "rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset" } }, "&:active": { background: theme3.button.background }, "&:focus": { boxShadow: `${rgba$1(theme3.color.secondary, 1)} 0 0 0 1px inset`, outline: "none" } } : {}, ({ theme: theme3, outline }) => outline ? { boxShadow: `${curriedTransparentize$1$1(0.8, theme3.color.defaultText)} 0 0 0 1px inset`, color: curriedTransparentize$1$1(0.3, theme3.color.defaultText), background: "transparent", "&:hover, &:focus": { boxShadow: `${curriedTransparentize$1$1(0.5, theme3.color.defaultText)} 0 0 0 1px inset`, outline: "none" }, "&:active": { boxShadow: `${curriedTransparentize$1$1(0.5, theme3.color.defaultText)} 0 0 0 2px inset`, color: curriedTransparentize$1$1(0, theme3.color.defaultText) } } : {}, ({ theme: theme3, outline, primary }) => {
  let color2 = theme3.color.primary;
  return outline && primary ? { boxShadow: `${color2} 0 0 0 1px inset`, color: color2, "svg path": { fill: color2 }, "&:hover": { boxShadow: `${color2} 0 0 0 1px inset`, background: "transparent" }, "&:active": { background: color2, boxShadow: `${color2} 0 0 0 1px inset`, color: theme3.color.tertiary }, "&:focus": { boxShadow: `${color2} 0 0 0 1px inset, ${rgba$1(color2, 0.4)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${color2} 0 0 0 1px inset, ${rgba$1(color2, 0.2)} 0 8px 18px 0px` } } : {};
}, ({ theme: theme3, outline, primary, secondary }) => {
  let color2;
  return secondary ? color2 = theme3.color.secondary : primary && (color2 = theme3.color.primary), outline && color2 ? { boxShadow: `${color2} 0 0 0 1px inset`, color: color2, "svg path": { fill: color2 }, "&:hover": { boxShadow: `${color2} 0 0 0 1px inset`, background: "transparent" }, "&:active": { background: color2, boxShadow: `${color2} 0 0 0 1px inset`, color: theme3.color.tertiary }, "&:focus": { boxShadow: `${color2} 0 0 0 1px inset, ${rgba$1(color2, 0.4)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${color2} 0 0 0 1px inset, ${rgba$1(color2, 0.2)} 0 8px 18px 0px` } } : {};
}), ButtonLink = ButtonWrapper.withComponent("a"), Button$1 = Object.assign(react.exports.forwardRef(function({ isLink, children, ...props }, ref) {
  return isLink ? React$1.createElement(ButtonLink, { ...props, ref }, children) : React$1.createElement(ButtonWrapper, { ...props, ref }, children);
}), { defaultProps: { isLink: false } });
var Wrapper$1 = emotion_styled_browser_esm_default.label(({ theme: theme3 }) => ({ display: "flex", borderBottom: `1px solid ${theme3.appBorderColor}`, margin: "0 15px", padding: "8px 0", "&:last-child": { marginBottom: "3rem" } })), Label$1 = emotion_styled_browser_esm_default.span(({ theme: theme3 }) => ({ minWidth: 100, fontWeight: theme3.typography.weight.bold, marginRight: 15, display: "flex", justifyContent: "flex-start", alignItems: "center", lineHeight: "16px" })), Field = ({ label, children, ...props }) => React$1.createElement(Wrapper$1, { ...props }, label ? React$1.createElement(Label$1, null, React$1.createElement("span", null, label)) : null, children);
Field.defaultProps = { label: void 0 };
var index = typeof document < "u" ? react.exports.useLayoutEffect : react.exports.useEffect, use_isomorphic_layout_effect_esm_default = index;
var useLatest = function(value2) {
  var ref = react.exports.useRef(value2);
  return use_isomorphic_layout_effect_esm_default(function() {
    ref.current = value2;
  }), ref;
};
var updateRef = function(ref, value2) {
  if (typeof ref == "function") {
    ref(value2);
    return;
  }
  ref.current = value2;
}, useComposedRef = function(libRef, userRef) {
  var prevUserRef = react.exports.useRef();
  return react.exports.useCallback(function(instance) {
    libRef.current = instance, prevUserRef.current && updateRef(prevUserRef.current, null), prevUserRef.current = userRef, userRef && updateRef(userRef, instance);
  }, [userRef]);
}, use_composed_ref_esm_default = useComposedRef;
var HIDDEN_TEXTAREA_STYLE = { "min-height": "0", "max-height": "none", height: "0", visibility: "hidden", overflow: "hidden", position: "absolute", "z-index": "-1000", top: "0", right: "0" }, forceHiddenStyles = function(node2) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
    node2.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], "important");
  });
}, hiddenTextarea = null, getHeight = function(node2, sizingData) {
  var height = node2.scrollHeight;
  return sizingData.sizingStyle.boxSizing === "border-box" ? height + sizingData.borderSize : height - sizingData.paddingSize;
};
function calculateNodeHeight(sizingData, value2, minRows, maxRows) {
  minRows === void 0 && (minRows = 1), maxRows === void 0 && (maxRows = 1 / 0), hiddenTextarea || (hiddenTextarea = document.createElement("textarea"), hiddenTextarea.setAttribute("tabindex", "-1"), hiddenTextarea.setAttribute("aria-hidden", "true"), forceHiddenStyles(hiddenTextarea)), hiddenTextarea.parentNode === null && document.body.appendChild(hiddenTextarea);
  var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle, boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function(_key) {
    var key = _key;
    hiddenTextarea.style[key] = sizingStyle[key];
  }), forceHiddenStyles(hiddenTextarea), hiddenTextarea.value = value2;
  var height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = "x";
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize, minHeight = rowHeight * minRows;
  boxSizing === "border-box" && (minHeight = minHeight + paddingSize + borderSize), height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;
  return boxSizing === "border-box" && (maxHeight = maxHeight + paddingSize + borderSize), height = Math.min(maxHeight, height), [height, rowHeight];
}
var noop$2 = function() {
}, pick = function(props, obj) {
  return props.reduce(function(acc, prop) {
    return acc[prop] = obj[prop], acc;
  }, {});
}, SIZING_STYLE = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak"], isIE = typeof document < "u" ? !!document.documentElement.currentStyle : false, getSizingData = function(node2) {
  var style = window.getComputedStyle(node2);
  if (style === null)
    return null;
  var sizingStyle = pick(SIZING_STYLE, style), boxSizing = sizingStyle.boxSizing;
  if (boxSizing === "")
    return null;
  isIE && boxSizing === "border-box" && (sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px");
  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop), borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return { sizingStyle, paddingSize, borderSize };
}, useWindowResizeListener = function(listener) {
  var latestListener = useLatest(listener);
  react.exports.useLayoutEffect(function() {
    var handler = function(event) {
      latestListener.current(event);
    };
    return window.addEventListener("resize", handler), function() {
      window.removeEventListener("resize", handler);
    };
  }, []);
}, TextareaAutosize = function(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop$2 : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = _ref$onHeightChange === void 0 ? noop$2 : _ref$onHeightChange, props = _objectWithoutPropertiesLoose(_ref, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]);
  var isControlled = props.value !== void 0, libRef = react.exports.useRef(null), ref = use_composed_ref_esm_default(libRef, userRef), heightRef = react.exports.useRef(0), measurementsCacheRef = react.exports.useRef(), resizeTextarea = function() {
    var node2 = libRef.current, nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData(node2);
    if (nodeSizingData) {
      measurementsCacheRef.current = nodeSizingData;
      var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node2.value || node2.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
      heightRef.current !== height && (heightRef.current = height, node2.style.setProperty("height", height + "px", "important"), onHeightChange(height, { rowHeight }));
    }
  }, handleChange = function(event) {
    isControlled || resizeTextarea(), onChange(event);
  };
  return typeof document < "u" && (react.exports.useLayoutEffect(resizeTextarea), useWindowResizeListener(resizeTextarea)), react.exports.createElement("textarea", _extends({}, props, { onChange: handleChange, ref }));
}, index2 = react.exports.forwardRef(TextareaAutosize), react_textarea_autosize_esm_default = index2;
var styleResets$1 = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, styles = ({ theme: theme3 }) => ({ ...styleResets$1, transition: "box-shadow 200ms ease-out, opacity 200ms ease-out", color: theme3.input.color || "inherit", background: theme3.input.background, boxShadow: `${theme3.input.border} 0 0 0 1px inset`, borderRadius: theme3.input.borderRadius, fontSize: theme3.typography.size.s2 - 1, lineHeight: "20px", padding: "6px 10px", "&:focus": { boxShadow: `${theme3.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${theme3.color.lightest} inset` }, "&::placeholder": { color: theme3.textMutedColor, opacity: 1 } }), sizes = ({ size }) => {
  switch (size) {
    case "100%":
      return { width: "100%" };
    case "flex":
      return { flex: 1 };
    case "auto":
    default:
      return { display: "inline" };
  }
}, alignment = ({ align }) => {
  switch (align) {
    case "end":
      return { textAlign: "right" };
    case "center":
      return { textAlign: "center" };
    case "start":
    default:
      return { textAlign: "left" };
  }
}, validation = ({ valid, theme: theme3 }) => {
  switch (valid) {
    case "valid":
      return { boxShadow: `${theme3.color.positive} 0 0 0 1px inset !important` };
    case "error":
      return { boxShadow: `${theme3.color.negative} 0 0 0 1px inset !important` };
    case "warn":
      return { boxShadow: `${theme3.color.warning} 0 0 0 1px inset` };
    case void 0:
    case null:
    default:
      return {};
  }
}, Input$1 = Object.assign(emotion_styled_browser_esm_default(react.exports.forwardRef(function({ size, valid, align, ...props }, ref) {
  return React$1.createElement("input", { ...props, ref });
}))(styles, sizes, alignment, validation, { minHeight: 32 }), { displayName: "Input" }), Select = Object.assign(emotion_styled_browser_esm_default(react.exports.forwardRef(function({ size, valid, align, ...props }, ref) {
  return React$1.createElement("select", { ...props, ref });
}))(styles, sizes, validation, { height: 32, userSelect: "none", paddingRight: 20, appearance: "menulist" }), { displayName: "Select" }), Textarea = Object.assign(emotion_styled_browser_esm_default(react.exports.forwardRef(function({ size, valid, align, ...props }, ref) {
  return React$1.createElement(react_textarea_autosize_esm_default, { ...props, ref });
}))(styles, sizes, alignment, validation, ({ height = 400 }) => ({ overflow: "visible", maxHeight: height })), { displayName: "Textarea" }), ButtonStyled = emotion_styled_browser_esm_default(react.exports.forwardRef(function({ size, valid, align, ...props }, ref) {
  return React$1.createElement(Button$1, { ...props, ref });
}))(sizes, validation, { userSelect: "none", overflow: "visible", zIndex: 2, "&:hover": { transform: "none" } }), Button3 = Object.assign(react.exports.forwardRef(function(props, ref) {
  return React$1.createElement(ButtonStyled, { ...props, tertiary: true, small: true, inForm: true, ref });
}), { displayName: "Button" });
var Form = Object.assign(emotion_styled_browser_esm_default.form({ boxSizing: "border-box", width: "100%" }), { Field, Input: Input$1, Select, Textarea, Button: Button3 });
var LazyWithTooltip = react.exports.lazy(() => __vitePreload(() => import("./WithTooltip-6RTI5BE5.9f51e5b6.js"), true ? ["./WithTooltip-6RTI5BE5.9f51e5b6.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./index.e850844b.js","./index.36b4d5ff.js","./iframe.bff41132.js","./_getTag.d1b75f35.js","./index.1fb95844.js","./isNativeReflectConstruct.fd0a40b8.js"] : void 0, import.meta.url).then((mod) => ({ default: mod.WithTooltip }))), WithTooltip = (props) => React$1.createElement(react.exports.Suspense, { fallback: React$1.createElement("div", null) }, React$1.createElement(LazyWithTooltip, { ...props })), LazyWithTooltipPure = react.exports.lazy(() => __vitePreload(() => import("./WithTooltip-6RTI5BE5.9f51e5b6.js"), true ? ["./WithTooltip-6RTI5BE5.9f51e5b6.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./index.e850844b.js","./index.36b4d5ff.js","./iframe.bff41132.js","./_getTag.d1b75f35.js","./index.1fb95844.js","./isNativeReflectConstruct.fd0a40b8.js"] : void 0, import.meta.url).then((mod) => ({ default: mod.WithTooltipPure }))), WithTooltipPure = (props) => React$1.createElement(react.exports.Suspense, { fallback: React$1.createElement("div", null) }, React$1.createElement(LazyWithTooltipPure, { ...props }));
var Title2$1 = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ fontWeight: theme3.typography.weight.black })), Desc2 = emotion_styled_browser_esm_default.span(), Links = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ marginTop: 8, textAlign: "center", "> *": { margin: "0 8px", fontWeight: theme3.typography.weight.black } })), Message2 = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ color: theme3.color.defaultText, lineHeight: "18px" })), MessageWrapper = emotion_styled_browser_esm_default.div({ padding: 15, width: 280, boxSizing: "border-box" }), TooltipMessage = ({ title, desc, links }) => React$1.createElement(MessageWrapper, null, React$1.createElement(Message2, null, title && React$1.createElement(Title2$1, null, title), desc && React$1.createElement(Desc2, null, desc)), links && React$1.createElement(Links, null, links.map(({ title: linkTitle, ...other }) => React$1.createElement(Link2, { ...other, key: linkTitle }, linkTitle))));
TooltipMessage.defaultProps = { title: null, desc: null, links: null };
var Note = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ padding: "2px 6px", lineHeight: "16px", fontSize: 10, fontWeight: theme3.typography.weight.bold, color: theme3.color.lightest, boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)", borderRadius: 4, whiteSpace: "nowrap", pointerEvents: "none", zIndex: -1, background: theme3.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)", margin: 6 })), TooltipNote = ({ note, ...props }) => React$1.createElement(Note, { ...props }, note);
var Title3 = emotion_styled_browser_esm_default(({ active, loading, disabled, ...rest }) => React$1.createElement("span", { ...rest }))(({ theme: theme3 }) => ({ color: theme3.color.defaultText, fontWeight: theme3.typography.weight.regular }), ({ active, theme: theme3 }) => active ? { color: theme3.color.primary, fontWeight: theme3.typography.weight.bold } : {}, ({ loading, theme: theme3 }) => loading ? { display: "inline-block", flex: "none", ...theme3.animation.inlineGlow } : {}, ({ disabled, theme: theme3 }) => disabled ? { color: curriedTransparentize$1$1(0.7, theme3.color.defaultText) } : {}), Right = emotion_styled_browser_esm_default.span({ "& svg": { transition: "all 200ms ease-out", opacity: 0, height: 12, width: 12, margin: "3px 0", verticalAlign: "top" }, "& path": { fill: "inherit" } }, ({ active, theme: theme3 }) => active ? { "& svg": { opacity: 1 }, "& path": { fill: theme3.color.primary } } : {}), Center = emotion_styled_browser_esm_default.span({ flex: 1, textAlign: "left", display: "inline-flex", "& > * + *": { paddingLeft: 10 } }), CenterText = emotion_styled_browser_esm_default.span({ flex: 1, textAlign: "center" }, ({ active, theme: theme3 }) => active ? { color: theme3.color.primary } : {}, ({ theme: theme3, disabled }) => disabled ? { color: theme3.textMutedColor } : {}), Left = emotion_styled_browser_esm_default.span(({ active, theme: theme3 }) => active ? { "& svg": { opacity: 1 }, "& path": { fill: theme3.color.primary } } : {}), Item = emotion_styled_browser_esm_default.a(({ theme: theme3 }) => ({ fontSize: theme3.typography.size.s1, transition: "all 150ms ease-out", color: curriedTransparentize$1$1(0.5, theme3.color.defaultText), textDecoration: "none", cursor: "pointer", justifyContent: "space-between", lineHeight: "18px", padding: "7px 15px", display: "flex", alignItems: "center", "& > * + *": { paddingLeft: 10 }, "&:hover": { background: theme3.background.hoverable }, "&:hover svg": { opacity: 1 } }), ({ disabled }) => disabled ? { cursor: "not-allowed" } : {}), getItemProps = memoize$1(100)((onClick, href, LinkWrapper) => {
  let result = {};
  return onClick && Object.assign(result, { onClick }), href && Object.assign(result, { href }), LinkWrapper && href && Object.assign(result, { to: href, as: LinkWrapper }), result;
}), ListItem = ({ loading, left: left2, title, center, right: right2, active, disabled, href, onClick, LinkWrapper, ...rest }) => {
  let itemProps = getItemProps(onClick, href, LinkWrapper), commonProps = { active, disabled };
  return React$1.createElement(Item, { ...commonProps, ...rest, ...itemProps }, left2 && React$1.createElement(Left, { ...commonProps }, left2), title || center ? React$1.createElement(Center, null, title && React$1.createElement(Title3, { ...commonProps, loading }, title), center && React$1.createElement(CenterText, { ...commonProps }, center)) : null, right2 && React$1.createElement(Right, { ...commonProps }, right2));
};
ListItem.defaultProps = { loading: false, left: null, title: React$1.createElement("span", null, "Loading state"), center: null, right: null, active: false, disabled: false, href: null, LinkWrapper: null, onClick: null };
var ListItem_default = ListItem;
var List = emotion_styled_browser_esm_default.div({ minWidth: 180, overflow: "hidden", overflowY: "auto", maxHeight: 15.5 * 32 }, ({ theme: theme3 }) => ({ borderRadius: theme3.appBorderRadius * 2 })), Item2 = (props) => {
  let { LinkWrapper, onClick: onClickFromProps, ...rest } = props, { title, href, active } = rest, onClick = react.exports.useCallback((event) => {
    onClickFromProps(event, rest);
  }, [onClickFromProps]);
  return React$1.createElement(ListItem_default, { title, active, href, LinkWrapper, ...rest, ...!!onClickFromProps ? { onClick } : {} });
}, TooltipLinkList = ({ links, LinkWrapper }) => React$1.createElement(List, null, links.map(({ isGatsby, ...p2 }) => React$1.createElement(Item2, { key: p2.id, LinkWrapper: isGatsby ? LinkWrapper : null, ...p2 })));
TooltipLinkList.defaultProps = { LinkWrapper: ListItem_default.defaultProps.LinkWrapper };
var Side = emotion_styled_browser_esm_default.div({ display: "flex", whiteSpace: "nowrap", flexBasis: "auto", flexShrink: 0, marginLeft: 3, marginRight: 3 }, ({ left: left2 }) => left2 ? { "& > *": { marginLeft: 4 } } : {}, ({ right: right2 }) => right2 ? { marginLeft: 30, "& > *": { marginRight: 4 } } : {});
Side.displayName = "Side";
var UnstyledBar = ({ children, className }) => React$1.createElement(ScrollArea, { horizontal: true, vertical: false, className }, children), Bar$1 = emotion_styled_browser_esm_default(UnstyledBar)(({ theme: theme3 }) => ({ color: theme3.barTextColor, width: "100%", height: 40, flexShrink: 0, overflow: "auto", overflowY: "hidden" }), ({ theme: theme3, border = false }) => border ? { boxShadow: `${theme3.appBorderColor}  0 -1px 0 0 inset`, background: theme3.barBg } : {});
Bar$1.displayName = "Bar";
var BarInner = emotion_styled_browser_esm_default.div(({ bgColor }) => ({ display: "flex", justifyContent: "space-between", position: "relative", flexWrap: "nowrap", flexShrink: 0, height: 40, backgroundColor: bgColor || "" })), FlexBar = ({ children, backgroundColor, ...rest }) => {
  let [left2, right2] = react.exports.Children.toArray(children);
  return React$1.createElement(Bar$1, { ...rest }, React$1.createElement(BarInner, { bgColor: backgroundColor }, React$1.createElement(Side, { left: true }, left2), right2 ? React$1.createElement(Side, { right: true }, right2) : null));
};
FlexBar.displayName = "FlexBar";
var ButtonOrLink = ({ children, ...restProps }) => restProps.href != null ? React$1.createElement("a", { ...restProps }, children) : React$1.createElement("button", { type: "button", ...restProps }, children), TabButton = emotion_styled_browser_esm_default(ButtonOrLink, { shouldForwardProp: emotion_is_prop_valid_esm_default })({ whiteSpace: "normal", display: "inline-flex", overflow: "hidden", verticalAlign: "top", justifyContent: "center", alignItems: "center", textAlign: "center", textDecoration: "none", "&:empty": { display: "none" } }, ({ theme: theme3 }) => ({ padding: "0 15px", transition: "color 0.2s linear, border-bottom-color 0.2s linear", height: 40, lineHeight: "12px", cursor: "pointer", background: "transparent", border: "0 solid transparent", borderTop: "3px solid transparent", borderBottom: "3px solid transparent", fontWeight: "bold", fontSize: 13, "&:focus": { outline: "0 none", borderBottomColor: theme3.color.secondary } }), ({ active, textColor, theme: theme3 }) => active ? { color: textColor || theme3.barSelectedColor, borderBottomColor: theme3.barSelectedColor } : { color: textColor || theme3.barTextColor, borderBottomColor: "transparent" });
TabButton.displayName = "TabButton";
var IconButton = emotion_styled_browser_esm_default(ButtonOrLink, { shouldForwardProp: emotion_is_prop_valid_esm_default })(() => ({ alignItems: "center", background: "transparent", border: "none", borderRadius: 4, color: "inherit", cursor: "pointer", display: "inline-flex", fontSize: 13, fontWeight: "bold", height: 28, justifyContent: "center", marginTop: 6, padding: "8px 7px", "& > svg": { width: 14 } }), ({ active, theme: theme3 }) => active ? { backgroundColor: theme3.background.hoverable, color: theme3.color.secondary } : {}, ({ disabled, theme: theme3 }) => disabled ? { opacity: 0.5, cursor: "not-allowed" } : { "&:hover, &:focus-visible": { background: curriedTransparentize$1$1(0.88, theme3.color.secondary), color: theme3.color.secondary }, "&:focus-visible": { outline: auto }, "&:focus:not(:focus-visible)": { outline: "none" } });
IconButton.displayName = "IconButton";
var IconPlaceholder = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ width: 14, height: 14, backgroundColor: theme3.appBorderColor, animation: `${theme3.animation.glow} 1.5s ease-in-out infinite` })), IconButtonSkeletonWrapper = emotion_styled_browser_esm_default.div(() => ({ marginTop: 6, padding: 7, height: 28 })), IconButtonSkeleton = () => React$1.createElement(IconButtonSkeletonWrapper, null, React$1.createElement(IconPlaceholder, null));
var Wrapper2$1 = emotion_styled_browser_esm_default.div(({ theme: theme3, bordered }) => bordered ? { backgroundClip: "padding-box", border: `1px solid ${theme3.appBorderColor}`, borderRadius: theme3.appBorderRadius, overflow: "hidden", boxSizing: "border-box" } : {}, ({ absolute }) => absolute ? { width: "100%", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" } : { display: "block" }), TabBar = emotion_styled_browser_esm_default.div({ overflow: "hidden", "&:first-of-type": { marginLeft: -3 } }), Content = emotion_styled_browser_esm_default.div({ display: "block", position: "relative" }, ({ theme: theme3 }) => ({ fontSize: theme3.typography.size.s2 - 1, background: theme3.background.content }), ({ bordered, theme: theme3 }) => bordered ? { borderRadius: `0 0 ${theme3.appBorderRadius - 1}px ${theme3.appBorderRadius - 1}px` } : {}, ({ absolute, bordered }) => absolute ? { height: `calc(100% - ${bordered ? 42 : 40}px)`, position: "absolute", left: 0 + (bordered ? 1 : 0), right: 0 + (bordered ? 1 : 0), bottom: 0 + (bordered ? 1 : 0), top: 40 + (bordered ? 1 : 0), overflow: "auto", ["& > *:first-child"]: { position: "absolute", left: 0 + (bordered ? 1 : 0), right: 0 + (bordered ? 1 : 0), bottom: 0 + (bordered ? 1 : 0), top: 0 + (bordered ? 1 : 0), height: `calc(100% - ${bordered ? 2 : 0}px)`, overflow: "auto" } } : {}), VisuallyHidden = emotion_styled_browser_esm_default.div(({ active }) => active ? { display: "block" } : { display: "none" }), TabWrapper = ({ active, render, children }) => React$1.createElement(VisuallyHidden, { active }, render ? render() : children);
var childrenToList = (children, selected) => react.exports.Children.toArray(children).map(({ props: { title, id, color: color2, children: childrenOfChild } }, index3) => {
  let content = Array.isArray(childrenOfChild) ? childrenOfChild[0] : childrenOfChild;
  return { active: selected ? id === selected : index3 === 0, title, id, color: color2, render: typeof content == "function" ? content : ({ active, key }) => React$1.createElement(VisuallyHidden, { key, active, role: "tabpanel" }, content) };
}), Tabs = react.exports.memo(({ children, selected, actions, absolute, bordered, tools, backgroundColor, id: htmlId }) => {
  let list = childrenToList(children, selected);
  return list.length ? React$1.createElement(Wrapper2$1, { absolute, bordered, id: htmlId }, React$1.createElement(FlexBar, { border: true, backgroundColor }, React$1.createElement(TabBar, { role: "tablist" }, list.map(({ title, id, active, color: color2 }) => {
    let tabTitle = typeof title == "function" ? title() : title;
    return React$1.createElement(TabButton, { id: `tabbutton-${sanitize(tabTitle)}`, className: `tabbutton ${active ? "tabbutton-active" : ""}`, type: "button", key: id, active, textColor: color2, onClick: (e2) => {
      e2.preventDefault(), actions.onSelect(id);
    }, role: "tab" }, tabTitle);
  })), tools ? React$1.createElement(react.exports.Fragment, null, tools) : null), React$1.createElement(Content, { id: "panel-tab-content", bordered, absolute }, list.map(({ id, active, render }) => render({ key: id, active })))) : React$1.createElement(Placeholder, null, React$1.createElement(react.exports.Fragment, { key: "title" }, "Nothing found"));
});
Tabs.displayName = "Tabs";
Tabs.defaultProps = { id: null, children: null, tools: null, selected: null, absolute: false, bordered: false };
var TabsState = class extends react.exports.Component {
  constructor(props) {
    super(props);
    this.handlers = { onSelect: (id) => this.setState({ selected: id }) };
    this.state = { selected: props.initial };
  }
  render() {
    let { bordered = false, absolute = false, children, backgroundColor } = this.props, { selected } = this.state;
    return React$1.createElement(Tabs, { bordered, absolute, selected, backgroundColor, actions: this.handlers }, children);
  }
};
TabsState.defaultProps = { children: [], initial: null, absolute: false, bordered: false, backgroundColor: "" };
var Separator = emotion_styled_browser_esm_default.span(({ theme: theme3 }) => ({ width: 1, height: 20, background: theme3.appBorderColor, marginTop: 10, marginLeft: 6, marginRight: 2 }), ({ force }) => force ? {} : { "& + &": { display: "none" } });
Separator.displayName = "Separator";
var interleaveSeparators = (list) => list.reduce((acc, item, index3) => item ? React$1.createElement(react.exports.Fragment, { key: item.id || item.key || `f-${index3}` }, acc, index3 > 0 ? React$1.createElement(Separator, { key: `s-${index3}` }) : null, item.render() || item) : acc, null);
var usePrevious = (value2) => {
  let ref = react.exports.useRef();
  return react.exports.useEffect(() => {
    ref.current = value2;
  }, [value2]), ref.current;
}, useUpdate = (update, value2) => {
  let previousValue = usePrevious(value2);
  return update ? value2 : previousValue;
}, AddonPanel = ({ active, children }) => React$1.createElement("div", { hidden: !active }, useUpdate(active, children));
var StorybookLogo = ({ alt, ...props }) => React$1.createElement("svg", { width: "200px", height: "40px", viewBox: "0 0 200 40", ...props, role: "img" }, alt ? React$1.createElement("title", null, alt) : null, React$1.createElement("defs", null, React$1.createElement("path", { d: "M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z", id: "a" })), React$1.createElement("g", { fill: "none", fillRule: "evenodd" }, React$1.createElement("path", { d: "M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z", fill: "currentColor" }), React$1.createElement("mask", { id: "b", fill: "#fff" }, React$1.createElement("use", { xlinkHref: "#a" })), React$1.createElement("use", { fill: "#FF4785", fillRule: "nonzero", xlinkHref: "#a" }), React$1.createElement("path", { d: "M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z", fill: "#FFF", fillRule: "nonzero", mask: "url(#b)" })));
var StorybookIcon = ({ ...props }) => React$1.createElement("svg", { viewBox: "0 0 64 64", ...props }, React$1.createElement("title", null, "Storybook icon"), React$1.createElement("g", { id: "Artboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" }, React$1.createElement("path", { d: "M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z", id: "path-1", fill: "#FF4785", fillRule: "nonzero" }), React$1.createElement("path", { d: "M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z", id: "path9_fill-path", fill: "#FFFFFF", fillRule: "nonzero" }), React$1.createElement("path", { d: "M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z", id: "Path", fill: "#FFFFFF" })));
var rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
var LoaderWrapper = emotion_styled_browser_esm_default.div(({ size = 32 }) => ({ borderRadius: "50%", cursor: "progress", display: "inline-block", overflow: "hidden", position: "absolute", transition: "all 200ms ease-out", verticalAlign: "top", top: "50%", left: "50%", marginTop: -(size / 2), marginLeft: -(size / 2), height: size, width: size, zIndex: 4, borderWidth: 2, borderStyle: "solid", borderColor: "rgba(97, 97, 97, 0.29)", borderTopColor: "rgb(100,100,100)", animation: `${rotate360} 0.7s linear infinite`, mixBlendMode: "difference" })), ProgressWrapper = emotion_styled_browser_esm_default.div({ position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }), ProgressTrack = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ position: "relative", width: "80%", marginBottom: "0.75rem", maxWidth: 300, height: 5, borderRadius: 5, background: curriedTransparentize$1$1(0.8, theme3.color.secondary), overflow: "hidden", cursor: "progress" })), ProgressBar = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ position: "absolute", top: 0, left: 0, height: "100%", background: theme3.color.secondary })), ProgressMessage = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ minHeight: "2em", fontSize: `${theme3.typography.size.s1}px`, color: theme3.barTextColor })), ErrorIcon = emotion_styled_browser_esm_default(Icons)(({ theme: theme3 }) => ({ width: 20, height: 20, marginBottom: "0.5rem", color: theme3.textMutedColor })), ellipsis = keyframes`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`, Ellipsis = emotion_styled_browser_esm_default.span({ "&::after": { content: "'...'", animation: `${ellipsis} 1s linear infinite`, animationDelay: "1s", display: "inline-block", width: "1em", height: "auto" } }), Loader = ({ progress, error, size, ...props }) => {
  if (error)
    return React$1.createElement(ProgressWrapper, { "aria-label": error.toString(), "aria-live": "polite", role: "status", ...props }, React$1.createElement(ErrorIcon, { icon: "lightningoff" }), React$1.createElement(ProgressMessage, null, error.message));
  if (progress) {
    let { value: value2, modules } = progress, { message } = progress;
    return modules && (message += ` ${modules.complete} / ${modules.total} modules`), React$1.createElement(ProgressWrapper, { "aria-label": "Content is loading...", "aria-live": "polite", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": value2 * 100, "aria-valuetext": message, role: "progressbar", ...props }, React$1.createElement(ProgressTrack, null, React$1.createElement(ProgressBar, { style: { width: `${value2 * 100}%` } })), React$1.createElement(ProgressMessage, null, message, value2 < 1 && React$1.createElement(Ellipsis, { key: message })));
  }
  return React$1.createElement(LoaderWrapper, { "aria-label": "Content is loading...", "aria-live": "polite", role: "status", size, ...props });
};
function parseQuery(queryString) {
  let query = {}, pairs = queryString.split("&");
  for (let i2 = 0; i2 < pairs.length; i2++) {
    let pair = pairs[i2].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}
var getStoryHref = (baseUrl, storyId, additionalParams = {}) => {
  let [url, paramsStr] = baseUrl.split("?"), params = paramsStr ? { ...parseQuery(paramsStr), ...additionalParams, id: storyId } : { ...additionalParams, id: storyId };
  return `${url}?${Object.entries(params).map((item) => `${item[0]}=${item[1]}`).join("&")}`;
};
var components2 = components, resetComponents = {};
Object.keys(components).forEach((key) => {
  resetComponents[key] = react.exports.forwardRef((props, ref) => react.exports.createElement(key, { ...props, ref }));
});
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  A: A$2,
  ActionBar,
  AddonPanel,
  Badge,
  Bar: Bar$1,
  Blockquote,
  Button: Button$1,
  Code,
  DL,
  Div,
  DocumentWrapper,
  FlexBar,
  Form,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HR,
  IconButton,
  IconButtonSkeleton,
  Icons,
  Img,
  LI,
  Link: Link2,
  Loader,
  OL,
  P: P$1,
  Placeholder,
  Pre,
  ResetWrapper,
  ScrollArea,
  Separator,
  Spaced,
  Span,
  StorybookIcon,
  StorybookLogo,
  Symbols,
  SyntaxHighlighter: SyntaxHighlighter2,
  TT,
  TabBar,
  TabButton,
  TabWrapper,
  Table: Table$1,
  Tabs,
  TabsState,
  TooltipLinkList,
  TooltipMessage,
  TooltipNote,
  UL,
  WithTooltip,
  WithTooltipPure,
  Zoom: Zoom$1,
  codeCommon,
  components: components2,
  createCopyToClipboardFunction,
  getStoryHref,
  interleaveSeparators,
  nameSpaceClassNames,
  resetComponents,
  withReset
}, Symbol.toStringTag, { value: "Module" }));
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf$2(subClass, superClass);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct$2()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a2 = [null];
      a2.push.apply(a2, args2);
      var Constructor = Function.bind.apply(Parent2, a2);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf$2(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper7);
    }
    function Wrapper7() {
      return _construct(Class2, arguments, _getPrototypeOf$2(this).constructor);
    }
    Wrapper7.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper7,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf$2(Wrapper7, Class2);
  };
  return _wrapNativeSuper(Class);
}
var PolishedError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    var _this;
    {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    }
    return _assertThisInitialized$2(_this);
  }
  return PolishedError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function colorToInt(color2) {
  return Math.round(color2 * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert2) {
  if (convert2 === void 0) {
    convert2 = convertToInt;
  }
  if (saturation === 0) {
    return convert2(lightness, lightness, lightness);
  }
  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert2(finalRed, finalGreen, finalBlue);
}
var namedColorMap = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function nameToHex(color2) {
  if (typeof color2 !== "string")
    return color2;
  var normalizedColorName = color2.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color2;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color2) {
  if (typeof color2 !== "string") {
    throw new PolishedError(3);
  }
  var normalizedColor = nameToHex(color2);
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha
    };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
    };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);
    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;
    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;
    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
    };
  }
  throw new PolishedError(5);
}
function rgbToHsl(color2) {
  var red = color2.red / 255;
  var green = color2.green / 255;
  var blue = color2.blue / 255;
  var max2 = Math.max(red, green, blue);
  var min2 = Math.min(red, green, blue);
  var lightness = (max2 + min2) / 2;
  if (max2 === min2) {
    if (color2.alpha !== void 0) {
      return {
        hue: 0,
        saturation: 0,
        lightness,
        alpha: color2.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness
      };
    }
  }
  var hue;
  var delta = max2 - min2;
  var saturation = lightness > 0.5 ? delta / (2 - max2 - min2) : delta / (max2 + min2);
  switch (max2) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  hue *= 60;
  if (color2.alpha !== void 0) {
    return {
      hue,
      saturation,
      lightness,
      alpha: color2.alpha
    };
  }
  return {
    hue,
    saturation,
    lightness
  };
}
function parseToHsl(color2) {
  return rgbToHsl(parseToRgb(color2));
}
var reduceHexValue = function reduceHexValue2(value2) {
  if (value2.length === 7 && value2[1] === value2[2] && value2[3] === value2[4] && value2[5] === value2[6]) {
    return "#" + value2[1] + value2[3] + value2[5];
  }
  return value2;
};
var reduceHexValue$1 = reduceHexValue;
function numberToHex(value2) {
  var hex = value2.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color2) {
  return numberToHex(Math.round(color2 * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
function hsl(value2, saturation, lightness) {
  if (typeof value2 === "number" && typeof saturation === "number" && typeof lightness === "number") {
    return hslToHex(value2, saturation, lightness);
  } else if (typeof value2 === "object" && saturation === void 0 && lightness === void 0) {
    return hslToHex(value2.hue, value2.saturation, value2.lightness);
  }
  throw new PolishedError(1);
}
function hsla(value2, saturation, lightness, alpha) {
  if (typeof value2 === "number" && typeof saturation === "number" && typeof lightness === "number" && typeof alpha === "number") {
    return alpha >= 1 ? hslToHex(value2, saturation, lightness) : "rgba(" + hslToRgb(value2, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value2 === "object" && saturation === void 0 && lightness === void 0 && alpha === void 0) {
    return value2.alpha >= 1 ? hslToHex(value2.hue, value2.saturation, value2.lightness) : "rgba(" + hslToRgb(value2.hue, value2.saturation, value2.lightness) + "," + value2.alpha + ")";
  }
  throw new PolishedError(2);
}
function rgb(value2, green, blue) {
  if (typeof value2 === "number" && typeof green === "number" && typeof blue === "number") {
    return reduceHexValue$1("#" + numberToHex(value2) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value2 === "object" && green === void 0 && blue === void 0) {
    return reduceHexValue$1("#" + numberToHex(value2.red) + numberToHex(value2.green) + numberToHex(value2.blue));
  }
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === "string" && typeof secondValue === "number") {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === "number" && typeof secondValue === "number" && typeof thirdValue === "number" && typeof fourthValue === "number") {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
var isRgb = function isRgb2(color2) {
  return typeof color2.red === "number" && typeof color2.green === "number" && typeof color2.blue === "number" && (typeof color2.alpha !== "number" || typeof color2.alpha === "undefined");
};
var isRgba = function isRgba2(color2) {
  return typeof color2.red === "number" && typeof color2.green === "number" && typeof color2.blue === "number" && typeof color2.alpha === "number";
};
var isHsl = function isHsl2(color2) {
  return typeof color2.hue === "number" && typeof color2.saturation === "number" && typeof color2.lightness === "number" && (typeof color2.alpha !== "number" || typeof color2.alpha === "undefined");
};
var isHsla = function isHsla2(color2) {
  return typeof color2.hue === "number" && typeof color2.saturation === "number" && typeof color2.lightness === "number" && typeof color2.alpha === "number";
};
function toColorString(color2) {
  if (typeof color2 !== "object")
    throw new PolishedError(8);
  if (isRgba(color2))
    return rgba(color2);
  if (isRgb(color2))
    return rgb(color2);
  if (isHsla(color2))
    return hsla(color2);
  if (isHsl(color2))
    return hsl(color2);
  throw new PolishedError(8);
}
function curried(f2, length2, acc) {
  return function fn() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length2 ? f2.apply(this, combined) : curried(f2, length2, combined);
  };
}
function curry(f2) {
  return curried(f2, f2.length, []);
}
function guard(lowerBoundary, upperBoundary, value2) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value2));
}
function darken(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends$2({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
}
var curriedDarken = /* @__PURE__ */ curry(darken);
var curriedDarken$1 = curriedDarken;
function lighten(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends$2({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
}
var curriedLighten = /* @__PURE__ */ curry(lighten);
var curriedLighten$1 = curriedLighten;
function opacify(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var parsedColor = parseToRgb(color2);
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends$2({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });
  return rgba(colorWithAlpha);
}
var curriedOpacify = /* @__PURE__ */ curry(opacify);
var curriedOpacify$1 = curriedOpacify;
function transparentize(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var parsedColor = parseToRgb(color2);
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends$2({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = /* @__PURE__ */ curry(transparentize);
var curriedTransparentize$1 = curriedTransparentize;
function e() {
  return (e = Object.assign || function(t) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var n2 = arguments[e2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (t[r2] = n2[r2]);
    }
    return t;
  }).apply(this, arguments);
}
const n = ["children", "options"], r = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((t, e2) => (t[e2.toLowerCase()] = e2, t), { for: "htmlFor" }), o = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: "\xA0", quot: "\u201C" }, c = ["style", "script"], a = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, u = /mailto:/i, i = /\n{2,}$/, l = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/, s = /^ *> ?/gm, _ = /^ {2,}\n/, f = /^(?:( *[-*_]) *){3,}(?:\n *)+\n/, d = /^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/, p = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, g = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, m = /^(?:\n *)*\n/, y = /\r\n?/g, h = /^\[\^([^\]]+)](:.*)\n/, k = /^\[\^([^\]]+)]/, x = /\f/g, b = /^\s*?\[(x|\s)\]/, v = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, S = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, $ = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i, w = /&([a-z]+);/g, z = /^<!--[\s\S]*?(?:-->)/, E = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, A$1 = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, R = /^\{.*\}$/, I = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, M = /^<([^ >]+@[^ >]+)>/, O = /^<([^ >]+:\/[^ >]+)>/, B = / *\n+$/, L = /(?:^|\n)( *)$/, T = /-([a-z])?/gi, j = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/, C = /^\[([^\]]*)\]:\s+(\S+)\s*("([^"]*)")?/, D = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, N = /^\[([^\]]*)\] ?\[([^\]]*)\]/, Z = /(\[|\])/g, F = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, P = /\t/g, G = /^ *\| */, H = /(^ *\||\| *$)/g, q = / *$/, U = /^ *:-+: *$/, V = /^ *:-+ *$/, W = /^ *-+: *$/, Q = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/, X = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/, J = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/, K = /^\\([^0-9A-Za-z\s])/, Y = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, tt = /^\n+/, et = /^([ \t]*)/, nt = /\\([^0-9A-Z\s])/gi, rt = new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"), ot = new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)", "gm"), ct = new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"), at = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*", ut = new RegExp("^\\[(" + at + `)\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), it = new RegExp("^!\\[(" + at + `)\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), lt = [l, p, d, v, S, z, ot, ct, j], st = [...lt, /^[^\n]+(?:  \n|\n{2,})/, $, A$1];
function _t(t) {
  return t.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function ft(t) {
  return W.test(t) ? "right" : U.test(t) ? "center" : V.test(t) ? "left" : null;
}
function dt(t, e2, n2) {
  const r2 = n2.t;
  n2.t = true;
  const o2 = e2(t.trim(), n2);
  n2.t = r2;
  let c2 = [[]];
  return o2.forEach(function(t2, e3) {
    "tableSeparator" === t2.type ? 0 !== e3 && e3 !== o2.length - 1 && c2.push([]) : ("text" !== t2.type || null != o2[e3 + 1] && "tableSeparator" !== o2[e3 + 1].type || (t2.content = t2.content.replace(q, "")), c2[c2.length - 1].push(t2));
  }), c2;
}
function pt(t, e2, n2) {
  n2.o = true;
  const r2 = dt(t[1], e2, n2), o2 = t[2].replace(H, "").split("|").map(ft), c2 = function(t2, e3, n3) {
    return t2.trim().split("\n").map(function(t3) {
      return dt(t3, e3, n3);
    });
  }(t[3], e2, n2);
  return n2.o = false, { align: o2, cells: c2, header: r2, type: "table" };
}
function gt(t, e2) {
  return null == t.align[e2] ? {} : { textAlign: t.align[e2] };
}
function mt(t) {
  return function(e2, n2) {
    return n2.o ? t.exec(e2) : null;
  };
}
function yt(t) {
  return function(e2, n2) {
    return n2.o || n2.u ? t.exec(e2) : null;
  };
}
function ht(t) {
  return function(e2, n2) {
    return n2.o || n2.u ? null : t.exec(e2);
  };
}
function kt(t) {
  return function(e2) {
    return t.exec(e2);
  };
}
function xt(t, e2, n2) {
  if (e2.o || e2.u)
    return null;
  if (n2 && !n2.endsWith("\n"))
    return null;
  let r2 = "";
  t.split("\n").every((t2) => !lt.some((e3) => e3.test(t2)) && (r2 += t2 + "\n", t2.trim()));
  const o2 = r2.trimEnd();
  return "" == o2 ? null : [r2, o2];
}
function bt(t) {
  try {
    if (decodeURIComponent(t).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data):/i))
      return null;
  } catch (t2) {
    return null;
  }
  return t;
}
function vt(t) {
  return t.replace(nt, "$1");
}
function St(t, e2, n2) {
  const r2 = n2.o || false, o2 = n2.u || false;
  n2.o = true, n2.u = true;
  const c2 = t(e2, n2);
  return n2.o = r2, n2.u = o2, c2;
}
function $t(t, e2, n2) {
  const r2 = n2.o || false, o2 = n2.u || false;
  n2.o = false, n2.u = true;
  const c2 = t(e2, n2);
  return n2.o = r2, n2.u = o2, c2;
}
function wt(t, e2, n2) {
  return n2.o = false, t(e2 + "\n\n", n2);
}
const zt = (t, e2, n2) => ({ content: St(e2, t[1], n2) });
function Et() {
  return {};
}
function At() {
  return null;
}
function Rt(...t) {
  return t.filter(Boolean).join(" ");
}
function It(t, e2, n2) {
  let r2 = t;
  const o2 = e2.split(".");
  for (; o2.length && (r2 = r2[o2[0]], void 0 !== r2); )
    o2.shift();
  return r2 || n2;
}
var Mt;
function Ot(n2, H7 = {}) {
  H7.overrides = H7.overrides || {}, H7.slugify = H7.slugify || _t, H7.namedCodesToUnicode = H7.namedCodesToUnicode ? e({}, o, H7.namedCodesToUnicode) : o;
  const q2 = H7.createElement || react.exports.createElement;
  function U2(t, n3, ...r2) {
    const o2 = It(H7.overrides, `${t}.props`, {});
    return q2(function(t2, e2) {
      const n4 = It(e2, t2);
      return n4 ? "function" == typeof n4 || "object" == typeof n4 && "render" in n4 ? n4 : It(e2, `${t2}.component`, t2) : t2;
    }(t, H7.overrides), e({}, n3, o2, { className: Rt(null == n3 ? void 0 : n3.className, o2.className) || void 0 }), ...r2);
  }
  function V2(e2) {
    let n3 = false;
    H7.forceInline ? n3 = true : H7.forceBlock || (n3 = false === F.test(e2));
    const r2 = dt2(ft2(n3 ? e2 : `${e2.trimEnd().replace(tt, "")}

`, { o: n3 }));
    for (; "string" == typeof r2[r2.length - 1] && !r2[r2.length - 1].trim(); )
      r2.pop();
    if (null === H7.wrapper)
      return r2;
    const o2 = H7.wrapper || (n3 ? "span" : "div");
    let c2;
    if (r2.length > 1 || H7.forceWrapper)
      c2 = r2;
    else {
      if (1 === r2.length)
        return c2 = r2[0], "string" == typeof c2 ? U2("span", { key: "outer" }, c2) : c2;
      c2 = null;
    }
    return react.exports.createElement(o2, { key: "outer" }, c2);
  }
  function W2(e2) {
    const n3 = e2.match(a);
    return n3 ? n3.reduce(function(e3, n4, o2) {
      const c2 = n4.indexOf("=");
      if (-1 !== c2) {
        const a2 = function(t) {
          return -1 !== t.indexOf("-") && null === t.match(E) && (t = t.replace(T, function(t2, e4) {
            return e4.toUpperCase();
          })), t;
        }(n4.slice(0, c2)).trim(), u2 = function(t) {
          const e4 = t[0];
          return ('"' === e4 || "'" === e4) && t.length >= 2 && t[t.length - 1] === e4 ? t.slice(1, -1) : t;
        }(n4.slice(c2 + 1).trim()), i2 = r[a2] || a2, l2 = e3[i2] = function(t, e4) {
          return "style" === t ? e4.split(/;\s?/).reduce(function(t2, e5) {
            const n5 = e5.slice(0, e5.indexOf(":"));
            return t2[n5.replace(/(-[a-z])/g, (t3) => t3[1].toUpperCase())] = e5.slice(n5.length + 1).trim(), t2;
          }, {}) : "href" === t ? bt(e4) : (e4.match(R) && (e4 = e4.slice(1, e4.length - 1)), "true" === e4 || "false" !== e4 && e4);
        }(a2, u2);
        "string" == typeof l2 && ($.test(l2) || A$1.test(l2)) && (e3[i2] = react.exports.cloneElement(V2(l2.trim()), { key: o2 }));
      } else
        "style" !== n4 && (e3[r[n4] || n4] = true);
      return e3;
    }, {}) : void 0;
  }
  const nt2 = [], at2 = {}, lt2 = { blockQuote: { i: ht(l), l: Mt.HIGH, _: (t, e2, n3) => ({ content: e2(t[0].replace(s, ""), n3) }), p: (t, e2, n3) => U2("blockquote", { key: n3.g }, e2(t.content, n3)) }, breakLine: { i: kt(_), l: Mt.HIGH, _: Et, p: (t, e2, n3) => U2("br", { key: n3.g }) }, breakThematic: { i: ht(f), l: Mt.HIGH, _: Et, p: (t, e2, n3) => U2("hr", { key: n3.g }) }, codeBlock: { i: ht(p), l: Mt.MAX, _: (t) => ({ content: t[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""), lang: void 0 }), p: (t, e2, n3) => U2("pre", { key: n3.g }, U2("code", { className: t.lang ? `lang-${t.lang}` : "" }, t.content)) }, codeFenced: { i: ht(d), l: Mt.MAX, _: (t) => ({ content: t[3], lang: t[2] || void 0, type: "codeBlock" }) }, codeInline: { i: yt(g), l: Mt.LOW, _: (t) => ({ content: t[2] }), p: (t, e2, n3) => U2("code", { key: n3.g }, t.content) }, footnote: { i: ht(h), l: Mt.MAX, _: (t) => (nt2.push({ footnote: t[2], identifier: t[1] }), {}), p: At }, footnoteReference: { i: mt(k), l: Mt.HIGH, _: (t) => ({ content: t[1], target: `#${H7.slugify(t[1])}` }), p: (t, e2, n3) => U2("a", { key: n3.g, href: bt(t.target) }, U2("sup", { key: n3.g }, t.content)) }, gfmTask: { i: mt(b), l: Mt.HIGH, _: (t) => ({ completed: "x" === t[1].toLowerCase() }), p: (t, e2, n3) => U2("input", { checked: t.completed, key: n3.g, readOnly: true, type: "checkbox" }) }, heading: { i: ht(v), l: Mt.HIGH, _: (t, e2, n3) => ({ content: St(e2, t[2], n3), id: H7.slugify(t[2]), level: t[1].length }), p: (t, e2, n3) => (t.tag = `h${t.level}`, U2(t.tag, { id: t.id, key: n3.g }, e2(t.content, n3))) }, headingSetext: { i: ht(S), l: Mt.MAX, _: (t, e2, n3) => ({ content: St(e2, t[1], n3), level: "=" === t[2] ? 1 : 2, type: "heading" }) }, htmlComment: { i: kt(z), l: Mt.HIGH, _: () => ({}), p: At }, image: { i: yt(it), l: Mt.HIGH, _: (t) => ({ alt: t[1], target: vt(t[2]), title: t[3] }), p: (t, e2, n3) => U2("img", { key: n3.g, alt: t.alt || void 0, title: t.title || void 0, src: bt(t.target) }) }, link: { i: mt(ut), l: Mt.LOW, _: (t, e2, n3) => ({ content: $t(e2, t[1], n3), target: vt(t[2]), title: t[3] }), p: (t, e2, n3) => U2("a", { key: n3.g, href: bt(t.target), title: t.title }, e2(t.content, n3)) }, linkAngleBraceStyleDetector: { i: mt(O), l: Mt.MAX, _: (t) => ({ content: [{ content: t[1], type: "text" }], target: t[1], type: "link" }) }, linkBareUrlDetector: { i: (t, e2) => e2.m ? null : mt(I)(t, e2), l: Mt.MAX, _: (t) => ({ content: [{ content: t[1], type: "text" }], target: t[1], title: void 0, type: "link" }) }, linkMailtoDetector: { i: mt(M), l: Mt.MAX, _(t) {
    let e2 = t[1], n3 = t[1];
    return u.test(n3) || (n3 = "mailto:" + n3), { content: [{ content: e2.replace("mailto:", ""), type: "text" }], target: n3, type: "link" };
  } }, list: { i(t, e2, n3) {
    const r2 = L.exec(n3);
    return !r2 || !e2.h && e2.o ? null : ct.exec(t = r2[1] + t);
  }, l: Mt.HIGH, _(t, e2, n3) {
    const r2 = t[2], o2 = r2.length > 1, c2 = o2 ? +r2 : void 0, a2 = t[0].replace(i, "\n").match(ot);
    let u2 = false;
    return { items: a2.map(function(t2, r3) {
      const o3 = rt.exec(t2)[0].length, c3 = new RegExp("^ {1," + o3 + "}", "gm"), i2 = t2.replace(c3, "").replace(rt, ""), l2 = r3 === a2.length - 1, s2 = -1 !== i2.indexOf("\n\n") || l2 && u2;
      u2 = s2;
      const _2 = n3.o, f2 = n3.h;
      let d2;
      n3.h = true, s2 ? (n3.o = false, d2 = i2.replace(B, "\n\n")) : (n3.o = true, d2 = i2.replace(B, ""));
      const p2 = e2(d2, n3);
      return n3.o = _2, n3.h = f2, p2;
    }), ordered: o2, start: c2 };
  }, p: (t, e2, n3) => U2(t.ordered ? "ol" : "ul", { key: n3.g, start: t.start }, t.items.map(function(t2, r2) {
    return U2("li", { key: r2 }, e2(t2, n3));
  })) }, newlineCoalescer: { i: ht(m), l: Mt.LOW, _: Et, p: () => "\n" }, paragraph: { i: xt, l: Mt.LOW, _: zt, p: (t, e2, n3) => U2("p", { key: n3.g }, e2(t.content, n3)) }, ref: { i: mt(C), l: Mt.MAX, _: (t) => (at2[t[1]] = { target: t[2], title: t[4] }, {}), p: At }, refImage: { i: yt(D), l: Mt.MAX, _: (t) => ({ alt: t[1] || void 0, ref: t[2] }), p: (t, e2, n3) => U2("img", { key: n3.g, alt: t.alt, src: bt(at2[t.ref].target), title: at2[t.ref].title }) }, refLink: { i: mt(N), l: Mt.MAX, _: (t, e2, n3) => ({ content: e2(t[1], n3), fallbackContent: e2(t[0].replace(Z, "\\$1"), n3), ref: t[2] }), p: (t, e2, n3) => at2[t.ref] ? U2("a", { key: n3.g, href: bt(at2[t.ref].target), title: at2[t.ref].title }, e2(t.content, n3)) : U2("span", { key: n3.g }, e2(t.fallbackContent, n3)) }, table: { i: ht(j), l: Mt.HIGH, _: pt, p: (t, e2, n3) => U2("table", { key: n3.g }, U2("thead", null, U2("tr", null, t.header.map(function(r2, o2) {
    return U2("th", { key: o2, style: gt(t, o2) }, e2(r2, n3));
  }))), U2("tbody", null, t.cells.map(function(r2, o2) {
    return U2("tr", { key: o2 }, r2.map(function(r3, o3) {
      return U2("td", { key: o3, style: gt(t, o3) }, e2(r3, n3));
    }));
  }))) }, tableSeparator: { i: function(t, e2) {
    return e2.t ? G.exec(t) : null;
  }, l: Mt.HIGH, _: function() {
    return { type: "tableSeparator" };
  }, p: () => " | " }, text: { i: kt(Y), l: Mt.MIN, _: (t) => ({ content: t[0].replace(w, (t2, e2) => H7.namedCodesToUnicode[e2] ? H7.namedCodesToUnicode[e2] : t2) }), p: (t) => t.content }, textBolded: { i: yt(Q), l: Mt.MED, _: (t, e2, n3) => ({ content: e2(t[2], n3) }), p: (t, e2, n3) => U2("strong", { key: n3.g }, e2(t.content, n3)) }, textEmphasized: { i: yt(X), l: Mt.LOW, _: (t, e2, n3) => ({ content: e2(t[2], n3) }), p: (t, e2, n3) => U2("em", { key: n3.g }, e2(t.content, n3)) }, textEscaped: { i: yt(K), l: Mt.HIGH, _: (t) => ({ content: t[1], type: "text" }) }, textStrikethroughed: { i: yt(J), l: Mt.LOW, _: zt, p: (t, e2, n3) => U2("del", { key: n3.g }, e2(t.content, n3)) } };
  true !== H7.disableParsingRawHTML && (lt2.htmlBlock = { i: kt($), l: Mt.HIGH, _(t, e2, n3) {
    const [, r2] = t[3].match(et), o2 = new RegExp(`^${r2}`, "gm"), a2 = t[3].replace(o2, ""), u2 = (i2 = a2, st.some((t2) => t2.test(i2)) ? wt : St);
    var i2;
    const l2 = t[1].toLowerCase(), s2 = -1 !== c.indexOf(l2);
    n3.m = n3.m || "a" === l2;
    const _2 = s2 ? t[3] : u2(e2, a2, n3);
    return n3.m = false, { attrs: W2(t[2]), content: _2, noInnerParse: s2, tag: s2 ? l2 : t[1] };
  }, p: (t, n3, r2) => U2(t.tag, e({ key: r2.g }, t.attrs), t.noInnerParse ? t.content : n3(t.content, r2)) }, lt2.htmlSelfClosing = { i: kt(A$1), l: Mt.HIGH, _: (t) => ({ attrs: W2(t[2] || ""), tag: t[1] }), p: (t, n3, r2) => U2(t.tag, e({}, t.attrs, { key: r2.g })) });
  const ft2 = function(t) {
    let e2 = Object.keys(t);
    function n3(r2, o2) {
      let c2 = [], a2 = "";
      for (; r2; ) {
        let u2 = 0;
        for (; u2 < e2.length; ) {
          const i2 = e2[u2], l2 = t[i2], s2 = l2.i(r2, o2, a2);
          if (s2) {
            const t2 = s2[0];
            r2 = r2.substring(t2.length);
            const e3 = l2._(s2, n3, o2);
            null == e3.type && (e3.type = i2), c2.push(e3), a2 = t2;
            break;
          }
          u2++;
        }
      }
      return c2;
    }
    return e2.sort(function(e3, n4) {
      let r2 = t[e3].l, o2 = t[n4].l;
      return r2 !== o2 ? r2 - o2 : e3 < n4 ? -1 : 1;
    }), function(t2, e3) {
      return n3(function(t3) {
        return t3.replace(y, "\n").replace(x, "").replace(P, "    ");
      }(t2), e3);
    };
  }(lt2), dt2 = (Ot2 = function(t) {
    return function(e2, n3, r2) {
      return t[e2.type].p(e2, n3, r2);
    };
  }(lt2), function t(e2, n3 = {}) {
    if (Array.isArray(e2)) {
      const r2 = n3.g, o2 = [];
      let c2 = false;
      for (let r3 = 0; r3 < e2.length; r3++) {
        n3.g = r3;
        const a2 = t(e2[r3], n3), u2 = "string" == typeof a2;
        u2 && c2 ? o2[o2.length - 1] += a2 : null !== a2 && o2.push(a2), c2 = u2;
      }
      return n3.g = r2, o2;
    }
    return Ot2(e2, t, n3);
  });
  var Ot2;
  const Bt = V2(n2);
  return nt2.length ? U2("div", null, Bt, U2("footer", { key: "footer" }, nt2.map(function(t) {
    return U2("div", { id: H7.slugify(t.identifier), key: t.identifier }, t.identifier, dt2(ft2(t.footnote, { o: true })));
  }))) : Bt;
}
!function(t) {
  t[t.MAX = 0] = "MAX", t[t.HIGH = 1] = "HIGH", t[t.MED = 2] = "MED", t[t.LOW = 3] = "LOW", t[t.MIN = 4] = "MIN";
}(Mt || (Mt = {}));
const Markdown2 = (e2) => {
  let { children: r2, options: o2 } = e2, c2 = function(t, e3) {
    if (null == t)
      return {};
    var n2, r3, o3 = {}, c3 = Object.keys(t);
    for (r3 = 0; r3 < c3.length; r3++)
      e3.indexOf(n2 = c3[r3]) >= 0 || (o3[n2] = t[n2]);
    return o3;
  }(e2, n);
  return react.exports.cloneElement(Ot(r2, o2), c2);
};
var baseAssignValue$1 = _baseAssignValue, eq = eq_1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function assignValue$3(object2, key, value2) {
  var objValue = object2[key];
  if (!(hasOwnProperty$2.call(object2, key) && eq(objValue, value2)) || value2 === void 0 && !(key in object2)) {
    baseAssignValue$1(object2, key, value2);
  }
}
var _assignValue = assignValue$3;
var assignValue$2 = _assignValue, castPath$1 = _castPath, isIndex = _isIndex, isObject$3 = isObject_1, toKey = _toKey;
function baseSet$1(object2, path, value2, customizer) {
  if (!isObject$3(object2)) {
    return object2;
  }
  path = castPath$1(path, object2);
  var index3 = -1, length2 = path.length, lastIndex = length2 - 1, nested = object2;
  while (nested != null && ++index3 < length2) {
    var key = toKey(path[index3]), newValue = value2;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object2;
    }
    if (index3 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$3(objValue) ? objValue : isIndex(path[index3 + 1]) ? [] : {};
      }
    }
    assignValue$2(nested, key, newValue);
    nested = nested[key];
  }
  return object2;
}
var _baseSet = baseSet$1;
var baseGet = _baseGet, baseSet = _baseSet, castPath = _castPath;
function basePickBy$1(object2, paths, predicate) {
  var index3 = -1, length2 = paths.length, result = {};
  while (++index3 < length2) {
    var path = paths[index3], value2 = baseGet(object2, path);
    if (predicate(value2, path)) {
      baseSet(result, castPath(path, object2), value2);
    }
  }
  return result;
}
var _basePickBy = basePickBy$1;
var arrayPush = _arrayPush, getPrototype$1 = _getPrototype, getSymbols$1 = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object2) {
  var result = [];
  while (object2) {
    arrayPush(result, getSymbols$1(object2));
    object2 = getPrototype$1(object2);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
function nativeKeysIn$1(object2) {
  var result = [];
  if (object2 != null) {
    for (var key in Object(object2)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$2 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeysIn$1(object2) {
  if (!isObject$2(object2)) {
    return nativeKeysIn(object2);
  }
  var isProto = isPrototype$1(object2), result = [];
  for (var key in object2) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object2, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike = isArrayLike_1;
function keysIn$3(object2) {
  return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
}
var keysIn_1 = keysIn$3;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn$1 = _getSymbolsIn, keysIn$2 = keysIn_1;
function getAllKeysIn$2(object2) {
  return baseGetAllKeys(object2, keysIn$2, getSymbolsIn$1);
}
var _getAllKeysIn = getAllKeysIn$2;
var arrayMap = _arrayMap, baseIteratee = _baseIteratee, basePickBy = _basePickBy, getAllKeysIn$1 = _getAllKeysIn;
function pickBy(object2, predicate) {
  if (object2 == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn$1(object2), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object2, props, function(value2, path) {
    return predicate(value2, path[0]);
  });
}
var pickBy_1 = pickBy;
function baseFindIndex$1(array2, predicate, fromIndex, fromRight) {
  var length2 = array2.length, index3 = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index3-- : ++index3 < length2) {
    if (predicate(array2[index3], index3, array2)) {
      return index3;
    }
  }
  return -1;
}
var _baseFindIndex = baseFindIndex$1;
function baseIsNaN$1(value2) {
  return value2 !== value2;
}
var _baseIsNaN = baseIsNaN$1;
function strictIndexOf$1(array2, value2, fromIndex) {
  var index3 = fromIndex - 1, length2 = array2.length;
  while (++index3 < length2) {
    if (array2[index3] === value2) {
      return index3;
    }
  }
  return -1;
}
var _strictIndexOf = strictIndexOf$1;
var baseFindIndex = _baseFindIndex, baseIsNaN = _baseIsNaN, strictIndexOf = _strictIndexOf;
function baseIndexOf$1(array2, value2, fromIndex) {
  return value2 === value2 ? strictIndexOf(array2, value2, fromIndex) : baseFindIndex(array2, baseIsNaN, fromIndex);
}
var _baseIndexOf = baseIndexOf$1;
var baseIndexOf = _baseIndexOf;
function arrayIncludes$1(array2, value2) {
  var length2 = array2 == null ? 0 : array2.length;
  return !!length2 && baseIndexOf(array2, value2, 0) > -1;
}
var _arrayIncludes = arrayIncludes$1;
function arrayIncludesWith$1(array2, value2, comparator) {
  var index3 = -1, length2 = array2 == null ? 0 : array2.length;
  while (++index3 < length2) {
    if (comparator(value2, array2[index3])) {
      return true;
    }
  }
  return false;
}
var _arrayIncludesWith = arrayIncludesWith$1;
function noop$1() {
}
var noop_1 = noop$1;
var Set$1 = _Set, noop = noop_1, setToArray$1 = _setToArray;
var INFINITY = 1 / 0;
var createSet$1 = !(Set$1 && 1 / setToArray$1(new Set$1([, -0]))[1] == INFINITY) ? noop : function(values) {
  return new Set$1(values);
};
var _createSet = createSet$1;
var SetCache = _SetCache, arrayIncludes = _arrayIncludes, arrayIncludesWith = _arrayIncludesWith, cacheHas = _cacheHas, createSet = _createSet, setToArray = _setToArray;
var LARGE_ARRAY_SIZE = 200;
function baseUniq$1(array2, iteratee, comparator) {
  var index3 = -1, includes = arrayIncludes, length2 = array2.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  } else if (length2 >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array2);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index3 < length2) {
      var value2 = array2[index3], computed = iteratee ? iteratee(value2) : value2;
      value2 = comparator || value2 !== 0 ? value2 : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value2);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value2);
      }
    }
  return result;
}
var _baseUniq = baseUniq$1;
var baseUniq = _baseUniq;
function uniq(array2) {
  return array2 && array2.length ? baseUniq(array2) : [];
}
var uniq_1 = uniq;
function arrayEach$1(array2, iteratee) {
  var index3 = -1, length2 = array2 == null ? 0 : array2.length;
  while (++index3 < length2) {
    if (iteratee(array2[index3], index3, array2) === false) {
      break;
    }
  }
  return array2;
}
var _arrayEach = arrayEach$1;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$4(source, props, object2, customizer) {
  var isNew = !object2;
  object2 || (object2 = {});
  var index3 = -1, length2 = props.length;
  while (++index3 < length2) {
    var key = props[index3];
    var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object2, key, newValue);
    } else {
      assignValue$1(object2, key, newValue);
    }
  }
  return object2;
}
var _copyObject = copyObject$4;
var copyObject$3 = _copyObject, keys$1 = keys_1;
function baseAssign$1(object2, source) {
  return object2 && copyObject$3(source, keys$1(source), object2);
}
var _baseAssign = baseAssign$1;
var copyObject$2 = _copyObject, keysIn$1 = keysIn_1;
function baseAssignIn$1(object2, source) {
  return object2 && copyObject$2(source, keysIn$1(source), object2);
}
var _baseAssignIn = baseAssignIn$1;
var _cloneBuffer = { exports: {} };
(function(module, exports) {
  var root = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length2 = buffer.length, result = allocUnsafe ? allocUnsafe(length2) : new buffer.constructor(length2);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
function copyArray$1(source, array2) {
  var index3 = -1, length2 = source.length;
  array2 || (array2 = Array(length2));
  while (++index3 < length2) {
    array2[index3] = source[index3];
  }
  return array2;
}
var _copyArray = copyArray$1;
var copyObject$1 = _copyObject, getSymbols = _getSymbols;
function copySymbols$1(source, object2) {
  return copyObject$1(source, getSymbols(source), object2);
}
var _copySymbols = copySymbols$1;
var copyObject = _copyObject, getSymbolsIn = _getSymbolsIn;
function copySymbolsIn$1(source, object2) {
  return copyObject(source, getSymbolsIn(source), object2);
}
var _copySymbolsIn = copySymbolsIn$1;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray$1(array2) {
  var length2 = array2.length, result = new array2.constructor(length2);
  if (length2 && typeof array2[0] == "string" && hasOwnProperty.call(array2, "index")) {
    result.index = array2.index;
    result.input = array2.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var Uint8Array$1 = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$1 = _Symbol;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object2, tag, isDeep) {
  var Ctor = object2.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object2);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object2);
    case dataViewTag$1:
      return cloneDataView(object2, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object2, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object2);
    case regexpTag$1:
      return cloneRegExp(object2);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object2);
  }
}
var _initCloneByTag = initCloneByTag$1;
var isObject$1 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object2() {
  }
  return function(proto) {
    if (!isObject$1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object2.prototype = proto;
    var result = new object2();
    object2.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
var baseCreate = _baseCreate, getPrototype = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$1(object2) {
  return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
}
var _initCloneObject = initCloneObject$1;
var getTag$2 = _getTag, isObjectLike$1 = isObjectLike_1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value2) {
  return isObjectLike$1(value2) && getTag$2(value2) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtil.exports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike = isObjectLike_1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value2) {
  return isObjectLike(value2) && getTag$1(value2) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBuffer.exports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray = isArray_1, isBuffer = isBuffer$1.exports, isMap = isMap_1, isObject = isObject_1, isSet = isSet_1, keys = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$1(value2, bitmask, customizer, key, object2, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object2 ? customizer(value2, key, object2, stack) : customizer(value2);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value2)) {
    return value2;
  }
  var isArr = isArray(value2);
  if (isArr) {
    result = initCloneArray(value2);
    if (!isDeep) {
      return copyArray(value2, result);
    }
  } else {
    var tag = getTag(value2), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value2)) {
      return cloneBuffer(value2, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object2) {
      result = isFlat || isFunc ? {} : initCloneObject(value2);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value2, baseAssignIn(result, value2)) : copySymbols(value2, baseAssign(result, value2));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object2 ? value2 : {};
      }
      result = initCloneByTag(value2, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value2);
  if (stacked) {
    return stacked;
  }
  stack.set(value2, result);
  if (isSet(value2)) {
    value2.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value2, stack));
    });
  } else if (isMap(value2)) {
    value2.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value2, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value2);
  arrayEach(props || value2, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value2[key2];
    }
    assignValue(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value2, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
var baseClone = _baseClone;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value2) {
  return baseClone(value2, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
  for (key of iter.keys()) {
    if (dequal(key, tar))
      return key;
  }
}
function dequal(foo, bar) {
  var ctor, len, tmp;
  if (foo === bar)
    return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date)
      return foo.getTime() === bar.getTime();
    if (ctor === RegExp)
      return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len]))
          ;
      }
      return len === -1;
    }
    if (ctor === Set) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len;
        if (tmp && typeof tmp === "object") {
          tmp = find(bar, tmp);
          if (!tmp)
            return false;
        }
        if (!bar.has(tmp))
          return false;
      }
      return true;
    }
    if (ctor === Map) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len[0];
        if (tmp && typeof tmp === "object") {
          tmp = find(bar, tmp);
          if (!tmp)
            return false;
        }
        if (!dequal(len[1], bar.get(tmp))) {
          return false;
        }
      }
      return true;
    }
    if (ctor === ArrayBuffer) {
      foo = new Uint8Array(foo);
      bar = new Uint8Array(bar);
    } else if (ctor === DataView) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo.getInt8(len) === bar.getInt8(len))
          ;
      }
      return len === -1;
    }
    if (ArrayBuffer.isView(foo)) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo[len] === bar[len])
          ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
          return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor]))
          return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}
var Wrapper = emotion_styled_browser_esm_default.div(withReset, ({ theme: theme3 }) => ({ backgroundColor: theme3.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)", borderRadius: theme3.appBorderRadius, border: `1px dashed ${theme3.appBorderColor}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, margin: "25px 0 40px", color: curriedTransparentize$1(0.3, theme3.color.defaultText), fontSize: theme3.typography.size.s2 })), EmptyBlock = (props) => React$1.createElement(Wrapper, { ...props, className: "docblock-emptyblock" });
var StyledSyntaxHighlighter = emotion_styled_browser_esm_default(SyntaxHighlighter2)(({ theme: theme3 }) => ({ fontSize: `${theme3.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: theme3.appBorderRadius, boxShadow: theme3.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } }));
var SourceSkeletonWrapper = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ background: theme3.background.content, borderRadius: theme3.appBorderRadius, border: `1px solid ${theme3.appBorderColor}`, boxShadow: theme3.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" })), SourceSkeletonPlaceholder = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ animation: `${theme3.animation.glow} 1.5s ease-in-out infinite`, background: theme3.appBorderColor, height: 17, marginTop: 1, width: "60%", ["&:first-child"]: { margin: 0 } })), SourceSkeleton = () => React$1.createElement(SourceSkeletonWrapper, null, React$1.createElement(SourceSkeletonPlaceholder, null), React$1.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } }), React$1.createElement(SourceSkeletonPlaceholder, { style: { width: "30%" } }), React$1.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } })), Source = (props) => {
  let { isLoading, error } = props;
  if (isLoading)
    return React$1.createElement(SourceSkeleton, null);
  if (error)
    return React$1.createElement(EmptyBlock, null, error);
  let { language, code, dark, format: format2, ...rest } = props, syntaxHighlighter = React$1.createElement(StyledSyntaxHighlighter, { bordered: true, copyable: true, format: format2, language, className: "docblock-source", ...rest }, code);
  if (typeof dark > "u")
    return syntaxHighlighter;
  let overrideTheme = dark ? themes.dark : themes.light;
  return React$1.createElement(ThemeProvider, { theme: convert(overrideTheme) }, syntaxHighlighter);
};
Source.defaultProps = { format: false };
var Description = ({ markdown }) => React$1.createElement(Markdown2, { options: { forceBlock: true, overrides: { code: components2.code, pre: components2.pre, a: components2.a } } }, markdown);
var UNSTYLED_SELECTORS = [".sb-unstyled", ".sbdocs-preview", ".sbdocs-pre", ".sb-story", ".docblock-source", ".sb-anchor"].join(", "), toGlobalSelector = (element) => `& :where(${element}:not(${UNSTYLED_SELECTORS}, :where(${UNSTYLED_SELECTORS}) ${element}))`, breakpoint = 600, Title = emotion_styled_browser_esm_default.h1(withReset, ({ theme: theme3 }) => ({ color: theme3.color.defaultText, fontSize: theme3.typography.size.m3, fontWeight: theme3.typography.weight.black, lineHeight: "32px", [`@media (min-width: ${breakpoint}px)`]: { fontSize: theme3.typography.size.l1, lineHeight: "36px", marginBottom: ".5rem" } })), Subtitle = emotion_styled_browser_esm_default.h2(withReset, ({ theme: theme3 }) => ({ fontWeight: theme3.typography.weight.regular, fontSize: theme3.typography.size.s3, lineHeight: "20px", borderBottom: "none", marginBottom: 15, [`@media (min-width: ${breakpoint}px)`]: { fontSize: theme3.typography.size.m1, lineHeight: "28px", marginBottom: 24 }, color: curriedTransparentize$1(0.25, theme3.color.defaultText) })), DocsContent = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => {
  let reset = { fontFamily: theme3.typography.fonts.base, fontSize: theme3.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, headers = { margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: theme3.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& code": { fontSize: "inherit" } }, code = { lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: theme3.typography.size.s2 - 1, border: theme3.base === "light" ? `1px solid ${theme3.color.mediumlight}` : `1px solid ${theme3.color.darker}`, color: theme3.base === "light" ? curriedTransparentize$1(0.1, theme3.color.defaultText) : curriedTransparentize$1(0.3, theme3.color.defaultText), backgroundColor: theme3.base === "light" ? theme3.color.lighter : theme3.color.border };
  return { maxWidth: 1e3, width: "100%", ...reset, [toGlobalSelector("a")]: { ...reset, fontSize: "inherit", lineHeight: "24px", color: theme3.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }, [toGlobalSelector("blockquote")]: { ...reset, margin: "16px 0", borderLeft: `4px solid ${theme3.color.medium}`, padding: "0 15px", color: theme3.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, [toGlobalSelector("div")]: reset, [toGlobalSelector("dl")]: { ...reset, margin: "16px 0", padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }, [toGlobalSelector("h1")]: { ...reset, ...headers, fontSize: `${theme3.typography.size.l1}px`, fontWeight: theme3.typography.weight.black }, [toGlobalSelector("h2")]: { ...reset, ...headers, fontSize: `${theme3.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${theme3.appBorderColor}` }, [toGlobalSelector("h3")]: { ...reset, ...headers, fontSize: `${theme3.typography.size.m1}px` }, [toGlobalSelector("h4")]: { ...reset, ...headers, fontSize: `${theme3.typography.size.s3}px` }, [toGlobalSelector("h5")]: { ...reset, ...headers, fontSize: `${theme3.typography.size.s2}px` }, [toGlobalSelector("h6")]: { ...reset, ...headers, fontSize: `${theme3.typography.size.s2}px`, color: theme3.color.dark }, [toGlobalSelector("hr")]: { border: "0 none", borderTop: `1px solid ${theme3.appBorderColor}`, height: 4, padding: 0 }, [toGlobalSelector("img")]: { maxWidth: "100%" }, [toGlobalSelector("li")]: { ...reset, fontSize: theme3.typography.size.s2, color: theme3.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": code }, [toGlobalSelector("ol")]: { ...reset, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, [toGlobalSelector("p")]: { ...reset, margin: "16px 0", fontSize: theme3.typography.size.s2, lineHeight: "24px", color: theme3.color.defaultText, "& code": code }, [toGlobalSelector("pre")]: { ...reset, fontFamily: theme3.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }, [toGlobalSelector("span")]: { ...reset, "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${theme3.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: theme3.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }, [toGlobalSelector("table")]: { ...reset, margin: "16px 0", fontSize: theme3.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${theme3.appBorderColor}`, backgroundColor: theme3.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: theme3.base === "dark" ? theme3.color.darker : theme3.color.lighter }, "& tr th": { fontWeight: "bold", color: theme3.color.defaultText, border: `1px solid ${theme3.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${theme3.appBorderColor}`, color: theme3.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }, [toGlobalSelector("ul")]: { ...reset, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 }, listStyle: "disc" } };
}), DocsWrapper = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ background: theme3.background.content, display: "flex", justifyContent: "center", padding: "4rem 20px", minHeight: "100vh", boxSizing: "border-box", [`@media (min-width: ${breakpoint}px)`]: {} }));
var getBlockBackgroundStyle = (theme3) => ({ borderRadius: theme3.appBorderRadius, background: theme3.background.content, boxShadow: theme3.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", border: `1px solid ${theme3.appBorderColor}` });
var Zoom = ({ zoom, resetZoom }) => React$1.createElement(React$1.Fragment, null, React$1.createElement(IconButton, { key: "zoomin", onClick: (e2) => {
  e2.preventDefault(), zoom(0.8);
}, title: "Zoom in" }, React$1.createElement(Icons, { icon: "zoom" })), React$1.createElement(IconButton, { key: "zoomout", onClick: (e2) => {
  e2.preventDefault(), zoom(1.25);
}, title: "Zoom out" }, React$1.createElement(Icons, { icon: "zoomout" })), React$1.createElement(IconButton, { key: "zoomreset", onClick: (e2) => {
  e2.preventDefault(), resetZoom();
}, title: "Reset zoom" }, React$1.createElement(Icons, { icon: "zoomreset" }))), Bar = emotion_styled_browser_esm_default(FlexBar)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" }), Toolbar = ({ isLoading, storyId, baseUrl, zoom, resetZoom, ...rest }) => React$1.createElement(Bar, { ...rest }, React$1.createElement(react.exports.Fragment, { key: "left" }, isLoading ? [1, 2, 3].map((key) => React$1.createElement(IconButtonSkeleton, { key })) : React$1.createElement(Zoom, { zoom, resetZoom })));
var ZoomContext = react.exports.createContext({ scale: 1 });
var { window: globalWindow } = scope, IFrame = class extends react.exports.Component {
  constructor() {
    super(...arguments);
    this.iframe = null;
  }
  componentDidMount() {
    let { id } = this.props;
    this.iframe = globalWindow.document.getElementById(id);
  }
  shouldComponentUpdate(nextProps) {
    let { scale } = nextProps;
    return scale !== this.props.scale && this.setIframeBodyStyle({ width: `${scale * 100}%`, height: `${scale * 100}%`, transform: `scale(${1 / scale})`, transformOrigin: "top left" }), false;
  }
  setIframeBodyStyle(style) {
    return Object.assign(this.iframe.contentDocument.body.style, style);
  }
  render() {
    let { id, title, src, allowFullScreen, scale, ...rest } = this.props;
    return React$1.createElement("iframe", { id, title, src, ...allowFullScreen ? { allow: "fullscreen" } : {}, loading: "lazy", ...rest });
  }
};
var { PREVIEW_URL } = scope, BASE_URL = PREVIEW_URL || "iframe.html";
var MISSING_STORY = (id) => id ? `Story "${id}" doesn't exist.` : "No component or story to display", InlineStory = ({ storyFn, height, id }) => React$1.createElement(react.exports.Fragment, null, height ? React$1.createElement("style", null, `#story--${id} { min-height: ${height}; transform: translateZ(0); overflow: auto }`) : null, React$1.createElement(react.exports.Fragment, null, storyFn ? react.exports.createElement(storyFn) : React$1.createElement(EmptyBlock, null, MISSING_STORY(id)))), IFrameStory = ({ id, title, height = "500px" }) => React$1.createElement("div", { style: { width: "100%", height } }, React$1.createElement(ZoomContext.Consumer, null, ({ scale }) => React$1.createElement(IFrame, { key: "iframe", id: `iframe--${id}`, title, src: getStoryHref(BASE_URL, id, { viewMode: "story" }), allowFullScreen: true, scale, style: { width: "100%", height: "100%", border: "0 none" } }))), Story = ({ children, error, inline, ...props }) => {
  let { id, title, height } = props;
  return error ? React$1.createElement(EmptyBlock, null, error) : inline ? React$1.createElement(InlineStory, { ...props }) : React$1.createElement(IFrameStory, { id, title, height });
}, StorySkeleton = () => React$1.createElement(Loader, null);
var ChildrenContainer = emotion_styled_browser_esm_default.div(({ isColumn, columns, layout }) => ({ display: isColumn || !columns ? "block" : "flex", position: "relative", flexWrap: "wrap", overflow: "auto", flexDirection: isColumn ? "column" : "row", "& .innerZoomElementWrapper > *": isColumn ? { width: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" } : { maxWidth: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" } }), ({ layout = "padded" }) => layout === "centered" || layout === "padded" ? { padding: "30px 20px", margin: -10, "& .innerZoomElementWrapper > *": { width: "auto", border: "10px solid transparent!important" } } : {}, ({ layout = "padded" }) => layout === "centered" ? { display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" } : {}, ({ columns }) => columns && columns > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${columns} - 20px)` } } : {}), StyledSource = emotion_styled_browser_esm_default(Source)(({ theme: theme3 }) => ({ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: theme3.appBorderRadius, borderBottomRightRadius: theme3.appBorderRadius, border: "none", background: theme3.base === "light" ? "rgba(0, 0, 0, 0.85)" : curriedDarken$1(0.05, theme3.background.content), color: theme3.color.lightest, button: { background: theme3.base === "light" ? "rgba(0, 0, 0, 0.85)" : curriedDarken$1(0.05, theme3.background.content) } })), PreviewContainer = emotion_styled_browser_esm_default.div(({ theme: theme3, withSource, isExpanded }) => ({ position: "relative", overflow: "hidden", margin: "25px 0 40px", ...getBlockBackgroundStyle(theme3), borderBottomLeftRadius: withSource && isExpanded && 0, borderBottomRightRadius: withSource && isExpanded && 0, borderBottomWidth: isExpanded && 0 }), ({ withToolbar }) => withToolbar && { paddingTop: 40 }), getSource = (withSource, expanded, setExpanded) => {
  switch (true) {
    case !!(withSource && withSource.error):
      return { source: null, actionItem: { title: "No code available", className: "docblock-code-toggle docblock-code-toggle--disabled", disabled: true, onClick: () => setExpanded(false) } };
    case expanded:
      return { source: React$1.createElement(StyledSource, { ...withSource, dark: true }), actionItem: { title: "Hide code", className: "docblock-code-toggle docblock-code-toggle--expanded", onClick: () => setExpanded(false) } };
    default:
      return { source: React$1.createElement(StyledSource, { ...withSource, dark: true }), actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => setExpanded(true) } };
  }
};
function getStoryId(children) {
  if (react.exports.Children.count(children) === 1) {
    let elt = children;
    if (elt.props)
      return elt.props.id;
  }
  return null;
}
var PositionedToolbar = emotion_styled_browser_esm_default(Toolbar)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }), Relative = emotion_styled_browser_esm_default.div({ overflow: "hidden", position: "relative" }), getLayout = (children) => children.reduce((result, c2) => result || (typeof c2 == "string" || typeof c2 == "number" ? "padded" : c2.props && c2.props.parameters && c2.props.parameters.layout || "padded"), void 0), Preview = ({ isLoading, isColumn, columns, children, withSource, withToolbar = false, isExpanded = false, additionalActions, className, ...props }) => {
  let [expanded, setExpanded] = react.exports.useState(isExpanded), { source, actionItem } = getSource(withSource, expanded, setExpanded), [scale, setScale] = react.exports.useState(1), previewClasses = [className].concat(["sbdocs", "sbdocs-preview"]), defaultActionItems = withSource ? [actionItem] : [], [additionalActionItems, setAdditionalActionItems] = react.exports.useState(additionalActions ? [...additionalActions] : []), actionItems = [...defaultActionItems, ...additionalActionItems], layout = getLayout(react.exports.Children.count(children) === 1 ? [children] : children), { window: globalWindow4 } = scope, copyToClipboard2 = react.exports.useCallback(async (text) => {
    let { createCopyToClipboardFunction: createCopyToClipboardFunction2 } = await __vitePreload(() => Promise.resolve().then(() => index$1), true ? void 0 : void 0, import.meta.url);
    createCopyToClipboardFunction2();
  }, []), onCopyCapture = (e2) => {
    let selection = globalWindow4.getSelection();
    selection && selection.type === "Range" || (e2.preventDefault(), additionalActionItems.filter((item) => item.title === "Copied").length === 0 && copyToClipboard2(source.props.code).then(() => {
      setAdditionalActionItems([...additionalActionItems, { title: "Copied", onClick: () => {
      } }]), globalWindow4.setTimeout(() => setAdditionalActionItems(additionalActionItems.filter((item) => item.title !== "Copied")), 1500);
    }));
  };
  return React$1.createElement(PreviewContainer, { withSource, withToolbar, ...props, className: previewClasses.join(" ") }, withToolbar && React$1.createElement(PositionedToolbar, { isLoading, border: true, zoom: (z2) => setScale(scale * z2), resetZoom: () => setScale(1), storyId: getStoryId(children), baseUrl: "./iframe.html" }), React$1.createElement(ZoomContext.Provider, { value: { scale } }, React$1.createElement(Relative, { className: "docs-story", onCopyCapture: withSource && onCopyCapture }, React$1.createElement(ChildrenContainer, { isColumn: isColumn || !Array.isArray(children), columns, layout }, React$1.createElement(Zoom$1.Element, { scale }, Array.isArray(children) ? children.map((child, i2) => React$1.createElement("div", { key: i2 }, child)) : React$1.createElement("div", null, children))), React$1.createElement(ActionBar, { actionItems }))), withSource && expanded && source);
}, StyledPreview = emotion_styled_browser_esm_default(Preview)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } })), PreviewSkeleton = () => React$1.createElement(StyledPreview, { isLoading: true, withToolbar: true }, React$1.createElement(StorySkeleton, null));
const once = __STORYBOOK_MODULE_CLIENT_LOGGER__.once;
var Table = emotion_styled_browser_esm_default.table(({ theme: theme3 }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, border: "none", tr: { border: "none !important", background: "none" }, "td, th": { padding: 0, border: "none", width: "auto!important" }, marginTop: 0, marginBottom: 0, "th:first-of-type, td:first-of-type": { paddingLeft: 0 }, "th:last-of-type, td:last-of-type": { paddingRight: 0 }, td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } }, tbody: { boxShadow: "none", border: "none" }, code: codeCommon({ theme: theme3 }), "& code": { margin: 0, display: "inline-block", fontSize: theme3.typography.size.s1 } } })), ArgJsDoc = ({ tags: tags2 }) => {
  let params = (tags2.params || []).filter((x2) => x2.description), hasDisplayableParams = params.length !== 0, hasDisplayableReturns = tags2.returns != null && tags2.returns.description != null;
  return !hasDisplayableParams && !hasDisplayableReturns ? null : React$1.createElement(Table, null, React$1.createElement("tbody", null, hasDisplayableParams && params.map((x2) => React$1.createElement("tr", { key: x2.name }, React$1.createElement("td", null, React$1.createElement("code", null, x2.name)), React$1.createElement("td", null, x2.description))), hasDisplayableReturns && React$1.createElement("tr", { key: "returns" }, React$1.createElement("td", null, React$1.createElement("code", null, "Returns")), React$1.createElement("td", null, tags2.returns.description))));
};
var ITEMS_BEFORE_EXPANSION = 8, Summary = emotion_styled_browser_esm_default.div(({ isExpanded }) => ({ display: "flex", flexDirection: isExpanded ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 })), Text = emotion_styled_browser_esm_default.span(codeCommon, ({ theme: theme3, simple = false }) => ({ flex: "0 0 auto", fontFamily: theme3.typography.fonts.mono, fontSize: theme3.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px", ...simple && { background: "transparent", border: "0 none", paddingLeft: 0 } })), ExpandButton = emotion_styled_browser_esm_default.button(({ theme: theme3 }) => ({ fontFamily: theme3.typography.fonts.mono, color: theme3.color.secondary, marginBottom: "4px", background: "none", border: "none" })), Expandable = emotion_styled_browser_esm_default.div(codeCommon, ({ theme: theme3 }) => ({ fontFamily: theme3.typography.fonts.mono, color: theme3.color.secondary, fontSize: theme3.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" })), Detail = emotion_styled_browser_esm_default.div(({ theme: theme3, width }) => ({ width, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: theme3.typography.fonts.mono, fontSize: theme3.typography.size.s1, boxSizing: "content-box", "& code": { padding: "0 !important" } })), ArrowIcon = emotion_styled_browser_esm_default(Icons)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }), EmptyArg = () => React$1.createElement("span", null, "-"), ArgText = ({ text, simple }) => React$1.createElement(Text, { simple }, text), calculateDetailWidth = memoize$1(1e3)((detail) => {
  let lines = detail.split(/\r?\n/);
  return `${Math.max(...lines.map((x2) => x2.length))}ch`;
}), getSummaryItems = (summary) => {
  if (!summary)
    return [summary];
  let summaryItems = summary.split("|").map((value2) => value2.trim());
  return uniq_1(summaryItems);
}, renderSummaryItems = (summaryItems, isExpanded = true) => {
  let items = summaryItems;
  return isExpanded || (items = summaryItems.slice(0, ITEMS_BEFORE_EXPANSION)), items.map((item) => React$1.createElement(ArgText, { key: item, text: item === "" ? '""' : item }));
}, ArgSummary = ({ value: value2, initialExpandedArgs }) => {
  let { summary, detail } = value2, [isOpen, setIsOpen] = react.exports.useState(false), [isExpanded, setIsExpanded] = react.exports.useState(initialExpandedArgs || false);
  if (summary == null)
    return null;
  let summaryAsString = typeof summary.toString == "function" ? summary.toString() : summary;
  if (detail == null) {
    if (/[(){}[\]<>]/.test(summaryAsString))
      return React$1.createElement(ArgText, { text: summaryAsString });
    let summaryItems = getSummaryItems(summaryAsString), itemsCount = summaryItems.length;
    return itemsCount > ITEMS_BEFORE_EXPANSION ? React$1.createElement(Summary, { isExpanded }, renderSummaryItems(summaryItems, isExpanded), React$1.createElement(ExpandButton, { onClick: () => setIsExpanded(!isExpanded) }, isExpanded ? "Show less..." : `Show ${itemsCount - ITEMS_BEFORE_EXPANSION} more...`)) : React$1.createElement(Summary, null, renderSummaryItems(summaryItems));
  }
  return React$1.createElement(WithTooltipPure, { closeOnClick: true, trigger: "click", placement: "bottom", tooltipShown: isOpen, onVisibilityChange: (isVisible) => {
    setIsOpen(isVisible);
  }, tooltip: React$1.createElement(Detail, { width: calculateDetailWidth(detail) }, React$1.createElement(SyntaxHighlighter2, { language: "jsx", format: false }, detail)) }, React$1.createElement(Expandable, { className: "sbdocs-expandable" }, React$1.createElement("span", null, summaryAsString), React$1.createElement(ArrowIcon, { icon: isOpen ? "arrowup" : "arrowdown" })));
}, ArgValue = ({ value: value2, initialExpandedArgs }) => value2 == null ? React$1.createElement(EmptyArg, null) : React$1.createElement(ArgSummary, { value: value2, initialExpandedArgs });
var Label = emotion_styled_browser_esm_default.label(({ theme: theme3 }) => ({ lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: theme3.boolean.background, borderRadius: "3em", padding: 1, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: `${theme3.color.secondary} 0 0 0 1px inset !important` } }, span: { textAlign: "center", fontSize: theme3.typography.size.s1, fontWeight: theme3.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: curriedTransparentize$1(0.5, theme3.color.defaultText), background: "transparent", "&:hover": { boxShadow: `${curriedOpacify$1(0.3, theme3.appBorderColor)} 0 0 0 1px inset` }, "&:active": { boxShadow: `${curriedOpacify$1(0.05, theme3.appBorderColor)} 0 0 0 2px inset`, color: curriedOpacify$1(1, theme3.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: theme3.boolean.selectedBackground, boxShadow: theme3.base === "light" ? `${curriedOpacify$1(0.1, theme3.appBorderColor)} 0 0 2px` : `${theme3.appBorderColor} 0 0 0 1px`, color: theme3.color.defaultText, padding: "7px 15px" } })), parse = (value2) => value2 === "true", BooleanControl = ({ name, value: value2, onChange, onBlur, onFocus }) => {
  let onSetFalse = react.exports.useCallback(() => onChange(false), [onChange]);
  if (value2 === void 0)
    return React$1.createElement(Form.Button, { id: getControlSetterButtonId(name), onClick: onSetFalse }, "Set boolean");
  let controlId = getControlId(name), parsedValue = typeof value2 == "string" ? parse(value2) : value2;
  return React$1.createElement(Label, { htmlFor: controlId, title: parsedValue ? "Change to false" : "Change to true" }, React$1.createElement("input", { id: controlId, type: "checkbox", onChange: (e2) => onChange(e2.target.checked), checked: parsedValue, name, onBlur, onFocus }), React$1.createElement("span", null, "False"), React$1.createElement("span", null, "True"));
};
var parseDate = (value2) => {
  let [year, month, day] = value2.split("-"), result = new Date();
  return result.setFullYear(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10)), result;
}, parseTime = (value2) => {
  let [hours, minutes] = value2.split(":"), result = new Date();
  return result.setHours(parseInt(hours, 10)), result.setMinutes(parseInt(minutes, 10)), result;
}, formatDate = (value2) => {
  let date = new Date(value2), year = `000${date.getFullYear()}`.slice(-4), month = `0${date.getMonth() + 1}`.slice(-2), day = `0${date.getDate()}`.slice(-2);
  return `${year}-${month}-${day}`;
}, formatTime = (value2) => {
  let date = new Date(value2), hours = `0${date.getHours()}`.slice(-2), minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}`;
}, FlexSpaced = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: theme3.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } })), DateControl = ({ name, value: value2, onChange, onFocus, onBlur }) => {
  let [valid, setValid] = react.exports.useState(true), dateRef = react.exports.useRef(), timeRef = react.exports.useRef();
  react.exports.useEffect(() => {
    valid !== false && (dateRef && dateRef.current && (dateRef.current.value = formatDate(value2)), timeRef && timeRef.current && (timeRef.current.value = formatTime(value2)));
  }, [value2]);
  let onDateChange = (e2) => {
    let parsed = parseDate(e2.target.value), result = new Date(value2);
    result.setFullYear(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
    let time = result.getTime();
    time && onChange(time), setValid(!!time);
  }, onTimeChange = (e2) => {
    let parsed = parseTime(e2.target.value), result = new Date(value2);
    result.setHours(parsed.getHours()), result.setMinutes(parsed.getMinutes());
    let time = result.getTime();
    time && onChange(time), setValid(!!time);
  }, controlId = getControlId(name);
  return React$1.createElement(FlexSpaced, null, React$1.createElement(Form.Input, { type: "date", max: "9999-12-31", ref: dateRef, id: `${controlId}-date`, name: `${controlId}-date`, onChange: onDateChange, onFocus, onBlur }), React$1.createElement(Form.Input, { type: "time", id: `${controlId}-time`, name: `${controlId}-time`, ref: timeRef, onChange: onTimeChange, onFocus, onBlur }), valid ? null : React$1.createElement("div", null, "invalid"));
};
var Wrapper2 = emotion_styled_browser_esm_default.label({ display: "flex" }), parse2 = (value2) => {
  let result = parseFloat(value2);
  return Number.isNaN(result) ? void 0 : result;
}, NumberControl = ({ name, value: value2, onChange, min: min2, max: max2, step, onBlur, onFocus }) => {
  let [inputValue, setInputValue] = react.exports.useState(typeof value2 == "number" ? value2 : ""), [forceVisible, setForceVisible] = react.exports.useState(false), [parseError, setParseError] = react.exports.useState(null), handleChange = react.exports.useCallback((event) => {
    setInputValue(event.target.value);
    let result = parseFloat(event.target.value);
    Number.isNaN(result) ? setParseError(new Error(`'${event.target.value}' is not a number`)) : (onChange(result), setParseError(null));
  }, [onChange, setParseError]), onForceVisible = react.exports.useCallback(() => {
    setInputValue("0"), onChange(0), setForceVisible(true);
  }, [setForceVisible]), htmlElRef = react.exports.useRef(null);
  return react.exports.useEffect(() => {
    forceVisible && htmlElRef.current && htmlElRef.current.select();
  }, [forceVisible]), react.exports.useEffect(() => {
    inputValue !== (typeof value2 == "number" ? value2 : "") && setInputValue(value2);
  }, [value2]), !forceVisible && value2 === void 0 ? React$1.createElement(Form.Button, { id: getControlSetterButtonId(name), onClick: onForceVisible }, "Set number") : React$1.createElement(Wrapper2, null, React$1.createElement(Form.Input, { ref: htmlElRef, id: getControlId(name), type: "number", onChange: handleChange, size: "flex", placeholder: "Edit number...", value: inputValue, valid: parseError ? "error" : null, autoFocus: forceVisible, name, min: min2, max: max2, step, onFocus, onBlur }));
};
const logger = __STORYBOOK_MODULE_CLIENT_LOGGER__.logger;
var selectedKey = (value2, options) => {
  let entry = options && Object.entries(options).find(([_key, val]) => val === value2);
  return entry ? entry[0] : void 0;
}, selectedKeys = (value2, options) => value2 && options ? Object.entries(options).filter((entry) => value2.includes(entry[1])).map((entry) => entry[0]) : [], selectedValues = (keys2, options) => keys2 && options && keys2.map((key) => options[key]);
var Wrapper3 = emotion_styled_browser_esm_default.div(({ isInline }) => isInline ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }), Text2 = emotion_styled_browser_esm_default.span({}), Label2 = emotion_styled_browser_esm_default.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), CheckboxControl = ({ name, options, value: value2, onChange, isInline }) => {
  if (!options)
    return logger.warn(`Checkbox with no options: ${name}`), React$1.createElement(React$1.Fragment, null, "-");
  let initial = selectedKeys(value2, options), [selected, setSelected] = react.exports.useState(initial), handleChange = (e2) => {
    let option = e2.target.value, updated = [...selected];
    updated.includes(option) ? updated.splice(updated.indexOf(option), 1) : updated.push(option), onChange(selectedValues(updated, options)), setSelected(updated);
  };
  react.exports.useEffect(() => {
    setSelected(selectedKeys(value2, options));
  }, [value2]);
  let controlId = getControlId(name);
  return React$1.createElement(Wrapper3, { isInline }, Object.keys(options).map((key, index3) => {
    let id = `${controlId}-${index3}`;
    return React$1.createElement(Label2, { key: id, htmlFor: id }, React$1.createElement("input", { type: "checkbox", id, name: id, value: key, onChange: handleChange, checked: selected == null ? void 0 : selected.includes(key) }), React$1.createElement(Text2, null, key));
  }));
};
const logger2 = __STORYBOOK_MODULE_CLIENT_LOGGER__.logger;
var Wrapper4 = emotion_styled_browser_esm_default.div(({ isInline }) => isInline ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }), Text3 = emotion_styled_browser_esm_default.span({}), Label3 = emotion_styled_browser_esm_default.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), RadioControl = ({ name, options, value: value2, onChange, isInline }) => {
  if (!options)
    return logger2.warn(`Radio with no options: ${name}`), React$1.createElement(React$1.Fragment, null, "-");
  let selection = selectedKey(value2, options), controlId = getControlId(name);
  return React$1.createElement(Wrapper4, { isInline }, Object.keys(options).map((key, index3) => {
    let id = `${controlId}-${index3}`;
    return React$1.createElement(Label3, { key: id, htmlFor: id }, React$1.createElement("input", { type: "radio", id, name: id, value: key, onChange: (e2) => onChange(options[e2.currentTarget.value]), checked: key === selection }), React$1.createElement(Text3, null, key));
  }));
};
const logger3 = __STORYBOOK_MODULE_CLIENT_LOGGER__.logger;
var styleResets = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, OptionsSelect = emotion_styled_browser_esm_default.select(({ theme: theme3 }) => ({ ...styleResets, boxSizing: "border-box", position: "relative", padding: "6px 10px", width: "100%", color: theme3.input.color || "inherit", background: theme3.input.background, borderRadius: theme3.input.borderRadius, boxShadow: `${theme3.input.border} 0 0 0 1px inset`, fontSize: theme3.typography.size.s2 - 1, lineHeight: "20px", "&:focus": { boxShadow: `${theme3.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "::placeholder": { color: theme3.textMutedColor }, "&[multiple]": { overflow: "auto", padding: 0, option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 } } })), SelectWrapper = emotion_styled_browser_esm_default.span(({ theme: theme3 }) => ({ display: "inline-block", lineHeight: "normal", overflow: "hidden", position: "relative", verticalAlign: "top", width: "100%", svg: { position: "absolute", zIndex: 1, pointerEvents: "none", height: "12px", marginTop: "-6px", right: "12px", top: "50%", fill: theme3.textMutedColor, path: { fill: theme3.textMutedColor } } })), NO_SELECTION = "Choose option...", SingleSelect = ({ name, value: value2, options, onChange }) => {
  let handleChange = (e2) => {
    onChange(options[e2.currentTarget.value]);
  }, selection = selectedKey(value2, options) || NO_SELECTION, controlId = getControlId(name);
  return React$1.createElement(SelectWrapper, null, React$1.createElement(Icons, { icon: "arrowdown" }), React$1.createElement(OptionsSelect, { id: controlId, value: selection, onChange: handleChange }, React$1.createElement("option", { key: "no-selection", disabled: true }, NO_SELECTION), Object.keys(options).map((key) => React$1.createElement("option", { key }, key))));
}, MultiSelect = ({ name, value: value2, options, onChange }) => {
  let handleChange = (e2) => {
    let selection2 = Array.from(e2.currentTarget.options).filter((option) => option.selected).map((option) => option.value);
    onChange(selectedValues(selection2, options));
  }, selection = selectedKeys(value2, options), controlId = getControlId(name);
  return React$1.createElement(SelectWrapper, null, React$1.createElement(OptionsSelect, { id: controlId, multiple: true, value: selection, onChange: handleChange }, Object.keys(options).map((key) => React$1.createElement("option", { key }, key))));
}, SelectControl = (props) => {
  let { name, options } = props;
  return options ? props.isMulti ? React$1.createElement(MultiSelect, { ...props }) : React$1.createElement(SingleSelect, { ...props }) : (logger3.warn(`Select with no options: ${name}`), React$1.createElement(React$1.Fragment, null, "-"));
};
var normalizeOptions = (options, labels) => Array.isArray(options) ? options.reduce((acc, item) => (acc[(labels == null ? void 0 : labels[item]) || String(item)] = item, acc), {}) : options, Controls = { check: CheckboxControl, "inline-check": CheckboxControl, radio: RadioControl, "inline-radio": RadioControl, select: SelectControl, "multi-select": SelectControl }, OptionsControl = (props) => {
  let { type = "select", labels, argType } = props, normalized = { ...props, options: argType ? normalizeOptions(argType.options, labels) : {}, isInline: type.includes("inline"), isMulti: type.includes("multi") }, Control = Controls[type];
  if (Control)
    return React$1.createElement(Control, { ...normalized });
  throw new Error(`Unknown options type: ${type}`);
};
var VALUE = "value", KEY = "key";
var ERROR = "Error", OBJECT = "Object", ARRAY = "Array", STRING = "String", NUMBER = "Number", BOOLEAN = "Boolean", DATE = "Date", NULL = "Null", UNDEFINED = "Undefined", FUNCTION = "Function", SYMBOL = "Symbol";
var ADD_DELTA_TYPE = "ADD_DELTA_TYPE", REMOVE_DELTA_TYPE = "REMOVE_DELTA_TYPE", UPDATE_DELTA_TYPE = "UPDATE_DELTA_TYPE";
function getObjectType(obj) {
  return obj !== null && typeof obj == "object" && !Array.isArray(obj) && typeof obj[Symbol.iterator] == "function" ? "Iterable" : Object.prototype.toString.call(obj).slice(8, -1);
}
function isComponentWillChange(oldValue, newValue) {
  let oldType = getObjectType(oldValue), newType = getObjectType(newValue);
  return (oldType === "Function" || newType === "Function") && newType !== oldType;
}
var JsonAddValue = class extends react.exports.Component {
  constructor(props) {
    super(props), this.state = { inputRefKey: null, inputRefValue: null }, this.refInputValue = this.refInputValue.bind(this), this.refInputKey = this.refInputKey.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    let { inputRefKey, inputRefValue } = this.state, { onlyValue } = this.props;
    inputRefKey && typeof inputRefKey.focus == "function" && inputRefKey.focus(), onlyValue && inputRefValue && typeof inputRefValue.focus == "function" && inputRefValue.focus(), document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.onSubmit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.props.handleCancel()));
  }
  onSubmit() {
    let { handleAdd, onlyValue, onSubmitValueParser, keyPath, deep } = this.props, { inputRefKey, inputRefValue } = this.state, result = {};
    if (!onlyValue) {
      if (!inputRefKey.value)
        return;
      result.key = inputRefKey.value;
    }
    result.newValue = onSubmitValueParser(false, keyPath, deep, result.key, inputRefValue.value), handleAdd(result);
  }
  refInputKey(node2) {
    this.state.inputRefKey = node2;
  }
  refInputValue(node2) {
    this.state.inputRefValue = node2;
  }
  render() {
    let { handleCancel, onlyValue, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep } = this.props, addButtonElementLayout = react.exports.cloneElement(addButtonElement, { onClick: this.onSubmit }), cancelButtonElementLayout = react.exports.cloneElement(cancelButtonElement, { onClick: handleCancel }), inputElementValue = inputElementGenerator(VALUE, keyPath, deep), inputElementValueLayout = react.exports.cloneElement(inputElementValue, { placeholder: "Value", ref: this.refInputValue }), inputElementKeyLayout = null;
    if (!onlyValue) {
      let inputElementKey = inputElementGenerator(KEY, keyPath, deep);
      inputElementKeyLayout = react.exports.cloneElement(inputElementKey, { placeholder: "Key", ref: this.refInputKey });
    }
    return React$1.createElement("span", { className: "rejt-add-value-node" }, inputElementKeyLayout, inputElementValueLayout, cancelButtonElementLayout, addButtonElementLayout);
  }
};
JsonAddValue.defaultProps = { onlyValue: false, addButtonElement: React$1.createElement("button", null, "+"), cancelButtonElement: React$1.createElement("button", null, "c") };
var JsonArray = class extends react.exports.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath, props.name];
    this.state = { data: props.data, name: props.name, keyPath, deep: props.deep, nextDeep: props.deep + 1, collapsed: props.isCollapsed(keyPath, props.deep, props.data), addFormVisible: false }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveItem = this.handleRemoveItem.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  onChildUpdate(childKey, childData) {
    let { data, keyPath } = this.state;
    data[childKey] = childData, this.setState({ data });
    let { onUpdate } = this.props, size = keyPath.length;
    onUpdate(keyPath[size - 1], data);
  }
  handleAddMode() {
    this.setState({ addFormVisible: true });
  }
  handleCollapseMode() {
    this.setState((state) => ({ collapsed: !state.collapsed }));
  }
  handleRemoveItem(index3) {
    return () => {
      let { beforeRemoveAction, logger: logger4 } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[index3];
      beforeRemoveAction(index3, keyPath, deep, oldValue).then(() => {
        let deltaUpdateResult = { keyPath, deep, key: index3, oldValue, type: REMOVE_DELTA_TYPE };
        data.splice(index3, 1), this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate(deltaUpdateResult);
      }).catch(logger4.error);
    };
  }
  handleAddValueAdd({ newValue }) {
    let { data, keyPath, nextDeep: deep } = this.state, { beforeAddAction, logger: logger4 } = this.props;
    beforeAddAction(data.length, keyPath, deep, newValue).then(() => {
      let newData = [...data, newValue];
      this.setState({ data: newData }), this.handleAddValueCancel();
      let { onUpdate, onDeltaUpdate } = this.props;
      onUpdate(keyPath[keyPath.length - 1], newData), onDeltaUpdate({ type: ADD_DELTA_TYPE, keyPath, deep, key: newData.length - 1, newValue });
    }).catch(logger4.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: false });
  }
  handleEditValue({ key, value: value2 }) {
    return new Promise((resolve, reject) => {
      let { beforeUpdateAction } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[key];
      beforeUpdateAction(key, keyPath, deep, oldValue, value2).then(() => {
        data[key] = value2, this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: UPDATE_DELTA_TYPE, keyPath, deep, key, newValue: value2, oldValue }), resolve(void 0);
      }).catch(reject);
    });
  }
  renderCollapsed() {
    let { name, data, keyPath, deep } = this.state, { handleRemove, readOnly, getStyle, dataType, minusMenuElement } = this.props, { minus, collapsed } = getStyle(name, data, keyPath, deep, dataType), isReadOnly = readOnly(name, data, keyPath, deep, dataType), removeItemButton = react.exports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return React$1.createElement("span", { className: "rejt-collapsed" }, React$1.createElement("span", { className: "rejt-collapsed-text", style: collapsed, onClick: this.handleCollapseMode }, "[...] ", data.length, " ", data.length === 1 ? "item" : "items"), !isReadOnly && removeItemButton);
  }
  renderNotCollapsed() {
    let { name, data, keyPath, deep, addFormVisible, nextDeep } = this.state, { isCollapsed, handleRemove, onDeltaUpdate, readOnly, getStyle, dataType, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, { minus, plus, delimiter: delimiter2, ul, addForm } = getStyle(name, data, keyPath, deep, dataType), isReadOnly = readOnly(name, data, keyPath, deep, dataType), addItemButton = react.exports.cloneElement(plusMenuElement, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: plus }), removeItemButton = react.exports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus }), onlyValue = true, startObject = "[", endObject = "]";
    return React$1.createElement("span", { className: "rejt-not-collapsed" }, React$1.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter2 }, startObject), !addFormVisible && addItemButton, React$1.createElement("ul", { className: "rejt-not-collapsed-list", style: ul }, data.map((item, index3) => React$1.createElement(JsonNode, { key: index3, name: `${index3}`, data: item, keyPath, deep: nextDeep, isCollapsed, handleRemove: this.handleRemoveItem(index3), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser }))), !isReadOnly && addFormVisible && React$1.createElement("div", { className: "rejt-add-form", style: addForm }, React$1.createElement(JsonAddValue, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser })), React$1.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter2 }, endObject), !isReadOnly && removeItemButton);
  }
  render() {
    let { name, collapsed, data, keyPath, deep } = this.state, { dataType, getStyle } = this.props, value2 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed(), style = getStyle(name, data, keyPath, deep, dataType);
    return React$1.createElement("div", { className: "rejt-array-node" }, React$1.createElement("span", { onClick: this.handleCollapseMode }, React$1.createElement("span", { className: "rejt-name", style: style.name }, name, " :", " ")), value2);
  }
};
JsonArray.defaultProps = { keyPath: [], deep: 0, minusMenuElement: React$1.createElement("span", null, " - "), plusMenuElement: React$1.createElement("span", null, " + ") };
var JsonFunctionValue = class extends react.exports.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath, props.name];
    this.state = { value: props.value, name: props.name, keyPath, deep: props.deep, editEnabled: false, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled, inputRef, name, value: value2, keyPath, deep } = this.state, { readOnly, dataType } = this.props, readOnlyResult = readOnly(name, value2, keyPath, deep, dataType);
    editEnabled && !readOnlyResult && typeof inputRef.focus == "function" && inputRef.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.handleEdit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue, originalValue, logger: logger4, onSubmitValueParser, keyPath } = this.props, { inputRef, name, deep } = this.state;
    if (!inputRef)
      return;
    let newValue = onSubmitValueParser(true, keyPath, deep, name, inputRef.value);
    handleUpdateValue({ value: newValue, key: name }).then(() => {
      isComponentWillChange(originalValue, newValue) || this.handleCancelEdit();
    }).catch(logger4.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: true });
  }
  refInput(node2) {
    this.state.inputRef = node2;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: false });
  }
  render() {
    let { name, value: value2, editEnabled, keyPath, deep } = this.state, { handleRemove, originalValue, readOnly, dataType, getStyle, editButtonElement, cancelButtonElement, textareaElementGenerator, minusMenuElement, keyPath: comeFromKeyPath } = this.props, style = getStyle(name, originalValue, keyPath, deep, dataType), result = null, minusElement = null, resultOnlyResult = readOnly(name, originalValue, keyPath, deep, dataType);
    if (editEnabled && !resultOnlyResult) {
      let textareaElement = textareaElementGenerator(VALUE, comeFromKeyPath, deep, name, originalValue, dataType), editButtonElementLayout = react.exports.cloneElement(editButtonElement, { onClick: this.handleEdit }), cancelButtonElementLayout = react.exports.cloneElement(cancelButtonElement, { onClick: this.handleCancelEdit }), textareaElementLayout = react.exports.cloneElement(textareaElement, { ref: this.refInput, defaultValue: originalValue });
      result = React$1.createElement("span", { className: "rejt-edit-form", style: style.editForm }, textareaElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout), minusElement = null;
    } else {
      result = React$1.createElement("span", { className: "rejt-value", style: style.value, onClick: resultOnlyResult ? null : this.handleEditMode }, value2);
      let minusMenuLayout = react.exports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: style.minus });
      minusElement = resultOnlyResult ? null : minusMenuLayout;
    }
    return React$1.createElement("li", { className: "rejt-function-value-node", style: style.li }, React$1.createElement("span", { className: "rejt-name", style: style.name }, name, " :", " "), result, minusElement);
  }
};
JsonFunctionValue.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => {
}, editButtonElement: React$1.createElement("button", null, "e"), cancelButtonElement: React$1.createElement("button", null, "c"), minusMenuElement: React$1.createElement("span", null, " - ") };
var JsonNode = class extends react.exports.Component {
  constructor(props) {
    super(props), this.state = { data: props.data, name: props.name, keyPath: props.keyPath, deep: props.deep };
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  render() {
    let { data, name, keyPath, deep } = this.state, { isCollapsed, handleRemove, handleUpdateValue, onUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, readOnlyTrue = () => true, dataType = getObjectType(data);
    switch (dataType) {
      case ERROR:
        return React$1.createElement(JsonObject, { data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly: readOnlyTrue, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case OBJECT:
        return React$1.createElement(JsonObject, { data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case ARRAY:
        return React$1.createElement(JsonArray, { data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case STRING:
        return React$1.createElement(JsonValue, { name, value: `"${data}"`, originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case NUMBER:
        return React$1.createElement(JsonValue, { name, value: data, originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case BOOLEAN:
        return React$1.createElement(JsonValue, { name, value: data ? "true" : "false", originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case DATE:
        return React$1.createElement(JsonValue, { name, value: data.toISOString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly: readOnlyTrue, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case NULL:
        return React$1.createElement(JsonValue, { name, value: "null", originalValue: "null", keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case UNDEFINED:
        return React$1.createElement(JsonValue, { name, value: "undefined", originalValue: "undefined", keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case FUNCTION:
        return React$1.createElement(JsonFunctionValue, { name, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, textareaElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case SYMBOL:
        return React$1.createElement(JsonValue, { name, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly: readOnlyTrue, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      default:
        return null;
    }
  }
};
JsonNode.defaultProps = { keyPath: [], deep: 0 };
var JsonObject = class extends react.exports.Component {
  constructor(props) {
    super(props);
    let keyPath = props.deep === -1 ? [] : [...props.keyPath, props.name];
    this.state = { name: props.name, data: props.data, keyPath, deep: props.deep, nextDeep: props.deep + 1, collapsed: props.isCollapsed(keyPath, props.deep, props.data), addFormVisible: false }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveValue = this.handleRemoveValue.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  onChildUpdate(childKey, childData) {
    let { data, keyPath } = this.state;
    data[childKey] = childData, this.setState({ data });
    let { onUpdate } = this.props, size = keyPath.length;
    onUpdate(keyPath[size - 1], data);
  }
  handleAddMode() {
    this.setState({ addFormVisible: true });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: false });
  }
  handleAddValueAdd({ key, newValue }) {
    let { data, keyPath, nextDeep: deep } = this.state, { beforeAddAction, logger: logger4 } = this.props;
    beforeAddAction(key, keyPath, deep, newValue).then(() => {
      data[key] = newValue, this.setState({ data }), this.handleAddValueCancel();
      let { onUpdate, onDeltaUpdate } = this.props;
      onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: ADD_DELTA_TYPE, keyPath, deep, key, newValue });
    }).catch(logger4.error);
  }
  handleRemoveValue(key) {
    return () => {
      let { beforeRemoveAction, logger: logger4 } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[key];
      beforeRemoveAction(key, keyPath, deep, oldValue).then(() => {
        let deltaUpdateResult = { keyPath, deep, key, oldValue, type: REMOVE_DELTA_TYPE };
        delete data[key], this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate(deltaUpdateResult);
      }).catch(logger4.error);
    };
  }
  handleCollapseMode() {
    this.setState((state) => ({ collapsed: !state.collapsed }));
  }
  handleEditValue({ key, value: value2 }) {
    return new Promise((resolve, reject) => {
      let { beforeUpdateAction } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[key];
      beforeUpdateAction(key, keyPath, deep, oldValue, value2).then(() => {
        data[key] = value2, this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: UPDATE_DELTA_TYPE, keyPath, deep, key, newValue: value2, oldValue }), resolve();
      }).catch(reject);
    });
  }
  renderCollapsed() {
    let { name, keyPath, deep, data } = this.state, { handleRemove, readOnly, dataType, getStyle, minusMenuElement } = this.props, { minus, collapsed } = getStyle(name, data, keyPath, deep, dataType), keyList = Object.getOwnPropertyNames(data), isReadOnly = readOnly(name, data, keyPath, deep, dataType), removeItemButton = react.exports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return React$1.createElement("span", { className: "rejt-collapsed" }, React$1.createElement("span", { className: "rejt-collapsed-text", style: collapsed, onClick: this.handleCollapseMode }, "{...}", " ", keyList.length, " ", keyList.length === 1 ? "key" : "keys"), !isReadOnly && removeItemButton);
  }
  renderNotCollapsed() {
    let { name, data, keyPath, deep, nextDeep, addFormVisible } = this.state, { isCollapsed, handleRemove, onDeltaUpdate, readOnly, getStyle, dataType, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, { minus, plus, addForm, ul, delimiter: delimiter2 } = getStyle(name, data, keyPath, deep, dataType), keyList = Object.getOwnPropertyNames(data), isReadOnly = readOnly(name, data, keyPath, deep, dataType), addItemButton = react.exports.cloneElement(plusMenuElement, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: plus }), removeItemButton = react.exports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus }), list = keyList.map((key) => React$1.createElement(JsonNode, { key, name: key, data: data[key], keyPath, deep: nextDeep, isCollapsed, handleRemove: this.handleRemoveValue(key), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser })), startObject = "{", endObject = "}";
    return React$1.createElement("span", { className: "rejt-not-collapsed" }, React$1.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter2 }, startObject), !isReadOnly && addItemButton, React$1.createElement("ul", { className: "rejt-not-collapsed-list", style: ul }, list), !isReadOnly && addFormVisible && React$1.createElement("div", { className: "rejt-add-form", style: addForm }, React$1.createElement(JsonAddValue, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser })), React$1.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter2 }, endObject), !isReadOnly && removeItemButton);
  }
  render() {
    let { name, collapsed, data, keyPath, deep } = this.state, { getStyle, dataType } = this.props, value2 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed(), style = getStyle(name, data, keyPath, deep, dataType);
    return React$1.createElement("div", { className: "rejt-object-node" }, React$1.createElement("span", { onClick: this.handleCollapseMode }, React$1.createElement("span", { className: "rejt-name", style: style.name }, name, " :", " ")), value2);
  }
};
JsonObject.defaultProps = { keyPath: [], deep: 0, minusMenuElement: React$1.createElement("span", null, " - "), plusMenuElement: React$1.createElement("span", null, " + ") };
var JsonValue = class extends react.exports.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath, props.name];
    this.state = { value: props.value, name: props.name, keyPath, deep: props.deep, editEnabled: false, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled, inputRef, name, value: value2, keyPath, deep } = this.state, { readOnly, dataType } = this.props, isReadOnly = readOnly(name, value2, keyPath, deep, dataType);
    editEnabled && !isReadOnly && typeof inputRef.focus == "function" && inputRef.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.handleEdit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue, originalValue, logger: logger4, onSubmitValueParser, keyPath } = this.props, { inputRef, name, deep } = this.state;
    if (!inputRef)
      return;
    let newValue = onSubmitValueParser(true, keyPath, deep, name, inputRef.value);
    handleUpdateValue({ value: newValue, key: name }).then(() => {
      isComponentWillChange(originalValue, newValue) || this.handleCancelEdit();
    }).catch(logger4.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: true });
  }
  refInput(node2) {
    this.state.inputRef = node2;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: false });
  }
  render() {
    let { name, value: value2, editEnabled, keyPath, deep } = this.state, { handleRemove, originalValue, readOnly, dataType, getStyle, editButtonElement, cancelButtonElement, inputElementGenerator, minusMenuElement, keyPath: comeFromKeyPath } = this.props, style = getStyle(name, originalValue, keyPath, deep, dataType), isReadOnly = readOnly(name, originalValue, keyPath, deep, dataType), isEditing = editEnabled && !isReadOnly, inputElement = inputElementGenerator(VALUE, comeFromKeyPath, deep, name, originalValue, dataType), editButtonElementLayout = react.exports.cloneElement(editButtonElement, { onClick: this.handleEdit }), cancelButtonElementLayout = react.exports.cloneElement(cancelButtonElement, { onClick: this.handleCancelEdit }), inputElementLayout = react.exports.cloneElement(inputElement, { ref: this.refInput, defaultValue: JSON.stringify(originalValue) }), minusMenuLayout = react.exports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: style.minus });
    return React$1.createElement("li", { className: "rejt-value-node", style: style.li }, React$1.createElement("span", { className: "rejt-name", style: style.name }, name, " : "), isEditing ? React$1.createElement("span", { className: "rejt-edit-form", style: style.editForm }, inputElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout) : React$1.createElement("span", { className: "rejt-value", style: style.value, onClick: isReadOnly ? null : this.handleEditMode }, String(value2)), !isReadOnly && !isEditing && minusMenuLayout);
  }
};
JsonValue.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => Promise.resolve(), editButtonElement: React$1.createElement("button", null, "e"), cancelButtonElement: React$1.createElement("button", null, "c"), minusMenuElement: React$1.createElement("span", null, " - ") };
var object = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, array = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, value = { minus: { color: "red" }, editForm: {}, value: { color: "#7bba3d" }, li: { minHeight: "22px", lineHeight: "22px", outline: "0px" }, name: { color: "#2287CD" } };
function parse3(string) {
  let result = string;
  if (result.indexOf("function") === 0)
    return (0, eval)(`(${result})`);
  try {
    result = JSON.parse(string);
  } catch {
  }
  return result;
}
var JsonTree = class extends react.exports.Component {
  constructor(props) {
    super(props), this.state = { data: props.data, rootName: props.rootName }, this.onUpdate = this.onUpdate.bind(this), this.removeRoot = this.removeRoot.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data || props.rootName !== state.rootName ? { data: props.data, rootName: props.rootName } : null;
  }
  onUpdate(key, data) {
    this.setState({ data }), this.props.onFullyUpdate(data);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data, rootName } = this.state, { isCollapsed, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElement, textareaElement, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser, fallback = null } = this.props, dataType = getObjectType(data), readOnlyFunction = readOnly;
    getObjectType(readOnly) === "Boolean" && (readOnlyFunction = () => readOnly);
    let inputElementFunction = inputElement;
    inputElement && getObjectType(inputElement) !== "Function" && (inputElementFunction = () => inputElement);
    let textareaElementFunction = textareaElement;
    return textareaElement && getObjectType(textareaElement) !== "Function" && (textareaElementFunction = () => textareaElement), dataType === "Object" || dataType === "Array" ? React$1.createElement("div", { className: "rejt-tree" }, React$1.createElement(JsonNode, { data, name: rootName, deep: -1, isCollapsed, onUpdate: this.onUpdate, onDeltaUpdate, readOnly: readOnlyFunction, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator: inputElementFunction, textareaElementGenerator: textareaElementFunction, minusMenuElement, plusMenuElement, handleRemove: this.removeRoot, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser })) : fallback;
  }
};
JsonTree.defaultProps = { rootName: "root", isCollapsed: (keyPath, deep) => deep !== -1, getStyle: (keyName, data, keyPath, deep, dataType) => {
  switch (dataType) {
    case "Object":
    case "Error":
      return object;
    case "Array":
      return array;
    default:
      return value;
  }
}, readOnly: () => false, onFullyUpdate: () => {
}, onDeltaUpdate: () => {
}, beforeRemoveAction: () => Promise.resolve(), beforeAddAction: () => Promise.resolve(), beforeUpdateAction: () => Promise.resolve(), logger: { error: () => {
} }, onSubmitValueParser: (isEditMode, keyPath, deep, name, rawValue) => parse3(rawValue), inputElement: () => React$1.createElement("input", null), textareaElement: () => React$1.createElement("textarea", null), fallback: null };
var { window: globalWindow2 } = scope, Wrapper5 = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ position: "relative", display: "flex", ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" }, ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed": { "& > svg": { opacity: 0, transition: "opacity 0.2s" } }, ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed": { "& > svg": { opacity: 1 } }, ".rejt-edit-form button": { display: "none" }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-plus-menu": { marginLeft: 5 }, ".rejt-object-node > span > *": { position: "relative", zIndex: 2 }, ".rejt-object-node, .rejt-array-node": { position: "relative" }, ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before": { content: '""', position: "absolute", top: 0, display: "block", width: "100%", marginLeft: "-1rem", padding: "0 4px 0 1rem", height: 22 }, ".rejt-collapsed::before, .rejt-not-collapsed::before": { zIndex: 1, background: "transparent", borderRadius: 4, transition: "background 0.2s", pointerEvents: "none", opacity: 0.1 }, ".rejt-object-node:hover, .rejt-array-node:hover": { "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": { background: theme3.color.secondary } }, ".rejt-collapsed::after, .rejt-not-collapsed::after": { content: '""', position: "absolute", display: "inline-block", pointerEvents: "none", width: 0, height: 0 }, ".rejt-collapsed::after": { left: -8, top: 8, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid rgba(153,153,153,0.6)" }, ".rejt-not-collapsed::after": { left: -10, top: 10, borderTop: "3px solid rgba(153,153,153,0.6)", borderLeft: "3px solid transparent", borderRight: "3px solid transparent" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: theme3.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: theme3.color.lighter, borderColor: theme3.appBorderColor } })), Button = emotion_styled_browser_esm_default.button(({ theme: theme3, primary }) => ({ border: 0, height: 20, margin: 1, borderRadius: 4, background: primary ? theme3.color.secondary : "transparent", color: primary ? theme3.color.lightest : theme3.color.dark, fontWeight: primary ? "bold" : "normal", cursor: "pointer", order: primary ? "initial" : 9 })), ActionIcon = emotion_styled_browser_esm_default(Icons)(({ theme: theme3, icon, disabled }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: disabled ? "not-allowed" : "pointer", color: theme3.textMutedColor, "&:hover": disabled ? {} : { color: icon === "subtract" ? theme3.color.negative : theme3.color.ancillary }, "svg + &": { marginLeft: 0 } })), Input = emotion_styled_browser_esm_default.input(({ theme: theme3, placeholder }) => ({ outline: 0, margin: placeholder ? 1 : "1px 0", padding: "3px 4px", color: theme3.color.defaultText, background: theme3.background.app, border: `1px solid ${theme3.appBorderColor}`, borderRadius: 4, lineHeight: "14px", width: placeholder === "Key" ? 80 : 120, "&:focus": { border: `1px solid ${theme3.color.secondary}` } })), RawButton = emotion_styled_browser_esm_default(IconButton)(({ theme: theme3 }) => ({ position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: theme3.background.bar, border: `1px solid ${theme3.appBorderColor}`, borderRadius: 3, color: theme3.textMutedColor, fontSize: "9px", fontWeight: "bold", textDecoration: "none", span: { marginLeft: 3, marginTop: 1 } })), RawInput = emotion_styled_browser_esm_default(Form.Textarea)(({ theme: theme3 }) => ({ flex: 1, padding: "7px 6px", fontFamily: theme3.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: theme3.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } })), ENTER_EVENT = { bubbles: true, cancelable: true, key: "Enter", code: "Enter", keyCode: 13 }, dispatchEnterKey = (event) => {
  event.currentTarget.dispatchEvent(new globalWindow2.KeyboardEvent("keydown", ENTER_EVENT));
}, selectValue = (event) => {
  event.currentTarget.select();
}, getCustomStyleFunction = (theme3) => () => ({ name: { color: theme3.color.secondary }, collapsed: { color: theme3.color.dark }, ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 }, li: { outline: 0 } }), ObjectControl = ({ name, value: value2, onChange }) => {
  let theme3 = useTheme(), data = react.exports.useMemo(() => value2 && cloneDeep_1(value2), [value2]), hasData = data != null, [showRaw, setShowRaw] = react.exports.useState(!hasData), [parseError, setParseError] = react.exports.useState(null), updateRaw = react.exports.useCallback((raw) => {
    try {
      raw && onChange(JSON.parse(raw)), setParseError(void 0);
    } catch (e2) {
      setParseError(e2);
    }
  }, [onChange]), [forceVisible, setForceVisible] = react.exports.useState(false), onForceVisible = react.exports.useCallback(() => {
    onChange({}), setForceVisible(true);
  }, [setForceVisible]), htmlElRef = react.exports.useRef(null);
  if (react.exports.useEffect(() => {
    forceVisible && htmlElRef.current && htmlElRef.current.select();
  }, [forceVisible]), !hasData)
    return React$1.createElement(Form.Button, { id: getControlSetterButtonId(name), onClick: onForceVisible }, "Set object");
  let rawJSONForm = React$1.createElement(RawInput, { ref: htmlElRef, id: getControlId(name), name, defaultValue: value2 === null ? "" : JSON.stringify(value2, null, 2), onBlur: (event) => updateRaw(event.target.value), placeholder: "Edit JSON string...", autoFocus: forceVisible, valid: parseError ? "error" : null });
  return React$1.createElement(Wrapper5, null, ["Object", "Array"].includes(getObjectType(data)) && React$1.createElement(RawButton, { href: "#", onClick: (e2) => {
    e2.preventDefault(), setShowRaw((v2) => !v2);
  } }, React$1.createElement(Icons, { icon: showRaw ? "eyeclose" : "eye" }), React$1.createElement("span", null, "RAW")), showRaw ? rawJSONForm : React$1.createElement(JsonTree, { data, rootName: name, onFullyUpdate: onChange, getStyle: getCustomStyleFunction(theme3), cancelButtonElement: React$1.createElement(Button, { type: "button" }, "Cancel"), editButtonElement: React$1.createElement(Button, { type: "submit" }, "Save"), addButtonElement: React$1.createElement(Button, { type: "submit", primary: true }, "Save"), plusMenuElement: React$1.createElement(ActionIcon, { icon: "add" }), minusMenuElement: React$1.createElement(ActionIcon, { icon: "subtract" }), inputElement: (_2, __, ___, key) => key ? React$1.createElement(Input, { onFocus: selectValue, onBlur: dispatchEnterKey }) : React$1.createElement(Input, null), fallback: rawJSONForm }));
};
var RangeInput = emotion_styled_browser_esm_default.input(({ theme: theme3, min: min2, max: max2, value: value2 }) => ({ "&": { width: "100%", backgroundColor: "transparent", appearance: "none" }, "&::-webkit-slider-runnable-track": { background: theme3.base === "light" ? `linear-gradient(to right, 
            ${theme3.color.green} 0%, ${theme3.color.green} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedDarken$1(0.02, theme3.input.background)} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedDarken$1(0.02, theme3.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme3.color.green} 0%, ${theme3.color.green} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedLighten$1(0.02, theme3.input.background)} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedLighten$1(0.02, theme3.input.background)} 100%)`, boxShadow: `${theme3.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer" }, "&::-webkit-slider-thumb": { marginTop: "-6px", width: 16, height: 16, border: `1px solid ${rgba(theme3.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${rgba(theme3.appBorderColor, 0.2)}`, cursor: "grab", appearance: "none", background: `${theme3.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${curriedDarken$1(0.05, theme3.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${theme3.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&:focus": { outline: "none", "&::-webkit-slider-runnable-track": { borderColor: rgba(theme3.color.secondary, 0.4) }, "&::-webkit-slider-thumb": { borderColor: theme3.color.secondary, boxShadow: `0 0px 5px 0px ${theme3.color.secondary}` } }, "&::-moz-range-track": { background: theme3.base === "light" ? `linear-gradient(to right, 
            ${theme3.color.green} 0%, ${theme3.color.green} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedDarken$1(0.02, theme3.input.background)} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedDarken$1(0.02, theme3.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme3.color.green} 0%, ${theme3.color.green} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedLighten$1(0.02, theme3.input.background)} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedLighten$1(0.02, theme3.input.background)} 100%)`, boxShadow: `${theme3.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer", outline: "none" }, "&::-moz-range-thumb": { width: 16, height: 16, border: `1px solid ${rgba(theme3.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${rgba(theme3.appBorderColor, 0.2)}`, cursor: "grab", background: `${theme3.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${curriedDarken$1(0.05, theme3.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${theme3.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&::-ms-track": { background: theme3.base === "light" ? `linear-gradient(to right, 
            ${theme3.color.green} 0%, ${theme3.color.green} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedDarken$1(0.02, theme3.input.background)} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedDarken$1(0.02, theme3.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme3.color.green} 0%, ${theme3.color.green} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedLighten$1(0.02, theme3.input.background)} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedLighten$1(0.02, theme3.input.background)} 100%)`, boxShadow: `${theme3.appBorderColor} 0 0 0 1px inset`, color: "transparent", width: "100%", height: "6px", cursor: "pointer" }, "&::-ms-fill-lower": { borderRadius: 6 }, "&::-ms-fill-upper": { borderRadius: 6 }, "&::-ms-thumb": { width: 16, height: 16, background: `${theme3.input.background}`, border: `1px solid ${rgba(theme3.appBorderColor, 0.2)}`, borderRadius: 50, cursor: "grab", marginTop: 0 }, "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } } })), RangeLabel = emotion_styled_browser_esm_default.span({ paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: "nowrap", fontFeatureSettings: "tnum", fontVariantNumeric: "tabular-nums" }), RangeWrapper = emotion_styled_browser_esm_default.div({ display: "flex", alignItems: "center", width: "100%" });
function getNumberOfDecimalPlaces(number) {
  let match2 = number.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return match2 ? Math.max(0, (match2[1] ? match2[1].length : 0) - (match2[2] ? +match2[2] : 0)) : 0;
}
var RangeControl = ({ name, value: value2, onChange, min: min2 = 0, max: max2 = 100, step = 1, onBlur, onFocus }) => {
  let handleChange = (event) => {
    onChange(parse2(event.target.value));
  }, hasValue = value2 !== void 0, numberOFDecimalsPlaces = react.exports.useMemo(() => getNumberOfDecimalPlaces(step), [step]);
  return React$1.createElement(RangeWrapper, null, React$1.createElement(RangeLabel, null, min2), React$1.createElement(RangeInput, { id: getControlId(name), type: "range", onChange: handleChange, name, value: value2, min: min2, max: max2, step, onFocus, onBlur }), React$1.createElement(RangeLabel, null, `${hasValue ? value2.toFixed(numberOFDecimalsPlaces) : "--"}`, " / ", max2));
};
var Wrapper6 = emotion_styled_browser_esm_default.label({ display: "flex" }), MaxLength = emotion_styled_browser_esm_default.div(({ isMaxed }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: isMaxed ? "red" : void 0 })), TextControl = ({ name, value: value2, onChange, onFocus, onBlur, maxLength }) => {
  var _a;
  let handleChange = (event) => {
    onChange(event.target.value);
  }, [forceVisible, setForceVisible] = react.exports.useState(false), onForceVisible = react.exports.useCallback(() => {
    onChange(""), setForceVisible(true);
  }, [setForceVisible]);
  if (value2 === void 0)
    return React$1.createElement(Form.Button, { id: getControlSetterButtonId(name), onClick: onForceVisible }, "Set string");
  let isValid = typeof value2 == "string";
  return React$1.createElement(Wrapper6, null, React$1.createElement(Form.Textarea, { id: getControlId(name), maxLength, onChange: handleChange, size: "flex", placeholder: "Edit string...", autoFocus: forceVisible, valid: isValid ? null : "error", name, value: isValid ? value2 : "", onFocus, onBlur }), maxLength && React$1.createElement(MaxLength, { isMaxed: (value2 == null ? void 0 : value2.length) === maxLength }, (_a = value2 == null ? void 0 : value2.length) != null ? _a : 0, " / ", maxLength));
};
var FileInput = emotion_styled_browser_esm_default(Form.Input)({ padding: 10 });
function revokeOldUrls(urls) {
  urls.forEach((url) => {
    url.startsWith("blob:") && URL.revokeObjectURL(url);
  });
}
var FilesControl = ({ onChange, name, accept = "image/*", value: value2 }) => {
  let inputElement = react.exports.useRef(null);
  function handleFileChange(e2) {
    if (!e2.target.files)
      return;
    let fileUrls = Array.from(e2.target.files).map((file) => URL.createObjectURL(file));
    onChange(fileUrls), revokeOldUrls(value2);
  }
  return react.exports.useEffect(() => {
    value2 == null && inputElement.current && (inputElement.current.value = null);
  }, [value2, name]), React$1.createElement(FileInput, { ref: inputElement, id: getControlId(name), type: "file", name, multiple: true, onChange: handleFileChange, accept, size: "flex" });
};
var LazyColorControl = react.exports.lazy(() => __vitePreload(() => import("./Color-32FDEX32.96af7ecc.js"), true ? ["./Color-32FDEX32.96af7ecc.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./_getTag.d1b75f35.js","./iframe.bff41132.js","./index.36b4d5ff.js","./index.e850844b.js","./index.1fb95844.js","./isNativeReflectConstruct.fd0a40b8.js"] : void 0, import.meta.url)), ColorControl = (props) => React$1.createElement(react.exports.Suspense, { fallback: React$1.createElement("div", null) }, React$1.createElement(LazyColorControl, { ...props }));
var Controls2 = { array: ObjectControl, object: ObjectControl, boolean: BooleanControl, color: ColorControl, date: DateControl, number: NumberControl, check: OptionsControl, "inline-check": OptionsControl, radio: OptionsControl, "inline-radio": OptionsControl, select: OptionsControl, "multi-select": OptionsControl, range: RangeControl, text: TextControl, file: FilesControl }, NoControl = () => React$1.createElement(React$1.Fragment, null, "-"), ArgControl = ({ row, arg, updateArgs }) => {
  let { key, control } = row, [isFocused, setFocused] = react.exports.useState(false), [boxedValue, setBoxedValue] = react.exports.useState({ value: arg });
  react.exports.useEffect(() => {
    isFocused || setBoxedValue({ value: arg });
  }, [isFocused, arg]);
  let onChange = react.exports.useCallback((argVal) => (setBoxedValue({ value: argVal }), updateArgs({ [key]: argVal }), argVal), [updateArgs, key]), onBlur = react.exports.useCallback(() => setFocused(false), []), onFocus = react.exports.useCallback(() => setFocused(true), []);
  if (!control || control.disable)
    return React$1.createElement(NoControl, null);
  let props = { name: key, argType: row, value: boxedValue.value, onChange, onBlur, onFocus }, Control = Controls2[control.type] || NoControl;
  return React$1.createElement(Control, { ...props, ...control, controlType: control.type });
};
var Name = emotion_styled_browser_esm_default.span({ fontWeight: "bold" }), Required = emotion_styled_browser_esm_default.span(({ theme: theme3 }) => ({ color: theme3.color.negative, fontFamily: theme3.typography.fonts.mono, cursor: "help" })), Description2 = emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ "&&": { p: { margin: "0 0 10px 0" }, a: { color: theme3.color.secondary } }, code: { ...codeCommon({ theme: theme3 }), fontSize: 12, fontFamily: theme3.typography.fonts.mono }, "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } })), Type = emotion_styled_browser_esm_default.div(({ theme: theme3, hasDescription }) => ({ color: theme3.base === "light" ? curriedTransparentize$1(0.1, theme3.color.defaultText) : curriedTransparentize$1(0.2, theme3.color.defaultText), marginTop: hasDescription ? 4 : 0 })), TypeWithJsDoc = emotion_styled_browser_esm_default.div(({ theme: theme3, hasDescription }) => ({ color: theme3.base === "light" ? curriedTransparentize$1(0.1, theme3.color.defaultText) : curriedTransparentize$1(0.2, theme3.color.defaultText), marginTop: hasDescription ? 12 : 0, marginBottom: 12 })), StyledTd = emotion_styled_browser_esm_default.td(({ theme: theme3, expandable }) => ({ paddingLeft: expandable ? "40px !important" : "20px !important" })), ArgRow = (props) => {
  var _a;
  let { row, updateArgs, compact, expandable, initialExpandedArgs } = props, { name, description } = row, table = row.table || {}, type = table.type || row.type, defaultValue = table.defaultValue || row.defaultValue, required = (_a = row.type) == null ? void 0 : _a.required, hasDescription = description != null && description !== "";
  return React$1.createElement("tr", null, React$1.createElement(StyledTd, { expandable }, React$1.createElement(Name, null, name), required ? React$1.createElement(Required, { title: "Required" }, "*") : null), compact ? null : React$1.createElement("td", null, hasDescription && React$1.createElement(Description2, null, React$1.createElement(Markdown2, null, description)), table.jsDocTags != null ? React$1.createElement(React$1.Fragment, null, React$1.createElement(TypeWithJsDoc, { hasDescription }, React$1.createElement(ArgValue, { value: type, initialExpandedArgs })), React$1.createElement(ArgJsDoc, { tags: table.jsDocTags })) : React$1.createElement(Type, { hasDescription }, React$1.createElement(ArgValue, { value: type, initialExpandedArgs }))), compact ? null : React$1.createElement("td", null, React$1.createElement(ArgValue, { value: defaultValue, initialExpandedArgs })), updateArgs ? React$1.createElement("td", null, React$1.createElement(ArgControl, { ...props })) : null);
};
var ExpanderIcon = emotion_styled_browser_esm_default(Icons)(({ theme: theme3 }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: theme3.base === "light" ? curriedTransparentize$1(0.25, theme3.color.defaultText) : curriedTransparentize$1(0.3, theme3.color.defaultText), border: "none", display: "inline-block" })), FlexWrapper = emotion_styled_browser_esm_default.span(({ theme: theme3 }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" })), Section = emotion_styled_browser_esm_default.td(({ theme: theme3 }) => ({ position: "relative", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: theme3.typography.weight.black, fontSize: theme3.typography.size.s1 - 1, color: theme3.base === "light" ? curriedTransparentize$1(0.4, theme3.color.defaultText) : curriedTransparentize$1(0.6, theme3.color.defaultText), background: `${theme3.background.app} !important`, "& ~ td": { background: `${theme3.background.app} !important` } })), Subsection = emotion_styled_browser_esm_default.td(({ theme: theme3 }) => ({ position: "relative", fontWeight: theme3.typography.weight.bold, fontSize: theme3.typography.size.s2 - 1, background: theme3.background.content })), StyledTd2 = emotion_styled_browser_esm_default.td(({ theme: theme3 }) => ({ position: "relative" })), StyledTr = emotion_styled_browser_esm_default.tr(({ theme: theme3 }) => ({ "&:hover > td": { backgroundColor: `${theme3.background.hoverable} !important`, boxShadow: `${theme3.color.mediumlight} 0 - 1px 0 0 inset`, cursor: "row-resize" } })), ClickIntercept = emotion_styled_browser_esm_default.button(() => ({ background: "none", border: "none", padding: "0", font: "inherit", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, height: "100%", width: "100%", color: "transparent", cursor: "row-resize !important" })), SectionRow = ({ level = "section", label, children, initialExpanded = true, colSpan = 3 }) => {
  let [expanded, setExpanded] = react.exports.useState(initialExpanded), Level = level === "subsection" ? Subsection : Section, itemCount = (children == null ? void 0 : children.length) || 0, caption = level === "subsection" ? `${itemCount} item${itemCount !== 1 ? "s" : ""}` : "", icon = expanded ? "arrowdown" : "arrowright", helperText = `${expanded ? "Hide" : "Show"} ${level === "subsection" ? itemCount : label} item${itemCount !== 1 ? "s" : ""}`;
  return React$1.createElement(React$1.Fragment, null, React$1.createElement(StyledTr, { title: helperText }, React$1.createElement(Level, { colSpan: 1 }, React$1.createElement(ClickIntercept, { onClick: (e2) => setExpanded(!expanded), tabIndex: 0 }, helperText), React$1.createElement(FlexWrapper, null, React$1.createElement(ExpanderIcon, { icon }), label)), React$1.createElement(StyledTd2, { colSpan: colSpan - 1 }, React$1.createElement(ClickIntercept, { onClick: (e2) => setExpanded(!expanded), tabIndex: -1, style: { outline: "none" } }, helperText), expanded ? null : caption)), expanded ? children : null);
};
var TableWrapper = emotion_styled_browser_esm_default.table(({ theme: theme3, compact, inAddonPanel }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, color: theme3.color.defaultText, "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" }, fontSize: theme3.typography.size.s2 - 1, lineHeight: "20px", textAlign: "left", width: "100%", marginTop: inAddonPanel ? 0 : 25, marginBottom: inAddonPanel ? 0 : 40, "thead th:first-of-type, td:first-of-type": { width: "25%" }, "th:first-of-type, td:first-of-type": { paddingLeft: 20 }, "th:nth-of-type(2), td:nth-of-type(2)": { ...compact ? null : { width: "35%" } }, "td:nth-of-type(3)": { ...compact ? null : { width: "15%" } }, "th:last-of-type, td:last-of-type": { paddingRight: 20, ...compact ? null : { width: "25%" } }, th: { color: theme3.base === "light" ? curriedTransparentize$1(0.25, theme3.color.defaultText) : curriedTransparentize$1(0.45, theme3.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }, td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } }, marginLeft: inAddonPanel ? 0 : 1, marginRight: inAddonPanel ? 0 : 1, ["tr:first-child"]: { ["td:first-child, th:first-child"]: { borderTopLeftRadius: inAddonPanel ? 0 : theme3.appBorderRadius }, ["td:last-child, th:last-child"]: { borderTopRightRadius: inAddonPanel ? 0 : theme3.appBorderRadius } }, ["tr:last-child"]: { ["td:first-child, th:first-child"]: { borderBottomLeftRadius: inAddonPanel ? 0 : theme3.appBorderRadius }, ["td:last-child, th:last-child"]: { borderBottomRightRadius: inAddonPanel ? 0 : theme3.appBorderRadius } }, tbody: { boxShadow: !inAddonPanel && (theme3.base === "light" ? `rgba(0, 0, 0, 0.10) 0 1px 3px 1px,
          ${curriedTransparentize$1(0.035, theme3.appBorderColor)} 0 0 0 1px` : `rgba(0, 0, 0, 0.20) 0 2px 5px 1px,
          ${curriedOpacify$1(0.05, theme3.appBorderColor)} 0 0 0 1px`), borderRadius: theme3.appBorderRadius, "@media not all and (min-resolution:.001dpcm)": { "@supports (-webkit-appearance:none)": { borderWidth: 1, borderStyle: "solid", ...inAddonPanel && { borderColor: "transparent" }, ...!inAddonPanel && { borderColor: theme3.base === "light" ? curriedTransparentize$1(0.035, theme3.appBorderColor) : curriedOpacify$1(0.05, theme3.appBorderColor) } } }, tr: { background: "transparent", overflow: "hidden", ...inAddonPanel ? { borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: theme3.base === "light" ? curriedDarken$1(0.1, theme3.background.content) : curriedLighten$1(0.05, theme3.background.content) } : { ["&:not(:first-child)"]: { borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: theme3.base === "light" ? curriedDarken$1(0.1, theme3.background.content) : curriedLighten$1(0.05, theme3.background.content) } } }, td: { background: theme3.background.content } } } }), ({ isLoading, theme: theme3 }) => isLoading ? { "th span, td span, td button": { display: "inline", backgroundColor: theme3.appBorderColor, animation: `${theme3.animation.glow} 1.5s ease-in-out infinite`, color: "transparent", boxShadow: "none", borderRadius: 0 } } : {}), StyledIconButton = emotion_styled_browser_esm_default(IconButton)(({ theme: theme3 }) => ({ color: theme3.barTextColor, margin: "-4px -12px -4px 0" })), ControlHeadingWrapper = emotion_styled_browser_esm_default.span({ display: "flex", justifyContent: "space-between" });
var sortFns = { alpha: (a2, b2) => a2.name.localeCompare(b2.name), requiredFirst: (a2, b2) => {
  var _a, _b;
  return Number(!!((_a = b2.type) == null ? void 0 : _a.required)) - Number(!!((_b = a2.type) == null ? void 0 : _b.required)) || a2.name.localeCompare(b2.name);
}, none: void 0 }, rowLoadingData = (key) => ({ key, name: "propertyName", description: "This is a short description", control: { type: "text" }, table: { type: { summary: "summary" }, defaultValue: { summary: "defaultValue" } } }), argsTableLoadingData = { rows: { row1: rowLoadingData("row1"), row2: rowLoadingData("row2"), row3: rowLoadingData("row3") } }, groupRows = (rows, sort) => {
  let sections = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
  if (!rows)
    return sections;
  Object.entries(rows).forEach(([key, row]) => {
    let { category, subcategory } = (row == null ? void 0 : row.table) || {};
    if (category) {
      let section = sections.sections[category] || { ungrouped: [], subsections: {} };
      if (!subcategory)
        section.ungrouped.push({ key, ...row });
      else {
        let subsection = section.subsections[subcategory] || [];
        subsection.push({ key, ...row }), section.subsections[subcategory] = subsection;
      }
      sections.sections[category] = section;
    } else if (subcategory) {
      let subsection = sections.ungroupedSubsections[subcategory] || [];
      subsection.push({ key, ...row }), sections.ungroupedSubsections[subcategory] = subsection;
    } else
      sections.ungrouped.push({ key, ...row });
  });
  let sortFn = sortFns[sort], sortSubsection = (record) => sortFn ? Object.keys(record).reduce((acc, cur) => ({ ...acc, [cur]: record[cur].sort(sortFn) }), {}) : record;
  return { ungrouped: sections.ungrouped.sort(sortFn), ungroupedSubsections: sortSubsection(sections.ungroupedSubsections), sections: Object.keys(sections.sections).reduce((acc, cur) => ({ ...acc, [cur]: { ungrouped: sections.sections[cur].ungrouped.sort(sortFn), subsections: sortSubsection(sections.sections[cur].subsections) } }), {}) };
}, safeIncludeConditionalArg = (row, args, globals) => {
  try {
    return includeConditionalArg(row, args, globals);
  } catch (err) {
    return once.warn(err.message), false;
  }
}, ArgsTable = (props) => {
  if ("error" in props)
    return React$1.createElement(EmptyBlock, null, props.error, "\xA0", React$1.createElement(Link2, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: true }, "Read the docs"));
  let { updateArgs, resetArgs, compact, inAddonPanel, initialExpandedArgs, sort = "none" } = props, isLoading = "isLoading" in props, { rows, args, globals } = "rows" in props ? props : argsTableLoadingData, groups = groupRows(pickBy_1(rows, (row) => {
    var _a;
    return !((_a = row == null ? void 0 : row.table) == null ? void 0 : _a.disable) && safeIncludeConditionalArg(row, args || {}, globals || {});
  }), sort);
  if (groups.ungrouped.length === 0 && Object.entries(groups.sections).length === 0 && Object.entries(groups.ungroupedSubsections).length === 0)
    return React$1.createElement(EmptyBlock, null, "No inputs found for this component.\xA0", React$1.createElement(Link2, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: true }, "Read the docs"));
  let colSpan = 1;
  updateArgs && (colSpan += 1), compact || (colSpan += 2);
  let expandable = Object.keys(groups.sections).length > 0, common = { updateArgs, compact, inAddonPanel, initialExpandedArgs };
  return React$1.createElement(ResetWrapper, null, React$1.createElement(TableWrapper, { "aria-hidden": isLoading, compact, inAddonPanel, isLoading, className: "docblock-argstable" }, React$1.createElement("thead", { className: "docblock-argstable-head" }, React$1.createElement("tr", null, React$1.createElement("th", null, React$1.createElement("span", null, "Name")), compact ? null : React$1.createElement("th", null, React$1.createElement("span", null, "Description")), compact ? null : React$1.createElement("th", null, React$1.createElement("span", null, "Default")), updateArgs ? React$1.createElement("th", null, React$1.createElement(ControlHeadingWrapper, null, "Control", " ", !isLoading && resetArgs && React$1.createElement(StyledIconButton, { onClick: () => resetArgs(), title: "Reset controls" }, React$1.createElement(Icons, { icon: "undo", "aria-hidden": true })))) : null)), React$1.createElement("tbody", { className: "docblock-argstable-body" }, groups.ungrouped.map((row) => React$1.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], ...common })), Object.entries(groups.ungroupedSubsections).map(([subcategory, subsection]) => React$1.createElement(SectionRow, { key: subcategory, label: subcategory, level: "subsection", colSpan }, subsection.map((row) => React$1.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], expandable, ...common })))), Object.entries(groups.sections).map(([category, section]) => React$1.createElement(SectionRow, { key: category, label: category, level: "section", colSpan }, section.ungrouped.map((row) => React$1.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], ...common })), Object.entries(section.subsections).map(([subcategory, subsection]) => React$1.createElement(SectionRow, { key: subcategory, label: subcategory, level: "subsection", colSpan }, subsection.map((row) => React$1.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], expandable, ...common })))))))));
};
var TabbedArgsTable = ({ tabs, ...props }) => {
  let entries = Object.entries(tabs);
  return entries.length === 1 ? React$1.createElement(ArgsTable, { ...entries[0][1], ...props }) : React$1.createElement(TabsState, null, entries.map((entry) => {
    let [label, table] = entry, id = `prop_table_div_${label}`;
    return React$1.createElement("div", { key: id, id, title: label }, ({ active }) => active ? React$1.createElement(ArgsTable, { key: `prop_table_${label}`, ...table, ...props }) : null);
  }));
};
emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ background: theme3.background.warning, color: theme3.color.darkest, padding: "10px 15px", lineHeight: "20px", boxShadow: `${theme3.appBorderColor} 0 -1px 0 0 inset` }));
emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ marginRight: 30, fontSize: `${theme3.typography.size.s1}px`, color: theme3.base === "light" ? curriedTransparentize$1(0.4, theme3.color.defaultText) : curriedTransparentize$1(0.6, theme3.color.defaultText) }));
emotion_styled_browser_esm_default.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
emotion_styled_browser_esm_default.div({ display: "flex", flexDirection: "row", alignItems: "baseline", "&:not(:last-child)": { marginBottom: "1rem" } });
emotion_styled_browser_esm_default.div(withReset, ({ theme: theme3 }) => ({ ...getBlockBackgroundStyle(theme3), margin: "25px 0 40px", padding: "30px 20px" }));
emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ fontWeight: theme3.typography.weight.bold, color: theme3.color.defaultText }));
emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ color: theme3.base === "light" ? curriedTransparentize$1(0.2, theme3.color.defaultText) : curriedTransparentize$1(0.6, theme3.color.defaultText) }));
emotion_styled_browser_esm_default.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ flex: 1, textAlign: "center", fontFamily: theme3.typography.fonts.mono, fontSize: theme3.typography.size.s1, lineHeight: 1, overflow: "hidden", color: theme3.base === "light" ? curriedTransparentize$1(0.4, theme3.color.defaultText) : curriedTransparentize$1(0.6, theme3.color.defaultText), "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" }, span: { display: "block", marginTop: 2 } }));
emotion_styled_browser_esm_default.div({ display: "flex", flexDirection: "row" });
emotion_styled_browser_esm_default.div(({ background: background2 }) => ({ position: "relative", flex: 1, "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: background2, content: '""' } }));
emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ ...getBlockBackgroundStyle(theme3), display: "flex", flexDirection: "row", height: 50, marginBottom: 5, overflow: "hidden", backgroundColor: "white", backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)", backgroundClip: "padding-box" }));
emotion_styled_browser_esm_default.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 });
emotion_styled_browser_esm_default.div({ flex: 1, display: "flex", flexDirection: "row" });
emotion_styled_browser_esm_default.div({ display: "flex", alignItems: "flex-start" });
emotion_styled_browser_esm_default.div({ flex: "0 0 30%" });
emotion_styled_browser_esm_default.div({ flex: 1 });
emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 20, fontWeight: theme3.typography.weight.bold, color: theme3.base === "light" ? curriedTransparentize$1(0.4, theme3.color.defaultText) : curriedTransparentize$1(0.6, theme3.color.defaultText) }));
emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ fontSize: theme3.typography.size.s2, lineHeight: "20px", display: "flex", flexDirection: "column" }));
emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ fontFamily: theme3.typography.fonts.base, fontSize: theme3.typography.size.s2, color: theme3.color.defaultText, marginLeft: 10, lineHeight: 1.2 }));
emotion_styled_browser_esm_default.div(({ theme: theme3 }) => ({ ...getBlockBackgroundStyle(theme3), overflow: "hidden", height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", "> img, > svg": { width: 20, height: 20 } }));
emotion_styled_browser_esm_default.div({ display: "inline-flex", flexDirection: "row", alignItems: "center", flex: "0 1 calc(20% - 10px)", minWidth: 120, margin: "0px 10px 30px 0" });
emotion_styled_browser_esm_default.div({ display: "flex", flexFlow: "row wrap" });
var anchorBlockIdFromId = (storyId) => `anchor--${storyId}`, Anchor = ({ storyId, children }) => React$1.createElement("div", { id: anchorBlockIdFromId(storyId), className: "sb-anchor" }, children);
const filterArgTypes = __STORYBOOK_MODULE_PREVIEW_API__.filterArgTypes;
const STORY_ARGS_UPDATED = __STORYBOOK_MODULE_CORE_EVENTS__.STORY_ARGS_UPDATED;
const UPDATE_STORY_ARGS = __STORYBOOK_MODULE_CORE_EVENTS__.UPDATE_STORY_ARGS;
const RESET_STORY_ARGS = __STORYBOOK_MODULE_CORE_EVENTS__.RESET_STORY_ARGS;
const GLOBALS_UPDATED = __STORYBOOK_MODULE_CORE_EVENTS__.GLOBALS_UPDATED;
scope && scope.__DOCS_CONTEXT__ === void 0 && (scope.__DOCS_CONTEXT__ = react.exports.createContext(null), scope.__DOCS_CONTEXT__.displayName = "DocsContext");
var DocsContext = scope ? scope.__DOCS_CONTEXT__ : react.exports.createContext(null);
var PRIMARY_STORY = "^";
var titleCase = (str2) => str2.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(""), getComponentName = (component) => {
  if (component)
    return typeof component == "string" ? component.includes("-") ? titleCase(component) : component : component.__docgenInfo && component.__docgenInfo.displayName ? component.__docgenInfo.displayName : component.name;
};
function scrollToElement(element, block = "start") {
  element.scrollIntoView({ behavior: "smooth", block, inline: "nearest" });
}
function useStory(storyId, context) {
  let stories = useStories([storyId], context);
  return stories && stories[0];
}
function useStories(storyIds, context) {
  let [storiesById, setStories] = react.exports.useState({});
  return react.exports.useEffect(() => {
    Promise.all(storyIds.map(async (storyId) => {
      let story = await context.loadStory(storyId);
      setStories((current) => current[storyId] === story ? current : { ...current, [storyId]: story });
    }));
  }), storyIds.map((storyId) => {
    if (storiesById[storyId])
      return storiesById[storyId];
    try {
      return context.storyById(storyId);
    } catch {
      return null;
    }
  });
}
var useArgs = (storyId, context) => {
  let storyContext = context.getStoryContext(context.storyById()), [args, setArgs] = react.exports.useState(storyContext.args);
  react.exports.useEffect(() => {
    let cb = (changed) => {
      changed.storyId === storyId && setArgs(changed.args);
    };
    return context.channel.on(STORY_ARGS_UPDATED, cb), () => context.channel.off(STORY_ARGS_UPDATED, cb);
  }, [storyId]);
  let updateArgs = react.exports.useCallback((updatedArgs) => context.channel.emit(UPDATE_STORY_ARGS, { storyId, updatedArgs }), [storyId]), resetArgs = react.exports.useCallback((argNames) => context.channel.emit(RESET_STORY_ARGS, { storyId, argNames }), [storyId]);
  return [args, updateArgs, resetArgs];
}, useGlobals = (context) => {
  let storyContext = context.getStoryContext(context.storyById()), [globals, setGlobals] = react.exports.useState(storyContext.globals);
  return react.exports.useEffect(() => {
    let cb = (changed) => {
      setGlobals(changed.globals);
    };
    return context.channel.on(GLOBALS_UPDATED, cb), () => context.channel.off(GLOBALS_UPDATED, cb);
  }, []), [globals];
}, extractComponentArgTypes = (component, context, include, exclude) => {
  let { parameters } = context.storyById(), { extractArgTypes } = parameters.docs || {};
  if (!extractArgTypes)
    throw new Error("Args unsupported. See Args documentation for your framework.");
  let argTypes = extractArgTypes(component);
  return argTypes = filterArgTypes(argTypes, include, exclude), argTypes;
}, isShortcut = (value2) => value2 && [PRIMARY_STORY].includes(value2), getComponent = (props = {}, context) => {
  let { of } = props, { story } = props, { component } = context.storyById();
  if (isShortcut(of) || isShortcut(story))
    return component || null;
  if (!of)
    throw new Error("No component found.");
  return of;
}, addComponentTabs = (tabs, components3, context, include, exclude, sort) => ({ ...tabs, ...mapValues_1(components3, (comp) => ({ rows: extractComponentArgTypes(comp, context, include, exclude), sort })) }), StoryTable = (props) => {
  let context = react.exports.useContext(DocsContext), { story: storyName, component, subcomponents, showComponent, include, exclude, sort } = props;
  try {
    let storyId;
    switch (storyName) {
      case PRIMARY_STORY: {
        storyId = context.storyById().id;
        break;
      }
      default:
        storyId = context.storyIdByName(storyName);
    }
    let story = useStory(storyId, context), [args, updateArgs, resetArgs] = useArgs(storyId, context), [globals] = useGlobals(context);
    if (!story)
      return React$1.createElement(ArgsTable, { isLoading: true, updateArgs, resetArgs });
    let argTypes = filterArgTypes(story.argTypes, include, exclude), mainLabel = getComponentName(component) || "Story", tabs = { [mainLabel]: { rows: argTypes, args, globals, updateArgs, resetArgs } }, storyHasArgsWithControls = argTypes && Object.values(argTypes).find((v2) => !!(v2 == null ? void 0 : v2.control));
    if (storyHasArgsWithControls || (updateArgs = null, resetArgs = null, tabs = {}), component && (!storyHasArgsWithControls || showComponent) && (tabs = addComponentTabs(tabs, { [mainLabel]: component }, context, include, exclude)), subcomponents) {
      if (Array.isArray(subcomponents))
        throw new Error("Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components.");
      tabs = addComponentTabs(tabs, subcomponents, context, include, exclude);
    }
    return React$1.createElement(TabbedArgsTable, { tabs, sort });
  } catch (err) {
    return React$1.createElement(ArgsTable, { error: err.message });
  }
}, ComponentsTable = (props) => {
  let context = react.exports.useContext(DocsContext), { components: components3, include, exclude, sort } = props, tabs = addComponentTabs({}, components3, context, include, exclude);
  return React$1.createElement(TabbedArgsTable, { tabs, sort });
}, ArgsTable2 = (props) => {
  let context = react.exports.useContext(DocsContext), { parameters: { controls }, subcomponents } = context.storyById(), { include, exclude, components: components3, sort: sortProp } = props, { story: storyName } = props, sort = sortProp || (controls == null ? void 0 : controls.sort), main2 = getComponent(props, context);
  if (storyName)
    return React$1.createElement(StoryTable, { ...props, component: main2, subcomponents, sort });
  if (!components3 && !subcomponents) {
    let mainProps;
    try {
      mainProps = { rows: extractComponentArgTypes(main2, context, include, exclude) };
    } catch (err) {
      mainProps = { error: err.message };
    }
    return React$1.createElement(ArgsTable, { ...mainProps, sort });
  }
  if (components3)
    return React$1.createElement(ComponentsTable, { ...props, components: components3, sort });
  let mainLabel = getComponentName(main2);
  return React$1.createElement(ComponentsTable, { ...props, components: { [mainLabel]: main2, ...subcomponents }, sort });
};
ArgsTable2.defaultProps = { of: PRIMARY_STORY };
var SourceContext = react.exports.createContext({ sources: {} }), SourceContainer = ({ children, channel }) => {
  let [sources, setSources] = react.exports.useState({});
  return react.exports.useEffect(() => {
    let handleSnippetRendered = (id, newSource, format2 = false) => {
      sources[id] && sources[id].code === newSource || setSources((current) => {
        let newSources = { ...current, [id]: { code: newSource, format: format2 } };
        return dequal(current, newSources) ? current : newSources;
      });
    };
    return channel.on(SNIPPET_RENDERED, handleSnippetRendered), () => channel.off(SNIPPET_RENDERED, handleSnippetRendered);
  }, []), React$1.createElement(SourceContext.Provider, { value: { sources } }, children);
};
const combineParameters = __STORYBOOK_MODULE_PREVIEW_API__.combineParameters;
function extractSource(location, lines) {
  let { startBody: start2, endBody: end2 } = location;
  if (start2.line === end2.line && lines[start2.line - 1] !== void 0)
    return lines[start2.line - 1].substring(start2.col, end2.col);
  let startLine = lines[start2.line - 1], endLine = lines[end2.line - 1];
  return startLine === void 0 || endLine === void 0 ? null : [startLine.substring(start2.col), ...lines.slice(start2.line, end2.line - 1), endLine.substring(0, end2.col)].join(`
`);
}
var storyIdToSanitizedStoryName = (id) => id.replace(/^.*?--/, ""), extract = (targetId, { source, locationsMap }) => {
  if (!locationsMap)
    return source;
  let sanitizedStoryName = storyIdToSanitizedStoryName(targetId), location = locationsMap[sanitizedStoryName];
  if (!location)
    return source;
  let lines = source.split(`
`);
  return extractSource(location, lines);
}, enhanceSource = (story) => {
  var _a;
  let { id, parameters } = story, { storySource, docs = {} } = parameters, { transformSource } = docs;
  if (!(storySource == null ? void 0 : storySource.source) || ((_a = docs.source) == null ? void 0 : _a.code))
    return null;
  let input = extract(id, storySource), code = transformSource ? transformSource(input, story) : input;
  return { docs: combineParameters(docs, { source: { code } }) };
};
var SourceState = ((SourceState2) => (SourceState2.OPEN = "open", SourceState2.CLOSED = "closed", SourceState2.NONE = "none", SourceState2))(SourceState || {}), getSourceState = (stories) => {
  let states = stories.map((story) => {
    var _a, _b;
    return (_b = (_a = story.parameters.docs) == null ? void 0 : _a.source) == null ? void 0 : _b.state;
  }).filter(Boolean);
  return states.length === 0 ? "closed" : states[0];
}, getStorySource = (storyId, sourceContext) => {
  let { sources } = sourceContext;
  return (sources == null ? void 0 : sources[storyId]) || { code: "", format: false };
}, getSnippet = (snippet, story) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  if (!story)
    return snippet;
  let { parameters } = story, isArgsStory = parameters.__isArgsStory, type = ((_b = (_a = parameters.docs) == null ? void 0 : _a.source) == null ? void 0 : _b.type) || SourceType.AUTO, userCode = (_d = (_c = parameters.docs) == null ? void 0 : _c.source) == null ? void 0 : _d.code;
  return userCode !== void 0 ? userCode : type === SourceType.DYNAMIC || type === SourceType.AUTO && snippet && isArgsStory ? ((_f = (_e = parameters.docs) == null ? void 0 : _e.transformSource) == null ? void 0 : _f.call(_e, snippet, story)) || snippet : ((_i = (_h = (_g = enhanceSource(story) || parameters) == null ? void 0 : _g.docs) == null ? void 0 : _h.source) == null ? void 0 : _i.code) || "";
}, useSourceProps = (props, docsContext, sourceContext) => {
  let { id: primaryId, parameters } = docsContext.storyById(), codeProps = props, singleProps = props, multiProps = props, { format: format2, code: source } = codeProps, storyIds = (multiProps.ids || [singleProps.id || primaryId]).map((targetId) => targetId), stories = useStories(storyIds, docsContext);
  if (!stories.every(Boolean))
    return { error: "Oh no! The source is not available.", state: "none" };
  source || ({ format: format2 } = getStorySource(storyIds[0], sourceContext), source = storyIds.map((storyId, idx) => {
    let { code: storySource } = getStorySource(storyId, sourceContext), storyObj = stories[idx];
    return getSnippet(storySource, storyObj);
  }).join(`

`));
  let state = getSourceState(stories), { docs: docsParameters = {} } = parameters, { source: sourceParameters = {} } = docsParameters, { language: docsLanguage = null } = sourceParameters;
  return source ? { code: source, state, format: format2, language: props.language || docsLanguage || "jsx", dark: props.dark || false } : { error: "Oh no! The source is not available.", state };
};
var storyBlockIdFromId = (storyId) => `story--${storyId}`, getStoryId2 = (props, context) => {
  let { id, of, meta } = props;
  if (of) {
    meta && context.referenceMeta(meta, false);
    let resolved = context.resolveModuleExport(of);
    if (resolved.type !== "story")
      throw new Error("Unexpected component/module/meta exports passed to `Story` block.");
    return resolved.story.id;
  }
  let { name } = props;
  return id || context.storyIdByName(name);
}, getStoryProps = ({ height, inline }, story) => {
  let { name: storyName, parameters = {} } = story || {}, { docs = {} } = parameters;
  if (docs.disable)
    return null;
  let { inlineStories = false, iframeHeight = 100 } = docs, storyIsInline = typeof inline == "boolean" ? inline : inlineStories;
  return { inline: storyIsInline, id: story == null ? void 0 : story.id, height: height || (storyIsInline ? void 0 : iframeHeight), title: storyName, ...storyIsInline && { parameters } };
}, Story2 = (props) => {
  let context = react.exports.useContext(DocsContext), storyRef = react.exports.useRef(), storyId = getStoryId2(props, context), story = useStory(storyId, context), [showLoader, setShowLoader] = react.exports.useState(true);
  if (react.exports.useEffect(() => {
    if (!(story && storyRef.current))
      return () => {
      };
    let element = storyRef.current, { autoplay } = story.parameters.docs || {}, cleanup = context.renderStoryToElement(story, element, { autoplay });
    return setShowLoader(false), () => {
      cleanup();
    };
  }, [context, story]), !story)
    return React$1.createElement(StorySkeleton, null);
  let storyProps = getStoryProps(props, story);
  if (!storyProps)
    return null;
  if (storyProps.inline) {
    let htmlContents = "<span></span>", { height } = storyProps;
    return React$1.createElement("div", { id: storyBlockIdFromId(story.id), className: "sb-story" }, height ? React$1.createElement("style", null, `#story--${story.id} { min-height: ${height}; transform: translateZ(0); overflow: auto }`) : null, showLoader && React$1.createElement(StorySkeleton, null), React$1.createElement("div", { ref: storyRef, "data-name": story.name, dangerouslySetInnerHTML: { __html: htmlContents } }));
  }
  return React$1.createElement("div", { id: storyBlockIdFromId(story.id) }, React$1.createElement(Story, { ...storyProps }));
};
var usePreviewProps = ({ withSource, mdxSource, children, ...props }, docsContext, sourceContext) => {
  let storyIds = react.exports.Children.toArray(children).filter((c2) => c2.props && (c2.props.id || c2.props.name || c2.props.of)).map((c2) => getStoryId2(c2.props, docsContext)), isLoading = useStories(storyIds, docsContext).some((s2) => !s2), sourceProps = useSourceProps(mdxSource ? { code: decodeURI(mdxSource) } : { ids: storyIds }, docsContext, sourceContext);
  return withSource === "none" ? { isLoading, previewProps: props } : { isLoading, previewProps: { ...props, withSource: sourceProps, isExpanded: (withSource || sourceProps.state) === "open" } };
}, Canvas = (props) => {
  let docsContext = react.exports.useContext(DocsContext), sourceContext = react.exports.useContext(SourceContext), { isLoading, previewProps } = usePreviewProps(props, docsContext, sourceContext), { children } = props;
  return isLoading ? React$1.createElement(PreviewSkeleton, null) : React$1.createElement(Preview, { ...previewProps }, children);
};
const deprecate = __STORYBOOK_MODULE_CLIENT_LOGGER__.deprecate;
const prepareMeta = __STORYBOOK_MODULE_PREVIEW_API__.prepareMeta;
var useOf = (of, validTypes = []) => {
  let context = react.exports.useContext(DocsContext), resolved = context.resolveModuleExport(of);
  if (validTypes.length && !validTypes.includes(resolved.type)) {
    let prettyType = resolved.type === "component" ? "component or unknown" : resolved.type;
    throw new Error(`Invalid value passed to the 'of' prop. The value was resolved to a '${prettyType}' type but the only types for this block are: ${validTypes.join(", ")}`);
  }
  switch (resolved.type) {
    case "component":
      return { ...resolved, projectAnnotations: context.projectAnnotations };
    case "meta":
      return { ...resolved, preparedMeta: prepareMeta(resolved.csfFile.meta, context.projectAnnotations, resolved.csfFile.moduleExports.default) };
    case "story":
    default:
      return resolved;
  }
};
var DescriptionType = ((DescriptionType2) => (DescriptionType2.INFO = "info", DescriptionType2.NOTES = "notes", DescriptionType2.DOCGEN = "docgen", DescriptionType2.AUTO = "auto", DescriptionType2))(DescriptionType || {}), DEPRECATION_MIGRATION_LINK = "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo", getNotes = (notes) => notes && (typeof notes == "string" ? notes : str(notes.markdown) || str(notes.text)), getInfo = (info) => info && (typeof info == "string" ? info : str(info.text)), noDescription = (component) => null, getDescriptionFromResolvedOf = (resolvedOf) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  switch (resolvedOf.type) {
    case "story":
      return ((_b = (_a = resolvedOf.story.parameters.docs) == null ? void 0 : _a.description) == null ? void 0 : _b.story) || null;
    case "meta": {
      let { parameters, component } = resolvedOf.preparedMeta, metaDescription = (_d = (_c = parameters.docs) == null ? void 0 : _c.description) == null ? void 0 : _d.component;
      return metaDescription || ((_f = (_e = parameters.docs) == null ? void 0 : _e.extractComponentDescription) == null ? void 0 : _f.call(_e, component, { component, parameters })) || null;
    }
    case "component": {
      let { component, projectAnnotations: { parameters } } = resolvedOf;
      return ((_h = (_g = parameters.docs) == null ? void 0 : _g.extractComponentDescription) == null ? void 0 : _h.call(_g, component, { component, parameters })) || null;
    }
    default:
      throw new Error(`Unrecognized module type resolved from 'useOf', got: ${resolvedOf.type}`);
  }
}, getDescriptionFromDeprecatedProps = ({ type, markdown, children }, { storyById }) => {
  let { component, parameters } = storyById();
  if (children || markdown)
    return children || markdown;
  let { notes, info, docs } = parameters;
  (Boolean(notes) || Boolean(info)) && deprecate(`Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${DEPRECATION_MIGRATION_LINK}`);
  let { extractComponentDescription = noDescription, description } = docs || {}, componentDescriptionParameter = description == null ? void 0 : description.component;
  if (componentDescriptionParameter)
    return componentDescriptionParameter;
  switch (type) {
    case "info":
      return getInfo(info);
    case "notes":
      return getNotes(notes);
    case "docgen":
    case "auto":
    default:
      return extractComponentDescription(component, { component, ...parameters });
  }
}, DescriptionContainer = (props) => {
  let { of, type, markdown: markdownProp, children } = props, context = react.exports.useContext(DocsContext), resolvedOf = useOf(of || "meta"), markdown;
  return type || markdownProp || children ? markdown = getDescriptionFromDeprecatedProps(props, context) : markdown = getDescriptionFromResolvedOf(resolvedOf), type && deprecate(`Manually specifying description type is deprecated. See ${DEPRECATION_MIGRATION_LINK}`), markdownProp && deprecate(`The 'markdown' prop on the Description block is deprecated. See ${DEPRECATION_MIGRATION_LINK}`), children && deprecate(`The 'children' prop on the Description block is deprecated. See ${DEPRECATION_MIGRATION_LINK}`), markdown ? React$1.createElement(Description, { markdown }) : null;
};
var { document: document2, window: globalWindow3 } = scope, DocsContainer = ({ context, theme: theme3, children }) => (react.exports.useEffect(() => {
  let url;
  try {
    if (url = new URL(globalWindow3.parent.location.toString()), url.hash) {
      let element = document2.getElementById(url.hash.substring(1));
      element && setTimeout(() => {
        scrollToElement(element);
      }, 200);
    }
  } catch {
  }
}), React$1.createElement(DocsContext.Provider, { value: context }, React$1.createElement(SourceContainer, { channel: context.channel }, React$1.createElement(ThemeProvider, { theme: ensure(theme3) }, React$1.createElement(DocsWrapper, { className: "sbdocs sbdocs-wrapper" }, React$1.createElement(DocsContent, { className: "sbdocs sbdocs-content" }, children))))));
var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/, extractTitle = (title) => {
  let groups = title.trim().split(STORY_KIND_PATH_SEPARATOR);
  return groups && groups[groups.length - 1] || title;
}, Title2 = ({ children }) => {
  let context = react.exports.useContext(DocsContext), text = children;
  return text || (text = extractTitle(context.storyById().title)), text ? React$1.createElement(Title, { className: "sbdocs-title" }, text) : null;
};
var Subtitle2 = ({ children }) => {
  let docsContext = react.exports.useContext(DocsContext), { parameters } = docsContext.storyById(), text = children;
  return text || (text = parameters == null ? void 0 : parameters.componentSubtitle), text ? React$1.createElement(Subtitle, { className: "sbdocs-subtitle" }, text) : null;
};
const NAVIGATE_URL = __STORYBOOK_MODULE_CORE_EVENTS__.NAVIGATE_URL;
var { document: document3 } = scope, CodeOrSourceMdx = ({ className, children, ...rest }) => {
  if (typeof className != "string" && (typeof children != "string" || !children.match(/[\n\r]/g)))
    return React$1.createElement(Code, null, children);
  let language = className && className.split("-");
  return React$1.createElement(Source, { language: language && language[1] || "plaintext", format: false, code: children, ...rest });
};
function navigate(context, url) {
  context.channel.emit(NAVIGATE_URL, url);
}
var A = components2.a, AnchorInPage = ({ hash: hash3, children }) => {
  let context = react.exports.useContext(DocsContext);
  return React$1.createElement(A, { href: hash3, target: "_self", onClick: (event) => {
    let id = hash3.substring(1);
    document3.getElementById(id) && navigate(context, hash3);
  } }, children);
}, AnchorMdx = (props) => {
  let { href, target, children, ...rest } = props, context = react.exports.useContext(DocsContext);
  if (href) {
    if (href.startsWith("#"))
      return React$1.createElement(AnchorInPage, { hash: href }, children);
    if (target !== "_blank" && !href.startsWith("https://"))
      return React$1.createElement(A, { href, onClick: (event) => {
        event.preventDefault(), navigate(context, event.currentTarget.getAttribute("href"));
      }, target, ...rest }, children);
  }
  return React$1.createElement(A, { ...props });
}, SUPPORTED_MDX_HEADERS = ["h1", "h2", "h3", "h4", "h5", "h6"], OcticonHeaders = SUPPORTED_MDX_HEADERS.reduce((acc, headerType) => ({ ...acc, [headerType]: emotion_styled_browser_esm_default(components2[headerType])({ "& svg": { visibility: "hidden" }, "&:hover svg": { visibility: "visible" } }) }), {}), OcticonAnchor = emotion_styled_browser_esm_default.a(() => ({ float: "left", paddingRight: "4px", marginLeft: "-20px", color: "inherit" })), HeaderWithOcticonAnchor = ({ as, id, children, ...rest }) => {
  let context = react.exports.useContext(DocsContext), OcticonHeader = OcticonHeaders[as], hash3 = `#${id}`;
  return React$1.createElement(OcticonHeader, { id, ...rest }, React$1.createElement(OcticonAnchor, { "aria-hidden": "true", href: hash3, tabIndex: -1, target: "_self", onClick: (event) => {
    document3.getElementById(id) && navigate(context, hash3);
  } }, React$1.createElement("svg", { viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16", "aria-hidden": "true", fill: "currentColor" }, React$1.createElement("path", { fillRule: "evenodd", d: "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" }))), children);
}, HeaderMdx = (props) => {
  let { as, id, children, ...rest } = props;
  if (id)
    return React$1.createElement(HeaderWithOcticonAnchor, { as, id, ...rest }, children);
  let Header = components2[as];
  return React$1.createElement(Header, { ...props });
}, HeadersMdx = SUPPORTED_MDX_HEADERS.reduce((acc, headerType) => ({ ...acc, [headerType]: (props) => React$1.createElement(HeaderMdx, { as: headerType, ...props }) }), {});
var Subheading = ({ children, disableAnchor }) => {
  if (disableAnchor || typeof children != "string")
    return React$1.createElement(H3, null, children);
  let tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return React$1.createElement(HeaderMdx, { as: "h3", id: tagID }, children);
};
var DocsStory = ({ id, name, expanded = true, withToolbar = false, parameters = {} }) => {
  var _a;
  let description, { docs } = parameters;
  expanded && docs && (description = (_a = docs.description) == null ? void 0 : _a.story);
  let subheading = expanded && name;
  return React$1.createElement(Anchor, { storyId: id }, subheading && React$1.createElement(Subheading, null, subheading), description && React$1.createElement(DescriptionContainer, { markdown: description }), React$1.createElement(Canvas, { withToolbar }, React$1.createElement(Story2, { id, parameters })));
};
var Primary = ({ name }) => {
  let docsContext = react.exports.useContext(DocsContext), storyId = name && docsContext.storyIdByName(name), story = docsContext.storyById(storyId);
  return story ? React$1.createElement(DocsStory, { ...story, expanded: false, withToolbar: true }) : null;
};
var Heading = ({ children, disableAnchor }) => {
  if (disableAnchor || typeof children != "string")
    return React$1.createElement(H2, null, children);
  let tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return React$1.createElement(HeaderMdx, { as: "h2", id: tagID }, children);
};
var Stories = ({ title, includePrimary = false }) => {
  let { componentStories } = react.exports.useContext(DocsContext), stories = componentStories();
  return stories = stories.filter((story) => {
    var _a, _b;
    return !((_b = (_a = story.parameters) == null ? void 0 : _a.docs) == null ? void 0 : _b.disable);
  }), includePrimary || (stories = stories.slice(1)), !stories || stories.length === 0 ? null : React$1.createElement(React$1.Fragment, null, React$1.createElement(Heading, null, title), stories.map((story) => story && React$1.createElement(DocsStory, { key: story.id, ...story, expanded: true })));
};
Stories.defaultProps = { title: "Stories" };
var DocsPage = () => React$1.createElement(React$1.Fragment, null, React$1.createElement(Title2, null), React$1.createElement(Subtitle2, null), React$1.createElement(DescriptionContainer, null), React$1.createElement(Primary, null), React$1.createElement(ArgsTable2, { story: PRIMARY_STORY }), React$1.createElement(Stories, null));
var Docs = ({ docsParameter, context }) => {
  let Container2 = docsParameter.container || DocsContainer, Page = docsParameter.page || DocsPage;
  return React$1.createElement(Container2, { context, theme: docsParameter.theme }, React$1.createElement(Page, null));
};
__STORYBOOK_MODULE_PREVIEW_API__.composeConfigs;
__STORYBOOK_MODULE_PREVIEW_API__.Preview;
__STORYBOOK_MODULE_PREVIEW_API__.composeConfigs;
__STORYBOOK_MODULE_CHANNELS__.Channel;
__STORYBOOK_MODULE_PREVIEW_API__.DocsContext;
var Meta = ({ of }) => {
  let context = react.exports.useContext(DocsContext);
  of && context.referenceMeta(of, true);
  try {
    let primary = context.storyById();
    return React$1.createElement(Anchor, { storyId: primary.id });
  } catch {
    return null;
  }
};
var defaultComponents = { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx }, DocsRenderer = class {
  constructor() {
    this.render = (context, docsParameter, element, callback) => {
      let components3 = { ...defaultComponents, ...docsParameter == null ? void 0 : docsParameter.components };
      __vitePreload(() => import("./index.a64a13d9.js"), true ? ["./index.a64a13d9.js","./index.53276623.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js"] : void 0, import.meta.url).then(({ MDXProvider }) => {
        ReactDOM.render(React$1.createElement(MDXProvider, { components: components3 }, React$1.createElement(Docs, { key: Math.random(), context, docsParameter })), element, callback);
      });
    }, this.unmount = (element) => {
      ReactDOM.unmountComponentAtNode(element);
    };
  }
};
export {
  DocsRenderer as D,
  Form as F,
  Global as G,
  Icons as I,
  Meta as M,
  SyntaxHighlighter2$1 as S,
  TooltipNote as T,
  WithTooltip as W,
  __commonJS as _,
  __toESM as a,
  _inheritsLoose$1 as b,
  createCopyToClipboardFunction as c,
  defaultComponents as d,
  emotion_styled_browser_esm_default as e,
  _objectWithoutPropertiesLoose as f,
  getControlId as g,
  _extends as h,
  createPopper as i,
  keyframes as k,
  lightenColor as l,
  memoize$1 as m,
  syntaxhighlighter_default as s
};
//# sourceMappingURL=chunk-MA2MUXQN.efbcfd4c.js.map
