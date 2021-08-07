export default {
    name: "blogPage",
    title: "Blog Tổng",
    type: "document",
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
    fields: [
      {
        name: 'seoTags',
        title: 'Thông tin về SEO',
        type: 'seoTags',
      },
      {
        name: "pageTitle",
        title: "Tiêu đề trang",
        type: "string",
      },
      {
        name: "pageDescription",
        title: "Mô tả",
        type: "blockContent",
      },
      {
        name: "blogList",
        title: "Child blog",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "blog" }],
          },
        ],
      },
    ],
    preview: {
      select: {
        title: "pageTitle",
        // media: "headerImage",
      },
    },
  };
  