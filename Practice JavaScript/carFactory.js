
// this might look a hectic code, but it's easy to understand be patient!!

const carFactory = {
    creta: {
        stock: 44,
        cost: 400
    },
    thar: {
        stock: 232,
        cost: 500
    },
    fortuner: {
        stock: 20,
        cost: 900
    }
};// created an carFactory store object which have several cars in their stock with their respective prices

const orders = {
    items : [['thar', 3], ['creta', 2]]
}
const checkInventory = (order) => {
    console.log(`Checking availability of ${order.items.map(i => i[0]).join(', ')} and responding back in a while.`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const itemsArr = order.items;
            let inStock = itemsArr.every(item => carFactory[item[0]].stock >= item[1]);

            if(inStock){
                let total = 0;
                itemsArr.forEach(item => {
                    total += item[1] * carFactory[item[0]].cost;
                });
                console.log(`All of the cars are in stock. The total cost of the order is ${total}.`);
                resolve([order, total]);
            } else {
                reject(`The order could not be completed because some cars are out of stock.`);
            }
        }, 5000);
    });
}


checkInventory(orders).then((successHandler) => {
    return successHandler;
})

.catch((failureHandler) => {
    return failureHandler;
})


