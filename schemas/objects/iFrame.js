import React from 'react'
// import getYouTubeId from 'get-youtube-id'
import Iframe from 'react-iframe'
import { FaMap } from 'react-icons/fa'
import getIframeAttr from '../lib/getIframeAttr'

const Preview = ({ value }) => {
    // const { url } = value
    // const id = getYouTubeId(url)
    const ifraneAttr = getIframeAttr(value);
    // console.log("ifraneAttr",ifraneAttr)
    return (ifraneAttr ? <Iframe {...ifraneAttr} /> : <></>)
}

export default {
    name: 'gmap',
    type: 'object',
    title: 'Iframe Embed',
    icon: FaMap,
    fields: [
        {
            name: 'url',
            type: 'string',
            title: 'Iframe URL',
            description:"Có thể là link nhúng iframe cuar youtube hoặc gg map"
        }
    ],
    preview: {
        select: {
            url: 'url'
        },
        component: Preview
    }
}