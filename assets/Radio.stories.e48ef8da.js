var _a;
import { H as HCRadio } from "./index.619e8a6b.js";
import "./index.2e2f892a.js";
import "./_commonjsHelpers.712cc82f.js";
import "./jsx-runtime.db436af5.js";
const Radio_stories = {
  title: "Components/Radio",
  component: HCRadio,
  argTypes: {
    label: {
      control: "text",
      description: "A caption for radio.",
      table: {
        type: {
          summary: "string"
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
    },
    content: {
      control: "text",
      description: "Content for radio.",
      table: {
        type: {
          summary: "string"
        }
      }
    }
  }
};
const Basic = {
  args: {
    label: "\u6A19\u7C64",
    value: "0",
    disabled: false,
    content: "\u5167\u5BB9"
  }
};
Basic.parameters = {
  ...Basic.parameters,
  storySource: {
    source: "{\n  args: {\n    label: '\u6A19\u7C64',\n    value: '0',\n    disabled: false,\n    content: '\u5167\u5BB9'\n  }\n}",
    ...(_a = Basic.parameters) == null ? void 0 : _a.storySource
  }
};
const __namedExportsOrder = ["Basic"];
export {
  Basic,
  __namedExportsOrder,
  Radio_stories as default
};
//# sourceMappingURL=Radio.stories.e48ef8da.js.map
