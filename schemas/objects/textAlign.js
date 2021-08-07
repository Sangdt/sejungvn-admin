import React from "react";
import { FaAdjust } from "react-icons/fa";

const LinkRender = ({ children, posistion }) => {
    // console.log({ colorCode });
    return <div style={{ width: "100%", textAlign: posistion ?? "left" }}>
        <span>
            {children}
        </span>

    </div>

};

export default {
    title: "Canh chỉnh vị trí chữ",
    name: "textAlign",
    type: "object",
    description:"Nên chọn cả câu chữ",
    fields: [
        {
            title: "Chọn vị trí",
            name: "posistion",
            type: "string",
            description:"Nếu để trống sẽ tự động canh chữ về bên trái",
            options: {
                list: [
                    { title: 'Ở giữa', value: 'center' },
                    { title: 'Ở bên phải', value: 'right' },
                    { title: 'Ở bên trái', value: 'left' },
                ], // <-- predefined values
            },
            // validation: Rule => Rule.required().error('Cần phải chọn vị trí trước khi publish')
        }
    ],
    blockEditor: {
        icon: FaAdjust,
        render: LinkRender,
    },
};
