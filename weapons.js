class Weapon {
    constructor(name, type, damage, phase) {
        this.name = name;
        this.type = type;
        this.damage = damage;
        this.phase = phase;
    }

    getInfo() {
        return `Name: ${this.name}, Type: ${this.type}, Damage: ${this.damage}, Phase: ${this.phase}`;
    }
}

// Defining 30 weapons grouped by phases
const weapons = [
    // Basic Phase
    new Weapon("Basic Pistol", "Handgun", 10, "Basic"),
    new Weapon("Basic Rifle", "Rifle", 15, "Basic"),
    // ... (Add more Basic weapons)
    new Weapon("Basic Shotgun", "Shotgun", 20, "Basic"),

    // Explosive Phase
    new Weapon("Grenade", "Explosive", 30, "Explosive"),
    new Weapon("Rocket Launcher", "Explosive", 40, "Explosive"),
    // ... (Add more Explosive weapons)
    new Weapon("C4", "Explosive", 50, "Explosive"),

    // Energy Phase
    new Weapon("Laser Gun", "Energy", 60, "Energy"),
    new Weapon("Plasma Rifle", "Energy", 70, "Energy"),
    // ... (Add more Energy weapons)
    new Weapon("Energy Blaster", "Energy", 80, "Energy"),

    // Special Phase
    new Weapon("Homing Missile", "Special", 90, "Special"),
    new Weapon("Flame Thrower", "Special", 100, "Special"),
    // ... (Add more Special weapons)
    new Weapon("Sleep Gas Launcher", "Special", 110, "Special"),

    // Epic Phase
    new Weapon("Railgun", "Epic", 120, "Epic"),
    new Weapon("Frost Blaster", "Epic", 130, "Epic"),
    // ... (Add more Epic weapons)
    new Weapon("Thunder Cannon", "Epic", 140, "Epic"),

    // Legendary Phase
    new Weapon("Excalibur", "Legendary", 150, "Legendary"),
    new Weapon("Aether Bow", "Legendary", 160, "Legendary"),
    // ... (Add more Legendary weapons)
    new Weapon("The One Ring", "Legendary", 170, "Legendary")
];

class WeaponManager {
    constructor() {
        this.weapons = weapons;
        this.currentWeaponIndex = 0;
    }

    switchWeapon(index) {
        if (index >= 0 && index < this.weapons.length) {
            this.currentWeaponIndex = index;
        }
    }

    fireWeapon() {
        const weapon = this.weapons[this.currentWeaponIndex];
        console.log(`Firing ${weapon.getInfo()}`);
    }

    reloadWeapon() {
        const weapon = this.weapons[this.currentWeaponIndex];
        console.log(`Reloading ${weapon.getInfo()}`);
    }
}

// Exporting classes for external usage
module.exports = { Weapon, WeaponManager };