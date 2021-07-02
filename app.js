
let clickUpgrades = {
    shovel: {
        price: 50,
        quantity: 0,
        multiplier: 2
    },
    arms: {
        price: 100,
        quantity: 0,
        multiplier: 20
    }
}

let automaticUpgrades = {
    monster: {
        price: 1000,
        quantity: 0,
        multiplier: 100
    },
    chuck: {
        price: 2500,
        quantity: 0,
        multiplier: 1000
    }
}

let cheese = 0;

function mine() {
    cheese = cheese +1
    console.log(cheese)
    document.getElementById('count').innerText= cheese
}

