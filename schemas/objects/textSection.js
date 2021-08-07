export default {
  type: "object",
  name: "textSection",
  title: "Text",
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: "infoTitle",
      type: "string",
      title: "Tiêu đề",
    },
    {
      title: "Link to",
      name: "linkTo",
      type: "reference",
      to: [
        { type: 'blog' },
        { type: 'product' },
        { type: 'category' },
        { type: 'childCategory' },
        { type: 'route' },
        { type: 'service' },
        { type: 'servicePage' },
        { type: 'blogPage' },
        { type: 'homePage' },
      ]
    },
    {
      name: "infoContent",
      type: "portableText",
      title: "Content",
    }

  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: "Text section",
      };
    },
  },
};
