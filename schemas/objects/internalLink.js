import React from "react";

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>;

export default {
  title: "Link tới một nội dung bên trong admin",
  name: "internalLink",
  type: "reference",
  description: "Chọn nội dung mà bạn muốn link tới",
  to: [{ type: 'homePage' },
  { type: 'blog' },
  { type: 'product' },
  { type: 'category' },
  { type: 'childCategory' },
  { type: 'route' },
  { type: 'service' },
  { type: 'servicePage' },
],
  blockEditor: {
    icon: () => "🔗",
    render: InternalLinkRender,
  },
};
