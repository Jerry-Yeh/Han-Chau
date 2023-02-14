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
  "./src/stories/ActionStack.stories.tsx": async () => __vitePreload(() => import("./ActionStack.stories.639a33fe.js"), true ? ["./ActionStack.stories.639a33fe.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./jsx-runtime.db436af5.js","./Button.2c936216.js","./index.0579b088.js"] : void 0, import.meta.url),
  "./src/stories/Button.stories.tsx": async () => __vitePreload(() => import("./Button.stories.8b95d1b5.js"), true ? ["./Button.stories.8b95d1b5.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./Button.2c936216.js","./index.0579b088.js","./jsx-runtime.db436af5.js"] : void 0, import.meta.url),
  "./src/stories/DatePIcker.stories.tsx": async () => __vitePreload(() => import("./DatePIcker.stories.a73542e7.js"), true ? ["./DatePIcker.stories.a73542e7.js","./jsx-runtime.db436af5.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./AntdDecorator.5606f600.js","./extends.8d0a382a.js","./index.222549b6.js","./index.0579b088.js","./index.36b4d5ff.js"] : void 0, import.meta.url),
  "./src/stories/Header.stories.tsx": async () => __vitePreload(() => import("./Header.stories.1586aad8.js"), true ? ["./Header.stories.1586aad8.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./jsx-runtime.db436af5.js","./AntdDecorator.5606f600.js","./extends.8d0a382a.js"] : void 0, import.meta.url),
  "./src/stories/Input.stories.tsx": async () => __vitePreload(() => import("./Input.stories.a7a54935.js"), true ? ["./Input.stories.a7a54935.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./index.0579b088.js","./jsx-runtime.db436af5.js","./AntdDecorator.5606f600.js","./extends.8d0a382a.js","./index.222549b6.js","./index.36b4d5ff.js"] : void 0, import.meta.url),
  "./src/stories/Progres.stories.tsx": async () => __vitePreload(() => import("./Progres.stories.fb2f4bdc.js"), true ? ["./Progres.stories.fb2f4bdc.js","./jsx-runtime.db436af5.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js"] : void 0, import.meta.url),
  "./src/stories/Radio.stories.tsx": async () => __vitePreload(() => import("./Radio.stories.88ce141d.js"), true ? ["./Radio.stories.88ce141d.js","./index.5f90ca5b.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./jsx-runtime.db436af5.js"] : void 0, import.meta.url),
  "./src/stories/RadioGroup.stories.tsx": async () => __vitePreload(() => import("./RadioGroup.stories.ecbcd5b7.js"), true ? ["./RadioGroup.stories.ecbcd5b7.js","./index.5f90ca5b.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./jsx-runtime.db436af5.js"] : void 0, import.meta.url)
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
    __vitePreload(() => import("./config.ad3e6ab5.js"), true ? ["./config.ad3e6ab5.js","./index.e850844b.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./index.36b4d5ff.js","./_getPrototype.41fab05a.js","./_baseToString.8c140835.js","./index.67736049.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.fd673787.js"), true ? ["./preview.fd673787.js","./index.e850844b.js","./_baseToString.8c140835.js","./_commonjsHelpers.712cc82f.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.790e8539.js"), true ? [] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.7ab221f7.js"), true ? ["./preview.7ab221f7.js","./_commonjsHelpers.712cc82f.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.33f12105.js"), true ? ["./preview.33f12105.js","./index.e850844b.js","./index.67736049.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.74e62a71.js"), true ? ["./preview.74e62a71.js","./index.e850844b.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.eb963bd7.js"), true ? ["./preview.eb963bd7.js","./index.e850844b.js","./index.67736049.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.7a653bce.js"), true ? ["./preview.7a653bce.js","./index.e850844b.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.561a1fb7.js"), true ? ["./preview.561a1fb7.js","./index.e850844b.js","./_commonjsHelpers.712cc82f.js"] : void 0, import.meta.url),
    __vitePreload(() => import("./preview.0ead2432.js"), true ? ["./preview.0ead2432.js","./preview.9dcebb2f.css"] : void 0, import.meta.url)
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
//# sourceMappingURL=iframe.9ef77fd9.js.map
