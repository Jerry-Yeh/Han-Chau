import { j as jsx, a as jsxs, F as Fragment } from "./jsx-runtime.db436af5.js";
const button = "";
const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ jsx("button", {
    type: "button",
    className: ["storybook-button", `storybook-button--${size}`, mode, "bg-orange-200"].join(" "),
    style: {
      backgroundColor
    },
    ...props,
    children: label
  });
};
try {
  Button.displayName = "Button";
  Button.__docgenInfo = { "description": "Primary UI component for user interaction", "displayName": "Button", "props": { "primary": { "defaultValue": { value: "false" }, "description": "Is this the principal call to action on the page?", "name": "primary", "required": false, "type": { "name": "boolean" } }, "backgroundColor": { "defaultValue": null, "description": "What background color to use", "name": "backgroundColor", "required": false, "type": { "name": "string" } }, "size": { "defaultValue": { value: "medium" }, "description": "How large should the button be?", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": '"small"' }, { "value": '"medium"' }, { "value": '"large"' }] } }, "label": { "defaultValue": null, "description": "Button contents", "name": "label", "required": true, "type": { "name": "string" } }, "onClick": { "defaultValue": null, "description": "Optional click handler", "name": "onClick", "required": false, "type": { "name": "(() => void)" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
const header = "";
const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount
}) => /* @__PURE__ */ jsx("header", {
  children: /* @__PURE__ */ jsxs("div", {
    className: "wrapper",
    children: [/* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxs("g", {
          fill: "none",
          fillRule: "evenodd",
          children: [/* @__PURE__ */ jsx("path", {
            d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
            fill: "#FFF"
          }), /* @__PURE__ */ jsx("path", {
            d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
            fill: "#555AB9"
          }), /* @__PURE__ */ jsx("path", {
            d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
            fill: "#91BAF8"
          })]
        })
      }), /* @__PURE__ */ jsx("h1", {
        children: "Acme"
      })]
    }), /* @__PURE__ */ jsx("div", {
      children: user ? /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsxs("span", {
          className: "welcome",
          children: ["Welcome, ", /* @__PURE__ */ jsx("b", {
            children: user.name
          }), "!"]
        }), /* @__PURE__ */ jsx(Button, {
          size: "small",
          onClick: onLogout,
          label: "Log out"
        })]
      }) : /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(Button, {
          size: "small",
          onClick: onLogin,
          label: "Log in"
        }), /* @__PURE__ */ jsx(Button, {
          primary: true,
          size: "small",
          onClick: onCreateAccount,
          label: "Sign up"
        })]
      })
    })]
  })
});
try {
  Header.displayName = "Header";
  Header.__docgenInfo = { "description": "", "displayName": "Header", "props": { "user": { "defaultValue": null, "description": "", "name": "user", "required": false, "type": { "name": "User" } }, "onLogin": { "defaultValue": null, "description": "", "name": "onLogin", "required": true, "type": { "name": "() => void" } }, "onLogout": { "defaultValue": null, "description": "", "name": "onLogout", "required": true, "type": { "name": "() => void" } }, "onCreateAccount": { "defaultValue": null, "description": "", "name": "onCreateAccount", "required": true, "type": { "name": "() => void" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
export {
  Header as H
};
//# sourceMappingURL=Header.498a2bb5.js.map
