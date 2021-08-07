import T from '@sanity/base/initial-value-template-builder'

export default T.template({
    // override product template
    id: 'product',
    title: 'Product',
    schemaType: 'product',
    value: {
        seoTags: {
            _type: 'seoTags',
            seoIndexProp: {
                _type: 'seoIndexProp',
                includeInSitemap: true,
                noIndex: false,
                noFollow: false,
                disallowRobots: false,
            }
        }
    }
})