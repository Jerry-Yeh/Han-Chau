var _a, _b, _c;
import { j as jsx } from "./jsx-runtime.db436af5.js";
import "./index.2e2f892a.js";
import "./_commonjsHelpers.712cc82f.js";
const HCProgress = (props) => {
  return /* @__PURE__ */ jsx("div", {
    className: "w-full bg-tertiary",
    children: /* @__PURE__ */ jsx("div", {
      className: `
      h-1 ${props.widthClass ? "bg-highlight" : "bg-transparent"}
      ${props.widthClass} transition-all duration-300
    `
    })
  });
};
const HCProgress$1 = HCProgress;
try {
  Progress.displayName = "Progress";
  Progress.__docgenInfo = { "description": "", "displayName": "Progress", "props": { "widthClass": { "defaultValue": null, "description": "", "name": "widthClass", "required": false, "type": { "name": "string" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
const Progres_stories = {
  title: "Components/Progress",
  component: HCProgress$1,
  argTypes: {
    widthClass: {
      control: "text",
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
const InProgress = {
  args: {
    widthClass: "w-1/9"
  }
};
const Full = {
  args: {
    widthClass: "w-full"
  }
};
Basic.parameters = {
  ...Basic.parameters,
  storySource: {
    source: "{}",
    ...(_a = Basic.parameters) == null ? void 0 : _a.storySource
  }
};
InProgress.parameters = {
  ...InProgress.parameters,
  storySource: {
    source: "{\n  args: {\n    widthClass: 'w-1/9'\n  }\n}",
    ...(_b = InProgress.parameters) == null ? void 0 : _b.storySource
  }
};
Full.parameters = {
  ...Full.parameters,
  storySource: {
    source: "{\n  args: {\n    widthClass: 'w-full'\n  }\n}",
    ...(_c = Full.parameters) == null ? void 0 : _c.storySource
  }
};
const __namedExportsOrder = ["Basic", "InProgress", "Full"];
export {
  Basic,
  Full,
  InProgress,
  __namedExportsOrder,
  Progres_stories as default
};
//# sourceMappingURL=Progres.stories.fb2f4bdc.js.map
