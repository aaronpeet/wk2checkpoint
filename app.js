
let clickUpgrades = {
    shovels: {
        price: 5,
        quantity: 0,
        multiplier: 2
    },
    arms: {
        price: 200,
        quantity: 0,
        multiplier: 2
    }
}

let automaticUpgrades = {
    monsters: {
        price: 1000,
        quantity: 0,
        multiplier: 2
    },
    chucks: {
        price: 2500,
        quantity: 0,
        multiplier: 2
    }
}

let cheese = 0
//let shovel = 0
//let arm = 0
//let monster = 0
//let chuck = 0

function mine() {
    cheese = cheese + 1
    document.getElementById('count').innerText = cheese
    update()
    return cheese
}

function buyShovel() {
    if (cheese >= clickUpgrades.shovels.price) {
        clickUpgrades.shovels.quantity += 1
        cheese -= clickUpgrades.shovels.price
        update()
     }
    document.getElementById('shovelCount').innerText = clickUpgrades.shovels.quantity
    return shovels.quantity
}

function clickUpgade() {
    if (shovel = 1) {
        mine() * 2
    }
}

function buyMonster() {
    if (cheese >= automaticUpgrades.monsters.price) {
        cheese = cheese - automaticUpgrades.monsters.price
    }
}

function update() {
    cheese = cheese
    document.getElementById('count').innerText = cheese
}

