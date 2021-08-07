// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import category from "./documents/category";
import product from "./documents/product";
// import vendor from "./documents/vendor";
import productVariant from "./documents/productVariant";
// import brand from "./documents/brand";
// import social from "./documents/social";
// import ad from "./documents/ad";
// import swag from "./documents/swag";
import page from "./documents/page";
import route from "./documents/route";
import siteConfig from "./documents/siteConfig";
// import person from "./documents/person";
// import popup from "./documents/popup";

// Object types
import blockContent from "./objects/blockContent";
import cta from "./objects/cta";
import figure from "./objects/figure";
import internalLink from "./objects/internalLink";
import link from "./objects/link";
import portableText from "./objects/portableText";
import simplePortableText from "./objects/simplePortableText";
import contactInfo from "./objects/contactInfo";

// Landing page sections
import hero from "./objects/hero";
import imageSection from "./objects/imageSection";
import textSection from "./objects/textSection";

import localeString from "./locale/String";
import localeText from "./locale/Text";
import localeBlockContent from "./locale/BlockContent";
import seoTags from "./objects/seo/seo-tags";
import openGraph from "./objects/seo/openGraph";
import jsonLDSchema from "./objects/seo/jsonLDSchema";
import arcticleBlogNews from "./objects/seo/schemaObj/arcticleBlogNews";
import productSchema from "./objects/seo/schemaObj/productSchema";
import childCategory from "./documents/childCategory";
import seoIndexProp from "./objects/seo/seoIndexProp";
import blog from "./documents/blog";
import parentBlog from "./documents/parentBlog";
// import youtube from "./objects/youtube";
import iFrame from "./objects/iFrame";
import textColor from "./objects/textColor";
import homePage from "./documents/homePage";
import testimonialObj from "./documents/testimonialObj";
import redirectsInfo from "./documents/redirectsInfo";
import pageHeader from "./objects/layout/pageHeader";
import item_info from "./objects/layout/objects/item_info";
import menu_item from "./objects/layout/objects/menu_item";
import child_item from "./objects/layout/objects/child_item";
import imageWithLink from "./objects/imageWithLink";
import top_header_item from "./objects/layout/objects/top_header_item";
import menuInfoLink from "./objects/layout/objects/menuInfoLink";
import pageLayout from "./documents/pageLayout";
import footer from "./objects/layout/footer";
import social from "./documents/social";
import simpleBlockContent, { simpleBlockContentWrapper } from "./objects/simpleBlockContent";
import offer from "./objects/seo/schemaObj/offer";
import service from "./documents/service";
import servicePage from "./documents/servicePage";
import dynamicForm from "./documents/dynamicForm";
import formFields from "./objects/formFields";
import formSubmission from "./documents/formSubmission";
import textAlign from "./objects/textAlign";
import callToActionBtn from "./objects/callToActionBtn";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    homePage,
    product,
    category,
    service,
    servicePage,
    childCategory,
    blog,
    parentBlog,
    pageLayout,
    dynamicForm,
    // popup,
    // vendor,
    // brand,
    // ad,
    // swag,
    page,
    route,

    siteConfig,
    // person,
    // When added to this list, object types can be used as
    social,
    menuInfoLink,
    formSubmission,
    formFields,
    footer,
    pageHeader,
    top_header_item,
    item_info,
    menu_item,
    child_item,
    imageWithLink,
    // youtube,
    textAlign,
    redirectsInfo,
    testimonialObj,
    iFrame,
    callToActionBtn,
    arcticleBlogNews,
    productSchema,
    jsonLDSchema,
    seoIndexProp,
    seoTags,
    openGraph,
    cta,
    offer,
    figure,
    internalLink,
    link,
    textColor,
    hero,
    imageSection,
    textSection,
    portableText,
    simplePortableText,
    contactInfo,
    blockContent,
    simpleBlockContentWrapper,
    localeText,
    localeBlockContent,
    simpleBlockContent,
    localeString,
    productVariant,
  ]),
});
