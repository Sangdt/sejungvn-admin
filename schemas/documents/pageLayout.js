export default {
  name: "pageLayout",
  title: "Content Layout",
  type: "document",
  __experimental_actions: [/*'create',*/'update', /*'delete',*/ 'publish'],

  fields: [
    {
      name: "pageHeader",
      type: "pageHeader",
      title: "Header của trang",
    },
    {
      name: "footer",
      type: "footer",
      title: "Footer của trang",
    }
  ],
};