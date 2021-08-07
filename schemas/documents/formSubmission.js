// import FormSubmitInput from "../../parts/customInput/FormSubmitInput";

export default {
  name: "formSubmission",
  title: "Thông tin người nhập Form",
  type: "document",
  __experimental_actions: [
    // 'create',
    'update',
    'delete',
    'publish',
  ],

  fields: [
    {
      name: "formRef",
      title: "Mẫu Form",
      type: "reference",
      to: [
        { type: 'dynamicForm' },
      ],
    },
    {
      name: "submissionIfno",
      title: "Thông tin",
      type: "table",
      // inputComponent: FormSubmitInput
    },
  ],
  // preview: {
  //   // select: {
  //   //   title: "formTitle",
  //   // },
  // },
};