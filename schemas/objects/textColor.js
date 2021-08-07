import React from "react";
import { FaBrush } from "react-icons/fa";

const LinkRender = ({ children, colorCode }) => {
    // console.log({ colorCode });
    return <span style={{ color: colorCode ? colorCode?.hex : null }}>{children}</span>
};

export default {
    title: "Chọn màu",
    name: "textColor",
    type: "object",
    fields: [
        {
            title: "Mã màu",
            name: "colorCode",
            type: "color",
            validation: Rule => Rule.required().error('Cần phải chọn màu trước khi publish')
        }
    ],
    blockEditor: {
        icon: FaBrush,
        render: LinkRender,
    },
};
