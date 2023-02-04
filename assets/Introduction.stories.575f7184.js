import { M as Meta } from "./chunk-MA2MUXQN.efbcfd4c.js";
import "./chunk-R4NKYYJA.15989c7a.js";
import { j as jsx, a as jsxs, F as Fragment } from "./jsx-runtime.db436af5.js";
import { u as useMDXComponents } from "./index.53276623.js";
import "./iframe.bff41132.js";
import "../sb-preview/runtime.mjs";
import "./index.2e2f892a.js";
import "./_commonjsHelpers.712cc82f.js";
import "./index.36b4d5ff.js";
import "./index.e850844b.js";
import "./_getTag.d1b75f35.js";
import "./index.1fb95844.js";
import "./isNativeReflectConstruct.fd0a40b8.js";
const Code = "" + new URL("code-brackets.9ef6443e.svg", import.meta.url).href;
const Colors = "" + new URL("colors.ac9401f3.svg", import.meta.url).href;
const Comments = "" + new URL("comments.f15a6837.svg", import.meta.url).href;
const Direction = "" + new URL("direction.94a9917f.svg", import.meta.url).href;
const Flow = "" + new URL("flow.275142c6.svg", import.meta.url).href;
const Plugin = "" + new URL("plugin.57148314.svg", import.meta.url).href;
const Repo = "" + new URL("repo.fb4ece47.svg", import.meta.url).href;
const StackAlt = "" + new URL("stackalt.2ad81543.svg", import.meta.url).href;
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, useMDXComponents(), props.components);
  return MDXLayout ? /* @__PURE__ */ jsx(MDXLayout, {
    ...props,
    children: /* @__PURE__ */ jsx(_createMdxContent, {})
  }) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      h1: "h1",
      p: "p",
      strong: "strong",
      code: "code",
      a: "a"
    }, useMDXComponents(), props.components);
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx(Meta, {
        title: "Example/Introduction"
      }), "\n", /* @__PURE__ */ jsx("style", {
        children: `
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `
      }), "\n", /* @__PURE__ */ jsx(_components.h1, {
        children: "Welcome to Storybook"
      }), "\n", /* @__PURE__ */ jsxs(_components.p, {
        children: ["Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ", /* @__PURE__ */ jsx(_components.strong, {
          children: "stories"
        }), " to revisit during development, testing, or QA."]
      }), "\n", /* @__PURE__ */ jsxs(_components.p, {
        children: ["Browse example stories now by navigating to them in the sidebar.\nView their code in the ", /* @__PURE__ */ jsx(_components.code, {
          children: "stories"
        }), " directory to learn how they work.\nWe recommend building UIs with a ", /* @__PURE__ */ jsx(_components.a, {
          href: "https://componentdriven.org",
          children: /* @__PURE__ */ jsx(_components.strong, {
            children: "component-driven"
          })
        }), " process starting with atomic components and ending with pages."]
      }), "\n", /* @__PURE__ */ jsx("div", {
        className: "subheading",
        children: "Configure"
      }), "\n", /* @__PURE__ */ jsxs("div", {
        className: "link-list",
        children: [/* @__PURE__ */ jsxs("a", {
          className: "link-item",
          href: "https://storybook.js.org/docs/react/addons/addon-types",
          target: "_blank",
          children: [/* @__PURE__ */ jsx("img", {
            src: Plugin,
            alt: "plugin"
          }), /* @__PURE__ */ jsx("span", {
            children: /* @__PURE__ */ jsxs(_components.p, {
              children: [/* @__PURE__ */ jsx("strong", {
                children: "Presets for popular tools"
              }), "\nEasy setup for TypeScript, SCSS and more."]
            })
          })]
        }), /* @__PURE__ */ jsxs("a", {
          className: "link-item",
          href: "https://storybook.js.org/docs/react/configure/webpack",
          target: "_blank",
          children: [/* @__PURE__ */ jsx("img", {
            src: StackAlt,
            alt: "Build"
          }), /* @__PURE__ */ jsx("span", {
            children: /* @__PURE__ */ jsxs(_components.p, {
              children: [/* @__PURE__ */ jsx("strong", {
                children: "Build configuration"
              }), "\nHow to customize webpack and Babel"]
            })
          })]
        }), /* @__PURE__ */ jsxs("a", {
          className: "link-item",
          href: "https://storybook.js.org/docs/react/configure/styling-and-css",
          target: "_blank",
          children: [/* @__PURE__ */ jsx("img", {
            src: Colors,
            alt: "colors"
          }), /* @__PURE__ */ jsx("span", {
            children: /* @__PURE__ */ jsxs(_components.p, {
              children: [/* @__PURE__ */ jsx("strong", {
                children: "Styling"
              }), "\nHow to load and configure CSS libraries"]
            })
          })]
        }), /* @__PURE__ */ jsxs("a", {
          className: "link-item",
          href: "https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",
          target: "_blank",
          children: [/* @__PURE__ */ jsx("img", {
            src: Flow,
            alt: "flow"
          }), /* @__PURE__ */ jsx("span", {
            children: /* @__PURE__ */ jsxs(_components.p, {
              children: [/* @__PURE__ */ jsx("strong", {
                children: "Data"
              }), "\nProviders and mocking for data libraries"]
            })
          })]
        })]
      }), "\n", /* @__PURE__ */ jsx("div", {
        className: "subheading",
        children: "Learn"
      }), "\n", /* @__PURE__ */ jsxs("div", {
        className: "link-list",
        children: [/* @__PURE__ */ jsxs("a", {
          className: "link-item",
          href: "https://storybook.js.org/docs",
          target: "_blank",
          children: [/* @__PURE__ */ jsx("img", {
            src: Repo,
            alt: "repo"
          }), /* @__PURE__ */ jsx("span", {
            children: /* @__PURE__ */ jsxs(_components.p, {
              children: [/* @__PURE__ */ jsx("strong", {
                children: "Storybook documentation"
              }), "\nConfigure, customize, and extend"]
            })
          })]
        }), /* @__PURE__ */ jsxs("a", {
          className: "link-item",
          href: "https://storybook.js.org/tutorials/",
          target: "_blank",
          children: [/* @__PURE__ */ jsx("img", {
            src: Direction,
            alt: "direction"
          }), /* @__PURE__ */ jsx("span", {
            children: /* @__PURE__ */ jsxs(_components.p, {
              children: [/* @__PURE__ */ jsx("strong", {
                children: "In-depth guides"
              }), "\nBest practices from leading teams"]
            })
          })]
        }), /* @__PURE__ */ jsxs("a", {
          className: "link-item",
          href: "https://github.com/storybookjs/storybook",
          target: "_blank",
          children: [/* @__PURE__ */ jsx("img", {
            src: Code,
            alt: "code"
          }), /* @__PURE__ */ jsx("span", {
            children: /* @__PURE__ */ jsxs(_components.p, {
              children: [/* @__PURE__ */ jsx("strong", {
                children: "GitHub project"
              }), "\nView the source and add issues"]
            })
          })]
        }), /* @__PURE__ */ jsxs("a", {
          className: "link-item",
          href: "https://discord.gg/storybook",
          target: "_blank",
          children: [/* @__PURE__ */ jsx("img", {
            src: Comments,
            alt: "comments"
          }), /* @__PURE__ */ jsx("span", {
            children: /* @__PURE__ */ jsxs(_components.p, {
              children: [/* @__PURE__ */ jsx("strong", {
                children: "Discord chat"
              }), "\nChat with maintainers and the community"]
            })
          })]
        })]
      }), "\n", /* @__PURE__ */ jsx("div", {
        className: "tip-wrapper",
        children: /* @__PURE__ */ jsxs(_components.p, {
          children: [/* @__PURE__ */ jsx("span", {
            className: "tip",
            children: "Tip"
          }), "Edit the Markdown in ", /* @__PURE__ */ jsx("code", {
            children: "stories/Introduction.stories.mdx"
          })]
        })
      })]
    });
  }
}
const __page = () => {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
const componentMeta = {
  title: "Example/Introduction",
  tags: ["stories-mdx"],
  includeStories: ["__page"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = {
  ...componentMeta.parameters.docs || {},
  page: MDXContent
};
const __namedExportsOrder = ["__page"];
export {
  __namedExportsOrder,
  __page,
  componentMeta as default
};
//# sourceMappingURL=Introduction.stories.575f7184.js.map
