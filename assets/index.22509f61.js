var _a;
import { s as scope } from "./index.e850844b.js";
const addons = __STORYBOOK_MODULE_PREVIEW_API__.addons;
const once = __STORYBOOK_MODULE_CLIENT_LOGGER__.once;
const logger = __STORYBOOK_MODULE_CLIENT_LOGGER__.logger;
const FORCE_REMOUNT = __STORYBOOK_MODULE_CORE_EVENTS__.FORCE_REMOUNT;
const IGNORED_EXCEPTION = __STORYBOOK_MODULE_CORE_EVENTS__.IGNORED_EXCEPTION;
const SET_CURRENT_STORY = __STORYBOOK_MODULE_CORE_EVENTS__.SET_CURRENT_STORY;
const STORY_RENDER_PHASE_CHANGED = __STORYBOOK_MODULE_CORE_EVENTS__.STORY_RENDER_PHASE_CHANGED;
var CallStates = ((CallStates2) => (CallStates2.DONE = "done", CallStates2.ERROR = "error", CallStates2.ACTIVE = "active", CallStates2.WAITING = "waiting", CallStates2))(CallStates || {});
var EVENTS = { CALL: "storybook/instrumenter/call", SYNC: "storybook/instrumenter/sync", START: "storybook/instrumenter/start", BACK: "storybook/instrumenter/back", GOTO: "storybook/instrumenter/goto", NEXT: "storybook/instrumenter/next", END: "storybook/instrumenter/end" }, debuggerDisabled = ((_a = scope.FEATURES) == null ? void 0 : _a.interactionsDebugger) !== true, controlsDisabled = { debugger: !debuggerDisabled, start: false, back: false, goto: false, next: false, end: false }, alreadyCompletedException = new Error("This function ran after the play function completed. Did you forget to `await` it?"), isObject = (o) => Object.prototype.toString.call(o) === "[object Object]", isModule = (o) => Object.prototype.toString.call(o) === "[object Module]", isInstrumentable = (o) => {
  if (!isObject(o) && !isModule(o))
    return false;
  if (o.constructor === void 0)
    return true;
  let proto = o.constructor.prototype;
  return !(!isObject(proto) || Object.prototype.hasOwnProperty.call(proto, "isPrototypeOf") === false);
}, construct = (obj) => {
  try {
    return new obj.constructor();
  } catch {
    return {};
  }
}, getInitialState = () => ({ renderPhase: void 0, isDebugging: false, isPlaying: false, isLocked: false, cursor: 0, calls: [], shadowCalls: [], callRefsByResult: /* @__PURE__ */ new Map(), chainedCallIds: /* @__PURE__ */ new Set(), ancestors: [], playUntil: void 0, resolvers: {}, syncTimeout: void 0 }), getRetainedState = (state, isDebugging = false) => {
  let calls = (isDebugging ? state.shadowCalls : state.calls).filter((call) => call.retain);
  if (!calls.length)
    return;
  let callRefsByResult = new Map(Array.from(state.callRefsByResult.entries()).filter(([, ref]) => ref.retain));
  return { cursor: calls.length, calls, callRefsByResult };
}, Instrumenter = class {
  constructor() {
    this.initialized = false;
    this.channel = addons.getChannel(), this.state = scope.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {};
    let resetState = ({ storyId, isPlaying = true, isDebugging = false }) => {
      let state = this.getState(storyId);
      this.setState(storyId, { ...getInitialState(), ...getRetainedState(state, isDebugging), shadowCalls: isDebugging ? state.shadowCalls : [], chainedCallIds: isDebugging ? state.chainedCallIds : /* @__PURE__ */ new Set(), playUntil: isDebugging ? state.playUntil : void 0, isPlaying, isDebugging }), this.sync(storyId);
    };
    this.channel.on(FORCE_REMOUNT, resetState), this.channel.on(STORY_RENDER_PHASE_CHANGED, ({ storyId, newPhase }) => {
      let { isDebugging } = this.getState(storyId);
      this.setState(storyId, { renderPhase: newPhase }), newPhase === "preparing" && isDebugging && resetState({ storyId }), newPhase === "playing" && resetState({ storyId, isDebugging }), newPhase === "played" && this.setState(storyId, { isLocked: false, isPlaying: false, isDebugging: false }), newPhase === "errored" && this.setState(storyId, { isLocked: false, isPlaying: false });
    }), this.channel.on(SET_CURRENT_STORY, () => {
      this.initialized ? this.cleanup() : this.initialized = true;
    });
    let start = ({ storyId, playUntil }) => {
      this.getState(storyId).isDebugging || this.setState(storyId, ({ calls }) => ({ calls: [], shadowCalls: calls.map((call) => ({ ...call, status: "waiting" })), isDebugging: true }));
      let log = this.getLog(storyId);
      this.setState(storyId, ({ shadowCalls }) => {
        var _a2;
        if (playUntil || !log.length)
          return { playUntil };
        let firstRowIndex = shadowCalls.findIndex((call) => call.id === log[0].callId);
        return { playUntil: (_a2 = shadowCalls.slice(0, firstRowIndex).filter((call) => call.interceptable && !call.ancestors.length).slice(-1)[0]) == null ? void 0 : _a2.id };
      }), this.channel.emit(FORCE_REMOUNT, { storyId, isDebugging: true });
    }, back = ({ storyId }) => {
      var _a2;
      let log = this.getLog(storyId).filter((call) => !call.ancestors.length), last = log.reduceRight((res, item, index) => res >= 0 || item.status === "waiting" ? res : index, -1);
      start({ storyId, playUntil: (_a2 = log[last - 1]) == null ? void 0 : _a2.callId });
    }, goto = ({ storyId, callId }) => {
      var _a2;
      let { calls, shadowCalls, resolvers } = this.getState(storyId), call = calls.find(({ id }) => id === callId), shadowCall = shadowCalls.find(({ id }) => id === callId);
      if (!call && shadowCall && Object.values(resolvers).length > 0) {
        let nextId = (_a2 = this.getLog(storyId).find((c) => c.status === "waiting")) == null ? void 0 : _a2.callId;
        shadowCall.id !== nextId && this.setState(storyId, { playUntil: shadowCall.id }), Object.values(resolvers).forEach((resolve) => resolve());
      } else
        start({ storyId, playUntil: callId });
    }, next = ({ storyId }) => {
      var _a2;
      let { resolvers } = this.getState(storyId);
      if (Object.values(resolvers).length > 0)
        Object.values(resolvers).forEach((resolve) => resolve());
      else {
        let nextId = (_a2 = this.getLog(storyId).find((c) => c.status === "waiting")) == null ? void 0 : _a2.callId;
        nextId ? start({ storyId, playUntil: nextId }) : end({ storyId });
      }
    }, end = ({ storyId }) => {
      this.setState(storyId, { playUntil: void 0, isDebugging: false }), Object.values(this.getState(storyId).resolvers).forEach((resolve) => resolve());
    };
    this.channel.on(EVENTS.START, start), this.channel.on(EVENTS.BACK, back), this.channel.on(EVENTS.GOTO, goto), this.channel.on(EVENTS.NEXT, next), this.channel.on(EVENTS.END, end);
  }
  getState(storyId) {
    return this.state[storyId] || getInitialState();
  }
  setState(storyId, update) {
    let state = this.getState(storyId), patch = typeof update == "function" ? update(state) : update;
    this.state = { ...this.state, [storyId]: { ...state, ...patch } }, scope.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
  }
  cleanup() {
    this.state = Object.entries(this.state).reduce((acc, [storyId, state]) => {
      let retainedState = getRetainedState(state);
      return retainedState && (acc[storyId] = Object.assign(getInitialState(), retainedState)), acc;
    }, {});
    let payload = { controlStates: controlsDisabled, logItems: [] };
    this.channel.emit(EVENTS.SYNC, payload), scope.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
  }
  getLog(storyId) {
    let { calls, shadowCalls } = this.getState(storyId), merged = [...shadowCalls];
    calls.forEach((call, index) => {
      merged[index] = call;
    });
    let seen = /* @__PURE__ */ new Set();
    return merged.reduceRight((acc, call) => (call.args.forEach((arg) => {
      (arg == null ? void 0 : arg.__callId__) && seen.add(arg.__callId__);
    }), call.path.forEach((node) => {
      node.__callId__ && seen.add(node.__callId__);
    }), (call.interceptable || call.exception) && !seen.has(call.id) && (acc.unshift({ callId: call.id, status: call.status, ancestors: call.ancestors }), seen.add(call.id)), acc), []);
  }
  instrument(obj, options) {
    if (!isInstrumentable(obj))
      return obj;
    let { mutate = false, path = [] } = options;
    return Object.keys(obj).reduce((acc, key) => {
      let value = obj[key];
      return typeof value != "function" ? (acc[key] = this.instrument(value, { ...options, path: path.concat(key) }), acc) : typeof value.__originalFn__ == "function" ? (acc[key] = value, acc) : (acc[key] = (...args) => this.track(key, value, args, options), acc[key].__originalFn__ = value, Object.defineProperty(acc[key], "name", { value: key, writable: false }), Object.keys(value).length > 0 && Object.assign(acc[key], this.instrument({ ...value }, { ...options, path: path.concat(key) })), acc);
    }, mutate ? obj : construct(obj));
  }
  track(method, fn, args, options) {
    var _a2, _b, _c, _d;
    let storyId = ((_a2 = args == null ? void 0 : args[0]) == null ? void 0 : _a2.__storyId__) || ((_d = (_c = (_b = scope.__STORYBOOK_PREVIEW__) == null ? void 0 : _b.selectionStore) == null ? void 0 : _c.selection) == null ? void 0 : _d.storyId), { cursor, ancestors } = this.getState(storyId);
    this.setState(storyId, { cursor: cursor + 1 });
    let id = `${ancestors.slice(-1)[0] || storyId} [${cursor}] ${method}`, { path = [], intercept = false, retain = false } = options, interceptable = typeof intercept == "function" ? intercept(method, path) : intercept, call = { id, cursor, storyId, ancestors, path, method, args, interceptable, retain }, result = (interceptable && !ancestors.length ? this.intercept : this.invoke).call(this, fn, call, options);
    return this.instrument(result, { ...options, mutate: true, path: [{ __callId__: call.id }] });
  }
  intercept(fn, call, options) {
    let { chainedCallIds, isDebugging, playUntil } = this.getState(call.storyId), isChainedUpon = chainedCallIds.has(call.id);
    return !isDebugging || isChainedUpon || playUntil ? (playUntil === call.id && this.setState(call.storyId, { playUntil: void 0 }), this.invoke(fn, call, options)) : new Promise((resolve) => {
      this.setState(call.storyId, ({ resolvers }) => ({ isLocked: false, resolvers: { ...resolvers, [call.id]: resolve } }));
    }).then(() => (this.setState(call.storyId, (state) => {
      let { [call.id]: _, ...resolvers } = state.resolvers;
      return { isLocked: true, resolvers };
    }), this.invoke(fn, call, options)));
  }
  invoke(fn, call, options) {
    let { callRefsByResult, renderPhase } = this.getState(call.storyId), serializeValues = (value) => {
      var _a2, _b;
      if (callRefsByResult.has(value))
        return callRefsByResult.get(value);
      if (value instanceof Array)
        return value.map(serializeValues);
      if (value instanceof Date)
        return { __date__: { value: value.toISOString() } };
      if (value instanceof Error) {
        let { name, message, stack } = value;
        return { __error__: { name, message, stack } };
      }
      if (value instanceof RegExp) {
        let { flags, source } = value;
        return { __regexp__: { flags, source } };
      }
      if (value instanceof scope.window.HTMLElement) {
        let { prefix, localName, id, classList, innerText } = value, classNames = Array.from(classList);
        return { __element__: { prefix, localName, id, classNames, innerText } };
      }
      return typeof value == "function" ? { __function__: { name: value.name } } : typeof value == "symbol" ? { __symbol__: { description: value.description } } : typeof value == "object" && ((_a2 = value == null ? void 0 : value.constructor) == null ? void 0 : _a2.name) && ((_b = value == null ? void 0 : value.constructor) == null ? void 0 : _b.name) !== "Object" ? { __class__: { name: value.constructor.name } } : Object.prototype.toString.call(value) === "[object Object]" ? Object.fromEntries(Object.entries(value).map(([key, val]) => [key, serializeValues(val)])) : value;
    }, info = { ...call, args: call.args.map(serializeValues) };
    call.path.forEach((ref) => {
      (ref == null ? void 0 : ref.__callId__) && this.setState(call.storyId, ({ chainedCallIds }) => ({ chainedCallIds: new Set(Array.from(chainedCallIds).concat(ref.__callId__)) }));
    });
    let handleException = (e) => {
      if (e instanceof Error) {
        let { name, message, stack, callId = call.id } = e, exception = { name, message, stack, callId };
        if (this.update({ ...info, status: "error", exception }), this.setState(call.storyId, (state) => ({ callRefsByResult: new Map([...Array.from(state.callRefsByResult.entries()), [e, { __callId__: call.id, retain: call.retain }]]) })), call.ancestors.length)
          throw Object.prototype.hasOwnProperty.call(e, "callId") || Object.defineProperty(e, "callId", { value: call.id }), e;
        if (e !== alreadyCompletedException)
          throw logger.warn(e), IGNORED_EXCEPTION;
      }
      throw e;
    };
    try {
      if (renderPhase === "played" && !call.retain)
        throw alreadyCompletedException;
      let finalArgs = (options.getArgs ? options.getArgs(call, this.getState(call.storyId)) : call.args).map((arg) => typeof arg != "function" || Object.keys(arg).length ? arg : (...args) => {
        let { cursor, ancestors } = this.getState(call.storyId);
        this.setState(call.storyId, { cursor: 0, ancestors: [...ancestors, call.id] });
        let restore = () => this.setState(call.storyId, { cursor, ancestors }), willRestore = false;
        try {
          let res = arg(...args);
          return res instanceof Promise ? (willRestore = true, res.finally(restore)) : res;
        } finally {
          willRestore || restore();
        }
      }), result = fn(...finalArgs);
      return result && ["object", "function", "symbol"].includes(typeof result) && this.setState(call.storyId, (state) => ({ callRefsByResult: new Map([...Array.from(state.callRefsByResult.entries()), [result, { __callId__: call.id, retain: call.retain }]]) })), this.update({ ...info, status: result instanceof Promise ? "active" : "done" }), result instanceof Promise ? result.then((value) => (this.update({ ...info, status: "done" }), value), handleException) : result;
    } catch (e) {
      return handleException(e);
    }
  }
  update(call) {
    this.channel.emit(EVENTS.CALL, call), this.setState(call.storyId, ({ calls }) => {
      let callsById = calls.concat(call).reduce((a, c) => Object.assign(a, { [c.id]: c }), {});
      return { calls: Object.values(callsById).sort((a, b) => a.id.localeCompare(b.id, void 0, { numeric: true })) };
    }), this.sync(call.storyId);
  }
  sync(storyId) {
    let synchronize = () => {
      var _a2;
      let { isLocked, isPlaying } = this.getState(storyId), logItems = this.getLog(storyId), pausedAt = (_a2 = logItems.filter(({ ancestors }) => !ancestors.length).find((item) => item.status === "waiting")) == null ? void 0 : _a2.callId, hasActive = logItems.some((item) => item.status === "active");
      if (debuggerDisabled || isLocked || hasActive || logItems.length === 0) {
        let payload2 = { controlStates: controlsDisabled, logItems };
        this.channel.emit(EVENTS.SYNC, payload2);
        return;
      }
      let hasPrevious = logItems.some((item) => ["done", "error"].includes(item.status)), payload = { controlStates: { debugger: true, start: hasPrevious, back: hasPrevious, goto: true, next: isPlaying, end: isPlaying }, logItems, pausedAt };
      this.channel.emit(EVENTS.SYNC, payload);
    };
    this.setState(storyId, ({ syncTimeout }) => (clearTimeout(syncTimeout), { syncTimeout: setTimeout(synchronize, 0) }));
  }
};
function instrument(obj, options = {}) {
  var _a2, _b, _c, _d;
  try {
    let forceInstrument = false, skipInstrument = false;
    return ((_b = (_a2 = scope.window.location) == null ? void 0 : _a2.search) == null ? void 0 : _b.includes("instrument=true")) ? forceInstrument = true : ((_d = (_c = scope.window.location) == null ? void 0 : _c.search) == null ? void 0 : _d.includes("instrument=false")) && (skipInstrument = true), scope.window.parent === scope.window && !forceInstrument || skipInstrument ? obj : (scope.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ || (scope.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new Instrumenter()), scope.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(obj, options));
  } catch (e) {
    return once.warn(e), obj;
  }
}
export {
  instrument as i
};
//# sourceMappingURL=index.22509f61.js.map
