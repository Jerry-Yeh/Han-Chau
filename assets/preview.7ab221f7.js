import { c as commonjsGlobal } from "./_commonjsHelpers.712cc82f.js";
var rng$1;
var crypto = typeof commonjsGlobal !== "undefined" && (commonjsGlobal.crypto || commonjsGlobal.msCrypto);
if (crypto && crypto.getRandomValues) {
  var rnds8 = new Uint8Array(16);
  rng$1 = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}
if (!rng$1) {
  var rnds = new Array(16);
  rng$1 = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 3) === 0)
        r = Math.random() * 4294967296;
      rnds[i] = r >>> ((i & 3) << 3) & 255;
    }
    return rnds;
  };
}
var rngBrowser = rng$1;
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 256).toString(16).substr(1);
}
function bytesToUuid$1(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
}
var bytesToUuid_1 = bytesToUuid$1;
var rng = rngBrowser;
var bytesToUuid = bytesToUuid_1;
function v4(options, buf, offset) {
  var i = buf && offset || 0;
  if (typeof options == "string") {
    buf = options == "binary" ? new Array(16) : null;
    options = null;
  }
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }
  return buf || bytesToUuid(rnds);
}
var v4_1 = v4;
var ADDON_ID = "storybook/actions", EVENT_ID = `${ADDON_ID}/action-event`;
var config = { depth: 10, clearOnStoryChange: true, limit: 50 };
const addons = __STORYBOOK_MODULE_PREVIEW_API__.addons;
var findProto = (obj, callback) => {
  let proto = Object.getPrototypeOf(obj);
  return !proto || callback(proto) ? proto : findProto(proto, callback);
}, isReactSyntheticEvent = (e) => Boolean(typeof e == "object" && e && findProto(e, (proto) => /^Synthetic(?:Base)?Event$/.test(proto.constructor.name)) && typeof e.persist == "function"), serializeArg = (a) => {
  if (isReactSyntheticEvent(a)) {
    let e = Object.create(a.constructor.prototype, Object.getOwnPropertyDescriptors(a));
    e.persist();
    let viewDescriptor = Object.getOwnPropertyDescriptor(e, "view"), view = viewDescriptor == null ? void 0 : viewDescriptor.value;
    return typeof view == "object" && (view == null ? void 0 : view.constructor.name) === "Window" && Object.defineProperty(e, "view", { ...viewDescriptor, value: Object.create(view.constructor.prototype) }), e;
  }
  return a;
};
function action(name, options = {}) {
  let actionOptions = { ...config, ...options }, handler = function(...args) {
    let channel = addons.getChannel(), id = v4_1(), minDepth = 5, serializedArgs = args.map(serializeArg), normalizedArgs = args.length > 1 ? serializedArgs : serializedArgs[0], actionDisplayToEmit = { id, count: 0, data: { name, args: normalizedArgs }, options: { ...actionOptions, maxDepth: minDepth + (actionOptions.depth || 3), allowFunction: actionOptions.allowFunction || false } };
    channel.emit(EVENT_ID, actionDisplayToEmit);
  };
  return handler.isAction = true, handler;
}
var isInInitialArgs = (name, initialArgs) => typeof initialArgs[name] > "u" && !(name in initialArgs), inferActionsFromArgTypesRegex = (context) => {
  let { initialArgs, argTypes, parameters: { actions } } = context;
  if (!actions || actions.disable || !actions.argTypesRegex || !argTypes)
    return {};
  let argTypesRegex = new RegExp(actions.argTypesRegex);
  return Object.entries(argTypes).filter(([name]) => !!argTypesRegex.test(name)).reduce((acc, [name, argType]) => (isInInitialArgs(name, initialArgs) && (acc[name] = action(name)), acc), {});
}, addActionsFromArgTypes = (context) => {
  let { initialArgs, argTypes, parameters: { actions } } = context;
  return (actions == null ? void 0 : actions.disable) || !argTypes ? {} : Object.entries(argTypes).filter(([name, argType]) => !!argType.action).reduce((acc, [name, argType]) => (isInInitialArgs(name, initialArgs) && (acc[name] = action(typeof argType.action == "string" ? argType.action : name)), acc), {});
};
var argsEnhancers = [addActionsFromArgTypes, inferActionsFromArgTypesRegex];
export {
  argsEnhancers
};
//# sourceMappingURL=preview.7ab221f7.js.map
