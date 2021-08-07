export default {
    type: "object",
    name: "seoIndexProp",
    title: "Sitemap/No index/ No Follow",
    fields: [{
        name: "includeInSitemap",
        type: "boolean",
        title: "Thêm trang vào sitemap ?",
    },
    {
        name: "noIndex",
        type: "boolean",
        title: "No Index ?",
    },
    {
        name: "noFollow",
        type: "boolean",
        title: "No Follow ?",
    },
    {
        name: "disallowRobots",
        type: "boolean",
        title: "Disallow trong robots.txt",
        description: "Dấu trang khỏi công cụ tìm kiếm",
    }
    ]
}