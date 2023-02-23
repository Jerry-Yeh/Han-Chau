import { _ as __vitePreload } from "./iframe.f4840b30.js";
import "../sb-preview/runtime.mjs";
((x) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(x, { get: (a, b) => (typeof require < "u" ? require : a)[b] }) : x)(function(x) {
  if (typeof require < "u")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await __vitePreload(() => import("./DocsRenderer-QMFTTPNP.832b1216.js").then((n) => n.D), true ? ["./DocsRenderer-QMFTTPNP.832b1216.js","./iframe.f4840b30.js","./index.2e2f892a.js","./_commonjsHelpers.712cc82f.js","./index.36b4d5ff.js","./index.e850844b.js","./_baseToString.8c140835.js","./_getPrototype.41fab05a.js","./extends.67b6fc1a.js"] : void 0, import.meta.url);
  return new DocsRenderer();
} } };
export {
  parameters
};
//# sourceMappingURL=preview.b6ddde51.js.map
