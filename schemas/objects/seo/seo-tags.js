import ConditionalField from 'sanity-plugin-conditional-field'

export default {
  type: "object",
  name: "seoTags",
  title: "Seo",
  options: {
    collapsible: true
  },
  fields: [
    {
      name: "seoIndexProp",
      type: "seoIndexProp",
      title: "Seo Index",
      options: {
        collapsible: true
      },
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "titleSuffix",
      type: "string",
      title: "Title Suffix",
      inputComponent: ConditionalField,
      options: {
        condition: ({ _type }) => _type === "siteConfig"
      }
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "favicon",
      type: "figure",
      title: "favicon",
      inputComponent: ConditionalField,
      options: {
        condition: ({ _type }) => _type === "siteConfig"
      }
    },
    {
      name: "openGraph",
      type: "openGraph",
      title: "Open Graph",
      options: {
        collapsible: true
      },
    },
    {
      name: "Twitter",
      type: "string",
      title: "Twitter card type",
      options: {
        list: [
          "summary_large_image",
          "summary"
        ], // <-- predefined values
        layout: 'dropdown' // <-- defaults to 'dropdown'
      }
    },
    {
      name: "customScripts",
      type: "text",
      title: "Custom Schema Scripts",
      rows: 4
    },
    {
      name: "schema",
      type: "jsonLDSchema",
      fieldsets: [
        { name: 'schemaInfo', title: 'Schema' }
      ],
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        // columns: 2 // Defines a grid for the fields and how many columns it should have
      }
    }
  ],

}