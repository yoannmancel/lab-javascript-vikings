// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  battleCry() {
    return "Odin Owns You All!";
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health === 0) {
      return this.name + " has died in act of combat";
    }
    return this.name + " has received " + damage + " points of damage";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health === 0) {
      return "A Saxon has died in combat";
    }
    return "A Saxon has received " + damage + " points of damage";
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    const randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    // console.log(randomViking);
    console.log(randomSaxon);
    const damage = randomViking.attack();
    randomSaxon.receiveDamage(damage);

    if (randomSaxon.health === 0) {
      this.saxonArmy.pop(saxon);
    }
  }
}
