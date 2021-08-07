export default {
    type: "object",
    name: "openGraph",
    title: "Open Graph",
    fields: [{
        name: "title",
        type: "slug",
        title: "Title",
        description:"Nếu để trống sẽ tự động dùng title ở trên"

    },
    {
        name: "description",
        type: "string",
        title: "Description",
        description:"Nếu để trống sẽ tự động dùng description ở trên"
    },
    {
        title: 'Images',
        name: 'images',
        type: 'array',
        of: [{ type: 'figure' }],
        options: {
            layout: 'tags'
        }
    }],
}