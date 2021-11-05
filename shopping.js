const shoppingList = [
    {
        id: 1,
        name: "Milk",
        price: 2.99
    },

    {
        id: 2,
        name: "Eggs",
        price: 1.99
    },

    {
        id: 3,
        name: "Pizza Rolls",
        price: 3.99
    },

    {
        id: 4,
        name: "Salmon",
        price: 5.99
    },

    {
        id: 5,
        name: "Pineapple",
        price: 3.99
    },

    {
        id: 6,
        name: "Sandiwich Buns",
        price: 1.99
    },

    {
        id: 7,
        name: "Condiments",
        price: "~"
    }
]

const addToShoppingList = (foodItem) => {
    const lastIndex = shoppingList.length - 1
    const currentLastItem = shoppingList[lastIndex]
    const maxId = currentLastItem.id

    const idForNewItem = maxId + 1

    foodItem.id = idForNewItem

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateCreated = date+' '+time;

    foodItem.date = dateCreated

    shoppingList.push(foodItem)
}

const sourdough = {
    name: "Sourdough",
    price: 3.99
}

const allergyMeds = {
    name: "Zyrtec",
    price: 14.99
}

const dogFood = {
    name: "Dog Food",
    price: 10.99
}

const pasta = {
    name: "Pasta",
    price: 5.99
}

const juice = {
    name: "Orange Juice",
    price: 4.99
}

addToShoppingList (sourdough)
addToShoppingList (allergyMeds)
addToShoppingList (dogFood)
addToShoppingList (pasta)
addToShoppingList (juice)


for (foodItem of shoppingList) {
    console.log (`
        ${foodItem.name}
        $${foodItem.price}
        ${foodItem.date}
    `)
}