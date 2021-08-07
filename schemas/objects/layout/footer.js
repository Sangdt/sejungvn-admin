export default {
    name: "footer",
    title: "Footer trang",
    type: "object",
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        {
            title: "Social Link",
            name: "socialLink",
            type: "array",
            of: [{ type: 'socialLink' }]
        },
        {
            title: "Footer Info",
            name: "footerInfo",
            type: "array",
            of: [{ type: 'menuInfoLink' }]
        },
        {
            title: "Thông tin khác",
            name: "other_info",
            type: "array",
            of: [{type: "textSection"}]
        },
    ],

};
