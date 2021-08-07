export default {
    name: "menu_item",
    title: "Child items",
    type: "object",
    fields: [
        {
            name: 'fieldInfo',
            type: "menuInfoLink"
        },
        {
            title: "Menu con",
            name: "childItem",
            type: "array",
            of: [
                { type: 'childItems' },
                // { type: 'product' },
                // { type: 'category' },
                // { type: 'childCategory' },
                // { type: 'route' },
            ]

        },
    ],
    preview: {
        select: {
            title: "fieldInfo.itemName",
            media: "fieldInfo.headerImage",
        },
    },
};
