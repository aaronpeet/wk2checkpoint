
let clickUpgrades = {
    shovels: {
        price: 5,
        quantity: 0,
        multiplier: 2
    },
    arms: {
        price: 10,
        quantity: 0,
        multiplier: 2
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
    if (automaticUpgrades.monsters.quantity >= 1) {
        setInterval(() => { (cheese = cheese + (1000 * automaticUpgrades.monsters.quantity)); }, 3000);
    }
    /*   setInterval (cheese = cheese + (2500 * automaticUpgrades.chucks.quantity), 5000)
    }*/
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
        update()
     }
    document.getElementById('armCount').innerText = clickUpgrades.arms.quantity

}

function buyMonster() {
    if (cheese >= automaticUpgrades.monsters.price) {
        automaticUpgrades.monsters.quantity += 1
        cheese -= automaticUpgrades.monsters.price
        update()
     }
    document.getElementById('monsterCount').innerText = automaticUpgrades.monsters.quantity
   
}

function buyChuck() {
    if (cheese >= automaticUpgrades.chucks.price) {
        automaticUpgrades.chucks.quantity += 1
        cheese -= automaticUpgrades.chucks.price
        update()
     }
    document.getElementById('chuckCount').innerText = automaticUpgrades.chucks.quantity

}



function update() {
   
    document.getElementById('count').innerText = cheese
}

