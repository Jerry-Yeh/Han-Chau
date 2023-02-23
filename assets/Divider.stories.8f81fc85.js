var _a, _b;
import { j as jsx } from "./jsx-runtime.db436af5.js";
import { c as classNames } from "./index.0579b088.js";
import { r as react } from "./index.2e2f892a.js";
import { r as resetComponent, C as ConfigContext } from "./index.52deea7f.js";
import { g as genComponentStyleHook, m as merge } from "./statistic.59e1bdd0.js";
import "./_commonjsHelpers.712cc82f.js";
import "./extends.67b6fc1a.js";
const genSharedDividerStyle = (token) => {
  const {
    componentCls,
    sizePaddingEdgeHorizontal,
    colorSplit,
    lineWidth
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      borderBlockStart: `${lineWidth}px solid ${colorSplit}`,
      "&-vertical": {
        position: "relative",
        top: "-0.06em",
        display: "inline-block",
        height: "0.9em",
        margin: `0 ${token.dividerVerticalGutterMargin}px`,
        verticalAlign: "middle",
        borderTop: 0,
        borderInlineStart: `${lineWidth}px solid ${colorSplit}`
      },
      "&-horizontal": {
        display: "flex",
        clear: "both",
        width: "100%",
        minWidth: "100%",
        margin: `${token.dividerHorizontalGutterMargin}px 0`
      },
      "&-horizontal&-with-text": {
        display: "flex",
        alignItems: "center",
        margin: `${token.dividerHorizontalWithTextGutterMargin}px 0`,
        color: token.colorTextHeading,
        fontWeight: 500,
        fontSize: token.fontSizeLG,
        whiteSpace: "nowrap",
        textAlign: "center",
        borderBlockStart: `0 ${colorSplit}`,
        "&::before, &::after": {
          position: "relative",
          width: "50%",
          borderBlockStart: `${lineWidth}px solid transparent`,
          borderBlockStartColor: "inherit",
          borderBlockEnd: 0,
          transform: "translateY(50%)",
          content: "''"
        }
      },
      "&-horizontal&-with-text-left": {
        "&::before": {
          width: "5%"
        },
        "&::after": {
          width: "95%"
        }
      },
      "&-horizontal&-with-text-right": {
        "&::before": {
          width: "95%"
        },
        "&::after": {
          width: "5%"
        }
      },
      [`${componentCls}-inner-text`]: {
        display: "inline-block",
        padding: "0 1em"
      },
      "&-dashed": {
        background: "none",
        borderColor: colorSplit,
        borderStyle: "dashed",
        borderWidth: `${lineWidth}px 0 0`
      },
      "&-horizontal&-with-text&-dashed": {
        "&::before, &::after": {
          borderStyle: "dashed none none"
        }
      },
      "&-vertical&-dashed": {
        borderInlineStart: lineWidth,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      "&-plain&-with-text": {
        color: token.colorText,
        fontWeight: "normal",
        fontSize: token.fontSize
      },
      "&-horizontal&-with-text-left&-no-default-orientation-margin-left": {
        "&::before": {
          width: 0
        },
        "&::after": {
          width: "100%"
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineStart: sizePaddingEdgeHorizontal
        }
      },
      "&-horizontal&-with-text-right&-no-default-orientation-margin-right": {
        "&::before": {
          width: "100%"
        },
        "&::after": {
          width: 0
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineEnd: sizePaddingEdgeHorizontal
        }
      }
    })
  };
};
const useStyle = genComponentStyleHook("Divider", (token) => {
  const dividerToken = merge(token, {
    dividerVerticalGutterMargin: token.marginXS,
    dividerHorizontalWithTextGutterMargin: token.margin,
    dividerHorizontalGutterMargin: token.marginLG
  });
  return [genSharedDividerStyle(dividerToken)];
}, {
  sizePaddingEdgeHorizontal: 0
});
var __rest = globalThis && globalThis.__rest || function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const Divider$1 = (props) => {
  const {
    getPrefixCls,
    direction
  } = react.exports.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    type = "horizontal",
    orientation = "center",
    orientationMargin,
    className,
    children,
    dashed,
    plain
  } = props, restProps = __rest(props, ["prefixCls", "type", "orientation", "orientationMargin", "className", "children", "dashed", "plain"]);
  const prefixCls = getPrefixCls("divider", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const orientationPrefix = orientation.length > 0 ? `-${orientation}` : orientation;
  const hasChildren = !!children;
  const hasCustomMarginLeft = orientation === "left" && orientationMargin != null;
  const hasCustomMarginRight = orientation === "right" && orientationMargin != null;
  const classString = classNames(prefixCls, hashId, `${prefixCls}-${type}`, {
    [`${prefixCls}-with-text`]: hasChildren,
    [`${prefixCls}-with-text${orientationPrefix}`]: hasChildren,
    [`${prefixCls}-dashed`]: !!dashed,
    [`${prefixCls}-plain`]: !!plain,
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-no-default-orientation-margin-left`]: hasCustomMarginLeft,
    [`${prefixCls}-no-default-orientation-margin-right`]: hasCustomMarginRight
  }, className);
  const innerStyle = Object.assign(Object.assign({}, hasCustomMarginLeft && {
    marginLeft: orientationMargin
  }), hasCustomMarginRight && {
    marginRight: orientationMargin
  });
  return wrapSSR(/* @__PURE__ */ react.exports.createElement("div", Object.assign({
    className: classString
  }, restProps, {
    role: "separator"
  }), children && type !== "vertical" && /* @__PURE__ */ react.exports.createElement("span", {
    className: `${prefixCls}-inner-text`,
    style: innerStyle
  }, children)));
};
const Divider$2 = Divider$1;
const HCDivider = (props) => {
  return /* @__PURE__ */ jsx(Divider$2, {
    className: props.className,
    children: props.children
  });
};
const Divider = HCDivider;
try {
  Divider$2.displayName = "Divider";
  Divider$2.__docgenInfo = { "description": "", "displayName": "Divider", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
const Divider_stories = {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    children: {
      control: false,
      description: "Text in the divider.",
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    }
  }
};
const Basic = {};
const Text = {
  args: {
    children: "\u5982\u679C\u5DF2\u7D93\u6709\u5E33\u865F"
  }
};
Basic.parameters = {
  ...Basic.parameters,
  storySource: {
    source: "{}",
    ...(_a = Basic.parameters) == null ? void 0 : _a.storySource
  }
};
Text.parameters = {
  ...Text.parameters,
  storySource: {
    source: "{\n  args: {\n    children: '\u5982\u679C\u5DF2\u7D93\u6709\u5E33\u865F'\n  }\n}",
    ...(_b = Text.parameters) == null ? void 0 : _b.storySource
  }
};
const __namedExportsOrder = ["Basic", "Text"];
export {
  Basic,
  Text,
  __namedExportsOrder,
  Divider_stories as default
};
//# sourceMappingURL=Divider.stories.8f81fc85.js.map
