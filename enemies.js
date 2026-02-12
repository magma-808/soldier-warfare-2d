// enemies.js

class Enemy {
    constructor(type, health, damage) {
        this.type = type;
        this.health = health;
        this.damage = damage;
    }

    attack() {
        console.log(`${this.type} attacks for ${this.damage} damage!`);
    }
}

class Robot extends Enemy {
    constructor() {
        super('Robot', 100, 20);
    }
}

class FlyingEnemy extends Enemy {
    constructor() {
        super('Flying Enemy', 80, 15);
    }
}

class Boss extends Enemy {
    constructor() {
        super('Boss', 500, 30);
        this.minions = [];
    }

    summonMinions(count) {
        for (let i = 0; i < count; i++) {
            this.minions.push(new Minion());
        }
    }
}

class Minion extends Enemy {
    constructor() {
        super('Minion', 50, 10);
    }
}

let boss = new Boss();
let robot = new Robot();
let flyingEnemy = new FlyingEnemy();

// Boss Phase 1: Summon Minions
boss.summonMinions(3);
console.log(boss);

// Boss Phase 2: Attacks
if (boss.health > 0) {
    boss.attack();
}

// Attack from other enemies
robot.attack();
flyingEnemy.attack();