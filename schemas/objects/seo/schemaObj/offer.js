/**
 * {
          price: '119.99',
          priceCurrency: 'USD',
          priceValidUntil: '2020-11-05',
          itemCondition: 'https://schema.org/UsedCondition',
          availability: 'https://schema.org/InStock',
          url: 'https://www.example.com/executive-anvil',
          seller: {
            name: 'Executive Objects',
          },
        },
 */

import MoneyInput from "../../../../parts/customInput/MoneyInput";

export default {
    type: "object",
    name: "offer",
    title: "Giá cho Schema Sản phẩm",
    fields: [
        {
            title: 'Giá của sản phẩm',
            name: 'price',
            type: "number",
            inputComponent: MoneyInput
        },
        {
            title: 'Ngày hết hạn của offers',
            description: "Nếu để trống sẽ là một tuần ở thời điểm truy cập",
            name: 'priceValidUntil',
            type: "date",
        },
        {
            title: 'Tình trạng của sản phẩm',
            description: "Nếu để trống sẽ là mới ",
            name: 'itemCondition',
            type: "string",
            options: {
                /**
                 * https://schema.org/DamagedCondition
                 * https://schema.org/NewCondition
                 * https://schema.org/RefurbishedCondition
                 * https://schema.org/UsedCondition
                 */
                list: [
                    { title: 'Mới', value: 'https://schema.org/NewCondition' },
                    { title: 'Bị hư hỏng một phần', value: 'https://schema.org/DamagedCondition' },
                    { title: 'Hàng Refurbished', value: 'https://schema.org/RefurbishedCondition' },
                    { title: 'Đồ cũ, đã qua sử dụng', value: 'https://schema.org/UsedCondition' },
                ], // <-- predefined values
            }
        },
        {
            title: 'Tình trạng mặt hàng ở Shop',
            description: "Nếu để trống sẽ là Còn hàng",
            name: 'availability',
            type: "string",
            options: {
                /**
                 * https://schema.org/Discontinued
                 * https://schema.org/InStock
                 * https://schema.org/InStoreOnly
                 * https://schema.org/LimitedAvailability
                 * https://schema.org/OnlineOnly
                 * https://schema.org/OutOfStock
                 * https://schema.org/PreOrder
                 * https://schema.org/PreSale
                 * https://schema.org/SoldOut
                 */
                list: [
                    { title: 'Còn hàng', value: 'https://schema.org/InStock' },
                    { title: 'Ngưng bán', value: 'https://schema.org/Discontinued' },
                    { title: 'Chỉ bán tại cửa hàng', value: 'https://schema.org/InStoreOnly' },
                    { title: 'Chỉ bán online', value: 'https://schema.org/OnlineOnly' },
                    { title: 'Còn với số lượng thấp', value: 'https://schema.org/LimitedAvailability' },
                    { title: 'Đặt trước (Pre-order)', value: 'https://schema.org/PreOrder' },
                    { title: 'Bán hết(Sold-out)', value: 'https://schema.org/SoldOut' },
                ], // <-- predefined values        },
            }
        },
    ],
}