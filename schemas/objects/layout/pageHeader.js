export default {
  name: "pageHeader",
  title: "Header trang",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      title: "Logo",
      name: "pageLogo",
      type: "imageWithLink",
    },
    {
      title: "Content cho menu",
      name: "menuItems",
      type: "array",
      of: [{ type: 'item_info' }]
    },
    {
      title: "Content cho thành phần đầu tiên của trang",
      name: "topPageHeader",
      type: "top_header_item",
    },
  ],

};
