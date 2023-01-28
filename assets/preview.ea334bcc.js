import { s as scope } from "./index.e850844b.js";
import "./_getTag.d1b75f35.js";
import "./_commonjsHelpers.712cc82f.js";
module && module.hot && module.hot.decline && module.hot.decline();
var PARAM_KEY = "links";
const addons = __STORYBOOK_MODULE_PREVIEW_API__.addons;
const makeDecorator = __STORYBOOK_MODULE_PREVIEW_API__.makeDecorator;
const STORY_CHANGED = __STORYBOOK_MODULE_CORE_EVENTS__.STORY_CHANGED;
const SELECT_STORY = __STORYBOOK_MODULE_CORE_EVENTS__.SELECT_STORY;
var { document, HTMLElement } = scope;
var navigate = (params) => addons.getChannel().emit(SELECT_STORY, params), linksListener = (e) => {
  let { target } = e;
  if (!(target instanceof HTMLElement))
    return;
  let element = target, { sbKind: kind, sbStory: story } = element.dataset;
  (kind || story) && (e.preventDefault(), navigate({ kind, story }));
}, hasListener = false, on = () => {
  hasListener || (hasListener = true, document.addEventListener("click", linksListener));
}, off = () => {
  hasListener && (hasListener = false, document.removeEventListener("click", linksListener));
}, withLinks = makeDecorator({ name: "withLinks", parameterName: PARAM_KEY, wrapper: (getStory, context) => (on(), addons.getChannel().once(STORY_CHANGED, off), getStory(context)) });
var decorators = [withLinks];
export {
  decorators
};
//# sourceMappingURL=preview.ea334bcc.js.map
