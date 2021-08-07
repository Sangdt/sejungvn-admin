import { MdPeople } from "react-icons/md";
export default {
  name: "socialLink",
  type: "object",
  title: "Social",
  icon: MdPeople,
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: "channel",
      type: "string",
      options: {
        list: ["facebook", "instagram", "zalo", "linkedin", "youtube"],
      },
    },
    {
      name: "linkToSocial",
      type: "url",
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },

  ],
};
