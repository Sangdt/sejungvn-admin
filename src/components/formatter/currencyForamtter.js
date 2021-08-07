const formatter = new Intl.NumberFormat('vn-VN', {
    // style: 'currency',
    // currency: 'VND',
    minimumFractionDigits: 2
})
export default formatter;

export const reFormat = (value) => {
    let match = value.match(/([+-]?[0-9|^.|^,]+)[\.|,]([0-9]+)$/);
    console.log("match",match)

    if (match !== null) {
        console.log("match",match)
        return Number.parseFloat(match[0].replace(/,/g, ''))
    }
    return '';
}