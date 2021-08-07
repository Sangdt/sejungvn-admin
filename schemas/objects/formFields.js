import ConditionalField from 'sanity-plugin-conditional-field'

export default {
    name: "formFields",
    title: "Các trường của Form",
    type: "object",
    fields: [
        {
            title: "Tên trường",
            name: "label",
            type: "string",
        },
        {
            title: "Trường này là bắt buộc ?",
            name: "requiredFields",
            type: "boolean",
            initialValue: false
        },
        {
            title: "Số lượng chữ nhiều nhất có thể",
            name: "maxLength",
            type: "number",
        },
        {
            title: "Số lượng chữ ít nhất phải có",
            name: "minLength",
            type: "number",
        },
        {
            name: "dataType",
            type: "string",
            title: "Kiểu dữ liệu",
            description: "Nếu để trống sẽ là chữ",
            options: {
                list: [
                    { title: 'Chữ', value: 'text' },
                    { title: 'Chữ nhiều dòng', value: 'textarea' },
                    { title: 'Số', value: 'number' },
                    { title: 'Email', value: 'email' },
                    { title: 'Số điện thoại', value: 'phoneNumber' },
                    { title: 'Link tới sản phẩm', value: 'linkTo' },
                ],
            }
        },
        {
            name: "Linkto",
            title: "Link tới sản phẩm/ danh mục bên trong admin",
            description: "Chỉ hoạt động nếu Kiểu dữ liệu chọn ở trên là \"Link tới sản phẩm\" ",
            type: "reference",
            to: [
                { type: 'product' },
                { type: 'category' },
                { type: 'childCategory' }
            ],
            // inputComponent: ConditionalField,
            // options: {
            //     condition: (document) => {
            //         console.log("doc", document);
            //         return true
            //     }
            // }
        }
    ],
    preview: {
        select: {
            title: "label",
            // title: "alt",
        },
    },
};
