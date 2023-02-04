import "../sb-preview/runtime.mjs";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep, importerUrl);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const createPostMessageChannel = __STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__.createChannel;
const createWebSocketChannel = __STORYBOOK_MODULE_CHANNEL_WEBSOCKET__.createChannel;
const addons = __STORYBOOK_MODULE_PREVIEW_API__.addons;
const channel = createPostMessageChannel({ page: "preview" });
addons.setChannel(channel);
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;
const { SERVER_CHANNEL_URL } = globalThis;
if (SERVER_CHANNEL_URL) {
  const serverChannel = createWebSocketChannel({ url: SERVER_CHANNEL_URL });
  addons.setServerChannel(serverChannel);
  window.__STORYBOOK_SERVER_CHANNEL__ = serverChannel;
}
const importers = {
  "./src/stories/Introduction.stories.mdx": async () => __vitePreload(() => import("./Introduction.stories.575f7184.js"), true ? ["./Introduction.stories.575f7184.js","./chunk-MA2MUXQN.efbcfd4c.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./index.36b4d5ff.js","./index.e850844b.js","./_getTag.d1b75f35.js","./index.1fb95844.js","./isNativeReflectConstruct.fd0a40b8.js","./chunk-R4NKYYJA.15989c7a.js","./jsx-runtime.db436af5.js","./index.53276623.js"] : void 0, import.meta.url),
  "./src/stories/Button.stories.tsx": async () => __vitePreload(() => import("./Button.stories.bf5747f5.js"), true ? ["./Button.stories.bf5747f5.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./index.0579b088.js","./jsx-runtime.db436af5.js"] : void 0, import.meta.url),
  "./src/stories/Header.stories.tsx": async () => __vitePreload(() => import("./Header.stories.9b43c6aa.js"), true ? ["./Header.stories.9b43c6aa.js","./Header.498a2bb5.js","./jsx-runtime.db436af5.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./Header.0f6bfecc.css"] : void 0, import.meta.url),
  "./src/stories/Input.stories.tsx": async () => __vitePreload(() => import("./Input.stories.3cd96988.js"), true ? ["./Input.stories.3cd96988.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./index.0579b088.js","./jsx-runtime.db436af5.js","./isNativeReflectConstruct.fd0a40b8.js","./index.36b4d5ff.js"] : void 0, import.meta.url),
  "./src/stories/Page.stories.tsx": async () => __vitePreload(() => import("./Page.stories.6c8ce263.js"), true ? ["./Page.stories.6c8ce263.js","./index.22509f61.js","./index.e850844b.js","./_commonjsHelpers.712cc82f.js","./index.67736049.js","./index.2e2f892a.js","./Header.498a2bb5.js","./jsx-runtime.db436af5.js","./Header.0f6bfecc.css","./Page.stories.fda1ac36.css"] : void 0, import.meta.url),
  "./src/stories/Radio.stories.tsx": async () => __vitePreload(() => import("./Radio.stories.7782c874.js"), true ? ["./Radio.stories.7782c874.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./jsx-runtime.db436af5.js"] : void 0, import.meta.url)
};
async function importFn(path) {
  return importers[path]();
}
importFn.__docgenInfo = { "description": "", "methods": [], "displayName": "importFn" };
const composeConfigs = __STORYBOOK_MODULE_PREVIEW_API__.composeConfigs;
const PreviewWeb = __STORYBOOK_MODULE_PREVIEW_API__.PreviewWeb;
const ClientApi = __STORYBOOK_MODULE_PREVIEW_API__.ClientApi;
const getProjectAnnotations = async () => {
  const configs = await Promise.all([
    __vitePreload(() => import("./config.45694860.js"), true ? ["./config.45694860.js","./index.e850844b.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./index.36b4d5ff.js","./index.1fb95844.js","./_getTag.d1b75f35.js","./index.67736049.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.ea334bcc.js"), true ? ["./preview.ea334bcc.js","./index.e850844b.js","./_getTag.d1b75f35.js","./_commonjsHelpers.712cc82f.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.2ceffd16.js"), true ? ["./preview.2ceffd16.js","./chunk-R4NKYYJA.15989c7a.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.7ab221f7.js"), true ? ["./preview.7ab221f7.js","./_commonjsHelpers.712cc82f.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.33f12105.js"), true ? ["./preview.33f12105.js","./index.e850844b.js","./index.67736049.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.74e62a71.js"), true ? ["./preview.74e62a71.js","./index.e850844b.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.eb963bd7.js"), true ? ["./preview.eb963bd7.js","./index.e850844b.js","./index.67736049.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.7a653bce.js"), true ? ["./preview.7a653bce.js","./index.e850844b.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.f01bd384.js"), true ? ["./preview.f01bd384.js","./index.22509f61.js","./index.e850844b.js","./_commonjsHelpers.712cc82f.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.0ead2432.js"), true ? ["./preview.0ead2432.js","./preview.83ca3ffe.css"] : void 0, import.meta.url)
  ]);
  return composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new PreviewWeb();
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new ClientApi({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn, getProjectAnnotations });
export {
  __vitePreload as _
};
//# sourceMappingURL=iframe.bff41132.js.map
