export default {
    name: "childCategory",
    title: "Danh mục",
    type: "document",
    fields: [
        {
            name: 'seoTags',
            title: 'Thông tin về SEO',
            type: 'seoTags',
        },
        {
            name: "categoryName",
            title: "Tên danh mục",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "categoryName",
                maxLength: 96,
            },
        },
        {
            name: "categoryDescription",
            title: "Mô tả",
            type: "blockContent",
        },
        {
            title: "Hình ảnh về danh mục này",
            name: "categoryGallery",
            type: "figure",
            options: {
                hotspot: true,
            },
        },
        {
            name: "productInCategory",
            title: "Sản phẩm trong danh mục",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "product" }],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: "categoryName",
            media: "categoryGallery",
        },
    },
};
