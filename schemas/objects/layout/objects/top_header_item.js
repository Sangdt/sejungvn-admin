export default {
    name: "top_header_item",
    title: "Header trang",
    type: "object",
    options: {
        collapsible: true,
        collapsed: true
      },
    fields: [
        {
            title: "Tiêu đề",
            name: "itemName",
            type: "string",
        },
        {
            title: "Link to",
            name: "linkTo",
            type: "reference",
            to: [
                { type: 'homePage' },
                { type: 'blog' },
                { type: 'product' },
                { type: 'category' },
                { type: 'childCategory' },
                { type: 'route' },
                { type: 'service' },
                { type: 'servicePage' },
                { type: 'blogPage' },

            ]

        },
        {
            title: "Số điện thoại",
            name: "telephone_numner",
            type: "number"
        }
    ],

};
