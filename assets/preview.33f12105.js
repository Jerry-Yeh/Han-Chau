import { s as scope } from "./index.e850844b.js";
import { d as dedent } from "./index.67736049.js";
var PARAM_KEY = "backgrounds";
const logger = __STORYBOOK_MODULE_CLIENT_LOGGER__.logger;
var { document, window } = scope, isReduceMotionEnabled = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, getBackgroundColorByName = (currentSelectedValue, backgrounds = [], defaultName) => {
  if (currentSelectedValue === "transparent")
    return "transparent";
  if (backgrounds.find((background) => background.value === currentSelectedValue))
    return currentSelectedValue;
  let defaultBackground = backgrounds.find((background) => background.name === defaultName);
  if (defaultBackground)
    return defaultBackground.value;
  if (defaultName) {
    let availableColors = backgrounds.map((background) => background.name).join(", ");
    logger.warn(dedent`
        Backgrounds Addon: could not find the default color "${defaultName}".
        These are the available colors for your story based on your configuration:
        ${availableColors}.
      `);
  }
  return "transparent";
}, clearStyles = (selector) => {
  (Array.isArray(selector) ? selector : [selector]).forEach(clearStyle);
}, clearStyle = (selector) => {
  let element = document.getElementById(selector);
  element && element.parentElement.removeChild(element);
}, addGridStyle = (selector, css) => {
  let existingStyle = document.getElementById(selector);
  if (existingStyle)
    existingStyle.innerHTML !== css && (existingStyle.innerHTML = css);
  else {
    let style = document.createElement("style");
    style.setAttribute("id", selector), style.innerHTML = css, document.head.appendChild(style);
  }
}, addBackgroundStyle = (selector, css, storyId) => {
  let existingStyle = document.getElementById(selector);
  if (existingStyle)
    existingStyle.innerHTML !== css && (existingStyle.innerHTML = css);
  else {
    let style = document.createElement("style");
    style.setAttribute("id", selector), style.innerHTML = css;
    let gridStyleSelector = `addon-backgrounds-grid${storyId ? `-docs-${storyId}` : ""}`, existingGridStyle = document.getElementById(gridStyleSelector);
    existingGridStyle ? existingGridStyle.parentElement.insertBefore(style, existingGridStyle) : document.head.appendChild(style);
  }
};
const useMemo = __STORYBOOK_MODULE_PREVIEW_API__.useMemo;
const useEffect = __STORYBOOK_MODULE_PREVIEW_API__.useEffect;
var withBackground = (StoryFn, context) => {
  var _a;
  let { globals: globals2, parameters: parameters2 } = context, globalsBackgroundColor = (_a = globals2[PARAM_KEY]) == null ? void 0 : _a.value, backgroundsConfig = parameters2[PARAM_KEY], selectedBackgroundColor = useMemo(() => backgroundsConfig.disable ? "transparent" : getBackgroundColorByName(globalsBackgroundColor, backgroundsConfig.values, backgroundsConfig.default), [backgroundsConfig, globalsBackgroundColor]), isActive = useMemo(() => selectedBackgroundColor && selectedBackgroundColor !== "transparent", [selectedBackgroundColor]), selector = context.viewMode === "docs" ? `#anchor--${context.id} .docs-story` : ".sb-show-main", backgroundStyles = useMemo(() => {
    let transitionStyle = "transition: background-color 0.3s;";
    return `
      ${selector} {
        background: ${selectedBackgroundColor} !important;
        ${isReduceMotionEnabled() ? "" : transitionStyle}
      }
    `;
  }, [selectedBackgroundColor, selector]);
  return useEffect(() => {
    let selectorId = context.viewMode === "docs" ? `addon-backgrounds-docs-${context.id}` : "addon-backgrounds-color";
    if (!isActive) {
      clearStyles(selectorId);
      return;
    }
    addBackgroundStyle(selectorId, backgroundStyles, context.viewMode === "docs" ? context.id : null);
  }, [isActive, backgroundStyles, context]), StoryFn();
};
const useMemo2 = __STORYBOOK_MODULE_PREVIEW_API__.useMemo;
const useEffect2 = __STORYBOOK_MODULE_PREVIEW_API__.useEffect;
var withGrid = (StoryFn, context) => {
  var _a, _b, _c;
  let { globals: globals2, parameters: parameters2 } = context, gridParameters = parameters2[PARAM_KEY].grid, isActive = ((_a = globals2[PARAM_KEY]) == null ? void 0 : _a.grid) === true && gridParameters.disable !== true, { cellAmount, cellSize, opacity } = gridParameters, isInDocs = context.viewMode === "docs", defaultOffset = parameters2.layout === void 0 || parameters2.layout === "padded" ? 16 : 0, offsetX = (_b = gridParameters.offsetX) != null ? _b : isInDocs ? 20 : defaultOffset, offsetY = (_c = gridParameters.offsetY) != null ? _c : isInDocs ? 20 : defaultOffset, gridStyles = useMemo2(() => {
    let selector = context.viewMode === "docs" ? `#anchor--${context.id} .docs-story` : ".sb-show-main", backgroundSize = [`${cellSize * cellAmount}px ${cellSize * cellAmount}px`, `${cellSize * cellAmount}px ${cellSize * cellAmount}px`, `${cellSize}px ${cellSize}px`, `${cellSize}px ${cellSize}px`].join(", ");
    return `
      ${selector} {
        background-size: ${backgroundSize} !important;
        background-position: ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${opacity / 2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${opacity / 2}) 1px, transparent 1px) !important;
      }
    `;
  }, [cellSize]);
  return useEffect2(() => {
    let selectorId = context.viewMode === "docs" ? `addon-backgrounds-grid-docs-${context.id}` : "addon-backgrounds-grid";
    if (!isActive) {
      clearStyles(selectorId);
      return;
    }
    addGridStyle(selectorId, gridStyles);
  }, [isActive, gridStyles, context]), StoryFn();
};
var decorators = [withGrid, withBackground], parameters = { [PARAM_KEY]: { grid: { cellSize: 20, opacity: 0.5, cellAmount: 5 }, values: [{ name: "light", value: "#F8F8F8" }, { name: "dark", value: "#333333" }] } }, globals = { [PARAM_KEY]: null };
export {
  decorators,
  globals,
  parameters
};
//# sourceMappingURL=preview.33f12105.js.map
