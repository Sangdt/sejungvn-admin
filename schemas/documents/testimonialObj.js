export default {
    name: "testimonialObj",
    type: "object",
    Title: "Review của khách hàng",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Tên khách hàng",
        },
        {
            name: "content",
            type: "blockContent",
            title: "Nội dung",
        },
        {
            name: "clientPicture",
            type: "figure",
            title: "hình ảnh khách hàng",
        },
    ]
}