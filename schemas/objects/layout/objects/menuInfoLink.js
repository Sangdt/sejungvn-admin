export default {
    name: "menuInfoLink",
    title: "Thông tin menu",
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
            title: "Main image",
            name: "headerImage",
            type: "figure",
            options: {
                hotspot: true,
            },
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
            title: "Externa Link",
            name: "externalLink",
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
    ],

};
