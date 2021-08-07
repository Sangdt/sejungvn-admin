export default {
    type: "object",
    name: "arcticleBlogNews",
    title: "Blog/Article/NewArticle",
    fields: [
        {
            title: 'Kiểu Schema',
            name: 'schemaType',
            type: 'string',
            options: {
                list: [
                    { title: 'Article', value: 'article' },
                    { title: 'Blog', value: 'blog' },
                    { title: 'Tin Tức', value: 'newsArticle' }
                ], // <-- predefined values
            },
            validation: Rule => Rule.required()
        },
        {
            title: 'Lấy thông tin từ trong admin',
            name: 'linkTo',
            type: 'reference',
            to: [
                { type: 'blog' },
                { type: 'product' }
            ]
        },
        {
            title: 'Tiêu đề',
            description: "Nếu để trống sẽ lấy tiêu đề của bài blog hoặc tên sản phẩm",
            name: 'title',
            type: 'string',
        },
        {
            title: 'Mô tả ngắn',
            name: 'description',
            description: "Nếu để trống sẽ lấy mô tả ngắn của bài blog hoặc tên sản phẩm",
            type: 'string',
        },
        {
            title: 'Tên tác giả',
            name: 'authorName',
            type: 'string',
        },
        {
            title: 'Người Đăng',
            name: 'publisherName',
            type: 'string',
        },
        {
            title: 'Logo của Người Đăng',
            name: 'publisherLogo',
            type: 'image',
        },

    ],
}