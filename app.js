
let clickUpgrades = {
    shovels: {
        price: 50,
        quantity: 0,
        multiplier: 2
    },
    arms: {
        price: 100,
        quantity: 0,
        multiplier: 2
    }
}

let automaticUpgrades = {
    monsters: {
        price: 1000,
        quantity: 0,
        multiplier: 4
    },
    chucks: {
        price: 2000,
        quantity: 0,
        multiplier: 6
    }
}

let cheese = 0



function armMine() {
    
    if (clickUpgrades.arms.quantity >= 1) {
        cheese = cheese + (4 * clickUpgrades.arms.quantity)
        }
    document.getElementById('count').innerText = cheese
    update()
  
}


function shovelMine() {
    if (clickUpgrades.shovels.quantity >= 1) {
        cheese = cheese + (2 * clickUpgrades.shovels.quantity)
    } else {
        cheese += 1
    }
       
    document.getElementById('count').innerText = cheese
        update()
}


function collectAutoUpgrades() {
    cheese = cheese + (1000 * automaticUpgrades.monsters.quantity)
    cheese = cheese + (2500 * automaticUpgrades.chucks.quantity)
    document.getElementById('count').innerText = cheese
}





function buyShovel() {
    if (cheese >= clickUpgrades.shovels.price) {
        clickUpgrades.shovels.quantity += 1
        cheese -= clickUpgrades.shovels.price
        clickUpgrades.shovels.price = (clickUpgrades.shovels.price * clickUpgrades.shovels.multiplier)
        update()
    
     }
    document.getElementById('shovelCount').innerText = clickUpgrades.shovels.quantity
    document.getElementById('shovelPrice').innerText = clickUpgrades.shovels.price
}


function buyArms() {
    if (cheese >= clickUpgrades.arms.price) {
        clickUpgrades.arms.quantity += 1
        cheese -= clickUpgrades.arms.price
        clickUpgrades.arms.price = (clickUpgrades.arms.price * clickUpgrades.arms.multiplier)
        update()
     }
    document.getElementById('armCount').innerText = clickUpgrades.arms.quantity
    document.getElementById('armPrice').innerText = clickUpgrades.arms.price

}

function buyMonster() {
    if (cheese >= automaticUpgrades.monsters.price) {
        automaticUpgrades.monsters.quantity += 1
        cheese -= automaticUpgrades.monsters.price
        automaticUpgrades.monsters.price = (automaticUpgrades.monsters.price * automaticUpgrades.monsters.multiplier)
        update()
     }
    document.getElementById('monsterCount').innerText = automaticUpgrades.monsters.quantity
    document.getElementById('monsterPrice').innerText = automaticUpgrades.monsters.price
}

function buyChuck() {
    if (cheese >= automaticUpgrades.chucks.price) {
        automaticUpgrades.chucks.quantity += 1
        cheese -= automaticUpgrades.chucks.price
        automaticUpgrades.chucks.price = (automaticUpgrades.chucks.price * automaticUpgrades.chucks.multiplier)
        update()
     }
    document.getElementById('chuckCount').innerText = automaticUpgrades.chucks.quantity
    document.getElementById('chuckPrice').innerText = automaticUpgrades.chucks.price
}



function update() {
   
    document.getElementById('count').innerText = cheese
}

setInterval(collectAutoUpgrades, 3000)