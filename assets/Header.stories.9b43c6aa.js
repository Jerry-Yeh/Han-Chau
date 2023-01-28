var _a, _b;
import { H as Header } from "./Header.498a2bb5.js";
import { j as jsx } from "./jsx-runtime.db436af5.js";
import "./index.2e2f892a.js";
import "./_commonjsHelpers.712cc82f.js";
const Header_stories = {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "fullscreen"
  }
};
const Template = (args) => /* @__PURE__ */ jsx(Header, {
  ...args
});
const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe"
  }
};
const LoggedOut = Template.bind({});
LoggedOut.args = {};
LoggedIn.parameters = {
  ...LoggedIn.parameters,
  storySource: {
    source: "args => <Header {...args} />",
    ...(_a = LoggedIn.parameters) == null ? void 0 : _a.storySource
  }
};
LoggedOut.parameters = {
  ...LoggedOut.parameters,
  storySource: {
    source: "args => <Header {...args} />",
    ...(_b = LoggedOut.parameters) == null ? void 0 : _b.storySource
  }
};
const __namedExportsOrder = ["LoggedIn", "LoggedOut"];
export {
  LoggedIn,
  LoggedOut,
  __namedExportsOrder,
  Header_stories as default
};
//# sourceMappingURL=Header.stories.9b43c6aa.js.map
