export default {
    name: "redirectsInfo",
    title: "Trang chủ",
    type: "document",
    fields: [
        {
            name: 'pageName',
            title: 'Tên trang',
            type: 'string',
        },
        {
            name: 'active',
            title: 'Active ?',
            type: 'boolean',
        },
        {
            name: 'permanent',
            title: 'Chuyển hướng vĩnh viễn hay tạm thời ?',
            type: 'boolean',
            initialValue:false
        },
        {
            name: 'statusCode',
            title: 'Status code',
            type: 'number',
        },
        {
            name: 'sourceLink',
            title: 'Trang cần chuyển hướng',
            type: 'reference',
            to: [{ type: 'homePage' },
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
            name: 'redirectTo',
            title: 'Trang được chuyển tới',
            type: 'reference',
            to: [{ type: 'homePage' },
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
            title: 'External link',
            name: 'external_link',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            })
        }
    ]
}