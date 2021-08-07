import S from "@sanity/desk-tool/structure-builder";
import { FaHome, FaExpandArrowsAlt, FaLandmark } from "react-icons/fa";
import {
  MdWeb, MdSettings,
  // MdWhatshot,
  // MdLooks
  MdHome,
  MdList,

  MdBook,
  MdToll
}
  from "react-icons/md";
// import ads from "./ads";
// import categories from "./categories";
// import person from "./person";

// import siteSettings from "./siteSettings";

// import TotebagPreview from "../components/previews/banners/swag/TotebagPreview";
// import ShirtPreview from "../components/previews/banners/swag/ShirtPreview";
import ProductPagePreview from "../components/previews/product/ProductPagePreview";
import ProductsOverviewPreview from "../components/previews/product/ProductsOverviewPreview";
// Hide document types that we already have a structure definition for
// const hiddenDocTypes = (listItem) =>
//   ![
//     // "category",
//     // "person",
//     // "sampleProject",
//     // "vendor",
//     "siteSettings",
//     // "ad",
//     "page",
//     "product",
//     "route",
//     "siteConfig",
//   ].includes(listItem.getId());
//
export default () =>
  S.list()
    .title("Barber house")
    .items([
      S.listItem()
        .id("Layout")
        .title("Content cho Layout")
        .icon(FaLandmark)
        .child(
          S.document()
            .id("layoutContent")
            .title("Content cho Layout")
            .schemaType("pageLayout")
            .documentId("ed28998d-2935-4e2b-8876-f2fb39c7b6b8")
        ),
      S.listItem()
        .id("homePage")
        .title("Content trang chủ")
        .icon(FaHome)
        .child(
          // S.documentTypeListItem("homePage").title("Content Trang chủ").icon(MdList),

          S.document()
            .id("homePages")
            .title("Content Trang chủ")
            .schemaType("homePage")
            .documentId("c559d97b-be3d-4d0d-be50-605438843e1a")
        ),
      S.documentTypeListItem("product").title("Sản phẩm"),
      S.listItem()
        .title("Dịch vụ").id("services")
        .icon(MdBook)
        .child(
          S.list()
            .id("Blogpagelist")
            .title("Các dịch vụ")
            .items([
              S.listItem()
                .id("servicePage")
                .title("Trang tổng hợp")
                .icon(MdHome)
                .child(
                  S.document()
                    .id("servicePage")
                    .title("Trang tổng hợp")
                    .schemaType("servicePage")
                    .documentId("1b259003-4580-428d-98d6-1b4520777326")),
              S.documentTypeListItem("service").title("Content dịch vụ").icon(MdList),
              // S.documentTypeListItem("servicePage").title("Các bài viết2").icon(MdList),
              // S.documentTypeListItem("pageLayout").title("Các bài viết").icon(MdList),
            ])
        ),
      S.listItem()
        .title("Blog")
        .icon(MdBook)
        .child(
          S.list()
            .id("Blogpagelist")
            .title("Blog")
            .items([
              S.listItem()
                .id("blogPage")
                .title("Trang tổng hợp")
                .icon(MdHome)
                .child(
                  S.document()
                    .id("blogPage")
                    .title("Trang tổng hợp")
                    .schemaType("blogPage")
                    .documentId("e0a1450f-ed03-4fe7-b3ff-286667733925")),
              S.documentTypeListItem("blog").title("Các bài viết").icon(MdList),
              // S.documentTypeListItem("servicePage").title("Các bài viết2").icon(MdList),
              // S.documentTypeListItem("pageLayout").title("Các bài viết").icon(MdList),
            ])
        ),
      S.listItem()
        .id("categorypages")
        .title("Danh mục sản phẩm")
        .icon(MdWeb)
        .child(
          S.list()
            .id("pagelist")
            .title("Các trang danh mục")
            .items([
              S.listItem()
                .id("categoryPage")
                .title("Danh mục Tổng")
                .icon(MdHome)
                .child(
                  S.document()
                    .id("category")
                    .title("Danh mục Tổng")
                    .schemaType("category")
                    .documentId("fc5ca909-2825-4071-b138-ee8365b35ae2")
                ),
              S.documentTypeListItem("childCategory").title("Danh mục con").icon(MdList)
              // ...[S.document().title("Danh mục Tổng").schemaType("category").documentId("fc5ca909-2825-4071-b138-ee8365b35ae2")],
            ])
        ),
      S.listItem().id("Website")
        .title("Cài đặt chung")
        .icon(MdToll)
        .child(
          S.list()
            .title("Cài đặt chung")
            .id("Website")
            .items([
              S.documentTypeListItem("route").title("Ghi đè/Tạo đường dẫn mới cho content"),
              S.documentTypeListItem("redirectsInfo").title("Chuyển hướng trang").icon(FaExpandArrowsAlt),
              S.listItem()
                .id("SiteConfiguration")
                .title("Cài đặt chung")
                .icon(MdSettings)
                .child(
                  S.document()
                    .id("Siteconfiguration")
                    .title("Cài đặt chung")
                    .schemaType("siteConfig")
                    .documentId("siteConfig")
                ),

            ])
        ),
      S.documentTypeListItem("dynamicForm").title("Form").icon(MdList),
      S.documentTypeListItem("formSubmission").title("Form submit").icon(MdList),
    ]);

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType === "product") {
    return S.document().views([
      S.view.form(),
      S.view.component(ProductsOverviewPreview).title("Products Overview"),
      S.view.component(ProductPagePreview).title("Product Page"),
    ]);
  }
  // if (schemaType === "swag") {
  //   return S.document().views([
  //     S.view.form(),
  //     S.view.component(TotebagPreview).title("Totebag"),
  //     S.view.component(ShirtPreview).title("Shirt"),
  //   ]);
  // }
  return S.document().views([S.view.form()]);
};
