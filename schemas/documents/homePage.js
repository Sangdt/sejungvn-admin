export default {
    name: "homePage",
    title: "Trang chủ",
    type: "document",
    __experimental_actions: [/*'create',*/'update', /*'delete',*/ 'publish'], 
  
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
        name: "shortDescription",
        title: "Mô tả",
        type: "simpleBlockContent",
      },
      {
        name: "homeBanner",
        title: "Hình Banner",
        type: 'array',
        of: [{type: 'figure'}]
      },
      {
        name: "introduction",
        title: "Các bài viết giới thiệu",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "blog" }],
          },
        ],
      },
      {
        name: "productList",
        title: "Danh sách sản phẩm",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "product" }],
          },
        ],
      },
      {
        name: "categoryList",
        title: "Danh mục sản phẩm",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "childCategory" }],
          },
        ],
      },
      {
        name: "testimonial",
        title: "Review của khách hàng",
        type: "array",
        of: [
          {
            type: "testimonialObj",
          },
        ],
      },
      {
        name: "relatedBlog",
        title: "Blog liên quan",
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
        media: "headerImage",
      },
    },
  };