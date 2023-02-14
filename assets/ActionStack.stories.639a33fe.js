var _a;
import { r as react } from "./index.2e2f892a.js";
import { j as jsx } from "./jsx-runtime.db436af5.js";
import { H as HCButton } from "./Button.2c936216.js";
import "./_commonjsHelpers.712cc82f.js";
import "./index.0579b088.js";
const HCActionStack = (props) => {
  const ref = react.exports.useRef(null);
  const [height, setHeight] = react.exports.useState("");
  react.exports.useEffect(() => {
    var _a2, _b;
    if ((_a2 = ref.current) == null ? void 0 : _a2.clientHeight) {
      setHeight(`${(_b = ref.current) == null ? void 0 : _b.clientHeight}px`);
    }
  }, []);
  return /* @__PURE__ */ jsx("div", {
    ref,
    className: `
        w-full px-4 pt-9 pb-6 bg-white box-border drop-shadow-reversed rounded-t-3xl
        fixed left-0 duration-800`,
    style: {
      bottom: props.show ? "0" : `-${height}`
    },
    children: props.children
  });
};
HCActionStack.defaultProps = {
  show: false
};
const HCActionStack$1 = HCActionStack;
try {
  ActionStack.displayName = "ActionStack";
  ActionStack.__docgenInfo = { "description": "", "displayName": "ActionStack", "props": { "show": { "defaultValue": { value: "false" }, "description": "", "name": "show", "required": false, "type": { "name": "boolean" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
const ActionStack_stories = {
  title: "Components/ActionStack",
  component: HCActionStack$1,
  argTypes: {
    children: {
      control: false,
      description: "Actions in action stack.",
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    },
    show: {
      control: "boolean",
      description: "Whether the action stack is visible or not.",
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
    source: "{\n  // render: () => (\n  //   <div className='h-screen'>\n  //     <HCActionStack show={true}>\n  //       <HCButton color='highlight'>\u99AC\u4E0A\u524D\u5F80\u6E2C\u8A66</HCButton>\n  //     </HCActionStack>\n  //   </div>\n  // ),\n  args: {\n    children: <HCButton color='highlight'>\u99AC\u4E0A\u524D\u5F80\u6E2C\u8A66</HCButton>,\n    show: false\n  }\n}",
    ...(_a = Basic.parameters) == null ? void 0 : _a.storySource
  }
};
const __namedExportsOrder = ["Basic"];
export {
  Basic,
  __namedExportsOrder,
  ActionStack_stories as default
};
//# sourceMappingURL=ActionStack.stories.639a33fe.js.map
