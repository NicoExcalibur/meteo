class Character {
    constructor(nickname, characClass, health, attack) {
        this.nickname = nickname;
        this.characClass = characClass;
        this.health = health;
        this.attack = attack;
        this.level = 1;
    }

    get info() {
        return this.nickname + '(' + this.characClass + ") a " + this.health + " points de vie et est au niveau " + this.level + ".";
    }

    levelUp() {
        this.level++;
    }

    checkHealth() {
        if (this.health <= 0) {
            this.health == 0;
            console.log(this.nickname + ' a perdu !');
        }
    }
} 

class Wizard extends Character {

    constructor(nickname) {
        super(nickname, "magicien", 170, 90);
    }

    attackOtherCharacter(character) {
        character.health -= this.attack;
        console.log(this.nickname + " attaque " + character.nickname + " en lançant un sort ( " + this.attack + " dégâts ).");
        this.levelUp();
        character.checkHealth();
    }

    specialAttack(character) {
        character.health -= this.attack * 5;
        console.log(this.nickname + " avec son coup spécial puissance des arcanes " + character.nickname + " ( " + this.attack * 5 + " dégâts ).");
        this.levelUp();
        character.checkHealth();
    }    
}

class Warrior extends Character {

    constructor(nickname) {
        super(nickname, "guerrier", 350, 50);
    }

    attackOtherCharacter(character) {
        character.health -= this.attack;
        console.log(this.nickname + " attaque " + character.nickname + "  avec son épée ( " + this.attack + " dégâts ).");
        this.levelUp();
        character.checkHealth();
    }

    specialAttack(character) {
        character.health -= this.attack * 5;
        console.log(this.nickname + " attaque avec son coup spécial haches de guerre " + character.nickname + " ( " + this.attack * 5 + " dégâts ).");
        this.levelUp();
        character.checkHealth();
    }   
}


// fight plan
var gandalf = new Wizard('Gandalf');
var thor    = new Warrior('Thor');
console.log(thor.info);
console.log(gandalf.info);
gandalf.attackOtherCharacter(thor);
console.log(thor.info);
thor.attackOtherCharacter(gandalf);
console.log(gandalf.info);
gandalf.specialAttack(thor);