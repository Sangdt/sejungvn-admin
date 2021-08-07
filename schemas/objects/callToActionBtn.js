// import React from "react";
import { FaBars } from "react-icons/fa";

// const LinkRender = ({ children, posistion }) => {
//     // console.log({ colorCode });
//     return <div style={{ width: "100%", textAlign: posistion ?? "left" }}>
//         <span>
//             {children}
//         </span>

//     </div>

// };

export default {
    title: "CTA Button",
    name: "callToActionBtn",
    type: "object",
    options: {
        editModal: "fullscreen"
    },
    // description:"",
    fields: [
        {
            title: "Tiêu đề",
            name: "title",
            type: "string",
            validation: Rule => Rule.required().error('Tiêu đề nút không được để trống'),
        },
        {
            title: 'Các hành động khi nút này được bấm',
            description: "Chọn một trong ba hành động",
            name: 'btnAction',
            type: 'array',
            of: [
                {
                    title: "Show Bảng thông tin",
                    type: 'table'
                },
                {
                    title: "Link To",
                    description: "Bấm vào nút này sẽ dẫn tới bài viết/blog/sản phẩm hoặc trang nào đó",
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
                {
                    title: "Form",
                    name: "formLink",
                    type: 'reference',
                    to: [{ type: 'dynamicForm' }]
                }
            ],
            validation: Rule => [
                Rule.required().min(1).error('Phải định nghĩa ít nhất một công việc của nút này!!!'),
                Rule.max(1).error('Chỉ được thêm một trong ba hành động'),
            ],
            options: {
                editModal: "fullscreen"
            }
        },
        // {
        //     title: "Bảng thông tin",
        //     name: "table",
        //     type: "table",
        // },

    ],
    blockEditor: {
        icon: FaBars,
        // render: LinkRender,
    },
};
