import client from 'part:@sanity/base/client'

// Note: this assumes that every document that has a slug field
// have it on the `slug` field at the root
export async function getRefSlug(doc) {
    const { page } = doc

    // const id = document._id.replace(/^drafts\./, '')
    const params = {
        // draft: `drafts.${id}`,
        id: page._ref,
        // slug
    }

    const query = `*[_id == $id][0]{      
        pageTitle
      }`

    return await client.fetch(query, params)
}