var _a;
import { r as react } from "./index.2e2f892a.js";
import { j as jsx } from "./jsx-runtime.db436af5.js";
import { H as HCButton } from "./Button.f590a39e.js";
import "./_commonjsHelpers.712cc82f.js";
import "./index.0579b088.js";
const HCBottomSheet = (props) => {
  const ref = react.exports.useRef(null);
  const [height, setHeight] = react.exports.useState(0);
  const [defaultPos, setDefaultPos] = react.exports.useState("-bottom-full");
  const [shadow, setShadow] = react.exports.useState("");
  react.exports.useEffect(() => {
    var _a2;
    if (ref.current) {
      setHeight((_a2 = ref.current) == null ? void 0 : _a2.clientHeight);
      setDefaultPos("");
    }
  }, [height]);
  react.exports.useEffect(() => {
    let timer;
    if (props.show) {
      timer = setTimeout(() => {
        setShadow("drop-shadow-reversed");
      }, 0);
    } else {
      timer = setTimeout(() => {
        setShadow("");
      }, 800);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [props.show, shadow]);
  return /* @__PURE__ */ jsx("div", {
    ref,
    className: `
        ${props.className}
        ${defaultPos}
        ${shadow}
        w-full pt-9 pb-6 px-4 bg-white box-border rounded-t-3xl
        fixed left-0 transition-bottom duration-800`,
    style: {
      bottom: props.show ? "0" : `-${height}px`
    },
    children: props.children
  });
};
HCBottomSheet.defaultProps = {
  show: false,
  className: ""
};
const HCBottomSheet$1 = HCBottomSheet;
try {
  BottomSheet.displayName = "BottomSheet";
  BottomSheet.__docgenInfo = { "description": "", "displayName": "BottomSheet", "props": { "className": { "defaultValue": { value: "" }, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "show": { "defaultValue": { value: "false" }, "description": "", "name": "show", "required": false, "type": { "name": "boolean" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
const BottomSheet_stories = {
  title: "Components/BottomSheet",
  component: HCBottomSheet$1,
  argTypes: {
    children: {
      control: false,
      description: "Actions in the bottom sheet.",
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    },
    show: {
      control: "boolean",
      description: "Whether the bottom sheet is visible or not.",
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
    children: /* @__PURE__ */ jsx(HCButton, {
      color: "highlight",
      children: "\u99AC\u4E0A\u524D\u5F80\u6E2C\u8A66"
    }),
    show: false
  }
};
Basic.parameters = {
  ...Basic.parameters,
  storySource: {
    source: "{\n  args: {\n    children: <HCButton color='highlight'>\u99AC\u4E0A\u524D\u5F80\u6E2C\u8A66</HCButton>,\n    show: false\n  }\n}",
    ...(_a = Basic.parameters) == null ? void 0 : _a.storySource
  }
};
const __namedExportsOrder = ["Basic"];
export {
  Basic,
  __namedExportsOrder,
  BottomSheet_stories as default
};
//# sourceMappingURL=BottomSheet.stories.222c6a99.js.map
