export default {
  name: "category",
  title: "Danh mục lớn",
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
      title: "Tên danh mục",
      type: "string",
    },
    {
      name: "pageDescription",
      title: "Mô tả",
      type: "blockContent",
    },
    {
      name: "categoryList",
      title: "Child categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "childCategory" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "pageTitle",
      media: "headerImage",
    },
  },
};
