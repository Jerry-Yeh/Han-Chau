import { R as React, r as react } from "./index.2e2f892a.js";
import { a as jsxs, j as jsx } from "./jsx-runtime.db436af5.js";
const RadioGroupContext = React.createContext(null);
const RadioGroupContextProvider = RadioGroupContext.Provider;
try {
  RadioGroupContextProvider.displayName = "RadioGroupContextProvider";
  RadioGroupContextProvider.__docgenInfo = { "description": "", "displayName": "RadioGroupContextProvider", "props": {} };
} catch (__react_docgen_typescript_loader_error) {
}
const HCRadio$1 = (props, _) => {
  const groupContext = react.exports.useContext(RadioGroupContext);
  const onChange = (e) => {
    var _a;
    (_a = groupContext == null ? void 0 : groupContext.onChange) == null ? void 0 : _a.call(groupContext, e);
  };
  const radioProps = {
    disabled: props.disabled
  };
  if (groupContext) {
    radioProps.onChange = onChange;
    radioProps.checked = String(props.value) === String(groupContext == null ? void 0 : groupContext.value);
    radioProps.disabled = radioProps.disabled || groupContext.disabled;
  }
  return /* @__PURE__ */ jsxs("div", {
    className: " radio w-full text-secondary rounded-lg border border-solid border-secondary transition-all duration-300 pl-4 py-3.5 flex bg-primary relative hover:border-hover hover:bg-hover",
    children: [/* @__PURE__ */ jsx("input", {
      ...radioProps,
      type: "radio",
      id: `${props.value}`,
      value: props.value,
      className: "appearance-none"
    }), /* @__PURE__ */ jsx("div", {
      className: "input w-4 h-4 mr-4 flex items-center justify-center border border-primary rounded-full hover:border-hover",
      children: /* @__PURE__ */ jsx("div", {
        className: "core w-2.5 h-2.5 rounded-full"
      })
    }), /* @__PURE__ */ jsx("label", {
      htmlFor: `${props.value}`,
      className: "absolute inset-0 w-full h-full pl-12 py-3.5 text-body-s flex hover:cursor-pointer",
      children: props.label
    }), props.content && /* @__PURE__ */ jsx("p", {
      className: "text-tertiary text-body-xs mt-6",
      children: props.content
    })]
  });
};
const Radio = React.forwardRef(HCRadio$1);
try {
  HCRadio$1.displayName = "HCRadio";
  HCRadio$1.__docgenInfo = { "description": "", "displayName": "HCRadio", "props": { "optionType": { "defaultValue": { value: "'default'" }, "description": "Control the appearance for Radio to display as button or not\n@internal", "name": "optionType", "required": false, "type": { "name": "enum", "value": [{ "value": '"default"' }, { "value": '"button"' }] } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "content": { "defaultValue": null, "description": "", "name": "content", "required": false, "type": { "name": "string" } }, "prefixCls": { "defaultValue": null, "description": "", "name": "prefixCls", "required": false, "type": { "name": "string" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "defaultChecked": { "defaultValue": null, "description": "", "name": "defaultChecked", "required": false, "type": { "name": "boolean" } }, "checked": { "defaultValue": null, "description": "", "name": "checked", "required": false, "type": { "name": "boolean" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((e: InputChangeEvent) => void)" } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "onMouseEnter": { "defaultValue": null, "description": "", "name": "onMouseEnter", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "onMouseLeave": { "defaultValue": null, "description": "", "name": "onMouseLeave", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "onKeyPress": { "defaultValue": null, "description": "", "name": "onKeyPress", "required": false, "type": { "name": "KeyboardEventHandler<HTMLElement>" } }, "onKeyDown": { "defaultValue": null, "description": "", "name": "onKeyDown", "required": false, "type": { "name": "KeyboardEventHandler<HTMLElement>" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": false, "type": { "name": "any" } }, "tabIndex": { "defaultValue": null, "description": "", "name": "tabIndex", "required": false, "type": { "name": "number" } }, "name": { "defaultValue": null, "description": "", "name": "name", "required": false, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": false, "type": { "name": "string" } }, "autoFocus": { "defaultValue": null, "description": "", "name": "autoFocus", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "string" } }, "skipGroup": { "defaultValue": null, "description": "", "name": "skipGroup", "required": false, "type": { "name": "boolean" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
const HCRadioGroup$1 = (props) => {
  const [value, setValue] = react.exports.useState(props.value);
  const onRadioChange = (e) => {
    setValue(e.target.value);
    props.onChange && props.onChange(e);
  };
  return /* @__PURE__ */ jsx("div", {
    className: `${props.className} flex flex-col gap-y-2`,
    children: /* @__PURE__ */ jsx(RadioGroupContextProvider, {
      value: {
        onChange: onRadioChange,
        value
      },
      children: props.children
    })
  });
};
try {
  Group.displayName = "Group";
  Group.__docgenInfo = { "description": "", "displayName": "Group", "props": { "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((e: InputChangeEvent) => void)" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": false, "type": { "name": "any" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
const HCRadio = Radio;
const HCRadioGroup = HCRadioGroup$1;
export {
  HCRadio as H,
  HCRadioGroup as a
};
//# sourceMappingURL=index.5f90ca5b.js.map
