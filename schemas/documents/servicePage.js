export default {
    name: "servicePage",
    title: "Dịch vụ Tổng",
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
            to: [{ type: "service" }],
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
  