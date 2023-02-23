var _a;
import { H as HCRadio, a as HCRadioGroup } from "./index.619e8a6b.js";
import { a as jsxs, j as jsx } from "./jsx-runtime.db436af5.js";
import "./index.2e2f892a.js";
import "./_commonjsHelpers.712cc82f.js";
const RadioGroup_stories = {
  title: "Components/RadioGroup",
  component: HCRadio,
  parameters: {
    docs: {
      source: {
        type: "dynamic",
        excludeDecorators: true
      }
    }
  },
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
  render: () => /* @__PURE__ */ jsxs(HCRadioGroup, {
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
    source: "{\n  args: {\n    value: '1'\n  },\n  render: () => <HCRadioGroup>\n      <HCRadio label='caption1' value='1' />\n      <HCRadio label='caption2' value='2' />\n    </HCRadioGroup>\n}",
    ...(_a = Basic.parameters) == null ? void 0 : _a.storySource
  }
};
const __namedExportsOrder = ["Basic"];
export {
  Basic,
  __namedExportsOrder,
  RadioGroup_stories as default
};
//# sourceMappingURL=RadioGroup.stories.7b962a60.js.map
