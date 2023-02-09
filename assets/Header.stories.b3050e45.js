var _a, _b, _c, _d;
import { r as react } from "./index.2e2f892a.js";
import { a as jsxs, j as jsx } from "./jsx-runtime.db436af5.js";
import { A as AntdDecorator } from "./AntdDecorator.5606f600.js";
import "./_commonjsHelpers.712cc82f.js";
import "./extends.8d0a382a.js";
function ArrowLeftIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ react.exports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ react.exports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
  }));
}
const ForwardRef = react.exports.forwardRef(ArrowLeftIcon);
const ArrowLeftIcon$1 = ForwardRef;
const logomark = "" + new URL("logomark.6c3433dd.svg", import.meta.url).href;
const HCHeader = (props) => {
  return /* @__PURE__ */ jsxs(react.exports.Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "h-12 px-4 py-2 grid grid-cols-3",
      children: [/* @__PURE__ */ jsx("div", {
        className: "hover:cursor-pointer",
        children: props.left
      }), /* @__PURE__ */ jsx("div", {
        className: "flex justify-center",
        children: /* @__PURE__ */ jsx("img", {
          className: "w-7",
          src: logomark,
          alt: "LOGO"
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "flex justify-end items-center hover:cursor-pointer",
        children: props.right
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "w-full",
      children: /* @__PURE__ */ jsx("div", {
        className: `h-1 ${props.fractionClass ? "bg-highlight" : "bg-transparent"} ${props.fractionClass}`
      })
    })]
  });
};
const HCHeader$1 = HCHeader;
try {
  Header.displayName = "Header";
  Header.__docgenInfo = { "description": "", "displayName": "Header", "props": { "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "ReactNode" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "ReactNode" } }, "fractionClass": { "defaultValue": null, "description": "", "name": "fractionClass", "required": false, "type": { "name": "string" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
const Header_stories = {
  title: "Components/Header",
  component: HCHeader$1,
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
    left: {
      control: false,
      description: "Left action of header.",
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    },
    right: {
      control: false,
      description: "Left action of header.",
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    },
    fractionClass: {
      description: "Set progress width by Tailwind CSS class.",
      table: {
        type: {
          summary: "string"
        }
      }
    }
  }
};
const Basic = {};
const Left = {
  args: {
    left: /* @__PURE__ */ jsx(ArrowLeftIcon$1, {
      className: "w-8 h-8"
    })
  }
};
const Right = {
  args: {
    left: /* @__PURE__ */ jsx(ArrowLeftIcon$1, {
      className: "w-8 h-8"
    }),
    right: /* @__PURE__ */ jsx("span", {
      className: "text-tertiary text-body-bold-s",
      children: "\u8DF3\u904E"
    })
  }
};
const Progress = {
  args: {
    left: /* @__PURE__ */ jsx(ArrowLeftIcon$1, {
      className: "w-8 h-8"
    }),
    right: /* @__PURE__ */ jsx("span", {
      className: "text-tertiary text-body-bold-s",
      children: "\u8DF3\u904E"
    }),
    fractionClass: "w-1/9"
  }
};
Basic.parameters = {
  ...Basic.parameters,
  storySource: {
    source: "{}",
    ...(_a = Basic.parameters) == null ? void 0 : _a.storySource
  }
};
Left.parameters = {
  ...Left.parameters,
  storySource: {
    source: "{\n  args: {\n    left: <ArrowLeftIcon className='w-8 h-8' />\n  }\n}",
    ...(_b = Left.parameters) == null ? void 0 : _b.storySource
  }
};
Right.parameters = {
  ...Right.parameters,
  storySource: {
    source: "{\n  args: {\n    left: <ArrowLeftIcon className='w-8 h-8' />,\n    right: <span className='text-tertiary text-body-bold-s'>\u8DF3\u904E</span>\n  }\n}",
    ...(_c = Right.parameters) == null ? void 0 : _c.storySource
  }
};
Progress.parameters = {
  ...Progress.parameters,
  storySource: {
    source: "{\n  args: {\n    left: <ArrowLeftIcon className='w-8 h-8' />,\n    right: <span className='text-tertiary text-body-bold-s'>\u8DF3\u904E</span>,\n    fractionClass: 'w-1/9'\n  }\n}",
    ...(_d = Progress.parameters) == null ? void 0 : _d.storySource
  }
};
const __namedExportsOrder = ["Basic", "Left", "Right", "Progress"];
export {
  Basic,
  Left,
  Progress,
  Right,
  __namedExportsOrder,
  Header_stories as default
};
//# sourceMappingURL=Header.stories.b3050e45.js.map
