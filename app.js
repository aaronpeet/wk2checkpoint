
let clickUpgrades = {
    shovels: {
        price: 5,
        quantity: 0,
        multiplier: 2
    },
    arms: {
        price: 10,
        quantity: 0,
        multiplier: 4
    }
}

let automaticUpgrades = {
    monsters: {
        price: 15,
        quantity: 0,
        multiplier: 20
    },
    chucks: {
        price: 20,
        quantity: 0,
        multiplier: 40
    }
}

let cheese = 0
//let shovel = 0
//let arm = 0
//let monster = 0
//let chuck = 0

function mine() {
         cheese += 1
    
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

function buyArms() {
    if (cheese >= clickUpgrades.arms.price) {
        clickUpgrades.arms.quantity += 1
        cheese -= clickUpgrades.arms.price
        update()
     }
    document.getElementById('armCount').innerText = clickUpgrades.arms.quantity
    return arms.quantity
}

function buyMonster() {
    if (cheese >= automaticUpgrades.monsters.price) {
        automaticUpgrades.monsters.quantity += 1
        cheese -= automaticUpgrades.monsters.price
        update()
     }
    document.getElementById('monsterCount').innerText = automaticUpgrades.monsters.quantity
    return monsters.quantity
}

function buyChuck() {
    if (cheese >= automaticUpgrades.chucks.price) {
        automaticUpgrades.chucks.quantity += 1
        cheese -= automaticUpgrades.chucks.price
        update()
     }
    document.getElementById('chuckCount').innerText = automaticUpgrades.chucks.quantity
    return chucks.quantity
}


function update() {
    cheese = cheese
    document.getElementById('count').innerText = cheese
}

