import { c as classNames } from "./index.0579b088.js";
import { j as jsx, a as jsxs } from "./jsx-runtime.db436af5.js";
import { r as react } from "./index.2e2f892a.js";
function ArrowSmallRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ react.exports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ react.exports.createElement("path", {
    fillRule: "evenodd",
    d: "M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react.exports.forwardRef(ArrowSmallRightIcon);
const ArrowSmallRightIcon$1 = ForwardRef;
const HCButton = (props) => {
  const colorVariants = (color, disabled = false) => ({
    primary: !disabled ? "bg-primary hover:bg-hover active:bg-pressed text-primary" : "bg-disabled text-disabled",
    secondary: !disabled ? "bg-secondary hover:bg-hover active:bg-pressed text-secondary" : "bg-disabled text-disabled",
    tertiary: !disabled ? "bg-tertiary hover:bg-hover active:bg-pressed text-tertiary" : "bg-disabled text-disabled",
    highlight: !disabled ? "bg-highlight hover:bg-highlight-hover active:bg-highlight-pressed text-onColor" : "bg-highlight-disabled text-disabled",
    "highlight-light": !disabled ? "bg-highlight-light hover:bg-highlight-light-hover active:bg-highlight-light-pressed" : "bg-highlight-disabled text-disabled",
    success: !disabled ? "bg-success hover:bg-success-hover active:bg-success-pressed text-onColor" : "bg-success-disabled text-disabled",
    "success-light": !disabled ? "bg-success-light hover:bg-success-light-hover active:bg-success-light-pressed" : "bg-success-disabled text-disabled",
    destructive: !disabled ? "bg-destructive hover:bg-destructive-hover active:bg-destructive-pressed text-onColor" : "bg-destructive-disabled text-disabled",
    "destructive-light": !disabled ? "bg-destructive-light hover:bg-destructive-light-hover active:bg-destructive-light-pressed" : "bg-destructive-disabled text-disabled",
    warning: !disabled ? "bg-warning hover:bg-warning-hover active:bg-warning-pressed text-onColor" : "bg-warning-disabled text-disabled",
    "warning-light": !disabled ? "bg-warning-light hover:bg-warning-light-hover active:bg-warning-light-pressed" : "bg-warning-disabled text-disabled"
  })[color];
  const cursorClass = classNames(props.disabled ? "cursor-not-allowed" : "cursor-pointer");
  const borderMapping = ["primary", "secondary", "tertiary"];
  const borderClass = classNames(borderMapping.includes(props.color) ? "border border-secondary" : "");
  return /* @__PURE__ */ jsx("button", {
    className: `
        ${props.className}
        ${colorVariants(props.color, props.disabled)}
        ${cursorClass}
        ${borderClass}
        ${props.block && "w-full"}
        h-12
        transition-colors
        rounded-lg
        px-4`,
    disabled: props.disabled,
    onClick: props.onClick,
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex justify-between items-center",
      children: [/* @__PURE__ */ jsx("div", {
        children: props.prefix
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex justify-center ",
        children: [props.children, props.next && /* @__PURE__ */ jsx(ArrowSmallRightIcon$1, {
          className: "h-6 w-6 ml-2"
        })]
      }), /* @__PURE__ */ jsx("div", {
        children: props.suffix
      })]
    })
  });
};
HCButton.defaultProps = {
  className: "",
  color: "primary",
  disabled: false,
  block: true,
  next: false
};
const HCButton$1 = HCButton;
try {
  Button.displayName = "Button";
  Button.__docgenInfo = { "description": "", "displayName": "Button", "props": { "className": { "defaultValue": { value: "" }, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "color": { "defaultValue": { value: "primary" }, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": '"warning"' }, { "value": '"primary"' }, { "value": '"secondary"' }, { "value": '"tertiary"' }, { "value": '"highlight"' }, { "value": '"highlight-light"' }, { "value": '"success"' }, { "value": '"success-light"' }, { "value": '"destructive"' }, { "value": '"destructive-light"' }, { "value": '"warning-light"' }] } }, "disabled": { "defaultValue": { value: "false" }, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "block": { "defaultValue": { value: "true" }, "description": "", "name": "block", "required": false, "type": { "name": "boolean" } }, "textColor": { "defaultValue": null, "description": "", "name": "textColor", "required": false, "type": { "name": "string" } }, "next": { "defaultValue": { value: "false" }, "description": "", "name": "next", "required": false, "type": { "name": "boolean" } }, "prefix": { "defaultValue": null, "description": "", "name": "prefix", "required": false, "type": { "name": "ReactNode" } }, "suffix": { "defaultValue": null, "description": "", "name": "suffix", "required": false, "type": { "name": "ReactNode" } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLButtonElement>" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
export {
  HCButton$1 as H
};
//# sourceMappingURL=Button.2c936216.js.map
