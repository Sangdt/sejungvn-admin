export default {
  name: "figure",
  title: "Image",
  type: "image",
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      title: "Title",
      name: "Title",
      type: "string",
      description: "Nếu để trống sẽ tự động dùng Title được định nghĩa trước",

      options: {
        isHighlighted: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Nếu để trống sẽ tự động dùng alt được định nghĩa trước",
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
      // title: "alt",
    },
  },
};
