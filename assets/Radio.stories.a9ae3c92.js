var _a, _b;
import { R as React, r as react } from "./index.2e2f892a.js";
import { a as jsxs, j as jsx } from "./jsx-runtime.db436af5.js";
import "./_commonjsHelpers.712cc82f.js";
const RadioGroupContext = React.createContext(null);
const RadioGroupContextProvider = RadioGroupContext.Provider;
try {
  RadioGroupContextProvider.displayName = "RadioGroupContextProvider";
  RadioGroupContextProvider.__docgenInfo = { "description": "", "displayName": "RadioGroupContextProvider", "props": {} };
} catch (__react_docgen_typescript_loader_error) {
}
const Radio = (props, ref) => {
  const groupContext = react.exports.useContext(RadioGroupContext);
  const onChange = (e) => {
    var _a2;
    (_a2 = groupContext == null ? void 0 : groupContext.onChange) == null ? void 0 : _a2.call(groupContext, e);
  };
  const radioProps = {
    disabled: props.disabled
  };
  if (groupContext) {
    radioProps.onChange = onChange;
    radioProps.checked = String(props.value) === (groupContext == null ? void 0 : groupContext.value);
    radioProps.disabled = radioProps.disabled || groupContext.disabled;
  }
  return /* @__PURE__ */ jsxs("div", {
    className: `radio`,
    children: [/* @__PURE__ */ jsx("input", {
      ...radioProps,
      type: "radio",
      id: `${props.value}`,
      value: props.value
    }), /* @__PURE__ */ jsx("label", {
      htmlFor: `${props.value}`,
      children: props.children
    })]
  });
};
const Radio$1 = React.forwardRef(Radio);
try {
  Radio.displayName = "Radio";
  Radio.__docgenInfo = { "description": "", "displayName": "Radio", "props": { "optionType": { "defaultValue": { value: "'default'" }, "description": "Control the appearance for Radio to display as button or not\n@internal", "name": "optionType", "required": false, "type": { "name": "enum", "value": [{ "value": '"default"' }, { "value": '"button"' }] } }, "prefixCls": { "defaultValue": null, "description": "", "name": "prefixCls", "required": false, "type": { "name": "string" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "defaultChecked": { "defaultValue": null, "description": "", "name": "defaultChecked", "required": false, "type": { "name": "boolean" } }, "checked": { "defaultValue": null, "description": "", "name": "checked", "required": false, "type": { "name": "boolean" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((e: InputChangeEvent) => void)" } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "onMouseEnter": { "defaultValue": null, "description": "", "name": "onMouseEnter", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "onMouseLeave": { "defaultValue": null, "description": "", "name": "onMouseLeave", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "onKeyPress": { "defaultValue": null, "description": "", "name": "onKeyPress", "required": false, "type": { "name": "KeyboardEventHandler<HTMLElement>" } }, "onKeyDown": { "defaultValue": null, "description": "", "name": "onKeyDown", "required": false, "type": { "name": "KeyboardEventHandler<HTMLElement>" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": false, "type": { "name": "any" } }, "tabIndex": { "defaultValue": null, "description": "", "name": "tabIndex", "required": false, "type": { "name": "number" } }, "name": { "defaultValue": null, "description": "", "name": "name", "required": false, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": false, "type": { "name": "string" } }, "autoFocus": { "defaultValue": null, "description": "", "name": "autoFocus", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "string" } }, "skipGroup": { "defaultValue": null, "description": "", "name": "skipGroup", "required": false, "type": { "name": "boolean" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
const Group$1 = (props) => {
  const [value, setValue] = react.exports.useState();
  const onRadioChange = (e) => {
    setValue(e.target.value);
  };
  return /* @__PURE__ */ jsx("div", {
    className: "radio-group",
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
  Group$1.displayName = "Group";
  Group$1.__docgenInfo = { "description": "", "displayName": "Group", "props": { "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((e: InputChangeEvent) => void)" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": false, "type": { "name": "any" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
const HCRadio = Radio$1;
HCRadio.Group = Group$1;
const HCRadio$1 = HCRadio;
const Radio_stories = {
  title: "Components/Radio",
  component: HCRadio$1,
  argTypes: {
    children: {
      control: "text",
      description: "A caption for radio.",
      table: {
        type: {
          summary: "React node"
        }
      }
    },
    value: {
      control: "text",
      description: "According to value for comparison, to determine whether the selected",
      table: {
        type: {
          summary: "any"
        }
      }
    },
    disabled: {
      control: "boolean",
      description: "Disabled radio.",
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
    children: "caption",
    value: "0",
    disabled: false
  }
};
const Group = {
  render: () => /* @__PURE__ */ jsxs(HCRadio$1.Group, {
    children: [/* @__PURE__ */ jsx(HCRadio$1, {
      value: 1,
      children: "caption1"
    }), /* @__PURE__ */ jsx(HCRadio$1, {
      value: 2,
      children: "caption2"
    })]
  })
};
Basic.parameters = {
  ...Basic.parameters,
  storySource: {
    source: "{\n  args: {\n    children: 'caption',\n    value: '0',\n    disabled: false\n  }\n}",
    ...(_a = Basic.parameters) == null ? void 0 : _a.storySource
  }
};
Group.parameters = {
  ...Group.parameters,
  storySource: {
    source: "{\n  render: () => <HCRadio.Group>\n      <HCRadio value={1}>caption1</HCRadio>\n      <HCRadio value={2}>caption2</HCRadio>\n    </HCRadio.Group>\n}",
    ...(_b = Group.parameters) == null ? void 0 : _b.storySource
  }
};
const __namedExportsOrder = ["Basic", "Group"];
export {
  Basic,
  Group,
  __namedExportsOrder,
  Radio_stories as default
};
//# sourceMappingURL=Radio.stories.a9ae3c92.js.map
