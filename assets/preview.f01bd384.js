import { i as instrument } from "./index.22509f61.js";
import { c as commonjsGlobal } from "./_commonjsHelpers.712cc82f.js";
import "./index.e850844b.js";
var build = {};
Object.defineProperty(build, "__esModule", {
  value: true
});
build.spyOn = build.mocked = build.fn = ModuleMocker_1 = build.ModuleMocker = void 0;
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
const MOCK_CONSTRUCTOR_NAME = "mockConstructor";
const FUNCTION_NAME_RESERVED_PATTERN = /[\s!-\/:-@\[-`{-~]/;
const FUNCTION_NAME_RESERVED_REPLACE = new RegExp(
  FUNCTION_NAME_RESERVED_PATTERN.source,
  "g"
);
const RESERVED_KEYWORDS = /* @__PURE__ */ new Set([
  "arguments",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "eval",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "null",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield"
]);
function matchArity(fn2, length) {
  let mockConstructor;
  switch (length) {
    case 1:
      mockConstructor = function(_a) {
        return fn2.apply(this, arguments);
      };
      break;
    case 2:
      mockConstructor = function(_a, _b) {
        return fn2.apply(this, arguments);
      };
      break;
    case 3:
      mockConstructor = function(_a, _b, _c) {
        return fn2.apply(this, arguments);
      };
      break;
    case 4:
      mockConstructor = function(_a, _b, _c, _d) {
        return fn2.apply(this, arguments);
      };
      break;
    case 5:
      mockConstructor = function(_a, _b, _c, _d, _e) {
        return fn2.apply(this, arguments);
      };
      break;
    case 6:
      mockConstructor = function(_a, _b, _c, _d, _e, _f) {
        return fn2.apply(this, arguments);
      };
      break;
    case 7:
      mockConstructor = function(_a, _b, _c, _d, _e, _f, _g) {
        return fn2.apply(this, arguments);
      };
      break;
    case 8:
      mockConstructor = function(_a, _b, _c, _d, _e, _f, _g, _h) {
        return fn2.apply(this, arguments);
      };
      break;
    case 9:
      mockConstructor = function(_a, _b, _c, _d, _e, _f, _g, _h, _i) {
        return fn2.apply(this, arguments);
      };
      break;
    default:
      mockConstructor = function() {
        return fn2.apply(this, arguments);
      };
      break;
  }
  return mockConstructor;
}
function getObjectType(value) {
  return Object.prototype.toString.apply(value).slice(8, -1);
}
function getType(ref) {
  const typeName = getObjectType(ref);
  if (typeName === "Function" || typeName === "AsyncFunction" || typeName === "GeneratorFunction") {
    return "function";
  } else if (Array.isArray(ref)) {
    return "array";
  } else if (typeName === "Object") {
    return "object";
  } else if (typeName === "Number" || typeName === "String" || typeName === "Boolean" || typeName === "Symbol") {
    return "constant";
  } else if (typeName === "Map" || typeName === "WeakMap" || typeName === "Set") {
    return "collection";
  } else if (typeName === "RegExp") {
    return "regexp";
  } else if (ref === void 0) {
    return "undefined";
  } else if (ref === null) {
    return "null";
  } else {
    return null;
  }
}
function isReadonlyProp(object, prop) {
  if (prop === "arguments" || prop === "caller" || prop === "callee" || prop === "name" || prop === "length") {
    const typeName = getObjectType(object);
    return typeName === "Function" || typeName === "AsyncFunction" || typeName === "GeneratorFunction";
  }
  if (prop === "source" || prop === "global" || prop === "ignoreCase" || prop === "multiline") {
    return getObjectType(object) === "RegExp";
  }
  return false;
}
class ModuleMocker {
  constructor(global2) {
    _defineProperty(this, "_environmentGlobal", void 0);
    _defineProperty(this, "_mockState", void 0);
    _defineProperty(this, "_mockConfigRegistry", void 0);
    _defineProperty(this, "_spyState", void 0);
    _defineProperty(this, "_invocationCallCounter", void 0);
    this._environmentGlobal = global2;
    this._mockState = /* @__PURE__ */ new WeakMap();
    this._mockConfigRegistry = /* @__PURE__ */ new WeakMap();
    this._spyState = /* @__PURE__ */ new Set();
    this._invocationCallCounter = 1;
  }
  _getSlots(object) {
    if (!object) {
      return [];
    }
    const slots = /* @__PURE__ */ new Set();
    const EnvObjectProto = this._environmentGlobal.Object.prototype;
    const EnvFunctionProto = this._environmentGlobal.Function.prototype;
    const EnvRegExpProto = this._environmentGlobal.RegExp.prototype;
    const ObjectProto = Object.prototype;
    const FunctionProto = Function.prototype;
    const RegExpProto = RegExp.prototype;
    while (object != null && object !== EnvObjectProto && object !== EnvFunctionProto && object !== EnvRegExpProto && object !== ObjectProto && object !== FunctionProto && object !== RegExpProto) {
      const ownNames = Object.getOwnPropertyNames(object);
      for (let i = 0; i < ownNames.length; i++) {
        const prop = ownNames[i];
        if (!isReadonlyProp(object, prop)) {
          const propDesc = Object.getOwnPropertyDescriptor(object, prop);
          if (propDesc !== void 0 && !propDesc.get || object.__esModule) {
            slots.add(prop);
          }
        }
      }
      object = Object.getPrototypeOf(object);
    }
    return Array.from(slots);
  }
  _ensureMockConfig(f) {
    let config = this._mockConfigRegistry.get(f);
    if (!config) {
      config = this._defaultMockConfig();
      this._mockConfigRegistry.set(f, config);
    }
    return config;
  }
  _ensureMockState(f) {
    let state = this._mockState.get(f);
    if (!state) {
      state = this._defaultMockState();
      this._mockState.set(f, state);
    }
    if (state.calls.length > 0) {
      state.lastCall = state.calls[state.calls.length - 1];
    }
    return state;
  }
  _defaultMockConfig() {
    return {
      mockImpl: void 0,
      mockName: "jest.fn()",
      specificMockImpls: [],
      specificReturnValues: []
    };
  }
  _defaultMockState() {
    return {
      calls: [],
      instances: [],
      invocationCallOrder: [],
      results: []
    };
  }
  _makeComponent(metadata, restore) {
    if (metadata.type === "object") {
      return new this._environmentGlobal.Object();
    } else if (metadata.type === "array") {
      return new this._environmentGlobal.Array();
    } else if (metadata.type === "regexp") {
      return new this._environmentGlobal.RegExp("");
    } else if (metadata.type === "constant" || metadata.type === "collection" || metadata.type === "null" || metadata.type === "undefined") {
      return metadata.value;
    } else if (metadata.type === "function") {
      const prototype = metadata.members && metadata.members.prototype && metadata.members.prototype.members || {};
      const prototypeSlots = this._getSlots(prototype);
      const mocker = this;
      const mockConstructor = matchArity(function(...args) {
        const mockState = mocker._ensureMockState(f);
        const mockConfig = mocker._ensureMockConfig(f);
        mockState.instances.push(this);
        mockState.calls.push(args);
        const mockResult = {
          type: "incomplete",
          value: void 0
        };
        mockState.results.push(mockResult);
        mockState.invocationCallOrder.push(mocker._invocationCallCounter++);
        let finalReturnValue;
        let thrownError;
        let callDidThrowError = false;
        try {
          finalReturnValue = (() => {
            if (this instanceof f) {
              prototypeSlots.forEach((slot) => {
                if (prototype[slot].type === "function") {
                  const protoImpl = this[slot];
                  this[slot] = mocker.generateFromMetadata(prototype[slot]);
                  this[slot]._protoImpl = protoImpl;
                }
              });
              const mockImpl = mockConfig.specificMockImpls.length ? mockConfig.specificMockImpls.shift() : mockConfig.mockImpl;
              return mockImpl && mockImpl.apply(this, arguments);
            }
            let specificMockImpl = mockConfig.specificMockImpls.shift();
            if (specificMockImpl === void 0) {
              specificMockImpl = mockConfig.mockImpl;
            }
            if (specificMockImpl) {
              return specificMockImpl.apply(this, arguments);
            }
            if (f._protoImpl) {
              return f._protoImpl.apply(this, arguments);
            }
            return void 0;
          })();
        } catch (error) {
          thrownError = error;
          callDidThrowError = true;
          throw error;
        } finally {
          mockResult.type = callDidThrowError ? "throw" : "return";
          mockResult.value = callDidThrowError ? thrownError : finalReturnValue;
        }
        return finalReturnValue;
      }, metadata.length || 0);
      const f = this._createMockFunction(metadata, mockConstructor);
      f._isMockFunction = true;
      f.getMockImplementation = () => this._ensureMockConfig(f).mockImpl;
      if (typeof restore === "function") {
        this._spyState.add(restore);
      }
      this._mockState.set(f, this._defaultMockState());
      this._mockConfigRegistry.set(f, this._defaultMockConfig());
      Object.defineProperty(f, "mock", {
        configurable: false,
        enumerable: true,
        get: () => this._ensureMockState(f),
        set: (val) => this._mockState.set(f, val)
      });
      f.mockClear = () => {
        this._mockState.delete(f);
        return f;
      };
      f.mockReset = () => {
        f.mockClear();
        this._mockConfigRegistry.delete(f);
        return f;
      };
      f.mockRestore = () => {
        f.mockReset();
        return restore ? restore() : void 0;
      };
      f.mockReturnValueOnce = (value) => f.mockImplementationOnce(() => value);
      f.mockResolvedValueOnce = (value) => f.mockImplementationOnce(() => Promise.resolve(value));
      f.mockRejectedValueOnce = (value) => f.mockImplementationOnce(() => Promise.reject(value));
      f.mockReturnValue = (value) => f.mockImplementation(() => value);
      f.mockResolvedValue = (value) => f.mockImplementation(() => Promise.resolve(value));
      f.mockRejectedValue = (value) => f.mockImplementation(() => Promise.reject(value));
      f.mockImplementationOnce = (fn2) => {
        const mockConfig = this._ensureMockConfig(f);
        mockConfig.specificMockImpls.push(fn2);
        return f;
      };
      f.mockImplementation = (fn2) => {
        const mockConfig = this._ensureMockConfig(f);
        mockConfig.mockImpl = fn2;
        return f;
      };
      f.mockReturnThis = () => f.mockImplementation(function() {
        return this;
      });
      f.mockName = (name) => {
        if (name) {
          const mockConfig = this._ensureMockConfig(f);
          mockConfig.mockName = name;
        }
        return f;
      };
      f.getMockName = () => {
        const mockConfig = this._ensureMockConfig(f);
        return mockConfig.mockName || "jest.fn()";
      };
      if (metadata.mockImpl) {
        f.mockImplementation(metadata.mockImpl);
      }
      return f;
    } else {
      const unknownType = metadata.type || "undefined type";
      throw new Error("Unrecognized type " + unknownType);
    }
  }
  _createMockFunction(metadata, mockConstructor) {
    let name = metadata.name;
    if (!name) {
      return mockConstructor;
    }
    const boundFunctionPrefix = "bound ";
    let bindCall = "";
    if (name && name.startsWith(boundFunctionPrefix)) {
      do {
        name = name.substring(boundFunctionPrefix.length);
        bindCall = ".bind(null)";
      } while (name && name.startsWith(boundFunctionPrefix));
    }
    if (name === MOCK_CONSTRUCTOR_NAME) {
      return mockConstructor;
    }
    if (RESERVED_KEYWORDS.has(name) || /^\d/.test(name)) {
      name = "$" + name;
    }
    if (FUNCTION_NAME_RESERVED_PATTERN.test(name)) {
      name = name.replace(FUNCTION_NAME_RESERVED_REPLACE, "$");
    }
    const body = "return function " + name + "() {return " + MOCK_CONSTRUCTOR_NAME + ".apply(this,arguments);}" + bindCall;
    const createConstructor = new this._environmentGlobal.Function(
      MOCK_CONSTRUCTOR_NAME,
      body
    );
    return createConstructor(mockConstructor);
  }
  _generateMock(metadata, callbacks, refs) {
    const mock = this._makeComponent(metadata);
    if (metadata.refID != null) {
      refs[metadata.refID] = mock;
    }
    this._getSlots(metadata.members).forEach((slot) => {
      const slotMetadata = metadata.members && metadata.members[slot] || {};
      if (slotMetadata.ref != null) {
        callbacks.push(
          function(ref) {
            return () => mock[slot] = refs[ref];
          }(slotMetadata.ref)
        );
      } else {
        mock[slot] = this._generateMock(slotMetadata, callbacks, refs);
      }
    });
    if (metadata.type !== "undefined" && metadata.type !== "null" && mock.prototype && typeof mock.prototype === "object") {
      mock.prototype.constructor = mock;
    }
    return mock;
  }
  generateFromMetadata(_metadata) {
    const callbacks = [];
    const refs = {};
    const mock = this._generateMock(_metadata, callbacks, refs);
    callbacks.forEach((setter) => setter());
    return mock;
  }
  getMetadata(component, _refs) {
    const refs = _refs || /* @__PURE__ */ new Map();
    const ref = refs.get(component);
    if (ref != null) {
      return {
        ref
      };
    }
    const type = getType(component);
    if (!type) {
      return null;
    }
    const metadata = {
      type
    };
    if (type === "constant" || type === "collection" || type === "undefined" || type === "null") {
      metadata.value = component;
      return metadata;
    } else if (type === "function") {
      metadata.name = component.name;
      if (component._isMockFunction === true) {
        metadata.mockImpl = component.getMockImplementation();
      }
    }
    metadata.refID = refs.size;
    refs.set(component, metadata.refID);
    let members = null;
    if (type !== "array") {
      this._getSlots(component).forEach((slot) => {
        if (type === "function" && component._isMockFunction === true && slot.match(/^mock/)) {
          return;
        }
        const slotMetadata = this.getMetadata(component[slot], refs);
        if (slotMetadata) {
          if (!members) {
            members = {};
          }
          members[slot] = slotMetadata;
        }
      });
    }
    if (members) {
      metadata.members = members;
    }
    return metadata;
  }
  isMockFunction(fn2) {
    return !!fn2 && fn2._isMockFunction === true;
  }
  fn(implementation) {
    const length = implementation ? implementation.length : 0;
    const fn2 = this._makeComponent({
      length,
      type: "function"
    });
    if (implementation) {
      fn2.mockImplementation(implementation);
    }
    return fn2;
  }
  spyOn(object, methodName, accessType) {
    if (accessType) {
      return this._spyOnProperty(object, methodName, accessType);
    }
    if (typeof object !== "object" && typeof object !== "function") {
      throw new Error(
        "Cannot spyOn on a primitive value; " + this._typeOf(object) + " given"
      );
    }
    const original = object[methodName];
    if (!this.isMockFunction(original)) {
      if (typeof original !== "function") {
        throw new Error(
          "Cannot spy the " + methodName + " property because it is not a function; " + this._typeOf(original) + " given instead"
        );
      }
      const isMethodOwner = Object.prototype.hasOwnProperty.call(
        object,
        methodName
      );
      let descriptor = Object.getOwnPropertyDescriptor(object, methodName);
      let proto = Object.getPrototypeOf(object);
      while (!descriptor && proto !== null) {
        descriptor = Object.getOwnPropertyDescriptor(proto, methodName);
        proto = Object.getPrototypeOf(proto);
      }
      let mock;
      if (descriptor && descriptor.get) {
        const originalGet = descriptor.get;
        mock = this._makeComponent(
          {
            type: "function"
          },
          () => {
            descriptor.get = originalGet;
            Object.defineProperty(object, methodName, descriptor);
          }
        );
        descriptor.get = () => mock;
        Object.defineProperty(object, methodName, descriptor);
      } else {
        mock = this._makeComponent(
          {
            type: "function"
          },
          () => {
            if (isMethodOwner) {
              object[methodName] = original;
            } else {
              delete object[methodName];
            }
          }
        );
        object[methodName] = mock;
      }
      mock.mockImplementation(function() {
        return original.apply(this, arguments);
      });
    }
    return object[methodName];
  }
  _spyOnProperty(obj, propertyName, accessType = "get") {
    if (typeof obj !== "object" && typeof obj !== "function") {
      throw new Error(
        "Cannot spyOn on a primitive value; " + this._typeOf(obj) + " given"
      );
    }
    if (!obj) {
      throw new Error(
        "spyOn could not find an object to spy upon for " + propertyName
      );
    }
    if (!propertyName) {
      throw new Error("No property name supplied");
    }
    let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
    let proto = Object.getPrototypeOf(obj);
    while (!descriptor && proto !== null) {
      descriptor = Object.getOwnPropertyDescriptor(proto, propertyName);
      proto = Object.getPrototypeOf(proto);
    }
    if (!descriptor) {
      throw new Error(propertyName + " property does not exist");
    }
    if (!descriptor.configurable) {
      throw new Error(propertyName + " is not declared configurable");
    }
    if (!descriptor[accessType]) {
      throw new Error(
        "Property " + propertyName + " does not have access type " + accessType
      );
    }
    const original = descriptor[accessType];
    if (!this.isMockFunction(original)) {
      if (typeof original !== "function") {
        throw new Error(
          "Cannot spy the " + propertyName + " property because it is not a function; " + this._typeOf(original) + " given instead"
        );
      }
      descriptor[accessType] = this._makeComponent(
        {
          type: "function"
        },
        () => {
          descriptor[accessType] = original;
          Object.defineProperty(obj, propertyName, descriptor);
        }
      );
      descriptor[accessType].mockImplementation(function() {
        return original.apply(this, arguments);
      });
    }
    Object.defineProperty(obj, propertyName, descriptor);
    return descriptor[accessType];
  }
  clearAllMocks() {
    this._mockState = /* @__PURE__ */ new WeakMap();
  }
  resetAllMocks() {
    this._mockConfigRegistry = /* @__PURE__ */ new WeakMap();
    this._mockState = /* @__PURE__ */ new WeakMap();
  }
  restoreAllMocks() {
    this._spyState.forEach((restore) => restore());
    this._spyState = /* @__PURE__ */ new Set();
  }
  _typeOf(value) {
    return value == null ? "" + value : typeof value;
  }
  mocked(item, _deep = false) {
    return item;
  }
}
var ModuleMocker_1 = build.ModuleMocker = ModuleMocker;
const JestMock$1 = new ModuleMocker(commonjsGlobal);
const fn$1 = JestMock$1.fn.bind(JestMock$1);
build.fn = fn$1;
const spyOn = JestMock$1.spyOn.bind(JestMock$1);
build.spyOn = spyOn;
const mocked = JestMock$1.mocked.bind(JestMock$1);
build.mocked = mocked;
const addons = __STORYBOOK_MODULE_PREVIEW_API__.addons;
const FORCE_REMOUNT = __STORYBOOK_MODULE_CORE_EVENTS__.FORCE_REMOUNT;
const STORY_RENDER_PHASE_CHANGED = __STORYBOOK_MODULE_CORE_EVENTS__.STORY_RENDER_PHASE_CHANGED;
var JestMock = new ModuleMocker_1(global), fn = JestMock.fn.bind(JestMock), { action } = instrument({ action: fn }, { retain: true }), channel = addons.getChannel(), seen = /* @__PURE__ */ new Set(), spies = [];
channel.on(FORCE_REMOUNT, () => spies.forEach((mock) => {
  var _a;
  return (_a = mock == null ? void 0 : mock.mockClear) == null ? void 0 : _a.call(mock);
}));
channel.on(STORY_RENDER_PHASE_CHANGED, ({ newPhase }) => {
  newPhase === "loading" && spies.forEach((mock) => {
    var _a;
    return (_a = mock == null ? void 0 : mock.mockClear) == null ? void 0 : _a.call(mock);
  });
});
var addSpies = (id, val, key) => {
  if (seen.has(val))
    return val;
  seen.add(val);
  try {
    if (Object.prototype.toString.call(val) === "[object Object]") {
      for (let [k, v] of Object.entries(val))
        val[k] = addSpies(id, v, k);
      return val;
    }
    if (Array.isArray(val))
      return val.map((item, index) => addSpies(id, item, `${key}[${index}]`));
    if (typeof val == "function" && val.isAction) {
      Object.defineProperty(val, "name", { value: key, writable: false }), Object.defineProperty(val, "__storyId__", { value: id, writable: false });
      let spy = action(val);
      return spies.push(spy), spy;
    }
  } catch {
  }
  return val;
}, addActionsFromArgTypes = ({ id, initialArgs }) => addSpies(id, initialArgs), argsEnhancers = [addActionsFromArgTypes], { step: runStep } = instrument({ step: (label, play, context) => play(context) }, { intercept: true }), parameters = { throwPlayFunctionExceptions: false };
export {
  argsEnhancers,
  parameters,
  runStep
};
//# sourceMappingURL=preview.f01bd384.js.map
