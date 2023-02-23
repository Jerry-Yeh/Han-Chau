import { j as jsx } from "./jsx-runtime.db436af5.js";
import { q as ConfigProvider } from "./index.52deea7f.js";
const AntdDecorator = (Story) => {
  return /* @__PURE__ */ jsx(ConfigProvider, {
    autoInsertSpaceInButton: false,
    theme: {
      token: {
        fontFamily: "Inter, Noto Sans TC"
      },
      hashed: false
    },
    children: /* @__PURE__ */ jsx(Story, {})
  });
};
const AntdDecorator$1 = AntdDecorator;
try {
  AntdDecorator.displayName = "AntdDecorator";
  AntdDecorator.__docgenInfo = { "description": "", "displayName": "AntdDecorator", "props": { "decorators": { "defaultValue": null, "description": "Wrapper components or Storybook decorators that wrap a story.\n\nDecorators defined in Meta will be applied to every story variation.\n@see [Decorators](https://storybook.js.org/docs/addons/introduction/#1-decorators)", "name": "decorators", "required": false, "type": { "name": "DecoratorFunction<ReactRenderer, Args>[]" } }, "parameters": { "defaultValue": null, "description": "Custom metadata for a story.\n@see [Parameters](https://storybook.js.org/docs/basics/writing-stories/#parameters)", "name": "parameters", "required": false, "type": { "name": "Parameters" } }, "args": { "defaultValue": null, "description": "Dynamic data that are provided (and possibly updated by) Storybook and its addons.\n@see [Arg story inputs](https://storybook.js.org/docs/react/api/csf#args-story-inputs)", "name": "args", "required": false, "type": { "name": "Partial<Args>" } }, "argTypes": { "defaultValue": null, "description": "ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. These get automatically filled in by Storybook Docs.\n@see [Control annotations](https://github.com/storybookjs/storybook/blob/91e9dee33faa8eff0b342a366845de7100415367/addons/controls/README.md#control-annotations)", "name": "argTypes", "required": false, "type": { "name": "Partial<ArgTypes<Args>>" } }, "loaders": { "defaultValue": null, "description": "Asynchronous functions which provide data for a story.\n@see [Loaders](https://storybook.js.org/docs/react/writing-stories/loaders)", "name": "loaders", "required": false, "type": { "name": "LoaderFunction<ReactRenderer, Args>[]" } }, "render": { "defaultValue": null, "description": "Define a custom render function for the story(ies). If not passed, a default render function by the renderer will be used.", "name": "render", "required": false, "type": { "name": "ArgsStoryFn<ReactRenderer, Args>" } }, "storyName": { "defaultValue": null, "description": "Override the display name in the UI (CSF v2)", "name": "storyName", "required": false, "type": { "name": "string" } }, "play": { "defaultValue": null, "description": "Function that is executed after the story is rendered.", "name": "play", "required": false, "type": { "name": "PlayFunction<ReactRenderer, Args>" } }, "tags": { "defaultValue": null, "description": "Named tags for a story, used to filter stories in different contexts.", "name": "tags", "required": false, "type": { "name": "string[]" } }, "story": { "defaultValue": null, "description": "@deprecated", "name": "story", "required": false, "type": { "name": 'Omit<StoryAnnotations<ReactRenderer, Args, Partial<Args>>, "story">' } } } };
} catch (__react_docgen_typescript_loader_error) {
}
export {
  AntdDecorator$1 as A
};
//# sourceMappingURL=AntdDecorator.e55b93a7.js.map
