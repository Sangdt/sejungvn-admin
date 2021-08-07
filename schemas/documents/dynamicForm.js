export default {
    name: "dynamicForm",
    title: "Tạo form",
    type: "document",
    // __experimental_actions: ['create','update', /*'delete',*/ 'publish'], 
  
    fields: [
      {
        name: "formTitle",
        title: "Tiêu đề Form",
        type: "string",
      },
      {
        name: "shortDescription",
        title: "Mô tả ngắn",
        type: "simpleBlockContent",
      },
      {
        name: "formFields",
        title: "Các trường của form",
        type: "array",
        of: [
          {
            type: "formFields",
          },
        ],
      },
    ],
    preview: {
      select: {
        title: "formTitle",
      },
    },
  };