import { MdLink } from "react-icons/md";
import { getRefSlug } from "../lib/getRefSlug";

export default {
  name: "route",
  type: "document",
  title: "Ghi đè đường dẫn của các trang",
  icon: MdLink,
  fields: [
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      // description:"Ghi đè đường dẫn của bài blog cũ",
      options: {
        source:async  (doc, options) =>  (await getRefSlug(doc)).title
        // slugify: myAsyncSlugifier
      }
    },
    {
      name: "page",
      type: "reference",
      description: "Select the page that this route should point to",
      to: [
        { type: 'homePage' },
        { type: 'blog' },
        { type: 'product' },
        { type: 'category' },
        { type: 'childCategory' },
        { type: 'route' },
        { type: 'service' },
        { type: 'servicePage' },
        { type: 'blogPage' },

      ],
    },
    // {
    //   name: "seoIndexProp",
    //   type: "seoIndexProp",
    //   title: "Seo Index",
    //   options: {
    //     collapsible: true
    //   },
    // },
  ],
  preview: {
    select: {
      slug: "slug.current",
      pageTitle: "page.pageTitle",
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === "/" ? "/" : `/${slug}`,
        subtitle: `Page: ${pageTitle}`,
      };
    },
  },
};
