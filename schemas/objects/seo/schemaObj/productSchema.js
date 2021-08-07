export default {
    type: "object",
    name: "schemaProducts",
    title: "Schema Products",
    fields: [
        {
            title: 'Lấy thông tin sản phẩm từ thông tin trong admin',
            name: 'linkTo',
            type: 'reference',
            to: [
                { type: 'product' }]
        },
        {
            title: 'Vật Liệu của sản phẩm',
            name: 'material',
            type: 'string',
        },
        {
            title: 'Offer của sản phẩm này',
            name: 'offers',
            type: 'array',
            of: [
                { type: 'offer' }]
        }
    ],
}