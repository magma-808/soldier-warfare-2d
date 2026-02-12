// game.js

// Game Core Logic

// Player Class
class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.position = { x: 0, y: 0 };
        this.inventory = [];
    }
    move(x, y) {
        this.position.x += x;
        this.position.y += y;
    }
    takeDamage(amount) {
        this.health -= amount;
        if(this.health <= 0) {
            console.log(`${this.name} has been defeated!`);
        }
    }
    addWeapon(weapon) {
        this.inventory.push(weapon);
    }
}

// Weapons System
class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}

// Game State Management
class GameState {
    constructor() {
        this.players = [];
        this.isGameOver = false;
    }
    addPlayer(player) {
        this.players.push(player);
    }
    endGame() {
        this.isGameOver = true;
        console.log(`Game Over!`);
    }
}

// Example Usage
let game = new GameState();
let player1 = new Player('Player1');
let sword = new Weapon('Sword', 25);
player1.addWeapon(sword);
game.addPlayer(player1);

// Move the player and take damage
player1.move(5, -3);
player1.takeDamage(20);

console.log(game);