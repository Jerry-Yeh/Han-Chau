import { R as React } from "./index.2e2f892a.js";
import "./_commonjsHelpers.712cc82f.js";
const MDXContext = React.createContext({});
function withMDXComponents(Component) {
  return boundMDXComponent;
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components);
    return React.createElement(Component, { ...props, allComponents });
  }
}
function useMDXComponents(components) {
  const contextComponents = React.useContext(MDXContext);
  return React.useMemo(() => {
    if (typeof components === "function") {
      return components(contextComponents);
    }
    return { ...contextComponents, ...components };
  }, [contextComponents, components]);
}
const emptyObject = {};
function MDXProvider({ components, children, disableParentContext }) {
  let allComponents = useMDXComponents(components);
  if (disableParentContext) {
    allComponents = components || emptyObject;
  }
  return React.createElement(
    MDXContext.Provider,
    { value: allComponents },
    children
  );
}
export {
  MDXContext,
  MDXProvider,
  useMDXComponents,
  withMDXComponents
};
//# sourceMappingURL=index.b294bf0c.js.map
