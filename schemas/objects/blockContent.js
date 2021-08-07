// import React from "react";
// import MediaAssetSource from 'part:sanity-plugin-media/asset-source'


// const Preview = (props) => {
//   console.log("props", props)
//   console.log("props media", props.media())
//   // const { url } = value
//   // const id = getYouTubeId(url)
//   return (<img {...props} />)
// }
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }, { title: "Number", value: "number" }],
      // lists: [],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { "title": "Strong", "value": "strong" },
          { "title": "Emphasis", "value": "em" },
          { "title": "Code", "value": "code" },
          { "title": "Underline", "value": "underline" },
          { "title": "Strike", "value": "strike-through" }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          { type: "link" },
          { type: "textAlign" },
          { type: "textColor" }
        ],
      },
    },
    // { type: 'youtube' },
    { type: 'gmap' },
    // { type: "table" },
    { type: 'callToActionBtn' },
    // { type: 'color' },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: 'customAlt',
          type: 'string',
          title: 'Alt',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          name: 'customTitle',
          type: 'string',
          title: 'Title',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },

      ],
    },
  ],
};
