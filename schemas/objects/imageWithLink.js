export default {
    type: "object",
    name: "imageWithLink",
    title: "Image with Link",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Tên",
        },
        {
            name: "image",
            type: "figure",
            title: "Image",
        },
        {
            title: "Link To",
            // description: "Use this to link between pages on the website",
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

            ],
            // fieldset: "link",
        },
    ],
    preview: {
        select: {
            heading: "heading",
            subtitle: "label",
            media: "image",
        },
        prepare({ heading, media }) {
            return {
                title: `Image: ${heading}`,
                subtitle: "Image section",
                media,
            };
        },
    },
};
