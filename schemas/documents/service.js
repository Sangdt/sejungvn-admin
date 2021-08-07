export default {
    name: "service",
    type: "document",
    title: "Dịch vụ",
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
        title: "Hình ảnh đầu trang",
        name: "headerImage",
        type: "figure",
        options: {
          hotspot: true,
        },
      },
      {
        name: "pageTitle",
        type: "string",
        title: "Title",
      },
      {
        name: "seoLinks",
        type: "slug",
        options: {
          source: "pageTitle",
          maxLength: 96,
        },
        title: "Đường dẫn",
      },
      {
        name: "location",
        type: "table",
        title: "Địa điểm thi công",
      },
      {
        name: "blogBody",
        type: "blockContent",
        title: "Content của bài viết",
        // of: [{ type: "blockContent" }],
      },
    ],
  
    preview: {
      select: {
        title: "pageTitle",
        media:"headerImage"
      },
    },
  };
  