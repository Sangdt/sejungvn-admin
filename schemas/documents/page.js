export default {
  name: "page",
  type: "document",
  title: "Page",
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
    },
  ],
  fields: [

    {
      name: "Seo",
      type: "seoTags",
      title: "Seo",
      // description: "Image for sharing previews on Facebook, Twitter etc.",
      fieldset: "metadata",
      // options: { hotspot: true },
    },
    {
      title: "Hình ảnh về danh mục này",
      name: "headerImage",
      type: "figure",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      of: [{ type: "hero" }, { type: "imageSection" }, { type: "textSection" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      // media: "openGraphImage",
    },
  },
};
