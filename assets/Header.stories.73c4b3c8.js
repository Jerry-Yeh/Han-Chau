var _a, _b, _c;
import { r as react } from "./index.2e2f892a.js";
import { j as jsx, a as jsxs } from "./jsx-runtime.db436af5.js";
import { A as AntdDecorator } from "./AntdDecorator.e55b93a7.js";
import "./_commonjsHelpers.712cc82f.js";
import "./index.52deea7f.js";
import "./extends.67b6fc1a.js";
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
  const [sizeClass, setSizeClass] = react.exports.useState("");
  react.exports.useEffect(() => {
    const initSizeClass = () => {
      switch (props.size) {
        case "l":
          setSizeClass("py-6");
          break;
        case "m":
          setSizeClass("py-3.5");
          break;
        case "s":
          setSizeClass("py-0");
          break;
      }
    };
    initSizeClass();
  });
  return /* @__PURE__ */ jsx("div", {
    className: `bg-secondary ${sizeClass}`,
    children: /* @__PURE__ */ jsxs("div", {
      className: `h-12 grid grid-cols-3`,
      children: [/* @__PURE__ */ jsx("div", {
        className: "hover:cursor-pointer flex justify-start items-center pl-4",
        children: props.left
      }), /* @__PURE__ */ jsx("div", {
        className: "flex justify-center",
        children: props.center
      }), /* @__PURE__ */ jsx("div", {
        className: "flex justify-end items-center hover:cursor-pointer pr-4",
        children: props.right
      })]
    })
  });
};
HCHeader.defaultProps = {
  center: /* @__PURE__ */ jsx("img", {
    className: "w-7",
    src: logomark,
    alt: "LOGO"
  }),
  size: "m"
};
const HCHeader$1 = HCHeader;
try {
  Header.displayName = "Header";
  Header.__docgenInfo = { "description": "", "displayName": "Header", "props": { "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "ReactNode" } }, "center": { "defaultValue": { value: "<img className='w-7' src={logomark} alt='LOGO' />" }, "description": "", "name": "center", "required": false, "type": { "name": "ReactNode" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "ReactNode" } }, "size": { "defaultValue": { value: "m" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": '"l"' }, { "value": '"m"' }, { "value": '"s"' }] } } } };
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
      description: "Handle left action of header.",
      table: {
        type: {
          summary: "function"
        }
      }
    },
    right: {
      control: false,
      description: "Handle right action of header.",
      table: {
        type: {
          summary: "function"
        }
      }
    },
    size: {
      control: "select",
      options: ["l", "m", "s"],
      description: "Set the size of header.",
      defaultValue: {
        summary: "m"
      },
      table: {
        type: {
          summary: "string"
        }
      }
    }
  }
};
const Basic = {};
const Previous = {
  args: {
    left: /* @__PURE__ */ jsx(ArrowLeftIcon$1, {
      className: "w-8 h-8",
      onClick: () => ({})
    })
  }
};
const Next = {
  args: {
    left: /* @__PURE__ */ jsx(ArrowLeftIcon$1, {
      className: "w-8 h-8",
      onClick: () => ({})
    }),
    right: /* @__PURE__ */ jsx("button", {
      className: "text-tertiary",
      children: "\u8DF3\u904E"
    })
  }
};
Basic.parameters = {
  ...Basic.parameters,
  storySource: {
    source: "{}",
    ...(_a = Basic.parameters) == null ? void 0 : _a.storySource
  }
};
Previous.parameters = {
  ...Previous.parameters,
  storySource: {
    source: "{\n  args: {\n    left: <ArrowLeftIcon className='w-8 h-8' onClick={() => ({})} />\n  }\n}",
    ...(_b = Previous.parameters) == null ? void 0 : _b.storySource
  }
};
Next.parameters = {
  ...Next.parameters,
  storySource: {
    source: "{\n  args: {\n    left: <ArrowLeftIcon className='w-8 h-8' onClick={() => ({})} />,\n    right: <button className='text-tertiary'>\u8DF3\u904E</button>\n  }\n}",
    ...(_c = Next.parameters) == null ? void 0 : _c.storySource
  }
};
const __namedExportsOrder = ["Basic", "Previous", "Next"];
export {
  Basic,
  Next,
  Previous,
  __namedExportsOrder,
  Header_stories as default
};
//# sourceMappingURL=Header.stories.73c4b3c8.js.map
