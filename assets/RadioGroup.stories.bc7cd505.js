var _a;
import { H as HCRadio } from "./index.14aa2e86.js";
import { a as jsxs, j as jsx } from "./jsx-runtime.db436af5.js";
import "./index.2e2f892a.js";
import "./_commonjsHelpers.712cc82f.js";
const RadioGroup_stories = {
  title: "Components/RadioGroup",
  component: HCRadio,
  argTypes: {
    value: {
      control: "text",
      description: "Used for selected value.",
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
    value: "1"
  },
  render: () => /* @__PURE__ */ jsxs(HCRadio.Group, {
    children: [/* @__PURE__ */ jsx(HCRadio, {
      label: "caption1",
      value: "1"
    }), /* @__PURE__ */ jsx(HCRadio, {
      label: "caption2",
      value: "2"
    })]
  })
};
Basic.parameters = {
  ...Basic.parameters,
  storySource: {
    source: "{\n  args: {\n    value: '1'\n  },\n  render: () => <HCRadio.Group>\n      <HCRadio label='caption1' value='1' />\n      <HCRadio label='caption2' value='2' />\n    </HCRadio.Group>\n}",
    ...(_a = Basic.parameters) == null ? void 0 : _a.storySource
  }
};
const __namedExportsOrder = ["Basic"];
export {
  Basic,
  __namedExportsOrder,
  RadioGroup_stories as default
};
//# sourceMappingURL=RadioGroup.stories.bc7cd505.js.map
