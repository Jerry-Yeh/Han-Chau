var _a, _b, _c;
import { r as react } from "./index.2e2f892a.js";
import { H as HCButton } from "./Button.f590a39e.js";
import { j as jsx } from "./jsx-runtime.db436af5.js";
import "./_commonjsHelpers.712cc82f.js";
import "./index.0579b088.js";
const google = "" + new URL("google.192c7293.svg", import.meta.url).href;
const Button_stories = {
  title: "Components/Button",
  component: HCButton,
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "highlight", "highlight-light", "success", "success-light", "destructive", "destructive-light", "warning", "warning-light"],
      description: "Adjust background color.",
      table: {
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "primary"
        }
      }
    },
    children: {
      control: "text",
      description: "Content in button.",
      defaultValue: {
        summary: "Button"
      },
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    },
    disabled: {
      control: "boolean",
      description: "Disabled state of button.",
      defaultValue: {
        summary: false
      },
      table: {
        type: {
          summary: "boolean"
        }
      }
    },
    next: {
      control: "boolean",
      description: "Set the next icon of button.",
      defaultValue: {
        summary: false
      },
      table: {
        type: {
          summary: "boolean"
        }
      }
    }
  }
};
const Basic = {
  args: {
    color: "primary",
    children: "Button",
    disabled: false,
    next: false
  }
};
const Next = {
  args: {
    color: "highlight",
    disabled: false,
    next: true,
    children: /* @__PURE__ */ jsx(react.exports.Fragment, {
      children: /* @__PURE__ */ jsx("span", {
        children: "Button"
      })
    })
  }
};
const Prefix = {
  args: {
    color: "primary",
    prefix: /* @__PURE__ */ jsx("img", {
      src: google,
      alt: "icon"
    }),
    children: /* @__PURE__ */ jsx("span", {
      children: "\u7E7C\u7E8C\u4EE5 Google \u767B\u5165"
    })
  }
};
Basic.parameters = {
  ...Basic.parameters,
  storySource: {
    source: "{\n  args: {\n    color: 'primary',\n    children: 'Button',\n    disabled: false,\n    next: false\n  }\n}",
    ...(_a = Basic.parameters) == null ? void 0 : _a.storySource
  }
};
Next.parameters = {
  ...Next.parameters,
  storySource: {
    source: "{\n  args: {\n    color: 'highlight',\n    disabled: false,\n    next: true,\n    children: <Fragment>\n        <span>Button</span>\n      </Fragment>\n  }\n}",
    ...(_b = Next.parameters) == null ? void 0 : _b.storySource
  }
};
Prefix.parameters = {
  ...Prefix.parameters,
  storySource: {
    source: "{\n  args: {\n    color: 'primary',\n    prefix: <img src={google} alt='icon' />,\n    children: <span>\u7E7C\u7E8C\u4EE5 Google \u767B\u5165</span>\n  }\n}",
    ...(_c = Prefix.parameters) == null ? void 0 : _c.storySource
  }
};
const __namedExportsOrder = ["Basic", "Next", "Prefix"];
export {
  Basic,
  Next,
  Prefix,
  __namedExportsOrder,
  Button_stories as default
};
//# sourceMappingURL=Button.stories.3a7e3639.js.map
