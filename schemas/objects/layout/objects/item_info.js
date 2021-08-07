export default {
    name: "item_info",
    title: "Menu items",
    type: "object",
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        {
            title: "Tiêu đề",
            name: "name",
            type: "string",
        },
        {
            title: "Link to",
            name: "linkTo",
            type: "reference",
            to: [
                { type: 'homePage' },
                { type: 'blog' },
                { type: 'blogPage' },
                { type: 'product' },
                { type: 'category' },
                { type: 'childCategory' },
                { type: 'route' },
                { type: 'service' },
                { type: 'servicePage' },
            ]

        }, {
            title: "Externa Link",
            name: "externalLink",
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        }, {
            title: "Menu con",
            name: "childItems",
            type: "array",
            of: [{ type: 'menu_item' }]
            // type: 'child_item',
        }

    ],
    preview: {
        select: {
            title: "name",
        },
    },
};
