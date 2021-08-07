import { MdLocalDrink } from "react-icons/md";
import MoneyInput from "../../parts/customInput/MoneyInput";

export default {
  name: "product",
  title: "Product",
  type: "document",
  icon: MdLocalDrink,
  fields: [
    {
      name: 'seoTags',
      title: 'Thông tin về SEO',
      type: 'seoTags',
    },
    {
      name: "productName",
      title: "Tên sản phẩm",
      type: "string",
    },
    {
      name: "price",
      title: "Giá sản phẩm",
      type: "number",
      inputComponent: MoneyInput

    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "productName",
        maxLength: 96,
      },
    },
    {
      title: 'Mô tả ngắn',
      name: 'shortDescription',
      type: 'simpleBlockContent',
      // rows: 5
    },
    {
      title: "Main image",
      name: "headerImage",
      type: "figure",
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Thư viện hình ảnh của sản phẩm',
      name: 'productGallery',
      type: 'array',
      of: [{ type: 'figure' }],
      options: {
        layout: 'tags'
      }
    },
    {
      title: 'Hiện Table Of Content',
      name: 'useToc',
      type: 'boolean',
      initialValue: true
    },
    {
      title: 'Thông tin liên hệ',
      name: 'contactDetail',
      type: 'array',
      of: [{ type: 'simpleBlockContentWrapper' }],
      // options: {
      //   layout: 'tags'
      // }
    },
    {
      title: "Đặc tính sản phẩm",
      name: "productVariants",
      type: "array",
      of: [
        {
          type: "productVariant",
        },
      ],
    },
    {
      name: "productInfoDetail",
      title: "Mô chi tiết sản phẩm",
      type: "blockContent",
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },

  ],

  preview: {
    select: {
      title: "productName",
      media: "headerImage",
    },
  },
};
