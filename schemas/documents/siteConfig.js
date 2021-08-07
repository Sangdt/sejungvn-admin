export default {
  name: "siteConfig",
  type: "document",
  title: "Site configuration",
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  // fieldsets: [{ name: "footer", title: "Footer" }],
  fields: [
    {
      name: "globalSeoConfig",
      type: "seoTags",
      options: {
        collapsible: false
      }
    }
  ],
};
