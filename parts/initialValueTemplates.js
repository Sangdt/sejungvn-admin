import T from '@sanity/base/initial-value-template-builder'
import initialValueObj from './initialValueObj'

export default [
    ...T.defaults().filter(item => initialValueObj
        .some(initialValue => item.getId() !== initialValue.getId())),
    ...initialValueObj
]