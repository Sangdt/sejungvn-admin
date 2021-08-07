export default {
    name: "childItems",
    title: "Child items",
    type: "object",
    fields: [
        {
            name: 'fieldInfo',
            type: "menuInfoLink"
        }
    ],
    preview: {
        select: {
            title: "fieldInfo.itemName",
            media: "fieldInfo.headerImage",
        },
    },
};
