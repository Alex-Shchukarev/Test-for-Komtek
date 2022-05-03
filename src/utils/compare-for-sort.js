import { reactive } from 'vue'

const order = () => {
    let orderState = reactive({ direction: 'А-Я' })

    const orderItems = (items, field) => {
        
        const compareItems = (item, otherItem) => {
            const itemName = item[field]
            const otherItemName = otherItem[field]

            if(orderState.direction === 'Я-А') {
                return evaluateDescOrder(itemName, otherItemName);
            } else {
                return evaluateAscOrder(itemName, otherItemName);
            }
        }

        items.sort(compareItems)
        changeOrderDirection()
    }

    const changeOrderDirection = () => {
        if(orderState.direction === 'Я-А') {
            orderState.direction = 'А-Я'
        } else if (orderState.direction === 'А-Я') {
            orderState.direction = 'Я-А'
        }
    }

    const evaluateAscOrder = (itemName, otherItemName) => {
        if(itemName < otherItemName) return 1
        if(itemName > otherItemName) return -1
        return 0
    }

    const evaluateDescOrder = (itemName, otherItemName) => {
        if(itemName > otherItemName) return 1
        if(itemName < otherItemName) return -1
        return 0
    }

    return {
        orderState, orderItems
    }
}

export default order